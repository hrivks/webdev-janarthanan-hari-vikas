// Provides CRUD for Page model
// Module Route Root: '/api/page' and '/api/website/:websiteId/page'
const router = require('express').Router({mergeParams: true});
const Page = require('../models/page.model.js');
const WidgetService = require('./widget.service.server.js');


/** Exported objects */
const exp = {
    router: router, // router object
    api: {} // list of functions supported by this service
};

(function (router) {

    //#region : Data Store

    /** 
     * List of available Pages
     * @type {Page[]}
     */
    let pages = [
        { '_id': '321', 'name': 'Post 1', 'websiteId': '456', 'description': 'Lorem' },
        { '_id': '432', 'name': 'Post 2', 'websiteId': '456', 'description': 'Lorem' },
        { '_id': '543', 'name': 'Post 3', 'websiteId': '456', 'description': 'Lorem' },
        { '_id': '555', 'name': 'Post 4', 'websiteId': '789', 'description': 'Lorem' },
        { '_id': '666', 'name': 'Post 5', 'websiteId': '789', 'description': 'Lorem Epsum 2' },
        { '_id': '777', 'name': 'Post 6', 'websiteId': '789', 'description': 'Lorem Epsum' }
    ];

    //#endregion


    //#region: Create Page

    // route: [POST] '/api/website/:websiteId/page'
    router.post('/', function (req, res) {
        try {
            res.send(createPage(req.params.websiteId, req.body));
        }
        catch (ex) {
            res.status(400).send(ex);
        }
    });

    /**
     * Create a new page
     * @param {String} websiteId id of the user who created the page
     * @param {Page} page page object created by the user
     * @returns the created page object
     */
    function createPage(websiteId, page) {
        let id = Math.floor(Math.random() * 10000);

        // ensure generated ID is unique
        while (pages.find(p => p._id === id)) {
            id++;
        }

        page._id = id.toString();
        page.websiteId = websiteId;
        pages.push(page);
        return page;
    }
    //#endregion : Create Page


    //#region: Find all pages by website id

    // route: [GET] '/api/website/:websiteId/page'
    router.get('/', function (req, res) {
        try {
            res.send(findPagesBywebsiteId(req.params.websiteId));
        }
        catch (ex) {
            res.status(400).send(ex);
        }
    });

    /**
     * Get all pages in the website specified by website id
     * @param {String} websiteId id of the website
     * @returns {Page[]} list of pages in the website specified by the given id
     */
    function findPagesBywebsiteId(websiteId) {
        return pages.filter(p => p.websiteId === websiteId);
    }

    //#endregion: Find all pages by website id


    //#region: Find page by id

    //route: [GET] '/api/page/:pageId'
    router.get('/:pageId', function (req, res) {
        try {
            res.send(findPageById(req.params.pageId));
        }
        catch (ex) {
            res.status(400).send(ex);
        }
    });

    /**
     * Find page by Id
     * @param pageId id of the page
     * @returns page corresponding to the given Id; null if id page doesn't exit
     */
    function findPageById(pageId) {
        const page = pages.find(p => p._id === pageId);
        if(page) {
            return page;
        } else {
            throw ['Page with Id ' + pageId + 'does not exist'];
        }
    }

    //#endregion: Find page by id


    //#region: Update page

    // route: [PUT] '/api/page/:pageId'
    router.put('/:pageId', function (req, res) {
        try {
            res.send(updatePage(req.params.pageId, req.body));
        }
        catch (ex) {
            res.status(400).send(ex);
        }
    });

    /**
     * Update page by Id
     * @param {String} pageId Id of the page to update
     * @param {String} page updated page object
     * @returns {Page} the updated page object
     */
    function updatePage(pageId, page) {
        Page.validate(page);
        const toUpdateIndex = pages.findIndex(p => p._id === pageId);
        if (toUpdateIndex > -1) {
            pages[toUpdateIndex] = page;
            return page;
        } else {
            throw ['Page with id ' + pageId + ' does not exist'];
        }
    }

    //#endregion: Update page


    //#region: Delete Page

    // route: [DELETE] '/api/page/:pageId'
    router.delete('/:pageId', function (req, res) {
        try {
            res.send(deletePage(req.params.pageId));
        }
        catch (ex) {
            res.status(400).send(ex);
        }
    });

    /**
     * Delete page by Id
     * @param pageId Id of the page to delete
     * @returns page that was deleted, null if the id doesn't exist
     */
    function deletePage(pageId) {
        const toDeleteIndex = pages.findIndex(u => u._id === pageId);
        const toDelete = pages[toDeleteIndex];

        if (toDeleteIndex > -1) {

            // delete all widgets in the page
            const widgetsToDelete = WidgetService.api.findWidgetsByPageId(pageId);
            widgetsToDelete.forEach(w => {
                WidgetService.api.deleteWidget(w._id);
            });

            pages.splice(toDeleteIndex, 1);
        }
        else {
            throw ['Page with id ' + pageId + ' does not exist'];
        }
        return toDelete;
    }

    //#endregion: Delete page

    exp.api = {
        createPage: createPage,
        findPagesBywebsiteId: findPagesBywebsiteId,
        findPageById: findPageById,
        updatePage: updatePage,
        deletePage: deletePage
    };

})(router);


module.exports = exp;