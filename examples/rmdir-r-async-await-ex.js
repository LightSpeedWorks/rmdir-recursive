'use strict';

// require dependencies
try {
  var rmdirRecursive = require('../rmdir-recursive');
} catch (err) {
  var rmdirRecursive = require('rmdir-recursive');
}
const fs = require('fs');

try { fs.mkdirSync('/tmp'); } catch (err) { err.code !== 'EEXIST' && console.error('ignore: ' + err); }
try { fs.mkdirSync('/tmp/deep'); } catch (err) { console.error('ignore: ' + err); }
try { fs.mkdirSync('/tmp/deep/more'); } catch (err) { console.error('ignore: ' + err); }

async function main() {
  const dir = '/tmp/deep';

  try {
    await rmdirRecursive(dir);
    console.log(dir + ' removed');
  } catch (err) {
    console.log(dir + ' cant removed with status ' + err);
  }
}

Promise.all([main(), main(), main()])
.then(() => console.log('end'));
