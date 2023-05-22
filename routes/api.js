const router = require('express').Router();

router.use('/posts', require('./api/blog'));
router.use('/authors', require('./api/author'));

module.exports = router;
