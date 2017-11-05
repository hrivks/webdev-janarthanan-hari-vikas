// Provides CRUD for user model
// Module Route Root: '/api/user'
const router = require('express').Router();
const UserModel = require('../models/model.server').user;

/** Exported objects */
const exp = {
    router: router, // router object
    api: {} // list of functions supported by this service
};

(function (router) {
    //#region : Create User

    // route: [POST] '/api/user'
    router.post('/', function (req, res) {
        createUser(req.body)
            .then((createdUser) => {
                res.json(createdUser);
            }, (err) => {
                res.status(400).json([err.message]);
            })
            .catch((err) => {
                res.status(400).json([err.message]);
            });
    });

    /**
     * Create a new user
     * @param {UserSchema} user user object to be added to the user list
     * @returns {Promise<UserSchema>} promise that resolves to the created user object
     */
    function createUser(user) {
        return UserModel.createUser(user);
    }

    //#endregion: Create User

    //#region : Find user by Id

    // route: [GET] '/api/user/:userId'
    router.get('/:userId', function (req, res) {
        findUserById(req.params.userId)
            .then((user) => {
                res.json(user);
            }, (err) => {
                res.status(400).json([err.message]);
            })
            .catch((err) => {
                res.status(400).json([err.message]);
            });
    });

    /**
     * Find user by user id
     * @param {string} userId id of the user
     * @returns {Promise<UserSchema>} promise that resolves to user with the specifed id; null if id doesn't exist
     */
    function findUserById(userId) {
        return UserModel.findUserById(userId);
    }

    //#endregion Find user by id

    //#region : Find user username & credentials

    // route: [GET] '/api/user?username=username'
    // route: [GET] '/api/user?username=username&password=password'
    router.get('/', function (req, res) {

        var promise;
        if (req.query.username && req.query.password) {
            promise = findUserByCredentials(req.query.username, req.query.password);
        } else {
            promise = findUserByUsername(req.query.username);
        }

        promise
            .then((user) => {
                res.json(user);
            }, (err) => {
                res.status(400).json([err.message]);
            })
            .catch((err) => {
                res.status(400).json([err.message]);
            });

    });

    /**
     * Find user by user name
    * @param {String} username username of the user
    * @returns {Promise<UserSchema>} promise that resolves to user with the specifed username; null if id doesn't exist
    */
    function findUserByUsername(username) {
        return UserModel.findUserByUsername(username);
    }

    /**
     * Find user by credentials
     * @param {String} username username of the user
     * @param {String} password password of the user
     * @returns {User} user with the specifed username; null if id doesn't exist
     */
    function findUserByCredentials(username, password) {
        return UserModel.findUserByCredentials(username, password);
    }
    //#endregion

    //#region : Update User

    // route: [PUT] '/api/user/:userId'
    router.put('/:userId', function (req, res) {
        updateUser(req.params.userId, req.body)
            .then((user) => {
                res.json(user);
            }, (err) => {
                res.status(400).json([err.message]);
            })
            .catch((err) => {
                res.status(400).json([err.message]);
            });
    });

    /**
  * Update user by user id
  * @param {string} userId id of the user
  * @param {UserSchema} user updated user object
  * @returns {Promise<UserSchema>} promise that resolves to updated user object
  */
    function updateUser(userId, user) {
        return UserModel.updateUser(userId, user);
    }

    //#endregion: Update User

    //#region : Delete User

    // route: [DELETE] '/api/user/:userId'
    router.delete('/:userId', function (req, res) {
        deleteUser(req.params.userId)
            .then(() => {
                res.json(200);
            }, (err) => {
                res.status(400).json([err.message]);
            })
            .catch((err) => {
                res.status(400).json([err.message]);
            });
    });

    /**
     * Delete user by user id
     * @param {string} userId id of the user
     * @returns {Promise<UserSchema>} promise that resolves to deleted user object
     */
    function deleteUser(userId) {
        return UserModel.deleteUser(userId);
    }

    // #endregion: Delete User

    // Add to export
    exp.api = {
        createUser: createUser,
        findUserByUsername: findUserByUsername,
        findUserById: findUserById,
        findUserByCredentials: findUserByCredentials,
        updateUser: updateUser,
        deleteUser: deleteUser
    };

})(router);

module.exports = exp;
