/**
 * Website Model
 */

const q = require('q');
const mongoose = require('mongoose');
const WebsiteSchema = require('./website.schema.server');
const UserModel = require('../user/user.model.server.js');
const PageModel = require('../page/page.model.server.js');
const WidgetModel = require('../widget/widget.model.server.js');

module.exports = (function () {

    const WebsiteModel = mongoose.model('WebsiteModel', WebsiteSchema);

    // API
    WebsiteModel.createWebsite = createWebsite;
    WebsiteModel.findWebsitesByUser = findWebsitesByUser;
    WebsiteModel.findWebsiteById = findWebsiteById;
    WebsiteModel.updateWebsite = updateWebsite;
    WebsiteModel.deleteWebsite = deleteWebsite;

    // Implimentation

    /**
     * Validate a website object
     * @param {WebsiteSchema} website website object to validate
     * @throws {String[]} list of errors encountered
     */
    function validate(website) {
        var errors = [];

        if (!website || Object.keys(website).length == 0) {
            throw ['website object expected. Received empty'];
        }
        if (!website.name) {
            errors.push('Name is required');
        }
        if (!website.developerId) {
            errors.push('Developer Id is required');
        }

        if (errors.length > 0) {
            throw errors;
        }
    }

    /**
     * Create a new website
     * @param {string} developerId id of the user who created the website
     * @param {WebsiteSchema} website website object to create
     * @returns {Promise<WebsiteSchema>} promise that gets resolved to the created website object
     */
    function createWebsite(developerId, website) {
        var def = q.defer();

        validate(website);
        UserModel.findById(developerId, (err, user) => {
            if (err) {
                def.reject(err.message);
            } else if (!user) {
                def.reject({ message: 'No user with the given developer id exists' });
            }
            else {
                WebsiteModel.create(website, (err, createdWebsite) => {
                    if (err) {
                        def.reject(err.message);
                    } else {
                        def.resolve(createdWebsite);
                    }
                });
            }
        });

        return def.promise;
    }

    /**
     * Find website by website id
     * @param {string} websiteId 
     * @returns {DocumentQuery<WebsiteSchema>} query that gets resolved to the website object
     */
    function findWebsiteById(websiteId) {
        return WebsiteModel.findById(websiteId);
    }

    /**
     * Find website created by specified user
     * @param {string} userId id of user
     * @returns {DocumentQuery<[WebsiteSchema]>} query that gets resolved to the list of website objects
     */
    function findWebsitesByUser(userId) {
        return WebsiteModel.find({ developerId: userId });
    }

    /**
     * Update website by website id
     * @param {string} websiteId 
     * @param {WebsiteSchema} website 
     * @returns  {DocumentQuery<WebsiteSchema>} query that gets resolved to the updated website object
     */
    function updateWebsite(websiteId, website) {
        validate(website);
        return WebsiteModel.findByIdAndUpdate(websiteId, website, { new: true });
    }

    /**
     * Delete website by website id
     * @param {string} websiteId 
     * @returns {DocumentQuery} query that resolves on successful deletion
     */
    function deleteWebsite(websiteId) {
        const def = q.defer();
        // delete website object
        WebsiteModel.findByIdAndRemove(websiteId, (err, res) => {
            if (err) {
                def.reject(err);
            } else if (!res) {
                // document doesn't exist. no operation needed
                def.resolve({ result: 'nothing to delete' });
            } else {

                // get all pages in the website
                const pages = PageModel
                    .find({ websiteId: websiteId }, (err, pages) => {
                        if (err) {
                            def.reject(err);
                        }
                        if (pages) {
                            const pageIds = pages.map((p) => p._id);

                            // remove all widgets in these pages
                            WidgetModel.find({ pageId: { $in: pageIds } }).remove().then();
                        }
                        def.resolve({ result: 'deleted' });
                    });

                // delete all pages in the website
                pages.remove().then();
            }
        });
        return def.promise;
    }

    return WebsiteModel;
})();