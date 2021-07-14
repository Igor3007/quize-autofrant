/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//import "%components%/tabs/tabs";
//import "%components%/form/form";
//import "%components%/select/select";
//// import "%components%/mobile-menu/mobile-menu"; 
//import "%components%/video/video";

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

//import "%modules%/header/header";
//import "%modules%/mobile-menu-button/mobile-menu-button";
// import "%modules%/video/video";
// import "%modules%/menu/menu";
// import "%modules%/popup-catalog/popup-catalog";
// import "%modules%/footer/footer";

/* home */
// import "%modules%/banner-home/banner-home";
// import "%modules%/slider-home/slider-home";
// import "%modules%/product-slider-home/product-slider-home";
// import "%modules%/catalog/minicard/minicard";
// import "%modules%/catalog/similar-product/similar-product";
// import "%modules%/top-brands/top-brands";

/* catalog */
// import "%modules%/catalog/catalog-filter/catalog-filter";

/* card */
// import "%modules%/card-moreinfo/card-moreinfo";
// import "%modules%/cart-similar/cart-similar";
// import "%modules%/mapsfilter/mapsfilter";
// import "%modules%/card-callback/card-callback";

/* popup */
// import "%modules%/right-popup/right-popup";
// import "%modules%/form-login/form-login";
// import "%modules%/basket/basketcard/basketcard";

/* basket */
// import "%modules%/basket/basket-aside/basket-aside";

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_import_modules__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_import_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_svg4everybody_dist_svg4everybody_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/svg4everybody/dist/svg4everybody.js */ "./node_modules/svg4everybody/dist/svg4everybody.js");
/* harmony import */ var _node_modules_svg4everybody_dist_svg4everybody_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg4everybody_dist_svg4everybody_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery_inputmask_dist_jquery_inputmask_bundle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery.inputmask/dist/jquery.inputmask.bundle */ "./node_modules/jquery.inputmask/dist/jquery.inputmask.bundle.js");
/* harmony import */ var jquery_inputmask_dist_jquery_inputmask_bundle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery_inputmask_dist_jquery_inputmask_bundle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);





_node_modules_svg4everybody_dist_svg4everybody_js__WEBPACK_IMPORTED_MODULE_2___default()();
jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).ready(function () {
  /*
  Reference: http://jsfiddle.net/BB3JK/47/
  */
  jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-multitel="code"]').each(function () {
    var $this = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this),
        numberOfOptions = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).children('option').length;
    $this.addClass('select-hidden');
    $this.wrap('<div class="af-select"></div>');
    $this.after('<div class="select-styled"></div>');
    var $styledSelect = $this.next('div.select-styled');
    var option1 = $this.children('option').eq(0).text();
    var value1 = $this.children('option').eq(0).val();
    $styledSelect.html('<span><span class="af-country af-country-' + value1 + '"></span>' + option1 + '</span>');
    var $list = jquery__WEBPACK_IMPORTED_MODULE_4___default()('<ul />', {
      'class': 'select-options'
    }).insertAfter($styledSelect);

    for (var i = 0; i < numberOfOptions; i++) {
      // $('<li />', {
      //     text: $this.children('option').eq(i).text(),
      //     rel: $this.children('option').eq(i).val()
      // }).appendTo($list);
      var option = $this.children('option').eq(i).text();
      var value = $this.children('option').eq(i).val();
      var html = '<li rel="' + value + '" ><span class="af-country af-country-' + value + '" ></span>' + option + '</li>';
      $list.append(html);
    }

    var $listItems = $list.children('li');
    $styledSelect.on('click', function (e) {
      e.stopPropagation();
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('div.select-styled.active').not(this).each(function () {
        jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).removeClass('active').next('ul.select-options').hide();
      });
      jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).toggleClass('active').next('ul.select-options').toggle();
    });
    $listItems.on('click', function (e) {
      e.stopPropagation();
      $styledSelect.html('<span>' + jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).html() + '</span>').removeClass('active');
      $this.val(jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).attr('rel'));
      $list.hide(); //console.log($this.val());
    });
    jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).on('click', function () {
      $styledSelect.removeClass('active');
      $list.hide();
    });
  });
  /* ============================================================================== */

  /* ============================================================================== */

  jquery__WEBPACK_IMPORTED_MODULE_4___default()('select').each(function () {
    var $this = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this),
        numberOfOptions = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).children('option').length;
    $this.addClass('select-hidden');
    $this.wrap('<div class="af-select"></div>');
    $this.after('<div class="select-styled"></div>');
    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.html('<span>' + $this.children('option').eq(0).text() + '</span>');
    var $list = jquery__WEBPACK_IMPORTED_MODULE_4___default()('<ul />', {
      'class': 'select-options'
    }).insertAfter($styledSelect);

    for (var i = 0; i < numberOfOptions; i++) {
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('<li />', {
        text: $this.children('option').eq(i).text(),
        rel: $this.children('option').eq(i).val()
      }).appendTo($list);
    }

    var $listItems = $list.children('li');
    $styledSelect.on('click', function (e) {
      e.stopPropagation();
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('div.select-styled.active').not(this).each(function () {
        jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).removeClass('active').next('ul.select-options').hide();
      });
      jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).toggleClass('active').next('ul.select-options').toggle();
    });
    $listItems.on('click', function (e) {
      e.stopPropagation();
      $styledSelect.html('<span>' + jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).text() + '</span>').removeClass('active');
      $this.val(jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).attr('rel'));
      $list.hide(); //console.log($this.val());
    });
    jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).on('click', function () {
      $styledSelect.removeClass('active');
      $list.hide();
    });
  });
  /* ======================================================= */

  jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).ready(function () {
    //===========================
    function quize() {
      this.block = '.quiz';
      this.container = '.afq-question__stage';
      this.item = '.afq-question__pane';
      this.dotsContainer = '.quiz__mark';
      this.countSlide = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this.item).length;
      this.slideActive = 1;

      this.init = function () {
        this.changeStage();
        this.nav();
        this.renderDots(this.slideActive);
      };

      this.changeStage = function () {
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-quiz-count="current"]').text(this.slideActive);
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-quiz-count="total"]').text(this.countSlide);
      };

      this.cahngeSlide = function (index) {
        jquery__WEBPACK_IMPORTED_MODULE_4___default()(this.item).removeClass('active');
        jquery__WEBPACK_IMPORTED_MODULE_4___default()(this.item).eq(index - 1).addClass('active');
        this.changeStage();
        this.nav();
        this.renderDots(this.slideActive);
      };

      this.nextSlide = function () {
        if (this.slideActive < this.countSlide) {
          this.slideActive = this.slideActive + 1;
          this.cahngeSlide(this.slideActive);
        }
      };

      this.prevSlide = function () {
        if (this.slideActive > 1) {
          this.slideActive = this.slideActive - 1;
          this.cahngeSlide(this.slideActive);
        }
      };

      this.renderDots = function (activeSlide) {
        jquery__WEBPACK_IMPORTED_MODULE_4___default()(this.dotsContainer).empty();

        for (var i = 1; i <= this.countSlide; i++) {
          var active = i <= activeSlide ? 'active' : '';
          jquery__WEBPACK_IMPORTED_MODULE_4___default()(this.dotsContainer).append('<span class="' + active + '"></span>');
        }
      };

      this.nav = function () {
        // говно какоето
        if (this.slideActive == 1) {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-quiz-nav="prev"]').hide();
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-quiz-nav="prev"]').show();
        }

        if (this.slideActive == this.countSlide) {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-quiz-nav="next"]').hide();
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-quiz="send"]').attr('style', 'display: flex');
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-quiz-nav="next"]').show();
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-quiz="send"]').hide();
        }
      };
    }

    var hst = new quize();
    hst.init();
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-quiz-nav="prev"]').on('click', function (event) {
      hst.prevSlide();
    });
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-quiz-nav="next"]').on('click', function (event) {
      hst.nextSlide();
    });
    /* =========================================== */

    jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).on('click', '[data-quiz-nav="next"], [data-quiz-nav="prev"]', function (event) {
      event.preventDefault();
    });
    /* =========================================== */

    jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).on('click', '[data-quiz="open"]', function (event) {
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('.quiz').toggleClass('open');
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('html').toggleClass('hidden');
    });
    /* =========================================== */

    jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).on('click', '.quiz__close', function (event) {
      jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).parents('.quiz').removeClass('open');
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('html').removeClass('hidden');
    });
  });
  jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-multitel="input"]').inputmask('(999)999-99-99');
});
jquery__WEBPACK_IMPORTED_MODULE_4___default()('select').on('change', function (event) {//alert('eee')
});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map