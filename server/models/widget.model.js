/**
 * Models a Widget object
 */
class Widget {
    constructor() {
        this._id = null;
        this.widgetType = null;
        this.pageId = null;
        this.size = null;
        this.text = null;
        this.width = null;
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

class WidgetType {
}

WidgetType.prototype.Heading = 'Heading';
WidgetType.prototype.Html = 'Html';
WidgetType.prototype.YouTube = 'YouTube';
WidgetType.prototype.Image = 'Image';

module.exports = { Widget: Widget, WidgetType: WidgetType };
