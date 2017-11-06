// Provides CRUD for Page model
// Module Route Root: '/api/page' and '/api/website/:websiteId/page'

module.exports = (function () {

    const router = require('express').Router({ mergeParams: true });
    const PageModel = require('../models/page/page.model.server.js');
    const WidgetService = require('./widget.service.server.js');
    const Utils = require('./service-utils.js');

    /** Exported object */
    const exp = {
        router: router, // router object
        api: {  // list of functions supported by this service
            createPage: createPage,
            findPagesBywebsiteId: findPagesBywebsiteId,
            findPageById: findPageById,
            updatePage: updatePage,
            deletePage: deletePage
        }
    };


    //#region: Create Page

    // route: [POST] '/api/website/:websiteId/page'
    router.post('/', function (req, res) {
        Utils.sendResponse(res, createPage, [req.params.websiteId, req.body]);
    });

    /**
     * Create a new page
     * @param {String} websiteId id of the user who created the page
     * @param {PageSchema} page page object created by the user
     * @returns {Promise<PageSchema>} the created page object
     */
    function createPage(websiteId, page) {
        return PageModel.createPage(websiteId, page);
    }
    //#endregion : Create Page


    //#region: Find all pages by website id

    // route: [GET] '/api/website/:websiteId/page'
    router.get('/', function (req, res) {
        Utils.sendResponse(res, findPagesBywebsiteId, [req.params.websiteId]);
    });

    /**
     * Get all pages in the website specified by website id
     * @param {String} websiteId id of the website
     * @returns {DocumentQuery<PageSchema[]>} list of pages in the website specified by the given id
     */
    function findPagesBywebsiteId(websiteId) {
        return PageModel.findPagesBywebsiteId(websiteId);
    }

    //#endregion: Find all pages by website id


    //#region: Find page by id

    //route: [GET] '/api/page/:pageId'
    router.get('/:pageId', function (req, res) {
        Utils.sendResponse(res, findPageById, [req.params.pageId]);
    });

    /**
     * Find page by Id
     * @param {string} pageId id of the page
     * @returns {DocumentQuery<PageSchema>} page corresponding to the given Id; null if id page doesn't exit
     */
    function findPageById(pageId) {
        return PageModel.findPageById(pageId);
    }

    //#endregion: Find page by id


    //#region: Update page

    // route: [PUT] '/api/page/:pageId'
    router.put('/:pageId', function (req, res) {
        Utils.sendResponse(res, updatePage, [req.params.pageId, req.body]);
    });

    /**
     * Update page by Id
     * @param {String} pageId Id of the page to update
     * @param {String} page updated page object
     * @returns {{DocumentQuery<PageSchema>}} the updated page object
     */
    function updatePage(pageId, page) {
        return PageModel.updatePage(pageId, page);
    }

    //#endregion: Update page


    //#region: Delete Page

    // route: [DELETE] '/api/page/:pageId'
    router.delete('/:pageId', function (req, res) {
        Utils.sendResponse(res, deletePage, [req.params.pageId]);
    });

    /**
     * Delete page by Id
     * @param {string} pageId Id of the page to delete
     * @returns {DocumentQuery} page that was deleted, null if the id doesn't exist
     */
    function deletePage(pageId) {
        return PageModel.deletePage(pageId);
    }

    //#endregion: Delete page

    return exp;

})();