module.exports = {
  getBlogs: (req, res) => {
    var db = req.app.get("db");
    db.getBlogs().then(blogs => {
      res.send(blogs);
    });
  },
  addEditStory: (req, res) => {
    let { background, id, content } = req.body;
    console.log("backend stats", id, background, content);

    req.app
      .get("db")
      .updateStory(background, content, id)
      .then(story => {
        console.log("it worked", story);
        res.send(story);
      });
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
  }
};
