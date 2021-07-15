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

/***/ "./src/js/carObj.js":
/*!**************************!*\
  !*** ./src/js/carObj.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'audi': {
    'brand': 'Audi',
    'model': ['Audi 100 (45 кузов) (1991-1994)', 'Audi A3 Sportback(хб) 5дверный кузов 8V, с 2012г  ', 'Audi A3 sedan кузов 8V, с 2012г  ', 'Audi Q3 с 2010г.-2018.джип', 'Audi A6 (C-4 кузов) седан', 'Audi A6 (C-5 кузов) (1997-2005)', 'Audi А6 (45 кузов) (1994-1997)  универсал', 'Audi А6 (45 кузов) (1994-1997) седан', 'Audi А6 (45 кузов) (1994-1997) седан Quattro ', 'Audi А6 (45 кузов) (1994-1997) универсал Quattro', 'Аudi A3 (2003-2008) ', 'Аudi A4 В8 седан с 2007г по 2015г', 'Аudi A4 В8 универсал с 2007г по 2015г']
  },
  'bmw': {
    'brand': 'BMW',
    'model': ['BMW 318 (90 кузов) (2005-2011)', 'ВMW 320 (90 кузов) (2005-2011)', 'BMW X1 ( с 2009г до 2015г ) кузов Е84', 'BMW X3 F25  с 2010г']
  },
  'cherry': {
    'brand': 'Cherry',
    'model': ['Cherry Tiggo FL (2013 - по наст. время)', 'Cherry Tiggo (2006- 2012) (аналог Тойота Рав4 до 2005г)']
  },
  'Citroen': {
    'brand': 'Citroen',
    'model': ['Citroen C4 c 2012 г. седан', 'Citroen C4 Aircross(аналог Mitsubishi ASX c 2010-2013)', 'Citroen C4 c 2004г- 2011г хэтчбек', 'Citroen C5 2006 г. (2001-2008) седан', 'Citrоen Berlingo 2e поколение(аналог Пежо Партнер 2 с 2008г)']
  },
  'Chevrolet': {
    'brand': 'Chevrolet',
    'model': ['Chevrolet Aveo Sedan (c 2011 по наст.время)', 'Chevrolet Aveo Hatcback (с 2011 по наст.время)', 'Chevrolet Aveo до 2011г Т250 седан', 'Chevrolet Aveo до 2011г Т250 х/б', 'Chevrolet Captiva (2006- по 2014г и с 2014г по н.в.) ', 'Chevrolet Cruze Hatchback (2011- по наст.время)', 'Chevrolet Cruze универсал (2011- по наст.время)', 'Chevrolet Cruze Sedan (2008 - по наст.время)', 'Chevrolet Cobalt  2011-2015', 'Chevrolet Lacetti Sedan (2003-по наст.время) (аналог Деу Джентра)', 'Chevrolet Lacetti Хэтчбек , универсал (2003-по наст.время) (аналог Деу Джентра)', 'Chevrolet Lanos (2005-наст время) ', 'Chevrolet Orlando 5 мест (2010-2012) ', 'Chevrolet Orlando 5 мест с 2013года', 'Chevrolet Orlando 7 мест (2010-2012)', 'Chevrolet Orlando 7 мест с 2013 года  ', 'Chevrolet Spark (2010-2013)', 'Chevrovet Niva до 2009года ', 'Chevrovet Niva с 2009 по 2014г Бертони  ', 'Chevrovet Niva с 2014г по 2016г ', 'Chevrovet Niva с 2016г ', 'Chevrovet Niva с 2017г ']
  },
  'Datsun': {
    'brand': 'Datsun',
    'model': ['Datsun mi-Do(аналог Датсун он-До)', 'Datsun On-Do']
  },
  'Daewoo': {
    'brand': 'Daewoo',
    'model': ['Daewoo Gentra  (копия lacetti sd)', 'Daewoo Matiz ( с 1998 по н в)', 'Daewoo Nexia 1995- 2008', 'Daewoo Nexia с 2008г по н.в.']
  },
  'Geely': {
    'brand': 'Geely',
    'model': ['Geely Coolray', 'Geely Emgrand КУЗОВ EC7  до 2016г ЛЮКС', 'Geely Emgrand КУЗОВ EC7 FE-1 до 2016г ', 'Geele Emgrand X7 с 2013г до 2019']
  },
  'Great': {
    'brand': 'Great',
    'model': ['Great Wall Hover H3(H5) с 2011г']
  },
  'Fiat': {
    'brand': 'Fiat',
    'model': ['Fiat Albea']
  },
  'Ford': {
    'brand': 'Ford',
    'model': ['Ford EcoSport 2014', 'Ford EcoSport с  2018г', 'Ford Fiesta (c 2008 по 2014г))', 'Ford Fiesta (c 2015 по н.в.) седан,хэтчбек', 'Ford Focus 2 (2004-2011)   Ghia', 'Ford Focus 2 3 дверный', 'Ford Focus 2 komfort и ambiente (2004-2011) ', 'Ford Focus 3 (Комплектация Titanium) с 2011', 'Ford Focus 3 (Комплектация Trend Sport) с 2011', 'Ford Focus 3 (Комплектация Trend) с 2011', 'Ford Fusion (2002 -2012)  ', 'Ford Kuga 2 2012 до 2017г', 'Ford Kuga 2008-2012г(не титаниум)                ', 'Ford Kuga 2008-2012г(не титаниум) (Аналог Форд Фокус 2)', 'Ford Kuga c 2017г рестайлинг - кожаный салон', 'Ford Kuga c 2017г рестайлинг - тканевый салон', 'Ford Mondeo III c 2000 по 2007 седан (Тренд)', 'Ford Mondeo III c 2000 по 2007 седан(Титаниум) ', 'Ford Mondeo IV (комплектация Trend) ', 'Ford Mondeo IV( титаниум )', 'Ford Transit ', 'Ford Transit c 2015 ', 'Ford Mondeo V c 2015г.']
  },
  'Haval': {
    'brand': 'Haval',
    'model': ['Haval F7']
  },
  'Honda': {
    'brand': 'Honda',
    'model': ['Honda Acord (с 2003 по 2008) 7е поколение ', 'Honda Acord седан   8 (2007-2012)', 'Honda Civic 4D (c 2006 -2011)  седан', 'Honda CR-V (1е поколение1995-2001гг.)', 'Honda CR-V (3-е ПОКОЛЕНИЕ!!!!!  2006-2012г.)', 'Honda CR-V (4-е ПОКОЛЕНИЕ!!!!!  С 2012г.)']
  },
  'Hyundai': {
    'brand': 'Hyundai',
    'model': ['Hyundai Accent (С 2000 по 2010г) (с 2011г по н в солярис )', 'Hyundai Creta с 2016г', 'Hyundai Elantra 4 поколение с 2006 -2011г', 'Hyundai Elantra 5 поколение с 2011-2016г ', 'Hyundai Elantra 6 поколение с 2016г ', 'Hyundai Getz(с 2002 - 2011)', 'Hyundai Grand Starex 8 мест', 'Hyundai H-1 c 2007г 8 мест', 'Hyundai I30 (до 2012г)', 'Hyundai I30 (с 2012 - по наст. время)', 'Hyundai I40 седан ', 'hyundai ix35 (с 2009 по н в )', 'Hyundai SantaFe (2007 - 2012) ', 'Hyundai SantaFe (с 2013 по 2018 г.)', 'Hyundai SantaFe с 2019 г. 5мест и 7мест', 'Hyundai SantaFe Classic', 'Hyundai Solaris 2 с 2017г (аналог Киа Рио 4 седан с 2017г)', 'Hyundai Solaris I Hatchbaсk (2011-по 2017г)', 'Hyundai Solaris I sedan(2011-по 2017г)', 'Hyundai Solaris sedan (60/40) (с 2011 по 2017г.)', 'Hyundai Sonata 7 с 2017г', 'Hyundai Sonata 6ср с 2010г', 'Hyundai Sonata EF 5 кузов(c 2004г по 2008) ', 'Hyundai Sonata NF 5 кузов c 2004г по 2010', 'Hyundai Tucson (2004-2010) ', 'Hyundai Tucson (2004-2010) ', 'Hyundai Tucson 3 поколение с 2016г ', 'Hyundai Tucson  с 2018г ']
  },
  'KIA': {
    'brand': 'KIA',
    'model': ['KIA Ceed (с 2007 до 2013г )', 'KIA Ceed 2 (c 2013 по 2018)', 'KIA Ceed 3 з.сп.  60/40', 'KIA Cerato седан (1е поколение с 2003-2008)', 'KIA Cerato седан(2е поколениес 2009-2012)', 'KIA Cerato седан,универсал(3е поколение с 2013 по 2018)', 'KIA Cerato седан c 2019(4 пок.)', 'Kia K5', 'Kia Optima с 2015г ', 'Kia Picanto 2 c 2011г по 2017г', 'Kia Picanto 3 c 2017г', 'Kia Rio 2 c 2005 -2011 седан ', 'Kia rio 2 c 2009 -2011г Хэтч бэк ', 'KIA Rio 3 (HB)Хейчбек ( 2011 по 2017г) ', 'KIA Rio 3 (SD)Седан (с 2011 по 2017г) ', 'Kia Rio 4 с 2017г (аналог Хендай Солярис 2 седан с 2017г)', 'Kia Rio XLine с 2017г(ХБ) и Kia Rio X  с 2020', 'Kia Seltos 2020', 'KIA Sorente 3 PRIME (5/7 мест) с 2016г.', 'KIA Sorento 2 до рестайлинга  (с 2009 до 2012г)', 'KIA Sorento 2 рестайлинг  с 2012г ', 'KIA Sorento с 2002г по 2009г ', 'KIA Sorento с 2002г по 2009г', 'Kia Soul с 2009г до 2014г(1 поколение)', 'Kia Soul с 2014г(2 поколение)', 'Kia Soul с 2019', 'KIA Spectra(с 2000 по 2009г) ', 'KIA Sportage 2', 'KIA Sportage 4 ( с 2016г)', 'KIA Sportage III ( c 2010 по 2016г)', 'Kia Venga c 2010г - нв ']
  },
  'Lifan': {
    'brand': 'Lifan',
    'model': ['Lifan Solano (С 2009 - до 2016г)', 'Lifan X-60 с 2016г', 'Lifan X-60 (с 2011 - 2015г.в.)']
  },
  'Lexus': {
    'brand': 'Lexus',
    'model': ['Lexus NX 200', 'Lexus RX 350 с 2003-2009 джип', 'Lexus RX 350 с 2009г-2015г ']
  },
  'Mazda': {
    'brand': 'Mazda',
    'model': ['Mazda 3 Sedan  с 2009-2013', 'Mazda 3 Sedan (с 2013-по наст.время)', 'Mazda 3 с 2003 до 2009г Sedan ', 'Mazda 3 с 2003 до 2009г хэтчбек', 'Mazda 3 хэтчбек  с 2009-2013 ', 'Mazda 3 хэтчбек /седан с 2019', 'Mazda 6 c 2013 по 2018 г. седан', 'Mazda 6 Hatchback(c 2007-2012) спортбек', 'Mazda 6 седан c 2002 - 2007', 'Mazda 6 седан (c 2007 - 2012) ', 'Mazda 6 седан  c 2019г', 'Mazda CX 5 2е поколение с 2017гАктив', 'Mazda CX 5 2е поколение с 2017гДрайв', 'Mazda CX 5 до рестайлинга  (компл.Active,Supreme ) (2012 по 2015г)', 'Mazda CX 5 компл.Drive (2012- по 2017)', 'Mazda CX 5 Рестайлинг с 2015г по н.в. (компл.Active,Supreme )', 'Mazda CX -7 (2006-2012)']
  },
  'Mitsubishi': {
    'brand': 'Mitsubishi',
    'model': ['Mitsubishi ASX  с 2010 по 2013г(аналог Ситроен С4 Аиркросс)', 'Mitsubishi ASX  с 2014', 'Mitsubishi ASX  с 2017', 'Mitsubishi Galant c 2004г.-н.в.седан.', 'Mitsubishi L200 4 поколениес 2007г до 2013г', 'Mitsubishi L200 4 поколениес 2013г до 2015г(переходная)', 'Mitsubishi L200 5 поколение с 2015г', 'Mitsubishi Lance X СПОРТБЭК ИНВАЙТ до 2012 ', 'Mitsubishi Lance X СПОРТБЭК ИНТЕНСЕ до 2012', 'Mitsubishi Lancer IX Sedan (invite)', 'Mitsubishi Lancer IX универсал (invite)', 'Mitsubishi Lancer X до 2012   ИНТЕНСЕ', 'Mitsubishi Lancer X до 2012 ИНВАЙТ', 'Mitsubishi Lancer X с 2012  (инвайт+)', 'Mitsubishi Outlander 3 c 2012 по н.в.', 'Mitsubishi Outlander 3 c 2018 по н.в.', 'Mitsubishi Outlander XL (аналог Пежо 4007)', 'Mitsubishi Pajero 4  с 2007г', 'Mitsubishi Pajero IO Pinin c1998-2008 джип Москва', 'Mitsubishi Pajero Sport 1 (1996г по 2008г автомат)', 'Mitsubishi Pajero Sport 2 (2008г по н в механика)', 'Mitsubishi Pajero Sport 2 (2008г по н.в)', 'Mitsubishi Pajero Sport 3']
  },
  'Nissan': {
    'brand': 'Nissan',
    'model': ['Nissan Almera 16 кузов Седан ( с 2000 по 2006)', 'Nissan Almera 16 кузов Хэч Бэк  ( с 2000 по 2006)', 'Nissan Almera 2014 ', 'Nissan Almera Classic ', 'Nissan Almera Classic ', 'Nissan Juke  ( с 2010 до 2015г)', 'Nissan Note   (с 2004 по наст)', 'Nissan Note   (с 2004 по наст)', 'Nissan Pathfinder 3 ( с 2005 - 2015г)', 'Nissan Pathfinder 3 ( с 2005 - 2015г', 'Nissan Primera P-12  ( с 2001 по 2007)', 'Nissan Qashkai   ( с 2007по 2010 или с 2010 до 2013) ', 'Nissan Qashkai +2 ( 5 сидений)  с 2007 по 2013 ', 'Nissan Qashkai с 2014 ', 'Nissan Sentra 2015 с 2012г ', 'Nissan Teana (с 2008 по 2014)', 'Nissan Teana (с 2008 по 2014)задние  подгол.встроенные', 'Nissan Terrano с 2014г до 2017г  Элеганс', 'Nissan Terrano с 2014г до 2017г Комфорт', 'Nissan Terrano с 2017г  (аналог Рено Дастер с 2017г)', 'Nissan Tiida седан 1е поколение (с 2004 по 2014г)', 'Nissan Tiida Хэч бэк 1е поколение ( с 2004 по 2014г', 'Nissan X Trail T-32 с 2015г ', 'Nissan X Trail Т-30  ( с 2001 до 2007)', 'Nissan X Trail Т-30  ( с 2001 до 2007)(коламбия)', 'Nissan X Trail Т-31   ( с 2007 по 2015г)']
  },
  'Opel': {
    'brand': 'Opel',
    'model': ['Opel Antara 2006 - 2011г', 'Opel Antara c 2011г по н.в.', 'Opel Astra H ( до 2006г) ', 'Opel Astra H (3 дверная) ( с 2004-по н в ) комплектация космо ', 'Opel Astra H (3 дверная) ( с 2004-по н в ) комплектация энжой', 'Opel Astra H (5 дверная Hatchback) (с 2004 по н в) комплектация космо ', 'Opel Astra H (5 дверная Hatchback) (с 2004 по н в) комплектация энжой', 'Opel Astra H (5 дверная универсал )( с 2004 по н в )комплектация  космо', 'Opel Astra H (5 дверная универсал )( с 2004 по н в )комплектация энжой', 'Opel Astra H (седан ) к-я космо  ', 'Opel Astra H (седан ) к-я энжой  ', 'Opel Astra J ( ХБ 5 дверный) Космо  (КОМБИНИРОВАННЫЙ)  с 2009 по наст', 'Opel Astra J ( ХБ 5 дверный)   ( с 2009 по наст)', 'Opel Astra J (3 дверная)   ( с 2009 по наст) ( на спорт не шьем) ', 'Opel Astra J седан  ', 'Opel Corsa D (3дверная) с 2006г ', 'Opel Corsa D (5дверная) с 2006г', '"Opel Insignia седан,универсал,хэтчбек ', 'sport turer по н.в.', 'Opel Meriva A ( с 2003 - 2010г)', 'Opel Meriva B', 'Opel Mokka', 'Opel Zafira B  (5 мест) с 2005г', 'Opel Zafira B  (средн сид,целое, средн спинка 50/50, средн подлок 7 мест) с 2005г']
  },
  'Peugeot': {
    'brand': 'Peugeot',
    'model': ['Peugeot 308 с 2007г ', 'Peugeot 4007(аналог Mitsubishi Outlander XL )', 'Peugeot 408', 'Peugeot Partner 2 c 2008г шьется по Citrоen Berlingo 2e поколение']
  },
  'Renault': {
    'brand': 'Renault',
    'model': ['Renault Arkana 2019 ', 'Renault Duster Dakar ', 'Renault Duster до 2015г  ', 'Renault Duster до 2015г   Privilege ', 'Renault Duster с 2015г', 'Renault Duster с 2017г(аналог Ниссан Терано с 2017г)', 'Renault Duster c 2021г', 'Renault Fluence по н. в  седан', 'Renault Fluence по н.в седан', 'Renault Kaptur с 2016г', 'Renault Koleos 2008г ', 'Renault Koleos 2008г ', 'Renault Logan 2 ПСп Большая ', 'Renault Logan 2 ПСп Маленькая ', 'Renault Logan 2 ПСп Маленькая ', 'Renault Logan до 2013', 'Renault megan 2 Autentic с 2002-2008г', 'Renault megan 2 Extreme с 2002-2008г ', 'Renault Megan 3 (универсал) ( гранд тур не шьем)  с 2008г', 'Renault Megan 3 (хетчбэк) с 2008г', 'Renault Sandero 1 (спинка 60/40) по н в (stepway ?)', 'Renault Sandero 1 (спинка цельная) по н в', 'Renault Sandero 2 2014г Acces,Comfort, Privelege Псп маленькая', 'Renault Sandero 2 2014г Acces,Comfort, Privelege Псп большая', 'Renault Sandero 2 2014г Stapwey ', 'Renault Symbol 1 (2002 -2007) ', 'Renault Symbol 1 (2002 -2007) ']
  },
  'Seat': {
    'brand': 'Seat',
    'model': ['Seat Ibiza с 2008г х/б']
  },
  'Skoda': {
    'brand': 'Skoda',
    'model': ['Skoda Fabia 2 c 2007-2010', 'Skoda Fabia 2 c 2007-2010', 'Skoda Fabia 2 c 2010-2013', 'Skoda Karog Ambition', 'Skoda Karoq Active', 'Skoda Karoq Style', 'Skoda Kodiaq Hockey Edition 5 мест', 'Skoda Kodiaq 5 мест', 'Skoda Kodiaq 5 мест', 'Skoda Octavia A5 (комплектация Elegance ) 2004-2012 рест.2008-2012', 'Skoda Octavia A5(комплектация Ambiente )', 'Skoda Octavia A5(комплектация Ambiente )', 'Skoda Oktavia A-7 ', 'Skoda Octavia A7 Hockey Edition ', 'Skoda Octavia Scout A-7', 'Skoda Octavia  A-8', 'Skoda Octavia Tour (не спорт) ', 'Skoda Rapid ', 'Skoda Rapid спорт сидения ', 'Skoda superb 2 е пок. с2008 по 2014 ', 'Skoda Yeti', 'Skoda Yeti ']
  },
  'Ssang': {
    'brand': 'Ssang',
    'model': ['Ssang Yong Actyon New с 2010 по наст.время', 'Ssang Yong Kyron']
  },
  'Subaru': {
    'brand': 'Subaru',
    'model': ['Subaru Forester 3 (2008-2012)', 'Subaru Forester 4 c 2013г.джип', 'Subaru Impreza 3 с 2007-2011']
  },
  'Suzuki': {
    'brand': 'Suzuki',
    'model': ['Suzuki Grand Vitara 5 дверный  2005 -2014', 'Suzuki SX 4 HatchBack   до 2014г', 'Suzuki SX 4    II поколение(аналог Сузуки Витара с 2015г)', 'Suzuki VITARA c 2015 г']
  },
  'Toyota': {
    'brand': 'Toyota',
    'model': ['Toyota Auris (2006-2012г)', 'Toyota Avensis с 2003 по 2009г седан', 'Toyota Avensis с 2003 по 2009г седан', 'Toyota Camry c 2006-2011 г.кузов XV 40  . ЛЮКС ', 'Toyota Camry c 2006-2011 г.Кузов XV 40  НЕ ЛЮКС', 'Toyota Camry с 2011г по наст. Врем. Кузов XV 50 - 55 ', 'Toyota Camry 70 кузов', 'Toyota Corolla с 2002г до 2007 г. седан', 'Toyota Corolla с 2007  седан  150 кузов', 'Toyota Corolla с 2014', 'Toyota Corolla с 2019 задние подголовники литые со спинкой', 'Toyota Corolla с 2019 задние подголовники отдельные', 'Toyota Fortuner 2019г(5 и 7 мест)', 'Toyota Highlander с 2008 по 2013г', 'Toyota Hilux (7 поколение с 2005 до 2015г.)', 'Toyota Hilux 8 поколение с 2015г', 'Toyota Land Cruiser 100   (1997-2007)', 'Toyota Land Cruiser Prado 120  5 местный только!!!!', 'Toyota Land Cruiser Prado 150 компл. Standart) (Eleganse)5 мест до рестайлинга', 'Toyota Land Cruiser Prado 150 комплектация Comfort 5 мест до рестайлинга', 'Toyota Land Cruiser Prado 150 компл. Standart) (Eleganse)5 мест  рестайлинг с 2018', 'Toyota Land Cruiser Prado 150 комплектация Comfort 5 мест  рестайлинг с 2018', 'Toyota Land Cruiser 200', 'Toyota RAV-4 c 2013 г. ', 'Toyota RAV 4 с 19г рестайлинг', 'Toyota RAV-4 с 2000 до 2005 г(аналог Чери Тиго 2006-2012)', 'Toyota RAV-4 с 2005 по 2012 г. ', 'Toyota Yaris х/б с 2005г.', 'Toyota Verso 2 с 12г-нв']
  },
  'vw': {
    'brand': 'Vokswagen',
    'model': ['Vokswagen Polo c 2011 SD (Trendline,Comfortline,Allstar )', 'Vokswagen Polo рестайлин 2015г SD 60/40 в комплектации Highline ', 'Vokswagen Polo рестайлин 2020г  60/40(аналог Шкода Рапид с 2019г.)', 'Vokswagen Polo лифтбэк с 2020г (аналог Шкода Рапид Спортивные кресла)', 'Volkswagen Amarok(пикап) по 2016г', 'Volkswagen Golf 6', 'Volkswagen Golf 6 Plus', 'Volkswagen Golf 7 (5 дверная)', 'Volkswagen jetta c 2005 (V поколение)', 'Volkswagen jetta c 2011 (VI поколение) ', 'Volkswagen jetta с 2013  (VI поколение)  ', 'Volkswagen Caravelle (8 мест)', 'Volkswagen Crafter(передние кресла)', 'Volkswagen lupo c 1998 по 2005г', 'Volkswagen Multivan Т5 до 2015г 7мест Comfortline НЕ ТРАНСФОРМЕР', 'Volkswagen Multivan Т5 до 2015г 7мест ComfortlineТРАНСФОРМЕР', 'Volkswagen Passat B5( B5+) с 1996г ', 'Volkswagen Passat B6 с 2005 по 2010г с ', 'Volkswagen Passat B7 Trendline седан с 2010 по 2015г ', '"Volkswagen Passat B8 седан с 2015г ЗПл-', 'Volkswagen Passat B8 седан с 2015г ЗПл+  до 2020г', 'Volswagen Tiguan  I до 2017г', 'Volswagen Tiguan 2 c 2017г не трансформер', 'Volswagen Tiguan   I до 2017г ', 'Volswagen Tiguan 2 c 2017г трансформер', 'Volswagen Touareg  с 2011г по н.в. ']
  },
  'vaz': {
    'brand': 'ВАЗ',
    'model': ['ВАЗ 2107', 'ВАЗ 2108', 'ВАЗ 2109,21099', 'ВАЗ 2110', 'ВАЗ 2111', 'ВАЗ 2112', 'ВАЗ 2113', 'ВАЗ 2114', 'ВАЗ 2115', 'ВАЗ 21213 Нива (3-х дверная) с 94 по 2001г', 'ВАЗ 21214 Нива (3-х дверная) с 2001г', 'ВАЗ 21214 Нива (3-х дверная) с 2020', 'ВАЗ 2131 (5-и дверная) 2019г', 'ВАЗ 2131 (5-и дверная) до 2015г', 'ВАЗ 2170 Priora Sedan до 2014г', 'ВАЗ 2170 Priora Sedan с 2014г ', 'ВАЗ 2171 Priora универсал до 2013г ', 'ВАЗ 2171 Priora универсал с 2013г ', 'ВАЗ 2172 Priora HatchBack до 2013г ', 'ВАЗ 2172 Priora HatchBack с 2013г ', 'ВАЗ 2190 Гранта  седан или лифтбек', 'ВАЗ 2190 Гранта седан или лифтбек ', 'ВАЗ 2190 Гранта Кросс с 2019г универсал  ', 'ВАЗ 2190 Гранта с 2018г седан  ', 'ВАЗ 2190 Гранта с 2018г седан  ', 'Лада 4x4 Niva Urban ,Бронто  3 двери', 'Лада 4x4 Niva, Urban 3 двери с 2020г.', 'Лада Niva Travel 2021г', 'Лада Largus (5мест ) люкс', 'Лада Largus (5мест ) норма', 'Лада Largus 7 мест комплектация Люкс, Cross', 'Лада Largus 7 мест комплектация Норма', 'Лада Largus 5/7 мест /Лада Ларгус Кросс  (с 2020года) ', 'Лада Largus Кросс Квест 5 мест', 'Лада Vesta SW/ SWкросс', 'Лада Vesta седан (cross)', 'Лада Vesta Универсал ', 'Лада XRAY cross', 'Лада XRAY', 'Лада Калина (Sedan/Hatchback/Wagon)  11193', 'Лада Калина 2 с 2013г Седан, Хэтчбэк, универсал  БОЛЬШАЯ', 'Лада Калина 2 с 2013г Седан, Хэтчбэк, универсал МАЛЕНЬКАЯ', 'Лада Калина Cross   БОЛЬШАЯ ', 'Лада Калина Cross  МАЛЕНЬКАЯ']
  },
  'gaz': {
    'brand': 'ГАЗ',
    'model': ['ГАЗ  3110', 'Газель Некст(передние кресла)']
  },
  'yaz': {
    'brand': 'УАЗ',
    'model': ['УАЗ Patriot до 2014г пикап', 'УАЗ Patriot  до 2014г', 'Уаз Patriоt с 2014г до 2019г', 'Уаз Hunter ']
  }
});

/***/ }),

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
/* harmony import */ var _js_carObj__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../js/carObj */ "./src/js/carObj.js");
/* harmony import */ var _js_phoneCode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../js/phoneCode */ "./src/js/phoneCode.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);







_node_modules_svg4everybody_dist_svg4everybody_js__WEBPACK_IMPORTED_MODULE_2___default()();
jquery__WEBPACK_IMPORTED_MODULE_6___default()(document).ready(function () {
  /*
  Reference: http://jsfiddle.net/BB3JK/47/
  */
  for (var key in _js_phoneCode__WEBPACK_IMPORTED_MODULE_5__["default"]) {
    jquery__WEBPACK_IMPORTED_MODULE_6___default()('[data-multitel="code"]').append('<option value="' + key + '">' + _js_phoneCode__WEBPACK_IMPORTED_MODULE_5__["default"][key].code + '</option>');
  }

  jquery__WEBPACK_IMPORTED_MODULE_6___default()('[data-multitel="code"]').each(function () {
    var $this = jquery__WEBPACK_IMPORTED_MODULE_6___default()(this),
        numberOfOptions = jquery__WEBPACK_IMPORTED_MODULE_6___default()(this).children('option').length;
    $this.addClass('select-hidden');
    $this.wrap('<div class="af-select"></div>');
    $this.after('<div class="select-styled"></div>');
    var $styledSelect = $this.next('div.select-styled');
    var option1 = $this.children('option').eq(0).text();
    var value1 = $this.children('option').eq(0).val();
    $styledSelect.html('<span><span class="af-country af-country-' + value1 + '"></span>' + option1 + '</span>');
    var $list = jquery__WEBPACK_IMPORTED_MODULE_6___default()('<ul />', {
      'class': 'select-options'
    }).insertAfter($styledSelect);

    for (var i = 0; i < numberOfOptions; i++) {
      var option = $this.children('option').eq(i).text();
      var value = $this.children('option').eq(i).val();
      var html = '<li rel="' + value + '" ><span class="af-country af-country-' + value + '" ></span>' + option + '</li>';
      $list.append(html);
    }

    var $listItems = $list.children('li');
    $styledSelect.on('click', function (e) {
      e.stopPropagation();
      jquery__WEBPACK_IMPORTED_MODULE_6___default()('div.select-styled.active').not(this).each(function () {
        jquery__WEBPACK_IMPORTED_MODULE_6___default()(this).removeClass('active').next('ul.select-options').hide();
      });
      jquery__WEBPACK_IMPORTED_MODULE_6___default()(this).toggleClass('active').next('ul.select-options').toggle();
    });
    $listItems.on('click', function (e) {
      e.stopPropagation();
      var value = jquery__WEBPACK_IMPORTED_MODULE_6___default()(this).attr('rel');
      $styledSelect.html('<span>' + jquery__WEBPACK_IMPORTED_MODULE_6___default()(this).html() + '</span>').removeClass('active');
      $this.val(value);
      $list.hide();
      jquery__WEBPACK_IMPORTED_MODULE_6___default()('[data-multitel="input"]').inputmask("option", {
        mask: _js_phoneCode__WEBPACK_IMPORTED_MODULE_5__["default"][value].mask
      });
      jquery__WEBPACK_IMPORTED_MODULE_6___default()('[data-multitel="input"]').removeAttr('area-valid').val('').focus();
    });
    jquery__WEBPACK_IMPORTED_MODULE_6___default()(document).on('click', function () {
      $styledSelect.removeClass('active');
      $list.hide();
    });
  });
  /* ============================================================================== */

  /* ============================================================================== */

  jquery__WEBPACK_IMPORTED_MODULE_6___default()('select').each(function () {
    var $this = jquery__WEBPACK_IMPORTED_MODULE_6___default()(this),
        numberOfOptions = jquery__WEBPACK_IMPORTED_MODULE_6___default()(this).children('option').length;
    $this.addClass('select-hidden');
    $this.wrap('<div class="af-select"></div>');
    $this.after('<div class="select-styled"></div>');
    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.html('<span>' + $this.children('option').eq(0).text() + '</span>');
    var $list = jquery__WEBPACK_IMPORTED_MODULE_6___default()('<ul />', {
      'class': 'select-options'
    }).insertAfter($styledSelect);

    for (var i = 0; i < numberOfOptions; i++) {
      jquery__WEBPACK_IMPORTED_MODULE_6___default()('<li />', {
        text: $this.children('option').eq(i).text(),
        rel: $this.children('option').eq(i).val()
      }).appendTo($list);
    }

    var $listItems = $list.children('li');
    $styledSelect.on('click', function (e) {
      e.stopPropagation();
      jquery__WEBPACK_IMPORTED_MODULE_6___default()('div.select-styled.active').not(this).each(function () {
        jquery__WEBPACK_IMPORTED_MODULE_6___default()(this).removeClass('active').next('ul.select-options').hide();
      });
      jquery__WEBPACK_IMPORTED_MODULE_6___default()(this).toggleClass('active').next('ul.select-options').toggle();
    });
    $listItems.on('click', function (e) {
      e.stopPropagation();
      $styledSelect.html('<span>' + jquery__WEBPACK_IMPORTED_MODULE_6___default()(this).text() + '</span>').removeClass('active');
      $this.val(jquery__WEBPACK_IMPORTED_MODULE_6___default()(this).attr('rel'));
      $list.hide(); //console.log($this.val());
    });
    jquery__WEBPACK_IMPORTED_MODULE_6___default()(document).on('click', function () {
      $styledSelect.removeClass('active');
      $list.hide();
    });
  });

  function updateSelect(elem, callback) {
    var $this = elem,
        numberOfOptions = elem.children('option').length;
    var $list = $this.parent().find('.select-options');
    var $styledSelect = $this.parent().find('.select-styled');
    $list.empty();

    for (var i = 0; i < numberOfOptions; i++) {
      jquery__WEBPACK_IMPORTED_MODULE_6___default()('<li />', {
        text: $this.children('option').eq(i).text(),
        rel: $this.children('option').eq(i).val()
      }).appendTo($list);
    }

    var $listItems = $list.children('li');
    $listItems.on('click', function (e) {
      e.stopPropagation();
      $styledSelect.html('<span>' + jquery__WEBPACK_IMPORTED_MODULE_6___default()(this).text() + '</span>').removeClass('active');
      $this.val(jquery__WEBPACK_IMPORTED_MODULE_6___default()(this).attr('rel'));
      $list.hide();
      $list.children('li').removeClass('active');
      jquery__WEBPACK_IMPORTED_MODULE_6___default()(this).addClass('active');
      if (callback) callback(jquery__WEBPACK_IMPORTED_MODULE_6___default()(this).attr('rel'));
    });
    $styledSelect.html('<span>' + $this.children('option').eq(0).text() + '</span>');
  }
  /* ============================================================================= */

  /* ============================================================================= */
  //===========================


  function quiz() {
    this.block = '.quiz';
    this.container = '.afq-question__stage';
    this.item = '.afq-question__pane';
    this.dotsContainer = '.quiz__mark';
    this.countSlide = jquery__WEBPACK_IMPORTED_MODULE_6___default()(this.item).length;
    this.slideActive = 1;

    this.init = function () {
      this.changeStage();
      this.nav();
      this.renderDots(this.slideActive);
    };

    this.changeStage = function () {
      jquery__WEBPACK_IMPORTED_MODULE_6___default()('[data-quiz-count="current"]').text(this.slideActive);
      jquery__WEBPACK_IMPORTED_MODULE_6___default()('[data-quiz-count="total"]').text(this.countSlide);
    };

    this.cahngeSlide = function (index) {
      var _this = this;

      jquery__WEBPACK_IMPORTED_MODULE_6___default()(this.item).addClass('fadeleft');
      setTimeout(function () {
        jquery__WEBPACK_IMPORTED_MODULE_6___default()(_this.item).removeClass('fadeleft');
        jquery__WEBPACK_IMPORTED_MODULE_6___default()(_this.item).removeClass('active');
        activeSlide();
      }, 500);

      function activeSlide() {
        jquery__WEBPACK_IMPORTED_MODULE_6___default()(_this.item).eq(index - 1).addClass('active');
      }

      this.changeStage();
      this.nav();
      this.renderDots(this.slideActive);
    };

    this.nextSlide = function () {
      if (this.slideActive < this.countSlide) {
        this.slideActive = this.slideActive + 1;
        this.cahngeSlide(this.slideActive);
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_6___default()('.af-quiz__question').removeClass('open');
        jquery__WEBPACK_IMPORTED_MODULE_6___default()('.af-quiz__form').addClass('open');
      }
    };

    this.prevSlide = function () {
      if (this.slideActive > 1) {
        this.slideActive = this.slideActive - 1;
        this.cahngeSlide(this.slideActive);
      }
    };

    this.renderDots = function (activeSlide) {
      jquery__WEBPACK_IMPORTED_MODULE_6___default()(this.dotsContainer).empty();

      for (var i = 1; i <= this.countSlide; i++) {
        var active = i <= activeSlide ? 'active' : '';
        jquery__WEBPACK_IMPORTED_MODULE_6___default()(this.dotsContainer).append('<span class="' + active + '"></span>');
      }
    };

    this.nav = function () {
      // говно какоето
      if (this.slideActive == 1) {
        jquery__WEBPACK_IMPORTED_MODULE_6___default()('[data-quiz-nav="prev"]').hide();
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_6___default()('[data-quiz-nav="prev"]').show();
      }

      if (this.slideActive == this.countSlide) {} else {
        jquery__WEBPACK_IMPORTED_MODULE_6___default()('[data-quiz-nav="next"]').show();
      }
    };
  }

  var hst = new quiz();
  hst.init();
  jquery__WEBPACK_IMPORTED_MODULE_6___default()('[data-quiz-nav="prev"]').on('click', function (event) {
    hst.prevSlide();
  });
  jquery__WEBPACK_IMPORTED_MODULE_6___default()('[data-quiz-nav="next"]').on('click', function (event) {
    hst.nextSlide();
  });
  /* =========================================== */

  jquery__WEBPACK_IMPORTED_MODULE_6___default()(document).on('click', '[data-quiz-nav="next"], [data-quiz-nav="prev"]', function (event) {
    event.preventDefault();
  });
  /* =========================================== */

  jquery__WEBPACK_IMPORTED_MODULE_6___default()(document).on('click', '[data-quiz="open"]', function (event) {
    jquery__WEBPACK_IMPORTED_MODULE_6___default()('.af-quiz').toggleClass('open');
    jquery__WEBPACK_IMPORTED_MODULE_6___default()('html').toggleClass('hidden');
  });
  /* =========================================== */

  jquery__WEBPACK_IMPORTED_MODULE_6___default()(document).on('click', '[data-quiz="close"]', function (event) {
    jquery__WEBPACK_IMPORTED_MODULE_6___default()(this).parents('.af-quiz').removeClass('open');
    jquery__WEBPACK_IMPORTED_MODULE_6___default()('html').removeClass('hidden');
  });
  jquery__WEBPACK_IMPORTED_MODULE_6___default()('[data-multitel="input"]').inputmask({
    mask: '(999)999-99-99',
    showMaskOnHover: false,
    getemptymask: true,
    clearIncomplete: true,
    oncomplete: function oncomplete(elem) {
      elem.target.setAttribute('area-valid', 'true');
    },
    onincomplete: function onincomplete(elem) {
      elem.target.setAttribute('area-valid', 'false');
    },
    oncleared: function oncleared(elem) {
      elem.target.removeAttribute('area-valid');
    },
    onKeyValidation: function onKeyValidation(elem) {
      console.log(elem);
    }
  });
  /* =========================================== */

  jquery__WEBPACK_IMPORTED_MODULE_6___default()(document).on('click', '[data-quiz="start"]', function (event) {
    jquery__WEBPACK_IMPORTED_MODULE_6___default()('.af-quiz__start').addClass('animate');
    setTimeout(function () {
      jquery__WEBPACK_IMPORTED_MODULE_6___default()('.af-quiz__start').hide();
      jquery__WEBPACK_IMPORTED_MODULE_6___default()('.af-quiz__question').addClass('open');
    }, 600);
  }); //click

  /* ========================================================================= */

  /* ========================================================================= */

  /* ========================================== */

  /* ========================================== */

  function brandModel(cars) {
    this.containerBrand = '[data-select="brand"]';
    this.containerModel = '[data-select="model"]';
    this.selectBrand = '';
    this.selectModel = '';
    this.init = function () {
      this.renderBrand(cars);
    }, this.change = function () {
      jquery__WEBPACK_IMPORTED_MODULE_6___default()('[data-input="brand"]').val(this.selectModel);
    }, this.renderBrand = function (array) {
      jquery__WEBPACK_IMPORTED_MODULE_6___default()(this.containerBrand).empty();
      jquery__WEBPACK_IMPORTED_MODULE_6___default()(this.containerBrand).append('<option value="0" >-Выберите-</option>');
      var item;

      for (item in array) {
        var elem = array[item];
        jquery__WEBPACK_IMPORTED_MODULE_6___default()(this.containerBrand).append('<option value="' + item + '" >' + elem.brand + '</option>');
      }

      var _this = this;

      updateSelect(jquery__WEBPACK_IMPORTED_MODULE_6___default()(_this.containerBrand), function (val) {
        _this.setBrand(val);

        updateSelect(jquery__WEBPACK_IMPORTED_MODULE_6___default()(_this.containerModel), false);
      });
    };

    this.renderModel = function (array, brand) {
      jquery__WEBPACK_IMPORTED_MODULE_6___default()(this.containerModel).empty();
      jquery__WEBPACK_IMPORTED_MODULE_6___default()(this.containerModel).append('<option value="0" >-Выберите-</option>');
      var model = array[brand].model;

      var _this = this;

      model.forEach(function (item) {
        jquery__WEBPACK_IMPORTED_MODULE_6___default()(_this.containerModel).append('<option value="' + item + '" >' + item + '</option>');
      });
    };

    this.setBrand = function (value) {
      this.renderModel(cars, value);
      this.selectBrand = cars[value].brand;
    };

    this.setModel = function (value) {
      this.selectModel = value;
      this.change();
    };
  }

  var brandModelInstans = new brandModel(_js_carObj__WEBPACK_IMPORTED_MODULE_4__["default"]);
  brandModelInstans.init();
  jquery__WEBPACK_IMPORTED_MODULE_6___default()(document).on('change', '[data-select="brand"]', function (event) {
    brandModelInstans.setBrand(jquery__WEBPACK_IMPORTED_MODULE_6___default()(this).val());
  });
  jquery__WEBPACK_IMPORTED_MODULE_6___default()(document).on('change', '[data-select="model"]', function (event) {
    brandModelInstans.setModel(jquery__WEBPACK_IMPORTED_MODULE_6___default()(this).val());
  });
}); //ready

/***/ }),

/***/ "./src/js/phoneCode.js":
/*!*****************************!*\
  !*** ./src/js/phoneCode.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'ru': {
    'code': '+1',
    'mask': '(999)999-99-99'
  },
  'by': {
    'code': '+375',
    'mask': '(99)999-99-99'
  },
  'ua': {
    'code': '+380',
    'mask': '(99)999-99-99'
  }
});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map