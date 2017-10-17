// Provides CRUD for Widget model
// Module Route Root: '/api/page/:pageId/widget' and '/api/widget'
const router = require('express').Router({mergeParams: true});
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
        { '_id': '123', 'widgetType': WidgetType.Heading, 'pageId': '321', 'size': 2, 'text': 'GIZMODO' },
        { '_id': '234', 'widgetType': WidgetType.Heading, 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum' },
        {
            '_id': '345', 'widgetType': WidgetType.Image, 'pageId': '321', 'width': '100%',
            'url': 'http://lorempixel.com/400/200/'
        },
        { '_id': '456', 'widgetType': WidgetType.Html, 'pageId': '321', 'text': '<p>Lorem ipsum</p>' },
        { '_id': '567', 'widgetType': WidgetType.Heading, 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum' },
        {
            '_id': '678', 'widgetType': WidgetType.YouTube, 'pageId': '321', 'width': '100%',
            'url': 'https://www.youtube.com/embed/AM2Ivdi9c4E'
        },
        { '_id': '789', 'widgetType': WidgetType.Html, 'pageId': '321', 'text': '<p>Lorem ipsum</p>' }
    ];

    //#endregion


    //#region: Create Widget
    // Route: [POST] '/api/page/:pageId/widget'
    router.post('/', function (req, res) {
        try {
            res.send(createWidget(req.params.pageId, req.body));
        }
        catch (ex) {
            res.status(400).send(ex);
        }
    });

    /**
     * Create a new widget
     * @param {String} pageId id of the page in which the widget is to be added
     * @param {Widget} widget widget object created
     * @returns {Widget} the created widget object
     */
    function createWidget(pageId, widget) {
        Widget.validate(widget);
        let id = Math.floor(Math.random() * 10000);

        // ensure generated ID is unique
        while (findWidgetById(id.toString())) {
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
            res.send(findWidgetsByPageId(req.params.pageId));
        }
        catch (ex) {
            res.status(400).send(ex);
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

    // Route: [GET] '/widget/:widgetId'
    router.get('/:widgetId', function (req, res) {
        try {
            res.send(findWidgetById(req.params.widgetId));
        }
        catch (ex) {
            res.status(400).send(ex);
        }
    });

    /**
     * Find widget by Id
     * @param {String} widgetId id of the widget
     * @returns {Widget} widget corresponding to the given Id; null if id widget doesn't exit
     */
    function findWidgetById(widgetId) {
        return widgets.find(w => w._id === widgetId);
    }

    //#endregion: find widgets by Id


    //#region: Update widget

    // Route: [PUT] '/api/widget/:widgetId'
    router.put('/:widgetId', function (req, res) {
        try {
            res.send(updateWidget(req.params.widgetId, req.body));
        }
        catch (ex) {
            res.status(400).send(ex);
        }
    });

    /**
     * Update widget by Id
     * @param {String} widgetId Id of the widget to update
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


    //#region: Delete widget

    // Route: [DELETE] '/api/widget/:widgetId'
    router.delete('/:widgetId', function (req, res) {
        try {
            res.send(deleteWidget(req.params.widgetId));
        }
        catch (ex) {
            res.status(400).send(ex);
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

    exp.api = {
        createWidget: createWidget,
        findWidgetsByPageId: findWidgetsByPageId,
        findWidgetById: findWidgetById,
        updateWidget: updateWidget,
        deleteWidget: deleteWidget
    };

})();


module.exports = exp;