var mongoose = require("mongoose");

var connectionStr = process.env.MONGODB_URI || 'mongodb://localhost:27017/webapp';

// todo: env based con str
mongoose.connect(connectionStr, { useMongoClient: true });