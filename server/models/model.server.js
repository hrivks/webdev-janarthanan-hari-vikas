module.exports = (function () {

    var mongoose = require("mongoose");

    var connectionStr = 'mongodb://localhost:27017/webappmaker';
    // todo: env based con str
    mongoose.connect(connectionStr);

    const UserModel = require('./user/user.model.server');

    var model = {
        user: UserModel
    };

    return model;
})();