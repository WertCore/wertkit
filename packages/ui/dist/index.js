var pr = (e) => {
  throw TypeError(e);
};
var mr = (e, t, n) => t.has(e) || pr("Cannot " + n);
var le = (e, t, n) => (mr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), hr = (e, t, n) => t.has(e) ? pr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Ln = (e, t, n, o) => (mr(e, t, "write to private field"), o ? o.call(e, n) : t.set(e, n), n);
import { jsx as m, jsxs as U, Fragment as Ke } from "react/jsx-runtime";
import * as a from "react";
import { useState as vt, useEffect as Yt, useCallback as un, useMemo as Gr, useContext as Co, createContext as So, forwardRef as xe, useId as xo, useLayoutEffect as cc, useRef as ac, Fragment as lc } from "react";
import * as Ct from "react-dom";
function Y(...e) {
  return e.filter(Boolean).join(" ");
}
const Eo = (e) => ({
  width: "1em",
  height: "1em",
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": !0,
  ...e
}), zr = (e) => /* @__PURE__ */ m("svg", { ...Eo(e), children: /* @__PURE__ */ m("path", { d: "M3 8.5 6.5 12 13 4.5" }) }), uc = (e) => /* @__PURE__ */ m("svg", { ...Eo(e), children: /* @__PURE__ */ m("path", { d: "m4 6 4 4 4-4" }) }), Yr = (e) => /* @__PURE__ */ m("svg", { ...Eo(e), children: /* @__PURE__ */ m("path", { d: "M4 4l8 8M12 4l-8 8" }) }), Xr = So(null);
function dc(e) {
  if (!e || typeof window > "u") return {};
  try {
    return JSON.parse(window.localStorage.getItem(e) ?? "{}");
  } catch {
    return {};
  }
}
function fv({
  children: e,
  theme: t,
  defaultTheme: n = "system",
  defaultDensity: o = "normal",
  storageKey: r = "wertkit-theme",
  target: i = "root"
}) {
  const [s, c] = vt(n), [l, u] = vt(o), [d, f] = vt(!1), [p, g] = vt(null);
  Yt(() => {
    const b = dc(r);
    b.theme && c(b.theme), b.density && u(b.density);
  }, [r]);
  const w = t ?? s;
  Yt(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function") return;
    const b = window.matchMedia("(prefers-color-scheme: dark)"), C = () => f(b.matches);
    return C(), b.addEventListener("change", C), () => b.removeEventListener("change", C);
  }, []);
  const v = w === "system" ? d ? "dark" : "light" : w;
  Yt(() => {
    const b = i === "self" ? p : document.documentElement;
    b && (b.setAttribute("data-theme", v), b.setAttribute("data-density", l));
  }, [v, l, i, p]), Yt(() => {
    if (!(!r || typeof window > "u"))
      try {
        window.localStorage.setItem(r, JSON.stringify({ theme: w, density: l }));
      } catch {
      }
  }, [w, l, r]);
  const h = un((b) => c(b), []), y = un((b) => u(b), []), S = Gr(
    () => ({ theme: w, resolvedTheme: v, setTheme: h, density: l, setDensity: y }),
    [w, v, h, l, y]
  );
  return /* @__PURE__ */ m(Xr.Provider, { value: S, children: i === "self" ? /* @__PURE__ */ m("div", { ref: g, children: e }) : e });
}
function pv() {
  const e = Co(Xr);
  if (!e) throw new Error("useTheme must be used inside <ThemeProvider>");
  return e;
}
function mv({
  storageKey: e = "wertkit-theme",
  defaultTheme: t = "system",
  defaultDensity: n = "normal",
  nonce: o
}) {
  const r = `(function(){try{
var k=${JSON.stringify(e)},t=${JSON.stringify(t)},d=${JSON.stringify(n)};
if(k){var s=JSON.parse(localStorage.getItem(k)||'{}');if(s.theme)t=s.theme;if(s.density)d=s.density;}
if(t==='system'){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}
var e=document.documentElement;e.setAttribute('data-theme',t);e.setAttribute('data-density',d);
}catch(_){}})();`;
  return /* @__PURE__ */ m("script", { nonce: o, dangerouslySetInnerHTML: { __html: r } });
}
var fc = Object.defineProperty, To = (e, t) => fc(e, "name", { value: t, configurable: !0 });
function Zn(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
To(Zn, "setRef");
function qr(...e) {
  return (t) => {
    let n = !1;
    const o = e.map((r) => {
      const i = Zn(r, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let r = 0; r < o.length; r++) {
          const i = o[r];
          typeof i == "function" ? i() : Zn(e[r], null);
        }
      };
  };
}
To(qr, "composeRefs");
function W(...e) {
  return a.useCallback(qr(...e), e);
}
To(W, "useComposedRefs");
var pc = Object.defineProperty, Ee = (e, t) => pc(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function De(e) {
  const t = a.forwardRef((n, o) => {
    let { children: r, ...i } = n, s = null, c = !1;
    const l = [];
    Jn(r) && typeof Xt == "function" && (r = Xt(r._payload)), a.Children.forEach(r, (p) => {
      var g;
      if (ni(p)) {
        c = !0;
        const w = p;
        let v = "child" in w.props ? w.props.child : w.props.children;
        Jn(v) && typeof Xt == "function" && (v = Xt(v._payload)), s = mc(w, v), l.push((g = s == null ? void 0 : s.props) == null ? void 0 : g.children);
      } else
        l.push(p);
    }), s ? s = a.cloneElement(s, void 0, l) : (
      // A `Slottable` was found but it didn't resolve to a single element (e.g.
      // it wrapped multiple elements, text, or a render-prop `child` that
      // wasn't an element). Don't fall back to treating the `Slottable` wrapper
      // itself as the slot target — throw a descriptive error below instead.
      !c && a.Children.count(r) === 1 && a.isValidElement(r) && (s = r)
    );
    const u = s ? ti(s) : void 0, d = W(o, u);
    if (!s) {
      if (r || r === 0)
        throw new Error(
          c ? gc(e) : vc(e)
        );
      return r;
    }
    const f = ei(i, s.props ?? {});
    return s.type !== a.Fragment && (f.ref = o ? d : u), a.cloneElement(s, f);
  });
  return t.displayName = `${e}.Slot`, t;
}
Ee(De, "createSlot");
var Zr = /* @__PURE__ */ De("Slot"), Jr = Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function Qr(e) {
  const t = /* @__PURE__ */ Ee((n) => "child" in n ? n.children(n.child) : n.children, "Slottable");
  return t.displayName = `${e}.Slottable`, t.__radixId = Jr, t;
}
Ee(Qr, "createSlottable");
var mc = /* @__PURE__ */ Ee((e, t) => {
  if ("child" in e.props) {
    const n = e.props.child;
    return a.isValidElement(n) ? a.cloneElement(n, void 0, e.props.children(n.props.children)) : null;
  }
  return a.isValidElement(t) ? t : null;
}, "getSlottableElementFromSlottable");
function ei(e, t) {
  const n = { ...t };
  for (const o in t) {
    const r = e[o], i = t[o];
    /^on[A-Z]/.test(o) ? r && i ? n[o] = (...c) => {
      const l = i(...c);
      return r(...c), l;
    } : r && (n[o] = r) : o === "style" ? n[o] = { ...r, ...i } : o === "className" && (n[o] = [r, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
Ee(ei, "mergeProps");
function ti(e) {
  var o, r;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
Ee(ti, "getElementRef");
function ni(e) {
  return a.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Jr;
}
Ee(ni, "isSlottable");
var hc = Symbol.for("react.lazy");
function Jn(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === hc && "_payload" in e && oi(e._payload);
}
Ee(Jn, "isLazyComponent");
function oi(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
Ee(oi, "isPromiseLike");
var vc = /* @__PURE__ */ Ee((e) => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"), gc = /* @__PURE__ */ Ee((e) => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"), Xt = a[" use ".trim().toString()];
const wc = "wk-Button_root", bc = "wk-Button_sm", yc = "wk-Button_md", Cc = "wk-Button_lg", Sc = "wk-Button_iconOnly", xc = "wk-Button_primary", Ec = "wk-Button_secondary", Tc = "wk-Button_ghost", Pc = "wk-Button_danger", Rc = "wk-Button_spinner", _t = {
  root: wc,
  sm: bc,
  md: yc,
  lg: Cc,
  iconOnly: Sc,
  primary: xc,
  secondary: Ec,
  ghost: Tc,
  danger: Pc,
  spinner: Rc,
  "wk-spin": "wk-Button_wk-spin"
}, hv = xe(function({
  variant: t = "secondary",
  size: n = "md",
  iconOnly: o = !1,
  loading: r = !1,
  startIcon: i,
  endIcon: s,
  asChild: c = !1,
  className: l,
  children: u,
  disabled: d,
  type: f,
  ...p
}, g) {
  return /* @__PURE__ */ U(
    c ? Zr : "button",
    {
      ref: g,
      type: c ? void 0 : f ?? "button",
      disabled: d || r,
      "data-loading": r || void 0,
      className: Y(
        _t.root,
        _t[t],
        _t[n],
        o && _t.iconOnly,
        l
      ),
      ...p,
      children: [
        r ? /* @__PURE__ */ m("span", { className: _t.spinner, "aria-hidden": "true" }) : i,
        u,
        !r && s
      ]
    }
  );
}), _c = "wk-Field_root", Ic = "wk-Field_label", kc = "wk-Field_required", Oc = "wk-Field_hint", Mc = "wk-Field_error", It = {
  root: _c,
  label: Ic,
  required: kc,
  hint: Oc,
  error: Mc
}, ri = So(null), ii = () => Co(ri);
function vv({ label: e, hint: t, error: n, required: o, children: r, className: i }) {
  const s = xo(), c = `${s}-input`, l = `${s}-hint`, u = `${s}-error`, d = !!n, f = [n ? u : null, t ? l : null].filter(Boolean).join(" ") || void 0;
  return /* @__PURE__ */ m(ri.Provider, { value: { inputId: c, describedBy: f, invalid: d }, children: /* @__PURE__ */ U("div", { className: Y(It.root, i), children: [
    e && /* @__PURE__ */ U("label", { className: It.label, htmlFor: c, children: [
      e,
      o && /* @__PURE__ */ m("span", { className: It.required, "aria-hidden": "true", children: "*" })
    ] }),
    r,
    n ? /* @__PURE__ */ m("p", { className: It.error, id: u, role: "alert", children: n }) : t && /* @__PURE__ */ m("p", { className: It.hint, id: l, children: t })
  ] }) });
}
const Dc = "wk-Input_root", Ac = "wk-Input_mono", Nc = "wk-Input_sm", Lc = "wk-Input_md", $c = "wk-Input_lg", $n = {
  root: Dc,
  mono: Ac,
  sm: Nc,
  md: Lc,
  lg: $c
}, gv = xe(function({ size: t = "md", invalid: n, mono: o = !1, className: r, id: i, "aria-describedby": s, ...c }, l) {
  const u = ii(), d = n ?? (u == null ? void 0 : u.invalid) ?? !1;
  return /* @__PURE__ */ m(
    "input",
    {
      ref: l,
      id: i ?? (u == null ? void 0 : u.inputId),
      "aria-invalid": d || void 0,
      "aria-describedby": s ?? (u == null ? void 0 : u.describedBy),
      className: Y($n.root, $n[t], o && $n.mono, r),
      ...c
    }
  );
});
var Fc = Object.defineProperty, Bc = (e, t) => Fc(e, "name", { value: t, configurable: !0 });
function Qn(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
Bc(Qn, "clamp");
var Vc = Object.defineProperty, St = (e, t) => Vc(e, "name", { value: t, configurable: !0 }), si = !!(typeof window < "u" && window.document && window.document.createElement);
function k(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return /* @__PURE__ */ St(function(r) {
    if (e == null || e(r), n === !1 || !r || !r.defaultPrevented)
      return t == null ? void 0 : t(r);
  }, "handleEvent");
}
St(k, "composeEventHandlers");
function Hc(e) {
  var t;
  if (!si)
    throw new Error("Cannot access window outside of the DOM");
  return ((t = e == null ? void 0 : e.ownerDocument) == null ? void 0 : t.defaultView) ?? window;
}
St(Hc, "getOwnerWindow");
function eo(e) {
  if (!si)
    throw new Error("Cannot access document outside of the DOM");
  return (e == null ? void 0 : e.ownerDocument) ?? document;
}
St(eo, "getOwnerDocument");
function ci(e, t = !1) {
  const { activeElement: n } = eo(e);
  if (!(n != null && n.nodeName))
    return null;
  if (ai(n) && n.contentDocument)
    return ci(n.contentDocument.body, t);
  if (t) {
    const o = n.getAttribute("aria-activedescendant");
    if (o) {
      const r = eo(n).getElementById(o);
      if (r)
        return r;
    }
  }
  return n;
}
St(ci, "getActiveElement");
function ai(e) {
  return e.tagName === "IFRAME";
}
St(ai, "isFrame");
var Wc = Object.defineProperty, be = (e, t) => Wc(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function Uc(e, t) {
  const n = a.createContext(t);
  n.displayName = e + "Context";
  const o = /* @__PURE__ */ be((i) => {
    const { children: s, ...c } = i, l = a.useMemo(() => c, Object.values(c));
    return /* @__PURE__ */ m(n.Provider, { value: l, children: s });
  }, "Provider");
  o.displayName = e + "Provider";
  function r(i, s = {}) {
    const { optional: c = !1 } = s, l = a.useContext(n);
    if (l) return l;
    if (t !== void 0) return t;
    if (!c)
      throw new Error(`\`${i}\` must be used within \`${e}\``);
  }
  return be(r, "useContext"), [o, r];
}
be(Uc, "createContext");
// @__NO_SIDE_EFFECTS__
function pe(e, t = []) {
  let n = [];
  function o(i, s) {
    const c = a.createContext(s);
    c.displayName = i + "Context";
    const l = n.length;
    n = [...n, s];
    const u = /* @__PURE__ */ be((f) => {
      var y;
      const { scope: p, children: g, ...w } = f, v = ((y = p == null ? void 0 : p[e]) == null ? void 0 : y[l]) || c, h = a.useMemo(() => w, Object.values(w));
      return /* @__PURE__ */ m(v.Provider, { value: h, children: g });
    }, "Provider");
    u.displayName = i + "Provider";
    function d(f, p, g = {}) {
      var y;
      const { optional: w = !1 } = g, v = ((y = p == null ? void 0 : p[e]) == null ? void 0 : y[l]) || c, h = a.useContext(v);
      if (h) return h;
      if (s !== void 0) return s;
      if (!w)
        throw new Error(`\`${f}\` must be used within \`${i}\``);
    }
    return be(d, "useContext"), [u, d];
  }
  be(o, "createContext");
  const r = /* @__PURE__ */ be(() => {
    const i = n.map((s) => a.createContext(s));
    return /* @__PURE__ */ be(function(c) {
      const l = (c == null ? void 0 : c[e]) || i;
      return a.useMemo(
        () => ({ [`__scope${e}`]: { ...c, [e]: l } }),
        [c, l]
      );
    }, "useScope");
  }, "createScope");
  return r.scopeName = e, [o, li(r, ...t)];
}
be(pe, "createContextScope");
function li(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = /* @__PURE__ */ be(() => {
    const o = e.map((r) => ({
      useScope: r(),
      scopeName: r.scopeName
    }));
    return /* @__PURE__ */ be(function(i) {
      const s = o.reduce((c, { useScope: l, scopeName: u }) => {
        const f = l(i)[`__scope${u}`];
        return { ...c, ...f };
      }, {});
      return a.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    }, "useComposedScopes");
  }, "createScope");
  return n.scopeName = t.scopeName, n;
}
be(li, "composeContextScopes");
var jc = Object.defineProperty, se = (e, t) => jc(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function Ft(e) {
  const t = e + "CollectionProvider", [n, o] = /* @__PURE__ */ pe(t), [r, i] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), s = /* @__PURE__ */ se((v) => {
    const { scope: h, children: y } = v, S = a.useRef(null), b = a.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ m(r, { scope: h, itemMap: b, collectionRef: S, children: y });
  }, "CollectionProvider");
  s.displayName = t;
  const c = e + "CollectionSlot", l = /* @__PURE__ */ De(c), u = a.forwardRef(
    (v, h) => {
      const { scope: y, children: S } = v, b = i(c, y), C = W(h, b.collectionRef);
      return /* @__PURE__ */ m(l, { ref: C, children: S });
    }
  );
  u.displayName = c;
  const d = e + "CollectionItemSlot", f = "data-radix-collection-item", p = /* @__PURE__ */ De(d), g = a.forwardRef(
    (v, h) => {
      const { scope: y, children: S, ...b } = v, C = a.useRef(null), x = W(h, C), E = i(d, y);
      return a.useEffect(() => (E.itemMap.set(C, { ref: C, ...b }), () => void E.itemMap.delete(C))), /* @__PURE__ */ m(p, { [f]: "", ref: x, children: S });
    }
  );
  g.displayName = d;
  function w(v) {
    const h = i(e + "CollectionConsumer", v);
    return a.useCallback(() => {
      const S = h.collectionRef.current;
      if (!S) return [];
      const b = Array.from(S.querySelectorAll(`[${f}]`));
      return Array.from(h.itemMap.values()).sort(
        (E, T) => b.indexOf(E.ref.current) - b.indexOf(T.ref.current)
      );
    }, [h.collectionRef, h.itemMap]);
  }
  return se(w, "useCollection"), [
    { Provider: s, Slot: u, ItemSlot: g },
    w,
    o
  ];
}
se(Ft, "createCollection");
var vr = /* @__PURE__ */ new WeakMap(), ne, he, Fn = (he = class extends Map {
  constructor(n) {
    super(n);
    hr(this, ne);
    Ln(this, ne, [...super.keys()]), vr.set(this, !0);
  }
  set(n, o) {
    return vr.get(this) && (this.has(n) ? le(this, ne)[le(this, ne).indexOf(n)] = n : le(this, ne).push(n)), super.set(n, o), this;
  }
  insert(n, o, r) {
    const i = this.has(o), s = le(this, ne).length, c = Po(n);
    let l = c >= 0 ? c : s + c;
    const u = l < 0 || l >= s ? -1 : l;
    if (u === this.size || i && u === this.size - 1 || u === -1)
      return this.set(o, r), this;
    const d = this.size + (i ? 0 : 1);
    c < 0 && l++;
    const f = [...le(this, ne)];
    let p, g = !1;
    for (let w = l; w < d; w++)
      if (l === w) {
        let v = f[w];
        f[w] === o && (v = f[w + 1]), i && this.delete(o), p = this.get(v), this.set(o, r);
      } else {
        !g && f[w - 1] === o && (g = !0);
        const v = f[g ? w : w - 1], h = p;
        p = this.get(v), this.delete(v), this.set(v, h);
      }
    return this;
  }
  with(n, o, r) {
    const i = new he(this);
    return i.insert(n, o, r), i;
  }
  before(n) {
    const o = le(this, ne).indexOf(n) - 1;
    if (!(o < 0))
      return this.entryAt(o);
  }
  /**
   * Sets a new key-value pair at the position before the given key.
   */
  setBefore(n, o, r) {
    const i = le(this, ne).indexOf(n);
    return i === -1 ? this : this.insert(i, o, r);
  }
  after(n) {
    let o = le(this, ne).indexOf(n);
    if (o = o === -1 || o === this.size - 1 ? -1 : o + 1, o !== -1)
      return this.entryAt(o);
  }
  /**
   * Sets a new key-value pair at the position after the given key.
   */
  setAfter(n, o, r) {
    const i = le(this, ne).indexOf(n);
    return i === -1 ? this : this.insert(i + 1, o, r);
  }
  first() {
    return this.entryAt(0);
  }
  last() {
    return this.entryAt(-1);
  }
  clear() {
    return Ln(this, ne, []), super.clear();
  }
  delete(n) {
    const o = super.delete(n);
    return o && le(this, ne).splice(le(this, ne).indexOf(n), 1), o;
  }
  deleteAt(n) {
    const o = this.keyAt(n);
    return o !== void 0 ? this.delete(o) : !1;
  }
  at(n) {
    const o = rn(le(this, ne), n);
    if (o !== void 0)
      return this.get(o);
  }
  entryAt(n) {
    const o = rn(le(this, ne), n);
    if (o !== void 0)
      return [o, this.get(o)];
  }
  indexOf(n) {
    return le(this, ne).indexOf(n);
  }
  keyAt(n) {
    return rn(le(this, ne), n);
  }
  from(n, o) {
    const r = this.indexOf(n);
    if (r === -1)
      return;
    let i = r + o;
    return i < 0 && (i = 0), i >= this.size && (i = this.size - 1), this.at(i);
  }
  keyFrom(n, o) {
    const r = this.indexOf(n);
    if (r === -1)
      return;
    let i = r + o;
    return i < 0 && (i = 0), i >= this.size && (i = this.size - 1), this.keyAt(i);
  }
  find(n, o) {
    let r = 0;
    for (const i of this) {
      if (Reflect.apply(n, o, [i, r, this]))
        return i;
      r++;
    }
  }
  findIndex(n, o) {
    let r = 0;
    for (const i of this) {
      if (Reflect.apply(n, o, [i, r, this]))
        return r;
      r++;
    }
    return -1;
  }
  filter(n, o) {
    const r = [];
    let i = 0;
    for (const s of this)
      Reflect.apply(n, o, [s, i, this]) && r.push(s), i++;
    return new he(r);
  }
  map(n, o) {
    const r = [];
    let i = 0;
    for (const s of this)
      r.push([s[0], Reflect.apply(n, o, [s, i, this])]), i++;
    return new he(r);
  }
  reduce(...n) {
    const [o, r] = n;
    let i = 0, s = r ?? this.at(0);
    for (const c of this)
      i === 0 && n.length === 1 ? s = c : s = Reflect.apply(o, this, [s, c, i, this]), i++;
    return s;
  }
  reduceRight(...n) {
    const [o, r] = n;
    let i = r ?? this.at(-1);
    for (let s = this.size - 1; s >= 0; s--) {
      const c = this.at(s);
      s === this.size - 1 && n.length === 1 ? i = c : i = Reflect.apply(o, this, [i, c, s, this]);
    }
    return i;
  }
  toSorted(n) {
    const o = [...this.entries()].sort(n);
    return new he(o);
  }
  toReversed() {
    const n = new he();
    for (let o = this.size - 1; o >= 0; o--) {
      const r = this.keyAt(o), i = this.get(r);
      n.set(r, i);
    }
    return n;
  }
  toSpliced(...n) {
    const o = [...this.entries()];
    return o.splice(...n), new he(o);
  }
  slice(n, o) {
    const r = new he();
    let i = this.size - 1;
    if (n === void 0)
      return r;
    n < 0 && (n = n + this.size), o !== void 0 && o > 0 && (i = o - 1);
    for (let s = n; s <= i; s++) {
      const c = this.keyAt(s), l = this.get(c);
      r.set(c, l);
    }
    return r;
  }
  every(n, o) {
    let r = 0;
    for (const i of this) {
      if (!Reflect.apply(n, o, [i, r, this]))
        return !1;
      r++;
    }
    return !0;
  }
  some(n, o) {
    let r = 0;
    for (const i of this) {
      if (Reflect.apply(n, o, [i, r, this]))
        return !0;
      r++;
    }
    return !1;
  }
}, ne = new WeakMap(), se(he, "OrderedDict"), he);
function rn(e, t) {
  if ("at" in Array.prototype)
    return Array.prototype.at.call(e, t);
  const n = ui(e, t);
  return n === -1 ? void 0 : e[n];
}
se(rn, "at");
function ui(e, t) {
  const n = e.length, o = Po(t), r = o >= 0 ? o : n + o;
  return r < 0 || r >= n ? -1 : r;
}
se(ui, "toSafeIndex");
function Po(e) {
  return e !== e || e === 0 ? 0 : Math.trunc(e);
}
se(Po, "toSafeInteger");
// @__NO_SIDE_EFFECTS__
function Kc(e) {
  const t = e + "CollectionProvider", [n, o] = /* @__PURE__ */ pe(t), [r, i] = n(
    t,
    {
      collectionElement: null,
      collectionRef: { current: null },
      collectionRefObject: { current: null },
      itemMap: new Fn(),
      setItemMap: /* @__PURE__ */ se(() => {
      }, "setItemMap")
    }
  ), s = /* @__PURE__ */ se(({ state: b, ...C }) => b ? /* @__PURE__ */ m(l, { ...C, state: b }) : /* @__PURE__ */ m(c, { ...C }), "CollectionProvider");
  s.displayName = t;
  const c = /* @__PURE__ */ se((b) => {
    const C = h();
    return /* @__PURE__ */ m(l, { ...b, state: C });
  }, "CollectionInit");
  c.displayName = t + "Init";
  const l = /* @__PURE__ */ se((b) => {
    const { scope: C, children: x, state: E } = b, T = a.useRef(null), [_, R] = a.useState(
      null
    ), O = W(T, R), [$, M] = E;
    return a.useEffect(() => {
      if (!_) return;
      const D = pi(() => {
      });
      return D.observe(_, {
        childList: !0,
        subtree: !0
      }), () => {
        D.disconnect();
      };
    }, [_]), /* @__PURE__ */ m(
      r,
      {
        scope: C,
        itemMap: $,
        setItemMap: M,
        collectionRef: O,
        collectionRefObject: T,
        collectionElement: _,
        children: x
      }
    );
  }, "CollectionProviderImpl");
  l.displayName = t + "Impl";
  const u = e + "CollectionSlot", d = /* @__PURE__ */ De(u), f = a.forwardRef(
    (b, C) => {
      const { scope: x, children: E } = b, T = i(u, x), _ = W(C, T.collectionRef);
      return /* @__PURE__ */ m(d, { ref: _, children: E });
    }
  );
  f.displayName = u;
  const p = e + "CollectionItemSlot", g = "data-radix-collection-item", w = /* @__PURE__ */ De(p), v = a.forwardRef(
    (b, C) => {
      const { scope: x, children: E, ...T } = b, _ = a.useRef(null), [R, O] = a.useState(null), $ = W(C, _, O), M = i(p, x), { setItemMap: D } = M, L = a.useRef(T);
      di(L.current, T) || (L.current = T);
      const H = L.current;
      return a.useEffect(() => {
        const P = H;
        return D((A) => R ? A.has(R) ? A.set(R, { ...P, element: R }).toSorted(to) : (A.set(R, { ...P, element: R }), A.toSorted(to)) : A), () => {
          D((A) => !R || !A.has(R) ? A : (A.delete(R), new Fn(A)));
        };
      }, [R, H, D]), /* @__PURE__ */ m(w, { [g]: "", ref: $, children: E });
    }
  );
  v.displayName = p;
  function h() {
    return a.useState(new Fn());
  }
  se(h, "useInitCollection");
  function y(b) {
    const { itemMap: C } = i(e + "CollectionConsumer", b);
    return C;
  }
  return se(y, "useCollection"), [
    { Provider: s, Slot: f, ItemSlot: v },
    {
      createCollectionScope: o,
      useCollection: y,
      useInitCollection: h
    }
  ];
}
se(Kc, "createCollection");
function di(e, t) {
  if (e === t) return !0;
  if (typeof e != "object" || typeof t != "object" || e == null || t == null) return !1;
  const n = Object.keys(e), o = Object.keys(t);
  if (n.length !== o.length) return !1;
  for (const r of n)
    if (!Object.prototype.hasOwnProperty.call(t, r) || e[r] !== t[r]) return !1;
  return !0;
}
se(di, "shallowEqual");
function fi(e, t) {
  return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING);
}
se(fi, "isElementPreceding");
function to(e, t) {
  return !e[1].element || !t[1].element ? 0 : fi(e[1].element, t[1].element) ? -1 : 1;
}
se(to, "sortByDocumentPosition");
function pi(e) {
  return new MutationObserver((n) => {
    for (const o of n)
      if (o.type === "childList") {
        e();
        return;
      }
  });
}
se(pi, "getChildListObserver");
var Gc = Object.defineProperty, zc = (e, t) => Gc(e, "name", { value: t, configurable: !0 }), Yc = a.createContext(void 0);
function Bt(e) {
  const t = a.useContext(Yc);
  return e || t || "ltr";
}
zc(Bt, "useDirection");
var Xc = Object.defineProperty, qc = (e, t) => Xc(e, "name", { value: t, configurable: !0 }), Zc = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], B = Zc.reduce((e, t) => {
  const n = /* @__PURE__ */ De(`Primitive.${t}`), o = a.forwardRef((r, i) => {
    const { asChild: s, ...c } = r, l = s ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ m(l, { ...c, ref: i });
  });
  return o.displayName = `Primitive.${t}`, { ...e, [t]: o };
}, {});
function vn(e, t) {
  e && Ct.flushSync(() => e.dispatchEvent(t));
}
qc(vn, "dispatchDiscreteCustomEvent");
var Jc = Object.defineProperty, Qc = (e, t) => Jc(e, "name", { value: t, configurable: !0 });
function ue(e) {
  const t = a.useRef(e);
  return a.useEffect(() => {
    t.current = e;
  }), a.useMemo(() => ((...n) => {
    var o;
    return (o = t.current) == null ? void 0 : o.call(t, ...n);
  }), []);
}
Qc(ue, "useCallbackRef");
var ea = Object.defineProperty, re = (e, t) => ea(e, "name", { value: t, configurable: !0 }), no = "dismissableLayer.update", ta = "dismissableLayer.pointerDownOutside", na = "dismissableLayer.focusOutside", gr, Ro = a.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set(),
  // Outside elements that belong to a layer's own dismiss affordance (eg, a
  // dialog overlay). Pressing them should dismiss the layer regardless of
  // whether or not they stop propagation.
  //
  // See https://github.com/radix-ui/primitives/issues/3346
  dismissableSurfaces: /* @__PURE__ */ new Set()
}), Vt = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ re(function(t, n) {
    const {
      disableOutsidePointerEvents: o = !1,
      deferPointerDownOutside: r = !1,
      onEscapeKeyDown: i,
      onPointerDownOutside: s,
      onFocusOutside: c,
      onInteractOutside: l,
      onDismiss: u,
      ...d
    } = t, f = a.useContext(Ro), [p, g] = a.useState(null), w = (p == null ? void 0 : p.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, v] = a.useState({}), h = W(n, g), y = Array.from(f.layers), [S] = [
      ...f.layersWithOutsidePointerEventsDisabled
    ].slice(-1), b = S ? y.indexOf(S) : -1, C = p ? y.indexOf(p) : -1, x = f.layersWithOutsidePointerEventsDisabled.size > 0, E = C >= b, T = a.useRef(!1), _ = hi(
      (M) => {
        s == null || s(M), l == null || l(M), M.defaultPrevented || u == null || u();
      },
      {
        ownerDocument: w,
        deferPointerDownOutside: r,
        isDeferredPointerDownOutsideRef: T,
        dismissableSurfaces: f.dismissableSurfaces,
        shouldHandlePointerDownOutside: a.useCallback(
          (M) => {
            if (!(M instanceof Node))
              return !1;
            const D = [...f.branches].some(
              (L) => L.contains(M)
            );
            return E && !D;
          },
          [f.branches, E]
        )
      }
    ), R = vi((M) => {
      if (r && T.current)
        return;
      const D = M.target;
      [...f.branches].some((H) => H.contains(D)) || (c == null || c(M), l == null || l(M), M.defaultPrevented || u == null || u());
    }, w), O = p ? C === y.length - 1 : !1, $ = ue((M) => {
      M.key === "Escape" && (i == null || i(M), !M.defaultPrevented && u && (M.preventDefault(), u()));
    });
    return a.useEffect(() => {
      if (O)
        return w.addEventListener("keydown", $, { capture: !0 }), () => w.removeEventListener("keydown", $, { capture: !0 });
    }, [w, O, $]), a.useEffect(() => {
      if (p)
        return o && (f.layersWithOutsidePointerEventsDisabled.size === 0 && (gr = w.body.style.pointerEvents, w.body.style.pointerEvents = "none"), f.layersWithOutsidePointerEventsDisabled.add(p)), f.layers.add(p), oo(), () => {
          o && (f.layersWithOutsidePointerEventsDisabled.delete(p), f.layersWithOutsidePointerEventsDisabled.size === 0 && (w.body.style.pointerEvents = gr));
        };
    }, [p, w, o, f]), a.useEffect(() => () => {
      p && (f.layers.delete(p), f.layersWithOutsidePointerEventsDisabled.delete(p), oo());
    }, [p, f]), a.useEffect(() => {
      const M = /* @__PURE__ */ re(() => v({}), "handleUpdate");
      return document.addEventListener(no, M), () => document.removeEventListener(no, M);
    }, []), /* @__PURE__ */ m(
      B.div,
      {
        ...d,
        ref: h,
        style: {
          pointerEvents: x ? E ? "auto" : "none" : void 0,
          ...t.style
        },
        onFocusCapture: k(t.onFocusCapture, R.onFocusCapture),
        onBlurCapture: k(t.onBlurCapture, R.onBlurCapture),
        onPointerDownCapture: k(
          t.onPointerDownCapture,
          _.onPointerDownCapture
        )
      }
    );
  }, "DismissableLayer")
), oa = /* @__PURE__ */ a.forwardRef(/* @__PURE__ */ re(function(t, n) {
  const o = a.useContext(Ro), r = a.useRef(null), i = W(n, r);
  return a.useEffect(() => {
    const s = r.current;
    if (s)
      return o.branches.add(s), () => {
        o.branches.delete(s);
      };
  }, [o.branches]), /* @__PURE__ */ m(B.div, { ...t, ref: i });
}, "DismissableLayerBranch"));
function mi() {
  const e = a.useContext(Ro), [t, n] = a.useState(null);
  return a.useEffect(() => {
    if (t)
      return e.dismissableSurfaces.add(t), () => {
        e.dismissableSurfaces.delete(t);
      };
  }, [t, e.dismissableSurfaces]), n;
}
re(mi, "useDismissableLayerSurface");
var ra = /* @__PURE__ */ re(() => !0, "IS_TRUE");
function hi(e, t) {
  const {
    ownerDocument: n = globalThis == null ? void 0 : globalThis.document,
    deferPointerDownOutside: o = !1,
    isDeferredPointerDownOutsideRef: r,
    dismissableSurfaces: i,
    shouldHandlePointerDownOutside: s = ra
  } = t, c = ue(e), l = a.useRef(!1), u = a.useRef(!1), d = a.useRef(/* @__PURE__ */ new Map()), f = a.useRef(() => {
  });
  return a.useEffect(() => {
    function p() {
      u.current = !1, r.current = !1, d.current.clear();
    }
    re(p, "resetOutsideInteraction");
    function g() {
      return Array.from(d.current.values()).some(Boolean);
    }
    re(g, "isOutsideInteractionIntercepted");
    function w(b) {
      if (!u.current)
        return;
      const C = b.target;
      C instanceof Node && [...i].some((E) => E.contains(C)) || d.current.set(b.type, !0), b.type === "click" && window.setTimeout(() => {
        u.current && f.current();
      }, 0);
    }
    re(w, "handleInteractionCapture");
    function v(b) {
      u.current && d.current.set(b.type, !1);
    }
    re(v, "handleInteractionBubble");
    const h = /* @__PURE__ */ re((b) => {
      if (b.target && !l.current) {
        let C = function() {
          n.removeEventListener("click", f.current);
          const E = g();
          p(), E || _o(
            ta,
            c,
            x,
            { discrete: !0 }
          );
        };
        if (re(C, "handleAndDispatchPointerDownOutsideEvent"), !s(b.target)) {
          n.removeEventListener("click", f.current), p(), l.current = !1;
          return;
        }
        const x = { originalEvent: b };
        u.current = !0, r.current = o && b.button === 0, d.current.clear(), !o || b.button !== 0 ? C() : (n.removeEventListener("click", f.current), f.current = C, n.addEventListener("click", f.current, { once: !0 }));
      } else
        n.removeEventListener("click", f.current), p();
      l.current = !1;
    }, "handlePointerDown"), y = [
      "pointerup",
      "mousedown",
      "mouseup",
      "touchstart",
      "touchend",
      "click"
    ];
    for (const b of y)
      n.addEventListener(b, w, !0), n.addEventListener(b, v);
    const S = window.setTimeout(() => {
      n.addEventListener("pointerdown", h);
    }, 0);
    return () => {
      window.clearTimeout(S), n.removeEventListener("pointerdown", h), n.removeEventListener("click", f.current);
      for (const b of y)
        n.removeEventListener(b, w, !0), n.removeEventListener(b, v);
    };
  }, [
    n,
    c,
    o,
    r,
    i,
    s
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: /* @__PURE__ */ re(() => l.current = !0, "onPointerDownCapture")
  };
}
re(hi, "usePointerDownOutside");
function vi(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ue(e), o = a.useRef(!1);
  return a.useEffect(() => {
    const r = /* @__PURE__ */ re((i) => {
      i.target && !o.current && _o(na, n, { originalEvent: i }, {
        discrete: !1
      });
    }, "handleFocus");
    return t.addEventListener("focusin", r), () => t.removeEventListener("focusin", r);
  }, [t, n]), {
    onFocusCapture: /* @__PURE__ */ re(() => o.current = !0, "onFocusCapture"),
    onBlurCapture: /* @__PURE__ */ re(() => o.current = !1, "onBlurCapture")
  };
}
re(vi, "useFocusOutside");
function oo() {
  const e = new CustomEvent(no);
  document.dispatchEvent(e);
}
re(oo, "dispatchUpdate");
function _o(e, t, n, { discrete: o }) {
  const r = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && r.addEventListener(e, t, { once: !0 }), o ? vn(r, i) : r.dispatchEvent(i);
}
re(_o, "handleAndDispatchCustomEvent");
var ia = Vt, sa = oa, ca = Object.defineProperty, Io = (e, t) => ca(e, "name", { value: t, configurable: !0 }), qt = 0, Ie = null;
function aa(e) {
  return Ht(), e.children;
}
Io(aa, "FocusGuards");
function Ht() {
  a.useEffect(() => {
    Ie || (Ie = { start: ro(), end: ro() });
    const { start: e, end: t } = Ie;
    return document.body.firstElementChild !== e && document.body.insertAdjacentElement("afterbegin", e), document.body.lastElementChild !== t && document.body.insertAdjacentElement("beforeend", t), qt++, () => {
      qt === 1 && (Ie == null || Ie.start.remove(), Ie == null || Ie.end.remove(), Ie = null), qt = Math.max(0, qt - 1);
    };
  }, []);
}
Io(Ht, "useFocusGuards");
function ro() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
Io(ro, "createFocusGuard");
var la = Object.defineProperty, de = (e, t) => la(e, "name", { value: t, configurable: !0 }), Bn = "focusScope.autoFocusOnMount", Vn = "focusScope.autoFocusOnUnmount", wr = { bubbles: !1, cancelable: !0 }, ko = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ de(function(t, n) {
    const {
      loop: o = !1,
      trapped: r = !1,
      onMountAutoFocus: i,
      onUnmountAutoFocus: s,
      ...c
    } = t, [l, u] = a.useState(null), d = ue(i), f = ue(s), p = a.useRef(null), g = W(n, u), w = a.useRef({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }).current;
    a.useEffect(() => {
      if (r) {
        let h = function(C) {
          if (w.paused || !l) return;
          const x = C.target;
          l.contains(x) ? p.current = x : Le(p.current, { select: !0 });
        }, y = function(C) {
          if (w.paused || !l) return;
          const x = C.relatedTarget;
          x !== null && (l.contains(x) || Le(p.current, { select: !0 }));
        }, S = function(C) {
          if (document.activeElement === document.body)
            for (const E of C)
              E.removedNodes.length > 0 && Le(l);
        };
        de(h, "handleFocusIn"), de(y, "handleFocusOut"), de(S, "handleMutations"), document.addEventListener("focusin", h), document.addEventListener("focusout", y);
        const b = new MutationObserver(S);
        return l && b.observe(l, { childList: !0, subtree: !0 }), () => {
          document.removeEventListener("focusin", h), document.removeEventListener("focusout", y), b.disconnect();
        };
      }
    }, [r, l, w.paused]), a.useEffect(() => {
      if (l) {
        br.add(w);
        const h = document.activeElement;
        if (!l.contains(h)) {
          const S = new CustomEvent(Bn, wr);
          l.addEventListener(Bn, d), l.dispatchEvent(S), S.defaultPrevented || (gi(Si(Oo(l)), { select: !0 }), document.activeElement === h && Le(l));
        }
        return () => {
          l.removeEventListener(Bn, d), setTimeout(() => {
            const S = new CustomEvent(Vn, wr);
            l.addEventListener(Vn, f), l.dispatchEvent(S), S.defaultPrevented || Le(h ?? document.body, { select: !0 }), l.removeEventListener(Vn, f), br.remove(w);
          }, 0);
        };
      }
    }, [l, d, f, w]);
    const v = a.useCallback(
      (h) => {
        if (!o && !r || w.paused) return;
        const y = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey, S = document.activeElement;
        if (y && S) {
          const b = h.currentTarget, [C, x] = wi(b);
          C && x ? !h.shiftKey && S === x ? (h.preventDefault(), o && Le(C, { select: !0 })) : h.shiftKey && S === C && (h.preventDefault(), o && Le(x, { select: !0 })) : S === b && h.preventDefault();
        }
      },
      [o, r, w.paused]
    );
    return /* @__PURE__ */ m(B.div, { tabIndex: -1, ...c, ref: g, onKeyDown: v });
  }, "FocusScope")
);
function gi(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const o of e)
    if (Le(o, { select: t }), document.activeElement !== n) return;
}
de(gi, "focusFirst");
function wi(e) {
  const t = Oo(e), n = io(t, e), o = io(t.reverse(), e);
  return [n, o];
}
de(wi, "getTabbableEdges");
function Oo(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: /* @__PURE__ */ de((o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }, "acceptNode")
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
de(Oo, "getTabbableCandidates");
function io(e, t) {
  const n = typeof t.checkVisibility == "function" && t.checkVisibility({ checkVisibilityCSS: !0 });
  for (const o of e)
    if (!(n ? !o.checkVisibility({ checkVisibilityCSS: !0 }) : bi(o, { upTo: t })))
      return o;
}
de(io, "findVisible");
function bi(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
de(bi, "isHidden");
function yi(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
de(yi, "isSelectableInput");
function Le(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && yi(e) && t && e.select();
  }
}
de(Le, "focus");
var br = Ci();
function Ci() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = so(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = so(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
de(Ci, "createFocusScopesStack");
function so(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
de(so, "arrayRemove");
function Si(e) {
  return e.filter((t) => t.tagName !== "A");
}
de(Si, "removeLinks");
var oe = globalThis != null && globalThis.document ? a.useLayoutEffect : () => {
}, ua = Object.defineProperty, da = (e, t) => ua(e, "name", { value: t, configurable: !0 }), fa = a[" useId ".trim().toString()] || (() => {
}), pa = 0;
function ye(e) {
  const [t, n] = a.useState(fa());
  return oe(() => {
    e || n((o) => o ?? String(pa++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
da(ye, "useId");
const ma = ["top", "right", "bottom", "left"], Xe = Math.min, Fe = Math.max, dn = Math.round, Zt = Math.floor, Be = (e) => ({
  x: e,
  y: e
}), ha = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function xi(e, t, n) {
  return Fe(e, Xe(t, n));
}
function We(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function qe(e) {
  return e.split("-")[0];
}
function xt(e) {
  return e.split("-")[1];
}
function Mo(e) {
  return e === "x" ? "y" : "x";
}
function Do(e) {
  return e === "y" ? "height" : "width";
}
function Me(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function Ao(e) {
  return Mo(Me(e));
}
function va(e, t, n) {
  n === void 0 && (n = !1);
  const o = xt(e), r = Ao(e), i = Do(r);
  let s = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = fn(s)), [s, fn(s)];
}
function ga(e) {
  const t = fn(e);
  return [co(e), t, co(t)];
}
function co(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const yr = ["left", "right"], Cr = ["right", "left"], wa = ["top", "bottom"], ba = ["bottom", "top"];
function ya(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Cr : yr : t ? yr : Cr;
    case "left":
    case "right":
      return t ? wa : ba;
    default:
      return [];
  }
}
function Ca(e, t, n, o) {
  const r = xt(e);
  let i = ya(qe(e), n === "start", o);
  return r && (i = i.map((s) => s + "-" + r), t && (i = i.concat(i.map(co)))), i;
}
function fn(e) {
  const t = qe(e);
  return ha[t] + e.slice(t.length);
}
function Sa(e) {
  var t, n, o, r;
  return {
    top: (t = e.top) != null ? t : 0,
    right: (n = e.right) != null ? n : 0,
    bottom: (o = e.bottom) != null ? o : 0,
    left: (r = e.left) != null ? r : 0
  };
}
function Ei(e) {
  return typeof e != "number" ? Sa(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function pn(e) {
  const {
    x: t,
    y: n,
    width: o,
    height: r
  } = e;
  return {
    width: o,
    height: r,
    top: n,
    left: t,
    right: t + o,
    bottom: n + r,
    x: t,
    y: n
  };
}
function Sr(e, t, n) {
  let {
    reference: o,
    floating: r
  } = e;
  const i = Me(t), s = Ao(t), c = Do(s), l = qe(t), u = i === "y", d = o.x + o.width / 2 - r.width / 2, f = o.y + o.height / 2 - r.height / 2, p = o[c] / 2 - r[c] / 2;
  let g;
  switch (l) {
    case "top":
      g = {
        x: d,
        y: o.y - r.height
      };
      break;
    case "bottom":
      g = {
        x: d,
        y: o.y + o.height
      };
      break;
    case "right":
      g = {
        x: o.x + o.width,
        y: f
      };
      break;
    case "left":
      g = {
        x: o.x - r.width,
        y: f
      };
      break;
    default:
      g = {
        x: o.x,
        y: o.y
      };
  }
  const w = xt(t);
  return w && (g[s] += p * (w === "end" ? 1 : -1) * (n && u ? -1 : 1)), g;
}
async function xa(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: o,
    y: r,
    platform: i,
    rects: s,
    elements: c,
    strategy: l
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: f = "floating",
    altBoundary: p = !1,
    padding: g = 0
  } = We(t, e), w = Ei(g), h = c[p ? f === "floating" ? "reference" : "floating" : f], y = pn(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(h))) == null || n ? h : h.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(c.floating)),
    boundary: u,
    rootBoundary: d,
    strategy: l
  })), S = f === "floating" ? {
    x: o,
    y: r,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, b = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c.floating)), C = await (i.isElement == null ? void 0 : i.isElement(b)) && await (i.getScale == null ? void 0 : i.getScale(b)) || {
    x: 1,
    y: 1
  }, x = pn(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: S,
    offsetParent: b,
    strategy: l
  }) : S);
  return {
    top: (y.top - x.top + w.top) / C.y,
    bottom: (x.bottom - y.bottom + w.bottom) / C.y,
    left: (y.left - x.left + w.left) / C.x,
    right: (x.right - y.right + w.right) / C.x
  };
}
const Ea = 50, Ta = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: r = "absolute",
    middleware: i = [],
    platform: s
  } = n, c = s.detectOverflow ? s : {
    ...s,
    detectOverflow: xa
  }, l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let u = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: r
  }), {
    x: d,
    y: f
  } = Sr(u, o, l), p = o, g = 0;
  const w = {};
  for (let v = 0; v < i.length; v++) {
    const h = i[v];
    if (!h)
      continue;
    const {
      name: y,
      fn: S
    } = h, {
      x: b,
      y: C,
      data: x,
      reset: E
    } = await S({
      x: d,
      y: f,
      initialPlacement: o,
      placement: p,
      strategy: r,
      middlewareData: w,
      rects: u,
      platform: c,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = b ?? d, f = C ?? f, w[y] = {
      ...w[y],
      ...x
    }, E && g < Ea && (g++, typeof E == "object" && (E.placement && (p = E.placement), E.rects && (u = E.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: r
    }) : E.rects), {
      x: d,
      y: f
    } = Sr(u, p, l)), v = -1);
  }
  return {
    x: d,
    y: f,
    placement: p,
    strategy: r,
    middlewareData: w
  };
}, Pa = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: o,
      placement: r,
      rects: i,
      platform: s,
      elements: c,
      middlewareData: l
    } = t, {
      element: u,
      padding: d = 0
    } = We(e, t) || {};
    if (u == null)
      return {};
    const f = Ei(d), p = {
      x: n,
      y: o
    }, g = Ao(r), w = Do(g), v = await s.getDimensions(u), h = g === "y", y = h ? "top" : "left", S = h ? "bottom" : "right", b = h ? "clientHeight" : "clientWidth", C = i.reference[w] + i.reference[g] - p[g] - i.floating[w], x = p[g] - i.reference[g], E = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let T = E ? E[b] : 0;
    (!T || !await (s.isElement == null ? void 0 : s.isElement(E))) && (T = c.floating[b] || i.floating[w]);
    const _ = C / 2 - x / 2, R = T / 2 - v[w] / 2 - 1, O = Xe(f[y], R), $ = Xe(f[S], R), M = T - v[w] - $, D = T / 2 - v[w] / 2 + _, L = xi(O, D, M), H = !l.arrow && xt(r) != null && D !== L && i.reference[w] / 2 - (D < O ? O : $) - v[w] / 2 < 0, P = H ? D < O ? D - O : D - M : 0;
    return {
      [g]: p[g] + P,
      data: {
        [g]: L,
        centerOffset: D - L - P,
        ...H && {
          alignmentOffset: P
        }
      },
      reset: H
    };
  }
}), Ra = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: r,
        middlewareData: i,
        rects: s,
        initialPlacement: c,
        platform: l,
        elements: u
      } = t, {
        mainAxis: d = !0,
        crossAxis: f = !0,
        fallbackPlacements: p,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: w = "none",
        flipAlignment: v = !0,
        ...h
      } = We(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const y = qe(r), S = Me(c), b = qe(c) === c, C = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), x = p || (b || !v ? [fn(c)] : ga(c)), E = w !== "none";
      !p && E && x.push(...Ca(c, v, w, C));
      const T = [c, ...x], _ = await l.detectOverflow(t, h), R = [];
      let O = ((o = i.flip) == null ? void 0 : o.overflows) || [];
      if (d && R.push(_[y]), f) {
        const L = va(r, s, C);
        R.push(_[L[0]], _[L[1]]);
      }
      if (O = [...O, {
        placement: r,
        overflows: R
      }], !R.every((L) => L <= 0)) {
        var $, M;
        const L = ((($ = i.flip) == null ? void 0 : $.index) || 0) + 1, H = T[L];
        if (H && (!(f === "alignment" ? S !== Me(H) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        O.every((N) => Me(N.placement) === S ? N.overflows[0] > 0 : !0)))
          return {
            data: {
              index: L,
              overflows: O
            },
            reset: {
              placement: H
            }
          };
        let P = (M = O.filter((A) => A.overflows[0] <= 0).sort((A, N) => A.overflows[1] - N.overflows[1])[0]) == null ? void 0 : M.placement;
        if (!P)
          switch (g) {
            case "bestFit": {
              var D;
              const A = (D = O.filter((N) => {
                if (E) {
                  const V = Me(N.placement);
                  return V === S || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  V === "y";
                }
                return !0;
              }).map((N) => [N.placement, N.overflows.filter((V) => V > 0).reduce((V, I) => V + I, 0)]).sort((N, V) => N[1] - V[1])[0]) == null ? void 0 : D[0];
              A && (P = A);
              break;
            }
            case "initialPlacement":
              P = c;
              break;
          }
        if (r !== P)
          return {
            reset: {
              placement: P
            }
          };
      }
      return {};
    }
  };
};
function xr(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Er(e) {
  return ma.some((t) => e[t] >= 0);
}
const _a = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n,
        platform: o
      } = t, {
        strategy: r = "referenceHidden",
        ...i
      } = We(e, t);
      switch (r) {
        case "referenceHidden": {
          const s = await o.detectOverflow(t, {
            ...i,
            elementContext: "reference"
          }), c = xr(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: c,
              referenceHidden: Er(c)
            }
          };
        }
        case "escaped": {
          const s = await o.detectOverflow(t, {
            ...i,
            altBoundary: !0
          }), c = xr(s, n.floating);
          return {
            data: {
              escapedOffsets: c,
              escaped: Er(c)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Ti = /* @__PURE__ */ new Set(["left", "top"]);
async function Ia(e, t) {
  const {
    placement: n,
    platform: o,
    elements: r
  } = e, i = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), s = qe(n), c = xt(n), l = Me(n) === "y", u = Ti.has(s) ? -1 : 1, d = i && l ? -1 : 1, f = We(t, e);
  let {
    mainAxis: p,
    crossAxis: g,
    alignmentAxis: w
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return c && typeof w == "number" && (g = c === "end" ? w * -1 : w), l ? {
    x: g * d,
    y: p * u
  } : {
    x: p * u,
    y: g * d
  };
}
const ka = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, o;
      const {
        x: r,
        y: i,
        placement: s,
        middlewareData: c
      } = t, l = await Ia(t, e);
      return s === ((n = c.offset) == null ? void 0 : n.placement) && (o = c.arrow) != null && o.alignmentOffset ? {} : {
        x: r + l.x,
        y: i + l.y,
        data: {
          ...l,
          placement: s
        }
      };
    }
  };
}, Oa = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o,
        placement: r,
        platform: i
      } = t, {
        mainAxis: s = !0,
        crossAxis: c = !1,
        limiter: l = {
          fn: (S) => {
            let {
              x: b,
              y: C
            } = S;
            return {
              x: b,
              y: C
            };
          }
        },
        ...u
      } = We(e, t), d = {
        x: n,
        y: o
      }, f = await i.detectOverflow(t, u), p = Me(r), g = Mo(p);
      let w = d[g], v = d[p];
      const h = (S, b) => xi(b + f[S === "y" ? "top" : "left"], b, b - f[S === "y" ? "bottom" : "right"]);
      s && (w = h(g, w)), c && (v = h(p, v));
      const y = l.fn({
        ...t,
        [g]: w,
        [p]: v
      });
      return {
        ...y,
        data: {
          x: y.x - n,
          y: y.y - o,
          enabled: {
            [g]: s,
            [p]: c
          }
        }
      };
    }
  };
}, Ma = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      var n, o;
      const {
        x: r,
        y: i,
        placement: s,
        rects: c,
        middlewareData: l
      } = t, {
        offset: u = 0,
        mainAxis: d = !0,
        crossAxis: f = !0
      } = We(e, t), p = {
        x: r,
        y: i
      }, g = Me(s), w = Mo(g);
      let v = p[w], h = p[g];
      const y = We(u, t), S = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0
      } : {
        mainAxis: (n = y.mainAxis) != null ? n : 0,
        crossAxis: (o = y.crossAxis) != null ? o : 0
      };
      if (d) {
        const x = w === "y" ? "height" : "width", E = c.reference[w] - c.floating[x] + S.mainAxis, T = c.reference[w] + c.reference[x] - S.mainAxis;
        v < E ? v = E : v > T && (v = T);
      }
      if (f) {
        var b, C;
        const x = w === "y" ? "width" : "height", E = Ti.has(qe(s)), T = c.reference[g] - c.floating[x] + (E && ((b = l.offset) == null ? void 0 : b[g]) || 0) + (E ? 0 : S.crossAxis), _ = c.reference[g] + c.reference[x] + (E ? 0 : ((C = l.offset) == null ? void 0 : C[g]) || 0) - (E ? S.crossAxis : 0);
        h < T ? h = T : h > _ && (h = _);
      }
      return {
        [w]: v,
        [g]: h
      };
    }
  };
}, Da = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: n,
        rects: o,
        platform: r,
        elements: i
      } = t, {
        apply: s = () => {
        },
        ...c
      } = We(e, t), l = await r.detectOverflow(t, c), u = qe(n), d = xt(n), f = Me(n) === "y", {
        width: p,
        height: g
      } = o.floating;
      let w, v;
      u === "top" || u === "bottom" ? (w = u, v = d === (await (r.isRTL == null ? void 0 : r.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (v = u, w = d === "end" ? "top" : "bottom");
      const h = g - l.top - l.bottom, y = p - l.left - l.right, S = Xe(g - l[w], h), b = Xe(p - l[v], y), C = t.middlewareData.shift, x = !C;
      let E = S, T = b;
      C != null && C.enabled.x && (T = y), C != null && C.enabled.y && (E = h), x && !d && (f ? T = p - 2 * Fe(l.left, l.right) : E = g - 2 * Fe(l.top, l.bottom)), await s({
        ...t,
        availableWidth: T,
        availableHeight: E
      });
      const _ = await r.getDimensions(i.floating);
      return p !== _.width || g !== _.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function gn() {
  return typeof window < "u";
}
function Et(e) {
  return Pi(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function fe(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ge(e) {
  var t;
  return (t = (Pi(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Pi(e) {
  return gn() ? e instanceof Node || e instanceof fe(e).Node : !1;
}
function Ae(e) {
  return gn() ? e instanceof Element || e instanceof fe(e).Element : !1;
}
function Je(e) {
  return gn() ? e instanceof HTMLElement || e instanceof fe(e).HTMLElement : !1;
}
function Tr(e) {
  return !gn() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof fe(e).ShadowRoot;
}
function wn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: r
  } = Ne(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && r !== "inline" && r !== "contents";
}
function Aa(e) {
  return /^(table|td|th)$/.test(Et(e));
}
function bn(e) {
  try {
    if (e.matches(":popover-open"))
      return !0;
  } catch {
  }
  try {
    return e.matches(":modal");
  } catch {
    return !1;
  }
}
const Na = /transform|translate|scale|rotate|perspective|filter/, La = /paint|layout|strict|content/, tt = (e) => !!e && e !== "none";
let Hn;
function No(e) {
  const t = Ae(e) ? Ne(e) : e;
  return tt(t.transform) || tt(t.translate) || tt(t.scale) || tt(t.rotate) || tt(t.perspective) || !Lo() && (tt(t.backdropFilter) || tt(t.filter)) || Na.test(t.willChange || "") || La.test(t.contain || "");
}
function $a(e) {
  let t = nt(e);
  for (; Je(t) && !At(t); ) {
    if (No(t))
      return t;
    if (bn(t))
      return null;
    t = nt(t);
  }
  return null;
}
function Lo() {
  return Hn == null && (Hn = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), Hn;
}
function At(e) {
  return /^(html|body|#document)$/.test(Et(e));
}
function Ne(e) {
  return fe(e).getComputedStyle(e);
}
function yn(e) {
  return Ae(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function nt(e) {
  if (Et(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Tr(e) && e.host || // Fallback.
    Ge(e)
  );
  return Tr(t) ? t.host : t;
}
function Ri(e) {
  const t = nt(e);
  return At(t) ? (e.ownerDocument || e).body : Je(t) && wn(t) ? t : Ri(t);
}
function Nt(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const r = Ri(e), i = r === ((o = e.ownerDocument) == null ? void 0 : o.body), s = fe(r);
  if (i) {
    const c = ao(s);
    return t.concat(s, s.visualViewport || [], wn(r) ? r : [], c && n ? Nt(c) : []);
  } else
    return t.concat(r, Nt(r, [], n));
}
function ao(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function _i(e) {
  const t = Ne(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const r = Je(e), i = r ? e.offsetWidth : n, s = r ? e.offsetHeight : o, c = dn(n) !== i || dn(o) !== s;
  return c && (n = i, o = s), {
    width: n,
    height: o,
    $: c
  };
}
function $o(e) {
  return Ae(e) ? e : e.contextElement;
}
function gt(e) {
  const t = $o(e);
  if (!Je(t))
    return Be(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: r,
    $: i
  } = _i(t);
  let s = (i ? dn(n.width) : n.width) / o, c = (i ? dn(n.height) : n.height) / r;
  return (!s || !Number.isFinite(s)) && (s = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: s,
    y: c
  };
}
const Fa = /* @__PURE__ */ Be(0);
function Ii(e) {
  const t = fe(e);
  return !Lo() || !t.visualViewport ? Fa : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Ba(e, t, n) {
  return t === void 0 && (t = !1), !!n && t && n === fe(e);
}
function ot(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), i = $o(e);
  let s = Be(1);
  t && (o ? Ae(o) && (s = gt(o)) : s = gt(e));
  const c = Ba(i, n, o) ? Ii(i) : Be(0);
  let l = (r.left + c.x) / s.x, u = (r.top + c.y) / s.y, d = r.width / s.x, f = r.height / s.y;
  if (i && o) {
    const p = fe(i), g = Ae(o) ? fe(o) : o;
    let w = p, v = ao(w);
    for (; v && g !== w; ) {
      const h = gt(v), y = v.getBoundingClientRect(), S = Ne(v), b = y.left + (v.clientLeft + parseFloat(S.paddingLeft)) * h.x, C = y.top + (v.clientTop + parseFloat(S.paddingTop)) * h.y;
      l *= h.x, u *= h.y, d *= h.x, f *= h.y, l += b, u += C, w = fe(v), v = ao(w);
    }
  }
  return pn({
    width: d,
    height: f,
    x: l,
    y: u
  });
}
function Cn(e, t) {
  const n = yn(e).scrollLeft;
  return t ? t.left + n : ot(Ge(e)).left + n;
}
function ki(e, t) {
  const n = e.getBoundingClientRect(), o = n.left + t.scrollLeft - Cn(e, n), r = n.top + t.scrollTop;
  return {
    x: o,
    y: r
  };
}
function Va(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: r
  } = e;
  const i = r === "fixed", s = Ge(o), c = t ? bn(t.floating) : !1;
  if (o === s || c && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Be(1);
  const d = Be(0), f = Je(o);
  if ((f || !i) && ((Et(o) !== "body" || wn(s)) && (l = yn(o)), f)) {
    const g = ot(o);
    u = gt(o), d.x = g.x + o.clientLeft, d.y = g.y + o.clientTop;
  }
  const p = s && !f && !i ? ki(s, l) : Be(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + d.x + p.x,
    y: n.y * u.y - l.scrollTop * u.y + d.y + p.y
  };
}
function Ha(e) {
  return e.getClientRects ? Array.from(e.getClientRects()) : [];
}
function Wa(e) {
  const t = yn(e), n = e.ownerDocument.body, o = Fe(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), r = Fe(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight);
  let i = -t.scrollLeft + Cn(e);
  const s = -t.scrollTop;
  return Ne(n).direction === "rtl" && (i += Fe(e.clientWidth, n.clientWidth) - o), {
    width: o,
    height: r,
    x: i,
    y: s
  };
}
const Ua = 25;
function ja(e, t, n) {
  n === void 0 && (n = "viewport");
  const o = n === "layoutViewport", r = fe(e), i = Ge(e), s = r.visualViewport;
  let c = i.clientWidth, l = i.clientHeight, u = 0, d = 0;
  if (s) {
    const p = !Lo() || t === "fixed";
    o ? p || (u = -s.offsetLeft, d = -s.offsetTop) : (c = s.width, l = s.height, p && (u = s.offsetLeft, d = s.offsetTop));
  }
  if (Cn(i) <= 0) {
    const p = i.ownerDocument, g = p.body, w = getComputedStyle(g), v = p.compatMode === "CSS1Compat" && parseFloat(w.marginLeft) + parseFloat(w.marginRight) || 0, h = Math.abs(i.clientWidth - g.clientWidth - v), y = getComputedStyle(i).scrollbarGutter === "stable both-edges" ? h / 2 : h;
    y <= Ua && (c -= y);
  }
  return {
    width: c,
    height: l,
    x: u,
    y: d
  };
}
function Ka(e, t) {
  const n = ot(e, !0, t === "fixed"), o = n.top + e.clientTop, r = n.left + e.clientLeft, i = gt(e), s = e.clientWidth * i.x, c = e.clientHeight * i.y, l = r * i.x, u = o * i.y;
  return {
    width: s,
    height: c,
    x: l,
    y: u
  };
}
function Pr(e, t, n) {
  let o;
  if (t === "viewport" || t === "layoutViewport")
    o = ja(e, n, t);
  else if (t === "document")
    o = Wa(Ge(e));
  else if (Ae(t))
    o = Ka(t, n);
  else {
    const r = Ii(e);
    o = {
      x: t.x - r.x,
      y: t.y - r.y,
      width: t.width,
      height: t.height
    };
  }
  return pn(o);
}
function Ga(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = Nt(e, [], !1).filter((c) => Ae(c) && Et(c) !== "body"), r = null;
  const i = Ne(e).position === "fixed";
  let s = i ? nt(e) : e;
  for (; Ae(s) && !At(s); ) {
    const c = Ne(s), l = No(s), u = r ? r.position : i ? "fixed" : "";
    !l && (u === "fixed" || u === "absolute" && c.position === "static") ? o = o.filter((f) => f !== s) : r = c, s = nt(s);
  }
  return t.set(e, o), o;
}
function za(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: r
  } = e;
  const s = [...n === "clippingAncestors" ? bn(t) ? [] : Ga(t, this._c) : [].concat(n), o], c = Pr(t, s[0], r);
  let l = c.top, u = c.right, d = c.bottom, f = c.left;
  for (let p = 1; p < s.length; p++) {
    const g = Pr(t, s[p], r);
    l = Fe(g.top, l), u = Xe(g.right, u), d = Xe(g.bottom, d), f = Fe(g.left, f);
  }
  return {
    width: u - f,
    height: d - l,
    x: f,
    y: l
  };
}
function Ya(e) {
  const {
    width: t,
    height: n
  } = _i(e);
  return {
    width: t,
    height: n
  };
}
function Xa(e, t, n) {
  const o = Je(t), r = Ge(t), i = n === "fixed", s = ot(e, !0, i, t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Be(0);
  if ((o || !i) && ((Et(t) !== "body" || wn(r)) && (c = yn(t)), o)) {
    const p = ot(t, !0, i, t);
    l.x = p.x + t.clientLeft, l.y = p.y + t.clientTop;
  }
  !o && r && (l.x = Cn(r));
  const u = r && !o && !i ? ki(r, c) : Be(0), d = s.left + c.scrollLeft - l.x - u.x, f = s.top + c.scrollTop - l.y - u.y;
  return {
    x: d,
    y: f,
    width: s.width,
    height: s.height
  };
}
function Wn(e) {
  return Ne(e).position === "static";
}
function Rr(e, t) {
  if (!Je(e) || Ne(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Ge(e) === n && (n = n.ownerDocument.body), n;
}
function Oi(e, t) {
  const n = fe(e);
  if (bn(e))
    return n;
  if (!Je(e)) {
    let r = nt(e);
    for (; r && !At(r); ) {
      if (Ae(r) && !Wn(r))
        return r;
      r = nt(r);
    }
    return n;
  }
  let o = Rr(e, t);
  for (; o && Aa(o) && Wn(o); )
    o = Rr(o, t);
  return o && At(o) && Wn(o) && !No(o) ? n : o || $a(e) || n;
}
const qa = async function(e) {
  const t = this.getOffsetParent || Oi, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: Xa(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function Za(e) {
  return Ne(e).direction === "rtl";
}
const Ja = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Va,
  getDocumentElement: Ge,
  getClippingRect: za,
  getOffsetParent: Oi,
  getElementRects: qa,
  getClientRects: Ha,
  getDimensions: Ya,
  getScale: gt,
  isElement: Ae,
  isRTL: Za
};
function Mi(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Qa(e, t, n) {
  let o = null, r;
  const i = Ge(e);
  function s() {
    var d;
    clearTimeout(r), (d = o) == null || d.disconnect(), o = null;
  }
  function c(d, f) {
    d === void 0 && (d = !1), f === void 0 && (f = 1), s();
    const p = e.getBoundingClientRect(), {
      left: g,
      top: w,
      width: v,
      height: h
    } = p;
    if (d || t(), !v || !h)
      return;
    const y = Zt(w), S = Zt(i.clientWidth - (g + v)), b = Zt(i.clientHeight - (w + h)), C = Zt(g), E = {
      rootMargin: -y + "px " + -S + "px " + -b + "px " + -C + "px",
      threshold: Fe(0, Xe(1, f)) || 1
    };
    let T = !0;
    function _(R) {
      const O = R[0].intersectionRatio;
      if (!Mi(p, e.getBoundingClientRect()))
        return c();
      if (O !== f) {
        if (!T)
          return c();
        O ? c(!1, O) : r = setTimeout(() => {
          c(!1, 1e-7);
        }, 1e3);
      }
      T = !1;
    }
    try {
      o = new IntersectionObserver(_, {
        ...E,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      o = new IntersectionObserver(_, E);
    }
    o.observe(e);
  }
  const l = fe(e), u = () => c(n);
  return l.addEventListener("resize", u), c(!0), () => {
    l.removeEventListener("resize", u), s();
  };
}
function el(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = o, u = $o(e), d = r || i ? [...u ? Nt(u) : [], ...t ? Nt(t) : []] : [];
  d.forEach((y) => {
    r && y.addEventListener("scroll", n), i && y.addEventListener("resize", n);
  });
  const f = u && c ? Qa(u, n, i) : null;
  let p = -1, g = null;
  s && (g = new ResizeObserver((y) => {
    let [S] = y;
    S && S.target === u && g && t && (g.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var b;
      (b = g) == null || b.observe(t);
    })), n();
  }), u && !l && g.observe(u), t && g.observe(t));
  let w, v = l ? ot(e) : null;
  l && h();
  function h() {
    const y = ot(e);
    v && !Mi(v, y) && n(), v = y, w = requestAnimationFrame(h);
  }
  return n(), () => {
    var y;
    d.forEach((S) => {
      r && S.removeEventListener("scroll", n), i && S.removeEventListener("resize", n);
    }), f == null || f(), (y = g) == null || y.disconnect(), g = null, l && cancelAnimationFrame(w);
  };
}
const tl = ka, nl = Oa, ol = Ra, rl = Da, il = _a, _r = Pa, sl = Ma, cl = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), r = n ?? {}, i = {
    ...Ja,
    ...r.platform,
    _c: o
  };
  return Ta(e, t, {
    ...r,
    platform: i
  });
};
var al = typeof document < "u", ll = function() {
}, sn = al ? cc : ll;
function mn(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, o, r;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (o = n; o-- !== 0; )
        if (!mn(e[o], t[o]))
          return !1;
      return !0;
    }
    if (r = Object.keys(e), n = r.length, n !== Object.keys(t).length)
      return !1;
    for (o = n; o-- !== 0; )
      if (!{}.hasOwnProperty.call(t, r[o]))
        return !1;
    for (o = n; o-- !== 0; ) {
      const i = r[o];
      if (!(i === "_owner" && e.$$typeof) && !mn(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Di(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ir(e, t) {
  const n = Di(e);
  return Math.round(t * n) / n;
}
function Un(e) {
  const t = a.useRef(e);
  return sn(() => {
    t.current = e;
  }), t;
}
function ul(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: o = [],
    platform: r,
    elements: {
      reference: i,
      floating: s
    } = {},
    transform: c = !0,
    whileElementsMounted: l,
    open: u
  } = e, [d, f] = a.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [p, g] = a.useState(o);
  mn(p, o) || g(o);
  const [w, v] = a.useState(null), [h, y] = a.useState(null), S = a.useCallback((N) => {
    N !== E.current && (E.current = N, v(N));
  }, []), b = a.useCallback((N) => {
    N !== T.current && (T.current = N, y(N));
  }, []), C = i || w, x = s || h, E = a.useRef(null), T = a.useRef(null), _ = a.useRef(d), R = l != null, O = Un(l), $ = Un(r), M = Un(u), D = a.useCallback(() => {
    if (!E.current || !T.current)
      return;
    const N = {
      placement: t,
      strategy: n,
      middleware: p
    };
    $.current && (N.platform = $.current), cl(E.current, T.current, N).then((V) => {
      const I = {
        ...V,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: M.current !== !1
      };
      L.current && !mn(_.current, I) && (_.current = I, Ct.flushSync(() => {
        f(I);
      }));
    });
  }, [p, t, n, $, M]);
  sn(() => {
    u === !1 && _.current.isPositioned && (_.current.isPositioned = !1, f((N) => ({
      ...N,
      isPositioned: !1
    })));
  }, [u]);
  const L = a.useRef(!1);
  sn(() => (L.current = !0, () => {
    L.current = !1;
  }), []), sn(() => {
    if (C && (E.current = C), x && (T.current = x), C && x) {
      if (O.current)
        return O.current(C, x, D);
      D();
    }
  }, [C, x, D, O, R]);
  const H = a.useMemo(() => ({
    reference: E,
    floating: T,
    setReference: S,
    setFloating: b
  }), [S, b]), P = a.useMemo(() => ({
    reference: C,
    floating: x
  }), [C, x]), A = a.useMemo(() => {
    const N = {
      position: n,
      left: 0,
      top: 0
    };
    if (!P.floating)
      return N;
    const V = Ir(P.floating, d.x), I = Ir(P.floating, d.y);
    return c ? {
      ...N,
      transform: "translate(" + V + "px, " + I + "px)",
      ...Di(P.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: V,
      top: I
    };
  }, [n, c, P.floating, d.x, d.y]);
  return a.useMemo(() => ({
    ...d,
    update: D,
    refs: H,
    elements: P,
    floatingStyles: A
  }), [d, D, H, P, A]);
}
const dl = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: o,
        padding: r
      } = typeof e == "function" ? e(n) : e;
      return o && t(o) ? o.current != null ? _r({
        element: o.current,
        padding: r
      }).fn(n) : {} : o ? _r({
        element: o,
        padding: r
      }).fn(n) : {};
    }
  };
}, fl = (e, t) => {
  const n = tl(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, pl = (e, t) => {
  const n = nl(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, ml = (e, t) => ({
  fn: sl(e).fn,
  options: [e, t]
}), hl = (e, t) => {
  const n = ol(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, vl = (e, t) => {
  const n = rl(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, gl = (e, t) => {
  const n = il(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, wl = (e, t) => {
  const n = dl(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
};
var bl = Object.defineProperty, yl = (e, t) => bl(e, "name", { value: t, configurable: !0 }), Cl = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ yl(function(t, n) {
    const { children: o, width: r = 10, height: i = 5, ...s } = t;
    return /* @__PURE__ */ m(
      B.svg,
      {
        ...s,
        ref: n,
        width: r,
        height: i,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: t.asChild ? o : /* @__PURE__ */ m("polygon", { points: "0,0 30,0 15,10" })
      }
    );
  }, "Arrow")
), Sl = Cl, xl = Object.defineProperty, El = (e, t) => xl(e, "name", { value: t, configurable: !0 });
function Sn(e) {
  const [t, n] = a.useState(void 0);
  return oe(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const o = new ResizeObserver((r) => {
        if (!Array.isArray(r) || !r.length)
          return;
        const i = r[0];
        let s, c;
        if ("borderBoxSize" in i) {
          const l = i.borderBoxSize, u = Array.isArray(l) ? l[0] : l;
          s = u.inlineSize, c = u.blockSize;
        } else
          s = e.offsetWidth, c = e.offsetHeight;
        n({ width: s, height: c });
      });
      return o.observe(e, { box: "border-box" }), () => o.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
El(Sn, "useSize");
var Tl = Object.defineProperty, Ve = (e, t) => Tl(e, "name", { value: t, configurable: !0 }), Ai = "Popper", [Ni, Tt] = /* @__PURE__ */ pe(Ai), [Pl, Li] = Ni(Ai), Rl = /* @__PURE__ */ Ve((e) => {
  const { __scopePopper: t, children: n } = e, [o, r] = a.useState(null), [i, s] = a.useState(void 0);
  return /* @__PURE__ */ m(
    Pl,
    {
      scope: t,
      anchor: o,
      onAnchorChange: r,
      placementState: i,
      setPlacementState: s,
      children: n
    }
  );
}, "Popper"), _l = "PopperAnchor", Il = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ Ve(function(t, n) {
    const { __scopePopper: o, virtualRef: r, ...i } = t, s = Li(_l, o), c = a.useRef(null), l = s.onAnchorChange, u = a.useCallback(
      (v) => {
        c.current = v, v && l(v);
      },
      [l]
    ), d = W(n, u), f = a.useRef(null);
    a.useEffect(() => {
      if (!r)
        return;
      const v = f.current;
      f.current = r.current, v !== f.current && l(f.current);
    });
    const p = s.placementState && xn(s.placementState), g = p == null ? void 0 : p[0], w = p == null ? void 0 : p[1];
    return r ? null : /* @__PURE__ */ m(
      B.div,
      {
        "data-radix-popper-side": g,
        "data-radix-popper-align": w,
        ...i,
        ref: d
      }
    );
  }, "PopperAnchor")
), $i = "PopperContent", [kl, Ol] = Ni($i), Ml = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ Ve(function(t, n) {
    var X, ee, z, j, q, Re, _e;
    const {
      __scopePopper: o,
      side: r = "bottom",
      sideOffset: i = 0,
      align: s = "center",
      alignOffset: c = 0,
      arrowPadding: l = 0,
      avoidCollisions: u = !0,
      collisionBoundary: d = [],
      collisionPadding: f = 0,
      sticky: p = "partial",
      hideWhenDetached: g = !1,
      updatePositionStrategy: w = "optimized",
      onPlaced: v,
      ...h
    } = t, y = Li($i, o), [S, b] = a.useState(null), C = W(n, b), [x, E] = a.useState(null), T = Sn(x), _ = (T == null ? void 0 : T.width) ?? 0, R = (T == null ? void 0 : T.height) ?? 0, O = r + (s !== "center" ? "-" + s : ""), $ = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, M = Array.isArray(d) ? d : [d], D = M.length > 0, L = {
      padding: $,
      boundary: M.filter(Fi),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: D
    }, { refs: H, floatingStyles: P, placement: A, isPositioned: N, middlewareData: V } = ul({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: O,
      whileElementsMounted: /* @__PURE__ */ Ve((...et) => el(...et, {
        animationFrame: w === "always"
      }), "whileElementsMounted"),
      elements: {
        reference: y.anchor
      },
      middleware: [
        fl({ mainAxis: i + R, alignmentAxis: c }),
        u && pl({
          mainAxis: !0,
          crossAxis: !1,
          limiter: p === "partial" ? ml() : void 0,
          ...L
        }),
        u && hl({ ...L }),
        vl({
          ...L,
          apply: /* @__PURE__ */ Ve(({ elements: et, rects: ut, availableWidth: Rt, availableHeight: rc }) => {
            const { width: ic, height: sc } = ut.reference, zt = et.floating.style;
            zt.setProperty("--radix-popper-available-width", `${Rt}px`), zt.setProperty("--radix-popper-available-height", `${rc}px`), zt.setProperty("--radix-popper-anchor-width", `${ic}px`), zt.setProperty("--radix-popper-anchor-height", `${sc}px`);
          }, "apply")
        }),
        x && wl({ element: x, padding: l }),
        Ll({ arrowWidth: _, arrowHeight: R }),
        g && gl({
          strategy: "referenceHidden",
          ...L,
          // `hide` detects whether the anchor (reference) is clipped, so when
          // no explicit `collisionBoundary` is set we fall back to Floating
          // UI's default clipping ancestors (e.g. a scrollable menu). This
          // lets an occluded submenu hide once its anchor scrolls out of view
          // (#3237). The collision/size middlewares deliberately keep the
          // viewport-based default to avoid clamping content rendered inside
          // transformed or overflow-clipping portal containers.
          boundary: D ? L.boundary : void 0
        })
      ]
    }), I = y.setPlacementState;
    oe(() => (I(A), () => {
      I(void 0);
    }), [A, I]);
    const [Z, G] = xn(A), Q = ue(v);
    oe(() => {
      N && (Q == null || Q());
    }, [N, Q]);
    const ae = (X = V.arrow) == null ? void 0 : X.x, ce = (ee = V.arrow) == null ? void 0 : ee.y, ge = ((z = V.arrow) == null ? void 0 : z.centerOffset) !== 0, [me, F] = a.useState();
    return oe(() => {
      S && F(window.getComputedStyle(S).zIndex);
    }, [S]), /* @__PURE__ */ m(
      "div",
      {
        ref: H.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...P,
          transform: N ? P.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: me,
          "--radix-popper-transform-origin": [
            (j = V.transformOrigin) == null ? void 0 : j.x,
            (q = V.transformOrigin) == null ? void 0 : q.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((Re = V.hide) == null ? void 0 : Re.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: t.dir,
        children: /* @__PURE__ */ m(
          kl,
          {
            scope: o,
            placedSide: Z,
            placedAlign: G,
            onArrowChange: E,
            arrowX: ae,
            arrowY: ce,
            shouldHideArrow: ge,
            children: /* @__PURE__ */ m(
              B.div,
              {
                "data-side": Z,
                "data-align": G,
                ...h,
                ref: C,
                style: {
                  ...h.style,
                  // if the PopperContent hasn't been placed yet (not all
                  // measurements done) we prevent animations so that users'
                  // animations don't kick in too early from the wrong sides.
                  animation: N ? (_e = h.style) == null ? void 0 : _e.animation : "none"
                }
              }
            )
          }
        )
      }
    );
  }, "PopperContent")
), Dl = "PopperArrow", Al = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Nl = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ Ve(function(t, n) {
    const { __scopePopper: o, ...r } = t, i = Ol(Dl, o), s = Al[i.placedSide];
    return (
      // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
      // doesn't report size as we'd expect on SVG elements.
      // it reports their bounding box which is effectively the largest path inside the SVG.
      /* @__PURE__ */ m(
        "span",
        {
          ref: i.onArrowChange,
          style: {
            position: "absolute",
            left: i.arrowX,
            top: i.arrowY,
            [s]: 0,
            transformOrigin: {
              top: "",
              right: "0 0",
              bottom: "center 0",
              left: "100% 0"
            }[i.placedSide],
            transform: {
              top: "translateY(100%)",
              right: "translateY(50%) rotate(90deg) translateX(-50%)",
              bottom: "rotate(180deg)",
              left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[i.placedSide],
            visibility: i.shouldHideArrow ? "hidden" : void 0
          },
          children: /* @__PURE__ */ m(
            Sl,
            {
              ...r,
              ref: n,
              style: {
                ...r.style,
                // ensures the element can be measured correctly (mostly for if SVG)
                display: "block"
              }
            }
          )
        }
      )
    );
  }, "PopperArrow")
);
function Fi(e) {
  return e !== null;
}
Ve(Fi, "isNotNull");
var Ll = /* @__PURE__ */ Ve((e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var h, y, S;
    const { placement: n, rects: o, middlewareData: r } = t, s = ((h = r.arrow) == null ? void 0 : h.centerOffset) !== 0, c = s ? 0 : e.arrowWidth, l = s ? 0 : e.arrowHeight, [u, d] = xn(n), f = { start: "0%", center: "50%", end: "100%" }[d], p = (((y = r.arrow) == null ? void 0 : y.x) ?? 0) + c / 2, g = (((S = r.arrow) == null ? void 0 : S.y) ?? 0) + l / 2;
    let w = "", v = "";
    return u === "bottom" ? (w = s ? f : `${p}px`, v = `${-l}px`) : u === "top" ? (w = s ? f : `${p}px`, v = `${o.floating.height + l}px`) : u === "right" ? (w = `${-l}px`, v = s ? f : `${g}px`) : u === "left" && (w = `${o.floating.width + l}px`, v = s ? f : `${g}px`), { data: { x: w, y: v } };
  }
}), "transformOrigin");
function xn(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
Ve(xn, "getSideAndAlignFromPlacement");
var Fo = Rl, Bo = Il, Vo = Ml, $l = Nl, Fl = Object.defineProperty, Bl = (e, t) => Fl(e, "name", { value: t, configurable: !0 }), Wt = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ Bl(function(t, n) {
    var l;
    const { container: o, ...r } = t, [i, s] = a.useState(!1);
    oe(() => s(!0), []);
    const c = o || i && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body);
    return c ? Ct.createPortal(/* @__PURE__ */ m(B.div, { ...r, ref: n }), c) : null;
  }, "Portal")
), Vl = Object.defineProperty, Ue = (e, t) => Vl(e, "name", { value: t, configurable: !0 });
function Bi(e, t) {
  return a.useReducer((n, o) => t[n][o] ?? n, e);
}
Ue(Bi, "useStateMachine");
var Te = /* @__PURE__ */ Ue((e) => {
  const { present: t, children: n } = e, o = Vi(t), r = typeof n == "function" ? n({ present: o.isPresent }) : a.Children.only(n), i = Hi(o.ref, Wi(r));
  return typeof n == "function" || o.isPresent ? a.cloneElement(r, { ref: i }) : null;
}, "Presence");
function Vi(e) {
  const [t, n] = a.useState(), o = a.useRef(null), r = a.useRef(e), i = a.useRef("none"), s = a.useRef(void 0), c = e ? "mounted" : "unmounted", [l, u] = Bi(c, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return a.useEffect(() => {
    l === "mounted" ? (i.current = s.current ?? ht(o.current), s.current = void 0) : i.current = "none";
  }, [l]), oe(() => {
    const d = o.current, f = r.current;
    if (f !== e) {
      const g = i.current, w = ht(d);
      e ? (s.current = w, u("MOUNT")) : w === "none" || (d == null ? void 0 : d.display) === "none" ? u("UNMOUNT") : u(f && g !== w ? "ANIMATION_OUT" : "UNMOUNT"), r.current = e;
    }
  }, [e, u]), oe(() => {
    if (t) {
      let d;
      const f = t.ownerDocument.defaultView ?? window, p = /* @__PURE__ */ Ue((w) => {
        const h = ht(o.current).includes(CSS.escape(w.animationName));
        if (w.target === t && h && (u("ANIMATION_END"), !r.current)) {
          const y = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", d = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = y);
          });
        }
      }, "handleAnimationEnd"), g = /* @__PURE__ */ Ue((w) => {
        w.target === t && (i.current = ht(o.current));
      }, "handleAnimationStart");
      return t.addEventListener("animationstart", g), t.addEventListener("animationcancel", p), t.addEventListener("animationend", p), () => {
        f.clearTimeout(d), t.removeEventListener("animationstart", g), t.removeEventListener("animationcancel", p), t.removeEventListener("animationend", p);
      };
    } else
      u("ANIMATION_END");
  }, [t, u]), {
    isPresent: ["mounted", "unmountSuspended"].includes(l),
    ref: a.useCallback((d) => {
      if (d) {
        const f = getComputedStyle(d);
        o.current = f, s.current = ht(f);
      } else
        o.current = null;
      n(d);
    }, [])
  };
}
Ue(Vi, "usePresence");
function lo(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
Ue(lo, "setRef");
function Hi(...e) {
  const t = a.useRef(e);
  return t.current = e, a.useCallback((n) => {
    const o = t.current;
    let r = !1;
    const i = o.map((s) => {
      const c = lo(s, n);
      return !r && typeof c == "function" && (r = !0), c;
    });
    if (r)
      return () => {
        for (let s = 0; s < i.length; s++) {
          const c = i[s];
          typeof c == "function" ? c() : lo(o[s], null);
        }
      };
  }, []);
}
Ue(Hi, "useStableComposedRefs");
function ht(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
Ue(ht, "getAnimationName");
function Wi(e) {
  var o, r;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
Ue(Wi, "getElementRef");
var Hl = Object.defineProperty, Wl = (e, t) => Hl(e, "name", { value: t, configurable: !0 }), kr = a[" useEffectEvent ".trim().toString()], Or = a[" useInsertionEffect ".trim().toString()];
function Ui(e) {
  if (typeof kr == "function")
    return kr(e);
  const t = a.useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  return typeof Or == "function" ? Or(() => {
    t.current = e;
  }) : oe(() => {
    t.current = e;
  }), a.useMemo(() => ((...n) => {
    var o;
    return (o = t.current) == null ? void 0 : o.call(t, ...n);
  }), []);
}
Wl(Ui, "useEffectEvent");
var Ul = Object.defineProperty, Ut = (e, t) => Ul(e, "name", { value: t, configurable: !0 }), jl = a[" useInsertionEffect ".trim().toString()] || oe;
function Se({
  prop: e,
  defaultProp: t,
  onChange: n = /* @__PURE__ */ Ut(() => {
  }, "onChange"),
  caller: o
}) {
  const [r, i, s] = ji({
    defaultProp: t,
    onChange: n
  }), c = e !== void 0, l = c ? e : r, u = a.useCallback(
    (d) => {
      var f;
      if (c) {
        const p = Ki(d) ? d(e) : d;
        p !== e && ((f = s.current) == null || f.call(s, p));
      } else
        i(d);
    },
    [c, e, i, s]
  );
  return [l, u];
}
Ut(Se, "useControllableState");
function ji({
  defaultProp: e,
  onChange: t
}) {
  const [n, o] = a.useState(e), r = a.useRef(n), i = a.useRef(t);
  return jl(() => {
    i.current = t;
  }, [t]), a.useEffect(() => {
    var s;
    r.current !== n && ((s = i.current) == null || s.call(i, n), r.current = n);
  }, [n, r]), [n, o, i];
}
Ut(ji, "useUncontrolledState");
function Ki(e) {
  return typeof e == "function";
}
Ut(Ki, "isFunction");
var Mr = Symbol("RADIX:SYNC_STATE");
function Kl(e, t, n, o) {
  const { prop: r, defaultProp: i, onChange: s, caller: c } = t, l = r !== void 0, u = Ui(s), d = [{ ...n, state: i }];
  o && d.push(o);
  const [f, p] = a.useReducer(
    (h, y) => {
      if (y.type === Mr)
        return { ...h, state: y.state };
      const S = e(h, y);
      return l && !Object.is(S.state, h.state) && u(S.state), S;
    },
    ...d
  ), g = f.state, w = a.useRef(g);
  a.useEffect(() => {
    w.current !== g && (w.current = g, l || u(g));
  }, [g, w, l]);
  const v = a.useMemo(() => r !== void 0 ? { ...f, state: r } : f, [f, r]);
  return a.useEffect(() => {
    l && !Object.is(r, f.state) && p({ type: Mr, state: r });
  }, [r, f.state, l]), [v, p];
}
Ut(Kl, "useControllableStateReducer");
var Gl = Object.defineProperty, zl = (e, t) => Gl(e, "name", { value: t, configurable: !0 });
function Gi(e) {
  const t = a.useRef({ value: e, previous: e });
  return a.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
zl(Gi, "usePrevious");
var Yl = Object.defineProperty, Xl = (e, t) => Yl(e, "name", { value: t, configurable: !0 }), zi = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), Ho = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ Xl(function(t, n) {
    return /* @__PURE__ */ m(
      B.span,
      {
        ...t,
        ref: n,
        style: { ...zi, ...t.style }
      }
    );
  }, "VisuallyHidden")
), ql = Ho, Zl = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, dt = /* @__PURE__ */ new WeakMap(), Jt = /* @__PURE__ */ new WeakMap(), Qt = {}, jn = 0, Yi = function(e) {
  return e && (e.host || Yi(e.parentNode));
}, Jl = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = Yi(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Ql = function(e, t, n, o) {
  var r = Jl(t, Array.isArray(e) ? e : [e]);
  Qt[n] || (Qt[n] = /* @__PURE__ */ new WeakMap());
  var i = Qt[n], s = [], c = /* @__PURE__ */ new Set(), l = new Set(r), u = function(f) {
    !f || c.has(f) || (c.add(f), u(f.parentNode));
  };
  r.forEach(u);
  var d = function(f) {
    !f || l.has(f) || Array.prototype.forEach.call(f.children, function(p) {
      if (c.has(p))
        d(p);
      else
        try {
          var g = p.getAttribute(o), w = g !== null && g !== "false", v = (dt.get(p) || 0) + 1, h = (i.get(p) || 0) + 1;
          dt.set(p, v), i.set(p, h), s.push(p), v === 1 && w && Jt.set(p, !0), h === 1 && p.setAttribute(n, "true"), w || p.setAttribute(o, "true");
        } catch (y) {
          console.error("aria-hidden: cannot operate on ", p, y);
        }
    });
  };
  return d(t), c.clear(), jn++, function() {
    s.forEach(function(f) {
      var p = dt.get(f) - 1, g = i.get(f) - 1;
      dt.set(f, p), i.set(f, g), p || (Jt.has(f) || f.removeAttribute(o), Jt.delete(f)), g || f.removeAttribute(n);
    }), jn--, jn || (dt = /* @__PURE__ */ new WeakMap(), dt = /* @__PURE__ */ new WeakMap(), Jt = /* @__PURE__ */ new WeakMap(), Qt = {});
  };
}, Wo = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), r = Zl(e);
  return r ? (o.push.apply(o, Array.from(r.querySelectorAll("[aria-live], script"))), Ql(o, r, n, "aria-hidden")) : function() {
    return null;
  };
}, ke = function() {
  return ke = Object.assign || function(t) {
    for (var n, o = 1, r = arguments.length; o < r; o++) {
      n = arguments[o];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, ke.apply(this, arguments);
};
function Xi(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
}
function eu(e, t, n) {
  if (n || arguments.length === 2) for (var o = 0, r = t.length, i; o < r; o++)
    (i || !(o in t)) && (i || (i = Array.prototype.slice.call(t, 0, o)), i[o] = t[o]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var cn = "right-scroll-bar-position", an = "width-before-scroll-bar", tu = "with-scroll-bars-hidden", nu = "--removed-body-scroll-bar-size";
function Kn(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function ou(e, t) {
  var n = vt(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(o) {
          var r = n.value;
          r !== o && (n.value = o, n.callback(o, r));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var ru = typeof window < "u" ? a.useLayoutEffect : a.useEffect, Dr = /* @__PURE__ */ new WeakMap();
function iu(e, t) {
  var n = ou(null, function(o) {
    return e.forEach(function(r) {
      return Kn(r, o);
    });
  });
  return ru(function() {
    var o = Dr.get(n);
    if (o) {
      var r = new Set(o), i = new Set(e), s = n.current;
      r.forEach(function(c) {
        i.has(c) || Kn(c, null);
      }), i.forEach(function(c) {
        r.has(c) || Kn(c, s);
      });
    }
    Dr.set(n, e);
  }, [e]), n;
}
function su(e) {
  return e;
}
function cu(e, t) {
  t === void 0 && (t = su);
  var n = [], o = !1, r = {
    read: function() {
      if (o)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(i) {
      var s = t(i, o);
      return n.push(s), function() {
        n = n.filter(function(c) {
          return c !== s;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (o = !0; n.length; ) {
        var s = n;
        n = [], s.forEach(i);
      }
      n = {
        push: function(c) {
          return i(c);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(i) {
      o = !0;
      var s = [];
      if (n.length) {
        var c = n;
        n = [], c.forEach(i), s = n;
      }
      var l = function() {
        var d = s;
        s = [], d.forEach(i);
      }, u = function() {
        return Promise.resolve().then(l);
      };
      u(), n = {
        push: function(d) {
          s.push(d), u();
        },
        filter: function(d) {
          return s = s.filter(d), n;
        }
      };
    }
  };
  return r;
}
function au(e) {
  e === void 0 && (e = {});
  var t = cu(null);
  return t.options = ke({ async: !0, ssr: !1 }, e), t;
}
var qi = function(e) {
  var t = e.sideCar, n = Xi(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = t.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return a.createElement(o, ke({}, n));
};
qi.isSideCarExport = !0;
function lu(e, t) {
  return e.useMedium(t), qi;
}
var Zi = au(), Gn = function() {
}, En = a.forwardRef(function(e, t) {
  var n = a.useRef(null), o = a.useState({
    onScrollCapture: Gn,
    onWheelCapture: Gn,
    onTouchMoveCapture: Gn
  }), r = o[0], i = o[1], s = e.forwardProps, c = e.children, l = e.className, u = e.removeScrollBar, d = e.enabled, f = e.shards, p = e.sideCar, g = e.noRelative, w = e.noIsolation, v = e.inert, h = e.allowPinchZoom, y = e.as, S = y === void 0 ? "div" : y, b = e.gapMode, C = Xi(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), x = p, E = iu([n, t]), T = ke(ke({}, C), r);
  return a.createElement(
    a.Fragment,
    null,
    d && a.createElement(x, { sideCar: Zi, removeScrollBar: u, shards: f, noRelative: g, noIsolation: w, inert: v, setCallbacks: i, allowPinchZoom: !!h, lockRef: n, gapMode: b }),
    s ? a.cloneElement(a.Children.only(c), ke(ke({}, T), { ref: E })) : a.createElement(S, ke({}, T, { className: l, ref: E }), c)
  );
});
En.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
En.classNames = {
  fullWidth: an,
  zeroRight: cn
};
var uu = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function du() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = uu();
  return t && e.setAttribute("nonce", t), e;
}
function fu(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function pu(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var mu = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = du()) && (fu(t, n), pu(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, hu = function() {
  var e = mu();
  return function(t, n) {
    a.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Ji = function() {
  var e = hu(), t = function(n) {
    var o = n.styles, r = n.dynamic;
    return e(o, r), null;
  };
  return t;
}, vu = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, zn = function(e) {
  return parseInt(e || "", 10) || 0;
}, gu = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], o = t[e === "padding" ? "paddingTop" : "marginTop"], r = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [zn(n), zn(o), zn(r)];
}, wu = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return vu;
  var t = gu(e), n = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, o - n + t[2] - t[0])
  };
}, bu = Ji(), wt = "data-scroll-locked", yu = function(e, t, n, o) {
  var r = e.left, i = e.top, s = e.right, c = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(tu, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(c, "px ").concat(o, `;
  }
  body[`).concat(wt, `] {
    overflow: hidden `).concat(o, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(o, ";"),
    n === "margin" && `
    padding-left: `.concat(r, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(c, "px ").concat(o, `;
    `),
    n === "padding" && "padding-right: ".concat(c, "px ").concat(o, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(cn, ` {
    right: `).concat(c, "px ").concat(o, `;
  }
  
  .`).concat(an, ` {
    margin-right: `).concat(c, "px ").concat(o, `;
  }
  
  .`).concat(cn, " .").concat(cn, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(an, " .").concat(an, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat(wt, `] {
    `).concat(nu, ": ").concat(c, `px;
  }
`);
}, Ar = function() {
  var e = parseInt(document.body.getAttribute(wt) || "0", 10);
  return isFinite(e) ? e : 0;
}, Cu = function() {
  a.useEffect(function() {
    return document.body.setAttribute(wt, (Ar() + 1).toString()), function() {
      var e = Ar() - 1;
      e <= 0 ? document.body.removeAttribute(wt) : document.body.setAttribute(wt, e.toString());
    };
  }, []);
}, Su = function(e) {
  var t = e.noRelative, n = e.noImportant, o = e.gapMode, r = o === void 0 ? "margin" : o;
  Cu();
  var i = a.useMemo(function() {
    return wu(r);
  }, [r]);
  return a.createElement(bu, { styles: yu(i, !t, r, n ? "" : "!important") });
}, uo = !1;
if (typeof window < "u")
  try {
    var en = Object.defineProperty({}, "passive", {
      get: function() {
        return uo = !0, !0;
      }
    });
    window.addEventListener("test", en, en), window.removeEventListener("test", en, en);
  } catch {
    uo = !1;
  }
var ft = uo ? { passive: !1 } : !1, xu = function(e) {
  return e.tagName === "TEXTAREA";
}, Qi = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !xu(e) && n[t] === "visible")
  );
}, Eu = function(e) {
  return Qi(e, "overflowY");
}, Tu = function(e) {
  return Qi(e, "overflowX");
}, Nr = function(e, t) {
  var n = t.ownerDocument, o = t;
  do {
    typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
    var r = es(e, o);
    if (r) {
      var i = ts(e, o), s = i[1], c = i[2];
      if (s > c)
        return !0;
    }
    o = o.parentNode;
  } while (o && o !== n.body);
  return !1;
}, Pu = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, o = e.clientHeight;
  return [
    t,
    n,
    o
  ];
}, Ru = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, o = e.clientWidth;
  return [
    t,
    n,
    o
  ];
}, es = function(e, t) {
  return e === "v" ? Eu(t) : Tu(t);
}, ts = function(e, t) {
  return e === "v" ? Pu(t) : Ru(t);
}, _u = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Iu = function(e, t, n, o, r) {
  var i = _u(e, window.getComputedStyle(t).direction), s = i * o, c = n.target, l = t.contains(c), u = !1, d = s > 0, f = 0, p = 0;
  do {
    if (!c)
      break;
    var g = ts(e, c), w = g[0], v = g[1], h = g[2], y = v - h - i * w;
    (w || y) && es(e, c) && (f += y, p += w);
    var S = c.parentNode;
    c = S && S.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? S.host : S;
  } while (
    // portaled content
    !l && c !== document.body || // self content
    l && (t.contains(c) || t === c)
  );
  return (d && Math.abs(f) < 1 || !d && Math.abs(p) < 1) && (u = !0), u;
}, tn = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Lr = function(e) {
  return [e.deltaX, e.deltaY];
}, $r = function(e) {
  return e && "current" in e ? e.current : e;
}, ku = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Ou = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Mu = 0, pt = [];
function Du(e) {
  var t = a.useRef([]), n = a.useRef([0, 0]), o = a.useRef(), r = a.useState(Mu++)[0], i = a.useState(Ji)[0], s = a.useRef(e);
  a.useEffect(function() {
    s.current = e;
  }, [e]), a.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(r));
      var v = eu([e.lockRef.current], (e.shards || []).map($r), !0).filter(Boolean);
      return v.forEach(function(h) {
        return h.classList.add("allow-interactivity-".concat(r));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(r)), v.forEach(function(h) {
          return h.classList.remove("allow-interactivity-".concat(r));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var c = a.useCallback(function(v, h) {
    if ("touches" in v && v.touches.length === 2 || v.type === "wheel" && v.ctrlKey)
      return !s.current.allowPinchZoom;
    var y = tn(v), S = n.current, b = "deltaX" in v ? v.deltaX : S[0] - y[0], C = "deltaY" in v ? v.deltaY : S[1] - y[1], x, E = v.target, T = Math.abs(b) > Math.abs(C) ? "h" : "v";
    if ("touches" in v && T === "h" && E.type === "range")
      return !1;
    var _ = window.getSelection(), R = _ && _.anchorNode, O = R ? R === E || R.contains(E) : !1;
    if (O)
      return !1;
    var $ = Nr(T, E);
    if (!$)
      return !0;
    if ($ ? x = T : (x = T === "v" ? "h" : "v", $ = Nr(T, E)), !$)
      return !1;
    if (!o.current && "changedTouches" in v && (b || C) && (o.current = x), !x)
      return !0;
    var M = o.current || x;
    return Iu(M, h, v, M === "h" ? b : C);
  }, []), l = a.useCallback(function(v) {
    var h = v;
    if (!(!pt.length || pt[pt.length - 1] !== i)) {
      var y = "deltaY" in h ? Lr(h) : tn(h), S = t.current.filter(function(x) {
        return x.name === h.type && (x.target === h.target || h.target === x.shadowParent) && ku(x.delta, y);
      })[0];
      if (S && S.should) {
        h.cancelable && h.preventDefault();
        return;
      }
      if (!S) {
        var b = (s.current.shards || []).map($r).filter(Boolean).filter(function(x) {
          return x.contains(h.target);
        }), C = b.length > 0 ? c(h, b[0]) : !s.current.noIsolation;
        C && h.cancelable && h.preventDefault();
      }
    }
  }, []), u = a.useCallback(function(v, h, y, S) {
    var b = { name: v, delta: h, target: y, should: S, shadowParent: Au(y) };
    t.current.push(b), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== b;
      });
    }, 1);
  }, []), d = a.useCallback(function(v) {
    n.current = tn(v), o.current = void 0;
  }, []), f = a.useCallback(function(v) {
    u(v.type, Lr(v), v.target, c(v, e.lockRef.current));
  }, []), p = a.useCallback(function(v) {
    u(v.type, tn(v), v.target, c(v, e.lockRef.current));
  }, []);
  a.useEffect(function() {
    return pt.push(i), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", l, ft), document.addEventListener("touchmove", l, ft), document.addEventListener("touchstart", d, ft), function() {
      pt = pt.filter(function(v) {
        return v !== i;
      }), document.removeEventListener("wheel", l, ft), document.removeEventListener("touchmove", l, ft), document.removeEventListener("touchstart", d, ft);
    };
  }, []);
  var g = e.removeScrollBar, w = e.inert;
  return a.createElement(
    a.Fragment,
    null,
    w ? a.createElement(i, { styles: Ou(r) }) : null,
    g ? a.createElement(Su, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Au(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Nu = lu(Zi, Du);
var Tn = a.forwardRef(function(e, t) {
  return a.createElement(En, ke({}, e, { ref: t, sideCar: Nu }));
});
Tn.classNames = En.classNames;
var Lu = Object.defineProperty, K = (e, t) => Lu(e, "name", { value: t, configurable: !0 }), $u = [" ", "Enter", "ArrowUp", "ArrowDown"], Fu = [" ", "Enter"], yt = "Select", [Pn, Uo, Bu] = /* @__PURE__ */ Ft(yt), [it, wv] = /* @__PURE__ */ pe(yt, [
  Bu,
  Tt
]), jo = Tt(), [Vu, Qe] = it(yt), [Hu, Wu] = it(yt);
function ns(e) {
  const {
    __scopeSelect: t,
    children: n,
    open: o,
    defaultOpen: r,
    onOpenChange: i,
    value: s,
    defaultValue: c,
    onValueChange: l,
    dir: u,
    name: d,
    autoComplete: f,
    disabled: p,
    required: g,
    form: w,
    // @ts-expect-error internal render prop used by `Select` to compose its default parts
    internal_do_not_use_render: v
  } = e, h = jo(t), [y, S] = a.useState(null), [b, C] = a.useState(null), [x, E] = a.useState(!1), T = Bt(u), [_, R] = Se({
    prop: o,
    defaultProp: r ?? !1,
    onChange: i,
    caller: yt
  }), [O, $] = Se({
    prop: s,
    defaultProp: c,
    onChange: l,
    caller: yt
  }), M = a.useRef(null), D = a.useRef(O);
  a.useEffect(() => {
    const G = w ? y == null ? void 0 : y.ownerDocument.getElementById(w) : y == null ? void 0 : y.form;
    if (G instanceof HTMLFormElement) {
      const Q = /* @__PURE__ */ K(() => $(D.current), "reset");
      return G.addEventListener("reset", Q), () => G.removeEventListener("reset", Q);
    }
  }, [w, y, $]);
  const L = y ? !!w || !!y.closest("form") : !0, [H, P] = a.useState(/* @__PURE__ */ new Set()), A = ye(), N = Array.from(H).map((G) => G.props.value).join(";"), V = a.useCallback((G) => {
    P((Q) => new Set(Q).add(G));
  }, []), I = a.useCallback((G) => {
    P((Q) => {
      const ae = new Set(Q);
      return ae.delete(G), ae;
    });
  }, []), Z = {
    required: g,
    trigger: y,
    onTriggerChange: S,
    valueNode: b,
    onValueNodeChange: C,
    valueNodeHasChildren: x,
    onValueNodeHasChildrenChange: E,
    contentId: A,
    value: O,
    onValueChange: $,
    open: _,
    onOpenChange: R,
    dir: T,
    triggerPointerDownPosRef: M,
    disabled: p,
    name: d,
    autoComplete: f,
    form: w,
    nativeOptions: H,
    nativeSelectKey: N,
    isFormControl: L
  };
  return /* @__PURE__ */ m(Fo, { ...h, children: /* @__PURE__ */ m(Vu, { scope: t, ...Z, children: /* @__PURE__ */ m(Pn.Provider, { scope: t, children: /* @__PURE__ */ m(
    Hu,
    {
      scope: t,
      onNativeOptionAdd: V,
      onNativeOptionRemove: I,
      children: is(v) ? v(Z) : n
    }
  ) }) }) });
}
K(ns, "SelectProvider");
var Uu = /* @__PURE__ */ K((e) => {
  const { __scopeSelect: t, children: n, ...o } = e;
  return /* @__PURE__ */ m(
    ns,
    {
      __scopeSelect: t,
      ...o,
      internal_do_not_use_render: ({ isFormControl: r }) => /* @__PURE__ */ U(Ke, { children: [
        n,
        r ? /* @__PURE__ */ m(
          yd,
          {
            __scopeSelect: t
          }
        ) : null
      ] })
    }
  );
}, "Select"), ju = "SelectTrigger", Ku = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ K(function(t, n) {
    const { __scopeSelect: o, disabled: r = !1, ...i } = t, s = jo(o), c = Qe(ju, o), l = c.disabled || r, u = W(n, c.onTriggerChange), d = Uo(o), f = a.useRef("touch"), [p, g, w] = Ko((h) => {
      const y = d().filter((C) => !C.disabled), S = y.find((C) => C.value === c.value), b = Go(y, h, S);
      b !== void 0 && c.onValueChange(b.value);
    }), v = /* @__PURE__ */ K((h) => {
      l || (c.onOpenChange(!0), w()), h && (c.triggerPointerDownPosRef.current = {
        x: Math.round(h.pageX),
        y: Math.round(h.pageY)
      });
    }, "handleOpen");
    return /* @__PURE__ */ m(Bo, { asChild: !0, ...s, children: /* @__PURE__ */ m(
      B.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": c.open ? c.contentId : void 0,
        "aria-expanded": c.open,
        "aria-required": c.required,
        "aria-autocomplete": "none",
        dir: c.dir,
        "data-state": c.open ? "open" : "closed",
        disabled: l,
        "data-disabled": l ? "" : void 0,
        "data-placeholder": jt(c.value) ? "" : void 0,
        ...i,
        ref: u,
        onClick: k(i.onClick, (h) => {
          h.currentTarget.focus(), f.current !== "mouse" && v(h);
        }),
        onPointerDown: k(i.onPointerDown, (h) => {
          f.current = h.pointerType;
          const y = h.target;
          y.hasPointerCapture(h.pointerId) && y.releasePointerCapture(h.pointerId), h.button === 0 && h.ctrlKey === !1 && h.pointerType === "mouse" && (v(h), h.preventDefault());
        }),
        onKeyDown: k(i.onKeyDown, (h) => {
          const y = p.current !== "";
          !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && g(h.key), !(y && h.key === " ") && $u.includes(h.key) && (v(), h.preventDefault());
        })
      }
    ) });
  }, "SelectTrigger")
), Gu = "SelectValue", zu = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ K(function(t, n) {
    const { __scopeSelect: o, className: r, style: i, children: s, placeholder: c = "", ...l } = t, u = Qe(Gu, o), { onValueNodeHasChildrenChange: d } = u, f = s !== void 0, p = W(n, u.onValueNodeChange);
    oe(() => {
      d(f);
    }, [d, f]);
    const g = jt(u.value);
    return /* @__PURE__ */ m(
      B.span,
      {
        ...l,
        asChild: g ? !1 : l.asChild,
        ref: p,
        style: { pointerEvents: "none" },
        children: /* @__PURE__ */ m(a.Fragment, { children: g ? c : s }, g ? "placeholder" : "value")
      }
    );
  }, "SelectValue")
), Yu = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ K(function(t, n) {
    const { __scopeSelect: o, children: r, ...i } = t;
    return /* @__PURE__ */ m(B.span, { "aria-hidden": !0, ...i, ref: n, children: r || "▼" });
  }, "SelectIcon")
), Xu = "SelectPortal", [qu, Zu] = it(Xu, {
  forceMount: void 0
}), Ju = /* @__PURE__ */ K((e) => {
  const { __scopeSelect: t, forceMount: n, ...o } = e;
  return /* @__PURE__ */ m(qu, { scope: e.__scopeSelect, forceMount: n, children: /* @__PURE__ */ m(Wt, { asChild: !0, ...o }) });
}, "SelectPortal"), rt = "SelectContent", Qu = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ K(function(t, n) {
    const o = Zu(rt, t.__scopeSelect), { forceMount: r = o.forceMount, ...i } = t, s = Qe(rt, t.__scopeSelect), [c, l] = a.useState();
    return oe(() => {
      l(new DocumentFragment());
    }, []), /* @__PURE__ */ m(Te, { present: r || s.open, children: ({ present: u }) => u ? /* @__PURE__ */ m(nd, { ...i, ref: n }) : /* @__PURE__ */ m(ed, { ...i, fragment: c }) });
  }, "SelectContent")
), ed = /* @__PURE__ */ a.forwardRef(/* @__PURE__ */ K(function(t, n) {
  const { __scopeSelect: o, children: r, fragment: i } = t;
  return i ? Ct.createPortal(
    /* @__PURE__ */ m(os, { scope: o, children: /* @__PURE__ */ m(Pn.Slot, { scope: o, children: /* @__PURE__ */ m("div", { ref: n, children: r }) }) }),
    i
  ) : null;
}, "SelectContentFragment")), Ce = 10, [os, Rn] = it(rt), td = /* @__PURE__ */ De("SelectContent.RemoveScroll"), nd = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ K(function(t, n) {
    const { __scopeSelect: o } = t, {
      position: r = "item-aligned",
      onCloseAutoFocus: i,
      onEscapeKeyDown: s,
      onPointerDownOutside: c,
      //
      // PopperContent props
      side: l,
      sideOffset: u,
      align: d,
      alignOffset: f,
      arrowPadding: p,
      collisionBoundary: g,
      collisionPadding: w,
      sticky: v,
      hideWhenDetached: h,
      avoidCollisions: y,
      //
      ...S
    } = t, b = Qe(rt, o), [C, x] = a.useState(null), [E, T] = a.useState(null), _ = W(n, x), [R, O] = a.useState(null), [$, M] = a.useState(
      null
    ), D = Uo(o), [L, H] = a.useState(!1), P = a.useRef(!1);
    a.useEffect(() => {
      if (C) return Wo(C);
    }, [C]), Ht();
    const A = a.useCallback(
      (F) => {
        const [X, ...ee] = D().map((q) => q.ref.current), [z] = ee.slice(-1), j = document.activeElement;
        for (const q of F)
          if (q === j || (q == null || q.scrollIntoView({ block: "nearest" }), q === X && E && (E.scrollTop = 0), q === z && E && (E.scrollTop = E.scrollHeight), q == null || q.focus(), document.activeElement !== j)) return;
      },
      [D, E]
    ), N = a.useCallback(
      () => A([R, C]),
      [A, R, C]
    );
    a.useEffect(() => {
      L && N();
    }, [L, N]);
    const { onOpenChange: V, triggerPointerDownPosRef: I } = b;
    a.useEffect(() => {
      if (C) {
        let F = { x: 0, y: 0 };
        const X = /* @__PURE__ */ K((z) => {
          var j, q;
          F = {
            x: Math.abs(Math.round(z.pageX) - (((j = I.current) == null ? void 0 : j.x) ?? 0)),
            y: Math.abs(Math.round(z.pageY) - (((q = I.current) == null ? void 0 : q.y) ?? 0))
          };
        }, "handlePointerMove"), ee = /* @__PURE__ */ K((z) => {
          F.x <= 10 && F.y <= 10 ? z.preventDefault() : z.composedPath().includes(C) || V(!1), document.removeEventListener("pointermove", X), I.current = null;
        }, "handlePointerUp");
        return I.current !== null && (document.addEventListener("pointermove", X), document.addEventListener("pointerup", ee, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", X), document.removeEventListener("pointerup", ee, { capture: !0 });
        };
      }
    }, [C, V, I]), a.useEffect(() => {
      const F = /* @__PURE__ */ K(() => V(!1), "close");
      return window.addEventListener("blur", F), window.addEventListener("resize", F), () => {
        window.removeEventListener("blur", F), window.removeEventListener("resize", F);
      };
    }, [V]);
    const [Z, G] = Ko((F) => {
      const X = D().filter((j) => !j.disabled), ee = X.find((j) => j.ref.current === document.activeElement), z = Go(X, F, ee);
      z && setTimeout(() => {
        var j;
        return (j = z.ref.current) == null ? void 0 : j.focus();
      });
    }), Q = a.useCallback(
      (F, X, ee) => {
        const z = !P.current && !ee;
        (b.value !== void 0 && b.value === X || z) && (O(F), z && (P.current = !0));
      },
      [b.value]
    ), ae = a.useCallback(() => C == null ? void 0 : C.focus(), [C]), ce = a.useCallback(
      (F, X, ee) => {
        const z = !P.current && !ee;
        (b.value !== void 0 && b.value === X || z) && M(F);
      },
      [b.value]
    ), ge = r === "popper" ? Fr : od, me = ge === Fr ? {
      side: l,
      sideOffset: u,
      align: d,
      alignOffset: f,
      arrowPadding: p,
      collisionBoundary: g,
      collisionPadding: w,
      sticky: v,
      hideWhenDetached: h,
      avoidCollisions: y
    } : {};
    return /* @__PURE__ */ m(
      os,
      {
        scope: o,
        content: C,
        viewport: E,
        onViewportChange: T,
        itemRefCallback: Q,
        selectedItem: R,
        onItemLeave: ae,
        itemTextRefCallback: ce,
        focusSelectedItem: N,
        selectedItemText: $,
        position: r,
        isPositioned: L,
        searchRef: Z,
        children: /* @__PURE__ */ m(Tn, { as: td, allowPinchZoom: !0, children: /* @__PURE__ */ m(
          ko,
          {
            asChild: !0,
            trapped: b.open,
            onMountAutoFocus: (F) => {
              F.preventDefault();
            },
            onUnmountAutoFocus: k(i, (F) => {
              var X;
              (X = b.trigger) == null || X.focus({ preventScroll: !0 }), F.preventDefault();
            }),
            children: /* @__PURE__ */ m(
              Vt,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: s,
                onPointerDownOutside: c,
                onFocusOutside: (F) => F.preventDefault(),
                onDismiss: () => b.onOpenChange(!1),
                children: /* @__PURE__ */ m(
                  ge,
                  {
                    role: "listbox",
                    id: b.contentId,
                    "data-state": b.open ? "open" : "closed",
                    dir: b.dir,
                    onContextMenu: (F) => F.preventDefault(),
                    ...S,
                    ...me,
                    onPlaced: () => H(!0),
                    ref: _,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...S.style
                    },
                    onKeyDown: k(S.onKeyDown, (F) => {
                      const X = F.ctrlKey || F.altKey || F.metaKey;
                      if (F.key === "Tab" && F.preventDefault(), !X && F.key.length === 1 && G(F.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(F.key)) {
                        let z = D().filter((j) => !j.disabled).map((j) => j.ref.current);
                        if (["ArrowUp", "End"].includes(F.key) && (z = z.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(F.key)) {
                          const j = F.target, q = z.indexOf(j);
                          z = z.slice(q + 1);
                        }
                        setTimeout(() => A(z)), F.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }, "SelectContentImpl")
), od = /* @__PURE__ */ a.forwardRef(/* @__PURE__ */ K(function(t, n) {
  const { __scopeSelect: o, onPlaced: r, ...i } = t, s = Qe(rt, o), c = Rn(rt, o), [l, u] = a.useState(null), [d, f] = a.useState(null), p = W(n, f), g = Uo(o), w = a.useRef(!1), v = a.useRef(!0), { viewport: h, selectedItem: y, selectedItemText: S, focusSelectedItem: b } = c, C = a.useCallback(() => {
    if (s.trigger && s.valueNode && l && d && h && y && S) {
      const _ = s.trigger.getBoundingClientRect(), R = d.getBoundingClientRect(), O = s.valueNode.getBoundingClientRect(), $ = S.getBoundingClientRect();
      if (s.dir !== "rtl") {
        const j = $.left - R.left, q = O.left - j, Re = _.left - q, _e = _.width + Re, et = Math.max(_e, R.width), ut = window.innerWidth - Ce, Rt = Qn(q, [
          Ce,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Ce, ut - et)
        ]);
        l.style.minWidth = _e + "px", l.style.left = Rt + "px";
      } else {
        const j = R.right - $.right, q = window.innerWidth - O.right - j, Re = window.innerWidth - _.right - q, _e = _.width + Re, et = Math.max(_e, R.width), ut = window.innerWidth - Ce, Rt = Qn(q, [
          Ce,
          Math.max(Ce, ut - et)
        ]);
        l.style.minWidth = _e + "px", l.style.right = Rt + "px";
      }
      const M = g(), D = window.innerHeight - Ce * 2, L = h.scrollHeight, H = window.getComputedStyle(d), P = parseInt(H.borderTopWidth, 10), A = parseInt(H.paddingTop, 10), N = parseInt(H.borderBottomWidth, 10), V = parseInt(H.paddingBottom, 10), I = P + A + L + V + N, Z = Math.min(y.offsetHeight * 5, I), G = window.getComputedStyle(h), Q = parseInt(G.paddingTop, 10), ae = parseInt(G.paddingBottom, 10), ce = _.top + _.height / 2 - Ce, ge = D - ce, me = y.offsetHeight / 2, F = y.offsetTop + me, X = P + A + F, ee = I - X;
      if (X <= ce) {
        const j = M.length > 0 && y === M[M.length - 1].ref.current;
        l.style.bottom = "0px";
        const q = d.clientHeight - h.offsetTop - h.offsetHeight, Re = Math.max(
          ge,
          me + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (j ? ae : 0) + q + N
        ), _e = X + Re;
        l.style.height = _e + "px";
      } else {
        const j = M.length > 0 && y === M[0].ref.current;
        l.style.top = "0px";
        const Re = Math.max(
          ce,
          P + h.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (j ? Q : 0) + me
        ) + ee;
        l.style.height = Re + "px", h.scrollTop = X - ce + h.offsetTop;
      }
      l.style.margin = `${Ce}px 0`, l.style.minHeight = Z + "px", l.style.maxHeight = D + "px", r == null || r(), requestAnimationFrame(() => w.current = !0);
    }
  }, [
    g,
    s.trigger,
    s.valueNode,
    l,
    d,
    h,
    y,
    S,
    s.dir,
    r
  ]);
  oe(() => C(), [C]);
  const [x, E] = a.useState();
  oe(() => {
    d && E(window.getComputedStyle(d).zIndex);
  }, [d]);
  const T = a.useCallback(
    (_) => {
      _ && v.current === !0 && (C(), b == null || b(), v.current = !1);
    },
    [C, b]
  );
  return /* @__PURE__ */ m(
    rd,
    {
      scope: o,
      contentWrapper: l,
      shouldExpandOnScrollRef: w,
      onScrollButtonChange: T,
      children: /* @__PURE__ */ m(
        "div",
        {
          ref: u,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: x
          },
          children: /* @__PURE__ */ m(
            B.div,
            {
              ...i,
              ref: p,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...i.style
              }
            }
          )
        }
      )
    }
  );
}, "SelectItemAlignedPosition")), Fr = /* @__PURE__ */ a.forwardRef(/* @__PURE__ */ K(function(t, n) {
  const {
    __scopeSelect: o,
    align: r = "start",
    collisionPadding: i = Ce,
    ...s
  } = t, c = jo(o);
  return /* @__PURE__ */ m(
    Vo,
    {
      ...c,
      ...s,
      ref: n,
      align: r,
      collisionPadding: i,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...s.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
}, "SelectPopperPosition")), [rd, id] = it(rt, {}), Br = "SelectViewport", sd = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ K(function(t, n) {
    const { __scopeSelect: o, nonce: r, ...i } = t, s = Rn(Br, o), c = id(Br, o), l = W(n, s.onViewportChange), u = a.useRef(0);
    return /* @__PURE__ */ U(Ke, { children: [
      /* @__PURE__ */ m(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ m(Pn.Slot, { scope: o, children: /* @__PURE__ */ m(
        B.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...i,
          ref: l,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...i.style
          },
          onScroll: k(i.onScroll, (d) => {
            const f = d.currentTarget, { contentWrapper: p, shouldExpandOnScrollRef: g } = c;
            if (g != null && g.current && p) {
              const w = Math.abs(u.current - f.scrollTop);
              if (w > 0) {
                const v = window.innerHeight - Ce * 2, h = parseFloat(p.style.minHeight), y = parseFloat(p.style.height), S = Math.max(h, y);
                if (S < v) {
                  const b = S + w, C = Math.min(v, b), x = b - C;
                  p.style.height = C + "px", p.style.bottom === "0px" && (f.scrollTop = x > 0 ? x : 0, p.style.justifyContent = "flex-end");
                }
              }
            }
            u.current = f.scrollTop;
          })
        }
      ) })
    ] });
  }, "SelectViewport")
), cd = "SelectGroup", [ad, ld] = it(cd), ud = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ K(function(t, n) {
    const { __scopeSelect: o, ...r } = t, i = ye();
    return /* @__PURE__ */ m(ad, { scope: o, id: i, children: /* @__PURE__ */ m(B.div, { role: "group", "aria-labelledby": i, ...r, ref: n }) });
  }, "SelectGroup")
), dd = "SelectLabel", fd = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ K(function(t, n) {
    const { __scopeSelect: o, ...r } = t, i = ld(dd, o);
    return /* @__PURE__ */ m(B.div, { id: i.id, ...r, ref: n });
  }, "SelectLabel")
), fo = "SelectItem", [pd, rs] = it(fo), md = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ K(function(t, n) {
    const {
      __scopeSelect: o,
      value: r,
      disabled: i = !1,
      textValue: s,
      ...c
    } = t, l = Qe(fo, o), u = Rn(fo, o), d = l.value === r, [f, p] = a.useState(s ?? ""), [g, w] = a.useState(!1), v = ue(
      (C) => {
        var x;
        return (x = u.itemRefCallback) == null ? void 0 : x.call(u, C, r, i);
      }
    ), h = W(n, v), y = ye(), S = a.useRef("touch"), b = /* @__PURE__ */ K(() => {
      i || (l.onValueChange(r), l.onOpenChange(!1));
    }, "handleSelect");
    return /* @__PURE__ */ m(
      pd,
      {
        scope: o,
        value: r,
        disabled: i,
        textId: y,
        isSelected: d,
        onItemTextChange: a.useCallback((C) => {
          p((x) => x || ((C == null ? void 0 : C.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ m(
          Pn.ItemSlot,
          {
            scope: o,
            value: r,
            disabled: i,
            textValue: f,
            children: /* @__PURE__ */ m(
              B.div,
              {
                role: "option",
                "aria-labelledby": y,
                "data-highlighted": g ? "" : void 0,
                "aria-selected": d && g,
                "data-state": d ? "checked" : "unchecked",
                "aria-disabled": i || void 0,
                "data-disabled": i ? "" : void 0,
                tabIndex: i ? void 0 : -1,
                ...c,
                ref: h,
                onFocus: k(c.onFocus, () => w(!0)),
                onBlur: k(c.onBlur, () => w(!1)),
                onClick: k(c.onClick, () => {
                  S.current !== "mouse" && b();
                }),
                onPointerUp: k(c.onPointerUp, () => {
                  S.current === "mouse" && b();
                }),
                onPointerDown: k(c.onPointerDown, (C) => {
                  S.current = C.pointerType;
                }),
                onPointerMove: k(c.onPointerMove, (C) => {
                  var x;
                  S.current = C.pointerType, i ? (x = u.onItemLeave) == null || x.call(u) : S.current === "mouse" && C.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: k(c.onPointerLeave, (C) => {
                  var x;
                  C.currentTarget === document.activeElement && ((x = u.onItemLeave) == null || x.call(u));
                }),
                onKeyDown: k(c.onKeyDown, (C) => {
                  var E;
                  i || C.target !== C.currentTarget || ((E = u.searchRef) == null ? void 0 : E.current) !== "" && C.key === " " || (Fu.includes(C.key) && b(), C.key === " " && C.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }, "SelectItem")
), nn = "SelectItemText", hd = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ K(function(t, n) {
    const { __scopeSelect: o, className: r, style: i, ...s } = t, c = Qe(nn, o), l = Rn(nn, o), u = rs(nn, o), d = Wu(nn, o), [f, p] = a.useState(null), g = ue(
      (b) => {
        var C;
        return (C = l.itemTextRefCallback) == null ? void 0 : C.call(l, b, u.value, u.disabled);
      }
    ), w = W(
      n,
      p,
      u.onItemTextChange,
      g
    ), v = f == null ? void 0 : f.textContent, h = a.useMemo(
      () => /* @__PURE__ */ m("option", { value: u.value, disabled: u.disabled, children: v }, u.value),
      [u.disabled, u.value, v]
    ), { onNativeOptionAdd: y, onNativeOptionRemove: S } = d;
    return oe(() => (y(h), () => S(h)), [y, S, h]), /* @__PURE__ */ U(Ke, { children: [
      /* @__PURE__ */ m(B.span, { id: u.textId, ...s, ref: w }),
      u.isSelected && c.valueNode && !c.valueNodeHasChildren && !jt(c.value) ? Ct.createPortal(s.children, c.valueNode) : null
    ] });
  }, "SelectItemText")
), vd = "SelectItemIndicator", gd = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ K(function(t, n) {
    const { __scopeSelect: o, ...r } = t;
    return rs(vd, o).isSelected ? /* @__PURE__ */ m(B.span, { "aria-hidden": !0, ...r, ref: n }) : null;
  }, "SelectItemIndicator")
), wd = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ K(function(t, n) {
    const { __scopeSelect: o, ...r } = t;
    return /* @__PURE__ */ m(B.div, { "aria-hidden": !0, ...r, ref: n });
  }, "SelectSeparator")
), bd = "SelectBubbleInput", yd = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ K(function({ __scopeSelect: t, ...n }, o) {
    const r = Qe(bd, t), { value: i, onValueChange: s, required: c, disabled: l, name: u, autoComplete: d, form: f } = r, { nativeOptions: p, nativeSelectKey: g } = r, w = a.useRef(null), v = W(o, w), h = i ?? "", y = Gi(h), S = Array.from(p).some(
      (b) => (b.props.value ?? "") === ""
    );
    return a.useEffect(() => {
      const b = w.current;
      if (!b) return;
      const C = window.HTMLSelectElement.prototype, E = Object.getOwnPropertyDescriptor(
        C,
        "value"
      ).set;
      if (y !== h && E) {
        const T = new Event("change", { bubbles: !0 });
        E.call(b, h), b.dispatchEvent(T);
      }
    }, [y, h]), /* @__PURE__ */ U(
      B.select,
      {
        "aria-hidden": !0,
        required: c,
        tabIndex: -1,
        name: u,
        autoComplete: d,
        disabled: l,
        form: f,
        onChange: (b) => s(b.target.value),
        ...n,
        style: { ...zi, ...n.style },
        ref: v,
        defaultValue: h,
        children: [
          jt(i) && !S ? /* @__PURE__ */ m("option", { value: "" }) : null,
          Array.from(p)
        ]
      },
      g
    );
  }, "SelectBubbleInput")
);
function is(e) {
  return typeof e == "function";
}
K(is, "isFunction");
function jt(e) {
  return e === "" || e === void 0;
}
K(jt, "shouldShowPlaceholder");
function Ko(e) {
  const t = ue(e), n = a.useRef(""), o = a.useRef(0), r = a.useCallback(
    (s) => {
      const c = n.current + s;
      t(c), (/* @__PURE__ */ K((function l(u) {
        n.current = u, window.clearTimeout(o.current), u !== "" && (o.current = window.setTimeout(() => l(""), 1e3));
      }), "updateSearch"))(c);
    },
    [t]
  ), i = a.useCallback(() => {
    n.current = "", window.clearTimeout(o.current);
  }, []);
  return a.useEffect(() => () => window.clearTimeout(o.current), []), [n, r, i];
}
K(Ko, "useTypeaheadSearch");
function Go(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let s = ss(e, Math.max(i, 0));
  r.length === 1 && (s = s.filter((u) => u !== n));
  const l = s.find(
    (u) => u.textValue.toLowerCase().startsWith(r.toLowerCase())
  );
  return l !== n ? l : void 0;
}
K(Go, "findNextItem");
function ss(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
K(ss, "wrapArray");
const Cd = "wk-Select_trigger", Sd = "wk-Select_sm", xd = "wk-Select_md", Ed = "wk-Select_lg", Td = "wk-Select_icon", Pd = "wk-Select_content", Rd = "wk-Select_viewport", _d = "wk-Select_item", Id = "wk-Select_itemIndicator", kd = "wk-Select_label", Od = "wk-Select_separator", $e = {
  trigger: Cd,
  sm: Sd,
  md: xd,
  lg: Ed,
  icon: Td,
  content: Pd,
  viewport: Rd,
  item: _d,
  itemIndicator: Id,
  label: kd,
  separator: Od
};
function bv({
  placeholder: e,
  size: t = "md",
  children: n,
  className: o,
  id: r,
  "aria-label": i,
  ...s
}) {
  const c = ii();
  return /* @__PURE__ */ U(Uu, { ...s, children: [
    /* @__PURE__ */ U(
      Ku,
      {
        id: r ?? (c == null ? void 0 : c.inputId),
        "aria-label": i,
        "aria-invalid": (c == null ? void 0 : c.invalid) || void 0,
        "aria-describedby": c == null ? void 0 : c.describedBy,
        className: Y($e.trigger, $e[t], o),
        children: [
          /* @__PURE__ */ m(zu, { placeholder: e }),
          /* @__PURE__ */ m(Yu, { className: $e.icon, children: /* @__PURE__ */ m(uc, {}) })
        ]
      }
    ),
    /* @__PURE__ */ m(Ju, { children: /* @__PURE__ */ m(Qu, { className: $e.content, position: "popper", sideOffset: 4, children: /* @__PURE__ */ m(sd, { className: $e.viewport, children: n }) }) })
  ] });
}
const yv = xe(
  function({ className: t, children: n, ...o }, r) {
    return /* @__PURE__ */ U(md, { ref: r, className: Y($e.item, t), ...o, children: [
      /* @__PURE__ */ m(hd, { children: n }),
      /* @__PURE__ */ m(gd, { className: $e.itemIndicator, children: /* @__PURE__ */ m(zr, {}) })
    ] });
  }
);
function Cv({ label: e, children: t }) {
  return /* @__PURE__ */ U(ud, { children: [
    /* @__PURE__ */ m(fd, { className: $e.label, children: e }),
    t
  ] });
}
function Sv() {
  return /* @__PURE__ */ m(wd, { className: $e.separator });
}
var Md = Object.defineProperty, Ze = (e, t) => Md(e, "name", { value: t, configurable: !0 }), zo = "Switch", [Dd, xv] = /* @__PURE__ */ pe(zo), [Ad, Yo] = Dd(zo);
function cs(e) {
  const {
    __scopeSwitch: t,
    checked: n,
    children: o,
    defaultChecked: r,
    disabled: i,
    form: s,
    name: c,
    onCheckedChange: l,
    required: u,
    value: d = "on",
    // @ts-expect-error
    internal_do_not_use_render: f
  } = e, [p, g] = Se({
    prop: n,
    defaultProp: r ?? !1,
    onChange: l,
    caller: zo
  }), [w, v] = a.useState(null), [h, y] = a.useState(null), S = a.useRef(!1), [b, C] = a.useReducer(
    (T) => T + 1,
    0
  ), x = w ? !!s || !!w.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), E = {
    checked: p,
    setChecked: g,
    disabled: i,
    control: w,
    setControl: v,
    name: c,
    form: s,
    value: d,
    hasConsumerStoppedPropagationRef: S,
    userInteractionCount: b,
    onUserInteraction: C,
    required: u,
    defaultChecked: r,
    isFormControl: x,
    bubbleInput: h,
    setBubbleInput: y
  };
  return /* @__PURE__ */ m(Ad, { scope: t, ...E, children: as(f) ? f(E) : o });
}
Ze(cs, "SwitchProvider");
var Nd = "SwitchTrigger", Ld = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ Ze(function({ __scopeSwitch: t, onClick: n, ...o }, r) {
    const {
      control: i,
      form: s,
      value: c,
      disabled: l,
      checked: u,
      required: d,
      setControl: f,
      setChecked: p,
      hasConsumerStoppedPropagationRef: g,
      onUserInteraction: w,
      isFormControl: v,
      bubbleInput: h
    } = Yo(Nd, t), y = W(r, f), S = a.useRef(u);
    return a.useEffect(() => {
      const b = s ? i == null ? void 0 : i.ownerDocument.getElementById(s) : i == null ? void 0 : i.form;
      if (b instanceof HTMLFormElement) {
        const C = /* @__PURE__ */ Ze(() => p(S.current), "reset");
        return b.addEventListener("reset", C), () => b.removeEventListener("reset", C);
      }
    }, [i, s, p]), /* @__PURE__ */ m(
      B.button,
      {
        type: "button",
        role: "switch",
        "aria-checked": u,
        "aria-required": d,
        "data-state": Xo(u),
        "data-disabled": l ? "" : void 0,
        disabled: l,
        value: c,
        ...o,
        ref: y,
        onClick: k(n, (b) => {
          w(), p((C) => !C), h && v && (g.current = b.isPropagationStopped(), g.current || b.stopPropagation());
        })
      }
    );
  }, "SwitchTrigger")
), $d = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ze(function(t, n) {
    const {
      __scopeSwitch: o,
      name: r,
      checked: i,
      defaultChecked: s,
      required: c,
      disabled: l,
      value: u,
      onCheckedChange: d,
      form: f,
      ...p
    } = t;
    return /* @__PURE__ */ m(
      cs,
      {
        __scopeSwitch: o,
        checked: i,
        defaultChecked: s,
        disabled: l,
        required: c,
        onCheckedChange: d,
        name: r,
        form: f,
        value: u,
        internal_do_not_use_render: ({ isFormControl: g }) => /* @__PURE__ */ U(Ke, { children: [
          /* @__PURE__ */ m(
            Ld,
            {
              ...p,
              ref: n,
              __scopeSwitch: o
            }
          ),
          g && /* @__PURE__ */ m(
            Hd,
            {
              __scopeSwitch: o
            }
          )
        ] })
      }
    );
  }, "Switch")
), Fd = "SwitchThumb", Bd = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ Ze(function(t, n) {
    const { __scopeSwitch: o, ...r } = t, i = Yo(Fd, o);
    return /* @__PURE__ */ m(
      B.span,
      {
        "data-state": Xo(i.checked),
        "data-disabled": i.disabled ? "" : void 0,
        ...r,
        ref: n
      }
    );
  }, "SwitchThumb")
), Vd = "SwitchBubbleInput", Hd = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ze(function({ __scopeSwitch: t, onClick: n, ...o }, r) {
    const {
      control: i,
      hasConsumerStoppedPropagationRef: s,
      userInteractionCount: c,
      checked: l,
      defaultChecked: u,
      required: d,
      disabled: f,
      name: p,
      value: g,
      form: w,
      bubbleInput: v,
      setBubbleInput: h
    } = Yo(Vd, t), y = W(r, h), S = Sn(i), b = a.useRef(!1), C = a.useRef(l), x = a.useRef(c);
    a.useEffect(() => {
      const T = v;
      if (!T) return;
      const _ = window.HTMLInputElement.prototype, O = Object.getOwnPropertyDescriptor(
        _,
        "checked"
      ).set, $ = c !== x.current;
      x.current = c;
      const M = C.current !== l;
      C.current = l;
      const D = !($ && s.current);
      if (M && O) {
        b.current = !$;
        const L = new Event("click", { bubbles: D });
        O.call(T, l), T.dispatchEvent(L), b.current = !1;
      }
    }, [v, l, s, c]);
    const E = a.useRef(l);
    return /* @__PURE__ */ m(
      B.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: u ?? E.current,
        required: d,
        disabled: f,
        name: p,
        value: g,
        form: w,
        ...o,
        tabIndex: -1,
        ref: y,
        onClick: k(n, (T) => {
          b.current && T.stopPropagation();
        }),
        style: {
          ...o.style,
          ...S,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
          // We transform because the input is absolutely positioned but we have
          // rendered it **after** the button. This pulls it back to sit on top
          // of the button.
          transform: "translateX(-100%)"
        }
      }
    );
  }, "SwitchBubbleInput")
);
function as(e) {
  return typeof e == "function";
}
Ze(as, "isFunction");
function Xo(e) {
  return e ? "checked" : "unchecked";
}
Ze(Xo, "getState");
const Wd = "wk-Switch_wrapper", Ud = "wk-Switch_root", jd = "wk-Switch_thumb", Kd = "wk-Switch_label", on = {
  wrapper: Wd,
  root: Ud,
  thumb: jd,
  label: Kd
}, Ev = xe(function({ label: t, className: n, id: o, ...r }, i) {
  const s = xo(), c = o ?? s, l = /* @__PURE__ */ m($d, { ref: i, id: c, className: Y(on.root, n), ...r, children: /* @__PURE__ */ m(Bd, { className: on.thumb }) });
  return t ? /* @__PURE__ */ U("span", { className: on.wrapper, children: [
    l,
    /* @__PURE__ */ m("label", { className: on.label, htmlFor: c, children: t })
  ] }) : l;
});
var Gd = Object.defineProperty, je = (e, t) => Gd(e, "name", { value: t, configurable: !0 }), qo = "Checkbox", [zd, Tv] = /* @__PURE__ */ pe(qo), [Yd, Zo] = zd(qo);
function ls(e) {
  const {
    __scopeCheckbox: t,
    checked: n,
    children: o,
    defaultChecked: r,
    disabled: i,
    form: s,
    name: c,
    onCheckedChange: l,
    required: u,
    value: d = "on",
    // @ts-expect-error
    internal_do_not_use_render: f
  } = e, [p, g] = Se({
    prop: n,
    defaultProp: r ?? !1,
    onChange: l,
    caller: qo
  }), [w, v] = a.useState(null), [h, y] = a.useState(null), S = a.useRef(!1), [b, C] = a.useReducer(
    (T) => T + 1,
    0
  ), x = w ? !!s || !!w.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), E = {
    checked: p,
    disabled: i,
    setChecked: g,
    control: w,
    setControl: v,
    name: c,
    form: s,
    value: d,
    hasConsumerStoppedPropagationRef: S,
    userInteractionCount: b,
    onUserInteraction: C,
    required: u,
    defaultChecked: He(r) ? !1 : r,
    isFormControl: x,
    bubbleInput: h,
    setBubbleInput: y
  };
  return /* @__PURE__ */ m(
    Yd,
    {
      scope: t,
      ...E,
      children: us(f) ? f(E) : o
    }
  );
}
je(ls, "CheckboxProvider");
var Xd = "CheckboxTrigger", qd = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ je(function({ __scopeCheckbox: t, onKeyDown: n, onClick: o, ...r }, i) {
    const {
      control: s,
      value: c,
      disabled: l,
      checked: u,
      required: d,
      setControl: f,
      setChecked: p,
      hasConsumerStoppedPropagationRef: g,
      onUserInteraction: w,
      isFormControl: v,
      bubbleInput: h
    } = Zo(Xd, t), y = W(i, f), S = a.useRef(u);
    return a.useEffect(() => {
      const b = s == null ? void 0 : s.form;
      if (b) {
        const C = /* @__PURE__ */ je(() => p(S.current), "reset");
        return b.addEventListener("reset", C), () => b.removeEventListener("reset", C);
      }
    }, [s, p]), /* @__PURE__ */ m(
      B.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": He(u) ? "mixed" : u,
        "aria-required": d,
        "data-state": Jo(u),
        "data-disabled": l ? "" : void 0,
        disabled: l,
        value: c,
        ...r,
        ref: y,
        onKeyDown: k(n, (b) => {
          b.key === "Enter" && b.preventDefault();
        }),
        onClick: k(o, (b) => {
          w(), p((C) => He(C) ? !0 : !C), h && v && (g.current = b.isPropagationStopped(), g.current || b.stopPropagation());
        })
      }
    );
  }, "CheckboxTrigger")
), Zd = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ je(function(t, n) {
    const {
      __scopeCheckbox: o,
      name: r,
      checked: i,
      defaultChecked: s,
      required: c,
      disabled: l,
      value: u,
      onCheckedChange: d,
      form: f,
      ...p
    } = t;
    return /* @__PURE__ */ m(
      ls,
      {
        __scopeCheckbox: o,
        checked: i,
        defaultChecked: s,
        disabled: l,
        required: c,
        onCheckedChange: d,
        name: r,
        form: f,
        value: u,
        internal_do_not_use_render: ({ isFormControl: g }) => /* @__PURE__ */ U(Ke, { children: [
          /* @__PURE__ */ m(
            qd,
            {
              ...p,
              ref: n,
              __scopeCheckbox: o
            }
          ),
          g && /* @__PURE__ */ m(
            tf,
            {
              __scopeCheckbox: o
            }
          )
        ] })
      }
    );
  }, "Checkbox")
), Jd = "CheckboxIndicator", Qd = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ je(function(t, n) {
    const { __scopeCheckbox: o, forceMount: r, ...i } = t, s = Zo(Jd, o);
    return /* @__PURE__ */ m(
      Te,
      {
        present: r || He(s.checked) || s.checked === !0,
        children: /* @__PURE__ */ m(
          B.span,
          {
            "data-state": Jo(s.checked),
            "data-disabled": s.disabled ? "" : void 0,
            ...i,
            ref: n,
            style: { pointerEvents: "none", ...t.style }
          }
        )
      }
    );
  }, "CheckboxIndicator")
), ef = "CheckboxBubbleInput", tf = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ je(function({ __scopeCheckbox: t, onClick: n, ...o }, r) {
    const {
      control: i,
      hasConsumerStoppedPropagationRef: s,
      userInteractionCount: c,
      checked: l,
      defaultChecked: u,
      required: d,
      disabled: f,
      name: p,
      value: g,
      form: w,
      bubbleInput: v,
      setBubbleInput: h
    } = Zo(ef, t), y = W(r, h), S = Sn(i), b = a.useRef(!1), C = a.useRef(l), x = a.useRef(c);
    a.useEffect(() => {
      const T = v;
      if (!T) return;
      const _ = window.HTMLInputElement.prototype, O = Object.getOwnPropertyDescriptor(
        _,
        "checked"
      ).set, $ = c !== x.current;
      x.current = c;
      const M = C.current !== l;
      C.current = l;
      const D = !($ && s.current);
      if (M && O) {
        b.current = !$;
        const L = new Event("click", { bubbles: D });
        T.indeterminate = He(l), O.call(T, He(l) ? !1 : l), T.dispatchEvent(L), b.current = !1;
      }
    }, [v, l, s, c]);
    const E = a.useRef(He(l) ? !1 : l);
    return /* @__PURE__ */ m(
      B.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: u ?? E.current,
        required: d,
        disabled: f,
        name: p,
        value: g,
        form: w,
        ...o,
        tabIndex: -1,
        ref: y,
        onClick: k(n, (T) => {
          b.current && T.stopPropagation();
        }),
        style: {
          ...o.style,
          ...S,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
          // We transform because the input is absolutely positioned but we have
          // rendered it **after** the button. This pulls it back to sit on top
          // of the button.
          transform: "translateX(-100%)"
        }
      }
    );
  }, "CheckboxBubbleInput")
);
function us(e) {
  return typeof e == "function";
}
je(us, "isFunction");
function He(e) {
  return e === "indeterminate";
}
je(He, "isIndeterminate");
function Jo(e) {
  return He(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
je(Jo, "getState");
const nf = "wk-Checkbox_wrapper", of = "wk-Checkbox_root", rf = "wk-Checkbox_indicator", sf = "wk-Checkbox_dash", cf = "wk-Checkbox_label", kt = {
  wrapper: nf,
  root: of,
  indicator: rf,
  dash: sf,
  label: cf
}, Pv = xe(function({ label: t, className: n, id: o, ...r }, i) {
  const s = xo(), c = o ?? s, l = /* @__PURE__ */ m(Zd, { ref: i, id: c, className: Y(kt.root, n), ...r, children: /* @__PURE__ */ m(Qd, { className: kt.indicator, children: r.checked === "indeterminate" ? /* @__PURE__ */ m("span", { className: kt.dash }) : /* @__PURE__ */ m(zr, {}) }) });
  return t ? /* @__PURE__ */ U("span", { className: kt.wrapper, children: [
    l,
    /* @__PURE__ */ m("label", { className: kt.label, htmlFor: c, children: t })
  ] }) : l;
});
var af = Object.defineProperty, ve = (e, t) => af(e, "name", { value: t, configurable: !0 }), Qo = "Dialog", [ds, Rv] = /* @__PURE__ */ pe(Qo), [lf, Pe] = ds(Qo), uf = /* @__PURE__ */ ve((e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: o,
    defaultOpen: r,
    onOpenChange: i,
    modal: s = !0
  } = e, c = a.useRef(null), l = a.useRef(null), [u, d] = Se({
    prop: o,
    defaultProp: r ?? !1,
    onChange: i,
    caller: Qo
  }), [f, p] = a.useState(0), [g, w] = a.useState(0);
  return /* @__PURE__ */ m(
    lf,
    {
      scope: t,
      triggerRef: c,
      contentRef: l,
      contentId: ye(),
      titleId: ye(),
      descriptionId: ye(),
      titlePresent: f > 0,
      descriptionPresent: g > 0,
      setTitleCount: p,
      setDescriptionCount: w,
      open: u,
      onOpenChange: d,
      onOpenToggle: a.useCallback(() => d((v) => !v), [d]),
      modal: s,
      children: n
    }
  );
}, "Dialog"), df = "DialogTrigger", ff = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ ve(function(t, n) {
    const { __scopeDialog: o, ...r } = t, i = Pe(df, o), s = W(n, i.triggerRef);
    return /* @__PURE__ */ m(
      B.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": i.open,
        "aria-controls": i.open ? i.contentId : void 0,
        "data-state": _n(i.open),
        ...r,
        ref: s,
        onClick: k(t.onClick, i.onOpenToggle)
      }
    );
  }, "DialogTrigger")
), fs = "DialogPortal", [pf, ps] = ds(fs, {
  forceMount: void 0
}), mf = /* @__PURE__ */ ve((e) => {
  const { __scopeDialog: t, forceMount: n, children: o, container: r } = e, i = Pe(fs, t);
  return /* @__PURE__ */ m(pf, { scope: t, forceMount: n, children: a.Children.map(o, (s) => /* @__PURE__ */ m(Te, { present: n || i.open, children: /* @__PURE__ */ m(Wt, { asChild: !0, container: r, children: s }) })) });
}, "DialogPortal"), po = "DialogOverlay", hf = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ ve(function(t, n) {
    const o = ps(po, t.__scopeDialog), { forceMount: r = o.forceMount, ...i } = t, s = Pe(po, t.__scopeDialog);
    return s.modal ? /* @__PURE__ */ m(Te, { present: r || s.open, children: /* @__PURE__ */ m(gf, { ...i, ref: n }) }) : null;
  }, "DialogOverlay")
), vf = /* @__PURE__ */ De("DialogOverlay.RemoveScroll"), gf = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ve(function(t, n) {
    const { __scopeDialog: o, ...r } = t, i = Pe(po, o), s = mi(), c = W(n, s);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ m(Tn, { as: vf, allowPinchZoom: !0, shards: [i.contentRef], children: /* @__PURE__ */ m(
        B.div,
        {
          "data-state": _n(i.open),
          ...r,
          ref: c,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }, "DialogOverlayImpl")
), Lt = "DialogContent", wf = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ ve(function(t, n) {
    const o = ps(Lt, t.__scopeDialog), { forceMount: r = o.forceMount, ...i } = t, s = Pe(Lt, t.__scopeDialog);
    return /* @__PURE__ */ m(Te, { present: r || s.open, children: s.modal ? /* @__PURE__ */ m(bf, { ...i, ref: n }) : /* @__PURE__ */ m(yf, { ...i, ref: n }) });
  }, "DialogContent")
), bf = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ve(function(t, n) {
    const o = Pe(Lt, t.__scopeDialog), r = a.useRef(null), i = W(n, o.contentRef, r);
    return a.useEffect(() => {
      const s = r.current;
      if (s) return Wo(s);
    }, []), /* @__PURE__ */ m(
      ms,
      {
        ...t,
        ref: i,
        trapFocus: o.open,
        disableOutsidePointerEvents: o.open,
        onCloseAutoFocus: k(t.onCloseAutoFocus, (s) => {
          var c;
          s.preventDefault(), (c = o.triggerRef.current) == null || c.focus();
        }),
        onPointerDownOutside: k(t.onPointerDownOutside, (s) => {
          const c = s.detail.originalEvent, l = c.button === 0 && c.ctrlKey === !0;
          (c.button === 2 || l) && s.preventDefault();
        }),
        onFocusOutside: k(
          t.onFocusOutside,
          (s) => s.preventDefault()
        )
      }
    );
  }, "DialogContentModal")
), yf = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ve(function(t, n) {
    const o = Pe(Lt, t.__scopeDialog), r = a.useRef(!1), i = a.useRef(!1);
    return /* @__PURE__ */ m(
      ms,
      {
        ...t,
        ref: n,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (s) => {
          var c, l;
          (c = t.onCloseAutoFocus) == null || c.call(t, s), s.defaultPrevented || (r.current || (l = o.triggerRef.current) == null || l.focus(), s.preventDefault()), r.current = !1, i.current = !1;
        },
        onInteractOutside: (s) => {
          var u, d;
          (u = t.onInteractOutside) == null || u.call(t, s), s.defaultPrevented || (r.current = !0, s.detail.originalEvent.type === "pointerdown" && (i.current = !0));
          const c = s.target;
          ((d = o.triggerRef.current) == null ? void 0 : d.contains(c)) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && i.current && s.preventDefault();
        }
      }
    );
  }, "DialogContentNonModal")
), ms = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ve(function(t, n) {
    const { __scopeDialog: o, trapFocus: r, onOpenAutoFocus: i, onCloseAutoFocus: s, ...c } = t, l = Pe(Lt, o);
    return Ht(), /* @__PURE__ */ m(Ke, { children: /* @__PURE__ */ m(
      ko,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: i,
        onUnmountAutoFocus: s,
        children: /* @__PURE__ */ m(
          Vt,
          {
            role: "dialog",
            id: l.contentId,
            "aria-describedby": l.descriptionPresent ? l.descriptionId : void 0,
            "aria-labelledby": l.titlePresent ? l.titleId : void 0,
            "data-state": _n(l.open),
            ...c,
            ref: n,
            deferPointerDownOutside: !0,
            onDismiss: () => l.onOpenChange(!1)
          }
        )
      }
    ) });
  }, "DialogContentImpl")
), Cf = "DialogTitle", Vr = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ ve(function(t, n) {
    const { __scopeDialog: o, ...r } = t, i = Pe(Cf, o), { setTitleCount: s } = i;
    return oe(() => (s((c) => c + 1), () => s((c) => c - 1)), [s]), /* @__PURE__ */ m(B.h2, { id: i.titleId, ...r, ref: n });
  }, "DialogTitle")
), Sf = "DialogDescription", xf = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ve(function(t, n) {
    const { __scopeDialog: o, ...r } = t, i = Pe(Sf, o), { setDescriptionCount: s } = i;
    return oe(() => (s((c) => c + 1), () => s((c) => c - 1)), [s]), /* @__PURE__ */ m(B.p, { id: i.descriptionId, ...r, ref: n });
  }, "DialogDescription")
), Ef = "DialogClose", hs = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ ve(function(t, n) {
    const { __scopeDialog: o, ...r } = t, i = Pe(Ef, o);
    return /* @__PURE__ */ m(
      B.button,
      {
        type: "button",
        ...r,
        ref: n,
        onClick: k(t.onClick, () => i.onOpenChange(!1))
      }
    );
  }, "DialogClose")
);
function _n(e) {
  return e ? "open" : "closed";
}
ve(_n, "getState");
const Tf = "wk-Semantic_heading", Pf = "wk-Semantic_text", Rf = "wk-Semantic_muted", _f = "wk-Semantic_subtle", If = "wk-Semantic_danger", kf = "wk-Semantic_mono", Of = "wk-Semantic_xs", Mf = "wk-Semantic_sm", Df = "wk-Semantic_md", Af = "wk-Semantic_lg", Nf = "wk-Semantic_xl", Lf = "wk-Semantic_xxl", $f = "wk-Semantic_link", Ff = "wk-Semantic_visuallyHidden", we = {
  heading: Tf,
  text: Pf,
  muted: Rf,
  subtle: _f,
  danger: If,
  mono: kf,
  xs: Of,
  sm: Mf,
  md: Df,
  lg: Af,
  xl: Nf,
  xxl: Lf,
  link: $f,
  visuallyHidden: Ff
};
function Bf({ className: e, ...t }) {
  return /* @__PURE__ */ m("span", { className: Y(we.visuallyHidden, e), ...t });
}
const Vf = "wk-Dialog_overlay", Hf = "wk-Dialog_content", Wf = "wk-Dialog_header", Uf = "wk-Dialog_headings", jf = "wk-Dialog_title", Kf = "wk-Dialog_description", Gf = "wk-Dialog_close", zf = "wk-Dialog_footer", ze = {
  overlay: Vf,
  content: Hf,
  header: Wf,
  headings: Uf,
  title: jf,
  description: Kf,
  close: Gf,
  footer: zf
};
function _v({
  title: e,
  titleHidden: t = !1,
  description: n,
  children: o,
  footer: r,
  trigger: i,
  width: s,
  showClose: c = !0,
  className: l,
  ...u
}) {
  return /* @__PURE__ */ U(uf, { ...u, children: [
    i && /* @__PURE__ */ m(ff, { asChild: !0, children: i }),
    /* @__PURE__ */ U(mf, { children: [
      /* @__PURE__ */ m(hf, { className: ze.overlay }),
      /* @__PURE__ */ U(
        wf,
        {
          className: Y(ze.content, l),
          style: s ? { "--wk-dialog-w": s } : void 0,
          children: [
            /* @__PURE__ */ U("div", { className: ze.header, children: [
              /* @__PURE__ */ U("div", { className: ze.headings, children: [
                t ? /* @__PURE__ */ m(Vr, { asChild: !0, children: /* @__PURE__ */ m(Bf, { children: e }) }) : /* @__PURE__ */ m(Vr, { className: ze.title, children: e }),
                n && /* @__PURE__ */ m(xf, { className: ze.description, children: n })
              ] }),
              c && /* @__PURE__ */ m(hs, { className: ze.close, "aria-label": "Close", children: /* @__PURE__ */ m(Yr, {}) })
            ] }),
            o,
            r && /* @__PURE__ */ m("div", { className: ze.footer, children: r })
          ]
        }
      )
    ] })
  ] });
}
const Iv = hs;
var Yf = Object.defineProperty, er = (e, t) => Yf(e, "name", { value: t, configurable: !0 }), Yn = !1;
function vs() {
  const [e, t] = a.useState(Yn);
  return a.useEffect(() => {
    Yn || (Yn = !0, t(!0));
  }, []), e;
}
er(vs, "useIsHydrated");
var gs = a[" useSyncExternalStore ".trim().toString()];
function ws() {
  return () => {
  };
}
er(ws, "subscribe");
function bs() {
  return gs(
    ws,
    () => !0,
    () => !1
  );
}
er(bs, "useIsHydratedModern");
var Xf = typeof gs == "function" ? bs : vs, qf = Object.defineProperty, st = (e, t) => qf(e, "name", { value: t, configurable: !0 }), Xn = "rovingFocusGroup.onEntryFocus", Zf = { bubbles: !1, cancelable: !0 }, In = "RovingFocusGroup", [mo, ys, Jf] = /* @__PURE__ */ Ft(In), [Qf, kn] = /* @__PURE__ */ pe(
  In,
  [Jf]
), [ep, tp] = Qf(In), np = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ st(function(t, n) {
    return /* @__PURE__ */ m(mo.Provider, { scope: t.__scopeRovingFocusGroup, children: /* @__PURE__ */ m(mo.Slot, { scope: t.__scopeRovingFocusGroup, children: /* @__PURE__ */ m(op, { ...t, ref: n }) }) });
  }, "RovingFocusGroup")
), op = /* @__PURE__ */ a.forwardRef(/* @__PURE__ */ st(function(t, n) {
  const {
    __scopeRovingFocusGroup: o,
    orientation: r,
    loop: i = !1,
    dir: s,
    currentTabStopId: c,
    defaultCurrentTabStopId: l,
    onCurrentTabStopIdChange: u,
    onEntryFocus: d,
    preventScrollOnEntryFocus: f = !1,
    ...p
  } = t, g = a.useRef(null), w = W(n, g), v = Bt(s), [h, y] = Se({
    prop: c,
    defaultProp: l ?? null,
    onChange: u,
    caller: In
  }), [S, b] = a.useState(!1), C = ue(d), x = ys(o), E = a.useRef(!1), [T, _] = a.useState(0);
  return a.useEffect(() => {
    const R = g.current;
    if (R)
      return R.addEventListener(Xn, C), () => R.removeEventListener(Xn, C);
  }, [C]), /* @__PURE__ */ m(
    ep,
    {
      scope: o,
      orientation: r,
      dir: v,
      loop: i,
      currentTabStopId: h,
      onItemFocus: a.useCallback(
        (R) => y(R),
        [y]
      ),
      onItemShiftTab: a.useCallback(() => b(!0), []),
      onFocusableItemAdd: a.useCallback(
        () => _((R) => R + 1),
        []
      ),
      onFocusableItemRemove: a.useCallback(
        () => _((R) => R - 1),
        []
      ),
      children: /* @__PURE__ */ m(
        B.div,
        {
          tabIndex: S || T === 0 ? -1 : 0,
          "data-orientation": r,
          ...p,
          ref: w,
          style: { outline: "none", ...t.style },
          onMouseDown: k(t.onMouseDown, () => {
            E.current = !0;
          }),
          onFocus: k(t.onFocus, (R) => {
            const O = !E.current;
            if (R.target === R.currentTarget && O && !S) {
              const $ = new CustomEvent(Xn, Zf);
              if (R.currentTarget.dispatchEvent($), !$.defaultPrevented) {
                const M = x().filter((A) => A.focusable), D = M.find((A) => A.active), L = M.find((A) => A.id === h), P = [D, L, ...M].filter(
                  Boolean
                ).map((A) => A.ref.current);
                tr(P, f);
              }
            }
            E.current = !1;
          }),
          onBlur: k(t.onBlur, () => b(!1))
        }
      )
    }
  );
}, "RovingFocusGroupImpl")), rp = "RovingFocusGroupItem", ip = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ st(function(t, n) {
    const {
      __scopeRovingFocusGroup: o,
      focusable: r = !0,
      active: i = !1,
      tabStopId: s,
      children: c,
      ...l
    } = t, u = ye(), d = s || u, f = tp(rp, o), p = f.currentTabStopId === d, g = ys(o), { onFocusableItemAdd: w, onFocusableItemRemove: v, currentTabStopId: h } = f, y = Xf();
    return oe(() => {
      if (!(!y || !r))
        return w(), () => v();
    }, [y, r, w, v]), a.useEffect(() => {
      if (!(y || !r))
        return w(), () => v();
    }, [y, r, w, v]), /* @__PURE__ */ m(
      mo.ItemSlot,
      {
        scope: o,
        id: d,
        focusable: r,
        active: i,
        children: /* @__PURE__ */ m(
          B.span,
          {
            tabIndex: p ? 0 : -1,
            "data-orientation": f.orientation,
            ...l,
            ref: n,
            onMouseDown: k(t.onMouseDown, (S) => {
              r ? f.onItemFocus(d) : S.preventDefault();
            }),
            onFocus: k(t.onFocus, () => f.onItemFocus(d)),
            onKeyDown: k(t.onKeyDown, (S) => {
              if (S.key === "Tab" && S.shiftKey) {
                f.onItemShiftTab();
                return;
              }
              if (S.target !== S.currentTarget) return;
              const b = Ss(S, f.orientation, f.dir);
              if (b !== void 0) {
                if (S.metaKey || S.ctrlKey || S.altKey || S.shiftKey) return;
                S.preventDefault();
                let x = g().filter((E) => E.focusable).map((E) => E.ref.current);
                if (b === "last") x.reverse();
                else if (b === "prev" || b === "next") {
                  b === "prev" && x.reverse();
                  const E = x.indexOf(S.currentTarget);
                  x = f.loop ? xs(x, E + 1) : x.slice(E + 1);
                }
                setTimeout(() => tr(x));
              }
            }),
            children: typeof c == "function" ? c({ isCurrentTabStop: p, hasTabStop: h != null }) : c
          }
        )
      }
    );
  }, "RovingFocusGroupItem")
), sp = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Cs(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
st(Cs, "getDirectionAwareKey");
function Ss(e, t, n) {
  const o = Cs(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
    return sp[o];
}
st(Ss, "getFocusIntent");
function tr(e, t = !1) {
  const n = document.activeElement;
  for (const o of e)
    if (o === n || (o.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
st(tr, "focusFirst");
function xs(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
st(xs, "wrapArray");
var Es = np, Ts = ip, cp = Object.defineProperty, J = (e, t) => cp(e, "name", { value: t, configurable: !0 }), ap = ["Enter", " "], lp = ["ArrowDown", "PageUp", "Home"], Ps = ["ArrowUp", "PageDown", "End"], up = [...lp, ...Ps], On = "Menu", [ho, dp, fp] = /* @__PURE__ */ Ft(On), [ct, Rs] = /* @__PURE__ */ pe(On, [
  fp,
  Tt,
  kn
]), nr = Tt(), _s = kn(), [pp, Kt] = ct(On), [mp, or] = ct(On), hp = /* @__PURE__ */ J((e) => {
  const { __scopeMenu: t, open: n = !1, children: o, dir: r, onOpenChange: i, modal: s = !0 } = e, c = nr(t), [l, u] = a.useState(null), d = a.useRef(!1), f = ue(i), p = Bt(r);
  return a.useEffect(() => {
    const g = /* @__PURE__ */ J(() => {
      d.current = !0, document.addEventListener("pointerdown", w, { capture: !0, once: !0 }), document.addEventListener("pointermove", w, { capture: !0, once: !0 });
    }, "handleKeyDown"), w = /* @__PURE__ */ J(() => d.current = !1, "handlePointer");
    return document.addEventListener("keydown", g, { capture: !0 }), () => {
      document.removeEventListener("keydown", g, { capture: !0 }), document.removeEventListener("pointerdown", w, { capture: !0 }), document.removeEventListener("pointermove", w, { capture: !0 });
    };
  }, []), a.useEffect(() => {
    if (!n)
      return;
    const g = /* @__PURE__ */ J(() => f(!1), "handleBlur");
    return window.addEventListener("blur", g), () => window.removeEventListener("blur", g);
  }, [n, f]), /* @__PURE__ */ m(Fo, { ...c, children: /* @__PURE__ */ m(
    pp,
    {
      scope: t,
      open: n,
      onOpenChange: f,
      content: l,
      onContentChange: u,
      children: /* @__PURE__ */ m(
        mp,
        {
          scope: t,
          onClose: a.useCallback(() => f(!1), [f]),
          isUsingKeyboardRef: d,
          dir: p,
          modal: s,
          children: o
        }
      )
    }
  ) });
}, "Menu"), vp = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ J(function(t, n) {
    const { __scopeMenu: o, ...r } = t, i = nr(o);
    return /* @__PURE__ */ m(Bo, { ...i, ...r, ref: n });
  }, "MenuAnchor")
), Is = "MenuPortal", [gp, wp] = ct(Is, {
  forceMount: void 0
}), bp = /* @__PURE__ */ J((e) => {
  const { __scopeMenu: t, forceMount: n, children: o, container: r } = e, i = Kt(Is, t);
  return /* @__PURE__ */ m(gp, { scope: t, forceMount: n, children: /* @__PURE__ */ m(Te, { present: n || i.open, children: /* @__PURE__ */ m(Wt, { asChild: !0, container: r, children: o }) }) });
}, "MenuPortal"), Ye = "MenuContent", [yp, ks] = ct(Ye), Cp = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ J(function(t, n) {
    const o = wp(Ye, t.__scopeMenu), { forceMount: r = o.forceMount, ...i } = t, s = Kt(Ye, t.__scopeMenu), c = or(Ye, t.__scopeMenu);
    return /* @__PURE__ */ m(ho.Provider, { scope: t.__scopeMenu, children: /* @__PURE__ */ m(Te, { present: r || s.open, children: /* @__PURE__ */ m(ho.Slot, { scope: t.__scopeMenu, children: c.modal ? /* @__PURE__ */ m(Sp, { ...i, ref: n }) : /* @__PURE__ */ m(xp, { ...i, ref: n }) }) }) });
  }, "MenuContent")
), Sp = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ J(function(t, n) {
    const o = Kt(Ye, t.__scopeMenu), r = a.useRef(null), i = W(n, r);
    return a.useEffect(() => {
      const s = r.current;
      if (s) return Wo(s);
    }, []), /* @__PURE__ */ m(
      Os,
      {
        ...t,
        ref: i,
        trapFocus: o.open,
        disableOutsidePointerEvents: o.open,
        disableOutsideScroll: !0,
        onFocusOutside: k(
          t.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => o.onOpenChange(!1)
      }
    );
  }, "MenuRootContentModal")
), xp = /* @__PURE__ */ a.forwardRef(/* @__PURE__ */ J(function(t, n) {
  const o = Kt(Ye, t.__scopeMenu);
  return /* @__PURE__ */ m(
    Os,
    {
      ...t,
      ref: n,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => o.onOpenChange(!1)
    }
  );
}, "MenuRootContentNonModal")), Ep = /* @__PURE__ */ De("MenuContent.ScrollLock"), Os = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ J(function(t, n) {
    const {
      __scopeMenu: o,
      loop: r = !1,
      trapFocus: i,
      onOpenAutoFocus: s,
      onCloseAutoFocus: c,
      disableOutsidePointerEvents: l,
      onEntryFocus: u,
      onEscapeKeyDown: d,
      onPointerDownOutside: f,
      onFocusOutside: p,
      onInteractOutside: g,
      onDismiss: w,
      disableOutsideScroll: v,
      ...h
    } = t, y = Kt(Ye, o), S = or(Ye, o), b = nr(o), C = _s(o), x = dp(o), [E, T] = a.useState(null), _ = a.useRef(null), R = W(n, _, y.onContentChange), O = a.useRef(0), $ = a.useRef(""), M = a.useRef(0), D = a.useRef(null), L = a.useRef("right"), H = a.useRef(0), P = v ? Tn : a.Fragment, A = v ? { as: Ep, allowPinchZoom: !0 } : void 0, N = /* @__PURE__ */ J((I) => {
      var F, X;
      const Z = $.current + I, G = x().filter((ee) => !ee.disabled), Q = document.activeElement, ae = (F = G.find((ee) => ee.ref.current === Q)) == null ? void 0 : F.textValue, ce = G.map((ee) => ee.textValue), ge = Ls(ce, Z, ae), me = (X = G.find((ee) => ee.textValue === ge)) == null ? void 0 : X.ref.current;
      (/* @__PURE__ */ J((function ee(z) {
        $.current = z, window.clearTimeout(O.current), z !== "" && (O.current = window.setTimeout(() => ee(""), 1e3));
      }), "updateSearch"))(Z), me && setTimeout(() => me.focus());
    }, "handleTypeaheadSearch");
    a.useEffect(() => () => window.clearTimeout(O.current), []), Ht();
    const V = a.useCallback((I) => {
      var G, Q;
      return L.current === ((G = D.current) == null ? void 0 : G.side) && Fs(I, (Q = D.current) == null ? void 0 : Q.area);
    }, []);
    return /* @__PURE__ */ m(
      yp,
      {
        scope: o,
        searchRef: $,
        onItemEnter: a.useCallback(
          (I) => {
            V(I) && I.preventDefault();
          },
          [V]
        ),
        onItemLeave: a.useCallback(
          (I) => {
            var Z;
            V(I) || ((Z = _.current) == null || Z.focus(), T(null));
          },
          [V]
        ),
        onTriggerLeave: a.useCallback(
          (I) => {
            V(I) && I.preventDefault();
          },
          [V]
        ),
        pointerGraceTimerRef: M,
        onPointerGraceIntentChange: a.useCallback((I) => {
          D.current = I;
        }, []),
        children: /* @__PURE__ */ m(P, { ...A, children: /* @__PURE__ */ m(
          ko,
          {
            asChild: !0,
            trapped: i,
            onMountAutoFocus: k(s, (I) => {
              var Z;
              I.preventDefault(), (Z = _.current) == null || Z.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: c,
            children: /* @__PURE__ */ m(
              Vt,
              {
                asChild: !0,
                disableOutsidePointerEvents: l,
                onEscapeKeyDown: d,
                onPointerDownOutside: f,
                onFocusOutside: p,
                onInteractOutside: g,
                onDismiss: w,
                children: /* @__PURE__ */ m(
                  Es,
                  {
                    asChild: !0,
                    ...C,
                    dir: S.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: E,
                    onCurrentTabStopIdChange: T,
                    onEntryFocus: k(u, (I) => {
                      S.isUsingKeyboardRef.current || I.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ m(
                      Vo,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Ms(y.open),
                        "data-radix-menu-content": "",
                        dir: S.dir,
                        ...b,
                        ...h,
                        ref: R,
                        style: { outline: "none", ...h.style },
                        onKeyDown: k(h.onKeyDown, (I) => {
                          const G = I.target.closest("[data-radix-menu-content]") === I.currentTarget, Q = I.ctrlKey || I.altKey || I.metaKey, ae = I.key.length === 1;
                          G && (I.key === "Tab" && I.preventDefault(), !Q && ae && N(I.key));
                          const ce = _.current;
                          if (I.target !== ce || !up.includes(I.key)) return;
                          I.preventDefault();
                          const me = x().filter((F) => !F.disabled).map((F) => F.ref.current);
                          Ps.includes(I.key) && me.reverse(), As(me);
                        }),
                        onBlur: k(t.onBlur, (I) => {
                          I.currentTarget.contains(I.target) || (window.clearTimeout(O.current), $.current = "");
                        }),
                        onPointerMove: k(
                          t.onPointerMove,
                          hn((I) => {
                            const Z = I.target, G = H.current !== I.clientX;
                            if (I.currentTarget.contains(Z) && G) {
                              const Q = I.clientX > H.current ? "right" : "left";
                              L.current = Q, H.current = I.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }, "MenuContentImpl")
), Tp = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ J(function(t, n) {
    const { __scopeMenu: o, ...r } = t;
    return /* @__PURE__ */ m(B.div, { ...r, ref: n });
  }, "MenuLabel")
), vo = "MenuItem", Hr = "menu.itemSelect", Pp = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ J(function(t, n) {
    const { disabled: o = !1, onSelect: r, ...i } = t, s = a.useRef(null), c = or(vo, t.__scopeMenu), l = ks(vo, t.__scopeMenu), u = W(n, s), d = a.useRef(!1), f = /* @__PURE__ */ J(() => {
      const p = s.current;
      if (!o && p) {
        const g = new CustomEvent(Hr, { bubbles: !0, cancelable: !0 });
        p.addEventListener(Hr, (w) => r == null ? void 0 : r(w), { once: !0 }), vn(p, g), g.defaultPrevented ? d.current = !1 : c.onClose();
      }
    }, "handleSelect");
    return /* @__PURE__ */ m(
      Rp,
      {
        ...i,
        ref: u,
        disabled: o,
        onClick: k(t.onClick, f),
        onPointerDown: (p) => {
          var g;
          (g = t.onPointerDown) == null || g.call(t, p), d.current = !0;
        },
        onPointerUp: k(t.onPointerUp, (p) => {
          var g;
          d.current || (g = p.currentTarget) == null || g.click();
        }),
        onKeyDown: k(t.onKeyDown, (p) => {
          o || p.target !== p.currentTarget || l.searchRef.current !== "" && p.key === " " || ap.includes(p.key) && (p.currentTarget.click(), p.preventDefault());
        })
      }
    );
  }, "MenuItem")
), Rp = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ J(function(t, n) {
    const { __scopeMenu: o, disabled: r = !1, textValue: i, ...s } = t, c = ks(vo, o), l = _s(o), u = a.useRef(null), d = W(n, u), [f, p] = a.useState(!1), [g, w] = a.useState("");
    return a.useEffect(() => {
      const v = u.current;
      v && w((v.textContent ?? "").trim());
    }, [s.children]), /* @__PURE__ */ m(
      ho.ItemSlot,
      {
        scope: o,
        disabled: r,
        textValue: i ?? g,
        children: /* @__PURE__ */ m(Ts, { asChild: !0, ...l, focusable: !r, children: /* @__PURE__ */ m(
          B.div,
          {
            role: "menuitem",
            "data-highlighted": f ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...s,
            ref: d,
            onPointerMove: k(
              t.onPointerMove,
              hn((v) => {
                r ? c.onItemLeave(v) : (c.onItemEnter(v), v.defaultPrevented || v.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: k(
              t.onPointerLeave,
              hn((v) => c.onItemLeave(v))
            ),
            onFocus: k(t.onFocus, () => p(!0)),
            onBlur: k(t.onBlur, () => p(!1))
          }
        ) })
      }
    );
  }, "MenuItemImpl")
), _p = "MenuRadioGroup", [kv, Ov] = ct(
  _p,
  { value: void 0, onValueChange: /* @__PURE__ */ J(() => {
  }, "onValueChange") }
), Ip = "MenuItemIndicator", [Mv, Dv] = ct(
  Ip,
  { checked: !1 }
), kp = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ J(function(t, n) {
    const { __scopeMenu: o, ...r } = t;
    return /* @__PURE__ */ m(
      B.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: n
      }
    );
  }, "MenuSeparator")
), Op = "MenuSub", [Av, Nv] = ct(Op);
function Ms(e) {
  return e ? "open" : "closed";
}
J(Ms, "getOpenState");
function Ds(e) {
  return e === "indeterminate";
}
J(Ds, "isIndeterminate");
function Mp(e) {
  return Ds(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
J(Mp, "getCheckedState");
function As(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
J(As, "focusFirst");
function Ns(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
J(Ns, "wrapArray");
function Ls(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let s = Ns(e, Math.max(i, 0));
  r.length === 1 && (s = s.filter((u) => u !== n));
  const l = s.find(
    (u) => u.toLowerCase().startsWith(r.toLowerCase())
  );
  return l !== n ? l : void 0;
}
J(Ls, "getNextMatch");
function $s(e, t) {
  const { x: n, y: o } = e;
  let r = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const c = t[i], l = t[s], u = c.x, d = c.y, f = l.x, p = l.y;
    d > o != p > o && n < (f - u) * (o - d) / (p - d) + u && (r = !r);
  }
  return r;
}
J($s, "isPointInPolygon");
function Fs(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return $s(n, t);
}
J(Fs, "isPointerInGraceArea");
function hn(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
J(hn, "whenMouse");
var Dp = hp, Ap = vp, Np = bp, Lp = Cp, $p = Tp, Fp = Pp, Bp = kp, Vp = Object.defineProperty, at = (e, t) => Vp(e, "name", { value: t, configurable: !0 }), rr = "DropdownMenu", [Hp, Lv] = /* @__PURE__ */ pe(
  rr,
  [Rs]
), lt = Rs(), [Wp, Bs] = Hp(rr), Up = /* @__PURE__ */ at((e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: o,
    open: r,
    defaultOpen: i,
    onOpenChange: s,
    modal: c = !0
  } = e, l = lt(t), u = a.useRef(null), [d, f] = Se({
    prop: r,
    defaultProp: i ?? !1,
    onChange: s,
    caller: rr
  });
  return /* @__PURE__ */ m(
    Wp,
    {
      scope: t,
      triggerId: ye(),
      triggerRef: u,
      contentId: ye(),
      open: d,
      onOpenChange: f,
      onOpenToggle: a.useCallback(() => f((p) => !p), [f]),
      modal: c,
      children: /* @__PURE__ */ m(Dp, { ...l, open: d, onOpenChange: f, dir: o, modal: c, children: n })
    }
  );
}, "DropdownMenu"), jp = "DropdownMenuTrigger", Kp = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ at(function(t, n) {
    const { __scopeDropdownMenu: o, disabled: r = !1, ...i } = t, s = Bs(jp, o), c = lt(o), l = W(n, s.triggerRef);
    return /* @__PURE__ */ m(Ap, { asChild: !0, ...c, children: /* @__PURE__ */ m(
      B.button,
      {
        type: "button",
        id: s.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": s.open,
        "aria-controls": s.open ? s.contentId : void 0,
        "data-state": s.open ? "open" : "closed",
        "data-disabled": r ? "" : void 0,
        disabled: r,
        ...i,
        ref: l,
        onPointerDown: k(t.onPointerDown, (u) => {
          !r && u.button === 0 && u.ctrlKey === !1 && (s.onOpenToggle(), s.open || u.preventDefault());
        }),
        onKeyDown: k(t.onKeyDown, (u) => {
          r || (["Enter", " "].includes(u.key) && s.onOpenToggle(), u.key === "ArrowDown" && s.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(u.key) && u.preventDefault());
        })
      }
    ) });
  }, "DropdownMenuTrigger")
), Gp = /* @__PURE__ */ at((e) => {
  const { __scopeDropdownMenu: t, ...n } = e, o = lt(t);
  return /* @__PURE__ */ m(Np, { ...o, ...n });
}, "DropdownMenuPortal"), zp = "DropdownMenuContent", Yp = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ at(function(t, n) {
    const { __scopeDropdownMenu: o, ...r } = t, i = Bs(zp, o), s = lt(o), c = a.useRef(!1);
    return /* @__PURE__ */ m(
      Lp,
      {
        id: i.contentId,
        "aria-labelledby": i.triggerId,
        ...s,
        ...r,
        ref: n,
        onCloseAutoFocus: k(t.onCloseAutoFocus, (l) => {
          var u;
          c.current || (u = i.triggerRef.current) == null || u.focus(), c.current = !1, l.preventDefault();
        }),
        onInteractOutside: k(t.onInteractOutside, (l) => {
          const u = l.detail.originalEvent, d = u.button === 0 && u.ctrlKey === !0, f = u.button === 2 || d;
          (!i.modal || f) && (c.current = !0);
        }),
        style: {
          ...t.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }, "DropdownMenuContent")
), Xp = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ at(function(t, n) {
    const { __scopeDropdownMenu: o, ...r } = t, i = lt(o);
    return /* @__PURE__ */ m($p, { ...i, ...r, ref: n });
  }, "DropdownMenuLabel")
), qp = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ at(function(t, n) {
    const { __scopeDropdownMenu: o, ...r } = t, i = lt(o);
    return /* @__PURE__ */ m(Fp, { ...i, ...r, ref: n });
  }, "DropdownMenuItem")
), Zp = /* @__PURE__ */ a.forwardRef(/* @__PURE__ */ at(function(t, n) {
  const { __scopeDropdownMenu: o, ...r } = t, i = lt(o);
  return /* @__PURE__ */ m(Bp, { ...i, ...r, ref: n });
}, "DropdownMenuSeparator")), Jp = Up, Qp = Kp, em = Gp, tm = Yp, nm = Xp, om = qp, rm = Zp;
const im = "wk-Menu_content", sm = "wk-Menu_item", cm = "wk-Menu_danger", am = "wk-Menu_label", lm = "wk-Menu_separator", um = "wk-Menu_shortcut", bt = {
  content: im,
  item: sm,
  danger: cm,
  label: am,
  separator: lm,
  shortcut: um
};
function $v({ trigger: e, children: t, align: n = "start", side: o = "bottom", className: r, ...i }) {
  return /* @__PURE__ */ U(Jp, { ...i, children: [
    /* @__PURE__ */ m(Qp, { asChild: !0, children: e }),
    /* @__PURE__ */ m(em, { children: /* @__PURE__ */ m(
      tm,
      {
        className: Y(bt.content, r),
        align: n,
        side: o,
        sideOffset: 4,
        collisionPadding: 8,
        children: t
      }
    ) })
  ] });
}
const Fv = xe(function({ tone: t = "default", shortcut: n, className: o, children: r, ...i }, s) {
  return /* @__PURE__ */ U(
    om,
    {
      ref: s,
      className: Y(bt.item, t === "danger" && bt.danger, o),
      ...i,
      children: [
        r,
        n && /* @__PURE__ */ m("span", { className: bt.shortcut, children: n })
      ]
    }
  );
});
function Bv({ children: e }) {
  return /* @__PURE__ */ m(nm, { className: bt.label, children: e });
}
function Vv() {
  return /* @__PURE__ */ m(rm, { className: bt.separator });
}
var dm = Object.defineProperty, ie = (e, t) => dm(e, "name", { value: t, configurable: !0 }), [ir, Hv] = /* @__PURE__ */ pe("Tooltip", [
  Tt
]), Mn = Tt(), fm = "TooltipProvider", pm = 700, go = "tooltip.open", [mm, sr] = ir(fm), hm = /* @__PURE__ */ ie((e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = pm,
    skipDelayDuration: o = 300,
    disableHoverableContent: r = !1,
    children: i
  } = e, s = a.useRef(!0), c = a.useRef(!1), l = a.useRef(0);
  return a.useEffect(() => {
    const u = l.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ m(
    mm,
    {
      scope: t,
      isOpenDelayedRef: s,
      delayDuration: n,
      onOpen: a.useCallback(() => {
        o <= 0 || (window.clearTimeout(l.current), s.current = !1);
      }, [o]),
      onClose: a.useCallback(() => {
        o <= 0 || (window.clearTimeout(l.current), l.current = window.setTimeout(
          () => s.current = !0,
          o
        ));
      }, [o]),
      isPointerInTransitRef: c,
      onPointerInTransitChange: a.useCallback((u) => {
        c.current = u;
      }, []),
      disableHoverableContent: r,
      children: i
    }
  );
}, "TooltipProvider"), wo = "Tooltip", [vm, Gt] = ir(wo), gm = /* @__PURE__ */ ie((e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: o,
    defaultOpen: r,
    onOpenChange: i,
    disableHoverableContent: s,
    delayDuration: c
  } = e, l = sr(wo, e.__scopeTooltip), u = Mn(t), [d, f] = a.useState(null), [p, g] = a.useState(void 0), w = ye(), v = a.useRef(0), h = s ?? l.disableHoverableContent, y = c ?? l.delayDuration, S = a.useRef(!1), [b, C] = Se({
    prop: o,
    defaultProp: r ?? !1,
    onChange: /* @__PURE__ */ ie((O) => {
      O ? (l.onOpen(), document.dispatchEvent(new CustomEvent(go))) : l.onClose(), i == null || i(O);
    }, "onChange"),
    caller: wo
  }), x = a.useMemo(() => b ? S.current ? "delayed-open" : "instant-open" : "closed", [b]), E = a.useCallback(() => {
    window.clearTimeout(v.current), v.current = 0, S.current = !1, C(!0);
  }, [C]), T = a.useCallback(() => {
    window.clearTimeout(v.current), v.current = 0, C(!1);
  }, [C]), _ = a.useCallback(() => {
    window.clearTimeout(v.current), v.current = window.setTimeout(() => {
      S.current = !0, C(!0), v.current = 0;
    }, y);
  }, [y, C]);
  return a.useEffect(() => () => {
    v.current && (window.clearTimeout(v.current), v.current = 0);
  }, []), /* @__PURE__ */ m(Fo, { ...u, children: /* @__PURE__ */ m(
    vm,
    {
      scope: t,
      contentId: p ?? w,
      setContentId: g,
      open: b,
      stateAttribute: x,
      trigger: d,
      onTriggerChange: f,
      onTriggerEnter: a.useCallback(() => {
        l.isOpenDelayedRef.current ? _() : E();
      }, [l.isOpenDelayedRef, _, E]),
      onTriggerLeave: a.useCallback(() => {
        h ? T() : (window.clearTimeout(v.current), v.current = 0);
      }, [T, h]),
      onOpen: E,
      onClose: T,
      disableHoverableContent: h,
      children: n
    }
  ) });
}, "Tooltip"), Wr = "TooltipTrigger", wm = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ ie(function(t, n) {
    const { __scopeTooltip: o, ...r } = t, i = Gt(Wr, o), s = sr(Wr, o), c = Mn(o), l = a.useRef(null), u = W(n, l, i.onTriggerChange), d = a.useRef(!1), f = a.useRef(!1), p = a.useCallback(() => d.current = !1, []);
    return a.useEffect(() => () => document.removeEventListener("pointerup", p), [p]), /* @__PURE__ */ m(Bo, { asChild: !0, ...c, children: /* @__PURE__ */ m(
      B.button,
      {
        "aria-describedby": i.open ? i.contentId : void 0,
        "data-state": i.stateAttribute,
        ...r,
        ref: u,
        onPointerMove: k(t.onPointerMove, (g) => {
          g.pointerType !== "touch" && !f.current && !s.isPointerInTransitRef.current && (i.onTriggerEnter(), f.current = !0);
        }),
        onPointerLeave: k(t.onPointerLeave, () => {
          i.onTriggerLeave(), f.current = !1;
        }),
        onPointerDown: k(t.onPointerDown, () => {
          i.open && i.onClose(), d.current = !0, document.addEventListener("pointerup", p, { once: !0 });
        }),
        onFocus: k(t.onFocus, () => {
          d.current || i.onOpen();
        }),
        onBlur: k(t.onBlur, i.onClose),
        onClick: k(t.onClick, i.onClose)
      }
    ) });
  }, "TooltipTrigger")
), Vs = "TooltipPortal", [bm, ym] = ir(Vs, {
  forceMount: void 0
}), Cm = /* @__PURE__ */ ie((e) => {
  const { __scopeTooltip: t, forceMount: n, children: o, container: r } = e, i = Gt(Vs, t);
  return /* @__PURE__ */ m(bm, { scope: t, forceMount: n, children: /* @__PURE__ */ m(Te, { present: n || i.open, children: /* @__PURE__ */ m(Wt, { asChild: !0, container: r, children: o }) }) });
}, "TooltipPortal"), $t = "TooltipContent", Sm = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ ie(function(t, n) {
    const o = ym($t, t.__scopeTooltip), { forceMount: r = o.forceMount, side: i = "top", ...s } = t, c = Gt($t, t.__scopeTooltip);
    return /* @__PURE__ */ m(Te, { present: r || c.open, children: c.disableHoverableContent ? /* @__PURE__ */ m(Hs, { side: i, ...s, ref: n }) : /* @__PURE__ */ m(xm, { side: i, ...s, ref: n }) });
  }, "TooltipContent")
), xm = /* @__PURE__ */ a.forwardRef(/* @__PURE__ */ ie(function(t, n) {
  const o = Gt($t, t.__scopeTooltip), r = sr($t, t.__scopeTooltip), i = a.useRef(null), s = W(n, i), [c, l] = a.useState(null), { trigger: u, onClose: d } = o, f = i.current, { onPointerInTransitChange: p } = r, g = a.useCallback(() => {
    l(null), p(!1);
  }, [p]), w = a.useCallback(
    (v, h) => {
      const y = v.currentTarget, S = { x: v.clientX, y: v.clientY }, b = Ws(S, y.getBoundingClientRect()), C = Us(S, b), x = js(h.getBoundingClientRect()), E = Gs([...C, ...x]);
      l(E), p(!0);
    },
    [p]
  );
  return a.useEffect(() => () => g(), [g]), a.useEffect(() => {
    if (u && f) {
      const v = /* @__PURE__ */ ie((y) => w(y, f), "handleTriggerLeave"), h = /* @__PURE__ */ ie((y) => w(y, u), "handleContentLeave");
      return u.addEventListener("pointerleave", v), f.addEventListener("pointerleave", h), () => {
        u.removeEventListener("pointerleave", v), f.removeEventListener("pointerleave", h);
      };
    }
  }, [u, f, w, g]), a.useEffect(() => {
    if (c) {
      const v = /* @__PURE__ */ ie((h) => {
        const y = h.target, S = { x: h.clientX, y: h.clientY }, b = (u == null ? void 0 : u.contains(y)) || (f == null ? void 0 : f.contains(y)), C = !Ks(S, c);
        b ? g() : C && (g(), d());
      }, "handleTrackPointerGrace");
      return document.addEventListener("pointermove", v), () => document.removeEventListener("pointermove", v);
    }
  }, [u, f, c, d, g]), /* @__PURE__ */ m(Hs, { ...t, ref: s });
}, "TooltipContentHoverable")), Em = /* @__PURE__ */ Qr("TooltipContent"), Hs = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ie(function(t, n) {
    const {
      __scopeTooltip: o,
      children: r,
      "aria-label": i,
      id: s,
      onEscapeKeyDown: c,
      onPointerDownOutside: l,
      ...u
    } = t, d = Gt($t, o), f = Mn(o), { onClose: p } = d;
    a.useEffect(() => (document.addEventListener(go, p), () => document.removeEventListener(go, p)), [p]), a.useEffect(() => {
      if (d.trigger) {
        const w = /* @__PURE__ */ ie((v) => {
          v.target instanceof Node && v.target.contains(d.trigger) && p();
        }, "handleScroll");
        return window.addEventListener("scroll", w, { capture: !0 }), () => window.removeEventListener("scroll", w, { capture: !0 });
      }
    }, [d.trigger, p]);
    const { setContentId: g } = d;
    return oe(() => (g(s), () => {
      g(void 0);
    }), [s, g]), /* @__PURE__ */ m(
      Vt,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: c,
        onPointerDownOutside: l,
        onFocusOutside: (w) => w.preventDefault(),
        onDismiss: p,
        children: /* @__PURE__ */ U(
          Vo,
          {
            "data-state": d.stateAttribute,
            role: i ? void 0 : "tooltip",
            id: i ? void 0 : d.contentId,
            ...f,
            ...u,
            ref: n,
            style: {
              ...u.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ m(Em, { children: r }),
              i ? /* @__PURE__ */ m(ql, { id: d.contentId, role: "tooltip", children: i }) : null
            ]
          }
        )
      }
    );
  }, "TooltipContentImpl")
), Tm = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ ie(function(t, n) {
    const { __scopeTooltip: o, ...r } = t, i = Mn(o);
    return /* @__PURE__ */ m($l, { ...i, ...r, ref: n });
  }, "TooltipArrow")
);
function Ws(e, t) {
  const n = Math.abs(t.top - e.y), o = Math.abs(t.bottom - e.y), r = Math.abs(t.right - e.x), i = Math.abs(t.left - e.x);
  switch (Math.min(n, o, r, i)) {
    case i:
      return "left";
    case r:
      return "right";
    case n:
      return "top";
    case o:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
ie(Ws, "getExitSideFromRect");
function Us(e, t, n = 5) {
  const o = [];
  switch (t) {
    case "top":
      o.push(
        { x: e.x - n, y: e.y + n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "bottom":
      o.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x + n, y: e.y - n }
      );
      break;
    case "left":
      o.push(
        { x: e.x + n, y: e.y - n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "right":
      o.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x - n, y: e.y + n }
      );
      break;
  }
  return o;
}
ie(Us, "getPaddedExitPoints");
function js(e) {
  const { top: t, right: n, bottom: o, left: r } = e;
  return [
    { x: r, y: t },
    { x: n, y: t },
    { x: n, y: o },
    { x: r, y: o }
  ];
}
ie(js, "getPointsFromRect");
function Ks(e, t) {
  const { x: n, y: o } = e;
  let r = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const c = t[i], l = t[s], u = c.x, d = c.y, f = l.x, p = l.y;
    d > o != p > o && n < (f - u) * (o - d) / (p - d) + u && (r = !r);
  }
  return r;
}
ie(Ks, "isPointInPolygon");
function Gs(e) {
  const t = e.slice();
  return t.sort((n, o) => n.x < o.x ? -1 : n.x > o.x ? 1 : n.y < o.y ? -1 : n.y > o.y ? 1 : 0), zs(t);
}
ie(Gs, "getHull");
function zs(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let o = 0; o < e.length; o++) {
    const r = e[o];
    for (; t.length >= 2; ) {
      const i = t[t.length - 1], s = t[t.length - 2];
      if ((i.x - s.x) * (r.y - s.y) >= (i.y - s.y) * (r.x - s.x)) t.pop();
      else break;
    }
    t.push(r);
  }
  t.pop();
  const n = [];
  for (let o = e.length - 1; o >= 0; o--) {
    const r = e[o];
    for (; n.length >= 2; ) {
      const i = n[n.length - 1], s = n[n.length - 2];
      if ((i.x - s.x) * (r.y - s.y) >= (i.y - s.y) * (r.x - s.x)) n.pop();
      else break;
    }
    n.push(r);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
ie(zs, "getHullPresorted");
var Pm = hm, Rm = gm, _m = wm, Im = Cm, km = Sm, Om = Tm;
const Mm = "wk-Tooltip_content", Dm = "wk-Tooltip_arrow", Ur = {
  content: Mm,
  arrow: Dm
}, Wv = Pm;
function Uv({ content: e, children: t, side: n = "top", delayDuration: o, className: r }) {
  return /* @__PURE__ */ U(Rm, { delayDuration: o, children: [
    /* @__PURE__ */ m(_m, { asChild: !0, children: t }),
    /* @__PURE__ */ m(Im, { children: /* @__PURE__ */ U(
      km,
      {
        className: Y(Ur.content, r),
        side: n,
        sideOffset: 6,
        collisionPadding: 8,
        children: [
          e,
          /* @__PURE__ */ m(Om, { className: Ur.arrow, width: 10, height: 5 })
        ]
      }
    ) })
  ] });
}
var Am = Object.defineProperty, Pt = (e, t) => Am(e, "name", { value: t, configurable: !0 }), cr = "Tabs", [Nm, jv] = /* @__PURE__ */ pe(cr, [
  kn
]), Ys = kn(), [Lm, ar] = Nm(cr), $m = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Pt(function(t, n) {
    const {
      __scopeTabs: o,
      value: r,
      onValueChange: i,
      defaultValue: s,
      orientation: c = "horizontal",
      dir: l,
      activationMode: u = "automatic",
      ...d
    } = t, f = Bt(l), [p, g] = Se({
      prop: r,
      onChange: i,
      defaultProp: s ?? "",
      caller: cr
    });
    return /* @__PURE__ */ m(
      Lm,
      {
        scope: o,
        baseId: ye(),
        value: p,
        onValueChange: g,
        orientation: c,
        dir: f,
        activationMode: u,
        children: /* @__PURE__ */ m(
          B.div,
          {
            dir: f,
            "data-orientation": c,
            ...d,
            ref: n
          }
        )
      }
    );
  }, "Tabs")
), Fm = "TabsList", Bm = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Pt(function(t, n) {
    const { __scopeTabs: o, loop: r = !0, ...i } = t, s = ar(Fm, o), c = Ys(o);
    return /* @__PURE__ */ m(
      Es,
      {
        asChild: !0,
        ...c,
        orientation: s.orientation,
        dir: s.dir,
        loop: r,
        children: /* @__PURE__ */ m(
          B.div,
          {
            role: "tablist",
            "aria-orientation": s.orientation,
            ...i,
            ref: n
          }
        )
      }
    );
  }, "TabsList")
), Vm = "TabsTrigger", Hm = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ Pt(function(t, n) {
    const { __scopeTabs: o, value: r, disabled: i = !1, ...s } = t, c = ar(Vm, o), l = Ys(o), u = lr(c.baseId, r), d = ur(c.baseId, r), f = r === c.value;
    return /* @__PURE__ */ m(
      Ts,
      {
        asChild: !0,
        ...l,
        focusable: !i,
        active: f,
        children: /* @__PURE__ */ m(
          B.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": f,
            "aria-controls": d,
            "data-state": f ? "active" : "inactive",
            "data-disabled": i ? "" : void 0,
            disabled: i,
            id: u,
            ...s,
            ref: n,
            onMouseDown: k(t.onMouseDown, (p) => {
              !i && p.button === 0 && p.ctrlKey === !1 ? c.onValueChange(r) : p.preventDefault();
            }),
            onKeyDown: k(t.onKeyDown, (p) => {
              i || p.target !== p.currentTarget || [" ", "Enter"].includes(p.key) && c.onValueChange(r);
            }),
            onFocus: k(t.onFocus, () => {
              const p = c.activationMode !== "manual";
              !f && !i && p && c.onValueChange(r);
            })
          }
        )
      }
    );
  }, "TabsTrigger")
), Wm = "TabsContent", Um = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ Pt(function(t, n) {
    const { __scopeTabs: o, value: r, forceMount: i, children: s, ...c } = t, l = ar(Wm, o), u = lr(l.baseId, r), d = ur(l.baseId, r), f = r === l.value, p = a.useRef(f);
    return a.useEffect(() => {
      const g = requestAnimationFrame(() => p.current = !1);
      return () => cancelAnimationFrame(g);
    }, []), /* @__PURE__ */ m(Te, { present: i || f, children: ({ present: g }) => /* @__PURE__ */ m(
      B.div,
      {
        "data-state": f ? "active" : "inactive",
        "data-orientation": l.orientation,
        role: "tabpanel",
        "aria-labelledby": u,
        hidden: !g,
        id: d,
        tabIndex: 0,
        ...c,
        ref: n,
        style: {
          ...t.style,
          animationDuration: p.current ? "0s" : void 0
        },
        children: g && s
      }
    ) });
  }, "TabsContent")
);
function lr(e, t) {
  return `${e}-trigger-${t}`;
}
Pt(lr, "makeTriggerId");
function ur(e, t) {
  return `${e}-content-${t}`;
}
Pt(ur, "makeContentId");
var jm = $m, Km = Bm, Gm = Hm, zm = Um;
const Ym = "wk-Tabs_root", Xm = "wk-Tabs_list", qm = "wk-Tabs_trigger", Zm = "wk-Tabs_content", Dn = {
  root: Ym,
  list: Xm,
  trigger: qm,
  content: Zm
};
function Kv({ className: e, ...t }) {
  return /* @__PURE__ */ m(jm, { className: Y(Dn.root, e), ...t });
}
function Gv({ className: e, ...t }) {
  return /* @__PURE__ */ m(Km, { className: Y(Dn.list, e), ...t });
}
const zv = xe(
  function({ className: t, ...n }, o) {
    return /* @__PURE__ */ m(Gm, { ref: o, className: Y(Dn.trigger, t), ...n });
  }
);
function Yv({ className: e, ...t }) {
  return /* @__PURE__ */ m(zm, { className: Y(Dn.content, e), ...t });
}
var Jm = Object.defineProperty, te = (e, t) => Jm(e, "name", { value: t, configurable: !0 }), Xs = "ToastProvider", [dr, qs, Qm] = /* @__PURE__ */ Ft("Toast"), [Zs, Xv] = /* @__PURE__ */ pe("Toast", [Qm]), [eh, An] = Zs(Xs), th = /* @__PURE__ */ te((e) => {
  const {
    __scopeToast: t,
    label: n = "Notification",
    duration: o = 5e3,
    swipeDirection: r = "right",
    swipeThreshold: i = 50,
    announcerContainer: s,
    children: c
  } = e, [l, u] = a.useState(null), [d, f] = a.useState(0), p = a.useRef(!1);
  return n.trim() || console.error(
    `Invalid prop \`label\` supplied to \`${Xs}\`. Expected non-empty \`string\`.`
  ), /* @__PURE__ */ m(dr.Provider, { scope: t, children: /* @__PURE__ */ m(
    eh,
    {
      scope: t,
      label: n,
      duration: o,
      swipeDirection: r,
      swipeThreshold: i,
      toastCount: d,
      viewport: l,
      onViewportChange: u,
      onToastAdd: a.useCallback(() => f((g) => g + 1), []),
      onToastRemove: a.useCallback(() => f((g) => g - 1), []),
      isClosePausedRef: p,
      announcerContainer: s,
      children: c
    }
  ) });
}, "ToastProvider"), nh = "ToastViewport", oh = ["F8"], bo = "toast.viewportPause", yo = "toast.viewportResume", rh = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ te(function(t, n) {
    const {
      __scopeToast: o,
      hotkey: r = oh,
      label: i = "Notifications ({hotkey})",
      ...s
    } = t, c = An(nh, o), l = qs(o), u = a.useRef(null), d = a.useRef(null), f = a.useRef(null), p = a.useRef(null), g = W(n, p, c.onViewportChange), w = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), v = c.toastCount > 0;
    a.useEffect(() => {
      const y = /* @__PURE__ */ te((S) => {
        var C;
        r.length !== 0 && r.every((x) => S[x] || S.code === x) && ((C = p.current) == null || C.focus());
      }, "handleKeyDown");
      return document.addEventListener("keydown", y), () => document.removeEventListener("keydown", y);
    }, [r]), a.useEffect(() => {
      const y = u.current, S = p.current;
      if (v && y && S) {
        const b = /* @__PURE__ */ te(() => {
          if (!c.isClosePausedRef.current) {
            const T = new CustomEvent(bo);
            S.dispatchEvent(T), c.isClosePausedRef.current = !0;
          }
        }, "handlePause"), C = /* @__PURE__ */ te(() => {
          if (c.isClosePausedRef.current) {
            const T = new CustomEvent(yo);
            S.dispatchEvent(T), c.isClosePausedRef.current = !1;
          }
        }, "handleResume"), x = /* @__PURE__ */ te((T) => {
          !y.contains(T.relatedTarget) && C();
        }, "handleFocusOutResume"), E = /* @__PURE__ */ te(() => {
          y.contains(document.activeElement) || C();
        }, "handlePointerLeaveResume");
        return y.addEventListener("focusin", b), y.addEventListener("focusout", x), y.addEventListener("pointermove", b), y.addEventListener("pointerleave", E), window.addEventListener("blur", b), window.addEventListener("focus", C), () => {
          y.removeEventListener("focusin", b), y.removeEventListener("focusout", x), y.removeEventListener("pointermove", b), y.removeEventListener("pointerleave", E), window.removeEventListener("blur", b), window.removeEventListener("focus", C);
        };
      }
    }, [v, c.isClosePausedRef]);
    const h = a.useCallback(
      ({ tabbingDirection: y }) => {
        const b = l().map((C) => {
          const x = C.ref.current, E = [x, ...ec(x)];
          return y === "forwards" ? E : E.reverse();
        });
        return (y === "forwards" ? b.reverse() : b).flat();
      },
      [l]
    );
    return a.useEffect(() => {
      const y = p.current;
      if (y) {
        const S = /* @__PURE__ */ te((b) => {
          var E, T, _;
          const C = b.altKey || b.ctrlKey || b.metaKey;
          if (b.key === "Tab" && !C) {
            const R = document.activeElement, O = b.shiftKey;
            if (b.target === y && O) {
              (E = d.current) == null || E.focus();
              return;
            }
            const D = h({ tabbingDirection: O ? "backwards" : "forwards" }), L = D.findIndex((H) => H === R);
            ln(D.slice(L + 1)) ? b.preventDefault() : O ? (T = d.current) == null || T.focus() : (_ = f.current) == null || _.focus();
          }
        }, "handleKeyDown");
        return y.addEventListener("keydown", S), () => y.removeEventListener("keydown", S);
      }
    }, [l, h]), /* @__PURE__ */ U(
      sa,
      {
        ref: u,
        role: "region",
        "aria-label": i.replace("{hotkey}", w),
        tabIndex: -1,
        style: { pointerEvents: v ? void 0 : "none" },
        children: [
          v && /* @__PURE__ */ m(
            jr,
            {
              ref: d,
              onFocusFromOutsideViewport: () => {
                const y = h({
                  tabbingDirection: "forwards"
                });
                ln(y);
              }
            }
          ),
          /* @__PURE__ */ m(dr.Slot, { scope: o, children: /* @__PURE__ */ m(B.ol, { tabIndex: -1, ...s, ref: g }) }),
          v && /* @__PURE__ */ m(
            jr,
            {
              ref: f,
              onFocusFromOutsideViewport: () => {
                const y = h({
                  tabbingDirection: "backwards"
                });
                ln(y);
              }
            }
          )
        ]
      }
    );
  }, "ToastViewport")
), ih = "ToastFocusProxy", jr = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ te(function(t, n) {
    const { __scopeToast: o, onFocusFromOutsideViewport: r, ...i } = t, s = An(ih, o);
    return /* @__PURE__ */ m(
      Ho,
      {
        tabIndex: 0,
        ...i,
        ref: n,
        style: { position: "fixed" },
        onFocus: (c) => {
          var d;
          const l = c.relatedTarget;
          !((d = s.viewport) != null && d.contains(l)) && r();
        }
      }
    );
  }, "ToastFocusProxy")
), Nn = "Toast", sh = "toast.swipeStart", ch = "toast.swipeMove", ah = "toast.swipeCancel", lh = "toast.swipeEnd", uh = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ te(function(t, n) {
    const { forceMount: o, open: r, defaultOpen: i, onOpenChange: s, ...c } = t, [l, u] = Se({
      prop: r,
      defaultProp: i ?? !0,
      onChange: s,
      caller: Nn
    });
    return /* @__PURE__ */ m(Te, { present: o || l, children: /* @__PURE__ */ m(
      ph,
      {
        open: l,
        ...c,
        ref: n,
        onClose: () => u(!1),
        onPause: ue(t.onPause),
        onResume: ue(t.onResume),
        onSwipeStart: k(t.onSwipeStart, (d) => {
          d.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: k(t.onSwipeMove, (d) => {
          const { x: f, y: p } = d.detail.delta;
          d.currentTarget.setAttribute("data-swipe", "move"), d.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${f}px`), d.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${p}px`);
        }),
        onSwipeCancel: k(t.onSwipeCancel, (d) => {
          d.currentTarget.setAttribute("data-swipe", "cancel"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), d.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), d.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: k(t.onSwipeEnd, (d) => {
          const { x: f, y: p } = d.detail.delta;
          d.currentTarget.setAttribute("data-swipe", "end"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), d.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${f}px`), d.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${p}px`), u(!1);
        })
      }
    ) });
  }, "Toast")
), [dh, fh] = Zs(Nn, {
  onClose() {
  }
}), ph = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ te(function(t, n) {
    const {
      __scopeToast: o,
      type: r = "foreground",
      duration: i,
      open: s,
      onClose: c,
      onEscapeKeyDown: l,
      onPause: u,
      onResume: d,
      onSwipeStart: f,
      onSwipeMove: p,
      onSwipeCancel: g,
      onSwipeEnd: w,
      ...v
    } = t, h = An(Nn, o), y = qs(o), [S, b] = a.useState(null), C = W(n, b), x = a.useRef(null), E = a.useRef(null), T = i || h.duration, _ = a.useRef(0), R = a.useRef(T), O = a.useRef(0), { onToastAdd: $, onToastRemove: M } = h, D = ue(() => {
      var A;
      (S == null ? void 0 : S.contains(document.activeElement)) && ((A = h.viewport) == null || A.focus()), c();
    }), L = a.useCallback(
      (P) => {
        !P || P === 1 / 0 || (window.clearTimeout(O.current), _.current = (/* @__PURE__ */ new Date()).getTime(), O.current = window.setTimeout(D, P));
      },
      [D]
    );
    a.useEffect(() => {
      const P = h.viewport;
      if (P) {
        const A = /* @__PURE__ */ te(() => {
          L(R.current), d == null || d();
        }, "handleResume"), N = /* @__PURE__ */ te(() => {
          const V = (/* @__PURE__ */ new Date()).getTime() - _.current;
          R.current = R.current - V, window.clearTimeout(O.current), u == null || u();
        }, "handlePause");
        return P.addEventListener(bo, N), P.addEventListener(yo, A), () => {
          P.removeEventListener(bo, N), P.removeEventListener(yo, A);
        };
      }
    }, [h.viewport, T, u, d, L]), a.useEffect(() => {
      s && !h.isClosePausedRef.current && L(T);
    }, [s, T, h.isClosePausedRef, L]), a.useEffect(() => () => {
      window.clearTimeout(O.current);
    }, []), a.useEffect(() => ($(), () => M()), [$, M]);
    const H = a.useMemo(() => S ? fr(S) : null, [S]);
    return h.viewport ? /* @__PURE__ */ U(Ke, { children: [
      H && /* @__PURE__ */ m(
        mh,
        {
          __scopeToast: o,
          role: "status",
          "aria-live": r === "foreground" ? "assertive" : "polite",
          children: H
        }
      ),
      /* @__PURE__ */ m(dh, { scope: o, onClose: D, children: Ct.createPortal(
        /* @__PURE__ */ m(dr.ItemSlot, { scope: o, children: /* @__PURE__ */ m(
          ia,
          {
            asChild: !0,
            onEscapeKeyDown: k(l, (P) => {
              y().some(
                (N) => {
                  var V;
                  return (V = N.ref.current) == null ? void 0 : V.contains(P.target);
                }
              ) || D();
            }),
            children: /* @__PURE__ */ m(
              B.li,
              {
                tabIndex: 0,
                "data-state": s ? "open" : "closed",
                "data-swipe-direction": h.swipeDirection,
                ...v,
                ref: C,
                style: { userSelect: "none", touchAction: "none", ...t.style },
                onKeyDown: k(t.onKeyDown, (P) => {
                  P.key === "Escape" && (l == null || l(P.nativeEvent), P.nativeEvent.defaultPrevented || D());
                }),
                onPointerDown: k(t.onPointerDown, (P) => {
                  P.button === 0 && (x.current = { x: P.clientX, y: P.clientY });
                }),
                onPointerMove: k(t.onPointerMove, (P) => {
                  if (!x.current) return;
                  const A = P.clientX - x.current.x, N = P.clientY - x.current.y, V = !!E.current, I = ["left", "right"].includes(h.swipeDirection), Z = ["left", "up"].includes(h.swipeDirection) ? Math.min : Math.max, G = I ? Z(0, A) : 0, Q = I ? 0 : Z(0, N), ae = P.pointerType === "touch" ? 10 : 2, ce = { x: G, y: Q }, ge = { originalEvent: P, delta: ce };
                  V ? (E.current = ce, Dt(ch, p, ge, {
                    discrete: !1
                  })) : Kr(ce, h.swipeDirection, ae) ? (E.current = ce, Dt(sh, f, ge, {
                    discrete: !1
                  }), P.target.setPointerCapture(P.pointerId)) : (Math.abs(A) > ae || Math.abs(N) > ae) && (x.current = null);
                }),
                onPointerUp: k(t.onPointerUp, (P) => {
                  const A = E.current, N = P.target;
                  if (N.hasPointerCapture(P.pointerId) && N.releasePointerCapture(P.pointerId), E.current = null, x.current = null, A) {
                    const V = P.currentTarget, I = { originalEvent: P, delta: A };
                    Kr(A, h.swipeDirection, h.swipeThreshold) ? Dt(lh, w, I, {
                      discrete: !0
                    }) : Dt(
                      ah,
                      g,
                      I,
                      {
                        discrete: !0
                      }
                    ), V.addEventListener("click", (Z) => Z.preventDefault(), {
                      once: !0
                    });
                  }
                })
              }
            )
          }
        ) }),
        h.viewport
      ) })
    ] }) : null;
  }, "ToastImpl")
), mh = /* @__PURE__ */ te((e) => {
  const { __scopeToast: t, children: n, ...o } = e, r = An(Nn, t), [i, s] = a.useState(!1), [c, l] = a.useState(!1);
  return Js(() => s(!0)), a.useEffect(() => {
    const u = window.setTimeout(() => l(!0), 1e3);
    return () => window.clearTimeout(u);
  }, []), c ? null : /* @__PURE__ */ m(Wt, { asChild: !0, container: r.announcerContainer || void 0, children: /* @__PURE__ */ m(Ho, { ...o, children: i && /* @__PURE__ */ U(Ke, { children: [
    r.label,
    " ",
    n
  ] }) }) });
}, "ToastAnnounce"), hh = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ te(function(t, n) {
    const { __scopeToast: o, ...r } = t;
    return /* @__PURE__ */ m(B.div, { ...r, ref: n });
  }, "ToastTitle")
), vh = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ te(function(t, n) {
    const { __scopeToast: o, ...r } = t;
    return /* @__PURE__ */ m(B.div, { ...r, ref: n });
  }, "ToastDescription")
), gh = "ToastClose", wh = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ te(function(t, n) {
    const { __scopeToast: o, ...r } = t, i = fh(gh, o);
    return /* @__PURE__ */ m(bh, { asChild: !0, children: /* @__PURE__ */ m(
      B.button,
      {
        type: "button",
        ...r,
        ref: n,
        onClick: k(t.onClick, i.onClose)
      }
    ) });
  }, "ToastClose")
), bh = /* @__PURE__ */ a.forwardRef(/* @__PURE__ */ te(function(t, n) {
  const { __scopeToast: o, altText: r, ...i } = t;
  return /* @__PURE__ */ m(
    B.div,
    {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": r || void 0,
      ...i,
      ref: n
    }
  );
}, "ToastAnnounceExclude"));
function fr(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((o) => {
    if (o.nodeType === o.TEXT_NODE && o.textContent && t.push(o.textContent), Qs(o)) {
      const r = o.ariaHidden || o.hidden || o.style.display === "none", i = o.dataset.radixToastAnnounceExclude === "";
      if (!r)
        if (i) {
          const s = o.dataset.radixToastAnnounceAlt;
          s && t.push(s);
        } else
          t.push(...fr(o));
    }
  }), t;
}
te(fr, "getAnnounceTextContent");
function Dt(e, t, n, { discrete: o }) {
  const r = n.originalEvent.currentTarget, i = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && r.addEventListener(e, t, { once: !0 }), o ? vn(r, i) : r.dispatchEvent(i);
}
te(Dt, "handleAndDispatchCustomEvent");
var Kr = /* @__PURE__ */ te((e, t, n = 0) => {
  const o = Math.abs(e.x), r = Math.abs(e.y), i = o > r;
  return t === "left" || t === "right" ? i && o > n : !i && r > n;
}, "isDeltaInDirection");
function Js(e = () => {
}) {
  const t = ue(e);
  oe(() => {
    let n = 0, o = 0;
    return n = window.requestAnimationFrame(() => o = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(n), window.cancelAnimationFrame(o);
    };
  }, [t]);
}
te(Js, "useNextFrame");
function Qs(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
te(Qs, "isHTMLElement");
function ec(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: /* @__PURE__ */ te((o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }, "acceptNode")
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
te(ec, "getTabbableCandidates");
function ln(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
te(ln, "focusFirst");
var yh = th, Ch = rh, Sh = uh, xh = hh, Eh = vh, Th = wh;
const Ph = "wk-Toast_viewport", Rh = "wk-Toast_root", _h = "wk-Toast_body", Ih = "wk-Toast_title", kh = "wk-Toast_description", Oh = "wk-Toast_close", mt = {
  viewport: Ph,
  root: Rh,
  body: _h,
  title: Ih,
  description: kh,
  close: Oh
}, tc = So(null);
function qv({ children: e, swipeDirection: t = "right" }) {
  const [n, o] = vt([]), r = ac(1), i = un((l) => {
    o((u) => u.filter((d) => d.id !== l));
  }, []), s = un((l) => {
    const u = r.current++;
    o((d) => [...d, { ...l, id: u }]);
  }, []), c = Gr(() => ({ toast: s, dismiss: i }), [s, i]);
  return /* @__PURE__ */ m(tc.Provider, { value: c, children: /* @__PURE__ */ U(yh, { swipeDirection: t, children: [
    e,
    n.map((l) => /* @__PURE__ */ U(
      Sh,
      {
        className: mt.root,
        "data-tone": l.tone ?? "neutral",
        duration: l.duration ?? (l.tone === "danger" ? 1 / 0 : 5e3),
        type: l.tone === "danger" ? "foreground" : "background",
        onOpenChange: (u) => {
          u || i(l.id);
        },
        children: [
          /* @__PURE__ */ U("div", { className: mt.body, children: [
            /* @__PURE__ */ m(xh, { className: mt.title, children: l.title }),
            l.description && /* @__PURE__ */ m(Eh, { className: mt.description, children: l.description })
          ] }),
          /* @__PURE__ */ m(Th, { className: mt.close, "aria-label": "Dismiss", children: /* @__PURE__ */ m(Yr, {}) })
        ]
      },
      l.id
    )),
    /* @__PURE__ */ m(Ch, { className: mt.viewport })
  ] }) });
}
function Zv() {
  const e = Co(tc);
  if (!e) throw new Error("useToast must be used inside <ToastProvider>");
  return e;
}
const Mh = "wk-Table_wrapper", Dh = "wk-Table_root", Ah = "wk-Table_caption", Nh = "wk-Table_th", Lh = "wk-Table_td", $h = "wk-Table_numeric", Fh = "wk-Table_captionHidden", Bh = "wk-Table_row", Vh = "wk-Table_interactive", Oe = {
  wrapper: Mh,
  root: Dh,
  caption: Ah,
  th: Nh,
  td: Lh,
  numeric: $h,
  captionHidden: Fh,
  row: Bh,
  interactive: Vh
};
function Jv({ caption: e, captionHidden: t, interactive: n, className: o, children: r, ...i }) {
  return /* @__PURE__ */ m("div", { className: Oe.wrapper, children: /* @__PURE__ */ U("table", { className: Y(Oe.root, n && Oe.interactive, o), ...i, children: [
    e && /* @__PURE__ */ m("caption", { className: Y(Oe.caption, t && Oe.captionHidden), children: e }),
    r
  ] }) });
}
const Qv = (e) => /* @__PURE__ */ m("thead", { ...e }), eg = (e) => /* @__PURE__ */ m("tbody", { ...e }), tg = ({ selected: e, className: t, ...n }) => /* @__PURE__ */ m("tr", { "data-selected": e || void 0, className: Y(Oe.row, t), ...n }), ng = ({ numeric: e, scope: t = "col", className: n, ...o }) => /* @__PURE__ */ m("th", { scope: t, className: Y(Oe.th, e && Oe.numeric, n), ...o }), og = ({ numeric: e, className: t, ...n }) => /* @__PURE__ */ m("td", { className: Y(Oe.td, e && Oe.numeric, t), ...n }), Hh = "wk-Badge_root", Wh = "wk-Badge_neutral", Uh = "wk-Badge_accent", jh = "wk-Badge_danger", Kh = "wk-Badge_warn", Gh = "wk-Badge_success", zh = "wk-Badge_info", Yh = "wk-Badge_mono", qn = {
  root: Hh,
  neutral: Wh,
  accent: Uh,
  danger: jh,
  warn: Kh,
  success: Gh,
  info: zh,
  mono: Yh
};
function rg({ tone: e = "neutral", mono: t = !1, className: n, ...o }) {
  return /* @__PURE__ */ m("span", { className: Y(qn.root, qn[e], t && qn.mono, n), ...o });
}
const Xh = "wk-AppShell_root", qh = "wk-AppShell_titlebar", Zh = "wk-AppShell_body", Jh = "wk-AppShell_sidebar", Qh = "wk-AppShell_main", Ot = {
  root: Xh,
  titlebar: qh,
  body: Zh,
  sidebar: Jh,
  main: Qh
};
function ig({
  titlebar: e,
  draggable: t = !1,
  insetWindowControls: n = !1,
  sidebar: o,
  sidebarWidth: r,
  children: i,
  className: s
}) {
  return /* @__PURE__ */ U(
    "div",
    {
      className: Y(Ot.root, s),
      style: r ? { "--wk-sidebar-w": r } : void 0,
      children: [
        e && /* @__PURE__ */ m(
          "header",
          {
            className: Ot.titlebar,
            "data-inset-controls": n || void 0,
            ...t ? { "data-tauri-drag-region": "" } : {},
            children: e
          }
        ),
        /* @__PURE__ */ U("div", { className: Ot.body, children: [
          o && /* @__PURE__ */ m("nav", { className: Ot.sidebar, "aria-label": "Primary", children: o }),
          /* @__PURE__ */ m("main", { className: Ot.main, children: i })
        ] })
      ]
    }
  );
}
const ev = {
  1: "2xl",
  2: "xl",
  3: "lg",
  4: "md",
  5: "sm",
  6: "xs"
}, nc = {
  xs: we.xs,
  sm: we.sm,
  md: we.md,
  lg: we.lg,
  xl: we.xl,
  "2xl": we.xxl
}, sg = xe(function({ level: t, size: n, className: o, ...r }, i) {
  const s = `h${t}`, c = nc[n ?? ev[t]];
  return /* @__PURE__ */ m(s, { ref: i, className: Y(we.heading, c, o), ...r });
}), cg = xe(function({ as: t = "p", size: n = "md", tone: o = "default", mono: r = !1, className: i, ...s }, c) {
  return /* @__PURE__ */ m(
    t,
    {
      ref: c,
      className: Y(
        we.text,
        nc[n],
        o !== "default" && we[o],
        r && we.mono,
        i
      ),
      ...s
    }
  );
}), ag = xe(function({ external: t = !1, nofollow: n = !1, asChild: o = !1, className: r, rel: i, target: s, ...c }, l) {
  const u = o ? Zr : "a", d = new Set((i ?? "").split(/\s+/).filter(Boolean));
  return t && (d.add("noopener"), d.add("noreferrer")), n && d.add("nofollow"), /* @__PURE__ */ m(
    u,
    {
      ref: l,
      className: Y(we.link, r),
      target: s ?? (t ? "_blank" : void 0),
      rel: d.size ? [...d].join(" ") : void 0,
      ...c
    }
  );
}), tv = "wk-Media_image", nv = "wk-Media_skeleton", oc = {
  image: tv,
  skeleton: nv
}, lg = xe(function({ width: t, height: n, aspectRatio: o, priority: r = !1, className: i, style: s, alt: c, ...l }, u) {
  const d = o ?? (t && n ? `${t}/${n}` : void 0);
  return /* @__PURE__ */ m(
    "img",
    {
      ref: u,
      alt: c,
      width: t,
      height: n,
      loading: r ? "eager" : "lazy",
      decoding: r ? "sync" : "async",
      fetchPriority: r ? "high" : void 0,
      className: Y(oc.image, i),
      style: { ...d ? { "--wk-image-ar": String(d) } : null, ...s },
      ...l
    }
  );
});
function ug({
  width: e = "100%",
  height: t = "1em",
  radius: n = "sm",
  className: o,
  style: r,
  ...i
}) {
  return /* @__PURE__ */ m(
    "span",
    {
      "aria-hidden": "true",
      className: Y(oc.skeleton, o),
      style: {
        width: e,
        height: t,
        borderRadius: `var(--wk-radius-${n})`,
        ...r
      },
      ...i
    }
  );
}
function ov({ data: e, nonce: t }) {
  const n = JSON.stringify(e).replace(/</g, "\\u003c");
  return /* @__PURE__ */ m("script", { type: "application/ld+json", nonce: t, dangerouslySetInnerHTML: { __html: n } });
}
const rv = "wk-Breadcrumbs_root", iv = "wk-Breadcrumbs_list", sv = "wk-Breadcrumbs_item", cv = "wk-Breadcrumbs_link", av = "wk-Breadcrumbs_sep", Mt = {
  root: rv,
  list: iv,
  item: sv,
  link: cv,
  sep: av
};
function dg({ items: e, origin: t, className: n }) {
  const o = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: e.map((r, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: r.label,
      ...r.href ? { item: t ? new URL(r.href, t).toString() : r.href } : {}
    }))
  };
  return /* @__PURE__ */ U(Ke, { children: [
    /* @__PURE__ */ m("nav", { "aria-label": "Breadcrumb", className: Y(Mt.root, n), children: /* @__PURE__ */ m("ol", { className: Mt.list, children: e.map((r, i) => {
      const s = i === e.length - 1;
      return /* @__PURE__ */ U(lc, { children: [
        /* @__PURE__ */ m("li", { className: Mt.item, children: r.href && !s ? /* @__PURE__ */ m("a", { className: Mt.link, href: r.href, children: r.label }) : /* @__PURE__ */ m("span", { "aria-current": s ? "page" : void 0, children: r.label }) }),
        !s && /* @__PURE__ */ m("li", { className: Mt.sep, "aria-hidden": "true", children: "/" })
      ] }, `${r.label}-${i}`);
    }) }) }),
    /* @__PURE__ */ m(ov, { data: o })
  ] });
}
export {
  ig as AppShell,
  rg as Badge,
  dg as Breadcrumbs,
  hv as Button,
  zr as CheckIcon,
  Pv as Checkbox,
  uc as ChevronDownIcon,
  Yr as CloseIcon,
  _v as Dialog,
  Iv as DialogClose,
  vv as Field,
  sg as Heading,
  lg as Image,
  gv as Input,
  ov as JsonLd,
  ag as Link,
  $v as Menu,
  Fv as MenuItem,
  Bv as MenuLabel,
  Vv as MenuSeparator,
  bv as Select,
  Cv as SelectGroup,
  yv as SelectItem,
  Sv as SelectSeparator,
  ug as Skeleton,
  Ev as Switch,
  Jv as Table,
  Kv as Tabs,
  Yv as TabsContent,
  Gv as TabsList,
  zv as TabsTrigger,
  eg as Tbody,
  og as Td,
  cg as Text,
  ng as Th,
  Qv as Thead,
  fv as ThemeProvider,
  mv as ThemeScript,
  qv as ToastProvider,
  Uv as Tooltip,
  Wv as TooltipProvider,
  tg as Tr,
  Bf as VisuallyHidden,
  Y as cn,
  ii as useField,
  pv as useTheme,
  Zv as useToast
};
//# sourceMappingURL=index.js.map
