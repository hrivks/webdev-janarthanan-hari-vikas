// Provides CRUD for Widget model
// Module Route Root: '/api/page/:pageId/widget' and '/api/widget'
const router = require('express').Router({ mergeParams: true });
const Widget = require('../models/widget.model.js').Widget;
const WidgetType = require('../models/widget.model.js').WidgetType;

/** Exported objects */
const exp = {
    router: router, // router object
    api: {} // list of functions supported by this service
};

(function () {

    //#region : Data Store

    /** 
     * List of available widgets
     * @type {Widget[]}
     */
    let widgets = [
        { '_id': '123', 'widgetType': WidgetType.Heading, 'pageId': '321', 'size': 2, 'text': 'GIZMODO', 'order': 1 },
        { '_id': '234', 'widgetType': WidgetType.Heading, 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum', 'order': 2 },
        {
            '_id': '345', 'widgetType': WidgetType.Image, 'pageId': '321', 'width': '100%',
            'url': 'http://lorempixel.com/400/200/', 'order': 3
        },
        { '_id': '456', 'widgetType': WidgetType.Html, 'pageId': '321', 'text': '<p>Lorem ipsum</p>', 'order': 4 },
        { '_id': '567', 'widgetType': WidgetType.Heading, 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum', 'order': 5 },
        {
            '_id': '678', 'widgetType': WidgetType.YouTube, 'pageId': '321', 'width': '100%',
            'url': 'https://www.youtube.com/embed/AM2Ivdi9c4E', 'order': 6
        },
        { '_id': '789', 'widgetType': WidgetType.Html, 'pageId': '321', 'text': '<p>Lorem ipsum</p>', 'order': 7 }
    ];

    //#endregion


    //#region: Create Widget
    // Route: [POST] '/api/page/:pageId/widget'
    router.post('/', function (req, res) {
        try {
            res.json(createWidget(req.params.pageId, req.body));
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
        widget.pageId = pageId;
        Widget.validate(widget);
        let id = Math.floor(Math.random() * 10000);

        // ensure generated ID is unique
        while (widgets.find(w => w._id === id.toString())) {
            id++;
        }

        widget._id = id.toString();
        widget.pageId = pageId;
        widgets.push(widget);
        return widget;
    }

    //#endregion: Create Widget


    //#region: find all widgets by page id

    // Route: [GET] '/api/page/:pageId/widget'
    router.get('/', function (req, res) {
        try {
            res.json(findWidgetsByPageId(req.params.pageId));
        }
        catch (ex) {
            res.status(400).json(ex);
        }
    });

    /**
     * Find widget by Page Id
     * @param {String} pageId id of the page
     * @returns {Widget} widgets corresponding to the given Id; null if id widget doesn't exit
     */
    function findWidgetsByPageId(pageId) {
        return widgets.filter(w => w.pageId === pageId);
    }

    //#endregion: find all widgets by page id


    //#region: find widgets by Id

    // Route: [GET] 'api/widget/:widgetId'
    router.get('/:widgetId', function (req, res) {
        try {
            res.json(findWidgetById(req.params.widgetId));
        }
        catch (ex) {
            res.status(400).json(ex);
        }
    });

    /**
     * Find widget by Id
     * @param {String} widgetId id of the widget
     * @returns {Widget} widget corresponding to the given Id; null if id widget doesn't exit
     */
    function findWidgetById(widgetId) {
        const widget = widgets.find(w => w._id === widgetId);
        if (widget) {
            return widget;
        } else {
            throw ['Widget with id ' + widgetId + ' does not exist'];
        }
    }

    //#endregion: find widgets by Id


    //#region: Update widget

    // Route: [PUT] '/api/widget/:widgetId'
    router.put('/:widgetId', function (req, res) {
        try {
            res.json(updateWidget(req.params.widgetId, req.body, { initial: req.query.initial, final: req.query.final }));
        }
        catch (ex) {
            res.status(400).json(ex);
        }
    });

    /**
     * Update widget by Id
     * @param {string} widgetId Id of the widget to update
     * @param {Widget} widget updated widget object
     * @returns {Widget} the updated widget object
     */
    function updateWidget(widgetId, widget) {
        Widget.validate(widget);

        const toUpdateIndex = widgets.findIndex(w => w._id === widgetId);
        if (toUpdateIndex > -1) {
            widgets[toUpdateIndex] = widget;
            return widget;
        } else {
            throw ['Widget with id ' + widgetId + ' does not exist'];
        }
    }

    //#endregion: Update widget


    //#region: Reorder widget

    // Route: [PUT] '/api/page/:pageId/widget?initial = index1 & final = index2'
    router.put('/', function (req, res) {
        try {
            res.json(reorderWidgets(req.params.pageId, { initial: req.query.initial, final: req.query.final }));
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
            const widgetsInThisPage = widgets.filter(w => w.pageId === pageId);
            const widgetAtInitPos = widgetsInThisPage[order.initial];
            const widgetAtFinalPos = widgetsInThisPage[order.final];

            // remove widget at initial position
            widgets.splice(widgets.indexOf(widgetAtInitPos), 1);
            // insert at final position
            widgets.splice(widgets.indexOf(widgetAtFinalPos), 0, widgetAtInitPos);

            return widgets;
        } else {
            throw ['Inital and final order position is required'];
        }
    }
    //#endregion: Reorder widget

    //#region: Delete widget

    // Route: [DELETE] '/api/widget/:widgetId'
    router.delete('/:widgetId', function (req, res) {
        try {
            res.json(deleteWidget(req.params.widgetId));
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
        const toDeleteIndex = widgets.findIndex(w => w._id === widgetId);
        const toDelete = widgets[toDeleteIndex];
        if (toDeleteIndex > -1) {
            widgets.splice(toDeleteIndex, 1);
        } else {
            throw ['Widget with id ' + widgetId + ' does not exist'];
        }

        return toDelete;
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