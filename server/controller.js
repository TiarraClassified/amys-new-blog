module.exports = {
  //turn this into a massive query rather than sql query
  //finddoc()? or can possibly just do db.tablename

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
  }
};
