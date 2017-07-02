'use strict';

// require dependencies
try {
  var rmdirRecursiveSync = require('../rmdir-recursive').sync;
} catch (err) {
  var rmdirRecursiveSync = require('rmdir-recursive').sync;
}
var fs = require('fs');

try { fs.mkdirSync('/tmp'); } catch (err) { err.code !== 'EEXIST' && console.error('ignore: ' + err); }
try { fs.mkdirSync('/tmp/deep'); } catch (err) { console.error('ignore: ' + err); }
try { fs.mkdirSync('/tmp/deep/more'); } catch (err) { console.error('ignore: ' + err); }

var dir = '/tmp/deep';
try {
  rmdirRecursiveSync(dir);
  console.log(dir + ' removed');
} catch (err) {
  console.log(dir + ' cant removed with status ' + err);
}
try {
  rmdirRecursiveSync(dir);
  console.log(dir + ' removed');
} catch (err) {
  console.log(dir + ' cant removed with status ' + err);
}
