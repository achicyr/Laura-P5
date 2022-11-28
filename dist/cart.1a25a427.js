/*! For license information please see app.bundle.js.LICENSE.txt */ (()=>{
    var t = {
        4282: ()=>{
            function t(e) {
                return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t;
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }, t(e);
            }
            function e() {
                "use strict";
                e = function() {
                    return n;
                };
                var n = {}, r = Object.prototype, o = r.hasOwnProperty, i = Object.defineProperty || function(t, e, n) {
                    t[e] = n.value;
                }, a = "function" == typeof Symbol ? Symbol : {}, c = a.iterator || "@@iterator", l = a.asyncIterator || "@@asyncIterator", u = a.toStringTag || "@@toStringTag";
                function s(t, e, n) {
                    return Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e];
                }
                try {
                    s({}, "");
                } catch (t1) {
                    s = function(t, e, n) {
                        return t[e] = n;
                    };
                }
                function f(t, e, n, r) {
                    var o = e && e.prototype instanceof h ? e : h, a = Object.create(o.prototype), c = new N(r || []);
                    return i(a, "_invoke", {
                        value: E(t, n, c)
                    }), a;
                }
                function d(t, e, n) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, n)
                        };
                    } catch (t1) {
                        return {
                            type: "throw",
                            arg: t1
                        };
                    }
                }
                n.wrap = f;
                var p = {};
                function h() {}
                function v() {}
                function m() {}
                var y = {};
                s(y, c, function() {
                    return this;
                });
                var g = Object.getPrototypeOf, w = g && g(g(T([])));
                w && w !== r && o.call(w, c) && (y = w);
                var b = m.prototype = h.prototype = Object.create(y);
                function _(t) {
                    [
                        "next",
                        "throw",
                        "return"
                    ].forEach(function(e) {
                        s(t, e, function(t) {
                            return this._invoke(e, t);
                        });
                    });
                }
                function S(e, n) {
                    function r(i, a, c, l) {
                        var u = d(e[i], e, a);
                        if ("throw" !== u.type) {
                            var s = u.arg, f = s.value;
                            return f && "object" == t(f) && o.call(f, "__await") ? n.resolve(f.__await).then(function(t) {
                                r("next", t, c, l);
                            }, function(t) {
                                r("throw", t, c, l);
                            }) : n.resolve(f).then(function(t) {
                                s.value = t, c(s);
                            }, function(t) {
                                return r("throw", t, c, l);
                            });
                        }
                        l(u.arg);
                    }
                    var a;
                    i(this, "_invoke", {
                        value: function(t, e) {
                            function o() {
                                return new n(function(n, o) {
                                    r(t, e, n, o);
                                });
                            }
                            return a = a ? a.then(o, o) : o();
                        }
                    });
                }
                function E(t, e, n) {
                    var r = "suspendedStart";
                    return function(o, i) {
                        if ("executing" === r) throw new Error("Generator is already running");
                        if ("completed" === r) {
                            if ("throw" === o) throw i;
                            return {
                                value: void 0,
                                done: !0
                            };
                        }
                        for(n.method = o, n.arg = i;;){
                            var a = n.delegate;
                            if (a) {
                                var c = L(a, n);
                                if (c) {
                                    if (c === p) continue;
                                    return c;
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if ("suspendedStart" === r) throw r = "completed", n.arg;
                                n.dispatchException(n.arg);
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            r = "executing";
                            var l = d(t, e, n);
                            if ("normal" === l.type) {
                                if (r = n.done ? "completed" : "suspendedYield", l.arg === p) continue;
                                return {
                                    value: l.arg,
                                    done: n.done
                                };
                            }
                            "throw" === l.type && (r = "completed", n.method = "throw", n.arg = l.arg);
                        }
                    };
                }
                function L(t, e) {
                    var n = t.iterator[e.method];
                    if (void 0 === n) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, L(t, e), "throw" === e.method)) return p;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method");
                        }
                        return p;
                    }
                    var r = d(n, t.iterator, e.arg);
                    if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, p;
                    var o = r.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, p) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, p);
                }
                function x(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
                }
                function O(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e;
                }
                function N(t) {
                    this.tryEntries = [
                        {
                            tryLoc: "root"
                        }
                    ], t.forEach(x, this), this.reset(!0);
                }
                function T(t) {
                    if (t) {
                        var e = t[c];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1, r = function e() {
                                for(; ++n < t.length;)if (o.call(t, n)) return e.value = t[n], e.done = !1, e;
                                return e.value = void 0, e.done = !0, e;
                            };
                            return r.next = r;
                        }
                    }
                    return {
                        next: j
                    };
                }
                function j() {
                    return {
                        value: void 0,
                        done: !0
                    };
                }
                return v.prototype = m, i(b, "constructor", {
                    value: m,
                    configurable: !0
                }), i(m, "constructor", {
                    value: v,
                    configurable: !0
                }), v.displayName = s(m, u, "GeneratorFunction"), n.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === v || "GeneratorFunction" === (e.displayName || e.name));
                }, n.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, m) : (t.__proto__ = m, s(t, u, "GeneratorFunction")), t.prototype = Object.create(b), t;
                }, n.awrap = function(t) {
                    return {
                        __await: t
                    };
                }, _(S.prototype), s(S.prototype, l, function() {
                    return this;
                }), n.AsyncIterator = S, n.async = function(t, e, r, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new S(f(t, e, r, o), i);
                    return n.isGeneratorFunction(e) ? a : a.next().then(function(t) {
                        return t.done ? t.value : a.next();
                    });
                }, _(b), s(b, u, "Generator"), s(b, c, function() {
                    return this;
                }), s(b, "toString", function() {
                    return "[object Generator]";
                }), n.keys = function(t) {
                    var e = Object(t), n = [];
                    for(var r in e)n.push(r);
                    return n.reverse(), function t() {
                        for(; n.length;){
                            var r = n.pop();
                            if (r in e) return t.value = r, t.done = !1, t;
                        }
                        return t.done = !0, t;
                    };
                }, n.values = T, N.prototype = {
                    constructor: N,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(O), !t) for(var e in this)"t" === e.charAt(0) && o.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0);
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval;
                    },
                    dispatchException: function(t) {
                        if (this.done) throw t;
                        var e = this;
                        function n(n, r) {
                            return a.type = "throw", a.arg = t, e.next = n, r && (e.method = "next", e.arg = void 0), !!r;
                        }
                        for(var r = this.tryEntries.length - 1; r >= 0; --r){
                            var i = this.tryEntries[r], a = i.completion;
                            if ("root" === i.tryLoc) return n("end");
                            if (i.tryLoc <= this.prev) {
                                var c = o.call(i, "catchLoc"), l = o.call(i, "finallyLoc");
                                if (c && l) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                                } else if (c) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for(var n = this.tryEntries.length - 1; n >= 0; --n){
                            var r = this.tryEntries[n];
                            if (r.tryLoc <= this.prev && o.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var i = r;
                                break;
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, p) : this.complete(a);
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), p;
                    },
                    finish: function(t) {
                        for(var e = this.tryEntries.length - 1; e >= 0; --e){
                            var n = this.tryEntries[e];
                            if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), O(n), p;
                        }
                    },
                    catch: function(t) {
                        for(var e = this.tryEntries.length - 1; e >= 0; --e){
                            var n = this.tryEntries[e];
                            if (n.tryLoc === t) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var o = r.arg;
                                    O(n);
                                }
                                return o;
                            }
                        }
                        throw new Error("illegal catch attempt");
                    },
                    delegateYield: function(t, e, n) {
                        return this.delegate = {
                            iterator: T(t),
                            resultName: e,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = void 0), p;
                    }
                }, n;
            }
            function n(t, e, n, r, o, i, a) {
                try {
                    var c = t[i](a), l = c.value;
                } catch (t1) {
                    return void n(t1);
                }
                c.done ? e(l) : Promise.resolve(l).then(r, o);
            }
            function r(t) {
                return function() {
                    var e = this, r = arguments;
                    return new Promise(function(o, i) {
                        var a = t.apply(e, r);
                        function c(t) {
                            n(a, o, i, c, l, "next", t);
                        }
                        function l(t) {
                            n(a, o, i, c, l, "throw", t);
                        }
                        c(void 0);
                    });
                };
            }
            fetch("http://localhost:3000/api/products/").then(function(t) {
                return t.json();
            }).then(function(t) {
                console.log(t), function(t) {
                    a.apply(this, arguments);
                }(t), c(t), document.querySelectorAll(".itemQuantity").forEach(function(e) {
                    e.addEventListener("change", u), e.JSON = t;
                }), document.querySelectorAll(".deleteItem").forEach(function(e) {
                    e.addEventListener("click", f), e.JSON = t;
                });
            }), console.log(localStorage);
            var o = JSON.parse(localStorage.getItem("cart"));
            console.log(o);
            var i = document.querySelector("#cart__items");
            function a() {
                return (a = r(e().mark(function t(n) {
                    var r, a;
                    return e().wrap(function(t) {
                        for(;;)switch(t.prev = t.next){
                            case 0:
                                if (null === o) i.innerHTML = "Votre panier est vide";
                                else for(a in console.log(o), r = function(t) {
                                    console.log(n);
                                    var e = n.find(function(e) {
                                        return e._id == o[t].id;
                                    }), r = e.altTxt, i = e.imageUrl, a = (e.id, e.name), c = e.price;
                                    console.log(e);
                                    var l = o[t], u = '<article class="cart__item" data-id="'.concat(l.id, '" data-color="').concat(l.color, '">\n                <div class="cart__item__img">\n                  <img src="').concat(i, '" alt="').concat(r, '">\n                </div>\n                <div class="cart__item__content">\n                  <div class="cart__item__content__description">\n                    <h2>').concat(a, "</h2>\n                    <p>").concat(l.color, "</p>\n                    <p>").concat(c, ' €</p>\n                  </div>\n                  <div class="cart__item__content__settings">\n                    <div class="cart__item__content__settings__quantity">\n                      <p>Qt\xe9 : </p>\n                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="').concat(l.quantity, '">\n                    </div>\n                    <div class="cart__item__content__settings__delete">\n                      <p class="deleteItem">Supprimer</p>\n                    </div>\n                  </div>\n                </div>\n              </article>');
                                    cart__items.innerHTML += u;
                                }, o)r(a);
                            case 1:
                            case "end":
                                return t.stop();
                        }
                    }, t);
                }))).apply(this, arguments);
            }
            function c(t) {
                return l.apply(this, arguments);
            }
            function l() {
                return (l = r(e().mark(function t(n) {
                    var r, o;
                    return e().wrap(function(t) {
                        for(;;)switch(t.prev = t.next){
                            case 0:
                                for(item in r = JSON.parse(localStorage.getItem("cart")), totalQtt = 0, totalPrice = 0, r)o = n.find(function(t) {
                                    return t._id == r[item].id;
                                }), totalQtt += Number(r[item].quantity), totalPrice += o.price * Number(r[item].quantity);
                                document.getElementById("totalQuantity").innerHTML = totalQtt, document.getElementById("totalPrice").innerHTML = totalPrice;
                            case 8:
                            case "end":
                                return t.stop();
                        }
                    }, t);
                }))).apply(this, arguments);
            }
            function u(t) {
                return s.apply(this, arguments);
            }
            function s() {
                return (s = r(e().mark(function t(n) {
                    var r, o, i, a;
                    return e().wrap(function(t) {
                        for(;;)switch(t.prev = t.next){
                            case 0:
                                r = n.target.closest("article"), o = r.getAttribute("data-color"), i = r.getElementsByTagName("h2")[0].innerHTML, (a = JSON.parse(localStorage.getItem("cart")))[i + o].quantity = n.target.value, localStorage.setItem("cart", JSON.stringify(a)), c(n.target.JSON);
                            case 7:
                            case "end":
                                return t.stop();
                        }
                    }, t);
                }))).apply(this, arguments);
            }
            function f(t) {
                return d.apply(this, arguments);
            }
            function d() {
                return (d = r(e().mark(function t(n) {
                    var r, o, i, a;
                    return e().wrap(function(t) {
                        for(;;)switch(t.prev = t.next){
                            case 0:
                                r = n.target.closest("article"), o = r.getAttribute("data-color"), i = r.getElementsByTagName("h2")[0].innerHTML, delete (a = JSON.parse(localStorage.getItem("cart")))[i + o], r.remove(), localStorage.setItem("cart", JSON.stringify(a)), c(n.target.JSON);
                            case 8:
                            case "end":
                                return t.stop();
                        }
                    }, t);
                }))).apply(this, arguments);
            }
            console.log(i), function() {
                var t = document.querySelector(".cart__order__form");
                console.log(t.email), t.email.addEventListener("change", function() {
                    e(this);
                }), address.addEventListener("invalid", function() {
                    "" === address.value ? address.setCustomValidity("Enter your username!") : (alert("si je met en commentaire, le title du html s'appliquera \xe0 la place"), address.setCustomValidity("Addresse au mauvais format, veuillez suivre le format du texte par d\xe9faut"));
                }), address.addEventListener("input", function() {
                    address.setCustomValidity("ooio"), console.log('"iuoiu'), address.checkValidity();
                }), t.addEventListener("submit", function(a) {
                    if (alert("ok"), a.preventDefault(), e(t.email) && n(t.firstName) && r(t.lastName) && i(t.city)) {
                        var c = {
                            contact: {},
                            products: []
                        };
                        for(var l in Array.from(new FormData(t).entries()).forEach(function(t) {
                            c.contact[t[0]] = t[1];
                        }), o)c.products.push(o[l].id);
                        console.log(c), fetch("http://localhost:3000/api/products/order", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(c)
                        }).then(function(t) {
                            return t.json();
                        }).then(function(t) {
                            console.log(t);
                        });
                    } else alert("Le formulaire n'est pas valide");
                });
                var e = function(t) {
                    var e = new RegExp("^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$", "g").test(t.value), n = t.nextElementSibling;
                    return console.log(e), e ? (n.innerHTML = "Email valide", n.classList.toggle("ok"), !0) : (n.innerHTML = "Email non valide", !1);
                };
                console.log(t.firstName), t.firstName.addEventListener("change", function() {
                    n(this);
                });
                var n = function(t) {
                    var e = new RegExp("^[a-zA-Z ,.'-]+$", "g").test(t.value), n = t.nextElementSibling;
                    return console.log(e), e ? (n.innerHTML = "Pr\xe9nom valide", n.classList.toggle("ok"), !0) : (n.innerHTML = "Pr\xe9nom non valide", !1);
                };
                console.log(t.lastName), t.lastName.addEventListener("change", function() {
                    r(this);
                });
                var r = function(t) {
                    var e = new RegExp("^[a-zA-Z ,.'-]+$", "g").test(t.value), n = t.nextElementSibling;
                    return console.log(e), e ? (n.innerHTML = "Nom valide", !0) : (n.innerHTML = "Nom non valide", !1);
                };
                console.log(t.city), t.city.addEventListener("change", function() {
                    i(this);
                });
                var i = function(t) {
                    var e = new RegExp("^[a-zA-Z ,.'-]+$", "g").test(t.value), n = t.nextElementSibling;
                    return console.log(e), e ? (n.innerHTML = "Ville valide", !0) : (n.innerHTML = "Ville non valide", !1);
                };
            }();
        },
        9150: ()=>{
            function t(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for(var n = 0, r = new Array(e); n < e; n++)r[n] = t[n];
                return r;
            }
            var e, n = document.location, r = new URL(n), o = new URLSearchParams(r.search);
            if (o.has("id")) var i = o.get("id");
            function a() {
                var t;
                console.log("click ok " + e);
                var n = document.querySelector("#quantity"), r = document.querySelector("#colors"), o = {
                    id: e._id,
                    color: r.value,
                    quantity: n.value
                };
                console.log(o);
                var i = e.name + r.value, a = o.quantity;
                null == localStorage.getItem("cart") && localStorage.setItem("cart", "{}");
                var c = JSON.parse(localStorage.getItem("cart"));
                console.log(c);
                var l = null === (t = c[i]) || void 0 === t ? void 0 : t.quantity;
                if ("" == r.value) result = window.alert("Choisir la couleur");
                else if (0 == n.value) result = window.alert("Quantit\xe9 invalide");
                else {
                    if (console.log(c), c[i]) {
                        console.log("existe deja");
                        var u = parseInt(l) + parseInt(a);
                        console.log("total produit:" + u), c[i].quantity = u, c = JSON.stringify(c), localStorage.setItem("cart", c);
                    } else console.log("n existe pas encore"), c[i] = o, c = JSON.stringify(c), localStorage.setItem("cart", c);
                    confirm("Votre panier a bien \xe9t\xe9 rajout\xe9 du produit .... avec la quntiti\xe9 ...\nVoulez-vous aller au panier ?") && (location.href = "cart.html");
                }
            }
            console.log(i), alert("2"), fetch("http://localhost:3000/api/products/" + i).then(function(t) {
                return t.json();
            }).then(function(n) {
                console.log(n), function(e) {
                    var n = document.querySelector(".item__img");
                    console.log(n);
                    var r = document.createElement("img");
                    r.src = e.imageUrl, r.alt = e.altTxt, n.appendChild(r);
                    var o = document.querySelector("#title"), i = document.querySelector("#price"), a = document.querySelector("#description");
                    o.innerText = e.name, i.innerText = e.price, a.innerText = e.description;
                    var c, l = function(e, n) {
                        var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (!r) {
                            if (Array.isArray(e) || (r = function(e, n) {
                                if (e) {
                                    if ("string" == typeof e) return t(e, n);
                                    var r = Object.prototype.toString.call(e).slice(8, -1);
                                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? t(e, n) : void 0;
                                }
                            }(e)) || n && e && "number" == typeof e.length) {
                                r && (e = r);
                                var o = 0, i = function() {};
                                return {
                                    s: i,
                                    n: function() {
                                        return o >= e.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: e[o++]
                                        };
                                    },
                                    e: function(t) {
                                        throw t;
                                    },
                                    f: i
                                };
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                        }
                        var a, c = !0, l = !1;
                        return {
                            s: function() {
                                r = r.call(e);
                            },
                            n: function() {
                                var t = r.next();
                                return c = t.done, t;
                            },
                            e: function(t) {
                                l = !0, a = t;
                            },
                            f: function() {
                                try {
                                    c || null == r.return || r.return();
                                } finally{
                                    if (l) throw a;
                                }
                            }
                        };
                    }(e.colors);
                    try {
                        for(l.s(); !(c = l.n()).done;){
                            var u = c.value;
                            console.log(u);
                            var s = document.createElement("option");
                            document.querySelector("#colors").appendChild(s), s.value = u, s.innerHTML = u;
                        }
                    } catch (t1) {
                        l.e(t1);
                    } finally{
                        l.f();
                    }
                    console.log("couleur ok");
                }(n), e = n;
            });
            var c = document.querySelector("#addToCart");
            window.onload = function() {
                c.addEventListener("click", a);
            };
        },
        3670: ()=>{
            function t(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for(var n = 0, r = new Array(e); n < e; n++)r[n] = t[n];
                return r;
            }
            fetch("http://localhost:3000/api/products").then(function(t) {
                return t.json();
            }).then(function(e) {
                console.log(e), function(e) {
                    var n, r = function(e, n) {
                        var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (!r) {
                            if (Array.isArray(e) || (r = function(e, n) {
                                if (e) {
                                    if ("string" == typeof e) return t(e, n);
                                    var r = Object.prototype.toString.call(e).slice(8, -1);
                                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? t(e, n) : void 0;
                                }
                            }(e)) || n && e && "number" == typeof e.length) {
                                r && (e = r);
                                var o = 0, i = function() {};
                                return {
                                    s: i,
                                    n: function() {
                                        return o >= e.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: e[o++]
                                        };
                                    },
                                    e: function(t) {
                                        throw t;
                                    },
                                    f: i
                                };
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                        }
                        var a, c = !0, l = !1;
                        return {
                            s: function() {
                                r = r.call(e);
                            },
                            n: function() {
                                var t = r.next();
                                return c = t.done, t;
                            },
                            e: function(t) {
                                l = !0, a = t;
                            },
                            f: function() {
                                try {
                                    c || null == r.return || r.return();
                                } finally{
                                    if (l) throw a;
                                }
                            }
                        };
                    }(e);
                    try {
                        for(r.s(); !(n = r.n()).done;){
                            var o = n.value, i = document.getElementById("items"), a = document.createElement("a"), c = document.createElement("article"), l = document.createElement("img"), u = document.createElement("h3"), s = document.createElement("p");
                            a.setAttribute("href", "./product.html?id=" + o._id), l.setAttribute("src", o.imageUrl), l.setAttribute("alt", o.altTxt), u.classList.add("productName"), u.innerText = o.name, s.classList.add("productDescription"), s.innerText = o.description, c.appendChild(l), c.appendChild(u), c.appendChild(s), a.appendChild(c), i.appendChild(a), console.log(o.name + "<br />");
                        }
                    } catch (t1) {
                        r.e(t1);
                    } finally{
                        r.f();
                    }
                }(e);
            }), alert("1");
        }
    }, e = {};
    function n(r) {
        var o = e[r];
        if (void 0 !== o) return o.exports;
        var i = e[r] = {
            exports: {}
        };
        return t[r](i, i.exports, n), i.exports;
    }
    n.n = (t)=>{
        var e = t && t.__esModule ? ()=>t.default : ()=>t;
        return n.d(e, {
            a: e
        }), e;
    }, n.d = (t, e)=>{
        for(var r in e)n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, {
            enumerable: !0,
            get: e[r]
        });
    }, n.o = (t, e)=>Object.prototype.hasOwnProperty.call(t, e), (()=>{
        "use strict";
        n(3670), n(9150), n(4282);
    })();
})();

//# sourceMappingURL=cart.1a25a427.js.map
