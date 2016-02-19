'use strict';

var dom = require('./util-dom');

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof window === 'object') {
    window.dom = factory();
  }
}(function() {

  return dom;
}));
