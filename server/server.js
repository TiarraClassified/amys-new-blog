require("dotenv").config();

const express = require("express"),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  session = require("express-session"),
  app = express(),
  massive = require("massive"),
  brain = require("./controller"),
  bcrypt = require("bcryptjs"),
  salt = bcrypt.genSaltSync(10);

app.use(bodyParser.json());

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
    let { create, pw, un } = req.body;

    if (create) {
      console.log("hitting create");
      var safePassword = bcrypt.hashSync(pw, salt);
      app
        .get("db")
        .insertPW(un, safePassword)
        .then(creds => {
          req.session.user = creds[0].id;
          console.log("req.session.user", req.session.user);
          res.status(200).send("your existence has been validated.");
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
        console.log(
          "pw in db",
          bcrypt.hashSync(pw, salt),
          "vs",
          resp[0].password
        );
        if (bcrypt.hashSync(pw, salt) === resp[0].password) {
          req.session.user = resp[0].id;
          console.log("new session user", req.session.user);
          res.send("your existence has been validated.");
        } else {
          res.status(401).send("Get outta here!");
        }
      });
  }
);

//REQUIRE ADMIN TO BE SIGNED IN TO HIT THESE ENDPOINTS

// app.post("/api/updateBackground", brain.background);

massive(process.env.CONNECTION).then(db => {
  app.set("db", db);
  app.listen(process.env.PORT, () =>
    console.log(`Big Brother listening on port ${process.env.PORT}`)
  );
});
