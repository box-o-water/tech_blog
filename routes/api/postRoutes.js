const router = require("express").Router();
const { Post } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const data = await Post.findAll();
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
