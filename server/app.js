// Route: /api
const router = require('express').Router();

//#region: api route definitions

// User route: /api/user
router.use('/user', require('./services/user.service.server.js').router);


// Website route: /api/website
router.use('/user/:userId/website', require('./services/website.service.server.js').router);
router.use('/website', require('./services/website.service.server.js').router);


// Page route: /api/page
router.use('/website/:websiteId/page', require('./services/page.service.server.js').router);
router.use('/page', require('./services/page.service.server.js').router);


// Widget route: /api/widget
router.use('/page/:pageId/widget', require('./services/widget.service.server.js').router);
router.use('/widget', require('./services/widget.service.server.js').router);

//#endregion

module.exports = router;


