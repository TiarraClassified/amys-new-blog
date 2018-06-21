module.exports = {
  getBlogs: (req, res) => {
    var db = req.app.get("db");
    db.getBlogs().then(blogs => {
      res.send(blogs);
    });
  },
  background: (req, res) => {
    let { background, id } = req.body;
    req.app
      .get("db")
      .updateBackground([background, id])
      .then(blog => {
        res.send(blog);
      });
  },
  deleteBlog: (req, res) => {
    let { id } = req.params;
    console.log("hitting delete", id);
    req.app
      .get("db")
      .deleteBlog(id)
      .then(results => {
        res.send("Literacy Destroyed");
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
