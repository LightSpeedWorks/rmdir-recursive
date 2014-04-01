rmdir-recursive
===============

  **rmdir-recursive** is a function like `rmdir -r`.

Usage
-----

### async example

```js
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


### sync example

```js
var rmdirRecursiveSync = require('rmdir-recursive').sync;

var dir = '/tmp/deep/dir';
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
