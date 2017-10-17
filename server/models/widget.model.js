/**
 * Models a Widget object
 */
class Widget {
    constructor() {
        /** @type {string} */
        this._id = null;

        /** @type {string} */
        this.widgetType = null;

        /** @type {string} */
        this.pageId = null;

        /** @type {number} must be between 1-6 */
        this.size = null;

        /** @type {string} */
        this.text = null;

        /** @type {string} */
        this.width = null;

        /** @type {url} */
        this.url = null;
    }

    /**
     * Validate a widget object
     * @param {Widget} widget widget object to validate
     * @throws {String[]} list of errors encountered
     */
    static validate(widget) {
        var errors = [];

        if (!widget || Object.keys(widget).length == 0) {
            throw ['widget object expected. Received empty'];
        }
        if (!widget.widgetType) {
            errors.push('Widget type is required');
        }
        if (!widget.pageId) {
            errors.push('Page Id is required');
        }

        if (errors.length > 0) {
            throw errors;
        }
    }
}

const WidgetType = {
    Heading : 'Heading',
    Html: 'Html',
    YouTube: 'YouTube',
    Image: 'Image'
};



module.exports = { Widget: Widget, WidgetType: WidgetType };
