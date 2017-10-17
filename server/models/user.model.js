/**
 * Models a User object
 */
class User {
    constructor() {
        /** @type {string} */
        this._id = null;

        /** @type {string} */
        this.username = null;

        /** @type {string} */
        this.password = null;

        /** @type {string} */
        this.firstName = null;

        /** @type {string} */
        this.lastName = null;

        /** @type {string} */
        this.email = null;
    }

    /**
     * Validate a user object
     * @param {User} user user object to validate
     * @throws {String[]} list of errors encountered
     */
    static validate(user) {
        var errors = [];

        if (!user || Object.keys(user).length == 0) {
            throw ['User object expected'];
        }
        if (!user.username) {
            errors.push('Username is required');
        }
        if (!user.password) {
            errors.push('Password is required');
        }

        if (errors.length > 0) {
            throw errors;
        }
    }
}

module.exports = User;