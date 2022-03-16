const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes.js');
const commentRoutes = require('./comment-routes.js');
const homeRoutes = require('./home-routes.js');

router.use('./user-routes.js');
router.use('./post-routes.js');
router.use('./comment-routes.js');
router.use('/', homeRoutes);

module.exports = router;