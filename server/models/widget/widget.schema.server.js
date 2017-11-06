/**
 * WidgetSchema schema
 */
module.exports = (function () {
    const mongoose = require('mongoose');
    const PageSchema = require('../page/page.schema.server.js');

    const options = { discriminatorKey: 'widgetType', collection: 'widgets' };

    /** Generic Widget Schema */
    const WidgetSchema = new mongoose.Schema({
        name: String,
        text: String,
        description: String,
        order: Number,
        pageId: { type: mongoose.Schema.Types.ObjectId, ref: 'pages' },
        dateCreated: { type: Date, default: Date.now }
    }, options);

    /** Heading Widget schema */
    const HeadingWidgetSchema = new mongoose.Schema({
        size: Number
    }, options);

    /** Image Widget schema */
    const ImageWidgetSchema = new mongoose.Schema({
        url: String,
        size: Number
    }, options);

    /** YouTube Widget schema */
    const YouTubeWidgetSchema = new mongoose.Schema({
        url: String,
        text: String,
        size: Number
    }, options);

    /** Html Widget schema */
    const HtmlWidgetSchema = new mongoose.Schema({
    }, options);

    /** Text widget schema */
    const TextWidgetSchema = new mongoose.Schema({
        formatted: Boolean,
        rows: Number
    }, options)

    return {
        WidgetSchema: WidgetSchema,
        HeadingWidgetSchema: HeadingWidgetSchema,
        ImageWidgetSchema: ImageWidgetSchema,
        YouTubeWidgetSchema: YouTubeWidgetSchema,
        HtmlWidgetSchema: HtmlWidgetSchema,
        TextWidgetSchema: TextWidgetSchema
    };

})();