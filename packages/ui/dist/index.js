var Fr = (e) => {
  throw TypeError(e);
};
var Br = (e, t, n) => t.has(e) || Fr("Cannot " + n);
var le = (e, t, n) => (Br(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Vr = (e, t, n) => t.has(e) ? Fr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), oo = (e, t, n, o) => (Br(e, t, "write to private field"), o ? o.call(e, n) : t.set(e, n), n);
import { jsx as d, jsxs as D, Fragment as We } from "react/jsx-runtime";
import * as a from "react";
import { useState as Pe, useEffect as Yt, useCallback as ft, useMemo as Ot, useContext as nn, createContext as on, forwardRef as Ee, useId as Je, useLayoutEffect as Nc, useRef as pt, Fragment as zo } from "react";
import * as Nt from "react-dom";
function $(...e) {
  return e.filter((t) => typeof t == "string" && t !== "").join(" ");
}
const Go = (e) => ({
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
}), Yo = (e) => /* @__PURE__ */ d("svg", { ...Go(e), children: /* @__PURE__ */ d("path", { d: "M3 8.5 6.5 12 13 4.5" }) }), gs = (e) => /* @__PURE__ */ d("svg", { ...Go(e), children: /* @__PURE__ */ d("path", { d: "m4 6 4 4 4-4" }) }), Mn = (e) => /* @__PURE__ */ d("svg", { ...Go(e), children: /* @__PURE__ */ d("path", { d: "M4 4l8 8M12 4l-8 8" }) }), ws = on(null);
function Mc(e) {
  if (!e || typeof window > "u") return {};
  try {
    return JSON.parse(window.localStorage.getItem(e) ?? "{}");
  } catch {
    return {};
  }
}
function Zw({
  children: e,
  theme: t,
  defaultTheme: n = "system",
  defaultDensity: o = "normal",
  storageKey: r = "wertkit-theme",
  target: s = "root"
}) {
  const [i, c] = Pe(n), [l, u] = Pe(o), [f, p] = Pe(!1), [m, g] = Pe(null);
  Yt(() => {
    const y = Mc(r);
    y.theme && c(y.theme), y.density && u(y.density);
  }, [r]);
  const w = t ?? i;
  Yt(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function") return;
    const y = window.matchMedia("(prefers-color-scheme: dark)"), C = () => p(y.matches);
    return C(), y.addEventListener("change", C), () => y.removeEventListener("change", C);
  }, []);
  const h = w === "system" ? f ? "dark" : "light" : w;
  Yt(() => {
    const y = s === "self" ? m : document.documentElement;
    y && (y.setAttribute("data-theme", h), y.setAttribute("data-density", l));
  }, [h, l, s, m]), Yt(() => {
    if (!(!r || typeof window > "u"))
      try {
        window.localStorage.setItem(r, JSON.stringify({ theme: w, density: l }));
      } catch {
      }
  }, [w, l, r]);
  const v = ft((y) => c(y), []), b = ft((y) => u(y), []), S = Ot(
    () => ({ theme: w, resolvedTheme: h, setTheme: v, density: l, setDensity: b }),
    [w, h, v, l, b]
  );
  return /* @__PURE__ */ d(ws.Provider, { value: S, children: s === "self" ? /* @__PURE__ */ d("div", { ref: g, children: e }) : e });
}
function Jw() {
  const e = nn(ws);
  if (!e) throw new Error("useTheme must be used inside <ThemeProvider>");
  return e;
}
function Qw({
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
var $c = Object.defineProperty, Xo = (e, t) => $c(e, "name", { value: t, configurable: !0 });
function Co(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
Xo(Co, "setRef");
function bs(...e) {
  return (t) => {
    let n = !1;
    const o = e.map((r) => {
      const s = Co(r, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let r = 0; r < o.length; r++) {
          const s = o[r];
          typeof s == "function" ? s() : Co(e[r], null);
        }
      };
  };
}
Xo(bs, "composeRefs");
function K(...e) {
  return a.useCallback(bs(...e), e);
}
Xo(K, "useComposedRefs");
var Lc = Object.defineProperty, Re = (e, t) => Lc(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function Be(e) {
  const t = a.forwardRef((n, o) => {
    let { children: r, ...s } = n, i = null, c = !1;
    const l = [];
    So(r) && typeof vn == "function" && (r = vn(r._payload)), a.Children.forEach(r, (m) => {
      var g;
      if (_s(m)) {
        c = !0;
        const w = m;
        let h = "child" in w.props ? w.props.child : w.props.children;
        So(h) && typeof vn == "function" && (h = vn(h._payload)), i = Fc(w, h), l.push((g = i == null ? void 0 : i.props) == null ? void 0 : g.children);
      } else
        l.push(m);
    }), i ? i = a.cloneElement(i, void 0, l) : (
      // A `Slottable` was found but it didn't resolve to a single element (e.g.
      // it wrapped multiple elements, text, or a render-prop `child` that
      // wasn't an element). Don't fall back to treating the `Slottable` wrapper
      // itself as the slot target — throw a descriptive error below instead.
      !c && a.Children.count(r) === 1 && a.isValidElement(r) && (i = r)
    );
    const u = i ? xs(i) : void 0, f = K(o, u);
    if (!i) {
      if (r || r === 0)
        throw new Error(
          c ? Hc(e) : Vc(e)
        );
      return r;
    }
    const p = Ss(s, i.props ?? {});
    return i.type !== a.Fragment && (p.ref = o ? f : u), a.cloneElement(i, p);
  });
  return t.displayName = `${e}.Slot`, t;
}
Re(Be, "createSlot");
var $n = /* @__PURE__ */ Be("Slot"), ys = Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function Cs(e) {
  const t = /* @__PURE__ */ Re((n) => "child" in n ? n.children(n.child) : n.children, "Slottable");
  return t.displayName = `${e}.Slottable`, t.__radixId = ys, t;
}
Re(Cs, "createSlottable");
var Fc = /* @__PURE__ */ Re((e, t) => {
  if ("child" in e.props) {
    const n = e.props.child;
    return a.isValidElement(n) ? a.cloneElement(n, void 0, e.props.children(n.props.children)) : null;
  }
  return a.isValidElement(t) ? t : null;
}, "getSlottableElementFromSlottable");
function Ss(e, t) {
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
Re(Ss, "mergeProps");
function xs(e) {
  var o, r;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
Re(xs, "getElementRef");
function _s(e) {
  return a.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === ys;
}
Re(_s, "isSlottable");
var Bc = Symbol.for("react.lazy");
function So(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === Bc && "_payload" in e && Es(e._payload);
}
Re(So, "isLazyComponent");
function Es(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
Re(Es, "isPromiseLike");
var Vc = /* @__PURE__ */ Re((e) => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"), Hc = /* @__PURE__ */ Re((e) => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"), vn = a[" use ".trim().toString()];
const Wc = "wk-Button_root", Uc = "wk-Button_sm", Kc = "wk-Button_md", jc = "wk-Button_lg", zc = "wk-Button_iconOnly", Gc = "wk-Button_primary", Yc = "wk-Button_secondary", Xc = "wk-Button_ghost", qc = "wk-Button_danger", Zc = "wk-Button_spinner", Ht = {
  root: Wc,
  sm: Uc,
  md: Kc,
  lg: jc,
  iconOnly: zc,
  primary: Gc,
  secondary: Yc,
  ghost: Xc,
  danger: qc,
  spinner: Zc,
  "wk-spin": "wk-Button_wk-spin"
}, Jc = Ee(function({
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
  return /* @__PURE__ */ D(
    c ? $n : "button",
    {
      ref: g,
      type: c ? void 0 : p ?? "button",
      disabled: f || r,
      "data-loading": r || void 0,
      className: $(
        Ht.root,
        Ht[t],
        Ht[n],
        o && Ht.iconOnly,
        l
      ),
      ...m,
      children: [
        r ? /* @__PURE__ */ d("span", { className: Ht.spinner, "aria-hidden": "true" }) : s,
        u,
        !r && i
      ]
    }
  );
}), Qc = "wk-Field_root", ea = "wk-Field_label", ta = "wk-Field_required", na = "wk-Field_hint", oa = "wk-Field_error", Wt = {
  root: Qc,
  label: ea,
  required: ta,
  hint: na,
  error: oa
}, Ts = on(null), qo = () => nn(Ts);
function eb({ label: e, hint: t, error: n, required: o, children: r, className: s }) {
  const i = Je(), c = `${i}-input`, l = `${i}-hint`, u = `${i}-error`, f = !!n, p = [n ? u : null, t ? l : null].filter(Boolean).join(" ") || void 0;
  return /* @__PURE__ */ d(Ts.Provider, { value: { inputId: c, describedBy: p, invalid: f }, children: /* @__PURE__ */ D("div", { className: $(Wt.root, s), children: [
    e && /* @__PURE__ */ D("label", { className: Wt.label, htmlFor: c, children: [
      e,
      o && /* @__PURE__ */ d("span", { className: Wt.required, "aria-hidden": "true", children: "*" })
    ] }),
    r,
    n ? /* @__PURE__ */ d("p", { className: Wt.error, id: u, role: "alert", children: n }) : t && /* @__PURE__ */ d("p", { className: Wt.hint, id: l, children: t })
  ] }) });
}
const ra = "wk-Input_root", sa = "wk-Input_mono", ia = "wk-Input_shell", ca = "wk-Input_slot", aa = "wk-Input_start", la = "wk-Input_end", ua = "wk-Input_hasStart", da = "wk-Input_hasEnd", fa = "wk-Input_sm", pa = "wk-Input_md", ma = "wk-Input_lg", Ne = {
  root: ra,
  mono: sa,
  shell: ia,
  slot: ca,
  start: aa,
  end: la,
  hasStart: ua,
  hasEnd: da,
  sm: fa,
  md: pa,
  lg: ma
}, xo = Ee(function({
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
  const p = qo(), m = n ?? (p == null ? void 0 : p.invalid) ?? !1, g = /* @__PURE__ */ d(
    "input",
    {
      ref: f,
      id: c ?? (p == null ? void 0 : p.inputId),
      "aria-invalid": m || void 0,
      "aria-describedby": l ?? (p == null ? void 0 : p.describedBy),
      className: $(
        Ne.root,
        Ne[t],
        o && Ne.mono,
        r && Ne.hasStart,
        s && Ne.hasEnd,
        !r && !s && i
      ),
      ...u
    }
  );
  return !r && !s ? g : /* @__PURE__ */ D("span", { className: $(Ne.shell, i), "data-invalid": m || void 0, children: [
    r && /* @__PURE__ */ d("span", { className: $(Ne.slot, Ne.start), "aria-hidden": "true", children: r }),
    g,
    s && /* @__PURE__ */ d("span", { className: $(Ne.slot, Ne.end), children: s })
  ] });
});
var ha = Object.defineProperty, va = (e, t) => ha(e, "name", { value: t, configurable: !0 });
function _o(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
va(_o, "clamp");
var ga = Object.defineProperty, Mt = (e, t) => ga(e, "name", { value: t, configurable: !0 }), Ps = !!(typeof window < "u" && window.document && window.document.createElement);
function I(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return /* @__PURE__ */ Mt(function(r) {
    if (e == null || e(r), n === !1 || !r || !r.defaultPrevented)
      return t == null ? void 0 : t(r);
  }, "handleEvent");
}
Mt(I, "composeEventHandlers");
function wa(e) {
  var t;
  if (!Ps)
    throw new Error("Cannot access window outside of the DOM");
  return ((t = e == null ? void 0 : e.ownerDocument) == null ? void 0 : t.defaultView) ?? window;
}
Mt(wa, "getOwnerWindow");
function Eo(e) {
  if (!Ps)
    throw new Error("Cannot access document outside of the DOM");
  return (e == null ? void 0 : e.ownerDocument) ?? document;
}
Mt(Eo, "getOwnerDocument");
function ks(e, t = !1) {
  const { activeElement: n } = Eo(e);
  if (!(n != null && n.nodeName))
    return null;
  if (Rs(n) && n.contentDocument)
    return ks(n.contentDocument.body, t);
  if (t) {
    const o = n.getAttribute("aria-activedescendant");
    if (o) {
      const r = Eo(n).getElementById(o);
      if (r)
        return r;
    }
  }
  return n;
}
Mt(ks, "getActiveElement");
function Rs(e) {
  return e.tagName === "IFRAME";
}
Mt(Rs, "isFrame");
var ba = Object.defineProperty, xe = (e, t) => ba(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function ya(e, t) {
  const n = a.createContext(t);
  n.displayName = e + "Context";
  const o = /* @__PURE__ */ xe((s) => {
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
  return xe(r, "useContext"), [o, r];
}
xe(ya, "createContext");
// @__NO_SIDE_EFFECTS__
function me(e, t = []) {
  let n = [];
  function o(s, i) {
    const c = a.createContext(i);
    c.displayName = s + "Context";
    const l = n.length;
    n = [...n, i];
    const u = /* @__PURE__ */ xe((p) => {
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
    return xe(f, "useContext"), [u, f];
  }
  xe(o, "createContext");
  const r = /* @__PURE__ */ xe(() => {
    const s = n.map((i) => a.createContext(i));
    return /* @__PURE__ */ xe(function(c) {
      const l = (c == null ? void 0 : c[e]) || s;
      return a.useMemo(
        () => ({ [`__scope${e}`]: { ...c, [e]: l } }),
        [c, l]
      );
    }, "useScope");
  }, "createScope");
  return r.scopeName = e, [o, Is(r, ...t)];
}
xe(me, "createContextScope");
function Is(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = /* @__PURE__ */ xe(() => {
    const o = e.map((r) => ({
      useScope: r(),
      scopeName: r.scopeName
    }));
    return /* @__PURE__ */ xe(function(s) {
      const i = o.reduce((c, { useScope: l, scopeName: u }) => {
        const p = l(s)[`__scope${u}`];
        return { ...c, ...p };
      }, {});
      return a.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    }, "useComposedScopes");
  }, "createScope");
  return n.scopeName = t.scopeName, n;
}
xe(Is, "composeContextScopes");
var Ca = Object.defineProperty, ie = (e, t) => Ca(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function rn(e) {
  const t = e + "CollectionProvider", [n, o] = /* @__PURE__ */ me(t), [r, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = /* @__PURE__ */ ie((h) => {
    const { scope: v, children: b } = h, S = a.useRef(null), y = a.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ d(r, { scope: v, itemMap: y, collectionRef: S, children: b });
  }, "CollectionProvider");
  i.displayName = t;
  const c = e + "CollectionSlot", l = /* @__PURE__ */ Be(c), u = a.forwardRef(
    (h, v) => {
      const { scope: b, children: S } = h, y = s(c, b), C = K(v, y.collectionRef);
      return /* @__PURE__ */ d(l, { ref: C, children: S });
    }
  );
  u.displayName = c;
  const f = e + "CollectionItemSlot", p = "data-radix-collection-item", m = /* @__PURE__ */ Be(f), g = a.forwardRef(
    (h, v) => {
      const { scope: b, children: S, ...y } = h, C = a.useRef(null), x = K(v, C), _ = s(f, b);
      return a.useEffect(() => (_.itemMap.set(C, { ref: C, ...y }), () => void _.itemMap.delete(C))), /* @__PURE__ */ d(m, { [p]: "", ref: x, children: S });
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
        (_, E) => y.indexOf(_.ref.current) - y.indexOf(E.ref.current)
      );
    }, [v.collectionRef, v.itemMap]);
  }
  return ie(w, "useCollection"), [
    { Provider: i, Slot: u, ItemSlot: g },
    w,
    o
  ];
}
ie(rn, "createCollection");
var Hr = /* @__PURE__ */ new WeakMap(), ne, ve, ro = (ve = class extends Map {
  constructor(n) {
    super(n);
    Vr(this, ne);
    oo(this, ne, [...super.keys()]), Hr.set(this, !0);
  }
  set(n, o) {
    return Hr.get(this) && (this.has(n) ? le(this, ne)[le(this, ne).indexOf(n)] = n : le(this, ne).push(n)), super.set(n, o), this;
  }
  insert(n, o, r) {
    const s = this.has(o), i = le(this, ne).length, c = Zo(n);
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
    return oo(this, ne, []), super.clear();
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
    const o = En(le(this, ne), n);
    if (o !== void 0)
      return this.get(o);
  }
  entryAt(n) {
    const o = En(le(this, ne), n);
    if (o !== void 0)
      return [o, this.get(o)];
  }
  indexOf(n) {
    return le(this, ne).indexOf(n);
  }
  keyAt(n) {
    return En(le(this, ne), n);
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
function En(e, t) {
  if ("at" in Array.prototype)
    return Array.prototype.at.call(e, t);
  const n = Ds(e, t);
  return n === -1 ? void 0 : e[n];
}
ie(En, "at");
function Ds(e, t) {
  const n = e.length, o = Zo(t), r = o >= 0 ? o : n + o;
  return r < 0 || r >= n ? -1 : r;
}
ie(Ds, "toSafeIndex");
function Zo(e) {
  return e !== e || e === 0 ? 0 : Math.trunc(e);
}
ie(Zo, "toSafeInteger");
// @__NO_SIDE_EFFECTS__
function Sa(e) {
  const t = e + "CollectionProvider", [n, o] = /* @__PURE__ */ me(t), [r, s] = n(
    t,
    {
      collectionElement: null,
      collectionRef: { current: null },
      collectionRefObject: { current: null },
      itemMap: new ro(),
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
    const { scope: C, children: x, state: _ } = y, E = a.useRef(null), [k, P] = a.useState(
      null
    ), O = K(E, P), [B, A] = _;
    return a.useEffect(() => {
      if (!k) return;
      const N = Ns(() => {
      });
      return N.observe(k, {
        childList: !0,
        subtree: !0
      }), () => {
        N.disconnect();
      };
    }, [k]), /* @__PURE__ */ d(
      r,
      {
        scope: C,
        itemMap: B,
        setItemMap: A,
        collectionRef: O,
        collectionRefObject: E,
        collectionElement: k,
        children: x
      }
    );
  }, "CollectionProviderImpl");
  l.displayName = t + "Impl";
  const u = e + "CollectionSlot", f = /* @__PURE__ */ Be(u), p = a.forwardRef(
    (y, C) => {
      const { scope: x, children: _ } = y, E = s(u, x), k = K(C, E.collectionRef);
      return /* @__PURE__ */ d(f, { ref: k, children: _ });
    }
  );
  p.displayName = u;
  const m = e + "CollectionItemSlot", g = "data-radix-collection-item", w = /* @__PURE__ */ Be(m), h = a.forwardRef(
    (y, C) => {
      const { scope: x, children: _, ...E } = y, k = a.useRef(null), [P, O] = a.useState(null), B = K(C, k, O), A = s(m, x), { setItemMap: N } = A, F = a.useRef(E);
      Os(F.current, E) || (F.current = E);
      const U = F.current;
      return a.useEffect(() => {
        const T = U;
        return N((M) => P ? M.has(P) ? M.set(P, { ...T, element: P }).toSorted(To) : (M.set(P, { ...T, element: P }), M.toSorted(To)) : M), () => {
          N((M) => !P || !M.has(P) ? M : (M.delete(P), new ro(M)));
        };
      }, [P, U, N]), /* @__PURE__ */ d(w, { [g]: "", ref: B, children: _ });
    }
  );
  h.displayName = m;
  function v() {
    return a.useState(new ro());
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
ie(Sa, "createCollection");
function Os(e, t) {
  if (e === t) return !0;
  if (typeof e != "object" || typeof t != "object" || e == null || t == null) return !1;
  const n = Object.keys(e), o = Object.keys(t);
  if (n.length !== o.length) return !1;
  for (const r of n)
    if (!Object.prototype.hasOwnProperty.call(t, r) || e[r] !== t[r]) return !1;
  return !0;
}
ie(Os, "shallowEqual");
function As(e, t) {
  return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING);
}
ie(As, "isElementPreceding");
function To(e, t) {
  return !e[1].element || !t[1].element ? 0 : As(e[1].element, t[1].element) ? -1 : 1;
}
ie(To, "sortByDocumentPosition");
function Ns(e) {
  return new MutationObserver((n) => {
    for (const o of n)
      if (o.type === "childList") {
        e();
        return;
      }
  });
}
ie(Ns, "getChildListObserver");
var xa = Object.defineProperty, _a = (e, t) => xa(e, "name", { value: t, configurable: !0 }), Ea = a.createContext(void 0);
function sn(e) {
  const t = a.useContext(Ea);
  return e || t || "ltr";
}
_a(sn, "useDirection");
var Ta = Object.defineProperty, Pa = (e, t) => Ta(e, "name", { value: t, configurable: !0 }), ka = [
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
], H = ka.reduce((e, t) => {
  const n = /* @__PURE__ */ Be(`Primitive.${t}`), o = a.forwardRef((r, s) => {
    const { asChild: i, ...c } = r, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ d(l, { ...c, ref: s });
  });
  return o.displayName = `Primitive.${t}`, { ...e, [t]: o };
}, {});
function Ln(e, t) {
  e && Nt.flushSync(() => e.dispatchEvent(t));
}
Pa(Ln, "dispatchDiscreteCustomEvent");
var Ra = Object.defineProperty, Ia = (e, t) => Ra(e, "name", { value: t, configurable: !0 });
function ue(e) {
  const t = a.useRef(e);
  return a.useEffect(() => {
    t.current = e;
  }), a.useMemo(() => ((...n) => {
    var o;
    return (o = t.current) == null ? void 0 : o.call(t, ...n);
  }), []);
}
Ia(ue, "useCallbackRef");
var Da = Object.defineProperty, re = (e, t) => Da(e, "name", { value: t, configurable: !0 }), Po = "dismissableLayer.update", Oa = "dismissableLayer.pointerDownOutside", Aa = "dismissableLayer.focusOutside", Wr, Jo = a.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set(),
  // Outside elements that belong to a layer's own dismiss affordance (eg, a
  // dialog overlay). Pressing them should dismiss the layer regardless of
  // whether or not they stop propagation.
  //
  // See https://github.com/radix-ui/primitives/issues/3346
  dismissableSurfaces: /* @__PURE__ */ new Set()
}), cn = /* @__PURE__ */ a.forwardRef(
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
    } = t, p = a.useContext(Jo), [m, g] = a.useState(null), w = (m == null ? void 0 : m.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, h] = a.useState({}), v = K(n, g), b = Array.from(p.layers), [S] = [
      ...p.layersWithOutsidePointerEventsDisabled
    ].slice(-1), y = S ? b.indexOf(S) : -1, C = m ? b.indexOf(m) : -1, x = p.layersWithOutsidePointerEventsDisabled.size > 0, _ = C >= y, E = a.useRef(!1), k = $s(
      (A) => {
        i == null || i(A), l == null || l(A), A.defaultPrevented || u == null || u();
      },
      {
        ownerDocument: w,
        deferPointerDownOutside: r,
        isDeferredPointerDownOutsideRef: E,
        dismissableSurfaces: p.dismissableSurfaces,
        shouldHandlePointerDownOutside: a.useCallback(
          (A) => {
            if (!(A instanceof Node))
              return !1;
            const N = [...p.branches].some(
              (F) => F.contains(A)
            );
            return _ && !N;
          },
          [p.branches, _]
        )
      }
    ), P = Ls((A) => {
      if (r && E.current)
        return;
      const N = A.target;
      [...p.branches].some((U) => U.contains(N)) || (c == null || c(A), l == null || l(A), A.defaultPrevented || u == null || u());
    }, w), O = m ? C === b.length - 1 : !1, B = ue((A) => {
      A.key === "Escape" && (s == null || s(A), !A.defaultPrevented && u && (A.preventDefault(), u()));
    });
    return a.useEffect(() => {
      if (O)
        return w.addEventListener("keydown", B, { capture: !0 }), () => w.removeEventListener("keydown", B, { capture: !0 });
    }, [w, O, B]), a.useEffect(() => {
      if (m)
        return o && (p.layersWithOutsidePointerEventsDisabled.size === 0 && (Wr = w.body.style.pointerEvents, w.body.style.pointerEvents = "none"), p.layersWithOutsidePointerEventsDisabled.add(m)), p.layers.add(m), ko(), () => {
          o && (p.layersWithOutsidePointerEventsDisabled.delete(m), p.layersWithOutsidePointerEventsDisabled.size === 0 && (w.body.style.pointerEvents = Wr));
        };
    }, [m, w, o, p]), a.useEffect(() => () => {
      m && (p.layers.delete(m), p.layersWithOutsidePointerEventsDisabled.delete(m), ko());
    }, [m, p]), a.useEffect(() => {
      const A = /* @__PURE__ */ re(() => h({}), "handleUpdate");
      return document.addEventListener(Po, A), () => document.removeEventListener(Po, A);
    }, []), /* @__PURE__ */ d(
      H.div,
      {
        ...f,
        ref: v,
        style: {
          pointerEvents: x ? _ ? "auto" : "none" : void 0,
          ...t.style
        },
        onFocusCapture: I(t.onFocusCapture, P.onFocusCapture),
        onBlurCapture: I(t.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: I(
          t.onPointerDownCapture,
          k.onPointerDownCapture
        )
      }
    );
  }, "DismissableLayer")
), Na = /* @__PURE__ */ a.forwardRef(/* @__PURE__ */ re(function(t, n) {
  const o = a.useContext(Jo), r = a.useRef(null), s = K(n, r);
  return a.useEffect(() => {
    const i = r.current;
    if (i)
      return o.branches.add(i), () => {
        o.branches.delete(i);
      };
  }, [o.branches]), /* @__PURE__ */ d(H.div, { ...t, ref: s });
}, "DismissableLayerBranch"));
function Ms() {
  const e = a.useContext(Jo), [t, n] = a.useState(null);
  return a.useEffect(() => {
    if (t)
      return e.dismissableSurfaces.add(t), () => {
        e.dismissableSurfaces.delete(t);
      };
  }, [t, e.dismissableSurfaces]), n;
}
re(Ms, "useDismissableLayerSurface");
var Ma = /* @__PURE__ */ re(() => !0, "IS_TRUE");
function $s(e, t) {
  const {
    ownerDocument: n = globalThis == null ? void 0 : globalThis.document,
    deferPointerDownOutside: o = !1,
    isDeferredPointerDownOutsideRef: r,
    dismissableSurfaces: s,
    shouldHandlePointerDownOutside: i = Ma
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
      C instanceof Node && [...s].some((_) => _.contains(C)) || f.current.set(y.type, !0), y.type === "click" && window.setTimeout(() => {
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
          const _ = g();
          m(), _ || Qo(
            Oa,
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
re($s, "usePointerDownOutside");
function Ls(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ue(e), o = a.useRef(!1);
  return a.useEffect(() => {
    const r = /* @__PURE__ */ re((s) => {
      s.target && !o.current && Qo(Aa, n, { originalEvent: s }, {
        discrete: !1
      });
    }, "handleFocus");
    return t.addEventListener("focusin", r), () => t.removeEventListener("focusin", r);
  }, [t, n]), {
    onFocusCapture: /* @__PURE__ */ re(() => o.current = !0, "onFocusCapture"),
    onBlurCapture: /* @__PURE__ */ re(() => o.current = !1, "onBlurCapture")
  };
}
re(Ls, "useFocusOutside");
function ko() {
  const e = new CustomEvent(Po);
  document.dispatchEvent(e);
}
re(ko, "dispatchUpdate");
function Qo(e, t, n, { discrete: o }) {
  const r = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && r.addEventListener(e, t, { once: !0 }), o ? Ln(r, s) : r.dispatchEvent(s);
}
re(Qo, "handleAndDispatchCustomEvent");
var $a = cn, La = Na, Fa = Object.defineProperty, er = (e, t) => Fa(e, "name", { value: t, configurable: !0 }), gn = 0, Me = null;
function Ba(e) {
  return an(), e.children;
}
er(Ba, "FocusGuards");
function an() {
  a.useEffect(() => {
    Me || (Me = { start: Ro(), end: Ro() });
    const { start: e, end: t } = Me;
    return document.body.firstElementChild !== e && document.body.insertAdjacentElement("afterbegin", e), document.body.lastElementChild !== t && document.body.insertAdjacentElement("beforeend", t), gn++, () => {
      gn === 1 && (Me == null || Me.start.remove(), Me == null || Me.end.remove(), Me = null), gn = Math.max(0, gn - 1);
    };
  }, []);
}
er(an, "useFocusGuards");
function Ro() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
er(Ro, "createFocusGuard");
var Va = Object.defineProperty, de = (e, t) => Va(e, "name", { value: t, configurable: !0 }), so = "focusScope.autoFocusOnMount", io = "focusScope.autoFocusOnUnmount", Ur = { bubbles: !1, cancelable: !0 }, tr = /* @__PURE__ */ a.forwardRef(
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
          l.contains(x) ? m.current = x : Ue(m.current, { select: !0 });
        }, b = function(C) {
          if (w.paused || !l) return;
          const x = C.relatedTarget;
          x !== null && (l.contains(x) || Ue(m.current, { select: !0 }));
        }, S = function(C) {
          if (document.activeElement === document.body)
            for (const _ of C)
              _.removedNodes.length > 0 && Ue(l);
        };
        de(v, "handleFocusIn"), de(b, "handleFocusOut"), de(S, "handleMutations"), document.addEventListener("focusin", v), document.addEventListener("focusout", b);
        const y = new MutationObserver(S);
        return l && y.observe(l, { childList: !0, subtree: !0 }), () => {
          document.removeEventListener("focusin", v), document.removeEventListener("focusout", b), y.disconnect();
        };
      }
    }, [r, l, w.paused]), a.useEffect(() => {
      if (l) {
        Kr.add(w);
        const v = document.activeElement;
        if (!l.contains(v)) {
          const S = new CustomEvent(so, Ur);
          l.addEventListener(so, f), l.dispatchEvent(S), S.defaultPrevented || (Fs(Us(nr(l)), { select: !0 }), document.activeElement === v && Ue(l));
        }
        return () => {
          l.removeEventListener(so, f), setTimeout(() => {
            const S = new CustomEvent(io, Ur);
            l.addEventListener(io, p), l.dispatchEvent(S), S.defaultPrevented || Ue(v ?? document.body, { select: !0 }), l.removeEventListener(io, p), Kr.remove(w);
          }, 0);
        };
      }
    }, [l, f, p, w]);
    const h = a.useCallback(
      (v) => {
        if (!o && !r || w.paused) return;
        const b = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, S = document.activeElement;
        if (b && S) {
          const y = v.currentTarget, [C, x] = Bs(y);
          C && x ? !v.shiftKey && S === x ? (v.preventDefault(), o && Ue(C, { select: !0 })) : v.shiftKey && S === C && (v.preventDefault(), o && Ue(x, { select: !0 })) : S === y && v.preventDefault();
        }
      },
      [o, r, w.paused]
    );
    return /* @__PURE__ */ d(H.div, { tabIndex: -1, ...c, ref: g, onKeyDown: h });
  }, "FocusScope")
);
function Fs(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const o of e)
    if (Ue(o, { select: t }), document.activeElement !== n) return;
}
de(Fs, "focusFirst");
function Bs(e) {
  const t = nr(e), n = Io(t, e), o = Io(t.reverse(), e);
  return [n, o];
}
de(Bs, "getTabbableEdges");
function nr(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: /* @__PURE__ */ de((o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }, "acceptNode")
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
de(nr, "getTabbableCandidates");
function Io(e, t) {
  const n = typeof t.checkVisibility == "function" && t.checkVisibility({ checkVisibilityCSS: !0 });
  for (const o of e)
    if (!(n ? !o.checkVisibility({ checkVisibilityCSS: !0 }) : Vs(o, { upTo: t })))
      return o;
}
de(Io, "findVisible");
function Vs(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
de(Vs, "isHidden");
function Hs(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
de(Hs, "isSelectableInput");
function Ue(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Hs(e) && t && e.select();
  }
}
de(Ue, "focus");
var Kr = Ws();
function Ws() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Do(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Do(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
de(Ws, "createFocusScopesStack");
function Do(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
de(Do, "arrayRemove");
function Us(e) {
  return e.filter((t) => t.tagName !== "A");
}
de(Us, "removeLinks");
var oe = globalThis != null && globalThis.document ? a.useLayoutEffect : () => {
}, Ha = Object.defineProperty, Wa = (e, t) => Ha(e, "name", { value: t, configurable: !0 }), Ua = a[" useId ".trim().toString()] || (() => {
}), Ka = 0;
function _e(e) {
  const [t, n] = a.useState(Ua());
  return oe(() => {
    e || n((o) => o ?? String(Ka++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
Wa(_e, "useId");
const ja = ["top", "right", "bottom", "left"], rt = Math.min, je = Math.max, In = Math.round, wn = Math.floor, ze = (e) => ({
  x: e,
  y: e
}), za = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ks(e, t, n) {
  return je(e, rt(t, n));
}
function Xe(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function st(e) {
  return e.split("-")[0];
}
function $t(e) {
  return e.split("-")[1];
}
function or(e) {
  return e === "x" ? "y" : "x";
}
function rr(e) {
  return e === "y" ? "height" : "width";
}
function Fe(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function sr(e) {
  return or(Fe(e));
}
function Ga(e, t, n) {
  n === void 0 && (n = !1);
  const o = $t(e), r = sr(e), s = rr(r);
  let i = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = Dn(i)), [i, Dn(i)];
}
function Ya(e) {
  const t = Dn(e);
  return [Oo(e), t, Oo(t)];
}
function Oo(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const jr = ["left", "right"], zr = ["right", "left"], Xa = ["top", "bottom"], qa = ["bottom", "top"];
function Za(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? zr : jr : t ? jr : zr;
    case "left":
    case "right":
      return t ? Xa : qa;
    default:
      return [];
  }
}
function Ja(e, t, n, o) {
  const r = $t(e);
  let s = Za(st(e), n === "start", o);
  return r && (s = s.map((i) => i + "-" + r), t && (s = s.concat(s.map(Oo)))), s;
}
function Dn(e) {
  const t = st(e);
  return za[t] + e.slice(t.length);
}
function Qa(e) {
  var t, n, o, r;
  return {
    top: (t = e.top) != null ? t : 0,
    right: (n = e.right) != null ? n : 0,
    bottom: (o = e.bottom) != null ? o : 0,
    left: (r = e.left) != null ? r : 0
  };
}
function js(e) {
  return typeof e != "number" ? Qa(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function On(e) {
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
function Gr(e, t, n) {
  let {
    reference: o,
    floating: r
  } = e;
  const s = Fe(t), i = sr(t), c = rr(i), l = st(t), u = s === "y", f = o.x + o.width / 2 - r.width / 2, p = o.y + o.height / 2 - r.height / 2, m = o[c] / 2 - r[c] / 2;
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
  const w = $t(t);
  return w && (g[i] += m * (w === "end" ? 1 : -1) * (n && u ? -1 : 1)), g;
}
async function el(e, t) {
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
  } = Xe(t, e), w = js(g), v = c[m ? p === "floating" ? "reference" : "floating" : p], b = On(await s.getClippingRect({
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
  }, x = On(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const tl = 50, nl = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: r = "absolute",
    middleware: s = [],
    platform: i
  } = n, c = i.detectOverflow ? i : {
    ...i,
    detectOverflow: el
  }, l = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let u = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: r
  }), {
    x: f,
    y: p
  } = Gr(u, o, l), m = o, g = 0;
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
      reset: _
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
    }, _ && g < tl && (g++, typeof _ == "object" && (_.placement && (m = _.placement), _.rects && (u = _.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: r
    }) : _.rects), {
      x: f,
      y: p
    } = Gr(u, m, l)), h = -1);
  }
  return {
    x: f,
    y: p,
    placement: m,
    strategy: r,
    middlewareData: w
  };
}, ol = (e) => ({
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
    } = Xe(e, t) || {};
    if (u == null)
      return {};
    const p = js(f), m = {
      x: n,
      y: o
    }, g = sr(r), w = rr(g), h = await i.getDimensions(u), v = g === "y", b = v ? "top" : "left", S = v ? "bottom" : "right", y = v ? "clientHeight" : "clientWidth", C = s.reference[w] + s.reference[g] - m[g] - s.floating[w], x = m[g] - s.reference[g], _ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
    let E = _ ? _[y] : 0;
    (!E || !await (i.isElement == null ? void 0 : i.isElement(_))) && (E = c.floating[y] || s.floating[w]);
    const k = C / 2 - x / 2, P = E / 2 - h[w] / 2 - 1, O = rt(p[b], P), B = rt(p[S], P), A = E - h[w] - B, N = E / 2 - h[w] / 2 + k, F = Ks(O, N, A), U = !l.arrow && $t(r) != null && N !== F && s.reference[w] / 2 - (N < O ? O : B) - h[w] / 2 < 0, T = U ? N < O ? N - O : N - A : 0;
    return {
      [g]: m[g] + T,
      data: {
        [g]: F,
        centerOffset: N - F - T,
        ...U && {
          alignmentOffset: T
        }
      },
      reset: U
    };
  }
}), rl = function(e) {
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
      } = Xe(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const b = st(r), S = Fe(c), y = st(c) === c, C = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), x = m || (y || !h ? [Dn(c)] : Ya(c)), _ = w !== "none";
      !m && _ && x.push(...Ja(c, h, w, C));
      const E = [c, ...x], k = await l.detectOverflow(t, v), P = [];
      let O = ((o = s.flip) == null ? void 0 : o.overflows) || [];
      if (f && P.push(k[b]), p) {
        const F = Ga(r, i, C);
        P.push(k[F[0]], k[F[1]]);
      }
      if (O = [...O, {
        placement: r,
        overflows: P
      }], !P.every((F) => F <= 0)) {
        var B, A;
        const F = (((B = s.flip) == null ? void 0 : B.index) || 0) + 1, U = E[F];
        if (U && (!(p === "alignment" ? S !== Fe(U) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        O.every((L) => Fe(L.placement) === S ? L.overflows[0] > 0 : !0)))
          return {
            data: {
              index: F,
              overflows: O
            },
            reset: {
              placement: U
            }
          };
        let T = (A = O.filter((M) => M.overflows[0] <= 0).sort((M, L) => M.overflows[1] - L.overflows[1])[0]) == null ? void 0 : A.placement;
        if (!T)
          switch (g) {
            case "bestFit": {
              var N;
              const M = (N = O.filter((L) => {
                if (_) {
                  const W = Fe(L.placement);
                  return W === S || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  W === "y";
                }
                return !0;
              }).map((L) => [L.placement, L.overflows.filter((W) => W > 0).reduce((W, R) => W + R, 0)]).sort((L, W) => L[1] - W[1])[0]) == null ? void 0 : N[0];
              M && (T = M);
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
function Yr(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Xr(e) {
  return ja.some((t) => e[t] >= 0);
}
const sl = function(e) {
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
      } = Xe(e, t);
      switch (r) {
        case "referenceHidden": {
          const i = await o.detectOverflow(t, {
            ...s,
            elementContext: "reference"
          }), c = Yr(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: c,
              referenceHidden: Xr(c)
            }
          };
        }
        case "escaped": {
          const i = await o.detectOverflow(t, {
            ...s,
            altBoundary: !0
          }), c = Yr(i, n.floating);
          return {
            data: {
              escapedOffsets: c,
              escaped: Xr(c)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, zs = /* @__PURE__ */ new Set(["left", "top"]);
async function il(e, t) {
  const {
    placement: n,
    platform: o,
    elements: r
  } = e, s = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), i = st(n), c = $t(n), l = Fe(n) === "y", u = zs.has(i) ? -1 : 1, f = s && l ? -1 : 1, p = Xe(t, e);
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
const cl = function(e) {
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
      } = t, l = await il(t, e);
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
}, al = function(e) {
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
      } = Xe(e, t), f = {
        x: n,
        y: o
      }, p = await s.detectOverflow(t, u), m = Fe(r), g = or(m);
      let w = f[g], h = f[m];
      const v = (S, y) => Ks(y + p[S === "y" ? "top" : "left"], y, y - p[S === "y" ? "bottom" : "right"]);
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
}, ll = function(e) {
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
      } = Xe(e, t), m = {
        x: r,
        y: s
      }, g = Fe(i), w = or(g);
      let h = m[w], v = m[g];
      const b = Xe(u, t), S = typeof b == "number" ? {
        mainAxis: b,
        crossAxis: 0
      } : {
        mainAxis: (n = b.mainAxis) != null ? n : 0,
        crossAxis: (o = b.crossAxis) != null ? o : 0
      };
      if (f) {
        const x = w === "y" ? "height" : "width", _ = c.reference[w] - c.floating[x] + S.mainAxis, E = c.reference[w] + c.reference[x] - S.mainAxis;
        h < _ ? h = _ : h > E && (h = E);
      }
      if (p) {
        var y, C;
        const x = w === "y" ? "width" : "height", _ = zs.has(st(i)), E = c.reference[g] - c.floating[x] + (_ && ((y = l.offset) == null ? void 0 : y[g]) || 0) + (_ ? 0 : S.crossAxis), k = c.reference[g] + c.reference[x] + (_ ? 0 : ((C = l.offset) == null ? void 0 : C[g]) || 0) - (_ ? S.crossAxis : 0);
        v < E ? v = E : v > k && (v = k);
      }
      return {
        [w]: h,
        [g]: v
      };
    }
  };
}, ul = function(e) {
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
      } = Xe(e, t), l = await r.detectOverflow(t, c), u = st(n), f = $t(n), p = Fe(n) === "y", {
        width: m,
        height: g
      } = o.floating;
      let w, h;
      u === "top" || u === "bottom" ? (w = u, h = f === (await (r.isRTL == null ? void 0 : r.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (h = u, w = f === "end" ? "top" : "bottom");
      const v = g - l.top - l.bottom, b = m - l.left - l.right, S = rt(g - l[w], v), y = rt(m - l[h], b), C = t.middlewareData.shift, x = !C;
      let _ = S, E = y;
      C != null && C.enabled.x && (E = b), C != null && C.enabled.y && (_ = v), x && !f && (p ? E = m - 2 * je(l.left, l.right) : _ = g - 2 * je(l.top, l.bottom)), await i({
        ...t,
        availableWidth: E,
        availableHeight: _
      });
      const k = await r.getDimensions(s.floating);
      return m !== k.width || g !== k.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Fn() {
  return typeof window < "u";
}
function Lt(e) {
  return Gs(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function pe(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Qe(e) {
  var t;
  return (t = (Gs(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Gs(e) {
  return Fn() ? e instanceof Node || e instanceof pe(e).Node : !1;
}
function Ve(e) {
  return Fn() ? e instanceof Element || e instanceof pe(e).Element : !1;
}
function ct(e) {
  return Fn() ? e instanceof HTMLElement || e instanceof pe(e).HTMLElement : !1;
}
function qr(e) {
  return !Fn() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof pe(e).ShadowRoot;
}
function Bn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: r
  } = He(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && r !== "inline" && r !== "contents";
}
function dl(e) {
  return /^(table|td|th)$/.test(Lt(e));
}
function Vn(e) {
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
const fl = /transform|translate|scale|rotate|perspective|filter/, pl = /paint|layout|strict|content/, ut = (e) => !!e && e !== "none";
let co;
function ir(e) {
  const t = Ve(e) ? He(e) : e;
  return ut(t.transform) || ut(t.translate) || ut(t.scale) || ut(t.rotate) || ut(t.perspective) || !cr() && (ut(t.backdropFilter) || ut(t.filter)) || fl.test(t.willChange || "") || pl.test(t.contain || "");
}
function ml(e) {
  let t = mt(e);
  for (; ct(t) && !Jt(t); ) {
    if (ir(t))
      return t;
    if (Vn(t))
      return null;
    t = mt(t);
  }
  return null;
}
function cr() {
  return co == null && (co = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), co;
}
function Jt(e) {
  return /^(html|body|#document)$/.test(Lt(e));
}
function He(e) {
  return pe(e).getComputedStyle(e);
}
function Hn(e) {
  return Ve(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function mt(e) {
  if (Lt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    qr(e) && e.host || // Fallback.
    Qe(e)
  );
  return qr(t) ? t.host : t;
}
function Ys(e) {
  const t = mt(e);
  return Jt(t) ? (e.ownerDocument || e).body : ct(t) && Bn(t) ? t : Ys(t);
}
function Qt(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const r = Ys(e), s = r === ((o = e.ownerDocument) == null ? void 0 : o.body), i = pe(r);
  if (s) {
    const c = Ao(i);
    return t.concat(i, i.visualViewport || [], Bn(r) ? r : [], c && n ? Qt(c) : []);
  } else
    return t.concat(r, Qt(r, [], n));
}
function Ao(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Xs(e) {
  const t = He(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const r = ct(e), s = r ? e.offsetWidth : n, i = r ? e.offsetHeight : o, c = In(n) !== s || In(o) !== i;
  return c && (n = s, o = i), {
    width: n,
    height: o,
    $: c
  };
}
function ar(e) {
  return Ve(e) ? e : e.contextElement;
}
function Rt(e) {
  const t = ar(e);
  if (!ct(t))
    return ze(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: r,
    $: s
  } = Xs(t);
  let i = (s ? In(n.width) : n.width) / o, c = (s ? In(n.height) : n.height) / r;
  return (!i || !Number.isFinite(i)) && (i = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: i,
    y: c
  };
}
const hl = /* @__PURE__ */ ze(0);
function qs(e) {
  const t = pe(e);
  return !cr() || !t.visualViewport ? hl : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function vl(e, t, n) {
  return t === void 0 && (t = !1), !!n && t && n === pe(e);
}
function ht(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), s = ar(e);
  let i = ze(1);
  t && (o ? Ve(o) && (i = Rt(o)) : i = Rt(e));
  const c = vl(s, n, o) ? qs(s) : ze(0);
  let l = (r.left + c.x) / i.x, u = (r.top + c.y) / i.y, f = r.width / i.x, p = r.height / i.y;
  if (s && o) {
    const m = pe(s), g = Ve(o) ? pe(o) : o;
    let w = m, h = Ao(w);
    for (; h && g !== w; ) {
      const v = Rt(h), b = h.getBoundingClientRect(), S = He(h), y = b.left + (h.clientLeft + parseFloat(S.paddingLeft)) * v.x, C = b.top + (h.clientTop + parseFloat(S.paddingTop)) * v.y;
      l *= v.x, u *= v.y, f *= v.x, p *= v.y, l += y, u += C, w = pe(h), h = Ao(w);
    }
  }
  return On({
    width: f,
    height: p,
    x: l,
    y: u
  });
}
function Wn(e, t) {
  const n = Hn(e).scrollLeft;
  return t ? t.left + n : ht(Qe(e)).left + n;
}
function Zs(e, t) {
  const n = e.getBoundingClientRect(), o = n.left + t.scrollLeft - Wn(e, n), r = n.top + t.scrollTop;
  return {
    x: o,
    y: r
  };
}
function gl(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: r
  } = e;
  const s = r === "fixed", i = Qe(o), c = t ? Vn(t.floating) : !1;
  if (o === i || c && s)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = ze(1);
  const f = ze(0), p = ct(o);
  if ((p || !s) && ((Lt(o) !== "body" || Bn(i)) && (l = Hn(o)), p)) {
    const g = ht(o);
    u = Rt(o), f.x = g.x + o.clientLeft, f.y = g.y + o.clientTop;
  }
  const m = i && !p && !s ? Zs(i, l) : ze(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + f.x + m.x,
    y: n.y * u.y - l.scrollTop * u.y + f.y + m.y
  };
}
function wl(e) {
  return e.getClientRects ? Array.from(e.getClientRects()) : [];
}
function bl(e) {
  const t = Hn(e), n = e.ownerDocument.body, o = je(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), r = je(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight);
  let s = -t.scrollLeft + Wn(e);
  const i = -t.scrollTop;
  return He(n).direction === "rtl" && (s += je(e.clientWidth, n.clientWidth) - o), {
    width: o,
    height: r,
    x: s,
    y: i
  };
}
const yl = 25;
function Cl(e, t, n) {
  n === void 0 && (n = "viewport");
  const o = n === "layoutViewport", r = pe(e), s = Qe(e), i = r.visualViewport;
  let c = s.clientWidth, l = s.clientHeight, u = 0, f = 0;
  if (i) {
    const m = !cr() || t === "fixed";
    o ? m || (u = -i.offsetLeft, f = -i.offsetTop) : (c = i.width, l = i.height, m && (u = i.offsetLeft, f = i.offsetTop));
  }
  if (Wn(s) <= 0) {
    const m = s.ownerDocument, g = m.body, w = getComputedStyle(g), h = m.compatMode === "CSS1Compat" && parseFloat(w.marginLeft) + parseFloat(w.marginRight) || 0, v = Math.abs(s.clientWidth - g.clientWidth - h), b = getComputedStyle(s).scrollbarGutter === "stable both-edges" ? v / 2 : v;
    b <= yl && (c -= b);
  }
  return {
    width: c,
    height: l,
    x: u,
    y: f
  };
}
function Sl(e, t) {
  const n = ht(e, !0, t === "fixed"), o = n.top + e.clientTop, r = n.left + e.clientLeft, s = Rt(e), i = e.clientWidth * s.x, c = e.clientHeight * s.y, l = r * s.x, u = o * s.y;
  return {
    width: i,
    height: c,
    x: l,
    y: u
  };
}
function Zr(e, t, n) {
  let o;
  if (t === "viewport" || t === "layoutViewport")
    o = Cl(e, n, t);
  else if (t === "document")
    o = bl(Qe(e));
  else if (Ve(t))
    o = Sl(t, n);
  else {
    const r = qs(e);
    o = {
      x: t.x - r.x,
      y: t.y - r.y,
      width: t.width,
      height: t.height
    };
  }
  return On(o);
}
function xl(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = Qt(e, [], !1).filter((c) => Ve(c) && Lt(c) !== "body"), r = null;
  const s = He(e).position === "fixed";
  let i = s ? mt(e) : e;
  for (; Ve(i) && !Jt(i); ) {
    const c = He(i), l = ir(i), u = r ? r.position : s ? "fixed" : "";
    !l && (u === "fixed" || u === "absolute" && c.position === "static") ? o = o.filter((p) => p !== i) : r = c, i = mt(i);
  }
  return t.set(e, o), o;
}
function _l(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: r
  } = e;
  const i = [...n === "clippingAncestors" ? Vn(t) ? [] : xl(t, this._c) : [].concat(n), o], c = Zr(t, i[0], r);
  let l = c.top, u = c.right, f = c.bottom, p = c.left;
  for (let m = 1; m < i.length; m++) {
    const g = Zr(t, i[m], r);
    l = je(g.top, l), u = rt(g.right, u), f = rt(g.bottom, f), p = je(g.left, p);
  }
  return {
    width: u - p,
    height: f - l,
    x: p,
    y: l
  };
}
function El(e) {
  const {
    width: t,
    height: n
  } = Xs(e);
  return {
    width: t,
    height: n
  };
}
function Tl(e, t, n) {
  const o = ct(t), r = Qe(t), s = n === "fixed", i = ht(e, !0, s, t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = ze(0);
  if ((o || !s) && ((Lt(t) !== "body" || Bn(r)) && (c = Hn(t)), o)) {
    const m = ht(t, !0, s, t);
    l.x = m.x + t.clientLeft, l.y = m.y + t.clientTop;
  }
  !o && r && (l.x = Wn(r));
  const u = r && !o && !s ? Zs(r, c) : ze(0), f = i.left + c.scrollLeft - l.x - u.x, p = i.top + c.scrollTop - l.y - u.y;
  return {
    x: f,
    y: p,
    width: i.width,
    height: i.height
  };
}
function ao(e) {
  return He(e).position === "static";
}
function Jr(e, t) {
  if (!ct(e) || He(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Qe(e) === n && (n = n.ownerDocument.body), n;
}
function Js(e, t) {
  const n = pe(e);
  if (Vn(e))
    return n;
  if (!ct(e)) {
    let r = mt(e);
    for (; r && !Jt(r); ) {
      if (Ve(r) && !ao(r))
        return r;
      r = mt(r);
    }
    return n;
  }
  let o = Jr(e, t);
  for (; o && dl(o) && ao(o); )
    o = Jr(o, t);
  return o && Jt(o) && ao(o) && !ir(o) ? n : o || ml(e) || n;
}
const Pl = async function(e) {
  const t = this.getOffsetParent || Js, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: Tl(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function kl(e) {
  return He(e).direction === "rtl";
}
const Rl = {
  convertOffsetParentRelativeRectToViewportRelativeRect: gl,
  getDocumentElement: Qe,
  getClippingRect: _l,
  getOffsetParent: Js,
  getElementRects: Pl,
  getClientRects: wl,
  getDimensions: El,
  getScale: Rt,
  isElement: Ve,
  isRTL: kl
};
function Qs(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Il(e, t, n) {
  let o = null, r;
  const s = Qe(e);
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
    const b = wn(w), S = wn(s.clientWidth - (g + h)), y = wn(s.clientHeight - (w + v)), C = wn(g), _ = {
      rootMargin: -b + "px " + -S + "px " + -y + "px " + -C + "px",
      threshold: je(0, rt(1, p)) || 1
    };
    let E = !0;
    function k(P) {
      const O = P[0].intersectionRatio;
      if (!Qs(m, e.getBoundingClientRect()))
        return c();
      if (O !== p) {
        if (!E)
          return c();
        O ? c(!1, O) : r = setTimeout(() => {
          c(!1, 1e-7);
        }, 1e3);
      }
      E = !1;
    }
    try {
      o = new IntersectionObserver(k, {
        ..._,
        // Handle <iframe>s
        root: s.ownerDocument
      });
    } catch {
      o = new IntersectionObserver(k, _);
    }
    o.observe(e);
  }
  const l = pe(e), u = () => c(n);
  return l.addEventListener("resize", u), c(!0), () => {
    l.removeEventListener("resize", u), i();
  };
}
function Dl(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = o, u = ar(e), f = r || s ? [...u ? Qt(u) : [], ...t ? Qt(t) : []] : [];
  f.forEach((b) => {
    r && b.addEventListener("scroll", n), s && b.addEventListener("resize", n);
  });
  const p = u && c ? Il(u, n, s) : null;
  let m = -1, g = null;
  i && (g = new ResizeObserver((b) => {
    let [S] = b;
    S && S.target === u && g && t && (g.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var y;
      (y = g) == null || y.observe(t);
    })), n();
  }), u && !l && g.observe(u), t && g.observe(t));
  let w, h = l ? ht(e) : null;
  l && v();
  function v() {
    const b = ht(e);
    h && !Qs(h, b) && n(), h = b, w = requestAnimationFrame(v);
  }
  return n(), () => {
    var b;
    f.forEach((S) => {
      r && S.removeEventListener("scroll", n), s && S.removeEventListener("resize", n);
    }), p == null || p(), (b = g) == null || b.disconnect(), g = null, l && cancelAnimationFrame(w);
  };
}
const Ol = cl, Al = al, Nl = rl, Ml = ul, $l = sl, Qr = ol, Ll = ll, Fl = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), r = n ?? {}, s = {
    ...Rl,
    ...r.platform,
    _c: o
  };
  return nl(e, t, {
    ...r,
    platform: s
  });
};
var Bl = typeof document < "u", Vl = function() {
}, Tn = Bl ? Nc : Vl;
function An(e, t) {
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
        if (!An(e[o], t[o]))
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
      if (!(s === "_owner" && e.$$typeof) && !An(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function ei(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function es(e, t) {
  const n = ei(e);
  return Math.round(t * n) / n;
}
function lo(e) {
  const t = a.useRef(e);
  return Tn(() => {
    t.current = e;
  }), t;
}
function Hl(e) {
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
  An(m, o) || g(o);
  const [w, h] = a.useState(null), [v, b] = a.useState(null), S = a.useCallback((L) => {
    L !== _.current && (_.current = L, h(L));
  }, []), y = a.useCallback((L) => {
    L !== E.current && (E.current = L, b(L));
  }, []), C = s || w, x = i || v, _ = a.useRef(null), E = a.useRef(null), k = a.useRef(f), P = l != null, O = lo(l), B = lo(r), A = lo(u), N = a.useCallback(() => {
    if (!_.current || !E.current)
      return;
    const L = {
      placement: t,
      strategy: n,
      middleware: m
    };
    B.current && (L.platform = B.current), Fl(_.current, E.current, L).then((W) => {
      const R = {
        ...W,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: A.current !== !1
      };
      F.current && !An(k.current, R) && (k.current = R, Nt.flushSync(() => {
        p(R);
      }));
    });
  }, [m, t, n, B, A]);
  Tn(() => {
    u === !1 && k.current.isPositioned && (k.current.isPositioned = !1, p((L) => ({
      ...L,
      isPositioned: !1
    })));
  }, [u]);
  const F = a.useRef(!1);
  Tn(() => (F.current = !0, () => {
    F.current = !1;
  }), []), Tn(() => {
    if (C && (_.current = C), x && (E.current = x), C && x) {
      if (O.current)
        return O.current(C, x, N);
      N();
    }
  }, [C, x, N, O, P]);
  const U = a.useMemo(() => ({
    reference: _,
    floating: E,
    setReference: S,
    setFloating: y
  }), [S, y]), T = a.useMemo(() => ({
    reference: C,
    floating: x
  }), [C, x]), M = a.useMemo(() => {
    const L = {
      position: n,
      left: 0,
      top: 0
    };
    if (!T.floating)
      return L;
    const W = es(T.floating, f.x), R = es(T.floating, f.y);
    return c ? {
      ...L,
      transform: "translate(" + W + "px, " + R + "px)",
      ...ei(T.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: W,
      top: R
    };
  }, [n, c, T.floating, f.x, f.y]);
  return a.useMemo(() => ({
    ...f,
    update: N,
    refs: U,
    elements: T,
    floatingStyles: M
  }), [f, N, U, T, M]);
}
const Wl = (e) => {
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
      return o && t(o) ? o.current != null ? Qr({
        element: o.current,
        padding: r
      }).fn(n) : {} : o ? Qr({
        element: o,
        padding: r
      }).fn(n) : {};
    }
  };
}, Ul = (e, t) => {
  const n = Ol(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Kl = (e, t) => {
  const n = Al(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, jl = (e, t) => ({
  fn: Ll(e).fn,
  options: [e, t]
}), zl = (e, t) => {
  const n = Nl(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Gl = (e, t) => {
  const n = Ml(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Yl = (e, t) => {
  const n = $l(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Xl = (e, t) => {
  const n = Wl(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
};
var ql = Object.defineProperty, Zl = (e, t) => ql(e, "name", { value: t, configurable: !0 }), Jl = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ Zl(function(t, n) {
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
), Ql = Jl, eu = Object.defineProperty, tu = (e, t) => eu(e, "name", { value: t, configurable: !0 });
function Un(e) {
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
tu(Un, "useSize");
var nu = Object.defineProperty, Ge = (e, t) => nu(e, "name", { value: t, configurable: !0 }), ti = "Popper", [ni, Ft] = /* @__PURE__ */ me(ti), [ou, oi] = ni(ti), ru = /* @__PURE__ */ Ge((e) => {
  const { __scopePopper: t, children: n } = e, [o, r] = a.useState(null), [s, i] = a.useState(void 0);
  return /* @__PURE__ */ d(
    ou,
    {
      scope: t,
      anchor: o,
      onAnchorChange: r,
      placementState: s,
      setPlacementState: i,
      children: n
    }
  );
}, "Popper"), su = "PopperAnchor", iu = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ Ge(function(t, n) {
    const { __scopePopper: o, virtualRef: r, ...s } = t, i = oi(su, o), c = a.useRef(null), l = i.onAnchorChange, u = a.useCallback(
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
    const m = i.placementState && Kn(i.placementState), g = m == null ? void 0 : m[0], w = m == null ? void 0 : m[1];
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
), ri = "PopperContent", [cu, au] = ni(ri), lu = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ Ge(function(t, n) {
    var X, ee, Y, j, q, Oe, Ae;
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
    } = t, b = oi(ri, o), [S, y] = a.useState(null), C = K(n, y), [x, _] = a.useState(null), E = Un(x), k = (E == null ? void 0 : E.width) ?? 0, P = (E == null ? void 0 : E.height) ?? 0, O = r + (i !== "center" ? "-" + i : ""), B = typeof p == "number" ? p : { top: 0, right: 0, bottom: 0, left: 0, ...p }, A = Array.isArray(f) ? f : [f], N = A.length > 0, F = {
      padding: B,
      boundary: A.filter(si),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: N
    }, { refs: U, floatingStyles: T, placement: M, isPositioned: L, middlewareData: W } = Hl({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: O,
      whileElementsMounted: /* @__PURE__ */ Ge((...lt) => Dl(...lt, {
        animationFrame: w === "always"
      }), "whileElementsMounted"),
      elements: {
        reference: b.anchor
      },
      middleware: [
        Ul({ mainAxis: s + P, alignmentAxis: c }),
        u && Kl({
          mainAxis: !0,
          crossAxis: !1,
          limiter: m === "partial" ? jl() : void 0,
          ...F
        }),
        u && zl({ ...F }),
        Gl({
          ...F,
          apply: /* @__PURE__ */ Ge(({ elements: lt, rects: St, availableWidth: Vt, availableHeight: Dc }) => {
            const { width: Oc, height: Ac } = St.reference, hn = lt.floating.style;
            hn.setProperty("--radix-popper-available-width", `${Vt}px`), hn.setProperty("--radix-popper-available-height", `${Dc}px`), hn.setProperty("--radix-popper-anchor-width", `${Oc}px`), hn.setProperty("--radix-popper-anchor-height", `${Ac}px`);
          }, "apply")
        }),
        x && Xl({ element: x, padding: l }),
        pu({ arrowWidth: k, arrowHeight: P }),
        g && Yl({
          strategy: "referenceHidden",
          ...F,
          // `hide` detects whether the anchor (reference) is clipped, so when
          // no explicit `collisionBoundary` is set we fall back to Floating
          // UI's default clipping ancestors (e.g. a scrollable menu). This
          // lets an occluded submenu hide once its anchor scrolls out of view
          // (#3237). The collision/size middlewares deliberately keep the
          // viewport-based default to avoid clamping content rendered inside
          // transformed or overflow-clipping portal containers.
          boundary: N ? F.boundary : void 0
        })
      ]
    }), R = b.setPlacementState;
    oe(() => (R(M), () => {
      R(void 0);
    }), [M, R]);
    const [Z, G] = Kn(M), Q = ue(h);
    oe(() => {
      L && (Q == null || Q());
    }, [L, Q]);
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
          transform: L ? T.transform : "translate(0, -200%)",
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
          ...((Oe = W.hide) == null ? void 0 : Oe.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: t.dir,
        children: /* @__PURE__ */ d(
          cu,
          {
            scope: o,
            placedSide: Z,
            placedAlign: G,
            onArrowChange: _,
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
                  animation: L ? (Ae = v.style) == null ? void 0 : Ae.animation : "none"
                }
              }
            )
          }
        )
      }
    );
  }, "PopperContent")
), uu = "PopperArrow", du = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, fu = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ Ge(function(t, n) {
    const { __scopePopper: o, ...r } = t, s = au(uu, o), i = du[s.placedSide];
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
            Ql,
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
function si(e) {
  return e !== null;
}
Ge(si, "isNotNull");
var pu = /* @__PURE__ */ Ge((e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var v, b, S;
    const { placement: n, rects: o, middlewareData: r } = t, i = ((v = r.arrow) == null ? void 0 : v.centerOffset) !== 0, c = i ? 0 : e.arrowWidth, l = i ? 0 : e.arrowHeight, [u, f] = Kn(n), p = { start: "0%", center: "50%", end: "100%" }[f], m = (((b = r.arrow) == null ? void 0 : b.x) ?? 0) + c / 2, g = (((S = r.arrow) == null ? void 0 : S.y) ?? 0) + l / 2;
    let w = "", h = "";
    return u === "bottom" ? (w = i ? p : `${m}px`, h = `${-l}px`) : u === "top" ? (w = i ? p : `${m}px`, h = `${o.floating.height + l}px`) : u === "right" ? (w = `${-l}px`, h = i ? p : `${g}px`) : u === "left" && (w = `${o.floating.width + l}px`, h = i ? p : `${g}px`), { data: { x: w, y: h } };
  }
}), "transformOrigin");
function Kn(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
Ge(Kn, "getSideAndAlignFromPlacement");
var lr = ru, ur = iu, dr = lu, mu = fu, hu = Object.defineProperty, vu = (e, t) => hu(e, "name", { value: t, configurable: !0 }), ln = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ vu(function(t, n) {
    var l;
    const { container: o, ...r } = t, [s, i] = a.useState(!1);
    oe(() => i(!0), []);
    const c = o || s && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body);
    return c ? Nt.createPortal(/* @__PURE__ */ d(H.div, { ...r, ref: n }), c) : null;
  }, "Portal")
), gu = Object.defineProperty, qe = (e, t) => gu(e, "name", { value: t, configurable: !0 });
function ii(e, t) {
  return a.useReducer((n, o) => t[n][o] ?? n, e);
}
qe(ii, "useStateMachine");
var Ie = /* @__PURE__ */ qe((e) => {
  const { present: t, children: n } = e, o = ci(t), r = typeof n == "function" ? n({ present: o.isPresent }) : a.Children.only(n), s = ai(o.ref, li(r));
  return typeof n == "function" || o.isPresent ? a.cloneElement(r, { ref: s }) : null;
}, "Presence");
function ci(e) {
  const [t, n] = a.useState(), o = a.useRef(null), r = a.useRef(e), s = a.useRef("none"), i = a.useRef(void 0), c = e ? "mounted" : "unmounted", [l, u] = ii(c, {
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
    l === "mounted" ? (s.current = i.current ?? Pt(o.current), i.current = void 0) : s.current = "none";
  }, [l]), oe(() => {
    const f = o.current, p = r.current;
    if (p !== e) {
      const g = s.current, w = Pt(f);
      e ? (i.current = w, u("MOUNT")) : w === "none" || (f == null ? void 0 : f.display) === "none" ? u("UNMOUNT") : u(p && g !== w ? "ANIMATION_OUT" : "UNMOUNT"), r.current = e;
    }
  }, [e, u]), oe(() => {
    if (t) {
      let f;
      const p = t.ownerDocument.defaultView ?? window, m = /* @__PURE__ */ qe((w) => {
        const v = Pt(o.current).includes(CSS.escape(w.animationName));
        if (w.target === t && v && (u("ANIMATION_END"), !r.current)) {
          const b = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", f = p.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = b);
          });
        }
      }, "handleAnimationEnd"), g = /* @__PURE__ */ qe((w) => {
        w.target === t && (s.current = Pt(o.current));
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
        o.current = p, i.current = Pt(p);
      } else
        o.current = null;
      n(f);
    }, [])
  };
}
qe(ci, "usePresence");
function No(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
qe(No, "setRef");
function ai(...e) {
  const t = a.useRef(e);
  return t.current = e, a.useCallback((n) => {
    const o = t.current;
    let r = !1;
    const s = o.map((i) => {
      const c = No(i, n);
      return !r && typeof c == "function" && (r = !0), c;
    });
    if (r)
      return () => {
        for (let i = 0; i < s.length; i++) {
          const c = s[i];
          typeof c == "function" ? c() : No(o[i], null);
        }
      };
  }, []);
}
qe(ai, "useStableComposedRefs");
function Pt(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
qe(Pt, "getAnimationName");
function li(e) {
  var o, r;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
qe(li, "getElementRef");
var wu = Object.defineProperty, bu = (e, t) => wu(e, "name", { value: t, configurable: !0 }), ts = a[" useEffectEvent ".trim().toString()], ns = a[" useInsertionEffect ".trim().toString()];
function ui(e) {
  if (typeof ts == "function")
    return ts(e);
  const t = a.useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  return typeof ns == "function" ? ns(() => {
    t.current = e;
  }) : oe(() => {
    t.current = e;
  }), a.useMemo(() => ((...n) => {
    var o;
    return (o = t.current) == null ? void 0 : o.call(t, ...n);
  }), []);
}
bu(ui, "useEffectEvent");
var yu = Object.defineProperty, un = (e, t) => yu(e, "name", { value: t, configurable: !0 }), Cu = a[" useInsertionEffect ".trim().toString()] || oe;
function ke({
  prop: e,
  defaultProp: t,
  onChange: n = /* @__PURE__ */ un(() => {
  }, "onChange"),
  caller: o
}) {
  const [r, s, i] = di({
    defaultProp: t,
    onChange: n
  }), c = e !== void 0, l = c ? e : r, u = a.useCallback(
    (f) => {
      var p;
      if (c) {
        const m = fi(f) ? f(e) : f;
        m !== e && ((p = i.current) == null || p.call(i, m));
      } else
        s(f);
    },
    [c, e, s, i]
  );
  return [l, u];
}
un(ke, "useControllableState");
function di({
  defaultProp: e,
  onChange: t
}) {
  const [n, o] = a.useState(e), r = a.useRef(n), s = a.useRef(t);
  return Cu(() => {
    s.current = t;
  }, [t]), a.useEffect(() => {
    var i;
    r.current !== n && ((i = s.current) == null || i.call(s, n), r.current = n);
  }, [n, r]), [n, o, s];
}
un(di, "useUncontrolledState");
function fi(e) {
  return typeof e == "function";
}
un(fi, "isFunction");
var os = Symbol("RADIX:SYNC_STATE");
function Su(e, t, n, o) {
  const { prop: r, defaultProp: s, onChange: i, caller: c } = t, l = r !== void 0, u = ui(i), f = [{ ...n, state: s }];
  o && f.push(o);
  const [p, m] = a.useReducer(
    (v, b) => {
      if (b.type === os)
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
    l && !Object.is(r, p.state) && m({ type: os, state: r });
  }, [r, p.state, l]), [h, m];
}
un(Su, "useControllableStateReducer");
var xu = Object.defineProperty, _u = (e, t) => xu(e, "name", { value: t, configurable: !0 });
function pi(e) {
  const t = a.useRef({ value: e, previous: e });
  return a.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
_u(pi, "usePrevious");
var Eu = Object.defineProperty, Tu = (e, t) => Eu(e, "name", { value: t, configurable: !0 }), mi = Object.freeze({
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
}), fr = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ Tu(function(t, n) {
    return /* @__PURE__ */ d(
      H.span,
      {
        ...t,
        ref: n,
        style: { ...mi, ...t.style }
      }
    );
  }, "VisuallyHidden")
), Pu = fr, ku = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, xt = /* @__PURE__ */ new WeakMap(), bn = /* @__PURE__ */ new WeakMap(), yn = {}, uo = 0, hi = function(e) {
  return e && (e.host || hi(e.parentNode));
}, Ru = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = hi(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Iu = function(e, t, n, o) {
  var r = Ru(t, Array.isArray(e) ? e : [e]);
  yn[n] || (yn[n] = /* @__PURE__ */ new WeakMap());
  var s = yn[n], i = [], c = /* @__PURE__ */ new Set(), l = new Set(r), u = function(p) {
    !p || c.has(p) || (c.add(p), u(p.parentNode));
  };
  r.forEach(u);
  var f = function(p) {
    !p || l.has(p) || Array.prototype.forEach.call(p.children, function(m) {
      if (c.has(m))
        f(m);
      else
        try {
          var g = m.getAttribute(o), w = g !== null && g !== "false", h = (xt.get(m) || 0) + 1, v = (s.get(m) || 0) + 1;
          xt.set(m, h), s.set(m, v), i.push(m), h === 1 && w && bn.set(m, !0), v === 1 && m.setAttribute(n, "true"), w || m.setAttribute(o, "true");
        } catch (b) {
          console.error("aria-hidden: cannot operate on ", m, b);
        }
    });
  };
  return f(t), c.clear(), uo++, function() {
    i.forEach(function(p) {
      var m = xt.get(p) - 1, g = s.get(p) - 1;
      xt.set(p, m), s.set(p, g), m || (bn.has(p) || p.removeAttribute(o), bn.delete(p)), g || p.removeAttribute(n);
    }), uo--, uo || (xt = /* @__PURE__ */ new WeakMap(), xt = /* @__PURE__ */ new WeakMap(), bn = /* @__PURE__ */ new WeakMap(), yn = {});
  };
}, pr = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), r = ku(e);
  return r ? (o.push.apply(o, Array.from(r.querySelectorAll("[aria-live], script"))), Iu(o, r, n, "aria-hidden")) : function() {
    return null;
  };
}, Le = function() {
  return Le = Object.assign || function(t) {
    for (var n, o = 1, r = arguments.length; o < r; o++) {
      n = arguments[o];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, Le.apply(this, arguments);
};
function vi(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
}
function Du(e, t, n) {
  if (n || arguments.length === 2) for (var o = 0, r = t.length, s; o < r; o++)
    (s || !(o in t)) && (s || (s = Array.prototype.slice.call(t, 0, o)), s[o] = t[o]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var Pn = "right-scroll-bar-position", kn = "width-before-scroll-bar", Ou = "with-scroll-bars-hidden", Au = "--removed-body-scroll-bar-size";
function fo(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Nu(e, t) {
  var n = Pe(function() {
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
var Mu = typeof window < "u" ? a.useLayoutEffect : a.useEffect, rs = /* @__PURE__ */ new WeakMap();
function $u(e, t) {
  var n = Nu(null, function(o) {
    return e.forEach(function(r) {
      return fo(r, o);
    });
  });
  return Mu(function() {
    var o = rs.get(n);
    if (o) {
      var r = new Set(o), s = new Set(e), i = n.current;
      r.forEach(function(c) {
        s.has(c) || fo(c, null);
      }), s.forEach(function(c) {
        r.has(c) || fo(c, i);
      });
    }
    rs.set(n, e);
  }, [e]), n;
}
function Lu(e) {
  return e;
}
function Fu(e, t) {
  t === void 0 && (t = Lu);
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
function Bu(e) {
  e === void 0 && (e = {});
  var t = Fu(null);
  return t.options = Le({ async: !0, ssr: !1 }, e), t;
}
var gi = function(e) {
  var t = e.sideCar, n = vi(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = t.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return a.createElement(o, Le({}, n));
};
gi.isSideCarExport = !0;
function Vu(e, t) {
  return e.useMedium(t), gi;
}
var wi = Bu(), po = function() {
}, jn = a.forwardRef(function(e, t) {
  var n = a.useRef(null), o = a.useState({
    onScrollCapture: po,
    onWheelCapture: po,
    onTouchMoveCapture: po
  }), r = o[0], s = o[1], i = e.forwardProps, c = e.children, l = e.className, u = e.removeScrollBar, f = e.enabled, p = e.shards, m = e.sideCar, g = e.noRelative, w = e.noIsolation, h = e.inert, v = e.allowPinchZoom, b = e.as, S = b === void 0 ? "div" : b, y = e.gapMode, C = vi(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), x = m, _ = $u([n, t]), E = Le(Le({}, C), r);
  return a.createElement(
    a.Fragment,
    null,
    f && a.createElement(x, { sideCar: wi, removeScrollBar: u, shards: p, noRelative: g, noIsolation: w, inert: h, setCallbacks: s, allowPinchZoom: !!v, lockRef: n, gapMode: y }),
    i ? a.cloneElement(a.Children.only(c), Le(Le({}, E), { ref: _ })) : a.createElement(S, Le({}, E, { className: l, ref: _ }), c)
  );
});
jn.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
jn.classNames = {
  fullWidth: kn,
  zeroRight: Pn
};
var Hu = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Wu() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Hu();
  return t && e.setAttribute("nonce", t), e;
}
function Uu(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Ku(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var ju = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Wu()) && (Uu(t, n), Ku(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, zu = function() {
  var e = ju();
  return function(t, n) {
    a.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, bi = function() {
  var e = zu(), t = function(n) {
    var o = n.styles, r = n.dynamic;
    return e(o, r), null;
  };
  return t;
}, Gu = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, mo = function(e) {
  return parseInt(e || "", 10) || 0;
}, Yu = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], o = t[e === "padding" ? "paddingTop" : "marginTop"], r = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [mo(n), mo(o), mo(r)];
}, Xu = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Gu;
  var t = Yu(e), n = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, o - n + t[2] - t[0])
  };
}, qu = bi(), It = "data-scroll-locked", Zu = function(e, t, n, o) {
  var r = e.left, s = e.top, i = e.right, c = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Ou, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(c, "px ").concat(o, `;
  }
  body[`).concat(It, `] {
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
  
  .`).concat(Pn, ` {
    right: `).concat(c, "px ").concat(o, `;
  }
  
  .`).concat(kn, ` {
    margin-right: `).concat(c, "px ").concat(o, `;
  }
  
  .`).concat(Pn, " .").concat(Pn, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(kn, " .").concat(kn, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat(It, `] {
    `).concat(Au, ": ").concat(c, `px;
  }
`);
}, ss = function() {
  var e = parseInt(document.body.getAttribute(It) || "0", 10);
  return isFinite(e) ? e : 0;
}, Ju = function() {
  a.useEffect(function() {
    return document.body.setAttribute(It, (ss() + 1).toString()), function() {
      var e = ss() - 1;
      e <= 0 ? document.body.removeAttribute(It) : document.body.setAttribute(It, e.toString());
    };
  }, []);
}, Qu = function(e) {
  var t = e.noRelative, n = e.noImportant, o = e.gapMode, r = o === void 0 ? "margin" : o;
  Ju();
  var s = a.useMemo(function() {
    return Xu(r);
  }, [r]);
  return a.createElement(qu, { styles: Zu(s, !t, r, n ? "" : "!important") });
}, Mo = !1;
if (typeof window < "u")
  try {
    var Cn = Object.defineProperty({}, "passive", {
      get: function() {
        return Mo = !0, !0;
      }
    });
    window.addEventListener("test", Cn, Cn), window.removeEventListener("test", Cn, Cn);
  } catch {
    Mo = !1;
  }
var _t = Mo ? { passive: !1 } : !1, ed = function(e) {
  return e.tagName === "TEXTAREA";
}, yi = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !ed(e) && n[t] === "visible")
  );
}, td = function(e) {
  return yi(e, "overflowY");
}, nd = function(e) {
  return yi(e, "overflowX");
}, is = function(e, t) {
  var n = t.ownerDocument, o = t;
  do {
    typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
    var r = Ci(e, o);
    if (r) {
      var s = Si(e, o), i = s[1], c = s[2];
      if (i > c)
        return !0;
    }
    o = o.parentNode;
  } while (o && o !== n.body);
  return !1;
}, od = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, o = e.clientHeight;
  return [
    t,
    n,
    o
  ];
}, rd = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, o = e.clientWidth;
  return [
    t,
    n,
    o
  ];
}, Ci = function(e, t) {
  return e === "v" ? td(t) : nd(t);
}, Si = function(e, t) {
  return e === "v" ? od(t) : rd(t);
}, sd = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, id = function(e, t, n, o, r) {
  var s = sd(e, window.getComputedStyle(t).direction), i = s * o, c = n.target, l = t.contains(c), u = !1, f = i > 0, p = 0, m = 0;
  do {
    if (!c)
      break;
    var g = Si(e, c), w = g[0], h = g[1], v = g[2], b = h - v - s * w;
    (w || b) && Ci(e, c) && (p += b, m += w);
    var S = c.parentNode;
    c = S && S.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? S.host : S;
  } while (
    // portaled content
    !l && c !== document.body || // self content
    l && (t.contains(c) || t === c)
  );
  return (f && Math.abs(p) < 1 || !f && Math.abs(m) < 1) && (u = !0), u;
}, Sn = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, cs = function(e) {
  return [e.deltaX, e.deltaY];
}, as = function(e) {
  return e && "current" in e ? e.current : e;
}, cd = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, ad = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, ld = 0, Et = [];
function ud(e) {
  var t = a.useRef([]), n = a.useRef([0, 0]), o = a.useRef(), r = a.useState(ld++)[0], s = a.useState(bi)[0], i = a.useRef(e);
  a.useEffect(function() {
    i.current = e;
  }, [e]), a.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(r));
      var h = Du([e.lockRef.current], (e.shards || []).map(as), !0).filter(Boolean);
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
    var b = Sn(h), S = n.current, y = "deltaX" in h ? h.deltaX : S[0] - b[0], C = "deltaY" in h ? h.deltaY : S[1] - b[1], x, _ = h.target, E = Math.abs(y) > Math.abs(C) ? "h" : "v";
    if ("touches" in h && E === "h" && _.type === "range")
      return !1;
    var k = window.getSelection(), P = k && k.anchorNode, O = P ? P === _ || P.contains(_) : !1;
    if (O)
      return !1;
    var B = is(E, _);
    if (!B)
      return !0;
    if (B ? x = E : (x = E === "v" ? "h" : "v", B = is(E, _)), !B)
      return !1;
    if (!o.current && "changedTouches" in h && (y || C) && (o.current = x), !x)
      return !0;
    var A = o.current || x;
    return id(A, v, h, A === "h" ? y : C);
  }, []), l = a.useCallback(function(h) {
    var v = h;
    if (!(!Et.length || Et[Et.length - 1] !== s)) {
      var b = "deltaY" in v ? cs(v) : Sn(v), S = t.current.filter(function(x) {
        return x.name === v.type && (x.target === v.target || v.target === x.shadowParent) && cd(x.delta, b);
      })[0];
      if (S && S.should) {
        v.cancelable && v.preventDefault();
        return;
      }
      if (!S) {
        var y = (i.current.shards || []).map(as).filter(Boolean).filter(function(x) {
          return x.contains(v.target);
        }), C = y.length > 0 ? c(v, y[0]) : !i.current.noIsolation;
        C && v.cancelable && v.preventDefault();
      }
    }
  }, []), u = a.useCallback(function(h, v, b, S) {
    var y = { name: h, delta: v, target: b, should: S, shadowParent: dd(b) };
    t.current.push(y), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== y;
      });
    }, 1);
  }, []), f = a.useCallback(function(h) {
    n.current = Sn(h), o.current = void 0;
  }, []), p = a.useCallback(function(h) {
    u(h.type, cs(h), h.target, c(h, e.lockRef.current));
  }, []), m = a.useCallback(function(h) {
    u(h.type, Sn(h), h.target, c(h, e.lockRef.current));
  }, []);
  a.useEffect(function() {
    return Et.push(s), e.setCallbacks({
      onScrollCapture: p,
      onWheelCapture: p,
      onTouchMoveCapture: m
    }), document.addEventListener("wheel", l, _t), document.addEventListener("touchmove", l, _t), document.addEventListener("touchstart", f, _t), function() {
      Et = Et.filter(function(h) {
        return h !== s;
      }), document.removeEventListener("wheel", l, _t), document.removeEventListener("touchmove", l, _t), document.removeEventListener("touchstart", f, _t);
    };
  }, []);
  var g = e.removeScrollBar, w = e.inert;
  return a.createElement(
    a.Fragment,
    null,
    w ? a.createElement(s, { styles: ad(r) }) : null,
    g ? a.createElement(Qu, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function dd(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const fd = Vu(wi, ud);
var zn = a.forwardRef(function(e, t) {
  return a.createElement(jn, Le({}, e, { ref: t, sideCar: fd }));
});
zn.classNames = jn.classNames;
var pd = Object.defineProperty, z = (e, t) => pd(e, "name", { value: t, configurable: !0 }), md = [" ", "Enter", "ArrowUp", "ArrowDown"], hd = [" ", "Enter"], At = "Select", [Gn, mr, vd] = /* @__PURE__ */ rn(At), [gt, tb] = /* @__PURE__ */ me(At, [
  vd,
  Ft
]), hr = Ft(), [gd, at] = gt(At), [wd, bd] = gt(At);
function xi(e) {
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
  } = e, v = hr(t), [b, S] = a.useState(null), [y, C] = a.useState(null), [x, _] = a.useState(!1), E = sn(u), [k, P] = ke({
    prop: o,
    defaultProp: r ?? !1,
    onChange: s,
    caller: At
  }), [O, B] = ke({
    prop: i,
    defaultProp: c,
    onChange: l,
    caller: At
  }), A = a.useRef(null), N = a.useRef(O);
  a.useEffect(() => {
    const G = w ? b == null ? void 0 : b.ownerDocument.getElementById(w) : b == null ? void 0 : b.form;
    if (G instanceof HTMLFormElement) {
      const Q = /* @__PURE__ */ z(() => B(N.current), "reset");
      return G.addEventListener("reset", Q), () => G.removeEventListener("reset", Q);
    }
  }, [w, b, B]);
  const F = b ? !!w || !!b.closest("form") : !0, [U, T] = a.useState(/* @__PURE__ */ new Set()), M = _e(), L = Array.from(U).map((G) => G.props.value).join(";"), W = a.useCallback((G) => {
    T((Q) => new Set(Q).add(G));
  }, []), R = a.useCallback((G) => {
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
    onValueNodeHasChildrenChange: _,
    contentId: M,
    value: O,
    onValueChange: B,
    open: k,
    onOpenChange: P,
    dir: E,
    triggerPointerDownPosRef: A,
    disabled: m,
    name: f,
    autoComplete: p,
    form: w,
    nativeOptions: U,
    nativeSelectKey: L,
    isFormControl: F
  };
  return /* @__PURE__ */ d(lr, { ...v, children: /* @__PURE__ */ d(gd, { scope: t, ...Z, children: /* @__PURE__ */ d(Gn.Provider, { scope: t, children: /* @__PURE__ */ d(
    wd,
    {
      scope: t,
      onNativeOptionAdd: W,
      onNativeOptionRemove: R,
      children: Ti(h) ? h(Z) : n
    }
  ) }) }) });
}
z(xi, "SelectProvider");
var yd = /* @__PURE__ */ z((e) => {
  const { __scopeSelect: t, children: n, ...o } = e;
  return /* @__PURE__ */ d(
    xi,
    {
      __scopeSelect: t,
      ...o,
      internal_do_not_use_render: ({ isFormControl: r }) => /* @__PURE__ */ D(We, { children: [
        n,
        r ? /* @__PURE__ */ d(
          Zd,
          {
            __scopeSelect: t
          }
        ) : null
      ] })
    }
  );
}, "Select"), Cd = "SelectTrigger", Sd = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ z(function(t, n) {
    const { __scopeSelect: o, disabled: r = !1, ...s } = t, i = hr(o), c = at(Cd, o), l = c.disabled || r, u = K(n, c.onTriggerChange), f = mr(o), p = a.useRef("touch"), [m, g, w] = vr((v) => {
      const b = f().filter((C) => !C.disabled), S = b.find((C) => C.value === c.value), y = gr(b, v, S);
      y !== void 0 && c.onValueChange(y.value);
    }), h = /* @__PURE__ */ z((v) => {
      l || (c.onOpenChange(!0), w()), v && (c.triggerPointerDownPosRef.current = {
        x: Math.round(v.pageX),
        y: Math.round(v.pageY)
      });
    }, "handleOpen");
    return /* @__PURE__ */ d(ur, { asChild: !0, ...i, children: /* @__PURE__ */ d(
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
        "data-placeholder": dn(c.value) ? "" : void 0,
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
          !(v.ctrlKey || v.altKey || v.metaKey) && v.key.length === 1 && g(v.key), !(b && v.key === " ") && md.includes(v.key) && (h(), v.preventDefault());
        })
      }
    ) });
  }, "SelectTrigger")
), xd = "SelectValue", _d = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ z(function(t, n) {
    const { __scopeSelect: o, className: r, style: s, children: i, placeholder: c = "", ...l } = t, u = at(xd, o), { onValueNodeHasChildrenChange: f } = u, p = i !== void 0, m = K(n, u.onValueNodeChange);
    oe(() => {
      f(p);
    }, [f, p]);
    const g = dn(u.value);
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
), Ed = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ z(function(t, n) {
    const { __scopeSelect: o, children: r, ...s } = t;
    return /* @__PURE__ */ d(H.span, { "aria-hidden": !0, ...s, ref: n, children: r || "▼" });
  }, "SelectIcon")
), Td = "SelectPortal", [Pd, kd] = gt(Td, {
  forceMount: void 0
}), Rd = /* @__PURE__ */ z((e) => {
  const { __scopeSelect: t, forceMount: n, ...o } = e;
  return /* @__PURE__ */ d(Pd, { scope: e.__scopeSelect, forceMount: n, children: /* @__PURE__ */ d(ln, { asChild: !0, ...o }) });
}, "SelectPortal"), vt = "SelectContent", Id = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ z(function(t, n) {
    const o = kd(vt, t.__scopeSelect), { forceMount: r = o.forceMount, ...s } = t, i = at(vt, t.__scopeSelect), [c, l] = a.useState();
    return oe(() => {
      l(new DocumentFragment());
    }, []), /* @__PURE__ */ d(Ie, { present: r || i.open, children: ({ present: u }) => u ? /* @__PURE__ */ d(Ad, { ...s, ref: n }) : /* @__PURE__ */ d(Dd, { ...s, fragment: c }) });
  }, "SelectContent")
), Dd = /* @__PURE__ */ a.forwardRef(/* @__PURE__ */ z(function(t, n) {
  const { __scopeSelect: o, children: r, fragment: s } = t;
  return s ? Nt.createPortal(
    /* @__PURE__ */ d(_i, { scope: o, children: /* @__PURE__ */ d(Gn.Slot, { scope: o, children: /* @__PURE__ */ d("div", { ref: n, children: r }) }) }),
    s
  ) : null;
}, "SelectContentFragment")), Te = 10, [_i, Yn] = gt(vt), Od = /* @__PURE__ */ Be("SelectContent.RemoveScroll"), Ad = /* @__PURE__ */ a.forwardRef(
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
    } = t, y = at(vt, o), [C, x] = a.useState(null), [_, E] = a.useState(null), k = K(n, x), [P, O] = a.useState(null), [B, A] = a.useState(
      null
    ), N = mr(o), [F, U] = a.useState(!1), T = a.useRef(!1);
    a.useEffect(() => {
      if (C) return pr(C);
    }, [C]), an();
    const M = a.useCallback(
      (V) => {
        const [X, ...ee] = N().map((q) => q.ref.current), [Y] = ee.slice(-1), j = document.activeElement;
        for (const q of V)
          if (q === j || (q == null || q.scrollIntoView({ block: "nearest" }), q === X && _ && (_.scrollTop = 0), q === Y && _ && (_.scrollTop = _.scrollHeight), q == null || q.focus(), document.activeElement !== j)) return;
      },
      [N, _]
    ), L = a.useCallback(
      () => M([P, C]),
      [M, P, C]
    );
    a.useEffect(() => {
      F && L();
    }, [F, L]);
    const { onOpenChange: W, triggerPointerDownPosRef: R } = y;
    a.useEffect(() => {
      if (C) {
        let V = { x: 0, y: 0 };
        const X = /* @__PURE__ */ z((Y) => {
          var j, q;
          V = {
            x: Math.abs(Math.round(Y.pageX) - (((j = R.current) == null ? void 0 : j.x) ?? 0)),
            y: Math.abs(Math.round(Y.pageY) - (((q = R.current) == null ? void 0 : q.y) ?? 0))
          };
        }, "handlePointerMove"), ee = /* @__PURE__ */ z((Y) => {
          V.x <= 10 && V.y <= 10 ? Y.preventDefault() : Y.composedPath().includes(C) || W(!1), document.removeEventListener("pointermove", X), R.current = null;
        }, "handlePointerUp");
        return R.current !== null && (document.addEventListener("pointermove", X), document.addEventListener("pointerup", ee, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", X), document.removeEventListener("pointerup", ee, { capture: !0 });
        };
      }
    }, [C, W, R]), a.useEffect(() => {
      const V = /* @__PURE__ */ z(() => W(!1), "close");
      return window.addEventListener("blur", V), window.addEventListener("resize", V), () => {
        window.removeEventListener("blur", V), window.removeEventListener("resize", V);
      };
    }, [W]);
    const [Z, G] = vr((V) => {
      const X = N().filter((j) => !j.disabled), ee = X.find((j) => j.ref.current === document.activeElement), Y = gr(X, V, ee);
      Y && setTimeout(() => {
        var j;
        return (j = Y.ref.current) == null ? void 0 : j.focus();
      });
    }), Q = a.useCallback(
      (V, X, ee) => {
        const Y = !T.current && !ee;
        (y.value !== void 0 && y.value === X || Y) && (O(V), Y && (T.current = !0));
      },
      [y.value]
    ), ae = a.useCallback(() => C == null ? void 0 : C.focus(), [C]), ce = a.useCallback(
      (V, X, ee) => {
        const Y = !T.current && !ee;
        (y.value !== void 0 && y.value === X || Y) && A(V);
      },
      [y.value]
    ), we = r === "popper" ? ls : Nd, he = we === ls ? {
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
      _i,
      {
        scope: o,
        content: C,
        viewport: _,
        onViewportChange: E,
        itemRefCallback: Q,
        selectedItem: P,
        onItemLeave: ae,
        itemTextRefCallback: ce,
        focusSelectedItem: L,
        selectedItemText: B,
        position: r,
        isPositioned: F,
        searchRef: Z,
        children: /* @__PURE__ */ d(zn, { as: Od, allowPinchZoom: !0, children: /* @__PURE__ */ d(
          tr,
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
              cn,
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
                    ref: k,
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
                        let Y = N().filter((j) => !j.disabled).map((j) => j.ref.current);
                        if (["ArrowUp", "End"].includes(V.key) && (Y = Y.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(V.key)) {
                          const j = V.target, q = Y.indexOf(j);
                          Y = Y.slice(q + 1);
                        }
                        setTimeout(() => M(Y)), V.preventDefault();
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
), Nd = /* @__PURE__ */ a.forwardRef(/* @__PURE__ */ z(function(t, n) {
  const { __scopeSelect: o, onPlaced: r, ...s } = t, i = at(vt, o), c = Yn(vt, o), [l, u] = a.useState(null), [f, p] = a.useState(null), m = K(n, p), g = mr(o), w = a.useRef(!1), h = a.useRef(!0), { viewport: v, selectedItem: b, selectedItemText: S, focusSelectedItem: y } = c, C = a.useCallback(() => {
    if (i.trigger && i.valueNode && l && f && v && b && S) {
      const k = i.trigger.getBoundingClientRect(), P = f.getBoundingClientRect(), O = i.valueNode.getBoundingClientRect(), B = S.getBoundingClientRect();
      if (i.dir !== "rtl") {
        const j = B.left - P.left, q = O.left - j, Oe = k.left - q, Ae = k.width + Oe, lt = Math.max(Ae, P.width), St = window.innerWidth - Te, Vt = _o(q, [
          Te,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Te, St - lt)
        ]);
        l.style.minWidth = Ae + "px", l.style.left = Vt + "px";
      } else {
        const j = P.right - B.right, q = window.innerWidth - O.right - j, Oe = window.innerWidth - k.right - q, Ae = k.width + Oe, lt = Math.max(Ae, P.width), St = window.innerWidth - Te, Vt = _o(q, [
          Te,
          Math.max(Te, St - lt)
        ]);
        l.style.minWidth = Ae + "px", l.style.right = Vt + "px";
      }
      const A = g(), N = window.innerHeight - Te * 2, F = v.scrollHeight, U = window.getComputedStyle(f), T = parseInt(U.borderTopWidth, 10), M = parseInt(U.paddingTop, 10), L = parseInt(U.borderBottomWidth, 10), W = parseInt(U.paddingBottom, 10), R = T + M + F + W + L, Z = Math.min(b.offsetHeight * 5, R), G = window.getComputedStyle(v), Q = parseInt(G.paddingTop, 10), ae = parseInt(G.paddingBottom, 10), ce = k.top + k.height / 2 - Te, we = N - ce, he = b.offsetHeight / 2, V = b.offsetTop + he, X = T + M + V, ee = R - X;
      if (X <= ce) {
        const j = A.length > 0 && b === A[A.length - 1].ref.current;
        l.style.bottom = "0px";
        const q = f.clientHeight - v.offsetTop - v.offsetHeight, Oe = Math.max(
          we,
          he + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (j ? ae : 0) + q + L
        ), Ae = X + Oe;
        l.style.height = Ae + "px";
      } else {
        const j = A.length > 0 && b === A[0].ref.current;
        l.style.top = "0px";
        const Oe = Math.max(
          ce,
          T + v.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (j ? Q : 0) + he
        ) + ee;
        l.style.height = Oe + "px", v.scrollTop = X - ce + v.offsetTop;
      }
      l.style.margin = `${Te}px 0`, l.style.minHeight = Z + "px", l.style.maxHeight = N + "px", r == null || r(), requestAnimationFrame(() => w.current = !0);
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
  const [x, _] = a.useState();
  oe(() => {
    f && _(window.getComputedStyle(f).zIndex);
  }, [f]);
  const E = a.useCallback(
    (k) => {
      k && h.current === !0 && (C(), y == null || y(), h.current = !1);
    },
    [C, y]
  );
  return /* @__PURE__ */ d(
    Md,
    {
      scope: o,
      contentWrapper: l,
      shouldExpandOnScrollRef: w,
      onScrollButtonChange: E,
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
}, "SelectItemAlignedPosition")), ls = /* @__PURE__ */ a.forwardRef(/* @__PURE__ */ z(function(t, n) {
  const {
    __scopeSelect: o,
    align: r = "start",
    collisionPadding: s = Te,
    ...i
  } = t, c = hr(o);
  return /* @__PURE__ */ d(
    dr,
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
}, "SelectPopperPosition")), [Md, $d] = gt(vt, {}), us = "SelectViewport", Ld = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ z(function(t, n) {
    const { __scopeSelect: o, nonce: r, ...s } = t, i = Yn(us, o), c = $d(us, o), l = K(n, i.onViewportChange), u = a.useRef(0);
    return /* @__PURE__ */ D(We, { children: [
      /* @__PURE__ */ d(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ d(Gn.Slot, { scope: o, children: /* @__PURE__ */ d(
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
                const h = window.innerHeight - Te * 2, v = parseFloat(m.style.minHeight), b = parseFloat(m.style.height), S = Math.max(v, b);
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
), Fd = "SelectGroup", [Bd, Vd] = gt(Fd), Hd = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ z(function(t, n) {
    const { __scopeSelect: o, ...r } = t, s = _e();
    return /* @__PURE__ */ d(Bd, { scope: o, id: s, children: /* @__PURE__ */ d(H.div, { role: "group", "aria-labelledby": s, ...r, ref: n }) });
  }, "SelectGroup")
), Wd = "SelectLabel", Ud = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ z(function(t, n) {
    const { __scopeSelect: o, ...r } = t, s = Vd(Wd, o);
    return /* @__PURE__ */ d(H.div, { id: s.id, ...r, ref: n });
  }, "SelectLabel")
), $o = "SelectItem", [Kd, Ei] = gt($o), jd = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ z(function(t, n) {
    const {
      __scopeSelect: o,
      value: r,
      disabled: s = !1,
      textValue: i,
      ...c
    } = t, l = at($o, o), u = Yn($o, o), f = l.value === r, [p, m] = a.useState(i ?? ""), [g, w] = a.useState(!1), h = ue(
      (C) => {
        var x;
        return (x = u.itemRefCallback) == null ? void 0 : x.call(u, C, r, s);
      }
    ), v = K(n, h), b = _e(), S = a.useRef("touch"), y = /* @__PURE__ */ z(() => {
      s || (l.onValueChange(r), l.onOpenChange(!1));
    }, "handleSelect");
    return /* @__PURE__ */ d(
      Kd,
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
          Gn.ItemSlot,
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
                  var _;
                  s || C.target !== C.currentTarget || ((_ = u.searchRef) == null ? void 0 : _.current) !== "" && C.key === " " || (hd.includes(C.key) && y(), C.key === " " && C.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }, "SelectItem")
), xn = "SelectItemText", zd = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ z(function(t, n) {
    const { __scopeSelect: o, className: r, style: s, ...i } = t, c = at(xn, o), l = Yn(xn, o), u = Ei(xn, o), f = bd(xn, o), [p, m] = a.useState(null), g = ue(
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
    return oe(() => (b(v), () => S(v)), [b, S, v]), /* @__PURE__ */ D(We, { children: [
      /* @__PURE__ */ d(H.span, { id: u.textId, ...i, ref: w }),
      u.isSelected && c.valueNode && !c.valueNodeHasChildren && !dn(c.value) ? Nt.createPortal(i.children, c.valueNode) : null
    ] });
  }, "SelectItemText")
), Gd = "SelectItemIndicator", Yd = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ z(function(t, n) {
    const { __scopeSelect: o, ...r } = t;
    return Ei(Gd, o).isSelected ? /* @__PURE__ */ d(H.span, { "aria-hidden": !0, ...r, ref: n }) : null;
  }, "SelectItemIndicator")
), Xd = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ z(function(t, n) {
    const { __scopeSelect: o, ...r } = t;
    return /* @__PURE__ */ d(H.div, { "aria-hidden": !0, ...r, ref: n });
  }, "SelectSeparator")
), qd = "SelectBubbleInput", Zd = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ z(function({ __scopeSelect: t, ...n }, o) {
    const r = at(qd, t), { value: s, onValueChange: i, required: c, disabled: l, name: u, autoComplete: f, form: p } = r, { nativeOptions: m, nativeSelectKey: g } = r, w = a.useRef(null), h = K(o, w), v = s ?? "", b = pi(v), S = Array.from(m).some(
      (y) => (y.props.value ?? "") === ""
    );
    return a.useEffect(() => {
      const y = w.current;
      if (!y) return;
      const C = window.HTMLSelectElement.prototype, _ = Object.getOwnPropertyDescriptor(
        C,
        "value"
      ).set;
      if (b !== v && _) {
        const E = new Event("change", { bubbles: !0 });
        _.call(y, v), y.dispatchEvent(E);
      }
    }, [b, v]), /* @__PURE__ */ D(
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
        style: { ...mi, ...n.style },
        ref: h,
        defaultValue: v,
        children: [
          dn(s) && !S ? /* @__PURE__ */ d("option", { value: "" }) : null,
          Array.from(m)
        ]
      },
      g
    );
  }, "SelectBubbleInput")
);
function Ti(e) {
  return typeof e == "function";
}
z(Ti, "isFunction");
function dn(e) {
  return e === "" || e === void 0;
}
z(dn, "shouldShowPlaceholder");
function vr(e) {
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
z(vr, "useTypeaheadSearch");
function gr(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let i = Pi(e, Math.max(s, 0));
  r.length === 1 && (i = i.filter((u) => u !== n));
  const l = i.find(
    (u) => u.textValue.toLowerCase().startsWith(r.toLowerCase())
  );
  return l !== n ? l : void 0;
}
z(gr, "findNextItem");
function Pi(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
z(Pi, "wrapArray");
const Jd = "wk-Select_trigger", Qd = "wk-Select_sm", ef = "wk-Select_md", tf = "wk-Select_lg", nf = "wk-Select_icon", of = "wk-Select_content", rf = "wk-Select_viewport", sf = "wk-Select_item", cf = "wk-Select_itemIndicator", af = "wk-Select_label", lf = "wk-Select_separator", Ke = {
  trigger: Jd,
  sm: Qd,
  md: ef,
  lg: tf,
  icon: nf,
  content: of,
  viewport: rf,
  item: sf,
  itemIndicator: cf,
  label: af,
  separator: lf
};
function nb({
  placeholder: e,
  size: t = "md",
  children: n,
  className: o,
  id: r,
  "aria-label": s,
  ...i
}) {
  const c = qo();
  return /* @__PURE__ */ D(yd, { ...i, children: [
    /* @__PURE__ */ D(
      Sd,
      {
        id: r ?? (c == null ? void 0 : c.inputId),
        "aria-label": s,
        "aria-invalid": (c == null ? void 0 : c.invalid) || void 0,
        "aria-describedby": c == null ? void 0 : c.describedBy,
        className: $(Ke.trigger, Ke[t], o),
        children: [
          /* @__PURE__ */ d(_d, { placeholder: e }),
          /* @__PURE__ */ d(Ed, { className: Ke.icon, children: /* @__PURE__ */ d(gs, {}) })
        ]
      }
    ),
    /* @__PURE__ */ d(Rd, { children: /* @__PURE__ */ d(Id, { className: Ke.content, position: "popper", sideOffset: 4, children: /* @__PURE__ */ d(Ld, { className: Ke.viewport, children: n }) }) })
  ] });
}
const ob = Ee(
  function({ className: t, children: n, ...o }, r) {
    return /* @__PURE__ */ D(jd, { ref: r, className: $(Ke.item, t), ...o, children: [
      /* @__PURE__ */ d(zd, { children: n }),
      /* @__PURE__ */ d(Yd, { className: Ke.itemIndicator, children: /* @__PURE__ */ d(Yo, {}) })
    ] });
  }
);
function rb({ label: e, children: t }) {
  return /* @__PURE__ */ D(Hd, { children: [
    /* @__PURE__ */ d(Ud, { className: Ke.label, children: e }),
    t
  ] });
}
function sb() {
  return /* @__PURE__ */ d(Xd, { className: Ke.separator });
}
var uf = Object.defineProperty, it = (e, t) => uf(e, "name", { value: t, configurable: !0 }), wr = "Switch", [df, ib] = /* @__PURE__ */ me(wr), [ff, br] = df(wr);
function ki(e) {
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
  } = e, [m, g] = ke({
    prop: n,
    defaultProp: r ?? !1,
    onChange: l,
    caller: wr
  }), [w, h] = a.useState(null), [v, b] = a.useState(null), S = a.useRef(!1), [y, C] = a.useReducer(
    (E) => E + 1,
    0
  ), x = w ? !!i || !!w.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), _ = {
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
  return /* @__PURE__ */ d(ff, { scope: t, ..._, children: Ri(p) ? p(_) : o });
}
it(ki, "SwitchProvider");
var pf = "SwitchTrigger", mf = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ it(function({ __scopeSwitch: t, onClick: n, ...o }, r) {
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
    } = br(pf, t), b = K(r, p), S = a.useRef(u);
    return a.useEffect(() => {
      const y = i ? s == null ? void 0 : s.ownerDocument.getElementById(i) : s == null ? void 0 : s.form;
      if (y instanceof HTMLFormElement) {
        const C = /* @__PURE__ */ it(() => m(S.current), "reset");
        return y.addEventListener("reset", C), () => y.removeEventListener("reset", C);
      }
    }, [s, i, m]), /* @__PURE__ */ d(
      H.button,
      {
        type: "button",
        role: "switch",
        "aria-checked": u,
        "aria-required": f,
        "data-state": yr(u),
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
), hf = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ it(function(t, n) {
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
      ki,
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
        internal_do_not_use_render: ({ isFormControl: g }) => /* @__PURE__ */ D(We, { children: [
          /* @__PURE__ */ d(
            mf,
            {
              ...m,
              ref: n,
              __scopeSwitch: o
            }
          ),
          g && /* @__PURE__ */ d(
            bf,
            {
              __scopeSwitch: o
            }
          )
        ] })
      }
    );
  }, "Switch")
), vf = "SwitchThumb", gf = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ it(function(t, n) {
    const { __scopeSwitch: o, ...r } = t, s = br(vf, o);
    return /* @__PURE__ */ d(
      H.span,
      {
        "data-state": yr(s.checked),
        "data-disabled": s.disabled ? "" : void 0,
        ...r,
        ref: n
      }
    );
  }, "SwitchThumb")
), wf = "SwitchBubbleInput", bf = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ it(function({ __scopeSwitch: t, onClick: n, ...o }, r) {
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
    } = br(wf, t), b = K(r, v), S = Un(s), y = a.useRef(!1), C = a.useRef(l), x = a.useRef(c);
    a.useEffect(() => {
      const E = h;
      if (!E) return;
      const k = window.HTMLInputElement.prototype, O = Object.getOwnPropertyDescriptor(
        k,
        "checked"
      ).set, B = c !== x.current;
      x.current = c;
      const A = C.current !== l;
      C.current = l;
      const N = !(B && i.current);
      if (A && O) {
        y.current = !B;
        const F = new Event("click", { bubbles: N });
        O.call(E, l), E.dispatchEvent(F), y.current = !1;
      }
    }, [h, l, i, c]);
    const _ = a.useRef(l);
    return /* @__PURE__ */ d(
      H.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: u ?? _.current,
        required: f,
        disabled: p,
        name: m,
        value: g,
        form: w,
        ...o,
        tabIndex: -1,
        ref: b,
        onClick: I(n, (E) => {
          y.current && E.stopPropagation();
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
function Ri(e) {
  return typeof e == "function";
}
it(Ri, "isFunction");
function yr(e) {
  return e ? "checked" : "unchecked";
}
it(yr, "getState");
const yf = "wk-Switch_wrapper", Cf = "wk-Switch_root", Sf = "wk-Switch_thumb", xf = "wk-Switch_label", _n = {
  wrapper: yf,
  root: Cf,
  thumb: Sf,
  label: xf
}, cb = Ee(function({ label: t, className: n, id: o, ...r }, s) {
  const i = Je(), c = o ?? i, l = /* @__PURE__ */ d(hf, { ref: s, id: c, className: $(_n.root, n), ...r, children: /* @__PURE__ */ d(gf, { className: _n.thumb }) });
  return t ? /* @__PURE__ */ D("span", { className: _n.wrapper, children: [
    l,
    /* @__PURE__ */ d("label", { className: _n.label, htmlFor: c, children: t })
  ] }) : l;
});
var _f = Object.defineProperty, Ze = (e, t) => _f(e, "name", { value: t, configurable: !0 }), Cr = "Checkbox", [Ef, ab] = /* @__PURE__ */ me(Cr), [Tf, Sr] = Ef(Cr);
function Ii(e) {
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
  } = e, [m, g] = ke({
    prop: n,
    defaultProp: r ?? !1,
    onChange: l,
    caller: Cr
  }), [w, h] = a.useState(null), [v, b] = a.useState(null), S = a.useRef(!1), [y, C] = a.useReducer(
    (E) => E + 1,
    0
  ), x = w ? !!i || !!w.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), _ = {
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
    defaultChecked: Ye(r) ? !1 : r,
    isFormControl: x,
    bubbleInput: v,
    setBubbleInput: b
  };
  return /* @__PURE__ */ d(
    Tf,
    {
      scope: t,
      ..._,
      children: Di(p) ? p(_) : o
    }
  );
}
Ze(Ii, "CheckboxProvider");
var Pf = "CheckboxTrigger", kf = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ Ze(function({ __scopeCheckbox: t, onKeyDown: n, onClick: o, ...r }, s) {
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
    } = Sr(Pf, t), b = K(s, p), S = a.useRef(u);
    return a.useEffect(() => {
      const y = i == null ? void 0 : i.form;
      if (y) {
        const C = /* @__PURE__ */ Ze(() => m(S.current), "reset");
        return y.addEventListener("reset", C), () => y.removeEventListener("reset", C);
      }
    }, [i, m]), /* @__PURE__ */ d(
      H.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": Ye(u) ? "mixed" : u,
        "aria-required": f,
        "data-state": xr(u),
        "data-disabled": l ? "" : void 0,
        disabled: l,
        value: c,
        ...r,
        ref: b,
        onKeyDown: I(n, (y) => {
          y.key === "Enter" && y.preventDefault();
        }),
        onClick: I(o, (y) => {
          w(), m((C) => Ye(C) ? !0 : !C), v && h && (g.current = y.isPropagationStopped(), g.current || y.stopPropagation());
        })
      }
    );
  }, "CheckboxTrigger")
), Rf = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ze(function(t, n) {
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
      Ii,
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
        internal_do_not_use_render: ({ isFormControl: g }) => /* @__PURE__ */ D(We, { children: [
          /* @__PURE__ */ d(
            kf,
            {
              ...m,
              ref: n,
              __scopeCheckbox: o
            }
          ),
          g && /* @__PURE__ */ d(
            Af,
            {
              __scopeCheckbox: o
            }
          )
        ] })
      }
    );
  }, "Checkbox")
), If = "CheckboxIndicator", Df = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ze(function(t, n) {
    const { __scopeCheckbox: o, forceMount: r, ...s } = t, i = Sr(If, o);
    return /* @__PURE__ */ d(
      Ie,
      {
        present: r || Ye(i.checked) || i.checked === !0,
        children: /* @__PURE__ */ d(
          H.span,
          {
            "data-state": xr(i.checked),
            "data-disabled": i.disabled ? "" : void 0,
            ...s,
            ref: n,
            style: { pointerEvents: "none", ...t.style }
          }
        )
      }
    );
  }, "CheckboxIndicator")
), Of = "CheckboxBubbleInput", Af = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ze(function({ __scopeCheckbox: t, onClick: n, ...o }, r) {
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
    } = Sr(Of, t), b = K(r, v), S = Un(s), y = a.useRef(!1), C = a.useRef(l), x = a.useRef(c);
    a.useEffect(() => {
      const E = h;
      if (!E) return;
      const k = window.HTMLInputElement.prototype, O = Object.getOwnPropertyDescriptor(
        k,
        "checked"
      ).set, B = c !== x.current;
      x.current = c;
      const A = C.current !== l;
      C.current = l;
      const N = !(B && i.current);
      if (A && O) {
        y.current = !B;
        const F = new Event("click", { bubbles: N });
        E.indeterminate = Ye(l), O.call(E, Ye(l) ? !1 : l), E.dispatchEvent(F), y.current = !1;
      }
    }, [h, l, i, c]);
    const _ = a.useRef(Ye(l) ? !1 : l);
    return /* @__PURE__ */ d(
      H.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: u ?? _.current,
        required: f,
        disabled: p,
        name: m,
        value: g,
        form: w,
        ...o,
        tabIndex: -1,
        ref: b,
        onClick: I(n, (E) => {
          y.current && E.stopPropagation();
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
function Di(e) {
  return typeof e == "function";
}
Ze(Di, "isFunction");
function Ye(e) {
  return e === "indeterminate";
}
Ze(Ye, "isIndeterminate");
function xr(e) {
  return Ye(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
Ze(xr, "getState");
const Nf = "wk-Checkbox_wrapper", Mf = "wk-Checkbox_root", $f = "wk-Checkbox_indicator", Lf = "wk-Checkbox_dash", Ff = "wk-Checkbox_label", Ut = {
  wrapper: Nf,
  root: Mf,
  indicator: $f,
  dash: Lf,
  label: Ff
}, Bf = Ee(function({ label: t, className: n, id: o, ...r }, s) {
  const i = Je(), c = o ?? i, l = /* @__PURE__ */ d(Rf, { ref: s, id: c, className: $(Ut.root, n), ...r, children: /* @__PURE__ */ d(Df, { className: Ut.indicator, children: r.checked === "indeterminate" ? /* @__PURE__ */ d("span", { className: Ut.dash }) : /* @__PURE__ */ d(Yo, {}) }) });
  return t ? /* @__PURE__ */ D("span", { className: Ut.wrapper, children: [
    l,
    /* @__PURE__ */ d("label", { className: Ut.label, htmlFor: c, children: t })
  ] }) : l;
});
var Vf = Object.defineProperty, ge = (e, t) => Vf(e, "name", { value: t, configurable: !0 }), _r = "Dialog", [Oi, lb] = /* @__PURE__ */ me(_r), [Hf, De] = Oi(_r), Ai = /* @__PURE__ */ ge((e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: o,
    defaultOpen: r,
    onOpenChange: s,
    modal: i = !0
  } = e, c = a.useRef(null), l = a.useRef(null), [u, f] = ke({
    prop: o,
    defaultProp: r ?? !1,
    onChange: s,
    caller: _r
  }), [p, m] = a.useState(0), [g, w] = a.useState(0);
  return /* @__PURE__ */ d(
    Hf,
    {
      scope: t,
      triggerRef: c,
      contentRef: l,
      contentId: _e(),
      titleId: _e(),
      descriptionId: _e(),
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
}, "Dialog"), Wf = "DialogTrigger", Uf = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ ge(function(t, n) {
    const { __scopeDialog: o, ...r } = t, s = De(Wf, o), i = K(n, s.triggerRef);
    return /* @__PURE__ */ d(
      H.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": s.open,
        "aria-controls": s.open ? s.contentId : void 0,
        "data-state": Xn(s.open),
        ...r,
        ref: i,
        onClick: I(t.onClick, s.onOpenToggle)
      }
    );
  }, "DialogTrigger")
), Ni = "DialogPortal", [Kf, Mi] = Oi(Ni, {
  forceMount: void 0
}), $i = /* @__PURE__ */ ge((e) => {
  const { __scopeDialog: t, forceMount: n, children: o, container: r } = e, s = De(Ni, t);
  return /* @__PURE__ */ d(Kf, { scope: t, forceMount: n, children: a.Children.map(o, (i) => /* @__PURE__ */ d(Ie, { present: n || s.open, children: /* @__PURE__ */ d(ln, { asChild: !0, container: r, children: i }) })) });
}, "DialogPortal"), Lo = "DialogOverlay", Li = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ ge(function(t, n) {
    const o = Mi(Lo, t.__scopeDialog), { forceMount: r = o.forceMount, ...s } = t, i = De(Lo, t.__scopeDialog);
    return i.modal ? /* @__PURE__ */ d(Ie, { present: r || i.open, children: /* @__PURE__ */ d(zf, { ...s, ref: n }) }) : null;
  }, "DialogOverlay")
), jf = /* @__PURE__ */ Be("DialogOverlay.RemoveScroll"), zf = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ge(function(t, n) {
    const { __scopeDialog: o, ...r } = t, s = De(Lo, o), i = Ms(), c = K(n, i);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ d(zn, { as: jf, allowPinchZoom: !0, shards: [s.contentRef], children: /* @__PURE__ */ d(
        H.div,
        {
          "data-state": Xn(s.open),
          ...r,
          ref: c,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }, "DialogOverlayImpl")
), en = "DialogContent", Fi = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ ge(function(t, n) {
    const o = Mi(en, t.__scopeDialog), { forceMount: r = o.forceMount, ...s } = t, i = De(en, t.__scopeDialog);
    return /* @__PURE__ */ d(Ie, { present: r || i.open, children: i.modal ? /* @__PURE__ */ d(Gf, { ...s, ref: n }) : /* @__PURE__ */ d(Yf, { ...s, ref: n }) });
  }, "DialogContent")
), Gf = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ge(function(t, n) {
    const o = De(en, t.__scopeDialog), r = a.useRef(null), s = K(n, o.contentRef, r);
    return a.useEffect(() => {
      const i = r.current;
      if (i) return pr(i);
    }, []), /* @__PURE__ */ d(
      Bi,
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
), Yf = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ge(function(t, n) {
    const o = De(en, t.__scopeDialog), r = a.useRef(!1), s = a.useRef(!1);
    return /* @__PURE__ */ d(
      Bi,
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
), Bi = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ge(function(t, n) {
    const { __scopeDialog: o, trapFocus: r, onOpenAutoFocus: s, onCloseAutoFocus: i, ...c } = t, l = De(en, o);
    return an(), /* @__PURE__ */ d(We, { children: /* @__PURE__ */ d(
      tr,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: s,
        onUnmountAutoFocus: i,
        children: /* @__PURE__ */ d(
          cn,
          {
            role: "dialog",
            id: l.contentId,
            "aria-describedby": l.descriptionPresent ? l.descriptionId : void 0,
            "aria-labelledby": l.titlePresent ? l.titleId : void 0,
            "data-state": Xn(l.open),
            ...c,
            ref: n,
            deferPointerDownOutside: !0,
            onDismiss: () => l.onOpenChange(!1)
          }
        )
      }
    ) });
  }, "DialogContentImpl")
), Xf = "DialogTitle", Fo = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ ge(function(t, n) {
    const { __scopeDialog: o, ...r } = t, s = De(Xf, o), { setTitleCount: i } = s;
    return oe(() => (i((c) => c + 1), () => i((c) => c - 1)), [i]), /* @__PURE__ */ d(H.h2, { id: s.titleId, ...r, ref: n });
  }, "DialogTitle")
), qf = "DialogDescription", Zf = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ge(function(t, n) {
    const { __scopeDialog: o, ...r } = t, s = De(qf, o), { setDescriptionCount: i } = s;
    return oe(() => (i((c) => c + 1), () => i((c) => c - 1)), [i]), /* @__PURE__ */ d(H.p, { id: s.descriptionId, ...r, ref: n });
  }, "DialogDescription")
), Jf = "DialogClose", Vi = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ ge(function(t, n) {
    const { __scopeDialog: o, ...r } = t, s = De(Jf, o);
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
function Xn(e) {
  return e ? "open" : "closed";
}
ge(Xn, "getState");
const Qf = "wk-Semantic_heading", ep = "wk-Semantic_text", tp = "wk-Semantic_muted", np = "wk-Semantic_subtle", op = "wk-Semantic_danger", rp = "wk-Semantic_mono", sp = "wk-Semantic_xs", ip = "wk-Semantic_sm", cp = "wk-Semantic_md", ap = "wk-Semantic_lg", lp = "wk-Semantic_xl", up = "wk-Semantic_xxl", dp = "wk-Semantic_link", fp = "wk-Semantic_visuallyHidden", Ce = {
  heading: Qf,
  text: ep,
  muted: tp,
  subtle: np,
  danger: op,
  mono: rp,
  xs: sp,
  sm: ip,
  md: cp,
  lg: ap,
  xl: lp,
  xxl: up,
  link: dp,
  visuallyHidden: fp
};
function fn({ className: e, ...t }) {
  return /* @__PURE__ */ d("span", { className: $(Ce.visuallyHidden, e), ...t });
}
const pp = "wk-Dialog_overlay", mp = "wk-Dialog_content", hp = "wk-Dialog_header", vp = "wk-Dialog_headings", gp = "wk-Dialog_title", wp = "wk-Dialog_description", bp = "wk-Dialog_close", yp = "wk-Dialog_footer", et = {
  overlay: pp,
  content: mp,
  header: hp,
  headings: vp,
  title: gp,
  description: wp,
  close: bp,
  footer: yp
};
function ub({
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
  return /* @__PURE__ */ D(Ai, { ...u, children: [
    s && /* @__PURE__ */ d(Uf, { asChild: !0, children: s }),
    /* @__PURE__ */ D($i, { children: [
      /* @__PURE__ */ d(Li, { className: et.overlay }),
      /* @__PURE__ */ D(
        Fi,
        {
          className: $(et.content, l),
          style: i ? { "--wk-dialog-w": i } : void 0,
          children: [
            /* @__PURE__ */ D("div", { className: et.header, children: [
              /* @__PURE__ */ D("div", { className: et.headings, children: [
                t ? /* @__PURE__ */ d(Fo, { asChild: !0, children: /* @__PURE__ */ d(fn, { children: e }) }) : /* @__PURE__ */ d(Fo, { className: et.title, children: e }),
                n && /* @__PURE__ */ d(Zf, { className: et.description, children: n })
              ] }),
              c && /* @__PURE__ */ d(Vi, { className: et.close, "aria-label": "Close", children: /* @__PURE__ */ d(Mn, {}) })
            ] }),
            o,
            r && /* @__PURE__ */ d("div", { className: et.footer, children: r })
          ]
        }
      )
    ] })
  ] });
}
const db = Vi;
var Cp = Object.defineProperty, Er = (e, t) => Cp(e, "name", { value: t, configurable: !0 }), ho = !1;
function Hi() {
  const [e, t] = a.useState(ho);
  return a.useEffect(() => {
    ho || (ho = !0, t(!0));
  }, []), e;
}
Er(Hi, "useIsHydrated");
var Wi = a[" useSyncExternalStore ".trim().toString()];
function Ui() {
  return () => {
  };
}
Er(Ui, "subscribe");
function Ki() {
  return Wi(
    Ui,
    () => !0,
    () => !1
  );
}
Er(Ki, "useIsHydratedModern");
var Sp = typeof Wi == "function" ? Ki : Hi, xp = Object.defineProperty, wt = (e, t) => xp(e, "name", { value: t, configurable: !0 }), vo = "rovingFocusGroup.onEntryFocus", _p = { bubbles: !1, cancelable: !0 }, qn = "RovingFocusGroup", [Bo, ji, Ep] = /* @__PURE__ */ rn(qn), [Tp, Zn] = /* @__PURE__ */ me(
  qn,
  [Ep]
), [Pp, kp] = Tp(qn), Rp = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ wt(function(t, n) {
    return /* @__PURE__ */ d(Bo.Provider, { scope: t.__scopeRovingFocusGroup, children: /* @__PURE__ */ d(Bo.Slot, { scope: t.__scopeRovingFocusGroup, children: /* @__PURE__ */ d(Ip, { ...t, ref: n }) }) });
  }, "RovingFocusGroup")
), Ip = /* @__PURE__ */ a.forwardRef(/* @__PURE__ */ wt(function(t, n) {
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
  } = t, g = a.useRef(null), w = K(n, g), h = sn(i), [v, b] = ke({
    prop: c,
    defaultProp: l ?? null,
    onChange: u,
    caller: qn
  }), [S, y] = a.useState(!1), C = ue(f), x = ji(o), _ = a.useRef(!1), [E, k] = a.useState(0);
  return a.useEffect(() => {
    const P = g.current;
    if (P)
      return P.addEventListener(vo, C), () => P.removeEventListener(vo, C);
  }, [C]), /* @__PURE__ */ d(
    Pp,
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
        () => k((P) => P + 1),
        []
      ),
      onFocusableItemRemove: a.useCallback(
        () => k((P) => P - 1),
        []
      ),
      children: /* @__PURE__ */ d(
        H.div,
        {
          tabIndex: S || E === 0 ? -1 : 0,
          "data-orientation": r,
          ...m,
          ref: w,
          style: { outline: "none", ...t.style },
          onMouseDown: I(t.onMouseDown, () => {
            _.current = !0;
          }),
          onFocus: I(t.onFocus, (P) => {
            const O = !_.current;
            if (P.target === P.currentTarget && O && !S) {
              const B = new CustomEvent(vo, _p);
              if (P.currentTarget.dispatchEvent(B), !B.defaultPrevented) {
                const A = x().filter((M) => M.focusable), N = A.find((M) => M.active), F = A.find((M) => M.id === v), T = [N, F, ...A].filter(
                  Boolean
                ).map((M) => M.ref.current);
                Tr(T, p);
              }
            }
            _.current = !1;
          }),
          onBlur: I(t.onBlur, () => y(!1))
        }
      )
    }
  );
}, "RovingFocusGroupImpl")), Dp = "RovingFocusGroupItem", Op = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ wt(function(t, n) {
    const {
      __scopeRovingFocusGroup: o,
      focusable: r = !0,
      active: s = !1,
      tabStopId: i,
      children: c,
      ...l
    } = t, u = _e(), f = i || u, p = kp(Dp, o), m = p.currentTabStopId === f, g = ji(o), { onFocusableItemAdd: w, onFocusableItemRemove: h, currentTabStopId: v } = p, b = Sp();
    return oe(() => {
      if (!(!b || !r))
        return w(), () => h();
    }, [b, r, w, h]), a.useEffect(() => {
      if (!(b || !r))
        return w(), () => h();
    }, [b, r, w, h]), /* @__PURE__ */ d(
      Bo.ItemSlot,
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
              const y = Gi(S, p.orientation, p.dir);
              if (y !== void 0) {
                if (S.metaKey || S.ctrlKey || S.altKey || S.shiftKey) return;
                S.preventDefault();
                let x = g().filter((_) => _.focusable).map((_) => _.ref.current);
                if (y === "last") x.reverse();
                else if (y === "prev" || y === "next") {
                  y === "prev" && x.reverse();
                  const _ = x.indexOf(S.currentTarget);
                  x = p.loop ? Yi(x, _ + 1) : x.slice(_ + 1);
                }
                setTimeout(() => Tr(x));
              }
            }),
            children: typeof c == "function" ? c({ isCurrentTabStop: m, hasTabStop: v != null }) : c
          }
        )
      }
    );
  }, "RovingFocusGroupItem")
), Ap = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function zi(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
wt(zi, "getDirectionAwareKey");
function Gi(e, t, n) {
  const o = zi(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
    return Ap[o];
}
wt(Gi, "getFocusIntent");
function Tr(e, t = !1) {
  const n = document.activeElement;
  for (const o of e)
    if (o === n || (o.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
wt(Tr, "focusFirst");
function Yi(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
wt(Yi, "wrapArray");
var Xi = Rp, qi = Op, Np = Object.defineProperty, J = (e, t) => Np(e, "name", { value: t, configurable: !0 }), Mp = ["Enter", " "], $p = ["ArrowDown", "PageUp", "Home"], Zi = ["ArrowUp", "PageDown", "End"], Lp = [...$p, ...Zi], Jn = "Menu", [Vo, Fp, Bp] = /* @__PURE__ */ rn(Jn), [bt, Ji] = /* @__PURE__ */ me(Jn, [
  Bp,
  Ft,
  Zn
]), Pr = Ft(), Qi = Zn(), [Vp, pn] = bt(Jn), [Hp, kr] = bt(Jn), Wp = /* @__PURE__ */ J((e) => {
  const { __scopeMenu: t, open: n = !1, children: o, dir: r, onOpenChange: s, modal: i = !0 } = e, c = Pr(t), [l, u] = a.useState(null), f = a.useRef(!1), p = ue(s), m = sn(r);
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
  }, [n, p]), /* @__PURE__ */ d(lr, { ...c, children: /* @__PURE__ */ d(
    Vp,
    {
      scope: t,
      open: n,
      onOpenChange: p,
      content: l,
      onContentChange: u,
      children: /* @__PURE__ */ d(
        Hp,
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
}, "Menu"), Up = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ J(function(t, n) {
    const { __scopeMenu: o, ...r } = t, s = Pr(o);
    return /* @__PURE__ */ d(ur, { ...s, ...r, ref: n });
  }, "MenuAnchor")
), ec = "MenuPortal", [Kp, jp] = bt(ec, {
  forceMount: void 0
}), zp = /* @__PURE__ */ J((e) => {
  const { __scopeMenu: t, forceMount: n, children: o, container: r } = e, s = pn(ec, t);
  return /* @__PURE__ */ d(Kp, { scope: t, forceMount: n, children: /* @__PURE__ */ d(Ie, { present: n || s.open, children: /* @__PURE__ */ d(ln, { asChild: !0, container: r, children: o }) }) });
}, "MenuPortal"), ot = "MenuContent", [Gp, tc] = bt(ot), Yp = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ J(function(t, n) {
    const o = jp(ot, t.__scopeMenu), { forceMount: r = o.forceMount, ...s } = t, i = pn(ot, t.__scopeMenu), c = kr(ot, t.__scopeMenu);
    return /* @__PURE__ */ d(Vo.Provider, { scope: t.__scopeMenu, children: /* @__PURE__ */ d(Ie, { present: r || i.open, children: /* @__PURE__ */ d(Vo.Slot, { scope: t.__scopeMenu, children: c.modal ? /* @__PURE__ */ d(Xp, { ...s, ref: n }) : /* @__PURE__ */ d(qp, { ...s, ref: n }) }) }) });
  }, "MenuContent")
), Xp = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ J(function(t, n) {
    const o = pn(ot, t.__scopeMenu), r = a.useRef(null), s = K(n, r);
    return a.useEffect(() => {
      const i = r.current;
      if (i) return pr(i);
    }, []), /* @__PURE__ */ d(
      nc,
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
), qp = /* @__PURE__ */ a.forwardRef(/* @__PURE__ */ J(function(t, n) {
  const o = pn(ot, t.__scopeMenu);
  return /* @__PURE__ */ d(
    nc,
    {
      ...t,
      ref: n,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => o.onOpenChange(!1)
    }
  );
}, "MenuRootContentNonModal")), Zp = /* @__PURE__ */ Be("MenuContent.ScrollLock"), nc = /* @__PURE__ */ a.forwardRef(
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
    } = t, b = pn(ot, o), S = kr(ot, o), y = Pr(o), C = Qi(o), x = Fp(o), [_, E] = a.useState(null), k = a.useRef(null), P = K(n, k, b.onContentChange), O = a.useRef(0), B = a.useRef(""), A = a.useRef(0), N = a.useRef(null), F = a.useRef("right"), U = a.useRef(0), T = h ? zn : a.Fragment, M = h ? { as: Zp, allowPinchZoom: !0 } : void 0, L = /* @__PURE__ */ J((R) => {
      var V, X;
      const Z = B.current + R, G = x().filter((ee) => !ee.disabled), Q = document.activeElement, ae = (V = G.find((ee) => ee.ref.current === Q)) == null ? void 0 : V.textValue, ce = G.map((ee) => ee.textValue), we = cc(ce, Z, ae), he = (X = G.find((ee) => ee.textValue === we)) == null ? void 0 : X.ref.current;
      (/* @__PURE__ */ J((function ee(Y) {
        B.current = Y, window.clearTimeout(O.current), Y !== "" && (O.current = window.setTimeout(() => ee(""), 1e3));
      }), "updateSearch"))(Z), he && setTimeout(() => he.focus());
    }, "handleTypeaheadSearch");
    a.useEffect(() => () => window.clearTimeout(O.current), []), an();
    const W = a.useCallback((R) => {
      var G, Q;
      return F.current === ((G = N.current) == null ? void 0 : G.side) && lc(R, (Q = N.current) == null ? void 0 : Q.area);
    }, []);
    return /* @__PURE__ */ d(
      Gp,
      {
        scope: o,
        searchRef: B,
        onItemEnter: a.useCallback(
          (R) => {
            W(R) && R.preventDefault();
          },
          [W]
        ),
        onItemLeave: a.useCallback(
          (R) => {
            var Z;
            W(R) || ((Z = k.current) == null || Z.focus(), E(null));
          },
          [W]
        ),
        onTriggerLeave: a.useCallback(
          (R) => {
            W(R) && R.preventDefault();
          },
          [W]
        ),
        pointerGraceTimerRef: A,
        onPointerGraceIntentChange: a.useCallback((R) => {
          N.current = R;
        }, []),
        children: /* @__PURE__ */ d(T, { ...M, children: /* @__PURE__ */ d(
          tr,
          {
            asChild: !0,
            trapped: s,
            onMountAutoFocus: I(i, (R) => {
              var Z;
              R.preventDefault(), (Z = k.current) == null || Z.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: c,
            children: /* @__PURE__ */ d(
              cn,
              {
                asChild: !0,
                disableOutsidePointerEvents: l,
                onEscapeKeyDown: f,
                onPointerDownOutside: p,
                onFocusOutside: m,
                onInteractOutside: g,
                onDismiss: w,
                children: /* @__PURE__ */ d(
                  Xi,
                  {
                    asChild: !0,
                    ...C,
                    dir: S.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: _,
                    onCurrentTabStopIdChange: E,
                    onEntryFocus: I(u, (R) => {
                      S.isUsingKeyboardRef.current || R.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ d(
                      dr,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": oc(b.open),
                        "data-radix-menu-content": "",
                        dir: S.dir,
                        ...y,
                        ...v,
                        ref: P,
                        style: { outline: "none", ...v.style },
                        onKeyDown: I(v.onKeyDown, (R) => {
                          const G = R.target.closest("[data-radix-menu-content]") === R.currentTarget, Q = R.ctrlKey || R.altKey || R.metaKey, ae = R.key.length === 1;
                          G && (R.key === "Tab" && R.preventDefault(), !Q && ae && L(R.key));
                          const ce = k.current;
                          if (R.target !== ce || !Lp.includes(R.key)) return;
                          R.preventDefault();
                          const he = x().filter((V) => !V.disabled).map((V) => V.ref.current);
                          Zi.includes(R.key) && he.reverse(), sc(he);
                        }),
                        onBlur: I(t.onBlur, (R) => {
                          R.currentTarget.contains(R.target) || (window.clearTimeout(O.current), B.current = "");
                        }),
                        onPointerMove: I(
                          t.onPointerMove,
                          Nn((R) => {
                            const Z = R.target, G = U.current !== R.clientX;
                            if (R.currentTarget.contains(Z) && G) {
                              const Q = R.clientX > U.current ? "right" : "left";
                              F.current = Q, U.current = R.clientX;
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
), Jp = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ J(function(t, n) {
    const { __scopeMenu: o, ...r } = t;
    return /* @__PURE__ */ d(H.div, { ...r, ref: n });
  }, "MenuLabel")
), Ho = "MenuItem", ds = "menu.itemSelect", Qp = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ J(function(t, n) {
    const { disabled: o = !1, onSelect: r, ...s } = t, i = a.useRef(null), c = kr(Ho, t.__scopeMenu), l = tc(Ho, t.__scopeMenu), u = K(n, i), f = a.useRef(!1), p = /* @__PURE__ */ J(() => {
      const m = i.current;
      if (!o && m) {
        const g = new CustomEvent(ds, { bubbles: !0, cancelable: !0 });
        m.addEventListener(ds, (w) => r == null ? void 0 : r(w), { once: !0 }), Ln(m, g), g.defaultPrevented ? f.current = !1 : c.onClose();
      }
    }, "handleSelect");
    return /* @__PURE__ */ d(
      em,
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
          o || m.target !== m.currentTarget || l.searchRef.current !== "" && m.key === " " || Mp.includes(m.key) && (m.currentTarget.click(), m.preventDefault());
        })
      }
    );
  }, "MenuItem")
), em = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ J(function(t, n) {
    const { __scopeMenu: o, disabled: r = !1, textValue: s, ...i } = t, c = tc(Ho, o), l = Qi(o), u = a.useRef(null), f = K(n, u), [p, m] = a.useState(!1), [g, w] = a.useState("");
    return a.useEffect(() => {
      const h = u.current;
      h && w((h.textContent ?? "").trim());
    }, [i.children]), /* @__PURE__ */ d(
      Vo.ItemSlot,
      {
        scope: o,
        disabled: r,
        textValue: s ?? g,
        children: /* @__PURE__ */ d(qi, { asChild: !0, ...l, focusable: !r, children: /* @__PURE__ */ d(
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
              Nn((h) => {
                r ? c.onItemLeave(h) : (c.onItemEnter(h), h.defaultPrevented || h.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: I(
              t.onPointerLeave,
              Nn((h) => c.onItemLeave(h))
            ),
            onFocus: I(t.onFocus, () => m(!0)),
            onBlur: I(t.onBlur, () => m(!1))
          }
        ) })
      }
    );
  }, "MenuItemImpl")
), tm = "MenuRadioGroup", [fb, pb] = bt(
  tm,
  { value: void 0, onValueChange: /* @__PURE__ */ J(() => {
  }, "onValueChange") }
), nm = "MenuItemIndicator", [mb, hb] = bt(
  nm,
  { checked: !1 }
), om = /* @__PURE__ */ a.forwardRef(
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
), rm = "MenuSub", [vb, gb] = bt(rm);
function oc(e) {
  return e ? "open" : "closed";
}
J(oc, "getOpenState");
function rc(e) {
  return e === "indeterminate";
}
J(rc, "isIndeterminate");
function sm(e) {
  return rc(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
J(sm, "getCheckedState");
function sc(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
J(sc, "focusFirst");
function ic(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
J(ic, "wrapArray");
function cc(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let i = ic(e, Math.max(s, 0));
  r.length === 1 && (i = i.filter((u) => u !== n));
  const l = i.find(
    (u) => u.toLowerCase().startsWith(r.toLowerCase())
  );
  return l !== n ? l : void 0;
}
J(cc, "getNextMatch");
function ac(e, t) {
  const { x: n, y: o } = e;
  let r = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const c = t[s], l = t[i], u = c.x, f = c.y, p = l.x, m = l.y;
    f > o != m > o && n < (p - u) * (o - f) / (m - f) + u && (r = !r);
  }
  return r;
}
J(ac, "isPointInPolygon");
function lc(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return ac(n, t);
}
J(lc, "isPointerInGraceArea");
function Nn(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
J(Nn, "whenMouse");
var im = Wp, cm = Up, am = zp, lm = Yp, um = Jp, dm = Qp, fm = om, pm = Object.defineProperty, yt = (e, t) => pm(e, "name", { value: t, configurable: !0 }), Rr = "DropdownMenu", [mm, wb] = /* @__PURE__ */ me(
  Rr,
  [Ji]
), Ct = Ji(), [hm, uc] = mm(Rr), vm = /* @__PURE__ */ yt((e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: o,
    open: r,
    defaultOpen: s,
    onOpenChange: i,
    modal: c = !0
  } = e, l = Ct(t), u = a.useRef(null), [f, p] = ke({
    prop: r,
    defaultProp: s ?? !1,
    onChange: i,
    caller: Rr
  });
  return /* @__PURE__ */ d(
    hm,
    {
      scope: t,
      triggerId: _e(),
      triggerRef: u,
      contentId: _e(),
      open: f,
      onOpenChange: p,
      onOpenToggle: a.useCallback(() => p((m) => !m), [p]),
      modal: c,
      children: /* @__PURE__ */ d(im, { ...l, open: f, onOpenChange: p, dir: o, modal: c, children: n })
    }
  );
}, "DropdownMenu"), gm = "DropdownMenuTrigger", wm = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ yt(function(t, n) {
    const { __scopeDropdownMenu: o, disabled: r = !1, ...s } = t, i = uc(gm, o), c = Ct(o), l = K(n, i.triggerRef);
    return /* @__PURE__ */ d(cm, { asChild: !0, ...c, children: /* @__PURE__ */ d(
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
), bm = /* @__PURE__ */ yt((e) => {
  const { __scopeDropdownMenu: t, ...n } = e, o = Ct(t);
  return /* @__PURE__ */ d(am, { ...o, ...n });
}, "DropdownMenuPortal"), ym = "DropdownMenuContent", Cm = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ yt(function(t, n) {
    const { __scopeDropdownMenu: o, ...r } = t, s = uc(ym, o), i = Ct(o), c = a.useRef(!1);
    return /* @__PURE__ */ d(
      lm,
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
), Sm = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ yt(function(t, n) {
    const { __scopeDropdownMenu: o, ...r } = t, s = Ct(o);
    return /* @__PURE__ */ d(um, { ...s, ...r, ref: n });
  }, "DropdownMenuLabel")
), xm = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ yt(function(t, n) {
    const { __scopeDropdownMenu: o, ...r } = t, s = Ct(o);
    return /* @__PURE__ */ d(dm, { ...s, ...r, ref: n });
  }, "DropdownMenuItem")
), _m = /* @__PURE__ */ a.forwardRef(/* @__PURE__ */ yt(function(t, n) {
  const { __scopeDropdownMenu: o, ...r } = t, s = Ct(o);
  return /* @__PURE__ */ d(fm, { ...s, ...r, ref: n });
}, "DropdownMenuSeparator")), Em = vm, Tm = wm, Pm = bm, km = Cm, Rm = Sm, Im = xm, Dm = _m;
const Om = "wk-Menu_content", Am = "wk-Menu_item", Nm = "wk-Menu_danger", Mm = "wk-Menu_label", $m = "wk-Menu_separator", Lm = "wk-Menu_shortcut", Dt = {
  content: Om,
  item: Am,
  danger: Nm,
  label: Mm,
  separator: $m,
  shortcut: Lm
};
function bb({ trigger: e, children: t, align: n = "start", side: o = "bottom", className: r, ...s }) {
  return /* @__PURE__ */ D(Em, { ...s, children: [
    /* @__PURE__ */ d(Tm, { asChild: !0, children: e }),
    /* @__PURE__ */ d(Pm, { children: /* @__PURE__ */ d(
      km,
      {
        className: $(Dt.content, r),
        align: n,
        side: o,
        sideOffset: 4,
        collisionPadding: 8,
        children: t
      }
    ) })
  ] });
}
const yb = Ee(function({ tone: t = "default", shortcut: n, className: o, children: r, ...s }, i) {
  return /* @__PURE__ */ D(
    Im,
    {
      ref: i,
      className: $(Dt.item, t === "danger" && Dt.danger, o),
      ...s,
      children: [
        r,
        n && /* @__PURE__ */ d("span", { className: Dt.shortcut, children: n })
      ]
    }
  );
});
function Cb({ children: e }) {
  return /* @__PURE__ */ d(Rm, { className: Dt.label, children: e });
}
function Sb() {
  return /* @__PURE__ */ d(Dm, { className: Dt.separator });
}
var Fm = Object.defineProperty, se = (e, t) => Fm(e, "name", { value: t, configurable: !0 }), [Ir, xb] = /* @__PURE__ */ me("Tooltip", [
  Ft
]), Qn = Ft(), Bm = "TooltipProvider", Vm = 700, Wo = "tooltip.open", [Hm, Dr] = Ir(Bm), Wm = /* @__PURE__ */ se((e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = Vm,
    skipDelayDuration: o = 300,
    disableHoverableContent: r = !1,
    children: s
  } = e, i = a.useRef(!0), c = a.useRef(!1), l = a.useRef(0);
  return a.useEffect(() => {
    const u = l.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ d(
    Hm,
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
}, "TooltipProvider"), Uo = "Tooltip", [Um, mn] = Ir(Uo), Km = /* @__PURE__ */ se((e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: o,
    defaultOpen: r,
    onOpenChange: s,
    disableHoverableContent: i,
    delayDuration: c
  } = e, l = Dr(Uo, e.__scopeTooltip), u = Qn(t), [f, p] = a.useState(null), [m, g] = a.useState(void 0), w = _e(), h = a.useRef(0), v = i ?? l.disableHoverableContent, b = c ?? l.delayDuration, S = a.useRef(!1), [y, C] = ke({
    prop: o,
    defaultProp: r ?? !1,
    onChange: /* @__PURE__ */ se((O) => {
      O ? (l.onOpen(), document.dispatchEvent(new CustomEvent(Wo))) : l.onClose(), s == null || s(O);
    }, "onChange"),
    caller: Uo
  }), x = a.useMemo(() => y ? S.current ? "delayed-open" : "instant-open" : "closed", [y]), _ = a.useCallback(() => {
    window.clearTimeout(h.current), h.current = 0, S.current = !1, C(!0);
  }, [C]), E = a.useCallback(() => {
    window.clearTimeout(h.current), h.current = 0, C(!1);
  }, [C]), k = a.useCallback(() => {
    window.clearTimeout(h.current), h.current = window.setTimeout(() => {
      S.current = !0, C(!0), h.current = 0;
    }, b);
  }, [b, C]);
  return a.useEffect(() => () => {
    h.current && (window.clearTimeout(h.current), h.current = 0);
  }, []), /* @__PURE__ */ d(lr, { ...u, children: /* @__PURE__ */ d(
    Um,
    {
      scope: t,
      contentId: m ?? w,
      setContentId: g,
      open: y,
      stateAttribute: x,
      trigger: f,
      onTriggerChange: p,
      onTriggerEnter: a.useCallback(() => {
        l.isOpenDelayedRef.current ? k() : _();
      }, [l.isOpenDelayedRef, k, _]),
      onTriggerLeave: a.useCallback(() => {
        v ? E() : (window.clearTimeout(h.current), h.current = 0);
      }, [E, v]),
      onOpen: _,
      onClose: E,
      disableHoverableContent: v,
      children: n
    }
  ) });
}, "Tooltip"), fs = "TooltipTrigger", jm = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ se(function(t, n) {
    const { __scopeTooltip: o, ...r } = t, s = mn(fs, o), i = Dr(fs, o), c = Qn(o), l = a.useRef(null), u = K(n, l, s.onTriggerChange), f = a.useRef(!1), p = a.useRef(!1), m = a.useCallback(() => f.current = !1, []);
    return a.useEffect(() => () => document.removeEventListener("pointerup", m), [m]), /* @__PURE__ */ d(ur, { asChild: !0, ...c, children: /* @__PURE__ */ d(
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
), dc = "TooltipPortal", [zm, Gm] = Ir(dc, {
  forceMount: void 0
}), Ym = /* @__PURE__ */ se((e) => {
  const { __scopeTooltip: t, forceMount: n, children: o, container: r } = e, s = mn(dc, t);
  return /* @__PURE__ */ d(zm, { scope: t, forceMount: n, children: /* @__PURE__ */ d(Ie, { present: n || s.open, children: /* @__PURE__ */ d(ln, { asChild: !0, container: r, children: o }) }) });
}, "TooltipPortal"), tn = "TooltipContent", Xm = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ se(function(t, n) {
    const o = Gm(tn, t.__scopeTooltip), { forceMount: r = o.forceMount, side: s = "top", ...i } = t, c = mn(tn, t.__scopeTooltip);
    return /* @__PURE__ */ d(Ie, { present: r || c.open, children: c.disableHoverableContent ? /* @__PURE__ */ d(fc, { side: s, ...i, ref: n }) : /* @__PURE__ */ d(qm, { side: s, ...i, ref: n }) });
  }, "TooltipContent")
), qm = /* @__PURE__ */ a.forwardRef(/* @__PURE__ */ se(function(t, n) {
  const o = mn(tn, t.__scopeTooltip), r = Dr(tn, t.__scopeTooltip), s = a.useRef(null), i = K(n, s), [c, l] = a.useState(null), { trigger: u, onClose: f } = o, p = s.current, { onPointerInTransitChange: m } = r, g = a.useCallback(() => {
    l(null), m(!1);
  }, [m]), w = a.useCallback(
    (h, v) => {
      const b = h.currentTarget, S = { x: h.clientX, y: h.clientY }, y = pc(S, b.getBoundingClientRect()), C = mc(S, y), x = hc(v.getBoundingClientRect()), _ = gc([...C, ...x]);
      l(_), m(!0);
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
        const b = v.target, S = { x: v.clientX, y: v.clientY }, y = (u == null ? void 0 : u.contains(b)) || (p == null ? void 0 : p.contains(b)), C = !vc(S, c);
        y ? g() : C && (g(), f());
      }, "handleTrackPointerGrace");
      return document.addEventListener("pointermove", h), () => document.removeEventListener("pointermove", h);
    }
  }, [u, p, c, f, g]), /* @__PURE__ */ d(fc, { ...t, ref: i });
}, "TooltipContentHoverable")), Zm = /* @__PURE__ */ Cs("TooltipContent"), fc = /* @__PURE__ */ a.forwardRef(
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
    } = t, f = mn(tn, o), p = Qn(o), { onClose: m } = f;
    a.useEffect(() => (document.addEventListener(Wo, m), () => document.removeEventListener(Wo, m)), [m]), a.useEffect(() => {
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
      cn,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: c,
        onPointerDownOutside: l,
        onFocusOutside: (w) => w.preventDefault(),
        onDismiss: m,
        children: /* @__PURE__ */ D(
          dr,
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
              /* @__PURE__ */ d(Zm, { children: r }),
              s ? /* @__PURE__ */ d(Pu, { id: f.contentId, role: "tooltip", children: s }) : null
            ]
          }
        )
      }
    );
  }, "TooltipContentImpl")
), Jm = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ se(function(t, n) {
    const { __scopeTooltip: o, ...r } = t, s = Qn(o);
    return /* @__PURE__ */ d(mu, { ...s, ...r, ref: n });
  }, "TooltipArrow")
);
function pc(e, t) {
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
se(pc, "getExitSideFromRect");
function mc(e, t, n = 5) {
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
se(mc, "getPaddedExitPoints");
function hc(e) {
  const { top: t, right: n, bottom: o, left: r } = e;
  return [
    { x: r, y: t },
    { x: n, y: t },
    { x: n, y: o },
    { x: r, y: o }
  ];
}
se(hc, "getPointsFromRect");
function vc(e, t) {
  const { x: n, y: o } = e;
  let r = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const c = t[s], l = t[i], u = c.x, f = c.y, p = l.x, m = l.y;
    f > o != m > o && n < (p - u) * (o - f) / (m - f) + u && (r = !r);
  }
  return r;
}
se(vc, "isPointInPolygon");
function gc(e) {
  const t = e.slice();
  return t.sort((n, o) => n.x < o.x ? -1 : n.x > o.x ? 1 : n.y < o.y ? -1 : n.y > o.y ? 1 : 0), wc(t);
}
se(gc, "getHull");
function wc(e) {
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
se(wc, "getHullPresorted");
var Qm = Wm, eh = Km, th = jm, nh = Ym, oh = Xm, rh = Jm;
const sh = "wk-Tooltip_content", ih = "wk-Tooltip_arrow", ps = {
  content: sh,
  arrow: ih
}, _b = Qm;
function Eb({ content: e, children: t, side: n = "top", delayDuration: o, className: r }) {
  return /* @__PURE__ */ D(eh, { delayDuration: o, children: [
    /* @__PURE__ */ d(th, { asChild: !0, children: t }),
    /* @__PURE__ */ d(nh, { children: /* @__PURE__ */ D(
      oh,
      {
        className: $(ps.content, r),
        side: n,
        sideOffset: 6,
        collisionPadding: 8,
        children: [
          e,
          /* @__PURE__ */ d(rh, { className: ps.arrow, width: 10, height: 5 })
        ]
      }
    ) })
  ] });
}
var ch = Object.defineProperty, Bt = (e, t) => ch(e, "name", { value: t, configurable: !0 }), Or = "Tabs", [ah, Tb] = /* @__PURE__ */ me(Or, [
  Zn
]), bc = Zn(), [lh, Ar] = ah(Or), uh = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Bt(function(t, n) {
    const {
      __scopeTabs: o,
      value: r,
      onValueChange: s,
      defaultValue: i,
      orientation: c = "horizontal",
      dir: l,
      activationMode: u = "automatic",
      ...f
    } = t, p = sn(l), [m, g] = ke({
      prop: r,
      onChange: s,
      defaultProp: i ?? "",
      caller: Or
    });
    return /* @__PURE__ */ d(
      lh,
      {
        scope: o,
        baseId: _e(),
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
), dh = "TabsList", fh = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Bt(function(t, n) {
    const { __scopeTabs: o, loop: r = !0, ...s } = t, i = Ar(dh, o), c = bc(o);
    return /* @__PURE__ */ d(
      Xi,
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
), ph = "TabsTrigger", mh = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ Bt(function(t, n) {
    const { __scopeTabs: o, value: r, disabled: s = !1, ...i } = t, c = Ar(ph, o), l = bc(o), u = Nr(c.baseId, r), f = Mr(c.baseId, r), p = r === c.value;
    return /* @__PURE__ */ d(
      qi,
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
), hh = "TabsContent", vh = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ Bt(function(t, n) {
    const { __scopeTabs: o, value: r, forceMount: s, children: i, ...c } = t, l = Ar(hh, o), u = Nr(l.baseId, r), f = Mr(l.baseId, r), p = r === l.value, m = a.useRef(p);
    return a.useEffect(() => {
      const g = requestAnimationFrame(() => m.current = !1);
      return () => cancelAnimationFrame(g);
    }, []), /* @__PURE__ */ d(Ie, { present: s || p, children: ({ present: g }) => /* @__PURE__ */ d(
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
function Nr(e, t) {
  return `${e}-trigger-${t}`;
}
Bt(Nr, "makeTriggerId");
function Mr(e, t) {
  return `${e}-content-${t}`;
}
Bt(Mr, "makeContentId");
var gh = uh, wh = fh, bh = mh, yh = vh;
const Ch = "wk-Tabs_root", Sh = "wk-Tabs_list", xh = "wk-Tabs_trigger", _h = "wk-Tabs_content", eo = {
  root: Ch,
  list: Sh,
  trigger: xh,
  content: _h
};
function Pb({ className: e, ...t }) {
  return /* @__PURE__ */ d(gh, { className: $(eo.root, e), ...t });
}
function kb({ className: e, ...t }) {
  return /* @__PURE__ */ d(wh, { className: $(eo.list, e), ...t });
}
const Rb = Ee(
  function({ className: t, ...n }, o) {
    return /* @__PURE__ */ d(bh, { ref: o, className: $(eo.trigger, t), ...n });
  }
);
function Ib({ className: e, ...t }) {
  return /* @__PURE__ */ d(yh, { className: $(eo.content, e), ...t });
}
var Eh = Object.defineProperty, te = (e, t) => Eh(e, "name", { value: t, configurable: !0 }), yc = "ToastProvider", [$r, Cc, Th] = /* @__PURE__ */ rn("Toast"), [Sc, Db] = /* @__PURE__ */ me("Toast", [Th]), [Ph, to] = Sc(yc), kh = /* @__PURE__ */ te((e) => {
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
    `Invalid prop \`label\` supplied to \`${yc}\`. Expected non-empty \`string\`.`
  ), /* @__PURE__ */ d($r.Provider, { scope: t, children: /* @__PURE__ */ d(
    Ph,
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
}, "ToastProvider"), Rh = "ToastViewport", Ih = ["F8"], Ko = "toast.viewportPause", jo = "toast.viewportResume", Dh = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ te(function(t, n) {
    const {
      __scopeToast: o,
      hotkey: r = Ih,
      label: s = "Notifications ({hotkey})",
      ...i
    } = t, c = to(Rh, o), l = Cc(o), u = a.useRef(null), f = a.useRef(null), p = a.useRef(null), m = a.useRef(null), g = K(n, m, c.onViewportChange), w = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), h = c.toastCount > 0;
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
            const E = new CustomEvent(Ko);
            S.dispatchEvent(E), c.isClosePausedRef.current = !0;
          }
        }, "handlePause"), C = /* @__PURE__ */ te(() => {
          if (c.isClosePausedRef.current) {
            const E = new CustomEvent(jo);
            S.dispatchEvent(E), c.isClosePausedRef.current = !1;
          }
        }, "handleResume"), x = /* @__PURE__ */ te((E) => {
          !b.contains(E.relatedTarget) && C();
        }, "handleFocusOutResume"), _ = /* @__PURE__ */ te(() => {
          b.contains(document.activeElement) || C();
        }, "handlePointerLeaveResume");
        return b.addEventListener("focusin", y), b.addEventListener("focusout", x), b.addEventListener("pointermove", y), b.addEventListener("pointerleave", _), window.addEventListener("blur", y), window.addEventListener("focus", C), () => {
          b.removeEventListener("focusin", y), b.removeEventListener("focusout", x), b.removeEventListener("pointermove", y), b.removeEventListener("pointerleave", _), window.removeEventListener("blur", y), window.removeEventListener("focus", C);
        };
      }
    }, [h, c.isClosePausedRef]);
    const v = a.useCallback(
      ({ tabbingDirection: b }) => {
        const y = l().map((C) => {
          const x = C.ref.current, _ = [x, ...Ec(x)];
          return b === "forwards" ? _ : _.reverse();
        });
        return (b === "forwards" ? y.reverse() : y).flat();
      },
      [l]
    );
    return a.useEffect(() => {
      const b = m.current;
      if (b) {
        const S = /* @__PURE__ */ te((y) => {
          var _, E, k;
          const C = y.altKey || y.ctrlKey || y.metaKey;
          if (y.key === "Tab" && !C) {
            const P = document.activeElement, O = y.shiftKey;
            if (y.target === b && O) {
              (_ = f.current) == null || _.focus();
              return;
            }
            const N = v({ tabbingDirection: O ? "backwards" : "forwards" }), F = N.findIndex((U) => U === P);
            Rn(N.slice(F + 1)) ? y.preventDefault() : O ? (E = f.current) == null || E.focus() : (k = p.current) == null || k.focus();
          }
        }, "handleKeyDown");
        return b.addEventListener("keydown", S), () => b.removeEventListener("keydown", S);
      }
    }, [l, v]), /* @__PURE__ */ D(
      La,
      {
        ref: u,
        role: "region",
        "aria-label": s.replace("{hotkey}", w),
        tabIndex: -1,
        style: { pointerEvents: h ? void 0 : "none" },
        children: [
          h && /* @__PURE__ */ d(
            ms,
            {
              ref: f,
              onFocusFromOutsideViewport: () => {
                const b = v({
                  tabbingDirection: "forwards"
                });
                Rn(b);
              }
            }
          ),
          /* @__PURE__ */ d($r.Slot, { scope: o, children: /* @__PURE__ */ d(H.ol, { tabIndex: -1, ...i, ref: g }) }),
          h && /* @__PURE__ */ d(
            ms,
            {
              ref: p,
              onFocusFromOutsideViewport: () => {
                const b = v({
                  tabbingDirection: "backwards"
                });
                Rn(b);
              }
            }
          )
        ]
      }
    );
  }, "ToastViewport")
), Oh = "ToastFocusProxy", ms = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ te(function(t, n) {
    const { __scopeToast: o, onFocusFromOutsideViewport: r, ...s } = t, i = to(Oh, o);
    return /* @__PURE__ */ d(
      fr,
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
), no = "Toast", Ah = "toast.swipeStart", Nh = "toast.swipeMove", Mh = "toast.swipeCancel", $h = "toast.swipeEnd", Lh = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ te(function(t, n) {
    const { forceMount: o, open: r, defaultOpen: s, onOpenChange: i, ...c } = t, [l, u] = ke({
      prop: r,
      defaultProp: s ?? !0,
      onChange: i,
      caller: no
    });
    return /* @__PURE__ */ d(Ie, { present: o || l, children: /* @__PURE__ */ d(
      Vh,
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
), [Fh, Bh] = Sc(no, {
  onClose() {
  }
}), Vh = /* @__PURE__ */ a.forwardRef(
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
    } = t, v = to(no, o), b = Cc(o), [S, y] = a.useState(null), C = K(n, y), x = a.useRef(null), _ = a.useRef(null), E = s || v.duration, k = a.useRef(0), P = a.useRef(E), O = a.useRef(0), { onToastAdd: B, onToastRemove: A } = v, N = ue(() => {
      var M;
      (S == null ? void 0 : S.contains(document.activeElement)) && ((M = v.viewport) == null || M.focus()), c();
    }), F = a.useCallback(
      (T) => {
        !T || T === 1 / 0 || (window.clearTimeout(O.current), k.current = (/* @__PURE__ */ new Date()).getTime(), O.current = window.setTimeout(N, T));
      },
      [N]
    );
    a.useEffect(() => {
      const T = v.viewport;
      if (T) {
        const M = /* @__PURE__ */ te(() => {
          F(P.current), f == null || f();
        }, "handleResume"), L = /* @__PURE__ */ te(() => {
          const W = (/* @__PURE__ */ new Date()).getTime() - k.current;
          P.current = P.current - W, window.clearTimeout(O.current), u == null || u();
        }, "handlePause");
        return T.addEventListener(Ko, L), T.addEventListener(jo, M), () => {
          T.removeEventListener(Ko, L), T.removeEventListener(jo, M);
        };
      }
    }, [v.viewport, E, u, f, F]), a.useEffect(() => {
      i && !v.isClosePausedRef.current && F(E);
    }, [i, E, v.isClosePausedRef, F]), a.useEffect(() => () => {
      window.clearTimeout(O.current);
    }, []), a.useEffect(() => (B(), () => A()), [B, A]);
    const U = a.useMemo(() => S ? Lr(S) : null, [S]);
    return v.viewport ? /* @__PURE__ */ D(We, { children: [
      U && /* @__PURE__ */ d(
        Hh,
        {
          __scopeToast: o,
          role: "status",
          "aria-live": r === "foreground" ? "assertive" : "polite",
          children: U
        }
      ),
      /* @__PURE__ */ d(Fh, { scope: o, onClose: N, children: Nt.createPortal(
        /* @__PURE__ */ d($r.ItemSlot, { scope: o, children: /* @__PURE__ */ d(
          $a,
          {
            asChild: !0,
            onEscapeKeyDown: I(l, (T) => {
              b().some(
                (L) => {
                  var W;
                  return (W = L.ref.current) == null ? void 0 : W.contains(T.target);
                }
              ) || N();
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
                  T.key === "Escape" && (l == null || l(T.nativeEvent), T.nativeEvent.defaultPrevented || N());
                }),
                onPointerDown: I(t.onPointerDown, (T) => {
                  T.button === 0 && (x.current = { x: T.clientX, y: T.clientY });
                }),
                onPointerMove: I(t.onPointerMove, (T) => {
                  if (!x.current) return;
                  const M = T.clientX - x.current.x, L = T.clientY - x.current.y, W = !!_.current, R = ["left", "right"].includes(v.swipeDirection), Z = ["left", "up"].includes(v.swipeDirection) ? Math.min : Math.max, G = R ? Z(0, M) : 0, Q = R ? 0 : Z(0, L), ae = T.pointerType === "touch" ? 10 : 2, ce = { x: G, y: Q }, we = { originalEvent: T, delta: ce };
                  W ? (_.current = ce, Xt(Nh, m, we, {
                    discrete: !1
                  })) : hs(ce, v.swipeDirection, ae) ? (_.current = ce, Xt(Ah, p, we, {
                    discrete: !1
                  }), T.target.setPointerCapture(T.pointerId)) : (Math.abs(M) > ae || Math.abs(L) > ae) && (x.current = null);
                }),
                onPointerUp: I(t.onPointerUp, (T) => {
                  const M = _.current, L = T.target;
                  if (L.hasPointerCapture(T.pointerId) && L.releasePointerCapture(T.pointerId), _.current = null, x.current = null, M) {
                    const W = T.currentTarget, R = { originalEvent: T, delta: M };
                    hs(M, v.swipeDirection, v.swipeThreshold) ? Xt($h, w, R, {
                      discrete: !0
                    }) : Xt(
                      Mh,
                      g,
                      R,
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
), Hh = /* @__PURE__ */ te((e) => {
  const { __scopeToast: t, children: n, ...o } = e, r = to(no, t), [s, i] = a.useState(!1), [c, l] = a.useState(!1);
  return xc(() => i(!0)), a.useEffect(() => {
    const u = window.setTimeout(() => l(!0), 1e3);
    return () => window.clearTimeout(u);
  }, []), c ? null : /* @__PURE__ */ d(ln, { asChild: !0, container: r.announcerContainer || void 0, children: /* @__PURE__ */ d(fr, { ...o, children: s && /* @__PURE__ */ D(We, { children: [
    r.label,
    " ",
    n
  ] }) }) });
}, "ToastAnnounce"), Wh = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ te(function(t, n) {
    const { __scopeToast: o, ...r } = t;
    return /* @__PURE__ */ d(H.div, { ...r, ref: n });
  }, "ToastTitle")
), Uh = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ te(function(t, n) {
    const { __scopeToast: o, ...r } = t;
    return /* @__PURE__ */ d(H.div, { ...r, ref: n });
  }, "ToastDescription")
), Kh = "ToastClose", jh = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ te(function(t, n) {
    const { __scopeToast: o, ...r } = t, s = Bh(Kh, o);
    return /* @__PURE__ */ d(zh, { asChild: !0, children: /* @__PURE__ */ d(
      H.button,
      {
        type: "button",
        ...r,
        ref: n,
        onClick: I(t.onClick, s.onClose)
      }
    ) });
  }, "ToastClose")
), zh = /* @__PURE__ */ a.forwardRef(/* @__PURE__ */ te(function(t, n) {
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
function Lr(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((o) => {
    if (o.nodeType === o.TEXT_NODE && o.textContent && t.push(o.textContent), _c(o)) {
      const r = o.ariaHidden || o.hidden || o.style.display === "none", s = o.dataset.radixToastAnnounceExclude === "";
      if (!r)
        if (s) {
          const i = o.dataset.radixToastAnnounceAlt;
          i && t.push(i);
        } else
          t.push(...Lr(o));
    }
  }), t;
}
te(Lr, "getAnnounceTextContent");
function Xt(e, t, n, { discrete: o }) {
  const r = n.originalEvent.currentTarget, s = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && r.addEventListener(e, t, { once: !0 }), o ? Ln(r, s) : r.dispatchEvent(s);
}
te(Xt, "handleAndDispatchCustomEvent");
var hs = /* @__PURE__ */ te((e, t, n = 0) => {
  const o = Math.abs(e.x), r = Math.abs(e.y), s = o > r;
  return t === "left" || t === "right" ? s && o > n : !s && r > n;
}, "isDeltaInDirection");
function xc(e = () => {
}) {
  const t = ue(e);
  oe(() => {
    let n = 0, o = 0;
    return n = window.requestAnimationFrame(() => o = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(n), window.cancelAnimationFrame(o);
    };
  }, [t]);
}
te(xc, "useNextFrame");
function _c(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
te(_c, "isHTMLElement");
function Ec(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: /* @__PURE__ */ te((o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }, "acceptNode")
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
te(Ec, "getTabbableCandidates");
function Rn(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
te(Rn, "focusFirst");
var Gh = kh, Yh = Dh, Xh = Lh, qh = Wh, Zh = Uh, Jh = jh;
const Qh = "wk-Toast_viewport", ev = "wk-Toast_root", tv = "wk-Toast_body", nv = "wk-Toast_title", ov = "wk-Toast_description", rv = "wk-Toast_close", Tt = {
  viewport: Qh,
  root: ev,
  body: tv,
  title: nv,
  description: ov,
  close: rv
}, Tc = on(null);
function Ob({ children: e, swipeDirection: t = "right" }) {
  const [n, o] = Pe([]), r = pt(1), s = ft((l) => {
    o((u) => u.filter((f) => f.id !== l));
  }, []), i = ft((l) => {
    const u = r.current++;
    o((f) => [...f, { ...l, id: u }]);
  }, []), c = Ot(() => ({ toast: i, dismiss: s }), [i, s]);
  return /* @__PURE__ */ d(Tc.Provider, { value: c, children: /* @__PURE__ */ D(Gh, { swipeDirection: t, children: [
    e,
    n.map((l) => /* @__PURE__ */ D(
      Xh,
      {
        className: Tt.root,
        "data-tone": l.tone ?? "neutral",
        duration: l.duration ?? (l.tone === "danger" ? 1 / 0 : 5e3),
        type: l.tone === "danger" ? "foreground" : "background",
        onOpenChange: (u) => {
          u || s(l.id);
        },
        children: [
          /* @__PURE__ */ D("div", { className: Tt.body, children: [
            /* @__PURE__ */ d(qh, { className: Tt.title, children: l.title }),
            l.description && /* @__PURE__ */ d(Zh, { className: Tt.description, children: l.description })
          ] }),
          /* @__PURE__ */ d(Jh, { className: Tt.close, "aria-label": "Dismiss", children: /* @__PURE__ */ d(Mn, {}) })
        ]
      },
      l.id
    )),
    /* @__PURE__ */ d(Yh, { className: Tt.viewport })
  ] }) });
}
function Ab() {
  const e = nn(Tc);
  if (!e) throw new Error("useToast must be used inside <ToastProvider>");
  return e;
}
const sv = "wk-Textarea_root", iv = "wk-Textarea_mono", cv = "wk-Textarea_noResize", go = {
  root: sv,
  mono: iv,
  noResize: cv
}, Nb = Ee(function({ invalid: t, mono: n = !1, resizable: o = !0, className: r, id: s, rows: i = 4, ...c }, l) {
  const u = qo(), f = t ?? (u == null ? void 0 : u.invalid) ?? !1;
  return /* @__PURE__ */ d(
    "textarea",
    {
      ref: l,
      id: s ?? (u == null ? void 0 : u.inputId),
      rows: i,
      "aria-invalid": f || void 0,
      "aria-describedby": u == null ? void 0 : u.describedBy,
      className: $(go.root, n && go.mono, !o && go.noResize, r),
      ...c
    }
  );
}), av = "wk-Combobox_wrap", lv = "wk-Combobox_list", uv = "wk-Combobox_option", dv = "wk-Combobox_label", fv = "wk-Combobox_mono", pv = "wk-Combobox_hint", mv = "wk-Combobox_empty", dt = {
  wrap: av,
  list: lv,
  option: uv,
  label: dv,
  mono: fv,
  hint: pv,
  empty: mv
}, hv = (e) => e.value ?? e.label;
function Mb({
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
  const f = Je(), [p, m] = Pe(!1), [g, w] = Pe(-1), h = pt(null), v = Ot(() => p ? n(e) : [], [p, n, e]), b = p && (v.length > 0 || !!r), S = g >= 0 && v[g] ? `${f}-${g}` : void 0, y = (C) => {
    const x = v[C];
    x && (t(hv(x)), m(!1), w(-1));
  };
  return /* @__PURE__ */ D("div", { className: dt.wrap, children: [
    /* @__PURE__ */ d(
      xo,
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
    b && /* @__PURE__ */ d("ul", { className: dt.list, id: f, role: "listbox", children: v.length === 0 ? /* @__PURE__ */ d("li", { className: dt.empty, children: r }) : v.map((C, x) => /* @__PURE__ */ D(
      "li",
      {
        id: `${f}-${x}`,
        role: "option",
        "aria-selected": x === g,
        "data-active": x === g,
        className: dt.option,
        onMouseEnter: () => w(x),
        onMouseDown: (_) => {
          _.preventDefault(), h.current && clearTimeout(h.current), y(x);
        },
        children: [
          /* @__PURE__ */ d("span", { className: $(dt.label, s && dt.mono), children: C.label }),
          C.hint && /* @__PURE__ */ d("span", { className: dt.hint, children: C.hint })
        ]
      },
      `${C.label}-${x}`
    )) })
  ] });
}
const vv = "wk-SegmentedControl_root", gv = "wk-SegmentedControl_option", wv = "wk-SegmentedControl_fluid", wo = {
  root: vv,
  option: gv,
  fluid: wv
};
function $b({
  options: e,
  value: t,
  onValueChange: n,
  fluid: o = !1,
  className: r,
  ...s
}) {
  const i = Je(), c = pt(null), l = ft(
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
      className: $(wo.root, o && wo.fluid, r),
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
            className: wo.option,
            onClick: () => !u.disabled && n(u.value),
            children: u.label
          },
          u.value
        );
      })
    }
  );
}
const bv = "wk-Alert_root", yv = "wk-Alert_info", Cv = "wk-Alert_success", Sv = "wk-Alert_warn", xv = "wk-Alert_danger", _v = "wk-Alert_icon", Ev = "wk-Alert_title", Tv = "wk-Alert_body", Pv = "wk-Alert_actions", kv = "wk-Alert_close", Rv = "wk-Alert_banner", tt = {
  root: bv,
  info: yv,
  success: Cv,
  warn: Sv,
  danger: xv,
  icon: _v,
  title: Ev,
  body: Tv,
  actions: Pv,
  close: kv,
  banner: Rv
};
function Lb({
  tone: e = "info",
  title: t,
  children: n,
  icon: o,
  action: r,
  onDismiss: s,
  banner: i = !1,
  className: c
}) {
  return /* @__PURE__ */ D(
    "div",
    {
      role: e === "danger" ? "alert" : "status",
      className: $(tt.root, tt[e], i && tt.banner, c),
      children: [
        o && /* @__PURE__ */ d("span", { className: tt.icon, "aria-hidden": "true", children: o }),
        /* @__PURE__ */ D("div", { className: tt.body, children: [
          t && /* @__PURE__ */ d("span", { className: tt.title, children: t }),
          n,
          r && /* @__PURE__ */ d("div", { className: tt.actions, children: r })
        ] }),
        s && /* @__PURE__ */ d("button", { type: "button", className: tt.close, onClick: s, "aria-label": "Dismiss", children: /* @__PURE__ */ d(Mn, {}) })
      ]
    }
  );
}
const Iv = "wk-EmptyState_root", Dv = "wk-EmptyState_icon", Ov = "wk-EmptyState_title", Av = "wk-EmptyState_description", Nv = "wk-EmptyState_actions", Kt = {
  root: Iv,
  icon: Dv,
  title: Ov,
  description: Av,
  actions: Nv
};
function Fb({ icon: e, title: t, description: n, action: o, className: r }) {
  return /* @__PURE__ */ D("div", { className: $(Kt.root, r), children: [
    e && /* @__PURE__ */ d("span", { className: Kt.icon, "aria-hidden": "true", children: e }),
    /* @__PURE__ */ d("p", { className: Kt.title, children: t }),
    n && /* @__PURE__ */ d("p", { className: Kt.description, children: n }),
    o && /* @__PURE__ */ d("div", { className: Kt.actions, children: o })
  ] });
}
const Mv = "wk-Spinner_root", $v = "wk-Spinner_sm", Lv = "wk-Spinner_md", Fv = "wk-Spinner_lg", vs = {
  root: Mv,
  "wk-spinner-rotate": "wk-Spinner_wk-spinner-rotate",
  sm: $v,
  md: Lv,
  lg: Fv
};
function Bb({ size: e = "md", label: t = "Loading", className: n }) {
  return /* @__PURE__ */ D("span", { role: "status", children: [
    /* @__PURE__ */ d("span", { className: $(vs.root, vs[e], n), "aria-hidden": "true" }),
    t && /* @__PURE__ */ d(fn, { children: t })
  ] });
}
const Bv = "wk-Kbd_root", Vv = "wk-Kbd_group", bo = {
  root: Bv,
  group: Vv
};
function Vb({ keys: e, className: t, children: n, ...o }) {
  return e != null && e.length ? /* @__PURE__ */ d("span", { className: bo.group, ...o, children: e.map((r, s) => /* @__PURE__ */ d(zo, { children: /* @__PURE__ */ d("kbd", { className: $(bo.root, t), children: r }) }, `${r}-${s}`)) }) : /* @__PURE__ */ d("kbd", { className: $(bo.root, t), ...o, children: n });
}
const Hv = "wk-SplitPane_root", Wv = "wk-SplitPane_horizontal", Uv = "wk-SplitPane_vertical", Kv = "wk-SplitPane_pane", jv = "wk-SplitPane_handle", jt = {
  root: Hv,
  horizontal: Wv,
  vertical: Uv,
  pane: Kv,
  handle: jv
};
function Hb({
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
  const u = pt(null), [f, p] = Pe(!1), m = t === "horizontal", g = ft(
    (h) => {
      var S;
      const v = (S = u.current) == null ? void 0 : S.getBoundingClientRect(), b = v ? (m ? v.width : v.height) - r : s;
      return Math.max(r, Math.min(h, Math.min(s, b)));
    },
    [r, s, m]
  ), w = (h) => o(g(n + h));
  return /* @__PURE__ */ D("div", { ref: u, className: $(jt.root, jt[t], c), children: [
    /* @__PURE__ */ d("div", { className: jt.pane, style: { [m ? "width" : "height"]: n, flex: "none" }, children: e[0] }),
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
        className: jt.handle,
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
    /* @__PURE__ */ d("div", { className: $(jt.pane), style: { flex: 1 }, children: e[1] })
  ] });
}
const zv = "wk-NavList_list", Gv = "wk-NavList_item", Yv = "wk-NavList_control", Xv = "wk-NavList_icon", qv = "wk-NavList_label", Zv = "wk-NavList_badge", kt = {
  list: zv,
  item: Gv,
  control: Yv,
  icon: Xv,
  label: qv,
  badge: Zv
};
function Wb({ children: e, className: t, ...n }) {
  return /* @__PURE__ */ d("ul", { className: $(kt.list, t), ...n, children: e });
}
function Ub({
  children: e,
  current: t = !1,
  icon: n,
  badge: o,
  onSelect: r,
  asChild: s = !1,
  disabled: i = !1,
  className: c
}) {
  const l = s ? $n : "button";
  return /* @__PURE__ */ d("li", { className: kt.item, children: /* @__PURE__ */ D(
    l,
    {
      ...s ? {} : { type: "button", disabled: i },
      className: $(kt.control, c),
      "aria-current": t ? "page" : void 0,
      "data-current": t || void 0,
      onClick: r,
      children: [
        n && /* @__PURE__ */ d("span", { className: kt.icon, "aria-hidden": "true", children: n }),
        /* @__PURE__ */ d("span", { className: kt.label, children: e }),
        o && /* @__PURE__ */ d("span", { className: kt.badge, children: o })
      ]
    }
  ) });
}
const Jv = "wk-Tree_root", Qv = "wk-Tree_item", eg = "wk-Tree_twisty", tg = "wk-Tree_spacer", ng = "wk-Tree_label", qt = {
  root: Jv,
  item: Qv,
  twisty: eg,
  spacer: tg,
  label: ng
}, Pc = on(null);
function Kb({ children: e, onActivate: t, onToggle: n, className: o, ...r }) {
  const s = pt(null), [i, c] = Pe(null), l = pt([]);
  l.current = [];
  const u = ft((g) => {
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
  }, m = Ot(
    () => ({ activeId: i, setActiveId: c, register: u }),
    [i, u]
  );
  return /* @__PURE__ */ d(Pc.Provider, { value: m, children: /* @__PURE__ */ d(
    "div",
    {
      ref: s,
      role: "tree",
      className: $(qt.root, o),
      onKeyDown: p,
      ...r,
      children: e
    }
  ) });
}
function jb({
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
  const w = nn(Pc);
  if (!w) throw new Error("TreeItem must be used inside <Tree>");
  w.register(e);
  const h = w.activeId === e || w.activeId === null && t === 1 && f === 1;
  return /* @__PURE__ */ D(
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
      className: $(qt.item, g),
      style: { paddingInlineStart: (t - 1) * m + 4 },
      onFocus: () => w.setActiveId(e),
      onClick: () => {
        w.setActiveId(e), l == null || l(e);
      },
      children: [
        o ? /* @__PURE__ */ d(
          "span",
          {
            className: qt.twisty,
            "data-expanded": !!r,
            onClick: (v) => {
              v.stopPropagation(), u == null || u(e, !r);
            },
            children: /* @__PURE__ */ d(gs, {})
          }
        ) : /* @__PURE__ */ d("span", { className: qt.spacer }),
        i,
        /* @__PURE__ */ d("span", { className: qt.label, children: n }),
        c
      ]
    }
  );
}
const og = "wk-CommandPalette_overlay", rg = "wk-CommandPalette_content", sg = "wk-CommandPalette_search", ig = "wk-CommandPalette_searchIcon", cg = "wk-CommandPalette_input", ag = "wk-CommandPalette_list", lg = "wk-CommandPalette_group", ug = "wk-CommandPalette_heading", dg = "wk-CommandPalette_item", fg = "wk-CommandPalette_itemIcon", pg = "wk-CommandPalette_itemLabel", mg = "wk-CommandPalette_itemHint", hg = "wk-CommandPalette_empty", vg = "wk-CommandPalette_footer", fe = {
  overlay: og,
  content: rg,
  search: sg,
  searchIcon: ig,
  input: cg,
  list: ag,
  group: lg,
  heading: ug,
  item: dg,
  itemIcon: fg,
  itemLabel: pg,
  itemHint: mg,
  empty: hg,
  footer: vg
}, kc = on(null);
function zb({
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
  const u = Je(), [f, p] = Pe(0), m = pt([]);
  m.current = [];
  const g = Ot(
    () => (b, S) => {
      m.current.push({ id: b, run: S });
    },
    []
  );
  Yt(() => p(0), [n]);
  const w = m.current.length, h = m.current[f], v = Ot(
    () => ({ activeId: (h == null ? void 0 : h.id) ?? null, register: g, listId: u }),
    [h == null ? void 0 : h.id, g, u]
  );
  return /* @__PURE__ */ d(Ai, { open: e, onOpenChange: t, children: /* @__PURE__ */ D($i, { children: [
    /* @__PURE__ */ d(Li, { className: fe.overlay }),
    /* @__PURE__ */ D(Fi, { className: $(fe.content, l), children: [
      /* @__PURE__ */ d(Fo, { asChild: !0, children: /* @__PURE__ */ d(fn, { children: i }) }),
      /* @__PURE__ */ D(kc.Provider, { value: v, children: [
        /* @__PURE__ */ D("div", { className: fe.search, children: [
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
function Gb({ heading: e, children: t }) {
  return /* @__PURE__ */ D("li", { className: fe.group, children: [
    e && /* @__PURE__ */ d("div", { className: fe.heading, children: e }),
    /* @__PURE__ */ d("ul", { role: "group", style: { listStyle: "none", margin: 0, padding: 0 }, children: t })
  ] });
}
function Yb({ id: e, children: t, onSelect: n, icon: o, hint: r }) {
  const s = nn(kc);
  if (!s) throw new Error("CommandItem must be used inside <CommandPalette>");
  s.register(e, n);
  const i = s.activeId === e;
  return /* @__PURE__ */ D(
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
function Xb({ children: e }) {
  return /* @__PURE__ */ d("li", { className: fe.empty, children: e });
}
const gg = "wk-KeyValueEditor_root", wg = "wk-KeyValueEditor_head", bg = "wk-KeyValueEditor_row", yg = "wk-KeyValueEditor_cell", Cg = "wk-KeyValueEditor_actions", Sg = "wk-KeyValueEditor_remove", xg = "wk-KeyValueEditor_footer", _g = "wk-KeyValueEditor_empty", $e = {
  root: gg,
  head: wg,
  row: bg,
  cell: yg,
  actions: Cg,
  remove: Sg,
  footer: xg,
  empty: _g
};
function qb({
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
  const m = Je();
  let g = 0;
  const w = () => (i == null ? void 0 : i()) ?? `${m}-${e.length}-${g++}`, h = (v, b) => t(e.map((S) => S.id === v ? { ...S, ...b } : S));
  return /* @__PURE__ */ D("div", { className: $($e.root, p), children: [
    /* @__PURE__ */ D("div", { className: $e.head, "aria-hidden": "true", children: [
      /* @__PURE__ */ d("span", { children: c ? "" : null }),
      /* @__PURE__ */ d("span", { children: n }),
      /* @__PURE__ */ d("span", { children: o }),
      /* @__PURE__ */ d("span", {})
    ] }),
    e.length === 0 && /* @__PURE__ */ d("p", { className: $e.empty, children: u }),
    e.map((v, b) => {
      const S = v.enabled ?? !0;
      return /* @__PURE__ */ D("div", { className: $e.row, "data-disabled": !S, children: [
        /* @__PURE__ */ d("span", { className: $e.cell, children: c && /* @__PURE__ */ d(
          Bf,
          {
            checked: S,
            onCheckedChange: (y) => h(v.id, { enabled: y === !0 }),
            "aria-label": `Enable ${v.key || `row ${b + 1}`}`
          }
        ) }),
        /* @__PURE__ */ d("span", { className: $e.cell, children: /* @__PURE__ */ d(
          xo,
          {
            size: "sm",
            mono: !0,
            value: v.key,
            placeholder: r,
            "aria-label": `${n}, row ${b + 1}`,
            onChange: (y) => h(v.id, { key: y.target.value })
          }
        ) }),
        /* @__PURE__ */ d("span", { className: $e.cell, children: /* @__PURE__ */ d(
          xo,
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
        /* @__PURE__ */ d("span", { className: $e.actions, children: /* @__PURE__ */ D(
          "button",
          {
            type: "button",
            className: $e.remove,
            onClick: () => t(e.filter((y) => y.id !== v.id)),
            children: [
              /* @__PURE__ */ d(Mn, {}),
              /* @__PURE__ */ D(fn, { children: [
                "Remove ",
                v.key || `row ${b + 1}`
              ] })
            ]
          }
        ) })
      ] }, v.id);
    }),
    /* @__PURE__ */ d("div", { className: $e.footer, children: /* @__PURE__ */ D(
      Jc,
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
const Eg = "wk-CodeSurface_root", Tg = "wk-CodeSurface_toolbar", Pg = "wk-CodeSurface_body", kg = "wk-CodeSurface_pre", Rg = "wk-CodeSurface_status", Zt = {
  root: Eg,
  toolbar: Tg,
  body: Pg,
  pre: kg,
  status: Rg
};
function Zb({ children: e, toolbar: t, status: n, className: o }) {
  return /* @__PURE__ */ D("div", { className: $(Zt.root, o), children: [
    t && /* @__PURE__ */ d("div", { className: Zt.toolbar, children: t }),
    /* @__PURE__ */ d("div", { className: Zt.body, children: e }),
    n && /* @__PURE__ */ d("div", { className: Zt.status, children: n })
  ] });
}
function Jb({ code: e, className: t, ...n }) {
  return /* @__PURE__ */ d("pre", { className: $(Zt.pre, t), tabIndex: 0, ...n, children: /* @__PURE__ */ d("code", { children: e }) });
}
const Ig = "wk-Form_section", Dg = "wk-Form_sectionTop", Og = "wk-Form_sectionHead", Ag = "wk-Form_sectionTitle", Ng = "wk-Form_sectionDesc", Mg = "wk-Form_sectionBody", $g = "wk-Form_row", Lg = "wk-Form_rowText", Fg = "wk-Form_rowLabel", Bg = "wk-Form_rowDesc", Vg = "wk-Form_rowControl", Hg = "wk-Form_stacked", Se = {
  section: Ig,
  sectionTop: Dg,
  sectionHead: Og,
  sectionTitle: Ag,
  sectionDesc: Ng,
  sectionBody: Mg,
  row: $g,
  rowText: Lg,
  rowLabel: Fg,
  rowDesc: Bg,
  rowControl: Vg,
  stacked: Hg
};
function Qb({ title: e, description: t, children: n, action: o, className: r }) {
  const s = Je();
  return /* @__PURE__ */ D("section", { className: $(Se.section, r), "aria-labelledby": e ? s : void 0, children: [
    (e || o) && /* @__PURE__ */ D("div", { className: Se.sectionTop, children: [
      /* @__PURE__ */ D("div", { className: Se.sectionHead, children: [
        e && /* @__PURE__ */ d("h2", { className: Se.sectionTitle, id: s, children: e }),
        t && /* @__PURE__ */ d("p", { className: Se.sectionDesc, children: t })
      ] }),
      o
    ] }),
    /* @__PURE__ */ d("div", { className: Se.sectionBody, children: n })
  ] });
}
function ey({ label: e, description: t, children: n, stacked: o, className: r }) {
  return /* @__PURE__ */ D("div", { className: $(Se.row, o && Se.stacked, r), children: [
    /* @__PURE__ */ D("div", { className: Se.rowText, children: [
      /* @__PURE__ */ d("span", { className: Se.rowLabel, children: e }),
      t && /* @__PURE__ */ d("p", { className: Se.rowDesc, children: t })
    ] }),
    /* @__PURE__ */ d("div", { className: Se.rowControl, children: n })
  ] });
}
const Wg = "wk-HighlightText_mark", Ug = {
  mark: Wg
};
function ty({ text: e, query: t, className: n }) {
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
  return /* @__PURE__ */ d("span", { className: n, children: s.map((c, l) => /* @__PURE__ */ d(zo, { children: c.hit ? /* @__PURE__ */ d("mark", { className: Ug.mark, children: c.chunk }) : c.chunk }, l)) });
}
const Kg = "wk-SkipToContent_root", jg = {
  root: Kg
};
function ny({
  targetId: e = "wk-main",
  children: t = "Skip to content",
  className: n
}) {
  return /* @__PURE__ */ d("a", { href: `#${e}`, className: $(jg.root, n), children: t });
}
const zg = "wk-Card_root", Gg = "wk-Card_outlined", Yg = "wk-Card_raised", Xg = "wk-Card_inset", qg = "wk-Card_interactive", Zg = "wk-Card_top", Jg = "wk-Card_icon", Qg = "wk-Card_head", ew = "wk-Card_title", tw = "wk-Card_description", nw = "wk-Card_action", ow = "wk-Card_body", rw = "wk-Card_footer", be = {
  root: zg,
  outlined: Gg,
  raised: Yg,
  inset: Xg,
  "padding-none": "wk-Card_padding-none",
  "padding-sm": "wk-Card_padding-sm",
  "padding-md": "wk-Card_padding-md",
  "padding-lg": "wk-Card_padding-lg",
  interactive: qg,
  top: Zg,
  icon: Jg,
  head: Qg,
  title: ew,
  description: tw,
  action: nw,
  body: ow,
  footer: rw
};
function oy({
  title: e,
  titleLevel: t = 3,
  description: n,
  icon: o,
  action: r,
  footer: s,
  children: i,
  variant: c = "outlined",
  padding: l = "md",
  interactive: u = !1,
  asChild: f = !1,
  className: p,
  ...m
}) {
  const g = Je(), w = e ? g : void 0, h = `h${t}`, v = /* @__PURE__ */ D(We, { children: [
    (e || r || o) && /* @__PURE__ */ D("div", { className: be.top, children: [
      o && /* @__PURE__ */ d("span", { className: be.icon, "aria-hidden": "true", children: o }),
      /* @__PURE__ */ D("div", { className: be.head, children: [
        e && /* @__PURE__ */ d(h, { className: be.title, id: w, children: e }),
        n && /* @__PURE__ */ d("p", { className: be.description, children: n })
      ] }),
      r && /* @__PURE__ */ d("div", { className: be.action, children: r })
    ] }),
    i && /* @__PURE__ */ d("div", { className: be.body, children: i }),
    s && /* @__PURE__ */ d("div", { className: be.footer, children: s })
  ] }), b = $(
    be.root,
    be[c],
    be[`padding-${l}`],
    u && be.interactive,
    p
  );
  return f ? /* @__PURE__ */ d($n, { className: b, "aria-labelledby": w, ...m, children: /* @__PURE__ */ d("div", { children: v }) }) : u ? /* @__PURE__ */ d(
    "button",
    {
      type: "button",
      className: b,
      "aria-labelledby": w,
      ...m,
      children: v
    }
  ) : /* @__PURE__ */ d("div", { className: b, "aria-labelledby": w, ...m, children: v });
}
const sw = "wk-Stepper_root", iw = "wk-Stepper_horizontal", cw = "wk-Stepper_vertical", aw = "wk-Stepper_step", lw = "wk-Stepper_complete", uw = "wk-Stepper_current", dw = "wk-Stepper_marker", fw = "wk-Stepper_text", pw = "wk-Stepper_label", mw = "wk-Stepper_description", nt = {
  root: sw,
  horizontal: iw,
  vertical: cw,
  step: aw,
  complete: lw,
  current: uw,
  marker: dw,
  text: fw,
  label: pw,
  description: mw
};
function ry({
  steps: e,
  current: t,
  orientation: n = "horizontal",
  className: o,
  "aria-label": r
}) {
  return /* @__PURE__ */ d("ol", { className: $(nt.root, nt[n], o), "aria-label": r, children: e.map((s, i) => {
    const { label: c, description: l } = typeof s == "string" ? { label: s, description: void 0 } : s, u = i < t ? "complete" : i === t ? "current" : "upcoming";
    return /* @__PURE__ */ D(
      "li",
      {
        className: $(nt.step, nt[u]),
        "aria-current": u === "current" ? "step" : void 0,
        children: [
          /* @__PURE__ */ d("span", { className: nt.marker, "aria-hidden": "true", children: u === "complete" ? /* @__PURE__ */ d(Yo, {}) : i + 1 }),
          /* @__PURE__ */ D("span", { className: nt.text, children: [
            /* @__PURE__ */ D("span", { className: nt.label, children: [
              c,
              /* @__PURE__ */ d(fn, { children: u === "complete" ? " (completed)" : u === "current" ? " (current step)" : " (not started)" })
            ] }),
            l && /* @__PURE__ */ d("span", { className: nt.description, children: l })
          ] })
        ]
      },
      i
    );
  }) });
}
const hw = "wk-Table_wrapper", vw = "wk-Table_scroll", gw = "wk-Table_root", ww = "wk-Table_caption", bw = "wk-Table_th", yw = "wk-Table_td", Cw = "wk-Table_numeric", Sw = "wk-Table_captionHidden", xw = "wk-Table_row", _w = "wk-Table_interactive", Ew = "wk-Table_sticky", ye = {
  wrapper: hw,
  scroll: vw,
  root: gw,
  caption: ww,
  th: bw,
  td: yw,
  numeric: Cw,
  captionHidden: Sw,
  row: xw,
  interactive: _w,
  sticky: Ew
};
function sy({
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
      className: $(ye.wrapper, l && ye.scroll),
      style: l ? { "--wk-table-max-block": r } : void 0,
      children: /* @__PURE__ */ D(
        "table",
        {
          className: $(
            ye.root,
            n && ye.interactive,
            o && ye.sticky,
            s
          ),
          ...c,
          children: [
            e && /* @__PURE__ */ d("caption", { className: $(ye.caption, t && ye.captionHidden), children: e }),
            i
          ]
        }
      )
    }
  );
}
const iy = (e) => /* @__PURE__ */ d("thead", { ...e }), cy = (e) => /* @__PURE__ */ d("tbody", { ...e }), ay = ({ selected: e, className: t, ...n }) => /* @__PURE__ */ d("tr", { "data-selected": e || void 0, className: $(ye.row, t), ...n }), ly = ({ numeric: e, scope: t = "col", className: n, ...o }) => /* @__PURE__ */ d("th", { scope: t, className: $(ye.th, e && ye.numeric, n), ...o }), uy = ({ numeric: e, className: t, ...n }) => /* @__PURE__ */ d("td", { className: $(ye.td, e && ye.numeric, t), ...n }), Tw = "wk-Badge_root", Pw = "wk-Badge_neutral", kw = "wk-Badge_accent", Rw = "wk-Badge_danger", Iw = "wk-Badge_warn", Dw = "wk-Badge_success", Ow = "wk-Badge_info", Aw = "wk-Badge_mono", yo = {
  root: Tw,
  neutral: Pw,
  accent: kw,
  danger: Rw,
  warn: Iw,
  success: Dw,
  info: Ow,
  mono: Aw
};
function dy({ tone: e = "neutral", mono: t = !1, className: n, ...o }) {
  return /* @__PURE__ */ d("span", { className: $(yo.root, yo[e], t && yo.mono, n), ...o });
}
const Nw = "wk-AppShell_root", Mw = "wk-AppShell_titlebar", $w = "wk-AppShell_body", Lw = "wk-AppShell_sidebar", Fw = "wk-AppShell_main", zt = {
  root: Nw,
  titlebar: Mw,
  body: $w,
  sidebar: Lw,
  main: Fw
};
function fy({
  titlebar: e,
  draggable: t = !1,
  insetWindowControls: n = !1,
  sidebar: o,
  sidebarWidth: r,
  children: s,
  mainId: i = "wk-main",
  className: c
}) {
  return /* @__PURE__ */ D(
    "div",
    {
      className: $(zt.root, c),
      style: r ? { "--wk-sidebar-w": r } : void 0,
      children: [
        e && /* @__PURE__ */ d(
          "header",
          {
            className: zt.titlebar,
            "data-inset-controls": n || void 0,
            ...t ? { "data-tauri-drag-region": "" } : {},
            children: e
          }
        ),
        /* @__PURE__ */ D("div", { className: zt.body, "data-has-sidebar": o ? "true" : void 0, children: [
          o && /* @__PURE__ */ d("nav", { className: zt.sidebar, "aria-label": "Primary", children: o }),
          /* @__PURE__ */ d("main", { id: i, className: zt.main, tabIndex: -1, children: s })
        ] })
      ]
    }
  );
}
const Bw = {
  1: "2xl",
  2: "xl",
  3: "lg",
  4: "md",
  5: "sm",
  6: "xs"
}, Rc = {
  xs: Ce.xs,
  sm: Ce.sm,
  md: Ce.md,
  lg: Ce.lg,
  xl: Ce.xl,
  "2xl": Ce.xxl
}, py = Ee(function({ level: t, size: n, className: o, ...r }, s) {
  const i = `h${t}`, c = Rc[n ?? Bw[t]];
  return /* @__PURE__ */ d(i, { ref: s, className: $(Ce.heading, c, o), ...r });
}), my = Ee(function({ as: t = "p", size: n = "md", tone: o = "default", mono: r = !1, className: s, ...i }, c) {
  return /* @__PURE__ */ d(
    t,
    {
      ref: c,
      className: $(
        Ce.text,
        Rc[n],
        o !== "default" && Ce[o],
        r && Ce.mono,
        s
      ),
      ...i
    }
  );
}), hy = Ee(function({ external: t = !1, nofollow: n = !1, asChild: o = !1, className: r, rel: s, target: i, ...c }, l) {
  const u = o ? $n : "a", f = new Set((s ?? "").split(/\s+/).filter(Boolean));
  return t && (f.add("noopener"), f.add("noreferrer")), n && f.add("nofollow"), /* @__PURE__ */ d(
    u,
    {
      ref: l,
      className: $(Ce.link, r),
      target: i ?? (t ? "_blank" : void 0),
      rel: f.size ? [...f].join(" ") : void 0,
      ...c
    }
  );
}), Vw = "wk-Media_image", Hw = "wk-Media_skeleton", Ic = {
  image: Vw,
  skeleton: Hw
}, vy = Ee(function({ width: t, height: n, aspectRatio: o, priority: r = !1, className: s, style: i, alt: c, ...l }, u) {
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
      className: $(Ic.image, s),
      style: { ...f ? { "--wk-image-ar": String(f) } : null, ...i },
      ...l
    }
  );
});
function gy({
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
      className: $(Ic.skeleton, o),
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
function Ww({ data: e, nonce: t }) {
  const n = JSON.stringify(e).replace(/</g, "\\u003c");
  return /* @__PURE__ */ d("script", { type: "application/ld+json", nonce: t, dangerouslySetInnerHTML: { __html: n } });
}
const Uw = "wk-Breadcrumbs_root", Kw = "wk-Breadcrumbs_list", jw = "wk-Breadcrumbs_item", zw = "wk-Breadcrumbs_link", Gw = "wk-Breadcrumbs_sep", Gt = {
  root: Uw,
  list: Kw,
  item: jw,
  link: zw,
  sep: Gw
};
function wy({ items: e, origin: t, className: n }) {
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
  return /* @__PURE__ */ D(We, { children: [
    /* @__PURE__ */ d("nav", { "aria-label": "Breadcrumb", className: $(Gt.root, n), children: /* @__PURE__ */ d("ol", { className: Gt.list, children: e.map((r, s) => {
      const i = s === e.length - 1;
      return /* @__PURE__ */ D(zo, { children: [
        /* @__PURE__ */ d("li", { className: Gt.item, children: r.href && !i ? /* @__PURE__ */ d("a", { className: Gt.link, href: r.href, children: r.label }) : /* @__PURE__ */ d("span", { "aria-current": i ? "page" : void 0, children: r.label }) }),
        !i && /* @__PURE__ */ d("li", { className: Gt.sep, "aria-hidden": "true", children: "/" })
      ] }, `${r.label}-${s}`);
    }) }) }),
    /* @__PURE__ */ d(Ww, { data: o })
  ] });
}
export {
  Lb as Alert,
  fy as AppShell,
  dy as Badge,
  wy as Breadcrumbs,
  Jc as Button,
  oy as Card,
  Yo as CheckIcon,
  Bf as Checkbox,
  gs as ChevronDownIcon,
  Mn as CloseIcon,
  Jb as CodeBlock,
  Zb as CodeSurface,
  Mb as Combobox,
  Xb as CommandEmpty,
  Gb as CommandGroup,
  Yb as CommandItem,
  zb as CommandPalette,
  ub as Dialog,
  db as DialogClose,
  Fb as EmptyState,
  eb as Field,
  Qb as FormSection,
  py as Heading,
  ty as HighlightText,
  vy as Image,
  xo as Input,
  Ww as JsonLd,
  Vb as Kbd,
  qb as KeyValueEditor,
  hy as Link,
  bb as Menu,
  yb as MenuItem,
  Cb as MenuLabel,
  Sb as MenuSeparator,
  Ub as NavItem,
  Wb as NavList,
  $b as SegmentedControl,
  nb as Select,
  rb as SelectGroup,
  ob as SelectItem,
  sb as SelectSeparator,
  ey as SettingRow,
  gy as Skeleton,
  ny as SkipToContent,
  Bb as Spinner,
  Hb as SplitPane,
  ry as Stepper,
  cb as Switch,
  sy as Table,
  Pb as Tabs,
  Ib as TabsContent,
  kb as TabsList,
  Rb as TabsTrigger,
  cy as Tbody,
  uy as Td,
  my as Text,
  Nb as Textarea,
  ly as Th,
  iy as Thead,
  Zw as ThemeProvider,
  Qw as ThemeScript,
  Ob as ToastProvider,
  Eb as Tooltip,
  _b as TooltipProvider,
  ay as Tr,
  Kb as Tree,
  jb as TreeItem,
  fn as VisuallyHidden,
  $ as cn,
  qo as useField,
  Jw as useTheme,
  Ab as useToast
};
//# sourceMappingURL=index.js.map
