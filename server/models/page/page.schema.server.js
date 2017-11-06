/**
 * Page schema
 */
module.exports = (function () {
    const mongoose = require('mongoose');
    const WidgetSchema = require('../widget/widget.schema.server.js');

    const PageSchema = new mongoose.Schema({
        websiteId: { type: mongoose.Schema.Types.ObjectId, ref: 'websites' },
        name: String,
        title: String,
        description: String,
        dateCreated: { type: Date, default: Date.now }
    }, { collection: 'pages' });

    return PageSchema;
})();