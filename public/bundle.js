/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener("DOMContentLoaded", function () {
  'use strict';

  var // tabs = require('./parts/topModal.js'),
  timer = __webpack_require__(/*! ./parts/timer.js */ "./parts/timer.js"),
      timePopup = __webpack_require__(/*! ./parts/timePopup.js */ "./parts/timePopup.js"),
      tabs = __webpack_require__(/*! ./parts/tabs.js */ "./parts/tabs.js"),
      form = __webpack_require__(/*! ./parts/form.js */ "./parts/form.js"),
      images = __webpack_require__(/*! ./parts/images.js */ "./parts/images.js"),
      calc = __webpack_require__(/*! ./parts/calc.js */ "./parts/calc.js"),
      modal = __webpack_require__(/*! ./parts/modal.js */ "./parts/modal.js");

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

/***/ }),

/***/ "./parts/calc.js":
/*!***********************!*\
  !*** ./parts/calc.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

var calc = function calc() {// let glazingPriceBtn = document.querySelectorAll('.glazing_price_btn'),
  //   glazing = document.querySelector('.glazing'),
  //   popupCalc = document.querySelector('.popup_calc'),
  //   popupCalcClose = document.querySelector('.popup_calc_close'),
  //   balconIcons = document.querySelector('.balcon_icons');
  // glazing.addEventListener('click', (event) => { 
  //   if (event.target.classList.contains('glazing_price_btn')) {
  //     popupCalc.style.display = 'flex';
  //   }
  // });
  // popupCalc.addEventListener('click', (event) => {
  //       if (event.target == popupCalc) {
  //         popupCalc.style.display = 'none';
  //       }
  //     });
  // popupCalcClose.addEventListener('click', function () {
  //   popupCalc.style.display = 'none';
  // });
  // balconIcons.addEventListener('click', (event) => {
  //   let t = balconIcons.querySelectorAll('img'),
  //   obj = [];
  //   for (let i = 0; i < t.length; i++) {
  //     t[i].classList.remove('do_image_more');
  //     obj = t[i];
  //     console.log(obj);
  //   }
  //   if (event.target !== balconIcons) {
  //     event.target.classList.add('do_image_more');
  //   }
  //     // popupCalc.style.display = 'flex';
  // });
};

module.exports = calc;

/***/ }),

/***/ "./parts/form.js":
/*!***********************!*\
  !*** ./parts/form.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function form() {
  var message = {
    loading: 'Загрузка',
    success: 'Спасибо! Скоро мы с вами свяжемся!',
    failure: 'Что-то пошло не так...'
  };
  var forms = document.querySelectorAll('.form, .main_form'),
      input = document.getElementsByTagName('input'),
      inputTel = document.getElementsByName('user_phone'),
      statusMessage = document.createElement('div');
  statusMessage.classList.add('status');
  inputTel.forEach(function (elem) {
    elem.onkeyup = function () {
      elem.value = elem.value.replace(/[^(\d)|(,)?+]/g, "");
    };
  });

  function sendForm(elem) {
    elem.addEventListener('submit', function (e) {
      e.preventDefault();
      elem.appendChild(statusMessage);
      var formData = new FormData(elem);
      var obj = {};
      formData.forEach(function (value, key) {
        obj[key] = value;
      });
      var json = JSON.stringify(obj);

      function postData() {
        return new Promise(function (resolve, reject) {
          var request = new XMLHttpRequest();
          request.open('POST', './server.php');
          request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

          request.onreadystatechange = function () {
            if (request.readyState < 4) {
              resolve();
            } else if (request.readyState === 4) {
              if (request.status == 200 && request.status < 300) {
                resolve();
              } else {
                reject();
              }
            }
          };

          request.send(json);
        });
      }

      function clearInput() {
        for (var i = 0; i < input.length; i++) {
          input[i].value = '';
        }
      }

      postData(formData).then(function () {
        return statusMessage.textContent = message.loading;
      }).then(function () {
        statusMessage.textContent = message.success;
      }).catch(function () {
        return statusMessage.textContent = message.failure;
      }).then(clearInput);
    });
  }

  Array.from(forms).forEach(function (form) {
    sendForm(form);
  });
}

module.exports = form;

/***/ }),

/***/ "./parts/images.js":
/*!*************************!*\
  !*** ./parts/images.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function images() {
  var works = document.querySelectorAll('.works .row div');
  works.forEach(function (work) {
    work.addEventListener('click', function (event) {
      event.preventDefault();
      var popupImage = document.createElement('div');
      var curentImage = document.createElement('img');
      var curentImageHref = work.querySelector('a').getAttribute('href');
      popupImage.classList.add('popup');
      curentImage.setAttribute('src', curentImageHref);
      popupImage.appendChild(curentImage);
      document.body.appendChild(popupImage);
      popupImage.style.display = 'flex';
      popupImage.style.alignItems = 'center';
      popupImage.style.justifyContent = 'center';
      popupImage.addEventListener('click', function (event) {
        if (event.target.classList.contains('popup')) {
          popupImage.style.display = 'none';
          document.body.removeChild(popupImage);
        }
      });
    });
  });
}

module.exports = images;

/***/ }),

/***/ "./parts/modal.js":
/*!************************!*\
  !*** ./parts/modal.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modal() {
  var btn = document.getElementsByClassName('popup_engineer_btn')[0],
      popup = document.getElementsByClassName('popup_engineer')[0],
      close = document.getElementsByClassName('popup_close')[1];
  btn.addEventListener('click', function () {
    popup.style.display = 'flex';
  });
  close.addEventListener('click', function () {
    popup.style.display = 'none';
  });
  popup.addEventListener('click', function (event) {
    if (event.target == popup) {
      popup.style.display = 'none';
    }
  });
}

module.exports = modal;

/***/ }),

/***/ "./parts/tabs.js":
/*!***********************!*\
  !*** ./parts/tabs.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {
  var glazingSlider = document.querySelector('.glazing_slider'),
      glazingBlock = document.querySelectorAll('.glazing_block'),
      glazingRow = document.querySelectorAll('.glazing .row');
  hideTabContent(1, glazingRow);
  glazingSlider.addEventListener('click', function (event) {
    var target = event.target;

    if (!target.classList.contains('glazing_block')) {
      target = target.parentNode;
    }

    if (target) {
      for (var i = 0; i < glazingBlock.length; i++) {
        glazingBlock[i].querySelector('a').classList.remove('active');

        if (glazingBlock[i] == target) {
          hideTabContent(0, glazingRow);
          showTabContent(i, glazingRow);
        }
      }

      target.querySelector('a').classList.add('active');
    }
  });
  var decorationSlider = document.querySelector('.decoration_slider'),
      decorationItem = document.querySelectorAll('.decoration_item'),
      decorationRow = document.querySelectorAll('.decoration_tab');
  hideTabContent(1, decorationRow);
  decorationSlider.addEventListener('click', function (event) {
    var target = event.target;

    if (!target.classList.contains('no_click') && !target.classList.contains('after_click')) {
      target = target.parentNode;
    }

    target = target.parentNode;

    if (!target.querySelector('div').classList.contains('after_click')) {
      for (var i = 0; i < decorationItem.length; i++) {
        decorationItem[i].querySelector('div').classList.remove('after_click');
        decorationItem[i].querySelector('div').classList.add('no_click');

        if (decorationItem[i] == target) {
          hideTabContent(0, decorationRow);
          showTabContent(i, decorationRow);
        }
      }

      target.querySelector('div').classList.add('after_click');
      target.querySelector('div').classList.remove('no_click');
    }

    target.querySelector('a').focus();
  });

  function hideTabContent(key, slideItems) {
    for (var i = key; i < slideItems.length; i++) {
      slideItems[i].classList.remove('show');
      slideItems[i].classList.add('hide');
    }
  }

  function showTabContent(key, slideItems) {
    if (slideItems[key].classList.contains('hide')) {
      slideItems[key].classList.remove('hide');
      slideItems[key].classList.add('show');
    }
  }
}

module.exports = tabs;

/***/ }),

/***/ "./parts/timePopup.js":
/*!****************************!*\
  !*** ./parts/timePopup.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timePopup() {
  var popup = document.getElementsByClassName('popup')[0],
      close = document.getElementsByClassName('popup_close')[0],
      phonelink = document.getElementsByClassName('phone_link')[0],
      phonelink1 = document.getElementsByClassName('phone_link')[1];
  phonelink.addEventListener('click', function (e) {
    e.preventDefault();
    popup.style.display = 'flex';
  }, false);
  phonelink1.addEventListener('click', function (e) {
    e.preventDefault();
    popup.style.display = 'flex';
  }, false);
  close.addEventListener('click', function () {
    popup.style.display = 'none';
  });
  popup.addEventListener('click', function (event) {
    if (event.target == popup) {
      popup.style.display = 'none';
    }
  });
  setTimeout(function () {
    popup.style.display = 'flex';
  }, 60000);
}

module.exports = timePopup;

/***/ }),

/***/ "./parts/timer.js":
/*!************************!*\
  !*** ./parts/timer.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer() {
  var deadline = '2019-04-07';

  function getTimeRamaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor(t / 1000 % 60),
        minutes = Math.floor(t / 1000 / 60 % 60),
        hours = Math.floor(t / 1000 / 60 / 60 % 24);
    days = Math.floor(t / 1000 / 60 / 60 / 24 % 24);

    if (days < 10) {
      days = "0".concat(days);
    }

    if (hours < 10) {
      hours = "0".concat(hours);
    }

    if (minutes < 10) {
      minutes = "0".concat(minutes);
    }

    if (seconds < 10) {
      seconds = "0".concat(seconds);
    }

    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function setClock(id, endtime) {
    var timer = document.getElementById(id),
        days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      var t = getTimeRamaining(endtime);
      days.textContent = t.days;
      hours.textContent = t.hours;
      minutes.textContent = t.minutes;
      seconds.textContent = t.seconds;

      if (t.total <= 0) {
        clearInterval(timeInterval);
        days.textContent = "00";
        hours.textContent = "00";
        seconds.textContent = "00";
        minutes.textContent = "00";
      }
    }
  }

  setClock('timer', deadline);
}

module.exports = timer;

/***/ })

/******/ });