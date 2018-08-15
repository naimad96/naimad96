// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"..\\js\\index.js":[function(require,module,exports) {

var cateringController = function () {

    var cateringItems = {
        komunia: {
            name: 'komunia',
            price: 100,
            perPerson: true,
            total: 0
        },
        MENU1: {
            name: 'MENU1',
            price: 180,
            perPerson: true,
            total: 10800
        },
        MENU2: {
            name: 'MENU2',
            price: 15,
            perPerson: true,
            total: 0
        },
        MENU3: {
            name: 'MENU3',
            price: 30,
            perPerson: true,
            total: 0
        },
        STOLWIEJSKI: {
            name: 'STOLWIEJSKI',
            price: 1200,
            perPerson: true,
            total: 0
        },
        FONTANNA1: {
            name: 'FONTANNA1',
            price: 600,
            perPerson: true,
            total: 0
        },
        FONTANNA2: {
            name: 'FONTANNA2',
            price: 800,
            perPerson: true,
            total: 0
        },
        FONTANNA3: {
            name: 'FONTANNA3',
            price: 1000,
            perPerson: true,
            total: 0
        },
        KORKOWE: {
            name: 'KORKOWE',
            price: 10,
            perPerson: true,
            total: 0
        },
        OPENBAR: {
            name: 'OPENBAR',
            price: 65,
            perPerson: true,
            total: 0
        },
        PLONACA_MISA: {
            name: 'PLONACA_MISA',
            price: 200,
            perPerson: false,
            quantity: 1,
            total: 0
        },
        DEKORACJE_SALI_1: {
            name: 'DEKORACJE_SALI_1',
            price: 25,
            perPerson: true,
            total: 0
        },
        DEKORACJE_SALI_2: {
            name: 'DEKORACJE_SALI_2',
            price: 400,
            perPerson: false,
            quantity: 1,
            total: 0
        },
        STOL_PANSTWA_MLODYCH_2: {
            name: 'STOL_PANSTWA_MLODYCH_2',
            price: 200,
            perPerson: false,
            quantity: 1,
            total: 0
        },
        WIAZANKA_SLUBNA: {
            name: 'WIAZANKA_SLUBNA',
            price: 50,
            perPerson: false,
            quantity: 1,
            total: 0
        },
        DODATKI_DRUHNA: {
            name: 'DODATKI_DRUHNA',
            price: 100,
            perPerson: false,
            quantity: 1,
            total: 0
        },
        DODATKI_DRUHNA_2: {
            name: 'DODATKI_DRUHNA_2',
            price: 100,
            perPerson: false,
            quantity: 1,
            total: 0
        },
        DEKORACJE_AUTA: {
            name: 'DEKORACJE_AUTA',
            price: 500,
            perPerson: false,
            quantity: 1,
            total: 0
        },
        DEKORACJE_AUTA_2: {
            name: 'DEKORACJE_AUTA_2',
            price: 750,
            perPerson: false,
            quantity: 1,
            total: 0
        },
        FAJERWERKI: {
            name: 'FAJERWERKI',
            price: 1200,
            perPerson: false,
            quantity: 1,
            total: 0
        },
        PODZIEKOWANIA_1: {
            name: 'PODZIEKOWANIA_1',
            price: 800,
            perPerson: false,
            quantity: 1,
            total: 0
        },
        PODZIEKOWANIA_2: {
            name: 'PODZIEKOWANIA_2',
            price: 1000,
            perPerson: false,
            quantity: 1,
            total: 0
        },
        ZUBROWKA: {
            name: 'ZUBROWKA',
            price: 26,
            perPerson: false,
            quantity: 1,
            total: 0
        },
        WYBOROWA: {
            name: 'WYBOROWA',
            price: 29,
            perPerson: false,
            quantity: 1,
            total: 0
        },
        STUMBRAS: {
            name: 'STUMBRAS',
            price: 35,
            perPerson: false,
            quantity: 1,
            total: 0
        },
        FINLANDIA: {
            name: 'FINLANDIA',
            price: 39,
            perPerson: false,
            quantity: 1,
            total: 0
        },
        WINO: {
            name: 'WINO',
            price: 23,
            perPerson: false,
            quantity: 1,
            total: 0
        }

    };

    var INIT_STATE = {
        date: '',
        adultPersons: 60,
        childPersons: 0,
        pricePerPerson: 180,
        totalPrice: 10800,
        summary: [cateringItems['MENU1']]
    };

    var data = INIT_STATE;

    var getData = function getData() {

        var localData = localStorage.getItem('weddings');
        var continueOrder = sessionStorage.getItem('weddings_continue');

        if (sessionStorage.getItem('weddings_continue') || confirm('Kontynuować poprzednie zamówienie?')) {
            try {

                sessionStorage.setItem('weddings_continue', true);
                var storageItem = localStorage.getItem('weddings');

                if (storageItem === null) {
                    data = INIT_STATE;
                } else {
                    data = JSON.parse(storageItem);
                }
            } catch (e) {
                console.log(e);
            }
        } else {
            localStorage.removeItem('weddings');
            sessionStorage.setItem('weddings_continue', true);

            data = INIT_STATE;
        }
    };

    var saveData = function saveData() {
        try {
            localStorage.setItem('weddings', JSON.stringify(data));
        } catch (error) {
            console.log(error);
        }
    };

    var calculateItemTotal = function calculateItemTotal() {
        data.summary.forEach(function (item) {

            if (item.perPerson) {

                var totalSum = data.adultPersons * item.price + data.childPersons * (0.4 * item.price);

                item.total = totalSum;
            } else {
                var _totalSum = item.quantity * item.price;

                item.total = _totalSum;
            }
        });

        saveData();
    };

    var calculateOrderTotal = function calculateOrderTotal() {
        var sum = 0;

        data.summary.forEach(function (item) {

            sum += item.total;
        });

        data.totalPrice = sum;

        saveData();
    };

    var calculatePerPersonCost = function calculatePerPersonCost() {

        data.pricePerPerson = Math.round(data.totalPrice / (data.adultPersons + data.childPersons));
    };

    var addItem = function addItem(itemIndex) {

        if (cateringItems[itemIndex]) {

            data.summary.push(cateringItems[itemIndex]);

            saveData();
        } else {
            console.log('Taka pozycja nie istnieje');
        }
    };

    var removeItem = function removeItem(itemIndex) {

        data.summary = data.summary.filter(function (item) {
            return item.name !== itemIndex;
        });
    };

    getData();

    return {

        toggleItem: function toggleItem(itemId) {

            var cateringItem = cateringItems[itemId];

            var cateringItemName = cateringItem.name;

            if (cateringItemName !== undefined) {

                var isExist = false;

                data.summary.forEach(function (item) {

                    if (item.name === cateringItemName) {

                        isExist = true;
                    }
                });

                if (!isExist) {
                    addItem(itemId);
                } else {
                    removeItem(itemId);
                }

                calculateItemTotal();
                calculateOrderTotal();
                calculatePerPersonCost();
            }
        },

        changeAdultPersonsNumber: function changeAdultPersonsNumber(number) {

            var numberOfPeople = parseInt(number);

            data.adultPersons = numberOfPeople;

            calculateItemTotal();
            calculateOrderTotal();
            calculatePerPersonCost();
            saveData();
        },

        changeChildPersonsNumber: function changeChildPersonsNumber(number) {

            var numberOfPeople = parseInt(number);

            data.childPersons = numberOfPeople;

            calculateItemTotal();
            calculateOrderTotal();
            calculatePerPersonCost();
            saveData();
        },

        changeDate: function changeDate(date) {
            var newDate = date;
            data.date = newDate;

            saveData();
        },

        addAlcohol: function addAlcohol(id, quantity) {

            if (cateringItems[id]) {

                cateringItems[id].quantity = quantity;

                data.summary.push(cateringItems[id]);
                calculateItemTotal();
                calculateOrderTotal();
                saveData();
            }
        },

        getDate: function getDate() {
            return data.date;
        },
        getTotalCosts: function getTotalCosts() {
            return data.totalPrice;
        },
        getChildNumber: function getChildNumber() {
            return data.childPersons;
        },
        getAdultNumber: function getAdultNumber() {
            return data.adultPersons;
        },
        getTotalCost: function getTotalCost() {
            return data.totalPrice;
        },
        getPerPersonCost: function getPerPersonCost() {
            return data.pricePerPerson;
        },
        getSummary: function getSummary() {
            return data.summary;
        },
        getData: function getData() {
            return data;
        },

        test: function test() {
            console.log(data);
        }
    };
}();

var uiController = function () {
    var DOM = {

        navigationTrigger: document.getElementById('navigationTrigger'),
        navigationList: document.getElementById('navigation'),
        menuList: document.querySelector('.grid--menu'),
        numberOfAdultInput: document.getElementById('numberOfAdult'),
        numberOfChildInput: document.getElementById('numberOfChild'),
        date: document.getElementById('date'),
        alcoholList: document.querySelector('.pricing'),
        totalCost: document.getElementById('cost'),
        costPerPerson: document.getElementById('costPerPerson'),
        summaryList: document.querySelector('.summary__list'),
        openModal: document.getElementById('openModal'),
        closeModal: document.getElementById('closeModal'),
        modal: document.querySelector('.modal'),
        summaryValue: document.getElementById('summaryValue'),
        dateSummary: document.getElementById('dateSummary'),
        persons: document.getElementById('persons'),
        childs: document.getElementById('childs'),
        total: document.getElementById('total'),
        perperson: document.getElementById('perperson'),
        summary: document.getElementById('summary')
    };

    return {
        getDOMElements: function getDOMElements() {
            return DOM;
        },
        setDate: function setDate(date) {
            DOM.date.value = date;
        },
        setChildNumber: function setChildNumber(number) {
            DOM.numberOfChildInput.value = number;
        },
        setAdultNumber: function setAdultNumber(number) {
            DOM.numberOfAdultInput.value = number;
        },
        setTotalCost: function setTotalCost(number) {
            DOM.totalCost.textContent = number;
        },
        setCostPerPerson: function setCostPerPerson(number) {
            DOM.costPerPerson.textContent = number;
        },
        setButtonsColor: function setButtonsColor(summary) {

            var allBtns = document.querySelectorAll('.btn--add');

            summary.forEach(function (summaryItem) {

                allBtns.forEach(function (item) {

                    if (summaryItem.name === item.dataset.id) {
                        item.style.background = '#333333';
                    }
                });
            });
        },
        renderSummary: function renderSummary(summary) {

            DOM.summaryList.innerHTML = '';

            var newHTML = '<li class=\'bold\'>\n                            <p>Nazwa</p>\n                            <p>Cena jednostkowa</p>\n                            <p>Suma</p>\n                            </li>';

            summary.forEach(function (item) {

                newHTML += '<li>\n                                <p>' + item.name + '</p>\n                                <p>' + item.price + '</p>\n                                <p>' + item.total + '</p>\n                                <button class=\'btn btn--delete\' data-id=\'' + item.name + '\'>x</button>\n                            </li>';
            });

            DOM.summaryList.insertAdjacentHTML('beforeend', newHTML);
        }

    };
}();

var appController = function (cateringCtrl, uiCtrl) {

    var DOMElements = uiCtrl.getDOMElements();

    var updateUI = function updateUI() {

        uiCtrl.setDate(cateringCtrl.getDate());
        uiCtrl.setChildNumber(cateringCtrl.getChildNumber());
        uiCtrl.setAdultNumber(cateringController.getAdultNumber());
        uiCtrl.setTotalCost(cateringCtrl.getTotalCost());
        uiCtrl.setCostPerPerson(cateringCtrl.getPerPersonCost());
        uiCtrl.setButtonsColor(cateringCtrl.getSummary());
        uiCtrl.renderSummary(cateringCtrl.getSummary());
    };

    var setupEventListeners = function setupEventListeners() {

        // 1. Navigation listener


        // 2. Toggle item

        DOMElements.menuList.addEventListener('click', function (event) {

            // Event delegation

            if (event.target.className === 'btn btn--add') {

                var id = event.target.dataset.id;

                cateringCtrl.toggleItem(id);

                if (event.target.style.background === '' || event.target.style.background === 'transparent') {

                    event.target.style.background = '#333333';
                } else {

                    event.target.style.background = 'transparent';
                }

                updateUI();
            }
        });

        // 3. Change number of adult people

        DOMElements.numberOfAdultInput.addEventListener('blur', function (event) {

            cateringCtrl.changeAdultPersonsNumber(event.target.value);
            updateUI();
        });

        // 4. Change number of child people

        DOMElements.numberOfChildInput.addEventListener('blur', function (event) {

            cateringCtrl.changeChildPersonsNumber(event.target.value);
            updateUI();
        });

        // 5. Change date

        DOMElements.date.addEventListener('blur', function (event) {

            cateringCtrl.changeDate(event.target.value);
            updateUI();
        });

        // 6. Get alcohol bootles

        DOMElements.alcoholList.addEventListener('change', function (event) {

            var id = event.target.dataset.id;
            var quantity = parseInt(event.target.value);

            cateringCtrl.addAlcohol(id, quantity);

            updateUI();
        });

        // 7. Delete from summary

        DOMElements.summaryList.addEventListener('click', function (event) {
            if (event.target.className === 'btn btn--delete') {

                cateringCtrl.toggleItem(event.target.dataset.id);

                updateUI();
            }
        });

        // 8. Post order 

        DOMElements.openModal.addEventListener('click', function () {

            var data = cateringCtrl.getData();

            console.log(data.date);

            DOMElements.modal.classList.toggle('modal--is-open');
            DOMElements.summary.value = JSON.stringify(data.summary);
            DOMElements.dateSummary.value = data.date;
            DOMElements.persons.value = data.adultPersons;
            DOMElements.childs.value = data.childPersons;
            DOMElements.total.value = data.totalPrice;
            DOMElements.perperson.value = data.pricePerPerson;
        });

        DOMElements.closeModal.addEventListener('click', function () {
            DOMElements.modal.classList.toggle('modal--is-open');
        });
    };

    return {
        init: function init() {
            updateUI();
            setupEventListeners();
        }
    };
}(cateringController, uiController);

// Init app
document.getElementById('navigationTrigger').addEventListener('click', function () {

    document.getElementById('navigation').classList.toggle('navigation--is-open');
});

document.querySelector('.summary-trigger').addEventListener('click', function () {
    document.querySelector('.summary').classList.toggle('summary--is-open');
});

document.addEventListener('DOMContentLoaded', function () {

    appController.init();
});
},{}],"..\\..\\..\\..\\AppData\\Roaming\\npm\\node_modules\\parcel-bundler\\src\\builtins\\hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '60334' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["..\\..\\..\\..\\AppData\\Roaming\\npm\\node_modules\\parcel-bundler\\src\\builtins\\hmr-runtime.js","..\\js\\index.js"], null)
//# sourceMappingURL=/js.2ccee1d7.map