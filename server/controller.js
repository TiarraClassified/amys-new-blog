module.exports = {
  getBlogs: (req, res) => {
    var db = req.app.get("db");
    db.getBlogs().then(blogs => {
      res.send(blogs);
    });
  },
  addEditStory: (req, res) => {
    let { background, id, content, title } = req.body;
    console.log("backend stats", id, background, content);

    if (id == 0) {
      console.log("hitting id=0");
      let date = new Date();
      let newdate = date.toString().substr(3, 12);
      req.app
        .get("db")
        .addStory(background, content, title, newdate)
        .then(story => {
          res.send(story);
        });
    } else {
      req.app
        .get("db")
        .updateStory(background, content, title, id)
        .then(story => {
          console.log("it worked", story);
          res.send(story);
        });
    }
  },
  deleteBlog: (req, res) => {
    let { id } = req.params;
    console.log("hitting delete", id);
    req.app
      .get("db")
      .deleteBlog(id)
      .then(results => {
        res.send("Farenheit 451");
      })
      .catch(err => console.log(err));
  },
  getBlog: (req, res) => {
    let { id } = req.params;
    req.app
      .get("db")
      .getBlog(id)
      .then(blog => {
        console.log("getting blog", blog);
        res.send(blog[0]);
      });
  },
  getRandom: (req, res) => {
    //generate array of 10 random numbers. But the numbers need to be in between the max and min number of stories.
  }
};
