require("dotenv").config();

const express = require("express"),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  session = require("express-session"),
  app = express(),
  massive = require("massive"),
  brain = require("./controller");

app.use(bodyParser.json());

// app.use(session({
//     secret: process.env.SECRET,
//     resave: false,
//     saveUninitialized: true
// }));

app.get("/api/getBlogs", brain.getBlogs);

// app.post("/api/updateBackground", brain.background);

massive(process.env.CONNECTION).then(db => {
  app.set("db", db);
  app.listen(process.env.PORT, () =>
    console.log(`Big Brother listening on port ${process.env.PORT}`)
  );
});
