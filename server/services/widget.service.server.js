// Route: /api/widget

const router = require('express').Router();

router.get('/', function(req, res) {
    res.send('create widget');
})

module.exports = router;