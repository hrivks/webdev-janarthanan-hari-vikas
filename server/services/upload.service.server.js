// Provides Image upload
// Module Route Root: '/api/upload'
const router = require('express').Router();
var multer = require('multer');
var upload = multer({ dest: __dirname + '/../../public/uploads' });

//#region: Upload image

router.post('/', upload.single('image'), function (req, res) {
    try {
        var myFile = req.file;
        res.json({ file: myFile.path.replace(/\\/g, '/').substring(myFile.path.indexOf('public')) });
    }
    catch (ex) {
        res.status(400).json(ex);
    }
});

//#endregion: upload image

module.exports = router;

