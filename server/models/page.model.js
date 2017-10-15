
/**
 * Models a Page object
 */
class Page {
    constructor() {
        this._id = null;
        this.name = null;
        this.websiteId = null;
        this.title = null;
        this.description = null;
        this.email = null;
    }

    /**
     * Validate a page object
     * @param {Page} page page object to validate
     * @throws {String[]} list of errors encountered
     */
    static validate(page) {
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
}

module.exports = Page;
