require("dotenv").config();

const express = require("express"),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  session = require("express-session"),
  app = express(),
  massive = require("massive"),
  brain = require("./controller"),
  bcrypt = require("bcryptjs");

app.use(bodyParser.json());
app.use(cors());

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
  })
);

app.get("/api/getBlogs", brain.getBlogs);

app.post(
  "/login",
  function(req, res, next) {
    var { create, pw, un } = req.body;

    if (create) {
      console.log("hitting create");

      bcrypt.hash(pw, 10, function(err, hash) {
        app
          .get("db")
          .insertPW(un, hash)
          .then(creds => {
            req.session.user = creds[0].id;
            console.log("req.session.user", req.session.user);
            res.status(200).send("your existence has been validated.");
          })
          .catch(e => console.log(e));
      });
    } else {
      next();
    }
  },
  function(req, res) {
    console.log("hitting next function");
    let { un, pw } = req.body;
    app
      .get("db")
      .getAdminCreds(un)
      .then(resp => {
        console.log("pw in db", resp[0].password);

        bcrypt.compare(pw, resp[0].password, function(err, rez) {
          console.log("results", rez);
          if (rez) {
            req.session.user = resp[0].id;
            res.send("your existence has been validated.");
          } else {
            res.status(401).send("Get outta here!");
          }
        });
      });
  }
);

//REQUIRE ADMIN TO BE SIGNED IN TO HIT THESE ENDPOINTS

app.post("/story", brain.addEditStory);

app.delete("/blog:id", brain.deleteBlog);
app.get("/blog:id", brain.getBlog);

app.get("/verification", function(req, res) {
  console.log("session", req.session.user);
  if (req.session.user) {
    res.send(true);
  } else {
    res.send(false);
  }
});

massive(process.env.CONNECTION).then(db => {
  app.set("db", db);
  app.listen(process.env.PORT, () =>
    console.log(`Big Brother listening on port ${process.env.PORT}`)
  );
});
