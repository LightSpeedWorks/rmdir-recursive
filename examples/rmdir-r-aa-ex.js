'use strict';

// require dependencies
try {
  var rmdirRecursive = require('../rmdir-recursive');
} catch (err) {
  var rmdirRecursive = require('rmdir-recursive');
}
var fs = require('fs');
var aa = require('../aa');

try { fs.mkdirSync('/tmp'); } catch (err) { /* ignore */ }
try { fs.mkdirSync('/tmp/deep'); } catch (err) { /* ignore */ }
try { fs.mkdirSync('/tmp/deep/more'); } catch (err) { /* ignore */ }

// aa generator
var p = aa(function *() {
  var dir = '/tmp/deep';
  try {
    yield rmdirRecursive(dir);
    console.log(dir + ' removed');
  } catch (err) {
    console.log(dir + ' cant removed with status ' + err);
  }
});

if (p && p.then && typeof p.then === 'function') p.then(function () {});
else if (typeof p === 'function') p();
else {
  console.log(require('util').inspect(p, {colors: true, depth: null}));
  throw new Error('what is the value returned from aa: ' + typeof p);
}
