/**
 * Website schema
 */
module.exports = (function () {
    var mongoose = require('mongoose');

    var WebsiteSchema = mongoose.Schema({
        developerId: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
        name: String,
        description: String,
        dateCreated: { type: Date, default: Date.now },
        pages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'pages' }]
    }, { collection: 'websites' });

    return WebsiteSchema;
})();