var through = require('through2');
var a = through.obj(function (x, e, next) { this.push(x+1); next() });
var b = through.obj(function (x, e, next) { this.push(x/3); next() });
var c = through.obj(function (x, e, next) { this.push(x*100); next() });

var splicer = require('labeled-stream-splicer');
var p = splicer.obj([ 'A', [a], 'B', [b], 'C', [c] ]);

// p.get('B').push(through.obj(function (x,e,next) { this.push(x*5); next() }));

p.on('data', console.log);
p.write(5);
p.write(6);
p.write(7);
