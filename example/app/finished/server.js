var http = require('http');
var ecstatic = require('ecstatic')(__dirname + '/static');

var level = require('level');
var db = level('app.db', {
    keyEncoding: require('bytewise'),
    valueEncoding: 'json'
});

var router = require('./router.js')(db);

var server = http.createServer(function (req, res) {
    var m = router.match(req.url);
    if (m) m.fn(req, res, m);
    else ecstatic(req, res);
});
server.listen(8000);

var feed = require('multilevel-feed');
var shoe = require('shoe');
var sock = shoe(function (stream) {
    stream.pipe(feed(db)).pipe(stream);
});
sock.install(server, '/sock');
