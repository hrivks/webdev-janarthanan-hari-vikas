// Provides CRUD for user model
// Module Route Root: '/api/user'
const router = require('express').Router();
const User = require('../models/user.model.js');

/** Exported objects */
const exp = {
    router: router, // router object
    api: {} // list of functions supported by this service
};

(function (router) {

    //#region : Data Store

    /** 
     * List of available users
     * @type {User[]}
     */
    var users = [
        { _id: '123', username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder' },
        { _id: '234', username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley' },
        { _id: '345', username: 'charly', password: 'charly', firstName: 'Charly', lastName: 'Garcia' },
        { _id: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose', lastName: 'Annunzi' }
    ];

    //#endregion

    //#region : Create User

    // route: [POST] '/api/user'
    router.post('/', function (req, res) {
        try {
            res.json(createUser(req.body));
        }
        catch (ex) {
            res.status(400).json(ex);
        }
    });

    /**
     * Create a new user
     * @param {User} user user object to be added to the user list
     * @returns {User} created user object
     */
    function createUser(user) {
        User.validate(user);

        var id = Math.floor(Math.random() * 10000);

        // ensure generated ID is unique
        while (findUserById(id.toString())) {
            id++;
        }

        user._id = id.toString();
        users.push(user);
        return user;
    }

    //#endregion: Create User

    //#region : Find user by Id

    // route: [GET] '/api/user/:userId'
    router.get('/:userId', function (req, res) {
        try {
            res.json(findUserById(req.params.userId));
        }
        catch (ex) {
            res.status(400).json(ex);
        }
    });

    /**
     * Find user by user id
     * @param userId id of the user
     * @returns user with the specifed id; null if id doesn't exist
     */
    function findUserById(userId) {
        const user = users.find(u => u._id === userId);
        if (user) {
            return user;
        } else {
            throw ['User with Id ' + userId + ' does not exist'];
        }

    }

    //#endregion Find user by id

    //#region : Find user username & credentials

    // route: [GET] '/api/user?username=username'
    // route: [GET] '/api/user?username=username&password=password'
    router.get('/', function (req, res) {
        try {
            if (req.query.username && req.query.password)
                res.json(findUserByCredentials(req.query.username, req.query.password));
            else
                res.json(findUserByUsername(req.query.username));
        }
        catch (ex) {
            res.status(400).json(ex);
        }

    });

    /**
     * Find user by user name
    * @param {String} username username of the user
    * @returns {User} user with the specifed username; null if id doesn't exist
    */
    function findUserByUsername(username) {
        const user = users.find(u => u.username === username);
        if (user) {
            return user;
        } else {
            throw ['User "' + username + '" does not exist'];
        }
    }

    /**
     * Find user by credentials
     * @param {String} username username of the user
     * @param {String} password password of the user
     * @returns {User} user with the specifed username; null if id doesn't exist
     */
    function findUserByCredentials(username, password) {
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
            return user;
        } else {
            throw ['Invalid credentials'];
        }
    }
    //#endregion

    //#region : Update User

    // route: [PUT] '/api/user/:userId'
    router.put('/:userId', function (req, res) {
        try {
            res.json(updateUser(req.params.userId, req.body));
        }
        catch (ex) {
            res.status(400).json(ex);
        }
    });

    /**
  * Update user by user id
  * @param {string} userId id of the user
  * @param {User} user updated user object
  * @returns {User} updated user object
  */
    function updateUser(userId, user) {
        User.validate(user);
        const toUpdateIndex = users.findIndex(u => u._id === userId);

        if (toUpdateIndex > -1) {
            // check if username corresponds to any other user
            const userWithUsername = findUserByUsername(user.username);
            if (userWithUsername && userWithUsername._id !== user._id) {
                throw ['Username "' + user.username + '" is unavailable'];
            }

            users[toUpdateIndex] = user;
            return user;
        } else {
            throw ['User with id ' + userId + ' cannot be found'];
        }
    }

    //#endregion: Update User

    //#region : Delete User

    // route: [DELETE] '/api/user/:userId'
    router.delete('/:userId', function (req, res) {
        try {
            res.json(deleteUser(req.params.userId));
        }
        catch (ex) {
            res.status(400).json(ex);
        }
    });

    /**
     * Delete user by user id
     * @param {string} userId id of the user
     * @returns {User} deleted user object
     */
    function deleteUser(userId) {
        const toDeleteIndex = users.findIndex(u => u._id === userId);
        const toDelete = users[toDeleteIndex];
        if (toDeleteIndex > -1) {
            users.splice(toDeleteIndex, 1);
        }
        else {
            throw ['User with id ' + userId + ' cannot be found'];
        }
        return toDelete;
    }

    // Add to export
    exp.api = {
        createUser: createUser,
        findUserByUsername: findUserByUsername,
        findUserById: findUserById,
        findUserByCredentials: findUserByCredentials,
        updateUser: updateUser,
        deleteUser: deleteUser
    }

})(router);

module.exports = exp;
