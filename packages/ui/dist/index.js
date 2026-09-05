var Ar = (e) => {
  throw TypeError(e);
};
var Mr = (e, t, n) => t.has(e) || Ar("Cannot " + n);
var le = (e, t, n) => (Mr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Nr = (e, t, n) => t.has(e) ? Ar("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Qn = (e, t, n, o) => (Mr(e, t, "write to private field"), o ? o.call(e, n) : t.set(e, n), n);
import { jsx as d, jsxs as O, Fragment as qe } from "react/jsx-runtime";
import * as a from "react";
import { useState as Te, useEffect as jt, useCallback as ut, useMemo as kt, useContext as Qt, createContext as en, forwardRef as Ee, useId as rt, useLayoutEffect as Dc, useRef as dt, Fragment as Wo } from "react";
import * as Dt from "react-dom";
function F(...e) {
  return e.filter((t) => typeof t == "string" && t !== "").join(" ");
}
const Uo = (e) => ({
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
}), fs = (e) => /* @__PURE__ */ d("svg", { ...Uo(e), children: /* @__PURE__ */ d("path", { d: "M3 8.5 6.5 12 13 4.5" }) }), ps = (e) => /* @__PURE__ */ d("svg", { ...Uo(e), children: /* @__PURE__ */ d("path", { d: "m4 6 4 4 4-4" }) }), Dn = (e) => /* @__PURE__ */ d("svg", { ...Uo(e), children: /* @__PURE__ */ d("path", { d: "M4 4l8 8M12 4l-8 8" }) }), ms = en(null);
function Oc(e) {
  if (!e || typeof window > "u") return {};
  try {
    return JSON.parse(window.localStorage.getItem(e) ?? "{}");
  } catch {
    return {};
  }
}
function bw({
  children: e,
  theme: t,
  defaultTheme: n = "system",
  defaultDensity: o = "normal",
  storageKey: r = "wertkit-theme",
  target: s = "root"
}) {
  const [i, c] = Te(n), [l, u] = Te(o), [f, p] = Te(!1), [m, g] = Te(null);
  jt(() => {
    const y = Oc(r);
    y.theme && c(y.theme), y.density && u(y.density);
  }, [r]);
  const w = t ?? i;
  jt(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function") return;
    const y = window.matchMedia("(prefers-color-scheme: dark)"), C = () => p(y.matches);
    return C(), y.addEventListener("change", C), () => y.removeEventListener("change", C);
  }, []);
  const h = w === "system" ? f ? "dark" : "light" : w;
  jt(() => {
    const y = s === "self" ? m : document.documentElement;
    y && (y.setAttribute("data-theme", h), y.setAttribute("data-density", l));
  }, [h, l, s, m]), jt(() => {
    if (!(!r || typeof window > "u"))
      try {
        window.localStorage.setItem(r, JSON.stringify({ theme: w, density: l }));
      } catch {
      }
  }, [w, l, r]);
  const v = ut((y) => c(y), []), b = ut((y) => u(y), []), S = kt(
    () => ({ theme: w, resolvedTheme: h, setTheme: v, density: l, setDensity: b }),
    [w, h, v, l, b]
  );
  return /* @__PURE__ */ d(ms.Provider, { value: S, children: s === "self" ? /* @__PURE__ */ d("div", { ref: g, children: e }) : e });
}
function yw() {
  const e = Qt(ms);
  if (!e) throw new Error("useTheme must be used inside <ThemeProvider>");
  return e;
}
function Cw({
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
  return /* @__PURE__ */ d("script", { nonce: o, dangerouslySetInnerHTML: { __html: r } });
}
var Ac = Object.defineProperty, Ko = (e, t) => Ac(e, "name", { value: t, configurable: !0 });
function go(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
Ko(go, "setRef");
function hs(...e) {
  return (t) => {
    let n = !1;
    const o = e.map((r) => {
      const s = go(r, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let r = 0; r < o.length; r++) {
          const s = o[r];
          typeof s == "function" ? s() : go(e[r], null);
        }
      };
  };
}
Ko(hs, "composeRefs");
function K(...e) {
  return a.useCallback(hs(...e), e);
}
Ko(K, "useComposedRefs");
var Mc = Object.defineProperty, Re = (e, t) => Mc(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function Fe(e) {
  const t = a.forwardRef((n, o) => {
    let { children: r, ...s } = n, i = null, c = !1;
    const l = [];
    wo(r) && typeof fn == "function" && (r = fn(r._payload)), a.Children.forEach(r, (m) => {
      var g;
      if (Cs(m)) {
        c = !0;
        const w = m;
        let h = "child" in w.props ? w.props.child : w.props.children;
        wo(h) && typeof fn == "function" && (h = fn(h._payload)), i = Nc(w, h), l.push((g = i == null ? void 0 : i.props) == null ? void 0 : g.children);
      } else
        l.push(m);
    }), i ? i = a.cloneElement(i, void 0, l) : (
      // A `Slottable` was found but it didn't resolve to a single element (e.g.
      // it wrapped multiple elements, text, or a render-prop `child` that
      // wasn't an element). Don't fall back to treating the `Slottable` wrapper
      // itself as the slot target — throw a descriptive error below instead.
      !c && a.Children.count(r) === 1 && a.isValidElement(r) && (i = r)
    );
    const u = i ? ys(i) : void 0, f = K(o, u);
    if (!i) {
      if (r || r === 0)
        throw new Error(
          c ? Fc(e) : Lc(e)
        );
      return r;
    }
    const p = bs(s, i.props ?? {});
    return i.type !== a.Fragment && (p.ref = o ? f : u), a.cloneElement(i, p);
  });
  return t.displayName = `${e}.Slot`, t;
}
Re(Fe, "createSlot");
var vs = /* @__PURE__ */ Fe("Slot"), gs = Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function ws(e) {
  const t = /* @__PURE__ */ Re((n) => "child" in n ? n.children(n.child) : n.children, "Slottable");
  return t.displayName = `${e}.Slottable`, t.__radixId = gs, t;
}
Re(ws, "createSlottable");
var Nc = /* @__PURE__ */ Re((e, t) => {
  if ("child" in e.props) {
    const n = e.props.child;
    return a.isValidElement(n) ? a.cloneElement(n, void 0, e.props.children(n.props.children)) : null;
  }
  return a.isValidElement(t) ? t : null;
}, "getSlottableElementFromSlottable");
function bs(e, t) {
  const n = { ...t };
  for (const o in t) {
    const r = e[o], s = t[o];
    /^on[A-Z]/.test(o) ? r && s ? n[o] = (...c) => {
      const l = s(...c);
      return r(...c), l;
    } : r && (n[o] = r) : o === "style" ? n[o] = { ...r, ...s } : o === "className" && (n[o] = [r, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
Re(bs, "mergeProps");
function ys(e) {
  var o, r;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
Re(ys, "getElementRef");
function Cs(e) {
  return a.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === gs;
}
Re(Cs, "isSlottable");
var $c = Symbol.for("react.lazy");
function wo(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === $c && "_payload" in e && Ss(e._payload);
}
Re(wo, "isLazyComponent");
function Ss(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
Re(Ss, "isPromiseLike");
var Lc = /* @__PURE__ */ Re((e) => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"), Fc = /* @__PURE__ */ Re((e) => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"), fn = a[" use ".trim().toString()];
const Bc = "wk-Button_root", Vc = "wk-Button_sm", Hc = "wk-Button_md", Wc = "wk-Button_lg", Uc = "wk-Button_iconOnly", Kc = "wk-Button_primary", jc = "wk-Button_secondary", zc = "wk-Button_ghost", Gc = "wk-Button_danger", Yc = "wk-Button_spinner", Ft = {
  root: Bc,
  sm: Vc,
  md: Hc,
  lg: Wc,
  iconOnly: Uc,
  primary: Kc,
  secondary: jc,
  ghost: zc,
  danger: Gc,
  spinner: Yc,
  "wk-spin": "wk-Button_wk-spin"
}, Xc = Ee(function({
  variant: t = "secondary",
  size: n = "md",
  iconOnly: o = !1,
  loading: r = !1,
  startIcon: s,
  endIcon: i,
  asChild: c = !1,
  className: l,
  children: u,
  disabled: f,
  type: p,
  ...m
}, g) {
  return /* @__PURE__ */ O(
    c ? vs : "button",
    {
      ref: g,
      type: c ? void 0 : p ?? "button",
      disabled: f || r,
      "data-loading": r || void 0,
      className: F(
        Ft.root,
        Ft[t],
        Ft[n],
        o && Ft.iconOnly,
        l
      ),
      ...m,
      children: [
        r ? /* @__PURE__ */ d("span", { className: Ft.spinner, "aria-hidden": "true" }) : s,
        u,
        !r && i
      ]
    }
  );
}), qc = "wk-Field_root", Zc = "wk-Field_label", Jc = "wk-Field_required", Qc = "wk-Field_hint", ea = "wk-Field_error", Bt = {
  root: qc,
  label: Zc,
  required: Jc,
  hint: Qc,
  error: ea
}, xs = en(null), jo = () => Qt(xs);
function Sw({ label: e, hint: t, error: n, required: o, children: r, className: s }) {
  const i = rt(), c = `${i}-input`, l = `${i}-hint`, u = `${i}-error`, f = !!n, p = [n ? u : null, t ? l : null].filter(Boolean).join(" ") || void 0;
  return /* @__PURE__ */ d(xs.Provider, { value: { inputId: c, describedBy: p, invalid: f }, children: /* @__PURE__ */ O("div", { className: F(Bt.root, s), children: [
    e && /* @__PURE__ */ O("label", { className: Bt.label, htmlFor: c, children: [
      e,
      o && /* @__PURE__ */ d("span", { className: Bt.required, "aria-hidden": "true", children: "*" })
    ] }),
    r,
    n ? /* @__PURE__ */ d("p", { className: Bt.error, id: u, role: "alert", children: n }) : t && /* @__PURE__ */ d("p", { className: Bt.hint, id: l, children: t })
  ] }) });
}
const ta = "wk-Input_root", na = "wk-Input_mono", oa = "wk-Input_shell", ra = "wk-Input_slot", sa = "wk-Input_start", ia = "wk-Input_end", ca = "wk-Input_hasStart", aa = "wk-Input_hasEnd", la = "wk-Input_sm", ua = "wk-Input_md", da = "wk-Input_lg", Ae = {
  root: ta,
  mono: na,
  shell: oa,
  slot: ra,
  start: sa,
  end: ia,
  hasStart: ca,
  hasEnd: aa,
  sm: la,
  md: ua,
  lg: da
}, bo = Ee(function({
  size: t = "md",
  invalid: n,
  mono: o = !1,
  startSlot: r,
  endSlot: s,
  className: i,
  id: c,
  "aria-describedby": l,
  ...u
}, f) {
  const p = jo(), m = n ?? (p == null ? void 0 : p.invalid) ?? !1, g = /* @__PURE__ */ d(
    "input",
    {
      ref: f,
      id: c ?? (p == null ? void 0 : p.inputId),
      "aria-invalid": m || void 0,
      "aria-describedby": l ?? (p == null ? void 0 : p.describedBy),
      className: F(
        Ae.root,
        Ae[t],
        o && Ae.mono,
        r && Ae.hasStart,
        s && Ae.hasEnd,
        !r && !s && i
      ),
      ...u
    }
  );
  return !r && !s ? g : /* @__PURE__ */ O("span", { className: F(Ae.shell, i), "data-invalid": m || void 0, children: [
    r && /* @__PURE__ */ d("span", { className: F(Ae.slot, Ae.start), "aria-hidden": "true", children: r }),
    g,
    s && /* @__PURE__ */ d("span", { className: F(Ae.slot, Ae.end), children: s })
  ] });
});
var fa = Object.defineProperty, pa = (e, t) => fa(e, "name", { value: t, configurable: !0 });
function yo(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
pa(yo, "clamp");
var ma = Object.defineProperty, Ot = (e, t) => ma(e, "name", { value: t, configurable: !0 }), Es = !!(typeof window < "u" && window.document && window.document.createElement);
function I(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return /* @__PURE__ */ Ot(function(r) {
    if (e == null || e(r), n === !1 || !r || !r.defaultPrevented)
      return t == null ? void 0 : t(r);
  }, "handleEvent");
}
Ot(I, "composeEventHandlers");
function ha(e) {
  var t;
  if (!Es)
    throw new Error("Cannot access window outside of the DOM");
  return ((t = e == null ? void 0 : e.ownerDocument) == null ? void 0 : t.defaultView) ?? window;
}
Ot(ha, "getOwnerWindow");
function Co(e) {
  if (!Es)
    throw new Error("Cannot access document outside of the DOM");
  return (e == null ? void 0 : e.ownerDocument) ?? document;
}
Ot(Co, "getOwnerDocument");
function _s(e, t = !1) {
  const { activeElement: n } = Co(e);
  if (!(n != null && n.nodeName))
    return null;
  if (Ts(n) && n.contentDocument)
    return _s(n.contentDocument.body, t);
  if (t) {
    const o = n.getAttribute("aria-activedescendant");
    if (o) {
      const r = Co(n).getElementById(o);
      if (r)
        return r;
    }
  }
  return n;
}
Ot(_s, "getActiveElement");
function Ts(e) {
  return e.tagName === "IFRAME";
}
Ot(Ts, "isFrame");
var va = Object.defineProperty, Se = (e, t) => va(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function ga(e, t) {
  const n = a.createContext(t);
  n.displayName = e + "Context";
  const o = /* @__PURE__ */ Se((s) => {
    const { children: i, ...c } = s, l = a.useMemo(() => c, Object.values(c));
    return /* @__PURE__ */ d(n.Provider, { value: l, children: i });
  }, "Provider");
  o.displayName = e + "Provider";
  function r(s, i = {}) {
    const { optional: c = !1 } = i, l = a.useContext(n);
    if (l) return l;
    if (t !== void 0) return t;
    if (!c)
      throw new Error(`\`${s}\` must be used within \`${e}\``);
  }
  return Se(r, "useContext"), [o, r];
}
Se(ga, "createContext");
// @__NO_SIDE_EFFECTS__
function me(e, t = []) {
  let n = [];
  function o(s, i) {
    const c = a.createContext(i);
    c.displayName = s + "Context";
    const l = n.length;
    n = [...n, i];
    const u = /* @__PURE__ */ Se((p) => {
      var b;
      const { scope: m, children: g, ...w } = p, h = ((b = m == null ? void 0 : m[e]) == null ? void 0 : b[l]) || c, v = a.useMemo(() => w, Object.values(w));
      return /* @__PURE__ */ d(h.Provider, { value: v, children: g });
    }, "Provider");
    u.displayName = s + "Provider";
    function f(p, m, g = {}) {
      var b;
      const { optional: w = !1 } = g, h = ((b = m == null ? void 0 : m[e]) == null ? void 0 : b[l]) || c, v = a.useContext(h);
      if (v) return v;
      if (i !== void 0) return i;
      if (!w)
        throw new Error(`\`${p}\` must be used within \`${s}\``);
    }
    return Se(f, "useContext"), [u, f];
  }
  Se(o, "createContext");
  const r = /* @__PURE__ */ Se(() => {
    const s = n.map((i) => a.createContext(i));
    return /* @__PURE__ */ Se(function(c) {
      const l = (c == null ? void 0 : c[e]) || s;
      return a.useMemo(
        () => ({ [`__scope${e}`]: { ...c, [e]: l } }),
        [c, l]
      );
    }, "useScope");
  }, "createScope");
  return r.scopeName = e, [o, Ps(r, ...t)];
}
Se(me, "createContextScope");
function Ps(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = /* @__PURE__ */ Se(() => {
    const o = e.map((r) => ({
      useScope: r(),
      scopeName: r.scopeName
    }));
    return /* @__PURE__ */ Se(function(s) {
      const i = o.reduce((c, { useScope: l, scopeName: u }) => {
        const p = l(s)[`__scope${u}`];
        return { ...c, ...p };
      }, {});
      return a.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    }, "useComposedScopes");
  }, "createScope");
  return n.scopeName = t.scopeName, n;
}
Se(Ps, "composeContextScopes");
var wa = Object.defineProperty, ie = (e, t) => wa(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function tn(e) {
  const t = e + "CollectionProvider", [n, o] = /* @__PURE__ */ me(t), [r, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = /* @__PURE__ */ ie((h) => {
    const { scope: v, children: b } = h, S = a.useRef(null), y = a.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ d(r, { scope: v, itemMap: y, collectionRef: S, children: b });
  }, "CollectionProvider");
  i.displayName = t;
  const c = e + "CollectionSlot", l = /* @__PURE__ */ Fe(c), u = a.forwardRef(
    (h, v) => {
      const { scope: b, children: S } = h, y = s(c, b), C = K(v, y.collectionRef);
      return /* @__PURE__ */ d(l, { ref: C, children: S });
    }
  );
  u.displayName = c;
  const f = e + "CollectionItemSlot", p = "data-radix-collection-item", m = /* @__PURE__ */ Fe(f), g = a.forwardRef(
    (h, v) => {
      const { scope: b, children: S, ...y } = h, C = a.useRef(null), x = K(v, C), E = s(f, b);
      return a.useEffect(() => (E.itemMap.set(C, { ref: C, ...y }), () => void E.itemMap.delete(C))), /* @__PURE__ */ d(m, { [p]: "", ref: x, children: S });
    }
  );
  g.displayName = f;
  function w(h) {
    const v = s(e + "CollectionConsumer", h);
    return a.useCallback(() => {
      const S = v.collectionRef.current;
      if (!S) return [];
      const y = Array.from(S.querySelectorAll(`[${p}]`));
      return Array.from(v.itemMap.values()).sort(
        (E, _) => y.indexOf(E.ref.current) - y.indexOf(_.ref.current)
      );
    }, [v.collectionRef, v.itemMap]);
  }
  return ie(w, "useCollection"), [
    { Provider: i, Slot: u, ItemSlot: g },
    w,
    o
  ];
}
ie(tn, "createCollection");
var $r = /* @__PURE__ */ new WeakMap(), ne, ve, eo = (ve = class extends Map {
  constructor(n) {
    super(n);
    Nr(this, ne);
    Qn(this, ne, [...super.keys()]), $r.set(this, !0);
  }
  set(n, o) {
    return $r.get(this) && (this.has(n) ? le(this, ne)[le(this, ne).indexOf(n)] = n : le(this, ne).push(n)), super.set(n, o), this;
  }
  insert(n, o, r) {
    const s = this.has(o), i = le(this, ne).length, c = zo(n);
    let l = c >= 0 ? c : i + c;
    const u = l < 0 || l >= i ? -1 : l;
    if (u === this.size || s && u === this.size - 1 || u === -1)
      return this.set(o, r), this;
    const f = this.size + (s ? 0 : 1);
    c < 0 && l++;
    const p = [...le(this, ne)];
    let m, g = !1;
    for (let w = l; w < f; w++)
      if (l === w) {
        let h = p[w];
        p[w] === o && (h = p[w + 1]), s && this.delete(o), m = this.get(h), this.set(o, r);
      } else {
        !g && p[w - 1] === o && (g = !0);
        const h = p[g ? w : w - 1], v = m;
        m = this.get(h), this.delete(h), this.set(h, v);
      }
    return this;
  }
  with(n, o, r) {
    const s = new ve(this);
    return s.insert(n, o, r), s;
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
    const s = le(this, ne).indexOf(n);
    return s === -1 ? this : this.insert(s, o, r);
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
    const s = le(this, ne).indexOf(n);
    return s === -1 ? this : this.insert(s + 1, o, r);
  }
  first() {
    return this.entryAt(0);
  }
  last() {
    return this.entryAt(-1);
  }
  clear() {
    return Qn(this, ne, []), super.clear();
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
    const o = Cn(le(this, ne), n);
    if (o !== void 0)
      return this.get(o);
  }
  entryAt(n) {
    const o = Cn(le(this, ne), n);
    if (o !== void 0)
      return [o, this.get(o)];
  }
  indexOf(n) {
    return le(this, ne).indexOf(n);
  }
  keyAt(n) {
    return Cn(le(this, ne), n);
  }
  from(n, o) {
    const r = this.indexOf(n);
    if (r === -1)
      return;
    let s = r + o;
    return s < 0 && (s = 0), s >= this.size && (s = this.size - 1), this.at(s);
  }
  keyFrom(n, o) {
    const r = this.indexOf(n);
    if (r === -1)
      return;
    let s = r + o;
    return s < 0 && (s = 0), s >= this.size && (s = this.size - 1), this.keyAt(s);
  }
  find(n, o) {
    let r = 0;
    for (const s of this) {
      if (Reflect.apply(n, o, [s, r, this]))
        return s;
      r++;
    }
  }
  findIndex(n, o) {
    let r = 0;
    for (const s of this) {
      if (Reflect.apply(n, o, [s, r, this]))
        return r;
      r++;
    }
    return -1;
  }
  filter(n, o) {
    const r = [];
    let s = 0;
    for (const i of this)
      Reflect.apply(n, o, [i, s, this]) && r.push(i), s++;
    return new ve(r);
  }
  map(n, o) {
    const r = [];
    let s = 0;
    for (const i of this)
      r.push([i[0], Reflect.apply(n, o, [i, s, this])]), s++;
    return new ve(r);
  }
  reduce(...n) {
    const [o, r] = n;
    let s = 0, i = r ?? this.at(0);
    for (const c of this)
      s === 0 && n.length === 1 ? i = c : i = Reflect.apply(o, this, [i, c, s, this]), s++;
    return i;
  }
  reduceRight(...n) {
    const [o, r] = n;
    let s = r ?? this.at(-1);
    for (let i = this.size - 1; i >= 0; i--) {
      const c = this.at(i);
      i === this.size - 1 && n.length === 1 ? s = c : s = Reflect.apply(o, this, [s, c, i, this]);
    }
    return s;
  }
  toSorted(n) {
    const o = [...this.entries()].sort(n);
    return new ve(o);
  }
  toReversed() {
    const n = new ve();
    for (let o = this.size - 1; o >= 0; o--) {
      const r = this.keyAt(o), s = this.get(r);
      n.set(r, s);
    }
    return n;
  }
  toSpliced(...n) {
    const o = [...this.entries()];
    return o.splice(...n), new ve(o);
  }
  slice(n, o) {
    const r = new ve();
    let s = this.size - 1;
    if (n === void 0)
      return r;
    n < 0 && (n = n + this.size), o !== void 0 && o > 0 && (s = o - 1);
    for (let i = n; i <= s; i++) {
      const c = this.keyAt(i), l = this.get(c);
      r.set(c, l);
    }
    return r;
  }
  every(n, o) {
    let r = 0;
    for (const s of this) {
      if (!Reflect.apply(n, o, [s, r, this]))
        return !1;
      r++;
    }
    return !0;
  }
  some(n, o) {
    let r = 0;
    for (const s of this) {
      if (Reflect.apply(n, o, [s, r, this]))
        return !0;
      r++;
    }
    return !1;
  }
}, ne = new WeakMap(), ie(ve, "OrderedDict"), ve);
function Cn(e, t) {
  if ("at" in Array.prototype)
    return Array.prototype.at.call(e, t);
  const n = Rs(e, t);
  return n === -1 ? void 0 : e[n];
}
ie(Cn, "at");
function Rs(e, t) {
  const n = e.length, o = zo(t), r = o >= 0 ? o : n + o;
  return r < 0 || r >= n ? -1 : r;
}
ie(Rs, "toSafeIndex");
function zo(e) {
  return e !== e || e === 0 ? 0 : Math.trunc(e);
}
ie(zo, "toSafeInteger");
// @__NO_SIDE_EFFECTS__
function ba(e) {
  const t = e + "CollectionProvider", [n, o] = /* @__PURE__ */ me(t), [r, s] = n(
    t,
    {
      collectionElement: null,
      collectionRef: { current: null },
      collectionRefObject: { current: null },
      itemMap: new eo(),
      setItemMap: /* @__PURE__ */ ie(() => {
      }, "setItemMap")
    }
  ), i = /* @__PURE__ */ ie(({ state: y, ...C }) => y ? /* @__PURE__ */ d(l, { ...C, state: y }) : /* @__PURE__ */ d(c, { ...C }), "CollectionProvider");
  i.displayName = t;
  const c = /* @__PURE__ */ ie((y) => {
    const C = v();
    return /* @__PURE__ */ d(l, { ...y, state: C });
  }, "CollectionInit");
  c.displayName = t + "Init";
  const l = /* @__PURE__ */ ie((y) => {
    const { scope: C, children: x, state: E } = y, _ = a.useRef(null), [R, P] = a.useState(
      null
    ), D = K(_, P), [B, A] = E;
    return a.useEffect(() => {
      if (!R) return;
      const M = Ds(() => {
      });
      return M.observe(R, {
        childList: !0,
        subtree: !0
      }), () => {
        M.disconnect();
      };
    }, [R]), /* @__PURE__ */ d(
      r,
      {
        scope: C,
        itemMap: B,
        setItemMap: A,
        collectionRef: D,
        collectionRefObject: _,
        collectionElement: R,
        children: x
      }
    );
  }, "CollectionProviderImpl");
  l.displayName = t + "Impl";
  const u = e + "CollectionSlot", f = /* @__PURE__ */ Fe(u), p = a.forwardRef(
    (y, C) => {
      const { scope: x, children: E } = y, _ = s(u, x), R = K(C, _.collectionRef);
      return /* @__PURE__ */ d(f, { ref: R, children: E });
    }
  );
  p.displayName = u;
  const m = e + "CollectionItemSlot", g = "data-radix-collection-item", w = /* @__PURE__ */ Fe(m), h = a.forwardRef(
    (y, C) => {
      const { scope: x, children: E, ..._ } = y, R = a.useRef(null), [P, D] = a.useState(null), B = K(C, R, D), A = s(m, x), { setItemMap: M } = A, L = a.useRef(_);
      ks(L.current, _) || (L.current = _);
      const U = L.current;
      return a.useEffect(() => {
        const T = U;
        return M((N) => P ? N.has(P) ? N.set(P, { ...T, element: P }).toSorted(So) : (N.set(P, { ...T, element: P }), N.toSorted(So)) : N), () => {
          M((N) => !P || !N.has(P) ? N : (N.delete(P), new eo(N)));
        };
      }, [P, U, M]), /* @__PURE__ */ d(w, { [g]: "", ref: B, children: E });
    }
  );
  h.displayName = m;
  function v() {
    return a.useState(new eo());
  }
  ie(v, "useInitCollection");
  function b(y) {
    const { itemMap: C } = s(e + "CollectionConsumer", y);
    return C;
  }
  return ie(b, "useCollection"), [
    { Provider: i, Slot: p, ItemSlot: h },
    {
      createCollectionScope: o,
      useCollection: b,
      useInitCollection: v
    }
  ];
}
ie(ba, "createCollection");
function ks(e, t) {
  if (e === t) return !0;
  if (typeof e != "object" || typeof t != "object" || e == null || t == null) return !1;
  const n = Object.keys(e), o = Object.keys(t);
  if (n.length !== o.length) return !1;
  for (const r of n)
    if (!Object.prototype.hasOwnProperty.call(t, r) || e[r] !== t[r]) return !1;
  return !0;
}
ie(ks, "shallowEqual");
function Is(e, t) {
  return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING);
}
ie(Is, "isElementPreceding");
function So(e, t) {
  return !e[1].element || !t[1].element ? 0 : Is(e[1].element, t[1].element) ? -1 : 1;
}
ie(So, "sortByDocumentPosition");
function Ds(e) {
  return new MutationObserver((n) => {
    for (const o of n)
      if (o.type === "childList") {
        e();
        return;
      }
  });
}
ie(Ds, "getChildListObserver");
var ya = Object.defineProperty, Ca = (e, t) => ya(e, "name", { value: t, configurable: !0 }), Sa = a.createContext(void 0);
function nn(e) {
  const t = a.useContext(Sa);
  return e || t || "ltr";
}
Ca(nn, "useDirection");
var xa = Object.defineProperty, Ea = (e, t) => xa(e, "name", { value: t, configurable: !0 }), _a = [
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
], H = _a.reduce((e, t) => {
  const n = /* @__PURE__ */ Fe(`Primitive.${t}`), o = a.forwardRef((r, s) => {
    const { asChild: i, ...c } = r, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ d(l, { ...c, ref: s });
  });
  return o.displayName = `Primitive.${t}`, { ...e, [t]: o };
}, {});
function On(e, t) {
  e && Dt.flushSync(() => e.dispatchEvent(t));
}
Ea(On, "dispatchDiscreteCustomEvent");
var Ta = Object.defineProperty, Pa = (e, t) => Ta(e, "name", { value: t, configurable: !0 });
function ue(e) {
  const t = a.useRef(e);
  return a.useEffect(() => {
    t.current = e;
  }), a.useMemo(() => ((...n) => {
    var o;
    return (o = t.current) == null ? void 0 : o.call(t, ...n);
  }), []);
}
Pa(ue, "useCallbackRef");
var Ra = Object.defineProperty, re = (e, t) => Ra(e, "name", { value: t, configurable: !0 }), xo = "dismissableLayer.update", ka = "dismissableLayer.pointerDownOutside", Ia = "dismissableLayer.focusOutside", Lr, Go = a.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set(),
  // Outside elements that belong to a layer's own dismiss affordance (eg, a
  // dialog overlay). Pressing them should dismiss the layer regardless of
  // whether or not they stop propagation.
  //
  // See https://github.com/radix-ui/primitives/issues/3346
  dismissableSurfaces: /* @__PURE__ */ new Set()
}), on = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ re(function(t, n) {
    const {
      disableOutsidePointerEvents: o = !1,
      deferPointerDownOutside: r = !1,
      onEscapeKeyDown: s,
      onPointerDownOutside: i,
      onFocusOutside: c,
      onInteractOutside: l,
      onDismiss: u,
      ...f
    } = t, p = a.useContext(Go), [m, g] = a.useState(null), w = (m == null ? void 0 : m.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, h] = a.useState({}), v = K(n, g), b = Array.from(p.layers), [S] = [
      ...p.layersWithOutsidePointerEventsDisabled
    ].slice(-1), y = S ? b.indexOf(S) : -1, C = m ? b.indexOf(m) : -1, x = p.layersWithOutsidePointerEventsDisabled.size > 0, E = C >= y, _ = a.useRef(!1), R = As(
      (A) => {
        i == null || i(A), l == null || l(A), A.defaultPrevented || u == null || u();
      },
      {
        ownerDocument: w,
        deferPointerDownOutside: r,
        isDeferredPointerDownOutsideRef: _,
        dismissableSurfaces: p.dismissableSurfaces,
        shouldHandlePointerDownOutside: a.useCallback(
          (A) => {
            if (!(A instanceof Node))
              return !1;
            const M = [...p.branches].some(
              (L) => L.contains(A)
            );
            return E && !M;
          },
          [p.branches, E]
        )
      }
    ), P = Ms((A) => {
      if (r && _.current)
        return;
      const M = A.target;
      [...p.branches].some((U) => U.contains(M)) || (c == null || c(A), l == null || l(A), A.defaultPrevented || u == null || u());
    }, w), D = m ? C === b.length - 1 : !1, B = ue((A) => {
      A.key === "Escape" && (s == null || s(A), !A.defaultPrevented && u && (A.preventDefault(), u()));
    });
    return a.useEffect(() => {
      if (D)
        return w.addEventListener("keydown", B, { capture: !0 }), () => w.removeEventListener("keydown", B, { capture: !0 });
    }, [w, D, B]), a.useEffect(() => {
      if (m)
        return o && (p.layersWithOutsidePointerEventsDisabled.size === 0 && (Lr = w.body.style.pointerEvents, w.body.style.pointerEvents = "none"), p.layersWithOutsidePointerEventsDisabled.add(m)), p.layers.add(m), Eo(), () => {
          o && (p.layersWithOutsidePointerEventsDisabled.delete(m), p.layersWithOutsidePointerEventsDisabled.size === 0 && (w.body.style.pointerEvents = Lr));
        };
    }, [m, w, o, p]), a.useEffect(() => () => {
      m && (p.layers.delete(m), p.layersWithOutsidePointerEventsDisabled.delete(m), Eo());
    }, [m, p]), a.useEffect(() => {
      const A = /* @__PURE__ */ re(() => h({}), "handleUpdate");
      return document.addEventListener(xo, A), () => document.removeEventListener(xo, A);
    }, []), /* @__PURE__ */ d(
      H.div,
      {
        ...f,
        ref: v,
        style: {
          pointerEvents: x ? E ? "auto" : "none" : void 0,
          ...t.style
        },
        onFocusCapture: I(t.onFocusCapture, P.onFocusCapture),
        onBlurCapture: I(t.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: I(
          t.onPointerDownCapture,
          R.onPointerDownCapture
        )
      }
    );
  }, "DismissableLayer")
), Da = /* @__PURE__ */ a.forwardRef(/* @__PURE__ */ re(function(t, n) {
  const o = a.useContext(Go), r = a.useRef(null), s = K(n, r);
  return a.useEffect(() => {
    const i = r.current;
    if (i)
      return o.branches.add(i), () => {
        o.branches.delete(i);
      };
  }, [o.branches]), /* @__PURE__ */ d(H.div, { ...t, ref: s });
}, "DismissableLayerBranch"));
function Os() {
  const e = a.useContext(Go), [t, n] = a.useState(null);
  return a.useEffect(() => {
    if (t)
      return e.dismissableSurfaces.add(t), () => {
        e.dismissableSurfaces.delete(t);
      };
  }, [t, e.dismissableSurfaces]), n;
}
re(Os, "useDismissableLayerSurface");
var Oa = /* @__PURE__ */ re(() => !0, "IS_TRUE");
function As(e, t) {
  const {
    ownerDocument: n = globalThis == null ? void 0 : globalThis.document,
    deferPointerDownOutside: o = !1,
    isDeferredPointerDownOutsideRef: r,
    dismissableSurfaces: s,
    shouldHandlePointerDownOutside: i = Oa
  } = t, c = ue(e), l = a.useRef(!1), u = a.useRef(!1), f = a.useRef(/* @__PURE__ */ new Map()), p = a.useRef(() => {
  });
  return a.useEffect(() => {
    function m() {
      u.current = !1, r.current = !1, f.current.clear();
    }
    re(m, "resetOutsideInteraction");
    function g() {
      return Array.from(f.current.values()).some(Boolean);
    }
    re(g, "isOutsideInteractionIntercepted");
    function w(y) {
      if (!u.current)
        return;
      const C = y.target;
      C instanceof Node && [...s].some((E) => E.contains(C)) || f.current.set(y.type, !0), y.type === "click" && window.setTimeout(() => {
        u.current && p.current();
      }, 0);
    }
    re(w, "handleInteractionCapture");
    function h(y) {
      u.current && f.current.set(y.type, !1);
    }
    re(h, "handleInteractionBubble");
    const v = /* @__PURE__ */ re((y) => {
      if (y.target && !l.current) {
        let C = function() {
          n.removeEventListener("click", p.current);
          const E = g();
          m(), E || Yo(
            ka,
            c,
            x,
            { discrete: !0 }
          );
        };
        if (re(C, "handleAndDispatchPointerDownOutsideEvent"), !i(y.target)) {
          n.removeEventListener("click", p.current), m(), l.current = !1;
          return;
        }
        const x = { originalEvent: y };
        u.current = !0, r.current = o && y.button === 0, f.current.clear(), !o || y.button !== 0 ? C() : (n.removeEventListener("click", p.current), p.current = C, n.addEventListener("click", p.current, { once: !0 }));
      } else
        n.removeEventListener("click", p.current), m();
      l.current = !1;
    }, "handlePointerDown"), b = [
      "pointerup",
      "mousedown",
      "mouseup",
      "touchstart",
      "touchend",
      "click"
    ];
    for (const y of b)
      n.addEventListener(y, w, !0), n.addEventListener(y, h);
    const S = window.setTimeout(() => {
      n.addEventListener("pointerdown", v);
    }, 0);
    return () => {
      window.clearTimeout(S), n.removeEventListener("pointerdown", v), n.removeEventListener("click", p.current);
      for (const y of b)
        n.removeEventListener(y, w, !0), n.removeEventListener(y, h);
    };
  }, [
    n,
    c,
    o,
    r,
    s,
    i
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: /* @__PURE__ */ re(() => l.current = !0, "onPointerDownCapture")
  };
}
re(As, "usePointerDownOutside");
function Ms(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ue(e), o = a.useRef(!1);
  return a.useEffect(() => {
    const r = /* @__PURE__ */ re((s) => {
      s.target && !o.current && Yo(Ia, n, { originalEvent: s }, {
        discrete: !1
      });
    }, "handleFocus");
    return t.addEventListener("focusin", r), () => t.removeEventListener("focusin", r);
  }, [t, n]), {
    onFocusCapture: /* @__PURE__ */ re(() => o.current = !0, "onFocusCapture"),
    onBlurCapture: /* @__PURE__ */ re(() => o.current = !1, "onBlurCapture")
  };
}
re(Ms, "useFocusOutside");
function Eo() {
  const e = new CustomEvent(xo);
  document.dispatchEvent(e);
}
re(Eo, "dispatchUpdate");
function Yo(e, t, n, { discrete: o }) {
  const r = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && r.addEventListener(e, t, { once: !0 }), o ? On(r, s) : r.dispatchEvent(s);
}
re(Yo, "handleAndDispatchCustomEvent");
var Aa = on, Ma = Da, Na = Object.defineProperty, Xo = (e, t) => Na(e, "name", { value: t, configurable: !0 }), pn = 0, Me = null;
function $a(e) {
  return rn(), e.children;
}
Xo($a, "FocusGuards");
function rn() {
  a.useEffect(() => {
    Me || (Me = { start: _o(), end: _o() });
    const { start: e, end: t } = Me;
    return document.body.firstElementChild !== e && document.body.insertAdjacentElement("afterbegin", e), document.body.lastElementChild !== t && document.body.insertAdjacentElement("beforeend", t), pn++, () => {
      pn === 1 && (Me == null || Me.start.remove(), Me == null || Me.end.remove(), Me = null), pn = Math.max(0, pn - 1);
    };
  }, []);
}
Xo(rn, "useFocusGuards");
function _o() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
Xo(_o, "createFocusGuard");
var La = Object.defineProperty, de = (e, t) => La(e, "name", { value: t, configurable: !0 }), to = "focusScope.autoFocusOnMount", no = "focusScope.autoFocusOnUnmount", Fr = { bubbles: !1, cancelable: !0 }, qo = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ de(function(t, n) {
    const {
      loop: o = !1,
      trapped: r = !1,
      onMountAutoFocus: s,
      onUnmountAutoFocus: i,
      ...c
    } = t, [l, u] = a.useState(null), f = ue(s), p = ue(i), m = a.useRef(null), g = K(n, u), w = a.useRef({
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
        let v = function(C) {
          if (w.paused || !l) return;
          const x = C.target;
          l.contains(x) ? m.current = x : He(m.current, { select: !0 });
        }, b = function(C) {
          if (w.paused || !l) return;
          const x = C.relatedTarget;
          x !== null && (l.contains(x) || He(m.current, { select: !0 }));
        }, S = function(C) {
          if (document.activeElement === document.body)
            for (const E of C)
              E.removedNodes.length > 0 && He(l);
        };
        de(v, "handleFocusIn"), de(b, "handleFocusOut"), de(S, "handleMutations"), document.addEventListener("focusin", v), document.addEventListener("focusout", b);
        const y = new MutationObserver(S);
        return l && y.observe(l, { childList: !0, subtree: !0 }), () => {
          document.removeEventListener("focusin", v), document.removeEventListener("focusout", b), y.disconnect();
        };
      }
    }, [r, l, w.paused]), a.useEffect(() => {
      if (l) {
        Br.add(w);
        const v = document.activeElement;
        if (!l.contains(v)) {
          const S = new CustomEvent(to, Fr);
          l.addEventListener(to, f), l.dispatchEvent(S), S.defaultPrevented || (Ns(Vs(Zo(l)), { select: !0 }), document.activeElement === v && He(l));
        }
        return () => {
          l.removeEventListener(to, f), setTimeout(() => {
            const S = new CustomEvent(no, Fr);
            l.addEventListener(no, p), l.dispatchEvent(S), S.defaultPrevented || He(v ?? document.body, { select: !0 }), l.removeEventListener(no, p), Br.remove(w);
          }, 0);
        };
      }
    }, [l, f, p, w]);
    const h = a.useCallback(
      (v) => {
        if (!o && !r || w.paused) return;
        const b = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, S = document.activeElement;
        if (b && S) {
          const y = v.currentTarget, [C, x] = $s(y);
          C && x ? !v.shiftKey && S === x ? (v.preventDefault(), o && He(C, { select: !0 })) : v.shiftKey && S === C && (v.preventDefault(), o && He(x, { select: !0 })) : S === y && v.preventDefault();
        }
      },
      [o, r, w.paused]
    );
    return /* @__PURE__ */ d(H.div, { tabIndex: -1, ...c, ref: g, onKeyDown: h });
  }, "FocusScope")
);
function Ns(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const o of e)
    if (He(o, { select: t }), document.activeElement !== n) return;
}
de(Ns, "focusFirst");
function $s(e) {
  const t = Zo(e), n = To(t, e), o = To(t.reverse(), e);
  return [n, o];
}
de($s, "getTabbableEdges");
function Zo(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: /* @__PURE__ */ de((o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }, "acceptNode")
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
de(Zo, "getTabbableCandidates");
function To(e, t) {
  const n = typeof t.checkVisibility == "function" && t.checkVisibility({ checkVisibilityCSS: !0 });
  for (const o of e)
    if (!(n ? !o.checkVisibility({ checkVisibilityCSS: !0 }) : Ls(o, { upTo: t })))
      return o;
}
de(To, "findVisible");
function Ls(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
de(Ls, "isHidden");
function Fs(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
de(Fs, "isSelectableInput");
function He(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Fs(e) && t && e.select();
  }
}
de(He, "focus");
var Br = Bs();
function Bs() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Po(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Po(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
de(Bs, "createFocusScopesStack");
function Po(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
de(Po, "arrayRemove");
function Vs(e) {
  return e.filter((t) => t.tagName !== "A");
}
de(Vs, "removeLinks");
var oe = globalThis != null && globalThis.document ? a.useLayoutEffect : () => {
}, Fa = Object.defineProperty, Ba = (e, t) => Fa(e, "name", { value: t, configurable: !0 }), Va = a[" useId ".trim().toString()] || (() => {
}), Ha = 0;
function xe(e) {
  const [t, n] = a.useState(Va());
  return oe(() => {
    e || n((o) => o ?? String(Ha++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
Ba(xe, "useId");
const Wa = ["top", "right", "bottom", "left"], tt = Math.min, Ue = Math.max, Tn = Math.round, mn = Math.floor, Ke = (e) => ({
  x: e,
  y: e
}), Ua = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Hs(e, t, n) {
  return Ue(e, tt(t, n));
}
function Ge(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function nt(e) {
  return e.split("-")[0];
}
function At(e) {
  return e.split("-")[1];
}
function Jo(e) {
  return e === "x" ? "y" : "x";
}
function Qo(e) {
  return e === "y" ? "height" : "width";
}
function Le(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function er(e) {
  return Jo(Le(e));
}
function Ka(e, t, n) {
  n === void 0 && (n = !1);
  const o = At(e), r = er(e), s = Qo(r);
  let i = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = Pn(i)), [i, Pn(i)];
}
function ja(e) {
  const t = Pn(e);
  return [Ro(e), t, Ro(t)];
}
function Ro(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const Vr = ["left", "right"], Hr = ["right", "left"], za = ["top", "bottom"], Ga = ["bottom", "top"];
function Ya(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Hr : Vr : t ? Vr : Hr;
    case "left":
    case "right":
      return t ? za : Ga;
    default:
      return [];
  }
}
function Xa(e, t, n, o) {
  const r = At(e);
  let s = Ya(nt(e), n === "start", o);
  return r && (s = s.map((i) => i + "-" + r), t && (s = s.concat(s.map(Ro)))), s;
}
function Pn(e) {
  const t = nt(e);
  return Ua[t] + e.slice(t.length);
}
function qa(e) {
  var t, n, o, r;
  return {
    top: (t = e.top) != null ? t : 0,
    right: (n = e.right) != null ? n : 0,
    bottom: (o = e.bottom) != null ? o : 0,
    left: (r = e.left) != null ? r : 0
  };
}
function Ws(e) {
  return typeof e != "number" ? qa(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Rn(e) {
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
function Wr(e, t, n) {
  let {
    reference: o,
    floating: r
  } = e;
  const s = Le(t), i = er(t), c = Qo(i), l = nt(t), u = s === "y", f = o.x + o.width / 2 - r.width / 2, p = o.y + o.height / 2 - r.height / 2, m = o[c] / 2 - r[c] / 2;
  let g;
  switch (l) {
    case "top":
      g = {
        x: f,
        y: o.y - r.height
      };
      break;
    case "bottom":
      g = {
        x: f,
        y: o.y + o.height
      };
      break;
    case "right":
      g = {
        x: o.x + o.width,
        y: p
      };
      break;
    case "left":
      g = {
        x: o.x - r.width,
        y: p
      };
      break;
    default:
      g = {
        x: o.x,
        y: o.y
      };
  }
  const w = At(t);
  return w && (g[i] += m * (w === "end" ? 1 : -1) * (n && u ? -1 : 1)), g;
}
async function Za(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: o,
    y: r,
    platform: s,
    rects: i,
    elements: c,
    strategy: l
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: p = "floating",
    altBoundary: m = !1,
    padding: g = 0
  } = Ge(t, e), w = Ws(g), v = c[m ? p === "floating" ? "reference" : "floating" : p], b = Rn(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(v))) == null || n ? v : v.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(c.floating)),
    boundary: u,
    rootBoundary: f,
    strategy: l
  })), S = p === "floating" ? {
    x: o,
    y: r,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, y = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c.floating)), C = await (s.isElement == null ? void 0 : s.isElement(y)) && await (s.getScale == null ? void 0 : s.getScale(y)) || {
    x: 1,
    y: 1
  }, x = Rn(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: S,
    offsetParent: y,
    strategy: l
  }) : S);
  return {
    top: (b.top - x.top + w.top) / C.y,
    bottom: (x.bottom - b.bottom + w.bottom) / C.y,
    left: (b.left - x.left + w.left) / C.x,
    right: (x.right - b.right + w.right) / C.x
  };
}
const Ja = 50, Qa = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: r = "absolute",
    middleware: s = [],
    platform: i
  } = n, c = i.detectOverflow ? i : {
    ...i,
    detectOverflow: Za
  }, l = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let u = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: r
  }), {
    x: f,
    y: p
  } = Wr(u, o, l), m = o, g = 0;
  const w = {};
  for (let h = 0; h < s.length; h++) {
    const v = s[h];
    if (!v)
      continue;
    const {
      name: b,
      fn: S
    } = v, {
      x: y,
      y: C,
      data: x,
      reset: E
    } = await S({
      x: f,
      y: p,
      initialPlacement: o,
      placement: m,
      strategy: r,
      middlewareData: w,
      rects: u,
      platform: c,
      elements: {
        reference: e,
        floating: t
      }
    });
    f = y ?? f, p = C ?? p, w[b] = {
      ...w[b],
      ...x
    }, E && g < Ja && (g++, typeof E == "object" && (E.placement && (m = E.placement), E.rects && (u = E.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: r
    }) : E.rects), {
      x: f,
      y: p
    } = Wr(u, m, l)), h = -1);
  }
  return {
    x: f,
    y: p,
    placement: m,
    strategy: r,
    middlewareData: w
  };
}, el = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: o,
      placement: r,
      rects: s,
      platform: i,
      elements: c,
      middlewareData: l
    } = t, {
      element: u,
      padding: f = 0
    } = Ge(e, t) || {};
    if (u == null)
      return {};
    const p = Ws(f), m = {
      x: n,
      y: o
    }, g = er(r), w = Qo(g), h = await i.getDimensions(u), v = g === "y", b = v ? "top" : "left", S = v ? "bottom" : "right", y = v ? "clientHeight" : "clientWidth", C = s.reference[w] + s.reference[g] - m[g] - s.floating[w], x = m[g] - s.reference[g], E = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
    let _ = E ? E[y] : 0;
    (!_ || !await (i.isElement == null ? void 0 : i.isElement(E))) && (_ = c.floating[y] || s.floating[w]);
    const R = C / 2 - x / 2, P = _ / 2 - h[w] / 2 - 1, D = tt(p[b], P), B = tt(p[S], P), A = _ - h[w] - B, M = _ / 2 - h[w] / 2 + R, L = Hs(D, M, A), U = !l.arrow && At(r) != null && M !== L && s.reference[w] / 2 - (M < D ? D : B) - h[w] / 2 < 0, T = U ? M < D ? M - D : M - A : 0;
    return {
      [g]: m[g] + T,
      data: {
        [g]: L,
        centerOffset: M - L - T,
        ...U && {
          alignmentOffset: T
        }
      },
      reset: U
    };
  }
}), tl = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: r,
        middlewareData: s,
        rects: i,
        initialPlacement: c,
        platform: l,
        elements: u
      } = t, {
        mainAxis: f = !0,
        crossAxis: p = !0,
        fallbackPlacements: m,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: w = "none",
        flipAlignment: h = !0,
        ...v
      } = Ge(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const b = nt(r), S = Le(c), y = nt(c) === c, C = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), x = m || (y || !h ? [Pn(c)] : ja(c)), E = w !== "none";
      !m && E && x.push(...Xa(c, h, w, C));
      const _ = [c, ...x], R = await l.detectOverflow(t, v), P = [];
      let D = ((o = s.flip) == null ? void 0 : o.overflows) || [];
      if (f && P.push(R[b]), p) {
        const L = Ka(r, i, C);
        P.push(R[L[0]], R[L[1]]);
      }
      if (D = [...D, {
        placement: r,
        overflows: P
      }], !P.every((L) => L <= 0)) {
        var B, A;
        const L = (((B = s.flip) == null ? void 0 : B.index) || 0) + 1, U = _[L];
        if (U && (!(p === "alignment" ? S !== Le(U) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        D.every(($) => Le($.placement) === S ? $.overflows[0] > 0 : !0)))
          return {
            data: {
              index: L,
              overflows: D
            },
            reset: {
              placement: U
            }
          };
        let T = (A = D.filter((N) => N.overflows[0] <= 0).sort((N, $) => N.overflows[1] - $.overflows[1])[0]) == null ? void 0 : A.placement;
        if (!T)
          switch (g) {
            case "bestFit": {
              var M;
              const N = (M = D.filter(($) => {
                if (E) {
                  const W = Le($.placement);
                  return W === S || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  W === "y";
                }
                return !0;
              }).map(($) => [$.placement, $.overflows.filter((W) => W > 0).reduce((W, k) => W + k, 0)]).sort(($, W) => $[1] - W[1])[0]) == null ? void 0 : M[0];
              N && (T = N);
              break;
            }
            case "initialPlacement":
              T = c;
              break;
          }
        if (r !== T)
          return {
            reset: {
              placement: T
            }
          };
      }
      return {};
    }
  };
};
function Ur(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Kr(e) {
  return Wa.some((t) => e[t] >= 0);
}
const nl = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n,
        platform: o
      } = t, {
        strategy: r = "referenceHidden",
        ...s
      } = Ge(e, t);
      switch (r) {
        case "referenceHidden": {
          const i = await o.detectOverflow(t, {
            ...s,
            elementContext: "reference"
          }), c = Ur(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: c,
              referenceHidden: Kr(c)
            }
          };
        }
        case "escaped": {
          const i = await o.detectOverflow(t, {
            ...s,
            altBoundary: !0
          }), c = Ur(i, n.floating);
          return {
            data: {
              escapedOffsets: c,
              escaped: Kr(c)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Us = /* @__PURE__ */ new Set(["left", "top"]);
async function ol(e, t) {
  const {
    placement: n,
    platform: o,
    elements: r
  } = e, s = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), i = nt(n), c = At(n), l = Le(n) === "y", u = Us.has(i) ? -1 : 1, f = s && l ? -1 : 1, p = Ge(t, e);
  let {
    mainAxis: m,
    crossAxis: g,
    alignmentAxis: w
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return c && typeof w == "number" && (g = c === "end" ? w * -1 : w), l ? {
    x: g * f,
    y: m * u
  } : {
    x: m * u,
    y: g * f
  };
}
const rl = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, o;
      const {
        x: r,
        y: s,
        placement: i,
        middlewareData: c
      } = t, l = await ol(t, e);
      return i === ((n = c.offset) == null ? void 0 : n.placement) && (o = c.arrow) != null && o.alignmentOffset ? {} : {
        x: r + l.x,
        y: s + l.y,
        data: {
          ...l,
          placement: i
        }
      };
    }
  };
}, sl = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o,
        placement: r,
        platform: s
      } = t, {
        mainAxis: i = !0,
        crossAxis: c = !1,
        limiter: l = {
          fn: (S) => {
            let {
              x: y,
              y: C
            } = S;
            return {
              x: y,
              y: C
            };
          }
        },
        ...u
      } = Ge(e, t), f = {
        x: n,
        y: o
      }, p = await s.detectOverflow(t, u), m = Le(r), g = Jo(m);
      let w = f[g], h = f[m];
      const v = (S, y) => Hs(y + p[S === "y" ? "top" : "left"], y, y - p[S === "y" ? "bottom" : "right"]);
      i && (w = v(g, w)), c && (h = v(m, h));
      const b = l.fn({
        ...t,
        [g]: w,
        [m]: h
      });
      return {
        ...b,
        data: {
          x: b.x - n,
          y: b.y - o,
          enabled: {
            [g]: i,
            [m]: c
          }
        }
      };
    }
  };
}, il = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      var n, o;
      const {
        x: r,
        y: s,
        placement: i,
        rects: c,
        middlewareData: l
      } = t, {
        offset: u = 0,
        mainAxis: f = !0,
        crossAxis: p = !0
      } = Ge(e, t), m = {
        x: r,
        y: s
      }, g = Le(i), w = Jo(g);
      let h = m[w], v = m[g];
      const b = Ge(u, t), S = typeof b == "number" ? {
        mainAxis: b,
        crossAxis: 0
      } : {
        mainAxis: (n = b.mainAxis) != null ? n : 0,
        crossAxis: (o = b.crossAxis) != null ? o : 0
      };
      if (f) {
        const x = w === "y" ? "height" : "width", E = c.reference[w] - c.floating[x] + S.mainAxis, _ = c.reference[w] + c.reference[x] - S.mainAxis;
        h < E ? h = E : h > _ && (h = _);
      }
      if (p) {
        var y, C;
        const x = w === "y" ? "width" : "height", E = Us.has(nt(i)), _ = c.reference[g] - c.floating[x] + (E && ((y = l.offset) == null ? void 0 : y[g]) || 0) + (E ? 0 : S.crossAxis), R = c.reference[g] + c.reference[x] + (E ? 0 : ((C = l.offset) == null ? void 0 : C[g]) || 0) - (E ? S.crossAxis : 0);
        v < _ ? v = _ : v > R && (v = R);
      }
      return {
        [w]: h,
        [g]: v
      };
    }
  };
}, cl = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: n,
        rects: o,
        platform: r,
        elements: s
      } = t, {
        apply: i = () => {
        },
        ...c
      } = Ge(e, t), l = await r.detectOverflow(t, c), u = nt(n), f = At(n), p = Le(n) === "y", {
        width: m,
        height: g
      } = o.floating;
      let w, h;
      u === "top" || u === "bottom" ? (w = u, h = f === (await (r.isRTL == null ? void 0 : r.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (h = u, w = f === "end" ? "top" : "bottom");
      const v = g - l.top - l.bottom, b = m - l.left - l.right, S = tt(g - l[w], v), y = tt(m - l[h], b), C = t.middlewareData.shift, x = !C;
      let E = S, _ = y;
      C != null && C.enabled.x && (_ = b), C != null && C.enabled.y && (E = v), x && !f && (p ? _ = m - 2 * Ue(l.left, l.right) : E = g - 2 * Ue(l.top, l.bottom)), await i({
        ...t,
        availableWidth: _,
        availableHeight: E
      });
      const R = await r.getDimensions(s.floating);
      return m !== R.width || g !== R.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function An() {
  return typeof window < "u";
}
function Mt(e) {
  return Ks(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function pe(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ze(e) {
  var t;
  return (t = (Ks(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Ks(e) {
  return An() ? e instanceof Node || e instanceof pe(e).Node : !1;
}
function Be(e) {
  return An() ? e instanceof Element || e instanceof pe(e).Element : !1;
}
function st(e) {
  return An() ? e instanceof HTMLElement || e instanceof pe(e).HTMLElement : !1;
}
function jr(e) {
  return !An() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof pe(e).ShadowRoot;
}
function Mn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: r
  } = Ve(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && r !== "inline" && r !== "contents";
}
function al(e) {
  return /^(table|td|th)$/.test(Mt(e));
}
function Nn(e) {
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
const ll = /transform|translate|scale|rotate|perspective|filter/, ul = /paint|layout|strict|content/, at = (e) => !!e && e !== "none";
let oo;
function tr(e) {
  const t = Be(e) ? Ve(e) : e;
  return at(t.transform) || at(t.translate) || at(t.scale) || at(t.rotate) || at(t.perspective) || !nr() && (at(t.backdropFilter) || at(t.filter)) || ll.test(t.willChange || "") || ul.test(t.contain || "");
}
function dl(e) {
  let t = ft(e);
  for (; st(t) && !Xt(t); ) {
    if (tr(t))
      return t;
    if (Nn(t))
      return null;
    t = ft(t);
  }
  return null;
}
function nr() {
  return oo == null && (oo = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), oo;
}
function Xt(e) {
  return /^(html|body|#document)$/.test(Mt(e));
}
function Ve(e) {
  return pe(e).getComputedStyle(e);
}
function $n(e) {
  return Be(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function ft(e) {
  if (Mt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    jr(e) && e.host || // Fallback.
    Ze(e)
  );
  return jr(t) ? t.host : t;
}
function js(e) {
  const t = ft(e);
  return Xt(t) ? (e.ownerDocument || e).body : st(t) && Mn(t) ? t : js(t);
}
function qt(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const r = js(e), s = r === ((o = e.ownerDocument) == null ? void 0 : o.body), i = pe(r);
  if (s) {
    const c = ko(i);
    return t.concat(i, i.visualViewport || [], Mn(r) ? r : [], c && n ? qt(c) : []);
  } else
    return t.concat(r, qt(r, [], n));
}
function ko(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function zs(e) {
  const t = Ve(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const r = st(e), s = r ? e.offsetWidth : n, i = r ? e.offsetHeight : o, c = Tn(n) !== s || Tn(o) !== i;
  return c && (n = s, o = i), {
    width: n,
    height: o,
    $: c
  };
}
function or(e) {
  return Be(e) ? e : e.contextElement;
}
function Tt(e) {
  const t = or(e);
  if (!st(t))
    return Ke(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: r,
    $: s
  } = zs(t);
  let i = (s ? Tn(n.width) : n.width) / o, c = (s ? Tn(n.height) : n.height) / r;
  return (!i || !Number.isFinite(i)) && (i = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: i,
    y: c
  };
}
const fl = /* @__PURE__ */ Ke(0);
function Gs(e) {
  const t = pe(e);
  return !nr() || !t.visualViewport ? fl : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function pl(e, t, n) {
  return t === void 0 && (t = !1), !!n && t && n === pe(e);
}
function pt(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), s = or(e);
  let i = Ke(1);
  t && (o ? Be(o) && (i = Tt(o)) : i = Tt(e));
  const c = pl(s, n, o) ? Gs(s) : Ke(0);
  let l = (r.left + c.x) / i.x, u = (r.top + c.y) / i.y, f = r.width / i.x, p = r.height / i.y;
  if (s && o) {
    const m = pe(s), g = Be(o) ? pe(o) : o;
    let w = m, h = ko(w);
    for (; h && g !== w; ) {
      const v = Tt(h), b = h.getBoundingClientRect(), S = Ve(h), y = b.left + (h.clientLeft + parseFloat(S.paddingLeft)) * v.x, C = b.top + (h.clientTop + parseFloat(S.paddingTop)) * v.y;
      l *= v.x, u *= v.y, f *= v.x, p *= v.y, l += y, u += C, w = pe(h), h = ko(w);
    }
  }
  return Rn({
    width: f,
    height: p,
    x: l,
    y: u
  });
}
function Ln(e, t) {
  const n = $n(e).scrollLeft;
  return t ? t.left + n : pt(Ze(e)).left + n;
}
function Ys(e, t) {
  const n = e.getBoundingClientRect(), o = n.left + t.scrollLeft - Ln(e, n), r = n.top + t.scrollTop;
  return {
    x: o,
    y: r
  };
}
function ml(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: r
  } = e;
  const s = r === "fixed", i = Ze(o), c = t ? Nn(t.floating) : !1;
  if (o === i || c && s)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Ke(1);
  const f = Ke(0), p = st(o);
  if ((p || !s) && ((Mt(o) !== "body" || Mn(i)) && (l = $n(o)), p)) {
    const g = pt(o);
    u = Tt(o), f.x = g.x + o.clientLeft, f.y = g.y + o.clientTop;
  }
  const m = i && !p && !s ? Ys(i, l) : Ke(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + f.x + m.x,
    y: n.y * u.y - l.scrollTop * u.y + f.y + m.y
  };
}
function hl(e) {
  return e.getClientRects ? Array.from(e.getClientRects()) : [];
}
function vl(e) {
  const t = $n(e), n = e.ownerDocument.body, o = Ue(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), r = Ue(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight);
  let s = -t.scrollLeft + Ln(e);
  const i = -t.scrollTop;
  return Ve(n).direction === "rtl" && (s += Ue(e.clientWidth, n.clientWidth) - o), {
    width: o,
    height: r,
    x: s,
    y: i
  };
}
const gl = 25;
function wl(e, t, n) {
  n === void 0 && (n = "viewport");
  const o = n === "layoutViewport", r = pe(e), s = Ze(e), i = r.visualViewport;
  let c = s.clientWidth, l = s.clientHeight, u = 0, f = 0;
  if (i) {
    const m = !nr() || t === "fixed";
    o ? m || (u = -i.offsetLeft, f = -i.offsetTop) : (c = i.width, l = i.height, m && (u = i.offsetLeft, f = i.offsetTop));
  }
  if (Ln(s) <= 0) {
    const m = s.ownerDocument, g = m.body, w = getComputedStyle(g), h = m.compatMode === "CSS1Compat" && parseFloat(w.marginLeft) + parseFloat(w.marginRight) || 0, v = Math.abs(s.clientWidth - g.clientWidth - h), b = getComputedStyle(s).scrollbarGutter === "stable both-edges" ? v / 2 : v;
    b <= gl && (c -= b);
  }
  return {
    width: c,
    height: l,
    x: u,
    y: f
  };
}
function bl(e, t) {
  const n = pt(e, !0, t === "fixed"), o = n.top + e.clientTop, r = n.left + e.clientLeft, s = Tt(e), i = e.clientWidth * s.x, c = e.clientHeight * s.y, l = r * s.x, u = o * s.y;
  return {
    width: i,
    height: c,
    x: l,
    y: u
  };
}
function zr(e, t, n) {
  let o;
  if (t === "viewport" || t === "layoutViewport")
    o = wl(e, n, t);
  else if (t === "document")
    o = vl(Ze(e));
  else if (Be(t))
    o = bl(t, n);
  else {
    const r = Gs(e);
    o = {
      x: t.x - r.x,
      y: t.y - r.y,
      width: t.width,
      height: t.height
    };
  }
  return Rn(o);
}
function yl(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = qt(e, [], !1).filter((c) => Be(c) && Mt(c) !== "body"), r = null;
  const s = Ve(e).position === "fixed";
  let i = s ? ft(e) : e;
  for (; Be(i) && !Xt(i); ) {
    const c = Ve(i), l = tr(i), u = r ? r.position : s ? "fixed" : "";
    !l && (u === "fixed" || u === "absolute" && c.position === "static") ? o = o.filter((p) => p !== i) : r = c, i = ft(i);
  }
  return t.set(e, o), o;
}
function Cl(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: r
  } = e;
  const i = [...n === "clippingAncestors" ? Nn(t) ? [] : yl(t, this._c) : [].concat(n), o], c = zr(t, i[0], r);
  let l = c.top, u = c.right, f = c.bottom, p = c.left;
  for (let m = 1; m < i.length; m++) {
    const g = zr(t, i[m], r);
    l = Ue(g.top, l), u = tt(g.right, u), f = tt(g.bottom, f), p = Ue(g.left, p);
  }
  return {
    width: u - p,
    height: f - l,
    x: p,
    y: l
  };
}
function Sl(e) {
  const {
    width: t,
    height: n
  } = zs(e);
  return {
    width: t,
    height: n
  };
}
function xl(e, t, n) {
  const o = st(t), r = Ze(t), s = n === "fixed", i = pt(e, !0, s, t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Ke(0);
  if ((o || !s) && ((Mt(t) !== "body" || Mn(r)) && (c = $n(t)), o)) {
    const m = pt(t, !0, s, t);
    l.x = m.x + t.clientLeft, l.y = m.y + t.clientTop;
  }
  !o && r && (l.x = Ln(r));
  const u = r && !o && !s ? Ys(r, c) : Ke(0), f = i.left + c.scrollLeft - l.x - u.x, p = i.top + c.scrollTop - l.y - u.y;
  return {
    x: f,
    y: p,
    width: i.width,
    height: i.height
  };
}
function ro(e) {
  return Ve(e).position === "static";
}
function Gr(e, t) {
  if (!st(e) || Ve(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Ze(e) === n && (n = n.ownerDocument.body), n;
}
function Xs(e, t) {
  const n = pe(e);
  if (Nn(e))
    return n;
  if (!st(e)) {
    let r = ft(e);
    for (; r && !Xt(r); ) {
      if (Be(r) && !ro(r))
        return r;
      r = ft(r);
    }
    return n;
  }
  let o = Gr(e, t);
  for (; o && al(o) && ro(o); )
    o = Gr(o, t);
  return o && Xt(o) && ro(o) && !tr(o) ? n : o || dl(e) || n;
}
const El = async function(e) {
  const t = this.getOffsetParent || Xs, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: xl(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function _l(e) {
  return Ve(e).direction === "rtl";
}
const Tl = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ml,
  getDocumentElement: Ze,
  getClippingRect: Cl,
  getOffsetParent: Xs,
  getElementRects: El,
  getClientRects: hl,
  getDimensions: Sl,
  getScale: Tt,
  isElement: Be,
  isRTL: _l
};
function qs(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Pl(e, t, n) {
  let o = null, r;
  const s = Ze(e);
  function i() {
    var f;
    clearTimeout(r), (f = o) == null || f.disconnect(), o = null;
  }
  function c(f, p) {
    f === void 0 && (f = !1), p === void 0 && (p = 1), i();
    const m = e.getBoundingClientRect(), {
      left: g,
      top: w,
      width: h,
      height: v
    } = m;
    if (f || t(), !h || !v)
      return;
    const b = mn(w), S = mn(s.clientWidth - (g + h)), y = mn(s.clientHeight - (w + v)), C = mn(g), E = {
      rootMargin: -b + "px " + -S + "px " + -y + "px " + -C + "px",
      threshold: Ue(0, tt(1, p)) || 1
    };
    let _ = !0;
    function R(P) {
      const D = P[0].intersectionRatio;
      if (!qs(m, e.getBoundingClientRect()))
        return c();
      if (D !== p) {
        if (!_)
          return c();
        D ? c(!1, D) : r = setTimeout(() => {
          c(!1, 1e-7);
        }, 1e3);
      }
      _ = !1;
    }
    try {
      o = new IntersectionObserver(R, {
        ...E,
        // Handle <iframe>s
        root: s.ownerDocument
      });
    } catch {
      o = new IntersectionObserver(R, E);
    }
    o.observe(e);
  }
  const l = pe(e), u = () => c(n);
  return l.addEventListener("resize", u), c(!0), () => {
    l.removeEventListener("resize", u), i();
  };
}
function Rl(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = o, u = or(e), f = r || s ? [...u ? qt(u) : [], ...t ? qt(t) : []] : [];
  f.forEach((b) => {
    r && b.addEventListener("scroll", n), s && b.addEventListener("resize", n);
  });
  const p = u && c ? Pl(u, n, s) : null;
  let m = -1, g = null;
  i && (g = new ResizeObserver((b) => {
    let [S] = b;
    S && S.target === u && g && t && (g.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var y;
      (y = g) == null || y.observe(t);
    })), n();
  }), u && !l && g.observe(u), t && g.observe(t));
  let w, h = l ? pt(e) : null;
  l && v();
  function v() {
    const b = pt(e);
    h && !qs(h, b) && n(), h = b, w = requestAnimationFrame(v);
  }
  return n(), () => {
    var b;
    f.forEach((S) => {
      r && S.removeEventListener("scroll", n), s && S.removeEventListener("resize", n);
    }), p == null || p(), (b = g) == null || b.disconnect(), g = null, l && cancelAnimationFrame(w);
  };
}
const kl = rl, Il = sl, Dl = tl, Ol = cl, Al = nl, Yr = el, Ml = il, Nl = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), r = n ?? {}, s = {
    ...Tl,
    ...r.platform,
    _c: o
  };
  return Qa(e, t, {
    ...r,
    platform: s
  });
};
var $l = typeof document < "u", Ll = function() {
}, Sn = $l ? Dc : Ll;
function kn(e, t) {
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
        if (!kn(e[o], t[o]))
          return !1;
      return !0;
    }
    if (r = Object.keys(e), n = r.length, n !== Object.keys(t).length)
      return !1;
    for (o = n; o-- !== 0; )
      if (!{}.hasOwnProperty.call(t, r[o]))
        return !1;
    for (o = n; o-- !== 0; ) {
      const s = r[o];
      if (!(s === "_owner" && e.$$typeof) && !kn(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Zs(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Xr(e, t) {
  const n = Zs(e);
  return Math.round(t * n) / n;
}
function so(e) {
  const t = a.useRef(e);
  return Sn(() => {
    t.current = e;
  }), t;
}
function Fl(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: o = [],
    platform: r,
    elements: {
      reference: s,
      floating: i
    } = {},
    transform: c = !0,
    whileElementsMounted: l,
    open: u
  } = e, [f, p] = a.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [m, g] = a.useState(o);
  kn(m, o) || g(o);
  const [w, h] = a.useState(null), [v, b] = a.useState(null), S = a.useCallback(($) => {
    $ !== E.current && (E.current = $, h($));
  }, []), y = a.useCallback(($) => {
    $ !== _.current && (_.current = $, b($));
  }, []), C = s || w, x = i || v, E = a.useRef(null), _ = a.useRef(null), R = a.useRef(f), P = l != null, D = so(l), B = so(r), A = so(u), M = a.useCallback(() => {
    if (!E.current || !_.current)
      return;
    const $ = {
      placement: t,
      strategy: n,
      middleware: m
    };
    B.current && ($.platform = B.current), Nl(E.current, _.current, $).then((W) => {
      const k = {
        ...W,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: A.current !== !1
      };
      L.current && !kn(R.current, k) && (R.current = k, Dt.flushSync(() => {
        p(k);
      }));
    });
  }, [m, t, n, B, A]);
  Sn(() => {
    u === !1 && R.current.isPositioned && (R.current.isPositioned = !1, p(($) => ({
      ...$,
      isPositioned: !1
    })));
  }, [u]);
  const L = a.useRef(!1);
  Sn(() => (L.current = !0, () => {
    L.current = !1;
  }), []), Sn(() => {
    if (C && (E.current = C), x && (_.current = x), C && x) {
      if (D.current)
        return D.current(C, x, M);
      M();
    }
  }, [C, x, M, D, P]);
  const U = a.useMemo(() => ({
    reference: E,
    floating: _,
    setReference: S,
    setFloating: y
  }), [S, y]), T = a.useMemo(() => ({
    reference: C,
    floating: x
  }), [C, x]), N = a.useMemo(() => {
    const $ = {
      position: n,
      left: 0,
      top: 0
    };
    if (!T.floating)
      return $;
    const W = Xr(T.floating, f.x), k = Xr(T.floating, f.y);
    return c ? {
      ...$,
      transform: "translate(" + W + "px, " + k + "px)",
      ...Zs(T.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: W,
      top: k
    };
  }, [n, c, T.floating, f.x, f.y]);
  return a.useMemo(() => ({
    ...f,
    update: M,
    refs: U,
    elements: T,
    floatingStyles: N
  }), [f, M, U, T, N]);
}
const Bl = (e) => {
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
      return o && t(o) ? o.current != null ? Yr({
        element: o.current,
        padding: r
      }).fn(n) : {} : o ? Yr({
        element: o,
        padding: r
      }).fn(n) : {};
    }
  };
}, Vl = (e, t) => {
  const n = kl(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Hl = (e, t) => {
  const n = Il(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Wl = (e, t) => ({
  fn: Ml(e).fn,
  options: [e, t]
}), Ul = (e, t) => {
  const n = Dl(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Kl = (e, t) => {
  const n = Ol(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, jl = (e, t) => {
  const n = Al(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, zl = (e, t) => {
  const n = Bl(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
};
var Gl = Object.defineProperty, Yl = (e, t) => Gl(e, "name", { value: t, configurable: !0 }), Xl = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ Yl(function(t, n) {
    const { children: o, width: r = 10, height: s = 5, ...i } = t;
    return /* @__PURE__ */ d(
      H.svg,
      {
        ...i,
        ref: n,
        width: r,
        height: s,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: t.asChild ? o : /* @__PURE__ */ d("polygon", { points: "0,0 30,0 15,10" })
      }
    );
  }, "Arrow")
), ql = Xl, Zl = Object.defineProperty, Jl = (e, t) => Zl(e, "name", { value: t, configurable: !0 });
function Fn(e) {
  const [t, n] = a.useState(void 0);
  return oe(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const o = new ResizeObserver((r) => {
        if (!Array.isArray(r) || !r.length)
          return;
        const s = r[0];
        let i, c;
        if ("borderBoxSize" in s) {
          const l = s.borderBoxSize, u = Array.isArray(l) ? l[0] : l;
          i = u.inlineSize, c = u.blockSize;
        } else
          i = e.offsetWidth, c = e.offsetHeight;
        n({ width: i, height: c });
      });
      return o.observe(e, { box: "border-box" }), () => o.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
Jl(Fn, "useSize");
var Ql = Object.defineProperty, je = (e, t) => Ql(e, "name", { value: t, configurable: !0 }), Js = "Popper", [Qs, Nt] = /* @__PURE__ */ me(Js), [eu, ei] = Qs(Js), tu = /* @__PURE__ */ je((e) => {
  const { __scopePopper: t, children: n } = e, [o, r] = a.useState(null), [s, i] = a.useState(void 0);
  return /* @__PURE__ */ d(
    eu,
    {
      scope: t,
      anchor: o,
      onAnchorChange: r,
      placementState: s,
      setPlacementState: i,
      children: n
    }
  );
}, "Popper"), nu = "PopperAnchor", ou = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ je(function(t, n) {
    const { __scopePopper: o, virtualRef: r, ...s } = t, i = ei(nu, o), c = a.useRef(null), l = i.onAnchorChange, u = a.useCallback(
      (h) => {
        c.current = h, h && l(h);
      },
      [l]
    ), f = K(n, u), p = a.useRef(null);
    a.useEffect(() => {
      if (!r)
        return;
      const h = p.current;
      p.current = r.current, h !== p.current && l(p.current);
    });
    const m = i.placementState && Bn(i.placementState), g = m == null ? void 0 : m[0], w = m == null ? void 0 : m[1];
    return r ? null : /* @__PURE__ */ d(
      H.div,
      {
        "data-radix-popper-side": g,
        "data-radix-popper-align": w,
        ...s,
        ref: f
      }
    );
  }, "PopperAnchor")
), ti = "PopperContent", [ru, su] = Qs(ti), iu = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ je(function(t, n) {
    var X, ee, Y, j, q, De, Oe;
    const {
      __scopePopper: o,
      side: r = "bottom",
      sideOffset: s = 0,
      align: i = "center",
      alignOffset: c = 0,
      arrowPadding: l = 0,
      avoidCollisions: u = !0,
      collisionBoundary: f = [],
      collisionPadding: p = 0,
      sticky: m = "partial",
      hideWhenDetached: g = !1,
      updatePositionStrategy: w = "optimized",
      onPlaced: h,
      ...v
    } = t, b = ei(ti, o), [S, y] = a.useState(null), C = K(n, y), [x, E] = a.useState(null), _ = Fn(x), R = (_ == null ? void 0 : _.width) ?? 0, P = (_ == null ? void 0 : _.height) ?? 0, D = r + (i !== "center" ? "-" + i : ""), B = typeof p == "number" ? p : { top: 0, right: 0, bottom: 0, left: 0, ...p }, A = Array.isArray(f) ? f : [f], M = A.length > 0, L = {
      padding: B,
      boundary: A.filter(ni),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: M
    }, { refs: U, floatingStyles: T, placement: N, isPositioned: $, middlewareData: W } = Fl({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: D,
      whileElementsMounted: /* @__PURE__ */ je((...ct) => Rl(...ct, {
        animationFrame: w === "always"
      }), "whileElementsMounted"),
      elements: {
        reference: b.anchor
      },
      middleware: [
        Vl({ mainAxis: s + P, alignmentAxis: c }),
        u && Hl({
          mainAxis: !0,
          crossAxis: !1,
          limiter: m === "partial" ? Wl() : void 0,
          ...L
        }),
        u && Ul({ ...L }),
        Kl({
          ...L,
          apply: /* @__PURE__ */ je(({ elements: ct, rects: yt, availableWidth: Lt, availableHeight: Rc }) => {
            const { width: kc, height: Ic } = yt.reference, dn = ct.floating.style;
            dn.setProperty("--radix-popper-available-width", `${Lt}px`), dn.setProperty("--radix-popper-available-height", `${Rc}px`), dn.setProperty("--radix-popper-anchor-width", `${kc}px`), dn.setProperty("--radix-popper-anchor-height", `${Ic}px`);
          }, "apply")
        }),
        x && zl({ element: x, padding: l }),
        uu({ arrowWidth: R, arrowHeight: P }),
        g && jl({
          strategy: "referenceHidden",
          ...L,
          // `hide` detects whether the anchor (reference) is clipped, so when
          // no explicit `collisionBoundary` is set we fall back to Floating
          // UI's default clipping ancestors (e.g. a scrollable menu). This
          // lets an occluded submenu hide once its anchor scrolls out of view
          // (#3237). The collision/size middlewares deliberately keep the
          // viewport-based default to avoid clamping content rendered inside
          // transformed or overflow-clipping portal containers.
          boundary: M ? L.boundary : void 0
        })
      ]
    }), k = b.setPlacementState;
    oe(() => (k(N), () => {
      k(void 0);
    }), [N, k]);
    const [Z, G] = Bn(N), Q = ue(h);
    oe(() => {
      $ && (Q == null || Q());
    }, [$, Q]);
    const ae = (X = W.arrow) == null ? void 0 : X.x, ce = (ee = W.arrow) == null ? void 0 : ee.y, we = ((Y = W.arrow) == null ? void 0 : Y.centerOffset) !== 0, [he, V] = a.useState();
    return oe(() => {
      S && V(window.getComputedStyle(S).zIndex);
    }, [S]), /* @__PURE__ */ d(
      "div",
      {
        ref: U.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...T,
          transform: $ ? T.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: he,
          "--radix-popper-transform-origin": [
            (j = W.transformOrigin) == null ? void 0 : j.x,
            (q = W.transformOrigin) == null ? void 0 : q.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((De = W.hide) == null ? void 0 : De.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: t.dir,
        children: /* @__PURE__ */ d(
          ru,
          {
            scope: o,
            placedSide: Z,
            placedAlign: G,
            onArrowChange: E,
            arrowX: ae,
            arrowY: ce,
            shouldHideArrow: we,
            children: /* @__PURE__ */ d(
              H.div,
              {
                "data-side": Z,
                "data-align": G,
                ...v,
                ref: C,
                style: {
                  ...v.style,
                  // if the PopperContent hasn't been placed yet (not all
                  // measurements done) we prevent animations so that users'
                  // animations don't kick in too early from the wrong sides.
                  animation: $ ? (Oe = v.style) == null ? void 0 : Oe.animation : "none"
                }
              }
            )
          }
        )
      }
    );
  }, "PopperContent")
), cu = "PopperArrow", au = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, lu = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ je(function(t, n) {
    const { __scopePopper: o, ...r } = t, s = su(cu, o), i = au[s.placedSide];
    return (
      // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
      // doesn't report size as we'd expect on SVG elements.
      // it reports their bounding box which is effectively the largest path inside the SVG.
      /* @__PURE__ */ d(
        "span",
        {
          ref: s.onArrowChange,
          style: {
            position: "absolute",
            left: s.arrowX,
            top: s.arrowY,
            [i]: 0,
            transformOrigin: {
              top: "",
              right: "0 0",
              bottom: "center 0",
              left: "100% 0"
            }[s.placedSide],
            transform: {
              top: "translateY(100%)",
              right: "translateY(50%) rotate(90deg) translateX(-50%)",
              bottom: "rotate(180deg)",
              left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[s.placedSide],
            visibility: s.shouldHideArrow ? "hidden" : void 0
          },
          children: /* @__PURE__ */ d(
            ql,
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
function ni(e) {
  return e !== null;
}
je(ni, "isNotNull");
var uu = /* @__PURE__ */ je((e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var v, b, S;
    const { placement: n, rects: o, middlewareData: r } = t, i = ((v = r.arrow) == null ? void 0 : v.centerOffset) !== 0, c = i ? 0 : e.arrowWidth, l = i ? 0 : e.arrowHeight, [u, f] = Bn(n), p = { start: "0%", center: "50%", end: "100%" }[f], m = (((b = r.arrow) == null ? void 0 : b.x) ?? 0) + c / 2, g = (((S = r.arrow) == null ? void 0 : S.y) ?? 0) + l / 2;
    let w = "", h = "";
    return u === "bottom" ? (w = i ? p : `${m}px`, h = `${-l}px`) : u === "top" ? (w = i ? p : `${m}px`, h = `${o.floating.height + l}px`) : u === "right" ? (w = `${-l}px`, h = i ? p : `${g}px`) : u === "left" && (w = `${o.floating.width + l}px`, h = i ? p : `${g}px`), { data: { x: w, y: h } };
  }
}), "transformOrigin");
function Bn(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
je(Bn, "getSideAndAlignFromPlacement");
var rr = tu, sr = ou, ir = iu, du = lu, fu = Object.defineProperty, pu = (e, t) => fu(e, "name", { value: t, configurable: !0 }), sn = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ pu(function(t, n) {
    var l;
    const { container: o, ...r } = t, [s, i] = a.useState(!1);
    oe(() => i(!0), []);
    const c = o || s && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body);
    return c ? Dt.createPortal(/* @__PURE__ */ d(H.div, { ...r, ref: n }), c) : null;
  }, "Portal")
), mu = Object.defineProperty, Ye = (e, t) => mu(e, "name", { value: t, configurable: !0 });
function oi(e, t) {
  return a.useReducer((n, o) => t[n][o] ?? n, e);
}
Ye(oi, "useStateMachine");
var ke = /* @__PURE__ */ Ye((e) => {
  const { present: t, children: n } = e, o = ri(t), r = typeof n == "function" ? n({ present: o.isPresent }) : a.Children.only(n), s = si(o.ref, ii(r));
  return typeof n == "function" || o.isPresent ? a.cloneElement(r, { ref: s }) : null;
}, "Presence");
function ri(e) {
  const [t, n] = a.useState(), o = a.useRef(null), r = a.useRef(e), s = a.useRef("none"), i = a.useRef(void 0), c = e ? "mounted" : "unmounted", [l, u] = oi(c, {
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
    l === "mounted" ? (s.current = i.current ?? _t(o.current), i.current = void 0) : s.current = "none";
  }, [l]), oe(() => {
    const f = o.current, p = r.current;
    if (p !== e) {
      const g = s.current, w = _t(f);
      e ? (i.current = w, u("MOUNT")) : w === "none" || (f == null ? void 0 : f.display) === "none" ? u("UNMOUNT") : u(p && g !== w ? "ANIMATION_OUT" : "UNMOUNT"), r.current = e;
    }
  }, [e, u]), oe(() => {
    if (t) {
      let f;
      const p = t.ownerDocument.defaultView ?? window, m = /* @__PURE__ */ Ye((w) => {
        const v = _t(o.current).includes(CSS.escape(w.animationName));
        if (w.target === t && v && (u("ANIMATION_END"), !r.current)) {
          const b = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", f = p.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = b);
          });
        }
      }, "handleAnimationEnd"), g = /* @__PURE__ */ Ye((w) => {
        w.target === t && (s.current = _t(o.current));
      }, "handleAnimationStart");
      return t.addEventListener("animationstart", g), t.addEventListener("animationcancel", m), t.addEventListener("animationend", m), () => {
        p.clearTimeout(f), t.removeEventListener("animationstart", g), t.removeEventListener("animationcancel", m), t.removeEventListener("animationend", m);
      };
    } else
      u("ANIMATION_END");
  }, [t, u]), {
    isPresent: ["mounted", "unmountSuspended"].includes(l),
    ref: a.useCallback((f) => {
      if (f) {
        const p = getComputedStyle(f);
        o.current = p, i.current = _t(p);
      } else
        o.current = null;
      n(f);
    }, [])
  };
}
Ye(ri, "usePresence");
function Io(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
Ye(Io, "setRef");
function si(...e) {
  const t = a.useRef(e);
  return t.current = e, a.useCallback((n) => {
    const o = t.current;
    let r = !1;
    const s = o.map((i) => {
      const c = Io(i, n);
      return !r && typeof c == "function" && (r = !0), c;
    });
    if (r)
      return () => {
        for (let i = 0; i < s.length; i++) {
          const c = s[i];
          typeof c == "function" ? c() : Io(o[i], null);
        }
      };
  }, []);
}
Ye(si, "useStableComposedRefs");
function _t(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
Ye(_t, "getAnimationName");
function ii(e) {
  var o, r;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
Ye(ii, "getElementRef");
var hu = Object.defineProperty, vu = (e, t) => hu(e, "name", { value: t, configurable: !0 }), qr = a[" useEffectEvent ".trim().toString()], Zr = a[" useInsertionEffect ".trim().toString()];
function ci(e) {
  if (typeof qr == "function")
    return qr(e);
  const t = a.useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  return typeof Zr == "function" ? Zr(() => {
    t.current = e;
  }) : oe(() => {
    t.current = e;
  }), a.useMemo(() => ((...n) => {
    var o;
    return (o = t.current) == null ? void 0 : o.call(t, ...n);
  }), []);
}
vu(ci, "useEffectEvent");
var gu = Object.defineProperty, cn = (e, t) => gu(e, "name", { value: t, configurable: !0 }), wu = a[" useInsertionEffect ".trim().toString()] || oe;
function Pe({
  prop: e,
  defaultProp: t,
  onChange: n = /* @__PURE__ */ cn(() => {
  }, "onChange"),
  caller: o
}) {
  const [r, s, i] = ai({
    defaultProp: t,
    onChange: n
  }), c = e !== void 0, l = c ? e : r, u = a.useCallback(
    (f) => {
      var p;
      if (c) {
        const m = li(f) ? f(e) : f;
        m !== e && ((p = i.current) == null || p.call(i, m));
      } else
        s(f);
    },
    [c, e, s, i]
  );
  return [l, u];
}
cn(Pe, "useControllableState");
function ai({
  defaultProp: e,
  onChange: t
}) {
  const [n, o] = a.useState(e), r = a.useRef(n), s = a.useRef(t);
  return wu(() => {
    s.current = t;
  }, [t]), a.useEffect(() => {
    var i;
    r.current !== n && ((i = s.current) == null || i.call(s, n), r.current = n);
  }, [n, r]), [n, o, s];
}
cn(ai, "useUncontrolledState");
function li(e) {
  return typeof e == "function";
}
cn(li, "isFunction");
var Jr = Symbol("RADIX:SYNC_STATE");
function bu(e, t, n, o) {
  const { prop: r, defaultProp: s, onChange: i, caller: c } = t, l = r !== void 0, u = ci(i), f = [{ ...n, state: s }];
  o && f.push(o);
  const [p, m] = a.useReducer(
    (v, b) => {
      if (b.type === Jr)
        return { ...v, state: b.state };
      const S = e(v, b);
      return l && !Object.is(S.state, v.state) && u(S.state), S;
    },
    ...f
  ), g = p.state, w = a.useRef(g);
  a.useEffect(() => {
    w.current !== g && (w.current = g, l || u(g));
  }, [g, w, l]);
  const h = a.useMemo(() => r !== void 0 ? { ...p, state: r } : p, [p, r]);
  return a.useEffect(() => {
    l && !Object.is(r, p.state) && m({ type: Jr, state: r });
  }, [r, p.state, l]), [h, m];
}
cn(bu, "useControllableStateReducer");
var yu = Object.defineProperty, Cu = (e, t) => yu(e, "name", { value: t, configurable: !0 });
function ui(e) {
  const t = a.useRef({ value: e, previous: e });
  return a.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
Cu(ui, "usePrevious");
var Su = Object.defineProperty, xu = (e, t) => Su(e, "name", { value: t, configurable: !0 }), di = Object.freeze({
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
}), cr = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ xu(function(t, n) {
    return /* @__PURE__ */ d(
      H.span,
      {
        ...t,
        ref: n,
        style: { ...di, ...t.style }
      }
    );
  }, "VisuallyHidden")
), Eu = cr, _u = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Ct = /* @__PURE__ */ new WeakMap(), hn = /* @__PURE__ */ new WeakMap(), vn = {}, io = 0, fi = function(e) {
  return e && (e.host || fi(e.parentNode));
}, Tu = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = fi(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Pu = function(e, t, n, o) {
  var r = Tu(t, Array.isArray(e) ? e : [e]);
  vn[n] || (vn[n] = /* @__PURE__ */ new WeakMap());
  var s = vn[n], i = [], c = /* @__PURE__ */ new Set(), l = new Set(r), u = function(p) {
    !p || c.has(p) || (c.add(p), u(p.parentNode));
  };
  r.forEach(u);
  var f = function(p) {
    !p || l.has(p) || Array.prototype.forEach.call(p.children, function(m) {
      if (c.has(m))
        f(m);
      else
        try {
          var g = m.getAttribute(o), w = g !== null && g !== "false", h = (Ct.get(m) || 0) + 1, v = (s.get(m) || 0) + 1;
          Ct.set(m, h), s.set(m, v), i.push(m), h === 1 && w && hn.set(m, !0), v === 1 && m.setAttribute(n, "true"), w || m.setAttribute(o, "true");
        } catch (b) {
          console.error("aria-hidden: cannot operate on ", m, b);
        }
    });
  };
  return f(t), c.clear(), io++, function() {
    i.forEach(function(p) {
      var m = Ct.get(p) - 1, g = s.get(p) - 1;
      Ct.set(p, m), s.set(p, g), m || (hn.has(p) || p.removeAttribute(o), hn.delete(p)), g || p.removeAttribute(n);
    }), io--, io || (Ct = /* @__PURE__ */ new WeakMap(), Ct = /* @__PURE__ */ new WeakMap(), hn = /* @__PURE__ */ new WeakMap(), vn = {});
  };
}, ar = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), r = _u(e);
  return r ? (o.push.apply(o, Array.from(r.querySelectorAll("[aria-live], script"))), Pu(o, r, n, "aria-hidden")) : function() {
    return null;
  };
}, $e = function() {
  return $e = Object.assign || function(t) {
    for (var n, o = 1, r = arguments.length; o < r; o++) {
      n = arguments[o];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, $e.apply(this, arguments);
};
function pi(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
}
function Ru(e, t, n) {
  if (n || arguments.length === 2) for (var o = 0, r = t.length, s; o < r; o++)
    (s || !(o in t)) && (s || (s = Array.prototype.slice.call(t, 0, o)), s[o] = t[o]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var xn = "right-scroll-bar-position", En = "width-before-scroll-bar", ku = "with-scroll-bars-hidden", Iu = "--removed-body-scroll-bar-size";
function co(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Du(e, t) {
  var n = Te(function() {
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
var Ou = typeof window < "u" ? a.useLayoutEffect : a.useEffect, Qr = /* @__PURE__ */ new WeakMap();
function Au(e, t) {
  var n = Du(null, function(o) {
    return e.forEach(function(r) {
      return co(r, o);
    });
  });
  return Ou(function() {
    var o = Qr.get(n);
    if (o) {
      var r = new Set(o), s = new Set(e), i = n.current;
      r.forEach(function(c) {
        s.has(c) || co(c, null);
      }), s.forEach(function(c) {
        r.has(c) || co(c, i);
      });
    }
    Qr.set(n, e);
  }, [e]), n;
}
function Mu(e) {
  return e;
}
function Nu(e, t) {
  t === void 0 && (t = Mu);
  var n = [], o = !1, r = {
    read: function() {
      if (o)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(s) {
      var i = t(s, o);
      return n.push(i), function() {
        n = n.filter(function(c) {
          return c !== i;
        });
      };
    },
    assignSyncMedium: function(s) {
      for (o = !0; n.length; ) {
        var i = n;
        n = [], i.forEach(s);
      }
      n = {
        push: function(c) {
          return s(c);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(s) {
      o = !0;
      var i = [];
      if (n.length) {
        var c = n;
        n = [], c.forEach(s), i = n;
      }
      var l = function() {
        var f = i;
        i = [], f.forEach(s);
      }, u = function() {
        return Promise.resolve().then(l);
      };
      u(), n = {
        push: function(f) {
          i.push(f), u();
        },
        filter: function(f) {
          return i = i.filter(f), n;
        }
      };
    }
  };
  return r;
}
function $u(e) {
  e === void 0 && (e = {});
  var t = Nu(null);
  return t.options = $e({ async: !0, ssr: !1 }, e), t;
}
var mi = function(e) {
  var t = e.sideCar, n = pi(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = t.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return a.createElement(o, $e({}, n));
};
mi.isSideCarExport = !0;
function Lu(e, t) {
  return e.useMedium(t), mi;
}
var hi = $u(), ao = function() {
}, Vn = a.forwardRef(function(e, t) {
  var n = a.useRef(null), o = a.useState({
    onScrollCapture: ao,
    onWheelCapture: ao,
    onTouchMoveCapture: ao
  }), r = o[0], s = o[1], i = e.forwardProps, c = e.children, l = e.className, u = e.removeScrollBar, f = e.enabled, p = e.shards, m = e.sideCar, g = e.noRelative, w = e.noIsolation, h = e.inert, v = e.allowPinchZoom, b = e.as, S = b === void 0 ? "div" : b, y = e.gapMode, C = pi(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), x = m, E = Au([n, t]), _ = $e($e({}, C), r);
  return a.createElement(
    a.Fragment,
    null,
    f && a.createElement(x, { sideCar: hi, removeScrollBar: u, shards: p, noRelative: g, noIsolation: w, inert: h, setCallbacks: s, allowPinchZoom: !!v, lockRef: n, gapMode: y }),
    i ? a.cloneElement(a.Children.only(c), $e($e({}, _), { ref: E })) : a.createElement(S, $e({}, _, { className: l, ref: E }), c)
  );
});
Vn.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Vn.classNames = {
  fullWidth: En,
  zeroRight: xn
};
var Fu = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Bu() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Fu();
  return t && e.setAttribute("nonce", t), e;
}
function Vu(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Hu(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Wu = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Bu()) && (Vu(t, n), Hu(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Uu = function() {
  var e = Wu();
  return function(t, n) {
    a.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, vi = function() {
  var e = Uu(), t = function(n) {
    var o = n.styles, r = n.dynamic;
    return e(o, r), null;
  };
  return t;
}, Ku = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, lo = function(e) {
  return parseInt(e || "", 10) || 0;
}, ju = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], o = t[e === "padding" ? "paddingTop" : "marginTop"], r = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [lo(n), lo(o), lo(r)];
}, zu = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Ku;
  var t = ju(e), n = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, o - n + t[2] - t[0])
  };
}, Gu = vi(), Pt = "data-scroll-locked", Yu = function(e, t, n, o) {
  var r = e.left, s = e.top, i = e.right, c = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(ku, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(c, "px ").concat(o, `;
  }
  body[`).concat(Pt, `] {
    overflow: hidden `).concat(o, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(o, ";"),
    n === "margin" && `
    padding-left: `.concat(r, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(c, "px ").concat(o, `;
    `),
    n === "padding" && "padding-right: ".concat(c, "px ").concat(o, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(xn, ` {
    right: `).concat(c, "px ").concat(o, `;
  }
  
  .`).concat(En, ` {
    margin-right: `).concat(c, "px ").concat(o, `;
  }
  
  .`).concat(xn, " .").concat(xn, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(En, " .").concat(En, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat(Pt, `] {
    `).concat(Iu, ": ").concat(c, `px;
  }
`);
}, es = function() {
  var e = parseInt(document.body.getAttribute(Pt) || "0", 10);
  return isFinite(e) ? e : 0;
}, Xu = function() {
  a.useEffect(function() {
    return document.body.setAttribute(Pt, (es() + 1).toString()), function() {
      var e = es() - 1;
      e <= 0 ? document.body.removeAttribute(Pt) : document.body.setAttribute(Pt, e.toString());
    };
  }, []);
}, qu = function(e) {
  var t = e.noRelative, n = e.noImportant, o = e.gapMode, r = o === void 0 ? "margin" : o;
  Xu();
  var s = a.useMemo(function() {
    return zu(r);
  }, [r]);
  return a.createElement(Gu, { styles: Yu(s, !t, r, n ? "" : "!important") });
}, Do = !1;
if (typeof window < "u")
  try {
    var gn = Object.defineProperty({}, "passive", {
      get: function() {
        return Do = !0, !0;
      }
    });
    window.addEventListener("test", gn, gn), window.removeEventListener("test", gn, gn);
  } catch {
    Do = !1;
  }
var St = Do ? { passive: !1 } : !1, Zu = function(e) {
  return e.tagName === "TEXTAREA";
}, gi = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Zu(e) && n[t] === "visible")
  );
}, Ju = function(e) {
  return gi(e, "overflowY");
}, Qu = function(e) {
  return gi(e, "overflowX");
}, ts = function(e, t) {
  var n = t.ownerDocument, o = t;
  do {
    typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
    var r = wi(e, o);
    if (r) {
      var s = bi(e, o), i = s[1], c = s[2];
      if (i > c)
        return !0;
    }
    o = o.parentNode;
  } while (o && o !== n.body);
  return !1;
}, ed = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, o = e.clientHeight;
  return [
    t,
    n,
    o
  ];
}, td = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, o = e.clientWidth;
  return [
    t,
    n,
    o
  ];
}, wi = function(e, t) {
  return e === "v" ? Ju(t) : Qu(t);
}, bi = function(e, t) {
  return e === "v" ? ed(t) : td(t);
}, nd = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, od = function(e, t, n, o, r) {
  var s = nd(e, window.getComputedStyle(t).direction), i = s * o, c = n.target, l = t.contains(c), u = !1, f = i > 0, p = 0, m = 0;
  do {
    if (!c)
      break;
    var g = bi(e, c), w = g[0], h = g[1], v = g[2], b = h - v - s * w;
    (w || b) && wi(e, c) && (p += b, m += w);
    var S = c.parentNode;
    c = S && S.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? S.host : S;
  } while (
    // portaled content
    !l && c !== document.body || // self content
    l && (t.contains(c) || t === c)
  );
  return (f && Math.abs(p) < 1 || !f && Math.abs(m) < 1) && (u = !0), u;
}, wn = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, ns = function(e) {
  return [e.deltaX, e.deltaY];
}, os = function(e) {
  return e && "current" in e ? e.current : e;
}, rd = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, sd = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, id = 0, xt = [];
function cd(e) {
  var t = a.useRef([]), n = a.useRef([0, 0]), o = a.useRef(), r = a.useState(id++)[0], s = a.useState(vi)[0], i = a.useRef(e);
  a.useEffect(function() {
    i.current = e;
  }, [e]), a.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(r));
      var h = Ru([e.lockRef.current], (e.shards || []).map(os), !0).filter(Boolean);
      return h.forEach(function(v) {
        return v.classList.add("allow-interactivity-".concat(r));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(r)), h.forEach(function(v) {
          return v.classList.remove("allow-interactivity-".concat(r));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var c = a.useCallback(function(h, v) {
    if ("touches" in h && h.touches.length === 2 || h.type === "wheel" && h.ctrlKey)
      return !i.current.allowPinchZoom;
    var b = wn(h), S = n.current, y = "deltaX" in h ? h.deltaX : S[0] - b[0], C = "deltaY" in h ? h.deltaY : S[1] - b[1], x, E = h.target, _ = Math.abs(y) > Math.abs(C) ? "h" : "v";
    if ("touches" in h && _ === "h" && E.type === "range")
      return !1;
    var R = window.getSelection(), P = R && R.anchorNode, D = P ? P === E || P.contains(E) : !1;
    if (D)
      return !1;
    var B = ts(_, E);
    if (!B)
      return !0;
    if (B ? x = _ : (x = _ === "v" ? "h" : "v", B = ts(_, E)), !B)
      return !1;
    if (!o.current && "changedTouches" in h && (y || C) && (o.current = x), !x)
      return !0;
    var A = o.current || x;
    return od(A, v, h, A === "h" ? y : C);
  }, []), l = a.useCallback(function(h) {
    var v = h;
    if (!(!xt.length || xt[xt.length - 1] !== s)) {
      var b = "deltaY" in v ? ns(v) : wn(v), S = t.current.filter(function(x) {
        return x.name === v.type && (x.target === v.target || v.target === x.shadowParent) && rd(x.delta, b);
      })[0];
      if (S && S.should) {
        v.cancelable && v.preventDefault();
        return;
      }
      if (!S) {
        var y = (i.current.shards || []).map(os).filter(Boolean).filter(function(x) {
          return x.contains(v.target);
        }), C = y.length > 0 ? c(v, y[0]) : !i.current.noIsolation;
        C && v.cancelable && v.preventDefault();
      }
    }
  }, []), u = a.useCallback(function(h, v, b, S) {
    var y = { name: h, delta: v, target: b, should: S, shadowParent: ad(b) };
    t.current.push(y), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== y;
      });
    }, 1);
  }, []), f = a.useCallback(function(h) {
    n.current = wn(h), o.current = void 0;
  }, []), p = a.useCallback(function(h) {
    u(h.type, ns(h), h.target, c(h, e.lockRef.current));
  }, []), m = a.useCallback(function(h) {
    u(h.type, wn(h), h.target, c(h, e.lockRef.current));
  }, []);
  a.useEffect(function() {
    return xt.push(s), e.setCallbacks({
      onScrollCapture: p,
      onWheelCapture: p,
      onTouchMoveCapture: m
    }), document.addEventListener("wheel", l, St), document.addEventListener("touchmove", l, St), document.addEventListener("touchstart", f, St), function() {
      xt = xt.filter(function(h) {
        return h !== s;
      }), document.removeEventListener("wheel", l, St), document.removeEventListener("touchmove", l, St), document.removeEventListener("touchstart", f, St);
    };
  }, []);
  var g = e.removeScrollBar, w = e.inert;
  return a.createElement(
    a.Fragment,
    null,
    w ? a.createElement(s, { styles: sd(r) }) : null,
    g ? a.createElement(qu, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function ad(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const ld = Lu(hi, cd);
var Hn = a.forwardRef(function(e, t) {
  return a.createElement(Vn, $e({}, e, { ref: t, sideCar: ld }));
});
Hn.classNames = Vn.classNames;
var ud = Object.defineProperty, z = (e, t) => ud(e, "name", { value: t, configurable: !0 }), dd = [" ", "Enter", "ArrowUp", "ArrowDown"], fd = [" ", "Enter"], It = "Select", [Wn, lr, pd] = /* @__PURE__ */ tn(It), [ht, xw] = /* @__PURE__ */ me(It, [
  pd,
  Nt
]), ur = Nt(), [md, it] = ht(It), [hd, vd] = ht(It);
function yi(e) {
  const {
    __scopeSelect: t,
    children: n,
    open: o,
    defaultOpen: r,
    onOpenChange: s,
    value: i,
    defaultValue: c,
    onValueChange: l,
    dir: u,
    name: f,
    autoComplete: p,
    disabled: m,
    required: g,
    form: w,
    // @ts-expect-error internal render prop used by `Select` to compose its default parts
    internal_do_not_use_render: h
  } = e, v = ur(t), [b, S] = a.useState(null), [y, C] = a.useState(null), [x, E] = a.useState(!1), _ = nn(u), [R, P] = Pe({
    prop: o,
    defaultProp: r ?? !1,
    onChange: s,
    caller: It
  }), [D, B] = Pe({
    prop: i,
    defaultProp: c,
    onChange: l,
    caller: It
  }), A = a.useRef(null), M = a.useRef(D);
  a.useEffect(() => {
    const G = w ? b == null ? void 0 : b.ownerDocument.getElementById(w) : b == null ? void 0 : b.form;
    if (G instanceof HTMLFormElement) {
      const Q = /* @__PURE__ */ z(() => B(M.current), "reset");
      return G.addEventListener("reset", Q), () => G.removeEventListener("reset", Q);
    }
  }, [w, b, B]);
  const L = b ? !!w || !!b.closest("form") : !0, [U, T] = a.useState(/* @__PURE__ */ new Set()), N = xe(), $ = Array.from(U).map((G) => G.props.value).join(";"), W = a.useCallback((G) => {
    T((Q) => new Set(Q).add(G));
  }, []), k = a.useCallback((G) => {
    T((Q) => {
      const ae = new Set(Q);
      return ae.delete(G), ae;
    });
  }, []), Z = {
    required: g,
    trigger: b,
    onTriggerChange: S,
    valueNode: y,
    onValueNodeChange: C,
    valueNodeHasChildren: x,
    onValueNodeHasChildrenChange: E,
    contentId: N,
    value: D,
    onValueChange: B,
    open: R,
    onOpenChange: P,
    dir: _,
    triggerPointerDownPosRef: A,
    disabled: m,
    name: f,
    autoComplete: p,
    form: w,
    nativeOptions: U,
    nativeSelectKey: $,
    isFormControl: L
  };
  return /* @__PURE__ */ d(rr, { ...v, children: /* @__PURE__ */ d(md, { scope: t, ...Z, children: /* @__PURE__ */ d(Wn.Provider, { scope: t, children: /* @__PURE__ */ d(
    hd,
    {
      scope: t,
      onNativeOptionAdd: W,
      onNativeOptionRemove: k,
      children: xi(h) ? h(Z) : n
    }
  ) }) }) });
}
z(yi, "SelectProvider");
var gd = /* @__PURE__ */ z((e) => {
  const { __scopeSelect: t, children: n, ...o } = e;
  return /* @__PURE__ */ d(
    yi,
    {
      __scopeSelect: t,
      ...o,
      internal_do_not_use_render: ({ isFormControl: r }) => /* @__PURE__ */ O(qe, { children: [
        n,
        r ? /* @__PURE__ */ d(
          Yd,
          {
            __scopeSelect: t
          }
        ) : null
      ] })
    }
  );
}, "Select"), wd = "SelectTrigger", bd = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ z(function(t, n) {
    const { __scopeSelect: o, disabled: r = !1, ...s } = t, i = ur(o), c = it(wd, o), l = c.disabled || r, u = K(n, c.onTriggerChange), f = lr(o), p = a.useRef("touch"), [m, g, w] = dr((v) => {
      const b = f().filter((C) => !C.disabled), S = b.find((C) => C.value === c.value), y = fr(b, v, S);
      y !== void 0 && c.onValueChange(y.value);
    }), h = /* @__PURE__ */ z((v) => {
      l || (c.onOpenChange(!0), w()), v && (c.triggerPointerDownPosRef.current = {
        x: Math.round(v.pageX),
        y: Math.round(v.pageY)
      });
    }, "handleOpen");
    return /* @__PURE__ */ d(sr, { asChild: !0, ...i, children: /* @__PURE__ */ d(
      H.button,
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
        "data-placeholder": an(c.value) ? "" : void 0,
        ...s,
        ref: u,
        onClick: I(s.onClick, (v) => {
          v.currentTarget.focus(), p.current !== "mouse" && h(v);
        }),
        onPointerDown: I(s.onPointerDown, (v) => {
          p.current = v.pointerType;
          const b = v.target;
          b.hasPointerCapture(v.pointerId) && b.releasePointerCapture(v.pointerId), v.button === 0 && v.ctrlKey === !1 && v.pointerType === "mouse" && (h(v), v.preventDefault());
        }),
        onKeyDown: I(s.onKeyDown, (v) => {
          const b = m.current !== "";
          !(v.ctrlKey || v.altKey || v.metaKey) && v.key.length === 1 && g(v.key), !(b && v.key === " ") && dd.includes(v.key) && (h(), v.preventDefault());
        })
      }
    ) });
  }, "SelectTrigger")
), yd = "SelectValue", Cd = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ z(function(t, n) {
    const { __scopeSelect: o, className: r, style: s, children: i, placeholder: c = "", ...l } = t, u = it(yd, o), { onValueNodeHasChildrenChange: f } = u, p = i !== void 0, m = K(n, u.onValueNodeChange);
    oe(() => {
      f(p);
    }, [f, p]);
    const g = an(u.value);
    return /* @__PURE__ */ d(
      H.span,
      {
        ...l,
        asChild: g ? !1 : l.asChild,
        ref: m,
        style: { pointerEvents: "none" },
        children: /* @__PURE__ */ d(a.Fragment, { children: g ? c : i }, g ? "placeholder" : "value")
      }
    );
  }, "SelectValue")
), Sd = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ z(function(t, n) {
    const { __scopeSelect: o, children: r, ...s } = t;
    return /* @__PURE__ */ d(H.span, { "aria-hidden": !0, ...s, ref: n, children: r || "▼" });
  }, "SelectIcon")
), xd = "SelectPortal", [Ed, _d] = ht(xd, {
  forceMount: void 0
}), Td = /* @__PURE__ */ z((e) => {
  const { __scopeSelect: t, forceMount: n, ...o } = e;
  return /* @__PURE__ */ d(Ed, { scope: e.__scopeSelect, forceMount: n, children: /* @__PURE__ */ d(sn, { asChild: !0, ...o }) });
}, "SelectPortal"), mt = "SelectContent", Pd = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ z(function(t, n) {
    const o = _d(mt, t.__scopeSelect), { forceMount: r = o.forceMount, ...s } = t, i = it(mt, t.__scopeSelect), [c, l] = a.useState();
    return oe(() => {
      l(new DocumentFragment());
    }, []), /* @__PURE__ */ d(ke, { present: r || i.open, children: ({ present: u }) => u ? /* @__PURE__ */ d(Id, { ...s, ref: n }) : /* @__PURE__ */ d(Rd, { ...s, fragment: c }) });
  }, "SelectContent")
), Rd = /* @__PURE__ */ a.forwardRef(/* @__PURE__ */ z(function(t, n) {
  const { __scopeSelect: o, children: r, fragment: s } = t;
  return s ? Dt.createPortal(
    /* @__PURE__ */ d(Ci, { scope: o, children: /* @__PURE__ */ d(Wn.Slot, { scope: o, children: /* @__PURE__ */ d("div", { ref: n, children: r }) }) }),
    s
  ) : null;
}, "SelectContentFragment")), _e = 10, [Ci, Un] = ht(mt), kd = /* @__PURE__ */ Fe("SelectContent.RemoveScroll"), Id = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ z(function(t, n) {
    const { __scopeSelect: o } = t, {
      position: r = "item-aligned",
      onCloseAutoFocus: s,
      onEscapeKeyDown: i,
      onPointerDownOutside: c,
      //
      // PopperContent props
      side: l,
      sideOffset: u,
      align: f,
      alignOffset: p,
      arrowPadding: m,
      collisionBoundary: g,
      collisionPadding: w,
      sticky: h,
      hideWhenDetached: v,
      avoidCollisions: b,
      //
      ...S
    } = t, y = it(mt, o), [C, x] = a.useState(null), [E, _] = a.useState(null), R = K(n, x), [P, D] = a.useState(null), [B, A] = a.useState(
      null
    ), M = lr(o), [L, U] = a.useState(!1), T = a.useRef(!1);
    a.useEffect(() => {
      if (C) return ar(C);
    }, [C]), rn();
    const N = a.useCallback(
      (V) => {
        const [X, ...ee] = M().map((q) => q.ref.current), [Y] = ee.slice(-1), j = document.activeElement;
        for (const q of V)
          if (q === j || (q == null || q.scrollIntoView({ block: "nearest" }), q === X && E && (E.scrollTop = 0), q === Y && E && (E.scrollTop = E.scrollHeight), q == null || q.focus(), document.activeElement !== j)) return;
      },
      [M, E]
    ), $ = a.useCallback(
      () => N([P, C]),
      [N, P, C]
    );
    a.useEffect(() => {
      L && $();
    }, [L, $]);
    const { onOpenChange: W, triggerPointerDownPosRef: k } = y;
    a.useEffect(() => {
      if (C) {
        let V = { x: 0, y: 0 };
        const X = /* @__PURE__ */ z((Y) => {
          var j, q;
          V = {
            x: Math.abs(Math.round(Y.pageX) - (((j = k.current) == null ? void 0 : j.x) ?? 0)),
            y: Math.abs(Math.round(Y.pageY) - (((q = k.current) == null ? void 0 : q.y) ?? 0))
          };
        }, "handlePointerMove"), ee = /* @__PURE__ */ z((Y) => {
          V.x <= 10 && V.y <= 10 ? Y.preventDefault() : Y.composedPath().includes(C) || W(!1), document.removeEventListener("pointermove", X), k.current = null;
        }, "handlePointerUp");
        return k.current !== null && (document.addEventListener("pointermove", X), document.addEventListener("pointerup", ee, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", X), document.removeEventListener("pointerup", ee, { capture: !0 });
        };
      }
    }, [C, W, k]), a.useEffect(() => {
      const V = /* @__PURE__ */ z(() => W(!1), "close");
      return window.addEventListener("blur", V), window.addEventListener("resize", V), () => {
        window.removeEventListener("blur", V), window.removeEventListener("resize", V);
      };
    }, [W]);
    const [Z, G] = dr((V) => {
      const X = M().filter((j) => !j.disabled), ee = X.find((j) => j.ref.current === document.activeElement), Y = fr(X, V, ee);
      Y && setTimeout(() => {
        var j;
        return (j = Y.ref.current) == null ? void 0 : j.focus();
      });
    }), Q = a.useCallback(
      (V, X, ee) => {
        const Y = !T.current && !ee;
        (y.value !== void 0 && y.value === X || Y) && (D(V), Y && (T.current = !0));
      },
      [y.value]
    ), ae = a.useCallback(() => C == null ? void 0 : C.focus(), [C]), ce = a.useCallback(
      (V, X, ee) => {
        const Y = !T.current && !ee;
        (y.value !== void 0 && y.value === X || Y) && A(V);
      },
      [y.value]
    ), we = r === "popper" ? rs : Dd, he = we === rs ? {
      side: l,
      sideOffset: u,
      align: f,
      alignOffset: p,
      arrowPadding: m,
      collisionBoundary: g,
      collisionPadding: w,
      sticky: h,
      hideWhenDetached: v,
      avoidCollisions: b
    } : {};
    return /* @__PURE__ */ d(
      Ci,
      {
        scope: o,
        content: C,
        viewport: E,
        onViewportChange: _,
        itemRefCallback: Q,
        selectedItem: P,
        onItemLeave: ae,
        itemTextRefCallback: ce,
        focusSelectedItem: $,
        selectedItemText: B,
        position: r,
        isPositioned: L,
        searchRef: Z,
        children: /* @__PURE__ */ d(Hn, { as: kd, allowPinchZoom: !0, children: /* @__PURE__ */ d(
          qo,
          {
            asChild: !0,
            trapped: y.open,
            onMountAutoFocus: (V) => {
              V.preventDefault();
            },
            onUnmountAutoFocus: I(s, (V) => {
              var X;
              (X = y.trigger) == null || X.focus({ preventScroll: !0 }), V.preventDefault();
            }),
            children: /* @__PURE__ */ d(
              on,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: i,
                onPointerDownOutside: c,
                onFocusOutside: (V) => V.preventDefault(),
                onDismiss: () => y.onOpenChange(!1),
                children: /* @__PURE__ */ d(
                  we,
                  {
                    role: "listbox",
                    id: y.contentId,
                    "data-state": y.open ? "open" : "closed",
                    dir: y.dir,
                    onContextMenu: (V) => V.preventDefault(),
                    ...S,
                    ...he,
                    onPlaced: () => U(!0),
                    ref: R,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...S.style
                    },
                    onKeyDown: I(S.onKeyDown, (V) => {
                      const X = V.ctrlKey || V.altKey || V.metaKey;
                      if (V.key === "Tab" && V.preventDefault(), !X && V.key.length === 1 && G(V.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(V.key)) {
                        let Y = M().filter((j) => !j.disabled).map((j) => j.ref.current);
                        if (["ArrowUp", "End"].includes(V.key) && (Y = Y.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(V.key)) {
                          const j = V.target, q = Y.indexOf(j);
                          Y = Y.slice(q + 1);
                        }
                        setTimeout(() => N(Y)), V.preventDefault();
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
), Dd = /* @__PURE__ */ a.forwardRef(/* @__PURE__ */ z(function(t, n) {
  const { __scopeSelect: o, onPlaced: r, ...s } = t, i = it(mt, o), c = Un(mt, o), [l, u] = a.useState(null), [f, p] = a.useState(null), m = K(n, p), g = lr(o), w = a.useRef(!1), h = a.useRef(!0), { viewport: v, selectedItem: b, selectedItemText: S, focusSelectedItem: y } = c, C = a.useCallback(() => {
    if (i.trigger && i.valueNode && l && f && v && b && S) {
      const R = i.trigger.getBoundingClientRect(), P = f.getBoundingClientRect(), D = i.valueNode.getBoundingClientRect(), B = S.getBoundingClientRect();
      if (i.dir !== "rtl") {
        const j = B.left - P.left, q = D.left - j, De = R.left - q, Oe = R.width + De, ct = Math.max(Oe, P.width), yt = window.innerWidth - _e, Lt = yo(q, [
          _e,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(_e, yt - ct)
        ]);
        l.style.minWidth = Oe + "px", l.style.left = Lt + "px";
      } else {
        const j = P.right - B.right, q = window.innerWidth - D.right - j, De = window.innerWidth - R.right - q, Oe = R.width + De, ct = Math.max(Oe, P.width), yt = window.innerWidth - _e, Lt = yo(q, [
          _e,
          Math.max(_e, yt - ct)
        ]);
        l.style.minWidth = Oe + "px", l.style.right = Lt + "px";
      }
      const A = g(), M = window.innerHeight - _e * 2, L = v.scrollHeight, U = window.getComputedStyle(f), T = parseInt(U.borderTopWidth, 10), N = parseInt(U.paddingTop, 10), $ = parseInt(U.borderBottomWidth, 10), W = parseInt(U.paddingBottom, 10), k = T + N + L + W + $, Z = Math.min(b.offsetHeight * 5, k), G = window.getComputedStyle(v), Q = parseInt(G.paddingTop, 10), ae = parseInt(G.paddingBottom, 10), ce = R.top + R.height / 2 - _e, we = M - ce, he = b.offsetHeight / 2, V = b.offsetTop + he, X = T + N + V, ee = k - X;
      if (X <= ce) {
        const j = A.length > 0 && b === A[A.length - 1].ref.current;
        l.style.bottom = "0px";
        const q = f.clientHeight - v.offsetTop - v.offsetHeight, De = Math.max(
          we,
          he + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (j ? ae : 0) + q + $
        ), Oe = X + De;
        l.style.height = Oe + "px";
      } else {
        const j = A.length > 0 && b === A[0].ref.current;
        l.style.top = "0px";
        const De = Math.max(
          ce,
          T + v.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (j ? Q : 0) + he
        ) + ee;
        l.style.height = De + "px", v.scrollTop = X - ce + v.offsetTop;
      }
      l.style.margin = `${_e}px 0`, l.style.minHeight = Z + "px", l.style.maxHeight = M + "px", r == null || r(), requestAnimationFrame(() => w.current = !0);
    }
  }, [
    g,
    i.trigger,
    i.valueNode,
    l,
    f,
    v,
    b,
    S,
    i.dir,
    r
  ]);
  oe(() => C(), [C]);
  const [x, E] = a.useState();
  oe(() => {
    f && E(window.getComputedStyle(f).zIndex);
  }, [f]);
  const _ = a.useCallback(
    (R) => {
      R && h.current === !0 && (C(), y == null || y(), h.current = !1);
    },
    [C, y]
  );
  return /* @__PURE__ */ d(
    Od,
    {
      scope: o,
      contentWrapper: l,
      shouldExpandOnScrollRef: w,
      onScrollButtonChange: _,
      children: /* @__PURE__ */ d(
        "div",
        {
          ref: u,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: x
          },
          children: /* @__PURE__ */ d(
            H.div,
            {
              ...s,
              ref: m,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...s.style
              }
            }
          )
        }
      )
    }
  );
}, "SelectItemAlignedPosition")), rs = /* @__PURE__ */ a.forwardRef(/* @__PURE__ */ z(function(t, n) {
  const {
    __scopeSelect: o,
    align: r = "start",
    collisionPadding: s = _e,
    ...i
  } = t, c = ur(o);
  return /* @__PURE__ */ d(
    ir,
    {
      ...c,
      ...i,
      ref: n,
      align: r,
      collisionPadding: s,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...i.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
}, "SelectPopperPosition")), [Od, Ad] = ht(mt, {}), ss = "SelectViewport", Md = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ z(function(t, n) {
    const { __scopeSelect: o, nonce: r, ...s } = t, i = Un(ss, o), c = Ad(ss, o), l = K(n, i.onViewportChange), u = a.useRef(0);
    return /* @__PURE__ */ O(qe, { children: [
      /* @__PURE__ */ d(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ d(Wn.Slot, { scope: o, children: /* @__PURE__ */ d(
        H.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...s,
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
            ...s.style
          },
          onScroll: I(s.onScroll, (f) => {
            const p = f.currentTarget, { contentWrapper: m, shouldExpandOnScrollRef: g } = c;
            if (g != null && g.current && m) {
              const w = Math.abs(u.current - p.scrollTop);
              if (w > 0) {
                const h = window.innerHeight - _e * 2, v = parseFloat(m.style.minHeight), b = parseFloat(m.style.height), S = Math.max(v, b);
                if (S < h) {
                  const y = S + w, C = Math.min(h, y), x = y - C;
                  m.style.height = C + "px", m.style.bottom === "0px" && (p.scrollTop = x > 0 ? x : 0, m.style.justifyContent = "flex-end");
                }
              }
            }
            u.current = p.scrollTop;
          })
        }
      ) })
    ] });
  }, "SelectViewport")
), Nd = "SelectGroup", [$d, Ld] = ht(Nd), Fd = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ z(function(t, n) {
    const { __scopeSelect: o, ...r } = t, s = xe();
    return /* @__PURE__ */ d($d, { scope: o, id: s, children: /* @__PURE__ */ d(H.div, { role: "group", "aria-labelledby": s, ...r, ref: n }) });
  }, "SelectGroup")
), Bd = "SelectLabel", Vd = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ z(function(t, n) {
    const { __scopeSelect: o, ...r } = t, s = Ld(Bd, o);
    return /* @__PURE__ */ d(H.div, { id: s.id, ...r, ref: n });
  }, "SelectLabel")
), Oo = "SelectItem", [Hd, Si] = ht(Oo), Wd = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ z(function(t, n) {
    const {
      __scopeSelect: o,
      value: r,
      disabled: s = !1,
      textValue: i,
      ...c
    } = t, l = it(Oo, o), u = Un(Oo, o), f = l.value === r, [p, m] = a.useState(i ?? ""), [g, w] = a.useState(!1), h = ue(
      (C) => {
        var x;
        return (x = u.itemRefCallback) == null ? void 0 : x.call(u, C, r, s);
      }
    ), v = K(n, h), b = xe(), S = a.useRef("touch"), y = /* @__PURE__ */ z(() => {
      s || (l.onValueChange(r), l.onOpenChange(!1));
    }, "handleSelect");
    return /* @__PURE__ */ d(
      Hd,
      {
        scope: o,
        value: r,
        disabled: s,
        textId: b,
        isSelected: f,
        onItemTextChange: a.useCallback((C) => {
          m((x) => x || ((C == null ? void 0 : C.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ d(
          Wn.ItemSlot,
          {
            scope: o,
            value: r,
            disabled: s,
            textValue: p,
            children: /* @__PURE__ */ d(
              H.div,
              {
                role: "option",
                "aria-labelledby": b,
                "data-highlighted": g ? "" : void 0,
                "aria-selected": f && g,
                "data-state": f ? "checked" : "unchecked",
                "aria-disabled": s || void 0,
                "data-disabled": s ? "" : void 0,
                tabIndex: s ? void 0 : -1,
                ...c,
                ref: v,
                onFocus: I(c.onFocus, () => w(!0)),
                onBlur: I(c.onBlur, () => w(!1)),
                onClick: I(c.onClick, () => {
                  S.current !== "mouse" && y();
                }),
                onPointerUp: I(c.onPointerUp, () => {
                  S.current === "mouse" && y();
                }),
                onPointerDown: I(c.onPointerDown, (C) => {
                  S.current = C.pointerType;
                }),
                onPointerMove: I(c.onPointerMove, (C) => {
                  var x;
                  S.current = C.pointerType, s ? (x = u.onItemLeave) == null || x.call(u) : S.current === "mouse" && C.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: I(c.onPointerLeave, (C) => {
                  var x;
                  C.currentTarget === document.activeElement && ((x = u.onItemLeave) == null || x.call(u));
                }),
                onKeyDown: I(c.onKeyDown, (C) => {
                  var E;
                  s || C.target !== C.currentTarget || ((E = u.searchRef) == null ? void 0 : E.current) !== "" && C.key === " " || (fd.includes(C.key) && y(), C.key === " " && C.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }, "SelectItem")
), bn = "SelectItemText", Ud = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ z(function(t, n) {
    const { __scopeSelect: o, className: r, style: s, ...i } = t, c = it(bn, o), l = Un(bn, o), u = Si(bn, o), f = vd(bn, o), [p, m] = a.useState(null), g = ue(
      (y) => {
        var C;
        return (C = l.itemTextRefCallback) == null ? void 0 : C.call(l, y, u.value, u.disabled);
      }
    ), w = K(
      n,
      m,
      u.onItemTextChange,
      g
    ), h = p == null ? void 0 : p.textContent, v = a.useMemo(
      () => /* @__PURE__ */ d("option", { value: u.value, disabled: u.disabled, children: h }, u.value),
      [u.disabled, u.value, h]
    ), { onNativeOptionAdd: b, onNativeOptionRemove: S } = f;
    return oe(() => (b(v), () => S(v)), [b, S, v]), /* @__PURE__ */ O(qe, { children: [
      /* @__PURE__ */ d(H.span, { id: u.textId, ...i, ref: w }),
      u.isSelected && c.valueNode && !c.valueNodeHasChildren && !an(c.value) ? Dt.createPortal(i.children, c.valueNode) : null
    ] });
  }, "SelectItemText")
), Kd = "SelectItemIndicator", jd = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ z(function(t, n) {
    const { __scopeSelect: o, ...r } = t;
    return Si(Kd, o).isSelected ? /* @__PURE__ */ d(H.span, { "aria-hidden": !0, ...r, ref: n }) : null;
  }, "SelectItemIndicator")
), zd = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ z(function(t, n) {
    const { __scopeSelect: o, ...r } = t;
    return /* @__PURE__ */ d(H.div, { "aria-hidden": !0, ...r, ref: n });
  }, "SelectSeparator")
), Gd = "SelectBubbleInput", Yd = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ z(function({ __scopeSelect: t, ...n }, o) {
    const r = it(Gd, t), { value: s, onValueChange: i, required: c, disabled: l, name: u, autoComplete: f, form: p } = r, { nativeOptions: m, nativeSelectKey: g } = r, w = a.useRef(null), h = K(o, w), v = s ?? "", b = ui(v), S = Array.from(m).some(
      (y) => (y.props.value ?? "") === ""
    );
    return a.useEffect(() => {
      const y = w.current;
      if (!y) return;
      const C = window.HTMLSelectElement.prototype, E = Object.getOwnPropertyDescriptor(
        C,
        "value"
      ).set;
      if (b !== v && E) {
        const _ = new Event("change", { bubbles: !0 });
        E.call(y, v), y.dispatchEvent(_);
      }
    }, [b, v]), /* @__PURE__ */ O(
      H.select,
      {
        "aria-hidden": !0,
        required: c,
        tabIndex: -1,
        name: u,
        autoComplete: f,
        disabled: l,
        form: p,
        onChange: (y) => i(y.target.value),
        ...n,
        style: { ...di, ...n.style },
        ref: h,
        defaultValue: v,
        children: [
          an(s) && !S ? /* @__PURE__ */ d("option", { value: "" }) : null,
          Array.from(m)
        ]
      },
      g
    );
  }, "SelectBubbleInput")
);
function xi(e) {
  return typeof e == "function";
}
z(xi, "isFunction");
function an(e) {
  return e === "" || e === void 0;
}
z(an, "shouldShowPlaceholder");
function dr(e) {
  const t = ue(e), n = a.useRef(""), o = a.useRef(0), r = a.useCallback(
    (i) => {
      const c = n.current + i;
      t(c), (/* @__PURE__ */ z((function l(u) {
        n.current = u, window.clearTimeout(o.current), u !== "" && (o.current = window.setTimeout(() => l(""), 1e3));
      }), "updateSearch"))(c);
    },
    [t]
  ), s = a.useCallback(() => {
    n.current = "", window.clearTimeout(o.current);
  }, []);
  return a.useEffect(() => () => window.clearTimeout(o.current), []), [n, r, s];
}
z(dr, "useTypeaheadSearch");
function fr(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let i = Ei(e, Math.max(s, 0));
  r.length === 1 && (i = i.filter((u) => u !== n));
  const l = i.find(
    (u) => u.textValue.toLowerCase().startsWith(r.toLowerCase())
  );
  return l !== n ? l : void 0;
}
z(fr, "findNextItem");
function Ei(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
z(Ei, "wrapArray");
const Xd = "wk-Select_trigger", qd = "wk-Select_sm", Zd = "wk-Select_md", Jd = "wk-Select_lg", Qd = "wk-Select_icon", ef = "wk-Select_content", tf = "wk-Select_viewport", nf = "wk-Select_item", of = "wk-Select_itemIndicator", rf = "wk-Select_label", sf = "wk-Select_separator", We = {
  trigger: Xd,
  sm: qd,
  md: Zd,
  lg: Jd,
  icon: Qd,
  content: ef,
  viewport: tf,
  item: nf,
  itemIndicator: of,
  label: rf,
  separator: sf
};
function Ew({
  placeholder: e,
  size: t = "md",
  children: n,
  className: o,
  id: r,
  "aria-label": s,
  ...i
}) {
  const c = jo();
  return /* @__PURE__ */ O(gd, { ...i, children: [
    /* @__PURE__ */ O(
      bd,
      {
        id: r ?? (c == null ? void 0 : c.inputId),
        "aria-label": s,
        "aria-invalid": (c == null ? void 0 : c.invalid) || void 0,
        "aria-describedby": c == null ? void 0 : c.describedBy,
        className: F(We.trigger, We[t], o),
        children: [
          /* @__PURE__ */ d(Cd, { placeholder: e }),
          /* @__PURE__ */ d(Sd, { className: We.icon, children: /* @__PURE__ */ d(ps, {}) })
        ]
      }
    ),
    /* @__PURE__ */ d(Td, { children: /* @__PURE__ */ d(Pd, { className: We.content, position: "popper", sideOffset: 4, children: /* @__PURE__ */ d(Md, { className: We.viewport, children: n }) }) })
  ] });
}
const _w = Ee(
  function({ className: t, children: n, ...o }, r) {
    return /* @__PURE__ */ O(Wd, { ref: r, className: F(We.item, t), ...o, children: [
      /* @__PURE__ */ d(Ud, { children: n }),
      /* @__PURE__ */ d(jd, { className: We.itemIndicator, children: /* @__PURE__ */ d(fs, {}) })
    ] });
  }
);
function Tw({ label: e, children: t }) {
  return /* @__PURE__ */ O(Fd, { children: [
    /* @__PURE__ */ d(Vd, { className: We.label, children: e }),
    t
  ] });
}
function Pw() {
  return /* @__PURE__ */ d(zd, { className: We.separator });
}
var cf = Object.defineProperty, ot = (e, t) => cf(e, "name", { value: t, configurable: !0 }), pr = "Switch", [af, Rw] = /* @__PURE__ */ me(pr), [lf, mr] = af(pr);
function _i(e) {
  const {
    __scopeSwitch: t,
    checked: n,
    children: o,
    defaultChecked: r,
    disabled: s,
    form: i,
    name: c,
    onCheckedChange: l,
    required: u,
    value: f = "on",
    // @ts-expect-error
    internal_do_not_use_render: p
  } = e, [m, g] = Pe({
    prop: n,
    defaultProp: r ?? !1,
    onChange: l,
    caller: pr
  }), [w, h] = a.useState(null), [v, b] = a.useState(null), S = a.useRef(!1), [y, C] = a.useReducer(
    (_) => _ + 1,
    0
  ), x = w ? !!i || !!w.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), E = {
    checked: m,
    setChecked: g,
    disabled: s,
    control: w,
    setControl: h,
    name: c,
    form: i,
    value: f,
    hasConsumerStoppedPropagationRef: S,
    userInteractionCount: y,
    onUserInteraction: C,
    required: u,
    defaultChecked: r,
    isFormControl: x,
    bubbleInput: v,
    setBubbleInput: b
  };
  return /* @__PURE__ */ d(lf, { scope: t, ...E, children: Ti(p) ? p(E) : o });
}
ot(_i, "SwitchProvider");
var uf = "SwitchTrigger", df = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ ot(function({ __scopeSwitch: t, onClick: n, ...o }, r) {
    const {
      control: s,
      form: i,
      value: c,
      disabled: l,
      checked: u,
      required: f,
      setControl: p,
      setChecked: m,
      hasConsumerStoppedPropagationRef: g,
      onUserInteraction: w,
      isFormControl: h,
      bubbleInput: v
    } = mr(uf, t), b = K(r, p), S = a.useRef(u);
    return a.useEffect(() => {
      const y = i ? s == null ? void 0 : s.ownerDocument.getElementById(i) : s == null ? void 0 : s.form;
      if (y instanceof HTMLFormElement) {
        const C = /* @__PURE__ */ ot(() => m(S.current), "reset");
        return y.addEventListener("reset", C), () => y.removeEventListener("reset", C);
      }
    }, [s, i, m]), /* @__PURE__ */ d(
      H.button,
      {
        type: "button",
        role: "switch",
        "aria-checked": u,
        "aria-required": f,
        "data-state": hr(u),
        "data-disabled": l ? "" : void 0,
        disabled: l,
        value: c,
        ...o,
        ref: b,
        onClick: I(n, (y) => {
          w(), m((C) => !C), v && h && (g.current = y.isPropagationStopped(), g.current || y.stopPropagation());
        })
      }
    );
  }, "SwitchTrigger")
), ff = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ot(function(t, n) {
    const {
      __scopeSwitch: o,
      name: r,
      checked: s,
      defaultChecked: i,
      required: c,
      disabled: l,
      value: u,
      onCheckedChange: f,
      form: p,
      ...m
    } = t;
    return /* @__PURE__ */ d(
      _i,
      {
        __scopeSwitch: o,
        checked: s,
        defaultChecked: i,
        disabled: l,
        required: c,
        onCheckedChange: f,
        name: r,
        form: p,
        value: u,
        internal_do_not_use_render: ({ isFormControl: g }) => /* @__PURE__ */ O(qe, { children: [
          /* @__PURE__ */ d(
            df,
            {
              ...m,
              ref: n,
              __scopeSwitch: o
            }
          ),
          g && /* @__PURE__ */ d(
            vf,
            {
              __scopeSwitch: o
            }
          )
        ] })
      }
    );
  }, "Switch")
), pf = "SwitchThumb", mf = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ ot(function(t, n) {
    const { __scopeSwitch: o, ...r } = t, s = mr(pf, o);
    return /* @__PURE__ */ d(
      H.span,
      {
        "data-state": hr(s.checked),
        "data-disabled": s.disabled ? "" : void 0,
        ...r,
        ref: n
      }
    );
  }, "SwitchThumb")
), hf = "SwitchBubbleInput", vf = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ot(function({ __scopeSwitch: t, onClick: n, ...o }, r) {
    const {
      control: s,
      hasConsumerStoppedPropagationRef: i,
      userInteractionCount: c,
      checked: l,
      defaultChecked: u,
      required: f,
      disabled: p,
      name: m,
      value: g,
      form: w,
      bubbleInput: h,
      setBubbleInput: v
    } = mr(hf, t), b = K(r, v), S = Fn(s), y = a.useRef(!1), C = a.useRef(l), x = a.useRef(c);
    a.useEffect(() => {
      const _ = h;
      if (!_) return;
      const R = window.HTMLInputElement.prototype, D = Object.getOwnPropertyDescriptor(
        R,
        "checked"
      ).set, B = c !== x.current;
      x.current = c;
      const A = C.current !== l;
      C.current = l;
      const M = !(B && i.current);
      if (A && D) {
        y.current = !B;
        const L = new Event("click", { bubbles: M });
        D.call(_, l), _.dispatchEvent(L), y.current = !1;
      }
    }, [h, l, i, c]);
    const E = a.useRef(l);
    return /* @__PURE__ */ d(
      H.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: u ?? E.current,
        required: f,
        disabled: p,
        name: m,
        value: g,
        form: w,
        ...o,
        tabIndex: -1,
        ref: b,
        onClick: I(n, (_) => {
          y.current && _.stopPropagation();
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
function Ti(e) {
  return typeof e == "function";
}
ot(Ti, "isFunction");
function hr(e) {
  return e ? "checked" : "unchecked";
}
ot(hr, "getState");
const gf = "wk-Switch_wrapper", wf = "wk-Switch_root", bf = "wk-Switch_thumb", yf = "wk-Switch_label", yn = {
  wrapper: gf,
  root: wf,
  thumb: bf,
  label: yf
}, kw = Ee(function({ label: t, className: n, id: o, ...r }, s) {
  const i = rt(), c = o ?? i, l = /* @__PURE__ */ d(ff, { ref: s, id: c, className: F(yn.root, n), ...r, children: /* @__PURE__ */ d(mf, { className: yn.thumb }) });
  return t ? /* @__PURE__ */ O("span", { className: yn.wrapper, children: [
    l,
    /* @__PURE__ */ d("label", { className: yn.label, htmlFor: c, children: t })
  ] }) : l;
});
var Cf = Object.defineProperty, Xe = (e, t) => Cf(e, "name", { value: t, configurable: !0 }), vr = "Checkbox", [Sf, Iw] = /* @__PURE__ */ me(vr), [xf, gr] = Sf(vr);
function Pi(e) {
  const {
    __scopeCheckbox: t,
    checked: n,
    children: o,
    defaultChecked: r,
    disabled: s,
    form: i,
    name: c,
    onCheckedChange: l,
    required: u,
    value: f = "on",
    // @ts-expect-error
    internal_do_not_use_render: p
  } = e, [m, g] = Pe({
    prop: n,
    defaultProp: r ?? !1,
    onChange: l,
    caller: vr
  }), [w, h] = a.useState(null), [v, b] = a.useState(null), S = a.useRef(!1), [y, C] = a.useReducer(
    (_) => _ + 1,
    0
  ), x = w ? !!i || !!w.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), E = {
    checked: m,
    disabled: s,
    setChecked: g,
    control: w,
    setControl: h,
    name: c,
    form: i,
    value: f,
    hasConsumerStoppedPropagationRef: S,
    userInteractionCount: y,
    onUserInteraction: C,
    required: u,
    defaultChecked: ze(r) ? !1 : r,
    isFormControl: x,
    bubbleInput: v,
    setBubbleInput: b
  };
  return /* @__PURE__ */ d(
    xf,
    {
      scope: t,
      ...E,
      children: Ri(p) ? p(E) : o
    }
  );
}
Xe(Pi, "CheckboxProvider");
var Ef = "CheckboxTrigger", _f = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ Xe(function({ __scopeCheckbox: t, onKeyDown: n, onClick: o, ...r }, s) {
    const {
      control: i,
      value: c,
      disabled: l,
      checked: u,
      required: f,
      setControl: p,
      setChecked: m,
      hasConsumerStoppedPropagationRef: g,
      onUserInteraction: w,
      isFormControl: h,
      bubbleInput: v
    } = gr(Ef, t), b = K(s, p), S = a.useRef(u);
    return a.useEffect(() => {
      const y = i == null ? void 0 : i.form;
      if (y) {
        const C = /* @__PURE__ */ Xe(() => m(S.current), "reset");
        return y.addEventListener("reset", C), () => y.removeEventListener("reset", C);
      }
    }, [i, m]), /* @__PURE__ */ d(
      H.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": ze(u) ? "mixed" : u,
        "aria-required": f,
        "data-state": wr(u),
        "data-disabled": l ? "" : void 0,
        disabled: l,
        value: c,
        ...r,
        ref: b,
        onKeyDown: I(n, (y) => {
          y.key === "Enter" && y.preventDefault();
        }),
        onClick: I(o, (y) => {
          w(), m((C) => ze(C) ? !0 : !C), v && h && (g.current = y.isPropagationStopped(), g.current || y.stopPropagation());
        })
      }
    );
  }, "CheckboxTrigger")
), Tf = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Xe(function(t, n) {
    const {
      __scopeCheckbox: o,
      name: r,
      checked: s,
      defaultChecked: i,
      required: c,
      disabled: l,
      value: u,
      onCheckedChange: f,
      form: p,
      ...m
    } = t;
    return /* @__PURE__ */ d(
      Pi,
      {
        __scopeCheckbox: o,
        checked: s,
        defaultChecked: i,
        disabled: l,
        required: c,
        onCheckedChange: f,
        name: r,
        form: p,
        value: u,
        internal_do_not_use_render: ({ isFormControl: g }) => /* @__PURE__ */ O(qe, { children: [
          /* @__PURE__ */ d(
            _f,
            {
              ...m,
              ref: n,
              __scopeCheckbox: o
            }
          ),
          g && /* @__PURE__ */ d(
            If,
            {
              __scopeCheckbox: o
            }
          )
        ] })
      }
    );
  }, "Checkbox")
), Pf = "CheckboxIndicator", Rf = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Xe(function(t, n) {
    const { __scopeCheckbox: o, forceMount: r, ...s } = t, i = gr(Pf, o);
    return /* @__PURE__ */ d(
      ke,
      {
        present: r || ze(i.checked) || i.checked === !0,
        children: /* @__PURE__ */ d(
          H.span,
          {
            "data-state": wr(i.checked),
            "data-disabled": i.disabled ? "" : void 0,
            ...s,
            ref: n,
            style: { pointerEvents: "none", ...t.style }
          }
        )
      }
    );
  }, "CheckboxIndicator")
), kf = "CheckboxBubbleInput", If = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Xe(function({ __scopeCheckbox: t, onClick: n, ...o }, r) {
    const {
      control: s,
      hasConsumerStoppedPropagationRef: i,
      userInteractionCount: c,
      checked: l,
      defaultChecked: u,
      required: f,
      disabled: p,
      name: m,
      value: g,
      form: w,
      bubbleInput: h,
      setBubbleInput: v
    } = gr(kf, t), b = K(r, v), S = Fn(s), y = a.useRef(!1), C = a.useRef(l), x = a.useRef(c);
    a.useEffect(() => {
      const _ = h;
      if (!_) return;
      const R = window.HTMLInputElement.prototype, D = Object.getOwnPropertyDescriptor(
        R,
        "checked"
      ).set, B = c !== x.current;
      x.current = c;
      const A = C.current !== l;
      C.current = l;
      const M = !(B && i.current);
      if (A && D) {
        y.current = !B;
        const L = new Event("click", { bubbles: M });
        _.indeterminate = ze(l), D.call(_, ze(l) ? !1 : l), _.dispatchEvent(L), y.current = !1;
      }
    }, [h, l, i, c]);
    const E = a.useRef(ze(l) ? !1 : l);
    return /* @__PURE__ */ d(
      H.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: u ?? E.current,
        required: f,
        disabled: p,
        name: m,
        value: g,
        form: w,
        ...o,
        tabIndex: -1,
        ref: b,
        onClick: I(n, (_) => {
          y.current && _.stopPropagation();
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
function Ri(e) {
  return typeof e == "function";
}
Xe(Ri, "isFunction");
function ze(e) {
  return e === "indeterminate";
}
Xe(ze, "isIndeterminate");
function wr(e) {
  return ze(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
Xe(wr, "getState");
const Df = "wk-Checkbox_wrapper", Of = "wk-Checkbox_root", Af = "wk-Checkbox_indicator", Mf = "wk-Checkbox_dash", Nf = "wk-Checkbox_label", Vt = {
  wrapper: Df,
  root: Of,
  indicator: Af,
  dash: Mf,
  label: Nf
}, $f = Ee(function({ label: t, className: n, id: o, ...r }, s) {
  const i = rt(), c = o ?? i, l = /* @__PURE__ */ d(Tf, { ref: s, id: c, className: F(Vt.root, n), ...r, children: /* @__PURE__ */ d(Rf, { className: Vt.indicator, children: r.checked === "indeterminate" ? /* @__PURE__ */ d("span", { className: Vt.dash }) : /* @__PURE__ */ d(fs, {}) }) });
  return t ? /* @__PURE__ */ O("span", { className: Vt.wrapper, children: [
    l,
    /* @__PURE__ */ d("label", { className: Vt.label, htmlFor: c, children: t })
  ] }) : l;
});
var Lf = Object.defineProperty, ge = (e, t) => Lf(e, "name", { value: t, configurable: !0 }), br = "Dialog", [ki, Dw] = /* @__PURE__ */ me(br), [Ff, Ie] = ki(br), Ii = /* @__PURE__ */ ge((e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: o,
    defaultOpen: r,
    onOpenChange: s,
    modal: i = !0
  } = e, c = a.useRef(null), l = a.useRef(null), [u, f] = Pe({
    prop: o,
    defaultProp: r ?? !1,
    onChange: s,
    caller: br
  }), [p, m] = a.useState(0), [g, w] = a.useState(0);
  return /* @__PURE__ */ d(
    Ff,
    {
      scope: t,
      triggerRef: c,
      contentRef: l,
      contentId: xe(),
      titleId: xe(),
      descriptionId: xe(),
      titlePresent: p > 0,
      descriptionPresent: g > 0,
      setTitleCount: m,
      setDescriptionCount: w,
      open: u,
      onOpenChange: f,
      onOpenToggle: a.useCallback(() => f((h) => !h), [f]),
      modal: i,
      children: n
    }
  );
}, "Dialog"), Bf = "DialogTrigger", Vf = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ ge(function(t, n) {
    const { __scopeDialog: o, ...r } = t, s = Ie(Bf, o), i = K(n, s.triggerRef);
    return /* @__PURE__ */ d(
      H.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": s.open,
        "aria-controls": s.open ? s.contentId : void 0,
        "data-state": Kn(s.open),
        ...r,
        ref: i,
        onClick: I(t.onClick, s.onOpenToggle)
      }
    );
  }, "DialogTrigger")
), Di = "DialogPortal", [Hf, Oi] = ki(Di, {
  forceMount: void 0
}), Ai = /* @__PURE__ */ ge((e) => {
  const { __scopeDialog: t, forceMount: n, children: o, container: r } = e, s = Ie(Di, t);
  return /* @__PURE__ */ d(Hf, { scope: t, forceMount: n, children: a.Children.map(o, (i) => /* @__PURE__ */ d(ke, { present: n || s.open, children: /* @__PURE__ */ d(sn, { asChild: !0, container: r, children: i }) })) });
}, "DialogPortal"), Ao = "DialogOverlay", Mi = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ ge(function(t, n) {
    const o = Oi(Ao, t.__scopeDialog), { forceMount: r = o.forceMount, ...s } = t, i = Ie(Ao, t.__scopeDialog);
    return i.modal ? /* @__PURE__ */ d(ke, { present: r || i.open, children: /* @__PURE__ */ d(Uf, { ...s, ref: n }) }) : null;
  }, "DialogOverlay")
), Wf = /* @__PURE__ */ Fe("DialogOverlay.RemoveScroll"), Uf = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ge(function(t, n) {
    const { __scopeDialog: o, ...r } = t, s = Ie(Ao, o), i = Os(), c = K(n, i);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ d(Hn, { as: Wf, allowPinchZoom: !0, shards: [s.contentRef], children: /* @__PURE__ */ d(
        H.div,
        {
          "data-state": Kn(s.open),
          ...r,
          ref: c,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }, "DialogOverlayImpl")
), Zt = "DialogContent", Ni = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ ge(function(t, n) {
    const o = Oi(Zt, t.__scopeDialog), { forceMount: r = o.forceMount, ...s } = t, i = Ie(Zt, t.__scopeDialog);
    return /* @__PURE__ */ d(ke, { present: r || i.open, children: i.modal ? /* @__PURE__ */ d(Kf, { ...s, ref: n }) : /* @__PURE__ */ d(jf, { ...s, ref: n }) });
  }, "DialogContent")
), Kf = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ge(function(t, n) {
    const o = Ie(Zt, t.__scopeDialog), r = a.useRef(null), s = K(n, o.contentRef, r);
    return a.useEffect(() => {
      const i = r.current;
      if (i) return ar(i);
    }, []), /* @__PURE__ */ d(
      $i,
      {
        ...t,
        ref: s,
        trapFocus: o.open,
        disableOutsidePointerEvents: o.open,
        onCloseAutoFocus: I(t.onCloseAutoFocus, (i) => {
          var c;
          i.preventDefault(), (c = o.triggerRef.current) == null || c.focus();
        }),
        onPointerDownOutside: I(t.onPointerDownOutside, (i) => {
          const c = i.detail.originalEvent, l = c.button === 0 && c.ctrlKey === !0;
          (c.button === 2 || l) && i.preventDefault();
        }),
        onFocusOutside: I(
          t.onFocusOutside,
          (i) => i.preventDefault()
        )
      }
    );
  }, "DialogContentModal")
), jf = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ge(function(t, n) {
    const o = Ie(Zt, t.__scopeDialog), r = a.useRef(!1), s = a.useRef(!1);
    return /* @__PURE__ */ d(
      $i,
      {
        ...t,
        ref: n,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (i) => {
          var c, l;
          (c = t.onCloseAutoFocus) == null || c.call(t, i), i.defaultPrevented || (r.current || (l = o.triggerRef.current) == null || l.focus(), i.preventDefault()), r.current = !1, s.current = !1;
        },
        onInteractOutside: (i) => {
          var u, f;
          (u = t.onInteractOutside) == null || u.call(t, i), i.defaultPrevented || (r.current = !0, i.detail.originalEvent.type === "pointerdown" && (s.current = !0));
          const c = i.target;
          ((f = o.triggerRef.current) == null ? void 0 : f.contains(c)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && s.current && i.preventDefault();
        }
      }
    );
  }, "DialogContentNonModal")
), $i = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ge(function(t, n) {
    const { __scopeDialog: o, trapFocus: r, onOpenAutoFocus: s, onCloseAutoFocus: i, ...c } = t, l = Ie(Zt, o);
    return rn(), /* @__PURE__ */ d(qe, { children: /* @__PURE__ */ d(
      qo,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: s,
        onUnmountAutoFocus: i,
        children: /* @__PURE__ */ d(
          on,
          {
            role: "dialog",
            id: l.contentId,
            "aria-describedby": l.descriptionPresent ? l.descriptionId : void 0,
            "aria-labelledby": l.titlePresent ? l.titleId : void 0,
            "data-state": Kn(l.open),
            ...c,
            ref: n,
            deferPointerDownOutside: !0,
            onDismiss: () => l.onOpenChange(!1)
          }
        )
      }
    ) });
  }, "DialogContentImpl")
), zf = "DialogTitle", Mo = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ ge(function(t, n) {
    const { __scopeDialog: o, ...r } = t, s = Ie(zf, o), { setTitleCount: i } = s;
    return oe(() => (i((c) => c + 1), () => i((c) => c - 1)), [i]), /* @__PURE__ */ d(H.h2, { id: s.titleId, ...r, ref: n });
  }, "DialogTitle")
), Gf = "DialogDescription", Yf = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ge(function(t, n) {
    const { __scopeDialog: o, ...r } = t, s = Ie(Gf, o), { setDescriptionCount: i } = s;
    return oe(() => (i((c) => c + 1), () => i((c) => c - 1)), [i]), /* @__PURE__ */ d(H.p, { id: s.descriptionId, ...r, ref: n });
  }, "DialogDescription")
), Xf = "DialogClose", Li = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ ge(function(t, n) {
    const { __scopeDialog: o, ...r } = t, s = Ie(Xf, o);
    return /* @__PURE__ */ d(
      H.button,
      {
        type: "button",
        ...r,
        ref: n,
        onClick: I(t.onClick, () => s.onOpenChange(!1))
      }
    );
  }, "DialogClose")
);
function Kn(e) {
  return e ? "open" : "closed";
}
ge(Kn, "getState");
const qf = "wk-Semantic_heading", Zf = "wk-Semantic_text", Jf = "wk-Semantic_muted", Qf = "wk-Semantic_subtle", ep = "wk-Semantic_danger", tp = "wk-Semantic_mono", np = "wk-Semantic_xs", op = "wk-Semantic_sm", rp = "wk-Semantic_md", sp = "wk-Semantic_lg", ip = "wk-Semantic_xl", cp = "wk-Semantic_xxl", ap = "wk-Semantic_link", lp = "wk-Semantic_visuallyHidden", ye = {
  heading: qf,
  text: Zf,
  muted: Jf,
  subtle: Qf,
  danger: ep,
  mono: tp,
  xs: np,
  sm: op,
  md: rp,
  lg: sp,
  xl: ip,
  xxl: cp,
  link: ap,
  visuallyHidden: lp
};
function jn({ className: e, ...t }) {
  return /* @__PURE__ */ d("span", { className: F(ye.visuallyHidden, e), ...t });
}
const up = "wk-Dialog_overlay", dp = "wk-Dialog_content", fp = "wk-Dialog_header", pp = "wk-Dialog_headings", mp = "wk-Dialog_title", hp = "wk-Dialog_description", vp = "wk-Dialog_close", gp = "wk-Dialog_footer", Je = {
  overlay: up,
  content: dp,
  header: fp,
  headings: pp,
  title: mp,
  description: hp,
  close: vp,
  footer: gp
};
function Ow({
  title: e,
  titleHidden: t = !1,
  description: n,
  children: o,
  footer: r,
  trigger: s,
  width: i,
  showClose: c = !0,
  className: l,
  ...u
}) {
  return /* @__PURE__ */ O(Ii, { ...u, children: [
    s && /* @__PURE__ */ d(Vf, { asChild: !0, children: s }),
    /* @__PURE__ */ O(Ai, { children: [
      /* @__PURE__ */ d(Mi, { className: Je.overlay }),
      /* @__PURE__ */ O(
        Ni,
        {
          className: F(Je.content, l),
          style: i ? { "--wk-dialog-w": i } : void 0,
          children: [
            /* @__PURE__ */ O("div", { className: Je.header, children: [
              /* @__PURE__ */ O("div", { className: Je.headings, children: [
                t ? /* @__PURE__ */ d(Mo, { asChild: !0, children: /* @__PURE__ */ d(jn, { children: e }) }) : /* @__PURE__ */ d(Mo, { className: Je.title, children: e }),
                n && /* @__PURE__ */ d(Yf, { className: Je.description, children: n })
              ] }),
              c && /* @__PURE__ */ d(Li, { className: Je.close, "aria-label": "Close", children: /* @__PURE__ */ d(Dn, {}) })
            ] }),
            o,
            r && /* @__PURE__ */ d("div", { className: Je.footer, children: r })
          ]
        }
      )
    ] })
  ] });
}
const Aw = Li;
var wp = Object.defineProperty, yr = (e, t) => wp(e, "name", { value: t, configurable: !0 }), uo = !1;
function Fi() {
  const [e, t] = a.useState(uo);
  return a.useEffect(() => {
    uo || (uo = !0, t(!0));
  }, []), e;
}
yr(Fi, "useIsHydrated");
var Bi = a[" useSyncExternalStore ".trim().toString()];
function Vi() {
  return () => {
  };
}
yr(Vi, "subscribe");
function Hi() {
  return Bi(
    Vi,
    () => !0,
    () => !1
  );
}
yr(Hi, "useIsHydratedModern");
var bp = typeof Bi == "function" ? Hi : Fi, yp = Object.defineProperty, vt = (e, t) => yp(e, "name", { value: t, configurable: !0 }), fo = "rovingFocusGroup.onEntryFocus", Cp = { bubbles: !1, cancelable: !0 }, zn = "RovingFocusGroup", [No, Wi, Sp] = /* @__PURE__ */ tn(zn), [xp, Gn] = /* @__PURE__ */ me(
  zn,
  [Sp]
), [Ep, _p] = xp(zn), Tp = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ vt(function(t, n) {
    return /* @__PURE__ */ d(No.Provider, { scope: t.__scopeRovingFocusGroup, children: /* @__PURE__ */ d(No.Slot, { scope: t.__scopeRovingFocusGroup, children: /* @__PURE__ */ d(Pp, { ...t, ref: n }) }) });
  }, "RovingFocusGroup")
), Pp = /* @__PURE__ */ a.forwardRef(/* @__PURE__ */ vt(function(t, n) {
  const {
    __scopeRovingFocusGroup: o,
    orientation: r,
    loop: s = !1,
    dir: i,
    currentTabStopId: c,
    defaultCurrentTabStopId: l,
    onCurrentTabStopIdChange: u,
    onEntryFocus: f,
    preventScrollOnEntryFocus: p = !1,
    ...m
  } = t, g = a.useRef(null), w = K(n, g), h = nn(i), [v, b] = Pe({
    prop: c,
    defaultProp: l ?? null,
    onChange: u,
    caller: zn
  }), [S, y] = a.useState(!1), C = ue(f), x = Wi(o), E = a.useRef(!1), [_, R] = a.useState(0);
  return a.useEffect(() => {
    const P = g.current;
    if (P)
      return P.addEventListener(fo, C), () => P.removeEventListener(fo, C);
  }, [C]), /* @__PURE__ */ d(
    Ep,
    {
      scope: o,
      orientation: r,
      dir: h,
      loop: s,
      currentTabStopId: v,
      onItemFocus: a.useCallback(
        (P) => b(P),
        [b]
      ),
      onItemShiftTab: a.useCallback(() => y(!0), []),
      onFocusableItemAdd: a.useCallback(
        () => R((P) => P + 1),
        []
      ),
      onFocusableItemRemove: a.useCallback(
        () => R((P) => P - 1),
        []
      ),
      children: /* @__PURE__ */ d(
        H.div,
        {
          tabIndex: S || _ === 0 ? -1 : 0,
          "data-orientation": r,
          ...m,
          ref: w,
          style: { outline: "none", ...t.style },
          onMouseDown: I(t.onMouseDown, () => {
            E.current = !0;
          }),
          onFocus: I(t.onFocus, (P) => {
            const D = !E.current;
            if (P.target === P.currentTarget && D && !S) {
              const B = new CustomEvent(fo, Cp);
              if (P.currentTarget.dispatchEvent(B), !B.defaultPrevented) {
                const A = x().filter((N) => N.focusable), M = A.find((N) => N.active), L = A.find((N) => N.id === v), T = [M, L, ...A].filter(
                  Boolean
                ).map((N) => N.ref.current);
                Cr(T, p);
              }
            }
            E.current = !1;
          }),
          onBlur: I(t.onBlur, () => y(!1))
        }
      )
    }
  );
}, "RovingFocusGroupImpl")), Rp = "RovingFocusGroupItem", kp = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ vt(function(t, n) {
    const {
      __scopeRovingFocusGroup: o,
      focusable: r = !0,
      active: s = !1,
      tabStopId: i,
      children: c,
      ...l
    } = t, u = xe(), f = i || u, p = _p(Rp, o), m = p.currentTabStopId === f, g = Wi(o), { onFocusableItemAdd: w, onFocusableItemRemove: h, currentTabStopId: v } = p, b = bp();
    return oe(() => {
      if (!(!b || !r))
        return w(), () => h();
    }, [b, r, w, h]), a.useEffect(() => {
      if (!(b || !r))
        return w(), () => h();
    }, [b, r, w, h]), /* @__PURE__ */ d(
      No.ItemSlot,
      {
        scope: o,
        id: f,
        focusable: r,
        active: s,
        children: /* @__PURE__ */ d(
          H.span,
          {
            tabIndex: m ? 0 : -1,
            "data-orientation": p.orientation,
            ...l,
            ref: n,
            onMouseDown: I(t.onMouseDown, (S) => {
              r ? p.onItemFocus(f) : S.preventDefault();
            }),
            onFocus: I(t.onFocus, () => p.onItemFocus(f)),
            onKeyDown: I(t.onKeyDown, (S) => {
              if (S.key === "Tab" && S.shiftKey) {
                p.onItemShiftTab();
                return;
              }
              if (S.target !== S.currentTarget) return;
              const y = Ki(S, p.orientation, p.dir);
              if (y !== void 0) {
                if (S.metaKey || S.ctrlKey || S.altKey || S.shiftKey) return;
                S.preventDefault();
                let x = g().filter((E) => E.focusable).map((E) => E.ref.current);
                if (y === "last") x.reverse();
                else if (y === "prev" || y === "next") {
                  y === "prev" && x.reverse();
                  const E = x.indexOf(S.currentTarget);
                  x = p.loop ? ji(x, E + 1) : x.slice(E + 1);
                }
                setTimeout(() => Cr(x));
              }
            }),
            children: typeof c == "function" ? c({ isCurrentTabStop: m, hasTabStop: v != null }) : c
          }
        )
      }
    );
  }, "RovingFocusGroupItem")
), Ip = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Ui(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
vt(Ui, "getDirectionAwareKey");
function Ki(e, t, n) {
  const o = Ui(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
    return Ip[o];
}
vt(Ki, "getFocusIntent");
function Cr(e, t = !1) {
  const n = document.activeElement;
  for (const o of e)
    if (o === n || (o.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
vt(Cr, "focusFirst");
function ji(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
vt(ji, "wrapArray");
var zi = Tp, Gi = kp, Dp = Object.defineProperty, J = (e, t) => Dp(e, "name", { value: t, configurable: !0 }), Op = ["Enter", " "], Ap = ["ArrowDown", "PageUp", "Home"], Yi = ["ArrowUp", "PageDown", "End"], Mp = [...Ap, ...Yi], Yn = "Menu", [$o, Np, $p] = /* @__PURE__ */ tn(Yn), [gt, Xi] = /* @__PURE__ */ me(Yn, [
  $p,
  Nt,
  Gn
]), Sr = Nt(), qi = Gn(), [Lp, ln] = gt(Yn), [Fp, xr] = gt(Yn), Bp = /* @__PURE__ */ J((e) => {
  const { __scopeMenu: t, open: n = !1, children: o, dir: r, onOpenChange: s, modal: i = !0 } = e, c = Sr(t), [l, u] = a.useState(null), f = a.useRef(!1), p = ue(s), m = nn(r);
  return a.useEffect(() => {
    const g = /* @__PURE__ */ J(() => {
      f.current = !0, document.addEventListener("pointerdown", w, { capture: !0, once: !0 }), document.addEventListener("pointermove", w, { capture: !0, once: !0 });
    }, "handleKeyDown"), w = /* @__PURE__ */ J(() => f.current = !1, "handlePointer");
    return document.addEventListener("keydown", g, { capture: !0 }), () => {
      document.removeEventListener("keydown", g, { capture: !0 }), document.removeEventListener("pointerdown", w, { capture: !0 }), document.removeEventListener("pointermove", w, { capture: !0 });
    };
  }, []), a.useEffect(() => {
    if (!n)
      return;
    const g = /* @__PURE__ */ J(() => p(!1), "handleBlur");
    return window.addEventListener("blur", g), () => window.removeEventListener("blur", g);
  }, [n, p]), /* @__PURE__ */ d(rr, { ...c, children: /* @__PURE__ */ d(
    Lp,
    {
      scope: t,
      open: n,
      onOpenChange: p,
      content: l,
      onContentChange: u,
      children: /* @__PURE__ */ d(
        Fp,
        {
          scope: t,
          onClose: a.useCallback(() => p(!1), [p]),
          isUsingKeyboardRef: f,
          dir: m,
          modal: i,
          children: o
        }
      )
    }
  ) });
}, "Menu"), Vp = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ J(function(t, n) {
    const { __scopeMenu: o, ...r } = t, s = Sr(o);
    return /* @__PURE__ */ d(sr, { ...s, ...r, ref: n });
  }, "MenuAnchor")
), Zi = "MenuPortal", [Hp, Wp] = gt(Zi, {
  forceMount: void 0
}), Up = /* @__PURE__ */ J((e) => {
  const { __scopeMenu: t, forceMount: n, children: o, container: r } = e, s = ln(Zi, t);
  return /* @__PURE__ */ d(Hp, { scope: t, forceMount: n, children: /* @__PURE__ */ d(ke, { present: n || s.open, children: /* @__PURE__ */ d(sn, { asChild: !0, container: r, children: o }) }) });
}, "MenuPortal"), et = "MenuContent", [Kp, Ji] = gt(et), jp = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ J(function(t, n) {
    const o = Wp(et, t.__scopeMenu), { forceMount: r = o.forceMount, ...s } = t, i = ln(et, t.__scopeMenu), c = xr(et, t.__scopeMenu);
    return /* @__PURE__ */ d($o.Provider, { scope: t.__scopeMenu, children: /* @__PURE__ */ d(ke, { present: r || i.open, children: /* @__PURE__ */ d($o.Slot, { scope: t.__scopeMenu, children: c.modal ? /* @__PURE__ */ d(zp, { ...s, ref: n }) : /* @__PURE__ */ d(Gp, { ...s, ref: n }) }) }) });
  }, "MenuContent")
), zp = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ J(function(t, n) {
    const o = ln(et, t.__scopeMenu), r = a.useRef(null), s = K(n, r);
    return a.useEffect(() => {
      const i = r.current;
      if (i) return ar(i);
    }, []), /* @__PURE__ */ d(
      Qi,
      {
        ...t,
        ref: s,
        trapFocus: o.open,
        disableOutsidePointerEvents: o.open,
        disableOutsideScroll: !0,
        onFocusOutside: I(
          t.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => o.onOpenChange(!1)
      }
    );
  }, "MenuRootContentModal")
), Gp = /* @__PURE__ */ a.forwardRef(/* @__PURE__ */ J(function(t, n) {
  const o = ln(et, t.__scopeMenu);
  return /* @__PURE__ */ d(
    Qi,
    {
      ...t,
      ref: n,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => o.onOpenChange(!1)
    }
  );
}, "MenuRootContentNonModal")), Yp = /* @__PURE__ */ Fe("MenuContent.ScrollLock"), Qi = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ J(function(t, n) {
    const {
      __scopeMenu: o,
      loop: r = !1,
      trapFocus: s,
      onOpenAutoFocus: i,
      onCloseAutoFocus: c,
      disableOutsidePointerEvents: l,
      onEntryFocus: u,
      onEscapeKeyDown: f,
      onPointerDownOutside: p,
      onFocusOutside: m,
      onInteractOutside: g,
      onDismiss: w,
      disableOutsideScroll: h,
      ...v
    } = t, b = ln(et, o), S = xr(et, o), y = Sr(o), C = qi(o), x = Np(o), [E, _] = a.useState(null), R = a.useRef(null), P = K(n, R, b.onContentChange), D = a.useRef(0), B = a.useRef(""), A = a.useRef(0), M = a.useRef(null), L = a.useRef("right"), U = a.useRef(0), T = h ? Hn : a.Fragment, N = h ? { as: Yp, allowPinchZoom: !0 } : void 0, $ = /* @__PURE__ */ J((k) => {
      var V, X;
      const Z = B.current + k, G = x().filter((ee) => !ee.disabled), Q = document.activeElement, ae = (V = G.find((ee) => ee.ref.current === Q)) == null ? void 0 : V.textValue, ce = G.map((ee) => ee.textValue), we = rc(ce, Z, ae), he = (X = G.find((ee) => ee.textValue === we)) == null ? void 0 : X.ref.current;
      (/* @__PURE__ */ J((function ee(Y) {
        B.current = Y, window.clearTimeout(D.current), Y !== "" && (D.current = window.setTimeout(() => ee(""), 1e3));
      }), "updateSearch"))(Z), he && setTimeout(() => he.focus());
    }, "handleTypeaheadSearch");
    a.useEffect(() => () => window.clearTimeout(D.current), []), rn();
    const W = a.useCallback((k) => {
      var G, Q;
      return L.current === ((G = M.current) == null ? void 0 : G.side) && ic(k, (Q = M.current) == null ? void 0 : Q.area);
    }, []);
    return /* @__PURE__ */ d(
      Kp,
      {
        scope: o,
        searchRef: B,
        onItemEnter: a.useCallback(
          (k) => {
            W(k) && k.preventDefault();
          },
          [W]
        ),
        onItemLeave: a.useCallback(
          (k) => {
            var Z;
            W(k) || ((Z = R.current) == null || Z.focus(), _(null));
          },
          [W]
        ),
        onTriggerLeave: a.useCallback(
          (k) => {
            W(k) && k.preventDefault();
          },
          [W]
        ),
        pointerGraceTimerRef: A,
        onPointerGraceIntentChange: a.useCallback((k) => {
          M.current = k;
        }, []),
        children: /* @__PURE__ */ d(T, { ...N, children: /* @__PURE__ */ d(
          qo,
          {
            asChild: !0,
            trapped: s,
            onMountAutoFocus: I(i, (k) => {
              var Z;
              k.preventDefault(), (Z = R.current) == null || Z.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: c,
            children: /* @__PURE__ */ d(
              on,
              {
                asChild: !0,
                disableOutsidePointerEvents: l,
                onEscapeKeyDown: f,
                onPointerDownOutside: p,
                onFocusOutside: m,
                onInteractOutside: g,
                onDismiss: w,
                children: /* @__PURE__ */ d(
                  zi,
                  {
                    asChild: !0,
                    ...C,
                    dir: S.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: E,
                    onCurrentTabStopIdChange: _,
                    onEntryFocus: I(u, (k) => {
                      S.isUsingKeyboardRef.current || k.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ d(
                      ir,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": ec(b.open),
                        "data-radix-menu-content": "",
                        dir: S.dir,
                        ...y,
                        ...v,
                        ref: P,
                        style: { outline: "none", ...v.style },
                        onKeyDown: I(v.onKeyDown, (k) => {
                          const G = k.target.closest("[data-radix-menu-content]") === k.currentTarget, Q = k.ctrlKey || k.altKey || k.metaKey, ae = k.key.length === 1;
                          G && (k.key === "Tab" && k.preventDefault(), !Q && ae && $(k.key));
                          const ce = R.current;
                          if (k.target !== ce || !Mp.includes(k.key)) return;
                          k.preventDefault();
                          const he = x().filter((V) => !V.disabled).map((V) => V.ref.current);
                          Yi.includes(k.key) && he.reverse(), nc(he);
                        }),
                        onBlur: I(t.onBlur, (k) => {
                          k.currentTarget.contains(k.target) || (window.clearTimeout(D.current), B.current = "");
                        }),
                        onPointerMove: I(
                          t.onPointerMove,
                          In((k) => {
                            const Z = k.target, G = U.current !== k.clientX;
                            if (k.currentTarget.contains(Z) && G) {
                              const Q = k.clientX > U.current ? "right" : "left";
                              L.current = Q, U.current = k.clientX;
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
), Xp = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ J(function(t, n) {
    const { __scopeMenu: o, ...r } = t;
    return /* @__PURE__ */ d(H.div, { ...r, ref: n });
  }, "MenuLabel")
), Lo = "MenuItem", is = "menu.itemSelect", qp = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ J(function(t, n) {
    const { disabled: o = !1, onSelect: r, ...s } = t, i = a.useRef(null), c = xr(Lo, t.__scopeMenu), l = Ji(Lo, t.__scopeMenu), u = K(n, i), f = a.useRef(!1), p = /* @__PURE__ */ J(() => {
      const m = i.current;
      if (!o && m) {
        const g = new CustomEvent(is, { bubbles: !0, cancelable: !0 });
        m.addEventListener(is, (w) => r == null ? void 0 : r(w), { once: !0 }), On(m, g), g.defaultPrevented ? f.current = !1 : c.onClose();
      }
    }, "handleSelect");
    return /* @__PURE__ */ d(
      Zp,
      {
        ...s,
        ref: u,
        disabled: o,
        onClick: I(t.onClick, p),
        onPointerDown: (m) => {
          var g;
          (g = t.onPointerDown) == null || g.call(t, m), f.current = !0;
        },
        onPointerUp: I(t.onPointerUp, (m) => {
          var g;
          f.current || (g = m.currentTarget) == null || g.click();
        }),
        onKeyDown: I(t.onKeyDown, (m) => {
          o || m.target !== m.currentTarget || l.searchRef.current !== "" && m.key === " " || Op.includes(m.key) && (m.currentTarget.click(), m.preventDefault());
        })
      }
    );
  }, "MenuItem")
), Zp = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ J(function(t, n) {
    const { __scopeMenu: o, disabled: r = !1, textValue: s, ...i } = t, c = Ji(Lo, o), l = qi(o), u = a.useRef(null), f = K(n, u), [p, m] = a.useState(!1), [g, w] = a.useState("");
    return a.useEffect(() => {
      const h = u.current;
      h && w((h.textContent ?? "").trim());
    }, [i.children]), /* @__PURE__ */ d(
      $o.ItemSlot,
      {
        scope: o,
        disabled: r,
        textValue: s ?? g,
        children: /* @__PURE__ */ d(Gi, { asChild: !0, ...l, focusable: !r, children: /* @__PURE__ */ d(
          H.div,
          {
            role: "menuitem",
            "data-highlighted": p ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...i,
            ref: f,
            onPointerMove: I(
              t.onPointerMove,
              In((h) => {
                r ? c.onItemLeave(h) : (c.onItemEnter(h), h.defaultPrevented || h.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: I(
              t.onPointerLeave,
              In((h) => c.onItemLeave(h))
            ),
            onFocus: I(t.onFocus, () => m(!0)),
            onBlur: I(t.onBlur, () => m(!1))
          }
        ) })
      }
    );
  }, "MenuItemImpl")
), Jp = "MenuRadioGroup", [Mw, Nw] = gt(
  Jp,
  { value: void 0, onValueChange: /* @__PURE__ */ J(() => {
  }, "onValueChange") }
), Qp = "MenuItemIndicator", [$w, Lw] = gt(
  Qp,
  { checked: !1 }
), em = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ J(function(t, n) {
    const { __scopeMenu: o, ...r } = t;
    return /* @__PURE__ */ d(
      H.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: n
      }
    );
  }, "MenuSeparator")
), tm = "MenuSub", [Fw, Bw] = gt(tm);
function ec(e) {
  return e ? "open" : "closed";
}
J(ec, "getOpenState");
function tc(e) {
  return e === "indeterminate";
}
J(tc, "isIndeterminate");
function nm(e) {
  return tc(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
J(nm, "getCheckedState");
function nc(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
J(nc, "focusFirst");
function oc(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
J(oc, "wrapArray");
function rc(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let i = oc(e, Math.max(s, 0));
  r.length === 1 && (i = i.filter((u) => u !== n));
  const l = i.find(
    (u) => u.toLowerCase().startsWith(r.toLowerCase())
  );
  return l !== n ? l : void 0;
}
J(rc, "getNextMatch");
function sc(e, t) {
  const { x: n, y: o } = e;
  let r = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const c = t[s], l = t[i], u = c.x, f = c.y, p = l.x, m = l.y;
    f > o != m > o && n < (p - u) * (o - f) / (m - f) + u && (r = !r);
  }
  return r;
}
J(sc, "isPointInPolygon");
function ic(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return sc(n, t);
}
J(ic, "isPointerInGraceArea");
function In(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
J(In, "whenMouse");
var om = Bp, rm = Vp, sm = Up, im = jp, cm = Xp, am = qp, lm = em, um = Object.defineProperty, wt = (e, t) => um(e, "name", { value: t, configurable: !0 }), Er = "DropdownMenu", [dm, Vw] = /* @__PURE__ */ me(
  Er,
  [Xi]
), bt = Xi(), [fm, cc] = dm(Er), pm = /* @__PURE__ */ wt((e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: o,
    open: r,
    defaultOpen: s,
    onOpenChange: i,
    modal: c = !0
  } = e, l = bt(t), u = a.useRef(null), [f, p] = Pe({
    prop: r,
    defaultProp: s ?? !1,
    onChange: i,
    caller: Er
  });
  return /* @__PURE__ */ d(
    fm,
    {
      scope: t,
      triggerId: xe(),
      triggerRef: u,
      contentId: xe(),
      open: f,
      onOpenChange: p,
      onOpenToggle: a.useCallback(() => p((m) => !m), [p]),
      modal: c,
      children: /* @__PURE__ */ d(om, { ...l, open: f, onOpenChange: p, dir: o, modal: c, children: n })
    }
  );
}, "DropdownMenu"), mm = "DropdownMenuTrigger", hm = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ wt(function(t, n) {
    const { __scopeDropdownMenu: o, disabled: r = !1, ...s } = t, i = cc(mm, o), c = bt(o), l = K(n, i.triggerRef);
    return /* @__PURE__ */ d(rm, { asChild: !0, ...c, children: /* @__PURE__ */ d(
      H.button,
      {
        type: "button",
        id: i.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": i.open,
        "aria-controls": i.open ? i.contentId : void 0,
        "data-state": i.open ? "open" : "closed",
        "data-disabled": r ? "" : void 0,
        disabled: r,
        ...s,
        ref: l,
        onPointerDown: I(t.onPointerDown, (u) => {
          !r && u.button === 0 && u.ctrlKey === !1 && (i.onOpenToggle(), i.open || u.preventDefault());
        }),
        onKeyDown: I(t.onKeyDown, (u) => {
          r || (["Enter", " "].includes(u.key) && i.onOpenToggle(), u.key === "ArrowDown" && i.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(u.key) && u.preventDefault());
        })
      }
    ) });
  }, "DropdownMenuTrigger")
), vm = /* @__PURE__ */ wt((e) => {
  const { __scopeDropdownMenu: t, ...n } = e, o = bt(t);
  return /* @__PURE__ */ d(sm, { ...o, ...n });
}, "DropdownMenuPortal"), gm = "DropdownMenuContent", wm = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ wt(function(t, n) {
    const { __scopeDropdownMenu: o, ...r } = t, s = cc(gm, o), i = bt(o), c = a.useRef(!1);
    return /* @__PURE__ */ d(
      im,
      {
        id: s.contentId,
        "aria-labelledby": s.triggerId,
        ...i,
        ...r,
        ref: n,
        onCloseAutoFocus: I(t.onCloseAutoFocus, (l) => {
          var u;
          c.current || (u = s.triggerRef.current) == null || u.focus(), c.current = !1, l.preventDefault();
        }),
        onInteractOutside: I(t.onInteractOutside, (l) => {
          const u = l.detail.originalEvent, f = u.button === 0 && u.ctrlKey === !0, p = u.button === 2 || f;
          (!s.modal || p) && (c.current = !0);
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
), bm = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ wt(function(t, n) {
    const { __scopeDropdownMenu: o, ...r } = t, s = bt(o);
    return /* @__PURE__ */ d(cm, { ...s, ...r, ref: n });
  }, "DropdownMenuLabel")
), ym = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ wt(function(t, n) {
    const { __scopeDropdownMenu: o, ...r } = t, s = bt(o);
    return /* @__PURE__ */ d(am, { ...s, ...r, ref: n });
  }, "DropdownMenuItem")
), Cm = /* @__PURE__ */ a.forwardRef(/* @__PURE__ */ wt(function(t, n) {
  const { __scopeDropdownMenu: o, ...r } = t, s = bt(o);
  return /* @__PURE__ */ d(lm, { ...s, ...r, ref: n });
}, "DropdownMenuSeparator")), Sm = pm, xm = hm, Em = vm, _m = wm, Tm = bm, Pm = ym, Rm = Cm;
const km = "wk-Menu_content", Im = "wk-Menu_item", Dm = "wk-Menu_danger", Om = "wk-Menu_label", Am = "wk-Menu_separator", Mm = "wk-Menu_shortcut", Rt = {
  content: km,
  item: Im,
  danger: Dm,
  label: Om,
  separator: Am,
  shortcut: Mm
};
function Hw({ trigger: e, children: t, align: n = "start", side: o = "bottom", className: r, ...s }) {
  return /* @__PURE__ */ O(Sm, { ...s, children: [
    /* @__PURE__ */ d(xm, { asChild: !0, children: e }),
    /* @__PURE__ */ d(Em, { children: /* @__PURE__ */ d(
      _m,
      {
        className: F(Rt.content, r),
        align: n,
        side: o,
        sideOffset: 4,
        collisionPadding: 8,
        children: t
      }
    ) })
  ] });
}
const Ww = Ee(function({ tone: t = "default", shortcut: n, className: o, children: r, ...s }, i) {
  return /* @__PURE__ */ O(
    Pm,
    {
      ref: i,
      className: F(Rt.item, t === "danger" && Rt.danger, o),
      ...s,
      children: [
        r,
        n && /* @__PURE__ */ d("span", { className: Rt.shortcut, children: n })
      ]
    }
  );
});
function Uw({ children: e }) {
  return /* @__PURE__ */ d(Tm, { className: Rt.label, children: e });
}
function Kw() {
  return /* @__PURE__ */ d(Rm, { className: Rt.separator });
}
var Nm = Object.defineProperty, se = (e, t) => Nm(e, "name", { value: t, configurable: !0 }), [_r, jw] = /* @__PURE__ */ me("Tooltip", [
  Nt
]), Xn = Nt(), $m = "TooltipProvider", Lm = 700, Fo = "tooltip.open", [Fm, Tr] = _r($m), Bm = /* @__PURE__ */ se((e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = Lm,
    skipDelayDuration: o = 300,
    disableHoverableContent: r = !1,
    children: s
  } = e, i = a.useRef(!0), c = a.useRef(!1), l = a.useRef(0);
  return a.useEffect(() => {
    const u = l.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ d(
    Fm,
    {
      scope: t,
      isOpenDelayedRef: i,
      delayDuration: n,
      onOpen: a.useCallback(() => {
        o <= 0 || (window.clearTimeout(l.current), i.current = !1);
      }, [o]),
      onClose: a.useCallback(() => {
        o <= 0 || (window.clearTimeout(l.current), l.current = window.setTimeout(
          () => i.current = !0,
          o
        ));
      }, [o]),
      isPointerInTransitRef: c,
      onPointerInTransitChange: a.useCallback((u) => {
        c.current = u;
      }, []),
      disableHoverableContent: r,
      children: s
    }
  );
}, "TooltipProvider"), Bo = "Tooltip", [Vm, un] = _r(Bo), Hm = /* @__PURE__ */ se((e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: o,
    defaultOpen: r,
    onOpenChange: s,
    disableHoverableContent: i,
    delayDuration: c
  } = e, l = Tr(Bo, e.__scopeTooltip), u = Xn(t), [f, p] = a.useState(null), [m, g] = a.useState(void 0), w = xe(), h = a.useRef(0), v = i ?? l.disableHoverableContent, b = c ?? l.delayDuration, S = a.useRef(!1), [y, C] = Pe({
    prop: o,
    defaultProp: r ?? !1,
    onChange: /* @__PURE__ */ se((D) => {
      D ? (l.onOpen(), document.dispatchEvent(new CustomEvent(Fo))) : l.onClose(), s == null || s(D);
    }, "onChange"),
    caller: Bo
  }), x = a.useMemo(() => y ? S.current ? "delayed-open" : "instant-open" : "closed", [y]), E = a.useCallback(() => {
    window.clearTimeout(h.current), h.current = 0, S.current = !1, C(!0);
  }, [C]), _ = a.useCallback(() => {
    window.clearTimeout(h.current), h.current = 0, C(!1);
  }, [C]), R = a.useCallback(() => {
    window.clearTimeout(h.current), h.current = window.setTimeout(() => {
      S.current = !0, C(!0), h.current = 0;
    }, b);
  }, [b, C]);
  return a.useEffect(() => () => {
    h.current && (window.clearTimeout(h.current), h.current = 0);
  }, []), /* @__PURE__ */ d(rr, { ...u, children: /* @__PURE__ */ d(
    Vm,
    {
      scope: t,
      contentId: m ?? w,
      setContentId: g,
      open: y,
      stateAttribute: x,
      trigger: f,
      onTriggerChange: p,
      onTriggerEnter: a.useCallback(() => {
        l.isOpenDelayedRef.current ? R() : E();
      }, [l.isOpenDelayedRef, R, E]),
      onTriggerLeave: a.useCallback(() => {
        v ? _() : (window.clearTimeout(h.current), h.current = 0);
      }, [_, v]),
      onOpen: E,
      onClose: _,
      disableHoverableContent: v,
      children: n
    }
  ) });
}, "Tooltip"), cs = "TooltipTrigger", Wm = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ se(function(t, n) {
    const { __scopeTooltip: o, ...r } = t, s = un(cs, o), i = Tr(cs, o), c = Xn(o), l = a.useRef(null), u = K(n, l, s.onTriggerChange), f = a.useRef(!1), p = a.useRef(!1), m = a.useCallback(() => f.current = !1, []);
    return a.useEffect(() => () => document.removeEventListener("pointerup", m), [m]), /* @__PURE__ */ d(sr, { asChild: !0, ...c, children: /* @__PURE__ */ d(
      H.button,
      {
        "aria-describedby": s.open ? s.contentId : void 0,
        "data-state": s.stateAttribute,
        ...r,
        ref: u,
        onPointerMove: I(t.onPointerMove, (g) => {
          g.pointerType !== "touch" && !p.current && !i.isPointerInTransitRef.current && (s.onTriggerEnter(), p.current = !0);
        }),
        onPointerLeave: I(t.onPointerLeave, () => {
          s.onTriggerLeave(), p.current = !1;
        }),
        onPointerDown: I(t.onPointerDown, () => {
          s.open && s.onClose(), f.current = !0, document.addEventListener("pointerup", m, { once: !0 });
        }),
        onFocus: I(t.onFocus, () => {
          f.current || s.onOpen();
        }),
        onBlur: I(t.onBlur, s.onClose),
        onClick: I(t.onClick, s.onClose)
      }
    ) });
  }, "TooltipTrigger")
), ac = "TooltipPortal", [Um, Km] = _r(ac, {
  forceMount: void 0
}), jm = /* @__PURE__ */ se((e) => {
  const { __scopeTooltip: t, forceMount: n, children: o, container: r } = e, s = un(ac, t);
  return /* @__PURE__ */ d(Um, { scope: t, forceMount: n, children: /* @__PURE__ */ d(ke, { present: n || s.open, children: /* @__PURE__ */ d(sn, { asChild: !0, container: r, children: o }) }) });
}, "TooltipPortal"), Jt = "TooltipContent", zm = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ se(function(t, n) {
    const o = Km(Jt, t.__scopeTooltip), { forceMount: r = o.forceMount, side: s = "top", ...i } = t, c = un(Jt, t.__scopeTooltip);
    return /* @__PURE__ */ d(ke, { present: r || c.open, children: c.disableHoverableContent ? /* @__PURE__ */ d(lc, { side: s, ...i, ref: n }) : /* @__PURE__ */ d(Gm, { side: s, ...i, ref: n }) });
  }, "TooltipContent")
), Gm = /* @__PURE__ */ a.forwardRef(/* @__PURE__ */ se(function(t, n) {
  const o = un(Jt, t.__scopeTooltip), r = Tr(Jt, t.__scopeTooltip), s = a.useRef(null), i = K(n, s), [c, l] = a.useState(null), { trigger: u, onClose: f } = o, p = s.current, { onPointerInTransitChange: m } = r, g = a.useCallback(() => {
    l(null), m(!1);
  }, [m]), w = a.useCallback(
    (h, v) => {
      const b = h.currentTarget, S = { x: h.clientX, y: h.clientY }, y = uc(S, b.getBoundingClientRect()), C = dc(S, y), x = fc(v.getBoundingClientRect()), E = mc([...C, ...x]);
      l(E), m(!0);
    },
    [m]
  );
  return a.useEffect(() => () => g(), [g]), a.useEffect(() => {
    if (u && p) {
      const h = /* @__PURE__ */ se((b) => w(b, p), "handleTriggerLeave"), v = /* @__PURE__ */ se((b) => w(b, u), "handleContentLeave");
      return u.addEventListener("pointerleave", h), p.addEventListener("pointerleave", v), () => {
        u.removeEventListener("pointerleave", h), p.removeEventListener("pointerleave", v);
      };
    }
  }, [u, p, w, g]), a.useEffect(() => {
    if (c) {
      const h = /* @__PURE__ */ se((v) => {
        const b = v.target, S = { x: v.clientX, y: v.clientY }, y = (u == null ? void 0 : u.contains(b)) || (p == null ? void 0 : p.contains(b)), C = !pc(S, c);
        y ? g() : C && (g(), f());
      }, "handleTrackPointerGrace");
      return document.addEventListener("pointermove", h), () => document.removeEventListener("pointermove", h);
    }
  }, [u, p, c, f, g]), /* @__PURE__ */ d(lc, { ...t, ref: i });
}, "TooltipContentHoverable")), Ym = /* @__PURE__ */ ws("TooltipContent"), lc = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ se(function(t, n) {
    const {
      __scopeTooltip: o,
      children: r,
      "aria-label": s,
      id: i,
      onEscapeKeyDown: c,
      onPointerDownOutside: l,
      ...u
    } = t, f = un(Jt, o), p = Xn(o), { onClose: m } = f;
    a.useEffect(() => (document.addEventListener(Fo, m), () => document.removeEventListener(Fo, m)), [m]), a.useEffect(() => {
      if (f.trigger) {
        const w = /* @__PURE__ */ se((h) => {
          h.target instanceof Node && h.target.contains(f.trigger) && m();
        }, "handleScroll");
        return window.addEventListener("scroll", w, { capture: !0 }), () => window.removeEventListener("scroll", w, { capture: !0 });
      }
    }, [f.trigger, m]);
    const { setContentId: g } = f;
    return oe(() => (g(i), () => {
      g(void 0);
    }), [i, g]), /* @__PURE__ */ d(
      on,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: c,
        onPointerDownOutside: l,
        onFocusOutside: (w) => w.preventDefault(),
        onDismiss: m,
        children: /* @__PURE__ */ O(
          ir,
          {
            "data-state": f.stateAttribute,
            role: s ? void 0 : "tooltip",
            id: s ? void 0 : f.contentId,
            ...p,
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
              /* @__PURE__ */ d(Ym, { children: r }),
              s ? /* @__PURE__ */ d(Eu, { id: f.contentId, role: "tooltip", children: s }) : null
            ]
          }
        )
      }
    );
  }, "TooltipContentImpl")
), Xm = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ se(function(t, n) {
    const { __scopeTooltip: o, ...r } = t, s = Xn(o);
    return /* @__PURE__ */ d(du, { ...s, ...r, ref: n });
  }, "TooltipArrow")
);
function uc(e, t) {
  const n = Math.abs(t.top - e.y), o = Math.abs(t.bottom - e.y), r = Math.abs(t.right - e.x), s = Math.abs(t.left - e.x);
  switch (Math.min(n, o, r, s)) {
    case s:
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
se(uc, "getExitSideFromRect");
function dc(e, t, n = 5) {
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
se(dc, "getPaddedExitPoints");
function fc(e) {
  const { top: t, right: n, bottom: o, left: r } = e;
  return [
    { x: r, y: t },
    { x: n, y: t },
    { x: n, y: o },
    { x: r, y: o }
  ];
}
se(fc, "getPointsFromRect");
function pc(e, t) {
  const { x: n, y: o } = e;
  let r = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const c = t[s], l = t[i], u = c.x, f = c.y, p = l.x, m = l.y;
    f > o != m > o && n < (p - u) * (o - f) / (m - f) + u && (r = !r);
  }
  return r;
}
se(pc, "isPointInPolygon");
function mc(e) {
  const t = e.slice();
  return t.sort((n, o) => n.x < o.x ? -1 : n.x > o.x ? 1 : n.y < o.y ? -1 : n.y > o.y ? 1 : 0), hc(t);
}
se(mc, "getHull");
function hc(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let o = 0; o < e.length; o++) {
    const r = e[o];
    for (; t.length >= 2; ) {
      const s = t[t.length - 1], i = t[t.length - 2];
      if ((s.x - i.x) * (r.y - i.y) >= (s.y - i.y) * (r.x - i.x)) t.pop();
      else break;
    }
    t.push(r);
  }
  t.pop();
  const n = [];
  for (let o = e.length - 1; o >= 0; o--) {
    const r = e[o];
    for (; n.length >= 2; ) {
      const s = n[n.length - 1], i = n[n.length - 2];
      if ((s.x - i.x) * (r.y - i.y) >= (s.y - i.y) * (r.x - i.x)) n.pop();
      else break;
    }
    n.push(r);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
se(hc, "getHullPresorted");
var qm = Bm, Zm = Hm, Jm = Wm, Qm = jm, eh = zm, th = Xm;
const nh = "wk-Tooltip_content", oh = "wk-Tooltip_arrow", as = {
  content: nh,
  arrow: oh
}, zw = qm;
function Gw({ content: e, children: t, side: n = "top", delayDuration: o, className: r }) {
  return /* @__PURE__ */ O(Zm, { delayDuration: o, children: [
    /* @__PURE__ */ d(Jm, { asChild: !0, children: t }),
    /* @__PURE__ */ d(Qm, { children: /* @__PURE__ */ O(
      eh,
      {
        className: F(as.content, r),
        side: n,
        sideOffset: 6,
        collisionPadding: 8,
        children: [
          e,
          /* @__PURE__ */ d(th, { className: as.arrow, width: 10, height: 5 })
        ]
      }
    ) })
  ] });
}
var rh = Object.defineProperty, $t = (e, t) => rh(e, "name", { value: t, configurable: !0 }), Pr = "Tabs", [sh, Yw] = /* @__PURE__ */ me(Pr, [
  Gn
]), vc = Gn(), [ih, Rr] = sh(Pr), ch = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ $t(function(t, n) {
    const {
      __scopeTabs: o,
      value: r,
      onValueChange: s,
      defaultValue: i,
      orientation: c = "horizontal",
      dir: l,
      activationMode: u = "automatic",
      ...f
    } = t, p = nn(l), [m, g] = Pe({
      prop: r,
      onChange: s,
      defaultProp: i ?? "",
      caller: Pr
    });
    return /* @__PURE__ */ d(
      ih,
      {
        scope: o,
        baseId: xe(),
        value: m,
        onValueChange: g,
        orientation: c,
        dir: p,
        activationMode: u,
        children: /* @__PURE__ */ d(
          H.div,
          {
            dir: p,
            "data-orientation": c,
            ...f,
            ref: n
          }
        )
      }
    );
  }, "Tabs")
), ah = "TabsList", lh = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ $t(function(t, n) {
    const { __scopeTabs: o, loop: r = !0, ...s } = t, i = Rr(ah, o), c = vc(o);
    return /* @__PURE__ */ d(
      zi,
      {
        asChild: !0,
        ...c,
        orientation: i.orientation,
        dir: i.dir,
        loop: r,
        children: /* @__PURE__ */ d(
          H.div,
          {
            role: "tablist",
            "aria-orientation": i.orientation,
            ...s,
            ref: n
          }
        )
      }
    );
  }, "TabsList")
), uh = "TabsTrigger", dh = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ $t(function(t, n) {
    const { __scopeTabs: o, value: r, disabled: s = !1, ...i } = t, c = Rr(uh, o), l = vc(o), u = kr(c.baseId, r), f = Ir(c.baseId, r), p = r === c.value;
    return /* @__PURE__ */ d(
      Gi,
      {
        asChild: !0,
        ...l,
        focusable: !s,
        active: p,
        children: /* @__PURE__ */ d(
          H.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": p,
            "aria-controls": f,
            "data-state": p ? "active" : "inactive",
            "data-disabled": s ? "" : void 0,
            disabled: s,
            id: u,
            ...i,
            ref: n,
            onMouseDown: I(t.onMouseDown, (m) => {
              !s && m.button === 0 && m.ctrlKey === !1 ? c.onValueChange(r) : m.preventDefault();
            }),
            onKeyDown: I(t.onKeyDown, (m) => {
              s || m.target !== m.currentTarget || [" ", "Enter"].includes(m.key) && c.onValueChange(r);
            }),
            onFocus: I(t.onFocus, () => {
              const m = c.activationMode !== "manual";
              !p && !s && m && c.onValueChange(r);
            })
          }
        )
      }
    );
  }, "TabsTrigger")
), fh = "TabsContent", ph = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ $t(function(t, n) {
    const { __scopeTabs: o, value: r, forceMount: s, children: i, ...c } = t, l = Rr(fh, o), u = kr(l.baseId, r), f = Ir(l.baseId, r), p = r === l.value, m = a.useRef(p);
    return a.useEffect(() => {
      const g = requestAnimationFrame(() => m.current = !1);
      return () => cancelAnimationFrame(g);
    }, []), /* @__PURE__ */ d(ke, { present: s || p, children: ({ present: g }) => /* @__PURE__ */ d(
      H.div,
      {
        "data-state": p ? "active" : "inactive",
        "data-orientation": l.orientation,
        role: "tabpanel",
        "aria-labelledby": u,
        hidden: !g,
        id: f,
        tabIndex: 0,
        ...c,
        ref: n,
        style: {
          ...t.style,
          animationDuration: m.current ? "0s" : void 0
        },
        children: g && i
      }
    ) });
  }, "TabsContent")
);
function kr(e, t) {
  return `${e}-trigger-${t}`;
}
$t(kr, "makeTriggerId");
function Ir(e, t) {
  return `${e}-content-${t}`;
}
$t(Ir, "makeContentId");
var mh = ch, hh = lh, vh = dh, gh = ph;
const wh = "wk-Tabs_root", bh = "wk-Tabs_list", yh = "wk-Tabs_trigger", Ch = "wk-Tabs_content", qn = {
  root: wh,
  list: bh,
  trigger: yh,
  content: Ch
};
function Xw({ className: e, ...t }) {
  return /* @__PURE__ */ d(mh, { className: F(qn.root, e), ...t });
}
function qw({ className: e, ...t }) {
  return /* @__PURE__ */ d(hh, { className: F(qn.list, e), ...t });
}
const Zw = Ee(
  function({ className: t, ...n }, o) {
    return /* @__PURE__ */ d(vh, { ref: o, className: F(qn.trigger, t), ...n });
  }
);
function Jw({ className: e, ...t }) {
  return /* @__PURE__ */ d(gh, { className: F(qn.content, e), ...t });
}
var Sh = Object.defineProperty, te = (e, t) => Sh(e, "name", { value: t, configurable: !0 }), gc = "ToastProvider", [Dr, wc, xh] = /* @__PURE__ */ tn("Toast"), [bc, Qw] = /* @__PURE__ */ me("Toast", [xh]), [Eh, Zn] = bc(gc), _h = /* @__PURE__ */ te((e) => {
  const {
    __scopeToast: t,
    label: n = "Notification",
    duration: o = 5e3,
    swipeDirection: r = "right",
    swipeThreshold: s = 50,
    announcerContainer: i,
    children: c
  } = e, [l, u] = a.useState(null), [f, p] = a.useState(0), m = a.useRef(!1);
  return n.trim() || console.error(
    `Invalid prop \`label\` supplied to \`${gc}\`. Expected non-empty \`string\`.`
  ), /* @__PURE__ */ d(Dr.Provider, { scope: t, children: /* @__PURE__ */ d(
    Eh,
    {
      scope: t,
      label: n,
      duration: o,
      swipeDirection: r,
      swipeThreshold: s,
      toastCount: f,
      viewport: l,
      onViewportChange: u,
      onToastAdd: a.useCallback(() => p((g) => g + 1), []),
      onToastRemove: a.useCallback(() => p((g) => g - 1), []),
      isClosePausedRef: m,
      announcerContainer: i,
      children: c
    }
  ) });
}, "ToastProvider"), Th = "ToastViewport", Ph = ["F8"], Vo = "toast.viewportPause", Ho = "toast.viewportResume", Rh = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ te(function(t, n) {
    const {
      __scopeToast: o,
      hotkey: r = Ph,
      label: s = "Notifications ({hotkey})",
      ...i
    } = t, c = Zn(Th, o), l = wc(o), u = a.useRef(null), f = a.useRef(null), p = a.useRef(null), m = a.useRef(null), g = K(n, m, c.onViewportChange), w = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), h = c.toastCount > 0;
    a.useEffect(() => {
      const b = /* @__PURE__ */ te((S) => {
        var C;
        r.length !== 0 && r.every((x) => S[x] || S.code === x) && ((C = m.current) == null || C.focus());
      }, "handleKeyDown");
      return document.addEventListener("keydown", b), () => document.removeEventListener("keydown", b);
    }, [r]), a.useEffect(() => {
      const b = u.current, S = m.current;
      if (h && b && S) {
        const y = /* @__PURE__ */ te(() => {
          if (!c.isClosePausedRef.current) {
            const _ = new CustomEvent(Vo);
            S.dispatchEvent(_), c.isClosePausedRef.current = !0;
          }
        }, "handlePause"), C = /* @__PURE__ */ te(() => {
          if (c.isClosePausedRef.current) {
            const _ = new CustomEvent(Ho);
            S.dispatchEvent(_), c.isClosePausedRef.current = !1;
          }
        }, "handleResume"), x = /* @__PURE__ */ te((_) => {
          !b.contains(_.relatedTarget) && C();
        }, "handleFocusOutResume"), E = /* @__PURE__ */ te(() => {
          b.contains(document.activeElement) || C();
        }, "handlePointerLeaveResume");
        return b.addEventListener("focusin", y), b.addEventListener("focusout", x), b.addEventListener("pointermove", y), b.addEventListener("pointerleave", E), window.addEventListener("blur", y), window.addEventListener("focus", C), () => {
          b.removeEventListener("focusin", y), b.removeEventListener("focusout", x), b.removeEventListener("pointermove", y), b.removeEventListener("pointerleave", E), window.removeEventListener("blur", y), window.removeEventListener("focus", C);
        };
      }
    }, [h, c.isClosePausedRef]);
    const v = a.useCallback(
      ({ tabbingDirection: b }) => {
        const y = l().map((C) => {
          const x = C.ref.current, E = [x, ...Sc(x)];
          return b === "forwards" ? E : E.reverse();
        });
        return (b === "forwards" ? y.reverse() : y).flat();
      },
      [l]
    );
    return a.useEffect(() => {
      const b = m.current;
      if (b) {
        const S = /* @__PURE__ */ te((y) => {
          var E, _, R;
          const C = y.altKey || y.ctrlKey || y.metaKey;
          if (y.key === "Tab" && !C) {
            const P = document.activeElement, D = y.shiftKey;
            if (y.target === b && D) {
              (E = f.current) == null || E.focus();
              return;
            }
            const M = v({ tabbingDirection: D ? "backwards" : "forwards" }), L = M.findIndex((U) => U === P);
            _n(M.slice(L + 1)) ? y.preventDefault() : D ? (_ = f.current) == null || _.focus() : (R = p.current) == null || R.focus();
          }
        }, "handleKeyDown");
        return b.addEventListener("keydown", S), () => b.removeEventListener("keydown", S);
      }
    }, [l, v]), /* @__PURE__ */ O(
      Ma,
      {
        ref: u,
        role: "region",
        "aria-label": s.replace("{hotkey}", w),
        tabIndex: -1,
        style: { pointerEvents: h ? void 0 : "none" },
        children: [
          h && /* @__PURE__ */ d(
            ls,
            {
              ref: f,
              onFocusFromOutsideViewport: () => {
                const b = v({
                  tabbingDirection: "forwards"
                });
                _n(b);
              }
            }
          ),
          /* @__PURE__ */ d(Dr.Slot, { scope: o, children: /* @__PURE__ */ d(H.ol, { tabIndex: -1, ...i, ref: g }) }),
          h && /* @__PURE__ */ d(
            ls,
            {
              ref: p,
              onFocusFromOutsideViewport: () => {
                const b = v({
                  tabbingDirection: "backwards"
                });
                _n(b);
              }
            }
          )
        ]
      }
    );
  }, "ToastViewport")
), kh = "ToastFocusProxy", ls = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ te(function(t, n) {
    const { __scopeToast: o, onFocusFromOutsideViewport: r, ...s } = t, i = Zn(kh, o);
    return /* @__PURE__ */ d(
      cr,
      {
        tabIndex: 0,
        ...s,
        ref: n,
        style: { position: "fixed" },
        onFocus: (c) => {
          var f;
          const l = c.relatedTarget;
          !((f = i.viewport) != null && f.contains(l)) && r();
        }
      }
    );
  }, "ToastFocusProxy")
), Jn = "Toast", Ih = "toast.swipeStart", Dh = "toast.swipeMove", Oh = "toast.swipeCancel", Ah = "toast.swipeEnd", Mh = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ te(function(t, n) {
    const { forceMount: o, open: r, defaultOpen: s, onOpenChange: i, ...c } = t, [l, u] = Pe({
      prop: r,
      defaultProp: s ?? !0,
      onChange: i,
      caller: Jn
    });
    return /* @__PURE__ */ d(ke, { present: o || l, children: /* @__PURE__ */ d(
      Lh,
      {
        open: l,
        ...c,
        ref: n,
        onClose: () => u(!1),
        onPause: ue(t.onPause),
        onResume: ue(t.onResume),
        onSwipeStart: I(t.onSwipeStart, (f) => {
          f.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: I(t.onSwipeMove, (f) => {
          const { x: p, y: m } = f.detail.delta;
          f.currentTarget.setAttribute("data-swipe", "move"), f.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${p}px`), f.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${m}px`);
        }),
        onSwipeCancel: I(t.onSwipeCancel, (f) => {
          f.currentTarget.setAttribute("data-swipe", "cancel"), f.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), f.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), f.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), f.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: I(t.onSwipeEnd, (f) => {
          const { x: p, y: m } = f.detail.delta;
          f.currentTarget.setAttribute("data-swipe", "end"), f.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), f.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), f.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${p}px`), f.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${m}px`), u(!1);
        })
      }
    ) });
  }, "Toast")
), [Nh, $h] = bc(Jn, {
  onClose() {
  }
}), Lh = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ te(function(t, n) {
    const {
      __scopeToast: o,
      type: r = "foreground",
      duration: s,
      open: i,
      onClose: c,
      onEscapeKeyDown: l,
      onPause: u,
      onResume: f,
      onSwipeStart: p,
      onSwipeMove: m,
      onSwipeCancel: g,
      onSwipeEnd: w,
      ...h
    } = t, v = Zn(Jn, o), b = wc(o), [S, y] = a.useState(null), C = K(n, y), x = a.useRef(null), E = a.useRef(null), _ = s || v.duration, R = a.useRef(0), P = a.useRef(_), D = a.useRef(0), { onToastAdd: B, onToastRemove: A } = v, M = ue(() => {
      var N;
      (S == null ? void 0 : S.contains(document.activeElement)) && ((N = v.viewport) == null || N.focus()), c();
    }), L = a.useCallback(
      (T) => {
        !T || T === 1 / 0 || (window.clearTimeout(D.current), R.current = (/* @__PURE__ */ new Date()).getTime(), D.current = window.setTimeout(M, T));
      },
      [M]
    );
    a.useEffect(() => {
      const T = v.viewport;
      if (T) {
        const N = /* @__PURE__ */ te(() => {
          L(P.current), f == null || f();
        }, "handleResume"), $ = /* @__PURE__ */ te(() => {
          const W = (/* @__PURE__ */ new Date()).getTime() - R.current;
          P.current = P.current - W, window.clearTimeout(D.current), u == null || u();
        }, "handlePause");
        return T.addEventListener(Vo, $), T.addEventListener(Ho, N), () => {
          T.removeEventListener(Vo, $), T.removeEventListener(Ho, N);
        };
      }
    }, [v.viewport, _, u, f, L]), a.useEffect(() => {
      i && !v.isClosePausedRef.current && L(_);
    }, [i, _, v.isClosePausedRef, L]), a.useEffect(() => () => {
      window.clearTimeout(D.current);
    }, []), a.useEffect(() => (B(), () => A()), [B, A]);
    const U = a.useMemo(() => S ? Or(S) : null, [S]);
    return v.viewport ? /* @__PURE__ */ O(qe, { children: [
      U && /* @__PURE__ */ d(
        Fh,
        {
          __scopeToast: o,
          role: "status",
          "aria-live": r === "foreground" ? "assertive" : "polite",
          children: U
        }
      ),
      /* @__PURE__ */ d(Nh, { scope: o, onClose: M, children: Dt.createPortal(
        /* @__PURE__ */ d(Dr.ItemSlot, { scope: o, children: /* @__PURE__ */ d(
          Aa,
          {
            asChild: !0,
            onEscapeKeyDown: I(l, (T) => {
              b().some(
                ($) => {
                  var W;
                  return (W = $.ref.current) == null ? void 0 : W.contains(T.target);
                }
              ) || M();
            }),
            children: /* @__PURE__ */ d(
              H.li,
              {
                tabIndex: 0,
                "data-state": i ? "open" : "closed",
                "data-swipe-direction": v.swipeDirection,
                ...h,
                ref: C,
                style: { userSelect: "none", touchAction: "none", ...t.style },
                onKeyDown: I(t.onKeyDown, (T) => {
                  T.key === "Escape" && (l == null || l(T.nativeEvent), T.nativeEvent.defaultPrevented || M());
                }),
                onPointerDown: I(t.onPointerDown, (T) => {
                  T.button === 0 && (x.current = { x: T.clientX, y: T.clientY });
                }),
                onPointerMove: I(t.onPointerMove, (T) => {
                  if (!x.current) return;
                  const N = T.clientX - x.current.x, $ = T.clientY - x.current.y, W = !!E.current, k = ["left", "right"].includes(v.swipeDirection), Z = ["left", "up"].includes(v.swipeDirection) ? Math.min : Math.max, G = k ? Z(0, N) : 0, Q = k ? 0 : Z(0, $), ae = T.pointerType === "touch" ? 10 : 2, ce = { x: G, y: Q }, we = { originalEvent: T, delta: ce };
                  W ? (E.current = ce, zt(Dh, m, we, {
                    discrete: !1
                  })) : us(ce, v.swipeDirection, ae) ? (E.current = ce, zt(Ih, p, we, {
                    discrete: !1
                  }), T.target.setPointerCapture(T.pointerId)) : (Math.abs(N) > ae || Math.abs($) > ae) && (x.current = null);
                }),
                onPointerUp: I(t.onPointerUp, (T) => {
                  const N = E.current, $ = T.target;
                  if ($.hasPointerCapture(T.pointerId) && $.releasePointerCapture(T.pointerId), E.current = null, x.current = null, N) {
                    const W = T.currentTarget, k = { originalEvent: T, delta: N };
                    us(N, v.swipeDirection, v.swipeThreshold) ? zt(Ah, w, k, {
                      discrete: !0
                    }) : zt(
                      Oh,
                      g,
                      k,
                      {
                        discrete: !0
                      }
                    ), W.addEventListener("click", (Z) => Z.preventDefault(), {
                      once: !0
                    });
                  }
                })
              }
            )
          }
        ) }),
        v.viewport
      ) })
    ] }) : null;
  }, "ToastImpl")
), Fh = /* @__PURE__ */ te((e) => {
  const { __scopeToast: t, children: n, ...o } = e, r = Zn(Jn, t), [s, i] = a.useState(!1), [c, l] = a.useState(!1);
  return yc(() => i(!0)), a.useEffect(() => {
    const u = window.setTimeout(() => l(!0), 1e3);
    return () => window.clearTimeout(u);
  }, []), c ? null : /* @__PURE__ */ d(sn, { asChild: !0, container: r.announcerContainer || void 0, children: /* @__PURE__ */ d(cr, { ...o, children: s && /* @__PURE__ */ O(qe, { children: [
    r.label,
    " ",
    n
  ] }) }) });
}, "ToastAnnounce"), Bh = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ te(function(t, n) {
    const { __scopeToast: o, ...r } = t;
    return /* @__PURE__ */ d(H.div, { ...r, ref: n });
  }, "ToastTitle")
), Vh = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ te(function(t, n) {
    const { __scopeToast: o, ...r } = t;
    return /* @__PURE__ */ d(H.div, { ...r, ref: n });
  }, "ToastDescription")
), Hh = "ToastClose", Wh = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ te(function(t, n) {
    const { __scopeToast: o, ...r } = t, s = $h(Hh, o);
    return /* @__PURE__ */ d(Uh, { asChild: !0, children: /* @__PURE__ */ d(
      H.button,
      {
        type: "button",
        ...r,
        ref: n,
        onClick: I(t.onClick, s.onClose)
      }
    ) });
  }, "ToastClose")
), Uh = /* @__PURE__ */ a.forwardRef(/* @__PURE__ */ te(function(t, n) {
  const { __scopeToast: o, altText: r, ...s } = t;
  return /* @__PURE__ */ d(
    H.div,
    {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": r || void 0,
      ...s,
      ref: n
    }
  );
}, "ToastAnnounceExclude"));
function Or(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((o) => {
    if (o.nodeType === o.TEXT_NODE && o.textContent && t.push(o.textContent), Cc(o)) {
      const r = o.ariaHidden || o.hidden || o.style.display === "none", s = o.dataset.radixToastAnnounceExclude === "";
      if (!r)
        if (s) {
          const i = o.dataset.radixToastAnnounceAlt;
          i && t.push(i);
        } else
          t.push(...Or(o));
    }
  }), t;
}
te(Or, "getAnnounceTextContent");
function zt(e, t, n, { discrete: o }) {
  const r = n.originalEvent.currentTarget, s = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && r.addEventListener(e, t, { once: !0 }), o ? On(r, s) : r.dispatchEvent(s);
}
te(zt, "handleAndDispatchCustomEvent");
var us = /* @__PURE__ */ te((e, t, n = 0) => {
  const o = Math.abs(e.x), r = Math.abs(e.y), s = o > r;
  return t === "left" || t === "right" ? s && o > n : !s && r > n;
}, "isDeltaInDirection");
function yc(e = () => {
}) {
  const t = ue(e);
  oe(() => {
    let n = 0, o = 0;
    return n = window.requestAnimationFrame(() => o = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(n), window.cancelAnimationFrame(o);
    };
  }, [t]);
}
te(yc, "useNextFrame");
function Cc(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
te(Cc, "isHTMLElement");
function Sc(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: /* @__PURE__ */ te((o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }, "acceptNode")
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
te(Sc, "getTabbableCandidates");
function _n(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
te(_n, "focusFirst");
var Kh = _h, jh = Rh, zh = Mh, Gh = Bh, Yh = Vh, Xh = Wh;
const qh = "wk-Toast_viewport", Zh = "wk-Toast_root", Jh = "wk-Toast_body", Qh = "wk-Toast_title", ev = "wk-Toast_description", tv = "wk-Toast_close", Et = {
  viewport: qh,
  root: Zh,
  body: Jh,
  title: Qh,
  description: ev,
  close: tv
}, xc = en(null);
function eb({ children: e, swipeDirection: t = "right" }) {
  const [n, o] = Te([]), r = dt(1), s = ut((l) => {
    o((u) => u.filter((f) => f.id !== l));
  }, []), i = ut((l) => {
    const u = r.current++;
    o((f) => [...f, { ...l, id: u }]);
  }, []), c = kt(() => ({ toast: i, dismiss: s }), [i, s]);
  return /* @__PURE__ */ d(xc.Provider, { value: c, children: /* @__PURE__ */ O(Kh, { swipeDirection: t, children: [
    e,
    n.map((l) => /* @__PURE__ */ O(
      zh,
      {
        className: Et.root,
        "data-tone": l.tone ?? "neutral",
        duration: l.duration ?? (l.tone === "danger" ? 1 / 0 : 5e3),
        type: l.tone === "danger" ? "foreground" : "background",
        onOpenChange: (u) => {
          u || s(l.id);
        },
        children: [
          /* @__PURE__ */ O("div", { className: Et.body, children: [
            /* @__PURE__ */ d(Gh, { className: Et.title, children: l.title }),
            l.description && /* @__PURE__ */ d(Yh, { className: Et.description, children: l.description })
          ] }),
          /* @__PURE__ */ d(Xh, { className: Et.close, "aria-label": "Dismiss", children: /* @__PURE__ */ d(Dn, {}) })
        ]
      },
      l.id
    )),
    /* @__PURE__ */ d(jh, { className: Et.viewport })
  ] }) });
}
function tb() {
  const e = Qt(xc);
  if (!e) throw new Error("useToast must be used inside <ToastProvider>");
  return e;
}
const nv = "wk-Textarea_root", ov = "wk-Textarea_mono", rv = "wk-Textarea_noResize", po = {
  root: nv,
  mono: ov,
  noResize: rv
}, nb = Ee(function({ invalid: t, mono: n = !1, resizable: o = !0, className: r, id: s, rows: i = 4, ...c }, l) {
  const u = jo(), f = t ?? (u == null ? void 0 : u.invalid) ?? !1;
  return /* @__PURE__ */ d(
    "textarea",
    {
      ref: l,
      id: s ?? (u == null ? void 0 : u.inputId),
      rows: i,
      "aria-invalid": f || void 0,
      "aria-describedby": u == null ? void 0 : u.describedBy,
      className: F(po.root, n && po.mono, !o && po.noResize, r),
      ...c
    }
  );
}), sv = "wk-Combobox_wrap", iv = "wk-Combobox_list", cv = "wk-Combobox_option", av = "wk-Combobox_label", lv = "wk-Combobox_mono", uv = "wk-Combobox_hint", dv = "wk-Combobox_empty", lt = {
  wrap: sv,
  list: iv,
  option: cv,
  label: av,
  mono: lv,
  hint: uv,
  empty: dv
}, fv = (e) => e.value ?? e.label;
function ob({
  value: e,
  onValueChange: t,
  suggestions: n,
  onEnter: o,
  emptyMessage: r,
  mono: s,
  className: i,
  onKeyDown: c,
  onBlur: l,
  ...u
}) {
  const f = rt(), [p, m] = Te(!1), [g, w] = Te(-1), h = dt(null), v = kt(() => p ? n(e) : [], [p, n, e]), b = p && (v.length > 0 || !!r), S = g >= 0 && v[g] ? `${f}-${g}` : void 0, y = (C) => {
    const x = v[C];
    x && (t(fv(x)), m(!1), w(-1));
  };
  return /* @__PURE__ */ O("div", { className: lt.wrap, children: [
    /* @__PURE__ */ d(
      bo,
      {
        role: "combobox",
        "aria-expanded": b,
        "aria-controls": b ? f : void 0,
        "aria-activedescendant": S,
        "aria-autocomplete": "list",
        autoComplete: "off",
        value: e,
        mono: s,
        className: i,
        onChange: (C) => {
          t(C.target.value), m(!0), w(-1);
        },
        onFocus: () => m(!0),
        onBlur: (C) => {
          h.current = setTimeout(() => m(!1), 120), l == null || l(C);
        },
        onKeyDown: (C) => {
          c == null || c(C), !C.defaultPrevented && (C.key === "ArrowDown" && v.length ? (C.preventDefault(), m(!0), w((x) => (x + 1) % v.length)) : C.key === "ArrowUp" && v.length ? (C.preventDefault(), w((x) => x <= 0 ? v.length - 1 : x - 1)) : C.key === "Enter" ? g >= 0 ? (C.preventDefault(), y(g)) : o == null || o() : C.key === "Tab" && g >= 0 ? (C.preventDefault(), y(g)) : C.key === "Escape" && b && (C.preventDefault(), m(!1), w(-1)));
        },
        ...u
      }
    ),
    b && /* @__PURE__ */ d("ul", { className: lt.list, id: f, role: "listbox", children: v.length === 0 ? /* @__PURE__ */ d("li", { className: lt.empty, children: r }) : v.map((C, x) => /* @__PURE__ */ O(
      "li",
      {
        id: `${f}-${x}`,
        role: "option",
        "aria-selected": x === g,
        "data-active": x === g,
        className: lt.option,
        onMouseEnter: () => w(x),
        onMouseDown: (E) => {
          E.preventDefault(), h.current && clearTimeout(h.current), y(x);
        },
        children: [
          /* @__PURE__ */ d("span", { className: F(lt.label, s && lt.mono), children: C.label }),
          C.hint && /* @__PURE__ */ d("span", { className: lt.hint, children: C.hint })
        ]
      },
      `${C.label}-${x}`
    )) })
  ] });
}
const pv = "wk-SegmentedControl_root", mv = "wk-SegmentedControl_option", hv = "wk-SegmentedControl_fluid", mo = {
  root: pv,
  option: mv,
  fluid: hv
};
function rb({
  options: e,
  value: t,
  onValueChange: n,
  fluid: o = !1,
  className: r,
  ...s
}) {
  const i = rt(), c = dt(null), l = ut(
    (u) => {
      var g, w;
      const f = e.filter((h) => !h.disabled);
      if (!f.length) return;
      const p = f.findIndex((h) => h.value === t), m = f[(p + u + f.length) % f.length];
      n(m.value), (w = (g = c.current) == null ? void 0 : g.querySelector(`[data-value="${CSS.escape(m.value)}"]`)) == null || w.focus();
    },
    [e, t, n]
  );
  return /* @__PURE__ */ d(
    "div",
    {
      ref: c,
      role: "radiogroup",
      className: F(mo.root, o && mo.fluid, r),
      onKeyDown: (u) => {
        (u.key === "ArrowRight" || u.key === "ArrowDown") && (u.preventDefault(), l(1)), (u.key === "ArrowLeft" || u.key === "ArrowUp") && (u.preventDefault(), l(-1));
      },
      ...s,
      children: e.map((u) => {
        const f = u.value === t;
        return /* @__PURE__ */ d(
          "button",
          {
            type: "button",
            role: "radio",
            id: `${i}-${u.value}`,
            "data-value": u.value,
            "aria-checked": f,
            "data-disabled": u.disabled || void 0,
            disabled: u.disabled,
            tabIndex: f ? 0 : -1,
            className: mo.option,
            onClick: () => !u.disabled && n(u.value),
            children: u.label
          },
          u.value
        );
      })
    }
  );
}
const vv = "wk-Alert_root", gv = "wk-Alert_info", wv = "wk-Alert_success", bv = "wk-Alert_warn", yv = "wk-Alert_danger", Cv = "wk-Alert_icon", Sv = "wk-Alert_title", xv = "wk-Alert_body", Ev = "wk-Alert_actions", _v = "wk-Alert_close", Tv = "wk-Alert_banner", Qe = {
  root: vv,
  info: gv,
  success: wv,
  warn: bv,
  danger: yv,
  icon: Cv,
  title: Sv,
  body: xv,
  actions: Ev,
  close: _v,
  banner: Tv
};
function sb({
  tone: e = "info",
  title: t,
  children: n,
  icon: o,
  action: r,
  onDismiss: s,
  banner: i = !1,
  className: c
}) {
  return /* @__PURE__ */ O(
    "div",
    {
      role: e === "danger" ? "alert" : "status",
      className: F(Qe.root, Qe[e], i && Qe.banner, c),
      children: [
        o && /* @__PURE__ */ d("span", { className: Qe.icon, "aria-hidden": "true", children: o }),
        /* @__PURE__ */ O("div", { className: Qe.body, children: [
          t && /* @__PURE__ */ d("span", { className: Qe.title, children: t }),
          n,
          r && /* @__PURE__ */ d("div", { className: Qe.actions, children: r })
        ] }),
        s && /* @__PURE__ */ d("button", { type: "button", className: Qe.close, onClick: s, "aria-label": "Dismiss", children: /* @__PURE__ */ d(Dn, {}) })
      ]
    }
  );
}
const Pv = "wk-EmptyState_root", Rv = "wk-EmptyState_icon", kv = "wk-EmptyState_title", Iv = "wk-EmptyState_description", Dv = "wk-EmptyState_actions", Ht = {
  root: Pv,
  icon: Rv,
  title: kv,
  description: Iv,
  actions: Dv
};
function ib({ icon: e, title: t, description: n, action: o, className: r }) {
  return /* @__PURE__ */ O("div", { className: F(Ht.root, r), children: [
    e && /* @__PURE__ */ d("span", { className: Ht.icon, "aria-hidden": "true", children: e }),
    /* @__PURE__ */ d("p", { className: Ht.title, children: t }),
    n && /* @__PURE__ */ d("p", { className: Ht.description, children: n }),
    o && /* @__PURE__ */ d("div", { className: Ht.actions, children: o })
  ] });
}
const Ov = "wk-Spinner_root", Av = "wk-Spinner_sm", Mv = "wk-Spinner_md", Nv = "wk-Spinner_lg", ds = {
  root: Ov,
  "wk-spinner-rotate": "wk-Spinner_wk-spinner-rotate",
  sm: Av,
  md: Mv,
  lg: Nv
};
function cb({ size: e = "md", label: t = "Loading", className: n }) {
  return /* @__PURE__ */ O("span", { role: "status", children: [
    /* @__PURE__ */ d("span", { className: F(ds.root, ds[e], n), "aria-hidden": "true" }),
    t && /* @__PURE__ */ d(jn, { children: t })
  ] });
}
const $v = "wk-Kbd_root", Lv = "wk-Kbd_group", ho = {
  root: $v,
  group: Lv
};
function ab({ keys: e, className: t, children: n, ...o }) {
  return e != null && e.length ? /* @__PURE__ */ d("span", { className: ho.group, ...o, children: e.map((r, s) => /* @__PURE__ */ d(Wo, { children: /* @__PURE__ */ d("kbd", { className: F(ho.root, t), children: r }) }, `${r}-${s}`)) }) : /* @__PURE__ */ d("kbd", { className: F(ho.root, t), ...o, children: n });
}
const Fv = "wk-SplitPane_root", Bv = "wk-SplitPane_horizontal", Vv = "wk-SplitPane_vertical", Hv = "wk-SplitPane_pane", Wv = "wk-SplitPane_handle", Wt = {
  root: Fv,
  horizontal: Bv,
  vertical: Vv,
  pane: Hv,
  handle: Wv
};
function lb({
  children: e,
  direction: t = "horizontal",
  size: n,
  onSizeChange: o,
  min: r = 120,
  max: s = Number.POSITIVE_INFINITY,
  defaultSize: i,
  className: c,
  "aria-label": l = "Resize panes"
}) {
  const u = dt(null), [f, p] = Te(!1), m = t === "horizontal", g = ut(
    (h) => {
      var S;
      const v = (S = u.current) == null ? void 0 : S.getBoundingClientRect(), b = v ? (m ? v.width : v.height) - r : s;
      return Math.max(r, Math.min(h, Math.min(s, b)));
    },
    [r, s, m]
  ), w = (h) => o(g(n + h));
  return /* @__PURE__ */ O("div", { ref: u, className: F(Wt.root, Wt[t], c), children: [
    /* @__PURE__ */ d("div", { className: Wt.pane, style: { [m ? "width" : "height"]: n, flex: "none" }, children: e[0] }),
    /* @__PURE__ */ d(
      "div",
      {
        role: "separator",
        tabIndex: 0,
        "aria-label": l,
        "aria-orientation": m ? "vertical" : "horizontal",
        "aria-valuenow": Math.round(n),
        "aria-valuemin": r,
        "aria-valuemax": Number.isFinite(s) ? s : void 0,
        "data-dragging": f || void 0,
        className: Wt.handle,
        onDoubleClick: () => i !== void 0 && o(i),
        onPointerDown: (h) => {
          h.currentTarget.setPointerCapture(h.pointerId), p(!0);
        },
        onPointerMove: (h) => {
          var b;
          if (!f) return;
          const v = (b = u.current) == null ? void 0 : b.getBoundingClientRect();
          v && o(g(m ? h.clientX - v.left : h.clientY - v.top));
        },
        onPointerUp: (h) => {
          h.currentTarget.releasePointerCapture(h.pointerId), p(!1);
        },
        onKeyDown: (h) => {
          const v = h.shiftKey ? 40 : 10;
          h.key === (m ? "ArrowLeft" : "ArrowUp") && (h.preventDefault(), w(-v)), h.key === (m ? "ArrowRight" : "ArrowDown") && (h.preventDefault(), w(v)), h.key === "Home" && i !== void 0 && (h.preventDefault(), o(i));
        }
      }
    ),
    /* @__PURE__ */ d("div", { className: F(Wt.pane), style: { flex: 1 }, children: e[1] })
  ] });
}
const Uv = "wk-Tree_root", Kv = "wk-Tree_item", jv = "wk-Tree_twisty", zv = "wk-Tree_spacer", Gv = "wk-Tree_label", Gt = {
  root: Uv,
  item: Kv,
  twisty: jv,
  spacer: zv,
  label: Gv
}, Ec = en(null);
function ub({ children: e, onActivate: t, onToggle: n, className: o, ...r }) {
  const s = dt(null), [i, c] = Te(null), l = dt([]);
  l.current = [];
  const u = ut((g) => {
    l.current.push(g);
  }, []), f = (g) => {
    var w, h;
    c(g), (h = (w = s.current) == null ? void 0 : w.querySelector(`[data-tree-id="${CSS.escape(g)}"]`)) == null || h.focus();
  }, p = (g) => {
    var S;
    const w = l.current;
    if (!w.length) return;
    const h = i ? w.indexOf(i) : -1, v = i ? (S = s.current) == null ? void 0 : S.querySelector(`[data-tree-id="${CSS.escape(i)}"]`) : null, b = v == null ? void 0 : v.getAttribute("aria-expanded");
    switch (g.key) {
      case "ArrowDown":
        g.preventDefault(), f(w[Math.min(h + 1, w.length - 1)]);
        break;
      case "ArrowUp":
        g.preventDefault(), f(w[Math.max(h - 1, 0)]);
        break;
      case "Home":
        g.preventDefault(), f(w[0]);
        break;
      case "End":
        g.preventDefault(), f(w[w.length - 1]);
        break;
      case "ArrowRight":
        b === "false" && i ? (g.preventDefault(), n == null || n(i, !0)) : b === "true" && (g.preventDefault(), f(w[Math.min(h + 1, w.length - 1)]));
        break;
      case "ArrowLeft":
        b === "true" && i ? (g.preventDefault(), n == null || n(i, !1)) : h > 0 && (g.preventDefault(), f(w[h - 1]));
        break;
      case "Enter":
      case " ":
        i && (g.preventDefault(), t == null || t(i));
        break;
    }
  }, m = kt(
    () => ({ activeId: i, setActiveId: c, register: u }),
    [i, u]
  );
  return /* @__PURE__ */ d(Ec.Provider, { value: m, children: /* @__PURE__ */ d(
    "div",
    {
      ref: s,
      role: "tree",
      className: F(Gt.root, o),
      onKeyDown: p,
      ...r,
      children: e
    }
  ) });
}
function db({
  id: e,
  level: t,
  children: n,
  hasChildren: o = !1,
  expanded: r,
  selected: s = !1,
  icon: i,
  endSlot: c,
  onSelect: l,
  onToggle: u,
  posInSet: f,
  setSize: p,
  indent: m = 14,
  className: g
}) {
  const w = Qt(Ec);
  if (!w) throw new Error("TreeItem must be used inside <Tree>");
  w.register(e);
  const h = w.activeId === e || w.activeId === null && t === 1 && f === 1;
  return /* @__PURE__ */ O(
    "div",
    {
      role: "treeitem",
      "data-tree-id": e,
      "aria-level": t,
      "aria-expanded": o ? !!r : void 0,
      "aria-selected": s,
      "aria-posinset": f,
      "aria-setsize": p,
      tabIndex: h ? 0 : -1,
      className: F(Gt.item, g),
      style: { paddingInlineStart: (t - 1) * m + 4 },
      onFocus: () => w.setActiveId(e),
      onClick: () => {
        w.setActiveId(e), l == null || l(e);
      },
      children: [
        o ? /* @__PURE__ */ d(
          "span",
          {
            className: Gt.twisty,
            "data-expanded": !!r,
            onClick: (v) => {
              v.stopPropagation(), u == null || u(e, !r);
            },
            children: /* @__PURE__ */ d(ps, {})
          }
        ) : /* @__PURE__ */ d("span", { className: Gt.spacer }),
        i,
        /* @__PURE__ */ d("span", { className: Gt.label, children: n }),
        c
      ]
    }
  );
}
const Yv = "wk-CommandPalette_overlay", Xv = "wk-CommandPalette_content", qv = "wk-CommandPalette_search", Zv = "wk-CommandPalette_searchIcon", Jv = "wk-CommandPalette_input", Qv = "wk-CommandPalette_list", eg = "wk-CommandPalette_group", tg = "wk-CommandPalette_heading", ng = "wk-CommandPalette_item", og = "wk-CommandPalette_itemIcon", rg = "wk-CommandPalette_itemLabel", sg = "wk-CommandPalette_itemHint", ig = "wk-CommandPalette_empty", cg = "wk-CommandPalette_footer", fe = {
  overlay: Yv,
  content: Xv,
  search: qv,
  searchIcon: Zv,
  input: Jv,
  list: Qv,
  group: eg,
  heading: tg,
  item: ng,
  itemIcon: og,
  itemLabel: rg,
  itemHint: sg,
  empty: ig,
  footer: cg
}, _c = en(null);
function fb({
  open: e,
  onOpenChange: t,
  query: n,
  onQueryChange: o,
  children: r,
  placeholder: s = "Type a command or search…",
  title: i = "Command palette",
  footer: c,
  className: l
}) {
  const u = rt(), [f, p] = Te(0), m = dt([]);
  m.current = [];
  const g = kt(
    () => (b, S) => {
      m.current.push({ id: b, run: S });
    },
    []
  );
  jt(() => p(0), [n]);
  const w = m.current.length, h = m.current[f], v = kt(
    () => ({ activeId: (h == null ? void 0 : h.id) ?? null, register: g, listId: u }),
    [h == null ? void 0 : h.id, g, u]
  );
  return /* @__PURE__ */ d(Ii, { open: e, onOpenChange: t, children: /* @__PURE__ */ O(Ai, { children: [
    /* @__PURE__ */ d(Mi, { className: fe.overlay }),
    /* @__PURE__ */ O(Ni, { className: F(fe.content, l), children: [
      /* @__PURE__ */ d(Mo, { asChild: !0, children: /* @__PURE__ */ d(jn, { children: i }) }),
      /* @__PURE__ */ O(_c.Provider, { value: v, children: [
        /* @__PURE__ */ O("div", { className: fe.search, children: [
          /* @__PURE__ */ d("span", { className: fe.searchIcon, "aria-hidden": "true", children: "⌕" }),
          /* @__PURE__ */ d(
            "input",
            {
              className: fe.input,
              value: n,
              onChange: (b) => o(b.target.value),
              placeholder: s,
              role: "combobox",
              "aria-expanded": !0,
              "aria-controls": u,
              "aria-activedescendant": h ? `${u}-${h.id}` : void 0,
              "aria-autocomplete": "list",
              autoComplete: "off",
              autoFocus: !0,
              onKeyDown: (b) => {
                b.key === "ArrowDown" && w ? (b.preventDefault(), p((S) => (S + 1) % w)) : b.key === "ArrowUp" && w ? (b.preventDefault(), p((S) => S <= 0 ? w - 1 : S - 1)) : b.key === "Enter" && h && (b.preventDefault(), h.run());
              }
            }
          )
        ] }),
        /* @__PURE__ */ d("ul", { className: fe.list, id: u, role: "listbox", "aria-label": i, children: r }),
        c && /* @__PURE__ */ d("div", { className: fe.footer, children: c })
      ] })
    ] })
  ] }) });
}
function pb({ heading: e, children: t }) {
  return /* @__PURE__ */ O("li", { className: fe.group, children: [
    e && /* @__PURE__ */ d("div", { className: fe.heading, children: e }),
    /* @__PURE__ */ d("ul", { role: "group", style: { listStyle: "none", margin: 0, padding: 0 }, children: t })
  ] });
}
function mb({ id: e, children: t, onSelect: n, icon: o, hint: r }) {
  const s = Qt(_c);
  if (!s) throw new Error("CommandItem must be used inside <CommandPalette>");
  s.register(e, n);
  const i = s.activeId === e;
  return /* @__PURE__ */ O(
    "li",
    {
      id: `${s.listId}-${e}`,
      role: "option",
      "aria-selected": i,
      "data-active": i,
      className: fe.item,
      onMouseDown: (c) => {
        c.preventDefault(), n();
      },
      children: [
        o && /* @__PURE__ */ d("span", { className: fe.itemIcon, children: o }),
        /* @__PURE__ */ d("span", { className: fe.itemLabel, children: t }),
        r && /* @__PURE__ */ d("span", { className: fe.itemHint, children: r })
      ]
    }
  );
}
function hb({ children: e }) {
  return /* @__PURE__ */ d("li", { className: fe.empty, children: e });
}
const ag = "wk-KeyValueEditor_root", lg = "wk-KeyValueEditor_head", ug = "wk-KeyValueEditor_row", dg = "wk-KeyValueEditor_cell", fg = "wk-KeyValueEditor_actions", pg = "wk-KeyValueEditor_remove", mg = "wk-KeyValueEditor_footer", hg = "wk-KeyValueEditor_empty", Ne = {
  root: ag,
  head: lg,
  row: ug,
  cell: dg,
  actions: fg,
  remove: pg,
  footer: mg,
  empty: hg
};
function vb({
  rows: e,
  onChange: t,
  keyLabel: n = "Key",
  valueLabel: o = "Value",
  keyPlaceholder: r,
  valuePlaceholder: s,
  onNewRowId: i,
  selectable: c = !0,
  addLabel: l = "Add row",
  emptyMessage: u = "Nothing here yet.",
  maskValues: f = !1,
  className: p
}) {
  const m = rt();
  let g = 0;
  const w = () => (i == null ? void 0 : i()) ?? `${m}-${e.length}-${g++}`, h = (v, b) => t(e.map((S) => S.id === v ? { ...S, ...b } : S));
  return /* @__PURE__ */ O("div", { className: F(Ne.root, p), children: [
    /* @__PURE__ */ O("div", { className: Ne.head, "aria-hidden": "true", children: [
      /* @__PURE__ */ d("span", { children: c ? "" : null }),
      /* @__PURE__ */ d("span", { children: n }),
      /* @__PURE__ */ d("span", { children: o }),
      /* @__PURE__ */ d("span", {})
    ] }),
    e.length === 0 && /* @__PURE__ */ d("p", { className: Ne.empty, children: u }),
    e.map((v, b) => {
      const S = v.enabled ?? !0;
      return /* @__PURE__ */ O("div", { className: Ne.row, "data-disabled": !S, children: [
        /* @__PURE__ */ d("span", { className: Ne.cell, children: c && /* @__PURE__ */ d(
          $f,
          {
            checked: S,
            onCheckedChange: (y) => h(v.id, { enabled: y === !0 }),
            "aria-label": `Enable ${v.key || `row ${b + 1}`}`
          }
        ) }),
        /* @__PURE__ */ d("span", { className: Ne.cell, children: /* @__PURE__ */ d(
          bo,
          {
            size: "sm",
            mono: !0,
            value: v.key,
            placeholder: r,
            "aria-label": `${n}, row ${b + 1}`,
            onChange: (y) => h(v.id, { key: y.target.value })
          }
        ) }),
        /* @__PURE__ */ d("span", { className: Ne.cell, children: /* @__PURE__ */ d(
          bo,
          {
            size: "sm",
            mono: !0,
            type: f ? "password" : "text",
            value: v.value,
            placeholder: s,
            "aria-label": `${o}, row ${b + 1}`,
            onChange: (y) => h(v.id, { value: y.target.value })
          }
        ) }),
        /* @__PURE__ */ d("span", { className: Ne.actions, children: /* @__PURE__ */ O(
          "button",
          {
            type: "button",
            className: Ne.remove,
            onClick: () => t(e.filter((y) => y.id !== v.id)),
            children: [
              /* @__PURE__ */ d(Dn, {}),
              /* @__PURE__ */ O(jn, { children: [
                "Remove ",
                v.key || `row ${b + 1}`
              ] })
            ]
          }
        ) })
      ] }, v.id);
    }),
    /* @__PURE__ */ d("div", { className: Ne.footer, children: /* @__PURE__ */ O(
      Xc,
      {
        size: "sm",
        variant: "ghost",
        onClick: () => t([...e, { id: w(), key: "", value: "", enabled: !0 }]),
        children: [
          "+ ",
          l
        ]
      }
    ) })
  ] });
}
const vg = "wk-CodeSurface_root", gg = "wk-CodeSurface_toolbar", wg = "wk-CodeSurface_body", bg = "wk-CodeSurface_pre", yg = "wk-CodeSurface_status", Yt = {
  root: vg,
  toolbar: gg,
  body: wg,
  pre: bg,
  status: yg
};
function gb({ children: e, toolbar: t, status: n, className: o }) {
  return /* @__PURE__ */ O("div", { className: F(Yt.root, o), children: [
    t && /* @__PURE__ */ d("div", { className: Yt.toolbar, children: t }),
    /* @__PURE__ */ d("div", { className: Yt.body, children: e }),
    n && /* @__PURE__ */ d("div", { className: Yt.status, children: n })
  ] });
}
function wb({ code: e, className: t, ...n }) {
  return /* @__PURE__ */ d("pre", { className: F(Yt.pre, t), tabIndex: 0, ...n, children: /* @__PURE__ */ d("code", { children: e }) });
}
const Cg = "wk-Form_section", Sg = "wk-Form_sectionTop", xg = "wk-Form_sectionHead", Eg = "wk-Form_sectionTitle", _g = "wk-Form_sectionDesc", Tg = "wk-Form_sectionBody", Pg = "wk-Form_row", Rg = "wk-Form_rowText", kg = "wk-Form_rowLabel", Ig = "wk-Form_rowDesc", Dg = "wk-Form_rowControl", Og = "wk-Form_stacked", Ce = {
  section: Cg,
  sectionTop: Sg,
  sectionHead: xg,
  sectionTitle: Eg,
  sectionDesc: _g,
  sectionBody: Tg,
  row: Pg,
  rowText: Rg,
  rowLabel: kg,
  rowDesc: Ig,
  rowControl: Dg,
  stacked: Og
};
function bb({ title: e, description: t, children: n, action: o, className: r }) {
  const s = rt();
  return /* @__PURE__ */ O("section", { className: F(Ce.section, r), "aria-labelledby": e ? s : void 0, children: [
    (e || o) && /* @__PURE__ */ O("div", { className: Ce.sectionTop, children: [
      /* @__PURE__ */ O("div", { className: Ce.sectionHead, children: [
        e && /* @__PURE__ */ d("h2", { className: Ce.sectionTitle, id: s, children: e }),
        t && /* @__PURE__ */ d("p", { className: Ce.sectionDesc, children: t })
      ] }),
      o
    ] }),
    /* @__PURE__ */ d("div", { className: Ce.sectionBody, children: n })
  ] });
}
function yb({ label: e, description: t, children: n, stacked: o, className: r }) {
  return /* @__PURE__ */ O("div", { className: F(Ce.row, o && Ce.stacked, r), children: [
    /* @__PURE__ */ O("div", { className: Ce.rowText, children: [
      /* @__PURE__ */ d("span", { className: Ce.rowLabel, children: e }),
      t && /* @__PURE__ */ d("p", { className: Ce.rowDesc, children: t })
    ] }),
    /* @__PURE__ */ d("div", { className: Ce.rowControl, children: n })
  ] });
}
const Ag = "wk-HighlightText_mark", Mg = {
  mark: Ag
};
function Cb({ text: e, query: t, className: n }) {
  const o = t.trim().toLowerCase();
  if (!o) return /* @__PURE__ */ d("span", { className: n, children: e });
  const r = e.toLowerCase(), s = [];
  let i = 0;
  for (; i < e.length; ) {
    const c = r.indexOf(o, i);
    if (c === -1) {
      s.push({ chunk: e.slice(i), hit: !1 });
      break;
    }
    c > i && s.push({ chunk: e.slice(i, c), hit: !1 }), s.push({ chunk: e.slice(c, c + o.length), hit: !0 }), i = c + o.length;
  }
  return /* @__PURE__ */ d("span", { className: n, children: s.map((c, l) => /* @__PURE__ */ d(Wo, { children: c.hit ? /* @__PURE__ */ d("mark", { className: Mg.mark, children: c.chunk }) : c.chunk }, l)) });
}
const Ng = "wk-SkipToContent_root", $g = {
  root: Ng
};
function Sb({
  targetId: e = "wk-main",
  children: t = "Skip to content",
  className: n
}) {
  return /* @__PURE__ */ d("a", { href: `#${e}`, className: F($g.root, n), children: t });
}
const Lg = "wk-Table_wrapper", Fg = "wk-Table_scroll", Bg = "wk-Table_root", Vg = "wk-Table_caption", Hg = "wk-Table_th", Wg = "wk-Table_td", Ug = "wk-Table_numeric", Kg = "wk-Table_captionHidden", jg = "wk-Table_row", zg = "wk-Table_interactive", Gg = "wk-Table_sticky", be = {
  wrapper: Lg,
  scroll: Fg,
  root: Bg,
  caption: Vg,
  th: Hg,
  td: Wg,
  numeric: Ug,
  captionHidden: Kg,
  row: jg,
  interactive: zg,
  sticky: Gg
};
function xb({
  caption: e,
  captionHidden: t,
  interactive: n,
  stickyHeader: o,
  maxBlockSize: r,
  className: s,
  children: i,
  ...c
}) {
  const l = r !== void 0;
  return /* @__PURE__ */ d(
    "div",
    {
      className: F(be.wrapper, l && be.scroll),
      style: l ? { "--wk-table-max-block": r } : void 0,
      children: /* @__PURE__ */ O(
        "table",
        {
          className: F(
            be.root,
            n && be.interactive,
            o && be.sticky,
            s
          ),
          ...c,
          children: [
            e && /* @__PURE__ */ d("caption", { className: F(be.caption, t && be.captionHidden), children: e }),
            i
          ]
        }
      )
    }
  );
}
const Eb = (e) => /* @__PURE__ */ d("thead", { ...e }), _b = (e) => /* @__PURE__ */ d("tbody", { ...e }), Tb = ({ selected: e, className: t, ...n }) => /* @__PURE__ */ d("tr", { "data-selected": e || void 0, className: F(be.row, t), ...n }), Pb = ({ numeric: e, scope: t = "col", className: n, ...o }) => /* @__PURE__ */ d("th", { scope: t, className: F(be.th, e && be.numeric, n), ...o }), Rb = ({ numeric: e, className: t, ...n }) => /* @__PURE__ */ d("td", { className: F(be.td, e && be.numeric, t), ...n }), Yg = "wk-Badge_root", Xg = "wk-Badge_neutral", qg = "wk-Badge_accent", Zg = "wk-Badge_danger", Jg = "wk-Badge_warn", Qg = "wk-Badge_success", ew = "wk-Badge_info", tw = "wk-Badge_mono", vo = {
  root: Yg,
  neutral: Xg,
  accent: qg,
  danger: Zg,
  warn: Jg,
  success: Qg,
  info: ew,
  mono: tw
};
function kb({ tone: e = "neutral", mono: t = !1, className: n, ...o }) {
  return /* @__PURE__ */ d("span", { className: F(vo.root, vo[e], t && vo.mono, n), ...o });
}
const nw = "wk-AppShell_root", ow = "wk-AppShell_titlebar", rw = "wk-AppShell_body", sw = "wk-AppShell_sidebar", iw = "wk-AppShell_main", Ut = {
  root: nw,
  titlebar: ow,
  body: rw,
  sidebar: sw,
  main: iw
};
function Ib({
  titlebar: e,
  draggable: t = !1,
  insetWindowControls: n = !1,
  sidebar: o,
  sidebarWidth: r,
  children: s,
  mainId: i = "wk-main",
  className: c
}) {
  return /* @__PURE__ */ O(
    "div",
    {
      className: F(Ut.root, c),
      style: r ? { "--wk-sidebar-w": r } : void 0,
      children: [
        e && /* @__PURE__ */ d(
          "header",
          {
            className: Ut.titlebar,
            "data-inset-controls": n || void 0,
            ...t ? { "data-tauri-drag-region": "" } : {},
            children: e
          }
        ),
        /* @__PURE__ */ O("div", { className: Ut.body, children: [
          o && /* @__PURE__ */ d("nav", { className: Ut.sidebar, "aria-label": "Primary", children: o }),
          /* @__PURE__ */ d("main", { id: i, className: Ut.main, tabIndex: -1, children: s })
        ] })
      ]
    }
  );
}
const cw = {
  1: "2xl",
  2: "xl",
  3: "lg",
  4: "md",
  5: "sm",
  6: "xs"
}, Tc = {
  xs: ye.xs,
  sm: ye.sm,
  md: ye.md,
  lg: ye.lg,
  xl: ye.xl,
  "2xl": ye.xxl
}, Db = Ee(function({ level: t, size: n, className: o, ...r }, s) {
  const i = `h${t}`, c = Tc[n ?? cw[t]];
  return /* @__PURE__ */ d(i, { ref: s, className: F(ye.heading, c, o), ...r });
}), Ob = Ee(function({ as: t = "p", size: n = "md", tone: o = "default", mono: r = !1, className: s, ...i }, c) {
  return /* @__PURE__ */ d(
    t,
    {
      ref: c,
      className: F(
        ye.text,
        Tc[n],
        o !== "default" && ye[o],
        r && ye.mono,
        s
      ),
      ...i
    }
  );
}), Ab = Ee(function({ external: t = !1, nofollow: n = !1, asChild: o = !1, className: r, rel: s, target: i, ...c }, l) {
  const u = o ? vs : "a", f = new Set((s ?? "").split(/\s+/).filter(Boolean));
  return t && (f.add("noopener"), f.add("noreferrer")), n && f.add("nofollow"), /* @__PURE__ */ d(
    u,
    {
      ref: l,
      className: F(ye.link, r),
      target: i ?? (t ? "_blank" : void 0),
      rel: f.size ? [...f].join(" ") : void 0,
      ...c
    }
  );
}), aw = "wk-Media_image", lw = "wk-Media_skeleton", Pc = {
  image: aw,
  skeleton: lw
}, Mb = Ee(function({ width: t, height: n, aspectRatio: o, priority: r = !1, className: s, style: i, alt: c, ...l }, u) {
  const f = o ?? (t && n ? `${t}/${n}` : void 0);
  return /* @__PURE__ */ d(
    "img",
    {
      ref: u,
      alt: c,
      width: t,
      height: n,
      loading: r ? "eager" : "lazy",
      decoding: r ? "sync" : "async",
      fetchPriority: r ? "high" : void 0,
      className: F(Pc.image, s),
      style: { ...f ? { "--wk-image-ar": String(f) } : null, ...i },
      ...l
    }
  );
});
function Nb({
  width: e = "100%",
  height: t = "1em",
  radius: n = "sm",
  className: o,
  style: r,
  ...s
}) {
  return /* @__PURE__ */ d(
    "span",
    {
      "aria-hidden": "true",
      className: F(Pc.skeleton, o),
      style: {
        width: e,
        height: t,
        borderRadius: `var(--wk-radius-${n})`,
        ...r
      },
      ...s
    }
  );
}
function uw({ data: e, nonce: t }) {
  const n = JSON.stringify(e).replace(/</g, "\\u003c");
  return /* @__PURE__ */ d("script", { type: "application/ld+json", nonce: t, dangerouslySetInnerHTML: { __html: n } });
}
const dw = "wk-Breadcrumbs_root", fw = "wk-Breadcrumbs_list", pw = "wk-Breadcrumbs_item", mw = "wk-Breadcrumbs_link", hw = "wk-Breadcrumbs_sep", Kt = {
  root: dw,
  list: fw,
  item: pw,
  link: mw,
  sep: hw
};
function $b({ items: e, origin: t, className: n }) {
  const o = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: e.map((r, s) => ({
      "@type": "ListItem",
      position: s + 1,
      name: r.label,
      ...r.href ? { item: t ? new URL(r.href, t).toString() : r.href } : {}
    }))
  };
  return /* @__PURE__ */ O(qe, { children: [
    /* @__PURE__ */ d("nav", { "aria-label": "Breadcrumb", className: F(Kt.root, n), children: /* @__PURE__ */ d("ol", { className: Kt.list, children: e.map((r, s) => {
      const i = s === e.length - 1;
      return /* @__PURE__ */ O(Wo, { children: [
        /* @__PURE__ */ d("li", { className: Kt.item, children: r.href && !i ? /* @__PURE__ */ d("a", { className: Kt.link, href: r.href, children: r.label }) : /* @__PURE__ */ d("span", { "aria-current": i ? "page" : void 0, children: r.label }) }),
        !i && /* @__PURE__ */ d("li", { className: Kt.sep, "aria-hidden": "true", children: "/" })
      ] }, `${r.label}-${s}`);
    }) }) }),
    /* @__PURE__ */ d(uw, { data: o })
  ] });
}
export {
  sb as Alert,
  Ib as AppShell,
  kb as Badge,
  $b as Breadcrumbs,
  Xc as Button,
  fs as CheckIcon,
  $f as Checkbox,
  ps as ChevronDownIcon,
  Dn as CloseIcon,
  wb as CodeBlock,
  gb as CodeSurface,
  ob as Combobox,
  hb as CommandEmpty,
  pb as CommandGroup,
  mb as CommandItem,
  fb as CommandPalette,
  Ow as Dialog,
  Aw as DialogClose,
  ib as EmptyState,
  Sw as Field,
  bb as FormSection,
  Db as Heading,
  Cb as HighlightText,
  Mb as Image,
  bo as Input,
  uw as JsonLd,
  ab as Kbd,
  vb as KeyValueEditor,
  Ab as Link,
  Hw as Menu,
  Ww as MenuItem,
  Uw as MenuLabel,
  Kw as MenuSeparator,
  rb as SegmentedControl,
  Ew as Select,
  Tw as SelectGroup,
  _w as SelectItem,
  Pw as SelectSeparator,
  yb as SettingRow,
  Nb as Skeleton,
  Sb as SkipToContent,
  cb as Spinner,
  lb as SplitPane,
  kw as Switch,
  xb as Table,
  Xw as Tabs,
  Jw as TabsContent,
  qw as TabsList,
  Zw as TabsTrigger,
  _b as Tbody,
  Rb as Td,
  Ob as Text,
  nb as Textarea,
  Pb as Th,
  Eb as Thead,
  bw as ThemeProvider,
  Cw as ThemeScript,
  eb as ToastProvider,
  Gw as Tooltip,
  zw as TooltipProvider,
  Tb as Tr,
  ub as Tree,
  db as TreeItem,
  jn as VisuallyHidden,
  F as cn,
  jo as useField,
  yw as useTheme,
  tb as useToast
};
//# sourceMappingURL=index.js.map
