var sock = require('shoe')('/sock');
var db = require('multilevel-feed')();
sock.pipe(db.createRpcStream()).pipe(sock);
window.db = db;

var render = require('./render/msg.js');

var feed = db.livefeed({ start: [ 'msg' ], end: [ 'msg', undefined ] });
feed.pipe(render().sortTo('#messages', cmp));

function cmp (a, b) {
    var at = Number(a.querySelector('.time').textContent);
    var bt = Number(b.querySelector('.time').textContent);
    return bt - at;
}
