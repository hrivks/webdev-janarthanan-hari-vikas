const router = require('express').Router();

router.get('/', function(req, res) {
    res.send('create page');
});

module.exports = router;