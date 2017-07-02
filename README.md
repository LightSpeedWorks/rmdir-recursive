[rmdir-recursive](https://www.npmjs.com/package/rmdir-recursive) - npm
===============

  **rmdir-recursive** is a function like `rmdir -r`.

  This function returns promise, async/await ready,
  also yieldable, thunkified, promisified, useful with `aa` or `co`.

Installation
------------

[![NPM](https://nodei.co/npm/rmdir-recursive.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/rmdir-recursive/)
[![NPM](https://nodei.co/npm-dl/rmdir-recursive.png?height=2)](https://nodei.co/npm/rmdir-recursive/)

```bash
$ npm install rmdir-recursive
```

Usage
-----

```js
var rmdirRecursive = require('rmdir-recursive');
```

### `rmdirRecursive(dir, [callback])`

+ **dir** - directory path name
+ **[callback]** - {optional} function callback(err)
+ **retuns** - promise, thunk for `aa` or `co`. returns undefined if callback is specified.

### `rmdirRecursive.sync(dir)` or `rmdirRecursive.rmdirRecursiveSync(dir)`

+ **dir** - directory path name

Examples
--------

### async/await example

```js
// require dependencies
const rmdirRecursive = require('rmdir-recursive');

async function main() {
  const dir = '/tmp/deep';
  try {
    await rmdirRecursive(dir);
    console.log(dir + ' removed');
  } catch (err) {
    console.log(dir + ' cant removed with status ' + err);
  }
}

main();
```

### promise example

```js
// require dependencies
const rmdirRecursive = require('rmdir-recursive');

const dir = '/tmp/deep';
rmdirRecursive(dir)
.then(() => console.log(dir + ' removed'))
.catch(err => console.log(dir + ' cant removed with status ' + err));
```

### async await with `aa` or `co` with generator example

```js
// require dependencies
const aa = require('aa');
const rmdirRecursive = require('rmdir-recursive');

// aa with generator
aa(function *() {
  const dir = '/tmp/deep';
  try {
    yield rmdirRecursive(dir);
    console.log(dir + ' removed');
  } catch (err) {
    console.log(dir + ' cant removed with status ' + err);
  }
}).then(function () {});
```

### async callback example

```js
// require dependencies
var rmdirRecursive = require('rmdir-recursive');

var dir = '/tmp/deep';
rmdirRecursive(dir, function (err) {
  if (err) {
    console.log(dir + ' cant removed with status ' + err);
  } else {
    console.log(dir + ' removed');
  }
});
```

### async thunk example

```js
// require dependencies
var rmdirRecursive = require('rmdir-recursive');

var dir = '/tmp/deep';
rmdirRecursive(dir)(function (err) {
  if (err) {
    console.log(dir + ' cant removed with status ' + err);
  } else {
    console.log(dir + ' removed');
  }
});
```

### sync example

```js
// require dependencies
var rmdirRecursiveSync = require('rmdir-recursive').sync;

var dir = '/tmp/deep';
try {
  rmdirRecursiveSync(dir);
  console.log(dir + ' removed');
} catch (err) {
  console.log(dir + ' cant removed with status ' + err);
}
```

License
-------

  MIT
