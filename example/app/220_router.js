var routes = require('routes');

module.exports = function (db) {
    var r = routes();
    r.addRoute('/', function (req, res, params) {
        // ...
    });
    return r;
};
