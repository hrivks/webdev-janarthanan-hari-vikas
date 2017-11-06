/**
 * Website Model
 */
module.exports = (function () {
    const q = require('q');
    const mongoose = require('mongoose');
    const PageSchema = require('./page.schema.server');
    const WebsiteModel = require('../website/website.model.server');

    const PageModel = mongoose.model('PageModel', PageSchema);

    // API
    PageModel.createPage = createPage;
    PageModel.findPagesBywebsiteId = findPagesBywebsiteId;
    PageModel.findPageById = findPageById;
    PageModel.updatePage = updatePage;
    PageModel.deletePage = deletePage;

    // Implimentation

    /**
     * Validate a website object
     * @param {PageSchema} page website object to validate
     * @throws {String[]} list of errors encountered
     */
    function validate(page) {
        var errors = [];

        if (!page || Object.keys(page).length == 0) {
            throw ['Page object expected'];
        }
        if (!page.name) {
            errors.push('name is required');
        }

        if (errors.length > 0) {
            throw errors;
        }
    }

    /**
     * Create a new page
     * @param {string} websiteId id of the website into which the page must be created
     * @param {PageSchema} page page object to create
     * @returns {Promise<PageSchema>} promise that gets resolved to the created page object
     */
    function createPage(websiteId, page) {
        var def = q.defer();

        validate(page);
        page.websiteId = websiteId;
        // find website
        WebsiteModel.findById(websiteId, (err, website) => {
            if (err) {
                def.reject(err.message);
            } else if (!website) {
                def.reject({ message: 'No website with the given id exists' });
            }
            else {
                // create page
                PageModel.create(page, (err, createdPage) => {
                    if (err) {
                        def.reject(err.message);
                    } else {
                        // add to website
                        website.pages.push(createdPage);
                        website.save();
                        def.resolve(createdPage);
                    }
                });
            }
        });

        return def.promise;
    }

    /**
     * Find page by page id
     * @param {string} pageId 
     * @returns {DocumentQuery<PageSchema>} query that gets resolved to the page object
     */
    function findPageById(pageId) {
        return PageModel.findById(pageId);
    }

    /**
     * Find pages beloning to the specified website
     * @param {string} websiteId id of website
     * @returns {DocumentQuery<[PageSchema]>} query that gets resolved to the list of page objects
     */
    function findPagesBywebsiteId(websiteId) {
        return PageModel.find({ websiteId: websiteId });
    }

    /**
     * Update page by page id
     * @param {string} pageId id of the page object to update
     * @param {PageSchema} page page object to update
     * @returns  {DocumentQuery<PageSchema>} query that gets resolved to the updated page object
     */
    function updatePage(pageId, page) {
        validate(page);
        return PageModel.findOneAndUpdate({ _id: pageId }, page);
    }

    /**
     * Delete page by page id
     * @param {string} pageId 
     * @returns {DocumentQuery} query that resolves on successful deletion
     */
    function deletePage(pageId) {
        return PageModel.remove({ _id: pageId });
    }

    return PageModel;
})();