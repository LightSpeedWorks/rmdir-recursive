'use strict';

// require dependencies
try {
  var rmdirRecursive = require('../rmdir-recursive');
} catch (err) {
  var rmdirRecursive = require('rmdir-recursive');
}
var fs = require('fs');

try { fs.mkdirSync('/tmp'); } catch (err) { err.code !== 'EEXIST' && console.error('ignore: ' + err); }
try { fs.mkdirSync('/tmp/deep'); } catch (err) { console.error('ignore: ' + err); }
try { fs.mkdirSync('/tmp/deep/more'); } catch (err) { console.error('ignore: ' + err); }

var dir = '/tmp/deep';
rmdirRecursive(dir)(function (err) {
  if (err) {
    console.log(dir + ' cant removed with status ' + err);
  } else {
    console.log(dir + ' removed');
  }
});
rmdirRecursive(dir)(function (err) {
  if (err) {
    console.log(dir + ' cant removed with status ' + err);
  } else {
    console.log(dir + ' removed');
  }
});
rmdirRecursive(dir)(function (err) {
  if (err) {
    console.log(dir + ' cant removed with status ' + err);
  } else {
    console.log(dir + ' removed');
  }
});
