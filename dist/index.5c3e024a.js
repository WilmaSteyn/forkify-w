// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"6etWj":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "d2b39c0afb941e912561e27f5c3e024a";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
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
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
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
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"6AfIA":[function(require,module,exports) {
var global = arguments[3];
!(function () {
  var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {};
  function e(t) {
    return t && t.__esModule ? t.default : t;
  }
  var r = {};
  var n = function (t) {
    var e = r[t];
    if (null == e) throw new Error("Could not resolve bundle with id " + t);
    return e;
  };
  (function (t) {
    for (var e = Object.keys(t), n = 0; n < e.length; n++) r[e[n]] = t[e[n]];
  })(JSON.parse('{"6bqnG":"index.917fbe44.js","3ZwVs":"icons.7a226c28.svg"}'));
  var o, i, a, c, u, s, f, l, h, p, d, g, v, y, m, b, w, E, _, S = {}, x = function (t) {
    return t && t.Math == Math && t;
  }, A = S = x("object" == typeof globalThis && globalThis) || x("object" == typeof window && window) || x("object" == typeof self && self) || x("object" == typeof t && t) || (function () {
    return this;
  })() || Function("return this")(), k = i = !(a = function (t) {
    try {
      return !!t();
    } catch (t) {
      return !0;
    }
  })(function () {
    return 7 != Object.defineProperty({}, 1, {
      get: function () {
        return 7;
      }
    })[1];
  }), O = ({}).propertyIsEnumerable, T = Object.getOwnPropertyDescriptor, M = T && !O.call({
    1: 2
  }, 1) ? function (t) {
    var e = T(this, t);
    return !!e && e.enumerable;
  } : O, I = c = function (t, e) {
    return {
      enumerable: !(1 & t),
      configurable: !(2 & t),
      writable: !(4 & t),
      value: e
    };
  }, R = ({}).toString, j = f = function (t) {
    return R.call(t).slice(8, -1);
  }, L = ("").split, F = s = a(function () {
    return !Object("z").propertyIsEnumerable(0);
  }) ? function (t) {
    return "String" == j(t) ? L.call(t, "") : Object(t);
  } : Object, P = l = function (t) {
    if (null == t) throw TypeError("Can't call method on " + t);
    return t;
  }, N = u = function (t) {
    return F(P(t));
  }, U = p = function (t) {
    return "object" == typeof t ? null !== t : "function" == typeof t;
  }, $ = h = function (t, e) {
    if (!U(t)) return t;
    var r, n;
    if (e && "function" == typeof (r = t.toString) && !U(n = r.call(t))) return n;
    if ("function" == typeof (r = t.valueOf) && !U(n = r.call(t))) return n;
    if (!e && "function" == typeof (r = t.toString) && !U(n = r.call(t))) return n;
    throw TypeError("Can't convert object to primitive value");
  }, C = l, D = g = function (t) {
    return Object(C(t));
  }, B = ({}).hasOwnProperty, q = d = function (t, e) {
    return B.call(D(t), e);
  }, z = i, W = a, H = p, G = S.document, V = H(G) && H(G.createElement), Y = y = function (t) {
    return V ? G.createElement(t) : {};
  }, J = v = !z && !W(function () {
    return 7 != Object.defineProperty(Y("div"), "a", {
      get: function () {
        return 7;
      }
    }).a;
  }), X = Object.getOwnPropertyDescriptor, K = k ? X : function (t, e) {
    if ((t = N(t), e = $(e, !0), J)) try {
      return X(t, e);
    } catch (t) {}
    if (q(t, e)) return I(!M.call(t, e), t[e]);
  }, Q = K, Z = i, tt = i, et = v, rt = p, nt = b = function (t) {
    if (!rt(t)) throw TypeError(String(t) + " is not an object");
    return t;
  }, ot = h, it = Object.defineProperty, at = tt ? it : function (t, e, r) {
    if ((nt(t), e = ot(e, !0), nt(r), et)) try {
      return it(t, e, r);
    } catch (t) {}
    if (("get" in r) || ("set" in r)) throw TypeError("Accessors not supported");
    return (("value" in r) && (t[e] = r.value), t);
  }, ct = c, ut = m = Z ? function (t, e, r) {
    return at(t, e, ct(1, r));
  } : function (t, e, r) {
    return (t[e] = r, t);
  }, st = S, ft = m, lt = d, ht = S, pt = m, dt = E = function (t, e) {
    try {
      pt(ht, t, e);
    } catch (r) {
      ht[t] = e;
    }
    return e;
  }, gt = {}, vt = E, yt = "__core-js_shared__";
  gt = S["__core-js_shared__"] || vt(yt, {});
  var mt = Function.toString;
  "function" != typeof gt.inspectSource && (gt.inspectSource = function (t) {
    return mt.call(t);
  });
  var bt, wt, Et, _t, St = _ = gt.inspectSource, xt = _, At = S.WeakMap, kt = wt = "function" == typeof At && (/native code/).test(xt(At)), Ot = p, Tt = m, Mt = d, It = gt;
  (_t = function (t, e) {
    return It[t] || (It[t] = void 0 !== e ? e : {});
  })("versions", []).push({
    version: "3.13.0",
    mode: "global",
    copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
  });
  var Rt, jt, Lt, Ft, Pt, Nt = _t, Ut = 0, $t = Math.random(), Ct = Rt = function (t) {
    return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++Ut + $t).toString(36);
  }, Dt = Nt("keys"), Bt = Et = function (t) {
    return Dt[t] || (Dt[t] = Ct(t));
  }, qt = jt = {}, zt = "Object already initialized", Wt = S.WeakMap;
  if (kt || gt.state) {
    var Ht = gt.state || (gt.state = new Wt()), Gt = Ht.get, Vt = Ht.has, Yt = Ht.set;
    (Lt = function (t, e) {
      if (Vt.call(Ht, t)) throw new TypeError(zt);
      return (e.facade = t, Yt.call(Ht, t, e), e);
    }, Ft = function (t) {
      return Gt.call(Ht, t) || ({});
    }, Pt = function (t) {
      return Vt.call(Ht, t);
    });
  } else {
    var Jt = Bt("state");
    (qt[Jt] = !0, Lt = function (t, e) {
      if (Mt(t, Jt)) throw new TypeError(zt);
      return (e.facade = t, Tt(t, Jt, e), e);
    }, Ft = function (t) {
      return Mt(t, Jt) ? t[Jt] : {};
    }, Pt = function (t) {
      return Mt(t, Jt);
    });
  }
  var Xt = (bt = {
    set: Lt,
    get: Ft,
    has: Pt,
    enforce: function (t) {
      return Pt(t) ? Ft(t) : Lt(t, {});
    },
    getterFor: function (t) {
      return function (e) {
        var r;
        if (!Ot(e) || (r = Ft(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
        return r;
      };
    }
  }).get, Kt = bt.enforce, Qt = String(String).split("String");
  (w = function (t, e, r, n) {
    var o, i = !!n && !!n.unsafe, a = !!n && !!n.enumerable, c = !!n && !!n.noTargetGet;
    ("function" == typeof r && ("string" != typeof e || lt(r, "name") || ft(r, "name", e), (o = Kt(r)).source || (o.source = Qt.join("string" == typeof e ? e : ""))), t !== st ? (i ? !c && t[e] && (a = !0) : delete t[e], a ? t[e] = r : ft(t, e, r)) : a ? t[e] = r : dt(e, r));
  })(Function.prototype, "toString", function () {
    return "function" == typeof this && Xt(this).source || St(this);
  });
  var Zt, te, ee, re, ne, oe, ie, ae, ce, ue, se, fe, le, he, pe = w, de = E, ge = d, ve = {}, ye = ve = S, me = S, be = function (t) {
    return "function" == typeof t ? t : void 0;
  }, we = ee = function (t, e) {
    return arguments.length < 2 ? be(ye[t]) || be(me[t]) : ye[t] && ye[t][e] || me[t] && me[t][e];
  }, Ee = d, _e = u, Se = u, xe = Math.ceil, Ae = Math.floor, ke = ie = function (t) {
    return isNaN(t = +t) ? 0 : (t > 0 ? Ae : xe)(t);
  }, Oe = Math.min, Te = oe = function (t) {
    return t > 0 ? Oe(ke(t), 9007199254740991) : 0;
  }, Me = ie, Ie = Math.max, Re = Math.min, je = ae = function (t, e) {
    var r = Me(t);
    return r < 0 ? Ie(r + e, 0) : Re(r, e);
  }, Le = function (t) {
    return function (e, r, n) {
      var o, i = Se(e), a = Te(i.length), c = je(n, a);
      if (t && r != r) {
        for (; a > c; ) if ((o = i[c++]) != o) return !0;
      } else for (; a > c; c++) if ((t || (c in i)) && i[c] === r) return t || c || 0;
      return !t && -1;
    };
  }, Fe = (ne = {
    includes: Le(!0),
    indexOf: Le(!1)
  }).indexOf, Pe = jt, Ne = re = function (t, e) {
    var r, n = _e(t), o = 0, i = [];
    for (r in n) !Ee(Pe, r) && Ee(n, r) && i.push(r);
    for (; e.length > o; ) Ee(n, r = e[o++]) && (~Fe(i, r) || i.push(r));
    return i;
  }, Ue = {}, $e = (Ue = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]).concat("length", "prototype"), Ce = Object.getOwnPropertyNames || (function (t) {
    return Ne(t, $e);
  }), De = Object.getOwnPropertySymbols, Be = b, qe = te = we("Reflect", "ownKeys") || (function (t) {
    var e = Ce(Be(t)), r = De;
    return r ? e.concat(r(t)) : e;
  }), ze = Zt = function (t, e) {
    for (var r = qe(e), n = at, o = K, i = 0; i < r.length; i++) {
      var a = r[i];
      ge(t, a) || n(t, a, o(e, a));
    }
  }, We = a, He = /#|\.prototype\./, Ge = function (t, e) {
    var r = Ye[Ve(t)];
    return r == Xe || r != Je && ("function" == typeof e ? We(e) : !!e);
  }, Ve = Ge.normalize = function (t) {
    return String(t).replace(He, ".").toLowerCase();
  }, Ye = Ge.data = {}, Je = Ge.NATIVE = "N", Xe = Ge.POLYFILL = "P", Ke = ce = Ge, Qe = o = function (t, e) {
    var r, n, o, i, a, c = t.target, u = t.global, s = t.stat;
    if (r = u ? A : s ? A[c] || de(c, {}) : (A[c] || ({})).prototype) for (n in e) {
      if ((i = e[n], o = t.noTargetGet ? (a = Q(r, n)) && a.value : r[n], !Ke(u ? n : c + (s ? "." : "#") + n, t.forced) && void 0 !== o)) {
        if (typeof i == typeof o) continue;
        ze(i, o);
      }
      ((t.sham || o && o.sham) && ut(i, "sham", !0), pe(r, n, i, t));
    }
  }, Ze = ee, tr = i, er = fe = ee("navigator", "userAgent") || "", rr = S.process, nr = rr && rr.versions, or = nr && nr.v8;
  or ? he = (le = or.split("."))[0] < 4 ? 1 : le[0] + le[1] : er && (!(le = er.match(/Edge\/(\d+)/)) || le[1] >= 74) && (le = er.match(/Chrome\/(\d+)/)) && (he = le[1]);
  var ir, ar, cr, ur, sr, fr = se = he && +he, lr = a, hr = ue = !!Object.getOwnPropertySymbols && !lr(function () {
    return !String(Symbol()) || !Symbol.sham && fr && fr < 41;
  }), pr = ir = ue && !Symbol.sham && "symbol" == typeof Symbol.iterator, dr = a, gr = d, vr = f, yr = ar = Array.isArray || (function (t) {
    return "Array" == vr(t);
  }), mr = p, br = b, wr = g, Er = u, _r = h, Sr = c, xr = b, Ar = i, kr = b, Or = re, Tr = Ue, Mr = sr = Object.keys || (function (t) {
    return Or(t, Tr);
  }), Ir = ur = Ar ? Object.defineProperties : function (t, e) {
    kr(t);
    for (var r, n = Mr(e), o = n.length, i = 0; o > i; ) at(t, r = n[i++], e[r]);
    return t;
  }, Rr = Ue, jr = jt, Lr = {};
  Lr = ee("document", "documentElement");
  var Fr, Pr = y, Nr = Et("IE_PROTO"), Ur = function () {}, $r = function (t) {
    return "<script>" + t + "</" + "script>";
  }, Cr = function () {
    try {
      Fr = document.domain && new ActiveXObject("htmlfile");
    } catch (t) {}
    var t, e;
    Cr = Fr ? (function (t) {
      (t.write($r("")), t.close());
      var e = t.parentWindow.Object;
      return (t = null, e);
    })(Fr) : ((e = Pr("iframe")).style.display = "none", Lr.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write($r("document.F=Object")), t.close(), t.F);
    for (var r = Rr.length; r--; ) delete Cr.prototype[Rr[r]];
    return Cr();
  };
  jr[Nr] = !0;
  var Dr, Br, qr, zr, Wr, Hr, Gr, Vr = cr = Object.create || (function (t, e) {
    var r;
    return (null !== t ? (Ur.prototype = xr(t), r = new Ur(), Ur.prototype = null, r[Nr] = t) : r = Cr(), void 0 === e ? r : Ir(r, e));
  }), Yr = sr, Jr = u, Xr = Ce, Kr = ({}).toString, Qr = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], Zr = function (t) {
    return Qr && "[object Window]" == Kr.call(t) ? (function (t) {
      try {
        return Xr(t);
      } catch (t) {
        return Qr.slice();
      }
    })(t) : Xr(Jr(t));
  }, tn = m, en = w, rn = _t, nn = Et, on = jt, an = Rt, cn = d, un = Rt, sn = ue, fn = ir, ln = _t("wks"), hn = S.Symbol, pn = fn ? hn : hn && hn.withoutSetter || un, dn = Dr = function (t) {
    return (cn(ln, t) && (sn || "string" == typeof ln[t]) || (sn && cn(hn, t) ? ln[t] = hn[t] : ln[t] = pn("Symbol." + t)), ln[t]);
  }, gn = Dr, vn = d, yn = at, mn = Br = function (t) {
    var e = ve.Symbol || (ve.Symbol = {});
    vn(e, t) || yn(e, t, {
      value: gn(t)
    });
  }, bn = at, wn = d, En = Dr("toStringTag"), _n = qr = function (t, e, r) {
    t && !wn(t = r ? t : t.prototype, En) && bn(t, En, {
      configurable: !0,
      value: e
    });
  }, Sn = Hr = function (t) {
    if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
    return t;
  }, xn = Wr = function (t, e, r) {
    if ((Sn(t), void 0 === e)) return t;
    switch (r) {
      case 0:
        return function () {
          return t.call(e);
        };
      case 1:
        return function (r) {
          return t.call(e, r);
        };
      case 2:
        return function (r, n) {
          return t.call(e, r, n);
        };
      case 3:
        return function (r, n, o) {
          return t.call(e, r, n, o);
        };
    }
    return function () {
      return t.apply(e, arguments);
    };
  }, An = s, kn = g, On = oe, Tn = p, Mn = ar, In = Dr("species"), Rn = Gr = function (t, e) {
    var r;
    return (Mn(t) && ("function" != typeof (r = t.constructor) || r !== Array && !Mn(r.prototype) ? Tn(r) && null === (r = r[In]) && (r = void 0) : r = void 0), new (void 0 === r ? Array : r)(0 === e ? 0 : e));
  }, jn = [].push, Ln = function (t) {
    var e = 1 == t, r = 2 == t, n = 3 == t, o = 4 == t, i = 6 == t, a = 7 == t, c = 5 == t || i;
    return function (u, s, f, l) {
      for (var h, p, d = kn(u), g = An(d), v = xn(s, f, 3), y = On(g.length), m = 0, b = l || Rn, w = e ? b(u, y) : r || a ? b(u, 0) : void 0; y > m; m++) if ((c || (m in g)) && (p = v(h = g[m], m, d), t)) if (e) w[m] = p; else if (p) switch (t) {
        case 3:
          return !0;
        case 5:
          return h;
        case 6:
          return m;
        case 2:
          jn.call(w, h);
      } else switch (t) {
        case 4:
          return !1;
        case 7:
          jn.call(w, h);
      }
      return i ? -1 : n || o ? o : w;
    };
  }, Fn = (zr = {
    forEach: Ln(0),
    map: Ln(1),
    filter: Ln(2),
    some: Ln(3),
    every: Ln(4),
    find: Ln(5),
    findIndex: Ln(6),
    filterOut: Ln(7)
  }).forEach, Pn = nn("hidden"), Nn = "Symbol", Un = dn("toPrimitive"), $n = bt.set, Cn = bt.getterFor(Nn), Dn = Object.prototype, Bn = S.Symbol, qn = Ze("JSON", "stringify"), zn = K, Wn = at, Hn = Zr, Gn = M, Vn = rn("symbols"), Yn = rn("op-symbols"), Jn = rn("string-to-symbol-registry"), Xn = rn("symbol-to-string-registry"), Kn = rn("wks"), Qn = S.QObject, Zn = !Qn || !Qn.prototype || !Qn.prototype.findChild, to = tr && dr(function () {
    return 7 != Vr(Wn({}, "a", {
      get: function () {
        return Wn(this, "a", {
          value: 7
        }).a;
      }
    })).a;
  }) ? function (t, e, r) {
    var n = zn(Dn, e);
    (n && delete Dn[e], Wn(t, e, r), n && t !== Dn && Wn(Dn, e, n));
  } : Wn, eo = function (t, e) {
    var r = Vn[t] = Vr(Bn.prototype);
    return ($n(r, {
      type: Nn,
      tag: t,
      description: e
    }), tr || (r.description = e), r);
  }, ro = pr ? function (t) {
    return "symbol" == typeof t;
  } : function (t) {
    return Object(t) instanceof Bn;
  }, no = function (t, e, r) {
    (t === Dn && no(Yn, e, r), br(t));
    var n = _r(e, !0);
    return (br(r), gr(Vn, n) ? (r.enumerable ? (gr(t, Pn) && t[Pn][n] && (t[Pn][n] = !1), r = Vr(r, {
      enumerable: Sr(0, !1)
    })) : (gr(t, Pn) || Wn(t, Pn, Sr(1, {})), t[Pn][n] = !0), to(t, n, r)) : Wn(t, n, r));
  }, oo = function (t, e) {
    br(t);
    var r = Er(e), n = Yr(r).concat(uo(r));
    return (Fn(n, function (e) {
      tr && !io.call(r, e) || no(t, e, r[e]);
    }), t);
  }, io = function (t) {
    var e = _r(t, !0), r = Gn.call(this, e);
    return !(this === Dn && gr(Vn, e) && !gr(Yn, e)) && (!(r || !gr(this, e) || !gr(Vn, e) || gr(this, Pn) && this[Pn][e]) || r);
  }, ao = function (t, e) {
    var r = Er(t), n = _r(e, !0);
    if (r !== Dn || !gr(Vn, n) || gr(Yn, n)) {
      var o = zn(r, n);
      return (!o || !gr(Vn, n) || gr(r, Pn) && r[Pn][n] || (o.enumerable = !0), o);
    }
  }, co = function (t) {
    var e = Hn(Er(t)), r = [];
    return (Fn(e, function (t) {
      gr(Vn, t) || gr(on, t) || r.push(t);
    }), r);
  }, uo = function (t) {
    var e = t === Dn, r = Hn(e ? Yn : Er(t)), n = [];
    return (Fn(r, function (t) {
      !gr(Vn, t) || e && !gr(Dn, t) || n.push(Vn[t]);
    }), n);
  };
  (hr || (en((Bn = function () {
    if (this instanceof Bn) throw TypeError("Symbol is not a constructor");
    var t = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0, e = an(t), r = function (t) {
      (this === Dn && r.call(Yn, t), gr(this, Pn) && gr(this[Pn], e) && (this[Pn][e] = !1), to(this, e, Sr(1, t)));
    };
    return (tr && Zn && to(Dn, e, {
      configurable: !0,
      set: r
    }), eo(e, t));
  }).prototype, "toString", function () {
    return Cn(this).tag;
  }), en(Bn, "withoutSetter", function (t) {
    return eo(an(t), t);
  }), M = io, at = no, K = ao, Ce = Zr = co, De = uo, gn = function (t) {
    return eo(dn(t), t);
  }, tr && (Wn(Bn.prototype, "description", {
    configurable: !0,
    get: function () {
      return Cn(this).description;
    }
  }), en(Dn, "propertyIsEnumerable", io, {
    unsafe: !0
  }))), Qe({
    global: !0,
    wrap: !0,
    forced: !hr,
    sham: !hr
  }, {
    Symbol: Bn
  }), Fn(Yr(Kn), function (t) {
    mn(t);
  }), Qe({
    target: Nn,
    stat: !0,
    forced: !hr
  }, {
    for: function (t) {
      var e = String(t);
      if (gr(Jn, e)) return Jn[e];
      var r = Bn(e);
      return (Jn[e] = r, Xn[r] = e, r);
    },
    keyFor: function (t) {
      if (!ro(t)) throw TypeError(t + " is not a symbol");
      if (gr(Xn, t)) return Xn[t];
    },
    useSetter: function () {
      Zn = !0;
    },
    useSimple: function () {
      Zn = !1;
    }
  }), Qe({
    target: "Object",
    stat: !0,
    forced: !hr,
    sham: !tr
  }, {
    create: function (t, e) {
      return void 0 === e ? Vr(t) : oo(Vr(t), e);
    },
    defineProperty: no,
    defineProperties: oo,
    getOwnPropertyDescriptor: ao
  }), Qe({
    target: "Object",
    stat: !0,
    forced: !hr
  }, {
    getOwnPropertyNames: co,
    getOwnPropertySymbols: uo
  }), Qe({
    target: "Object",
    stat: !0,
    forced: dr(function () {
      De(1);
    })
  }, {
    getOwnPropertySymbols: function (t) {
      return De(wr(t));
    }
  }), qn) && Qe({
    target: "JSON",
    stat: !0,
    forced: !hr || dr(function () {
      var t = Bn();
      return "[null]" != qn([t]) || "{}" != qn({
        a: t
      }) || "{}" != qn(Object(t));
    })
  }, {
    stringify: function (t, e, r) {
      for (var n, o = [t], i = 1; arguments.length > i; ) o.push(arguments[i++]);
      if ((n = e, (mr(e) || void 0 !== t) && !ro(t))) return (yr(e) || (e = function (t, e) {
        if (("function" == typeof n && (e = n.call(this, t, e)), !ro(e))) return e;
      }), o[1] = e, qn.apply(null, o));
    }
  });
  (Bn.prototype[Un] || tn(Bn.prototype, Un, Bn.prototype.valueOf), _n(Bn, Nn), on[Pn] = !0);
  var so = o, fo = i, lo = d, ho = p, po = at, go = Zt, vo = S.Symbol;
  if (fo && "function" == typeof vo && (!(("description" in vo.prototype)) || void 0 !== vo().description)) {
    var yo = {}, mo = function () {
      var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]), e = this instanceof mo ? new vo(t) : void 0 === t ? vo() : vo(t);
      return ("" === t && (yo[e] = !0), e);
    };
    go(mo, vo);
    var bo = mo.prototype = vo.prototype;
    bo.constructor = mo;
    var wo = bo.toString, Eo = "Symbol(test)" == String(vo("test")), _o = /^Symbol\((.*)\)[^)]+$/;
    (po(bo, "description", {
      configurable: !0,
      get: function () {
        var t = ho(this) ? this.valueOf() : this, e = wo.call(t);
        if (lo(yo, t)) return "";
        var r = Eo ? e.slice(7, -1) : e.replace(_o, "$1");
        return "" === r ? void 0 : r;
      }
    }), so({
      global: !0,
      forced: !0
    }, {
      Symbol: mo
    }));
  }
  (Br("asyncIterator"), Br("hasInstance"), Br("isConcatSpreadable"), Br("iterator"), Br("match"), Br("matchAll"), Br("replace"), Br("search"), Br("species"), Br("split"), Br("toPrimitive"), Br("toStringTag"), Br("unscopables"));
  var So, xo, Ao, ko, Oo, To, Mo = o, Io = d, Ro = g, jo = Et, Lo = xo = !a(function () {
    function t() {}
    return (t.prototype.constructor = null, Object.getPrototypeOf(new t()) !== t.prototype);
  }), Fo = jo("IE_PROTO"), Po = Object.prototype, No = So = Lo ? Object.getPrototypeOf : function (t) {
    return (t = Ro(t), Io(t, Fo) ? t[Fo] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? Po : null);
  }, Uo = b, $o = p, Co = ko = function (t) {
    if (!$o(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype");
    return t;
  }, Do = Ao = Object.setPrototypeOf || (("__proto__" in ({})) ? (function () {
    var t, e = !1, r = {};
    try {
      ((t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(r, []), e = r instanceof Array);
    } catch (t) {}
    return function (r, n) {
      return (Uo(r), Co(n), e ? t.call(r, n) : r.__proto__ = n, r);
    };
  })() : void 0), Bo = cr, qo = m, zo = c, Wo = b, Ho = {};
  Ho = {};
  var Go, Vo, Yo, Jo = Dr("iterator"), Xo = Array.prototype, Ko = To = function (t) {
    return void 0 !== t && (Ho.Array === t || Xo[Jo] === t);
  }, Qo = oe, Zo = Wr, ti = {};
  ti[Dr("toStringTag")] = "z";
  var ei, ri = Yo = "[object z]" === String(ti), ni = f, oi = Dr("toStringTag"), ii = "Arguments" == ni((function () {
    return arguments;
  })()), ai = Vo = ri ? ni : function (t) {
    var e, r, n;
    return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (r = (function (t, e) {
      try {
        return t[e];
      } catch (t) {}
    })(e = Object(t), oi)) ? r : ii ? ni(e) : "Object" == (n = ni(e)) && "function" == typeof e.callee ? "Arguments" : n;
  }, ci = Ho, ui = Dr("iterator"), si = Go = function (t) {
    if (null != t) return t[ui] || t["@@iterator"] || ci[ai(t)];
  }, fi = b, li = ei = function (t) {
    var e = t.return;
    if (void 0 !== e) return fi(e.call(t)).value;
  }, hi = function (t, e) {
    (this.stopped = t, this.result = e);
  }, pi = Oo = function (t, e, r) {
    var n, o, i, a, c, u, s, f = r && r.that, l = !(!r || !r.AS_ENTRIES), h = !(!r || !r.IS_ITERATOR), p = !(!r || !r.INTERRUPTED), d = Zo(e, f, 1 + l + p), g = function (t) {
      return (n && li(n), new hi(!0, t));
    }, v = function (t) {
      return l ? (Wo(t), p ? d(t[0], t[1], g) : d(t[0], t[1])) : p ? d(t, g) : d(t);
    };
    if (h) n = t; else {
      if ("function" != typeof (o = si(t))) throw TypeError("Target is not iterable");
      if (Ko(o)) {
        for ((i = 0, a = Qo(t.length)); a > i; i++) if ((c = v(t[i])) && c instanceof hi) return c;
        return new hi(!1);
      }
      n = o.call(t);
    }
    for (u = n.next; !(s = u.call(n)).done; ) {
      try {
        c = v(s.value);
      } catch (t) {
        throw (li(n), t);
      }
      if ("object" == typeof c && c && c instanceof hi) return c;
    }
    return new hi(!1);
  }, di = function (t, e) {
    var r = this;
    if (!(r instanceof di)) return new di(t, e);
    (Do && (r = Do(new Error(void 0), No(r))), void 0 !== e && qo(r, "message", String(e)));
    var n = [];
    return (pi(t, n.push, {
      that: n
    }), qo(r, "errors", n), r);
  };
  (di.prototype = Bo(Error.prototype, {
    constructor: zo(5, di),
    message: zo(5, ""),
    name: zo(5, "AggregateError")
  }), Mo({
    global: !0
  }, {
    AggregateError: di
  }));
  var gi, vi, yi = o, mi = a, bi = ar, wi = p, Ei = g, _i = oe, Si = h, xi = c, Ai = gi = function (t, e, r) {
    var n = Si(e);
    (n in t) ? at(t, n, xi(0, r)) : t[n] = r;
  }, ki = Gr, Oi = a, Ti = se, Mi = Dr("species"), Ii = vi = function (t) {
    return Ti >= 51 || !Oi(function () {
      var e = [];
      return ((e.constructor = {})[Mi] = function () {
        return {
          foo: 1
        };
      }, 1 !== e[t](Boolean).foo);
    });
  }, Ri = se, ji = Dr("isConcatSpreadable"), Li = 9007199254740991, Fi = "Maximum allowed index exceeded", Pi = Ri >= 51 || !mi(function () {
    var t = [];
    return (t[ji] = !1, t.concat()[0] !== t);
  }), Ni = Ii("concat"), Ui = function (t) {
    if (!wi(t)) return !1;
    var e = t[ji];
    return void 0 !== e ? !!e : bi(t);
  };
  yi({
    target: "Array",
    proto: !0,
    forced: !Pi || !Ni
  }, {
    concat: function (t) {
      var e, r, n, o, i, a = Ei(this), c = ki(a, 0), u = 0;
      for ((e = -1, n = arguments.length); e < n; e++) if (Ui(i = -1 === e ? a : arguments[e])) {
        if (u + (o = _i(i.length)) > Li) throw TypeError(Fi);
        for (r = 0; r < o; (r++, u++)) (r in i) && Ai(c, u, i[r]);
      } else {
        if (u >= Li) throw TypeError(Fi);
        Ai(c, u++, i);
      }
      return (c.length = u, c);
    }
  });
  var $i, Ci = o, Di = {}, Bi = g, qi = ae, zi = oe, Wi = Math.min, Hi = Di = [].copyWithin || (function (t, e) {
    var r = Bi(this), n = zi(r.length), o = qi(t, n), i = qi(e, n), a = arguments.length > 2 ? arguments[2] : void 0, c = Wi((void 0 === a ? n : qi(a, n)) - i, n - o), u = 1;
    for (i < o && o < i + c && (u = -1, i += c - 1, o += c - 1); c-- > 0; ) ((i in r) ? r[o] = r[i] : delete r[o], o += u, i += u);
    return r;
  }), Gi = cr, Vi = Dr("unscopables"), Yi = Array.prototype;
  null == Yi[Vi] && at(Yi, Vi, {
    configurable: !0,
    value: Gi(null)
  });
  var Ji = $i = function (t) {
    Yi[Vi][t] = !0;
  };
  (Ci({
    target: "Array",
    proto: !0
  }, {
    copyWithin: Hi
  }), Ji("copyWithin"));
  var Xi, Ki = zr.every, Qi = a;
  o({
    target: "Array",
    proto: !0,
    forced: !(Xi = function (t, e) {
      var r = [][t];
      return !!r && Qi(function () {
        r.call(null, e || (function () {
          throw 1;
        }), 1);
      });
    })("every")
  }, {
    every: function (t) {
      return Ki(this, t, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
  var Zi, ta = g, ea = ae, ra = oe, na = $i;
  (o({
    target: "Array",
    proto: !0
  }, {
    fill: Zi = function (t) {
      for (var e = ta(this), r = ra(e.length), n = arguments.length, o = ea(n > 1 ? arguments[1] : void 0, r), i = n > 2 ? arguments[2] : void 0, a = void 0 === i ? r : ea(i, r); a > o; ) e[o++] = t;
      return e;
    }
  }), na("fill"));
  var oa = zr.filter;
  o({
    target: "Array",
    proto: !0,
    forced: !vi("filter")
  }, {
    filter: function (t) {
      return oa(this, t, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
  var ia = o, aa = zr.find, ca = $i, ua = "find", sa = !0;
  ((ua in []) && Array(1).find(function () {
    sa = !1;
  }), ia({
    target: "Array",
    proto: !0,
    forced: sa
  }, {
    find: function (t) {
      return aa(this, t, arguments.length > 1 ? arguments[1] : void 0);
    }
  }), ca(ua));
  var fa = o, la = zr.findIndex, ha = $i, pa = "findIndex", da = !0;
  ((pa in []) && Array(1).findIndex(function () {
    da = !1;
  }), fa({
    target: "Array",
    proto: !0,
    forced: da
  }, {
    findIndex: function (t) {
      return la(this, t, arguments.length > 1 ? arguments[1] : void 0);
    }
  }), ha(pa));
  var ga, va = ar, ya = oe, ma = Wr, ba = function (t, e, r, n, o, i, a, c) {
    for (var u, s = o, f = 0, l = !!a && ma(a, c, 3); f < n; ) {
      if ((f in r)) {
        if ((u = l ? l(r[f], f, e) : r[f], i > 0 && va(u))) s = ba(t, e, u, ya(u.length), s, i - 1) - 1; else {
          if (s >= 9007199254740991) throw TypeError("Exceed the acceptable array length");
          t[s] = u;
        }
        s++;
      }
      f++;
    }
    return s;
  }, wa = ga = ba, Ea = g, _a = oe, Sa = ie, xa = Gr;
  o({
    target: "Array",
    proto: !0
  }, {
    flat: function () {
      var t = arguments.length ? arguments[0] : void 0, e = Ea(this), r = _a(e.length), n = xa(e, 0);
      return (n.length = wa(n, e, e, r, 0, void 0 === t ? 1 : Sa(t)), n);
    }
  });
  var Aa = ga, ka = g, Oa = oe, Ta = Hr, Ma = Gr;
  o({
    target: "Array",
    proto: !0
  }, {
    flatMap: function (t) {
      var e, r = ka(this), n = Oa(r.length);
      return (Ta(t), (e = Ma(r, 0)).length = Aa(e, r, r, n, 0, 1, t, arguments.length > 1 ? arguments[1] : void 0), e);
    }
  });
  var Ia, Ra = o, ja = zr.forEach;
  Ia = Xi("forEach") ? [].forEach : function (t) {
    return ja(this, t, arguments.length > 1 ? arguments[1] : void 0);
  };
  Ra({
    target: "Array",
    proto: !0,
    forced: [].forEach != Ia
  }, {
    forEach: Ia
  });
  var La, Fa, Pa = o, Na = Wr, Ua = g, $a = b, Ca = ei, Da = function (t, e, r, n) {
    try {
      return n ? e($a(r)[0], r[1]) : e(r);
    } catch (e) {
      throw (Ca(t), e);
    }
  }, Ba = To, qa = oe, za = gi, Wa = Go, Ha = La = function (t) {
    var e, r, n, o, i, a, c = Ua(t), u = "function" == typeof this ? this : Array, s = arguments.length, f = s > 1 ? arguments[1] : void 0, l = void 0 !== f, h = Wa(c), p = 0;
    if ((l && (f = Na(f, s > 2 ? arguments[2] : void 0, 2)), null == h || u == Array && Ba(h))) for (r = new u(e = qa(c.length)); e > p; p++) (a = l ? f(c[p], p) : c[p], za(r, p, a)); else for ((i = (o = h.call(c)).next, r = new u()); !(n = i.call(o)).done; p++) (a = l ? Da(o, f, [n.value, p], !0) : n.value, za(r, p, a));
    return (r.length = p, r);
  }, Ga = Dr("iterator"), Va = !1;
  try {
    var Ya = 0, Ja = {
      next: function () {
        return {
          done: !!Ya++
        };
      },
      return: function () {
        Va = !0;
      }
    };
    (Ja[Ga] = function () {
      return this;
    }, Array.from(Ja, function () {
      throw 2;
    }));
  } catch (t) {}
  Pa({
    target: "Array",
    stat: !0,
    forced: !(Fa = function (t, e) {
      if (!e && !Va) return !1;
      var r = !1;
      try {
        var n = {};
        (n[Ga] = function () {
          return {
            next: function () {
              return {
                done: r = !0
              };
            }
          };
        }, t(n));
      } catch (t) {}
      return r;
    })(function (t) {
      Array.from(t);
    })
  }, {
    from: Ha
  });
  var Xa = ne.includes, Ka = $i;
  (o({
    target: "Array",
    proto: !0
  }, {
    includes: function (t) {
      return Xa(this, t, arguments.length > 1 ? arguments[1] : void 0);
    }
  }), Ka("includes"));
  var Qa = o, Za = ne.indexOf, tc = Xi, ec = [].indexOf, rc = !!ec && 1 / [1].indexOf(1, -0) < 0, nc = tc("indexOf");
  (Qa({
    target: "Array",
    proto: !0,
    forced: rc || !nc
  }, {
    indexOf: function (t) {
      return rc ? ec.apply(this, arguments) || 0 : Za(this, t, arguments.length > 1 ? arguments[1] : void 0);
    }
  }), o({
    target: "Array",
    stat: !0
  }, {
    isArray: ar
  }));
  var oc, ic, ac, cc, uc, sc, fc, lc = u, hc = $i, pc = o, dc = a, gc = So, vc = m, yc = d, mc = Dr("iterator"), bc = !1;
  [].keys && (("next" in (fc = [].keys())) ? (sc = gc(gc(fc))) !== Object.prototype && (uc = sc) : bc = !0);
  var wc = null == uc || dc(function () {
    var t = {};
    return uc[mc].call(t) !== t;
  });
  (wc && (uc = {}), yc(uc, mc) || vc(uc, mc, function () {
    return this;
  }));
  var Ec = (cc = {
    IteratorPrototype: uc,
    BUGGY_SAFARI_ITERATORS: bc
  }).IteratorPrototype, _c = cr, Sc = c, xc = qr, Ac = Ho, kc = function () {
    return this;
  }, Oc = ac = function (t, e, r) {
    var n = e + " Iterator";
    return (t.prototype = _c(Ec, {
      next: Sc(1, r)
    }), xc(t, n, !1, !0), Ac[n] = kc, t);
  }, Tc = So, Mc = Ao, Ic = qr, Rc = m, jc = w, Lc = Ho, Fc = cc.IteratorPrototype, Pc = cc.BUGGY_SAFARI_ITERATORS, Nc = Dr("iterator"), Uc = "keys", $c = "values", Cc = "entries", Dc = function () {
    return this;
  }, Bc = ic = function (t, e, r, n, o, i, a) {
    Oc(r, e, n);
    var c, u, s, f = function (t) {
      if (t === o && g) return g;
      if (!Pc && (t in p)) return p[t];
      switch (t) {
        case Uc:
        case $c:
        case Cc:
          return function () {
            return new r(this, t);
          };
      }
      return function () {
        return new r(this);
      };
    }, l = e + " Iterator", h = !1, p = t.prototype, d = p[Nc] || p["@@iterator"] || o && p[o], g = !Pc && d || f(o), v = "Array" == e && p.entries || d;
    if ((v && (c = Tc(v.call(new t())), Fc !== Object.prototype && c.next && (Tc(c) !== Fc && (Mc ? Mc(c, Fc) : "function" != typeof c[Nc] && Rc(c, Nc, Dc)), Ic(c, l, !0, !0))), o == $c && d && d.name !== $c && (h = !0, g = function () {
      return d.call(this);
    }), p[Nc] !== g && Rc(p, Nc, g), Lc[e] = g, o)) if ((u = {
      values: f($c),
      keys: i ? g : f(Uc),
      entries: f(Cc)
    }, a)) for (s in u) (Pc || h || !((s in p))) && jc(p, s, u[s]); else pc({
      target: e,
      proto: !0,
      forced: Pc || h
    }, u);
    return u;
  }, qc = "Array Iterator", zc = bt.set, Wc = bt.getterFor(qc);
  (oc = Bc(Array, "Array", function (t, e) {
    zc(this, {
      type: qc,
      target: lc(t),
      index: 0,
      kind: e
    });
  }, function () {
    var t = Wc(this), e = t.target, r = t.kind, n = t.index++;
    return !e || n >= e.length ? (t.target = void 0, {
      value: void 0,
      done: !0
    }) : "keys" == r ? {
      value: n,
      done: !1
    } : "values" == r ? {
      value: e[n],
      done: !1
    } : {
      value: [n, e[n]],
      done: !1
    };
  }, "values"), Ho.Arguments = Ho.Array, hc("keys"), hc("values"), hc("entries"));
  var Hc = o, Gc = u, Vc = [].join, Yc = s != Object, Jc = Xi("join", ",");
  Hc({
    target: "Array",
    proto: !0,
    forced: Yc || !Jc
  }, {
    join: function (t) {
      return Vc.call(Gc(this), void 0 === t ? "," : t);
    }
  });
  var Xc = o, Kc = {}, Qc = u, Zc = ie, tu = oe, eu = Xi, ru = Math.min, nu = [].lastIndexOf, ou = !!nu && 1 / [1].lastIndexOf(1, -0) < 0, iu = eu("lastIndexOf");
  Kc = ou || !iu ? function (t) {
    if (ou) return nu.apply(this, arguments) || 0;
    var e = Qc(this), r = tu(e.length), n = r - 1;
    for ((arguments.length > 1 && (n = ru(n, Zc(arguments[1]))), n < 0 && (n = r + n)); n >= 0; n--) if ((n in e) && e[n] === t) return n || 0;
    return -1;
  } : nu;
  Xc({
    target: "Array",
    proto: !0,
    forced: Kc !== [].lastIndexOf
  }, {
    lastIndexOf: Kc
  });
  var au = zr.map;
  o({
    target: "Array",
    proto: !0,
    forced: !vi("map")
  }, {
    map: function (t) {
      return au(this, t, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
  var cu = gi;
  o({
    target: "Array",
    stat: !0,
    forced: a(function () {
      function t() {}
      return !(Array.of.call(t) instanceof t);
    })
  }, {
    of: function () {
      for (var t = 0, e = arguments.length, r = new ("function" == typeof this ? this : Array)(e); e > t; ) cu(r, t, arguments[t++]);
      return (r.length = e, r);
    }
  });
  var uu, su, fu = o, lu = Hr, hu = g, pu = s, du = oe, gu = function (t) {
    return function (e, r, n, o) {
      lu(r);
      var i = hu(e), a = pu(i), c = du(i.length), u = t ? c - 1 : 0, s = t ? -1 : 1;
      if (n < 2) for (; ; ) {
        if ((u in a)) {
          (o = a[u], u += s);
          break;
        }
        if ((u += s, t ? u < 0 : c <= u)) throw TypeError("Reduce of empty array with no initial value");
      }
      for (; t ? u >= 0 : c > u; u += s) (u in a) && (o = r(o, a[u], u, i));
      return o;
    };
  }, vu = (uu = {
    left: gu(!1),
    right: gu(!0)
  }).left, yu = Xi, mu = se, bu = su = "process" == f(S.process);
  fu({
    target: "Array",
    proto: !0,
    forced: !yu("reduce") || !bu && mu > 79 && mu < 83
  }, {
    reduce: function (t) {
      return vu(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
  var wu = uu.right, Eu = se, _u = su;
  o({
    target: "Array",
    proto: !0,
    forced: !Xi("reduceRight") || !_u && Eu > 79 && Eu < 83
  }, {
    reduceRight: function (t) {
      return wu(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
  var Su = ar, xu = [].reverse, Au = [1, 2];
  o({
    target: "Array",
    proto: !0,
    forced: String(Au) === String(Au.reverse())
  }, {
    reverse: function () {
      return (Su(this) && (this.length = this.length), xu.call(this));
    }
  });
  var ku = o, Ou = p, Tu = ar, Mu = ae, Iu = oe, Ru = u, ju = gi, Lu = Dr, Fu = vi("slice"), Pu = Lu("species"), Nu = [].slice, Uu = Math.max;
  ku({
    target: "Array",
    proto: !0,
    forced: !Fu
  }, {
    slice: function (t, e) {
      var r, n, o, i = Ru(this), a = Iu(i.length), c = Mu(t, a), u = Mu(void 0 === e ? a : e, a);
      if (Tu(i) && ("function" != typeof (r = i.constructor) || r !== Array && !Tu(r.prototype) ? Ou(r) && null === (r = r[Pu]) && (r = void 0) : r = void 0, r === Array || void 0 === r)) return Nu.call(i, c, u);
      for ((n = new (void 0 === r ? Array : r)(Uu(u - c, 0)), o = 0); c < u; (c++, o++)) (c in i) && ju(n, o, i[c]);
      return (n.length = o, n);
    }
  });
  var $u = zr.some;
  o({
    target: "Array",
    proto: !0,
    forced: !Xi("some")
  }, {
    some: function (t) {
      return $u(this, t, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
  var Cu = o, Du = Hr, Bu = g, qu = a, zu = Xi, Wu = [], Hu = Wu.sort, Gu = qu(function () {
    Wu.sort(void 0);
  }), Vu = qu(function () {
    Wu.sort(null);
  }), Yu = zu("sort");
  Cu({
    target: "Array",
    proto: !0,
    forced: Gu || !Vu || !Yu
  }, {
    sort: function (t) {
      return void 0 === t ? Hu.call(Bu(this)) : Hu.call(Bu(this), Du(t));
    }
  });
  var Ju, Xu = ee, Ku = i, Qu = Dr("species");
  (Ju = function (t) {
    var e = Xu(t), r = at;
    Ku && e && !e[Qu] && r(e, Qu, {
      configurable: !0,
      get: function () {
        return this;
      }
    });
  })("Array");
  var Zu = o, ts = ae, es = ie, rs = oe, ns = g, os = Gr, is = gi, as = vi("splice"), cs = Math.max, us = Math.min, ss = 9007199254740991, fs = "Maximum allowed length exceeded";
  (Zu({
    target: "Array",
    proto: !0,
    forced: !as
  }, {
    splice: function (t, e) {
      var r, n, o, i, a, c, u = ns(this), s = rs(u.length), f = ts(t, s), l = arguments.length;
      if ((0 === l ? r = n = 0 : 1 === l ? (r = 0, n = s - f) : (r = l - 2, n = us(cs(es(e), 0), s - f)), s + r - n > ss)) throw TypeError(fs);
      for ((o = os(u, n), i = 0); i < n; i++) ((a = f + i) in u) && is(o, i, u[a]);
      if ((o.length = n, r < n)) {
        for (i = f; i < s - n; i++) (c = i + r, ((a = i + n) in u) ? u[c] = u[a] : delete u[c]);
        for (i = s; i > s - n + r; i--) delete u[i - 1];
      } else if (r > n) for (i = s - n; i > f; i--) (c = i + r - 1, ((a = i + n - 1) in u) ? u[c] = u[a] : delete u[c]);
      for (i = 0; i < r; i++) u[i + f] = arguments[i + 2];
      return (u.length = s - n + r, o);
    }
  }), $i("flat"), $i("flatMap"));
  var ls, hs, ps, ds, gs, vs, ys = o, ms = S, bs = S, ws = i, Es = hs = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView, _s = m, Ss = w, xs = ps = function (t, e, r) {
    for (var n in e) Ss(t, n, e[n], r);
    return t;
  }, As = a, ks = ds = function (t, e, r) {
    if (!(t instanceof e)) throw TypeError("Incorrect " + (r ? r + " " : "") + "invocation");
    return t;
  }, Os = ie, Ts = oe, Ms = ie, Is = oe, Rs = gs = function (t) {
    if (void 0 === t) return 0;
    var e = Ms(t), r = Is(e);
    if (e !== r) throw RangeError("Wrong length or index");
    return r;
  }, js = Math.abs, Ls = Math.pow, Fs = Math.floor, Ps = Math.log, Ns = Math.LN2;
  vs = {
    pack: function (t, e, r) {
      var n, o, i, a = new Array(r), c = 8 * r - e - 1, u = (1 << c) - 1, s = u >> 1, f = 23 === e ? Ls(2, -24) - Ls(2, -77) : 0, l = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0, h = 0;
      for ((t = js(t)) != t || t === 1 / 0 ? (o = t != t ? 1 : 0, n = u) : (n = Fs(Ps(t) / Ns), t * (i = Ls(2, -n)) < 1 && (n--, i *= 2), (t += n + s >= 1 ? f / i : f * Ls(2, 1 - s)) * i >= 2 && (n++, i /= 2), n + s >= u ? (o = 0, n = u) : n + s >= 1 ? (o = (t * i - 1) * Ls(2, e), n += s) : (o = t * Ls(2, s - 1) * Ls(2, e), n = 0)); e >= 8; (a[h++] = 255 & o, o /= 256, e -= 8)) ;
      for ((n = n << e | o, c += e); c > 0; (a[h++] = 255 & n, n /= 256, c -= 8)) ;
      return (a[--h] |= 128 * l, a);
    },
    unpack: function (t, e) {
      var r, n = t.length, o = 8 * n - e - 1, i = (1 << o) - 1, a = i >> 1, c = o - 7, u = n - 1, s = t[u--], f = 127 & s;
      for (s >>= 7; c > 0; (f = 256 * f + t[u], u--, c -= 8)) ;
      for ((r = f & (1 << -c) - 1, f >>= -c, c += e); c > 0; (r = 256 * r + t[u], u--, c -= 8)) ;
      if (0 === f) f = 1 - a; else {
        if (f === i) return r ? NaN : s ? -1 / 0 : 1 / 0;
        (r += Ls(2, e), f -= a);
      }
      return (s ? -1 : 1) * r * Ls(2, f - e);
    }
  };
  var Us = So, $s = Ao, Cs = Ce, Ds = at, Bs = qr, qs = bt.get, zs = bt.set, Ws = "ArrayBuffer", Hs = "DataView", Gs = "Wrong index", Vs = bs.ArrayBuffer, Ys = Vs, Js = bs.DataView, Xs = Js && Js.prototype, Ks = Object.prototype, Qs = bs.RangeError, Zs = vs.pack, tf = vs.unpack, ef = function (t) {
    return [255 & t];
  }, rf = function (t) {
    return [255 & t, t >> 8 & 255];
  }, nf = function (t) {
    return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255];
  }, of = function (t) {
    return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0];
  }, af = function (t) {
    return Zs(t, 23, 4);
  }, cf = function (t) {
    return Zs(t, 52, 8);
  }, uf = function (t, e) {
    Ds(t.prototype, e, {
      get: function () {
        return qs(this)[e];
      }
    });
  }, sf = function (t, e, r, n) {
    var o = Rs(r), i = qs(t);
    if (o + e > i.byteLength) throw Qs(Gs);
    var a = qs(i.buffer).bytes, c = o + i.byteOffset, u = a.slice(c, c + e);
    return n ? u : u.reverse();
  }, ff = function (t, e, r, n, o, i) {
    var a = Rs(r), c = qs(t);
    if (a + e > c.byteLength) throw Qs(Gs);
    for (var u = qs(c.buffer).bytes, s = a + c.byteOffset, f = n(+o), l = 0; l < e; l++) u[s + l] = f[i ? l : e - l - 1];
  };
  if (Es) {
    if (!As(function () {
      Vs(1);
    }) || !As(function () {
      new Vs(-1);
    }) || As(function () {
      return (new Vs(), new Vs(1.5), new Vs(NaN), Vs.name != Ws);
    })) {
      for (var lf, hf = (Ys = function (t) {
        return (ks(this, Ys), new Vs(Rs(t)));
      }).prototype = Vs.prototype, pf = Cs(Vs), df = 0; pf.length > df; ) ((lf = pf[df++]) in Ys) || _s(Ys, lf, Vs[lf]);
      hf.constructor = Ys;
    }
    $s && Us(Xs) !== Ks && $s(Xs, Ks);
    var gf = new Js(new Ys(2)), vf = Xs.setInt8;
    (gf.setInt8(0, 2147483648), gf.setInt8(1, 2147483649), !gf.getInt8(0) && gf.getInt8(1) || xs(Xs, {
      setInt8: function (t, e) {
        vf.call(this, t, e << 24 >> 24);
      },
      setUint8: function (t, e) {
        vf.call(this, t, e << 24 >> 24);
      }
    }, {
      unsafe: !0
    }));
  } else (Ys = function (t) {
    ks(this, Ys, Ws);
    var e = Rs(t);
    (zs(this, {
      bytes: Zi.call(new Array(e), 0),
      byteLength: e
    }), ws || (this.byteLength = e));
  }, Js = function (t, e, r) {
    (ks(this, Js, Hs), ks(t, Ys, Hs));
    var n = qs(t).byteLength, o = Os(e);
    if (o < 0 || o > n) throw Qs("Wrong offset");
    if (o + (r = void 0 === r ? n - o : Ts(r)) > n) throw Qs("Wrong length");
    (zs(this, {
      buffer: t,
      byteLength: r,
      byteOffset: o
    }), ws || (this.buffer = t, this.byteLength = r, this.byteOffset = o));
  }, ws && (uf(Ys, "byteLength"), uf(Js, "buffer"), uf(Js, "byteLength"), uf(Js, "byteOffset")), xs(Js.prototype, {
    getInt8: function (t) {
      return sf(this, 1, t)[0] << 24 >> 24;
    },
    getUint8: function (t) {
      return sf(this, 1, t)[0];
    },
    getInt16: function (t) {
      var e = sf(this, 2, t, arguments.length > 1 ? arguments[1] : void 0);
      return (e[1] << 8 | e[0]) << 16 >> 16;
    },
    getUint16: function (t) {
      var e = sf(this, 2, t, arguments.length > 1 ? arguments[1] : void 0);
      return e[1] << 8 | e[0];
    },
    getInt32: function (t) {
      return of(sf(this, 4, t, arguments.length > 1 ? arguments[1] : void 0));
    },
    getUint32: function (t) {
      return of(sf(this, 4, t, arguments.length > 1 ? arguments[1] : void 0)) >>> 0;
    },
    getFloat32: function (t) {
      return tf(sf(this, 4, t, arguments.length > 1 ? arguments[1] : void 0), 23);
    },
    getFloat64: function (t) {
      return tf(sf(this, 8, t, arguments.length > 1 ? arguments[1] : void 0), 52);
    },
    setInt8: function (t, e) {
      ff(this, 1, t, ef, e);
    },
    setUint8: function (t, e) {
      ff(this, 1, t, ef, e);
    },
    setInt16: function (t, e) {
      ff(this, 2, t, rf, e, arguments.length > 2 ? arguments[2] : void 0);
    },
    setUint16: function (t, e) {
      ff(this, 2, t, rf, e, arguments.length > 2 ? arguments[2] : void 0);
    },
    setInt32: function (t, e) {
      ff(this, 4, t, nf, e, arguments.length > 2 ? arguments[2] : void 0);
    },
    setUint32: function (t, e) {
      ff(this, 4, t, nf, e, arguments.length > 2 ? arguments[2] : void 0);
    },
    setFloat32: function (t, e) {
      ff(this, 4, t, af, e, arguments.length > 2 ? arguments[2] : void 0);
    },
    setFloat64: function (t, e) {
      ff(this, 8, t, cf, e, arguments.length > 2 ? arguments[2] : void 0);
    }
  }));
  (Bs(Ys, Ws), Bs(Js, Hs));
  var yf = Ju, mf = "ArrayBuffer", bf = (ls = {
    ArrayBuffer: Ys,
    DataView: Js
  }).ArrayBuffer;
  (ys({
    global: !0,
    forced: ms.ArrayBuffer !== bf
  }, {
    ArrayBuffer: bf
  }), yf(mf));
  var wf, Ef, _f = o, Sf = hs, xf = i, Af = S, kf = p, Of = d, Tf = Vo, Mf = m, If = w, Rf = at, jf = So, Lf = Ao, Ff = Dr, Pf = Rt, Nf = Af.Int8Array, Uf = Nf && Nf.prototype, $f = Af.Uint8ClampedArray, Cf = $f && $f.prototype, Df = Nf && jf(Nf), Bf = Uf && jf(Uf), qf = Object.prototype, zf = qf.isPrototypeOf, Wf = Ff("toStringTag"), Hf = Pf("TYPED_ARRAY_TAG"), Gf = Sf && !!Lf && "Opera" !== Tf(Af.opera), Vf = !1, Yf = {
    Int8Array: 1,
    Uint8Array: 1,
    Uint8ClampedArray: 1,
    Int16Array: 2,
    Uint16Array: 2,
    Int32Array: 4,
    Uint32Array: 4,
    Float32Array: 4,
    Float64Array: 8
  }, Jf = {
    BigInt64Array: 8,
    BigUint64Array: 8
  }, Xf = function (t) {
    if (!kf(t)) return !1;
    var e = Tf(t);
    return Of(Yf, e) || Of(Jf, e);
  };
  for (Ef in Yf) Af[Ef] || (Gf = !1);
  if ((!Gf || "function" != typeof Df || Df === Function.prototype) && (Df = function () {
    throw TypeError("Incorrect invocation");
  }, Gf)) for (Ef in Yf) Af[Ef] && Lf(Af[Ef], Df);
  if ((!Gf || !Bf || Bf === qf) && (Bf = Df.prototype, Gf)) for (Ef in Yf) Af[Ef] && Lf(Af[Ef].prototype, Bf);
  if ((Gf && jf(Cf) !== Bf && Lf(Cf, Bf), xf && !Of(Bf, Wf))) for (Ef in (Vf = !0, Rf(Bf, Wf, {
    get: function () {
      return kf(this) ? this[Hf] : void 0;
    }
  }), Yf)) Af[Ef] && Mf(Af[Ef], Hf, Ef);
  _f({
    target: "ArrayBuffer",
    stat: !0,
    forced: !(wf = {
      NATIVE_ARRAY_BUFFER_VIEWS: Gf,
      TYPED_ARRAY_TAG: Vf && Hf,
      aTypedArray: function (t) {
        if (Xf(t)) return t;
        throw TypeError("Target is not a typed array");
      },
      aTypedArrayConstructor: function (t) {
        if (Lf) {
          if (zf.call(Df, t)) return t;
        } else for (var e in Yf) if (Of(Yf, Ef)) {
          var r = Af[e];
          if (r && (t === r || zf.call(r, t))) return t;
        }
        throw TypeError("Target is not a typed array constructor");
      },
      exportTypedArrayMethod: function (t, e, r) {
        if (xf) {
          if (r) for (var n in Yf) {
            var o = Af[n];
            if (o && Of(o.prototype, t)) try {
              delete o.prototype[t];
            } catch (t) {}
          }
          Bf[t] && !r || If(Bf, t, r ? e : Gf && Uf[t] || e);
        }
      },
      exportTypedArrayStaticMethod: function (t, e, r) {
        var n, o;
        if (xf) {
          if (Lf) {
            if (r) for (n in Yf) if ((o = Af[n]) && Of(o, t)) try {
              delete o[t];
            } catch (t) {}
            if (Df[t] && !r) return;
            try {
              return If(Df, t, r ? e : Gf && Df[t] || e);
            } catch (t) {}
          }
          for (n in Yf) !(o = Af[n]) || o[t] && !r || If(o, t, e);
        }
      },
      isView: function (t) {
        if (!kf(t)) return !1;
        var e = Tf(t);
        return "DataView" === e || Of(Yf, e) || Of(Jf, e);
      },
      isTypedArray: Xf,
      TypedArray: Df,
      TypedArrayPrototype: Bf
    }).NATIVE_ARRAY_BUFFER_VIEWS
  }, {
    isView: wf.isView
  });
  var Kf, Qf = o, Zf = a, tl = b, el = ae, rl = oe, nl = b, ol = Hr, il = Dr("species"), al = Kf = function (t, e) {
    var r, n = nl(t).constructor;
    return void 0 === n || null == (r = nl(n)[il]) ? e : ol(r);
  }, cl = ls.ArrayBuffer, ul = ls.DataView, sl = cl.prototype.slice;
  (Qf({
    target: "ArrayBuffer",
    proto: !0,
    unsafe: !0,
    forced: Zf(function () {
      return !new cl(2).slice(1, void 0).byteLength;
    })
  }, {
    slice: function (t, e) {
      if (void 0 !== sl && void 0 === e) return sl.call(tl(this), t);
      for (var r = tl(this).byteLength, n = el(t, r), o = el(void 0 === e ? r : e, r), i = new (al(this, cl))(rl(o - n)), a = new ul(this), c = new ul(i), u = 0; n < o; ) c.setUint8(u++, a.getUint8(n++));
      return i;
    }
  }), o({
    global: !0,
    forced: !hs
  }, {
    DataView: ls.DataView
  }), o({
    target: "Date",
    stat: !0
  }, {
    now: function () {
      return new Date().getTime();
    }
  }));
  var fl, ll, hl = o, pl = a, dl = oe, gl = ie, vl = l;
  ll = function (t) {
    var e = String(vl(this)), r = "", n = gl(t);
    if (n < 0 || n == 1 / 0) throw RangeError("Wrong number of repetitions");
    for (; n > 0; (n >>>= 1) && (e += e)) 1 & n && (r += e);
    return r;
  };
  var yl = l, ml = Math.ceil, bl = function (t) {
    return function (e, r, n) {
      var o, i, a = String(yl(e)), c = a.length, u = void 0 === n ? " " : String(n), s = dl(r);
      return s <= c || "" == u ? a : ((i = ll.call(u, ml((o = s - c) / u.length))).length > o && (i = i.slice(0, o)), t ? a + i : i + a);
    };
  }, wl = (fl = {
    start: bl(!1),
    end: bl(!0)
  }).start, El = Math.abs, _l = Date.prototype, Sl = _l.getTime, xl = _l.toISOString, Al = pl(function () {
    return "0385-07-25T07:06:39.999Z" != xl.call(new Date(-50000000000001));
  }) || !pl(function () {
    xl.call(new Date(NaN));
  }) ? function () {
    if (!isFinite(Sl.call(this))) throw RangeError("Invalid time value");
    var t = this, e = t.getUTCFullYear(), r = t.getUTCMilliseconds(), n = e < 0 ? "-" : e > 9999 ? "+" : "";
    return n + wl(El(e), n ? 6 : 4, 0) + "-" + wl(t.getUTCMonth() + 1, 2, 0) + "-" + wl(t.getUTCDate(), 2, 0) + "T" + wl(t.getUTCHours(), 2, 0) + ":" + wl(t.getUTCMinutes(), 2, 0) + ":" + wl(t.getUTCSeconds(), 2, 0) + "." + wl(r, 3, 0) + "Z";
  } : xl;
  hl({
    target: "Date",
    proto: !0,
    forced: Date.prototype.toISOString !== Al
  }, {
    toISOString: Al
  });
  var kl = g, Ol = h;
  o({
    target: "Date",
    proto: !0,
    forced: a(function () {
      return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
        toISOString: function () {
          return 1;
        }
      });
    })
  }, {
    toJSON: function (t) {
      var e = kl(this), r = Ol(e);
      return "number" != typeof r || isFinite(r) ? e.toISOString() : null;
    }
  });
  var Tl = m, Ml = b, Il = h, Rl = function (t) {
    if ("string" !== t && "number" !== t && "default" !== t) throw TypeError("Incorrect hint");
    return Il(Ml(this), "number" !== t);
  }, jl = Dr("toPrimitive"), Ll = Date.prototype;
  (jl in Ll) || Tl(Ll, jl, Rl);
  var Fl = w, Pl = Date.prototype, Nl = "Invalid Date", Ul = "toString", $l = Pl.toString, Cl = Pl.getTime;
  new Date(NaN) + "" != Nl && Fl(Pl, Ul, function () {
    var t = Cl.call(this);
    return t == t ? $l.call(this) : Nl;
  });
  var Dl = {}, Bl = Hr, ql = p, zl = [].slice, Wl = {}, Hl = function (t, e, r) {
    if (!((e in Wl))) {
      for (var n = [], o = 0; o < e; o++) n[o] = "a[" + o + "]";
      Wl[e] = Function("C,a", "return new C(" + n.join(",") + ")");
    }
    return Wl[e](t, r);
  };
  o({
    target: "Function",
    proto: !0
  }, {
    bind: Dl = Function.bind || (function (t) {
      var e = Bl(this), r = zl.call(arguments, 1), n = function () {
        var o = r.concat(zl.call(arguments));
        return this instanceof n ? Hl(e, o.length, o) : e.apply(t, o);
      };
      return (ql(e.prototype) && (n.prototype = e.prototype), n);
    })
  });
  var Gl = p, Vl = So, Yl = Dr("hasInstance"), Jl = Function.prototype;
  (Yl in Jl) || at(Jl, Yl, {
    value: function (t) {
      if ("function" != typeof this || !Gl(t)) return !1;
      if (!Gl(this.prototype)) return t instanceof this;
      for (; t = Vl(t); ) if (this.prototype === t) return !0;
      return !1;
    }
  });
  var Xl = i, Kl = at, Ql = Function.prototype, Zl = Ql.toString, th = /^\s*function ([^ (]*)/, eh = "name";
  (Xl && !((eh in Ql)) && Kl(Ql, eh, {
    configurable: !0,
    get: function () {
      try {
        return Zl.call(this).match(th)[1];
      } catch (t) {
        return "";
      }
    }
  }), o({
    global: !0
  }, {
    globalThis: S
  }));
  var rh = o, nh = a, oh = ee("JSON", "stringify"), ih = /[\uD800-\uDFFF]/g, ah = /^[\uD800-\uDBFF]$/, ch = /^[\uDC00-\uDFFF]$/, uh = function (t, e, r) {
    var n = r.charAt(e - 1), o = r.charAt(e + 1);
    return ah.test(t) && !ch.test(o) || ch.test(t) && !ah.test(n) ? "\\u" + t.charCodeAt(0).toString(16) : t;
  }, sh = nh(function () {
    return '"\\udf06\\ud834"' !== oh("\udf06\ud834") || '"\\udead"' !== oh("\udead");
  });
  (oh && rh({
    target: "JSON",
    stat: !0,
    forced: sh
  }, {
    stringify: function (t, e, r) {
      var n = oh.apply(null, arguments);
      return "string" == typeof n ? n.replace(ih, uh) : n;
    }
  }), qr(S.JSON, "JSON", !0));
  var fh, lh, hh = o, ph = S, dh = ce, gh = w, vh = {}, yh = jt, mh = p, bh = d, wh = at, Eh = Rt, _h = lh = !a(function () {
    return Object.isExtensible(Object.preventExtensions({}));
  }), Sh = Eh("meta"), xh = 0, Ah = Object.isExtensible || (function () {
    return !0;
  }), kh = function (t) {
    wh(t, Sh, {
      value: {
        objectID: "O" + ++xh,
        weakData: {}
      }
    });
  }, Oh = vh = {
    REQUIRED: !1,
    fastKey: function (t, e) {
      if (!mh(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
      if (!bh(t, Sh)) {
        if (!Ah(t)) return "F";
        if (!e) return "E";
        kh(t);
      }
      return t[Sh].objectID;
    },
    getWeakData: function (t, e) {
      if (!bh(t, Sh)) {
        if (!Ah(t)) return !0;
        if (!e) return !1;
        kh(t);
      }
      return t[Sh].weakData;
    },
    onFreeze: function (t) {
      return (_h && Oh.REQUIRED && Ah(t) && !bh(t, Sh) && kh(t), t);
    }
  };
  yh[Sh] = !0;
  var Th, Mh, Ih = Oo, Rh = ds, jh = p, Lh = a, Fh = Fa, Ph = qr, Nh = p, Uh = Ao, $h = Th = function (t, e, r) {
    var n, o;
    return (Uh && "function" == typeof (n = e.constructor) && n !== r && Nh(o = n.prototype) && o !== r.prototype && Uh(t, o), t);
  }, Ch = fh = function (t, e, r) {
    var n = -1 !== t.indexOf("Map"), o = -1 !== t.indexOf("Weak"), i = n ? "set" : "add", a = ph[t], c = a && a.prototype, u = a, s = {}, f = function (t) {
      var e = c[t];
      gh(c, t, "add" == t ? function (t) {
        return (e.call(this, 0 === t ? 0 : t), this);
      } : "delete" == t ? function (t) {
        return !(o && !jh(t)) && e.call(this, 0 === t ? 0 : t);
      } : "get" == t ? function (t) {
        return o && !jh(t) ? void 0 : e.call(this, 0 === t ? 0 : t);
      } : "has" == t ? function (t) {
        return !(o && !jh(t)) && e.call(this, 0 === t ? 0 : t);
      } : function (t, r) {
        return (e.call(this, 0 === t ? 0 : t, r), this);
      });
    };
    if (dh(t, "function" != typeof a || !(o || c.forEach && !Lh(function () {
      new a().entries().next();
    })))) (u = r.getConstructor(e, t, n, i), vh.REQUIRED = !0); else if (dh(t, !0)) {
      var l = new u(), h = l[i](o ? {} : -0, 1) != l, p = Lh(function () {
        l.has(1);
      }), d = Fh(function (t) {
        new a(t);
      }), g = !o && Lh(function () {
        for (var t = new a(), e = 5; e--; ) t[i](e, e);
        return !t.has(-0);
      });
      (d || ((u = e(function (e, r) {
        Rh(e, u, t);
        var o = $h(new a(), e, u);
        return (null != r && Ih(r, o[i], {
          that: o,
          AS_ENTRIES: n
        }), o);
      })).prototype = c, c.constructor = u), (p || g) && (f("delete"), f("has"), n && f("get")), (g || h) && f(i), o && c.clear && delete c.clear);
    }
    return (s[t] = u, hh({
      global: !0,
      forced: u != a
    }, s), Ph(u, t), o || r.setStrong(u, t, n), u);
  }, Dh = at, Bh = cr, qh = ps, zh = Wr, Wh = ds, Hh = Oo, Gh = ic, Vh = Ju, Yh = i, Jh = vh.fastKey, Xh = bt.set, Kh = bt.getterFor;
  (Mh = {
    getConstructor: function (t, e, r, n) {
      var o = t(function (t, i) {
        (Wh(t, o, e), Xh(t, {
          type: e,
          index: Bh(null),
          first: void 0,
          last: void 0,
          size: 0
        }), Yh || (t.size = 0), null != i && Hh(i, t[n], {
          that: t,
          AS_ENTRIES: r
        }));
      }), i = Kh(e), a = function (t, e, r) {
        var n, o, a = i(t), u = c(t, e);
        return (u ? u.value = r : (a.last = u = {
          index: o = Jh(e, !0),
          key: e,
          value: r,
          previous: n = a.last,
          next: void 0,
          removed: !1
        }, a.first || (a.first = u), n && (n.next = u), Yh ? a.size++ : t.size++, "F" !== o && (a.index[o] = u)), t);
      }, c = function (t, e) {
        var r, n = i(t), o = Jh(e);
        if ("F" !== o) return n.index[o];
        for (r = n.first; r; r = r.next) if (r.key == e) return r;
      };
      return (qh(o.prototype, {
        clear: function () {
          for (var t = i(this), e = t.index, r = t.first; r; ) (r.removed = !0, r.previous && (r.previous = r.previous.next = void 0), delete e[r.index], r = r.next);
          (t.first = t.last = void 0, Yh ? t.size = 0 : this.size = 0);
        },
        delete: function (t) {
          var e = this, r = i(e), n = c(e, t);
          if (n) {
            var o = n.next, a = n.previous;
            (delete r.index[n.index], n.removed = !0, a && (a.next = o), o && (o.previous = a), r.first == n && (r.first = o), r.last == n && (r.last = a), Yh ? r.size-- : e.size--);
          }
          return !!n;
        },
        forEach: function (t) {
          for (var e, r = i(this), n = zh(t, arguments.length > 1 ? arguments[1] : void 0, 3); e = e ? e.next : r.first; ) for (n(e.value, e.key, this); e && e.removed; ) e = e.previous;
        },
        has: function (t) {
          return !!c(this, t);
        }
      }), qh(o.prototype, r ? {
        get: function (t) {
          var e = c(this, t);
          return e && e.value;
        },
        set: function (t, e) {
          return a(this, 0 === t ? 0 : t, e);
        }
      } : {
        add: function (t) {
          return a(this, t = 0 === t ? 0 : t, t);
        }
      }), Yh && Dh(o.prototype, "size", {
        get: function () {
          return i(this).size;
        }
      }), o);
    },
    setStrong: function (t, e, r) {
      var n = e + " Iterator", o = Kh(e), i = Kh(n);
      (Gh(t, e, function (t, e) {
        Xh(this, {
          type: n,
          target: t,
          state: o(t),
          kind: e,
          last: void 0
        });
      }, function () {
        for (var t = i(this), e = t.kind, r = t.last; r && r.removed; ) r = r.previous;
        return t.target && (t.last = r = r ? r.next : t.state.first) ? "keys" == e ? {
          value: r.key,
          done: !1
        } : "values" == e ? {
          value: r.value,
          done: !1
        } : {
          value: [r.key, r.value],
          done: !1
        } : (t.target = void 0, {
          value: void 0,
          done: !0
        });
      }, r ? "entries" : "values", !r, !0), Vh(e));
    }
  }, $9d322e054c9506fd619cb06483fc61bc$exports = Ch("Map", function (t) {
    return function () {
      return t(this, arguments.length ? arguments[0] : void 0);
    };
  }, Mh));
  var Qh, Zh = o, tp = Math.log, ep = Qh = Math.log1p || (function (t) {
    return (t = +t) > -1e-8 && t < 1e-8 ? t - t * t / 2 : tp(1 + t);
  }), rp = Math.acosh, np = Math.log, op = Math.sqrt, ip = Math.LN2;
  Zh({
    target: "Math",
    stat: !0,
    forced: !rp || 710 != Math.floor(rp(Number.MAX_VALUE)) || rp(1 / 0) != 1 / 0
  }, {
    acosh: function (t) {
      return (t = +t) < 1 ? NaN : t > 94906265.62425156 ? np(t) + ip : ep(t - 1 + op(t - 1) * op(t + 1));
    }
  });
  var ap = o, cp = Math.asinh, up = Math.log, sp = Math.sqrt;
  ap({
    target: "Math",
    stat: !0,
    forced: !(cp && 1 / cp(0) > 0)
  }, {
    asinh: function t(e) {
      return isFinite(e = +e) && 0 != e ? e < 0 ? -t(-e) : up(e + sp(e * e + 1)) : e;
    }
  });
  var fp = o, lp = Math.atanh, hp = Math.log;
  fp({
    target: "Math",
    stat: !0,
    forced: !(lp && 1 / lp(-0) < 0)
  }, {
    atanh: function (t) {
      return 0 == (t = +t) ? t : hp((1 + t) / (1 - t)) / 2;
    }
  });
  var pp, dp = o, gp = pp = Math.sign || (function (t) {
    return 0 == (t = +t) || t != t ? t : t < 0 ? -1 : 1;
  }), vp = Math.abs, yp = Math.pow;
  dp({
    target: "Math",
    stat: !0
  }, {
    cbrt: function (t) {
      return gp(t = +t) * yp(vp(t), 1 / 3);
    }
  });
  var mp = o, bp = Math.floor, wp = Math.log, Ep = Math.LOG2E;
  mp({
    target: "Math",
    stat: !0
  }, {
    clz32: function (t) {
      return (t >>>= 0) ? 31 - bp(wp(t + .5) * Ep) : 32;
    }
  });
  var _p, Sp = o, xp = Math.expm1, Ap = Math.exp, kp = _p = !xp || xp(10) > 22025.465794806718 || xp(10) < 22025.465794806718 || -2e-17 != xp(-2e-17) ? function (t) {
    return 0 == (t = +t) ? t : t > -1e-6 && t < 1e-6 ? t + t * t / 2 : Ap(t) - 1;
  } : xp, Op = Math.cosh, Tp = Math.abs, Mp = Math.E;
  Sp({
    target: "Math",
    stat: !0,
    forced: !Op || Op(710) === 1 / 0
  }, {
    cosh: function (t) {
      var e = kp(Tp(t) - 1) + 1;
      return (e + 1 / (e * Mp * Mp)) * (Mp / 2);
    }
  });
  var Ip = _p;
  o({
    target: "Math",
    stat: !0,
    forced: Ip != Math.expm1
  }, {
    expm1: Ip
  });
  var Rp = o, jp = pp, Lp = Math.abs, Fp = Math.pow, Pp = Fp(2, -52), Np = Fp(2, -23), Up = Fp(2, 127) * (2 - Np), $p = Fp(2, -126);
  Rp({
    target: "Math",
    stat: !0
  }, {
    fround: Math.fround || (function (t) {
      var e, r, n = Lp(t), o = jp(t);
      return n < $p ? o * (n / $p / Np + 1 / Pp - 1 / Pp) * $p * Np : (r = (e = (1 + Np / Pp) * n) - (e - n)) > Up || r != r ? o * (1 / 0) : o * r;
    })
  });
  var Cp = o, Dp = Math.hypot, Bp = Math.abs, qp = Math.sqrt;
  Cp({
    target: "Math",
    stat: !0,
    forced: !!Dp && Dp(1 / 0, NaN) !== 1 / 0
  }, {
    hypot: function (t, e) {
      for (var r, n, o = 0, i = 0, a = arguments.length, c = 0; i < a; ) c < (r = Bp(arguments[i++])) ? (o = o * (n = c / r) * n + 1, c = r) : o += r > 0 ? (n = r / c) * n : r;
      return c === 1 / 0 ? 1 / 0 : c * qp(o);
    }
  });
  var zp = o, Wp = a, Hp = Math.imul;
  zp({
    target: "Math",
    stat: !0,
    forced: Wp(function () {
      return -5 != Hp(4294967295, 5) || 2 != Hp.length;
    })
  }, {
    imul: function (t, e) {
      var r = 65535, n = +t, o = +e, i = r & n, a = r & o;
      return 0 | i * a + ((r & n >>> 16) * a + i * (r & o >>> 16) << 16 >>> 0);
    }
  });
  var Gp = o, Vp = Math.log, Yp = Math.LOG10E;
  (Gp({
    target: "Math",
    stat: !0
  }, {
    log10: function (t) {
      return Vp(t) * Yp;
    }
  }), o({
    target: "Math",
    stat: !0
  }, {
    log1p: Qh
  }));
  var Jp = o, Xp = Math.log, Kp = Math.LN2;
  (Jp({
    target: "Math",
    stat: !0
  }, {
    log2: function (t) {
      return Xp(t) / Kp;
    }
  }), o({
    target: "Math",
    stat: !0
  }, {
    sign: pp
  }));
  var Qp = o, Zp = a, ed = _p, rd = Math.abs, nd = Math.exp, od = Math.E;
  Qp({
    target: "Math",
    stat: !0,
    forced: Zp(function () {
      return -2e-17 != Math.sinh(-2e-17);
    })
  }, {
    sinh: function (t) {
      return rd(t = +t) < 1 ? (ed(t) - ed(-t)) / 2 : (nd(t - 1) - nd(-t - 1)) * (od / 2);
    }
  });
  var id = o, ad = _p, cd = Math.exp;
  (id({
    target: "Math",
    stat: !0
  }, {
    tanh: function (t) {
      var e = ad(t = +t), r = ad(-t);
      return e == 1 / 0 ? 1 : r == 1 / 0 ? -1 : (e - r) / (cd(t) + cd(-t));
    }
  }), qr(Math, "Math", !0));
  var ud = o, sd = Math.ceil, fd = Math.floor;
  ud({
    target: "Math",
    stat: !0
  }, {
    trunc: function (t) {
      return (t > 0 ? fd : sd)(t);
    }
  });
  var ld, hd, pd = i, dd = S, gd = ce, vd = w, yd = d, md = f, bd = Th, wd = h, Ed = a, _d = cr, Sd = Ce, xd = K, Ad = at, kd = l, Od = (hd = "\t\n\v\f\r                　\u2028\u2029\ufeff", RegExp("^[\t\n\v\f\r                　\u2028\u2029\ufeff][\t\n\v\f\r                　\u2028\u2029\ufeff]*")), Td = RegExp("[\t\n\v\f\r                　\u2028\u2029\ufeff][\t\n\v\f\r                　\u2028\u2029\ufeff]*$"), Md = function (t) {
    return function (e) {
      var r = String(kd(e));
      return (1 & t && (r = r.replace(Od, "")), 2 & t && (r = r.replace(Td, "")), r);
    };
  }, Id = (ld = {
    start: Md(1),
    end: Md(2),
    trim: Md(3)
  }).trim, Rd = "Number", jd = dd.Number, Ld = jd.prototype, Fd = md(_d(Ld)) == Rd, Pd = function (t) {
    var e, r, n, o, i, a, c, u, s = wd(t, !1);
    if ("string" == typeof s && s.length > 2) if (43 === (e = (s = Id(s)).charCodeAt(0)) || 45 === e) {
      if (88 === (r = s.charCodeAt(2)) || 120 === r) return NaN;
    } else if (48 === e) {
      switch (s.charCodeAt(1)) {
        case 66:
        case 98:
          (n = 2, o = 49);
          break;
        case 79:
        case 111:
          (n = 8, o = 55);
          break;
        default:
          return +s;
      }
      for ((a = (i = s.slice(2)).length, c = 0); c < a; c++) if ((u = i.charCodeAt(c)) < 48 || u > o) return NaN;
      return parseInt(i, n);
    }
    return +s;
  };
  if (gd(Rd, !jd(" 0o1") || !jd("0b1") || jd("+0x1"))) {
    for (var Nd, Ud = function (t) {
      var e = arguments.length < 1 ? 0 : t, r = this;
      return r instanceof Ud && (Fd ? Ed(function () {
        Ld.valueOf.call(r);
      }) : md(r) != Rd) ? bd(new jd(Pd(e)), r, Ud) : Pd(e);
    }, $d = pd ? Sd(jd) : ("MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range").split(","), Cd = 0; $d.length > Cd; Cd++) yd(jd, Nd = $d[Cd]) && !yd(Ud, Nd) && Ad(Ud, Nd, xd(jd, Nd));
    (Ud.prototype = Ld, Ld.constructor = Ud, vd(dd, Rd, Ud));
  }
  o({
    target: "Number",
    stat: !0
  }, {
    EPSILON: Math.pow(2, -52)
  });
  var Dd = o, Bd = S.isFinite;
  Dd({
    target: "Number",
    stat: !0
  }, {
    isFinite: Number.isFinite || (function (t) {
      return "number" == typeof t && Bd(t);
    })
  });
  var qd, zd = o, Wd = p, Hd = Math.floor;
  (zd({
    target: "Number",
    stat: !0
  }, {
    isInteger: qd = function (t) {
      return !Wd(t) && isFinite(t) && Hd(t) === t;
    }
  }), o({
    target: "Number",
    stat: !0
  }, {
    isNaN: function (t) {
      return t != t;
    }
  }));
  var Gd = o, Vd = qd, Yd = Math.abs;
  (Gd({
    target: "Number",
    stat: !0
  }, {
    isSafeInteger: function (t) {
      return Vd(t) && Yd(t) <= 9007199254740991;
    }
  }), o({
    target: "Number",
    stat: !0
  }, {
    MAX_SAFE_INTEGER: 9007199254740991
  }), o({
    target: "Number",
    stat: !0
  }, {
    MIN_SAFE_INTEGER: -9007199254740991
  }));
  var Jd, Xd = o, Kd = ld.trim, Qd = S.parseFloat, Zd = Jd = 1 / Qd("\t\n\v\f\r                　\u2028\u2029\ufeff-0") != -1 / 0 ? function (t) {
    var e = Kd(String(t)), r = Qd(e);
    return 0 === r && "-" == e.charAt(0) ? -0 : r;
  } : Qd;
  Xd({
    target: "Number",
    stat: !0,
    forced: Number.parseFloat != Zd
  }, {
    parseFloat: Zd
  });
  var tg, eg = o, rg = ld.trim, ng = S.parseInt, og = /^[+-]?0[Xx]/, ig = tg = 8 !== ng("\t\n\v\f\r                　\u2028\u2029\ufeff08") || 22 !== ng("\t\n\v\f\r                　\u2028\u2029\ufeff0x16") ? function (t, e) {
    var r = rg(String(t));
    return ng(r, e >>> 0 || (og.test(r) ? 16 : 10));
  } : ng;
  eg({
    target: "Number",
    stat: !0,
    forced: Number.parseInt != ig
  }, {
    parseInt: ig
  });
  var ag, cg = o, ug = ie, sg = f, fg = ag = function (t) {
    if ("number" != typeof t && "Number" != sg(t)) throw TypeError("Incorrect invocation");
    return +t;
  }, lg = a, hg = (1.).toFixed, pg = Math.floor, dg = function (t, e, r) {
    return 0 === e ? r : e % 2 == 1 ? dg(t, e - 1, r * t) : dg(t * t, e / 2, r);
  }, gg = function (t, e, r) {
    for (var n = -1, o = r; ++n < 6; ) (o += e * t[n], t[n] = o % 1e7, o = pg(o / 1e7));
  }, vg = function (t, e) {
    for (var r = 6, n = 0; --r >= 0; ) (n += t[r], t[r] = pg(n / e), n = n % e * 1e7);
  }, yg = function (t) {
    for (var e = 6, r = ""; --e >= 0; ) if ("" !== r || 0 === e || 0 !== t[e]) {
      var n = String(t[e]);
      r = "" === r ? n : r + ll.call("0", 7 - n.length) + n;
    }
    return r;
  };
  cg({
    target: "Number",
    proto: !0,
    forced: hg && ("0.000" !== (8e-5).toFixed(3) || "1" !== (.9).toFixed(0) || "1.25" !== (1.255).toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !lg(function () {
      hg.call({});
    })
  }, {
    toFixed: function (t) {
      var e, r, n, o, i = fg(this), a = ug(t), c = [0, 0, 0, 0, 0, 0], u = "", s = "0";
      if (a < 0 || a > 20) throw RangeError("Incorrect fraction digits");
      if (i != i) return "NaN";
      if (i <= -1e21 || i >= 1e21) return String(i);
      if ((i < 0 && (u = "-", i = -i), i > 1e-21)) if ((r = (e = (function (t) {
        for (var e = 0, r = t; r >= 4096; ) (e += 12, r /= 4096);
        for (; r >= 2; ) (e += 1, r /= 2);
        return e;
      })(i * dg(2, 69, 1)) - 69) < 0 ? i * dg(2, -e, 1) : i / dg(2, e, 1), r *= 4503599627370496, (e = 52 - e) > 0)) {
        for ((gg(c, 0, r), n = a); n >= 7; ) (gg(c, 1e7, 0), n -= 7);
        for ((gg(c, dg(10, n, 1), 0), n = e - 1); n >= 23; ) (vg(c, 1 << 23), n -= 23);
        (vg(c, 1 << n), gg(c, 1, 1), vg(c, 2), s = yg(c));
      } else (gg(c, 0, r), gg(c, 1 << -e, 0), s = yg(c) + ll.call("0", a));
      return s = a > 0 ? u + ((o = s.length) <= a ? "0." + ll.call("0", a - o) + s : s.slice(0, o - a) + "." + s.slice(o - a)) : u + s;
    }
  });
  var mg = a, bg = ag, wg = (1.).toPrecision;
  o({
    target: "Number",
    proto: !0,
    forced: mg(function () {
      return "1" !== wg.call(1, void 0);
    }) || !mg(function () {
      wg.call({});
    })
  }, {
    toPrecision: function (t) {
      return void 0 === t ? wg.call(bg(this)) : wg.call(bg(this), t);
    }
  });
  var Eg, _g = o, Sg = i, xg = a, Ag = sr, kg = g, Og = s, Tg = Object.assign, Mg = Object.defineProperty, Ig = Eg = !Tg || xg(function () {
    if (Sg && 1 !== Tg({
      b: 1
    }, Tg(Mg({}, "a", {
      enumerable: !0,
      get: function () {
        Mg(this, "b", {
          value: 3,
          enumerable: !1
        });
      }
    }), {
      b: 2
    })).b) return !0;
    var t = {}, e = {}, r = Symbol(), n = "abcdefghijklmnopqrst";
    return (t[r] = 7, n.split("").forEach(function (t) {
      e[t] = t;
    }), 7 != Tg({}, t)[r] || Ag(Tg({}, e)).join("") != n);
  }) ? function (t, e) {
    for (var r = kg(t), n = arguments.length, o = 1, i = De, a = M; n > o; ) for (var c, u = Og(arguments[o++]), s = i ? Ag(u).concat(i(u)) : Ag(u), f = s.length, l = 0; f > l; ) (c = s[l++], Sg && !a.call(u, c) || (r[c] = u[c]));
    return r;
  } : Tg;
  (_g({
    target: "Object",
    stat: !0,
    forced: Object.assign !== Ig
  }, {
    assign: Ig
  }), o({
    target: "Object",
    stat: !0,
    sham: !i
  }, {
    create: cr
  }));
  var Rg, jg = o, Lg = i, Fg = S;
  Rg = !a(function () {
    var t = Math.random();
    (__defineSetter__.call(null, t, function () {}), delete Fg[t]);
  });
  var Pg = g, Ng = Hr;
  Lg && jg({
    target: "Object",
    proto: !0,
    forced: Rg
  }, {
    __defineGetter__: function (t, e) {
      at(Pg(this), t, {
        get: Ng(e),
        enumerable: !0,
        configurable: !0
      });
    }
  });
  o({
    target: "Object",
    stat: !0,
    forced: !i,
    sham: !i
  }, {
    defineProperties: ur
  });
  o({
    target: "Object",
    stat: !0,
    forced: !i,
    sham: !i
  }, {
    defineProperty: at
  });
  var Ug = g, $g = Hr;
  i && o({
    target: "Object",
    proto: !0,
    forced: Rg
  }, {
    __defineSetter__: function (t, e) {
      at(Ug(this), t, {
        set: $g(e),
        enumerable: !0,
        configurable: !0
      });
    }
  });
  var Cg, Dg = o, Bg = i, qg = sr, zg = u, Wg = M, Hg = function (t) {
    return function (e) {
      for (var r, n = zg(e), o = qg(n), i = o.length, a = 0, c = []; i > a; ) (r = o[a++], Bg && !Wg.call(n, r) || c.push(t ? [r, n[r]] : n[r]));
      return c;
    };
  }, Gg = (Cg = {
    entries: Hg(!0),
    values: Hg(!1)
  }).entries;
  Dg({
    target: "Object",
    stat: !0
  }, {
    entries: function (t) {
      return Gg(t);
    }
  });
  var Vg = o, Yg = lh, Jg = a, Xg = p, Kg = vh.onFreeze, Qg = Object.freeze;
  Vg({
    target: "Object",
    stat: !0,
    forced: Jg(function () {
      Qg(1);
    }),
    sham: !Yg
  }, {
    freeze: function (t) {
      return Qg && Xg(t) ? Qg(Kg(t)) : t;
    }
  });
  var Zg = Oo, tv = gi;
  o({
    target: "Object",
    stat: !0
  }, {
    fromEntries: function (t) {
      var e = {};
      return (Zg(t, function (t, r) {
        tv(e, t, r);
      }, {
        AS_ENTRIES: !0
      }), e);
    }
  });
  var ev = o, rv = u, nv = K, ov = i, iv = a(function () {
    nv(1);
  });
  ev({
    target: "Object",
    stat: !0,
    forced: !ov || iv,
    sham: !ov
  }, {
    getOwnPropertyDescriptor: function (t, e) {
      return nv(rv(t), e);
    }
  });
  var av = te, cv = u, uv = gi;
  o({
    target: "Object",
    stat: !0,
    sham: !i
  }, {
    getOwnPropertyDescriptors: function (t) {
      for (var e, r, n = cv(t), o = K, i = av(n), a = {}, c = 0; i.length > c; ) void 0 !== (r = o(n, e = i[c++])) && uv(a, e, r);
      return a;
    }
  });
  var sv = Zr;
  o({
    target: "Object",
    stat: !0,
    forced: a(function () {
      return !Object.getOwnPropertyNames(1);
    })
  }, {
    getOwnPropertyNames: sv
  });
  var fv = g, lv = So, hv = xo;
  o({
    target: "Object",
    stat: !0,
    forced: a(function () {
      lv(1);
    }),
    sham: !hv
  }, {
    getPrototypeOf: function (t) {
      return lv(fv(t));
    }
  });
  var pv;
  o({
    target: "Object",
    stat: !0
  }, {
    is: pv = Object.is || (function (t, e) {
      return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e;
    })
  });
  var dv = o, gv = a, vv = p, yv = Object.isExtensible;
  dv({
    target: "Object",
    stat: !0,
    forced: gv(function () {
      yv(1);
    })
  }, {
    isExtensible: function (t) {
      return !!vv(t) && (!yv || yv(t));
    }
  });
  var mv = o, bv = a, wv = p, Ev = Object.isFrozen;
  mv({
    target: "Object",
    stat: !0,
    forced: bv(function () {
      Ev(1);
    })
  }, {
    isFrozen: function (t) {
      return !wv(t) || !!Ev && Ev(t);
    }
  });
  var _v = o, Sv = a, xv = p, Av = Object.isSealed;
  _v({
    target: "Object",
    stat: !0,
    forced: Sv(function () {
      Av(1);
    })
  }, {
    isSealed: function (t) {
      return !xv(t) || !!Av && Av(t);
    }
  });
  var kv = g, Ov = sr;
  o({
    target: "Object",
    stat: !0,
    forced: a(function () {
      Ov(1);
    })
  }, {
    keys: function (t) {
      return Ov(kv(t));
    }
  });
  var Tv = g, Mv = h, Iv = So, Rv = K;
  i && o({
    target: "Object",
    proto: !0,
    forced: Rg
  }, {
    __lookupGetter__: function (t) {
      var e, r = Tv(this), n = Mv(t, !0);
      do {
        if (e = Rv(r, n)) return e.get;
      } while (r = Iv(r));
    }
  });
  var jv = g, Lv = h, Fv = So, Pv = K;
  i && o({
    target: "Object",
    proto: !0,
    forced: Rg
  }, {
    __lookupSetter__: function (t) {
      var e, r = jv(this), n = Lv(t, !0);
      do {
        if (e = Pv(r, n)) return e.set;
      } while (r = Fv(r));
    }
  });
  var Nv = o, Uv = p, $v = vh.onFreeze, Cv = lh, Dv = a, Bv = Object.preventExtensions;
  Nv({
    target: "Object",
    stat: !0,
    forced: Dv(function () {
      Bv(1);
    }),
    sham: !Cv
  }, {
    preventExtensions: function (t) {
      return Bv && Uv(t) ? Bv($v(t)) : t;
    }
  });
  var qv = o, zv = p, Wv = vh.onFreeze, Hv = lh, Gv = a, Vv = Object.seal;
  (qv({
    target: "Object",
    stat: !0,
    forced: Gv(function () {
      Vv(1);
    }),
    sham: !Hv
  }, {
    seal: function (t) {
      return Vv && zv(t) ? Vv(Wv(t)) : t;
    }
  }), o({
    target: "Object",
    stat: !0
  }, {
    setPrototypeOf: Ao
  }));
  var Yv = Vo, Jv = Yo ? ({}).toString : function () {
    return "[object " + Yv(this) + "]";
  };
  Yo || w(Object.prototype, "toString", Jv, {
    unsafe: !0
  });
  var Xv = Cg.values;
  o({
    target: "Object",
    stat: !0
  }, {
    values: function (t) {
      return Xv(t);
    }
  });
  o({
    global: !0,
    forced: parseFloat != Jd
  }, {
    parseFloat: Jd
  });
  o({
    global: !0,
    forced: parseInt != tg
  }, {
    parseInt: tg
  });
  var Kv, Qv, Zv, ty, ey, ry, ny = o, oy = S, iy = ee, ay = Kv = S.Promise, cy = w, uy = ps, sy = Ao, fy = qr, ly = Ju, hy = p, py = Hr, dy = ds, gy = _, vy = Oo, yy = Fa, my = Kf, by = a, wy = Wr, Ey = y, _y = Zv = (/(?:iphone|ipod|ipad).*applewebkit/i).test(fe), Sy = su, xy = S.location, Ay = S.setImmediate, ky = S.clearImmediate, Oy = S.process, Ty = S.MessageChannel, My = S.Dispatch, Iy = 0, Ry = {}, jy = "onreadystatechange", Ly = function (t) {
    if (Ry.hasOwnProperty(t)) {
      var e = Ry[t];
      (delete Ry[t], e());
    }
  }, Fy = function (t) {
    return function () {
      Ly(t);
    };
  }, Py = function (t) {
    Ly(t.data);
  }, Ny = function (t) {
    S.postMessage(t + "", xy.protocol + "//" + xy.host);
  };
  Ay && ky || (Ay = function (t) {
    for (var e = [], r = 1; arguments.length > r; ) e.push(arguments[r++]);
    return (Ry[++Iy] = function () {
      ("function" == typeof t ? t : Function(t)).apply(void 0, e);
    }, ty(Iy), Iy);
  }, ky = function (t) {
    delete Ry[t];
  }, Sy ? ty = function (t) {
    Oy.nextTick(Fy(t));
  } : My && My.now ? ty = function (t) {
    My.now(Fy(t));
  } : Ty && !_y ? (ry = (ey = new Ty()).port2, ey.port1.onmessage = Py, ty = wy(ry.postMessage, ry, 1)) : S.addEventListener && "function" == typeof postMessage && !S.importScripts && xy && "file:" !== xy.protocol && !by(Ny) ? (ty = Ny, S.addEventListener("message", Py, !1)) : ty = (jy in Ey("script")) ? function (t) {
    Lr.appendChild(Ey("script")).onreadystatechange = function () {
      (Lr.removeChild(this), Ly(t));
    };
  } : function (t) {
    setTimeout(Fy(t), 0);
  });
  var Uy, $y, Cy, Dy, By, qy, zy, Wy, Hy, Gy = (Qv = {
    set: Ay,
    clear: ky
  }).set, Vy = S, Yy = K, Jy = Qv.set, Xy = Zv, Ky = (/web0s(?!.*chrome)/i).test(fe), Qy = su, Zy = Vy.MutationObserver || Vy.WebKitMutationObserver, tm = Vy.document, em = Vy.process, rm = Vy.Promise, nm = Yy(Vy, "queueMicrotask"), om = nm && nm.value;
  om || ($y = function () {
    var t, e;
    for (Qy && (t = em.domain) && t.exit(); Cy; ) {
      (e = Cy.fn, Cy = Cy.next);
      try {
        e();
      } catch (t) {
        throw (Cy ? By() : Dy = void 0, t);
      }
    }
    (Dy = void 0, t && t.enter());
  }, Xy || Qy || Ky || !Zy || !tm ? rm && rm.resolve ? ((Wy = rm.resolve(void 0)).constructor = rm, Hy = Wy.then, By = function () {
    Hy.call(Wy, $y);
  }) : By = Qy ? function () {
    em.nextTick($y);
  } : function () {
    Jy.call(Vy, $y);
  } : (qy = !0, zy = tm.createTextNode(""), new Zy($y).observe(zy, {
    characterData: !0
  }), By = function () {
    zy.data = qy = !qy;
  }));
  var im, am, cm, um, sm, fm, lm = Uy = om || (function (t) {
    var e = {
      fn: t,
      next: void 0
    };
    (Dy && (Dy.next = e), Cy || (Cy = e, By()), Dy = e);
  }), hm = b, pm = p, dm = Hr, gm = function (t) {
    var e, r;
    (this.promise = new t(function (t, n) {
      if (void 0 !== e || void 0 !== r) throw TypeError("Bad Promise constructor");
      (e = t, r = n);
    }), this.resolve = dm(e), this.reject = dm(r));
  }, vm = function (t) {
    return new gm(t);
  }, ym = im = function (t, e) {
    if ((hm(t), pm(e) && e.constructor === t)) return e;
    var r = vm(t);
    return ((0, r.resolve)(e), r.promise);
  }, mm = function (t, e) {
    var r = S.console;
    r && r.error && (1 === arguments.length ? r.error(t) : r.error(t, e));
  }, bm = am = function (t) {
    try {
      return {
        error: !1,
        value: t()
      };
    } catch (t) {
      return {
        error: !0,
        value: t
      };
    }
  }, wm = ce, Em = "object" == typeof window, _m = su, Sm = se, xm = Dr("species"), Am = "Promise", km = bt.get, Om = bt.set, Tm = bt.getterFor(Am), Mm = ay && ay.prototype, Im = ay, Rm = Mm, jm = oy.TypeError, Lm = oy.document, Fm = oy.process, Pm = vm, Nm = Pm, Um = !!(Lm && Lm.createEvent && oy.dispatchEvent), $m = "function" == typeof PromiseRejectionEvent, Cm = "unhandledrejection", Dm = !1, Bm = wm(Am, function () {
    var t = gy(Im) !== String(Im);
    if (!t && 66 === Sm) return !0;
    if (Sm >= 51 && (/native code/).test(Im)) return !1;
    var e = new Im(function (t) {
      t(1);
    }), r = function (t) {
      t(function () {}, function () {});
    };
    return ((e.constructor = {})[xm] = r, !(Dm = e.then(function () {}) instanceof r) || !t && Em && !$m);
  }), qm = Bm || !yy(function (t) {
    Im.all(t).catch(function () {});
  }), zm = function (t) {
    var e;
    return !(!hy(t) || "function" != typeof (e = t.then)) && e;
  }, Wm = function (t, e) {
    if (!t.notified) {
      t.notified = !0;
      var r = t.reactions;
      lm(function () {
        for (var n = t.value, o = 1 == t.state, i = 0; r.length > i; ) {
          var a, c, u, s = r[i++], f = o ? s.ok : s.fail, l = s.resolve, h = s.reject, p = s.domain;
          try {
            f ? (o || (2 === t.rejection && Ym(t), t.rejection = 1), !0 === f ? a = n : (p && p.enter(), a = f(n), p && (p.exit(), u = !0)), a === s.promise ? h(jm("Promise-chain cycle")) : (c = zm(a)) ? c.call(a, l, h) : l(a)) : h(n);
          } catch (t) {
            (p && !u && p.exit(), h(t));
          }
        }
        (t.reactions = [], t.notified = !1, e && !t.rejection && Gm(t));
      });
    }
  }, Hm = function (t, e, r) {
    var n, o;
    (Um ? ((n = Lm.createEvent("Event")).promise = e, n.reason = r, n.initEvent(t, !1, !0), oy.dispatchEvent(n)) : n = {
      promise: e,
      reason: r
    }, !$m && (o = oy["on" + t]) ? o(n) : t === Cm && mm("Unhandled promise rejection", r));
  }, Gm = function (t) {
    Gy.call(oy, function () {
      var e, r = t.facade, n = t.value;
      if (Vm(t) && (e = bm(function () {
        _m ? Fm.emit("unhandledRejection", n, r) : Hm(Cm, r, n);
      }), t.rejection = _m || Vm(t) ? 2 : 1, e.error)) throw e.value;
    });
  }, Vm = function (t) {
    return 1 !== t.rejection && !t.parent;
  }, Ym = function (t) {
    Gy.call(oy, function () {
      var e = t.facade;
      _m ? Fm.emit("rejectionHandled", e) : Hm("rejectionhandled", e, t.value);
    });
  }, Jm = function (t, e, r) {
    return function (n) {
      t(e, n, r);
    };
  }, Xm = function (t, e, r) {
    t.done || (t.done = !0, r && (t = r), t.value = e, t.state = 2, Wm(t, !0));
  }, Km = function (t, e, r) {
    if (!t.done) {
      (t.done = !0, r && (t = r));
      try {
        if (t.facade === e) throw jm("Promise can't be resolved itself");
        var n = zm(e);
        n ? lm(function () {
          var r = {
            done: !1
          };
          try {
            n.call(e, Jm(Km, r, t), Jm(Xm, r, t));
          } catch (e) {
            Xm(r, e, t);
          }
        }) : (t.value = e, t.state = 1, Wm(t, !1));
      } catch (e) {
        Xm({
          done: !1
        }, e, t);
      }
    }
  };
  if (Bm && (Rm = (Im = function (t) {
    (dy(this, Im, Am), py(t), cm.call(this));
    var e = km(this);
    try {
      t(Jm(Km, e), Jm(Xm, e));
    } catch (t) {
      Xm(e, t);
    }
  }).prototype, (cm = function (t) {
    Om(this, {
      type: Am,
      done: !1,
      notified: !1,
      parent: !1,
      reactions: [],
      rejection: !1,
      state: 0,
      value: void 0
    });
  }).prototype = uy(Rm, {
    then: function (t, e) {
      var r = Tm(this), n = Pm(my(this, Im));
      return (n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = _m ? Fm.domain : void 0, r.parent = !0, r.reactions.push(n), 0 != r.state && Wm(r, !1), n.promise);
    },
    catch: function (t) {
      return this.then(void 0, t);
    }
  }), um = function () {
    var t = new cm(), e = km(t);
    (this.promise = t, this.resolve = Jm(Km, e), this.reject = Jm(Xm, e));
  }, vm = Pm = function (t) {
    return t === Im || t === sm ? new um(t) : Nm(t);
  }, "function" == typeof ay && Mm !== Object.prototype)) {
    (fm = Mm.then, Dm || (cy(Mm, "then", function (t, e) {
      var r = this;
      return new Im(function (t, e) {
        fm.call(r, t, e);
      }).then(t, e);
    }, {
      unsafe: !0
    }), cy(Mm, "catch", Rm.catch, {
      unsafe: !0
    })));
    try {
      delete Mm.constructor;
    } catch (t) {}
    sy && sy(Mm, Rm);
  }
  (ny({
    global: !0,
    wrap: !0,
    forced: Bm
  }, {
    Promise: Im
  }), fy(Im, Am, !1, !0), ly(Am), sm = iy(Am), ny({
    target: Am,
    stat: !0,
    forced: Bm
  }, {
    reject: function (t) {
      var e = Pm(this);
      return (e.reject.call(void 0, t), e.promise);
    }
  }), ny({
    target: Am,
    stat: !0,
    forced: Bm
  }, {
    resolve: function (t) {
      return ym(this, t);
    }
  }), ny({
    target: Am,
    stat: !0,
    forced: qm
  }, {
    all: function (t) {
      var e = this, r = Pm(e), n = r.resolve, o = r.reject, i = bm(function () {
        var r = py(e.resolve), i = [], a = 0, c = 1;
        (vy(t, function (t) {
          var u = a++, s = !1;
          (i.push(void 0), c++, r.call(e, t).then(function (t) {
            s || (s = !0, i[u] = t, --c || n(i));
          }, o));
        }), --c || n(i));
      });
      return (i.error && o(i.value), r.promise);
    },
    race: function (t) {
      var e = this, r = Pm(e), n = r.reject, o = bm(function () {
        var o = py(e.resolve);
        vy(t, function (t) {
          o.call(e, t).then(r.resolve, n);
        });
      });
      return (o.error && n(o.value), r.promise);
    }
  }));
  var Qm = Hr, Zm = am, tb = Oo;
  o({
    target: "Promise",
    stat: !0
  }, {
    allSettled: function (t) {
      var e = this, r = vm(e), n = r.resolve, o = r.reject, i = Zm(function () {
        var r = Qm(e.resolve), o = [], i = 0, a = 1;
        (tb(t, function (t) {
          var c = i++, u = !1;
          (o.push(void 0), a++, r.call(e, t).then(function (t) {
            u || (u = !0, o[c] = {
              status: "fulfilled",
              value: t
            }, --a || n(o));
          }, function (t) {
            u || (u = !0, o[c] = {
              status: "rejected",
              reason: t
            }, --a || n(o));
          }));
        }), --a || n(o));
      });
      return (i.error && o(i.value), r.promise);
    }
  });
  var eb = Hr, rb = ee, nb = am, ob = Oo, ib = "No one promise resolved";
  o({
    target: "Promise",
    stat: !0
  }, {
    any: function (t) {
      var e = this, r = vm(e), n = r.resolve, o = r.reject, i = nb(function () {
        var r = eb(e.resolve), i = [], a = 0, c = 1, u = !1;
        (ob(t, function (t) {
          var s = a++, f = !1;
          (i.push(void 0), c++, r.call(e, t).then(function (t) {
            f || u || (u = !0, n(t));
          }, function (t) {
            f || u || (f = !0, i[s] = t, --c || o(new (rb("AggregateError"))(i, ib)));
          }));
        }), --c || o(new (rb("AggregateError"))(i, ib)));
      });
      return (i.error && o(i.value), r.promise);
    }
  });
  var ab = Kv, cb = ee, ub = Kf, sb = im, fb = w;
  if ((o({
    target: "Promise",
    proto: !0,
    real: !0,
    forced: !!ab && a(function () {
      ab.prototype.finally.call({
        then: function () {}
      }, function () {});
    })
  }, {
    finally: function (t) {
      var e = ub(this, cb("Promise")), r = "function" == typeof t;
      return this.then(r ? function (r) {
        return sb(e, t()).then(function () {
          return r;
        });
      } : t, r ? function (r) {
        return sb(e, t()).then(function () {
          throw r;
        });
      } : t);
    }
  }), "function" == typeof ab)) {
    var lb = cb("Promise").prototype.finally;
    ab.prototype.finally !== lb && fb(ab.prototype, "finally", lb, {
      unsafe: !0
    });
  }
  var hb = o, pb = Hr, db = b, gb = a, vb = ee("Reflect", "apply"), yb = Function.apply;
  hb({
    target: "Reflect",
    stat: !0,
    forced: !gb(function () {
      vb(function () {});
    })
  }, {
    apply: function (t, e, r) {
      return (pb(t), db(r), vb ? vb(t, e, r) : yb.call(t, e, r));
    }
  });
  var mb = o, bb = Hr, wb = b, Eb = p, _b = cr, Sb = a, xb = ee("Reflect", "construct"), Ab = Sb(function () {
    function t() {}
    return !(xb(function () {}, [], t) instanceof t);
  }), kb = !Sb(function () {
    xb(function () {});
  }), Ob = Ab || kb;
  mb({
    target: "Reflect",
    stat: !0,
    forced: Ob,
    sham: Ob
  }, {
    construct: function (t, e) {
      (bb(t), wb(e));
      var r = arguments.length < 3 ? t : bb(arguments[2]);
      if (kb && !Ab) return xb(t, e, r);
      if (t == r) {
        switch (e.length) {
          case 0:
            return new t();
          case 1:
            return new t(e[0]);
          case 2:
            return new t(e[0], e[1]);
          case 3:
            return new t(e[0], e[1], e[2]);
          case 4:
            return new t(e[0], e[1], e[2], e[3]);
        }
        var n = [null];
        return (n.push.apply(n, e), new (Dl.apply(t, n))());
      }
      var o = r.prototype, i = _b(Eb(o) ? o : Object.prototype), a = Function.apply.call(t, i, e);
      return Eb(a) ? a : i;
    }
  });
  var Tb = i, Mb = b, Ib = h;
  o({
    target: "Reflect",
    stat: !0,
    forced: a(function () {
      Reflect.defineProperty(at({}, 1, {
        value: 1
      }), 1, {
        value: 2
      });
    }),
    sham: !Tb
  }, {
    defineProperty: function (t, e, r) {
      Mb(t);
      var n = Ib(e, !0);
      Mb(r);
      try {
        return (at(t, n, r), !0);
      } catch (t) {
        return !1;
      }
    }
  });
  var Rb = b, jb = K;
  o({
    target: "Reflect",
    stat: !0
  }, {
    deleteProperty: function (t, e) {
      var r = jb(Rb(t), e);
      return !(r && !r.configurable) && delete t[e];
    }
  });
  var Lb = p, Fb = b, Pb = d, Nb = So;
  o({
    target: "Reflect",
    stat: !0
  }, {
    get: function t(e, r) {
      var n, o, i = arguments.length < 3 ? e : arguments[2];
      return Fb(e) === i ? e[r] : (n = K(e, r)) ? Pb(n, "value") ? n.value : void 0 === n.get ? void 0 : n.get.call(i) : Lb(o = Nb(e)) ? t(o, r, i) : void 0;
    }
  });
  var Ub = b;
  o({
    target: "Reflect",
    stat: !0,
    sham: !i
  }, {
    getOwnPropertyDescriptor: function (t, e) {
      return K(Ub(t), e);
    }
  });
  var $b = b, Cb = So;
  (o({
    target: "Reflect",
    stat: !0,
    sham: !xo
  }, {
    getPrototypeOf: function (t) {
      return Cb($b(t));
    }
  }), o({
    target: "Reflect",
    stat: !0
  }, {
    has: function (t, e) {
      return (e in t);
    }
  }));
  var Db = o, Bb = b, qb = Object.isExtensible;
  (Db({
    target: "Reflect",
    stat: !0
  }, {
    isExtensible: function (t) {
      return (Bb(t), !qb || qb(t));
    }
  }), o({
    target: "Reflect",
    stat: !0
  }, {
    ownKeys: te
  }));
  var zb = ee, Wb = b;
  o({
    target: "Reflect",
    stat: !0,
    sham: !lh
  }, {
    preventExtensions: function (t) {
      Wb(t);
      try {
        var e = zb("Object", "preventExtensions");
        return (e && e(t), !0);
      } catch (t) {
        return !1;
      }
    }
  });
  var Hb = b, Gb = p, Vb = d, Yb = So, Jb = c;
  o({
    target: "Reflect",
    stat: !0,
    forced: a(function () {
      var t = function () {}, e = at(new t(), "a", {
        configurable: !0
      });
      return !1 !== Reflect.set(t.prototype, "a", 1, e);
    })
  }, {
    set: function t(e, r, n) {
      var o, i, a = arguments.length < 4 ? e : arguments[3], c = K(Hb(e), r);
      if (!c) {
        if (Gb(i = Yb(e))) return t(i, r, n, a);
        c = Jb(0);
      }
      if (Vb(c, "value")) {
        if (!1 === c.writable || !Gb(a)) return !1;
        if (o = K(a, r)) {
          if (o.get || o.set || !1 === o.writable) return !1;
          (o.value = n, at(a, r, o));
        } else at(a, r, Jb(0, n));
        return !0;
      }
      return void 0 !== c.set && (c.set.call(a, n), !0);
    }
  });
  var Xb = b, Kb = ko, Qb = Ao;
  Qb && o({
    target: "Reflect",
    stat: !0
  }, {
    setPrototypeOf: function (t, e) {
      (Xb(t), Kb(e));
      try {
        return (Qb(t, e), !0);
      } catch (t) {
        return !1;
      }
    }
  });
  var Zb = qr;
  (o({
    global: !0
  }, {
    Reflect: {}
  }), Zb(S.Reflect, "Reflect", !0));
  var tw, ew, rw = i, nw = S, ow = ce, iw = Th, aw = at, cw = Ce, uw = p, sw = f, fw = Dr("match"), lw = tw = function (t) {
    var e;
    return uw(t) && (void 0 !== (e = t[fw]) ? !!e : "RegExp" == sw(t));
  }, hw = b;
  ew = function () {
    var t = hw(this), e = "";
    return (t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.sticky && (e += "y"), e);
  };
  var pw = a;
  function dw(t, e) {
    return RegExp(t, e);
  }
  var gw = pw(function () {
    var t = dw("a", "y");
    return (t.lastIndex = 2, null != t.exec("abcd"));
  }), vw = pw(function () {
    var t = dw("^r", "gy");
    return (t.lastIndex = 2, null != t.exec("str"));
  }), yw = w, mw = a, bw = bt.enforce, ww = Ju, Ew = Dr("match"), _w = nw.RegExp, Sw = _w.prototype, xw = /a/g, Aw = /a/g, kw = new _w(xw) !== xw, Ow = gw;
  if (rw && ow("RegExp", !kw || Ow || mw(function () {
    return (Aw[Ew] = !1, _w(xw) != xw || _w(Aw) == Aw || "/a/i" != _w(xw, "i"));
  }))) {
    for (var Tw = function (t, e) {
      var r, n = this instanceof Tw, o = lw(t), i = void 0 === e;
      if (!n && o && t.constructor === Tw && i) return t;
      (kw ? o && !i && (t = t.source) : t instanceof Tw && (i && (e = ew.call(t)), t = t.source), Ow && (r = !!e && e.indexOf("y") > -1) && (e = e.replace(/y/g, "")));
      var a = iw(kw ? new _w(t, e) : _w(t, e), n ? this : Sw, Tw);
      Ow && r && (bw(a).sticky = !0);
      return a;
    }, Mw = function (t) {
      (t in Tw) || aw(Tw, t, {
        configurable: !0,
        get: function () {
          return _w[t];
        },
        set: function (e) {
          _w[t] = e;
        }
      });
    }, Iw = cw(_w), Rw = 0; Iw.length > Rw; ) Mw(Iw[Rw++]);
    (Sw.constructor = Tw, Tw.prototype = Sw, yw(nw, "RegExp", Tw));
  }
  ww("RegExp");
  var jw, Lw, Fw = o, Pw = {}, Nw = _t, Uw = RegExp.prototype.exec, $w = Nw("native-string-replace", String.prototype.replace), Cw = Uw, Dw = (jw = /a/, Lw = /b*/g, Uw.call(jw, "a"), Uw.call(Lw, "a"), 0 !== jw.lastIndex || 0 !== Lw.lastIndex), Bw = gw || vw, qw = void 0 !== (/()??/).exec("")[1];
  (Dw || qw || Bw) && (Cw = function (t) {
    var e, r, n, o, i = this, a = Bw && i.sticky, c = ew.call(i), u = i.source, s = 0, f = t;
    return (a && (-1 === (c = c.replace("y", "")).indexOf("g") && (c += "g"), f = String(t).slice(i.lastIndex), i.lastIndex > 0 && (!i.multiline || i.multiline && "\n" !== t[i.lastIndex - 1]) && (u = "(?: " + u + ")", f = " " + f, s++), r = new RegExp("^(?:" + u + ")", c)), qw && (r = new RegExp("^" + u + "$(?!\\s)", c)), Dw && (e = i.lastIndex), n = Uw.call(a ? r : i, f), a ? n ? (n.input = n.input.slice(s), n[0] = n[0].slice(s), n.index = i.lastIndex, i.lastIndex += n[0].length) : i.lastIndex = 0 : Dw && n && (i.lastIndex = i.global ? n.index + n[0].length : e), qw && n && n.length > 1 && $w.call(n[0], r, function () {
      for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (n[o] = void 0);
    }), n);
  });
  Pw = Cw;
  Fw({
    target: "RegExp",
    proto: !0,
    forced: (/./).exec !== Pw
  }, {
    exec: Pw
  });
  var zw = ew;
  i && ("g" != (/./g).flags || gw) && at(RegExp.prototype, "flags", {
    configurable: !0,
    get: zw
  });
  var Ww = i, Hw = gw, Gw = at, Vw = bt.get, Yw = RegExp.prototype;
  Ww && Hw && Gw(RegExp.prototype, "sticky", {
    configurable: !0,
    get: function () {
      if (this !== Yw) {
        if (this instanceof RegExp) return !!Vw(this).sticky;
        throw TypeError("Incompatible receiver, RegExp required");
      }
    }
  });
  var Jw, Xw, Kw = o, Qw = p, Zw = (Jw = !1, (Xw = /[ac]/).exec = function () {
    return (Jw = !0, (/./).exec.apply(this, arguments));
  }, !0 === Xw.test("abc") && Jw), tE = (/./).test;
  Kw({
    target: "RegExp",
    proto: !0,
    forced: !Zw
  }, {
    test: function (t) {
      if ("function" != typeof this.exec) return tE.call(this, t);
      var e = this.exec(t);
      if (null !== e && !Qw(e)) throw new Error("RegExp exec method returned something other than an Object or null");
      return !!e;
    }
  });
  var eE = w, rE = b, nE = a, oE = "toString", iE = RegExp.prototype, aE = iE.toString, cE = nE(function () {
    return "/a/b" != aE.call({
      source: "a",
      flags: "b"
    });
  }), uE = aE.name != oE;
  ((cE || uE) && eE(RegExp.prototype, oE, function () {
    var t = rE(this), e = String(t.source), r = t.flags;
    return "/" + e + "/" + String(void 0 === r && t instanceof RegExp && !(("flags" in iE)) ? ew.call(t) : r);
  }, {
    unsafe: !0
  }), $9932df88623c28e717050f04e65bd91b$exports = fh("Set", function (t) {
    return function () {
      return t(this, arguments.length ? arguments[0] : void 0);
    };
  }, Mh));
  var sE, fE = o, lE = ie, hE = l, pE = function (t) {
    return function (e, r) {
      var n, o, i = String(hE(e)), a = lE(r), c = i.length;
      return a < 0 || a >= c ? t ? "" : void 0 : (n = i.charCodeAt(a)) < 55296 || n > 56319 || a + 1 === c || (o = i.charCodeAt(a + 1)) < 56320 || o > 57343 ? t ? i.charAt(a) : n : t ? i.slice(a, a + 2) : o - 56320 + (n - 55296 << 10) + 65536;
    };
  }, dE = (sE = {
    codeAt: pE(!1),
    charAt: pE(!0)
  }).codeAt;
  fE({
    target: "String",
    proto: !0
  }, {
    codePointAt: function (t) {
      return dE(this, t);
    }
  });
  var gE, vE, yE, mE = o, bE = K, wE = oe, EE = tw, _E = gE = function (t) {
    if (EE(t)) throw TypeError("The method doesn't accept regular expressions");
    return t;
  }, SE = l, xE = Dr("match"), AE = vE = function (t) {
    var e = /./;
    try {
      ("/./")[t](e);
    } catch (r) {
      try {
        return (e[xE] = !1, ("/./")[t](e));
      } catch (t) {}
    }
    return !1;
  }, kE = ("").endsWith, OE = Math.min, TE = AE("endsWith");
  mE({
    target: "String",
    proto: !0,
    forced: !!(TE || (yE = bE(String.prototype, "endsWith"), !yE || yE.writable)) && !TE
  }, {
    endsWith: function (t) {
      var e = String(SE(this));
      _E(t);
      var r = arguments.length > 1 ? arguments[1] : void 0, n = wE(e.length), o = void 0 === r ? n : OE(wE(r), n), i = String(t);
      return kE ? kE.call(e, i, o) : e.slice(o - i.length, o) === i;
    }
  });
  var ME = o, IE = ae, RE = String.fromCharCode, jE = String.fromCodePoint;
  ME({
    target: "String",
    stat: !0,
    forced: !!jE && 1 != jE.length
  }, {
    fromCodePoint: function (t) {
      for (var e, r = [], n = arguments.length, o = 0; n > o; ) {
        if ((e = +arguments[o++], IE(e, 1114111) !== e)) throw RangeError(e + " is not a valid code point");
        r.push(e < 65536 ? RE(e) : RE(55296 + ((e -= 65536) >> 10), e % 1024 + 56320));
      }
      return r.join("");
    }
  });
  var LE = gE, FE = l;
  o({
    target: "String",
    proto: !0,
    forced: !vE("includes")
  }, {
    includes: function (t) {
      return !!~String(FE(this)).indexOf(LE(t), arguments.length > 1 ? arguments[1] : void 0);
    }
  });
  var PE = sE.charAt, NE = ic, UE = "String Iterator", $E = bt.set, CE = bt.getterFor(UE);
  NE(String, "String", function (t) {
    $E(this, {
      type: UE,
      string: String(t),
      index: 0
    });
  }, function () {
    var t, e = CE(this), r = e.string, n = e.index;
    return n >= r.length ? {
      value: void 0,
      done: !0
    } : (t = PE(r, n), e.index += t.length, {
      value: t,
      done: !1
    });
  });
  var DE, BE, qE, zE = w, WE = Pw, HE = a, GE = Dr, VE = m, YE = GE("species"), JE = RegExp.prototype, XE = !HE(function () {
    var t = /./;
    return (t.exec = function () {
      var t = [];
      return (t.groups = {
        a: "7"
      }, t);
    }, "7" !== ("").replace(t, "$<a>"));
  }), KE = "$0" === ("a").replace(/./, "$0"), QE = GE("replace"), ZE = !!(/./)[QE] && "" === (/./)[QE]("a", "$0"), t_ = !HE(function () {
    var t = /(?:)/, e = t.exec;
    t.exec = function () {
      return e.apply(this, arguments);
    };
    var r = ("ab").split(t);
    return 2 !== r.length || "a" !== r[0] || "b" !== r[1];
  }), e_ = b, r_ = oe, n_ = l, o_ = sE.charAt, i_ = BE = function (t, e, r) {
    return e + (r ? o_(t, e).length : 1);
  }, a_ = f, c_ = qE = function (t, e) {
    var r = t.exec;
    if ("function" == typeof r) {
      var n = r.call(t, e);
      if ("object" != typeof n) throw TypeError("RegExp exec method returned something other than an Object or null");
      return n;
    }
    if ("RegExp" !== a_(t)) throw TypeError("RegExp#exec called on incompatible receiver");
    return Pw.call(t, e);
  };
  (DE = function (t, e, r, n) {
    var o = GE(t), i = !HE(function () {
      var e = {};
      return (e[o] = function () {
        return 7;
      }, 7 != ("")[t](e));
    }), a = i && !HE(function () {
      var e = !1, r = /a/;
      return ("split" === t && ((r = {}).constructor = {}, r.constructor[YE] = function () {
        return r;
      }, r.flags = "", r[o] = (/./)[o]), r.exec = function () {
        return (e = !0, null);
      }, r[o](""), !e);
    });
    if (!i || !a || "replace" === t && (!XE || !KE || ZE) || "split" === t && !t_) {
      var c = (/./)[o], u = r(o, ("")[t], function (t, e, r, n, o) {
        var a = e.exec;
        return a === WE || a === JE.exec ? i && !o ? {
          done: !0,
          value: c.call(e, r, n)
        } : {
          done: !0,
          value: t.call(r, e, n)
        } : {
          done: !1
        };
      }, {
        REPLACE_KEEPS_$0: KE,
        REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: ZE
      }), s = u[0], f = u[1];
      (zE(String.prototype, t, s), zE(JE, o, 2 == e ? function (t, e) {
        return f.call(t, this, e);
      } : function (t) {
        return f.call(t, this);
      }));
    }
    n && VE(JE[o], "sham", !0);
  })("match", 1, function (t, e, r) {
    return [function (e) {
      var r = n_(this), n = null == e ? void 0 : e[t];
      return void 0 !== n ? n.call(e, r) : new RegExp(e)[t](String(r));
    }, function (t) {
      var n = r(e, t, this);
      if (n.done) return n.value;
      var o = e_(t), i = String(this);
      if (!o.global) return c_(o, i);
      var a = o.unicode;
      o.lastIndex = 0;
      for (var c, u = [], s = 0; null !== (c = c_(o, i)); ) {
        var f = String(c[0]);
        (u[s] = f, "" === f && (o.lastIndex = i_(i, r_(o.lastIndex), a)), s++);
      }
      return 0 === s ? null : u;
    }];
  });
  var u_ = o, s_ = ac, f_ = l, l_ = oe, h_ = Hr, p_ = b, d_ = tw, g_ = m, v_ = a, y_ = Kf, m_ = BE, b_ = Dr("matchAll"), w_ = "RegExp String", E_ = "RegExp String Iterator", __ = bt.set, S_ = bt.getterFor(E_), x_ = RegExp.prototype, A_ = x_.exec, k_ = ("").matchAll, O_ = !!k_ && !v_(function () {
    ("a").matchAll(/./);
  }), T_ = s_(function (t, e, r, n) {
    __(this, {
      type: E_,
      regexp: t,
      string: e,
      global: r,
      unicode: n,
      done: !1
    });
  }, w_, function () {
    var t = S_(this);
    if (t.done) return {
      value: void 0,
      done: !0
    };
    var e = t.regexp, r = t.string, n = (function (t, e) {
      var r, n = t.exec;
      if ("function" == typeof n) {
        if ("object" != typeof (r = n.call(t, e))) throw TypeError("Incorrect exec result");
        return r;
      }
      return A_.call(t, e);
    })(e, r);
    return null === n ? {
      value: void 0,
      done: t.done = !0
    } : t.global ? ("" == String(n[0]) && (e.lastIndex = m_(r, l_(e.lastIndex), t.unicode)), {
      value: n,
      done: !1
    }) : (t.done = !0, {
      value: n,
      done: !1
    });
  }), M_ = function (t) {
    var e, r, n, o, i, a, c = p_(this), u = String(t);
    return (e = y_(c, RegExp), void 0 === (r = c.flags) && c instanceof RegExp && !(("flags" in x_)) && (r = ew.call(c)), n = void 0 === r ? "" : String(r), o = new e(e === RegExp ? c.source : c, n), i = !!~n.indexOf("g"), a = !!~n.indexOf("u"), o.lastIndex = l_(c.lastIndex), new T_(o, u, i, a));
  };
  (u_({
    target: "String",
    proto: !0,
    forced: O_
  }, {
    matchAll: function (t) {
      var e, r, n = f_(this);
      if (null != t) {
        if (d_(t) && !~String(f_(("flags" in x_) ? t.flags : ew.call(t))).indexOf("g")) throw TypeError("`.matchAll` does not allow non-global regexes");
        if (O_) return k_.apply(n, arguments);
        if (null != (r = t[b_])) return h_(r).call(t, n);
      } else if (O_) return k_.apply(n, arguments);
      return (e = String(n), new RegExp(t, "g")[b_](e));
    }
  }), (b_ in x_) || g_(x_, b_, M_));
  var I_, R_ = fl.end;
  o({
    target: "String",
    proto: !0,
    forced: I_ = (/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//).test(fe)
  }, {
    padEnd: function (t) {
      return R_(this, t, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
  var j_ = fl.start;
  o({
    target: "String",
    proto: !0,
    forced: I_
  }, {
    padStart: function (t) {
      return j_(this, t, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
  var L_ = u, F_ = oe;
  (o({
    target: "String",
    stat: !0
  }, {
    raw: function (t) {
      for (var e = L_(t.raw), r = F_(e.length), n = arguments.length, o = [], i = 0; r > i; ) (o.push(String(e[i++])), i < n && o.push(String(arguments[i])));
      return o.join("");
    }
  }), o({
    target: "String",
    proto: !0
  }, {
    repeat: ll
  }));
  var P_, N_ = DE, U_ = b, $_ = oe, C_ = ie, D_ = l, B_ = BE, q_ = g, z_ = Math.floor, W_ = ("").replace, H_ = /\$([$&'`]|\d{1,2}|<[^>]*>)/g, G_ = /\$([$&'`]|\d{1,2})/g, V_ = P_ = function (t, e, r, n, o, i) {
    var a = r + t.length, c = n.length, u = G_;
    return (void 0 !== o && (o = q_(o), u = H_), W_.call(i, u, function (i, u) {
      var s;
      switch (u.charAt(0)) {
        case "$":
          return "$";
        case "&":
          return t;
        case "`":
          return e.slice(0, r);
        case "'":
          return e.slice(a);
        case "<":
          s = o[u.slice(1, -1)];
          break;
        default:
          var f = +u;
          if (0 === f) return i;
          if (f > c) {
            var l = z_(f / 10);
            return 0 === l ? i : l <= c ? void 0 === n[l - 1] ? u.charAt(1) : n[l - 1] + u.charAt(1) : i;
          }
          s = n[f - 1];
      }
      return void 0 === s ? "" : s;
    }));
  }, Y_ = qE, J_ = Math.max, X_ = Math.min;
  N_("replace", 2, function (t, e, r, n) {
    var o = n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE, i = n.REPLACE_KEEPS_$0, a = o ? "$" : "$0";
    return [function (r, n) {
      var o = D_(this), i = null == r ? void 0 : r[t];
      return void 0 !== i ? i.call(r, o, n) : e.call(String(o), r, n);
    }, function (t, n) {
      if (!o && i || "string" == typeof n && -1 === n.indexOf(a)) {
        var c = r(e, t, this, n);
        if (c.done) return c.value;
      }
      var u = U_(t), s = String(this), f = "function" == typeof n;
      f || (n = String(n));
      var l = u.global;
      if (l) {
        var h = u.unicode;
        u.lastIndex = 0;
      }
      for (var p = []; ; ) {
        var d = Y_(u, s);
        if (null === d) break;
        if ((p.push(d), !l)) break;
        "" === String(d[0]) && (u.lastIndex = B_(s, $_(u.lastIndex), h));
      }
      for (var g, v = "", y = 0, m = 0; m < p.length; m++) {
        d = p[m];
        for (var b = String(d[0]), w = J_(X_(C_(d.index), s.length), 0), E = [], _ = 1; _ < d.length; _++) E.push(void 0 === (g = d[_]) ? g : String(g));
        var S = d.groups;
        if (f) {
          var x = [b].concat(E, w, s);
          void 0 !== S && x.push(S);
          var A = String(n.apply(void 0, x));
        } else A = V_(b, s, w, E, S, n);
        w >= y && (v += s.slice(y, w) + A, y = w + b.length);
      }
      return v + s.slice(y);
    }];
  });
  var K_ = o, Q_ = l, Z_ = tw, tS = P_, eS = Dr("replace"), rS = RegExp.prototype, nS = Math.max, oS = function (t, e, r) {
    return r > t.length ? -1 : "" === e ? r : t.indexOf(e, r);
  };
  K_({
    target: "String",
    proto: !0
  }, {
    replaceAll: function (t, e) {
      var r, n, o, i, a, c, u, s = Q_(this), f = 0, l = 0, h = "";
      if (null != t) {
        if (Z_(t) && !~String(Q_(("flags" in rS) ? t.flags : ew.call(t))).indexOf("g")) throw TypeError("`.replaceAll` does not allow non-global regexes");
        if (void 0 !== (r = t[eS])) return r.call(t, s, e);
      }
      for ((n = String(s), o = String(t), (i = "function" == typeof e) || (e = String(e)), a = o.length, c = nS(1, a), f = oS(n, o, 0)); -1 !== f; ) (u = i ? String(e(o, f, n)) : tS(o, n, f, [], void 0, e), h += n.slice(l, f) + u, l = f + a, f = oS(n, o, f + c));
      return (l < n.length && (h += n.slice(l)), h);
    }
  });
  var iS = b, aS = l, cS = pv, uS = qE;
  DE("search", 1, function (t, e, r) {
    return [function (e) {
      var r = aS(this), n = null == e ? void 0 : e[t];
      return void 0 !== n ? n.call(e, r) : new RegExp(e)[t](String(r));
    }, function (t) {
      var n = r(e, t, this);
      if (n.done) return n.value;
      var o = iS(t), i = String(this), a = o.lastIndex;
      cS(a, 0) || (o.lastIndex = 0);
      var c = uS(o, i);
      return (cS(o.lastIndex, a) || (o.lastIndex = a), null === c ? -1 : c.index);
    }];
  });
  var sS = DE, fS = tw, lS = b, hS = l, pS = Kf, dS = BE, gS = oe, vS = qE, yS = gw, mS = [].push, bS = Math.min, wS = 4294967295;
  sS("split", 2, function (t, e, r) {
    var n;
    return (n = "c" == ("abbc").split(/(b)*/)[1] || 4 != ("test").split(/(?:)/, -1).length || 2 != ("ab").split(/(?:ab)*/).length || 4 != (".").split(/(.?)(.?)/).length || (".").split(/()()/).length > 1 || ("").split(/.?/).length ? function (t, r) {
      var n = String(hS(this)), o = void 0 === r ? wS : r >>> 0;
      if (0 === o) return [];
      if (void 0 === t) return [n];
      if (!fS(t)) return e.call(n, t, o);
      for (var i, a, c, u = [], s = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), f = 0, l = new RegExp(t.source, s + "g"); (i = Pw.call(l, n)) && !((a = l.lastIndex) > f && (u.push(n.slice(f, i.index)), i.length > 1 && i.index < n.length && mS.apply(u, i.slice(1)), c = i[0].length, f = a, u.length >= o)); ) l.lastIndex === i.index && l.lastIndex++;
      return (f === n.length ? !c && l.test("") || u.push("") : u.push(n.slice(f)), u.length > o ? u.slice(0, o) : u);
    } : ("0").split(void 0, 0).length ? function (t, r) {
      return void 0 === t && 0 === r ? [] : e.call(this, t, r);
    } : e, [function (e, r) {
      var o = hS(this), i = null == e ? void 0 : e[t];
      return void 0 !== i ? i.call(e, o, r) : n.call(String(o), e, r);
    }, function (t, o) {
      var i = r(n, t, this, o, n !== e);
      if (i.done) return i.value;
      var a = lS(t), c = String(this), u = pS(a, RegExp), s = a.unicode, f = (a.ignoreCase ? "i" : "") + (a.multiline ? "m" : "") + (a.unicode ? "u" : "") + (yS ? "g" : "y"), l = new u(yS ? "^(?:" + a.source + ")" : a, f), h = void 0 === o ? wS : o >>> 0;
      if (0 === h) return [];
      if (0 === c.length) return null === vS(l, c) ? [c] : [];
      for (var p = 0, d = 0, g = []; d < c.length; ) {
        l.lastIndex = yS ? 0 : d;
        var v, y = vS(l, yS ? c.slice(d) : c);
        if (null === y || (v = bS(gS(l.lastIndex + (yS ? d : 0)), c.length)) === p) d = dS(c, d, s); else {
          if ((g.push(c.slice(p, d)), g.length === h)) return g;
          for (var m = 1; m <= y.length - 1; m++) if ((g.push(y[m]), g.length === h)) return g;
          d = p = v;
        }
      }
      return (g.push(c.slice(p)), g);
    }]);
  }, yS);
  var ES = o, _S = K, SS = oe, xS = gE, AS = l, kS = vE, OS = ("").startsWith, TS = Math.min, MS = kS("startsWith");
  ES({
    target: "String",
    proto: !0,
    forced: !(!MS && !!(function () {
      var t = _S(String.prototype, "startsWith");
      return t && !t.writable;
    })()) && !MS
  }, {
    startsWith: function (t) {
      var e = String(AS(this));
      xS(t);
      var r = SS(TS(arguments.length > 1 ? arguments[1] : void 0, e.length)), n = String(t);
      return OS ? OS.call(e, n, r) : e.slice(r, r + n.length) === n;
    }
  });
  var IS, RS = ld.trim, jS = a, LS = hd;
  o({
    target: "String",
    proto: !0,
    forced: (IS = function (t) {
      return jS(function () {
        return !!LS[t]() || "​᠎" != ("​᠎")[t]() || LS[t].name !== t;
      });
    })("trim")
  }, {
    trim: function () {
      return RS(this);
    }
  });
  var FS = o, PS = ld.end, NS = IS("trimEnd"), US = NS ? function () {
    return PS(this);
  } : ("").trimEnd;
  FS({
    target: "String",
    proto: !0,
    forced: NS
  }, {
    trimEnd: US,
    trimRight: US
  });
  var $S = o, CS = ld.start, DS = IS("trimStart"), BS = DS ? function () {
    return CS(this);
  } : ("").trimStart;
  $S({
    target: "String",
    proto: !0,
    forced: DS
  }, {
    trimStart: BS,
    trimLeft: BS
  });
  var qS, zS, WS = l, HS = /"/g, GS = qS = function (t, e, r, n) {
    var o = String(WS(t)), i = "<" + e;
    return ("" !== r && (i += " " + r + '="' + String(n).replace(HS, "&quot;") + '"'), i + ">" + o + "</" + e + ">");
  }, VS = a;
  o({
    target: "String",
    proto: !0,
    forced: (zS = function (t) {
      return VS(function () {
        var e = ("")[t]('"');
        return e !== e.toLowerCase() || e.split('"').length > 3;
      });
    })("anchor")
  }, {
    anchor: function (t) {
      return GS(this, "a", "name", t);
    }
  });
  var YS = qS;
  o({
    target: "String",
    proto: !0,
    forced: zS("big")
  }, {
    big: function () {
      return YS(this, "big", "", "");
    }
  });
  var JS = qS;
  o({
    target: "String",
    proto: !0,
    forced: zS("blink")
  }, {
    blink: function () {
      return JS(this, "blink", "", "");
    }
  });
  var XS = qS;
  o({
    target: "String",
    proto: !0,
    forced: zS("bold")
  }, {
    bold: function () {
      return XS(this, "b", "", "");
    }
  });
  var KS = qS;
  o({
    target: "String",
    proto: !0,
    forced: zS("fixed")
  }, {
    fixed: function () {
      return KS(this, "tt", "", "");
    }
  });
  var QS = qS;
  o({
    target: "String",
    proto: !0,
    forced: zS("fontcolor")
  }, {
    fontcolor: function (t) {
      return QS(this, "font", "color", t);
    }
  });
  var ZS = qS;
  o({
    target: "String",
    proto: !0,
    forced: zS("fontsize")
  }, {
    fontsize: function (t) {
      return ZS(this, "font", "size", t);
    }
  });
  var tx = qS;
  o({
    target: "String",
    proto: !0,
    forced: zS("italics")
  }, {
    italics: function () {
      return tx(this, "i", "", "");
    }
  });
  var ex = qS;
  o({
    target: "String",
    proto: !0,
    forced: zS("link")
  }, {
    link: function (t) {
      return ex(this, "a", "href", t);
    }
  });
  var rx = qS;
  o({
    target: "String",
    proto: !0,
    forced: zS("small")
  }, {
    small: function () {
      return rx(this, "small", "", "");
    }
  });
  var nx = qS;
  o({
    target: "String",
    proto: !0,
    forced: zS("strike")
  }, {
    strike: function () {
      return nx(this, "strike", "", "");
    }
  });
  var ox = qS;
  o({
    target: "String",
    proto: !0,
    forced: zS("sub")
  }, {
    sub: function () {
      return ox(this, "sub", "", "");
    }
  });
  var ix = qS;
  o({
    target: "String",
    proto: !0,
    forced: zS("sup")
  }, {
    sup: function () {
      return ix(this, "sup", "", "");
    }
  });
  var ax, cx, ux, sx = {}, fx = o, lx = S, hx = i, px = a, dx = Fa, gx = wf.NATIVE_ARRAY_BUFFER_VIEWS, vx = S.ArrayBuffer, yx = S.Int8Array, mx = ax = !gx || !px(function () {
    yx(1);
  }) || !px(function () {
    new yx(-1);
  }) || !dx(function (t) {
    (new yx(), new yx(null), new yx(1.5), new yx(t));
  }, !0) || px(function () {
    return 1 !== new yx(new vx(2), 1, void 0).length;
  }), bx = ds, wx = c, Ex = m, _x = oe, Sx = gs, xx = ie, Ax = function (t) {
    var e = xx(t);
    if (e < 0) throw RangeError("The argument can't be less than 0");
    return e;
  }, kx = cx = function (t, e) {
    var r = Ax(t);
    if (r % e) throw RangeError("Wrong offset");
    return r;
  }, Ox = h, Tx = d, Mx = Vo, Ix = p, Rx = cr, jx = Ao, Lx = Ce, Fx = g, Px = oe, Nx = Go, Ux = To, $x = Wr, Cx = wf.aTypedArrayConstructor;
  ux = function (t) {
    var e, r, n, o, i, a, c = Fx(t), u = arguments.length, s = u > 1 ? arguments[1] : void 0, f = void 0 !== s, l = Nx(c);
    if (null != l && !Ux(l)) for ((a = (i = l.call(c)).next, c = []); !(o = a.call(i)).done; ) c.push(o.value);
    for ((f && u > 2 && (s = $x(s, arguments[2], 2)), r = Px(c.length), n = new (Cx(this))(r), e = 0); r > e; e++) n[e] = f ? s(c[e], e) : c[e];
    return n;
  };
  var Dx = zr.forEach, Bx = Ju, qx = Th, zx = bt.get, Wx = bt.set, Hx = at, Gx = K, Vx = Math.round, Yx = lx.RangeError, Jx = ls.ArrayBuffer, Xx = ls.DataView, Kx = wf.NATIVE_ARRAY_BUFFER_VIEWS, Qx = wf.TYPED_ARRAY_TAG, Zx = wf.TypedArray, tA = wf.TypedArrayPrototype, eA = wf.aTypedArrayConstructor, rA = wf.isTypedArray, nA = "BYTES_PER_ELEMENT", oA = "Wrong length", iA = function (t, e) {
    for (var r = 0, n = e.length, o = new (eA(t))(n); n > r; ) o[r] = e[r++];
    return o;
  }, aA = function (t, e) {
    Hx(t, e, {
      get: function () {
        return zx(this)[e];
      }
    });
  }, cA = function (t) {
    var e;
    return t instanceof Jx || "ArrayBuffer" == (e = Mx(t)) || "SharedArrayBuffer" == e;
  }, uA = function (t, e) {
    return rA(t) && "symbol" != typeof e && (e in t) && String(+e) == String(e);
  }, sA = function (t, e) {
    return uA(t, e = Ox(e, !0)) ? wx(2, t[e]) : Gx(t, e);
  }, fA = function (t, e, r) {
    return !(uA(t, e = Ox(e, !0)) && Ix(r) && Tx(r, "value")) || Tx(r, "get") || Tx(r, "set") || r.configurable || Tx(r, "writable") && !r.writable || Tx(r, "enumerable") && !r.enumerable ? Hx(t, e, r) : (t[e] = r.value, t);
  };
  (hx ? (Kx || (K = sA, at = fA, aA(tA, "buffer"), aA(tA, "byteOffset"), aA(tA, "byteLength"), aA(tA, "length")), fx({
    target: "Object",
    stat: !0,
    forced: !Kx
  }, {
    getOwnPropertyDescriptor: sA,
    defineProperty: fA
  }), sx = function (t, e, r) {
    var n = t.match(/\d+$/)[0] / 8, o = t + (r ? "Clamped" : "") + "Array", i = "get" + t, a = "set" + t, c = lx[o], u = c, s = u && u.prototype, f = {}, l = function (t, e) {
      Hx(t, e, {
        get: function () {
          return (function (t, e) {
            var r = zx(t);
            return r.view[i](e * n + r.byteOffset, !0);
          })(this, e);
        },
        set: function (t) {
          return (function (t, e, o) {
            var i = zx(t);
            (r && (o = (o = Vx(o)) < 0 ? 0 : o > 255 ? 255 : 255 & o), i.view[a](e * n + i.byteOffset, o, !0));
          })(this, e, t);
        },
        enumerable: !0
      });
    };
    (Kx ? mx && (u = e(function (t, e, r, i) {
      return (bx(t, u, o), qx(Ix(e) ? cA(e) ? void 0 !== i ? new c(e, kx(r, n), i) : void 0 !== r ? new c(e, kx(r, n)) : new c(e) : rA(e) ? iA(u, e) : ux.call(u, e) : new c(Sx(e)), t, u));
    }), jx && jx(u, Zx), Dx(Lx(c), function (t) {
      (t in u) || Ex(u, t, c[t]);
    }), u.prototype = s) : (u = e(function (t, e, r, i) {
      bx(t, u, o);
      var a, c, s, f = 0, h = 0;
      if (Ix(e)) {
        if (!cA(e)) return rA(e) ? iA(u, e) : ux.call(u, e);
        (a = e, h = kx(r, n));
        var p = e.byteLength;
        if (void 0 === i) {
          if (p % n) throw Yx(oA);
          if ((c = p - h) < 0) throw Yx(oA);
        } else if ((c = _x(i) * n) + h > p) throw Yx(oA);
        s = c / n;
      } else (s = Sx(e), a = new Jx(c = s * n));
      for (Wx(t, {
        buffer: a,
        byteOffset: h,
        byteLength: c,
        length: s,
        view: new Xx(a)
      }); f < s; ) l(t, f++);
    }), jx && jx(u, Zx), s = u.prototype = Rx(tA)), s.constructor !== u && Ex(s, "constructor", u), Qx && Ex(s, Qx, o), f[o] = u, fx({
      global: !0,
      forced: u != c,
      sham: !Kx
    }, f), (nA in u) || Ex(u, nA, n), (nA in s) || Ex(s, nA, n), Bx(o));
  }) : sx = function () {}, sx("Float32", function (t) {
    return function (e, r, n) {
      return t(this, e, r, n);
    };
  }), sx("Float64", function (t) {
    return function (e, r, n) {
      return t(this, e, r, n);
    };
  }), sx("Int8", function (t) {
    return function (e, r, n) {
      return t(this, e, r, n);
    };
  }), sx("Int16", function (t) {
    return function (e, r, n) {
      return t(this, e, r, n);
    };
  }), sx("Int32", function (t) {
    return function (e, r, n) {
      return t(this, e, r, n);
    };
  }), sx("Uint8", function (t) {
    return function (e, r, n) {
      return t(this, e, r, n);
    };
  }), sx("Uint8", function (t) {
    return function (e, r, n) {
      return t(this, e, r, n);
    };
  }, !0), sx("Uint16", function (t) {
    return function (e, r, n) {
      return t(this, e, r, n);
    };
  }), sx("Uint32", function (t) {
    return function (e, r, n) {
      return t(this, e, r, n);
    };
  }));
  var lA = wf.aTypedArray;
  (0, wf.exportTypedArrayMethod)("copyWithin", function (t, e) {
    return Di.call(lA(this), t, e, arguments.length > 2 ? arguments[2] : void 0);
  });
  var hA = zr.every, pA = wf.aTypedArray;
  (0, wf.exportTypedArrayMethod)("every", function (t) {
    return hA(pA(this), t, arguments.length > 1 ? arguments[1] : void 0);
  });
  var dA = wf.aTypedArray;
  (0, wf.exportTypedArrayMethod)("fill", function (t) {
    return Zi.apply(dA(this), arguments);
  });
  var gA = zr.filter, vA = wf.aTypedArrayConstructor, yA = Kf, mA = function (t, e) {
    for (var r = yA(t, t.constructor), n = 0, o = e.length, i = new (vA(r))(o); o > n; ) i[n] = e[n++];
    return i;
  }, bA = wf.aTypedArray;
  (0, wf.exportTypedArrayMethod)("filter", function (t) {
    var e = gA(bA(this), t, arguments.length > 1 ? arguments[1] : void 0);
    return mA(this, e);
  });
  var wA = zr.find, EA = wf.aTypedArray;
  (0, wf.exportTypedArrayMethod)("find", function (t) {
    return wA(EA(this), t, arguments.length > 1 ? arguments[1] : void 0);
  });
  var _A = zr.findIndex, SA = wf.aTypedArray;
  (0, wf.exportTypedArrayMethod)("findIndex", function (t) {
    return _A(SA(this), t, arguments.length > 1 ? arguments[1] : void 0);
  });
  var xA = zr.forEach, AA = wf.aTypedArray;
  ((0, wf.exportTypedArrayMethod)("forEach", function (t) {
    xA(AA(this), t, arguments.length > 1 ? arguments[1] : void 0);
  }), (0, wf.exportTypedArrayStaticMethod)("from", ux, ax));
  var kA = ne.includes, OA = wf.aTypedArray;
  (0, wf.exportTypedArrayMethod)("includes", function (t) {
    return kA(OA(this), t, arguments.length > 1 ? arguments[1] : void 0);
  });
  var TA = ne.indexOf, MA = wf.aTypedArray;
  (0, wf.exportTypedArrayMethod)("indexOf", function (t) {
    return TA(MA(this), t, arguments.length > 1 ? arguments[1] : void 0);
  });
  var IA = Dr("iterator"), RA = S.Uint8Array, jA = oc.values, LA = oc.keys, FA = oc.entries, PA = wf.aTypedArray, NA = wf.exportTypedArrayMethod, UA = RA && RA.prototype[IA], $A = !!UA && ("values" == UA.name || null == UA.name), CA = function () {
    return jA.call(PA(this));
  };
  (NA("entries", function () {
    return FA.call(PA(this));
  }), NA("keys", function () {
    return LA.call(PA(this));
  }), NA("values", CA, !$A), NA(IA, CA, !$A));
  var DA = wf.aTypedArray, BA = [].join;
  (0, wf.exportTypedArrayMethod)("join", function (t) {
    return BA.apply(DA(this), arguments);
  });
  var qA = wf.aTypedArray;
  (0, wf.exportTypedArrayMethod)("lastIndexOf", function (t) {
    return Kc.apply(qA(this), arguments);
  });
  var zA = zr.map, WA = Kf, HA = wf.aTypedArray, GA = wf.aTypedArrayConstructor;
  (0, wf.exportTypedArrayMethod)("map", function (t) {
    return zA(HA(this), t, arguments.length > 1 ? arguments[1] : void 0, function (t, e) {
      return new (GA(WA(t, t.constructor)))(e);
    });
  });
  var VA = wf.aTypedArrayConstructor;
  (0, wf.exportTypedArrayStaticMethod)("of", function () {
    for (var t = 0, e = arguments.length, r = new (VA(this))(e); e > t; ) r[t] = arguments[t++];
    return r;
  }, ax);
  var YA = uu.left, JA = wf.aTypedArray;
  (0, wf.exportTypedArrayMethod)("reduce", function (t) {
    return YA(JA(this), t, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
  });
  var XA = uu.right, KA = wf.aTypedArray;
  (0, wf.exportTypedArrayMethod)("reduceRight", function (t) {
    return XA(KA(this), t, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
  });
  var QA = wf.aTypedArray, ZA = wf.exportTypedArrayMethod, tk = Math.floor;
  ZA("reverse", function () {
    for (var t, e = this, r = QA(e).length, n = tk(r / 2), o = 0; o < n; ) (t = e[o], e[o++] = e[--r], e[r] = t);
    return e;
  });
  var ek = oe, rk = cx, nk = g, ok = wf.aTypedArray;
  (0, wf.exportTypedArrayMethod)("set", function (t) {
    ok(this);
    var e = rk(arguments.length > 1 ? arguments[1] : void 0, 1), r = this.length, n = nk(t), o = ek(n.length), i = 0;
    if (o + e > r) throw RangeError("Wrong length");
    for (; i < o; ) this[e + i] = n[i++];
  }, a(function () {
    new Int8Array(1).set({});
  }));
  var ik = Kf, ak = wf.aTypedArray, ck = wf.aTypedArrayConstructor, uk = [].slice;
  (0, wf.exportTypedArrayMethod)("slice", function (t, e) {
    for (var r = uk.call(ak(this), t, e), n = ik(this, this.constructor), o = 0, i = r.length, a = new (ck(n))(i); i > o; ) a[o] = r[o++];
    return a;
  }, a(function () {
    new Int8Array(1).slice();
  }));
  var sk = zr.some, fk = wf.aTypedArray;
  (0, wf.exportTypedArrayMethod)("some", function (t) {
    return sk(fk(this), t, arguments.length > 1 ? arguments[1] : void 0);
  });
  var lk = wf.aTypedArray, hk = [].sort;
  (0, wf.exportTypedArrayMethod)("sort", function (t) {
    return hk.call(lk(this), t);
  });
  var pk = oe, dk = ae, gk = Kf, vk = wf.aTypedArray;
  (0, wf.exportTypedArrayMethod)("subarray", function (t, e) {
    var r = vk(this), n = r.length, o = dk(t, n);
    return new (gk(r, r.constructor))(r.buffer, r.byteOffset + o * r.BYTES_PER_ELEMENT, pk((void 0 === e ? n : dk(e, n)) - o));
  });
  var yk = a, mk = S.Int8Array, bk = wf.aTypedArray, wk = wf.exportTypedArrayMethod, Ek = [].toLocaleString, _k = [].slice, Sk = !!mk && yk(function () {
    Ek.call(new mk(1));
  });
  wk("toLocaleString", function () {
    return Ek.apply(Sk ? _k.call(bk(this)) : bk(this), arguments);
  }, yk(function () {
    return [1, 2].toLocaleString() != new mk([1, 2]).toLocaleString();
  }) || !yk(function () {
    mk.prototype.toLocaleString.call([1, 2]);
  }));
  var xk = wf.exportTypedArrayMethod, Ak = a, kk = S.Uint8Array, Ok = kk && kk.prototype || ({}), Tk = [].toString, Mk = [].join;
  Ak(function () {
    Tk.call({});
  }) && (Tk = function () {
    return Mk.call(this);
  });
  var Ik = Ok.toString != Tk;
  xk("toString", Tk, Ik);
  var Rk, jk = S, Lk = ps, Fk = fh, Pk = ps, Nk = vh.getWeakData, Uk = b, $k = p, Ck = ds, Dk = Oo, Bk = d, qk = bt.set, zk = bt.getterFor, Wk = zr.find, Hk = zr.findIndex, Gk = 0, Vk = function (t) {
    return t.frozen || (t.frozen = new Yk());
  }, Yk = function () {
    this.entries = [];
  }, Jk = function (t, e) {
    return Wk(t.entries, function (t) {
      return t[0] === e;
    });
  };
  Yk.prototype = {
    get: function (t) {
      var e = Jk(this, t);
      if (e) return e[1];
    },
    has: function (t) {
      return !!Jk(this, t);
    },
    set: function (t, e) {
      var r = Jk(this, t);
      r ? r[1] = e : this.entries.push([t, e]);
    },
    delete: function (t) {
      var e = Hk(this.entries, function (e) {
        return e[0] === t;
      });
      return (~e && this.entries.splice(e, 1), !!~e);
    }
  };
  var Xk, Kk = Rk = {
    getConstructor: function (t, e, r, n) {
      var o = t(function (t, i) {
        (Ck(t, o, e), qk(t, {
          type: e,
          id: Gk++,
          frozen: void 0
        }), null != i && Dk(i, t[n], {
          that: t,
          AS_ENTRIES: r
        }));
      }), i = zk(e), a = function (t, e, r) {
        var n = i(t), o = Nk(Uk(e), !0);
        return (!0 === o ? Vk(n).set(e, r) : o[n.id] = r, t);
      };
      return (Pk(o.prototype, {
        delete: function (t) {
          var e = i(this);
          if (!$k(t)) return !1;
          var r = Nk(t);
          return !0 === r ? Vk(e).delete(t) : r && Bk(r, e.id) && delete r[e.id];
        },
        has: function (t) {
          var e = i(this);
          if (!$k(t)) return !1;
          var r = Nk(t);
          return !0 === r ? Vk(e).has(t) : r && Bk(r, e.id);
        }
      }), Pk(o.prototype, r ? {
        get: function (t) {
          var e = i(this);
          if ($k(t)) {
            var r = Nk(t);
            return !0 === r ? Vk(e).get(t) : r ? r[e.id] : void 0;
          }
        },
        set: function (t, e) {
          return a(this, t, e);
        }
      } : {
        add: function (t) {
          return a(this, t, !0);
        }
      }), o);
    }
  }, Qk = p, Zk = bt.enforce, tO = wt, eO = !jk.ActiveXObject && ("ActiveXObject" in jk), rO = Object.isExtensible, nO = function (t) {
    return function () {
      return t(this, arguments.length ? arguments[0] : void 0);
    };
  }, oO = $5440d630d45b93cc70c70bb53f65fcf0$exports = Fk("WeakMap", nO, Kk);
  if (tO && eO) {
    (Xk = Kk.getConstructor(nO, "WeakMap", !0), vh.REQUIRED = !0);
    var iO = oO.prototype, aO = iO.delete, cO = iO.has, uO = iO.get, sO = iO.set;
    Lk(iO, {
      delete: function (t) {
        if (Qk(t) && !rO(t)) {
          var e = Zk(this);
          return (e.frozen || (e.frozen = new Xk()), aO.call(this, t) || e.frozen.delete(t));
        }
        return aO.call(this, t);
      },
      has: function (t) {
        if (Qk(t) && !rO(t)) {
          var e = Zk(this);
          return (e.frozen || (e.frozen = new Xk()), cO.call(this, t) || e.frozen.has(t));
        }
        return cO.call(this, t);
      },
      get: function (t) {
        if (Qk(t) && !rO(t)) {
          var e = Zk(this);
          return (e.frozen || (e.frozen = new Xk()), cO.call(this, t) ? uO.call(this, t) : e.frozen.get(t));
        }
        return uO.call(this, t);
      },
      set: function (t, e) {
        if (Qk(t) && !rO(t)) {
          var r = Zk(this);
          (r.frozen || (r.frozen = new Xk()), cO.call(this, t) ? sO.call(this, t, e) : r.frozen.set(t, e));
        } else sO.call(this, t, e);
        return this;
      }
    });
  }
  fh("WeakSet", function (t) {
    return function () {
      return t(this, arguments.length ? arguments[0] : void 0);
    };
  }, Rk);
  var fO, lO = S, hO = fO = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
  }, pO = Ia, dO = m;
  for (var gO in hO) {
    var vO = lO[gO], yO = vO && vO.prototype;
    if (yO && yO.forEach !== pO) try {
      dO(yO, "forEach", pO);
    } catch (t) {
      yO.forEach = pO;
    }
  }
  var mO = S, bO = fO, wO = oc, EO = m, _O = Dr, SO = _O("iterator"), xO = _O("toStringTag"), AO = wO.values;
  for (var kO in bO) {
    var OO = mO[kO], TO = OO && OO.prototype;
    if (TO) {
      if (TO[SO] !== AO) try {
        EO(TO, SO, AO);
      } catch (t) {
        TO[SO] = AO;
      }
      if ((TO[xO] || EO(TO, xO, kO), bO[kO])) for (var MO in wO) if (TO[MO] !== wO[MO]) try {
        EO(TO, MO, wO[MO]);
      } catch (t) {
        TO[MO] = wO[MO];
      }
    }
  }
  o({
    global: !0,
    bind: !0,
    enumerable: !0,
    forced: !S.setImmediate || !S.clearImmediate
  }, {
    setImmediate: Qv.set,
    clearImmediate: Qv.clear
  });
  var IO = o, RO = Uy, jO = su, LO = S.process;
  IO({
    global: !0,
    enumerable: !0,
    noTargetGet: !0
  }, {
    queueMicrotask: function (t) {
      var e = jO && LO.domain;
      RO(e ? e.bind(t) : t);
    }
  });
  var FO = [].slice, PO = function (t) {
    return function (e, r) {
      var n = arguments.length > 2, o = n ? FO.call(arguments, 2) : void 0;
      return t(n ? function () {
        ("function" == typeof e ? e : Function(e)).apply(this, o);
      } : e, r);
    };
  };
  o({
    global: !0,
    bind: !0,
    forced: (/MSIE .\./).test(fe)
  }, {
    setTimeout: PO(S.setTimeout),
    setInterval: PO(S.setInterval)
  });
  var NO, UO, $O = o, CO = i, DO = a, BO = Dr("iterator"), qO = NO = !DO(function () {
    var t = new URL("b?a=1&b=2&c=3", "http://a"), e = t.searchParams, r = "";
    return (t.pathname = "c%20d", e.forEach(function (t, n) {
      (e.delete("b"), r += n + t);
    }), !e.sort || "http://a/c%20d?a=1&c=3" !== t.href || "3" !== e.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !e[BO] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б").hash || "a1c3" !== r || "x" !== new URL("http://x", void 0).host);
  }), zO = ur, WO = w, HO = ds, GO = d, VO = Eg, YO = La, JO = sE.codeAt, XO = 2147483647, KO = /[^\0-\u007E]/, QO = /[.\u3002\uFF0E\uFF61]/g, ZO = "Overflow: input needs wider integers to process", tT = Math.floor, eT = String.fromCharCode, rT = function (t) {
    return t + 22 + 75 * (t < 26);
  }, nT = function (t, e, r) {
    var n = 0;
    for ((t = r ? tT(t / 700) : t >> 1, t += tT(t / e)); t > 455; n += 36) t = tT(t / 35);
    return tT(n + 36 * t / (t + 38));
  }, oT = function (t) {
    var e, r, n = [], o = (t = (function (t) {
      for (var e = [], r = 0, n = t.length; r < n; ) {
        var o = t.charCodeAt(r++);
        if (o >= 55296 && o <= 56319 && r < n) {
          var i = t.charCodeAt(r++);
          56320 == (64512 & i) ? e.push(((1023 & o) << 10) + (1023 & i) + 65536) : (e.push(o), r--);
        } else e.push(o);
      }
      return e;
    })(t)).length, i = 128, a = 0, c = 72;
    for (e = 0; e < t.length; e++) (r = t[e]) < 128 && n.push(eT(r));
    var u = n.length, s = u;
    for (u && n.push("-"); s < o; ) {
      var f = XO;
      for (e = 0; e < t.length; e++) (r = t[e]) >= i && r < f && (f = r);
      var l = s + 1;
      if (f - i > tT((XO - a) / l)) throw RangeError(ZO);
      for ((a += (f - i) * l, i = f, e = 0); e < t.length; e++) {
        if ((r = t[e]) < i && ++a > XO) throw RangeError(ZO);
        if (r == i) {
          for (var h = a, p = 36; ; p += 36) {
            var d = p <= c ? 1 : p >= c + 26 ? 26 : p - c;
            if (h < d) break;
            var g = h - d, v = 36 - d;
            (n.push(eT(rT(d + g % v))), h = tT(g / v));
          }
          (n.push(eT(rT(h))), c = nT(a, l, s == u), a = 0, ++s);
        }
      }
      (++a, ++i);
    }
    return n.join("");
  }, iT = function (t) {
    var e, r, n = [], o = t.toLowerCase().replace(QO, ".").split(".");
    for (e = 0; e < o.length; e++) (r = o[e], n.push(KO.test(r) ? "xn--" + oT(r) : r));
    return n.join(".");
  }, aT = qr, cT = o, uT = ee, sT = NO, fT = w, lT = ps, hT = qr, pT = ac, dT = ds, gT = d, vT = Wr, yT = Vo, mT = b, bT = p, wT = cr, ET = c, _T = b, ST = Go, xT = function (t) {
    var e = ST(t);
    if ("function" != typeof e) throw TypeError(String(t) + " is not iterable");
    return _T(e.call(t));
  }, AT = Go, kT = Dr, OT = uT("fetch"), TT = uT("Headers"), MT = kT("iterator"), IT = "URLSearchParams", RT = "URLSearchParamsIterator", jT = bt.set, LT = bt.getterFor(IT), FT = bt.getterFor(RT), PT = /\+/g, NT = Array(4), UT = function (t) {
    return NT[t - 1] || (NT[t - 1] = RegExp("((?:%[\\da-f]{2}){" + t + "})", "gi"));
  }, $T = function (t) {
    try {
      return decodeURIComponent(t);
    } catch (e) {
      return t;
    }
  }, CT = function (t) {
    var e = t.replace(PT, " "), r = 4;
    try {
      return decodeURIComponent(e);
    } catch (t) {
      for (; r; ) e = e.replace(UT(r--), $T);
      return e;
    }
  }, DT = /[!'()~]|%20/g, BT = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+"
  }, qT = function (t) {
    return BT[t];
  }, zT = function (t) {
    return encodeURIComponent(t).replace(DT, qT);
  }, WT = function (t, e) {
    if (e) for (var r, n, o = e.split("&"), i = 0; i < o.length; ) (r = o[i++]).length && (n = r.split("="), t.push({
      key: CT(n.shift()),
      value: CT(n.join("="))
    }));
  }, HT = function (t) {
    (this.entries.length = 0, WT(this.entries, t));
  }, GT = function (t, e) {
    if (t < e) throw TypeError("Not enough arguments");
  }, VT = pT(function (t, e) {
    jT(this, {
      type: RT,
      iterator: xT(LT(t).entries),
      kind: e
    });
  }, "Iterator", function () {
    var t = FT(this), e = t.kind, r = t.iterator.next(), n = r.value;
    return (r.done || (r.value = "keys" === e ? n.key : "values" === e ? n.value : [n.key, n.value]), r);
  }), YT = function () {
    dT(this, YT, IT);
    var t, e, r, n, o, i, a, c, u, s = arguments.length > 0 ? arguments[0] : void 0, f = this, l = [];
    if ((jT(f, {
      type: IT,
      entries: l,
      updateURL: function () {},
      updateSearchParams: HT
    }), void 0 !== s)) if (bT(s)) if ("function" == typeof (t = AT(s))) for (r = (e = t.call(s)).next; !(n = r.call(e)).done; ) {
      if ((a = (i = (o = xT(mT(n.value))).next).call(o)).done || (c = i.call(o)).done || !i.call(o).done) throw TypeError("Expected sequence with length 2");
      l.push({
        key: a.value + "",
        value: c.value + ""
      });
    } else for (u in s) gT(s, u) && l.push({
      key: u,
      value: s[u] + ""
    }); else WT(l, "string" == typeof s ? "?" === s.charAt(0) ? s.slice(1) : s : s + "");
  }, JT = YT.prototype;
  (lT(JT, {
    append: function (t, e) {
      GT(arguments.length, 2);
      var r = LT(this);
      (r.entries.push({
        key: t + "",
        value: e + ""
      }), r.updateURL());
    },
    delete: function (t) {
      GT(arguments.length, 1);
      for (var e = LT(this), r = e.entries, n = t + "", o = 0; o < r.length; ) r[o].key === n ? r.splice(o, 1) : o++;
      e.updateURL();
    },
    get: function (t) {
      GT(arguments.length, 1);
      for (var e = LT(this).entries, r = t + "", n = 0; n < e.length; n++) if (e[n].key === r) return e[n].value;
      return null;
    },
    getAll: function (t) {
      GT(arguments.length, 1);
      for (var e = LT(this).entries, r = t + "", n = [], o = 0; o < e.length; o++) e[o].key === r && n.push(e[o].value);
      return n;
    },
    has: function (t) {
      GT(arguments.length, 1);
      for (var e = LT(this).entries, r = t + "", n = 0; n < e.length; ) if (e[n++].key === r) return !0;
      return !1;
    },
    set: function (t, e) {
      GT(arguments.length, 1);
      for (var r, n = LT(this), o = n.entries, i = !1, a = t + "", c = e + "", u = 0; u < o.length; u++) (r = o[u]).key === a && (i ? o.splice(u--, 1) : (i = !0, r.value = c));
      (i || o.push({
        key: a,
        value: c
      }), n.updateURL());
    },
    sort: function () {
      var t, e, r, n = LT(this), o = n.entries, i = o.slice();
      for ((o.length = 0, r = 0); r < i.length; r++) {
        for ((t = i[r], e = 0); e < r; e++) if (o[e].key > t.key) {
          o.splice(e, 0, t);
          break;
        }
        e === r && o.push(t);
      }
      n.updateURL();
    },
    forEach: function (t) {
      for (var e, r = LT(this).entries, n = vT(t, arguments.length > 1 ? arguments[1] : void 0, 3), o = 0; o < r.length; ) n((e = r[o++]).value, e.key, this);
    },
    keys: function () {
      return new VT(this, "keys");
    },
    values: function () {
      return new VT(this, "values");
    },
    entries: function () {
      return new VT(this, "entries");
    }
  }, {
    enumerable: !0
  }), fT(JT, MT, JT.entries), fT(JT, "toString", function () {
    for (var t, e = LT(this).entries, r = [], n = 0; n < e.length; ) (t = e[n++], r.push(zT(t.key) + "=" + zT(t.value)));
    return r.join("&");
  }, {
    enumerable: !0
  }), hT(YT, IT), cT({
    global: !0,
    forced: !sT
  }, {
    URLSearchParams: YT
  }), sT || "function" != typeof OT || "function" != typeof TT || cT({
    global: !0,
    enumerable: !0,
    forced: !0
  }, {
    fetch: function (t) {
      var e, r, n, o = [t];
      return (arguments.length > 1 && (bT(e = arguments[1]) && (r = e.body, yT(r) === IT && ((n = e.headers ? new TT(e.headers) : new TT()).has("content-type") || n.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"), e = wT(e, {
        body: ET(0, String(r)),
        headers: ET(0, n)
      }))), o.push(e)), OT.apply(this, o));
    }
  }), UO = {
    URLSearchParams: YT,
    getState: LT
  });
  var XT, KT = S.URL, QT = UO.URLSearchParams, ZT = UO.getState, tM = bt.set, eM = bt.getterFor("URL"), rM = Math.floor, nM = Math.pow, oM = "Invalid scheme", iM = "Invalid host", aM = "Invalid port", cM = /[A-Za-z]/, uM = /[\d+-.A-Za-z]/, sM = /\d/, fM = /^(0x|0X)/, lM = /^[0-7]+$/, hM = /^\d+$/, pM = /^[\dA-Fa-f]+$/, dM = /[\0\t\n\r #%/:?@[\\]]/, gM = /[\0\t\n\r #/:?@[\\]]/, vM = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g, yM = /[\t\n\r]/g, mM = function (t, e) {
    var r, n, o;
    if ("[" == e.charAt(0)) {
      if ("]" != e.charAt(e.length - 1)) return iM;
      if (!(r = wM(e.slice(1, -1)))) return iM;
      t.host = r;
    } else if (TM(t)) {
      if ((e = iT(e), dM.test(e))) return iM;
      if (null === (r = bM(e))) return iM;
      t.host = r;
    } else {
      if (gM.test(e)) return iM;
      for ((r = "", n = YO(e), o = 0); o < n.length; o++) r += kM(n[o], _M);
      t.host = r;
    }
  }, bM = function (t) {
    var e, r, n, o, i, a, c, u = t.split(".");
    if ((u.length && "" == u[u.length - 1] && u.pop(), (e = u.length) > 4)) return t;
    for ((r = [], n = 0); n < e; n++) {
      if ("" == (o = u[n])) return t;
      if ((i = 10, o.length > 1 && "0" == o.charAt(0) && (i = fM.test(o) ? 16 : 8, o = o.slice(8 == i ? 1 : 2)), "" === o)) a = 0; else {
        if (!(10 == i ? hM : 8 == i ? lM : pM).test(o)) return t;
        a = parseInt(o, i);
      }
      r.push(a);
    }
    for (n = 0; n < e; n++) if ((a = r[n], n == e - 1)) {
      if (a >= nM(256, 5 - e)) return null;
    } else if (a > 255) return null;
    for ((c = r.pop(), n = 0); n < r.length; n++) c += r[n] * nM(256, 3 - n);
    return c;
  }, wM = function (t) {
    var e, r, n, o, i, a, c, u = [0, 0, 0, 0, 0, 0, 0, 0], s = 0, f = null, l = 0, h = function () {
      return t.charAt(l);
    };
    if (":" == h()) {
      if (":" != t.charAt(1)) return;
      (l += 2, f = ++s);
    }
    for (; h(); ) {
      if (8 == s) return;
      if (":" != h()) {
        for (e = r = 0; r < 4 && pM.test(h()); ) (e = 16 * e + parseInt(h(), 16), l++, r++);
        if ("." == h()) {
          if (0 == r) return;
          if ((l -= r, s > 6)) return;
          for (n = 0; h(); ) {
            if ((o = null, n > 0)) {
              if (!("." == h() && n < 4)) return;
              l++;
            }
            if (!sM.test(h())) return;
            for (; sM.test(h()); ) {
              if ((i = parseInt(h(), 10), null === o)) o = i; else {
                if (0 == o) return;
                o = 10 * o + i;
              }
              if (o > 255) return;
              l++;
            }
            (u[s] = 256 * u[s] + o, 2 != ++n && 4 != n || s++);
          }
          if (4 != n) return;
          break;
        }
        if (":" == h()) {
          if ((l++, !h())) return;
        } else if (h()) return;
        u[s++] = e;
      } else {
        if (null !== f) return;
        (l++, f = ++s);
      }
    }
    if (null !== f) for ((a = s - f, s = 7); 0 != s && a > 0; ) (c = u[s], u[s--] = u[f + a - 1], u[f + --a] = c); else if (8 != s) return;
    return u;
  }, EM = function (t) {
    var e, r, n, o;
    if ("number" == typeof t) {
      for ((e = [], r = 0); r < 4; r++) (e.unshift(t % 256), t = rM(t / 256));
      return e.join(".");
    }
    if ("object" == typeof t) {
      for ((e = "", n = (function (t) {
        for (var e = null, r = 1, n = null, o = 0, i = 0; i < 8; i++) 0 !== t[i] ? (o > r && (e = n, r = o), n = null, o = 0) : (null === n && (n = i), ++o);
        return (o > r && (e = n, r = o), e);
      })(t), r = 0); r < 8; r++) o && 0 === t[r] || (o && (o = !1), n === r ? (e += r ? ":" : "::", o = !0) : (e += t[r].toString(16), r < 7 && (e += ":")));
      return "[" + e + "]";
    }
    return t;
  }, _M = {}, SM = VO({}, _M, {
    " ": 1,
    '"': 1,
    "<": 1,
    ">": 1,
    "`": 1
  }), xM = VO({}, SM, {
    "#": 1,
    "?": 1,
    "{": 1,
    "}": 1
  }), AM = VO({}, xM, {
    "/": 1,
    ":": 1,
    ";": 1,
    "=": 1,
    "@": 1,
    "[": 1,
    "\\": 1,
    "]": 1,
    "^": 1,
    "|": 1
  }), kM = function (t, e) {
    var r = JO(t, 0);
    return r > 32 && r < 127 && !GO(e, t) ? t : encodeURIComponent(t);
  }, OM = {
    ftp: 21,
    file: null,
    http: 80,
    https: 443,
    ws: 80,
    wss: 443
  }, TM = function (t) {
    return GO(OM, t.scheme);
  }, MM = function (t) {
    return "" != t.username || "" != t.password;
  }, IM = function (t) {
    return !t.host || t.cannotBeABaseURL || "file" == t.scheme;
  }, RM = function (t, e) {
    var r;
    return 2 == t.length && cM.test(t.charAt(0)) && (":" == (r = t.charAt(1)) || !e && "|" == r);
  }, jM = function (t) {
    var e;
    return t.length > 1 && RM(t.slice(0, 2)) && (2 == t.length || "/" === (e = t.charAt(2)) || "\\" === e || "?" === e || "#" === e);
  }, LM = function (t) {
    var e = t.path, r = e.length;
    !r || "file" == t.scheme && 1 == r && RM(e[0], !0) || e.pop();
  }, FM = function (t) {
    return "." === t || "%2e" === t.toLowerCase();
  }, PM = {}, NM = {}, UM = {}, $M = {}, CM = {}, DM = {}, BM = {}, qM = {}, zM = {}, WM = {}, HM = {}, GM = {}, VM = {}, YM = {}, JM = {}, XM = {}, KM = {}, QM = {}, ZM = {}, tI = {}, eI = {}, rI = function (t, e, r, n) {
    var o, i, a, c, u, s = r || PM, f = 0, l = "", h = !1, p = !1, d = !1;
    for ((r || (t.scheme = "", t.username = "", t.password = "", t.host = null, t.port = null, t.path = [], t.query = null, t.fragment = null, t.cannotBeABaseURL = !1, e = e.replace(vM, "")), e = e.replace(yM, ""), o = YO(e)); f <= o.length; ) {
      switch ((i = o[f], s)) {
        case PM:
          if (!i || !cM.test(i)) {
            if (r) return oM;
            s = UM;
            continue;
          }
          (l += i.toLowerCase(), s = NM);
          break;
        case NM:
          if (i && (uM.test(i) || "+" == i || "-" == i || "." == i)) l += i.toLowerCase(); else {
            if (":" != i) {
              if (r) return oM;
              (l = "", s = UM, f = 0);
              continue;
            }
            if (r && (TM(t) != GO(OM, l) || "file" == l && (MM(t) || null !== t.port) || "file" == t.scheme && !t.host)) return;
            if ((t.scheme = l, r)) return void (TM(t) && OM[t.scheme] == t.port && (t.port = null));
            (l = "", "file" == t.scheme ? s = YM : TM(t) && n && n.scheme == t.scheme ? s = $M : TM(t) ? s = qM : "/" == o[f + 1] ? (s = CM, f++) : (t.cannotBeABaseURL = !0, t.path.push(""), s = ZM));
          }
          break;
        case UM:
          if (!n || n.cannotBeABaseURL && "#" != i) return oM;
          if (n.cannotBeABaseURL && "#" == i) {
            (t.scheme = n.scheme, t.path = n.path.slice(), t.query = n.query, t.fragment = "", t.cannotBeABaseURL = !0, s = eI);
            break;
          }
          s = "file" == n.scheme ? YM : DM;
          continue;
        case $M:
          if ("/" != i || "/" != o[f + 1]) {
            s = DM;
            continue;
          }
          (s = zM, f++);
          break;
        case CM:
          if ("/" == i) {
            s = WM;
            break;
          }
          s = QM;
          continue;
        case DM:
          if ((t.scheme = n.scheme, i == XT)) (t.username = n.username, t.password = n.password, t.host = n.host, t.port = n.port, t.path = n.path.slice(), t.query = n.query); else if ("/" == i || "\\" == i && TM(t)) s = BM; else if ("?" == i) (t.username = n.username, t.password = n.password, t.host = n.host, t.port = n.port, t.path = n.path.slice(), t.query = "", s = tI); else {
            if ("#" != i) {
              (t.username = n.username, t.password = n.password, t.host = n.host, t.port = n.port, t.path = n.path.slice(), t.path.pop(), s = QM);
              continue;
            }
            (t.username = n.username, t.password = n.password, t.host = n.host, t.port = n.port, t.path = n.path.slice(), t.query = n.query, t.fragment = "", s = eI);
          }
          break;
        case BM:
          if (!TM(t) || "/" != i && "\\" != i) {
            if ("/" != i) {
              (t.username = n.username, t.password = n.password, t.host = n.host, t.port = n.port, s = QM);
              continue;
            }
            s = WM;
          } else s = zM;
          break;
        case qM:
          if ((s = zM, "/" != i || "/" != l.charAt(f + 1))) continue;
          f++;
          break;
        case zM:
          if ("/" != i && "\\" != i) {
            s = WM;
            continue;
          }
          break;
        case WM:
          if ("@" == i) {
            (h && (l = "%40" + l), h = !0, a = YO(l));
            for (var g = 0; g < a.length; g++) {
              var v = a[g];
              if (":" != v || d) {
                var y = kM(v, AM);
                d ? t.password += y : t.username += y;
              } else d = !0;
            }
            l = "";
          } else if (i == XT || "/" == i || "?" == i || "#" == i || "\\" == i && TM(t)) {
            if (h && "" == l) return "Invalid authority";
            (f -= YO(l).length + 1, l = "", s = HM);
          } else l += i;
          break;
        case HM:
        case GM:
          if (r && "file" == t.scheme) {
            s = XM;
            continue;
          }
          if (":" != i || p) {
            if (i == XT || "/" == i || "?" == i || "#" == i || "\\" == i && TM(t)) {
              if (TM(t) && "" == l) return iM;
              if (r && "" == l && (MM(t) || null !== t.port)) return;
              if (c = mM(t, l)) return c;
              if ((l = "", s = KM, r)) return;
              continue;
            }
            ("[" == i ? p = !0 : "]" == i && (p = !1), l += i);
          } else {
            if ("" == l) return iM;
            if (c = mM(t, l)) return c;
            if ((l = "", s = VM, r == GM)) return;
          }
          break;
        case VM:
          if (!sM.test(i)) {
            if (i == XT || "/" == i || "?" == i || "#" == i || "\\" == i && TM(t) || r) {
              if ("" != l) {
                var m = parseInt(l, 10);
                if (m > 65535) return aM;
                (t.port = TM(t) && m === OM[t.scheme] ? null : m, l = "");
              }
              if (r) return;
              s = KM;
              continue;
            }
            return aM;
          }
          l += i;
          break;
        case YM:
          if ((t.scheme = "file", "/" == i || "\\" == i)) s = JM; else {
            if (!n || "file" != n.scheme) {
              s = QM;
              continue;
            }
            if (i == XT) (t.host = n.host, t.path = n.path.slice(), t.query = n.query); else if ("?" == i) (t.host = n.host, t.path = n.path.slice(), t.query = "", s = tI); else {
              if ("#" != i) {
                (jM(o.slice(f).join("")) || (t.host = n.host, t.path = n.path.slice(), LM(t)), s = QM);
                continue;
              }
              (t.host = n.host, t.path = n.path.slice(), t.query = n.query, t.fragment = "", s = eI);
            }
          }
          break;
        case JM:
          if ("/" == i || "\\" == i) {
            s = XM;
            break;
          }
          (n && "file" == n.scheme && !jM(o.slice(f).join("")) && (RM(n.path[0], !0) ? t.path.push(n.path[0]) : t.host = n.host), s = QM);
          continue;
        case XM:
          if (i == XT || "/" == i || "\\" == i || "?" == i || "#" == i) {
            if (!r && RM(l)) s = QM; else if ("" == l) {
              if ((t.host = "", r)) return;
              s = KM;
            } else {
              if (c = mM(t, l)) return c;
              if (("localhost" == t.host && (t.host = ""), r)) return;
              (l = "", s = KM);
            }
            continue;
          }
          l += i;
          break;
        case KM:
          if (TM(t)) {
            if ((s = QM, "/" != i && "\\" != i)) continue;
          } else if (r || "?" != i) if (r || "#" != i) {
            if (i != XT && (s = QM, "/" != i)) continue;
          } else (t.fragment = "", s = eI); else (t.query = "", s = tI);
          break;
        case QM:
          if (i == XT || "/" == i || "\\" == i && TM(t) || !r && ("?" == i || "#" == i)) {
            if ((".." === (u = (u = l).toLowerCase()) || "%2e." === u || ".%2e" === u || "%2e%2e" === u ? (LM(t), "/" == i || "\\" == i && TM(t) || t.path.push("")) : FM(l) ? "/" == i || "\\" == i && TM(t) || t.path.push("") : ("file" == t.scheme && !t.path.length && RM(l) && (t.host && (t.host = ""), l = l.charAt(0) + ":"), t.path.push(l)), l = "", "file" == t.scheme && (i == XT || "?" == i || "#" == i))) for (; t.path.length > 1 && "" === t.path[0]; ) t.path.shift();
            "?" == i ? (t.query = "", s = tI) : "#" == i && (t.fragment = "", s = eI);
          } else l += kM(i, xM);
          break;
        case ZM:
          "?" == i ? (t.query = "", s = tI) : "#" == i ? (t.fragment = "", s = eI) : i != XT && (t.path[0] += kM(i, _M));
          break;
        case tI:
          r || "#" != i ? i != XT && ("'" == i && TM(t) ? t.query += "%27" : t.query += "#" == i ? "%23" : kM(i, _M)) : (t.fragment = "", s = eI);
          break;
        case eI:
          i != XT && (t.fragment += kM(i, SM));
      }
      f++;
    }
  }, nI = function (t) {
    var e, r, n = HO(this, nI, "URL"), o = arguments.length > 1 ? arguments[1] : void 0, i = String(t), a = tM(n, {
      type: "URL"
    });
    if (void 0 !== o) if (o instanceof nI) e = eM(o); else if (r = rI(e = {}, String(o))) throw TypeError(r);
    if (r = rI(a, i, null, e)) throw TypeError(r);
    var c = a.searchParams = new QT(), u = ZT(c);
    (u.updateSearchParams(a.query), u.updateURL = function () {
      a.query = String(c) || null;
    }, CO || (n.href = iI.call(n), n.origin = aI.call(n), n.protocol = cI.call(n), n.username = uI.call(n), n.password = sI.call(n), n.host = fI.call(n), n.hostname = lI.call(n), n.port = hI.call(n), n.pathname = pI.call(n), n.search = dI.call(n), n.searchParams = gI.call(n), n.hash = vI.call(n)));
  }, oI = nI.prototype, iI = function () {
    var t = eM(this), e = t.scheme, r = t.username, n = t.password, o = t.host, i = t.port, a = t.path, c = t.query, u = t.fragment, s = e + ":";
    return (null !== o ? (s += "//", MM(t) && (s += r + (n ? ":" + n : "") + "@"), s += EM(o), null !== i && (s += ":" + i)) : "file" == e && (s += "//"), s += t.cannotBeABaseURL ? a[0] : a.length ? "/" + a.join("/") : "", null !== c && (s += "?" + c), null !== u && (s += "#" + u), s);
  }, aI = function () {
    var t = eM(this), e = t.scheme, r = t.port;
    if ("blob" == e) try {
      return new nI(e.path[0]).origin;
    } catch (t) {
      return "null";
    }
    return "file" != e && TM(t) ? e + "://" + EM(t.host) + (null !== r ? ":" + r : "") : "null";
  }, cI = function () {
    return eM(this).scheme + ":";
  }, uI = function () {
    return eM(this).username;
  }, sI = function () {
    return eM(this).password;
  }, fI = function () {
    var t = eM(this), e = t.host, r = t.port;
    return null === e ? "" : null === r ? EM(e) : EM(e) + ":" + r;
  }, lI = function () {
    var t = eM(this).host;
    return null === t ? "" : EM(t);
  }, hI = function () {
    var t = eM(this).port;
    return null === t ? "" : String(t);
  }, pI = function () {
    var t = eM(this), e = t.path;
    return t.cannotBeABaseURL ? e[0] : e.length ? "/" + e.join("/") : "";
  }, dI = function () {
    var t = eM(this).query;
    return t ? "?" + t : "";
  }, gI = function () {
    return eM(this).searchParams;
  }, vI = function () {
    var t = eM(this).fragment;
    return t ? "#" + t : "";
  }, yI = function (t, e) {
    return {
      get: t,
      set: e,
      configurable: !0,
      enumerable: !0
    };
  };
  if ((CO && zO(oI, {
    href: yI(iI, function (t) {
      var e = eM(this), r = String(t), n = rI(e, r);
      if (n) throw TypeError(n);
      ZT(e.searchParams).updateSearchParams(e.query);
    }),
    origin: yI(aI),
    protocol: yI(cI, function (t) {
      var e = eM(this);
      rI(e, String(t) + ":", PM);
    }),
    username: yI(uI, function (t) {
      var e = eM(this), r = YO(String(t));
      if (!IM(e)) {
        e.username = "";
        for (var n = 0; n < r.length; n++) e.username += kM(r[n], AM);
      }
    }),
    password: yI(sI, function (t) {
      var e = eM(this), r = YO(String(t));
      if (!IM(e)) {
        e.password = "";
        for (var n = 0; n < r.length; n++) e.password += kM(r[n], AM);
      }
    }),
    host: yI(fI, function (t) {
      var e = eM(this);
      e.cannotBeABaseURL || rI(e, String(t), HM);
    }),
    hostname: yI(lI, function (t) {
      var e = eM(this);
      e.cannotBeABaseURL || rI(e, String(t), GM);
    }),
    port: yI(hI, function (t) {
      var e = eM(this);
      IM(e) || ("" == (t = String(t)) ? e.port = null : rI(e, t, VM));
    }),
    pathname: yI(pI, function (t) {
      var e = eM(this);
      e.cannotBeABaseURL || (e.path = [], rI(e, t + "", KM));
    }),
    search: yI(dI, function (t) {
      var e = eM(this);
      ("" == (t = String(t)) ? e.query = null : ("?" == t.charAt(0) && (t = t.slice(1)), e.query = "", rI(e, t, tI)), ZT(e.searchParams).updateSearchParams(e.query));
    }),
    searchParams: yI(gI),
    hash: yI(vI, function (t) {
      var e = eM(this);
      "" != (t = String(t)) ? ("#" == t.charAt(0) && (t = t.slice(1)), e.fragment = "", rI(e, t, eI)) : e.fragment = null;
    })
  }), WO(oI, "toJSON", function () {
    return iI.call(this);
  }, {
    enumerable: !0
  }), WO(oI, "toString", function () {
    return iI.call(this);
  }, {
    enumerable: !0
  }), KT)) {
    var mI = KT.createObjectURL, bI = KT.revokeObjectURL;
    (mI && WO(nI, "createObjectURL", function (t) {
      return mI.apply(KT, arguments);
    }), bI && WO(nI, "revokeObjectURL", function (t) {
      return bI.apply(KT, arguments);
    }));
  }
  (aT(nI, "URL"), $O({
    global: !0,
    forced: !qO,
    sham: !CO
  }, {
    URL: nI
  }), o({
    target: "URL",
    proto: !0,
    enumerable: !0
  }, {
    toJSON: function () {
      return URL.prototype.toString.call(this);
    }
  }), $9f8a9ae74851dc3b68b52022a3e4c5c9$exports = ve);
  var wI = (function (t) {
    var e, r = Object.prototype, n = r.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", c = o.toStringTag || "@@toStringTag";
    function u(t, e, r) {
      return (Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), t[e]);
    }
    try {
      u({}, "");
    } catch (t) {
      u = function (t, e, r) {
        return t[e] = r;
      };
    }
    function s(t, e, r, n) {
      var o = e && e.prototype instanceof v ? e : v, i = Object.create(o.prototype), a = new T(n || []);
      return (i._invoke = (function (t, e, r) {
        var n = l;
        return function (o, i) {
          if (n === p) throw new Error("Generator is already running");
          if (n === d) {
            if ("throw" === o) throw i;
            return I();
          }
          for ((r.method = o, r.arg = i); ; ) {
            var a = r.delegate;
            if (a) {
              var c = A(a, r);
              if (c) {
                if (c === g) continue;
                return c;
              }
            }
            if ("next" === r.method) r.sent = r._sent = r.arg; else if ("throw" === r.method) {
              if (n === l) throw (n = d, r.arg);
              r.dispatchException(r.arg);
            } else "return" === r.method && r.abrupt("return", r.arg);
            n = p;
            var u = f(t, e, r);
            if ("normal" === u.type) {
              if ((n = r.done ? d : h, u.arg === g)) continue;
              return {
                value: u.arg,
                done: r.done
              };
            }
            "throw" === u.type && (n = d, r.method = "throw", r.arg = u.arg);
          }
        };
      })(t, r, a), i);
    }
    function f(t, e, r) {
      try {
        return {
          type: "normal",
          arg: t.call(e, r)
        };
      } catch (t) {
        return {
          type: "throw",
          arg: t
        };
      }
    }
    t.wrap = s;
    var l = "suspendedStart", h = "suspendedYield", p = "executing", d = "completed", g = {};
    function v() {}
    function y() {}
    function m() {}
    var b = {};
    b[i] = function () {
      return this;
    };
    var w = Object.getPrototypeOf, E = w && w(w(M([])));
    E && E !== r && n.call(E, i) && (b = E);
    var _ = m.prototype = v.prototype = Object.create(b);
    function S(t) {
      ["next", "throw", "return"].forEach(function (e) {
        u(t, e, function (t) {
          return this._invoke(e, t);
        });
      });
    }
    function x(t, e) {
      function r(o, i, a, c) {
        var u = f(t[o], t, i);
        if ("throw" !== u.type) {
          var s = u.arg, l = s.value;
          return l && "object" == typeof l && n.call(l, "__await") ? e.resolve(l.__await).then(function (t) {
            r("next", t, a, c);
          }, function (t) {
            r("throw", t, a, c);
          }) : e.resolve(l).then(function (t) {
            (s.value = t, a(s));
          }, function (t) {
            return r("throw", t, a, c);
          });
        }
        c(u.arg);
      }
      var o;
      this._invoke = function (t, n) {
        function i() {
          return new e(function (e, o) {
            r(t, n, e, o);
          });
        }
        return o = o ? o.then(i, i) : i();
      };
    }
    function A(t, r) {
      var n = t.iterator[r.method];
      if (n === e) {
        if ((r.delegate = null, "throw" === r.method)) {
          if (t.iterator.return && (r.method = "return", r.arg = e, A(t, r), "throw" === r.method)) return g;
          (r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method"));
        }
        return g;
      }
      var o = f(n, t.iterator, r.arg);
      if ("throw" === o.type) return (r.method = "throw", r.arg = o.arg, r.delegate = null, g);
      var i = o.arg;
      return i ? i.done ? (r[t.resultName] = i.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next", r.arg = e), r.delegate = null, g) : i : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, g);
    }
    function k(t) {
      var e = {
        tryLoc: t[0]
      };
      ((1 in t) && (e.catchLoc = t[1]), (2 in t) && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e));
    }
    function O(t) {
      var e = t.completion || ({});
      (e.type = "normal", delete e.arg, t.completion = e);
    }
    function T(t) {
      (this.tryEntries = [{
        tryLoc: "root"
      }], t.forEach(k, this), this.reset(!0));
    }
    function M(t) {
      if (t) {
        var r = t[i];
        if (r) return r.call(t);
        if ("function" == typeof t.next) return t;
        if (!isNaN(t.length)) {
          var o = -1, a = function r() {
            for (; ++o < t.length; ) if (n.call(t, o)) return (r.value = t[o], r.done = !1, r);
            return (r.value = e, r.done = !0, r);
          };
          return a.next = a;
        }
      }
      return {
        next: I
      };
    }
    function I() {
      return {
        value: e,
        done: !0
      };
    }
    return (y.prototype = _.constructor = m, m.constructor = y, y.displayName = u(m, c, "GeneratorFunction"), t.isGeneratorFunction = function (t) {
      var e = "function" == typeof t && t.constructor;
      return !!e && (e === y || "GeneratorFunction" === (e.displayName || e.name));
    }, t.mark = function (t) {
      return (Object.setPrototypeOf ? Object.setPrototypeOf(t, m) : (t.__proto__ = m, u(t, c, "GeneratorFunction")), t.prototype = Object.create(_), t);
    }, t.awrap = function (t) {
      return {
        __await: t
      };
    }, S(x.prototype), x.prototype[a] = function () {
      return this;
    }, t.AsyncIterator = x, t.async = function (e, r, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new x(s(e, r, n, o), i);
      return t.isGeneratorFunction(r) ? a : a.next().then(function (t) {
        return t.done ? t.value : a.next();
      });
    }, S(_), u(_, c, "Generator"), _[i] = function () {
      return this;
    }, _.toString = function () {
      return "[object Generator]";
    }, t.keys = function (t) {
      var e = [];
      for (var r in t) e.push(r);
      return (e.reverse(), function r() {
        for (; e.length; ) {
          var n = e.pop();
          if ((n in t)) return (r.value = n, r.done = !1, r);
        }
        return (r.done = !0, r);
      });
    }, t.values = M, T.prototype = {
      constructor: T,
      reset: function (t) {
        if ((this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(O), !t)) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e);
      },
      stop: function () {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ("throw" === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function (t) {
        if (this.done) throw t;
        var r = this;
        function o(n, o) {
          return (c.type = "throw", c.arg = t, r.next = n, o && (r.method = "next", r.arg = e), !!o);
        }
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var a = this.tryEntries[i], c = a.completion;
          if ("root" === a.tryLoc) return o("end");
          if (a.tryLoc <= this.prev) {
            var u = n.call(a, "catchLoc"), s = n.call(a, "finallyLoc");
            if (u && s) {
              if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
              if (this.prev < a.finallyLoc) return o(a.finallyLoc);
            } else if (u) {
              if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
            } else {
              if (!s) throw new Error("try statement without catch or finally");
              if (this.prev < a.finallyLoc) return o(a.finallyLoc);
            }
          }
        }
      },
      abrupt: function (t, e) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var o = this.tryEntries[r];
          if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
            var i = o;
            break;
          }
        }
        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
        var a = i ? i.completion : {};
        return (a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, g) : this.complete(a));
      },
      complete: function (t, e) {
        if ("throw" === t.type) throw t.arg;
        return ("break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), g);
      },
      finish: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.finallyLoc === t) return (this.complete(r.completion, r.afterLoc), O(r), g);
        }
      },
      catch: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.tryLoc === t) {
            var n = r.completion;
            if ("throw" === n.type) {
              var o = n.arg;
              O(r);
            }
            return o;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function (t, r, n) {
        return (this.delegate = {
          iterator: M(t),
          resultName: r,
          nextLoc: n
        }, "next" === this.method && (this.arg = e), g);
      }
    }, t);
  })({});
  try {
    regeneratorRuntime = wI;
  } catch (t) {
    Function("r", "regeneratorRuntime = r")(wI);
  }
  const EI = async function (t, e) {
    const r = JSON.stringify(e), n = e ? fetch(t, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: r
    }) : fetch(t), o = await Promise.race([n, (i = 10, new Promise(function (t, e) {
      setTimeout(function () {
        e(new Error(`Request took too long! Timeout after ${i} second`));
      }, 1e3 * i);
    }))]);
    var i;
    console.log(o);
    const a = await o.json();
    if ((console.log(a), !o.ok)) throw new Error(a.message);
    return a;
  }, _I = {
    recipe: {},
    search: {
      query: "",
      results: [],
      currentPage: 0
    },
    bookmarks: []
  }, SI = function (t) {
    return (_I.search.currentPage = t, _I.search.results.slice(10 * (t - 1), 10 * t));
  }, xI = function () {
    localStorage.setItem("bookmarks", JSON.stringify(_I.bookmarks));
  }, AI = function (t) {
    (_I.bookmarks.push(t), t.id === _I.recipe.id && (_I.recipe.bookmarked = !0, xI()));
  }, kI = function (t) {
    return (console.log("Creating recipe object:"), console.log(t), {
      id: t.id,
      publisher: t.publisher,
      sourceUrl: t.source_url,
      imageUrl: t.image_url,
      title: t.title,
      servings: t.servings,
      cookingTine: t.cooking_time,
      ingredients: t.ingredients,
      ...t.key && ({
        key: t.key
      })
    });
  };
  !(function () {
    localStorage.removeItem("bookmarks");
    const t = localStorage.getItem("bookmarks");
    (console.log(t), t && (_I.bookmarks = JSON.parse(t)));
  })();
  var OI = null;
  var TI, MI = function () {
    return (OI || (OI = (function () {
      try {
        throw new Error();
      } catch (e) {
        var t = ("" + e.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (t) return ("" + t[0]).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, "$1") + "/";
      }
      return "/";
    })()), OI);
  }, II = n;
  function RI(t) {
    if ("" === t) return ".";
    var e = "/" === t[t.length - 1] ? t.slice(0, t.length - 1) : t, r = e.lastIndexOf("/");
    return -1 === r ? "." : e.slice(0, r);
  }
  function jI(t, e) {
    if (t === e) return "";
    var r = t.split("/");
    "." === r[0] && r.shift();
    var n, o, i = e.split("/");
    for (("." === i[0] && i.shift(), n = 0); (n < i.length || n < r.length) && null == o; n++) r[n] !== i[n] && (o = n);
    var a = [];
    for (n = 0; n < r.length - o; n++) a.push("..");
    return (i.length > o && a.push.apply(a, i.slice(o)), a.join("/"));
  }
  ((TI = function (t, e) {
    return jI(RI(II(t)), II(e));
  })._dirname = RI, TI._relative = jI);
  var LI, FI, PI = e(MI() + TI("6bqnG", "3ZwVs"));
  class NI {
    _data;
    _parentElement;
    _errorMessage = "";
    _message = "";
    render(t, e = !0) {
      if ((console.log("" + (e ? "rendering" : "returning")), !t || Array.isArray(t) && 0 === t.length)) return this.renderError();
      this._data = t;
      const r = this._generateMarkup();
      if (!e) return r;
      (this._clear(), this._parentElement.insertAdjacentHTML("afterbegin", r));
    }
    update(t) {
      if (!t || Array.isArray(t) && 0 === t.length) return this.renderError();
      this._data = t;
      const e = this._generateMarkup(), r = document.createRange().createContextualFragment(e), n = Array.from(r.querySelectorAll("*")), o = Array.from(this._parentElement.querySelectorAll("*"));
      if (!o?.length !== n.length) return this.render(t);
      n.forEach((t, e) => {
        const r = o[e];
        r.isEqualNode(t) || (Array.from(t.attributes).forEach(t => {
          r.setAttribute(t.name, t.value);
        }), r.firstElementChild || (r.textContent = t.textContent));
      });
    }
    renderSpinner = function () {
      const t = `<div class="spinner" id="spinner">\n                <svg>\n                    <use href="${PI}#icon-loader"></use>\n                </svg>\n            </div>`;
      (this._clear(), this._parentElement.insertAdjacentHTML("afterbegin", t));
    };
    renderError(t = this._errorMessage) {
      const e = `<div class="error">\n                <div>\n                <svg>\n                    <use href="${PI}#icon-alert-triangle"></use>\n                </svg>\n                </div>\n                <p>${t}</p>\n            </div>`;
      (this._clear(), this._parentElement.insertAdjacentHTML("afterbegin", e));
    }
    renderMessage(t = this._message) {
      const e = `<div class="message">\n                <div>\n                <svg>\n                    <use href="${PI}#icon-smile"></use>\n                </svg>\n                </div>\n                <p>${t}</p>\n            </div>`;
      (this._clear(), this._parentElement.insertAdjacentHTML("afterbegin", e));
    }
    _clear() {
      this._parentElement.innerHTML = "";
    }
  }
  (Fraction = function (t, e) {
    if (void 0 !== t && e) "number" == typeof t && "number" == typeof e ? (this.numerator = t, this.denominator = e) : "string" == typeof t && "string" == typeof e && (this.numerator = parseInt(t), this.denominator = parseInt(e)); else if (void 0 === e) if ((num = t, "number" == typeof num)) (this.numerator = num, this.denominator = 1); else if ("string" == typeof num) {
      var r, n, o = num.split(" ");
      if ((o[0] && (r = o[0]), o[1] && (n = o[1]), r % 1 == 0 && n && n.match("/"))) return new Fraction(r).add(new Fraction(n));
      if (!r || n) return;
      if ("string" == typeof r && r.match("/")) {
        var i = r.split("/");
        (this.numerator = i[0], this.denominator = i[1]);
      } else {
        if ("string" == typeof r && r.match(".")) return new Fraction(parseFloat(r));
        (this.numerator = parseInt(r), this.denominator = 1);
      }
    }
    this.normalize();
  }, Fraction.prototype.clone = function () {
    return new Fraction(this.numerator, this.denominator);
  }, Fraction.prototype.toString = function () {
    if ("NaN" === this.denominator) return "NaN";
    var t = this.numerator / this.denominator > 0 ? Math.floor(this.numerator / this.denominator) : Math.ceil(this.numerator / this.denominator), e = this.numerator % this.denominator, r = this.denominator, n = [];
    return (0 != t && n.push(t), 0 != e && n.push((0 === t ? e : Math.abs(e)) + "/" + r), n.length > 0 ? n.join(" ") : 0);
  }, Fraction.prototype.rescale = function (t) {
    return (this.numerator *= t, this.denominator *= t, this);
  }, Fraction.prototype.add = function (t) {
    var e = this.clone();
    return (t = t instanceof Fraction ? t.clone() : new Fraction(t), td = e.denominator, e.rescale(t.denominator), t.rescale(td), e.numerator += t.numerator, e.normalize());
  }, Fraction.prototype.subtract = function (t) {
    var e = this.clone();
    return (t = t instanceof Fraction ? t.clone() : new Fraction(t), td = e.denominator, e.rescale(t.denominator), t.rescale(td), e.numerator -= t.numerator, e.normalize());
  }, Fraction.prototype.multiply = function (t) {
    var e = this.clone();
    if (t instanceof Fraction) (e.numerator *= t.numerator, e.denominator *= t.denominator); else {
      if ("number" != typeof t) return e.multiply(new Fraction(t));
      e.numerator *= t;
    }
    return e.normalize();
  }, Fraction.prototype.divide = function (t) {
    var e = this.clone();
    if (t instanceof Fraction) (e.numerator *= t.denominator, e.denominator *= t.numerator); else {
      if ("number" != typeof t) return e.divide(new Fraction(t));
      e.denominator *= t;
    }
    return e.normalize();
  }, Fraction.prototype.equals = function (t) {
    t instanceof Fraction || (t = new Fraction(t));
    var e = this.clone().normalize();
    t = t.clone().normalize();
    return e.numerator === t.numerator && e.denominator === t.denominator;
  }, Fraction.prototype.normalize = (LI = function (t) {
    return "number" == typeof t && (t > 0 && t % 1 > 0 && t % 1 < 1 || t < 0 && t % -1 < 0 && t % -1 > -1);
  }, FI = function (t, e) {
    if (e) {
      var r = Math.pow(10, e);
      return Math.round(t * r) / r;
    }
    return Math.round(t);
  }, function () {
    if (LI(this.denominator)) {
      var t = FI(this.denominator, 9), e = Math.pow(10, t.toString().split(".")[1].length);
      (this.denominator = Math.round(this.denominator * e), this.numerator *= e);
    }
    LI(this.numerator) && (t = FI(this.numerator, 9), e = Math.pow(10, t.toString().split(".")[1].length), this.numerator = Math.round(this.numerator * e), this.denominator *= e);
    var r = Fraction.gcf(this.numerator, this.denominator);
    return (this.numerator /= r, this.denominator /= r, (this.numerator < 0 && this.denominator < 0 || this.numerator > 0 && this.denominator < 0) && (this.numerator *= -1, this.denominator *= -1), this);
  }), Fraction.gcf = function (t, e) {
    var r = [], n = Fraction.primeFactors(t), o = Fraction.primeFactors(e);
    return (n.forEach(function (t) {
      var e = o.indexOf(t);
      e >= 0 && (r.push(t), o.splice(e, 1));
    }), 0 === r.length ? 1 : (function () {
      var t, e = r[0];
      for (t = 1; t < r.length; t++) e *= r[t];
      return e;
    })());
  }, Fraction.primeFactors = function (t) {
    for (var e = Math.abs(t), r = [], n = 2; n * n <= e; ) e % n == 0 ? (r.push(n), e /= n) : n++;
    return (1 != e && r.push(e), r);
  });
  var UI = Fraction;
  var $I = new (class extends NI {
    _parentElement = document.getElementById("recipe");
    _errorMessage = "We could not find that recipe. Please try another one!";
    _message = "";
    addHandlerRenderer(t) {
      ["hashchange", "load"].forEach(e => {
        window.addEventListener(e, t);
      });
    }
    addHandlerServingsChange(t) {
      this._parentElement.addEventListener("click", function (e) {
        e.preventDefault();
        const r = e.target.closest(".btn--increase-servings");
        r && t(r.dataset.servings);
      });
    }
    addHandlerBookmark(t) {
      this._parentElement.addEventListener("click", function (e) {
        e.preventDefault();
        e.target.closest(".btn-bookmark") && t();
      });
    }
    _generateMarkup() {
      return (console.log("recipe data:"), console.log(this._data), `<figure class="recipe__fig">\n            <img src="${this._data.imageUrl}" alt="${this._data.title}" class="recipe__img" />\n            <h1 class="recipe__title">\n            <span>${this._data.title}</span>\n            </h1>\n        </figure>\n\n        <div class="recipe__details">\n            <div class="recipe__info">\n                <svg class="recipe__info-icon">\n                    <use href="${PI}#icon-clock"></use>\n                </svg>\n                <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTine}</span>\n                <span class="recipe__info-text">minutes</span>\n            </div>\n            <div class="recipe__info">\n                <svg class="recipe__info-icon">\n                    <use href="${PI}#icon-users"></use>\n                </svg>\n                <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>\n                <span class="recipe__info-text">servings</span>\n\n                <div class="recipe__info-buttons" id="servings-btns">\n                    <button class="btn--tiny btn--increase-servings" data-servings="${Number(this._data.servings) - 1}">\n                    <svg>\n                        <use href="${PI}#icon-minus-circle"></use>\n                    </svg>\n                    </button>\n                    <button class="btn--tiny btn--increase-servings" data-servings="${Number(this._data.servings) + 1}">\n                        <svg>\n                            <use href="${PI}#icon-plus-circle"></use>\n                        </svg>\n                    </button>\n                </div>\n            </div>\n\n            <div class="preview__user-generated ${this._data.key ? "" : "hidden"}">\n              <svg>\n              <use href="${PI}#icon-user"></use>\n              </svg>\n            </div>          \n            <button class="btn--round btn-bookmark">\n                <svg class="">\n                    <use href="${PI}#icon-bookmark${this._data?.bookmarked ? "-fill" : ""}"></use>\n                </svg>\n            </button>\n        </div>\n\n        <div class="recipe__ingredients">\n            <h2 class="heading--2">Recipe ingredients</h2>\n            <ul class="recipe__ingredient-list">\n                ${this._data.ingredients.map(t => this._generateIngretiendMarkup(t)).join()}        \n            </ul>\n        </div>\n\n        <div class="recipe__directions">\n            <h2 class="heading--2">How to cook it</h2>\n            <p class="recipe__directions-text">\n                This recipe was carefully designed and tested by\n                <span class="recipe__publisher">${this._data.publisher}</span>. Please check out\n                directions at their website.\n            </p>\n            <a class="btn--small recipe__btn" href="${this._data.sourceUrl}" target="_blank">\n            <span>Directions</span>\n            <svg class="search__icon">\n                <use href="${PI}#icon-arrow-right"></use>\n            </svg>\n            </a>\n        </div>`);
    }
    _generateIngretiendMarkup(t) {
      return `<li class="recipe__ingredient">\n            <svg class="recipe__icon">\n                <use href="src/img/icons.svg#icon-check"></use>\n            </svg>\n            <div class="recipe__quantity">${t.quantity ? new UI(t.quantity).toString() : ""}</div>\n            <div class="recipe__description">\n                <span class="recipe__unit">${t.unit}</span>\n                ${t.description}\n            </div>\n        </li>`;
    }
  })();
  var CI = new (class {
    _parentElement = document.getElementById("searchForm");
    _inputField = this._parentElement.querySelector("#searchField");
    getQuery() {
      return this._inputField.value;
    }
    clearInput() {
      this._inputField.value = "";
    }
    addHandlerSearch(t) {
      this._parentElement.addEventListener("submit", function (e) {
        (e.preventDefault(), t());
      });
    }
    init() {
      this._parentElement;
    }
  })();
  var DI = new (class extends class {
    _data;
    _parentElement;
    _errorMessage = "";
    _message = "";
    render(t, e = !0) {
      if ((console.log("" + (e ? "rendering" : "returning")), !t || Array.isArray(t) && 0 === t.length)) return this.renderError();
      this._data = t;
      const r = this._generateMarkup();
      if (!e) return r;
      (this._clear(), this._parentElement.insertAdjacentHTML("afterbegin", r));
    }
    update(t) {
      if (!t || Array.isArray(t) && 0 === t.length) return this.renderError();
      this._data = t;
      const e = this._generateMarkup(), r = document.createRange().createContextualFragment(e), n = Array.from(r.querySelectorAll("*")), o = Array.from(this._parentElement.querySelectorAll("*"));
      (console.log(n), console.log(o), n.forEach((t, e) => {
        const r = o[e];
        r.isEqualNode(t) || (Array.from(t.attributes).forEach(t => {
          r.setAttribute(t.name, t.value);
        }), r.firstElementChild || (r.textContent = t.textContent));
      }));
    }
    renderSpinner = function () {
      const t = `<div class="spinner" id="spinner">\n                <svg>\n                    <use href="${PI}#icon-loader"></use>\n                </svg>\n            </div>`;
      (this._clear(), this._parentElement.insertAdjacentHTML("afterbegin", t));
    };
    renderError(t = this._errorMessage) {
      const e = `<div class="error">\n                <div>\n                <svg>\n                    <use href="${PI}#icon-alert-triangle"></use>\n                </svg>\n                </div>\n                <p>${t}</p>\n            </div>`;
      (this._clear(), this._parentElement.insertAdjacentHTML("afterbegin", e));
    }
    renderMessage(t = this._message) {
      const e = `<div class="message">\n                <div>\n                <svg>\n                    <use href="${PI}#icon-smile"></use>\n                </svg>\n                </div>\n                <p>${t}</p>\n            </div>`;
      (this._clear(), this._parentElement.insertAdjacentHTML("afterbegin", e));
    }
    _clear() {
      this._parentElement.innerHTML = "";
    }
  } {
    _parentElement = "";
    _generateMarkup() {
      const t = window.location.hash.slice(1);
      return `\n      <li class="preview">\n        <a class="preview__link ${this._data.id === t ? "preview__link--active" : ""}" href="#${this._data.id}">\n          <figure class="preview__fig">\n            <img src="${this._data.imageUrl}" alt="${this._data.title}" />\n          </figure>\n          <div class="preview__data">\n            <h4 class="preview__title">${this._data.title}</h4>\n            <p class="preview__publisher">${this._data.publisher}</p>\n            <div class="preview__user-generated ${this._data.key ? "" : "hidden"}">\n              <svg>\n              <use href="${PI}#icon-user"></use>\n              </svg>\n            </div>\n          </div>\n        </a>\n      </li>\n    `;
    }
  })();
  var BI = new (class extends NI {
    _parentElement = document.getElementById("results");
    _errorMessage = "We could not find anything for your search query. Please try something else!";
    _message = "";
    _generateMarkup() {
      return this._data.map(t => DI.render(t, !1)).join();
    }
    _renderResult(t, e) {
      return `<li class="preview">\n        <a class="preview__link ${e === t.id ? "preview__link--active" : ""}" href="#${t.id}">\n          <figure class="preview__fig">\n            <img src="${t.imageUrl}" alt="Test" />\n          </figure>\n          <div class="preview__data">\n            <h4 class="preview__title">${t.title}</h4>\n            <p class="preview__publisher">${t.publisher}</p>\n          </div>\n        </a>\n      </li>`;
    }
  })();
  var qI = new (class extends NI {
    _parentElement = document.getElementById("pagination");
    _generateMarkup() {
      const t = Math.ceil(this._data.results.length / 10);
      return (console.log(`Rendering pagination: currentPage = ${this._data.currentPage}, totalPages = ${t}`), `${this._data.currentPage > 1 ? this._generatePrevious(Number(this._data.currentPage) - 1) : ""}\n                ${this._data.currentPage < t && t > 1 ? this._generateNext(Number(this._data.currentPage) + 1) : ""}`);
    }
    _generatePrevious(t) {
      return `<button class="btn--inline pagination__btn--prev" id="btn--prev" data-goto="${t}">\n            <svg class="search__icon">\n            <use href="${PI}#icon-arrow-left"></use>\n            </svg>\n            <span>Page ${t}</span>\n        </button>`;
    }
    _generateNext(t) {
      return `<button class="btn--inline pagination__btn--next" id="btn--next" data-goto="${t}">\n            <span>Page ${t}</span>\n            <svg class="search__icon">\n            <use href="${PI}#icon-arrow-right"></use>\n            </svg>\n        </button>`;
    }
    addHandlerClick(t) {
      this._parentElement.addEventListener("click", function (e) {
        e.preventDefault();
        const r = e.target.closest(".btn--inline");
        (console.log(`${r} - ${r.dataset.goto}`), t(r.dataset.goto));
      });
    }
  })();
  var zI = new (class extends NI {
    _parentElement = document.getElementById("bookmarks__list");
    _errorMessage = "We could not find anything for your search query. Please try something else!";
    _message = "";
    addHanderRender(t) {
      window.addEventListener("load", t());
    }
    _generateMarkup() {
      return this._data.map(t => DI.render(t, !1)).join();
    }
  })();
  var WI = new (class extends NI {
    _parentElement = document.getElementById("upload");
    _window = document.getElementById("add-recipe-window");
    _overlay = document.getElementById("overlay");
    _btnOpen = document.querySelector(".nav__btn--add-recipe");
    _btnClose = document.querySelector(".btn--close-modal");
    _errorMessage = "";
    _message = "";
    constructor() {
      (super(), this._addHandlerShowWindow(), this._addHandlerCloseWindow());
    }
    _addHandlerShowWindow() {
      this._btnOpen.addEventListener("click", this._toggleWindow.bind(this));
    }
    _addHandlerCloseWindow() {
      this._btnClose.addEventListener("click", this._toggleWindow.bind(this));
    }
    addHandlerSubmit(t) {
      this._parentElement.addEventListener("submit", function (e) {
        e.preventDefault();
        const r = [...new FormData(this)];
        t(Object.fromEntries(r));
      });
    }
    _toggleWindow() {
      (this._overlay.classList.toggle("hidden"), this._window.classList.toggle("hidden"));
    }
    _generateMarkup() {}
  })();
  const HI = async function () {
    const t = window.location.hash.slice(1);
    if (t) {
      ($I.renderSpinner(), _I.search.results?.length > 0 && BI.update(SI(_I.search.currentPage)));
      try {
        await (async function (t) {
          const e = await EI(`https://forkify-api.herokuapp.com/api/v2/recipes/${t}`);
          console.log(e.data);
          const {recipe: r} = e.data;
          (_I.recipe = kI(r), _I.bookmarks.some(e => e.id === t) ? _I.recipe.bookmarked = !0 : _I.recipe.bookmarked = !1, console.log(_I.recipe));
        })(t);
        const e = _I.recipe;
        (console.log(`recipe = ${e}`), $I.render(e), zI.update(_I.bookmarks));
      } catch (t) {
        (console.log(t), $I.renderError());
      }
    }
  }, GI = async function () {
    const t = CI.getQuery();
    if (t) {
      BI.renderSpinner();
      try {
        (await (async function (t) {
          const e = await EI(`https://forkify-api.herokuapp.com/api/v2/recipes/?search=${t}&key=bc18ede1-08f7-4e9e-ad2e-3e9f109ec7d5`);
          _I.search = {
            query: t,
            results: e.data.recipes.map(t => ({
              id: t.id,
              publisher: t.publisher,
              sourceUrl: t.source_url,
              imageUrl: t.image_url,
              title: t.title,
              ...t.key && ({
                key: t.key
              })
            }))
          };
        })(t), CI.clearInput(), console.log(`STATE = ${_I.search}`));
        const e = SI(1);
        (BI.render(e), qI.render(_I.search));
      } catch (t) {
        (console.log(t), BI.renderError());
      }
    }
  }, VI = function (t) {
    const e = SI(t);
    (BI.render(e), qI.render(_I.search));
  }, YI = function (t) {
    (!(function (t) {
      if (t < 1) return;
      const e = _I.recipe.servings;
      (_I.recipe.servings = t, _I.recipe.ingredients.forEach(r => {
        (r.quantity = Number(r.quantity) / e * t, console.log(r));
      }));
    })(t), $I.update(_I.recipe));
  }, JI = function () {
    var t;
    (_I.recipe.bookmarked ? (t = _I.recipe.id, _I.bookmarks.some(e => e.id === t) && (_I.bookmarks.splice(_I.bookmarks.findIndex(e => e.id === t)), _I.recipe.bookmarked = !1, xI())) : AI(_I.recipe), $I.update(_I.recipe), zI.update(_I.bookmarks));
  }, XI = function () {
    zI.render(_I.bookmarks);
  }, KI = async function (t) {
    console.log(t);
    try {
      (await (async function (t) {
        const e = {
          publisher: t.publisher,
          source_url: t.sourceUrl,
          image_url: t.image,
          title: t.title,
          servings: t.servings,
          cooking_time: t.cookingTime,
          ingredients: Object.entries(t).filter(t => t[0].startsWith("ingredient") && t[1]).map(t => {
            const e = t[1].split(",").map(t => t.trim());
            if (3 !== e.length) throw new Error("'Wrong ingredient fromat! Please use the correct format :)'");
            const [r, n, o] = e;
            return {
              quantity: r ? +r : null,
              unit: n,
              description: o
            };
          })
        }, r = await EI("https://forkify-api.herokuapp.com/api/v2/recipes/?key=bc18ede1-08f7-4e9e-ad2e-3e9f109ec7d5", e);
        (_I.recipe = kI(r.data.recipe), AI(_I.recipe), console.log(_I.recipe));
      })(t), $I.render(_I.recipe), WI.renderMessage(), zI.render(_I.bookmarks), window.history.pushState(null, "", `#${_I.recipe.id}`));
    } catch (t) {
      (console.error(t), WI.renderError(t));
    }
  };
  ($I.addHandlerRenderer(HI), $I.addHandlerServingsChange(YI), $I.addHandlerBookmark(JI), CI.addHandlerSearch(GI), qI.addHandlerClick(VI), zI.addHanderRender(XI), WI.addHandlerSubmit(KI));
})();

},{}]},["6etWj","6AfIA"], "6AfIA", "parcelRequirefade")

//# sourceMappingURL=index.5c3e024a.js.map
