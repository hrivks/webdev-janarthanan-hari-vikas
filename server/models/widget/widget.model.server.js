/**
 * Widget Model
 */
module.exports = (function () {
    const q = require('q');
    const mongoose = require('mongoose');
    const WidgetSchemas = require('./widget.schema.server');
    const PageSchema = require('../page/page.schema.server.js');
    const PageModel = mongoose.model('PageModel', PageSchema);
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
    WidgetModel.reorderWidgets = reorderWidgets;

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
                def.reject(err);
            } else if (!page) {
                def.reject({ message: 'No page with the given id exists' });
            }
            else {

                // get the last widget on the page
                WidgetModel
                    .findOne({ pageId: pageId })
                    .sort({ order: -1 })
                    .then((lastWidget) => {

                        // compute order of new widget
                        widget.order = lastWidget ? lastWidget.order + 1 : 0;
                        WidgetModel.create(widget, (err, createdWidget) => {
                            if (err) {
                                def.reject(err);
                            } else {
                                def.resolve(createdWidget);
                            }
                        });

                    }, (err) => {
                        def.reject(err);
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

        let model = WidgetModel;
        switch (widget.widgetType) {
            case 'Heading':
                model = HeadingWidgetModel;
                break;
            case 'Image':
                model = ImageWidgetModel;
                break;
            case 'YouTube':
                model = YouTubeWidgetModel;
                break;
        }

        return model.findByIdAndUpdate(widgetId, widget, { new: true });
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
    function reorderWidgets(pageId, start, end) {
        var def = q.defer();

        let widgetAtStart, widgetAtEnd;

        // get widget at start index
        WidgetModel
            .findOne({ pageId: pageId, order: { $gte: start } })
            .then((wAtStart) => {
                widgetAtStart = wAtStart;

                // get widget at end index
                WidgetModel
                    .findOne({ pageId: pageId, order: { $gte: end } })
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