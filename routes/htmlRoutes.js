const router = require("express").Router();
const { Post, User } = require("../models");

router.get("/", async (req, res) => {
  console.log("i got here");
  try {
    // Get all posts and JOIN with user data
    const data = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    // Serialize data so the template can read it
    const posts = data.map((post) => post.get({ plain: true }));
    console.log("posts", posts);

    // Pass serialized data and session flag into template
    res.render("homepage", {
      posts,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/post/:id", async (req, res) => {
  try {
    const data = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    const post = data.get({ plain: true });

    res.render("post", {
      ...post,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
