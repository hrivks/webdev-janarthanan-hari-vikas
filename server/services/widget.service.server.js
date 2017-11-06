// Provides CRUD for Widget model
// Module Route Root: '/api/page/:pageId/widget' and '/api/widget'
const router = require('express').Router({ mergeParams: true });
const WidgetModel = require('../models/widget/widget.model.server.js');
/** Exported objects */
const exp = {
    router: router, // router object
    api: {} // list of functions supported by this service
};

(function () {

    //#region: Create Widget
    // Route: [POST] '/api/page/:pageId/widget'
    router.post('/', function (req, res) {
        try {
            createWidget(req.params.pageId, req.body)
                .then((widget) => {
                    res.json(widget);
                }, (err) => {
                    res.status(400).json([err.message]);
                })
                .catch((err) => {
                    res.status(400).json([err.message]);
                });
        }
        catch (ex) {
            res.status(400).json(ex);
        }
    });

    /**
     * Create a new widget
     * @param {String} pageId id of the page in which the widget is to be added
     * @param {Widget} widget widget object created
     * @returns {Widget} the created widget object
     */
    function createWidget(pageId, widget) {
        return WidgetModel.createWidget(pageId, widget);
    }

    //#endregion: Create Widget


    //#region: find all widgets by page id

    // Route: [GET] '/api/page/:pageId/widget'
    router.get('/', function (req, res) {
        findWidgetsByPageId(req.params.pageId)
            .then((widgets) => {
                res.json(widgets);
            }, (err) => {
                res.status(400).json([err.message]);
            })
            .catch((err) => {
                res.status(400).json([err.message]);
            });
    });

    /**
     * Find widget by Page Id
     * @param {String} pageId id of the page
     * @returns {Widget} widgets corresponding to the given Id; null if id widget doesn't exit
     */
    function findWidgetsByPageId(pageId) {
        return WidgetModel.findWidgetsByPageId(pageId);
    }

    //#endregion: find all widgets by page id


    //#region: find widgets by Id

    // Route: [GET] 'api/widget/:widgetId'
    router.get('/:widgetId', function (req, res) {
        findWidgetById(req.params.widgetId)
            .then((widget) => {
                res.json(widget);
            }, (err) => {
                res.status(400).json([err.message]);
            })
            .catch((err) => {
                res.status(400).json([err.message]);
            });
    });

    /**
     * Find widget by Id
     * @param {String} widgetId id of the widget
     * @returns {Widget} widget corresponding to the given Id; null if id widget doesn't exit
     */
    function findWidgetById(widgetId) {
        return WidgetModel.findWidgetById(widgetId);
    }

    //#endregion: find widgets by Id


    //#region: Update widget

    // Route: [PUT] '/api/widget/:widgetId'
    router.put('/:widgetId', function (req, res) {
        updateWidget(req.params.widgetId, req.body)
            .then((widget) => {
                res.json(widget);
            }, (err) => {
                res.status(400).json([err.message]);
            })
            .catch((err) => {
                res.status(400).json([err.message]);
            });
    });

    /**
     * Update widget by Id
     * @param {string} widgetId Id of the widget to update
     * @param {Widget} widget updated widget object
     * @returns {Widget} the updated widget object
     */
    function updateWidget(widgetId, widget) {
        return WidgetModel.updateWidget(widgetId, widget);
    }

    //#endregion: Update widget


    //#region: Reorder widget

    // Route: [PUT] '/api/page/:pageId/widget?initial = index1 & final = index2'
    router.put('/', function (req, res) {
        try {
            reorderWidgets(req.params.pageId, { initial: req.query.initial, final: req.query.final })
                .then(() => {
                    res.status(200);
                }, (err) => {
                    res.status(400).json([err.message]);
                })
                .catch((err) => {
                    res.status(400).json([err.message]);
                });
        }
        catch (ex) {
            res.status(400).json(ex);
        }
    });

    /**
     * Update widget by Id
     * @param {string} pageId Id of the page 
     * @param {Widget} widget widget object to reorder
     * @param {{initial: number, final: number}} order initial and final order of the widget
     * @return {Widget[]} list of updated widgets
     */
    function reorderWidgets(pageId, order) {

        if (order.final && order.initial && order.final !== order.initial) {
            return WidgetModel.reorderWidget(pageId, order.initial, order.final);
        } else {
            throw ['Inital and final order position is required'];
        }
    }
    //#endregion: Reorder widget

    //#region: Delete widget

    // Route: [DELETE] '/api/widget/:widgetId'
    router.delete('/:widgetId', function (req, res) {
        try {
            deleteWidget(req.params.widgetId)
                .then(() => {
                    res.status(200);
                }, (err) => {
                    res.status(400).json([err.message]);
                })
                .catch((err) => {
                    res.status(400).json([err.message]);
                });
        }
        catch (ex) {
            res.status(400).json(ex);
        }
    });

    /**
     * Delete widget by Id
     * @param {String} widgetId Id of the widget to delete
     * @returns {Widget} widget that was deleted, null if the id doesn't exist
     */
    function deleteWidget(widgetId) {
        return WidgetModel.deleteWidget(widgetId);
    }

    //#endregion: Delete widget


    // #region: Get Flickr API key

    // Route: [GET] 'api/widget/Flickr/ApiKey'
    router.get('/Flickr/ApiKey', function (req, res) {
        try {
            var flickrApiKey = process.env.FLICKR_API_KEY || ''; // FOR LOCAL, SPECIFY API KEY HERE
            res.json({ key: flickrApiKey });
        }
        catch (ex) {
            res.status(400).json(ex);
        }
    });

    //#endregion: Get Flickr API key


    exp.api = {
        createWidget: createWidget,
        findWidgetsByPageId: findWidgetsByPageId,
        findWidgetById: findWidgetById,
        updateWidget: updateWidget,
        deleteWidget: deleteWidget
    };

})();


module.exports = exp;