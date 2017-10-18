// Provides CRUD for Website model
// Module Route Root: '/api/website' and '/api/user/:userId/website'
const router = require('express').Router({ mergeParams: true });
const Website = require('../models/website.model.js');
const PageService = require('./page.service.server.js');


/** Exported objects */
const exp = {
    router: router, // router object
    api: {} // list of functions supported by this service
};

(function (router) {

    //#region Data Store
    /**
     * List of available website
     * @type {Website[]}
     */
    let websites = [
        { '_id': '123', 'name': 'Facebook', 'developerId': '456', 'description': 'Lorem' },
        { '_id': '234', 'name': 'Tweeter', 'developerId': '456', 'description': 'Lorem' },
        { '_id': '456', 'name': 'Gizmodo', 'developerId': '456', 'description': 'Lorem' },
        { '_id': '890', 'name': 'Go', 'developerId': '123', 'description': 'Lorem' },
        { '_id': '567', 'name': 'Tic Tac Toe', 'developerId': '123', 'description': 'Lorem' },
        { '_id': '678', 'name': 'Checkers', 'developerId': '123', 'description': 'Lorem' },
        { '_id': '789', 'name': 'Chess', 'developerId': '234', 'description': 'Lorem' }
    ];
    //#endregion

    //#region Create Website
    // Route: [POST] '/api/user/:userId/website'
    router.post('/', function (req, res) {
        try {
            res.send(createWebsite(req.params.userId, req.body));
        }
        catch (ex) {
            res.status(400).send(ex);
        }
    });

    /**
   * Create a new website
   * @param {String} userId id of the user who created the website
   * @param {Website} website website object created by the user
   * @returns {Website} the created website object
   */
    function createWebsite(userId, website) {
        if (!website)
            throw ['Website object is expected. Received empty'];
        website.developerId = userId;
        Website.validate(website);
        let id = Math.floor(Math.random() * 10000);

        // ensure generated ID is unique
        while (websites.find(u => u._id === id)) {
            id++;
        }

        website._id = id.toString();
        websites.push(website);
        return website;
    }


    //#endregion Create Website


    //#region Find all websites for user
    // route: [GET] '/api/user/:userId/website'
    router.get('/', function (req, res) {
        try {
            res.send(findWebsitesByUser(req.params.userId));
        }
        catch (ex) {
            res.status(400).send(ex);
        }
    });

    /**
     * Get all websites created by a user
     * @param {String} userId id of the user who developed the website
     * @returns {Website[]} list of websites created by the specified user
     */
    function findWebsitesByUser(userId) {
        if (userId)
            return websites.filter(w => w.developerId === userId);
        else
            throw ['Developer Id is required'];
    }

    //#endregion Find all websites for user


    //#region Find Website by Id
    // route: [GET] '/api/website/:websiteId'
    router.get('/:websiteId', function (req, res) {
        try {
            res.send(findWebsiteById(req.params.websiteId));
        }
        catch (ex) {
            res.status(400).send(ex);
        }
    });

    /**
     * Find website by Id
     * @param websiteId id of the website
     * @returns Website corresponding to the given Id; null if id websites doesn't exit
     */
    function findWebsiteById(websiteId) {
        if (websiteId) {
            const website = websites.find(u => u._id === websiteId);
            if (website) {
                return website;
            } else {
                throw ['Website with Id "' + websiteId + '" does not exist'];
            }
        }
        else
            throw ['Website Id is required'];
    }

    //#endregion Find Website by Id


    //#region Update Website
    // route: [PUT] '/api/website/:websiteId'
    router.put('/:websiteId', function (req, res) {
        try {
            res.send(updateWebsite(req.params.websiteId, req.body));
        }
        catch (ex) {
            res.status(400).send(ex);
        }
    });

    /**
     * Update website by Id
     * @param {String} websiteId Id of the website to update
     * @param {Website} website updated website object
     * @returns {Website} the updated website object
     */
    function updateWebsite(websiteId, website) {
        Website.validate(website);
        const toUpdateIndex = websites.findIndex(w => w._id === websiteId);
        if (toUpdateIndex > -1) {
            websites[toUpdateIndex] = website;
            return websites;
        } else {
            throw ['Website with id ' + websiteId + ' does not exist'];
        }
    }

    //#endregion Update website


    //#region Delete Website
    // route: [DELETE] '/api/website/:websiteId'
    router.delete('/:websiteId', function (req, res) {
        try {
            res.send(deleteWebsite(req.params.websiteId));
        }
        catch (ex) {
            res.status(400).send(ex);
        }
    });

    /**
     * Delete webstie by Id
     * @param {String} websiteId Id of the website to delete
     * @returns {Website} website that was deleted, null if the id doesn't exist
     */
    function deleteWebsite(websiteId) {
        const toDeleteIndex = websites.findIndex(u => u._id === websiteId);
        const toDelete = websites[toDeleteIndex];

        if (toDelete) {
            // delete pages in website
            const pagesToDelete = PageService.api.findPagesBywebsiteId(websiteId);
            pagesToDelete.forEach(p => {
                PageService.api.deletePage(p._id);
            });

            websites.splice(toDeleteIndex, 1);
        }
        else {
            throw ['Website with Id ' + websiteId + ' does not exist'];
        }

        return toDelete;
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