/**
 * Models a Website object
 */
class Website {
    constructor() {
        this._id = null;
        this.name = null;
        this.developerId = null;
        this.description = null;
    }

    /**
     * Validate a website object
     * @param {Website} website website object to validate
     * @throws {String[]} list of errors encountered
     */
    static validate(website) {
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
}

module.exports = Website;