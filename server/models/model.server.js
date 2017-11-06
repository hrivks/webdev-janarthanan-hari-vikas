module.exports = (function () {

    var mongoose = require("mongoose");

    var connectionStr = 'mongodb://localhost:27017/webappmaker';
    // todo: env based con str
    mongoose.connect(connectionStr, { useMongoClient: true });

    const UserModel = require('./user/user.model.server.js');
    const WebsiteModel = require('./website/website.model.server.js');
    const PageModel = require('./page/page.model.server.js');
    const WidgetModel = require('./widget/widget.model.server.js');

    var model = {
        User: UserModel,
        Page: PageModel,
        Website: WebsiteModel,
        Widget: WidgetModel
    };

    return model;
})();