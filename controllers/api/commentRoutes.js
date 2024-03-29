const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const data = await Comment.create({
      ...req.body,
      post_id: req.params.id,
      user_id: req.session.user_id,
    });
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
