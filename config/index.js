var configValues = require('./config');

module.exports = {
    //pass the params to check for prod and dev env
    getDbConnection: function () {
        return "mongodb://username:test@ds141185.mlab.com:41185/todo-creation";
    }
};