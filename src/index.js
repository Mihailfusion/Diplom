window.addEventListener("DOMContentLoaded", () => {
  'use strict';

  let
    // tabs = require('./parts/topModal.js'),
    timer = require('./parts/timer.js'),
    timePopup = require('./parts/timePopup.js'),
    tabs = require('./parts/tabs.js'),
    form = require('./parts/form.js'),
    images = require('./parts/images.js'),
    calc = require('./parts/calc.js'),

    modal = require('./parts/modal.js');

  timer();
  modal();
  timePopup();
  tabs();
  form();
  images();
  calc();

});


if ('NodeList' in window && !NodeList.prototype.forEach) {
  console.info('polyfill for IE11');
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}