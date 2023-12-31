!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define("uikit", e)
    : ((t = "undefined" != typeof globalThis ? globalThis : t || self).UIkit =
        e());
})(this, function () {
  "use strict";
  var t = Object.prototype,
    e = t.hasOwnProperty;
  function i(t, i) {
    return e.call(t, i);
  }
  var n = /\B([A-Z])/g,
    r = rt(function (t) {
      return t.replace(n, "-$1").toLowerCase();
    }),
    o = /-(\w)/g,
    s = rt(function (t) {
      return t.replace(o, h);
    }),
    a = rt(function (t) {
      return t.length ? h(null, t.charAt(0)) + t.slice(1) : "";
    });
  function h(t, e) {
    return e ? e.toUpperCase() : "";
  }
  var c = String.prototype,
    l =
      c.startsWith ||
      function (t) {
        return 0 === this.lastIndexOf(t, 0);
      };
  function u(t, e) {
    return l.call(t, e);
  }
  var d =
    c.endsWith ||
    function (t) {
      return this.substr(-t.length) === t;
    };
  function f(t, e) {
    return d.call(t, e);
  }
  var g = Array.prototype,
    p = function (t, e) {
      return !!~this.indexOf(t, e);
    },
    v = c.includes || p,
    w = g.includes || p;
  function m(t, e) {
    return t && (z(t) ? v : w).call(t, e);
  }
  var x =
    g.findIndex ||
    function (t) {
      for (var e = arguments, i = 0; i < this.length; i++)
        if (t.call(e[1], this[i], i, this)) return i;
      return -1;
    };
  function y(t, e) {
    return x.call(t, e);
  }
  var k = Array.isArray;
  function C(t) {
    return "function" == typeof t;
  }
  function b(t) {
    return null !== t && "object" == typeof t;
  }
  var L = t.toString;
  function $(t) {
    return "[object Object]" === L.call(t);
  }
  function M(t) {
    return b(t) && t === t.window;
  }
  function B(t) {
    return 9 === T(t);
  }
  function S(t) {
    return T(t) >= 1;
  }
  function I(t) {
    return 1 === T(t);
  }
  function T(t) {
    return !M(t) && b(t) && t.nodeType;
  }
  function E(t) {
    return "boolean" == typeof t;
  }
  function z(t) {
    return "string" == typeof t;
  }
  function A(t) {
    return "number" == typeof t;
  }
  function _(t) {
    return A(t) || (z(t) && !isNaN(t - parseFloat(t)));
  }
  function N(t) {
    return !(k(t) ? t.length : b(t) && Object.keys(t).length);
  }
  function H(t) {
    return void 0 === t;
  }
  function O(t) {
    return E(t)
      ? t
      : "true" === t ||
          "1" === t ||
          "" === t ||
          ("false" !== t && "0" !== t && t);
  }
  function D(t) {
    var e = Number(t);
    return !isNaN(e) && e;
  }
  function P(t) {
    return parseFloat(t) || 0;
  }
  var j =
    Array.from ||
    function (t) {
      return g.slice.call(t);
    };
  function Z(t) {
    return F(t)[0];
  }
  function F(t) {
    return (t && (S(t) ? [t] : j(t).filter(S))) || [];
  }
  function V(t) {
    return M(t)
      ? t
      : (t = Z(t))
      ? (B(t) ? t : t.ownerDocument).defaultView
      : window;
  }
  function W(t) {
    return t ? (f(t, "ms") ? P(t) : 1e3 * P(t)) : 0;
  }
  function R(t, e) {
    return (
      t === e ||
      (b(t) &&
        b(e) &&
        Object.keys(t).length === Object.keys(e).length &&
        J(t, function (t, i) {
          return t === e[i];
        }))
    );
  }
  function q(t, e, i) {
    return t.replace(new RegExp(e + "|" + i, "g"), function (t) {
      return t === e ? i : e;
    });
  }
  var U =
    Object.assign ||
    function (t) {
      for (var e = [], n = arguments.length - 1; n-- > 0; )
        e[n] = arguments[n + 1];
      t = Object(t);
      for (var r = 0; r < e.length; r++) {
        var o = e[r];
        if (null !== o) for (var s in o) i(o, s) && (t[s] = o[s]);
      }
      return t;
    };
  function Y(t) {
    return t[t.length - 1];
  }
  function J(t, e) {
    for (var i in t) if (!1 === e(t[i], i)) return !1;
    return !0;
  }
  function X(t, e) {
    return t.slice().sort(function (t, i) {
      var n = t[e];
      void 0 === n && (n = 0);
      var r = i[e];
      return void 0 === r && (r = 0), n > r ? 1 : r > n ? -1 : 0;
    });
  }
  function G(t, e) {
    var i = new Set();
    return t.filter(function (t) {
      var n = t[e];
      return !i.has(n) && (i.add(n) || !0);
    });
  }
  function K(t, e, i) {
    return (
      void 0 === e && (e = 0),
      void 0 === i && (i = 1),
      Math.min(Math.max(D(t) || 0, e), i)
    );
  }
  function Q() {}
  function tt() {
    for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
    return [
      ["bottom", "top"],
      ["right", "left"],
    ].every(function (e) {
      var i = e[0],
        n = e[1];
      return (
        Math.min.apply(
          Math,
          t.map(function (t) {
            return t[i];
          })
        ) -
          Math.max.apply(
            Math,
            t.map(function (t) {
              return t[n];
            })
          ) >
        0
      );
    });
  }
  function et(t, e) {
    return t.x <= e.right && t.x >= e.left && t.y <= e.bottom && t.y >= e.top;
  }
  var it = {
    ratio: function (t, e, i) {
      var n,
        r = "width" === e ? "height" : "width";
      return (
        ((n = {})[r] = t[e] ? Math.round((i * t[r]) / t[e]) : t[r]),
        (n[e] = i),
        n
      );
    },
    contain: function (t, e) {
      var i = this;
      return (
        J((t = U({}, t)), function (n, r) {
          return (t = t[r] > e[r] ? i.ratio(t, r, e[r]) : t);
        }),
        t
      );
    },
    cover: function (t, e) {
      var i = this;
      return (
        J((t = this.contain(t, e)), function (n, r) {
          return (t = t[r] < e[r] ? i.ratio(t, r, e[r]) : t);
        }),
        t
      );
    },
  };
  function nt(t, e, i, n) {
    void 0 === i && (i = 0), void 0 === n && (n = !1);
    var r = (e = F(e)).length;
    return (
      (t = _(t)
        ? D(t)
        : "next" === t
        ? i + 1
        : "previous" === t
        ? i - 1
        : e.indexOf(Z(t))),
      n ? K(t, 0, r - 1) : (t %= r) < 0 ? t + r : t
    );
  }
  function rt(t) {
    var e = Object.create(null);
    return function (i) {
      return e[i] || (e[i] = t(i));
    };
  }
  function ot(t, e, i) {
    if (b(e)) for (var n in e) ot(t, n, e[n]);
    else {
      if (H(i)) return (t = Z(t)) && t.getAttribute(e);
      F(t).forEach(function (t) {
        C(i) && (i = i.call(t, ot(t, e))),
          null === i ? at(t, e) : t.setAttribute(e, i);
      });
    }
  }
  function st(t, e) {
    return F(t).some(function (t) {
      return t.hasAttribute(e);
    });
  }
  function at(t, e) {
    (t = F(t)),
      e.split(" ").forEach(function (e) {
        return t.forEach(function (t) {
          return t.hasAttribute(e) && t.removeAttribute(e);
        });
      });
  }
  function ht(t, e) {
    for (var i = 0, n = [e, "data-" + e]; i < n.length; i++)
      if (st(t, n[i])) return ot(t, n[i]);
  }
  var ct = "undefined" != typeof window,
    lt = ct && /msie|trident/i.test(window.navigator.userAgent),
    ut = ct && "rtl" === ot(document.documentElement, "dir"),
    dt = ct && "ontouchstart" in window,
    ft = ct && window.PointerEvent,
    gt =
      ct &&
      (dt ||
        (window.DocumentTouch && document instanceof DocumentTouch) ||
        navigator.maxTouchPoints),
    pt = ft ? "pointerdown" : dt ? "touchstart" : "mousedown",
    vt = ft ? "pointermove" : dt ? "touchmove" : "mousemove",
    wt = ft ? "pointerup" : dt ? "touchend" : "mouseup",
    mt = ft ? "pointerenter" : dt ? "" : "mouseenter",
    xt = ft ? "pointerleave" : dt ? "" : "mouseleave",
    yt = ft ? "pointercancel" : "touchcancel",
    kt = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      menuitem: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    };
  function Ct(t) {
    return F(t).some(function (t) {
      return kt[t.tagName.toLowerCase()];
    });
  }
  function bt(t) {
    return F(t).some(function (t) {
      return t.offsetWidth || t.offsetHeight || t.getClientRects().length;
    });
  }
  var Lt = "input,select,textarea,button";
  function $t(t) {
    return F(t).some(function (t) {
      return zt(t, Lt);
    });
  }
  var Mt = Lt + ",a[href],[tabindex]";
  function Bt(t) {
    return zt(t, Mt);
  }
  function St(t) {
    return (t = Z(t)) && I(t.parentNode) && t.parentNode;
  }
  function It(t, e) {
    return F(t).filter(function (t) {
      return zt(t, e);
    });
  }
  var Tt = ct ? Element.prototype : {},
    Et = Tt.matches || Tt.webkitMatchesSelector || Tt.msMatchesSelector || Q;
  function zt(t, e) {
    return F(t).some(function (t) {
      return Et.call(t, e);
    });
  }
  var At =
    Tt.closest ||
    function (t) {
      var e = this;
      do {
        if (zt(e, t)) return e;
      } while ((e = St(e)));
    };
  function _t(t, e) {
    return (
      u(e, ">") && (e = e.slice(1)),
      I(t)
        ? At.call(t, e)
        : F(t)
            .map(function (t) {
              return _t(t, e);
            })
            .filter(Boolean)
    );
  }
  function Nt(t, e) {
    return z(e)
      ? zt(t, e) || !!_t(t, e)
      : t === e || (B(e) ? e.documentElement : Z(e)).contains(Z(t));
  }
  function Ht(t, e) {
    for (var i = []; (t = St(t)); ) (e && !zt(t, e)) || i.push(t);
    return i;
  }
  function Ot(t, e) {
    var i = (t = Z(t)) ? F(t.children) : [];
    return e ? It(i, e) : i;
  }
  function Dt(t, e) {
    return e ? F(t).indexOf(Z(e)) : Ot(St(t)).indexOf(t);
  }
  function Pt(t, e) {
    return Ft(t, Zt(t, e));
  }
  function jt(t, e) {
    return Vt(t, Zt(t, e));
  }
  function Zt(t, e) {
    return (
      void 0 === e && (e = document),
      (z(t) && Ut(t)) || B(e) ? e : e.ownerDocument
    );
  }
  function Ft(t, e) {
    return Z(Wt(t, e, "querySelector"));
  }
  function Vt(t, e) {
    return F(Wt(t, e, "querySelectorAll"));
  }
  function Wt(t, e, i) {
    if ((void 0 === e && (e = document), !t || !z(t))) return t;
    (t = t.replace(qt, "$1 *")),
      Ut(t) &&
        ((t = Jt(t)
          .map(function (t) {
            var i = e;
            if ("!" === t[0]) {
              var n = t.substr(1).trim().split(" ");
              (i = _t(St(e), n[0])), (t = n.slice(1).join(" ").trim());
            }
            if ("-" === t[0]) {
              var r = t.substr(1).trim().split(" "),
                o = (i || e).previousElementSibling;
              (i = zt(o, t.substr(1)) ? o : null), (t = r.slice(1).join(" "));
            }
            return i
              ? (function (t) {
                  var e = [];
                  for (; t.parentNode; ) {
                    if (t.id) {
                      e.unshift("#" + Gt(t.id));
                      break;
                    }
                    var i = t.tagName;
                    "HTML" !== i && (i += ":nth-child(" + (Dt(t) + 1) + ")"),
                      e.unshift(i),
                      (t = t.parentNode);
                  }
                  return e.join(" > ");
                })(i) +
                  " " +
                  t
              : null;
          })
          .filter(Boolean)
          .join(",")),
        (e = document));
    try {
      return e[i](t);
    } catch (t) {
      return null;
    }
  }
  var Rt = /(^|[^\\],)\s*[!>+~-]/,
    qt = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g,
    Ut = rt(function (t) {
      return t.match(Rt);
    }),
    Yt = /.*?[^\\](?:,|$)/g,
    Jt = rt(function (t) {
      return t.match(Yt).map(function (t) {
        return t.replace(/,$/, "").trim();
      });
    });
  var Xt =
    (ct && window.CSS && CSS.escape) ||
    function (t) {
      return t.replace(/([^\x7f-\uFFFF\w-])/g, function (t) {
        return "\\" + t;
      });
    };
  function Gt(t) {
    return z(t) ? Xt.call(null, t) : "";
  }
  function Kt() {
    for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
    var i = ne(t),
      n = i[0],
      r = i[1],
      o = i[2],
      s = i[3],
      a = i[4];
    return (
      (n = ae(n)),
      s.length > 1 &&
        (s = (function (t) {
          return function (e) {
            return k(e.detail) ? t.apply(void 0, [e].concat(e.detail)) : t(e);
          };
        })(s)),
      a &&
        a.self &&
        (s = (function (t) {
          return function (e) {
            if (e.target === e.currentTarget || e.target === e.current)
              return t.call(null, e);
          };
        })(s)),
      o &&
        (s = (function (t, e) {
          var i = this;
          return function (n) {
            var r =
              ">" === t[0]
                ? Vt(t, n.currentTarget)
                    .reverse()
                    .filter(function (t) {
                      return Nt(n.target, t);
                    })[0]
                : _t(n.target, t);
            r && ((n.current = r), e.call(i, n));
          };
        })(o, s)),
      (a = re(a)),
      r.split(" ").forEach(function (t) {
        return n.forEach(function (e) {
          return e.addEventListener(t, s, a);
        });
      }),
      function () {
        return Qt(n, r, s, a);
      }
    );
  }
  function Qt(t, e, i, n) {
    void 0 === n && (n = !1),
      (n = re(n)),
      (t = ae(t)),
      e.split(" ").forEach(function (e) {
        return t.forEach(function (t) {
          return t.removeEventListener(e, i, n);
        });
      });
  }
  function te() {
    for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
    var i = ne(t),
      n = i[0],
      r = i[1],
      o = i[2],
      s = i[3],
      a = i[4],
      h = i[5],
      c = Kt(
        n,
        r,
        o,
        function (t) {
          var e = !h || h(t);
          e && (c(), s(t, e));
        },
        a
      );
    return c;
  }
  function ee(t, e, i) {
    return ae(t).reduce(function (t, n) {
      return t && n.dispatchEvent(ie(e, !0, !0, i));
    }, !0);
  }
  function ie(t, e, i, n) {
    if ((void 0 === e && (e = !0), void 0 === i && (i = !1), z(t))) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, e, i, n), (t = r);
    }
    return t;
  }
  function ne(t) {
    return C(t[2]) && t.splice(2, 0, !1), t;
  }
  function re(t) {
    return t && lt && !E(t) ? !!t.capture : t;
  }
  function oe(t) {
    return t && "addEventListener" in t;
  }
  function se(t) {
    return oe(t) ? t : Z(t);
  }
  function ae(t) {
    return k(t) ? t.map(se).filter(Boolean) : z(t) ? Vt(t) : oe(t) ? [t] : F(t);
  }
  function he(t) {
    return "touch" === t.pointerType || !!t.touches;
  }
  function ce(t) {
    var e = t.touches,
      i = t.changedTouches,
      n = (e && e[0]) || (i && i[0]) || t;
    return { x: n.clientX, y: n.clientY };
  }
  var le = (ct && window.Promise) || ge,
    ue = function () {
      var t = this;
      this.promise = new le(function (e, i) {
        (t.reject = i), (t.resolve = e);
      });
    },
    de = 2,
    fe = (ct && window.setImmediate) || setTimeout;
  function ge(t) {
    (this.state = de), (this.value = void 0), (this.deferred = []);
    var e = this;
    try {
      t(
        function (t) {
          e.resolve(t);
        },
        function (t) {
          e.reject(t);
        }
      );
    } catch (t) {
      e.reject(t);
    }
  }
  (ge.reject = function (t) {
    return new ge(function (e, i) {
      i(t);
    });
  }),
    (ge.resolve = function (t) {
      return new ge(function (e, i) {
        e(t);
      });
    }),
    (ge.all = function (t) {
      return new ge(function (e, i) {
        var n = [],
          r = 0;
        function o(i) {
          return function (o) {
            (n[i] = o), (r += 1) === t.length && e(n);
          };
        }
        0 === t.length && e(n);
        for (var s = 0; s < t.length; s += 1) ge.resolve(t[s]).then(o(s), i);
      });
    }),
    (ge.race = function (t) {
      return new ge(function (e, i) {
        for (var n = 0; n < t.length; n += 1) ge.resolve(t[n]).then(e, i);
      });
    });
  var pe = ge.prototype;
  function ve(t, e) {
    var i = U(
      {
        data: null,
        method: "GET",
        headers: {},
        xhr: new XMLHttpRequest(),
        beforeSend: Q,
        responseType: "",
      },
      e
    );
    return le
      .resolve()
      .then(function () {
        return i.beforeSend(i);
      })
      .then(function () {
        return (function (t, e) {
          return new le(function (i, n) {
            var r = e.xhr;
            for (var o in e)
              if (o in r)
                try {
                  r[o] = e[o];
                } catch (t) {}
            for (var s in (r.open(e.method.toUpperCase(), t), e.headers))
              r.setRequestHeader(s, e.headers[s]);
            Kt(r, "load", function () {
              0 === r.status ||
              (r.status >= 200 && r.status < 300) ||
              304 === r.status
                ? ("json" === e.responseType &&
                    z(r.response) &&
                    (r = U(
                      (function (t) {
                        var e = {};
                        for (var i in t) e[i] = t[i];
                        return e;
                      })(r),
                      { response: JSON.parse(r.response) }
                    )),
                  i(r))
                : n(U(Error(r.statusText), { xhr: r, status: r.status }));
            }),
              Kt(r, "error", function () {
                return n(U(Error("Network Error"), { xhr: r }));
              }),
              Kt(r, "timeout", function () {
                return n(U(Error("Network Timeout"), { xhr: r }));
              }),
              r.send(e.data);
          });
        })(t, i);
      });
  }
  function we(t, e, i) {
    return new le(function (n, r) {
      var o = new Image();
      (o.onerror = function (t) {
        return r(t);
      }),
        (o.onload = function () {
          return n(o);
        }),
        i && (o.sizes = i),
        e && (o.srcset = e),
        (o.src = t);
    });
  }
  function me(t) {
    return ((t = ze(t)).innerHTML = ""), t;
  }
  function xe(t, e) {
    return (
      (t = ze(t)), H(e) ? t.innerHTML : ye(t.hasChildNodes() ? me(t) : t, e)
    );
  }
  function ye(t, e) {
    return (
      (t = ze(t)),
      be(e, function (e) {
        return t.appendChild(e);
      })
    );
  }
  function ke(t, e) {
    return (
      (t = ze(t)),
      be(e, function (e) {
        return t.parentNode.insertBefore(e, t);
      })
    );
  }
  function Ce(t, e) {
    return (
      (t = ze(t)),
      be(e, function (e) {
        return t.nextSibling ? ke(t.nextSibling, e) : ye(t.parentNode, e);
      })
    );
  }
  function be(t, e) {
    return (t = z(t) ? Te(t) : t) ? ("length" in t ? F(t).map(e) : e(t)) : null;
  }
  function Le(t) {
    F(t).forEach(function (t) {
      return t.parentNode && t.parentNode.removeChild(t);
    });
  }
  function $e(t, e) {
    for (e = Z(ke(t, e)); e.firstChild; ) e = e.firstChild;
    return ye(e, t), e;
  }
  function Me(t, e) {
    return F(
      F(t).map(function (t) {
        return t.hasChildNodes ? $e(F(t.childNodes), e) : ye(t, e);
      })
    );
  }
  function Be(t) {
    F(t)
      .map(St)
      .filter(function (t, e, i) {
        return i.indexOf(t) === e;
      })
      .forEach(function (t) {
        ke(t, t.childNodes), Le(t);
      });
  }
  (pe.resolve = function (t) {
    var e = this;
    if (e.state === de) {
      if (t === e) throw new TypeError("Promise settled with itself.");
      var i = !1;
      try {
        var n = t && t.then;
        if (null !== t && b(t) && C(n))
          return void n.call(
            t,
            function (t) {
              i || e.resolve(t), (i = !0);
            },
            function (t) {
              i || e.reject(t), (i = !0);
            }
          );
      } catch (t) {
        return void (i || e.reject(t));
      }
      (e.state = 0), (e.value = t), e.notify();
    }
  }),
    (pe.reject = function (t) {
      var e = this;
      if (e.state === de) {
        if (t === e) throw new TypeError("Promise settled with itself.");
        (e.state = 1), (e.value = t), e.notify();
      }
    }),
    (pe.notify = function () {
      var t = this;
      fe(function () {
        if (t.state !== de)
          for (; t.deferred.length; ) {
            var e = t.deferred.shift(),
              i = e[0],
              n = e[1],
              r = e[2],
              o = e[3];
            try {
              0 === t.state
                ? C(i)
                  ? r(i.call(void 0, t.value))
                  : r(t.value)
                : 1 === t.state &&
                  (C(n) ? r(n.call(void 0, t.value)) : o(t.value));
            } catch (t) {
              o(t);
            }
          }
      });
    }),
    (pe.then = function (t, e) {
      var i = this;
      return new ge(function (n, r) {
        i.deferred.push([t, e, n, r]), i.notify();
      });
    }),
    (pe.catch = function (t) {
      return this.then(void 0, t);
    });
  var Se = /^\s*<(\w+|!)[^>]*>/,
    Ie = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;
  function Te(t) {
    var e = Ie.exec(t);
    if (e) return document.createElement(e[1]);
    var i = document.createElement("div");
    return (
      Se.test(t)
        ? i.insertAdjacentHTML("beforeend", t.trim())
        : (i.textContent = t),
      i.childNodes.length > 1 ? F(i.childNodes) : i.firstChild
    );
  }
  function Ee(t, e) {
    if (I(t))
      for (e(t), t = t.firstElementChild; t; ) {
        var i = t.nextElementSibling;
        Ee(t, e), (t = i);
      }
  }
  function ze(t, e) {
    return _e(t) ? Z(Te(t)) : Ft(t, e);
  }
  function Ae(t, e) {
    return _e(t) ? F(Te(t)) : Vt(t, e);
  }
  function _e(t) {
    return z(t) && ("<" === t[0] || t.match(/^\s*</));
  }
  function Ne(t) {
    for (var e = [], i = arguments.length - 1; i-- > 0; )
      e[i] = arguments[i + 1];
    Ze(t, e, "add");
  }
  function He(t) {
    for (var e = [], i = arguments.length - 1; i-- > 0; )
      e[i] = arguments[i + 1];
    Ze(t, e, "remove");
  }
  function Oe(t, e) {
    ot(t, "class", function (t) {
      return (t || "").replace(new RegExp("\\b" + e + "\\b", "g"), "");
    });
  }
  function De(t) {
    for (var e = [], i = arguments.length - 1; i-- > 0; )
      e[i] = arguments[i + 1];
    e[0] && He(t, e[0]), e[1] && Ne(t, e[1]);
  }
  function Pe(t, e) {
    e = Fe(e)[0];
    for (var i = F(t), n = 0; n < i.length; n++)
      if (e && i[n].classList.contains(e)) return !0;
    return !1;
  }
  function je(t, e, i) {
    e = Fe(e);
    for (var n = F(t), r = 0; r < n.length; r++)
      for (var o = n[r].classList, s = 0; s < e.length; s++)
        H(i)
          ? o.toggle(e[s])
          : Ve.Force
          ? o.toggle(e[s], !!i)
          : o[i ? "add" : "remove"](e[s]);
  }
  function Ze(t, e, i) {
    var n;
    e = e.reduce(function (t, e) {
      return t.concat(Fe(e));
    }, []);
    for (
      var r = F(t),
        o = function (t) {
          Ve.Multiple
            ? (n = r[t].classList)[i].apply(n, e)
            : e.forEach(function (e) {
                return r[t].classList[i](e);
              });
        },
        s = 0;
      s < r.length;
      s++
    )
      o(s);
  }
  function Fe(t) {
    return String(t).split(/\s|,/).filter(Boolean);
  }
  var Ve = {
      get Multiple() {
        return this.get("Multiple");
      },
      get Force() {
        return this.get("Force");
      },
      get: function (t) {
        var e = document.createElement("_").classList;
        return (
          e.add("a", "b"),
          e.toggle("c", !1),
          (Ve = { Multiple: e.contains("b"), Force: !e.contains("c") })[t]
        );
      },
    },
    We = {
      "animation-iteration-count": !0,
      "column-count": !0,
      "fill-opacity": !0,
      "flex-grow": !0,
      "flex-shrink": !0,
      "font-weight": !0,
      "line-height": !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      "stroke-dasharray": !0,
      "stroke-dashoffset": !0,
      widows: !0,
      "z-index": !0,
      zoom: !0,
    };
  function Re(t, e, i, n) {
    return (
      void 0 === n && (n = ""),
      F(t).map(function (t) {
        if (z(e)) {
          if (((e = Ge(e)), H(i))) return Ue(t, e);
          i || A(i)
            ? t.style.setProperty(e, _(i) && !We[e] ? i + "px" : i, n)
            : t.style.removeProperty(e);
        } else {
          if (k(e)) {
            var r = qe(t);
            return e.reduce(function (t, e) {
              return (t[e] = r[Ge(e)]), t;
            }, {});
          }
          b(e) &&
            ((n = i),
            J(e, function (e, i) {
              return Re(t, i, e, n);
            }));
        }
        return t;
      })[0]
    );
  }
  function qe(t, e) {
    return V(t).getComputedStyle(t, e);
  }
  function Ue(t, e, i) {
    return qe(t, i)[e];
  }
  var Ye = rt(function (t) {
      var e = ye(document.documentElement, Te("<div>"));
      Ne(e, "uk-" + t);
      var i = Ue(e, "content", ":before");
      return Le(e), i;
    }),
    Je = /^\s*(["'])?(.*?)\1\s*$/;
  function Xe(t) {
    return (
      lt ? Ye(t) : qe(document.documentElement).getPropertyValue("--uk-" + t)
    ).replace(Je, "$2");
  }
  var Ge = rt(function (t) {
      return (function (t) {
        t = r(t);
        var e = document.documentElement.style;
        if (t in e) return t;
        var i,
          n = Ke.length;
        for (; n--; ) if ((i = "-" + Ke[n] + "-" + t) in e) return i;
      })(t);
    }),
    Ke = ["webkit", "moz", "ms"];
  function Qe(t, e, i, n) {
    return (
      void 0 === i && (i = 400),
      void 0 === n && (n = "linear"),
      le.all(
        F(t).map(function (t) {
          return new le(function (r, o) {
            for (var s in e) {
              var a = Re(t, s);
              "" === a && Re(t, s, a);
            }
            var h = setTimeout(function () {
              return ee(t, "transitionend");
            }, i);
            te(
              t,
              "transitionend transitioncanceled",
              function (e) {
                var i = e.type;
                clearTimeout(h),
                  He(t, "uk-transition"),
                  Re(t, {
                    transitionProperty: "",
                    transitionDuration: "",
                    transitionTimingFunction: "",
                  }),
                  "transitioncanceled" === i ? o() : r(t);
              },
              { self: !0 }
            ),
              Ne(t, "uk-transition"),
              Re(
                t,
                U(
                  {
                    transitionProperty: Object.keys(e).map(Ge).join(","),
                    transitionDuration: i + "ms",
                    transitionTimingFunction: n,
                  },
                  e
                )
              );
          });
        })
      )
    );
  }
  var ti = {
      start: Qe,
      stop: function (t) {
        return ee(t, "transitionend"), le.resolve();
      },
      cancel: function (t) {
        ee(t, "transitioncanceled");
      },
      inProgress: function (t) {
        return Pe(t, "uk-transition");
      },
    },
    ei = "uk-animation-";
  function ii(t, e, i, n, r) {
    return (
      void 0 === i && (i = 200),
      le.all(
        F(t).map(function (t) {
          return new le(function (o, s) {
            ee(t, "animationcanceled");
            var a = setTimeout(function () {
              return ee(t, "animationend");
            }, i);
            te(
              t,
              "animationend animationcanceled",
              function (e) {
                var i = e.type;
                clearTimeout(a),
                  "animationcanceled" === i ? s() : o(t),
                  Re(t, "animationDuration", ""),
                  Oe(t, ei + "\\S*");
              },
              { self: !0 }
            ),
              Re(t, "animationDuration", i + "ms"),
              Ne(t, e, ei + (r ? "leave" : "enter")),
              u(e, ei) &&
                (n && Ne(t, "uk-transform-origin-" + n),
                r && Ne(t, ei + "reverse"));
          });
        })
      )
    );
  }
  var ni = new RegExp(ei + "(enter|leave)"),
    ri = {
      in: ii,
      out: function (t, e, i, n) {
        return ii(t, e, i, n, !0);
      },
      inProgress: function (t) {
        return ni.test(ot(t, "class"));
      },
      cancel: function (t) {
        ee(t, "animationcanceled");
      },
    },
    oi = { width: ["left", "right"], height: ["top", "bottom"] };
  function si(t) {
    var e = I(t)
      ? Z(t).getBoundingClientRect()
      : { height: li(t), width: ui(t), top: 0, left: 0 };
    return {
      height: e.height,
      width: e.width,
      top: e.top,
      left: e.left,
      bottom: e.top + e.height,
      right: e.left + e.width,
    };
  }
  function ai(t, e) {
    var i = si(t);
    if (t) {
      var n = V(t),
        r = { height: n.pageYOffset, width: n.pageXOffset };
      for (var o in oi) for (var s in oi[o]) i[oi[o][s]] += r[o];
    }
    if (!e) return i;
    var a = Re(t, "position");
    J(Re(t, ["left", "top"]), function (n, r) {
      return Re(
        t,
        r,
        e[r] - i[r] + P("absolute" === a && "auto" === n ? hi(t)[r] : n)
      );
    });
  }
  function hi(t) {
    for (
      var e = ai(t),
        i = e.top,
        n = e.left,
        r = Z(t),
        o = r.ownerDocument,
        s = o.body,
        a = o.documentElement,
        h = r.offsetParent || a;
      h && (h === s || h === a) && "static" === Re(h, "position");

    )
      h = h.parentNode;
    if (I(h)) {
      var c = ai(h);
      (i -= c.top + P(Re(h, "borderTopWidth"))),
        (n -= c.left + P(Re(h, "borderLeftWidth")));
    }
    return { top: i - P(Re(t, "marginTop")), left: n - P(Re(t, "marginLeft")) };
  }
  function ci(t) {
    var e = [0, 0];
    t = Z(t);
    do {
      if (
        ((e[0] += t.offsetTop),
        (e[1] += t.offsetLeft),
        "fixed" === Re(t, "position"))
      ) {
        var i = V(t);
        return (e[0] += i.pageYOffset), (e[1] += i.pageXOffset), e;
      }
    } while ((t = t.offsetParent));
    return e;
  }
  var li = di("height"),
    ui = di("width");
  function di(t) {
    var e = a(t);
    return function (i, n) {
      if (H(n)) {
        if (M(i)) return i["inner" + e];
        if (B(i)) {
          var r = i.documentElement;
          return Math.max(r["offset" + e], r["scroll" + e]);
        }
        return (
          (n =
            "auto" === (n = Re((i = Z(i)), t)) ? i["offset" + e] : P(n) || 0) -
          fi(i, t)
        );
      }
      return Re(i, t, n || 0 === n ? +n + fi(i, t) + "px" : "");
    };
  }
  function fi(t, e, i) {
    return (
      void 0 === i && (i = "border-box"),
      Re(t, "boxSizing") === i
        ? oi[e].map(a).reduce(function (e, i) {
            return (
              e + P(Re(t, "padding" + i)) + P(Re(t, "border" + i + "Width"))
            );
          }, 0)
        : 0
    );
  }
  function gi(t) {
    for (var e in oi)
      for (var i in oi[e]) if (oi[e][i] === t) return oi[e][1 - i];
    return t;
  }
  function pi(t, e, i) {
    return (
      void 0 === e && (e = "width"),
      void 0 === i && (i = window),
      _(t)
        ? +t
        : f(t, "vh")
        ? vi(li(V(i)), t)
        : f(t, "vw")
        ? vi(ui(V(i)), t)
        : f(t, "%")
        ? vi(si(i)[e], t)
        : P(t)
    );
  }
  function vi(t, e) {
    return (t * P(e)) / 100;
  }
  var wi = {
    reads: [],
    writes: [],
    read: function (t) {
      return this.reads.push(t), yi(), t;
    },
    write: function (t) {
      return this.writes.push(t), yi(), t;
    },
    clear: function (t) {
      Ci(this.reads, t), Ci(this.writes, t);
    },
    flush: mi,
  };
  function mi(t) {
    void 0 === t && (t = 1),
      ki(wi.reads),
      ki(wi.writes.splice(0)),
      (wi.scheduled = !1),
      (wi.reads.length || wi.writes.length) && yi(t + 1);
  }
  var xi = 4;
  function yi(t) {
    wi.scheduled ||
      ((wi.scheduled = !0),
      t && t < xi
        ? le.resolve().then(function () {
            return mi(t);
          })
        : requestAnimationFrame(function () {
            return mi();
          }));
  }
  function ki(t) {
    for (var e; (e = t.shift()); )
      try {
        e();
      } catch (t) {
        console.error(t);
      }
  }
  function Ci(t, e) {
    var i = t.indexOf(e);
    return ~i && t.splice(i, 1);
  }
  function bi() {}
  bi.prototype = {
    positions: [],
    init: function () {
      var t,
        e = this;
      (this.positions = []),
        (this.unbind = Kt(document, "mousemove", function (e) {
          return (t = ce(e));
        })),
        (this.interval = setInterval(function () {
          t &&
            (e.positions.push(t),
            e.positions.length > 5 && e.positions.shift());
        }, 50));
    },
    cancel: function () {
      this.unbind && this.unbind(),
        this.interval && clearInterval(this.interval);
    },
    movesTo: function (t) {
      if (this.positions.length < 2) return !1;
      var e = t.getBoundingClientRect(),
        i = e.left,
        n = e.right,
        r = e.top,
        o = e.bottom,
        s = this.positions[0],
        a = Y(this.positions),
        h = [s, a];
      return (
        !et(a, e) &&
        [
          [
            { x: i, y: r },
            { x: n, y: o },
          ],
          [
            { x: i, y: o },
            { x: n, y: r },
          ],
        ].some(function (t) {
          var i = (function (t, e) {
            var i = t[0],
              n = i.x,
              r = i.y,
              o = t[1],
              s = o.x,
              a = o.y,
              h = e[0],
              c = h.x,
              l = h.y,
              u = e[1],
              d = u.x,
              f = u.y,
              g = (f - l) * (s - n) - (d - c) * (a - r);
            if (0 === g) return !1;
            var p = ((d - c) * (r - l) - (f - l) * (n - c)) / g;
            if (p < 0) return !1;
            return { x: n + p * (s - n), y: r + p * (a - r) };
          })(h, t);
          return i && et(i, e);
        })
      );
    },
  };
  var Li = {};
  function $i(t, e, i) {
    return Li.computed(C(t) ? t.call(i, i) : t, C(e) ? e.call(i, i) : e);
  }
  function Mi(t, e) {
    return (
      (t = t && !k(t) ? [t] : t), e ? (t ? t.concat(e) : k(e) ? e : [e]) : t
    );
  }
  function Bi(t, e) {
    return H(e) ? t : e;
  }
  function Si(t, e, n) {
    var r = {};
    if (
      (C(e) && (e = e.options),
      e.extends && (t = Si(t, e.extends, n)),
      e.mixins)
    )
      for (var o = 0, s = e.mixins.length; o < s; o++)
        t = Si(t, e.mixins[o], n);
    for (var a in t) c(a);
    for (var h in e) i(t, h) || c(h);
    function c(i) {
      r[i] = (Li[i] || Bi)(t[i], e[i], n);
    }
    return r;
  }
  function Ii(t, e) {
    var i;
    void 0 === e && (e = []);
    try {
      return t
        ? u(t, "{")
          ? JSON.parse(t)
          : e.length && !m(t, ":")
          ? (((i = {})[e[0]] = t), i)
          : t.split(";").reduce(function (t, e) {
              var i = e.split(/:(.*)/),
                n = i[0],
                r = i[1];
              return n && !H(r) && (t[n.trim()] = r.trim()), t;
            }, {})
        : {};
    } catch (t) {
      return {};
    }
  }
  function Ti(t) {
    if ((Ni(t) && Di(t, { func: "playVideo", method: "play" }), _i(t)))
      try {
        t.play().catch(Q);
      } catch (t) {}
  }
  function Ei(t) {
    Ni(t) && Di(t, { func: "pauseVideo", method: "pause" }), _i(t) && t.pause();
  }
  function zi(t) {
    Ni(t) && Di(t, { func: "mute", method: "setVolume", value: 0 }),
      _i(t) && (t.muted = !0);
  }
  function Ai(t) {
    return _i(t) || Ni(t);
  }
  function _i(t) {
    return t && "VIDEO" === t.tagName;
  }
  function Ni(t) {
    return t && "IFRAME" === t.tagName && (Hi(t) || Oi(t));
  }
  function Hi(t) {
    return !!t.src.match(
      /\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/
    );
  }
  function Oi(t) {
    return !!t.src.match(/vimeo\.com\/video\/.*/);
  }
  function Di(t, e) {
    (function (t) {
      if (t[ji]) return t[ji];
      var e,
        i = Hi(t),
        n = Oi(t),
        r = ++Zi;
      return (t[ji] = new le(function (o) {
        i &&
          te(t, "load", function () {
            var i = function () {
              return Pi(t, { event: "listening", id: r });
            };
            (e = setInterval(i, 100)), i();
          }),
          te(window, "message", o, !1, function (t) {
            var e = t.data;
            try {
              return (
                (e = JSON.parse(e)) &&
                ((i && e.id === r && "onReady" === e.event) ||
                  (n && Number(e.player_id) === r))
              );
            } catch (t) {}
          }),
          (t.src =
            t.src +
            (m(t.src, "?") ? "&" : "?") +
            (i ? "enablejsapi=1" : "api=1&player_id=" + r));
      }).then(function () {
        return clearInterval(e);
      }));
    })(t).then(function () {
      return Pi(t, e);
    });
  }
  function Pi(t, e) {
    try {
      t.contentWindow.postMessage(
        JSON.stringify(U({ event: "command" }, e)),
        "*"
      );
    } catch (t) {}
  }
  (Li.events =
    Li.created =
    Li.beforeConnect =
    Li.connected =
    Li.beforeDisconnect =
    Li.disconnected =
    Li.destroy =
      Mi),
    (Li.args = function (t, e) {
      return !1 !== e && Mi(e || t);
    }),
    (Li.update = function (t, e) {
      return X(Mi(t, C(e) ? { read: e } : e), "order");
    }),
    (Li.props = function (t, e) {
      return (
        k(e) &&
          (e = e.reduce(function (t, e) {
            return (t[e] = String), t;
          }, {})),
        Li.methods(t, e)
      );
    }),
    (Li.computed = Li.methods =
      function (t, e) {
        return e ? (t ? U({}, t, e) : e) : t;
      }),
    (Li.data = function (t, e, i) {
      return i
        ? $i(t, e, i)
        : e
        ? t
          ? function (i) {
              return $i(t, e, i);
            }
          : e
        : t;
    });
  var ji = "_ukPlayer",
    Zi = 0;
  function Fi(t, e, i) {
    return (
      void 0 === e && (e = 0),
      void 0 === i && (i = 0),
      !!bt(t) &&
        tt.apply(
          void 0,
          qi(t)
            .map(function (t) {
              var n = ai(Ui(t)),
                r = n.top,
                o = n.left,
                s = n.bottom,
                a = n.right;
              return { top: r - e, left: o - i, bottom: s + e, right: a + i };
            })
            .concat(ai(t))
        )
    );
  }
  function Vi(t, e) {
    (t = M(t) || B(t) ? Ji(t) : Z(t)).scrollTop = e;
  }
  function Wi(t, e) {
    void 0 === e && (e = {});
    var i = e.offset;
    void 0 === i && (i = 0);
    var n = bt(t) ? qi(t) : [];
    return n.reduce(
      function (e, o, s) {
        var a = o.scrollTop,
          h = o.scrollHeight,
          c = o.offsetHeight,
          l = h - Yi(o),
          u = ai(n[s - 1] || t),
          d = u.height,
          f = u.top,
          g = Math.ceil(f - ai(Ui(o)).top - i + a);
        return (
          i > 0 && c < d + i ? (g += i) : (i = 0),
          g > l ? ((i -= g - l), (g = l)) : g < 0 && ((i -= g), (g = 0)),
          function () {
            return r(o, g - a).then(e);
          }
        );
      },
      function () {
        return le.resolve();
      }
    )();
    function r(t, e) {
      return new le(function (i) {
        var n,
          r = t.scrollTop,
          o = ((n = Math.abs(e)), 40 * Math.pow(n, 0.375)),
          s = Date.now();
        !(function n() {
          var a,
            h =
              ((a = K((Date.now() - s) / o)),
              0.5 * (1 - Math.cos(Math.PI * a)));
          Vi(t, r + e * h), 1 !== h ? requestAnimationFrame(n) : i();
        })();
      });
    }
  }
  function Ri(t, e) {
    if ((void 0 === e && (e = 0), !bt(t))) return 0;
    var i = qi(t, /auto|scroll/, !0)[0],
      n = i.scrollHeight,
      r = i.scrollTop,
      o = Yi(i),
      s = ci(t)[0] - r - ci(i)[0],
      a = Math.min(o, s + r);
    return K(
      (-1 * (s - a)) / Math.min(t.offsetHeight + e + a, n - (s + r), n - o)
    );
  }
  function qi(t, e, i) {
    void 0 === e && (e = /auto|scroll|hidden/), void 0 === i && (i = !1);
    var n = Ji(t),
      r = Ht(t).reverse(),
      o = y((r = r.slice(r.indexOf(n) + 1)), function (t) {
        return "fixed" === Re(t, "position");
      });
    return (
      ~o && (r = r.slice(o)),
      [n]
        .concat(
          r.filter(function (t) {
            return e.test(Re(t, "overflow")) && (!i || t.scrollHeight > Yi(t));
          })
        )
        .reverse()
    );
  }
  function Ui(t) {
    return t === Ji(t) ? window : t;
  }
  function Yi(t) {
    return (t === Ji(t) ? document.documentElement : t).clientHeight;
  }
  function Ji(t) {
    var e = V(t).document;
    return e.scrollingElement || e.documentElement;
  }
  var Xi = { width: ["x", "left", "right"], height: ["y", "top", "bottom"] };
  function Gi(t, e, i, n, r, o, s, a) {
    (i = Qi(i)), (n = Qi(n));
    var h = { element: i, target: n };
    if (!t || !e) return h;
    var c = ai(t),
      l = ai(e),
      u = l;
    if (
      (Ki(u, i, c, -1),
      Ki(u, n, l, 1),
      (r = tn(r, c.width, c.height)),
      (o = tn(o, l.width, l.height)),
      (r.x += o.x),
      (r.y += o.y),
      (u.left += r.x),
      (u.top += r.y),
      s)
    ) {
      var d = qi(t).map(Ui);
      a && !m(d, a) && d.unshift(a),
        (d = d.map(function (t) {
          return ai(t);
        })),
        J(Xi, function (t, e) {
          var o = t[0],
            a = t[1],
            f = t[2];
          (!0 === s || m(s, o)) &&
            d.some(function (t) {
              var s = i[o] === a ? -c[e] : i[o] === f ? c[e] : 0,
                d = n[o] === a ? l[e] : n[o] === f ? -l[e] : 0;
              if (u[a] < t[a] || u[a] + c[e] > t[f]) {
                var g = c[e] / 2,
                  p = "center" === n[o] ? -l[e] / 2 : 0;
                return ("center" === i[o] && (v(g, p) || v(-g, -p))) || v(s, d);
              }
              function v(i, n) {
                var s = P((u[a] + i + n - 2 * r[o]).toFixed(4));
                if (s >= t[a] && s + c[e] <= t[f])
                  return (
                    (u[a] = s),
                    ["element", "target"].forEach(function (t) {
                      h[t][o] = i
                        ? h[t][o] === Xi[e][1]
                          ? Xi[e][2]
                          : Xi[e][1]
                        : h[t][o];
                    }),
                    !0
                  );
              }
            });
        });
    }
    return ai(t, u), h;
  }
  function Ki(t, e, i, n) {
    J(Xi, function (r, o) {
      var s = r[0],
        a = r[1],
        h = r[2];
      e[s] === h
        ? (t[a] += i[o] * n)
        : "center" === e[s] && (t[a] += (i[o] * n) / 2);
    });
  }
  function Qi(t) {
    var e = /left|center|right/,
      i = /top|center|bottom/;
    return (
      1 === (t = (t || "").split(" ")).length &&
        (t = e.test(t[0])
          ? t.concat("center")
          : i.test(t[0])
          ? ["center"].concat(t)
          : ["center", "center"]),
      { x: e.test(t[0]) ? t[0] : "center", y: i.test(t[1]) ? t[1] : "center" }
    );
  }
  function tn(t, e, i) {
    var n = (t || "").split(" "),
      r = n[0],
      o = n[1];
    return {
      x: r ? P(r) * (f(r, "%") ? e / 100 : 1) : 0,
      y: o ? P(o) * (f(o, "%") ? i / 100 : 1) : 0,
    };
  }
  var en = Object.freeze({
    __proto__: null,
    ajax: ve,
    getImage: we,
    transition: Qe,
    Transition: ti,
    animate: ii,
    Animation: ri,
    attr: ot,
    hasAttr: st,
    removeAttr: at,
    data: ht,
    addClass: Ne,
    removeClass: He,
    removeClasses: Oe,
    replaceClass: De,
    hasClass: Pe,
    toggleClass: je,
    dimensions: si,
    offset: ai,
    position: hi,
    offsetPosition: ci,
    height: li,
    width: ui,
    boxModelAdjust: fi,
    flipPosition: gi,
    toPx: pi,
    ready: function (t) {
      if ("loading" === document.readyState)
        var e = Kt(document, "DOMContentLoaded", function () {
          e(), t();
        });
      else t();
    },
    empty: me,
    html: xe,
    prepend: function (t, e) {
      return (t = ze(t)).hasChildNodes()
        ? be(e, function (e) {
            return t.insertBefore(e, t.firstChild);
          })
        : ye(t, e);
    },
    append: ye,
    before: ke,
    after: Ce,
    remove: Le,
    wrapAll: $e,
    wrapInner: Me,
    unwrap: Be,
    fragment: Te,
    apply: Ee,
    $: ze,
    $$: Ae,
    inBrowser: ct,
    isIE: lt,
    isRtl: ut,
    hasTouch: gt,
    pointerDown: pt,
    pointerMove: vt,
    pointerUp: wt,
    pointerEnter: mt,
    pointerLeave: xt,
    pointerCancel: yt,
    on: Kt,
    off: Qt,
    once: te,
    trigger: ee,
    createEvent: ie,
    toEventTargets: ae,
    isTouch: he,
    getEventPos: ce,
    fastdom: wi,
    isVoidElement: Ct,
    isVisible: bt,
    selInput: Lt,
    isInput: $t,
    selFocusable: Mt,
    isFocusable: Bt,
    parent: St,
    filter: It,
    matches: zt,
    closest: _t,
    within: Nt,
    parents: Ht,
    children: Ot,
    index: Dt,
    hasOwn: i,
    hyphenate: r,
    camelize: s,
    ucfirst: a,
    startsWith: u,
    endsWith: f,
    includes: m,
    findIndex: y,
    isArray: k,
    isFunction: C,
    isObject: b,
    isPlainObject: $,
    isWindow: M,
    isDocument: B,
    isNode: S,
    isElement: I,
    isBoolean: E,
    isString: z,
    isNumber: A,
    isNumeric: _,
    isEmpty: N,
    isUndefined: H,
    toBoolean: O,
    toNumber: D,
    toFloat: P,
    toArray: j,
    toNode: Z,
    toNodes: F,
    toWindow: V,
    toMs: W,
    isEqual: R,
    swap: q,
    assign: U,
    last: Y,
    each: J,
    sortBy: X,
    uniqueBy: G,
    clamp: K,
    noop: Q,
    intersectRect: tt,
    pointInRect: et,
    Dimensions: it,
    getIndex: nt,
    memoize: rt,
    MouseTracker: bi,
    mergeOptions: Si,
    parseOptions: Ii,
    play: Ti,
    pause: Ei,
    mute: zi,
    isVideo: Ai,
    positionAt: Gi,
    Promise: le,
    Deferred: ue,
    query: Pt,
    queryAll: jt,
    find: Ft,
    findAll: Vt,
    escape: Gt,
    css: Re,
    getCssVar: Xe,
    propName: Ge,
    isInView: Fi,
    scrollTop: Vi,
    scrollIntoView: Wi,
    scrolledOver: Ri,
    scrollParents: qi,
    getViewport: Ui,
    getViewportClientHeight: Yi,
  });
  var nn = rt(function (t) {
      return (
        !(!u(t, "uk-") && !u(t, "data-uk-")) &&
        s(t.replace("data-uk-", "").replace("uk-", ""))
      );
    }),
    rn = function (t) {
      this._init(t);
    };
  (rn.util = en),
    (rn.data = "__uikit__"),
    (rn.prefix = "uk-"),
    (rn.options = {}),
    (rn.version = "3.9.4"),
    (function (t) {
      var e,
        i = t.data;
      function n(t, e) {
        if (t) for (var i in t) t[i]._connected && t[i]._callUpdate(e);
      }
      (t.use = function (t) {
        if (!t.installed) return t.call(null, this), (t.installed = !0), this;
      }),
        (t.mixin = function (e, i) {
          (i = (z(i) ? t.component(i) : i) || this).options = Si(i.options, e);
        }),
        (t.extend = function (t) {
          t = t || {};
          var e = this,
            i = function (t) {
              this._init(t);
            };
          return (
            ((i.prototype = Object.create(e.prototype)).constructor = i),
            (i.options = Si(e.options, t)),
            (i.super = e),
            (i.extend = e.extend),
            i
          );
        }),
        (t.update = function (t, e) {
          Ht((t = t ? Z(t) : document.body))
            .reverse()
            .forEach(function (t) {
              return n(t[i], e);
            }),
            Ee(t, function (t) {
              return n(t[i], e);
            });
        }),
        Object.defineProperty(t, "container", {
          get: function () {
            return e || document.body;
          },
          set: function (t) {
            e = ze(t);
          },
        });
    })(rn),
    (function (t) {
      function e(t) {
        for (
          var e = this,
            i = this.$options.update,
            n = function (n) {
              var r = i[n],
                o = r.read,
                s = r.write,
                a = r.events;
              if (
                t.has("update") ||
                (a &&
                  a.some(function (e) {
                    return t.has(e);
                  }))
              ) {
                var h = void 0;
                o && (h = o.call(e, e._data, t)) && $(h) && U(e._data, h),
                  s &&
                    !1 !== h &&
                    wi.write(function () {
                      return s.call(e, e._data, t);
                    });
              }
            },
            r = 0;
          r < i.length;
          r++
        )
          n(r);
      }
      function n(t) {
        var e = this.$options.computed,
          n = this._computeds;
        for (var r in e) {
          var o = i(n, r),
            s = n[r];
          delete n[r];
          var a = e[r],
            h = a.watch,
            c = a.immediate;
          h && ((t && c) || (o && !R(s, this[r]))) && h.call(this, this[r], s);
        }
      }
      (t.prototype._callHook = function (t) {
        var e = this,
          i = this.$options[t];
        i &&
          i.forEach(function (t) {
            return t.call(e);
          });
      }),
        (t.prototype._callConnected = function () {
          this._connected ||
            ((this._data = {}),
            (this._computeds = {}),
            this._initProps(),
            this._callHook("beforeConnect"),
            (this._connected = !0),
            this._initEvents(),
            this._initObservers(),
            this._callHook("connected"),
            this._callUpdate());
        }),
        (t.prototype._callDisconnected = function () {
          this._connected &&
            (this._callHook("beforeDisconnect"),
            this._disconnectObservers(),
            this._unbindEvents(),
            this._callHook("disconnected"),
            (this._connected = !1),
            delete this._watch);
        }),
        (t.prototype._callUpdate = function (t) {
          var i = this;
          void 0 === t && (t = "update"),
            this._connected &&
              (("update" !== t && "resize" !== t) || this._callWatches(),
              this.$options.update &&
                (this._updates ||
                  ((this._updates = new Set()),
                  wi.read(function () {
                    i._connected && e.call(i, i._updates), delete i._updates;
                  })),
                this._updates.add(t.type || t)));
        }),
        (t.prototype._callWatches = function () {
          var t = this;
          if (!this._watch) {
            var e = !i(this, "_watch");
            this._watch = wi.read(function () {
              t._connected && n.call(t, e), (t._watch = null);
            });
          }
        });
    })(rn),
    (function (t) {
      var e = 0;
      function n(t, e) {
        var i = {},
          n = t.args;
        void 0 === n && (n = []);
        var o = t.props;
        void 0 === o && (o = {});
        var a = t.el;
        if (!o) return i;
        for (var h in o) {
          var l = r(h),
            d = ht(a, l);
          H(d) ||
            ((d = (o[h] === Boolean && "" === d) || c(o[h], d)),
            ("target" !== l || (d && !u(d, "_"))) && (i[h] = d));
        }
        var f = Ii(ht(a, e), n);
        for (var g in f) {
          var p = s(g);
          void 0 !== o[p] && (i[p] = c(o[p], f[g]));
        }
        return i;
      }
      function o(t, e, n) {
        Object.defineProperty(t, e, {
          enumerable: !0,
          get: function () {
            var r = t._computeds,
              o = t.$props,
              s = t.$el;
            return i(r, e) || (r[e] = (n.get || n).call(t, o, s)), r[e];
          },
          set: function (i) {
            var r = t._computeds;
            (r[e] = n.set ? n.set.call(t, i) : i), H(r[e]) && delete r[e];
          },
        });
      }
      function a(t, e, i) {
        $(e) || (e = { name: i, handler: e });
        var n = e.name,
          r = e.el,
          o = e.handler,
          s = e.capture,
          h = e.passive,
          c = e.delegate,
          l = e.filter,
          u = e.self;
        (r = C(r) ? r.call(t) : r || t.$el),
          k(r)
            ? r.forEach(function (n) {
                return a(t, U({}, e, { el: n }), i);
              })
            : !r ||
              (l && !l.call(t)) ||
              t._events.push(
                Kt(
                  r,
                  n,
                  c ? (z(c) ? c : c.call(t)) : null,
                  z(o) ? t[o] : o.bind(t),
                  { passive: h, capture: s, self: u }
                )
              );
      }
      function h(t, e) {
        return t.every(function (t) {
          return !t || !i(t, e);
        });
      }
      function c(t, e) {
        return t === Boolean
          ? O(e)
          : t === Number
          ? D(e)
          : "list" === t
          ? (function (t) {
              return k(t)
                ? t
                : z(t)
                ? t.split(/,(?![^(]*\))/).map(function (t) {
                    return _(t) ? D(t) : O(t.trim());
                  })
                : [t];
            })(e)
          : t
          ? t(e)
          : e;
      }
      function l(t) {
        var e = t.$options.el,
          i = new MutationObserver(function () {
            return t.$emit();
          });
        return i.observe(e, { childList: !0, subtree: !0 }), i;
      }
      function d(t) {
        var e = t.$name,
          i = t.$options,
          o = t.$props,
          a = i.attrs,
          h = i.props,
          c = i.el;
        if (h && !1 !== a) {
          var l = k(a) ? a : Object.keys(h),
            u = l
              .map(function (t) {
                return r(t);
              })
              .concat(e),
            d = new MutationObserver(function (r) {
              var a = n(i, e);
              r.some(function (t) {
                var i = t.attributeName,
                  n = i.replace("data-", "");
                return (n === e ? l : [s(n), s(i)]).some(function (t) {
                  return !H(a[t]) && a[t] !== o[t];
                });
              }) && t.$reset();
            });
          return (
            d.observe(c, {
              attributes: !0,
              attributeFilter: u.concat(
                u.map(function (t) {
                  return "data-" + t;
                })
              ),
            }),
            d
          );
        }
      }
      (t.prototype._init = function (t) {
        ((t = t || {}).data = (function (t, e) {
          var i = t.data,
            n = e.args,
            r = e.props;
          void 0 === r && (r = {});
          if (
            ((i = k(i)
              ? N(n)
                ? void 0
                : i.slice(0, n.length).reduce(function (t, e, i) {
                    return $(e) ? U(t, e) : (t[n[i]] = e), t;
                  }, {})
              : i),
            i)
          )
            for (var o in i)
              H(i[o]) ? delete i[o] : (i[o] = r[o] ? c(r[o], i[o]) : i[o]);
          return i;
        })(t, this.constructor.options)),
          (this.$options = Si(this.constructor.options, t, this)),
          (this.$el = null),
          (this.$props = {}),
          (this._uid = e++),
          this._initData(),
          this._initMethods(),
          this._initComputeds(),
          this._callHook("created"),
          t.el && this.$mount(t.el);
      }),
        (t.prototype._initData = function () {
          var t = this.$options.data;
          for (var e in (void 0 === t && (t = {}), t))
            this.$props[e] = this[e] = t[e];
        }),
        (t.prototype._initMethods = function () {
          var t = this.$options.methods;
          if (t) for (var e in t) this[e] = t[e].bind(this);
        }),
        (t.prototype._initComputeds = function () {
          var t = this.$options.computed;
          if (((this._computeds = {}), t)) for (var e in t) o(this, e, t[e]);
        }),
        (t.prototype._initProps = function (t) {
          var e;
          for (e in (t = t || n(this.$options, this.$name)))
            H(t[e]) || (this.$props[e] = t[e]);
          var i = [this.$options.computed, this.$options.methods];
          for (e in this.$props)
            e in t && h(i, e) && (this[e] = this.$props[e]);
        }),
        (t.prototype._initEvents = function () {
          var t = this;
          this._events = [];
          var e = this.$options.events;
          e &&
            e.forEach(function (e) {
              if (i(e, "handler")) a(t, e);
              else for (var n in e) a(t, e[n], n);
            });
        }),
        (t.prototype._unbindEvents = function () {
          this._events.forEach(function (t) {
            return t();
          }),
            delete this._events;
        }),
        (t.prototype._initObservers = function () {
          this._observers = [l(this), d(this)];
        }),
        (t.prototype._disconnectObservers = function () {
          this._observers.forEach(function (t) {
            return t && t.disconnect();
          });
        });
    })(rn),
    (function (t) {
      var e = t.data,
        i = {};
      (t.component = function (e, n) {
        var o = r(e);
        if (((e = s(o)), !n)) return $(i[e]) && (i[e] = t.extend(i[e])), i[e];
        t[e] = function (i, n) {
          for (var r = arguments.length, o = Array(r); r--; )
            o[r] = arguments[r];
          var s = t.component(e);
          return s.options.functional
            ? new s({ data: $(i) ? i : [].concat(o) })
            : i
            ? Ae(i).map(a)[0]
            : a(i);
          function a(i) {
            var r = t.getComponent(i, e);
            if (r) {
              if (!n) return r;
              r.$destroy();
            }
            return new s({ el: i, data: n });
          }
        };
        var a = $(n) ? U({}, n) : n.options;
        return (
          (a.name = e),
          a.install && a.install(t, a, e),
          t._initialized &&
            !a.functional &&
            wi.read(function () {
              return t[e]("[uk-" + o + "],[data-uk-" + o + "]");
            }),
          (i[e] = $(n) ? a : n)
        );
      }),
        (t.getComponents = function (t) {
          return (t && t[e]) || {};
        }),
        (t.getComponent = function (e, i) {
          return t.getComponents(e)[i];
        }),
        (t.connect = function (n) {
          if (n[e]) for (var r in n[e]) n[e][r]._callConnected();
          for (var o = 0; o < n.attributes.length; o++) {
            var s = nn(n.attributes[o].name);
            s && s in i && t[s](n);
          }
        }),
        (t.disconnect = function (t) {
          for (var i in t[e]) t[e][i]._callDisconnected();
        });
    })(rn),
    (function (t) {
      var e = t.data;
      (t.prototype.$create = function (e, i, n) {
        return t[e](i, n);
      }),
        (t.prototype.$mount = function (t) {
          var i = this.$options.name;
          t[e] || (t[e] = {}),
            t[e][i] ||
              ((t[e][i] = this),
              (this.$el = this.$options.el = this.$options.el || t),
              Nt(t, document) && this._callConnected());
        }),
        (t.prototype.$reset = function () {
          this._callDisconnected(), this._callConnected();
        }),
        (t.prototype.$destroy = function (t) {
          void 0 === t && (t = !1);
          var i = this.$options,
            n = i.el,
            r = i.name;
          n && this._callDisconnected(),
            this._callHook("destroy"),
            n &&
              n[e] &&
              (delete n[e][r], N(n[e]) || delete n[e], t && Le(this.$el));
        }),
        (t.prototype.$emit = function (t) {
          this._callUpdate(t);
        }),
        (t.prototype.$update = function (e, i) {
          void 0 === e && (e = this.$el), t.update(e, i);
        }),
        (t.prototype.$getComponent = t.getComponent);
      var i = rt(function (e) {
        return t.prefix + r(e);
      });
      Object.defineProperties(t.prototype, {
        $container: Object.getOwnPropertyDescriptor(t, "container"),
        $name: {
          get: function () {
            return i(this.$options.name);
          },
        },
      });
    })(rn);
  var on = {
      connected: function () {
        !Pe(this.$el, this.$name) && Ne(this.$el, this.$name);
      },
    },
    sn = {
      props: {
        cls: Boolean,
        animation: "list",
        duration: Number,
        origin: String,
        transition: String,
      },
      data: {
        cls: !1,
        animation: [!1],
        duration: 200,
        origin: !1,
        transition: "linear",
        clsEnter: "uk-togglabe-enter",
        clsLeave: "uk-togglabe-leave",
        initProps: {
          overflow: "",
          height: "",
          paddingTop: "",
          paddingBottom: "",
          marginTop: "",
          marginBottom: "",
        },
        hideProps: {
          overflow: "hidden",
          height: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginTop: 0,
          marginBottom: 0,
        },
      },
      computed: {
        hasAnimation: function (t) {
          return !!t.animation[0];
        },
        hasTransition: function (t) {
          var e = t.animation;
          return this.hasAnimation && !0 === e[0];
        },
      },
      methods: {
        toggleElement: function (t, e, i) {
          var n = this;
          return new le(function (r) {
            return le
              .all(
                F(t).map(function (t) {
                  var r = E(e) ? e : !n.isToggled(t);
                  if (!ee(t, "before" + (r ? "show" : "hide"), [n]))
                    return le.reject();
                  var o,
                    s = (
                      C(i)
                        ? i
                        : !1 !== i && n.hasAnimation
                        ? n.hasTransition
                          ? an(n)
                          : ((o = n),
                            function (t, e) {
                              ri.cancel(t);
                              var i = o.animation,
                                n = o.duration,
                                r = o._toggle;
                              return e
                                ? (r(t, !0), ri.in(t, i[0], n, o.origin))
                                : ri
                                    .out(t, i[1] || i[0], n, o.origin)
                                    .then(function () {
                                      return r(t, !1);
                                    });
                            })
                        : n._toggle
                    )(t, r),
                    a = r ? n.clsEnter : n.clsLeave;
                  Ne(t, a), ee(t, r ? "show" : "hide", [n]);
                  var h = function () {
                    He(t, a), ee(t, r ? "shown" : "hidden", [n]), n.$update(t);
                  };
                  return s
                    ? s.then(h, function () {
                        return He(t, a), le.reject();
                      })
                    : h();
                })
              )
              .then(r, Q);
          });
        },
        isToggled: function (t) {
          return (
            void 0 === t && (t = this.$el),
            !!Pe((t = F(t)[0]), this.clsEnter) ||
              (!Pe(t, this.clsLeave) &&
                (this.cls ? Pe(t, this.cls.split(" ")[0]) : bt(t)))
          );
        },
        _toggle: function (t, e) {
          var i;
          t &&
            ((e = Boolean(e)),
            this.cls
              ? (i = m(this.cls, " ") || e !== Pe(t, this.cls)) &&
                je(t, this.cls, m(this.cls, " ") ? void 0 : e)
              : (i = e === t.hidden) && (t.hidden = !e),
            Ae("[autofocus]", t).some(function (t) {
              return bt(t) ? t.focus() || !0 : t.blur();
            }),
            i && (ee(t, "toggled", [e, this]), this.$update(t)));
        },
      },
    };
  function an(t) {
    var e = t.isToggled,
      i = t.duration,
      n = t.initProps,
      r = t.hideProps,
      o = t.transition,
      s = t._toggle;
    return function (t, a) {
      var h = ti.inProgress(t),
        c = t.hasChildNodes
          ? P(Re(t.firstElementChild, "marginTop")) +
            P(Re(t.lastElementChild, "marginBottom"))
          : 0,
        l = bt(t) ? li(t) + (h ? 0 : c) : 0;
      ti.cancel(t), e(t) || s(t, !0), li(t, ""), wi.flush();
      var u = li(t) + (h ? 0 : c);
      return (
        li(t, l),
        (a
          ? ti.start(
              t,
              U({}, n, { overflow: "hidden", height: u }),
              Math.round(i * (1 - l / u)),
              o
            )
          : ti.start(t, r, Math.round(i * (l / u)), o).then(function () {
              return s(t, !1);
            })
        ).then(function () {
          return Re(t, n);
        })
      );
    };
  }
  var hn = {
    mixins: [on, sn],
    props: {
      targets: String,
      active: null,
      collapsible: Boolean,
      multiple: Boolean,
      toggle: String,
      content: String,
      transition: String,
      offset: Number,
    },
    data: {
      targets: "> *",
      active: !1,
      animation: [!0],
      collapsible: !0,
      multiple: !1,
      clsOpen: "uk-open",
      toggle: "> .uk-accordion-title",
      content: "> .uk-accordion-content",
      transition: "ease",
      offset: 0,
    },
    computed: {
      items: {
        get: function (t, e) {
          return Ae(t.targets, e);
        },
        watch: function (t, e) {
          var i = this;
          if (
            (t.forEach(function (t) {
              return cn(ze(i.content, t), !Pe(t, i.clsOpen));
            }),
            !e && !Pe(t, this.clsOpen))
          ) {
            var n =
              (!1 !== this.active && t[Number(this.active)]) ||
              (!this.collapsible && t[0]);
            n && this.toggle(n, !1);
          }
        },
        immediate: !0,
      },
      toggles: function (t) {
        var e = t.toggle;
        return this.items.map(function (t) {
          return ze(e, t);
        });
      },
    },
    events: [
      {
        name: "click",
        delegate: function () {
          return this.targets + " " + this.$props.toggle;
        },
        handler: function (t) {
          t.preventDefault(), this.toggle(Dt(this.toggles, t.current));
        },
      },
    ],
    methods: {
      toggle: function (t, e) {
        var i = this,
          n = [this.items[nt(t, this.items)]],
          r = It(this.items, "." + this.clsOpen);
        this.multiple || m(r, n[0]) || (n = n.concat(r)),
          (!this.collapsible &&
            r.length < 2 &&
            !It(n, ":not(." + this.clsOpen + ")").length) ||
            n.forEach(function (t) {
              return i.toggleElement(t, !Pe(t, i.clsOpen), function (t, n) {
                je(t, i.clsOpen, n),
                  ot(ze(i.$props.toggle, t), "aria-expanded", n);
                var r = ze((t._wrapper ? "> * " : "") + i.content, t);
                if (!1 !== e && i.hasTransition)
                  return (
                    t._wrapper ||
                      (t._wrapper = $e(r, "<div" + (n ? " hidden" : "") + ">")),
                    cn(r, !1),
                    an(i)(t._wrapper, n).then(function () {
                      if ((cn(r, !n), delete t._wrapper, Be(r), n)) {
                        var e = ze(i.$props.toggle, t);
                        Fi(e) || Wi(e, { offset: i.offset });
                      }
                    })
                  );
                cn(r, !n);
              });
            });
      },
    },
  };
  function cn(t, e) {
    t && (t.hidden = e);
  }
  var ln = {
      mixins: [on, sn],
      args: "animation",
      props: { close: String },
      data: {
        animation: [!0],
        selClose: ".uk-alert-close",
        duration: 150,
        hideProps: U({ opacity: 0 }, sn.data.hideProps),
      },
      events: [
        {
          name: "click",
          delegate: function () {
            return this.selClose;
          },
          handler: function (t) {
            t.preventDefault(), this.close();
          },
        },
      ],
      methods: {
        close: function () {
          var t = this;
          this.toggleElement(this.$el).then(function () {
            return t.$destroy(!0);
          });
        },
      },
    },
    un = {
      args: "autoplay",
      props: { automute: Boolean, autoplay: Boolean },
      data: { automute: !1, autoplay: !0 },
      computed: {
        inView: function (t) {
          return "inview" === t.autoplay;
        },
      },
      connected: function () {
        this.inView && !st(this.$el, "preload") && (this.$el.preload = "none"),
          this.automute && zi(this.$el);
      },
      update: {
        read: function () {
          return (
            !!Ai(this.$el) && {
              visible: bt(this.$el) && "hidden" !== Re(this.$el, "visibility"),
              inView: this.inView && Fi(this.$el),
            }
          );
        },
        write: function (t) {
          var e = t.visible,
            i = t.inView;
          !e || (this.inView && !i)
            ? Ei(this.$el)
            : (!0 === this.autoplay || (this.inView && i)) && Ti(this.$el);
        },
        events: ["resize", "scroll"],
      },
    },
    dn = {
      mixins: [on, un],
      props: { width: Number, height: Number },
      data: { automute: !0 },
      update: {
        read: function () {
          var t = this.$el,
            e =
              (function (t) {
                for (; (t = St(t)); )
                  if ("static" !== Re(t, "position")) return t;
              })(t) || St(t),
            i = e.offsetHeight,
            n = e.offsetWidth,
            r = it.cover(
              {
                width:
                  this.width || t.naturalWidth || t.videoWidth || t.clientWidth,
                height:
                  this.height ||
                  t.naturalHeight ||
                  t.videoHeight ||
                  t.clientHeight,
              },
              { width: n + (n % 2 ? 1 : 0), height: i + (i % 2 ? 1 : 0) }
            );
          return !(!r.width || !r.height) && r;
        },
        write: function (t) {
          var e = t.height,
            i = t.width;
          Re(this.$el, { height: e, width: i });
        },
        events: ["resize"],
      },
    };
  var fn,
    gn = {
      props: { container: Boolean },
      data: { container: !0 },
      computed: {
        container: function (t) {
          var e = t.container;
          return (!0 === e && this.$container) || (e && ze(e));
        },
      },
    },
    pn = {
      props: { pos: String, offset: null, flip: Boolean, clsPos: String },
      data: {
        pos: "bottom-" + (ut ? "right" : "left"),
        flip: !0,
        offset: !1,
        clsPos: "",
      },
      computed: {
        pos: function (t) {
          var e = t.pos;
          return (e + (m(e, "-") ? "" : "-center")).split("-");
        },
        dir: function () {
          return this.pos[0];
        },
        align: function () {
          return this.pos[1];
        },
      },
      methods: {
        positionAt: function (t, e, i) {
          Oe(t, this.clsPos + "-(top|bottom|left|right)(-[a-z]+)?");
          var n = this.offset,
            r = this.getAxis();
          if (!_(n)) {
            var o = ze(n);
            n = o
              ? ai(o)["x" === r ? "left" : "top"] -
                ai(e)["x" === r ? "right" : "bottom"]
              : 0;
          }
          var s = Gi(
              t,
              e,
              "x" === r
                ? gi(this.dir) + " " + this.align
                : this.align + " " + gi(this.dir),
              "x" === r
                ? this.dir + " " + this.align
                : this.align + " " + this.dir,
              "x" === r
                ? "" + ("left" === this.dir ? -n : n)
                : " " + ("top" === this.dir ? -n : n),
              null,
              this.flip,
              i
            ).target,
            a = s.x,
            h = s.y;
          (this.dir = "x" === r ? a : h),
            (this.align = "x" === r ? h : a),
            je(
              t,
              this.clsPos + "-" + this.dir + "-" + this.align,
              !1 === this.offset
            );
        },
        getAxis: function () {
          return "top" === this.dir || "bottom" === this.dir ? "y" : "x";
        },
      },
    },
    vn = {
      mixins: [gn, pn, sn],
      args: "pos",
      props: {
        mode: "list",
        toggle: Boolean,
        boundary: Boolean,
        boundaryAlign: Boolean,
        delayShow: Number,
        delayHide: Number,
        clsDrop: String,
      },
      data: {
        mode: ["click", "hover"],
        toggle: "- *",
        boundary: !0,
        boundaryAlign: !1,
        delayShow: 0,
        delayHide: 800,
        clsDrop: !1,
        animation: ["uk-animation-fade"],
        cls: "uk-open",
        container: !1,
      },
      computed: {
        boundary: function (t, e) {
          var i = t.boundary;
          return !0 === i ? window : Pt(i, e);
        },
        clsDrop: function (t) {
          return t.clsDrop || "uk-" + this.$options.name;
        },
        clsPos: function () {
          return this.clsDrop;
        },
      },
      created: function () {
        this.tracker = new bi();
      },
      connected: function () {
        Ne(this.$el, this.clsDrop),
          this.toggle &&
            !this.target &&
            (this.target = this.$create("toggle", Pt(this.toggle, this.$el), {
              target: this.$el,
              mode: this.mode,
            }));
      },
      disconnected: function () {
        this.isActive() && (fn = null);
      },
      events: [
        {
          name: "click",
          delegate: function () {
            return "." + this.clsDrop + "-close";
          },
          handler: function (t) {
            t.preventDefault(), this.hide(!1);
          },
        },
        {
          name: "click",
          delegate: function () {
            return 'a[href^="#"]';
          },
          handler: function (t) {
            var e = t.defaultPrevented,
              i = t.current.hash;
            e || !i || Nt(i, this.$el) || this.hide(!1);
          },
        },
        {
          name: "beforescroll",
          handler: function () {
            this.hide(!1);
          },
        },
        {
          name: "toggle",
          self: !0,
          handler: function (t, e) {
            t.preventDefault(),
              this.isToggled() ? this.hide(!1) : this.show(e.$el, !1);
          },
        },
        {
          name: "toggleshow",
          self: !0,
          handler: function (t, e) {
            t.preventDefault(), this.show(e.$el);
          },
        },
        {
          name: "togglehide",
          self: !0,
          handler: function (t) {
            t.preventDefault(), zt(this.$el, ":focus,:hover") || this.hide();
          },
        },
        {
          name: mt + " focusin",
          filter: function () {
            return m(this.mode, "hover");
          },
          handler: function (t) {
            he(t) || this.clearTimers();
          },
        },
        {
          name: xt + " focusout",
          filter: function () {
            return m(this.mode, "hover");
          },
          handler: function (t) {
            !he(t) && t.relatedTarget && this.hide();
          },
        },
        {
          name: "toggled",
          self: !0,
          handler: function (t, e) {
            e && (this.clearTimers(), this.position());
          },
        },
        {
          name: "show",
          self: !0,
          handler: function () {
            var t = this;
            (fn = this),
              this.tracker.init(),
              te(
                this.$el,
                "hide",
                Kt(document, pt, function (e) {
                  var i = e.target;
                  return (
                    !Nt(i, t.$el) &&
                    te(
                      document,
                      wt + " " + yt + " scroll",
                      function (e) {
                        var n = e.defaultPrevented,
                          r = e.type,
                          o = e.target;
                        n ||
                          r !== wt ||
                          i !== o ||
                          (t.target && Nt(i, t.target)) ||
                          t.hide(!1);
                      },
                      !0
                    )
                  );
                }),
                { self: !0 }
              ),
              te(
                this.$el,
                "hide",
                Kt(document, "keydown", function (e) {
                  27 === e.keyCode && t.hide(!1);
                }),
                { self: !0 }
              );
          },
        },
        {
          name: "beforehide",
          self: !0,
          handler: function () {
            this.clearTimers();
          },
        },
        {
          name: "hide",
          handler: function (t) {
            var e = t.target;
            this.$el === e
              ? ((fn = this.isActive() ? null : fn), this.tracker.cancel())
              : (fn =
                  null === fn && Nt(e, this.$el) && this.isToggled()
                    ? this
                    : fn);
          },
        },
      ],
      update: {
        write: function () {
          this.isToggled() && !Pe(this.$el, this.clsEnter) && this.position();
        },
        events: ["resize"],
      },
      methods: {
        show: function (t, e) {
          var i = this;
          if (
            (void 0 === t && (t = this.target),
            void 0 === e && (e = !0),
            this.isToggled() &&
              t &&
              this.target &&
              t !== this.target &&
              this.hide(!1),
            (this.target = t),
            this.clearTimers(),
            !this.isActive())
          ) {
            if (fn) {
              if (e && fn.isDelaying)
                return void (this.showTimer = setTimeout(this.show, 10));
              for (var n; fn && n !== fn && !Nt(this.$el, fn.$el); )
                (n = fn), fn.hide(!1);
            }
            this.container &&
              St(this.$el) !== this.container &&
              ye(this.container, this.$el),
              (this.showTimer = setTimeout(function () {
                return i.toggleElement(i.$el, !0);
              }, (e && this.delayShow) || 0));
          }
        },
        hide: function (t) {
          var e = this;
          void 0 === t && (t = !0);
          var i,
            n,
            r = function () {
              return e.toggleElement(e.$el, !1, !1);
            };
          this.clearTimers(),
            (this.isDelaying = ((i = this.$el),
            (n = []),
            Ee(i, function (t) {
              return "static" !== Re(t, "position") && n.push(t);
            }),
            n).some(function (t) {
              return e.tracker.movesTo(t);
            })),
            t && this.isDelaying
              ? (this.hideTimer = setTimeout(this.hide, 50))
              : t && this.delayHide
              ? (this.hideTimer = setTimeout(r, this.delayHide))
              : r();
        },
        clearTimers: function () {
          clearTimeout(this.showTimer),
            clearTimeout(this.hideTimer),
            (this.showTimer = null),
            (this.hideTimer = null),
            (this.isDelaying = !1);
        },
        isActive: function () {
          return fn === this;
        },
        position: function () {
          He(this.$el, this.clsDrop + "-stack"),
            je(this.$el, this.clsDrop + "-boundary", this.boundaryAlign);
          var t = ai(this.boundary),
            e = this.boundaryAlign ? t : ai(this.target);
          if ("justify" === this.align) {
            var i = "y" === this.getAxis() ? "width" : "height";
            Re(this.$el, i, e[i]);
          } else
            this.boundary &&
              this.$el.offsetWidth >
                Math.max(t.right - e.left, e.right - t.left) &&
              Ne(this.$el, this.clsDrop + "-stack");
          this.positionAt(
            this.$el,
            this.boundaryAlign ? this.boundary : this.target,
            this.boundary
          );
        },
      },
    };
  var wn = {
      mixins: [on],
      args: "target",
      props: { target: Boolean },
      data: { target: !1 },
      computed: {
        input: function (t, e) {
          return ze(Lt, e);
        },
        state: function () {
          return this.input.nextElementSibling;
        },
        target: function (t, e) {
          var i = t.target;
          return (
            i &&
            ((!0 === i &&
              St(this.input) === e &&
              this.input.nextElementSibling) ||
              Pt(i, e))
          );
        },
      },
      update: function () {
        var t = this.target,
          e = this.input;
        if (t) {
          var i,
            n = $t(t) ? "value" : "textContent",
            r = t[n],
            o =
              e.files && e.files[0]
                ? e.files[0].name
                : zt(e, "select") &&
                  (i = Ae("option", e).filter(function (t) {
                    return t.selected;
                  })[0])
                ? i.textContent
                : e.value;
          r !== o && (t[n] = o);
        }
      },
      events: [
        {
          name: "change",
          handler: function () {
            this.$update();
          },
        },
        {
          name: "reset",
          el: function () {
            return _t(this.$el, "form");
          },
          handler: function () {
            this.$update();
          },
        },
      ],
    },
    mn = {
      update: {
        read: function (t) {
          var e = Fi(this.$el);
          if (!e || t.isInView === e) return !1;
          t.isInView = e;
        },
        write: function () {
          this.$el.src = "" + this.$el.src;
        },
        events: ["scroll", "resize"],
      },
    },
    xn = {
      props: { margin: String, firstColumn: Boolean },
      data: { margin: "uk-margin-small-top", firstColumn: "uk-first-column" },
      update: {
        read: function () {
          var t = yn(this.$el.children);
          return { rows: t, columns: kn(t) };
        },
        write: function (t) {
          for (var e = t.columns, i = t.rows, n = 0; n < i.length; n++)
            for (var r = 0; r < i[n].length; r++)
              je(i[n][r], this.margin, 0 !== n),
                je(i[n][r], this.firstColumn, !!~e[0].indexOf(i[n][r]));
        },
        events: ["resize"],
      },
    };
  function yn(t) {
    return Cn(t, "top", "bottom");
  }
  function kn(t) {
    for (var e = [], i = 0; i < t.length; i++)
      for (var n = Cn(t[i], "left", "right"), r = 0; r < n.length; r++)
        e[r] = e[r] ? e[r].concat(n[r]) : n[r];
    return ut ? e.reverse() : e;
  }
  function Cn(t, e, i) {
    for (var n = [[]], r = 0; r < t.length; r++) {
      var o = t[r];
      if (bt(o))
        for (var s = bn(o), a = n.length - 1; a >= 0; a--) {
          var h = n[a];
          if (!h[0]) {
            h.push(o);
            break;
          }
          var c = void 0;
          if (
            (h[0].offsetParent === o.offsetParent
              ? (c = bn(h[0]))
              : ((s = bn(o, !0)), (c = bn(h[0], !0))),
            s[e] >= c[i] - 1 && s[e] !== c[e])
          ) {
            n.push([o]);
            break;
          }
          if (s[i] - 1 > c[e] || s[e] === c[e]) {
            h.push(o);
            break;
          }
          if (0 === a) {
            n.unshift([o]);
            break;
          }
        }
    }
    return n;
  }
  function bn(t, e) {
    var i;
    void 0 === e && (e = !1);
    var n = t.offsetTop,
      r = t.offsetLeft,
      o = t.offsetHeight,
      s = t.offsetWidth;
    return (
      e && ((n = (i = ci(t))[0]), (r = i[1])),
      { top: n, left: r, bottom: n + o, right: r + s }
    );
  }
  var Ln = {
    extends: xn,
    mixins: [on],
    name: "grid",
    props: { masonry: Boolean, parallax: Number },
    data: {
      margin: "uk-grid-margin",
      clsStack: "uk-grid-stack",
      masonry: !1,
      parallax: 0,
    },
    connected: function () {
      this.masonry && Ne(this.$el, "uk-flex-top uk-flex-wrap-top");
    },
    update: [
      {
        write: function (t) {
          var e = t.columns;
          je(this.$el, this.clsStack, e.length < 2);
        },
        events: ["resize"],
      },
      {
        read: function (t) {
          var e = t.columns,
            i = t.rows;
          if (!e.length || (!this.masonry && !this.parallax) || $n(this.$el))
            return (t.translates = !1), !1;
          var n = !1,
            r = Ot(this.$el),
            o = (function (t) {
              return t.map(function (t) {
                return t.reduce(function (t, e) {
                  return t + e.offsetHeight;
                }, 0);
              });
            })(e),
            s =
              (function (t, e) {
                var i = t.filter(function (t) {
                    return Pe(t, e);
                  }),
                  n = i[0];
                return P(n ? Re(n, "marginTop") : Re(t[0], "paddingLeft"));
              })(r, this.margin) *
              (i.length - 1),
            a = Math.max.apply(Math, o) + s;
          this.masonry &&
            (n = (function (t, e) {
              var i = t.map(function (t) {
                return Math.max.apply(
                  Math,
                  t.map(function (t) {
                    return t.offsetHeight;
                  })
                );
              });
              return e.map(function (t) {
                var e = 0;
                return t.map(function (n, r) {
                  return (e += r ? i[r - 1] - t[r - 1].offsetHeight : 0);
                });
              });
            })(
              i,
              (e = e.map(function (t) {
                return X(t, "offsetTop");
              }))
            ));
          var h = Math.abs(this.parallax);
          return (
            h &&
              (h = o.reduce(function (t, e, i) {
                return Math.max(t, e + s + (i % 2 ? h : h / 8) - a);
              }, 0)),
            { padding: h, columns: e, translates: n, height: n ? a : "" }
          );
        },
        write: function (t) {
          var e = t.height,
            i = t.padding;
          Re(this.$el, "paddingBottom", i || ""),
            !1 !== e && Re(this.$el, "height", e);
        },
        events: ["resize"],
      },
      {
        read: function (t) {
          var e = t.height;
          return (
            !$n(this.$el) && {
              scrolled:
                !!this.parallax &&
                Ri(this.$el, e ? e - li(this.$el) : 0) *
                  Math.abs(this.parallax),
            }
          );
        },
        write: function (t) {
          var e = t.columns,
            i = t.scrolled,
            n = t.translates;
          (!1 !== i || n) &&
            e.forEach(function (t, e) {
              return t.forEach(function (t, r) {
                return Re(
                  t,
                  "transform",
                  i || n
                    ? "translateY(" +
                        ((n && -n[e][r]) + (i ? (e % 2 ? i : i / 8) : 0)) +
                        "px)"
                    : ""
                );
              });
            });
        },
        events: ["scroll", "resize"],
      },
    ],
  };
  function $n(t) {
    return Ot(t).some(function (t) {
      return "absolute" === Re(t, "position");
    });
  }
  var Mn = lt
      ? {
          props: { selMinHeight: String },
          data: { selMinHeight: !1, forceHeight: !1 },
          computed: {
            elements: function (t, e) {
              var i = t.selMinHeight;
              return i ? Ae(i, e) : [e];
            },
          },
          update: [
            {
              read: function () {
                Re(this.elements, "height", "");
              },
              order: -5,
              events: ["resize"],
            },
            {
              write: function () {
                var t = this;
                this.elements.forEach(function (e) {
                  var i = P(Re(e, "minHeight"));
                  i &&
                    (t.forceHeight ||
                      Math.round(i + fi(e, "height", "content-box")) >=
                        e.offsetHeight) &&
                    Re(e, "height", i);
                });
              },
              order: 5,
              events: ["resize"],
            },
          ],
        }
      : {},
    Bn = {
      mixins: [Mn],
      args: "target",
      props: { target: String, row: Boolean },
      data: { target: "> *", row: !0, forceHeight: !0 },
      computed: {
        elements: function (t, e) {
          return Ae(t.target, e);
        },
      },
      update: {
        read: function () {
          return {
            rows: (this.row ? yn(this.elements) : [this.elements]).map(Sn),
          };
        },
        write: function (t) {
          t.rows.forEach(function (t) {
            var e = t.heights;
            return t.elements.forEach(function (t, i) {
              return Re(t, "minHeight", e[i]);
            });
          });
        },
        events: ["resize"],
      },
    };
  function Sn(t) {
    if (t.length < 2) return { heights: [""], elements: t };
    var e = t.map(In),
      i = Math.max.apply(Math, e),
      n = t.some(function (t) {
        return t.style.minHeight;
      }),
      r = t.some(function (t, n) {
        return !t.style.minHeight && e[n] < i;
      });
    return (
      n &&
        r &&
        (Re(t, "minHeight", ""),
        (e = t.map(In)),
        (i = Math.max.apply(Math, e))),
      {
        heights: (e = t.map(function (t, n) {
          return e[n] === i && P(t.style.minHeight).toFixed(2) !== i.toFixed(2)
            ? ""
            : i;
        })),
        elements: t,
      }
    );
  }
  function In(t) {
    var e = !1;
    bt(t) || ((e = t.style.display), Re(t, "display", "block", "important"));
    var i = si(t).height - fi(t, "height", "content-box");
    return !1 !== e && Re(t, "display", e), i;
  }
  var Tn = {
      mixins: [Mn],
      props: {
        expand: Boolean,
        offsetTop: Boolean,
        offsetBottom: Boolean,
        minHeight: Number,
      },
      data: { expand: !1, offsetTop: !1, offsetBottom: !1, minHeight: 0 },
      update: {
        read: function (t) {
          var e = t.minHeight;
          if (!bt(this.$el)) return !1;
          var i = "",
            n = fi(this.$el, "height", "content-box");
          if (this.expand)
            i =
              li(window) -
                (si(document.documentElement).height - si(this.$el).height) -
                n || "";
          else {
            if (((i = "calc(100vh"), this.offsetTop)) {
              var r = ai(this.$el).top;
              i += r > 0 && r < li(window) / 2 ? " - " + r + "px" : "";
            }
            !0 === this.offsetBottom
              ? (i += " - " + si(this.$el.nextElementSibling).height + "px")
              : _(this.offsetBottom)
              ? (i += " - " + this.offsetBottom + "vh")
              : this.offsetBottom && f(this.offsetBottom, "px")
              ? (i += " - " + P(this.offsetBottom) + "px")
              : z(this.offsetBottom) &&
                (i +=
                  " - " + si(Pt(this.offsetBottom, this.$el)).height + "px"),
              (i += (n ? " - " + n + "px" : "") + ")");
          }
          return { minHeight: i, prev: e };
        },
        write: function (t) {
          var e = t.minHeight,
            i = t.prev;
          Re(this.$el, { minHeight: e }),
            e !== i && this.$update(this.$el, "resize"),
            this.minHeight &&
              P(Re(this.$el, "minHeight")) < this.minHeight &&
              Re(this.$el, "minHeight", this.minHeight);
        },
        events: ["resize"],
      },
    },
    En = {
      args: "src",
      props: {
        id: Boolean,
        icon: String,
        src: String,
        style: String,
        width: Number,
        height: Number,
        ratio: Number,
        class: String,
        strokeAnimation: Boolean,
        focusable: Boolean,
        attributes: "list",
      },
      data: {
        ratio: 1,
        include: ["style", "class", "focusable"],
        class: "",
        strokeAnimation: !1,
      },
      beforeConnect: function () {
        this.class += " uk-svg";
      },
      connected: function () {
        var t,
          e = this;
        !this.icon &&
          m(this.src, "#") &&
          ((t = this.src.split("#")), (this.src = t[0]), (this.icon = t[1])),
          (this.svg = this.getSvg().then(function (t) {
            if (e._connected) {
              var i = (function (t, e) {
                if (Ct(e) || "CANVAS" === e.tagName) {
                  e.hidden = !0;
                  var i = e.nextElementSibling;
                  return Hn(t, i) ? i : Ce(e, t);
                }
                var n = e.lastElementChild;
                return Hn(t, n) ? n : ye(e, t);
              })(t, e.$el);
              return (
                e.svgEl && i !== e.svgEl && Le(e.svgEl),
                e.applyAttributes(i, t),
                e.$emit(),
                (e.svgEl = i)
              );
            }
          }, Q));
      },
      disconnected: function () {
        var t = this;
        this.svg.then(function (e) {
          t._connected ||
            (Ct(t.$el) && (t.$el.hidden = !1), Le(e), (t.svgEl = null));
        }),
          (this.svg = null);
      },
      update: {
        read: function () {
          return !!(this.strokeAnimation && this.svgEl && bt(this.svgEl));
        },
        write: function () {
          var t, e;
          (t = this.svgEl),
            (e = Nn(t)) && t.style.setProperty("--uk-animation-stroke", e);
        },
        type: ["resize"],
      },
      methods: {
        getSvg: function () {
          var t = this;
          return zn(this.src).then(function (e) {
            return (
              (function (t, e) {
                e &&
                  m(t, "<symbol") &&
                  (t =
                    (function (t, e) {
                      if (!_n[t]) {
                        var i;
                        for (_n[t] = {}, An.lastIndex = 0; (i = An.exec(t)); )
                          _n[t][i[3]] =
                            '<svg xmlns="http://www.w3.org/2000/svg"' +
                            i[1] +
                            "svg>";
                      }
                      return _n[t][e];
                    })(t, e) || t);
                return (
                  (t = ze(t.substr(t.indexOf("<svg")))),
                  t && t.hasChildNodes() && t
                );
              })(e, t.icon) || le.reject("SVG not found.")
            );
          });
        },
        applyAttributes: function (t, e) {
          var i = this;
          for (var n in this.$options.props)
            m(this.include, n) && n in this && ot(t, n, this[n]);
          for (var r in this.attributes) {
            var o = this.attributes[r].split(":", 2),
              s = o[0],
              a = o[1];
            ot(t, s, a);
          }
          this.id || at(t, "id");
          var h = ["width", "height"],
            c = h.map(function (t) {
              return i[t];
            });
          c.some(function (t) {
            return t;
          }) ||
            (c = h.map(function (t) {
              return ot(e, t);
            }));
          var l = ot(e, "viewBox");
          l &&
            !c.some(function (t) {
              return t;
            }) &&
            (c = l.split(" ").slice(2)),
            c.forEach(function (e, n) {
              return ot(t, h[n], P(e) * i.ratio || null);
            });
        },
      },
    },
    zn = rt(function (t) {
      return new le(function (e, i) {
        t
          ? u(t, "data:")
            ? e(decodeURIComponent(t.split(",")[1]))
            : ve(t).then(
                function (t) {
                  return e(t.response);
                },
                function () {
                  return i("SVG not found.");
                }
              )
          : i();
      });
    });
  var An = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g,
    _n = {};
  function Nn(t) {
    return Math.ceil(
      Math.max.apply(
        Math,
        [0].concat(
          Ae("[stroke]", t).map(function (t) {
            try {
              return t.getTotalLength();
            } catch (t) {
              return 0;
            }
          })
        )
      )
    );
  }
  function Hn(t, e) {
    return On(t) && On(e) && Dn(t) === Dn(e);
  }
  function On(t) {
    return t && "svg" === t.tagName;
  }
  function Dn(t) {
    return (
      t.innerHTML ||
      new XMLSerializer()
        .serializeToString(t)
        .replace(/<svg.*?>(.*?)<\/svg>/g, "$1")
    ).replace(/\s/g, "");
  }
  var Pn = {
      spinner:
        '<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>',
      totop:
        '<svg width="18" height="10" viewBox="0 0 18 10" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9 "/></svg>',
      marker:
        '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="4" width="1" height="11"/><rect x="4" y="9" width="11" height="1"/></svg>',
      "close-icon":
        '<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>',
      "close-large":
        '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>',
      "navbar-toggle-icon":
        '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect y="9" width="20" height="2"/><rect y="3" width="20" height="2"/><rect y="15" width="20" height="2"/></svg>',
      "overlay-icon":
        '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect x="19" y="0" width="1" height="40"/><rect x="0" y="19" width="40" height="1"/></svg>',
      "pagination-next":
        '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>',
      "pagination-previous":
        '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>',
      "search-icon":
        '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',
      "search-large":
        '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>',
      "search-navbar":
        '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>',
      "slidenav-next":
        '<svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1 "/></svg>',
      "slidenav-next-large":
        '<svg width="25" height="40" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5 "/></svg>',
      "slidenav-previous":
        '<svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23 "/></svg>',
      "slidenav-previous-large":
        '<svg width="25" height="40" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547 "/></svg>',
    },
    jn = {
      install: function (t) {
        t.icon.add = function (e, i) {
          var n,
            r = z(e) ? (((n = {})[e] = i), n) : e;
          J(r, function (t, e) {
            (Pn[e] = t), delete qn[e];
          }),
            t._initialized &&
              Ee(document.body, function (e) {
                return J(t.getComponents(e), function (t) {
                  t.$options.isIcon && t.icon in r && t.$reset();
                });
              });
        };
      },
      extends: En,
      args: "icon",
      props: ["icon"],
      data: { include: ["focusable"] },
      isIcon: !0,
      beforeConnect: function () {
        Ne(this.$el, "uk-icon");
      },
      methods: {
        getSvg: function () {
          var t = (function (t) {
            if (!Pn[t]) return null;
            qn[t] ||
              (qn[t] = ze(
                (
                  Pn[
                    (function (t) {
                      return ut
                        ? q(q(t, "left", "right"), "previous", "next")
                        : t;
                    })(t)
                  ] || Pn[t]
                ).trim()
              ));
            return qn[t].cloneNode(!0);
          })(this.icon);
          return t ? le.resolve(t) : le.reject("Icon not found.");
        },
      },
    },
    Zn = {
      args: !1,
      extends: jn,
      data: function (t) {
        return { icon: r(t.constructor.options.name) };
      },
      beforeConnect: function () {
        Ne(this.$el, this.$name);
      },
    },
    Fn = {
      extends: Zn,
      beforeConnect: function () {
        Ne(this.$el, "uk-slidenav");
      },
      computed: {
        icon: function (t, e) {
          var i = t.icon;
          return Pe(e, "uk-slidenav-large") ? i + "-large" : i;
        },
      },
    },
    Vn = {
      extends: Zn,
      computed: {
        icon: function (t, e) {
          var i = t.icon;
          return Pe(e, "uk-search-icon") && Ht(e, ".uk-search-large").length
            ? "search-large"
            : Ht(e, ".uk-search-navbar").length
            ? "search-navbar"
            : i;
        },
      },
    },
    Wn = {
      extends: Zn,
      computed: {
        icon: function () {
          return "close-" + (Pe(this.$el, "uk-close-large") ? "large" : "icon");
        },
      },
    },
    Rn = {
      extends: Zn,
      connected: function () {
        var t = this;
        this.svg.then(function (e) {
          return (
            e &&
            1 !== t.ratio &&
            Re(ze("circle", e), "strokeWidth", 1 / t.ratio)
          );
        });
      },
    },
    qn = {};
  var Un = {
    args: "dataSrc",
    props: {
      dataSrc: String,
      dataSrcset: Boolean,
      sizes: String,
      width: Number,
      height: Number,
      offsetTop: String,
      offsetLeft: String,
      target: String,
    },
    data: {
      dataSrc: "",
      dataSrcset: !1,
      sizes: !1,
      width: !1,
      height: !1,
      offsetTop: "50vh",
      offsetLeft: "50vw",
      target: !1,
    },
    computed: {
      cacheKey: function (t) {
        var e = t.dataSrc;
        return this.$name + "." + e;
      },
      width: function (t) {
        var e = t.width,
          i = t.dataWidth;
        return e || i;
      },
      height: function (t) {
        var e = t.height,
          i = t.dataHeight;
        return e || i;
      },
      sizes: function (t) {
        var e = t.sizes,
          i = t.dataSizes;
        return e || i;
      },
      isImg: function (t, e) {
        return tr(e);
      },
      target: {
        get: function (t) {
          var e = t.target;
          return [this.$el].concat(jt(e, this.$el));
        },
        watch: function () {
          this.observe();
        },
      },
      offsetTop: function (t) {
        return pi(t.offsetTop, "height");
      },
      offsetLeft: function (t) {
        return pi(t.offsetLeft, "width");
      },
    },
    connected: function () {
      window.IntersectionObserver
        ? (ir[this.cacheKey]
            ? Yn(this.$el, ir[this.cacheKey], this.dataSrcset, this.sizes)
            : this.isImg &&
              this.width &&
              this.height &&
              Yn(
                this.$el,
                (function (t, e, i) {
                  var n;
                  i &&
                    ((t = (n = it.ratio(
                      { width: t, height: e },
                      "width",
                      pi(Xn(i))
                    )).width),
                    (e = n.height));
                  return (
                    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="' +
                    t +
                    '" height="' +
                    e +
                    '"></svg>'
                  );
                })(this.width, this.height, this.sizes)
              ),
          (this.observer = new IntersectionObserver(this.load, {
            rootMargin: this.offsetTop + "px " + this.offsetLeft + "px",
          })),
          requestAnimationFrame(this.observe))
        : Yn(this.$el, this.dataSrc, this.dataSrcset, this.sizes);
    },
    disconnected: function () {
      this.observer && this.observer.disconnect();
    },
    update: {
      read: function (t) {
        var e = this,
          i = t.image;
        return (
          !!this.observer &&
          (i ||
            "complete" !== document.readyState ||
            this.load(this.observer.takeRecords()),
          !this.isImg &&
            void (
              i &&
              i.then(function (t) {
                return t && "" !== t.currentSrc && Yn(e.$el, er(t));
              })
            ))
        );
      },
      write: function (t) {
        if (this.dataSrcset && 1 !== window.devicePixelRatio) {
          var e = Re(this.$el, "backgroundSize");
          (e.match(/^(auto\s?)+$/) || P(e) === t.bgSize) &&
            ((t.bgSize =
              ((i = this.dataSrcset),
              (n = this.sizes),
              (r = pi(Xn(n))),
              (o = (i.match(Qn) || []).map(P).sort(function (t, e) {
                return t - e;
              })).filter(function (t) {
                return t >= r;
              })[0] ||
                o.pop() ||
                "")),
            Re(this.$el, "backgroundSize", t.bgSize + "px"));
        }
        var i, n, r, o;
      },
      events: ["resize"],
    },
    methods: {
      load: function (t) {
        var e = this;
        t.some(function (t) {
          return H(t.isIntersecting) || t.isIntersecting;
        }) &&
          ((this._data.image = we(
            this.dataSrc,
            this.dataSrcset,
            this.sizes
          ).then(
            function (t) {
              return (
                Yn(e.$el, er(t), t.srcset, t.sizes), (ir[e.cacheKey] = er(t)), t
              );
            },
            function (t) {
              return ee(e.$el, new t.constructor(t.type, t));
            }
          )),
          this.observer.disconnect());
      },
      observe: function () {
        var t = this;
        this._connected &&
          !this._data.image &&
          this.target.forEach(function (e) {
            return t.observer.observe(e);
          });
      },
    },
  };
  function Yn(t, e, i, n) {
    if (tr(t)) {
      var r = function (e, i) {
        return i && i !== t[e] && (t[e] = i);
      };
      r("sizes", n), r("srcset", i), r("src", e);
    } else if (e) {
      !m(t.style.backgroundImage, e) &&
        (Re(t, "backgroundImage", "url(" + Gt(e) + ")"), ee(t, ie("load", !1)));
    }
  }
  var Jn = /\s*(.*?)\s*(\w+|calc\(.*?\))\s*(?:,|$)/g;
  function Xn(t) {
    var e, i;
    for (Jn.lastIndex = 0; (e = Jn.exec(t)); )
      if (!e[1] || window.matchMedia(e[1]).matches) {
        e = u((i = e[2]), "calc")
          ? i
              .slice(5, -1)
              .replace(Gn, function (t) {
                return pi(t);
              })
              .replace(/ /g, "")
              .match(Kn)
              .reduce(function (t, e) {
                return t + +e;
              }, 0)
          : i;
        break;
      }
    return e || "100vw";
  }
  var Gn = /\d+(?:\w+|%)/g,
    Kn = /[+-]?(\d+)/g;
  var Qn = /\s+\d+w\s*(?:,|$)/g;
  function tr(t) {
    return "IMG" === t.tagName;
  }
  function er(t) {
    return t.currentSrc || t.src;
  }
  var ir,
    nr = "__test__";
  try {
    ((ir = window.sessionStorage || {})[nr] = 1), delete ir[nr];
  } catch (t) {
    ir = {};
  }
  var rr = {
    props: { media: Boolean },
    data: { media: !1 },
    computed: {
      matchMedia: function () {
        var t = (function (t) {
          if (z(t))
            if ("@" === t[0]) {
              var e = "breakpoint-" + t.substr(1);
              t = P(Xe(e));
            } else if (isNaN(t)) return t;
          return !(!t || isNaN(t)) && "(min-width: " + t + "px)";
        })(this.media);
        return !t || window.matchMedia(t).matches;
      },
    },
  };
  var or = {
      mixins: [on, rr],
      props: { fill: String },
      data: {
        fill: "",
        clsWrapper: "uk-leader-fill",
        clsHide: "uk-leader-hide",
        attrFill: "data-fill",
      },
      computed: {
        fill: function (t) {
          return t.fill || Xe("leader-fill-content");
        },
      },
      connected: function () {
        var t;
        (t = Me(this.$el, '<span class="' + this.clsWrapper + '">')),
          (this.wrapper = t[0]);
      },
      disconnected: function () {
        Be(this.wrapper.childNodes);
      },
      update: {
        read: function (t) {
          var e = t.changed,
            i = t.width,
            n = i;
          return {
            width: (i = Math.floor(this.$el.offsetWidth / 2)),
            fill: this.fill,
            changed: e || n !== i,
            hide: !this.matchMedia,
          };
        },
        write: function (t) {
          je(this.wrapper, this.clsHide, t.hide),
            t.changed &&
              ((t.changed = !1),
              ot(this.wrapper, this.attrFill, new Array(t.width).join(t.fill)));
        },
        events: ["resize"],
      },
    },
    sr = [],
    ar = {
      mixins: [on, gn, sn],
      props: {
        selPanel: String,
        selClose: String,
        escClose: Boolean,
        bgClose: Boolean,
        stack: Boolean,
      },
      data: {
        cls: "uk-open",
        escClose: !0,
        bgClose: !0,
        overlay: !0,
        stack: !1,
      },
      computed: {
        panel: function (t, e) {
          return ze(t.selPanel, e);
        },
        transitionElement: function () {
          return this.panel;
        },
        bgClose: function (t) {
          return t.bgClose && this.panel;
        },
      },
      beforeDisconnect: function () {
        m(sr, this) && this.toggleElement(this.$el, !1, !1);
      },
      events: [
        {
          name: "click",
          delegate: function () {
            return this.selClose;
          },
          handler: function (t) {
            t.preventDefault(), this.hide();
          },
        },
        {
          name: "toggle",
          self: !0,
          handler: function (t, e) {
            t.defaultPrevented ||
              (t.preventDefault(),
              this.isToggled() === m(sr, this) && this.toggle());
          },
        },
        {
          name: "beforeshow",
          self: !0,
          handler: function (t) {
            if (m(sr, this)) return !1;
            !this.stack && sr.length
              ? (le
                  .all(
                    sr.map(function (t) {
                      return t.hide();
                    })
                  )
                  .then(this.show),
                t.preventDefault())
              : sr.push(this);
          },
        },
        {
          name: "show",
          self: !0,
          handler: function () {
            var t = this,
              e = document.documentElement;
            ui(window) > e.clientWidth &&
              this.overlay &&
              Re(document.body, "overflowY", "scroll"),
              this.stack &&
                Re(this.$el, "zIndex", P(Re(this.$el, "zIndex")) + sr.length),
              Ne(e, this.clsPage),
              this.bgClose &&
                te(
                  this.$el,
                  "hide",
                  Kt(document, pt, function (e) {
                    var i = e.target;
                    Y(sr) !== t ||
                      (t.overlay && !Nt(i, t.$el)) ||
                      Nt(i, t.panel) ||
                      te(
                        document,
                        wt + " " + yt + " scroll",
                        function (e) {
                          var n = e.defaultPrevented,
                            r = e.type,
                            o = e.target;
                          n || r !== wt || i !== o || t.hide();
                        },
                        !0
                      );
                  }),
                  { self: !0 }
                ),
              this.escClose &&
                te(
                  this.$el,
                  "hide",
                  Kt(document, "keydown", function (e) {
                    27 === e.keyCode && Y(sr) === t && t.hide();
                  }),
                  { self: !0 }
                );
          },
        },
        {
          name: "shown",
          self: !0,
          handler: function () {
            Bt(this.$el) || ot(this.$el, "tabindex", "-1"),
              ze(":focus", this.$el) || this.$el.focus();
          },
        },
        {
          name: "hidden",
          self: !0,
          handler: function () {
            var t = this;
            m(sr, this) && sr.splice(sr.indexOf(this), 1),
              sr.length || Re(document.body, "overflowY", ""),
              Re(this.$el, "zIndex", ""),
              sr.some(function (e) {
                return e.clsPage === t.clsPage;
              }) || He(document.documentElement, this.clsPage);
          },
        },
      ],
      methods: {
        toggle: function () {
          return this.isToggled() ? this.hide() : this.show();
        },
        show: function () {
          var t = this;
          return this.container && St(this.$el) !== this.container
            ? (ye(this.container, this.$el),
              new le(function (e) {
                return requestAnimationFrame(function () {
                  return t.show().then(e);
                });
              }))
            : this.toggleElement(this.$el, !0, hr(this));
        },
        hide: function () {
          return this.toggleElement(this.$el, !1, hr(this));
        },
      },
    };
  function hr(t) {
    var e = t.transitionElement,
      i = t._toggle;
    return function (t, n) {
      return new le(function (r, o) {
        return te(t, "show hide", function () {
          t._reject && t._reject(), (t._reject = o), i(t, n);
          var s = te(
              e,
              "transitionstart",
              function () {
                te(e, "transitionend transitioncancel", r, { self: !0 }),
                  clearTimeout(a);
              },
              { self: !0 }
            ),
            a = setTimeout(function () {
              s(), r();
            }, W(Re(e, "transitionDuration")));
        });
      }).then(function () {
        return delete t._reject;
      });
    };
  }
  var cr = {
    install: function (t) {
      var e = t.modal;
      function i(t, i, n, r) {
        i = U({ bgClose: !1, escClose: !0, labels: e.labels }, i);
        var o = e.dialog(t(i), i),
          s = new ue(),
          a = !1;
        return (
          Kt(o.$el, "submit", "form", function (t) {
            t.preventDefault(), s.resolve(r && r(o)), (a = !0), o.hide();
          }),
          Kt(o.$el, "hide", function () {
            return !a && n(s);
          }),
          (s.promise.dialog = o),
          s.promise
        );
      }
      (e.dialog = function (t, i) {
        var n = e(
          '<div class="uk-modal"> <div class="uk-modal-dialog">' +
            t +
            "</div> </div>",
          i
        );
        return (
          n.show(),
          Kt(
            n.$el,
            "hidden",
            function () {
              return le.resolve().then(function () {
                return n.$destroy(!0);
              });
            },
            { self: !0 }
          ),
          n
        );
      }),
        (e.alert = function (t, e) {
          return i(
            function (e) {
              var i = e.labels;
              return (
                '<div class="uk-modal-body">' +
                (z(t) ? t : xe(t)) +
                '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>' +
                i.ok +
                "</button> </div>"
              );
            },
            e,
            function (t) {
              return t.resolve();
            }
          );
        }),
        (e.confirm = function (t, e) {
          return i(
            function (e) {
              var i = e.labels;
              return (
                '<form> <div class="uk-modal-body">' +
                (z(t) ? t : xe(t)) +
                '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' +
                i.cancel +
                '</button> <button class="uk-button uk-button-primary" autofocus>' +
                i.ok +
                "</button> </div> </form>"
              );
            },
            e,
            function (t) {
              return t.reject();
            }
          );
        }),
        (e.prompt = function (t, e, n) {
          return i(
            function (i) {
              var n = i.labels;
              return (
                '<form class="uk-form-stacked"> <div class="uk-modal-body"> <label>' +
                (z(t) ? t : xe(t)) +
                '</label> <input class="uk-input" value="' +
                (e || "") +
                '" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' +
                n.cancel +
                '</button> <button class="uk-button uk-button-primary">' +
                n.ok +
                "</button> </div> </form>"
              );
            },
            n,
            function (t) {
              return t.resolve(null);
            },
            function (t) {
              return ze("input", t.$el).value;
            }
          );
        }),
        (e.labels = { ok: "Ok", cancel: "Cancel" });
    },
    mixins: [ar],
    data: {
      clsPage: "uk-modal-page",
      selPanel: ".uk-modal-dialog",
      selClose:
        ".uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full",
    },
    events: [
      {
        name: "show",
        self: !0,
        handler: function () {
          Pe(this.panel, "uk-margin-auto-vertical")
            ? Ne(this.$el, "uk-flex")
            : Re(this.$el, "display", "block"),
            li(this.$el);
        },
      },
      {
        name: "hidden",
        self: !0,
        handler: function () {
          Re(this.$el, "display", ""), He(this.$el, "uk-flex");
        },
      },
    ],
  };
  var lr = {
      extends: hn,
      data: { targets: "> .uk-parent", toggle: "> a", content: "> ul" },
    },
    ur = ".uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle",
    dr = {
      mixins: [on, gn, Mn],
      props: {
        dropdown: String,
        mode: "list",
        align: String,
        offset: Number,
        boundary: Boolean,
        boundaryAlign: Boolean,
        clsDrop: String,
        delayShow: Number,
        delayHide: Number,
        dropbar: Boolean,
        dropbarMode: String,
        dropbarAnchor: Boolean,
        duration: Number,
      },
      data: {
        dropdown: ur,
        align: ut ? "right" : "left",
        clsDrop: "uk-navbar-dropdown",
        mode: void 0,
        offset: void 0,
        delayShow: void 0,
        delayHide: void 0,
        boundaryAlign: void 0,
        flip: "x",
        boundary: !0,
        dropbar: !1,
        dropbarMode: "slide",
        dropbarAnchor: !1,
        duration: 200,
        forceHeight: !0,
        selMinHeight: ur,
        container: !1,
      },
      computed: {
        boundary: function (t, e) {
          var i = t.boundary,
            n = t.boundaryAlign;
          return !0 === i || n ? e : i;
        },
        dropbarAnchor: function (t, e) {
          return Pt(t.dropbarAnchor, e);
        },
        pos: function (t) {
          return "bottom-" + t.align;
        },
        dropbar: {
          get: function (t) {
            var e = t.dropbar;
            return e
              ? (e =
                  this._dropbar ||
                  Pt(e, this.$el) ||
                  ze("+ .uk-navbar-dropbar", this.$el)) ||
                  (this._dropbar = ze("<div></div>"))
              : null;
          },
          watch: function (t) {
            Ne(t, "uk-navbar-dropbar");
          },
          immediate: !0,
        },
        dropContainer: function (t, e) {
          return this.container || e;
        },
        dropdowns: {
          get: function (t, e) {
            var i = this,
              n = t.clsDrop,
              r = Ae("." + n, e);
            return (
              this.dropContainer !== e &&
                Ae("." + n, this.dropContainer).forEach(function (t) {
                  var e = i.getDropdown(t);
                  !m(r, t) && e && e.target && Nt(e.target, i.$el) && r.push(t);
                }),
              r
            );
          },
          watch: function (t) {
            var e = this;
            this.$create(
              "drop",
              t.filter(function (t) {
                return !e.getDropdown(t);
              }),
              U({}, this.$props, {
                boundary: this.boundary,
                pos: this.pos,
                offset: this.dropbar || this.offset,
              })
            );
          },
          immediate: !0,
        },
        toggles: function (t, e) {
          return Ae(t.dropdown, e);
        },
      },
      disconnected: function () {
        this.dropbar && Le(this.dropbar), delete this._dropbar;
      },
      events: [
        {
          name: "mouseover focusin",
          delegate: function () {
            return this.dropdown;
          },
          handler: function (t) {
            var e = t.current,
              i = this.getActive();
            i &&
              m(i.mode, "hover") &&
              i.target &&
              !Nt(i.target, e) &&
              !i.tracker.movesTo(i.$el) &&
              i.hide(!1);
          },
        },
        {
          name: "keydown",
          delegate: function () {
            return this.dropdown;
          },
          handler: function (t) {
            var e = t.current,
              i = t.keyCode,
              n = this.getActive();
            i === pr.DOWN &&
              st(e, "aria-expanded") &&
              (t.preventDefault(),
              n && n.target === e
                ? gr(n.$el)
                : (e.click(),
                  te(this.dropContainer, "show", function (t) {
                    return gr(t.target);
                  }))),
              fr(t, this.toggles, n);
          },
        },
        {
          name: "keydown",
          el: function () {
            return this.dropContainer;
          },
          delegate: function () {
            return "." + this.clsDrop;
          },
          handler: function (t) {
            var e = t.current,
              i = t.keyCode;
            if (m(this.dropdowns, e)) {
              var n = this.getActive(),
                r = Ae(Mt, e),
                o = y(r, function (t) {
                  return zt(t, ":focus");
                });
              i === pr.UP && (t.preventDefault(), o > 0 && r[o - 1].focus()),
                i === pr.DOWN &&
                  (t.preventDefault(), o < r.length - 1 && r[o + 1].focus()),
                i === pr.ESC && n && n.target && n.target.focus(),
                fr(t, this.toggles, n);
            }
          },
        },
        {
          name: "mouseleave",
          el: function () {
            return this.dropbar;
          },
          filter: function () {
            return this.dropbar;
          },
          handler: function () {
            var t = this.getActive();
            t &&
              m(t.mode, "hover") &&
              !this.dropdowns.some(function (t) {
                return zt(t, ":hover");
              }) &&
              t.hide();
          },
        },
        {
          name: "beforeshow",
          el: function () {
            return this.dropContainer;
          },
          filter: function () {
            return this.dropbar;
          },
          handler: function () {
            St(this.dropbar) ||
              Ce(this.dropbarAnchor || this.$el, this.dropbar);
          },
        },
        {
          name: "show",
          el: function () {
            return this.dropContainer;
          },
          filter: function () {
            return this.dropbar;
          },
          handler: function (t, e) {
            var i = e.$el,
              n = e.dir;
            Pe(i, this.clsDrop) &&
              ("slide" === this.dropbarMode &&
                Ne(this.dropbar, "uk-navbar-dropbar-slide"),
              this.clsDrop && Ne(i, this.clsDrop + "-dropbar"),
              "bottom" === n &&
                this.transitionTo(
                  i.offsetHeight +
                    P(Re(i, "marginTop")) +
                    P(Re(i, "marginBottom")),
                  i
                ));
          },
        },
        {
          name: "beforehide",
          el: function () {
            return this.dropContainer;
          },
          filter: function () {
            return this.dropbar;
          },
          handler: function (t, e) {
            var i = e.$el,
              n = this.getActive();
            zt(this.dropbar, ":hover") &&
              n &&
              n.$el === i &&
              t.preventDefault();
          },
        },
        {
          name: "hide",
          el: function () {
            return this.dropContainer;
          },
          filter: function () {
            return this.dropbar;
          },
          handler: function (t, e) {
            var i = e.$el;
            if (Pe(i, this.clsDrop)) {
              var n = this.getActive();
              (!n || (n && n.$el === i)) && this.transitionTo(0);
            }
          },
        },
      ],
      methods: {
        getActive: function () {
          return fn && Nt(fn.target, this.$el) && fn;
        },
        transitionTo: function (t, e) {
          var i = this,
            n = this.dropbar,
            r = bt(n) ? li(n) : 0;
          return (
            Re(
              (e = r < t && e),
              "clip",
              "rect(0," + e.offsetWidth + "px," + r + "px,0)"
            ),
            li(n, r),
            ti.cancel([e, n]),
            le
              .all([
                ti.start(n, { height: t }, this.duration),
                ti.start(
                  e,
                  { clip: "rect(0," + e.offsetWidth + "px," + t + "px,0)" },
                  this.duration
                ),
              ])
              .catch(Q)
              .then(function () {
                Re(e, { clip: "" }), i.$update(n);
              })
          );
        },
        getDropdown: function (t) {
          return (
            this.$getComponent(t, "drop") || this.$getComponent(t, "dropdown")
          );
        },
      },
    };
  function fr(t, e, i) {
    var n = t.current,
      r = t.keyCode,
      o = (i && i.target) || n,
      s = e.indexOf(o);
    r === pr.LEFT && s > 0 && (i && i.hide(!1), e[s - 1].focus()),
      r === pr.RIGHT && s < e.length - 1 && (i && i.hide(!1), e[s + 1].focus()),
      r === pr.TAB && (o.focus(), i && i.hide(!1));
  }
  function gr(t) {
    if (!ze(":focus", t)) {
      var e = ze(Mt, t);
      e && e.focus();
    }
  }
  var pr = { TAB: 9, ESC: 27, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40 },
    vr = {
      mixins: [ar],
      args: "mode",
      props: { mode: String, flip: Boolean, overlay: Boolean },
      data: {
        mode: "slide",
        flip: !1,
        overlay: !1,
        clsPage: "uk-offcanvas-page",
        clsContainer: "uk-offcanvas-container",
        selPanel: ".uk-offcanvas-bar",
        clsFlip: "uk-offcanvas-flip",
        clsContainerAnimation: "uk-offcanvas-container-animation",
        clsSidebarAnimation: "uk-offcanvas-bar-animation",
        clsMode: "uk-offcanvas",
        clsOverlay: "uk-offcanvas-overlay",
        selClose: ".uk-offcanvas-close",
        container: !1,
      },
      computed: {
        clsFlip: function (t) {
          var e = t.flip,
            i = t.clsFlip;
          return e ? i : "";
        },
        clsOverlay: function (t) {
          var e = t.overlay,
            i = t.clsOverlay;
          return e ? i : "";
        },
        clsMode: function (t) {
          var e = t.mode;
          return t.clsMode + "-" + e;
        },
        clsSidebarAnimation: function (t) {
          var e = t.mode,
            i = t.clsSidebarAnimation;
          return "none" === e || "reveal" === e ? "" : i;
        },
        clsContainerAnimation: function (t) {
          var e = t.mode,
            i = t.clsContainerAnimation;
          return "push" !== e && "reveal" !== e ? "" : i;
        },
        transitionElement: function (t) {
          return "reveal" === t.mode ? St(this.panel) : this.panel;
        },
      },
      update: {
        read: function () {
          this.isToggled() && !bt(this.$el) && this.hide();
        },
        events: ["resize"],
      },
      events: [
        {
          name: "click",
          delegate: function () {
            return 'a[href^="#"]';
          },
          handler: function (t) {
            var e = t.current.hash;
            !t.defaultPrevented && e && ze(e, document.body) && this.hide();
          },
        },
        {
          name: "touchstart",
          passive: !0,
          el: function () {
            return this.panel;
          },
          handler: function (t) {
            var e = t.targetTouches;
            1 === e.length && (this.clientY = e[0].clientY);
          },
        },
        {
          name: "touchmove",
          self: !0,
          passive: !1,
          filter: function () {
            return this.overlay;
          },
          handler: function (t) {
            t.cancelable && t.preventDefault();
          },
        },
        {
          name: "touchmove",
          passive: !1,
          el: function () {
            return this.panel;
          },
          handler: function (t) {
            if (1 === t.targetTouches.length) {
              var e = t.targetTouches[0].clientY - this.clientY,
                i = this.panel,
                n = i.scrollTop,
                r = i.scrollHeight,
                o = i.clientHeight;
              (o >= r || (0 === n && e > 0) || (r - n <= o && e < 0)) &&
                t.cancelable &&
                t.preventDefault();
            }
          },
        },
        {
          name: "show",
          self: !0,
          handler: function () {
            "reveal" !== this.mode ||
              Pe(St(this.panel), this.clsMode) ||
              ($e(this.panel, "<div>"), Ne(St(this.panel), this.clsMode)),
              Re(
                document.documentElement,
                "overflowY",
                this.overlay ? "hidden" : ""
              ),
              Ne(document.body, this.clsContainer, this.clsFlip),
              Re(document.body, "touch-action", "pan-y pinch-zoom"),
              Re(this.$el, "display", "block"),
              Ne(this.$el, this.clsOverlay),
              Ne(
                this.panel,
                this.clsSidebarAnimation,
                "reveal" !== this.mode ? this.clsMode : ""
              ),
              li(document.body),
              Ne(document.body, this.clsContainerAnimation),
              this.clsContainerAnimation &&
                (wr().content += ",user-scalable=0");
          },
        },
        {
          name: "hide",
          self: !0,
          handler: function () {
            He(document.body, this.clsContainerAnimation),
              Re(document.body, "touch-action", "");
          },
        },
        {
          name: "hidden",
          self: !0,
          handler: function () {
            var t;
            this.clsContainerAnimation &&
              ((t = wr()).content = t.content.replace(/,user-scalable=0$/, "")),
              "reveal" === this.mode && Be(this.panel),
              He(this.panel, this.clsSidebarAnimation, this.clsMode),
              He(this.$el, this.clsOverlay),
              Re(this.$el, "display", ""),
              He(document.body, this.clsContainer, this.clsFlip),
              Re(document.documentElement, "overflowY", "");
          },
        },
        {
          name: "swipeLeft swipeRight",
          handler: function (t) {
            this.isToggled() && f(t.type, "Left") ^ this.flip && this.hide();
          },
        },
      ],
    };
  function wr() {
    return (
      ze('meta[name="viewport"]', document.head) ||
      ye(document.head, '<meta name="viewport">')
    );
  }
  var mr = {
      mixins: [on],
      props: { selContainer: String, selContent: String, minHeight: Number },
      data: {
        selContainer: ".uk-modal",
        selContent: ".uk-modal-dialog",
        minHeight: 150,
      },
      computed: {
        container: function (t, e) {
          return _t(e, t.selContainer);
        },
        content: function (t, e) {
          return _t(e, t.selContent);
        },
      },
      connected: function () {
        Re(this.$el, "minHeight", this.minHeight);
      },
      update: {
        read: function () {
          return (
            !!(this.content && this.container && bt(this.$el)) && {
              current: P(Re(this.$el, "maxHeight")),
              max: Math.max(
                this.minHeight,
                li(this.container) - (si(this.content).height - li(this.$el))
              ),
            }
          );
        },
        write: function (t) {
          var e = t.current,
            i = t.max;
          Re(this.$el, "maxHeight", i),
            Math.round(e) !== Math.round(i) && ee(this.$el, "resize");
        },
        events: ["resize"],
      },
    },
    xr = {
      props: ["width", "height"],
      connected: function () {
        Ne(this.$el, "uk-responsive-width");
      },
      update: {
        read: function () {
          return (
            !!(bt(this.$el) && this.width && this.height) && {
              width: ui(St(this.$el)),
              height: this.height,
            }
          );
        },
        write: function (t) {
          li(
            this.$el,
            it.contain({ height: this.height, width: this.width }, t).height
          );
        },
        events: ["resize"],
      },
    },
    yr = {
      props: { offset: Number },
      data: { offset: 0 },
      methods: {
        scrollTo: function (t) {
          var e = this;
          (t = (t && ze(t)) || document.body),
            ee(this.$el, "beforescroll", [this, t]) &&
              Wi(t, { offset: this.offset }).then(function () {
                return ee(e.$el, "scrolled", [e, t]);
              });
        },
      },
      events: {
        click: function (t) {
          t.defaultPrevented ||
            (t.preventDefault(),
            this.scrollTo(
              "#" + Gt(decodeURIComponent((this.$el.hash || "").substr(1)))
            ));
        },
      },
    },
    kr = "_ukScrollspy",
    Cr = {
      args: "cls",
      props: {
        cls: String,
        target: String,
        hidden: Boolean,
        offsetTop: Number,
        offsetLeft: Number,
        repeat: Boolean,
        delay: Number,
      },
      data: function () {
        return {
          cls: !1,
          target: !1,
          hidden: !0,
          offsetTop: 0,
          offsetLeft: 0,
          repeat: !1,
          delay: 0,
          inViewClass: "uk-scrollspy-inview",
        };
      },
      computed: {
        elements: {
          get: function (t, e) {
            var i = t.target;
            return i ? Ae(i, e) : [e];
          },
          watch: function (t) {
            this.hidden &&
              Re(
                It(t, ":not(." + this.inViewClass + ")"),
                "visibility",
                "hidden"
              );
          },
          immediate: !0,
        },
      },
      disconnected: function () {
        var t = this;
        this.elements.forEach(function (e) {
          He(e, t.inViewClass, e[kr] ? e[kr].cls : ""), delete e[kr];
        });
      },
      update: [
        {
          read: function (t) {
            var e = this;
            if (!t.update)
              return (
                le.resolve().then(function () {
                  e.$emit(), (t.update = !0);
                }),
                !1
              );
            this.elements.forEach(function (t) {
              t[kr] || (t[kr] = { cls: ht(t, "uk-scrollspy-class") || e.cls }),
                (t[kr].show = Fi(t, e.offsetTop, e.offsetLeft));
            });
          },
          write: function (t) {
            var e = this;
            this.elements.forEach(function (i) {
              var n = i[kr];
              !n.show || n.inview || n.queued
                ? !n.show &&
                  n.inview &&
                  !n.queued &&
                  e.repeat &&
                  e.toggle(i, !1)
                : ((n.queued = !0),
                  (t.promise = (t.promise || le.resolve())
                    .then(function () {
                      return new le(function (t) {
                        return setTimeout(t, e.delay);
                      });
                    })
                    .then(function () {
                      e.toggle(i, !0),
                        setTimeout(function () {
                          (n.queued = !1), e.$emit();
                        }, 300);
                    })));
            });
          },
          events: ["scroll", "resize"],
        },
      ],
      methods: {
        toggle: function (t, e) {
          var i = t[kr];
          i.off && i.off(),
            Re(t, "visibility", !e && this.hidden ? "hidden" : ""),
            je(t, this.inViewClass, e),
            je(t, i.cls),
            /\buk-animation-/.test(i.cls) &&
              (i.off = te(t, "animationcancel animationend", function () {
                return Oe(t, "uk-animation-[\\w-]+");
              })),
            ee(t, e ? "inview" : "outview"),
            (i.inview = e),
            this.$update(t);
        },
      },
    },
    br = {
      props: {
        cls: String,
        closest: String,
        scroll: Boolean,
        overflow: Boolean,
        offset: Number,
      },
      data: {
        cls: "uk-active",
        closest: !1,
        scroll: !1,
        overflow: !0,
        offset: 0,
      },
      computed: {
        links: {
          get: function (t, e) {
            return Ae('a[href^="#"]', e).filter(function (t) {
              return t.hash;
            });
          },
          watch: function (t) {
            this.scroll &&
              this.$create("scroll", t, { offset: this.offset || 0 });
          },
          immediate: !0,
        },
        targets: function () {
          return Ae(
            this.links
              .map(function (t) {
                return Gt(t.hash).substr(1);
              })
              .join(",")
          );
        },
        elements: function (t) {
          var e = t.closest;
          return _t(this.links, e || "*");
        },
      },
      update: [
        {
          read: function () {
            var t = this,
              e = this.targets.length;
            if (!e || !bt(this.$el)) return !1;
            var i = qi(this.targets, /auto|scroll/, !0)[0],
              n = i.scrollTop,
              r = i.scrollHeight - Yi(i),
              o = !1;
            return (
              n === r
                ? (o = e - 1)
                : (this.targets.every(function (e, n) {
                    if (ai(e).top - ai(Ui(i)).top - t.offset <= 0)
                      return (o = n), !0;
                  }),
                  !1 === o && this.overflow && (o = 0)),
              { active: o }
            );
          },
          write: function (t) {
            var e = t.active,
              i = !1 !== e && !Pe(this.elements[e], this.cls);
            this.links.forEach(function (t) {
              return t.blur();
            }),
              He(this.elements, this.cls),
              Ne(this.elements[e], this.cls),
              i && ee(this.$el, "active", [e, this.elements[e]]);
          },
          events: ["scroll", "resize"],
        },
      ],
    },
    Lr = {
      mixins: [on, rr],
      props: {
        top: null,
        bottom: Boolean,
        offset: String,
        animation: String,
        clsActive: String,
        clsInactive: String,
        clsFixed: String,
        clsBelow: String,
        selTarget: String,
        widthElement: Boolean,
        showOnUp: Boolean,
        targetOffset: Number,
      },
      data: {
        top: 0,
        bottom: !1,
        offset: 0,
        animation: "",
        clsActive: "uk-active",
        clsInactive: "",
        clsFixed: "uk-sticky-fixed",
        clsBelow: "uk-sticky-below",
        selTarget: "",
        widthElement: !1,
        showOnUp: !1,
        targetOffset: !1,
      },
      computed: {
        offset: function (t) {
          return pi(t.offset);
        },
        selTarget: function (t, e) {
          var i = t.selTarget;
          return (i && ze(i, e)) || e;
        },
        widthElement: function (t, e) {
          return Pt(t.widthElement, e) || this.placeholder;
        },
        isActive: {
          get: function () {
            return Pe(this.selTarget, this.clsActive);
          },
          set: function (t) {
            t && !this.isActive
              ? (De(this.selTarget, this.clsInactive, this.clsActive),
                ee(this.$el, "active"))
              : t ||
                Pe(this.selTarget, this.clsInactive) ||
                (De(this.selTarget, this.clsActive, this.clsInactive),
                ee(this.$el, "inactive"));
          },
        },
      },
      connected: function () {
        (this.placeholder =
          ze("+ .uk-sticky-placeholder", this.$el) ||
          ze('<div class="uk-sticky-placeholder"></div>')),
          (this.isFixed = !1),
          (this.isActive = !1);
      },
      disconnected: function () {
        this.isFixed && (this.hide(), He(this.selTarget, this.clsInactive)),
          Le(this.placeholder),
          (this.placeholder = null),
          (this.widthElement = null);
      },
      events: [
        {
          name: "load hashchange popstate",
          el: function () {
            return window;
          },
          handler: function () {
            var t = this;
            if (
              !1 !== this.targetOffset &&
              location.hash &&
              window.pageYOffset > 0
            ) {
              var e = ze(location.hash);
              e &&
                wi.read(function () {
                  var i = ai(e).top,
                    n = ai(t.$el).top,
                    r = t.$el.offsetHeight;
                  t.isFixed &&
                    n + r >= i &&
                    n <= i + e.offsetHeight &&
                    Vi(
                      window,
                      i -
                        r -
                        (_(t.targetOffset) ? t.targetOffset : 0) -
                        t.offset
                    );
                });
            }
          },
        },
      ],
      update: [
        {
          read: function (t, e) {
            var i = t.height;
            if (
              ((this.inactive = !this.matchMedia || !bt(this.$el)),
              this.inactive)
            )
              return !1;
            this.isActive &&
              e.has("resize") &&
              (this.hide(), (i = this.$el.offsetHeight), this.show()),
              (i = this.isActive ? i : this.$el.offsetHeight);
            var n = this.isFixed ? this.placeholder : this.$el;
            (this.topOffset = ai(n).top),
              (this.bottomOffset = this.topOffset + i),
              (this.offsetParentTop = ai(n.offsetParent).top);
            var r = $r("bottom", this);
            return (
              (this.top =
                Math.max(P($r("top", this)), this.topOffset) - this.offset),
              (this.bottom = r && r - this.$el.offsetHeight),
              (this.width = si(
                bt(this.widthElement) ? this.widthElement : this.$el
              ).width),
              {
                height: i,
                top: ci(this.placeholder)[0],
                margins: Re(this.$el, [
                  "marginTop",
                  "marginBottom",
                  "marginLeft",
                  "marginRight",
                ]),
              }
            );
          },
          write: function (t) {
            var e = t.height,
              i = t.margins,
              n = this.placeholder;
            Re(n, U({ height: e }, i)),
              Nt(n, document) || (Ce(this.$el, n), (n.hidden = !0)),
              (this.isActive = !!this.isActive);
          },
          events: ["resize"],
        },
        {
          read: function (t) {
            var e = t.scroll;
            return (
              void 0 === e && (e = 0),
              (this.scroll = window.pageYOffset),
              { dir: e <= this.scroll ? "down" : "up", scroll: this.scroll }
            );
          },
          write: function (t, e) {
            var i = this,
              n = Date.now(),
              r = e.has("scroll"),
              o = t.initTimestamp;
            void 0 === o && (o = 0);
            var s = t.dir,
              a = t.lastDir,
              h = t.lastScroll,
              c = t.scroll,
              l = t.top;
            if (
              ((t.lastScroll = c),
              !(
                c < 0 ||
                (c === h && r) ||
                (this.showOnUp && !r && !this.isFixed) ||
                ((n - o > 300 || s !== a) &&
                  ((t.initScroll = c), (t.initTimestamp = n)),
                (t.lastDir = s),
                this.showOnUp &&
                  !this.isFixed &&
                  Math.abs(t.initScroll - c) <= 30 &&
                  Math.abs(h - c) <= 10)
              ))
            )
              if (
                this.inactive ||
                c < this.top ||
                (this.showOnUp &&
                  (c <= this.top ||
                    ("down" === s && r) ||
                    ("up" === s && !this.isFixed && c <= this.bottomOffset)))
              ) {
                if (!this.isFixed)
                  return void (
                    ri.inProgress(this.$el) &&
                    l > c &&
                    (ri.cancel(this.$el), this.hide())
                  );
                (this.isFixed = !1),
                  this.animation && c > this.topOffset
                    ? (ri.cancel(this.$el),
                      ri.out(this.$el, this.animation).then(function () {
                        return i.hide();
                      }, Q))
                    : this.hide();
              } else
                this.isFixed
                  ? this.update()
                  : this.animation
                  ? (ri.cancel(this.$el),
                    this.show(),
                    ri.in(this.$el, this.animation).catch(Q))
                  : this.show();
          },
          events: ["resize", "scroll"],
        },
      ],
      methods: {
        show: function () {
          (this.isFixed = !0), this.update(), (this.placeholder.hidden = !1);
        },
        hide: function () {
          (this.isActive = !1),
            He(this.$el, this.clsFixed, this.clsBelow),
            Re(this.$el, { position: "", top: "", width: "" }),
            (this.placeholder.hidden = !0);
        },
        update: function () {
          var t = 0 !== this.top || this.scroll > this.top,
            e = Math.max(0, this.offset),
            i = "fixed";
          _(this.bottom) &&
            this.scroll > this.bottom - this.offset &&
            ((e = this.bottom - this.offsetParentTop), (i = "absolute")),
            Re(this.$el, { position: i, top: e + "px", width: this.width }),
            (this.isActive = t),
            je(this.$el, this.clsBelow, this.scroll > this.bottomOffset),
            Ne(this.$el, this.clsFixed);
        },
      },
    };
  function $r(t, e) {
    var i = e.$props,
      n = e.$el,
      r = e[t + "Offset"],
      o = i[t];
    if (o)
      return z(o) && o.match(/^-?\d/)
        ? r + pi(o)
        : ai(!0 === o ? St(n) : Pt(o, n)).bottom;
  }
  var Mr = {
      mixins: [sn],
      args: "connect",
      props: {
        connect: String,
        toggle: String,
        itemNav: String,
        active: Number,
        swiping: Boolean,
      },
      data: {
        connect: "~.uk-switcher",
        toggle: "> * > :first-child",
        itemNav: !1,
        active: 0,
        swiping: !0,
        cls: "uk-active",
        attrItem: "uk-switcher-item",
      },
      computed: {
        connects: {
          get: function (t, e) {
            return jt(t.connect, e);
          },
          watch: function (t) {
            var e = this;
            this.swiping && Re(t, "touch-action", "pan-y pinch-zoom");
            var i = this.index();
            this.connects.forEach(function (t) {
              return Ot(t).forEach(function (t, n) {
                return je(t, e.cls, n === i);
              });
            });
          },
          immediate: !0,
        },
        toggles: {
          get: function (t, e) {
            return Ae(t.toggle, e).filter(function (t) {
              return !zt(t, ".uk-disabled *, .uk-disabled, [disabled]");
            });
          },
          watch: function (t) {
            var e = this.index();
            this.show(~e ? e : t[this.active] || t[0]);
          },
          immediate: !0,
        },
        children: function () {
          var t = this;
          return Ot(this.$el).filter(function (e) {
            return t.toggles.some(function (t) {
              return Nt(t, e);
            });
          });
        },
      },
      events: [
        {
          name: "click",
          delegate: function () {
            return this.toggle;
          },
          handler: function (t) {
            t.preventDefault(), this.show(t.current);
          },
        },
        {
          name: "click",
          el: function () {
            return this.connects.concat(
              this.itemNav ? jt(this.itemNav, this.$el) : []
            );
          },
          delegate: function () {
            return "[" + this.attrItem + "],[data-" + this.attrItem + "]";
          },
          handler: function (t) {
            t.preventDefault(), this.show(ht(t.current, this.attrItem));
          },
        },
        {
          name: "swipeRight swipeLeft",
          filter: function () {
            return this.swiping;
          },
          el: function () {
            return this.connects;
          },
          handler: function (t) {
            var e = t.type;
            this.show(f(e, "Left") ? "next" : "previous");
          },
        },
      ],
      methods: {
        index: function () {
          var t = this;
          return y(this.children, function (e) {
            return Pe(e, t.cls);
          });
        },
        show: function (t) {
          var e = this,
            i = this.index(),
            n = nt(this.children[nt(t, this.toggles, i)], Ot(this.$el));
          i !== n &&
            (this.children.forEach(function (t, i) {
              je(t, e.cls, n === i), ot(e.toggles[i], "aria-expanded", n === i);
            }),
            this.connects.forEach(function (t) {
              var r = t.children;
              return e
                .toggleElement(
                  F(r).filter(function (t) {
                    return Pe(t, e.cls);
                  }),
                  !1,
                  i >= 0
                )
                .then(function () {
                  return e.toggleElement(r[n], !0, i >= 0);
                });
            }));
        },
      },
    },
    Br = {
      mixins: [on],
      extends: Mr,
      props: { media: Boolean },
      data: { media: 960, attrItem: "uk-tab-item" },
      connected: function () {
        var t = Pe(this.$el, "uk-tab-left")
          ? "uk-tab-left"
          : !!Pe(this.$el, "uk-tab-right") && "uk-tab-right";
        t &&
          this.$create("toggle", this.$el, {
            cls: t,
            mode: "media",
            media: this.media,
          });
      },
    },
    Sr = {
      mixins: [rr, sn],
      args: "target",
      props: { href: String, target: null, mode: "list", queued: Boolean },
      data: { href: !1, target: !1, mode: "click", queued: !0 },
      connected: function () {
        m(this.mode, "media") || Bt(this.$el) || ot(this.$el, "tabindex", "0");
      },
      computed: {
        target: {
          get: function (t, e) {
            var i = t.href,
              n = t.target;
            return ((n = jt(n || i, e)).length && n) || [e];
          },
          watch: function () {
            this.updateAria();
          },
          immediate: !0,
        },
      },
      events: [
        {
          name: pt,
          filter: function () {
            return m(this.mode, "hover");
          },
          handler: function (t) {
            var e = this;
            he(t) &&
              !this._showState &&
              (ee(this.$el, "focus"),
              te(
                document,
                pt,
                function () {
                  return ee(e.$el, "blur");
                },
                !0,
                function (t) {
                  return !Nt(t.target, e.$el);
                }
              ),
              m(this.mode, "click") && (this._preventClick = !0));
          },
        },
        {
          name: mt + " " + xt + " focus blur",
          filter: function () {
            return m(this.mode, "hover");
          },
          handler: function (t) {
            if (!he(t)) {
              var e = m([mt, "focus"], t.type),
                i = ot(this.$el, "aria-expanded");
              (!e &&
                ((t.type === xt && zt(this.$el, ":focus")) ||
                  ("blur" === t.type && zt(this.$el, ":hover")))) ||
                (this._showState && e === (i !== this._showState)
                  ? e || (this._showState = null)
                  : ((this._showState = e ? i : null),
                    this.toggle("toggle" + (e ? "show" : "hide"))));
            }
          },
        },
        {
          name: "keydown",
          filter: function () {
            return m(this.mode, "click");
          },
          handler: function (t) {
            32 === t.keyCode && (t.preventDefault(), this.$el.click());
          },
        },
        {
          name: "click",
          filter: function () {
            return m(this.mode, "click");
          },
          handler: function (t) {
            if (this._preventClick) return (this._preventClick = null);
            var e;
            (_t(t.target, 'a[href="#"], a[href=""]') ||
              ((e = _t(t.target, "a[href]")) &&
                ("true" !== ot(this.$el, "aria-expanded") ||
                  (e.hash && zt(this.target, e.hash))))) &&
              t.preventDefault(),
              this.toggle();
          },
        },
        {
          name: "toggled",
          self: !0,
          el: function () {
            return this.target;
          },
          handler: function (t, e) {
            t.target === this.target[0] && this.updateAria(e);
          },
        },
      ],
      update: {
        read: function () {
          return (
            !(!m(this.mode, "media") || !this.media) && {
              match: this.matchMedia,
            }
          );
        },
        write: function (t) {
          var e = t.match,
            i = this.isToggled(this.target);
          (e ? !i : i) && this.toggle();
        },
        events: ["resize"],
      },
      methods: {
        toggle: function (t) {
          var e = this;
          if (ee(this.target, t || "toggle", [this])) {
            if (!this.queued) return this.toggleElement(this.target);
            var i = this.target.filter(function (t) {
              return Pe(t, e.clsLeave);
            });
            if (i.length)
              this.target.forEach(function (t) {
                var n = m(i, t);
                e.toggleElement(t, n, n);
              });
            else {
              var n = this.target.filter(this.isToggled);
              this.toggleElement(n, !1).then(function () {
                return e.toggleElement(
                  e.target.filter(function (t) {
                    return !m(n, t);
                  }),
                  !0
                );
              });
            }
          }
        },
        updateAria: function (t) {
          m(this.mode, "media") ||
            ot(
              this.$el,
              "aria-expanded",
              E(t) ? t : this.isToggled(this.target)
            );
        },
      },
    };
  J(
    Object.freeze({
      __proto__: null,
      Accordion: hn,
      Alert: ln,
      Cover: dn,
      Drop: vn,
      Dropdown: vn,
      FormCustom: wn,
      Gif: mn,
      Grid: Ln,
      HeightMatch: Bn,
      HeightViewport: Tn,
      Icon: jn,
      Img: Un,
      Leader: or,
      Margin: xn,
      Modal: cr,
      Nav: lr,
      Navbar: dr,
      Offcanvas: vr,
      OverflowAuto: mr,
      Responsive: xr,
      Scroll: yr,
      Scrollspy: Cr,
      ScrollspyNav: br,
      Sticky: Lr,
      Svg: En,
      Switcher: Mr,
      Tab: Br,
      Toggle: Sr,
      Video: un,
      Close: Wn,
      Spinner: Rn,
      SlidenavNext: Fn,
      SlidenavPrevious: Fn,
      SearchIcon: Vn,
      Marker: Zn,
      NavbarToggleIcon: Zn,
      OverlayIcon: Zn,
      PaginationNext: Zn,
      PaginationPrevious: Zn,
      Totop: Zn,
    }),
    function (t, e) {
      return rn.component(e, t);
    }
  ),
    rn.use(function (t) {
      if (ct) {
        var e,
          i,
          n = function () {
            e ||
              ((e = !0),
              wi.write(function () {
                return (e = !1);
              }),
              t.update(null, "resize"));
          };
        Kt(window, "load resize", n),
          Kt(document, "loadedmetadata load", n, !0),
          "ResizeObserver" in window &&
            new ResizeObserver(n).observe(document.documentElement),
          Kt(
            window,
            "scroll",
            function (e) {
              i ||
                ((i = !0),
                wi.write(function () {
                  return (i = !1);
                }),
                t.update(null, e.type));
            },
            { passive: !0, capture: !0 }
          );
        var r = 0;
        Kt(
          document,
          "animationstart",
          function (t) {
            var e = t.target;
            (Re(e, "animationName") || "").match(/^uk-.*(left|right)/) &&
              (r++,
              Re(document.documentElement, "overflowX", "hidden"),
              setTimeout(function () {
                --r || Re(document.documentElement, "overflowX", "");
              }, W(Re(e, "animationDuration")) + 100));
          },
          !0
        ),
          Kt(
            document,
            pt,
            function (t) {
              if (he(t)) {
                var e = ce(t),
                  i = "tagName" in t.target ? t.target : St(t.target);
                te(document, wt + " " + yt + " scroll", function (t) {
                  var n = ce(t),
                    r = n.x,
                    o = n.y;
                  (("scroll" !== t.type && i && r && Math.abs(e.x - r) > 100) ||
                    (o && Math.abs(e.y - o) > 100)) &&
                    setTimeout(function () {
                      var t, n, s, a;
                      ee(i, "swipe"),
                        ee(
                          i,
                          "swipe" +
                            ((t = e.x),
                            (n = e.y),
                            (s = r),
                            (a = o),
                            Math.abs(t - s) >= Math.abs(n - a)
                              ? t - s > 0
                                ? "Left"
                                : "Right"
                              : n - a > 0
                              ? "Up"
                              : "Down")
                        );
                    });
                });
              }
            },
            { passive: !0 }
          );
      }
    }),
    (function (t) {
      var e = t.connect,
        i = t.disconnect;
      function n(t) {
        for (var n = t.addedNodes, r = t.removedNodes, o = 0; o < n.length; o++)
          Ee(n[o], e);
        for (var s = 0; s < r.length; s++) Ee(r[s], i);
      }
      function r(e) {
        var i = e.target,
          n = e.attributeName,
          r = nn(n);
        if (r && r in t)
          if (st(i, n)) t[r](i);
          else {
            var o = t.getComponent(i, r);
            o && o.$destroy();
          }
      }
      ct &&
        window.MutationObserver &&
        wi.read(function () {
          document.body && Ee(document.body, e),
            new MutationObserver(function (t) {
              return t.forEach(n);
            }).observe(document, { childList: !0, subtree: !0 }),
            new MutationObserver(function (t) {
              return t.forEach(r);
            }).observe(document, { attributes: !0, subtree: !0 }),
            (t._initialized = !0);
        });
    })(rn);
  var Ir = {
    mixins: [on],
    props: { date: String, clsWrapper: String },
    data: { date: "", clsWrapper: ".uk-countdown-%unit%" },
    computed: {
      date: function (t) {
        var e = t.date;
        return Date.parse(e);
      },
      days: function (t, e) {
        return ze(t.clsWrapper.replace("%unit%", "days"), e);
      },
      hours: function (t, e) {
        return ze(t.clsWrapper.replace("%unit%", "hours"), e);
      },
      minutes: function (t, e) {
        return ze(t.clsWrapper.replace("%unit%", "minutes"), e);
      },
      seconds: function (t, e) {
        return ze(t.clsWrapper.replace("%unit%", "seconds"), e);
      },
      units: function () {
        var t = this;
        return ["days", "hours", "minutes", "seconds"].filter(function (e) {
          return t[e];
        });
      },
    },
    connected: function () {
      this.start();
    },
    disconnected: function () {
      var t = this;
      this.stop(),
        this.units.forEach(function (e) {
          return me(t[e]);
        });
    },
    events: [
      {
        name: "visibilitychange",
        el: function () {
          return document;
        },
        handler: function () {
          document.hidden ? this.stop() : this.start();
        },
      },
    ],
    update: {
      write: function () {
        var t,
          e,
          i = this,
          n =
            ((t = this.date),
            {
              total: (e = t - Date.now()),
              seconds: (e / 1e3) % 60,
              minutes: (e / 1e3 / 60) % 60,
              hours: (e / 1e3 / 60 / 60) % 24,
              days: e / 1e3 / 60 / 60 / 24,
            });
        n.total <= 0 &&
          (this.stop(), (n.days = n.hours = n.minutes = n.seconds = 0)),
          this.units.forEach(function (t) {
            var e = String(Math.floor(n[t]));
            e = e.length < 2 ? "0" + e : e;
            var r = i[t];
            r.textContent !== e &&
              ((e = e.split("")).length !== r.children.length &&
                xe(
                  r,
                  e
                    .map(function () {
                      return "<span></span>";
                    })
                    .join("")
                ),
              e.forEach(function (t, e) {
                return (r.children[e].textContent = t);
              }));
          });
      },
    },
    methods: {
      start: function () {
        this.stop(),
          this.date &&
            this.units.length &&
            (this.$update(), (this.timer = setInterval(this.$update, 1e3)));
      },
      stop: function () {
        this.timer && (clearInterval(this.timer), (this.timer = null));
      },
    },
  };
  var Tr = "uk-transition-leave",
    Er = "uk-transition-enter";
  function zr(t, e, i, n) {
    void 0 === n && (n = 0);
    var r = Ar(e, !0),
      o = { opacity: 1 },
      s = { opacity: 0 },
      a = function (t) {
        return function () {
          return r === Ar(e) ? t() : le.reject();
        };
      },
      h = a(function () {
        return (
          Ne(e, Tr),
          le
            .all(
              Nr(e).map(function (t, e) {
                return new le(function (r) {
                  return setTimeout(function () {
                    return ti.start(t, s, i / 2, "ease").then(r);
                  }, e * n);
                });
              })
            )
            .then(function () {
              return He(e, Tr);
            })
        );
      }),
      c = a(function () {
        var a = li(e);
        return (
          Ne(e, Er),
          t(),
          Re(Ot(e), { opacity: 0 }),
          new le(function (t) {
            return requestAnimationFrame(function () {
              var h = Ot(e),
                c = li(e);
              Re(e, "alignContent", "flex-start"), li(e, a);
              var l = Nr(e);
              Re(h, s);
              var u = l.map(function (t, e) {
                return new le(function (r) {
                  return setTimeout(function () {
                    return ti.start(t, o, i / 2, "ease").then(r);
                  }, e * n);
                });
              });
              a !== c &&
                u.push(
                  ti.start(e, { height: c }, i / 2 + l.length * n, "ease")
                ),
                le.all(u).then(function () {
                  He(e, Er),
                    r === Ar(e) &&
                      (Re(e, { height: "", alignContent: "" }),
                      Re(h, { opacity: "" }),
                      delete e.dataset.transition),
                    t();
                });
            });
          })
        );
      });
    return Pe(e, Tr)
      ? _r(e).then(c)
      : Pe(e, Er)
      ? _r(e).then(h).then(c)
      : h().then(c);
  }
  function Ar(t, e) {
    return (
      e && (t.dataset.transition = 1 + Ar(t)), D(t.dataset.transition) || 0
    );
  }
  function _r(t) {
    return le.all(
      Ot(t)
        .filter(ti.inProgress)
        .map(function (t) {
          return new le(function (e) {
            return te(t, "transitionend transitioncanceled", e);
          });
        })
    );
  }
  function Nr(t) {
    return yn(Ot(t)).reduce(function (t, e) {
      return t.concat(
        X(
          e.filter(function (t) {
            return Fi(t);
          }),
          "offsetLeft"
        )
      );
    }, []);
  }
  function Hr(t, e, i) {
    return new le(function (n) {
      return requestAnimationFrame(function () {
        var r = Ot(e),
          o = r.map(function (t) {
            return Or(t, !0);
          }),
          s = Re(e, ["height", "padding"]);
        ti.cancel(e),
          r.forEach(ti.cancel),
          Dr(e),
          t(),
          (r = r.concat(
            Ot(e).filter(function (t) {
              return !m(r, t);
            })
          )),
          le.resolve().then(function () {
            wi.flush();
            var t = Re(e, ["height", "padding"]),
              a = (function (t, e, i) {
                var n = e.map(function (t, e) {
                    return (
                      !(!St(t) || !(e in i)) &&
                      (i[e]
                        ? bt(t)
                          ? Pr(t)
                          : { opacity: 0 }
                        : { opacity: bt(t) ? 1 : 0 })
                    );
                  }),
                  r = n.map(function (n, r) {
                    var o = St(e[r]) === t && (i[r] || Or(e[r]));
                    if (!o) return !1;
                    if (n) {
                      if (!("opacity" in n)) {
                        o.opacity % 1 ? (n.opacity = 1) : delete o.opacity;
                      }
                    } else delete o.opacity;
                    return o;
                  });
                return [n, r];
              })(e, r, o),
              h = a[0],
              c = a[1];
            r.forEach(function (t, e) {
              return c[e] && Re(t, c[e]);
            }),
              Re(e, U({ display: "block" }, s)),
              requestAnimationFrame(function () {
                var o = r
                  .map(function (t, n) {
                    return St(t) === e && ti.start(t, h[n], i, "ease");
                  })
                  .concat(ti.start(e, t, i, "ease"));
                le.all(o)
                  .then(function () {
                    r.forEach(function (t, i) {
                      return (
                        St(t) === e &&
                        Re(t, "display", 0 === h[i].opacity ? "none" : "")
                      );
                    }),
                      Dr(e);
                  }, Q)
                  .then(n);
              });
          });
      });
    });
  }
  function Or(t, e) {
    var i = Re(t, "zIndex");
    return (
      !!bt(t) &&
      U(
        {
          display: "",
          opacity: e ? Re(t, "opacity") : "0",
          pointerEvents: "none",
          position: "absolute",
          zIndex: "auto" === i ? Dt(t) : i,
        },
        Pr(t)
      )
    );
  }
  function Dr(t) {
    Re(t.children, {
      height: "",
      left: "",
      opacity: "",
      pointerEvents: "",
      position: "",
      top: "",
      marginTop: "",
      marginLeft: "",
      transform: "",
      width: "",
      zIndex: "",
    }),
      Re(t, { height: "", display: "", padding: "" });
  }
  function Pr(t) {
    var e = ai(t),
      i = e.height,
      n = e.width,
      r = hi(t),
      o = r.top,
      s = r.left,
      a = Re(t, ["marginTop", "marginLeft"]);
    return {
      top: o,
      left: s,
      height: i,
      width: n,
      marginLeft: a.marginLeft,
      marginTop: a.marginTop,
      transform: "",
    };
  }
  var jr = {
      props: { duration: Number, animation: Boolean },
      data: { duration: 150, animation: "slide" },
      methods: {
        animate: function (t, e) {
          var i = this;
          void 0 === e && (e = this.$el);
          var n = this.animation,
            r =
              "fade" === n
                ? zr
                : "delayed-fade" === n
                ? function () {
                    for (var t = [], e = arguments.length; e--; )
                      t[e] = arguments[e];
                    return zr.apply(void 0, t.concat([40]));
                  }
                : n
                ? Hr
                : function () {
                    return t(), le.resolve();
                  };
          return r(t, e, this.duration).then(function () {
            return i.$update(e, "resize");
          }, Q);
        },
      },
    },
    Zr = {
      mixins: [jr],
      args: "target",
      props: { target: Boolean, selActive: Boolean },
      data: {
        target: null,
        selActive: !1,
        attrItem: "uk-filter-control",
        cls: "uk-active",
        duration: 250,
      },
      computed: {
        toggles: {
          get: function (t, e) {
            var i = t.attrItem;
            return Ae("[" + i + "],[data-" + i + "]", e);
          },
          watch: function () {
            var t = this;
            if ((this.updateState(), !1 !== this.selActive)) {
              var e = Ae(this.selActive, this.$el);
              this.toggles.forEach(function (i) {
                return je(i, t.cls, m(e, i));
              });
            }
          },
          immediate: !0,
        },
        children: {
          get: function (t, e) {
            return Ae(t.target + " > *", e);
          },
          watch: function (t, e) {
            var i, n;
            e &&
              ((n = e),
              (i = t).length !== n.length ||
                !i.every(function (t) {
                  return ~n.indexOf(t);
                })) &&
              this.updateState();
          },
          immediate: !0,
        },
      },
      events: [
        {
          name: "click",
          delegate: function () {
            return "[" + this.attrItem + "],[data-" + this.attrItem + "]";
          },
          handler: function (t) {
            t.preventDefault(), this.apply(t.current);
          },
        },
      ],
      methods: {
        apply: function (t) {
          var e,
            i,
            n = this.getState(),
            r = Vr(t, this.attrItem, this.getState());
          (e = n),
            (i = r),
            ["filter", "sort"].every(function (t) {
              return R(e[t], i[t]);
            }) || this.setState(r);
        },
        getState: function () {
          var t = this;
          return this.toggles
            .filter(function (e) {
              return Pe(e, t.cls);
            })
            .reduce(
              function (e, i) {
                return Vr(i, t.attrItem, e);
              },
              { filter: { "": "" }, sort: [] }
            );
        },
        setState: function (t, e) {
          var i = this;
          void 0 === e && (e = !0),
            (t = U({ filter: { "": "" }, sort: [] }, t)),
            ee(this.$el, "beforeFilter", [this, t]),
            this.toggles.forEach(function (e) {
              return je(
                e,
                i.cls,
                !!(function (t, e, i) {
                  var n = i.filter;
                  void 0 === n && (n = { "": "" });
                  var r = i.sort,
                    o = r[0],
                    s = r[1],
                    a = Fr(t, e),
                    h = a.filter;
                  void 0 === h && (h = "");
                  var c = a.group;
                  void 0 === c && (c = "");
                  var l = a.sort,
                    u = a.order;
                  void 0 === u && (u = "asc");
                  return H(l)
                    ? (c in n && h === n[c]) || (!h && c && !(c in n) && !n[""])
                    : o === l && s === u;
                })(e, i.attrItem, t)
              );
            }),
            le
              .all(
                Ae(this.target, this.$el).map(function (n) {
                  var r = function () {
                    !(function (t, e, i) {
                      var n = (function (t) {
                        var e = t.filter,
                          i = "";
                        return (
                          J(e, function (t) {
                            return (i += t || "");
                          }),
                          i
                        );
                      })(t);
                      i.forEach(function (t) {
                        return Re(t, "display", n && !zt(t, n) ? "none" : "");
                      });
                      var r = t.sort,
                        o = r[0],
                        s = r[1];
                      if (o) {
                        var a = (function (t, e, i) {
                          return U([], t).sort(function (t, n) {
                            return (
                              ht(t, e).localeCompare(ht(n, e), void 0, {
                                numeric: !0,
                              }) * ("asc" === i || -1)
                            );
                          });
                        })(i, o, s);
                        R(a, i) || ye(e, a);
                      }
                    })(t, n, Ot(n)),
                      i.$update(i.$el);
                  };
                  return e ? i.animate(r, n) : r();
                })
              )
              .then(function () {
                return ee(i.$el, "afterFilter", [i]);
              });
        },
        updateState: function () {
          var t = this;
          wi.write(function () {
            return t.setState(t.getState(), !1);
          });
        },
      },
    };
  function Fr(t, e) {
    return Ii(ht(t, e), ["filter"]);
  }
  function Vr(t, e, i) {
    var n = Fr(t, e),
      r = n.filter,
      o = n.group,
      s = n.sort,
      a = n.order;
    return (
      void 0 === a && (a = "asc"),
      (r || H(s)) &&
        (o
          ? r
            ? (delete i.filter[""], (i.filter[o] = r))
            : (delete i.filter[o],
              (N(i.filter) || "" in i.filter) && (i.filter = { "": r || "" }))
          : (i.filter = { "": r || "" })),
      H(s) || (i.sort = [s, a]),
      i
    );
  }
  var Wr = {
    slide: {
      show: function (t) {
        return [{ transform: qr(-100 * t) }, { transform: qr() }];
      },
      percent: function (t) {
        return Rr(t);
      },
      translate: function (t, e) {
        return [
          { transform: qr(-100 * e * t) },
          { transform: qr(100 * e * (1 - t)) },
        ];
      },
    },
  };
  function Rr(t) {
    return Math.abs(Re(t, "transform").split(",")[4] / t.offsetWidth) || 0;
  }
  function qr(t, e) {
    return (
      void 0 === t && (t = 0),
      void 0 === e && (e = "%"),
      (t += t ? e : ""),
      lt ? "translateX(" + t + ")" : "translate3d(" + t + ", 0, 0)"
    );
  }
  function Ur(t) {
    return "scale3d(" + t + ", " + t + ", 1)";
  }
  var Yr = U({}, Wr, {
    fade: {
      show: function () {
        return [{ opacity: 0 }, { opacity: 1 }];
      },
      percent: function (t) {
        return 1 - Re(t, "opacity");
      },
      translate: function (t) {
        return [{ opacity: 1 - t }, { opacity: t }];
      },
    },
    scale: {
      show: function () {
        return [
          { opacity: 0, transform: Ur(0.8) },
          { opacity: 1, transform: Ur(1) },
        ];
      },
      percent: function (t) {
        return 1 - Re(t, "opacity");
      },
      translate: function (t) {
        return [
          { opacity: 1 - t, transform: Ur(1 - 0.2 * t) },
          { opacity: t, transform: Ur(0.8 + 0.2 * t) },
        ];
      },
    },
  });
  function Jr(t, e, i) {
    ee(t, ie(e, !1, !1, i));
  }
  var Xr = {
      props: {
        autoplay: Boolean,
        autoplayInterval: Number,
        pauseOnHover: Boolean,
      },
      data: { autoplay: !1, autoplayInterval: 7e3, pauseOnHover: !0 },
      connected: function () {
        this.autoplay && this.startAutoplay();
      },
      disconnected: function () {
        this.stopAutoplay();
      },
      update: function () {
        ot(this.slides, "tabindex", "-1");
      },
      events: [
        {
          name: "visibilitychange",
          el: function () {
            return document;
          },
          filter: function () {
            return this.autoplay;
          },
          handler: function () {
            document.hidden ? this.stopAutoplay() : this.startAutoplay();
          },
        },
      ],
      methods: {
        startAutoplay: function () {
          var t = this;
          this.stopAutoplay(),
            (this.interval = setInterval(function () {
              return (
                (!t.draggable || !ze(":focus", t.$el)) &&
                (!t.pauseOnHover || !zt(t.$el, ":hover")) &&
                !t.stack.length &&
                t.show("next")
              );
            }, this.autoplayInterval));
        },
        stopAutoplay: function () {
          this.interval && clearInterval(this.interval);
        },
      },
    },
    Gr = {
      props: { draggable: Boolean },
      data: { draggable: !0, threshold: 10 },
      created: function () {
        var t = this;
        ["start", "move", "end"].forEach(function (e) {
          var i = t[e];
          t[e] = function (e) {
            var n = ce(e).x * (ut ? -1 : 1);
            (t.prevPos = n !== t.pos ? t.pos : t.prevPos), (t.pos = n), i(e);
          };
        });
      },
      events: [
        {
          name: pt,
          delegate: function () {
            return this.selSlides;
          },
          handler: function (t) {
            var e;
            !this.draggable ||
              (!he(t) &&
                ((e = t.target), !e.children.length && e.childNodes.length)) ||
              _t(t.target, Lt) ||
              t.button > 0 ||
              this.length < 2 ||
              this.start(t);
          },
        },
        {
          name: "dragstart",
          handler: function (t) {
            t.preventDefault();
          },
        },
      ],
      methods: {
        start: function () {
          (this.drag = this.pos),
            this._transitioner
              ? ((this.percent = this._transitioner.percent()),
                (this.drag +=
                  this._transitioner.getDistance() * this.percent * this.dir),
                this._transitioner.cancel(),
                this._transitioner.translate(this.percent),
                (this.dragging = !0),
                (this.stack = []))
              : (this.prevIndex = this.index),
            Kt(document, vt, this.move, { passive: !1 }),
            Kt(document, wt + " " + yt + " input", this.end, !0),
            Re(this.list, "userSelect", "none");
        },
        move: function (t) {
          var e = this,
            i = this.pos - this.drag;
          if (
            !(
              0 === i ||
              this.prevPos === this.pos ||
              (!this.dragging && Math.abs(i) < this.threshold)
            )
          ) {
            Re(this.list, "pointerEvents", "none"),
              t.cancelable && t.preventDefault(),
              (this.dragging = !0),
              (this.dir = i < 0 ? 1 : -1);
            for (
              var n = this.slides,
                r = this.prevIndex,
                o = Math.abs(i),
                s = this.getIndex(r + this.dir, r),
                a = this._getDistance(r, s) || n[r].offsetWidth;
              s !== r && o > a;

            )
              (this.drag -= a * this.dir),
                (r = s),
                (o -= a),
                (s = this.getIndex(r + this.dir, r)),
                (a = this._getDistance(r, s) || n[r].offsetWidth);
            this.percent = o / a;
            var h,
              c = n[r],
              l = n[s],
              u = this.index !== s,
              d = r === s;
            [this.index, this.prevIndex]
              .filter(function (t) {
                return !m([s, r], t);
              })
              .forEach(function (t) {
                ee(n[t], "itemhidden", [e]), d && ((h = !0), (e.prevIndex = r));
              }),
              ((this.index === r && this.prevIndex !== r) || h) &&
                ee(n[this.index], "itemshown", [this]),
              u &&
                ((this.prevIndex = r),
                (this.index = s),
                !d && ee(c, "beforeitemhide", [this]),
                ee(l, "beforeitemshow", [this])),
              (this._transitioner = this._translate(
                Math.abs(this.percent),
                c,
                !d && l
              )),
              u && (!d && ee(c, "itemhide", [this]), ee(l, "itemshow", [this]));
          }
        },
        end: function () {
          if (
            (Qt(document, vt, this.move, { passive: !1 }),
            Qt(document, wt + " " + yt + " input", this.end, !0),
            this.dragging)
          )
            if (((this.dragging = null), this.index === this.prevIndex))
              (this.percent = 1 - this.percent),
                (this.dir *= -1),
                this._show(!1, this.index, !0),
                (this._transitioner = null);
            else {
              var t =
                (ut ? this.dir * (ut ? 1 : -1) : this.dir) < 0 ==
                this.prevPos > this.pos;
              (this.index = t ? this.index : this.prevIndex),
                t && (this.percent = 1 - this.percent),
                this.show(
                  (this.dir > 0 && !t) || (this.dir < 0 && t)
                    ? "next"
                    : "previous",
                  !0
                );
            }
          Re(this.list, { userSelect: "", pointerEvents: "" }),
            (this.drag = this.percent = null);
        },
      },
    };
  var Kr = {
    mixins: [
      Xr,
      Gr,
      {
        data: { selNav: !1 },
        computed: {
          nav: function (t, e) {
            return ze(t.selNav, e);
          },
          selNavItem: function (t) {
            var e = t.attrItem;
            return "[" + e + "],[data-" + e + "]";
          },
          navItems: function (t, e) {
            return Ae(this.selNavItem, e);
          },
        },
        update: {
          write: function () {
            var t = this;
            this.nav &&
              this.length !== this.nav.children.length &&
              xe(
                this.nav,
                this.slides
                  .map(function (e, i) {
                    return (
                      "<li " + t.attrItem + '="' + i + '"><a href></a></li>'
                    );
                  })
                  .join("")
              ),
              this.navItems.concat(this.nav).forEach(function (e) {
                return e && (e.hidden = !t.maxIndex);
              }),
              this.updateNav();
          },
          events: ["resize"],
        },
        events: [
          {
            name: "click",
            delegate: function () {
              return this.selNavItem;
            },
            handler: function (t) {
              t.preventDefault(), this.show(ht(t.current, this.attrItem));
            },
          },
          { name: "itemshow", handler: "updateNav" },
        ],
        methods: {
          updateNav: function () {
            var t = this,
              e = this.getValidIndex();
            this.navItems.forEach(function (i) {
              var n = ht(i, t.attrItem);
              je(i, t.clsActive, D(n) === e),
                je(
                  i,
                  "uk-invisible",
                  t.finite &&
                    (("previous" === n && 0 === e) ||
                      ("next" === n && e >= t.maxIndex))
                );
            });
          },
        },
      },
    ],
    props: {
      clsActivated: Boolean,
      easing: String,
      index: Number,
      finite: Boolean,
      velocity: Number,
      selSlides: String,
    },
    data: function () {
      return {
        easing: "ease",
        finite: !1,
        velocity: 1,
        index: 0,
        prevIndex: -1,
        stack: [],
        percent: 0,
        clsActive: "uk-active",
        clsActivated: !1,
        Transitioner: !1,
        transitionOptions: {},
      };
    },
    connected: function () {
      (this.prevIndex = -1),
        (this.index = this.getValidIndex(this.$props.index)),
        (this.stack = []);
    },
    disconnected: function () {
      He(this.slides, this.clsActive);
    },
    computed: {
      duration: function (t, e) {
        var i = t.velocity;
        return Qr(e.offsetWidth / i);
      },
      list: function (t, e) {
        return ze(t.selList, e);
      },
      maxIndex: function () {
        return this.length - 1;
      },
      selSlides: function (t) {
        return t.selList + " " + (t.selSlides || "> *");
      },
      slides: {
        get: function () {
          return Ae(this.selSlides, this.$el);
        },
        watch: function () {
          this.$reset();
        },
      },
      length: function () {
        return this.slides.length;
      },
    },
    events: {
      itemshown: function () {
        this.$update(this.list);
      },
    },
    methods: {
      show: function (t, e) {
        var i = this;
        if ((void 0 === e && (e = !1), !this.dragging && this.length)) {
          var n = this.stack,
            r = e ? 0 : n.length,
            o = function () {
              n.splice(r, 1), n.length && i.show(n.shift(), !0);
            };
          if ((n[e ? "unshift" : "push"](t), !e && n.length > 1))
            2 === n.length &&
              this._transitioner.forward(Math.min(this.duration, 200));
          else {
            var s = this.getIndex(this.index),
              a = Pe(this.slides, this.clsActive) && this.slides[s],
              h = this.getIndex(t, this.index),
              c = this.slides[h];
            if (a !== c) {
              if (
                ((this.dir = (function (t, e) {
                  return "next" === t ? 1 : "previous" === t || t < e ? -1 : 1;
                })(t, s)),
                (this.prevIndex = s),
                (this.index = h),
                (a && !ee(a, "beforeitemhide", [this])) ||
                  !ee(c, "beforeitemshow", [this, a]))
              )
                return (this.index = this.prevIndex), void o();
              var l = this._show(a, c, e).then(function () {
                return (
                  a && ee(a, "itemhidden", [i]),
                  ee(c, "itemshown", [i]),
                  new le(function (t) {
                    wi.write(function () {
                      n.shift(),
                        n.length
                          ? i.show(n.shift(), !0)
                          : (i._transitioner = null),
                        t();
                    });
                  })
                );
              });
              return (
                a && ee(a, "itemhide", [this]), ee(c, "itemshow", [this]), l
              );
            }
            o();
          }
        }
      },
      getIndex: function (t, e) {
        return (
          void 0 === t && (t = this.index),
          void 0 === e && (e = this.index),
          K(nt(t, this.slides, e, this.finite), 0, this.maxIndex)
        );
      },
      getValidIndex: function (t, e) {
        return (
          void 0 === t && (t = this.index),
          void 0 === e && (e = this.prevIndex),
          this.getIndex(t, e)
        );
      },
      _show: function (t, e, i) {
        if (
          ((this._transitioner = this._getTransitioner(
            t,
            e,
            this.dir,
            U(
              {
                easing: i
                  ? e.offsetWidth < 600
                    ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                    : "cubic-bezier(0.165, 0.84, 0.44, 1)"
                  : this.easing,
              },
              this.transitionOptions
            )
          )),
          !i && !t)
        )
          return this._translate(1), le.resolve();
        var n = this.stack.length;
        return this._transitioner[n > 1 ? "forward" : "show"](
          n > 1 ? Math.min(this.duration, 75 + 75 / (n - 1)) : this.duration,
          this.percent
        );
      },
      _getDistance: function (t, e) {
        return this._getTransitioner(t, t !== e && e).getDistance();
      },
      _translate: function (t, e, i) {
        void 0 === e && (e = this.prevIndex), void 0 === i && (i = this.index);
        var n = this._getTransitioner(e !== i && e, i);
        return n.translate(t), n;
      },
      _getTransitioner: function (t, e, i, n) {
        return (
          void 0 === t && (t = this.prevIndex),
          void 0 === e && (e = this.index),
          void 0 === i && (i = this.dir || 1),
          void 0 === n && (n = this.transitionOptions),
          new this.Transitioner(
            A(t) ? this.slides[t] : t,
            A(e) ? this.slides[e] : e,
            i * (ut ? -1 : 1),
            n
          )
        );
      },
    },
  };
  function Qr(t) {
    return 0.5 * t + 300;
  }
  var to = {
      mixins: [Kr],
      props: { animation: String },
      data: {
        animation: "slide",
        clsActivated: "uk-transition-active",
        Animations: Wr,
        Transitioner: function (t, e, i, n) {
          var r = n.animation,
            o = n.easing,
            s = r.percent,
            a = r.translate,
            h = r.show;
          void 0 === h && (h = Q);
          var c = h(i),
            l = new ue();
          return {
            dir: i,
            show: function (n, r, s) {
              var a = this;
              void 0 === r && (r = 0);
              var h = s ? "linear" : o;
              return (
                (n -= Math.round(n * K(r, -1, 1))),
                this.translate(r),
                Jr(e, "itemin", { percent: r, duration: n, timing: h, dir: i }),
                Jr(t, "itemout", {
                  percent: 1 - r,
                  duration: n,
                  timing: h,
                  dir: i,
                }),
                le
                  .all([ti.start(e, c[1], n, h), ti.start(t, c[0], n, h)])
                  .then(function () {
                    a.reset(), l.resolve();
                  }, Q),
                l.promise
              );
            },
            cancel: function () {
              ti.cancel([e, t]);
            },
            reset: function () {
              for (var i in c[0]) Re([e, t], i, "");
            },
            forward: function (i, n) {
              return (
                void 0 === n && (n = this.percent()),
                ti.cancel([e, t]),
                this.show(i, n, !0)
              );
            },
            translate: function (n) {
              this.reset();
              var r = a(n, i);
              Re(e, r[1]),
                Re(t, r[0]),
                Jr(e, "itemtranslatein", { percent: n, dir: i }),
                Jr(t, "itemtranslateout", { percent: 1 - n, dir: i });
            },
            percent: function () {
              return s(t || e, e, i);
            },
            getDistance: function () {
              return t && t.offsetWidth;
            },
          };
        },
      },
      computed: {
        animation: function (t) {
          var e = t.animation,
            i = t.Animations;
          return U(i[e] || i.slide, { name: e });
        },
        transitionOptions: function () {
          return { animation: this.animation };
        },
      },
      events: {
        "itemshow itemhide itemshown itemhidden": function (t) {
          var e = t.target;
          this.$update(e);
        },
        beforeitemshow: function (t) {
          Ne(t.target, this.clsActive);
        },
        itemshown: function (t) {
          Ne(t.target, this.clsActivated);
        },
        itemhidden: function (t) {
          He(t.target, this.clsActive, this.clsActivated);
        },
      },
    },
    eo = {
      mixins: [gn, ar, sn, to],
      functional: !0,
      props: {
        delayControls: Number,
        preload: Number,
        videoAutoplay: Boolean,
        template: String,
      },
      data: function () {
        return {
          preload: 1,
          videoAutoplay: !1,
          delayControls: 3e3,
          items: [],
          cls: "uk-open",
          clsPage: "uk-lightbox-page",
          selList: ".uk-lightbox-items",
          attrItem: "uk-lightbox-item",
          selClose: ".uk-close-large",
          selCaption: ".uk-lightbox-caption",
          pauseOnHover: !1,
          velocity: 2,
          Animations: Yr,
          template:
            '<div class="uk-lightbox uk-overflow-hidden"> <ul class="uk-lightbox-items"></ul> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>',
        };
      },
      created: function () {
        var t = ze(this.template),
          e = ze(this.selList, t);
        this.items.forEach(function () {
          return ye(e, "<li>");
        }),
          this.$mount(ye(this.container, t));
      },
      computed: {
        caption: function (t, e) {
          return ze(t.selCaption, e);
        },
      },
      events: [
        { name: vt + " " + pt + " keydown", handler: "showControls" },
        {
          name: "click",
          self: !0,
          delegate: function () {
            return this.selSlides;
          },
          handler: function (t) {
            t.defaultPrevented || this.hide();
          },
        },
        {
          name: "shown",
          self: !0,
          handler: function () {
            this.showControls();
          },
        },
        {
          name: "hide",
          self: !0,
          handler: function () {
            this.hideControls(),
              He(this.slides, this.clsActive),
              ti.stop(this.slides);
          },
        },
        {
          name: "hidden",
          self: !0,
          handler: function () {
            this.$destroy(!0);
          },
        },
        {
          name: "keyup",
          el: function () {
            return document;
          },
          handler: function (t) {
            if (this.isToggled(this.$el) && this.draggable)
              switch (t.keyCode) {
                case 37:
                  this.show("previous");
                  break;
                case 39:
                  this.show("next");
              }
          },
        },
        {
          name: "beforeitemshow",
          handler: function (t) {
            this.isToggled() ||
              ((this.draggable = !1),
              t.preventDefault(),
              this.toggleElement(this.$el, !0, !1),
              (this.animation = Yr.scale),
              He(t.target, this.clsActive),
              this.stack.splice(1, 0, this.index));
          },
        },
        {
          name: "itemshow",
          handler: function () {
            xe(this.caption, this.getItem().caption || "");
            for (var t = -this.preload; t <= this.preload; t++)
              this.loadItem(this.index + t);
          },
        },
        {
          name: "itemshown",
          handler: function () {
            this.draggable = this.$props.draggable;
          },
        },
        {
          name: "itemload",
          handler: function (t, e) {
            var i = this,
              n = e.source,
              r = e.type,
              o = e.alt;
            void 0 === o && (o = "");
            var s = e.poster,
              a = e.attrs;
            if (
              (void 0 === a && (a = {}),
              this.setItem(e, "<span uk-spinner></span>"),
              n)
            ) {
              var h,
                c = {
                  frameborder: "0",
                  allow: "autoplay",
                  allowfullscreen: "",
                  style: "max-width: 100%; box-sizing: border-box;",
                  "uk-responsive": "",
                  "uk-video": "" + this.videoAutoplay,
                };
              if (
                "image" === r ||
                n.match(/\.(avif|jpe?g|a?png|gif|svg|webp)($|\?)/i)
              )
                we(n, a.srcset, a.size).then(
                  function (t) {
                    var r = t.width,
                      s = t.height;
                    return i.setItem(
                      e,
                      io("img", U({ src: n, width: r, height: s, alt: o }, a))
                    );
                  },
                  function () {
                    return i.setError(e);
                  }
                );
              else if ("video" === r || n.match(/\.(mp4|webm|ogv)($|\?)/i)) {
                var l = io(
                  "video",
                  U(
                    {
                      src: n,
                      poster: s,
                      controls: "",
                      playsinline: "",
                      "uk-video": "" + this.videoAutoplay,
                    },
                    a
                  )
                );
                Kt(l, "loadedmetadata", function () {
                  ot(l, { width: l.videoWidth, height: l.videoHeight }),
                    i.setItem(e, l);
                }),
                  Kt(l, "error", function () {
                    return i.setError(e);
                  });
              } else
                "iframe" === r || n.match(/\.(html|php)($|\?)/i)
                  ? this.setItem(
                      e,
                      io(
                        "iframe",
                        U(
                          {
                            src: n,
                            frameborder: "0",
                            allowfullscreen: "",
                            class: "uk-lightbox-iframe",
                          },
                          a
                        )
                      )
                    )
                  : (h = n.match(
                      /\/\/(?:.*?youtube(-nocookie)?\..*?[?&]v=|youtu\.be\/)([\w-]{11})[&?]?(.*)?/
                    ))
                  ? this.setItem(
                      e,
                      io(
                        "iframe",
                        U(
                          {
                            src:
                              "https://www.youtube" +
                              (h[1] || "") +
                              ".com/embed/" +
                              h[2] +
                              (h[3] ? "?" + h[3] : ""),
                            width: 1920,
                            height: 1080,
                          },
                          c,
                          a
                        )
                      )
                    )
                  : (h = n.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/)) &&
                    ve(
                      "https://vimeo.com/api/oembed.json?maxwidth=1920&url=" +
                        encodeURI(n),
                      { responseType: "json", withCredentials: !1 }
                    ).then(
                      function (t) {
                        var n = t.response,
                          r = n.height,
                          o = n.width;
                        return i.setItem(
                          e,
                          io(
                            "iframe",
                            U(
                              {
                                src:
                                  "https://player.vimeo.com/video/" +
                                  h[1] +
                                  (h[2] ? "?" + h[2] : ""),
                                width: o,
                                height: r,
                              },
                              c,
                              a
                            )
                          )
                        );
                      },
                      function () {
                        return i.setError(e);
                      }
                    );
            }
          },
        },
      ],
      methods: {
        loadItem: function (t) {
          void 0 === t && (t = this.index);
          var e = this.getItem(t);
          this.getSlide(e).childElementCount || ee(this.$el, "itemload", [e]);
        },
        getItem: function (t) {
          return (
            void 0 === t && (t = this.index), this.items[nt(t, this.slides)]
          );
        },
        setItem: function (t, e) {
          ee(this.$el, "itemloaded", [this, xe(this.getSlide(t), e)]);
        },
        getSlide: function (t) {
          return this.slides[this.items.indexOf(t)];
        },
        setError: function (t) {
          this.setItem(t, '<span uk-icon="icon: bolt; ratio: 2"></span>');
        },
        showControls: function () {
          clearTimeout(this.controlsTimer),
            (this.controlsTimer = setTimeout(
              this.hideControls,
              this.delayControls
            )),
            Ne(this.$el, "uk-active", "uk-transition-active");
        },
        hideControls: function () {
          He(this.$el, "uk-active", "uk-transition-active");
        },
      },
    };
  function io(t, e) {
    var i = Te("<" + t + ">");
    return ot(i, e), i;
  }
  var no,
    ro = {
      install: function (t, e) {
        t.lightboxPanel || t.component("lightboxPanel", eo);
        U(e.props, t.component("lightboxPanel").options.props);
      },
      props: { toggle: String },
      data: { toggle: "a" },
      computed: {
        toggles: {
          get: function (t, e) {
            return Ae(t.toggle, e);
          },
          watch: function () {
            this.hide();
          },
        },
      },
      disconnected: function () {
        this.hide();
      },
      events: [
        {
          name: "click",
          delegate: function () {
            return this.toggle + ":not(.uk-disabled)";
          },
          handler: function (t) {
            t.preventDefault(), this.show(t.current);
          },
        },
      ],
      methods: {
        show: function (t) {
          var e = this,
            i = G(this.toggles.map(oo), "source");
          if (I(t)) {
            var n = oo(t).source;
            t = y(i, function (t) {
              var e = t.source;
              return n === e;
            });
          }
          return (
            (this.panel =
              this.panel ||
              this.$create("lightboxPanel", U({}, this.$props, { items: i }))),
            Kt(this.panel.$el, "hidden", function () {
              return (e.panel = !1);
            }),
            this.panel.show(t)
          );
        },
        hide: function () {
          return this.panel && this.panel.hide();
        },
      },
    };
  function oo(t) {
    var e = {};
    return (
      ["href", "caption", "type", "poster", "alt", "attrs"].forEach(function (
        i
      ) {
        e["href" === i ? "source" : i] = ht(t, i);
      }),
      (e.attrs = Ii(e.attrs)),
      e
    );
  }
  var so = {
    mixins: [gn],
    functional: !0,
    args: ["message", "status"],
    data: {
      message: "",
      status: "",
      timeout: 5e3,
      group: null,
      pos: "top-center",
      clsContainer: "uk-notification",
      clsClose: "uk-notification-close",
      clsMsg: "uk-notification-message",
    },
    install: function (t) {
      t.notification.closeAll = function (e, i) {
        Ee(document.body, function (n) {
          var r = t.getComponent(n, "notification");
          !r || (e && e !== r.group) || r.close(i);
        });
      };
    },
    computed: {
      marginProp: function (t) {
        return "margin" + (u(t.pos, "top") ? "Top" : "Bottom");
      },
      startProps: function () {
        var t;
        return (
          ((t = { opacity: 0 })[this.marginProp] = -this.$el.offsetHeight), t
        );
      },
    },
    created: function () {
      var t =
        ze("." + this.clsContainer + "-" + this.pos, this.container) ||
        ye(
          this.container,
          '<div class="' +
            this.clsContainer +
            " " +
            this.clsContainer +
            "-" +
            this.pos +
            '" style="display: block"></div>'
        );
      this.$mount(
        ye(
          t,
          '<div class="' +
            this.clsMsg +
            (this.status ? " " + this.clsMsg + "-" + this.status : "") +
            '"> <a href class="' +
            this.clsClose +
            '" data-uk-close></a> <div>' +
            this.message +
            "</div> </div>"
        )
      );
    },
    connected: function () {
      var t,
        e = this,
        i = P(Re(this.$el, this.marginProp));
      ti.start(
        Re(this.$el, this.startProps),
        ((t = { opacity: 1 }), (t[this.marginProp] = i), t)
      ).then(function () {
        e.timeout && (e.timer = setTimeout(e.close, e.timeout));
      });
    },
    events:
      ((no = {
        click: function (t) {
          _t(t.target, 'a[href="#"],a[href=""]') && t.preventDefault(),
            this.close();
        },
      }),
      (no[mt] = function () {
        this.timer && clearTimeout(this.timer);
      }),
      (no[xt] = function () {
        this.timeout && (this.timer = setTimeout(this.close, this.timeout));
      }),
      no),
    methods: {
      close: function (t) {
        var e = this,
          i = function (t) {
            var i = St(t);
            ee(t, "close", [e]), Le(t), i && !i.hasChildNodes() && Le(i);
          };
        this.timer && clearTimeout(this.timer),
          t ? i(this.$el) : ti.start(this.$el, this.startProps).then(i);
      },
    },
  };
  var ao = [
      "x",
      "y",
      "bgx",
      "bgy",
      "rotate",
      "scale",
      "color",
      "backgroundColor",
      "borderColor",
      "opacity",
      "blur",
      "hue",
      "grayscale",
      "invert",
      "saturate",
      "sepia",
      "fopacity",
      "stroke",
    ],
    ho = {
      mixins: [rr],
      props: ao.reduce(function (t, e) {
        return (t[e] = "list"), t;
      }, {}),
      data: ao.reduce(function (t, e) {
        return (t[e] = void 0), t;
      }, {}),
      computed: {
        props: function (t, e) {
          var i = this;
          return ao.reduce(function (n, r) {
            if (H(t[r])) return n;
            var o,
              s,
              a,
              h = r.match(/color/i),
              c = h || "opacity" === r,
              l = t[r].slice();
            c && Re(e, r, ""),
              l.length < 2 &&
                l.unshift(("scale" === r ? 1 : c ? Re(e, r) : 0) || 0);
            var d = (function (t) {
              return t.reduce(function (t, e) {
                return (z(e) && e.replace(/-|\d/g, "").trim()) || t;
              }, "");
            })(l);
            if (h) {
              var f = e.style.color;
              (l = l.map(function (t) {
                return (function (t, e) {
                  return Re(Re(t, "color", e), "color")
                    .split(/[(),]/g)
                    .slice(1, -1)
                    .concat(1)
                    .slice(0, 4)
                    .map(P);
                })(e, t);
              })),
                (e.style.color = f);
            } else if (u(r, "bg")) {
              var g = "bgy" === r ? "height" : "width";
              if (
                ((l = l.map(function (t) {
                  return pi(t, g, i.$el);
                })),
                Re(e, "background-position-" + r[2], ""),
                (s = Re(e, "backgroundPosition").split(" ")[
                  "x" === r[2] ? 0 : 1
                ]),
                i.covers)
              ) {
                var p = Math.min.apply(Math, l),
                  v = Math.max.apply(Math, l),
                  w = l.indexOf(p) < l.indexOf(v);
                (a = v - p),
                  (l = l.map(function (t) {
                    return t - (w ? p : v);
                  })),
                  (o = (w ? -a : 0) + "px");
              } else o = s;
            } else l = l.map(P);
            if ("stroke" === r) {
              if (
                !l.some(function (t) {
                  return t;
                })
              )
                return n;
              var m = Nn(i.$el);
              Re(e, "strokeDasharray", m),
                "%" === d &&
                  (l = l.map(function (t) {
                    return (t * m) / 100;
                  })),
                (l = l.reverse()),
                (r = "strokeDashoffset");
            }
            return (n[r] = { steps: l, unit: d, pos: o, bgPos: s, diff: a }), n;
          }, {});
        },
        bgProps: function () {
          var t = this;
          return ["bgx", "bgy"].filter(function (e) {
            return e in t.props;
          });
        },
        covers: function (t, e) {
          return (function (t) {
            var e = t.style.backgroundSize,
              i = "cover" === Re(Re(t, "backgroundSize", ""), "backgroundSize");
            return (t.style.backgroundSize = e), i;
          })(e);
        },
      },
      disconnected: function () {
        delete this._image;
      },
      update: {
        read: function (t) {
          var e = this;
          if (this.matchMedia) {
            if (!t.image && this.covers && this.bgProps.length) {
              var i = Re(this.$el, "backgroundImage").replace(
                /^none|url\(["']?(.+?)["']?\)$/,
                "$1"
              );
              if (i) {
                var n = new Image();
                (n.src = i),
                  (t.image = n),
                  n.naturalWidth ||
                    (n.onload = function () {
                      return e.$update();
                    });
              }
            }
            var r = t.image;
            if (r && r.naturalWidth) {
              var o = {
                  width: this.$el.offsetWidth,
                  height: this.$el.offsetHeight,
                },
                s = { width: r.naturalWidth, height: r.naturalHeight },
                a = it.cover(s, o);
              this.bgProps.forEach(function (t) {
                var i = e.props[t],
                  n = i.diff,
                  r = i.bgPos,
                  h = i.steps,
                  c = "bgy" === t ? "height" : "width",
                  l = a[c] - o[c];
                if (l < n) o[c] = a[c] + n - l;
                else if (l > n) {
                  var u = o[c] / pi(r, c, e.$el);
                  u &&
                    (e.props[t].steps = h.map(function (t) {
                      return t - (l - n) / u;
                    }));
                }
                a = it.cover(s, o);
              }),
                (t.dim = a);
            }
          }
        },
        write: function (t) {
          var e = t.dim;
          this.matchMedia
            ? e &&
              Re(this.$el, {
                backgroundSize: e.width + "px " + e.height + "px",
                backgroundRepeat: "no-repeat",
              })
            : Re(this.$el, { backgroundSize: "", backgroundRepeat: "" });
        },
        events: ["resize"],
      },
      methods: {
        reset: function () {
          var t = this;
          J(this.getCss(0), function (e, i) {
            return Re(t.$el, i, "");
          });
        },
        getCss: function (t) {
          var e = this.props;
          return Object.keys(e).reduce(
            function (i, n) {
              var r = e[n],
                o = r.steps,
                s = r.unit,
                h = r.pos,
                c = (function (t, e, i) {
                  void 0 === i && (i = 2);
                  var n = co(t, e),
                    r = n[0],
                    o = n[1],
                    s = n[2];
                  return (
                    A(r) ? r + Math.abs(r - o) * s * (r < o ? 1 : -1) : +o
                  ).toFixed(i);
                })(o, t);
              switch (n) {
                case "x":
                case "y":
                  (s = s || "px"),
                    (i.transform +=
                      " translate" +
                      a(n) +
                      "(" +
                      P(c).toFixed("px" === s ? 0 : 2) +
                      s +
                      ")");
                  break;
                case "rotate":
                  (s = s || "deg"), (i.transform += " rotate(" + (c + s) + ")");
                  break;
                case "scale":
                  i.transform += " scale(" + c + ")";
                  break;
                case "bgy":
                case "bgx":
                  i["background-position-" + n[2]] =
                    "calc(" + h + " + " + c + "px)";
                  break;
                case "color":
                case "backgroundColor":
                case "borderColor":
                  var l = co(o, t),
                    u = l[0],
                    d = l[1],
                    f = l[2];
                  i[n] =
                    "rgba(" +
                    u
                      .map(function (t, e) {
                        return (
                          (t += f * (d[e] - t)),
                          3 === e ? P(t) : parseInt(t, 10)
                        );
                      })
                      .join(",") +
                    ")";
                  break;
                case "blur":
                  (s = s || "px"), (i.filter += " blur(" + (c + s) + ")");
                  break;
                case "hue":
                  (s = s || "deg"),
                    (i.filter += " hue-rotate(" + (c + s) + ")");
                  break;
                case "fopacity":
                  (s = s || "%"), (i.filter += " opacity(" + (c + s) + ")");
                  break;
                case "grayscale":
                case "invert":
                case "saturate":
                case "sepia":
                  (s = s || "%"), (i.filter += " " + n + "(" + (c + s) + ")");
                  break;
                default:
                  i[n] = c;
              }
              return i;
            },
            { transform: "", filter: "" }
          );
        },
      },
    };
  function co(t, e) {
    var i = t.length - 1,
      n = Math.min(Math.floor(i * e), i - 1),
      r = t.slice(n, n + 2);
    return r.push(1 === e ? 1 : (e % (1 / i)) * i), r;
  }
  var lo = {
    mixins: [ho],
    props: { target: String, viewport: Number, easing: Number },
    data: { target: !1, viewport: 1, easing: 1 },
    computed: {
      target: function (t, e) {
        var i = t.target;
        return uo((i && Pt(i, e)) || e);
      },
    },
    update: {
      read: function (t, e) {
        var i = t.percent;
        if ((e.has("scroll") || (i = !1), this.matchMedia)) {
          var n = i;
          return {
            percent: (i = (function (t, e) {
              return K(t * (1 - (e - e * t)));
            })(Ri(this.target) / (this.viewport || 1), this.easing)),
            style: n !== i && this.getCss(i),
          };
        }
      },
      write: function (t) {
        var e = t.style;
        this.matchMedia ? e && Re(this.$el, e) : this.reset();
      },
      events: ["scroll", "resize"],
    },
  };
  function uo(t) {
    return t ? ("offsetTop" in t ? t : uo(St(t))) : document.body;
  }
  var fo = {
    update: {
      write: function () {
        if (!this.stack.length && !this.dragging) {
          var t = this.getValidIndex(this.index);
          (~this.prevIndex && this.index === t) || this.show(t);
        }
      },
      events: ["resize"],
    },
  };
  function go(t, e, i) {
    var n = wo(t, e);
    return i
      ? n -
          (function (t, e) {
            return si(e).width / 2 - si(t).width / 2;
          })(t, e)
      : Math.min(n, po(e));
  }
  function po(t) {
    return Math.max(0, vo(t) - si(t).width);
  }
  function vo(t) {
    return Ot(t).reduce(function (t, e) {
      return si(e).width + t;
    }, 0);
  }
  function wo(t, e) {
    return (
      (t &&
        (hi(t).left + (ut ? si(t).width - si(e).width : 0)) * (ut ? -1 : 1)) ||
      0
    );
  }
  function mo(t, e) {
    e -= 1;
    var i = si(t).width,
      n = e + i + 2;
    return Ot(t).filter(function (r) {
      var o = wo(r, t),
        s = o + Math.min(si(r).width, i);
      return o >= e && s <= n;
    });
  }
  function xo(t, e, i) {
    ee(t, ie(e, !1, !1, i));
  }
  var yo = {
    mixins: [on, Kr, fo],
    props: { center: Boolean, sets: Boolean },
    data: {
      center: !1,
      sets: !1,
      attrItem: "uk-slider-item",
      selList: ".uk-slider-items",
      selNav: ".uk-slider-nav",
      clsContainer: "uk-slider-container",
      Transitioner: function (t, e, i, n) {
        var r = n.center,
          o = n.easing,
          s = n.list,
          a = new ue(),
          h = t ? go(t, s, r) : go(e, s, r) + si(e).width * i,
          c = e ? go(e, s, r) : h + si(t).width * i * (ut ? -1 : 1);
        return {
          dir: i,
          show: function (e, n, r) {
            void 0 === n && (n = 0);
            var h = r ? "linear" : o;
            return (
              (e -= Math.round(e * K(n, -1, 1))),
              this.translate(n),
              (n = t ? n : K(n, 0, 1)),
              xo(this.getItemIn(), "itemin", {
                percent: n,
                duration: e,
                timing: h,
                dir: i,
              }),
              t &&
                xo(this.getItemIn(!0), "itemout", {
                  percent: 1 - n,
                  duration: e,
                  timing: h,
                  dir: i,
                }),
              ti
                .start(s, { transform: qr(-c * (ut ? -1 : 1), "px") }, e, h)
                .then(a.resolve, Q),
              a.promise
            );
          },
          cancel: function () {
            ti.cancel(s);
          },
          reset: function () {
            Re(s, "transform", "");
          },
          forward: function (t, e) {
            return (
              void 0 === e && (e = this.percent()),
              ti.cancel(s),
              this.show(t, e, !0)
            );
          },
          translate: function (n) {
            var r = this.getDistance() * i * (ut ? -1 : 1);
            Re(
              s,
              "transform",
              qr(K(r - r * n - c, -vo(s), si(s).width) * (ut ? -1 : 1), "px")
            );
            var o = this.getActives(),
              a = this.getItemIn(),
              h = this.getItemIn(!0);
            (n = t ? K(n, -1, 1) : 0),
              Ot(s).forEach(function (r) {
                var c = m(o, r),
                  l = r === a,
                  u = r === h;
                xo(
                  r,
                  "itemtranslate" +
                    (l ||
                    (!u &&
                      (c ||
                        (i * (ut ? -1 : 1) == -1) ^ (wo(r, s) > wo(t || e))))
                      ? "in"
                      : "out"),
                  { dir: i, percent: u ? 1 - n : l ? n : c ? 1 : 0 }
                );
              });
          },
          percent: function () {
            return Math.abs(
              (Re(s, "transform").split(",")[4] * (ut ? -1 : 1) + h) / (c - h)
            );
          },
          getDistance: function () {
            return Math.abs(c - h);
          },
          getItemIn: function (i) {
            void 0 === i && (i = !1);
            var n = this.getActives(),
              o = mo(s, go(e || t, s, r));
            if (i) {
              var a = n;
              (n = o), (o = a);
            }
            return o[
              y(o, function (t) {
                return !m(n, t);
              })
            ];
          },
          getActives: function () {
            return mo(s, go(t || e, s, r));
          },
        };
      },
    },
    computed: {
      avgWidth: function () {
        return vo(this.list) / this.length;
      },
      finite: function (t) {
        var e;
        return (
          t.finite ||
          Math.ceil(vo(this.list)) <
            si(this.list).width +
              ((e = this.list),
              Math.max.apply(
                Math,
                [0].concat(
                  Ot(e).map(function (t) {
                    return si(t).width;
                  })
                )
              )) +
              this.center
        );
      },
      maxIndex: function () {
        if (!this.finite || (this.center && !this.sets)) return this.length - 1;
        if (this.center) return Y(this.sets);
        var t = 0,
          e = po(this.list),
          i = y(this.slides, function (i) {
            if (t >= e) return !0;
            t += si(i).width;
          });
        return ~i ? i : this.length - 1;
      },
      sets: function (t) {
        var e = this,
          i = t.sets;
        if (i) {
          var n = si(this.list).width / (this.center ? 2 : 1),
            r = 0,
            o = n,
            s = 0;
          return (
            (i = X(this.slides, "offsetLeft").reduce(function (t, i, a) {
              var h = si(i).width;
              if (
                s + h > r &&
                (!e.center && a > e.maxIndex && (a = e.maxIndex), !m(t, a))
              ) {
                var c = e.slides[a + 1];
                e.center && c && h < o - si(c).width / 2
                  ? (o -= h)
                  : ((o = n), t.push(a), (r = s + n + (e.center ? h / 2 : 0)));
              }
              return (s += h), t;
            }, [])),
            !N(i) && i
          );
        }
      },
      transitionOptions: function () {
        return { center: this.center, list: this.list };
      },
    },
    connected: function () {
      je(this.$el, this.clsContainer, !ze("." + this.clsContainer, this.$el));
    },
    update: {
      write: function () {
        var t = this;
        this.navItems.forEach(function (e) {
          var i = D(ht(e, t.attrItem));
          !1 !== i &&
            (e.hidden =
              !t.maxIndex || i > t.maxIndex || (t.sets && !m(t.sets, i)));
        }),
          !this.length ||
            this.dragging ||
            this.stack.length ||
            (this.reorder(), this._translate(1));
        var e = this._getTransitioner(this.index).getActives();
        this.slides.forEach(function (i) {
          return je(i, t.clsActive, m(e, i));
        }),
          !this.clsActivated ||
            (this.sets && !m(this.sets, P(this.index))) ||
            this.slides.forEach(function (i) {
              return je(i, t.clsActivated || "", m(e, i));
            });
      },
      events: ["resize"],
    },
    events: {
      beforeitemshow: function (t) {
        !this.dragging &&
          this.sets &&
          this.stack.length < 2 &&
          !m(this.sets, this.index) &&
          (this.index = this.getValidIndex());
        var e = Math.abs(
          this.index -
            this.prevIndex +
            ((this.dir > 0 && this.index < this.prevIndex) ||
            (this.dir < 0 && this.index > this.prevIndex)
              ? (this.maxIndex + 1) * this.dir
              : 0)
        );
        if (!this.dragging && e > 1) {
          for (var i = 0; i < e; i++)
            this.stack.splice(1, 0, this.dir > 0 ? "next" : "previous");
          t.preventDefault();
        } else {
          var n =
            this.dir < 0 || !this.slides[this.prevIndex]
              ? this.index
              : this.prevIndex;
          (this.duration =
            Qr(this.avgWidth / this.velocity) *
            (si(this.slides[n]).width / this.avgWidth)),
            this.reorder();
        }
      },
      itemshow: function () {
        ~this.prevIndex &&
          Ne(this._getTransitioner().getItemIn(), this.clsActive);
      },
    },
    methods: {
      reorder: function () {
        var t = this;
        if (this.finite) Re(this.slides, "order", "");
        else {
          var e =
            this.dir > 0 && this.slides[this.prevIndex]
              ? this.prevIndex
              : this.index;
          if (
            (this.slides.forEach(function (i, n) {
              return Re(
                i,
                "order",
                t.dir > 0 && n < e ? 1 : t.dir < 0 && n >= t.index ? -1 : ""
              );
            }),
            this.center)
          )
            for (
              var i = this.slides[e],
                n = si(this.list).width / 2 - si(i).width / 2,
                r = 0;
              n > 0;

            ) {
              var o = this.getIndex(--r + e, e),
                s = this.slides[o];
              Re(s, "order", o > e ? -2 : -1), (n -= si(s).width);
            }
        }
      },
      getValidIndex: function (t, e) {
        if (
          (void 0 === t && (t = this.index),
          void 0 === e && (e = this.prevIndex),
          (t = this.getIndex(t, e)),
          !this.sets)
        )
          return t;
        var i;
        do {
          if (m(this.sets, t)) return t;
          (i = t), (t = this.getIndex(t + this.dir, e));
        } while (t !== i);
        return t;
      },
    },
  };
  var ko = {
    mixins: [ho],
    data: { selItem: "!li" },
    computed: {
      item: function (t, e) {
        return Pt(t.selItem, e);
      },
    },
    events: [
      {
        name: "itemin itemout",
        self: !0,
        el: function () {
          return this.item;
        },
        handler: function (t) {
          var e = this,
            i = t.type,
            n = t.detail,
            r = n.percent,
            o = n.duration,
            s = n.timing,
            a = n.dir;
          wi.read(function () {
            var t = e.getCss(bo(i, a, r)),
              n = e.getCss(Co(i) ? 0.5 : a > 0 ? 1 : 0);
            wi.write(function () {
              Re(e.$el, t), ti.start(e.$el, n, o, s).catch(Q);
            });
          });
        },
      },
      {
        name: "transitioncanceled transitionend",
        self: !0,
        el: function () {
          return this.item;
        },
        handler: function () {
          ti.cancel(this.$el);
        },
      },
      {
        name: "itemtranslatein itemtranslateout",
        self: !0,
        el: function () {
          return this.item;
        },
        handler: function (t) {
          var e = this,
            i = t.type,
            n = t.detail,
            r = n.percent,
            o = n.dir;
          wi.read(function () {
            var t = e.getCss(bo(i, o, r));
            wi.write(function () {
              return Re(e.$el, t);
            });
          });
        },
      },
    ],
  };
  function Co(t) {
    return f(t, "in");
  }
  function bo(t, e, i) {
    return (i /= 2), Co(t) ? (e < 0 ? 1 - i : i) : e < 0 ? i : 1 - i;
  }
  var Lo,
    $o,
    Mo = U({}, Wr, {
      fade: {
        show: function () {
          return [{ opacity: 0, zIndex: 0 }, { zIndex: -1 }];
        },
        percent: function (t) {
          return 1 - Re(t, "opacity");
        },
        translate: function (t) {
          return [{ opacity: 1 - t, zIndex: 0 }, { zIndex: -1 }];
        },
      },
      scale: {
        show: function () {
          return [
            { opacity: 0, transform: Ur(1.5), zIndex: 0 },
            { zIndex: -1 },
          ];
        },
        percent: function (t) {
          return 1 - Re(t, "opacity");
        },
        translate: function (t) {
          return [
            { opacity: 1 - t, transform: Ur(1 + 0.5 * t), zIndex: 0 },
            { zIndex: -1 },
          ];
        },
      },
      pull: {
        show: function (t) {
          return t < 0
            ? [
                { transform: qr(30), zIndex: -1 },
                { transform: qr(), zIndex: 0 },
              ]
            : [
                { transform: qr(-100), zIndex: 0 },
                { transform: qr(), zIndex: -1 },
              ];
        },
        percent: function (t, e, i) {
          return i < 0 ? 1 - Rr(e) : Rr(t);
        },
        translate: function (t, e) {
          return e < 0
            ? [
                { transform: qr(30 * t), zIndex: -1 },
                { transform: qr(-100 * (1 - t)), zIndex: 0 },
              ]
            : [
                { transform: qr(100 * -t), zIndex: 0 },
                { transform: qr(30 * (1 - t)), zIndex: -1 },
              ];
        },
      },
      push: {
        show: function (t) {
          return t < 0
            ? [
                { transform: qr(100), zIndex: 0 },
                { transform: qr(), zIndex: -1 },
              ]
            : [
                { transform: qr(-30), zIndex: -1 },
                { transform: qr(), zIndex: 0 },
              ];
        },
        percent: function (t, e, i) {
          return i > 0 ? 1 - Rr(e) : Rr(t);
        },
        translate: function (t, e) {
          return e < 0
            ? [
                { transform: qr(100 * t), zIndex: 0 },
                { transform: qr(-30 * (1 - t)), zIndex: -1 },
              ]
            : [
                { transform: qr(-30 * t), zIndex: -1 },
                { transform: qr(100 * (1 - t)), zIndex: 0 },
              ];
        },
      },
    }),
    Bo = {
      mixins: [on, to, fo],
      props: { ratio: String, minHeight: Number, maxHeight: Number },
      data: {
        ratio: "16:9",
        minHeight: !1,
        maxHeight: !1,
        selList: ".uk-slideshow-items",
        attrItem: "uk-slideshow-item",
        selNav: ".uk-slideshow-nav",
        Animations: Mo,
      },
      update: {
        read: function () {
          var t = this.ratio.split(":").map(Number),
            e = t[0],
            i = t[1];
          return (
            (i = (i * this.list.offsetWidth) / e || 0),
            this.minHeight && (i = Math.max(this.minHeight, i)),
            this.maxHeight && (i = Math.min(this.maxHeight, i)),
            { height: i - fi(this.list, "height", "content-box") }
          );
        },
        write: function (t) {
          var e = t.height;
          e > 0 && Re(this.list, "minHeight", e);
        },
        events: ["resize"],
      },
    },
    So = {
      mixins: [on, jr],
      props: {
        group: String,
        threshold: Number,
        clsItem: String,
        clsPlaceholder: String,
        clsDrag: String,
        clsDragState: String,
        clsBase: String,
        clsNoDrag: String,
        clsEmpty: String,
        clsCustom: String,
        handle: String,
      },
      data: {
        group: !1,
        threshold: 5,
        clsItem: "uk-sortable-item",
        clsPlaceholder: "uk-sortable-placeholder",
        clsDrag: "uk-sortable-drag",
        clsDragState: "uk-drag",
        clsBase: "uk-sortable",
        clsNoDrag: "uk-sortable-nodrag",
        clsEmpty: "uk-sortable-empty",
        clsCustom: "",
        handle: !1,
        pos: {},
      },
      created: function () {
        var t = this;
        ["init", "start", "move", "end"].forEach(function (e) {
          var i = t[e];
          t[e] = function (e) {
            U(t.pos, ce(e)), i(e);
          };
        });
      },
      events: { name: pt, passive: !1, handler: "init" },
      computed: {
        target: function () {
          return (this.$el.tBodies || [this.$el])[0];
        },
        items: function () {
          return Ot(this.target);
        },
        isEmpty: {
          get: function () {
            return N(this.items);
          },
          watch: function (t) {
            je(this.target, this.clsEmpty, t);
          },
          immediate: !0,
        },
        handles: {
          get: function (t, e) {
            var i = t.handle;
            return i ? Ae(i, e) : this.items;
          },
          watch: function (t, e) {
            Re(e, { touchAction: "", userSelect: "" }),
              Re(t, { touchAction: gt ? "none" : "", userSelect: "none" });
          },
          immediate: !0,
        },
      },
      update: {
        write: function (t) {
          if (this.drag && St(this.placeholder)) {
            var e = this,
              i = e.pos,
              n = i.x,
              r = i.y,
              o = e.origin,
              s = o.offsetTop,
              a = o.offsetLeft,
              h = e.placeholder;
            Re(this.drag, { top: r - s, left: n - a });
            var c = this.getSortable(document.elementFromPoint(n, r));
            if (c) {
              var l = c.items;
              if (!l.some(ti.inProgress)) {
                var u = (function (t, e) {
                  return t[
                    y(t, function (t) {
                      return et(e, t.getBoundingClientRect());
                    })
                  ];
                })(l, { x: n, y: r });
                if (!l.length || (u && u !== h)) {
                  var d = this.getSortable(h),
                    f = (function (t, e, i, n, r, o) {
                      if (!Ot(t).length) return;
                      var s = e.getBoundingClientRect();
                      if (!o)
                        return (function (t, e) {
                          var i = 1 === Ot(t).length;
                          i && ye(t, e);
                          var n = Ot(t),
                            r = n.some(function (t, e) {
                              var i = t.getBoundingClientRect();
                              return n.slice(e + 1).some(function (t) {
                                var e = t.getBoundingClientRect();
                                return !Io(
                                  [i.left, i.right],
                                  [e.left, e.right]
                                );
                              });
                            });
                          i && Le(e);
                          return r;
                        })(t, i) || r < s.top + s.height / 2
                          ? e
                          : e.nextElementSibling;
                      var a = i.getBoundingClientRect(),
                        h = Io([s.top, s.bottom], [a.top, a.bottom]),
                        c = h ? n : r,
                        l = h ? "width" : "height",
                        u = h ? "left" : "top",
                        d = h ? "right" : "bottom",
                        f = a[l] < s[l] ? s[l] - a[l] : 0;
                      if (a[u] < s[u])
                        return !(f && c < s[u] + f) && e.nextElementSibling;
                      if (f && c > s[d] - f) return !1;
                      return e;
                    })(c.target, u, h, n, r, c === d && t.moved !== u);
                  !1 !== f &&
                    ((f && h === f) ||
                      (c !== d ? (d.remove(h), (t.moved = u)) : delete t.moved,
                      c.insert(h, f),
                      this.touched.add(c)));
                }
              }
            }
          }
        },
        events: ["move"],
      },
      methods: {
        init: function (t) {
          var e = t.target,
            i = t.button,
            n = t.defaultPrevented,
            r = this.items.filter(function (t) {
              return Nt(e, t);
            })[0];
          !r ||
            n ||
            i > 0 ||
            $t(e) ||
            Nt(e, "." + this.clsNoDrag) ||
            (this.handle && !Nt(e, this.handle)) ||
            (t.preventDefault(),
            (this.touched = new Set([this])),
            (this.placeholder = r),
            (this.origin = U({ target: e, index: Dt(r) }, this.pos)),
            Kt(document, vt, this.move),
            Kt(document, wt, this.end),
            this.threshold || this.start(t));
        },
        start: function (t) {
          var e, i, n;
          this.drag =
            ((e = this.$container),
            (i = this.placeholder),
            Re(
              (n = ye(
                e,
                i.outerHTML.replace(/(^<)(?:li|tr)|(?:li|tr)(\/>$)/g, "$1div$2")
              )),
              "margin",
              "0",
              "important"
            ),
            Re(
              n,
              U(
                {
                  boxSizing: "border-box",
                  width: i.offsetWidth,
                  height: i.offsetHeight,
                },
                Re(i, [
                  "paddingLeft",
                  "paddingRight",
                  "paddingTop",
                  "paddingBottom",
                ])
              )
            ),
            li(n.firstElementChild, li(i.firstElementChild)),
            n);
          var r = this.placeholder.getBoundingClientRect(),
            o = r.left,
            s = r.top;
          U(this.origin, {
            offsetLeft: this.pos.x - o,
            offsetTop: this.pos.y - s,
          }),
            Ne(this.drag, this.clsDrag, this.clsCustom),
            Ne(this.placeholder, this.clsPlaceholder),
            Ne(this.items, this.clsItem),
            Ne(document.documentElement, this.clsDragState),
            ee(this.$el, "start", [this, this.placeholder]),
            (function (t) {
              var e = Date.now();
              Lo = setInterval(function () {
                var i = t.x,
                  n = t.y;
                n += window.pageYOffset;
                var r = 0.3 * (Date.now() - e);
                (e = Date.now()),
                  qi(document.elementFromPoint(i, t.y))
                    .reverse()
                    .some(function (t) {
                      var e = t.scrollTop,
                        i = t.scrollHeight,
                        o = ai(Ui(t)),
                        s = o.top,
                        a = o.bottom,
                        h = o.height;
                      if (s < n && s + 35 > n) e -= r;
                      else {
                        if (!(a > n && a - 35 < n)) return;
                        e += r;
                      }
                      if (e > 0 && e < i - h) return Vi(t, e), !0;
                    });
              }, 15);
            })(this.pos),
            this.move(t);
        },
        move: function (t) {
          this.drag
            ? this.$emit("move")
            : (Math.abs(this.pos.x - this.origin.x) > this.threshold ||
                Math.abs(this.pos.y - this.origin.y) > this.threshold) &&
              this.start(t);
        },
        end: function () {
          var t = this;
          if (
            (Qt(document, vt, this.move),
            Qt(document, wt, this.end),
            Qt(window, "scroll", this.scroll),
            this.drag)
          ) {
            clearInterval(Lo);
            var e = this.getSortable(this.placeholder);
            this === e
              ? this.origin.index !== Dt(this.placeholder) &&
                ee(this.$el, "moved", [this, this.placeholder])
              : (ee(e.$el, "added", [e, this.placeholder]),
                ee(this.$el, "removed", [this, this.placeholder])),
              ee(this.$el, "stop", [this, this.placeholder]),
              Le(this.drag),
              (this.drag = null),
              this.touched.forEach(function (e) {
                var i = e.clsPlaceholder,
                  n = e.clsItem;
                return t.touched.forEach(function (t) {
                  return He(t.items, i, n);
                });
              }),
              (this.touched = null),
              He(document.documentElement, this.clsDragState);
          }
        },
        insert: function (t, e) {
          var i = this;
          Ne(this.items, this.clsItem);
          this.animate(function () {
            return e ? ke(e, t) : ye(i.target, t);
          });
        },
        remove: function (t) {
          Nt(t, this.target) &&
            this.animate(function () {
              return Le(t);
            });
        },
        getSortable: function (t) {
          do {
            var e = this.$getComponent(t, "sortable");
            if (
              e &&
              (e === this || (!1 !== this.group && e.group === this.group))
            )
              return e;
          } while ((t = St(t)));
        },
      },
    };
  function Io(t, e) {
    return t[1] > e[0] && e[1] > t[0];
  }
  var To = {
    mixins: [gn, sn, pn],
    args: "title",
    props: { delay: Number, title: String },
    data: {
      pos: "top",
      title: "",
      delay: 0,
      animation: ["uk-animation-scale-up"],
      duration: 100,
      cls: "uk-active",
      clsPos: "uk-tooltip",
    },
    beforeConnect: function () {
      var t;
      (this._hasTitle = st(this.$el, "title")),
        ot(this.$el, "title", ""),
        this.updateAria(!1),
        Bt((t = this.$el)) || ot(t, "tabindex", "0");
    },
    disconnected: function () {
      this.hide(), ot(this.$el, "title", this._hasTitle ? this.title : null);
    },
    methods: {
      show: function () {
        var t = this;
        !this.isToggled(this.tooltip || null) &&
          this.title &&
          ((this._unbind = te(
            document,
            "show keydown " + pt,
            this.hide,
            !1,
            function (e) {
              return (
                (e.type === pt && !Nt(e.target, t.$el)) ||
                ("keydown" === e.type && 27 === e.keyCode) ||
                ("show" === e.type &&
                  e.detail[0] !== t &&
                  e.detail[0].$name === t.$name)
              );
            }
          )),
          clearTimeout(this.showTimer),
          (this.showTimer = setTimeout(this._show, this.delay)));
      },
      hide: function () {
        var t = this;
        zt(this.$el, "input:focus") ||
          (clearTimeout(this.showTimer),
          this.isToggled(this.tooltip || null) &&
            this.toggleElement(this.tooltip, !1, !1).then(function () {
              (t.tooltip = Le(t.tooltip)), t._unbind();
            }));
      },
      _show: function () {
        var t = this;
        (this.tooltip = ye(
          this.container,
          '<div class="' +
            this.clsPos +
            '"> <div class="' +
            this.clsPos +
            '-inner">' +
            this.title +
            "</div> </div>"
        )),
          Kt(this.tooltip, "toggled", function (e, i) {
            t.updateAria(i),
              i &&
                (t.positionAt(t.tooltip, t.$el),
                (t.origin =
                  "y" === t.getAxis()
                    ? gi(t.dir) + "-" + t.align
                    : t.align + "-" + gi(t.dir)));
          }),
          this.toggleElement(this.tooltip, !0);
      },
      updateAria: function (t) {
        ot(this.$el, "aria-expanded", t);
      },
    },
    events:
      (($o = { focus: "show", blur: "hide" }),
      ($o[mt + " " + xt] = function (t) {
        he(t) || this[t.type === mt ? "show" : "hide"]();
      }),
      ($o[pt] = function (t) {
        he(t) && this.show();
      }),
      $o),
  };
  var Eo = {
    props: {
      allow: String,
      clsDragover: String,
      concurrent: Number,
      maxSize: Number,
      method: String,
      mime: String,
      msgInvalidMime: String,
      msgInvalidName: String,
      msgInvalidSize: String,
      multiple: Boolean,
      name: String,
      params: Object,
      type: String,
      url: String,
    },
    data: {
      allow: !1,
      clsDragover: "uk-dragover",
      concurrent: 1,
      maxSize: 0,
      method: "POST",
      mime: !1,
      msgInvalidMime: "Invalid File Type: %s",
      msgInvalidName: "Invalid File Name: %s",
      msgInvalidSize: "Invalid File Size: %s Kilobytes Max",
      multiple: !1,
      name: "files[]",
      params: {},
      type: "",
      url: "",
      abort: Q,
      beforeAll: Q,
      beforeSend: Q,
      complete: Q,
      completeAll: Q,
      error: Q,
      fail: Q,
      load: Q,
      loadEnd: Q,
      loadStart: Q,
      progress: Q,
    },
    events: {
      change: function (t) {
        zt(t.target, 'input[type="file"]') &&
          (t.preventDefault(),
          t.target.files && this.upload(t.target.files),
          (t.target.value = ""));
      },
      drop: function (t) {
        Ao(t);
        var e = t.dataTransfer;
        e && e.files && (He(this.$el, this.clsDragover), this.upload(e.files));
      },
      dragenter: function (t) {
        Ao(t);
      },
      dragover: function (t) {
        Ao(t), Ne(this.$el, this.clsDragover);
      },
      dragleave: function (t) {
        Ao(t), He(this.$el, this.clsDragover);
      },
    },
    methods: {
      upload: function (t) {
        var e = this;
        if (t.length) {
          ee(this.$el, "upload", [t]);
          for (var i = 0; i < t.length; i++) {
            if (this.maxSize && 1e3 * this.maxSize < t[i].size)
              return void this.fail(
                this.msgInvalidSize.replace("%s", this.maxSize)
              );
            if (this.allow && !zo(this.allow, t[i].name))
              return void this.fail(
                this.msgInvalidName.replace("%s", this.allow)
              );
            if (this.mime && !zo(this.mime, t[i].type))
              return void this.fail(
                this.msgInvalidMime.replace("%s", this.mime)
              );
          }
          this.multiple || (t = [t[0]]), this.beforeAll(this, t);
          var n = (function (t, e) {
              for (var i = [], n = 0; n < t.length; n += e) {
                for (var r = [], o = 0; o < e; o++) r.push(t[n + o]);
                i.push(r);
              }
              return i;
            })(t, this.concurrent),
            r = function (t) {
              var i = new FormData();
              for (var o in (t.forEach(function (t) {
                return i.append(e.name, t);
              }),
              e.params))
                i.append(o, e.params[o]);
              ve(e.url, {
                data: i,
                method: e.method,
                responseType: e.type,
                beforeSend: function (t) {
                  var i = t.xhr;
                  return (
                    i.upload && Kt(i.upload, "progress", e.progress),
                    ["loadStart", "load", "loadEnd", "abort"].forEach(function (
                      t
                    ) {
                      return Kt(i, t.toLowerCase(), e[t]);
                    }),
                    e.beforeSend(t)
                  );
                },
              }).then(
                function (t) {
                  e.complete(t), n.length ? r(n.shift()) : e.completeAll(t);
                },
                function (t) {
                  return e.error(t);
                }
              );
            };
          r(n.shift());
        }
      },
    },
  };
  function zo(t, e) {
    return e.match(
      new RegExp(
        "^" +
          t
            .replace(/\//g, "\\/")
            .replace(/\*\*/g, "(\\/[^\\/]+)*")
            .replace(/\*/g, "[^\\/]+")
            .replace(/((?!\\))\?/g, "$1.") +
          "$",
        "i"
      )
    );
  }
  function Ao(t) {
    t.preventDefault(), t.stopPropagation();
  }
  return (
    J(
      Object.freeze({
        __proto__: null,
        Countdown: Ir,
        Filter: Zr,
        Lightbox: ro,
        LightboxPanel: eo,
        Notification: so,
        Parallax: lo,
        Slider: yo,
        SliderParallax: ko,
        Slideshow: Bo,
        SlideshowParallax: ko,
        Sortable: So,
        Tooltip: To,
        Upload: Eo,
      }),
      function (t, e) {
        return rn.component(e, t);
      }
    ),
    rn
  );
}),
  (function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = e())
      : "function" == typeof define && define.amd
      ? define("uikiticons", e)
      : ((t =
          "undefined" != typeof globalThis
            ? globalThis
            : t || self).UIkitIcons = e());
  })(this, function () {
    "use strict";
    function t(e) {
      t.installed ||
        e.icon.add({
          "500px":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.624,11.866c-0.141,0.132,0.479,0.658,0.662,0.418c0.051-0.046,0.607-0.61,0.662-0.664c0,0,0.738,0.719,0.814,0.719 c0.1,0,0.207-0.055,0.322-0.17c0.27-0.269,0.135-0.416,0.066-0.495l-0.631-0.616l0.658-0.668c0.146-0.156,0.021-0.314-0.1-0.449 c-0.182-0.18-0.359-0.226-0.471-0.125l-0.656,0.654l-0.654-0.654c-0.033-0.034-0.08-0.045-0.124-0.045 c-0.079,0-0.191,0.068-0.307,0.181c-0.202,0.202-0.247,0.351-0.133,0.462l0.665,0.665L9.624,11.866z"/><path d="M11.066,2.884c-1.061,0-2.185,0.248-3.011,0.604c-0.087,0.034-0.141,0.106-0.15,0.205C7.893,3.784,7.919,3.909,7.982,4.066 c0.05,0.136,0.187,0.474,0.452,0.372c0.844-0.326,1.779-0.507,2.633-0.507c0.963,0,1.9,0.191,2.781,0.564 c0.695,0.292,1.357,0.719,2.078,1.34c0.051,0.044,0.105,0.068,0.164,0.068c0.143,0,0.273-0.137,0.389-0.271 c0.191-0.214,0.324-0.395,0.135-0.575c-0.686-0.654-1.436-1.138-2.363-1.533C13.24,3.097,12.168,2.884,11.066,2.884z"/><path d="M16.43,15.747c-0.092-0.028-0.242,0.05-0.309,0.119l0,0c-0.652,0.652-1.42,1.169-2.268,1.521 c-0.877,0.371-1.814,0.551-2.779,0.551c-0.961,0-1.896-0.189-2.775-0.564c-0.848-0.36-1.612-0.879-2.268-1.53 c-0.682-0.688-1.196-1.455-1.529-2.268c-0.325-0.799-0.471-1.643-0.471-1.643c-0.045-0.24-0.258-0.249-0.567-0.203 c-0.128,0.021-0.519,0.079-0.483,0.36v0.01c0.105,0.644,0.289,1.284,0.545,1.895c0.417,0.969,1.002,1.849,1.756,2.604 c0.757,0.754,1.636,1.34,2.604,1.757C8.901,18.785,9.97,19,11.088,19c1.104,0,2.186-0.215,3.188-0.645 c1.838-0.896,2.604-1.757,2.604-1.757c0.182-0.204,0.227-0.317-0.1-0.643C16.779,15.956,16.525,15.774,16.43,15.747z"/><path d="M5.633,13.287c0.293,0.71,0.723,1.341,1.262,1.882c0.54,0.54,1.172,0.971,1.882,1.264c0.731,0.303,1.509,0.461,2.298,0.461 c0.801,0,1.578-0.158,2.297-0.461c0.711-0.293,1.344-0.724,1.883-1.264c0.543-0.541,0.971-1.172,1.264-1.882 c0.314-0.721,0.463-1.5,0.463-2.298c0-0.79-0.148-1.569-0.463-2.289c-0.293-0.699-0.721-1.329-1.264-1.881 c-0.539-0.541-1.172-0.959-1.867-1.263c-0.721-0.303-1.5-0.461-2.299-0.461c-0.802,0-1.613,0.159-2.322,0.461 c-0.577,0.25-1.544,0.867-2.119,1.454v0.012V2.108h8.16C15.1,2.104,15.1,1.69,15.1,1.552C15.1,1.417,15.1,1,14.809,1H5.915 C5.676,1,5.527,1.192,5.527,1.384v6.84c0,0.214,0.273,0.372,0.529,0.428c0.5,0.105,0.614-0.056,0.737-0.224l0,0 c0.18-0.273,0.776-0.884,0.787-0.894c0.901-0.905,2.117-1.408,3.416-1.408c1.285,0,2.5,0.501,3.412,1.408 c0.914,0.914,1.408,2.122,1.408,3.405c0,1.288-0.508,2.496-1.408,3.405c-0.9,0.896-2.152,1.406-3.438,1.406 c-0.877,0-1.711-0.229-2.433-0.671v-4.158c0-0.553,0.237-1.151,0.643-1.614c0.462-0.519,1.094-0.799,1.782-0.799 c0.664,0,1.293,0.253,1.758,0.715c0.459,0.459,0.709,1.071,0.709,1.723c0,1.385-1.094,2.468-2.488,2.468 c-0.273,0-0.769-0.121-0.781-0.125c-0.281-0.087-0.405,0.306-0.438,0.436c-0.159,0.496,0.079,0.585,0.123,0.607 c0.452,0.137,0.743,0.157,1.129,0.157c1.973,0,3.572-1.6,3.572-3.57c0-1.964-1.6-3.552-3.572-3.552c-0.97,0-1.872,0.36-2.546,1.038 c-0.656,0.631-1.027,1.487-1.027,2.322v3.438v-0.011c-0.372-0.42-0.732-1.041-0.981-1.682c-0.102-0.248-0.315-0.202-0.607-0.113 c-0.135,0.035-0.519,0.157-0.44,0.439C5.372,12.799,5.577,13.164,5.633,13.287z"/></svg>',
          album:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="2" width="10" height="1"/><rect x="3" y="4" width="14" height="1"/><rect fill="none" stroke="#000" x="1.5" y="6.5" width="17" height="11"/></svg>',
          "arrow-down":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="10.5,16.08 5.63,10.66 6.37,10 10.5,14.58 14.63,10 15.37,10.66"/><line fill="none" stroke="#000" x1="10.5" y1="4" x2="10.5" y2="15"/></svg>',
          "arrow-left":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="10 14 5 9.5 10 5"/><line fill="none" stroke="#000" x1="16" y1="9.5" x2="5" y2="9.52"/></svg>',
          "arrow-right":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="10 5 15 9.5 10 14"/><line fill="none" stroke="#000" x1="4" y1="9.5" x2="15" y2="9.5"/></svg>',
          "arrow-up":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="10.5,4 15.37,9.4 14.63,10.08 10.5,5.49 6.37,10.08 5.63,9.4"/><line fill="none" stroke="#000" x1="10.5" y1="16" x2="10.5" y2="5"/></svg>',
          bag: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M7.5,7.5V4A2.48,2.48,0,0,1,10,1.5,2.54,2.54,0,0,1,12.5,4V7.5"/><polygon fill="none" stroke="#000" points="16.5 7.5 3.5 7.5 2.5 18.5 17.5 18.5 16.5 7.5"/></svg>',
          ban: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><line fill="none" stroke="#000" stroke-width="1.1" x1="4" y1="3.5" x2="16" y2="16.5"/></svg>',
          behance:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.5,10.6c-0.4-0.5-0.9-0.9-1.6-1.1c1.7-1,2.2-3.2,0.7-4.7C7.8,4,6.3,4,5.2,4C3.5,4,1.7,4,0,4v12c1.7,0,3.4,0,5.2,0 c1,0,2.1,0,3.1-0.5C10.2,14.6,10.5,12.3,9.5,10.6L9.5,10.6z M5.6,6.1c1.8,0,1.8,2.7-0.1,2.7c-1,0-2,0-2.9,0V6.1H5.6z M2.6,13.8v-3.1 c1.1,0,2.1,0,3.2,0c2.1,0,2.1,3.2,0.1,3.2L2.6,13.8z"/><path d="M19.9,10.9C19.7,9.2,18.7,7.6,17,7c-4.2-1.3-7.3,3.4-5.3,7.1c0.9,1.7,2.8,2.3,4.7,2.1c1.7-0.2,2.9-1.3,3.4-2.9h-2.2 c-0.4,1.3-2.4,1.5-3.5,0.6c-0.4-0.4-0.6-1.1-0.6-1.7H20C20,11.7,19.9,10.9,19.9,10.9z M13.5,10.6c0-1.6,2.3-2.7,3.5-1.4 c0.4,0.4,0.5,0.9,0.6,1.4H13.5L13.5,10.6z"/><rect x="13" y="4" width="5" height="1.4"/></svg>',
          bell: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M17,15.5 L3,15.5 C2.99,14.61 3.79,13.34 4.1,12.51 C4.58,11.3 4.72,10.35 5.19,7.01 C5.54,4.53 5.89,3.2 7.28,2.16 C8.13,1.56 9.37,1.5 9.81,1.5 L9.96,1.5 C9.96,1.5 11.62,1.41 12.67,2.17 C14.08,3.2 14.42,4.54 14.77,7.02 C15.26,10.35 15.4,11.31 15.87,12.52 C16.2,13.34 17.01,14.61 17,15.5 L17,15.5 Z"/><path fill="none" stroke="#000" d="M12.39,16 C12.39,17.37 11.35,18.43 9.91,18.43 C8.48,18.43 7.42,17.37 7.42,16"/></svg>',
          bold: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5,15.3 C5.66,15.3 5.9,15 5.9,14.53 L5.9,5.5 C5.9,4.92 5.56,4.7 5,4.7 L5,4 L8.95,4 C12.6,4 13.7,5.37 13.7,6.9 C13.7,7.87 13.14,9.17 10.86,9.59 L10.86,9.7 C13.25,9.86 14.29,11.28 14.3,12.54 C14.3,14.47 12.94,16 9,16 L5,16 L5,15.3 Z M9,9.3 C11.19,9.3 11.8,8.5 11.85,7 C11.85,5.65 11.3,4.8 9,4.8 L7.67,4.8 L7.67,9.3 L9,9.3 Z M9.185,15.22 C11.97,15 12.39,14 12.4,12.58 C12.4,11.15 11.39,10 9,10 L7.67,10 L7.67,15 L9.18,15 Z"/></svg>',
          bolt: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.74,20 L7.73,12 L3,12 L15.43,1 L12.32,9 L17.02,9 L4.74,20 L4.74,20 L4.74,20 Z M9.18,11 L7.1,16.39 L14.47,10 L10.86,10 L12.99,4.67 L5.61,11 L9.18,11 L9.18,11 L9.18,11 Z"/></svg>',
          bookmark:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="5.5 1.5 15.5 1.5 15.5 17.5 10.5 12.5 5.5 17.5"/></svg>',
          calendar:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M 2,3 2,17 18,17 18,3 2,3 Z M 17,16 3,16 3,8 17,8 17,16 Z M 17,7 3,7 3,4 17,4 17,7 Z"/><rect width="1" height="3" x="6" y="2"/><rect width="1" height="3" x="13" y="2"/></svg>',
          camera:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10.8" r="3.8"/><path fill="none" stroke="#000" d="M1,4.5 C0.7,4.5 0.5,4.7 0.5,5 L0.5,17 C0.5,17.3 0.7,17.5 1,17.5 L19,17.5 C19.3,17.5 19.5,17.3 19.5,17 L19.5,5 C19.5,4.7 19.3,4.5 19,4.5 L13.5,4.5 L13.5,2.9 C13.5,2.6 13.3,2.5 13,2.5 L7,2.5 C6.7,2.5 6.5,2.6 6.5,2.9 L6.5,4.5 L1,4.5 L1,4.5 Z"/></svg>',
          cart: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="7.3" cy="17.3" r="1.4"/><circle cx="13.3" cy="17.3" r="1.4"/><polyline fill="none" stroke="#000" points="0 2 3.2 4 5.3 12.5 16 12.5 18 6.5 8 6.5"/></svg>',
          check:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4"/></svg>',
          "chevron-double-left":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="10 14 6 10 10 6"/><polyline fill="none" stroke="#000" stroke-width="1.03" points="14 14 10 10 14 6"/></svg>',
          "chevron-double-right":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="10 6 14 10 10 14"/><polyline fill="none" stroke="#000" stroke-width="1.03" points="6 6 10 10 6 14"/></svg>',
          "chevron-down":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="16 7 10 13 4 7"/></svg>',
          "chevron-left":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="13 16 7 10 13 4"/></svg>',
          "chevron-right":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="7 4 13 10 7 16"/></svg>',
          "chevron-up":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="4 13 10 7 16 13"/></svg>',
          clock:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><rect x="9" y="4" width="1" height="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M13.018,14.197 L9.445,10.625"/></svg>',
          close:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.06" d="M16,16 L4,4"/><path fill="none" stroke="#000" stroke-width="1.06" d="M16,4 L4,16"/></svg>',
          "cloud-download":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.3,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6"/><polyline fill="none" stroke="#000" points="11.75 16 9.5 18.25 7.25 16"/><path fill="none" stroke="#000" d="M9.5,18 L9.5,9.5"/></svg>',
          "cloud-upload":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.31,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6"/><polyline fill="none" stroke="#000" points="7.25 11.75 9.5 9.5 11.75 11.75"/><path fill="none" stroke="#000" d="M9.5,18 L9.5,9.5"/></svg>',
          code: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.01" points="13,4 19,10 13,16"/><polyline fill="none" stroke="#000" stroke-width="1.01" points="7,4 1,10 7,16"/></svg>',
          cog: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" cx="9.997" cy="10" r="3.31"/><path fill="none" stroke="#000" d="M18.488,12.285 L16.205,16.237 C15.322,15.496 14.185,15.281 13.303,15.791 C12.428,16.289 12.047,17.373 12.246,18.5 L7.735,18.5 C7.938,17.374 7.553,16.299 6.684,15.791 C5.801,15.27 4.655,15.492 3.773,16.237 L1.5,12.285 C2.573,11.871 3.317,10.999 3.317,9.991 C3.305,8.98 2.573,8.121 1.5,7.716 L3.765,3.784 C4.645,4.516 5.794,4.738 6.687,4.232 C7.555,3.722 7.939,2.637 7.735,1.5 L12.263,1.5 C12.072,2.637 12.441,3.71 13.314,4.22 C14.206,4.73 15.343,4.516 16.225,3.794 L18.487,7.714 C17.404,8.117 16.661,8.988 16.67,10.009 C16.672,11.018 17.415,11.88 18.488,12.285 L18.488,12.285 Z"/></svg>',
          comment:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6,18.71 L6,14 L1,14 L1,1 L19,1 L19,14 L10.71,14 L6,18.71 L6,18.71 Z M2,13 L7,13 L7,16.29 L10.29,13 L18,13 L18,2 L2,2 L2,13 L2,13 Z"/></svg>',
          commenting:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="1.5,1.5 18.5,1.5 18.5,13.5 10.5,13.5 6.5,17.5 6.5,13.5 1.5,13.5"/><circle cx="10" cy="8" r="1"/><circle cx="6" cy="8" r="1"/><circle cx="14" cy="8" r="1"/></svg>',
          comments:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="2 0.5 19.5 0.5 19.5 13"/><path d="M5,19.71 L5,15 L0,15 L0,2 L18,2 L18,15 L9.71,15 L5,19.71 L5,19.71 L5,19.71 Z M1,14 L6,14 L6,17.29 L9.29,14 L17,14 L17,3 L1,3 L1,14 L1,14 L1,14 Z"/></svg>',
          copy: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" x="3.5" y="2.5" width="12" height="16"/><polyline fill="none" stroke="#000" points="5 0.5 17.5 0.5 17.5 17"/></svg>',
          "credit-card":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" x="1.5" y="4.5" width="17" height="12"/><rect x="1" y="7" width="18" height="3"/></svg>',
          database:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><ellipse fill="none" stroke="#000" cx="10" cy="4.64" rx="7.5" ry="3.14"/><path fill="none" stroke="#000" d="M17.5,8.11 C17.5,9.85 14.14,11.25 10,11.25 C5.86,11.25 2.5,9.84 2.5,8.11"/><path fill="none" stroke="#000" d="M17.5,11.25 C17.5,12.99 14.14,14.39 10,14.39 C5.86,14.39 2.5,12.98 2.5,11.25"/><path fill="none" stroke="#000" d="M17.49,4.64 L17.5,14.36 C17.5,16.1 14.14,17.5 10,17.5 C5.86,17.5 2.5,16.09 2.5,14.36 L2.5,4.64"/></svg>',
          desktop:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="15" width="1" height="2"/><rect x="11" y="15" width="1" height="2"/><rect x="5" y="16" width="10" height="1"/><rect fill="none" stroke="#000" x="1.5" y="3.5" width="17" height="11"/></svg>',
          discord:
            '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M16.074,4.361a14.243,14.243,0,0,0-3.61-1.134,10.61,10.61,0,0,0-.463.96,13.219,13.219,0,0,0-4,0,10.138,10.138,0,0,0-.468-.96A14.206,14.206,0,0,0,3.919,4.364,15.146,15.146,0,0,0,1.324,14.5a14.435,14.435,0,0,0,4.428,2.269A10.982,10.982,0,0,0,6.7,15.21a9.294,9.294,0,0,1-1.494-.727c.125-.093.248-.19.366-.289a10.212,10.212,0,0,0,8.854,0c.119.1.242.2.366.289a9.274,9.274,0,0,1-1.5.728,10.8,10.8,0,0,0,.948,1.562,14.419,14.419,0,0,0,4.431-2.27A15.128,15.128,0,0,0,16.074,4.361Zm-8.981,8.1a1.7,1.7,0,0,1-1.573-1.79A1.689,1.689,0,0,1,7.093,8.881a1.679,1.679,0,0,1,1.573,1.791A1.687,1.687,0,0,1,7.093,12.462Zm5.814,0a1.7,1.7,0,0,1-1.573-1.79,1.689,1.689,0,0,1,1.573-1.791,1.679,1.679,0,0,1,1.573,1.791A1.688,1.688,0,0,1,12.907,12.462Z"/></svg>',
          download:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="14,10 9.5,14.5 5,10"/><rect x="3" y="17" width="13" height="1"/><line fill="none" stroke="#000" x1="9.5" y1="13.91" x2="9.5" y2="3"/></svg>',
          dribbble:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.4" d="M1.3,8.9c0,0,5,0.1,8.6-1c1.4-0.4,2.6-0.9,4-1.9 c1.4-1.1,2.5-2.5,2.5-2.5"/><path fill="none" stroke="#000" stroke-width="1.4" d="M3.9,16.6c0,0,1.7-2.8,3.5-4.2 c1.8-1.3,4-2,5.7-2.2C16,10,19,10.6,19,10.6"/><path fill="none" stroke="#000" stroke-width="1.4" d="M6.9,1.6c0,0,3.3,4.6,4.2,6.8 c0.4,0.9,1.3,3.1,1.9,5.2c0.6,2,0.9,4.4,0.9,4.4"/><circle fill="none" stroke="#000" stroke-width="1.4" cx="10" cy="10" r="9"/></svg>',
          etsy: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M8,4.26C8,4.07,8,4,8.31,4h4.46c.79,0,1.22.67,1.53,1.91l.25,1h.76c.14-2.82.26-4,.26-4S13.65,3,12.52,3H6.81L3.75,2.92v.84l1,.2c.73.11.9.27,1,1,0,0,.06,2,.06,5.17s-.06,5.14-.06,5.14c0,.59-.23.81-1,.94l-1,.2v.84l3.06-.1h5.11c1.15,0,3.82.1,3.82.1,0-.7.45-3.88.51-4.22h-.73l-.76,1.69a2.25,2.25,0,0,1-2.45,1.47H9.4c-1,0-1.44-.4-1.44-1.24V10.44s2.16,0,2.86.06c.55,0,.85.19,1.06,1l.23,1H13L12.9,9.94,13,7.41h-.85l-.28,1.13c-.16.74-.28.84-1,1-1,.1-2.89.09-2.89.09Z"/></svg>',
          expand:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 18 2 18 7 17 7 17 3 13 3"/><polygon points="2 13 3 13 3 17 7 17 7 18 2 18"/><path fill="none" stroke="#000" stroke-width="1.1" d="M11,9 L17,3"/><path fill="none" stroke="#000" stroke-width="1.1" d="M3,17 L9,11"/></svg>',
          facebook:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z"/></svg>',
          "file-edit":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M18.65,1.68 C18.41,1.45 18.109,1.33 17.81,1.33 C17.499,1.33 17.209,1.45 16.98,1.68 L8.92,9.76 L8,12.33 L10.55,11.41 L18.651,3.34 C19.12,2.87 19.12,2.15 18.65,1.68 L18.65,1.68 L18.65,1.68 Z"/><polyline fill="none" stroke="#000" points="16.5 8.482 16.5 18.5 3.5 18.5 3.5 1.5 14.211 1.5"/></svg>',
          "file-pdf":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" width="13" height="17" x="3.5" y="1.5"/><path d="M14.65 11.67c-.48.3-1.37-.19-1.79-.37a4.65 4.65 0 0 1 1.49.06c.35.1.36.28.3.31zm-6.3.06l.43-.79a14.7 14.7 0 0 0 .75-1.64 5.48 5.48 0 0 0 1.25 1.55l.2.15a16.36 16.36 0 0 0-2.63.73zM9.5 5.32c.2 0 .32.5.32.97a1.99 1.99 0 0 1-.23 1.04 5.05 5.05 0 0 1-.17-1.3s0-.71.08-.71zm-3.9 9a4.35 4.35 0 0 1 1.21-1.46l.24-.22a4.35 4.35 0 0 1-1.46 1.68zm9.23-3.3a2.05 2.05 0 0 0-1.32-.3 11.07 11.07 0 0 0-1.58.11 4.09 4.09 0 0 1-.74-.5 5.39 5.39 0 0 1-1.32-2.06 10.37 10.37 0 0 0 .28-2.62 1.83 1.83 0 0 0-.07-.25.57.57 0 0 0-.52-.4H9.4a.59.59 0 0 0-.6.38 6.95 6.95 0 0 0 .37 3.14c-.26.63-1 2.12-1 2.12-.3.58-.57 1.08-.82 1.5l-.8.44A3.11 3.11 0 0 0 5 14.16a.39.39 0 0 0 .15.42l.24.13c1.15.56 2.28-1.74 2.66-2.42a23.1 23.1 0 0 1 3.59-.85 4.56 4.56 0 0 0 2.91.8.5.5 0 0 0 .3-.21 1.1 1.1 0 0 0 .12-.75.84.84 0 0 0-.14-.25z"/></svg>',
          "file-text":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" width="13" height="17" x="3.5" y="1.5"/><line fill="none" stroke="#000" x1="6" x2="12" y1="12.5" y2="12.5"/><line fill="none" stroke="#000" x1="6" x2="14" y1="8.5" y2="8.5"/><line fill="none" stroke="#000" x1="6" x2="14" y1="6.5" y2="6.5"/><line fill="none" stroke="#000" x1="6" x2="14" y1="10.5" y2="10.5"/></svg>',
          file: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" x="3.5" y="1.5" width="13" height="17"/></svg>',
          flickr:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="5.5" cy="9.5" r="3.5"/><circle cx="14.5" cy="9.5" r="3.5"/></svg>',
          folder:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="9.5 5.5 8.5 3.5 1.5 3.5 1.5 16.5 18.5 16.5 18.5 5.5"/></svg>',
          forward:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.47,13.11 C4.02,10.02 6.27,7.85 9.04,6.61 C9.48,6.41 10.27,6.13 11,5.91 L11,2 L18.89,9 L11,16 L11,12.13 C9.25,12.47 7.58,13.19 6.02,14.25 C3.03,16.28 1.63,18.54 1.63,18.54 C1.63,18.54 1.38,15.28 2.47,13.11 L2.47,13.11 Z M5.3,13.53 C6.92,12.4 9.04,11.4 12,10.92 L12,13.63 L17.36,9 L12,4.25 L12,6.8 C11.71,6.86 10.86,7.02 9.67,7.49 C6.79,8.65 4.58,10.96 3.49,13.08 C3.18,13.7 2.68,14.87 2.49,16 C3.28,15.05 4.4,14.15 5.3,13.53 L5.3,13.53 Z"/></svg>',
          foursquare:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.23,2 C15.96,2 16.4,2.41 16.5,2.86 C16.57,3.15 16.56,3.44 16.51,3.73 C16.46,4.04 14.86,11.72 14.75,12.03 C14.56,12.56 14.16,12.82 13.61,12.83 C13.03,12.84 11.09,12.51 10.69,13 C10.38,13.38 7.79,16.39 6.81,17.53 C6.61,17.76 6.4,17.96 6.08,17.99 C5.68,18.04 5.29,17.87 5.17,17.45 C5.12,17.28 5.1,17.09 5.1,16.91 C5.1,12.4 4.86,7.81 5.11,3.31 C5.17,2.5 5.81,2.12 6.53,2 L15.23,2 L15.23,2 Z M9.76,11.42 C9.94,11.19 10.17,11.1 10.45,11.1 L12.86,11.1 C13.12,11.1 13.31,10.94 13.36,10.69 C13.37,10.64 13.62,9.41 13.74,8.83 C13.81,8.52 13.53,8.28 13.27,8.28 C12.35,8.29 11.42,8.28 10.5,8.28 C9.84,8.28 9.83,7.69 9.82,7.21 C9.8,6.85 10.13,6.55 10.5,6.55 C11.59,6.56 12.67,6.55 13.76,6.55 C14.03,6.55 14.23,6.4 14.28,6.14 C14.34,5.87 14.67,4.29 14.67,4.29 C14.67,4.29 14.82,3.74 14.19,3.74 L7.34,3.74 C7,3.75 6.84,4.02 6.84,4.33 C6.84,7.58 6.85,14.95 6.85,14.99 C6.87,15 8.89,12.51 9.76,11.42 L9.76,11.42 Z"/></svg>',
          future:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline points="19 2 18 2 18 6 14 6 14 7 19 7 19 2"/><path fill="none" stroke="#000" stroke-width="1.1" d="M18,6.548 C16.709,3.29 13.354,1 9.6,1 C4.6,1 0.6,5 0.6,10 C0.6,15 4.6,19 9.6,19 C14.6,19 18.6,15 18.6,10"/><rect x="9" y="4" width="1" height="7"/><path d="M13.018,14.197 L9.445,10.625" fill="none" stroke="#000" stroke-width="1.1"/></svg>',
          "git-branch":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.2" cx="7" cy="3" r="2"/><circle fill="none" stroke="#000" stroke-width="1.2" cx="14" cy="6" r="2"/><circle fill="none" stroke="#000" stroke-width="1.2" cx="7" cy="17" r="2"/><path fill="none" stroke="#000" stroke-width="2" d="M14,8 C14,10.41 12.43,10.87 10.56,11.25 C9.09,11.54 7,12.06 7,15 L7,5"/></svg>',
          "git-fork":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.2" cx="5.79" cy="2.79" r="1.79"/><circle fill="none" stroke="#000" stroke-width="1.2" cx="14.19" cy="2.79" r="1.79"/><circle fill="none" stroke="#000" stroke-width="1.2" cx="10.03" cy="16.79" r="1.79"/><path fill="none" stroke="#000" stroke-width="2" d="M5.79,4.57 L5.79,6.56 C5.79,9.19 10.03,10.22 10.03,13.31 C10.03,14.86 10.04,14.55 10.04,14.55 C10.04,14.37 10.04,14.86 10.04,13.31 C10.04,10.22 14.2,9.19 14.2,6.56 L14.2,4.57"/></svg>',
          "github-alt":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10,0.5 C4.75,0.5 0.5,4.76 0.5,10.01 C0.5,15.26 4.75,19.51 10,19.51 C15.24,19.51 19.5,15.26 19.5,10.01 C19.5,4.76 15.25,0.5 10,0.5 L10,0.5 Z M12.81,17.69 C12.81,17.69 12.81,17.7 12.79,17.69 C12.47,17.75 12.35,17.59 12.35,17.36 L12.35,16.17 C12.35,15.45 12.09,14.92 11.58,14.56 C12.2,14.51 12.77,14.39 13.26,14.21 C13.87,13.98 14.36,13.69 14.74,13.29 C15.42,12.59 15.76,11.55 15.76,10.17 C15.76,9.25 15.45,8.46 14.83,7.8 C15.1,7.08 15.07,6.29 14.75,5.44 L14.51,5.42 C14.34,5.4 14.06,5.46 13.67,5.61 C13.25,5.78 12.79,6.03 12.31,6.35 C11.55,6.16 10.81,6.05 10.09,6.05 C9.36,6.05 8.61,6.15 7.88,6.35 C7.28,5.96 6.75,5.68 6.26,5.54 C6.07,5.47 5.9,5.44 5.78,5.44 L5.42,5.44 C5.06,6.29 5.04,7.08 5.32,7.8 C4.7,8.46 4.4,9.25 4.4,10.17 C4.4,11.94 4.96,13.16 6.08,13.84 C6.53,14.13 7.05,14.32 7.69,14.43 C8.03,14.5 8.32,14.54 8.55,14.55 C8.07,14.89 7.82,15.42 7.82,16.16 L7.82,17.51 C7.8,17.69 7.7,17.8 7.51,17.8 C4.21,16.74 1.82,13.65 1.82,10.01 C1.82,5.5 5.49,1.83 10,1.83 C14.5,1.83 18.17,5.5 18.17,10.01 C18.18,13.53 15.94,16.54 12.81,17.69 L12.81,17.69 Z"/></svg>',
          github:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10,1 C5.03,1 1,5.03 1,10 C1,13.98 3.58,17.35 7.16,18.54 C7.61,18.62 7.77,18.34 7.77,18.11 C7.77,17.9 7.76,17.33 7.76,16.58 C5.26,17.12 4.73,15.37 4.73,15.37 C4.32,14.33 3.73,14.05 3.73,14.05 C2.91,13.5 3.79,13.5 3.79,13.5 C4.69,13.56 5.17,14.43 5.17,14.43 C5.97,15.8 7.28,15.41 7.79,15.18 C7.87,14.6 8.1,14.2 8.36,13.98 C6.36,13.75 4.26,12.98 4.26,9.53 C4.26,8.55 4.61,7.74 5.19,7.11 C5.1,6.88 4.79,5.97 5.28,4.73 C5.28,4.73 6.04,4.49 7.75,5.65 C8.47,5.45 9.24,5.35 10,5.35 C10.76,5.35 11.53,5.45 12.25,5.65 C13.97,4.48 14.72,4.73 14.72,4.73 C15.21,5.97 14.9,6.88 14.81,7.11 C15.39,7.74 15.73,8.54 15.73,9.53 C15.73,12.99 13.63,13.75 11.62,13.97 C11.94,14.25 12.23,14.8 12.23,15.64 C12.23,16.84 12.22,17.81 12.22,18.11 C12.22,18.35 12.38,18.63 12.84,18.54 C16.42,17.35 19,13.98 19,10 C19,5.03 14.97,1 10,1 L10,1 Z"/></svg>',
          gitter:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="3.5" y="1" width="1.531" height="11.471"/><rect x="7.324" y="4.059" width="1.529" height="15.294"/><rect x="11.148" y="4.059" width="1.527" height="15.294"/><rect x="14.971" y="4.059" width="1.529" height="8.412"/></svg>',
          google:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.86,9.09 C18.46,12.12 17.14,16.05 13.81,17.56 C9.45,19.53 4.13,17.68 2.47,12.87 C0.68,7.68 4.22,2.42 9.5,2.03 C11.57,1.88 13.42,2.37 15.05,3.65 C15.22,3.78 15.37,3.93 15.61,4.14 C14.9,4.81 14.23,5.45 13.5,6.14 C12.27,5.08 10.84,4.72 9.28,4.98 C8.12,5.17 7.16,5.76 6.37,6.63 C4.88,8.27 4.62,10.86 5.76,12.82 C6.95,14.87 9.17,15.8 11.57,15.25 C13.27,14.87 14.76,13.33 14.89,11.75 L10.51,11.75 L10.51,9.09 L17.86,9.09 L17.86,9.09 Z"/></svg>',
          grid: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="3" height="3"/><rect x="8" y="2" width="3" height="3"/><rect x="14" y="2" width="3" height="3"/><rect x="2" y="8" width="3" height="3"/><rect x="8" y="8" width="3" height="3"/><rect x="14" y="8" width="3" height="3"/><rect x="2" y="14" width="3" height="3"/><rect x="8" y="14" width="3" height="3"/><rect x="14" y="14" width="3" height="3"/></svg>',
          happy:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="13" cy="7" r="1"/><circle cx="7" cy="7" r="1"/><circle fill="none" stroke="#000" cx="10" cy="10" r="8.5"/><path fill="none" stroke="#000" d="M14.6,11.4 C13.9,13.3 12.1,14.5 10,14.5 C7.9,14.5 6.1,13.3 5.4,11.4"/></svg>',
          hashtag:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.431,8 L15.661,7 L12.911,7 L13.831,3 L12.901,3 L11.98,7 L9.29,7 L10.21,3 L9.281,3 L8.361,7 L5.23,7 L5,8 L8.13,8 L7.21,12 L4.23,12 L4,13 L6.98,13 L6.061,17 L6.991,17 L7.911,13 L10.601,13 L9.681,17 L10.611,17 L11.531,13 L14.431,13 L14.661,12 L11.76,12 L12.681,8 L15.431,8 Z M10.831,12 L8.141,12 L9.061,8 L11.75,8 L10.831,12 Z"/></svg>',
          heart:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.03" d="M10,4 C10,4 8.1,2 5.74,2 C3.38,2 1,3.55 1,6.73 C1,8.84 2.67,10.44 2.67,10.44 L10,18 L17.33,10.44 C17.33,10.44 19,8.84 19,6.73 C19,3.55 16.62,2 14.26,2 C11.9,2 10,4 10,4 L10,4 Z"/></svg>',
          history:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="#000" points="1 2 2 2 2 6 6 6 6 7 1 7 1 2"/><path fill="none" stroke="#000" stroke-width="1.1" d="M2.1,6.548 C3.391,3.29 6.746,1 10.5,1 C15.5,1 19.5,5 19.5,10 C19.5,15 15.5,19 10.5,19 C5.5,19 1.5,15 1.5,10"/><rect x="9" y="4" width="1" height="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M13.018,14.197 L9.445,10.625"/></svg>',
          home: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="18.65 11.35 10 2.71 1.35 11.35 0.65 10.65 10 1.29 19.35 10.65"/><polygon points="15 4 18 4 18 7 17 7 17 5 15 5"/><polygon points="3 11 4 11 4 18 7 18 7 12 12 12 12 18 16 18 16 11 17 11 17 19 11 19 11 13 8 13 8 19 3 19"/></svg>',
          image:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="16.1" cy="6.1" r="1.1"/><rect fill="none" stroke="#000" x=".5" y="2.5" width="19" height="15"/><polyline fill="none" stroke="#000" stroke-width="1.01" points="4,13 8,9 13,14"/><polyline fill="none" stroke="#000" stroke-width="1.01" points="11,12 12.5,10.5 16,14"/></svg>',
          info: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.13,11.59 C11.97,12.84 10.35,14.12 9.1,14.16 C6.17,14.2 9.89,9.46 8.74,8.37 C9.3,8.16 10.62,7.83 10.62,8.81 C10.62,9.63 10.12,10.55 9.88,11.32 C8.66,15.16 12.13,11.15 12.14,11.18 C12.16,11.21 12.16,11.35 12.13,11.59 C12.08,11.95 12.16,11.35 12.13,11.59 L12.13,11.59 Z M11.56,5.67 C11.56,6.67 9.36,7.15 9.36,6.03 C9.36,5 11.56,4.54 11.56,5.67 L11.56,5.67 Z"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/></svg>',
          instagram:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z"/><circle cx="14.87" cy="5.26" r="1.09"/><path d="M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z"/></svg>',
          italic:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.63,5.48 L10.15,14.52 C10,15.08 10.37,15.25 11.92,15.3 L11.72,16 L6,16 L6.2,15.31 C7.78,15.26 8.19,15.09 8.34,14.53 L10.82,5.49 C10.97,4.92 10.63,4.76 9.09,4.71 L9.28,4 L15,4 L14.81,4.69 C13.23,4.75 12.78,4.91 12.63,5.48 L12.63,5.48 Z"/></svg>',
          joomla:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.8,13.4l1.7-1.7L5.9,8c-0.6-0.5-0.6-1.5,0-2c0.6-0.6,1.4-0.6,2,0l1.7-1.7c-1-1-2.3-1.3-3.6-1C5.8,2.2,4.8,1.4,3.7,1.4 c-1.3,0-2.3,1-2.3,2.3c0,1.1,0.8,2,1.8,2.3c-0.4,1.3-0.1,2.8,1,3.8L7.8,13.4L7.8,13.4z"/><path d="M10.2,4.3c1-1,2.5-1.4,3.8-1c0.2-1.1,1.1-2,2.3-2c1.3,0,2.3,1,2.3,2.3c0,1.2-0.9,2.2-2,2.3c0.4,1.3,0,2.8-1,3.8L13.9,8 c0.6-0.5,0.6-1.5,0-2c-0.5-0.6-1.5-0.6-2,0L8.2,9.7L6.5,8"/><path d="M14.1,16.8c-1.3,0.4-2.8,0.1-3.8-1l1.7-1.7c0.6,0.6,1.5,0.6,2,0c0.5-0.6,0.6-1.5,0-2l-3.7-3.7L12,6.7l3.7,3.7 c1,1,1.3,2.4,1,3.6c1.1,0.2,2,1.1,2,2.3c0,1.3-1,2.3-2.3,2.3C15.2,18.6,14.3,17.8,14.1,16.8"/><path d="M13.2,12.2l-3.7,3.7c-1,1-2.4,1.3-3.6,1c-0.2,1-1.2,1.8-2.2,1.8c-1.3,0-2.3-1-2.3-2.3c0-1.1,0.8-2,1.8-2.3 c-0.3-1.3,0-2.7,1-3.7l1.7,1.7c-0.6,0.6-0.6,1.5,0,2c0.6,0.6,1.4,0.6,2,0l3.7-3.7"/></svg>',
          laptop:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect y="16" width="20" height="1"/><rect fill="none" stroke="#000" x="2.5" y="4.5" width="15" height="10"/></svg>',
          lifesaver:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10,0.5 C4.76,0.5 0.5,4.76 0.5,10 C0.5,15.24 4.76,19.5 10,19.5 C15.24,19.5 19.5,15.24 19.5,10 C19.5,4.76 15.24,0.5 10,0.5 L10,0.5 Z M10,1.5 C11.49,1.5 12.89,1.88 14.11,2.56 L11.85,4.82 C11.27,4.61 10.65,4.5 10,4.5 C9.21,4.5 8.47,4.67 7.79,4.96 L5.58,2.75 C6.87,1.95 8.38,1.5 10,1.5 L10,1.5 Z M4.96,7.8 C4.67,8.48 4.5,9.21 4.5,10 C4.5,10.65 4.61,11.27 4.83,11.85 L2.56,14.11 C1.88,12.89 1.5,11.49 1.5,10 C1.5,8.38 1.95,6.87 2.75,5.58 L4.96,7.79 L4.96,7.8 L4.96,7.8 Z M10,18.5 C8.25,18.5 6.62,17.97 5.27,17.06 L7.46,14.87 C8.22,15.27 9.08,15.5 10,15.5 C10.79,15.5 11.53,15.33 12.21,15.04 L14.42,17.25 C13.13,18.05 11.62,18.5 10,18.5 L10,18.5 Z M10,14.5 C7.52,14.5 5.5,12.48 5.5,10 C5.5,7.52 7.52,5.5 10,5.5 C12.48,5.5 14.5,7.52 14.5,10 C14.5,12.48 12.48,14.5 10,14.5 L10,14.5 Z M15.04,12.21 C15.33,11.53 15.5,10.79 15.5,10 C15.5,9.08 15.27,8.22 14.87,7.46 L17.06,5.27 C17.97,6.62 18.5,8.25 18.5,10 C18.5,11.62 18.05,13.13 17.25,14.42 L15.04,12.21 L15.04,12.21 Z"/></svg>',
          link: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M10.625,12.375 L7.525,15.475 C6.825,16.175 5.925,16.175 5.225,15.475 L4.525,14.775 C3.825,14.074 3.825,13.175 4.525,12.475 L7.625,9.375"/><path fill="none" stroke="#000" stroke-width="1.1" d="M9.325,7.375 L12.425,4.275 C13.125,3.575 14.025,3.575 14.724,4.275 L15.425,4.975 C16.125,5.675 16.125,6.575 15.425,7.275 L12.325,10.375"/><path fill="none" stroke="#000" stroke-width="1.1" d="M7.925,11.875 L11.925,7.975"/></svg>',
          linkedin:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.77,17.89 L5.77,7.17 L2.21,7.17 L2.21,17.89 L5.77,17.89 L5.77,17.89 Z M3.99,5.71 C5.23,5.71 6.01,4.89 6.01,3.86 C5.99,2.8 5.24,2 4.02,2 C2.8,2 2,2.8 2,3.85 C2,4.88 2.77,5.7 3.97,5.7 L3.99,5.7 L3.99,5.71 L3.99,5.71 Z"/><path d="M7.75,17.89 L11.31,17.89 L11.31,11.9 C11.31,11.58 11.33,11.26 11.43,11.03 C11.69,10.39 12.27,9.73 13.26,9.73 C14.55,9.73 15.06,10.71 15.06,12.15 L15.06,17.89 L18.62,17.89 L18.62,11.74 C18.62,8.45 16.86,6.92 14.52,6.92 C12.6,6.92 11.75,7.99 11.28,8.73 L11.3,8.73 L11.3,7.17 L7.75,7.17 C7.79,8.17 7.75,17.89 7.75,17.89 L7.75,17.89 L7.75,17.89 Z"/></svg>',
          list: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="4" width="12" height="1"/><rect x="6" y="9" width="12" height="1"/><rect x="6" y="14" width="12" height="1"/><rect x="2" y="4" width="2" height="1"/><rect x="2" y="9" width="2" height="1"/><rect x="2" y="14" width="2" height="1"/></svg>',
          location:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.01" d="M10,0.5 C6.41,0.5 3.5,3.39 3.5,6.98 C3.5,11.83 10,19 10,19 C10,19 16.5,11.83 16.5,6.98 C16.5,3.39 13.59,0.5 10,0.5 L10,0.5 Z"/><circle fill="none" stroke="#000" cx="10" cy="6.8" r="2.3"/></svg>',
          lock: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" height="10" width="13" y="8.5" x="3.5"/><path fill="none" stroke="#000" d="M6.5,8 L6.5,4.88 C6.5,3.01 8.07,1.5 10,1.5 C11.93,1.5 13.5,3.01 13.5,4.88 L13.5,8"/></svg>',
          mail: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="1.4,6.5 10,11 18.6,6.5"/><path d="M 1,4 1,16 19,16 19,4 1,4 Z M 18,15 2,15 2,5 18,5 18,15 Z"/></svg>',
          menu: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="4" width="16" height="1"/><rect x="2" y="9" width="16" height="1"/><rect x="2" y="14" width="16" height="1"/></svg>',
          microphone:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" x1="10" x2="10" y1="16.44" y2="18.5"/><line fill="none" stroke="#000" x1="7" x2="13" y1="18.5" y2="18.5"/><path fill="none" stroke="#000" stroke-width="1.1" d="M13.5 4.89v5.87a3.5 3.5 0 0 1-7 0V4.89a3.5 3.5 0 0 1 7 0z"/><path fill="none" stroke="#000" stroke-width="1.1" d="M15.5 10.36V11a5.5 5.5 0 0 1-11 0v-.6"/></svg>',
          "minus-circle":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9.5" cy="9.5" r="9"/><line fill="none" stroke="#000" x1="5" y1="9.5" x2="14" y2="9.5"/></svg>',
          minus:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect height="1" width="18" y="9" x="1"/></svg>',
          "more-vertical":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="3" r="2"/><circle cx="10" cy="10" r="2"/><circle cx="10" cy="17" r="2"/></svg>',
          more: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="3" cy="10" r="2"/><circle cx="10" cy="10" r="2"/><circle cx="17" cy="10" r="2"/></svg>',
          move: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="4,5 1,5 1,9 2,9 2,6 4,6"/><polygon points="1,16 2,16 2,18 4,18 4,19 1,19"/><polygon points="14,16 14,19 11,19 11,18 13,18 13,16"/><rect fill="none" stroke="#000" x="5.5" y="1.5" width="13" height="13"/><rect x="1" y="11" width="1" height="3"/><rect x="6" y="18" width="3" height="1"/></svg>',
          nut: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="2.5,5.7 10,1.3 17.5,5.7 17.5,14.3 10,18.7 2.5,14.3"/><circle fill="none" stroke="#000" cx="10" cy="10" r="3.5"/></svg>',
          pagekit:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="3,1 17,1 17,16 10,16 10,13 14,13 14,4 6,4 6,16 10,16 10,19 3,19"/></svg>',
          "paint-bucket":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.21,1 L0,11.21 L8.1,19.31 L18.31,9.1 L10.21,1 L10.21,1 Z M16.89,9.1 L15,11 L1.7,11 L10.21,2.42 L16.89,9.1 Z"/><path fill="none" stroke="#000" stroke-width="1.1" d="M6.42,2.33 L11.7,7.61"/><path d="M18.49,12 C18.49,12 20,14.06 20,15.36 C20,16.28 19.24,17 18.49,17 L18.49,17 C17.74,17 17,16.28 17,15.36 C17,14.06 18.49,12 18.49,12 L18.49,12 Z"/></svg>',
          pencil:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M17.25,6.01 L7.12,16.1 L3.82,17.2 L5.02,13.9 L15.12,3.88 C15.71,3.29 16.66,3.29 17.25,3.88 C17.83,4.47 17.83,5.42 17.25,6.01 L17.25,6.01 Z"/><path fill="none" stroke="#000" d="M15.98,7.268 L13.851,5.148"/></svg>',
          "phone-landscape":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M17,5.5 C17.8,5.5 18.5,6.2 18.5,7 L18.5,14 C18.5,14.8 17.8,15.5 17,15.5 L3,15.5 C2.2,15.5 1.5,14.8 1.5,14 L1.5,7 C1.5,6.2 2.2,5.5 3,5.5 L17,5.5 L17,5.5 L17,5.5 Z"/><circle cx="3.8" cy="10.5" r=".8"/></svg>',
          phone:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M15.5,17 C15.5,17.8 14.8,18.5 14,18.5 L7,18.5 C6.2,18.5 5.5,17.8 5.5,17 L5.5,3 C5.5,2.2 6.2,1.5 7,1.5 L14,1.5 C14.8,1.5 15.5,2.2 15.5,3 L15.5,17 L15.5,17 L15.5,17 Z"/><circle cx="10.5" cy="16.5" r=".8"/></svg>',
          pinterest:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.21,1 C5.5,1 3,4.16 3,7.61 C3,9.21 3.85,11.2 5.22,11.84 C5.43,11.94 5.54,11.89 5.58,11.69 C5.62,11.54 5.8,10.8 5.88,10.45 C5.91,10.34 5.89,10.24 5.8,10.14 C5.36,9.59 5,8.58 5,7.65 C5,5.24 6.82,2.91 9.93,2.91 C12.61,2.91 14.49,4.74 14.49,7.35 C14.49,10.3 13,12.35 11.06,12.35 C9.99,12.35 9.19,11.47 9.44,10.38 C9.75,9.08 10.35,7.68 10.35,6.75 C10.35,5.91 9.9,5.21 8.97,5.21 C7.87,5.21 6.99,6.34 6.99,7.86 C6.99,8.83 7.32,9.48 7.32,9.48 C7.32,9.48 6.24,14.06 6.04,14.91 C5.7,16.35 6.08,18.7 6.12,18.9 C6.14,19.01 6.26,19.05 6.33,18.95 C6.44,18.81 7.74,16.85 8.11,15.44 C8.24,14.93 8.79,12.84 8.79,12.84 C9.15,13.52 10.19,14.09 11.29,14.09 C14.58,14.09 16.96,11.06 16.96,7.3 C16.94,3.7 14,1 10.21,1"/></svg>',
          "play-circle":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" stroke-width="1.1" points="8.5 7 13.5 10 8.5 13"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/></svg>',
          play: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="6.5,5 14.5,10 6.5,15"/></svg>',
          "plus-circle":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9.5" cy="9.5" r="9"/><line fill="none" stroke="#000" x1="9.5" y1="5" x2="9.5" y2="14"/><line fill="none" stroke="#000" x1="5" y1="9.5" x2="14" y2="9.5"/></svg>',
          plus: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="1" width="1" height="17"/><rect x="1" y="9" width="17" height="1"/></svg>',
          print:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="4.5 13.5 1.5 13.5 1.5 6.5 18.5 6.5 18.5 13.5 15.5 13.5"/><polyline fill="none" stroke="#000" points="15.5 6.5 15.5 2.5 4.5 2.5 4.5 6.5"/><rect fill="none" stroke="#000" width="11" height="6" x="4.5" y="11.5"/><rect width="8" height="1" x="6" y="13"/><rect width="8" height="1" x="6" y="15"/></svg>',
          pull: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="6.85,8 9.5,10.6 12.15,8 12.85,8.7 9.5,12 6.15,8.7"/><line fill="none" stroke="#000" x1="9.5" y1="11" x2="9.5" y2="2"/><polyline fill="none" stroke="#000" points="6,5.5 3.5,5.5 3.5,18.5 15.5,18.5 15.5,5.5 13,5.5"/></svg>',
          push: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="12.15,4 9.5,1.4 6.85,4 6.15,3.3 9.5,0 12.85,3.3"/><line fill="none" stroke="#000" x1="9.5" y1="10" x2="9.5" y2="1"/><polyline fill="none" stroke="#000" points="6 5.5 3.5 5.5 3.5 18.5 15.5 18.5 15.5 5.5 13 5.5"/></svg>',
          question:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><circle cx="10.44" cy="14.42" r="1.05"/><path fill="none" stroke="#000" stroke-width="1.2" d="M8.17,7.79 C8.17,4.75 12.72,4.73 12.72,7.72 C12.72,8.67 11.81,9.15 11.23,9.75 C10.75,10.24 10.51,10.73 10.45,11.4 C10.44,11.53 10.43,11.64 10.43,11.75"/></svg>',
          "quote-right":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.27,7.79 C17.27,9.45 16.97,10.43 15.99,12.02 C14.98,13.64 13,15.23 11.56,15.97 L11.1,15.08 C12.34,14.2 13.14,13.51 14.02,11.82 C14.27,11.34 14.41,10.92 14.49,10.54 C14.3,10.58 14.09,10.6 13.88,10.6 C12.06,10.6 10.59,9.12 10.59,7.3 C10.59,5.48 12.06,4 13.88,4 C15.39,4 16.67,5.02 17.05,6.42 C17.19,6.82 17.27,7.27 17.27,7.79 L17.27,7.79 Z"/><path d="M8.68,7.79 C8.68,9.45 8.38,10.43 7.4,12.02 C6.39,13.64 4.41,15.23 2.97,15.97 L2.51,15.08 C3.75,14.2 4.55,13.51 5.43,11.82 C5.68,11.34 5.82,10.92 5.9,10.54 C5.71,10.58 5.5,10.6 5.29,10.6 C3.47,10.6 2,9.12 2,7.3 C2,5.48 3.47,4 5.29,4 C6.8,4 8.08,5.02 8.46,6.42 C8.6,6.82 8.68,7.27 8.68,7.79 L8.68,7.79 Z"/></svg>',
          receiver:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.01" d="M6.189,13.611C8.134,15.525 11.097,18.239 13.867,18.257C16.47,18.275 18.2,16.241 18.2,16.241L14.509,12.551L11.539,13.639L6.189,8.29L7.313,5.355L3.76,1.8C3.76,1.8 1.732,3.537 1.7,6.092C1.667,8.809 4.347,11.738 6.189,13.611"/></svg>',
          reddit:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M19 9.05a2.56 2.56 0 0 0-2.56-2.56 2.59 2.59 0 0 0-1.88.82 10.63 10.63 0 0 0-4.14-1v-.08c.58-1.62 1.58-3.89 2.7-4.1.38-.08.77.12 1.19.57a1.15 1.15 0 0 0-.06.37 1.48 1.48 0 1 0 1.51-1.45 1.43 1.43 0 0 0-.76.19A2.29 2.29 0 0 0 12.91 1c-2.11.43-3.39 4.38-3.63 5.19 0 0 0 .11-.06.11a10.65 10.65 0 0 0-3.75 1A2.56 2.56 0 0 0 1 9.05a2.42 2.42 0 0 0 .72 1.76A5.18 5.18 0 0 0 1.24 13c0 3.66 3.92 6.64 8.73 6.64s8.74-3 8.74-6.64a5.23 5.23 0 0 0-.46-2.13A2.58 2.58 0 0 0 19 9.05zm-16.88 0a1.44 1.44 0 0 1 2.27-1.19 7.68 7.68 0 0 0-2.07 1.91 1.33 1.33 0 0 1-.2-.72zM10 18.4c-4.17 0-7.55-2.4-7.55-5.4S5.83 7.53 10 7.53 17.5 10 17.5 13s-3.38 5.4-7.5 5.4zm7.69-8.61a7.62 7.62 0 0 0-2.09-1.91 1.41 1.41 0 0 1 .84-.28 1.47 1.47 0 0 1 1.44 1.45 1.34 1.34 0 0 1-.21.72z"/><path d="M6.69 12.58a1.39 1.39 0 1 1 1.39-1.39 1.38 1.38 0 0 1-1.38 1.39z"/><path d="M14.26 11.2a1.39 1.39 0 1 1-1.39-1.39 1.39 1.39 0 0 1 1.39 1.39z"/><path d="M13.09 14.88a.54.54 0 0 1-.09.77 5.3 5.3 0 0 1-3.26 1.19 5.61 5.61 0 0 1-3.4-1.22.55.55 0 1 1 .73-.83 4.09 4.09 0 0 0 5.25 0 .56.56 0 0 1 .77.09z"/></svg>',
          refresh:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M17.08,11.15 C17.09,11.31 17.1,11.47 17.1,11.64 C17.1,15.53 13.94,18.69 10.05,18.69 C6.16,18.68 3,15.53 3,11.63 C3,7.74 6.16,4.58 10.05,4.58 C10.9,4.58 11.71,4.73 12.46,5"/><polyline fill="none" stroke="#000" points="9.9 2 12.79 4.89 9.79 7.9"/></svg>',
          reply:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.7,13.11 C16.12,10.02 13.84,7.85 11.02,6.61 C10.57,6.41 9.75,6.13 9,5.91 L9,2 L1,9 L9,16 L9,12.13 C10.78,12.47 12.5,13.19 14.09,14.25 C17.13,16.28 18.56,18.54 18.56,18.54 C18.56,18.54 18.81,15.28 17.7,13.11 L17.7,13.11 Z M14.82,13.53 C13.17,12.4 11.01,11.4 8,10.92 L8,13.63 L2.55,9 L8,4.25 L8,6.8 C8.3,6.86 9.16,7.02 10.37,7.49 C13.3,8.65 15.54,10.96 16.65,13.08 C16.97,13.7 17.48,14.86 17.68,16 C16.87,15.05 15.73,14.15 14.82,13.53 L14.82,13.53 Z"/></svg>',
          rss: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="3.12" cy="16.8" r="1.85"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,8.2 C1.78,8.18 2.06,8.16 2.35,8.16 C7.57,8.16 11.81,12.37 11.81,17.57 C11.81,17.89 11.79,18.19 11.76,18.5"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,2.52 C1.78,2.51 2.06,2.5 2.35,2.5 C10.72,2.5 17.5,9.24 17.5,17.57 C17.5,17.89 17.49,18.19 17.47,18.5"/></svg>',
          search:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',
          server:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="1" height="2"/><rect x="5" y="3" width="1" height="2"/><rect x="7" y="3" width="1" height="2"/><rect x="16" y="3" width="1" height="1"/><rect x="16" y="10" width="1" height="1"/><circle fill="none" stroke="#000" cx="9.9" cy="17.4" r="1.4"/><rect x="3" y="10" width="1" height="2"/><rect x="5" y="10" width="1" height="2"/><rect x="9.5" y="14" width="1" height="2"/><rect x="3" y="17" width="6" height="1"/><rect x="11" y="17" width="6" height="1"/><rect fill="none" stroke="#000" x="1.5" y="1.5" width="17" height="5"/><rect fill="none" stroke="#000" x="1.5" y="8.5" width="17" height="5"/></svg>',
          settings:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><ellipse fill="none" stroke="#000" cx="6.11" cy="3.55" rx="2.11" ry="2.15"/><ellipse fill="none" stroke="#000" cx="6.11" cy="15.55" rx="2.11" ry="2.15"/><circle fill="none" stroke="#000" cx="13.15" cy="9.55" r="2.15"/><rect x="1" y="3" width="3" height="1"/><rect x="10" y="3" width="8" height="1"/><rect x="1" y="9" width="8" height="1"/><rect x="15" y="9" width="3" height="1"/><rect x="1" y="15" width="3" height="1"/><rect x="10" y="15" width="8" height="1"/></svg>',
          shrink:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="11 4 12 4 12 8 16 8 16 9 11 9"/><polygon points="4 11 9 11 9 16 8 16 8 12 4 12"/><path fill="none" stroke="#000" stroke-width="1.1" d="M12,8 L18,2"/><path fill="none" stroke="#000" stroke-width="1.1" d="M2,18 L8,12"/></svg>',
          "sign-in":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="7 2 17 2 17 17 7 17 7 16 16 16 16 3 7 3"/><polygon points="9.1 13.4 8.5 12.8 11.28 10 4 10 4 9 11.28 9 8.5 6.2 9.1 5.62 13 9.5"/></svg>',
          "sign-out":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="13.1 13.4 12.5 12.8 15.28 10 8 10 8 9 15.28 9 12.5 6.2 13.1 5.62 17 9.5"/><polygon points="13 2 3 2 3 17 13 17 13 16 4 16 4 3 13 3"/></svg>',
          social:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="13.4" y1="14" x2="6.3" y2="10.7"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13.5" y1="5.5" x2="6.5" y2="8.8"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="15.5" cy="4.6" r="2.3"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="15.5" cy="14.8" r="2.3"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="4.5" cy="9.8" r="2.3"/></svg>',
          soundcloud:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.2,9.4c-0.4,0-0.8,0.1-1.101,0.2c-0.199-2.5-2.399-4.5-5-4.5c-0.6,0-1.2,0.1-1.7,0.3C9.2,5.5,9.1,5.6,9.1,5.6V15h8 c1.601,0,2.801-1.2,2.801-2.8C20,10.7,18.7,9.4,17.2,9.4L17.2,9.4z"/><rect x="6" y="6.5" width="1.5" height="8.5"/><rect x="3" y="8" width="1.5" height="7"/><rect y="10" width="1.5" height="5"/></svg>',
          star: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" stroke-width="1.01" points="10 2 12.63 7.27 18.5 8.12 14.25 12.22 15.25 18 10 15.27 4.75 18 5.75 12.22 1.5 8.12 7.37 7.27"/></svg>',
          strikethrough:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6,13.02 L6.65,13.02 C7.64,15.16 8.86,16.12 10.41,16.12 C12.22,16.12 12.92,14.93 12.92,13.89 C12.92,12.55 11.99,12.03 9.74,11.23 C8.05,10.64 6.23,10.11 6.23,7.83 C6.23,5.5 8.09,4.09 10.4,4.09 C11.44,4.09 12.13,4.31 12.72,4.54 L13.33,4 L13.81,4 L13.81,7.59 L13.16,7.59 C12.55,5.88 11.52,4.89 10.07,4.89 C8.84,4.89 7.89,5.69 7.89,7.03 C7.89,8.29 8.89,8.78 10.88,9.45 C12.57,10.03 14.38,10.6 14.38,12.91 C14.38,14.75 13.27,16.93 10.18,16.93 C9.18,16.93 8.17,16.69 7.46,16.39 L6.52,17 L6,17 L6,13.02 L6,13.02 Z"/><rect x="3" y="10" width="15" height="1"/></svg>',
          table:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="3" width="18" height="1"/><rect x="1" y="7" width="18" height="1"/><rect x="1" y="11" width="18" height="1"/><rect x="1" y="15" width="18" height="1"/></svg>',
          "tablet-landscape":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M1.5,5 C1.5,4.2 2.2,3.5 3,3.5 L17,3.5 C17.8,3.5 18.5,4.2 18.5,5 L18.5,16 C18.5,16.8 17.8,17.5 17,17.5 L3,17.5 C2.2,17.5 1.5,16.8 1.5,16 L1.5,5 L1.5,5 L1.5,5 Z"/><circle cx="3.7" cy="10.5" r=".8"/></svg>',
          tablet:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M5,18.5 C4.2,18.5 3.5,17.8 3.5,17 L3.5,3 C3.5,2.2 4.2,1.5 5,1.5 L16,1.5 C16.8,1.5 17.5,2.2 17.5,3 L17.5,17 C17.5,17.8 16.8,18.5 16,18.5 L5,18.5 L5,18.5 L5,18.5 Z"/><circle cx="10.5" cy="16.3" r=".8"/></svg>',
          tag: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M17.5,3.71 L17.5,7.72 C17.5,7.96 17.4,8.2 17.21,8.39 L8.39,17.2 C7.99,17.6 7.33,17.6 6.93,17.2 L2.8,13.07 C2.4,12.67 2.4,12.01 2.8,11.61 L11.61,2.8 C11.81,2.6 12.08,2.5 12.34,2.5 L16.19,2.5 C16.52,2.5 16.86,2.63 17.11,2.88 C17.35,3.11 17.48,3.4 17.5,3.71 L17.5,3.71 Z"/><circle cx="14" cy="6" r="1"/></svg>',
          thumbnails:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" x="3.5" y="3.5" width="5" height="5"/><rect fill="none" stroke="#000" x="11.5" y="3.5" width="5" height="5"/><rect fill="none" stroke="#000" x="11.5" y="11.5" width="5" height="5"/><rect fill="none" stroke="#000" x="3.5" y="11.5" width="5" height="5"/></svg>',
          tiktok:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.24,6V8.82a6.79,6.79,0,0,1-4-1.28v5.81A5.26,5.26,0,1,1,8,8.1a4.36,4.36,0,0,1,.72.05v2.9A2.57,2.57,0,0,0,7.64,11a2.4,2.4,0,1,0,2.77,2.38V2h2.86a4,4,0,0,0,1.84,3.38A4,4,0,0,0,17.24,6Z"/></svg>',
          trash:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="6.5 3 6.5 1.5 13.5 1.5 13.5 3"/><polyline fill="none" stroke="#000" points="4.5 4 4.5 18.5 15.5 18.5 15.5 4"/><rect x="8" y="7" width="1" height="9"/><rect x="11" y="7" width="1" height="9"/><rect x="2" y="3" width="16" height="1"/></svg>',
          "triangle-down":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="5 7 15 7 10 12"/></svg>',
          "triangle-left":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="12 5 7 10 12 15"/></svg>',
          "triangle-right":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="8 5 13 10 8 15"/></svg>',
          "triangle-up":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="5 13 10 8 15 13"/></svg>',
          tripadvisor:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M19.021,7.866C19.256,6.862,20,5.854,20,5.854h-3.346C14.781,4.641,12.504,4,9.98,4C7.363,4,4.999,4.651,3.135,5.876H0\tc0,0,0.738,0.987,0.976,1.988c-0.611,0.837-0.973,1.852-0.973,2.964c0,2.763,2.249,5.009,5.011,5.009\tc1.576,0,2.976-0.737,3.901-1.879l1.063,1.599l1.075-1.615c0.475,0.611,1.1,1.111,1.838,1.451c1.213,0.547,2.574,0.612,3.825,0.15\tc2.589-0.963,3.913-3.852,2.964-6.439c-0.175-0.463-0.4-0.876-0.675-1.238H19.021z M16.38,14.594\tc-1.002,0.371-2.088,0.328-3.06-0.119c-0.688-0.317-1.252-0.817-1.657-1.438c-0.164-0.25-0.313-0.52-0.417-0.811\tc-0.124-0.328-0.186-0.668-0.217-1.014c-0.063-0.689,0.037-1.396,0.339-2.043c0.448-0.971,1.251-1.71,2.25-2.079\tc2.075-0.765,4.375,0.3,5.14,2.366c0.762,2.066-0.301,4.37-2.363,5.134L16.38,14.594L16.38,14.594z M8.322,13.066\tc-0.72,1.059-1.935,1.76-3.309,1.76c-2.207,0-4.001-1.797-4.001-3.996c0-2.203,1.795-4.002,4.001-4.002\tc2.204,0,3.999,1.8,3.999,4.002c0,0.137-0.024,0.261-0.04,0.396c-0.067,0.678-0.284,1.313-0.648,1.853v-0.013H8.322z M2.472,10.775\tc0,1.367,1.112,2.479,2.476,2.479c1.363,0,2.472-1.11,2.472-2.479c0-1.359-1.11-2.468-2.472-2.468\tC3.584,8.306,2.473,9.416,2.472,10.775L2.472,10.775z M12.514,10.775c0,1.367,1.104,2.479,2.471,2.479\tc1.363,0,2.474-1.108,2.474-2.479c0-1.359-1.11-2.468-2.474-2.468c-1.364,0-2.477,1.109-2.477,2.468H12.514z M3.324,10.775\tc0-0.893,0.726-1.618,1.614-1.618c0.889,0,1.625,0.727,1.625,1.618c0,0.898-0.725,1.627-1.625,1.627\tc-0.901,0-1.625-0.729-1.625-1.627H3.324z M13.354,10.775c0-0.893,0.726-1.618,1.627-1.618c0.886,0,1.61,0.727,1.61,1.618\tc0,0.898-0.726,1.627-1.626,1.627s-1.625-0.729-1.625-1.627H13.354z M9.977,4.875c1.798,0,3.425,0.324,4.849,0.968\tc-0.535,0.015-1.061,0.108-1.586,0.3c-1.264,0.463-2.264,1.388-2.815,2.604c-0.262,0.551-0.398,1.133-0.448,1.72\tC9.79,7.905,7.677,5.873,5.076,5.82C6.501,5.208,8.153,4.875,9.94,4.875H9.977z"/></svg>',
          tumblr:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.885,8.598c0,0,0,3.393,0,4.996c0,0.282,0,0.66,0.094,0.942c0.377,1.509,1.131,2.545,2.545,3.11 c1.319,0.472,2.356,0.472,3.676,0c0.565-0.188,1.132-0.659,1.132-0.659l-0.849-2.263c0,0-1.036,0.378-1.603,0.283 c-0.565-0.094-1.226-0.66-1.226-1.508c0-1.603,0-4.902,0-4.902h2.828V5.771h-2.828V2H8.205c0,0-0.094,0.66-0.188,0.942 C7.828,3.791,7.262,4.733,6.603,5.394C5.848,6.147,5,6.43,5,6.43v2.168H6.885z"/></svg>',
          tv: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="7" y="16" width="6" height="1"/><rect fill="none" stroke="#000" x=".5" y="3.5" width="19" height="11"/></svg>',
          twitch:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.23,1,2,4.23V15.85H5.88v3.23L9.1,15.85h2.59L17.5,10V1Zm11,8.4L13.62,12H11L8.78,14.24V12H5.88V2.29H16.21Z"/><rect x="12.98" y="4.55" width="1.29" height="3.88"/><rect x="9.43" y="4.55" width="1.29" height="3.88"/></svg>',
          twitter:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M19,4.74 C18.339,5.029 17.626,5.229 16.881,5.32 C17.644,4.86 18.227,4.139 18.503,3.28 C17.79,3.7 17.001,4.009 16.159,4.17 C15.485,3.45 14.526,3 13.464,3 C11.423,3 9.771,4.66 9.771,6.7 C9.771,6.99 9.804,7.269 9.868,7.539 C6.795,7.38 4.076,5.919 2.254,3.679 C1.936,4.219 1.754,4.86 1.754,5.539 C1.754,6.82 2.405,7.95 3.397,8.61 C2.79,8.589 2.22,8.429 1.723,8.149 L1.723,8.189 C1.723,9.978 2.997,11.478 4.686,11.82 C4.376,11.899 4.049,11.939 3.713,11.939 C3.475,11.939 3.245,11.919 3.018,11.88 C3.49,13.349 4.852,14.419 6.469,14.449 C5.205,15.429 3.612,16.019 1.882,16.019 C1.583,16.019 1.29,16.009 1,15.969 C2.635,17.019 4.576,17.629 6.662,17.629 C13.454,17.629 17.17,12 17.17,7.129 C17.17,6.969 17.166,6.809 17.157,6.649 C17.879,6.129 18.504,5.478 19,4.74"/></svg>',
          uikit:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="14.4,3.1 11.3,5.1 15,7.3 15,12.9 10,15.7 5,12.9 5,8.5 2,6.8 2,14.8 9.9,19.5 18,14.8 18,5.3"/><polygon points="9.8,4.2 6.7,2.4 9.8,0.4 12.9,2.3"/></svg>',
          unlock:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" x="3.5" y="8.5" width="13" height="10"/><path fill="none" stroke="#000" d="M6.5,8.5 L6.5,4.9 C6.5,3 8.1,1.5 10,1.5 C11.9,1.5 13.5,3 13.5,4.9"/></svg>',
          upload:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="5 8 9.5 3.5 14 8"/><rect x="3" y="17" width="13" height="1"/><line fill="none" stroke="#000" x1="9.5" y1="15" x2="9.5" y2="4"/></svg>',
          user: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9.9" cy="6.4" r="4.4"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,19 C2.3,14.5 5.8,11.2 10,11.2 C14.2,11.2 17.7,14.6 18.5,19.2"/></svg>',
          users:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="7.7" cy="8.6" r="3.5"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1,18.1 C1.7,14.6 4.4,12.1 7.6,12.1 C10.9,12.1 13.7,14.8 14.3,18.3"/><path fill="none" stroke="#000" stroke-width="1.1" d="M11.4,4 C12.8,2.4 15.4,2.8 16.3,4.7 C17.2,6.6 15.7,8.9 13.6,8.9 C16.5,8.9 18.8,11.3 19.2,14.1"/></svg>',
          "video-camera":
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="17.5 6.9 17.5 13.1 13.5 10.4 13.5 14.5 2.5 14.5 2.5 5.5 13.5 5.5 13.5 9.6 17.5 6.9"/></svg>',
          vimeo:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.065,7.59C1.84,7.367,1.654,7.082,1.468,6.838c-0.332-0.42-0.137-0.411,0.274-0.772c1.026-0.91,2.004-1.896,3.127-2.688 c1.017-0.713,2.365-1.173,3.286-0.039c0.849,1.045,0.869,2.629,1.084,3.891c0.215,1.309,0.421,2.648,0.88,3.901 c0.127,0.352,0.37,1.018,0.81,1.074c0.567,0.078,1.145-0.917,1.408-1.289c0.684-0.987,1.611-2.317,1.494-3.587 c-0.115-1.349-1.572-1.095-2.482-0.773c0.146-1.514,1.555-3.216,2.912-3.792c1.439-0.597,3.579-0.587,4.302,1.036 c0.772,1.759,0.078,3.802-0.763,5.396c-0.918,1.731-2.1,3.333-3.363,4.829c-1.114,1.329-2.432,2.787-4.093,3.422 c-1.897,0.723-3.021-0.686-3.667-2.318c-0.705-1.777-1.056-3.771-1.565-5.621C4.898,8.726,4.644,7.836,4.136,7.191 C3.473,6.358,2.72,7.141,2.065,7.59C1.977,7.502,2.115,7.551,2.065,7.59L2.065,7.59z"/></svg>',
          warning:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="14" r="1"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><path d="M10.97,7.72 C10.85,9.54 10.56,11.29 10.56,11.29 C10.51,11.87 10.27,12 9.99,12 C9.69,12 9.49,11.87 9.43,11.29 C9.43,11.29 9.16,9.54 9.03,7.72 C8.96,6.54 9.03,6 9.03,6 C9.03,5.45 9.46,5.02 9.99,5 C10.53,5.01 10.97,5.44 10.97,6 C10.97,6 11.04,6.54 10.97,7.72 L10.97,7.72 Z"/></svg>',
          whatsapp:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.7,3.3c-1.8-1.8-4.1-2.8-6.7-2.8c-5.2,0-9.4,4.2-9.4,9.4c0,1.7,0.4,3.3,1.3,4.7l-1.3,4.9l5-1.3c1.4,0.8,2.9,1.2,4.5,1.2 l0,0l0,0c5.2,0,9.4-4.2,9.4-9.4C19.5,7.4,18.5,5,16.7,3.3 M10.1,17.7L10.1,17.7c-1.4,0-2.8-0.4-4-1.1l-0.3-0.2l-3,0.8l0.8-2.9 l-0.2-0.3c-0.8-1.2-1.2-2.7-1.2-4.2c0-4.3,3.5-7.8,7.8-7.8c2.1,0,4.1,0.8,5.5,2.3c1.5,1.5,2.3,3.4,2.3,5.5 C17.9,14.2,14.4,17.7,10.1,17.7 M14.4,11.9c-0.2-0.1-1.4-0.7-1.6-0.8c-0.2-0.1-0.4-0.1-0.5,0.1c-0.2,0.2-0.6,0.8-0.8,0.9 c-0.1,0.2-0.3,0.2-0.5,0.1c-0.2-0.1-1-0.4-1.9-1.2c-0.7-0.6-1.2-1.4-1.3-1.6c-0.1-0.2,0-0.4,0.1-0.5C8,8.8,8.1,8.7,8.2,8.5 c0.1-0.1,0.2-0.2,0.2-0.4c0.1-0.2,0-0.3,0-0.4C8.4,7.6,7.9,6.5,7.7,6C7.5,5.5,7.3,5.6,7.2,5.6c-0.1,0-0.3,0-0.4,0 c-0.2,0-0.4,0.1-0.6,0.3c-0.2,0.2-0.8,0.8-0.8,2c0,1.2,0.8,2.3,1,2.4c0.1,0.2,1.7,2.5,4,3.5c0.6,0.2,1,0.4,1.3,0.5 c0.6,0.2,1.1,0.2,1.5,0.1c0.5-0.1,1.4-0.6,1.6-1.1c0.2-0.5,0.2-1,0.1-1.1C14.8,12.1,14.6,12,14.4,11.9"/></svg>',
          wordpress:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10,0.5c-5.2,0-9.5,4.3-9.5,9.5s4.3,9.5,9.5,9.5c5.2,0,9.5-4.3,9.5-9.5S15.2,0.5,10,0.5L10,0.5L10,0.5z M15.6,3.9h-0.1 c-0.8,0-1.4,0.7-1.4,1.5c0,0.7,0.4,1.3,0.8,1.9c0.3,0.6,0.7,1.3,0.7,2.3c0,0.7-0.3,1.5-0.6,2.7L14.1,15l-3-8.9 c0.5,0,0.9-0.1,0.9-0.1C12.5,6,12.5,5.3,12,5.4c0,0-1.3,0.1-2.2,0.1C9,5.5,7.7,5.4,7.7,5.4C7.2,5.3,7.2,6,7.6,6c0,0,0.4,0.1,0.9,0.1 l1.3,3.5L8,15L5,6.1C5.5,6.1,5.9,6,5.9,6C6.4,6,6.3,5.3,5.9,5.4c0,0-1.3,0.1-2.2,0.1c-0.2,0-0.3,0-0.5,0c1.5-2.2,4-3.7,6.9-3.7 C12.2,1.7,14.1,2.6,15.6,3.9L15.6,3.9L15.6,3.9z M2.5,6.6l3.9,10.8c-2.7-1.3-4.6-4.2-4.6-7.4C1.8,8.8,2,7.6,2.5,6.6L2.5,6.6L2.5,6.6 z M10.2,10.7l2.5,6.9c0,0,0,0.1,0.1,0.1C11.9,18,11,18.2,10,18.2c-0.8,0-1.6-0.1-2.3-0.3L10.2,10.7L10.2,10.7L10.2,10.7z M14.2,17.1 l2.5-7.3c0.5-1.2,0.6-2.1,0.6-2.9c0-0.3,0-0.6-0.1-0.8c0.6,1.2,1,2.5,1,4C18.3,13,16.6,15.7,14.2,17.1L14.2,17.1L14.2,17.1z"/></svg>',
          world:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M1,10.5 L19,10.5"/><path fill="none" stroke="#000" d="M2.35,15.5 L17.65,15.5"/><path fill="none" stroke="#000" d="M2.35,5.5 L17.523,5.5"/><path fill="none" stroke="#000" d="M10,19.46 L9.98,19.46 C7.31,17.33 5.61,14.141 5.61,10.58 C5.61,7.02 7.33,3.83 10,1.7 C10.01,1.7 9.99,1.7 10,1.7 L10,1.7 C12.67,3.83 14.4,7.02 14.4,10.58 C14.4,14.141 12.67,17.33 10,19.46 L10,19.46 L10,19.46 L10,19.46 Z"/><circle fill="none" stroke="#000" cx="10" cy="10.5" r="9"/></svg>',
          xing: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.4,4.56 C4.24,4.56 4.11,4.61 4.05,4.72 C3.98,4.83 3.99,4.97 4.07,5.12 L5.82,8.16 L5.82,8.17 L3.06,13.04 C2.99,13.18 2.99,13.33 3.06,13.44 C3.12,13.55 3.24,13.62 3.4,13.62 L6,13.62 C6.39,13.62 6.57,13.36 6.71,13.12 C6.71,13.12 9.41,8.35 9.51,8.16 C9.49,8.14 7.72,5.04 7.72,5.04 C7.58,4.81 7.39,4.56 6.99,4.56 L4.4,4.56 L4.4,4.56 Z"/><path d="M15.3,1 C14.91,1 14.74,1.25 14.6,1.5 C14.6,1.5 9.01,11.42 8.82,11.74 C8.83,11.76 12.51,18.51 12.51,18.51 C12.64,18.74 12.84,19 13.23,19 L15.82,19 C15.98,19 16.1,18.94 16.16,18.83 C16.23,18.72 16.23,18.57 16.16,18.43 L12.5,11.74 L12.5,11.72 L18.25,1.56 C18.32,1.42 18.32,1.27 18.25,1.16 C18.21,1.06 18.08,1 17.93,1 L15.3,1 L15.3,1 Z"/></svg>',
          yelp: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.175,14.971c-0.112,0.77-1.686,2.767-2.406,3.054c-0.246,0.1-0.487,0.076-0.675-0.069\tc-0.122-0.096-2.446-3.859-2.446-3.859c-0.194-0.293-0.157-0.682,0.083-0.978c0.234-0.284,0.581-0.393,0.881-0.276\tc0.016,0.01,4.21,1.394,4.332,1.482c0.178,0.148,0.263,0.379,0.225,0.646L17.175,14.971L17.175,14.971z M11.464,10.789\tc-0.203-0.307-0.199-0.666,0.009-0.916c0,0,2.625-3.574,2.745-3.657c0.203-0.135,0.452-0.141,0.69-0.025\tc0.691,0.335,2.085,2.405,2.167,3.199v0.027c0.024,0.271-0.082,0.491-0.273,0.623c-0.132,0.083-4.43,1.155-4.43,1.155\tc-0.322,0.096-0.68-0.06-0.882-0.381L11.464,10.789z M9.475,9.563C9.32,9.609,8.848,9.757,8.269,8.817c0,0-3.916-6.16-4.007-6.351\tc-0.057-0.212,0.011-0.455,0.202-0.65C5.047,1.211,8.21,0.327,9.037,0.529c0.27,0.069,0.457,0.238,0.522,0.479\tc0.047,0.266,0.433,5.982,0.488,7.264C10.098,9.368,9.629,9.517,9.475,9.563z M9.927,19.066c-0.083,0.225-0.273,0.373-0.54,0.421\tc-0.762,0.13-3.15-0.751-3.647-1.342c-0.096-0.131-0.155-0.262-0.167-0.394c-0.011-0.095,0-0.189,0.036-0.272\tc0.061-0.155,2.917-3.538,2.917-3.538c0.214-0.272,0.595-0.355,0.952-0.213c0.345,0.13,0.56,0.428,0.536,0.749\tC10.014,14.479,9.977,18.923,9.927,19.066z M3.495,13.912c-0.235-0.009-0.444-0.148-0.568-0.382c-0.089-0.17-0.151-0.453-0.19-0.794\tC2.63,11.701,2.761,10.144,3.07,9.648c0.145-0.226,0.357-0.345,0.592-0.336c0.154,0,4.255,1.667,4.255,1.667\tc0.321,0.118,0.521,0.453,0.5,0.833c-0.023,0.37-0.236,0.655-0.551,0.738L3.495,13.912z"/></svg>',
          youtube:
            '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15,4.1c1,0.1,2.3,0,3,0.8c0.8,0.8,0.9,2.1,0.9,3.1C19,9.2,19,10.9,19,12c-0.1,1.1,0,2.4-0.5,3.4c-0.5,1.1-1.4,1.5-2.5,1.6 c-1.2,0.1-8.6,0.1-11,0c-1.1-0.1-2.4-0.1-3.2-1c-0.7-0.8-0.7-2-0.8-3C1,11.8,1,10.1,1,8.9c0-1.1,0-2.4,0.5-3.4C2,4.5,3,4.3,4.1,4.2 C5.3,4.1,12.6,4,15,4.1z M8,7.5v6l5.5-3L8,7.5z"/></svg>',
        });
    }
    return (
      "undefined" != typeof window && window.UIkit && window.UIkit.use(t), t
    );
  }),
  (function () {
    "use strict";
    var t = {
      compile: function (t) {
        return e.template.replace(e.pattern, function (i, n) {
          const r = e.middleware(n, t[n], e.template);
          return void 0 !== r ? r : t[n] || i;
        });
      },
      setOptions: function (t) {
        (e.pattern = t.pattern || e.pattern),
          (e.template = t.template || e.template),
          "function" == typeof t.middleware && (e.middleware = t.middleware);
      },
    };
    const e = {};
    (e.pattern = /\{(.*?)\}/g),
      (e.template = ""),
      (e.middleware = function () {});
    var i = function (t, e) {
        var i = e.length,
          n = t.length;
        if (n > i) return !1;
        if (n === i) return t === e;
        t: for (var r = 0, o = 0; r < n; r++) {
          for (var s = t.charCodeAt(r); o < i; )
            if (e.charCodeAt(o++) === s) continue t;
          return !1;
        }
        return !0;
      },
      n = new (function () {
        this.matches = function (t, e) {
          return i(e.toLowerCase(), t.toLowerCase());
        };
      })();
    var r = new (function () {
      this.matches = function (t, e) {
        return (
          !!t &&
          ((t = t.trim().toLowerCase()),
          (e = e.trim().toLowerCase()).split(" ").filter(function (e) {
            return t.indexOf(e) >= 0;
          }).length === e.split(" ").length)
        );
      };
    })();
    var o = {
      put: function (t) {
        if (l(t)) return u(t);
        if (
          ((e = t),
          Boolean(e) && "[object Array]" === Object.prototype.toString.call(e))
        )
          return (function (t) {
            const e = [];
            c();
            for (let i = 0, n = t.length; i < n; i++)
              l(t[i]) && e.push(u(t[i]));
            return e;
          })(t);
        var e;
        return;
      },
      clear: c,
      search: function (t) {
        if (!t) return [];
        return (function (t, e, i, n) {
          const r = [];
          for (let o = 0; o < t.length && r.length < n.limit; o++) {
            const s = d(t[o], e, i, n);
            s && r.push(s);
          }
          return r;
        })(a, t, h.searchStrategy, h).sort(h.sort);
      },
      setOptions: function (t) {
        (h = t || {}),
          (h.fuzzy = t.fuzzy || !1),
          (h.limit = t.limit || 10),
          (h.searchStrategy = t.fuzzy ? n : r),
          (h.sort = t.sort || s),
          (h.exclude = t.exclude || []);
      },
    };
    function s() {
      return 0;
    }
    const a = [];
    let h = {};
    function c() {
      return (a.length = 0), a;
    }
    function l(t) {
      return (
        Boolean(t) && "[object Object]" === Object.prototype.toString.call(t)
      );
    }
    function u(t) {
      return a.push(t), a;
    }
    function d(t, e, i, n) {
      for (const r in t)
        if (!f(t[r], n.exclude) && i.matches(t[r], e)) return t;
    }
    function f(t, e) {
      for (let i = 0, n = e.length; i < n; i++) {
        const n = e[i];
        if (new RegExp(n).test(t)) return !0;
      }
      return !1;
    }
    (h.fuzzy = !1),
      (h.limit = 10),
      (h.searchStrategy = h.fuzzy ? n : r),
      (h.sort = s),
      (h.exclude = []);
    var g = {
      load: function (t, e) {
        const i = window.XMLHttpRequest
          ? new window.XMLHttpRequest()
          : new ActiveXObject("Microsoft.XMLHTTP");
        i.open("GET", t, !0),
          (i.onreadystatechange = (function (t, e) {
            return function () {
              if (4 === t.readyState && 200 === t.status)
                try {
                  e(null, JSON.parse(t.responseText));
                } catch (t) {
                  e(t, null);
                }
            };
          })(i, e)),
          i.send();
      },
    };
    var p = function t(e) {
        if (
          !(function (t) {
            if (!t) return !1;
            return void 0 !== t.required && t.required instanceof Array;
          })(e)
        )
          throw new Error("-- OptionsValidator: required options missing");
        if (!(this instanceof t)) return new t(e);
        const i = e.required;
        (this.getRequiredOptions = function () {
          return i;
        }),
          (this.validate = function (t) {
            const e = [];
            return (
              i.forEach(function (i) {
                void 0 === t[i] && e.push(i);
              }),
              e
            );
          });
      },
      v = {
        merge: function (t, e) {
          const i = {};
          for (const n in t) (i[n] = t[n]), void 0 !== e[n] && (i[n] = e[n]);
          return i;
        },
        isJSON: function (t) {
          try {
            return !!(t instanceof Object && JSON.parse(JSON.stringify(t)));
          } catch (t) {
            return !1;
          }
        },
      };
    !(function (e) {
      let i,
        n = {
          searchInput: null,
          resultsContainer: null,
          json: [],
          success: Function.prototype,
          searchResultTemplate:
            '<li><a href="{url}" title="{desc}">{title}</a></li>',
          templateMiddleware: Function.prototype,
          sortMiddleware: function () {
            return 0;
          },
          noResultsText: "No results found",
          limit: 10,
          fuzzy: !1,
          debounceTime: null,
          exclude: [],
        };
      const r = function (t, e) {
          e ? (clearTimeout(i), (i = setTimeout(t, e))) : t.call();
        },
        s = ["searchInput", "resultsContainer", "json"],
        a = p({ required: s });
      function h(t) {
        o.put(t),
          n.searchInput.addEventListener("input", function (t) {
            var e;
            (e = t.which),
              -1 === [13, 16, 20, 37, 38, 39, 40, 91].indexOf(e) &&
                (c(),
                r(function () {
                  u(t.target.value);
                }, n.debounceTime));
          });
      }
      function c() {
        n.resultsContainer.innerHTML = "";
      }
      function l(t) {
        n.resultsContainer.innerHTML += t;
      }
      function u(e) {
        (function (t) {
          return t && t.length > 0;
        })(e) &&
          (c(),
          (function (e, i) {
            const r = e.length;
            if (0 === r) return l(n.noResultsText);
            for (let n = 0; n < r; n++) (e[n].query = i), l(t.compile(e[n]));
          })(o.search(e), e));
      }
      function d(t) {
        throw new Error("SimpleJekyllSearch --- " + t);
      }
      e.SimpleJekyllSearch = function (e) {
        var i;
        a.validate(e).length > 0 &&
          d("You must specify the following required options: " + s),
          (n = v.merge(n, e)),
          t.setOptions({
            template: n.searchResultTemplate,
            middleware: n.templateMiddleware,
          }),
          o.setOptions({
            fuzzy: n.fuzzy,
            limit: n.limit,
            sort: n.sortMiddleware,
            exclude: n.exclude,
          }),
          v.isJSON(n.json)
            ? h(n.json)
            : ((i = n.json),
              g.load(i, function (t, e) {
                t && d("failed to get JSON (" + i + ")"), h(e);
              }));
        const r = { search: u };
        return "function" == typeof n.success && n.success.call(r), r;
      };
    })(window);
  })();
