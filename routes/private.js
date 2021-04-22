const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ posts: { title: "test", description: "random desc" } });
});

module.exports = router;
