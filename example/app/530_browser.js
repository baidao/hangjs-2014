var sock = require('shoe')('/sock');
var db = require('multilevel-feed')();
sock.pipe(db.createRpcStream()).pipe(sock);

var render = require('./render/msg.js');

