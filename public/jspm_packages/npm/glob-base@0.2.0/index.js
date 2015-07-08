/* */ 
'use strict';
var path = require("path");
var parent = require("glob-parent");
module.exports = function globBase(pattern) {
  if (typeof pattern !== 'string') {
    throw new TypeError('glob-base expects a string.');
  }
  var res = {};
  res.base = parent(pattern);
  res.isGlob = res.base !== pattern;
  if (res.base !== '.') {
    res.glob = pattern.substr(res.base.length);
    if (res.glob.charAt(0) === '/') {
      res.glob = res.glob.substr(1);
    }
  } else {
    res.glob = pattern;
  }
  if (!res.isGlob) {
    res.base = dirname(pattern);
    res.glob = res.base !== '.' ? pattern.substr(res.base.length) : pattern;
  }
  if (res.glob.substr(0, 2) === './') {
    res.glob = res.glob.substr(2);
  }
  if (res.glob.charAt(0) === '/') {
    res.glob = res.glob.substr(1);
  }
  return res;
};
function dirname(glob) {
  if (glob.slice(-1) === '/')
    return glob;
  return path.dirname(glob);
}