var routes = require('routes');
var trumpet = require('trumpet');

var render = { msg: require('./render/msg.js') };

module.exports = function (db) {
    var r = routes();
    r.addRoute('/', function (req, res, params) {
        var tr = trumpet();
    });
    return r;
};
