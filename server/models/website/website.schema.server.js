/**
 * Website schema
 */
module.exports = (function () {
    var mongoose = require('mongoose');

    var WebsiteSchema = new mongoose.Schema({
        developerId: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
        name: String,
        description: String,
        dateCreated: { type: Date, default: Date.now }
    }, { collection: 'websites' });

    return WebsiteSchema;
})();