/**
 * Widget Model
 */
module.exports = (function () {
    const q = require('q');
    const mongoose = require('mongoose');
    const WidgetSchemas = require('./widget.schema.server');
    const PageModel = require('../page/page.model.server.js');

    const WidgetModel = mongoose.model('WidgetModel', WidgetSchemas.WidgetSchema);

    // #region: Widget Types

    const HeadingWidgetModel = WidgetModel.discriminator('Heading', WidgetSchemas.HeadingWidgetSchema);
    const ImageWidgetModel = WidgetModel.discriminator('Image', WidgetSchemas.ImageWidgetSchema);
    const YouTubeWidgetModel = WidgetModel.discriminator('YouTube', WidgetSchemas.YouTubeWidgetSchema);
    const HtmlWidgetModel = WidgetModel.discriminator('Html', WidgetSchemas.HtmlWidgetSchema);

    // #endregion: Widget Types

    // API
    WidgetModel.createWidget = createWidget;
    WidgetModel.findWidgetsByPageId = findWidgetsByPageId;
    WidgetModel.findWidgetById = findWidgetById;
    WidgetModel.updateWidget = updateWidget;
    WidgetModel.deleteWidget = deleteWidget;
    WidgetModel.reorderWidget = reorderWidget;

    // Implimentation

    /**
     * Validate a website object
     * @param {WidgetSchema} widget website object to validate
     * @throws {String[]} list of errors encountered
     */
    function validate(widget) {
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

    /**
     * Create a new website
     * @param {string} pageId id of the user who created the website
     * @param {WidgetSchema} widget website object to create
     * @returns {Promise<WidgetSchema>} promise that gets resolved to the created website object
     */
    function createWidget(pageId, widget) {
        var def = q.defer();

        widget.pageId = pageId;
        validate(widget);
        PageModel.findById(pageId, (err, page) => {
            if (err) {
                def.reject(err.message);
            } else if (!page) {
                def.reject({ message: 'No page with the given id exists' });
            }
            else {
                widget.order = page.widgets ? page.widgets.length : 0;
                WidgetModel.create(widget, (err, createdWidget) => {
                    if (err) {
                        def.reject(err.message);
                    } else {
                        if (page.widgets) {
                            page.widgets.push(createdWidget);
                        } else {
                            page.widgets = [createdWidget];
                        }
                        page.save();
                        def.resolve(createdWidget);
                    }
                });
            }
        });

        return def.promise;
    }

    /**
     * Find website by website id
     * @param {string} widgetId 
     * @returns {DocumentQuery<WidgetSchema>} query that gets resolved to the website object
     */
    function findWidgetById(widgetId) {
        return WidgetModel.findById(widgetId);
    }

    /**
     * Find website created by specified user
     * @param {string} userId id of user
     * @returns {DocumentQuery<[WidgetSchema]>} query that gets resolved to the list of website objects
     */
    function findWidgetsByPageId(pageId) {
        return WidgetModel.find({ pageId: pageId });
    }

    /**
     * Update website by website id
     * @param {string} widgetId 
     * @param {WidgetSchema} widget 
     * @returns  {DocumentQuery<WidgetSchema>} query that gets resolved to the updated website object
     */
    function updateWidget(widgetId, widget) {
        validate(widget);
        return WidgetModel.findByIdAndUpdate(widgetId, { url: 'test' });
    }

    /**
     * Delete website by website id
     * @param {string} widgetId 
     * @returns {DocumentQuery} query that resolves on successful deletion
     */
    function deleteWidget(widgetId) {
        return WidgetModel.remove({ _id: widgetId });
    }

    /**
     * Reorder widgets
     * @param {string} pageId 
     * @param {number} start 
     * @param {number} end 
     */
    function reorderWidget(pageId, start, end) {
        var def = q.defer();

        let widgetAtStart, widgetAtEnd;

        // get widget at start index
        WidgetModel
            .findOne({ pageId: pageId, order: start })
            .then((wAtStart) => {
                widgetAtStart = wAtStart;

                // get widget at end index
                WidgetModel
                    .findOne({ pageId: pageId, order: end })
                    .then((wAtEnd) => {
                        widgetAtEnd = wAtEnd;

                        // update indices
                        if (widgetAtStart) {
                            widgetAtStart.order = end;
                            widgetAtStart.save();
                        }

                        if (widgetAtEnd) {
                            widgetAtEnd.order = start;
                            widgetAtEnd.save();
                        }

                        def.resolve();

                    }, (err) => {
                        def.reject(err);
                    })
            }, (err) => {
                def.reject(err);
            });

        return def.promise;
    }

    return WidgetModel;
})();