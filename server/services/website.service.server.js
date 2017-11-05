// Provides CRUD for Website model
// Module Route Root: '/api/website' and '/api/user/:userId/website'
const router = require('express').Router({ mergeParams: true });
const WebsiteModel = require('../models/website/website.model.server');
const PageService = require('./page.service.server.js');


/** Exported objects */
const exp = {
    router: router, // router object
    api: {} // list of functions supported by this service
};

(function (router) {

    //#region Create Website
    // Route: [POST] '/api/user/:userId/website'
    router.post('/', function (req, res) {
        createWebsite(req.params.userId, req.body)
            .then((websites) => {
                res.json(websites);
            }, (err) => {
                res.status(400).json([err.message]);
            })
            .catch((err) => {
                res.status(400).json([err.message]);
            });
    });

    /**
   * Create a new website
   * @param {String} userId id of the user who created the website
   * @param {Website} website website object created by the user
   * @returns {Website} the created website object
   */
    function createWebsite(userId, website) {
        return WebsiteModel.createWebsite(userId, website);
    }


    //#endregion Create Website


    //#region Find all websites for user
    // route: [GET] '/api/user/:userId/website'
    router.get('/', function (req, res) {
        findWebsitesByUser(req.params.userId)
            .then((websites) => {
                res.json(websites);
            }, (err) => {
                res.status(400).json([err.message]);
            })
            .catch((err) => {
                res.status(400).json([err.message]);
            });
    });

    /**
     * Get all websites created by a user
     * @param {String} userId id of the user who developed the website
     * @returns {Website[]} list of websites created by the specified user
     */
    function findWebsitesByUser(userId) {
        return WebsiteModel.findWebsitesByUser(userId);
    }

    //#endregion Find all websites for user


    //#region Find Website by Id
    // route: [GET] '/api/website/:websiteId'
    router.get('/:websiteId', function (req, res) {
        findWebsiteById(req.params.websiteId)
            .then((website) => {
                res.json(website);
            }, (err) => {
                res.status(400).json([err.message]);
            })
            .catch((err) => {
                res.status(400).json([err.message]);
            });
    });

    /**
     * Find website by Id
     * @param websiteId id of the website
     * @returns Website corresponding to the given Id; null if id websites doesn't exit
     */
    function findWebsiteById(websiteId) {
        return WebsiteModel.findWebsiteById(websiteId);
    }

    //#endregion Find Website by Id


    //#region Update Website
    // route: [PUT] '/api/website/:websiteId'
    router.put('/:websiteId', function (req, res) {
        updateWebsite(req.params.websiteId, req.body)
            .then((website) => {
                res.json(website);
            }, (err) => {
                res.status(400).json([err.message]);
            })
            .catch((err) => {
                res.status(400).json([err.message]);
            });
    });

    /**
     * Update website by Id
     * @param {String} websiteId Id of the website to update
     * @param {Website} website updated website object
     * @returns {Website} the updated website object
     */
    function updateWebsite(websiteId, website) {
        return WebsiteModel.updateWebsite(websiteId, website);
    }

    //#endregion Update website


    //#region Delete Website
    // route: [DELETE] '/api/website/:websiteId'
    router.delete('/:websiteId', function (req, res) {
        deleteWebsite(req.params.websiteId)
            .then(() => {
                res.status(200);
            }, (err) => {
                res.status(400).json([err.message]);
            })
            .catch((err) => {
                res.status(400).json([err.message]);
            });
    });

    /**
     * Delete webstie by Id
     * @param {String} websiteId Id of the website to delete
     * @returns {Website} website that was deleted, null if the id doesn't exist
     */
    function deleteWebsite(websiteId) {
        return WebsiteModel.deleteWebsite(websiteId);
    }

    //#endregion Delete website

    exp.api = {
        createWebsite: createWebsite,
        findWebsitesByUser: findWebsitesByUser,
        findWebsiteById: findWebsiteById,
        updateWebsite: updateWebsite,
        deleteWebsite: deleteWebsite
    };

})(router);


module.exports = exp;