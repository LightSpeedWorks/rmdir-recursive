// require dependencies

'use strict';

var co = require('co');
try {
  var rmdirRecursive = require('../lib/rmdir-recursive');
} catch (err) {
  var rmdirRecursive = require('rmdir-recursive');
}

var fs = require('fs');

try { fs.mkdirSync('/tmp'); } catch (err) { /* ignore */ }
try { fs.mkdirSync('/tmp/deep'); } catch (err) { /* ignore */ }
try { fs.mkdirSync('/tmp/deep/more'); } catch (err) { /* ignore */ }

// co generator
co(function *() {
  var dir = '/tmp/deep';
  try {
    yield rmdirRecursive(dir);
    console.log(dir + ' removed');
  } catch (err) {
    console.log(dir + ' cant removed with status ' + err);
  }
})();
