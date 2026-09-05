var Lr = (e) => {
  throw TypeError(e);
};
var Fr = (e, t, n) => t.has(e) || Lr("Cannot " + n);
var le = (e, t, n) => (Fr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Br = (e, t, n) => t.has(e) ? Lr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), to = (e, t, n, o) => (Fr(e, t, "write to private field"), o ? o.call(e, n) : t.set(e, n), n);
import { jsx as d, jsxs as D, Fragment as We } from "react/jsx-runtime";
import * as a from "react";
import { useState as Pe, useEffect as Gt, useCallback as ft, useMemo as Dt, useContext as tn, createContext as nn, forwardRef as Ee, useId as Je, useLayoutEffect as Ac, useRef as pt, Fragment as Ko } from "react";
import * as At from "react-dom";
function $(...e) {
  return e.filter((t) => typeof t == "string" && t !== "").join(" ");
}
const jo = (e) => ({
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
}), zo = (e) => /* @__PURE__ */ d("svg", { ...jo(e), children: /* @__PURE__ */ d("path", { d: "M3 8.5 6.5 12 13 4.5" }) }), vs = (e) => /* @__PURE__ */ d("svg", { ...jo(e), children: /* @__PURE__ */ d("path", { d: "m4 6 4 4 4-4" }) }), Mn = (e) => /* @__PURE__ */ d("svg", { ...jo(e), children: /* @__PURE__ */ d("path", { d: "M4 4l8 8M12 4l-8 8" }) }), gs = nn(null);
function Mc(e) {
  if (!e || typeof window > "u") return {};
  try {
    return JSON.parse(window.localStorage.getItem(e) ?? "{}");
  } catch {
    return {};
  }
}
function Kw({
  children: e,
  theme: t,
  defaultTheme: n = "system",
  defaultDensity: o = "normal",
  storageKey: r = "wertkit-theme",
  target: s = "root"
}) {
  const [i, c] = Pe(n), [l, u] = Pe(o), [f, p] = Pe(!1), [m, g] = Pe(null);
  Gt(() => {
    const y = Mc(r);
    y.theme && c(y.theme), y.density && u(y.density);
  }, [r]);
  const w = t ?? i;
  Gt(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function") return;
    const y = window.matchMedia("(prefers-color-scheme: dark)"), C = () => p(y.matches);
    return C(), y.addEventListener("change", C), () => y.removeEventListener("change", C);
  }, []);
  const h = w === "system" ? f ? "dark" : "light" : w;
  Gt(() => {
    const y = s === "self" ? m : document.documentElement;
    y && (y.setAttribute("data-theme", h), y.setAttribute("data-density", l));
  }, [h, l, s, m]), Gt(() => {
    if (!(!r || typeof window > "u"))
      try {
        window.localStorage.setItem(r, JSON.stringify({ theme: w, density: l }));
      } catch {
      }
  }, [w, l, r]);
  const v = ft((y) => c(y), []), b = ft((y) => u(y), []), S = Dt(
    () => ({ theme: w, resolvedTheme: h, setTheme: v, density: l, setDensity: b }),
    [w, h, v, l, b]
  );
  return /* @__PURE__ */ d(gs.Provider, { value: S, children: s === "self" ? /* @__PURE__ */ d("div", { ref: g, children: e }) : e });
}
function jw() {
  const e = tn(gs);
  if (!e) throw new Error("useTheme must be used inside <ThemeProvider>");
  return e;
}
function zw({
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
var Nc = Object.defineProperty, Go = (e, t) => Nc(e, "name", { value: t, configurable: !0 });
function bo(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
Go(bo, "setRef");
function ws(...e) {
  return (t) => {
    let n = !1;
    const o = e.map((r) => {
      const s = bo(r, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let r = 0; r < o.length; r++) {
          const s = o[r];
          typeof s == "function" ? s() : bo(e[r], null);
        }
      };
  };
}
Go(ws, "composeRefs");
function K(...e) {
  return a.useCallback(ws(...e), e);
}
Go(K, "useComposedRefs");
var $c = Object.defineProperty, Re = (e, t) => $c(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function Be(e) {
  const t = a.forwardRef((n, o) => {
    let { children: r, ...s } = n, i = null, c = !1;
    const l = [];
    yo(r) && typeof hn == "function" && (r = hn(r._payload)), a.Children.forEach(r, (m) => {
      var g;
      if (xs(m)) {
        c = !0;
        const w = m;
        let h = "child" in w.props ? w.props.child : w.props.children;
        yo(h) && typeof hn == "function" && (h = hn(h._payload)), i = Lc(w, h), l.push((g = i == null ? void 0 : i.props) == null ? void 0 : g.children);
      } else
        l.push(m);
    }), i ? i = a.cloneElement(i, void 0, l) : (
      // A `Slottable` was found but it didn't resolve to a single element (e.g.
      // it wrapped multiple elements, text, or a render-prop `child` that
      // wasn't an element). Don't fall back to treating the `Slottable` wrapper
      // itself as the slot target — throw a descriptive error below instead.
      !c && a.Children.count(r) === 1 && a.isValidElement(r) && (i = r)
    );
    const u = i ? Ss(i) : void 0, f = K(o, u);
    if (!i) {
      if (r || r === 0)
        throw new Error(
          c ? Vc(e) : Bc(e)
        );
      return r;
    }
    const p = Cs(s, i.props ?? {});
    return i.type !== a.Fragment && (p.ref = o ? f : u), a.cloneElement(i, p);
  });
  return t.displayName = `${e}.Slot`, t;
}
Re(Be, "createSlot");
var Yo = /* @__PURE__ */ Be("Slot"), bs = Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function ys(e) {
  const t = /* @__PURE__ */ Re((n) => "child" in n ? n.children(n.child) : n.children, "Slottable");
  return t.displayName = `${e}.Slottable`, t.__radixId = bs, t;
}
Re(ys, "createSlottable");
var Lc = /* @__PURE__ */ Re((e, t) => {
  if ("child" in e.props) {
    const n = e.props.child;
    return a.isValidElement(n) ? a.cloneElement(n, void 0, e.props.children(n.props.children)) : null;
  }
  return a.isValidElement(t) ? t : null;
}, "getSlottableElementFromSlottable");
function Cs(e, t) {
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
Re(Cs, "mergeProps");
function Ss(e) {
  var o, r;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
Re(Ss, "getElementRef");
function xs(e) {
  return a.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === bs;
}
Re(xs, "isSlottable");
var Fc = Symbol.for("react.lazy");
function yo(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === Fc && "_payload" in e && _s(e._payload);
}
Re(yo, "isLazyComponent");
function _s(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
Re(_s, "isPromiseLike");
var Bc = /* @__PURE__ */ Re((e) => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"), Vc = /* @__PURE__ */ Re((e) => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"), hn = a[" use ".trim().toString()];
const Hc = "wk-Button_root", Wc = "wk-Button_sm", Uc = "wk-Button_md", Kc = "wk-Button_lg", jc = "wk-Button_iconOnly", zc = "wk-Button_primary", Gc = "wk-Button_secondary", Yc = "wk-Button_ghost", Xc = "wk-Button_danger", qc = "wk-Button_spinner", Vt = {
  root: Hc,
  sm: Wc,
  md: Uc,
  lg: Kc,
  iconOnly: jc,
  primary: zc,
  secondary: Gc,
  ghost: Yc,
  danger: Xc,
  spinner: qc,
  "wk-spin": "wk-Button_wk-spin"
}, Zc = Ee(function({
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
    c ? Yo : "button",
    {
      ref: g,
      type: c ? void 0 : p ?? "button",
      disabled: f || r,
      "data-loading": r || void 0,
      className: $(
        Vt.root,
        Vt[t],
        Vt[n],
        o && Vt.iconOnly,
        l
      ),
      ...m,
      children: [
        r ? /* @__PURE__ */ d("span", { className: Vt.spinner, "aria-hidden": "true" }) : s,
        u,
        !r && i
      ]
    }
  );
}), Jc = "wk-Field_root", Qc = "wk-Field_label", ea = "wk-Field_required", ta = "wk-Field_hint", na = "wk-Field_error", Ht = {
  root: Jc,
  label: Qc,
  required: ea,
  hint: ta,
  error: na
}, Es = nn(null), Xo = () => tn(Es);
function Gw({ label: e, hint: t, error: n, required: o, children: r, className: s }) {
  const i = Je(), c = `${i}-input`, l = `${i}-hint`, u = `${i}-error`, f = !!n, p = [n ? u : null, t ? l : null].filter(Boolean).join(" ") || void 0;
  return /* @__PURE__ */ d(Es.Provider, { value: { inputId: c, describedBy: p, invalid: f }, children: /* @__PURE__ */ D("div", { className: $(Ht.root, s), children: [
    e && /* @__PURE__ */ D("label", { className: Ht.label, htmlFor: c, children: [
      e,
      o && /* @__PURE__ */ d("span", { className: Ht.required, "aria-hidden": "true", children: "*" })
    ] }),
    r,
    n ? /* @__PURE__ */ d("p", { className: Ht.error, id: u, role: "alert", children: n }) : t && /* @__PURE__ */ d("p", { className: Ht.hint, id: l, children: t })
  ] }) });
}
const oa = "wk-Input_root", ra = "wk-Input_mono", sa = "wk-Input_shell", ia = "wk-Input_slot", ca = "wk-Input_start", aa = "wk-Input_end", la = "wk-Input_hasStart", ua = "wk-Input_hasEnd", da = "wk-Input_sm", fa = "wk-Input_md", pa = "wk-Input_lg", Me = {
  root: oa,
  mono: ra,
  shell: sa,
  slot: ia,
  start: ca,
  end: aa,
  hasStart: la,
  hasEnd: ua,
  sm: da,
  md: fa,
  lg: pa
}, Co = Ee(function({
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
  const p = Xo(), m = n ?? (p == null ? void 0 : p.invalid) ?? !1, g = /* @__PURE__ */ d(
    "input",
    {
      ref: f,
      id: c ?? (p == null ? void 0 : p.inputId),
      "aria-invalid": m || void 0,
      "aria-describedby": l ?? (p == null ? void 0 : p.describedBy),
      className: $(
        Me.root,
        Me[t],
        o && Me.mono,
        r && Me.hasStart,
        s && Me.hasEnd,
        !r && !s && i
      ),
      ...u
    }
  );
  return !r && !s ? g : /* @__PURE__ */ D("span", { className: $(Me.shell, i), "data-invalid": m || void 0, children: [
    r && /* @__PURE__ */ d("span", { className: $(Me.slot, Me.start), "aria-hidden": "true", children: r }),
    g,
    s && /* @__PURE__ */ d("span", { className: $(Me.slot, Me.end), children: s })
  ] });
});
var ma = Object.defineProperty, ha = (e, t) => ma(e, "name", { value: t, configurable: !0 });
function So(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
ha(So, "clamp");
var va = Object.defineProperty, Mt = (e, t) => va(e, "name", { value: t, configurable: !0 }), Ts = !!(typeof window < "u" && window.document && window.document.createElement);
function I(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return /* @__PURE__ */ Mt(function(r) {
    if (e == null || e(r), n === !1 || !r || !r.defaultPrevented)
      return t == null ? void 0 : t(r);
  }, "handleEvent");
}
Mt(I, "composeEventHandlers");
function ga(e) {
  var t;
  if (!Ts)
    throw new Error("Cannot access window outside of the DOM");
  return ((t = e == null ? void 0 : e.ownerDocument) == null ? void 0 : t.defaultView) ?? window;
}
Mt(ga, "getOwnerWindow");
function xo(e) {
  if (!Ts)
    throw new Error("Cannot access document outside of the DOM");
  return (e == null ? void 0 : e.ownerDocument) ?? document;
}
Mt(xo, "getOwnerDocument");
function Ps(e, t = !1) {
  const { activeElement: n } = xo(e);
  if (!(n != null && n.nodeName))
    return null;
  if (ks(n) && n.contentDocument)
    return Ps(n.contentDocument.body, t);
  if (t) {
    const o = n.getAttribute("aria-activedescendant");
    if (o) {
      const r = xo(n).getElementById(o);
      if (r)
        return r;
    }
  }
  return n;
}
Mt(Ps, "getActiveElement");
function ks(e) {
  return e.tagName === "IFRAME";
}
Mt(ks, "isFrame");
var wa = Object.defineProperty, xe = (e, t) => wa(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function ba(e, t) {
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
xe(ba, "createContext");
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
  return r.scopeName = e, [o, Rs(r, ...t)];
}
xe(me, "createContextScope");
function Rs(...e) {
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
xe(Rs, "composeContextScopes");
var ya = Object.defineProperty, ie = (e, t) => ya(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function on(e) {
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
ie(on, "createCollection");
var Vr = /* @__PURE__ */ new WeakMap(), ne, ve, no = (ve = class extends Map {
  constructor(n) {
    super(n);
    Br(this, ne);
    to(this, ne, [...super.keys()]), Vr.set(this, !0);
  }
  set(n, o) {
    return Vr.get(this) && (this.has(n) ? le(this, ne)[le(this, ne).indexOf(n)] = n : le(this, ne).push(n)), super.set(n, o), this;
  }
  insert(n, o, r) {
    const s = this.has(o), i = le(this, ne).length, c = qo(n);
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
    return to(this, ne, []), super.clear();
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
    const o = _n(le(this, ne), n);
    if (o !== void 0)
      return this.get(o);
  }
  entryAt(n) {
    const o = _n(le(this, ne), n);
    if (o !== void 0)
      return [o, this.get(o)];
  }
  indexOf(n) {
    return le(this, ne).indexOf(n);
  }
  keyAt(n) {
    return _n(le(this, ne), n);
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
function _n(e, t) {
  if ("at" in Array.prototype)
    return Array.prototype.at.call(e, t);
  const n = Is(e, t);
  return n === -1 ? void 0 : e[n];
}
ie(_n, "at");
function Is(e, t) {
  const n = e.length, o = qo(t), r = o >= 0 ? o : n + o;
  return r < 0 || r >= n ? -1 : r;
}
ie(Is, "toSafeIndex");
function qo(e) {
  return e !== e || e === 0 ? 0 : Math.trunc(e);
}
ie(qo, "toSafeInteger");
// @__NO_SIDE_EFFECTS__
function Ca(e) {
  const t = e + "CollectionProvider", [n, o] = /* @__PURE__ */ me(t), [r, s] = n(
    t,
    {
      collectionElement: null,
      collectionRef: { current: null },
      collectionRefObject: { current: null },
      itemMap: new no(),
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
      const M = As(() => {
      });
      return M.observe(k, {
        childList: !0,
        subtree: !0
      }), () => {
        M.disconnect();
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
      const { scope: x, children: _, ...E } = y, k = a.useRef(null), [P, O] = a.useState(null), B = K(C, k, O), A = s(m, x), { setItemMap: M } = A, F = a.useRef(E);
      Ds(F.current, E) || (F.current = E);
      const U = F.current;
      return a.useEffect(() => {
        const T = U;
        return M((N) => P ? N.has(P) ? N.set(P, { ...T, element: P }).toSorted(_o) : (N.set(P, { ...T, element: P }), N.toSorted(_o)) : N), () => {
          M((N) => !P || !N.has(P) ? N : (N.delete(P), new no(N)));
        };
      }, [P, U, M]), /* @__PURE__ */ d(w, { [g]: "", ref: B, children: _ });
    }
  );
  h.displayName = m;
  function v() {
    return a.useState(new no());
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
ie(Ca, "createCollection");
function Ds(e, t) {
  if (e === t) return !0;
  if (typeof e != "object" || typeof t != "object" || e == null || t == null) return !1;
  const n = Object.keys(e), o = Object.keys(t);
  if (n.length !== o.length) return !1;
  for (const r of n)
    if (!Object.prototype.hasOwnProperty.call(t, r) || e[r] !== t[r]) return !1;
  return !0;
}
ie(Ds, "shallowEqual");
function Os(e, t) {
  return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING);
}
ie(Os, "isElementPreceding");
function _o(e, t) {
  return !e[1].element || !t[1].element ? 0 : Os(e[1].element, t[1].element) ? -1 : 1;
}
ie(_o, "sortByDocumentPosition");
function As(e) {
  return new MutationObserver((n) => {
    for (const o of n)
      if (o.type === "childList") {
        e();
        return;
      }
  });
}
ie(As, "getChildListObserver");
var Sa = Object.defineProperty, xa = (e, t) => Sa(e, "name", { value: t, configurable: !0 }), _a = a.createContext(void 0);
function rn(e) {
  const t = a.useContext(_a);
  return e || t || "ltr";
}
xa(rn, "useDirection");
var Ea = Object.defineProperty, Ta = (e, t) => Ea(e, "name", { value: t, configurable: !0 }), Pa = [
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
], H = Pa.reduce((e, t) => {
  const n = /* @__PURE__ */ Be(`Primitive.${t}`), o = a.forwardRef((r, s) => {
    const { asChild: i, ...c } = r, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ d(l, { ...c, ref: s });
  });
  return o.displayName = `Primitive.${t}`, { ...e, [t]: o };
}, {});
function Nn(e, t) {
  e && At.flushSync(() => e.dispatchEvent(t));
}
Ta(Nn, "dispatchDiscreteCustomEvent");
var ka = Object.defineProperty, Ra = (e, t) => ka(e, "name", { value: t, configurable: !0 });
function ue(e) {
  const t = a.useRef(e);
  return a.useEffect(() => {
    t.current = e;
  }), a.useMemo(() => ((...n) => {
    var o;
    return (o = t.current) == null ? void 0 : o.call(t, ...n);
  }), []);
}
Ra(ue, "useCallbackRef");
var Ia = Object.defineProperty, re = (e, t) => Ia(e, "name", { value: t, configurable: !0 }), Eo = "dismissableLayer.update", Da = "dismissableLayer.pointerDownOutside", Oa = "dismissableLayer.focusOutside", Hr, Zo = a.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set(),
  // Outside elements that belong to a layer's own dismiss affordance (eg, a
  // dialog overlay). Pressing them should dismiss the layer regardless of
  // whether or not they stop propagation.
  //
  // See https://github.com/radix-ui/primitives/issues/3346
  dismissableSurfaces: /* @__PURE__ */ new Set()
}), sn = /* @__PURE__ */ a.forwardRef(
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
    } = t, p = a.useContext(Zo), [m, g] = a.useState(null), w = (m == null ? void 0 : m.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, h] = a.useState({}), v = K(n, g), b = Array.from(p.layers), [S] = [
      ...p.layersWithOutsidePointerEventsDisabled
    ].slice(-1), y = S ? b.indexOf(S) : -1, C = m ? b.indexOf(m) : -1, x = p.layersWithOutsidePointerEventsDisabled.size > 0, _ = C >= y, E = a.useRef(!1), k = Ns(
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
            const M = [...p.branches].some(
              (F) => F.contains(A)
            );
            return _ && !M;
          },
          [p.branches, _]
        )
      }
    ), P = $s((A) => {
      if (r && E.current)
        return;
      const M = A.target;
      [...p.branches].some((U) => U.contains(M)) || (c == null || c(A), l == null || l(A), A.defaultPrevented || u == null || u());
    }, w), O = m ? C === b.length - 1 : !1, B = ue((A) => {
      A.key === "Escape" && (s == null || s(A), !A.defaultPrevented && u && (A.preventDefault(), u()));
    });
    return a.useEffect(() => {
      if (O)
        return w.addEventListener("keydown", B, { capture: !0 }), () => w.removeEventListener("keydown", B, { capture: !0 });
    }, [w, O, B]), a.useEffect(() => {
      if (m)
        return o && (p.layersWithOutsidePointerEventsDisabled.size === 0 && (Hr = w.body.style.pointerEvents, w.body.style.pointerEvents = "none"), p.layersWithOutsidePointerEventsDisabled.add(m)), p.layers.add(m), To(), () => {
          o && (p.layersWithOutsidePointerEventsDisabled.delete(m), p.layersWithOutsidePointerEventsDisabled.size === 0 && (w.body.style.pointerEvents = Hr));
        };
    }, [m, w, o, p]), a.useEffect(() => () => {
      m && (p.layers.delete(m), p.layersWithOutsidePointerEventsDisabled.delete(m), To());
    }, [m, p]), a.useEffect(() => {
      const A = /* @__PURE__ */ re(() => h({}), "handleUpdate");
      return document.addEventListener(Eo, A), () => document.removeEventListener(Eo, A);
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
), Aa = /* @__PURE__ */ a.forwardRef(/* @__PURE__ */ re(function(t, n) {
  const o = a.useContext(Zo), r = a.useRef(null), s = K(n, r);
  return a.useEffect(() => {
    const i = r.current;
    if (i)
      return o.branches.add(i), () => {
        o.branches.delete(i);
      };
  }, [o.branches]), /* @__PURE__ */ d(H.div, { ...t, ref: s });
}, "DismissableLayerBranch"));
function Ms() {
  const e = a.useContext(Zo), [t, n] = a.useState(null);
  return a.useEffect(() => {
    if (t)
      return e.dismissableSurfaces.add(t), () => {
        e.dismissableSurfaces.delete(t);
      };
  }, [t, e.dismissableSurfaces]), n;
}
re(Ms, "useDismissableLayerSurface");
var Ma = /* @__PURE__ */ re(() => !0, "IS_TRUE");
function Ns(e, t) {
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
          m(), _ || Jo(
            Da,
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
re(Ns, "usePointerDownOutside");
function $s(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ue(e), o = a.useRef(!1);
  return a.useEffect(() => {
    const r = /* @__PURE__ */ re((s) => {
      s.target && !o.current && Jo(Oa, n, { originalEvent: s }, {
        discrete: !1
      });
    }, "handleFocus");
    return t.addEventListener("focusin", r), () => t.removeEventListener("focusin", r);
  }, [t, n]), {
    onFocusCapture: /* @__PURE__ */ re(() => o.current = !0, "onFocusCapture"),
    onBlurCapture: /* @__PURE__ */ re(() => o.current = !1, "onBlurCapture")
  };
}
re($s, "useFocusOutside");
function To() {
  const e = new CustomEvent(Eo);
  document.dispatchEvent(e);
}
re(To, "dispatchUpdate");
function Jo(e, t, n, { discrete: o }) {
  const r = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && r.addEventListener(e, t, { once: !0 }), o ? Nn(r, s) : r.dispatchEvent(s);
}
re(Jo, "handleAndDispatchCustomEvent");
var Na = sn, $a = Aa, La = Object.defineProperty, Qo = (e, t) => La(e, "name", { value: t, configurable: !0 }), vn = 0, Ne = null;
function Fa(e) {
  return cn(), e.children;
}
Qo(Fa, "FocusGuards");
function cn() {
  a.useEffect(() => {
    Ne || (Ne = { start: Po(), end: Po() });
    const { start: e, end: t } = Ne;
    return document.body.firstElementChild !== e && document.body.insertAdjacentElement("afterbegin", e), document.body.lastElementChild !== t && document.body.insertAdjacentElement("beforeend", t), vn++, () => {
      vn === 1 && (Ne == null || Ne.start.remove(), Ne == null || Ne.end.remove(), Ne = null), vn = Math.max(0, vn - 1);
    };
  }, []);
}
Qo(cn, "useFocusGuards");
function Po() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
Qo(Po, "createFocusGuard");
var Ba = Object.defineProperty, de = (e, t) => Ba(e, "name", { value: t, configurable: !0 }), oo = "focusScope.autoFocusOnMount", ro = "focusScope.autoFocusOnUnmount", Wr = { bubbles: !1, cancelable: !0 }, er = /* @__PURE__ */ a.forwardRef(
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
        Ur.add(w);
        const v = document.activeElement;
        if (!l.contains(v)) {
          const S = new CustomEvent(oo, Wr);
          l.addEventListener(oo, f), l.dispatchEvent(S), S.defaultPrevented || (Ls(Ws(tr(l)), { select: !0 }), document.activeElement === v && Ue(l));
        }
        return () => {
          l.removeEventListener(oo, f), setTimeout(() => {
            const S = new CustomEvent(ro, Wr);
            l.addEventListener(ro, p), l.dispatchEvent(S), S.defaultPrevented || Ue(v ?? document.body, { select: !0 }), l.removeEventListener(ro, p), Ur.remove(w);
          }, 0);
        };
      }
    }, [l, f, p, w]);
    const h = a.useCallback(
      (v) => {
        if (!o && !r || w.paused) return;
        const b = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, S = document.activeElement;
        if (b && S) {
          const y = v.currentTarget, [C, x] = Fs(y);
          C && x ? !v.shiftKey && S === x ? (v.preventDefault(), o && Ue(C, { select: !0 })) : v.shiftKey && S === C && (v.preventDefault(), o && Ue(x, { select: !0 })) : S === y && v.preventDefault();
        }
      },
      [o, r, w.paused]
    );
    return /* @__PURE__ */ d(H.div, { tabIndex: -1, ...c, ref: g, onKeyDown: h });
  }, "FocusScope")
);
function Ls(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const o of e)
    if (Ue(o, { select: t }), document.activeElement !== n) return;
}
de(Ls, "focusFirst");
function Fs(e) {
  const t = tr(e), n = ko(t, e), o = ko(t.reverse(), e);
  return [n, o];
}
de(Fs, "getTabbableEdges");
function tr(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: /* @__PURE__ */ de((o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }, "acceptNode")
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
de(tr, "getTabbableCandidates");
function ko(e, t) {
  const n = typeof t.checkVisibility == "function" && t.checkVisibility({ checkVisibilityCSS: !0 });
  for (const o of e)
    if (!(n ? !o.checkVisibility({ checkVisibilityCSS: !0 }) : Bs(o, { upTo: t })))
      return o;
}
de(ko, "findVisible");
function Bs(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
de(Bs, "isHidden");
function Vs(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
de(Vs, "isSelectableInput");
function Ue(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Vs(e) && t && e.select();
  }
}
de(Ue, "focus");
var Ur = Hs();
function Hs() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Ro(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Ro(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
de(Hs, "createFocusScopesStack");
function Ro(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
de(Ro, "arrayRemove");
function Ws(e) {
  return e.filter((t) => t.tagName !== "A");
}
de(Ws, "removeLinks");
var oe = globalThis != null && globalThis.document ? a.useLayoutEffect : () => {
}, Va = Object.defineProperty, Ha = (e, t) => Va(e, "name", { value: t, configurable: !0 }), Wa = a[" useId ".trim().toString()] || (() => {
}), Ua = 0;
function _e(e) {
  const [t, n] = a.useState(Wa());
  return oe(() => {
    e || n((o) => o ?? String(Ua++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
Ha(_e, "useId");
const Ka = ["top", "right", "bottom", "left"], rt = Math.min, je = Math.max, Rn = Math.round, gn = Math.floor, ze = (e) => ({
  x: e,
  y: e
}), ja = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Us(e, t, n) {
  return je(e, rt(t, n));
}
function Xe(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function st(e) {
  return e.split("-")[0];
}
function Nt(e) {
  return e.split("-")[1];
}
function nr(e) {
  return e === "x" ? "y" : "x";
}
function or(e) {
  return e === "y" ? "height" : "width";
}
function Fe(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function rr(e) {
  return nr(Fe(e));
}
function za(e, t, n) {
  n === void 0 && (n = !1);
  const o = Nt(e), r = rr(e), s = or(r);
  let i = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = In(i)), [i, In(i)];
}
function Ga(e) {
  const t = In(e);
  return [Io(e), t, Io(t)];
}
function Io(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const Kr = ["left", "right"], jr = ["right", "left"], Ya = ["top", "bottom"], Xa = ["bottom", "top"];
function qa(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? jr : Kr : t ? Kr : jr;
    case "left":
    case "right":
      return t ? Ya : Xa;
    default:
      return [];
  }
}
function Za(e, t, n, o) {
  const r = Nt(e);
  let s = qa(st(e), n === "start", o);
  return r && (s = s.map((i) => i + "-" + r), t && (s = s.concat(s.map(Io)))), s;
}
function In(e) {
  const t = st(e);
  return ja[t] + e.slice(t.length);
}
function Ja(e) {
  var t, n, o, r;
  return {
    top: (t = e.top) != null ? t : 0,
    right: (n = e.right) != null ? n : 0,
    bottom: (o = e.bottom) != null ? o : 0,
    left: (r = e.left) != null ? r : 0
  };
}
function Ks(e) {
  return typeof e != "number" ? Ja(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Dn(e) {
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
function zr(e, t, n) {
  let {
    reference: o,
    floating: r
  } = e;
  const s = Fe(t), i = rr(t), c = or(i), l = st(t), u = s === "y", f = o.x + o.width / 2 - r.width / 2, p = o.y + o.height / 2 - r.height / 2, m = o[c] / 2 - r[c] / 2;
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
  const w = Nt(t);
  return w && (g[i] += m * (w === "end" ? 1 : -1) * (n && u ? -1 : 1)), g;
}
async function Qa(e, t) {
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
  } = Xe(t, e), w = Ks(g), v = c[m ? p === "floating" ? "reference" : "floating" : p], b = Dn(await s.getClippingRect({
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
  }, x = Dn(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const el = 50, tl = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: r = "absolute",
    middleware: s = [],
    platform: i
  } = n, c = i.detectOverflow ? i : {
    ...i,
    detectOverflow: Qa
  }, l = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let u = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: r
  }), {
    x: f,
    y: p
  } = zr(u, o, l), m = o, g = 0;
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
    }, _ && g < el && (g++, typeof _ == "object" && (_.placement && (m = _.placement), _.rects && (u = _.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: r
    }) : _.rects), {
      x: f,
      y: p
    } = zr(u, m, l)), h = -1);
  }
  return {
    x: f,
    y: p,
    placement: m,
    strategy: r,
    middlewareData: w
  };
}, nl = (e) => ({
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
    const p = Ks(f), m = {
      x: n,
      y: o
    }, g = rr(r), w = or(g), h = await i.getDimensions(u), v = g === "y", b = v ? "top" : "left", S = v ? "bottom" : "right", y = v ? "clientHeight" : "clientWidth", C = s.reference[w] + s.reference[g] - m[g] - s.floating[w], x = m[g] - s.reference[g], _ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
    let E = _ ? _[y] : 0;
    (!E || !await (i.isElement == null ? void 0 : i.isElement(_))) && (E = c.floating[y] || s.floating[w]);
    const k = C / 2 - x / 2, P = E / 2 - h[w] / 2 - 1, O = rt(p[b], P), B = rt(p[S], P), A = E - h[w] - B, M = E / 2 - h[w] / 2 + k, F = Us(O, M, A), U = !l.arrow && Nt(r) != null && M !== F && s.reference[w] / 2 - (M < O ? O : B) - h[w] / 2 < 0, T = U ? M < O ? M - O : M - A : 0;
    return {
      [g]: m[g] + T,
      data: {
        [g]: F,
        centerOffset: M - F - T,
        ...U && {
          alignmentOffset: T
        }
      },
      reset: U
    };
  }
}), ol = function(e) {
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
      const b = st(r), S = Fe(c), y = st(c) === c, C = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), x = m || (y || !h ? [In(c)] : Ga(c)), _ = w !== "none";
      !m && _ && x.push(...Za(c, h, w, C));
      const E = [c, ...x], k = await l.detectOverflow(t, v), P = [];
      let O = ((o = s.flip) == null ? void 0 : o.overflows) || [];
      if (f && P.push(k[b]), p) {
        const F = za(r, i, C);
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
        let T = (A = O.filter((N) => N.overflows[0] <= 0).sort((N, L) => N.overflows[1] - L.overflows[1])[0]) == null ? void 0 : A.placement;
        if (!T)
          switch (g) {
            case "bestFit": {
              var M;
              const N = (M = O.filter((L) => {
                if (_) {
                  const W = Fe(L.placement);
                  return W === S || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  W === "y";
                }
                return !0;
              }).map((L) => [L.placement, L.overflows.filter((W) => W > 0).reduce((W, R) => W + R, 0)]).sort((L, W) => L[1] - W[1])[0]) == null ? void 0 : M[0];
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
function Gr(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Yr(e) {
  return Ka.some((t) => e[t] >= 0);
}
const rl = function(e) {
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
          }), c = Gr(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: c,
              referenceHidden: Yr(c)
            }
          };
        }
        case "escaped": {
          const i = await o.detectOverflow(t, {
            ...s,
            altBoundary: !0
          }), c = Gr(i, n.floating);
          return {
            data: {
              escapedOffsets: c,
              escaped: Yr(c)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, js = /* @__PURE__ */ new Set(["left", "top"]);
async function sl(e, t) {
  const {
    placement: n,
    platform: o,
    elements: r
  } = e, s = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), i = st(n), c = Nt(n), l = Fe(n) === "y", u = js.has(i) ? -1 : 1, f = s && l ? -1 : 1, p = Xe(t, e);
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
const il = function(e) {
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
      } = t, l = await sl(t, e);
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
}, cl = function(e) {
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
      }, p = await s.detectOverflow(t, u), m = Fe(r), g = nr(m);
      let w = f[g], h = f[m];
      const v = (S, y) => Us(y + p[S === "y" ? "top" : "left"], y, y - p[S === "y" ? "bottom" : "right"]);
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
}, al = function(e) {
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
      }, g = Fe(i), w = nr(g);
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
        const x = w === "y" ? "width" : "height", _ = js.has(st(i)), E = c.reference[g] - c.floating[x] + (_ && ((y = l.offset) == null ? void 0 : y[g]) || 0) + (_ ? 0 : S.crossAxis), k = c.reference[g] + c.reference[x] + (_ ? 0 : ((C = l.offset) == null ? void 0 : C[g]) || 0) - (_ ? S.crossAxis : 0);
        v < E ? v = E : v > k && (v = k);
      }
      return {
        [w]: h,
        [g]: v
      };
    }
  };
}, ll = function(e) {
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
      } = Xe(e, t), l = await r.detectOverflow(t, c), u = st(n), f = Nt(n), p = Fe(n) === "y", {
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
function $n() {
  return typeof window < "u";
}
function $t(e) {
  return zs(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function pe(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Qe(e) {
  var t;
  return (t = (zs(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function zs(e) {
  return $n() ? e instanceof Node || e instanceof pe(e).Node : !1;
}
function Ve(e) {
  return $n() ? e instanceof Element || e instanceof pe(e).Element : !1;
}
function ct(e) {
  return $n() ? e instanceof HTMLElement || e instanceof pe(e).HTMLElement : !1;
}
function Xr(e) {
  return !$n() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof pe(e).ShadowRoot;
}
function Ln(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: r
  } = He(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && r !== "inline" && r !== "contents";
}
function ul(e) {
  return /^(table|td|th)$/.test($t(e));
}
function Fn(e) {
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
const dl = /transform|translate|scale|rotate|perspective|filter/, fl = /paint|layout|strict|content/, ut = (e) => !!e && e !== "none";
let so;
function sr(e) {
  const t = Ve(e) ? He(e) : e;
  return ut(t.transform) || ut(t.translate) || ut(t.scale) || ut(t.rotate) || ut(t.perspective) || !ir() && (ut(t.backdropFilter) || ut(t.filter)) || dl.test(t.willChange || "") || fl.test(t.contain || "");
}
function pl(e) {
  let t = mt(e);
  for (; ct(t) && !Zt(t); ) {
    if (sr(t))
      return t;
    if (Fn(t))
      return null;
    t = mt(t);
  }
  return null;
}
function ir() {
  return so == null && (so = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), so;
}
function Zt(e) {
  return /^(html|body|#document)$/.test($t(e));
}
function He(e) {
  return pe(e).getComputedStyle(e);
}
function Bn(e) {
  return Ve(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function mt(e) {
  if ($t(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Xr(e) && e.host || // Fallback.
    Qe(e)
  );
  return Xr(t) ? t.host : t;
}
function Gs(e) {
  const t = mt(e);
  return Zt(t) ? (e.ownerDocument || e).body : ct(t) && Ln(t) ? t : Gs(t);
}
function Jt(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const r = Gs(e), s = r === ((o = e.ownerDocument) == null ? void 0 : o.body), i = pe(r);
  if (s) {
    const c = Do(i);
    return t.concat(i, i.visualViewport || [], Ln(r) ? r : [], c && n ? Jt(c) : []);
  } else
    return t.concat(r, Jt(r, [], n));
}
function Do(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Ys(e) {
  const t = He(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const r = ct(e), s = r ? e.offsetWidth : n, i = r ? e.offsetHeight : o, c = Rn(n) !== s || Rn(o) !== i;
  return c && (n = s, o = i), {
    width: n,
    height: o,
    $: c
  };
}
function cr(e) {
  return Ve(e) ? e : e.contextElement;
}
function kt(e) {
  const t = cr(e);
  if (!ct(t))
    return ze(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: r,
    $: s
  } = Ys(t);
  let i = (s ? Rn(n.width) : n.width) / o, c = (s ? Rn(n.height) : n.height) / r;
  return (!i || !Number.isFinite(i)) && (i = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: i,
    y: c
  };
}
const ml = /* @__PURE__ */ ze(0);
function Xs(e) {
  const t = pe(e);
  return !ir() || !t.visualViewport ? ml : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function hl(e, t, n) {
  return t === void 0 && (t = !1), !!n && t && n === pe(e);
}
function ht(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), s = cr(e);
  let i = ze(1);
  t && (o ? Ve(o) && (i = kt(o)) : i = kt(e));
  const c = hl(s, n, o) ? Xs(s) : ze(0);
  let l = (r.left + c.x) / i.x, u = (r.top + c.y) / i.y, f = r.width / i.x, p = r.height / i.y;
  if (s && o) {
    const m = pe(s), g = Ve(o) ? pe(o) : o;
    let w = m, h = Do(w);
    for (; h && g !== w; ) {
      const v = kt(h), b = h.getBoundingClientRect(), S = He(h), y = b.left + (h.clientLeft + parseFloat(S.paddingLeft)) * v.x, C = b.top + (h.clientTop + parseFloat(S.paddingTop)) * v.y;
      l *= v.x, u *= v.y, f *= v.x, p *= v.y, l += y, u += C, w = pe(h), h = Do(w);
    }
  }
  return Dn({
    width: f,
    height: p,
    x: l,
    y: u
  });
}
function Vn(e, t) {
  const n = Bn(e).scrollLeft;
  return t ? t.left + n : ht(Qe(e)).left + n;
}
function qs(e, t) {
  const n = e.getBoundingClientRect(), o = n.left + t.scrollLeft - Vn(e, n), r = n.top + t.scrollTop;
  return {
    x: o,
    y: r
  };
}
function vl(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: r
  } = e;
  const s = r === "fixed", i = Qe(o), c = t ? Fn(t.floating) : !1;
  if (o === i || c && s)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = ze(1);
  const f = ze(0), p = ct(o);
  if ((p || !s) && (($t(o) !== "body" || Ln(i)) && (l = Bn(o)), p)) {
    const g = ht(o);
    u = kt(o), f.x = g.x + o.clientLeft, f.y = g.y + o.clientTop;
  }
  const m = i && !p && !s ? qs(i, l) : ze(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + f.x + m.x,
    y: n.y * u.y - l.scrollTop * u.y + f.y + m.y
  };
}
function gl(e) {
  return e.getClientRects ? Array.from(e.getClientRects()) : [];
}
function wl(e) {
  const t = Bn(e), n = e.ownerDocument.body, o = je(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), r = je(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight);
  let s = -t.scrollLeft + Vn(e);
  const i = -t.scrollTop;
  return He(n).direction === "rtl" && (s += je(e.clientWidth, n.clientWidth) - o), {
    width: o,
    height: r,
    x: s,
    y: i
  };
}
const bl = 25;
function yl(e, t, n) {
  n === void 0 && (n = "viewport");
  const o = n === "layoutViewport", r = pe(e), s = Qe(e), i = r.visualViewport;
  let c = s.clientWidth, l = s.clientHeight, u = 0, f = 0;
  if (i) {
    const m = !ir() || t === "fixed";
    o ? m || (u = -i.offsetLeft, f = -i.offsetTop) : (c = i.width, l = i.height, m && (u = i.offsetLeft, f = i.offsetTop));
  }
  if (Vn(s) <= 0) {
    const m = s.ownerDocument, g = m.body, w = getComputedStyle(g), h = m.compatMode === "CSS1Compat" && parseFloat(w.marginLeft) + parseFloat(w.marginRight) || 0, v = Math.abs(s.clientWidth - g.clientWidth - h), b = getComputedStyle(s).scrollbarGutter === "stable both-edges" ? v / 2 : v;
    b <= bl && (c -= b);
  }
  return {
    width: c,
    height: l,
    x: u,
    y: f
  };
}
function Cl(e, t) {
  const n = ht(e, !0, t === "fixed"), o = n.top + e.clientTop, r = n.left + e.clientLeft, s = kt(e), i = e.clientWidth * s.x, c = e.clientHeight * s.y, l = r * s.x, u = o * s.y;
  return {
    width: i,
    height: c,
    x: l,
    y: u
  };
}
function qr(e, t, n) {
  let o;
  if (t === "viewport" || t === "layoutViewport")
    o = yl(e, n, t);
  else if (t === "document")
    o = wl(Qe(e));
  else if (Ve(t))
    o = Cl(t, n);
  else {
    const r = Xs(e);
    o = {
      x: t.x - r.x,
      y: t.y - r.y,
      width: t.width,
      height: t.height
    };
  }
  return Dn(o);
}
function Sl(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = Jt(e, [], !1).filter((c) => Ve(c) && $t(c) !== "body"), r = null;
  const s = He(e).position === "fixed";
  let i = s ? mt(e) : e;
  for (; Ve(i) && !Zt(i); ) {
    const c = He(i), l = sr(i), u = r ? r.position : s ? "fixed" : "";
    !l && (u === "fixed" || u === "absolute" && c.position === "static") ? o = o.filter((p) => p !== i) : r = c, i = mt(i);
  }
  return t.set(e, o), o;
}
function xl(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: r
  } = e;
  const i = [...n === "clippingAncestors" ? Fn(t) ? [] : Sl(t, this._c) : [].concat(n), o], c = qr(t, i[0], r);
  let l = c.top, u = c.right, f = c.bottom, p = c.left;
  for (let m = 1; m < i.length; m++) {
    const g = qr(t, i[m], r);
    l = je(g.top, l), u = rt(g.right, u), f = rt(g.bottom, f), p = je(g.left, p);
  }
  return {
    width: u - p,
    height: f - l,
    x: p,
    y: l
  };
}
function _l(e) {
  const {
    width: t,
    height: n
  } = Ys(e);
  return {
    width: t,
    height: n
  };
}
function El(e, t, n) {
  const o = ct(t), r = Qe(t), s = n === "fixed", i = ht(e, !0, s, t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = ze(0);
  if ((o || !s) && (($t(t) !== "body" || Ln(r)) && (c = Bn(t)), o)) {
    const m = ht(t, !0, s, t);
    l.x = m.x + t.clientLeft, l.y = m.y + t.clientTop;
  }
  !o && r && (l.x = Vn(r));
  const u = r && !o && !s ? qs(r, c) : ze(0), f = i.left + c.scrollLeft - l.x - u.x, p = i.top + c.scrollTop - l.y - u.y;
  return {
    x: f,
    y: p,
    width: i.width,
    height: i.height
  };
}
function io(e) {
  return He(e).position === "static";
}
function Zr(e, t) {
  if (!ct(e) || He(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Qe(e) === n && (n = n.ownerDocument.body), n;
}
function Zs(e, t) {
  const n = pe(e);
  if (Fn(e))
    return n;
  if (!ct(e)) {
    let r = mt(e);
    for (; r && !Zt(r); ) {
      if (Ve(r) && !io(r))
        return r;
      r = mt(r);
    }
    return n;
  }
  let o = Zr(e, t);
  for (; o && ul(o) && io(o); )
    o = Zr(o, t);
  return o && Zt(o) && io(o) && !sr(o) ? n : o || pl(e) || n;
}
const Tl = async function(e) {
  const t = this.getOffsetParent || Zs, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: El(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function Pl(e) {
  return He(e).direction === "rtl";
}
const kl = {
  convertOffsetParentRelativeRectToViewportRelativeRect: vl,
  getDocumentElement: Qe,
  getClippingRect: xl,
  getOffsetParent: Zs,
  getElementRects: Tl,
  getClientRects: gl,
  getDimensions: _l,
  getScale: kt,
  isElement: Ve,
  isRTL: Pl
};
function Js(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Rl(e, t, n) {
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
    const b = gn(w), S = gn(s.clientWidth - (g + h)), y = gn(s.clientHeight - (w + v)), C = gn(g), _ = {
      rootMargin: -b + "px " + -S + "px " + -y + "px " + -C + "px",
      threshold: je(0, rt(1, p)) || 1
    };
    let E = !0;
    function k(P) {
      const O = P[0].intersectionRatio;
      if (!Js(m, e.getBoundingClientRect()))
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
function Il(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = o, u = cr(e), f = r || s ? [...u ? Jt(u) : [], ...t ? Jt(t) : []] : [];
  f.forEach((b) => {
    r && b.addEventListener("scroll", n), s && b.addEventListener("resize", n);
  });
  const p = u && c ? Rl(u, n, s) : null;
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
    h && !Js(h, b) && n(), h = b, w = requestAnimationFrame(v);
  }
  return n(), () => {
    var b;
    f.forEach((S) => {
      r && S.removeEventListener("scroll", n), s && S.removeEventListener("resize", n);
    }), p == null || p(), (b = g) == null || b.disconnect(), g = null, l && cancelAnimationFrame(w);
  };
}
const Dl = il, Ol = cl, Al = ol, Ml = ll, Nl = rl, Jr = nl, $l = al, Ll = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), r = n ?? {}, s = {
    ...kl,
    ...r.platform,
    _c: o
  };
  return tl(e, t, {
    ...r,
    platform: s
  });
};
var Fl = typeof document < "u", Bl = function() {
}, En = Fl ? Ac : Bl;
function On(e, t) {
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
        if (!On(e[o], t[o]))
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
      if (!(s === "_owner" && e.$$typeof) && !On(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Qs(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Qr(e, t) {
  const n = Qs(e);
  return Math.round(t * n) / n;
}
function co(e) {
  const t = a.useRef(e);
  return En(() => {
    t.current = e;
  }), t;
}
function Vl(e) {
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
  On(m, o) || g(o);
  const [w, h] = a.useState(null), [v, b] = a.useState(null), S = a.useCallback((L) => {
    L !== _.current && (_.current = L, h(L));
  }, []), y = a.useCallback((L) => {
    L !== E.current && (E.current = L, b(L));
  }, []), C = s || w, x = i || v, _ = a.useRef(null), E = a.useRef(null), k = a.useRef(f), P = l != null, O = co(l), B = co(r), A = co(u), M = a.useCallback(() => {
    if (!_.current || !E.current)
      return;
    const L = {
      placement: t,
      strategy: n,
      middleware: m
    };
    B.current && (L.platform = B.current), Ll(_.current, E.current, L).then((W) => {
      const R = {
        ...W,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: A.current !== !1
      };
      F.current && !On(k.current, R) && (k.current = R, At.flushSync(() => {
        p(R);
      }));
    });
  }, [m, t, n, B, A]);
  En(() => {
    u === !1 && k.current.isPositioned && (k.current.isPositioned = !1, p((L) => ({
      ...L,
      isPositioned: !1
    })));
  }, [u]);
  const F = a.useRef(!1);
  En(() => (F.current = !0, () => {
    F.current = !1;
  }), []), En(() => {
    if (C && (_.current = C), x && (E.current = x), C && x) {
      if (O.current)
        return O.current(C, x, M);
      M();
    }
  }, [C, x, M, O, P]);
  const U = a.useMemo(() => ({
    reference: _,
    floating: E,
    setReference: S,
    setFloating: y
  }), [S, y]), T = a.useMemo(() => ({
    reference: C,
    floating: x
  }), [C, x]), N = a.useMemo(() => {
    const L = {
      position: n,
      left: 0,
      top: 0
    };
    if (!T.floating)
      return L;
    const W = Qr(T.floating, f.x), R = Qr(T.floating, f.y);
    return c ? {
      ...L,
      transform: "translate(" + W + "px, " + R + "px)",
      ...Qs(T.floating) >= 1.5 && {
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
    update: M,
    refs: U,
    elements: T,
    floatingStyles: N
  }), [f, M, U, T, N]);
}
const Hl = (e) => {
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
      return o && t(o) ? o.current != null ? Jr({
        element: o.current,
        padding: r
      }).fn(n) : {} : o ? Jr({
        element: o,
        padding: r
      }).fn(n) : {};
    }
  };
}, Wl = (e, t) => {
  const n = Dl(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Ul = (e, t) => {
  const n = Ol(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Kl = (e, t) => ({
  fn: $l(e).fn,
  options: [e, t]
}), jl = (e, t) => {
  const n = Al(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, zl = (e, t) => {
  const n = Ml(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Gl = (e, t) => {
  const n = Nl(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Yl = (e, t) => {
  const n = Hl(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
};
var Xl = Object.defineProperty, ql = (e, t) => Xl(e, "name", { value: t, configurable: !0 }), Zl = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ ql(function(t, n) {
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
), Jl = Zl, Ql = Object.defineProperty, eu = (e, t) => Ql(e, "name", { value: t, configurable: !0 });
function Hn(e) {
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
eu(Hn, "useSize");
var tu = Object.defineProperty, Ge = (e, t) => tu(e, "name", { value: t, configurable: !0 }), ei = "Popper", [ti, Lt] = /* @__PURE__ */ me(ei), [nu, ni] = ti(ei), ou = /* @__PURE__ */ Ge((e) => {
  const { __scopePopper: t, children: n } = e, [o, r] = a.useState(null), [s, i] = a.useState(void 0);
  return /* @__PURE__ */ d(
    nu,
    {
      scope: t,
      anchor: o,
      onAnchorChange: r,
      placementState: s,
      setPlacementState: i,
      children: n
    }
  );
}, "Popper"), ru = "PopperAnchor", su = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ Ge(function(t, n) {
    const { __scopePopper: o, virtualRef: r, ...s } = t, i = ni(ru, o), c = a.useRef(null), l = i.onAnchorChange, u = a.useCallback(
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
    const m = i.placementState && Wn(i.placementState), g = m == null ? void 0 : m[0], w = m == null ? void 0 : m[1];
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
), oi = "PopperContent", [iu, cu] = ti(oi), au = /* @__PURE__ */ a.forwardRef(
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
    } = t, b = ni(oi, o), [S, y] = a.useState(null), C = K(n, y), [x, _] = a.useState(null), E = Hn(x), k = (E == null ? void 0 : E.width) ?? 0, P = (E == null ? void 0 : E.height) ?? 0, O = r + (i !== "center" ? "-" + i : ""), B = typeof p == "number" ? p : { top: 0, right: 0, bottom: 0, left: 0, ...p }, A = Array.isArray(f) ? f : [f], M = A.length > 0, F = {
      padding: B,
      boundary: A.filter(ri),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: M
    }, { refs: U, floatingStyles: T, placement: N, isPositioned: L, middlewareData: W } = Vl({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: O,
      whileElementsMounted: /* @__PURE__ */ Ge((...lt) => Il(...lt, {
        animationFrame: w === "always"
      }), "whileElementsMounted"),
      elements: {
        reference: b.anchor
      },
      middleware: [
        Wl({ mainAxis: s + P, alignmentAxis: c }),
        u && Ul({
          mainAxis: !0,
          crossAxis: !1,
          limiter: m === "partial" ? Kl() : void 0,
          ...F
        }),
        u && jl({ ...F }),
        zl({
          ...F,
          apply: /* @__PURE__ */ Ge(({ elements: lt, rects: St, availableWidth: Bt, availableHeight: Ic }) => {
            const { width: Dc, height: Oc } = St.reference, mn = lt.floating.style;
            mn.setProperty("--radix-popper-available-width", `${Bt}px`), mn.setProperty("--radix-popper-available-height", `${Ic}px`), mn.setProperty("--radix-popper-anchor-width", `${Dc}px`), mn.setProperty("--radix-popper-anchor-height", `${Oc}px`);
          }, "apply")
        }),
        x && Yl({ element: x, padding: l }),
        fu({ arrowWidth: k, arrowHeight: P }),
        g && Gl({
          strategy: "referenceHidden",
          ...F,
          // `hide` detects whether the anchor (reference) is clipped, so when
          // no explicit `collisionBoundary` is set we fall back to Floating
          // UI's default clipping ancestors (e.g. a scrollable menu). This
          // lets an occluded submenu hide once its anchor scrolls out of view
          // (#3237). The collision/size middlewares deliberately keep the
          // viewport-based default to avoid clamping content rendered inside
          // transformed or overflow-clipping portal containers.
          boundary: M ? F.boundary : void 0
        })
      ]
    }), R = b.setPlacementState;
    oe(() => (R(N), () => {
      R(void 0);
    }), [N, R]);
    const [Z, G] = Wn(N), Q = ue(h);
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
          iu,
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
), lu = "PopperArrow", uu = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, du = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ Ge(function(t, n) {
    const { __scopePopper: o, ...r } = t, s = cu(lu, o), i = uu[s.placedSide];
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
            Jl,
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
function ri(e) {
  return e !== null;
}
Ge(ri, "isNotNull");
var fu = /* @__PURE__ */ Ge((e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var v, b, S;
    const { placement: n, rects: o, middlewareData: r } = t, i = ((v = r.arrow) == null ? void 0 : v.centerOffset) !== 0, c = i ? 0 : e.arrowWidth, l = i ? 0 : e.arrowHeight, [u, f] = Wn(n), p = { start: "0%", center: "50%", end: "100%" }[f], m = (((b = r.arrow) == null ? void 0 : b.x) ?? 0) + c / 2, g = (((S = r.arrow) == null ? void 0 : S.y) ?? 0) + l / 2;
    let w = "", h = "";
    return u === "bottom" ? (w = i ? p : `${m}px`, h = `${-l}px`) : u === "top" ? (w = i ? p : `${m}px`, h = `${o.floating.height + l}px`) : u === "right" ? (w = `${-l}px`, h = i ? p : `${g}px`) : u === "left" && (w = `${o.floating.width + l}px`, h = i ? p : `${g}px`), { data: { x: w, y: h } };
  }
}), "transformOrigin");
function Wn(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
Ge(Wn, "getSideAndAlignFromPlacement");
var ar = ou, lr = su, ur = au, pu = du, mu = Object.defineProperty, hu = (e, t) => mu(e, "name", { value: t, configurable: !0 }), an = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ hu(function(t, n) {
    var l;
    const { container: o, ...r } = t, [s, i] = a.useState(!1);
    oe(() => i(!0), []);
    const c = o || s && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body);
    return c ? At.createPortal(/* @__PURE__ */ d(H.div, { ...r, ref: n }), c) : null;
  }, "Portal")
), vu = Object.defineProperty, qe = (e, t) => vu(e, "name", { value: t, configurable: !0 });
function si(e, t) {
  return a.useReducer((n, o) => t[n][o] ?? n, e);
}
qe(si, "useStateMachine");
var Ie = /* @__PURE__ */ qe((e) => {
  const { present: t, children: n } = e, o = ii(t), r = typeof n == "function" ? n({ present: o.isPresent }) : a.Children.only(n), s = ci(o.ref, ai(r));
  return typeof n == "function" || o.isPresent ? a.cloneElement(r, { ref: s }) : null;
}, "Presence");
function ii(e) {
  const [t, n] = a.useState(), o = a.useRef(null), r = a.useRef(e), s = a.useRef("none"), i = a.useRef(void 0), c = e ? "mounted" : "unmounted", [l, u] = si(c, {
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
qe(ii, "usePresence");
function Oo(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
qe(Oo, "setRef");
function ci(...e) {
  const t = a.useRef(e);
  return t.current = e, a.useCallback((n) => {
    const o = t.current;
    let r = !1;
    const s = o.map((i) => {
      const c = Oo(i, n);
      return !r && typeof c == "function" && (r = !0), c;
    });
    if (r)
      return () => {
        for (let i = 0; i < s.length; i++) {
          const c = s[i];
          typeof c == "function" ? c() : Oo(o[i], null);
        }
      };
  }, []);
}
qe(ci, "useStableComposedRefs");
function Pt(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
qe(Pt, "getAnimationName");
function ai(e) {
  var o, r;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
qe(ai, "getElementRef");
var gu = Object.defineProperty, wu = (e, t) => gu(e, "name", { value: t, configurable: !0 }), es = a[" useEffectEvent ".trim().toString()], ts = a[" useInsertionEffect ".trim().toString()];
function li(e) {
  if (typeof es == "function")
    return es(e);
  const t = a.useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  return typeof ts == "function" ? ts(() => {
    t.current = e;
  }) : oe(() => {
    t.current = e;
  }), a.useMemo(() => ((...n) => {
    var o;
    return (o = t.current) == null ? void 0 : o.call(t, ...n);
  }), []);
}
wu(li, "useEffectEvent");
var bu = Object.defineProperty, ln = (e, t) => bu(e, "name", { value: t, configurable: !0 }), yu = a[" useInsertionEffect ".trim().toString()] || oe;
function ke({
  prop: e,
  defaultProp: t,
  onChange: n = /* @__PURE__ */ ln(() => {
  }, "onChange"),
  caller: o
}) {
  const [r, s, i] = ui({
    defaultProp: t,
    onChange: n
  }), c = e !== void 0, l = c ? e : r, u = a.useCallback(
    (f) => {
      var p;
      if (c) {
        const m = di(f) ? f(e) : f;
        m !== e && ((p = i.current) == null || p.call(i, m));
      } else
        s(f);
    },
    [c, e, s, i]
  );
  return [l, u];
}
ln(ke, "useControllableState");
function ui({
  defaultProp: e,
  onChange: t
}) {
  const [n, o] = a.useState(e), r = a.useRef(n), s = a.useRef(t);
  return yu(() => {
    s.current = t;
  }, [t]), a.useEffect(() => {
    var i;
    r.current !== n && ((i = s.current) == null || i.call(s, n), r.current = n);
  }, [n, r]), [n, o, s];
}
ln(ui, "useUncontrolledState");
function di(e) {
  return typeof e == "function";
}
ln(di, "isFunction");
var ns = Symbol("RADIX:SYNC_STATE");
function Cu(e, t, n, o) {
  const { prop: r, defaultProp: s, onChange: i, caller: c } = t, l = r !== void 0, u = li(i), f = [{ ...n, state: s }];
  o && f.push(o);
  const [p, m] = a.useReducer(
    (v, b) => {
      if (b.type === ns)
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
    l && !Object.is(r, p.state) && m({ type: ns, state: r });
  }, [r, p.state, l]), [h, m];
}
ln(Cu, "useControllableStateReducer");
var Su = Object.defineProperty, xu = (e, t) => Su(e, "name", { value: t, configurable: !0 });
function fi(e) {
  const t = a.useRef({ value: e, previous: e });
  return a.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
xu(fi, "usePrevious");
var _u = Object.defineProperty, Eu = (e, t) => _u(e, "name", { value: t, configurable: !0 }), pi = Object.freeze({
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
}), dr = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ Eu(function(t, n) {
    return /* @__PURE__ */ d(
      H.span,
      {
        ...t,
        ref: n,
        style: { ...pi, ...t.style }
      }
    );
  }, "VisuallyHidden")
), Tu = dr, Pu = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, xt = /* @__PURE__ */ new WeakMap(), wn = /* @__PURE__ */ new WeakMap(), bn = {}, ao = 0, mi = function(e) {
  return e && (e.host || mi(e.parentNode));
}, ku = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = mi(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Ru = function(e, t, n, o) {
  var r = ku(t, Array.isArray(e) ? e : [e]);
  bn[n] || (bn[n] = /* @__PURE__ */ new WeakMap());
  var s = bn[n], i = [], c = /* @__PURE__ */ new Set(), l = new Set(r), u = function(p) {
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
          xt.set(m, h), s.set(m, v), i.push(m), h === 1 && w && wn.set(m, !0), v === 1 && m.setAttribute(n, "true"), w || m.setAttribute(o, "true");
        } catch (b) {
          console.error("aria-hidden: cannot operate on ", m, b);
        }
    });
  };
  return f(t), c.clear(), ao++, function() {
    i.forEach(function(p) {
      var m = xt.get(p) - 1, g = s.get(p) - 1;
      xt.set(p, m), s.set(p, g), m || (wn.has(p) || p.removeAttribute(o), wn.delete(p)), g || p.removeAttribute(n);
    }), ao--, ao || (xt = /* @__PURE__ */ new WeakMap(), xt = /* @__PURE__ */ new WeakMap(), wn = /* @__PURE__ */ new WeakMap(), bn = {});
  };
}, fr = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), r = Pu(e);
  return r ? (o.push.apply(o, Array.from(r.querySelectorAll("[aria-live], script"))), Ru(o, r, n, "aria-hidden")) : function() {
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
function hi(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
}
function Iu(e, t, n) {
  if (n || arguments.length === 2) for (var o = 0, r = t.length, s; o < r; o++)
    (s || !(o in t)) && (s || (s = Array.prototype.slice.call(t, 0, o)), s[o] = t[o]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var Tn = "right-scroll-bar-position", Pn = "width-before-scroll-bar", Du = "with-scroll-bars-hidden", Ou = "--removed-body-scroll-bar-size";
function lo(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Au(e, t) {
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
var Mu = typeof window < "u" ? a.useLayoutEffect : a.useEffect, os = /* @__PURE__ */ new WeakMap();
function Nu(e, t) {
  var n = Au(null, function(o) {
    return e.forEach(function(r) {
      return lo(r, o);
    });
  });
  return Mu(function() {
    var o = os.get(n);
    if (o) {
      var r = new Set(o), s = new Set(e), i = n.current;
      r.forEach(function(c) {
        s.has(c) || lo(c, null);
      }), s.forEach(function(c) {
        r.has(c) || lo(c, i);
      });
    }
    os.set(n, e);
  }, [e]), n;
}
function $u(e) {
  return e;
}
function Lu(e, t) {
  t === void 0 && (t = $u);
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
function Fu(e) {
  e === void 0 && (e = {});
  var t = Lu(null);
  return t.options = Le({ async: !0, ssr: !1 }, e), t;
}
var vi = function(e) {
  var t = e.sideCar, n = hi(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = t.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return a.createElement(o, Le({}, n));
};
vi.isSideCarExport = !0;
function Bu(e, t) {
  return e.useMedium(t), vi;
}
var gi = Fu(), uo = function() {
}, Un = a.forwardRef(function(e, t) {
  var n = a.useRef(null), o = a.useState({
    onScrollCapture: uo,
    onWheelCapture: uo,
    onTouchMoveCapture: uo
  }), r = o[0], s = o[1], i = e.forwardProps, c = e.children, l = e.className, u = e.removeScrollBar, f = e.enabled, p = e.shards, m = e.sideCar, g = e.noRelative, w = e.noIsolation, h = e.inert, v = e.allowPinchZoom, b = e.as, S = b === void 0 ? "div" : b, y = e.gapMode, C = hi(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), x = m, _ = Nu([n, t]), E = Le(Le({}, C), r);
  return a.createElement(
    a.Fragment,
    null,
    f && a.createElement(x, { sideCar: gi, removeScrollBar: u, shards: p, noRelative: g, noIsolation: w, inert: h, setCallbacks: s, allowPinchZoom: !!v, lockRef: n, gapMode: y }),
    i ? a.cloneElement(a.Children.only(c), Le(Le({}, E), { ref: _ })) : a.createElement(S, Le({}, E, { className: l, ref: _ }), c)
  );
});
Un.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Un.classNames = {
  fullWidth: Pn,
  zeroRight: Tn
};
var Vu = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Hu() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Vu();
  return t && e.setAttribute("nonce", t), e;
}
function Wu(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Uu(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Ku = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Hu()) && (Wu(t, n), Uu(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, ju = function() {
  var e = Ku();
  return function(t, n) {
    a.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, wi = function() {
  var e = ju(), t = function(n) {
    var o = n.styles, r = n.dynamic;
    return e(o, r), null;
  };
  return t;
}, zu = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, fo = function(e) {
  return parseInt(e || "", 10) || 0;
}, Gu = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], o = t[e === "padding" ? "paddingTop" : "marginTop"], r = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [fo(n), fo(o), fo(r)];
}, Yu = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return zu;
  var t = Gu(e), n = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, o - n + t[2] - t[0])
  };
}, Xu = wi(), Rt = "data-scroll-locked", qu = function(e, t, n, o) {
  var r = e.left, s = e.top, i = e.right, c = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Du, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(c, "px ").concat(o, `;
  }
  body[`).concat(Rt, `] {
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
  
  .`).concat(Tn, ` {
    right: `).concat(c, "px ").concat(o, `;
  }
  
  .`).concat(Pn, ` {
    margin-right: `).concat(c, "px ").concat(o, `;
  }
  
  .`).concat(Tn, " .").concat(Tn, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(Pn, " .").concat(Pn, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat(Rt, `] {
    `).concat(Ou, ": ").concat(c, `px;
  }
`);
}, rs = function() {
  var e = parseInt(document.body.getAttribute(Rt) || "0", 10);
  return isFinite(e) ? e : 0;
}, Zu = function() {
  a.useEffect(function() {
    return document.body.setAttribute(Rt, (rs() + 1).toString()), function() {
      var e = rs() - 1;
      e <= 0 ? document.body.removeAttribute(Rt) : document.body.setAttribute(Rt, e.toString());
    };
  }, []);
}, Ju = function(e) {
  var t = e.noRelative, n = e.noImportant, o = e.gapMode, r = o === void 0 ? "margin" : o;
  Zu();
  var s = a.useMemo(function() {
    return Yu(r);
  }, [r]);
  return a.createElement(Xu, { styles: qu(s, !t, r, n ? "" : "!important") });
}, Ao = !1;
if (typeof window < "u")
  try {
    var yn = Object.defineProperty({}, "passive", {
      get: function() {
        return Ao = !0, !0;
      }
    });
    window.addEventListener("test", yn, yn), window.removeEventListener("test", yn, yn);
  } catch {
    Ao = !1;
  }
var _t = Ao ? { passive: !1 } : !1, Qu = function(e) {
  return e.tagName === "TEXTAREA";
}, bi = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Qu(e) && n[t] === "visible")
  );
}, ed = function(e) {
  return bi(e, "overflowY");
}, td = function(e) {
  return bi(e, "overflowX");
}, ss = function(e, t) {
  var n = t.ownerDocument, o = t;
  do {
    typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
    var r = yi(e, o);
    if (r) {
      var s = Ci(e, o), i = s[1], c = s[2];
      if (i > c)
        return !0;
    }
    o = o.parentNode;
  } while (o && o !== n.body);
  return !1;
}, nd = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, o = e.clientHeight;
  return [
    t,
    n,
    o
  ];
}, od = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, o = e.clientWidth;
  return [
    t,
    n,
    o
  ];
}, yi = function(e, t) {
  return e === "v" ? ed(t) : td(t);
}, Ci = function(e, t) {
  return e === "v" ? nd(t) : od(t);
}, rd = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, sd = function(e, t, n, o, r) {
  var s = rd(e, window.getComputedStyle(t).direction), i = s * o, c = n.target, l = t.contains(c), u = !1, f = i > 0, p = 0, m = 0;
  do {
    if (!c)
      break;
    var g = Ci(e, c), w = g[0], h = g[1], v = g[2], b = h - v - s * w;
    (w || b) && yi(e, c) && (p += b, m += w);
    var S = c.parentNode;
    c = S && S.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? S.host : S;
  } while (
    // portaled content
    !l && c !== document.body || // self content
    l && (t.contains(c) || t === c)
  );
  return (f && Math.abs(p) < 1 || !f && Math.abs(m) < 1) && (u = !0), u;
}, Cn = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, is = function(e) {
  return [e.deltaX, e.deltaY];
}, cs = function(e) {
  return e && "current" in e ? e.current : e;
}, id = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, cd = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, ad = 0, Et = [];
function ld(e) {
  var t = a.useRef([]), n = a.useRef([0, 0]), o = a.useRef(), r = a.useState(ad++)[0], s = a.useState(wi)[0], i = a.useRef(e);
  a.useEffect(function() {
    i.current = e;
  }, [e]), a.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(r));
      var h = Iu([e.lockRef.current], (e.shards || []).map(cs), !0).filter(Boolean);
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
    var b = Cn(h), S = n.current, y = "deltaX" in h ? h.deltaX : S[0] - b[0], C = "deltaY" in h ? h.deltaY : S[1] - b[1], x, _ = h.target, E = Math.abs(y) > Math.abs(C) ? "h" : "v";
    if ("touches" in h && E === "h" && _.type === "range")
      return !1;
    var k = window.getSelection(), P = k && k.anchorNode, O = P ? P === _ || P.contains(_) : !1;
    if (O)
      return !1;
    var B = ss(E, _);
    if (!B)
      return !0;
    if (B ? x = E : (x = E === "v" ? "h" : "v", B = ss(E, _)), !B)
      return !1;
    if (!o.current && "changedTouches" in h && (y || C) && (o.current = x), !x)
      return !0;
    var A = o.current || x;
    return sd(A, v, h, A === "h" ? y : C);
  }, []), l = a.useCallback(function(h) {
    var v = h;
    if (!(!Et.length || Et[Et.length - 1] !== s)) {
      var b = "deltaY" in v ? is(v) : Cn(v), S = t.current.filter(function(x) {
        return x.name === v.type && (x.target === v.target || v.target === x.shadowParent) && id(x.delta, b);
      })[0];
      if (S && S.should) {
        v.cancelable && v.preventDefault();
        return;
      }
      if (!S) {
        var y = (i.current.shards || []).map(cs).filter(Boolean).filter(function(x) {
          return x.contains(v.target);
        }), C = y.length > 0 ? c(v, y[0]) : !i.current.noIsolation;
        C && v.cancelable && v.preventDefault();
      }
    }
  }, []), u = a.useCallback(function(h, v, b, S) {
    var y = { name: h, delta: v, target: b, should: S, shadowParent: ud(b) };
    t.current.push(y), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== y;
      });
    }, 1);
  }, []), f = a.useCallback(function(h) {
    n.current = Cn(h), o.current = void 0;
  }, []), p = a.useCallback(function(h) {
    u(h.type, is(h), h.target, c(h, e.lockRef.current));
  }, []), m = a.useCallback(function(h) {
    u(h.type, Cn(h), h.target, c(h, e.lockRef.current));
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
    w ? a.createElement(s, { styles: cd(r) }) : null,
    g ? a.createElement(Ju, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function ud(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const dd = Bu(gi, ld);
var Kn = a.forwardRef(function(e, t) {
  return a.createElement(Un, Le({}, e, { ref: t, sideCar: dd }));
});
Kn.classNames = Un.classNames;
var fd = Object.defineProperty, z = (e, t) => fd(e, "name", { value: t, configurable: !0 }), pd = [" ", "Enter", "ArrowUp", "ArrowDown"], md = [" ", "Enter"], Ot = "Select", [jn, pr, hd] = /* @__PURE__ */ on(Ot), [gt, Yw] = /* @__PURE__ */ me(Ot, [
  hd,
  Lt
]), mr = Lt(), [vd, at] = gt(Ot), [gd, wd] = gt(Ot);
function Si(e) {
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
  } = e, v = mr(t), [b, S] = a.useState(null), [y, C] = a.useState(null), [x, _] = a.useState(!1), E = rn(u), [k, P] = ke({
    prop: o,
    defaultProp: r ?? !1,
    onChange: s,
    caller: Ot
  }), [O, B] = ke({
    prop: i,
    defaultProp: c,
    onChange: l,
    caller: Ot
  }), A = a.useRef(null), M = a.useRef(O);
  a.useEffect(() => {
    const G = w ? b == null ? void 0 : b.ownerDocument.getElementById(w) : b == null ? void 0 : b.form;
    if (G instanceof HTMLFormElement) {
      const Q = /* @__PURE__ */ z(() => B(M.current), "reset");
      return G.addEventListener("reset", Q), () => G.removeEventListener("reset", Q);
    }
  }, [w, b, B]);
  const F = b ? !!w || !!b.closest("form") : !0, [U, T] = a.useState(/* @__PURE__ */ new Set()), N = _e(), L = Array.from(U).map((G) => G.props.value).join(";"), W = a.useCallback((G) => {
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
    contentId: N,
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
  return /* @__PURE__ */ d(ar, { ...v, children: /* @__PURE__ */ d(vd, { scope: t, ...Z, children: /* @__PURE__ */ d(jn.Provider, { scope: t, children: /* @__PURE__ */ d(
    gd,
    {
      scope: t,
      onNativeOptionAdd: W,
      onNativeOptionRemove: R,
      children: Ei(h) ? h(Z) : n
    }
  ) }) }) });
}
z(Si, "SelectProvider");
var bd = /* @__PURE__ */ z((e) => {
  const { __scopeSelect: t, children: n, ...o } = e;
  return /* @__PURE__ */ d(
    Si,
    {
      __scopeSelect: t,
      ...o,
      internal_do_not_use_render: ({ isFormControl: r }) => /* @__PURE__ */ D(We, { children: [
        n,
        r ? /* @__PURE__ */ d(
          qd,
          {
            __scopeSelect: t
          }
        ) : null
      ] })
    }
  );
}, "Select"), yd = "SelectTrigger", Cd = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ z(function(t, n) {
    const { __scopeSelect: o, disabled: r = !1, ...s } = t, i = mr(o), c = at(yd, o), l = c.disabled || r, u = K(n, c.onTriggerChange), f = pr(o), p = a.useRef("touch"), [m, g, w] = hr((v) => {
      const b = f().filter((C) => !C.disabled), S = b.find((C) => C.value === c.value), y = vr(b, v, S);
      y !== void 0 && c.onValueChange(y.value);
    }), h = /* @__PURE__ */ z((v) => {
      l || (c.onOpenChange(!0), w()), v && (c.triggerPointerDownPosRef.current = {
        x: Math.round(v.pageX),
        y: Math.round(v.pageY)
      });
    }, "handleOpen");
    return /* @__PURE__ */ d(lr, { asChild: !0, ...i, children: /* @__PURE__ */ d(
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
        "data-placeholder": un(c.value) ? "" : void 0,
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
          !(v.ctrlKey || v.altKey || v.metaKey) && v.key.length === 1 && g(v.key), !(b && v.key === " ") && pd.includes(v.key) && (h(), v.preventDefault());
        })
      }
    ) });
  }, "SelectTrigger")
), Sd = "SelectValue", xd = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ z(function(t, n) {
    const { __scopeSelect: o, className: r, style: s, children: i, placeholder: c = "", ...l } = t, u = at(Sd, o), { onValueNodeHasChildrenChange: f } = u, p = i !== void 0, m = K(n, u.onValueNodeChange);
    oe(() => {
      f(p);
    }, [f, p]);
    const g = un(u.value);
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
), _d = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ z(function(t, n) {
    const { __scopeSelect: o, children: r, ...s } = t;
    return /* @__PURE__ */ d(H.span, { "aria-hidden": !0, ...s, ref: n, children: r || "▼" });
  }, "SelectIcon")
), Ed = "SelectPortal", [Td, Pd] = gt(Ed, {
  forceMount: void 0
}), kd = /* @__PURE__ */ z((e) => {
  const { __scopeSelect: t, forceMount: n, ...o } = e;
  return /* @__PURE__ */ d(Td, { scope: e.__scopeSelect, forceMount: n, children: /* @__PURE__ */ d(an, { asChild: !0, ...o }) });
}, "SelectPortal"), vt = "SelectContent", Rd = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ z(function(t, n) {
    const o = Pd(vt, t.__scopeSelect), { forceMount: r = o.forceMount, ...s } = t, i = at(vt, t.__scopeSelect), [c, l] = a.useState();
    return oe(() => {
      l(new DocumentFragment());
    }, []), /* @__PURE__ */ d(Ie, { present: r || i.open, children: ({ present: u }) => u ? /* @__PURE__ */ d(Od, { ...s, ref: n }) : /* @__PURE__ */ d(Id, { ...s, fragment: c }) });
  }, "SelectContent")
), Id = /* @__PURE__ */ a.forwardRef(/* @__PURE__ */ z(function(t, n) {
  const { __scopeSelect: o, children: r, fragment: s } = t;
  return s ? At.createPortal(
    /* @__PURE__ */ d(xi, { scope: o, children: /* @__PURE__ */ d(jn.Slot, { scope: o, children: /* @__PURE__ */ d("div", { ref: n, children: r }) }) }),
    s
  ) : null;
}, "SelectContentFragment")), Te = 10, [xi, zn] = gt(vt), Dd = /* @__PURE__ */ Be("SelectContent.RemoveScroll"), Od = /* @__PURE__ */ a.forwardRef(
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
    ), M = pr(o), [F, U] = a.useState(!1), T = a.useRef(!1);
    a.useEffect(() => {
      if (C) return fr(C);
    }, [C]), cn();
    const N = a.useCallback(
      (V) => {
        const [X, ...ee] = M().map((q) => q.ref.current), [Y] = ee.slice(-1), j = document.activeElement;
        for (const q of V)
          if (q === j || (q == null || q.scrollIntoView({ block: "nearest" }), q === X && _ && (_.scrollTop = 0), q === Y && _ && (_.scrollTop = _.scrollHeight), q == null || q.focus(), document.activeElement !== j)) return;
      },
      [M, _]
    ), L = a.useCallback(
      () => N([P, C]),
      [N, P, C]
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
    const [Z, G] = hr((V) => {
      const X = M().filter((j) => !j.disabled), ee = X.find((j) => j.ref.current === document.activeElement), Y = vr(X, V, ee);
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
    ), we = r === "popper" ? as : Ad, he = we === as ? {
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
      xi,
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
        children: /* @__PURE__ */ d(Kn, { as: Dd, allowPinchZoom: !0, children: /* @__PURE__ */ d(
          er,
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
              sn,
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
), Ad = /* @__PURE__ */ a.forwardRef(/* @__PURE__ */ z(function(t, n) {
  const { __scopeSelect: o, onPlaced: r, ...s } = t, i = at(vt, o), c = zn(vt, o), [l, u] = a.useState(null), [f, p] = a.useState(null), m = K(n, p), g = pr(o), w = a.useRef(!1), h = a.useRef(!0), { viewport: v, selectedItem: b, selectedItemText: S, focusSelectedItem: y } = c, C = a.useCallback(() => {
    if (i.trigger && i.valueNode && l && f && v && b && S) {
      const k = i.trigger.getBoundingClientRect(), P = f.getBoundingClientRect(), O = i.valueNode.getBoundingClientRect(), B = S.getBoundingClientRect();
      if (i.dir !== "rtl") {
        const j = B.left - P.left, q = O.left - j, Oe = k.left - q, Ae = k.width + Oe, lt = Math.max(Ae, P.width), St = window.innerWidth - Te, Bt = So(q, [
          Te,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Te, St - lt)
        ]);
        l.style.minWidth = Ae + "px", l.style.left = Bt + "px";
      } else {
        const j = P.right - B.right, q = window.innerWidth - O.right - j, Oe = window.innerWidth - k.right - q, Ae = k.width + Oe, lt = Math.max(Ae, P.width), St = window.innerWidth - Te, Bt = So(q, [
          Te,
          Math.max(Te, St - lt)
        ]);
        l.style.minWidth = Ae + "px", l.style.right = Bt + "px";
      }
      const A = g(), M = window.innerHeight - Te * 2, F = v.scrollHeight, U = window.getComputedStyle(f), T = parseInt(U.borderTopWidth, 10), N = parseInt(U.paddingTop, 10), L = parseInt(U.borderBottomWidth, 10), W = parseInt(U.paddingBottom, 10), R = T + N + F + W + L, Z = Math.min(b.offsetHeight * 5, R), G = window.getComputedStyle(v), Q = parseInt(G.paddingTop, 10), ae = parseInt(G.paddingBottom, 10), ce = k.top + k.height / 2 - Te, we = M - ce, he = b.offsetHeight / 2, V = b.offsetTop + he, X = T + N + V, ee = R - X;
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
      l.style.margin = `${Te}px 0`, l.style.minHeight = Z + "px", l.style.maxHeight = M + "px", r == null || r(), requestAnimationFrame(() => w.current = !0);
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
}, "SelectItemAlignedPosition")), as = /* @__PURE__ */ a.forwardRef(/* @__PURE__ */ z(function(t, n) {
  const {
    __scopeSelect: o,
    align: r = "start",
    collisionPadding: s = Te,
    ...i
  } = t, c = mr(o);
  return /* @__PURE__ */ d(
    ur,
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
}, "SelectPopperPosition")), [Md, Nd] = gt(vt, {}), ls = "SelectViewport", $d = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ z(function(t, n) {
    const { __scopeSelect: o, nonce: r, ...s } = t, i = zn(ls, o), c = Nd(ls, o), l = K(n, i.onViewportChange), u = a.useRef(0);
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
      /* @__PURE__ */ d(jn.Slot, { scope: o, children: /* @__PURE__ */ d(
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
), Ld = "SelectGroup", [Fd, Bd] = gt(Ld), Vd = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ z(function(t, n) {
    const { __scopeSelect: o, ...r } = t, s = _e();
    return /* @__PURE__ */ d(Fd, { scope: o, id: s, children: /* @__PURE__ */ d(H.div, { role: "group", "aria-labelledby": s, ...r, ref: n }) });
  }, "SelectGroup")
), Hd = "SelectLabel", Wd = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ z(function(t, n) {
    const { __scopeSelect: o, ...r } = t, s = Bd(Hd, o);
    return /* @__PURE__ */ d(H.div, { id: s.id, ...r, ref: n });
  }, "SelectLabel")
), Mo = "SelectItem", [Ud, _i] = gt(Mo), Kd = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ z(function(t, n) {
    const {
      __scopeSelect: o,
      value: r,
      disabled: s = !1,
      textValue: i,
      ...c
    } = t, l = at(Mo, o), u = zn(Mo, o), f = l.value === r, [p, m] = a.useState(i ?? ""), [g, w] = a.useState(!1), h = ue(
      (C) => {
        var x;
        return (x = u.itemRefCallback) == null ? void 0 : x.call(u, C, r, s);
      }
    ), v = K(n, h), b = _e(), S = a.useRef("touch"), y = /* @__PURE__ */ z(() => {
      s || (l.onValueChange(r), l.onOpenChange(!1));
    }, "handleSelect");
    return /* @__PURE__ */ d(
      Ud,
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
          jn.ItemSlot,
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
                  s || C.target !== C.currentTarget || ((_ = u.searchRef) == null ? void 0 : _.current) !== "" && C.key === " " || (md.includes(C.key) && y(), C.key === " " && C.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }, "SelectItem")
), Sn = "SelectItemText", jd = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ z(function(t, n) {
    const { __scopeSelect: o, className: r, style: s, ...i } = t, c = at(Sn, o), l = zn(Sn, o), u = _i(Sn, o), f = wd(Sn, o), [p, m] = a.useState(null), g = ue(
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
      u.isSelected && c.valueNode && !c.valueNodeHasChildren && !un(c.value) ? At.createPortal(i.children, c.valueNode) : null
    ] });
  }, "SelectItemText")
), zd = "SelectItemIndicator", Gd = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ z(function(t, n) {
    const { __scopeSelect: o, ...r } = t;
    return _i(zd, o).isSelected ? /* @__PURE__ */ d(H.span, { "aria-hidden": !0, ...r, ref: n }) : null;
  }, "SelectItemIndicator")
), Yd = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ z(function(t, n) {
    const { __scopeSelect: o, ...r } = t;
    return /* @__PURE__ */ d(H.div, { "aria-hidden": !0, ...r, ref: n });
  }, "SelectSeparator")
), Xd = "SelectBubbleInput", qd = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ z(function({ __scopeSelect: t, ...n }, o) {
    const r = at(Xd, t), { value: s, onValueChange: i, required: c, disabled: l, name: u, autoComplete: f, form: p } = r, { nativeOptions: m, nativeSelectKey: g } = r, w = a.useRef(null), h = K(o, w), v = s ?? "", b = fi(v), S = Array.from(m).some(
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
        style: { ...pi, ...n.style },
        ref: h,
        defaultValue: v,
        children: [
          un(s) && !S ? /* @__PURE__ */ d("option", { value: "" }) : null,
          Array.from(m)
        ]
      },
      g
    );
  }, "SelectBubbleInput")
);
function Ei(e) {
  return typeof e == "function";
}
z(Ei, "isFunction");
function un(e) {
  return e === "" || e === void 0;
}
z(un, "shouldShowPlaceholder");
function hr(e) {
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
z(hr, "useTypeaheadSearch");
function vr(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let i = Ti(e, Math.max(s, 0));
  r.length === 1 && (i = i.filter((u) => u !== n));
  const l = i.find(
    (u) => u.textValue.toLowerCase().startsWith(r.toLowerCase())
  );
  return l !== n ? l : void 0;
}
z(vr, "findNextItem");
function Ti(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
z(Ti, "wrapArray");
const Zd = "wk-Select_trigger", Jd = "wk-Select_sm", Qd = "wk-Select_md", ef = "wk-Select_lg", tf = "wk-Select_icon", nf = "wk-Select_content", of = "wk-Select_viewport", rf = "wk-Select_item", sf = "wk-Select_itemIndicator", cf = "wk-Select_label", af = "wk-Select_separator", Ke = {
  trigger: Zd,
  sm: Jd,
  md: Qd,
  lg: ef,
  icon: tf,
  content: nf,
  viewport: of,
  item: rf,
  itemIndicator: sf,
  label: cf,
  separator: af
};
function Xw({
  placeholder: e,
  size: t = "md",
  children: n,
  className: o,
  id: r,
  "aria-label": s,
  ...i
}) {
  const c = Xo();
  return /* @__PURE__ */ D(bd, { ...i, children: [
    /* @__PURE__ */ D(
      Cd,
      {
        id: r ?? (c == null ? void 0 : c.inputId),
        "aria-label": s,
        "aria-invalid": (c == null ? void 0 : c.invalid) || void 0,
        "aria-describedby": c == null ? void 0 : c.describedBy,
        className: $(Ke.trigger, Ke[t], o),
        children: [
          /* @__PURE__ */ d(xd, { placeholder: e }),
          /* @__PURE__ */ d(_d, { className: Ke.icon, children: /* @__PURE__ */ d(vs, {}) })
        ]
      }
    ),
    /* @__PURE__ */ d(kd, { children: /* @__PURE__ */ d(Rd, { className: Ke.content, position: "popper", sideOffset: 4, children: /* @__PURE__ */ d($d, { className: Ke.viewport, children: n }) }) })
  ] });
}
const qw = Ee(
  function({ className: t, children: n, ...o }, r) {
    return /* @__PURE__ */ D(Kd, { ref: r, className: $(Ke.item, t), ...o, children: [
      /* @__PURE__ */ d(jd, { children: n }),
      /* @__PURE__ */ d(Gd, { className: Ke.itemIndicator, children: /* @__PURE__ */ d(zo, {}) })
    ] });
  }
);
function Zw({ label: e, children: t }) {
  return /* @__PURE__ */ D(Vd, { children: [
    /* @__PURE__ */ d(Wd, { className: Ke.label, children: e }),
    t
  ] });
}
function Jw() {
  return /* @__PURE__ */ d(Yd, { className: Ke.separator });
}
var lf = Object.defineProperty, it = (e, t) => lf(e, "name", { value: t, configurable: !0 }), gr = "Switch", [uf, Qw] = /* @__PURE__ */ me(gr), [df, wr] = uf(gr);
function Pi(e) {
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
    caller: gr
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
  return /* @__PURE__ */ d(df, { scope: t, ..._, children: ki(p) ? p(_) : o });
}
it(Pi, "SwitchProvider");
var ff = "SwitchTrigger", pf = /* @__PURE__ */ a.forwardRef(
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
    } = wr(ff, t), b = K(r, p), S = a.useRef(u);
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
        "data-state": br(u),
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
), mf = /* @__PURE__ */ a.forwardRef(
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
      Pi,
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
            pf,
            {
              ...m,
              ref: n,
              __scopeSwitch: o
            }
          ),
          g && /* @__PURE__ */ d(
            wf,
            {
              __scopeSwitch: o
            }
          )
        ] })
      }
    );
  }, "Switch")
), hf = "SwitchThumb", vf = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ it(function(t, n) {
    const { __scopeSwitch: o, ...r } = t, s = wr(hf, o);
    return /* @__PURE__ */ d(
      H.span,
      {
        "data-state": br(s.checked),
        "data-disabled": s.disabled ? "" : void 0,
        ...r,
        ref: n
      }
    );
  }, "SwitchThumb")
), gf = "SwitchBubbleInput", wf = /* @__PURE__ */ a.forwardRef(
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
    } = wr(gf, t), b = K(r, v), S = Hn(s), y = a.useRef(!1), C = a.useRef(l), x = a.useRef(c);
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
      const M = !(B && i.current);
      if (A && O) {
        y.current = !B;
        const F = new Event("click", { bubbles: M });
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
function ki(e) {
  return typeof e == "function";
}
it(ki, "isFunction");
function br(e) {
  return e ? "checked" : "unchecked";
}
it(br, "getState");
const bf = "wk-Switch_wrapper", yf = "wk-Switch_root", Cf = "wk-Switch_thumb", Sf = "wk-Switch_label", xn = {
  wrapper: bf,
  root: yf,
  thumb: Cf,
  label: Sf
}, eb = Ee(function({ label: t, className: n, id: o, ...r }, s) {
  const i = Je(), c = o ?? i, l = /* @__PURE__ */ d(mf, { ref: s, id: c, className: $(xn.root, n), ...r, children: /* @__PURE__ */ d(vf, { className: xn.thumb }) });
  return t ? /* @__PURE__ */ D("span", { className: xn.wrapper, children: [
    l,
    /* @__PURE__ */ d("label", { className: xn.label, htmlFor: c, children: t })
  ] }) : l;
});
var xf = Object.defineProperty, Ze = (e, t) => xf(e, "name", { value: t, configurable: !0 }), yr = "Checkbox", [_f, tb] = /* @__PURE__ */ me(yr), [Ef, Cr] = _f(yr);
function Ri(e) {
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
    caller: yr
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
    Ef,
    {
      scope: t,
      ..._,
      children: Ii(p) ? p(_) : o
    }
  );
}
Ze(Ri, "CheckboxProvider");
var Tf = "CheckboxTrigger", Pf = /* @__PURE__ */ a.forwardRef(
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
    } = Cr(Tf, t), b = K(s, p), S = a.useRef(u);
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
        "data-state": Sr(u),
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
), kf = /* @__PURE__ */ a.forwardRef(
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
      Ri,
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
            Pf,
            {
              ...m,
              ref: n,
              __scopeCheckbox: o
            }
          ),
          g && /* @__PURE__ */ d(
            Of,
            {
              __scopeCheckbox: o
            }
          )
        ] })
      }
    );
  }, "Checkbox")
), Rf = "CheckboxIndicator", If = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ze(function(t, n) {
    const { __scopeCheckbox: o, forceMount: r, ...s } = t, i = Cr(Rf, o);
    return /* @__PURE__ */ d(
      Ie,
      {
        present: r || Ye(i.checked) || i.checked === !0,
        children: /* @__PURE__ */ d(
          H.span,
          {
            "data-state": Sr(i.checked),
            "data-disabled": i.disabled ? "" : void 0,
            ...s,
            ref: n,
            style: { pointerEvents: "none", ...t.style }
          }
        )
      }
    );
  }, "CheckboxIndicator")
), Df = "CheckboxBubbleInput", Of = /* @__PURE__ */ a.forwardRef(
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
    } = Cr(Df, t), b = K(r, v), S = Hn(s), y = a.useRef(!1), C = a.useRef(l), x = a.useRef(c);
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
      const M = !(B && i.current);
      if (A && O) {
        y.current = !B;
        const F = new Event("click", { bubbles: M });
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
function Ii(e) {
  return typeof e == "function";
}
Ze(Ii, "isFunction");
function Ye(e) {
  return e === "indeterminate";
}
Ze(Ye, "isIndeterminate");
function Sr(e) {
  return Ye(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
Ze(Sr, "getState");
const Af = "wk-Checkbox_wrapper", Mf = "wk-Checkbox_root", Nf = "wk-Checkbox_indicator", $f = "wk-Checkbox_dash", Lf = "wk-Checkbox_label", Wt = {
  wrapper: Af,
  root: Mf,
  indicator: Nf,
  dash: $f,
  label: Lf
}, Ff = Ee(function({ label: t, className: n, id: o, ...r }, s) {
  const i = Je(), c = o ?? i, l = /* @__PURE__ */ d(kf, { ref: s, id: c, className: $(Wt.root, n), ...r, children: /* @__PURE__ */ d(If, { className: Wt.indicator, children: r.checked === "indeterminate" ? /* @__PURE__ */ d("span", { className: Wt.dash }) : /* @__PURE__ */ d(zo, {}) }) });
  return t ? /* @__PURE__ */ D("span", { className: Wt.wrapper, children: [
    l,
    /* @__PURE__ */ d("label", { className: Wt.label, htmlFor: c, children: t })
  ] }) : l;
});
var Bf = Object.defineProperty, ge = (e, t) => Bf(e, "name", { value: t, configurable: !0 }), xr = "Dialog", [Di, nb] = /* @__PURE__ */ me(xr), [Vf, De] = Di(xr), Oi = /* @__PURE__ */ ge((e) => {
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
    caller: xr
  }), [p, m] = a.useState(0), [g, w] = a.useState(0);
  return /* @__PURE__ */ d(
    Vf,
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
}, "Dialog"), Hf = "DialogTrigger", Wf = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ ge(function(t, n) {
    const { __scopeDialog: o, ...r } = t, s = De(Hf, o), i = K(n, s.triggerRef);
    return /* @__PURE__ */ d(
      H.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": s.open,
        "aria-controls": s.open ? s.contentId : void 0,
        "data-state": Gn(s.open),
        ...r,
        ref: i,
        onClick: I(t.onClick, s.onOpenToggle)
      }
    );
  }, "DialogTrigger")
), Ai = "DialogPortal", [Uf, Mi] = Di(Ai, {
  forceMount: void 0
}), Ni = /* @__PURE__ */ ge((e) => {
  const { __scopeDialog: t, forceMount: n, children: o, container: r } = e, s = De(Ai, t);
  return /* @__PURE__ */ d(Uf, { scope: t, forceMount: n, children: a.Children.map(o, (i) => /* @__PURE__ */ d(Ie, { present: n || s.open, children: /* @__PURE__ */ d(an, { asChild: !0, container: r, children: i }) })) });
}, "DialogPortal"), No = "DialogOverlay", $i = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ ge(function(t, n) {
    const o = Mi(No, t.__scopeDialog), { forceMount: r = o.forceMount, ...s } = t, i = De(No, t.__scopeDialog);
    return i.modal ? /* @__PURE__ */ d(Ie, { present: r || i.open, children: /* @__PURE__ */ d(jf, { ...s, ref: n }) }) : null;
  }, "DialogOverlay")
), Kf = /* @__PURE__ */ Be("DialogOverlay.RemoveScroll"), jf = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ge(function(t, n) {
    const { __scopeDialog: o, ...r } = t, s = De(No, o), i = Ms(), c = K(n, i);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ d(Kn, { as: Kf, allowPinchZoom: !0, shards: [s.contentRef], children: /* @__PURE__ */ d(
        H.div,
        {
          "data-state": Gn(s.open),
          ...r,
          ref: c,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }, "DialogOverlayImpl")
), Qt = "DialogContent", Li = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ ge(function(t, n) {
    const o = Mi(Qt, t.__scopeDialog), { forceMount: r = o.forceMount, ...s } = t, i = De(Qt, t.__scopeDialog);
    return /* @__PURE__ */ d(Ie, { present: r || i.open, children: i.modal ? /* @__PURE__ */ d(zf, { ...s, ref: n }) : /* @__PURE__ */ d(Gf, { ...s, ref: n }) });
  }, "DialogContent")
), zf = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ge(function(t, n) {
    const o = De(Qt, t.__scopeDialog), r = a.useRef(null), s = K(n, o.contentRef, r);
    return a.useEffect(() => {
      const i = r.current;
      if (i) return fr(i);
    }, []), /* @__PURE__ */ d(
      Fi,
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
), Gf = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ge(function(t, n) {
    const o = De(Qt, t.__scopeDialog), r = a.useRef(!1), s = a.useRef(!1);
    return /* @__PURE__ */ d(
      Fi,
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
), Fi = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ge(function(t, n) {
    const { __scopeDialog: o, trapFocus: r, onOpenAutoFocus: s, onCloseAutoFocus: i, ...c } = t, l = De(Qt, o);
    return cn(), /* @__PURE__ */ d(We, { children: /* @__PURE__ */ d(
      er,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: s,
        onUnmountAutoFocus: i,
        children: /* @__PURE__ */ d(
          sn,
          {
            role: "dialog",
            id: l.contentId,
            "aria-describedby": l.descriptionPresent ? l.descriptionId : void 0,
            "aria-labelledby": l.titlePresent ? l.titleId : void 0,
            "data-state": Gn(l.open),
            ...c,
            ref: n,
            deferPointerDownOutside: !0,
            onDismiss: () => l.onOpenChange(!1)
          }
        )
      }
    ) });
  }, "DialogContentImpl")
), Yf = "DialogTitle", $o = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ ge(function(t, n) {
    const { __scopeDialog: o, ...r } = t, s = De(Yf, o), { setTitleCount: i } = s;
    return oe(() => (i((c) => c + 1), () => i((c) => c - 1)), [i]), /* @__PURE__ */ d(H.h2, { id: s.titleId, ...r, ref: n });
  }, "DialogTitle")
), Xf = "DialogDescription", qf = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ge(function(t, n) {
    const { __scopeDialog: o, ...r } = t, s = De(Xf, o), { setDescriptionCount: i } = s;
    return oe(() => (i((c) => c + 1), () => i((c) => c - 1)), [i]), /* @__PURE__ */ d(H.p, { id: s.descriptionId, ...r, ref: n });
  }, "DialogDescription")
), Zf = "DialogClose", Bi = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ ge(function(t, n) {
    const { __scopeDialog: o, ...r } = t, s = De(Zf, o);
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
function Gn(e) {
  return e ? "open" : "closed";
}
ge(Gn, "getState");
const Jf = "wk-Semantic_heading", Qf = "wk-Semantic_text", ep = "wk-Semantic_muted", tp = "wk-Semantic_subtle", np = "wk-Semantic_danger", op = "wk-Semantic_mono", rp = "wk-Semantic_xs", sp = "wk-Semantic_sm", ip = "wk-Semantic_md", cp = "wk-Semantic_lg", ap = "wk-Semantic_xl", lp = "wk-Semantic_xxl", up = "wk-Semantic_link", dp = "wk-Semantic_visuallyHidden", Ce = {
  heading: Jf,
  text: Qf,
  muted: ep,
  subtle: tp,
  danger: np,
  mono: op,
  xs: rp,
  sm: sp,
  md: ip,
  lg: cp,
  xl: ap,
  xxl: lp,
  link: up,
  visuallyHidden: dp
};
function dn({ className: e, ...t }) {
  return /* @__PURE__ */ d("span", { className: $(Ce.visuallyHidden, e), ...t });
}
const fp = "wk-Dialog_overlay", pp = "wk-Dialog_content", mp = "wk-Dialog_header", hp = "wk-Dialog_headings", vp = "wk-Dialog_title", gp = "wk-Dialog_description", wp = "wk-Dialog_close", bp = "wk-Dialog_footer", et = {
  overlay: fp,
  content: pp,
  header: mp,
  headings: hp,
  title: vp,
  description: gp,
  close: wp,
  footer: bp
};
function ob({
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
  return /* @__PURE__ */ D(Oi, { ...u, children: [
    s && /* @__PURE__ */ d(Wf, { asChild: !0, children: s }),
    /* @__PURE__ */ D(Ni, { children: [
      /* @__PURE__ */ d($i, { className: et.overlay }),
      /* @__PURE__ */ D(
        Li,
        {
          className: $(et.content, l),
          style: i ? { "--wk-dialog-w": i } : void 0,
          children: [
            /* @__PURE__ */ D("div", { className: et.header, children: [
              /* @__PURE__ */ D("div", { className: et.headings, children: [
                t ? /* @__PURE__ */ d($o, { asChild: !0, children: /* @__PURE__ */ d(dn, { children: e }) }) : /* @__PURE__ */ d($o, { className: et.title, children: e }),
                n && /* @__PURE__ */ d(qf, { className: et.description, children: n })
              ] }),
              c && /* @__PURE__ */ d(Bi, { className: et.close, "aria-label": "Close", children: /* @__PURE__ */ d(Mn, {}) })
            ] }),
            o,
            r && /* @__PURE__ */ d("div", { className: et.footer, children: r })
          ]
        }
      )
    ] })
  ] });
}
const rb = Bi;
var yp = Object.defineProperty, _r = (e, t) => yp(e, "name", { value: t, configurable: !0 }), po = !1;
function Vi() {
  const [e, t] = a.useState(po);
  return a.useEffect(() => {
    po || (po = !0, t(!0));
  }, []), e;
}
_r(Vi, "useIsHydrated");
var Hi = a[" useSyncExternalStore ".trim().toString()];
function Wi() {
  return () => {
  };
}
_r(Wi, "subscribe");
function Ui() {
  return Hi(
    Wi,
    () => !0,
    () => !1
  );
}
_r(Ui, "useIsHydratedModern");
var Cp = typeof Hi == "function" ? Ui : Vi, Sp = Object.defineProperty, wt = (e, t) => Sp(e, "name", { value: t, configurable: !0 }), mo = "rovingFocusGroup.onEntryFocus", xp = { bubbles: !1, cancelable: !0 }, Yn = "RovingFocusGroup", [Lo, Ki, _p] = /* @__PURE__ */ on(Yn), [Ep, Xn] = /* @__PURE__ */ me(
  Yn,
  [_p]
), [Tp, Pp] = Ep(Yn), kp = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ wt(function(t, n) {
    return /* @__PURE__ */ d(Lo.Provider, { scope: t.__scopeRovingFocusGroup, children: /* @__PURE__ */ d(Lo.Slot, { scope: t.__scopeRovingFocusGroup, children: /* @__PURE__ */ d(Rp, { ...t, ref: n }) }) });
  }, "RovingFocusGroup")
), Rp = /* @__PURE__ */ a.forwardRef(/* @__PURE__ */ wt(function(t, n) {
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
  } = t, g = a.useRef(null), w = K(n, g), h = rn(i), [v, b] = ke({
    prop: c,
    defaultProp: l ?? null,
    onChange: u,
    caller: Yn
  }), [S, y] = a.useState(!1), C = ue(f), x = Ki(o), _ = a.useRef(!1), [E, k] = a.useState(0);
  return a.useEffect(() => {
    const P = g.current;
    if (P)
      return P.addEventListener(mo, C), () => P.removeEventListener(mo, C);
  }, [C]), /* @__PURE__ */ d(
    Tp,
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
              const B = new CustomEvent(mo, xp);
              if (P.currentTarget.dispatchEvent(B), !B.defaultPrevented) {
                const A = x().filter((N) => N.focusable), M = A.find((N) => N.active), F = A.find((N) => N.id === v), T = [M, F, ...A].filter(
                  Boolean
                ).map((N) => N.ref.current);
                Er(T, p);
              }
            }
            _.current = !1;
          }),
          onBlur: I(t.onBlur, () => y(!1))
        }
      )
    }
  );
}, "RovingFocusGroupImpl")), Ip = "RovingFocusGroupItem", Dp = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ wt(function(t, n) {
    const {
      __scopeRovingFocusGroup: o,
      focusable: r = !0,
      active: s = !1,
      tabStopId: i,
      children: c,
      ...l
    } = t, u = _e(), f = i || u, p = Pp(Ip, o), m = p.currentTabStopId === f, g = Ki(o), { onFocusableItemAdd: w, onFocusableItemRemove: h, currentTabStopId: v } = p, b = Cp();
    return oe(() => {
      if (!(!b || !r))
        return w(), () => h();
    }, [b, r, w, h]), a.useEffect(() => {
      if (!(b || !r))
        return w(), () => h();
    }, [b, r, w, h]), /* @__PURE__ */ d(
      Lo.ItemSlot,
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
              const y = zi(S, p.orientation, p.dir);
              if (y !== void 0) {
                if (S.metaKey || S.ctrlKey || S.altKey || S.shiftKey) return;
                S.preventDefault();
                let x = g().filter((_) => _.focusable).map((_) => _.ref.current);
                if (y === "last") x.reverse();
                else if (y === "prev" || y === "next") {
                  y === "prev" && x.reverse();
                  const _ = x.indexOf(S.currentTarget);
                  x = p.loop ? Gi(x, _ + 1) : x.slice(_ + 1);
                }
                setTimeout(() => Er(x));
              }
            }),
            children: typeof c == "function" ? c({ isCurrentTabStop: m, hasTabStop: v != null }) : c
          }
        )
      }
    );
  }, "RovingFocusGroupItem")
), Op = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function ji(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
wt(ji, "getDirectionAwareKey");
function zi(e, t, n) {
  const o = ji(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
    return Op[o];
}
wt(zi, "getFocusIntent");
function Er(e, t = !1) {
  const n = document.activeElement;
  for (const o of e)
    if (o === n || (o.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
wt(Er, "focusFirst");
function Gi(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
wt(Gi, "wrapArray");
var Yi = kp, Xi = Dp, Ap = Object.defineProperty, J = (e, t) => Ap(e, "name", { value: t, configurable: !0 }), Mp = ["Enter", " "], Np = ["ArrowDown", "PageUp", "Home"], qi = ["ArrowUp", "PageDown", "End"], $p = [...Np, ...qi], qn = "Menu", [Fo, Lp, Fp] = /* @__PURE__ */ on(qn), [bt, Zi] = /* @__PURE__ */ me(qn, [
  Fp,
  Lt,
  Xn
]), Tr = Lt(), Ji = Xn(), [Bp, fn] = bt(qn), [Vp, Pr] = bt(qn), Hp = /* @__PURE__ */ J((e) => {
  const { __scopeMenu: t, open: n = !1, children: o, dir: r, onOpenChange: s, modal: i = !0 } = e, c = Tr(t), [l, u] = a.useState(null), f = a.useRef(!1), p = ue(s), m = rn(r);
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
  }, [n, p]), /* @__PURE__ */ d(ar, { ...c, children: /* @__PURE__ */ d(
    Bp,
    {
      scope: t,
      open: n,
      onOpenChange: p,
      content: l,
      onContentChange: u,
      children: /* @__PURE__ */ d(
        Vp,
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
}, "Menu"), Wp = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ J(function(t, n) {
    const { __scopeMenu: o, ...r } = t, s = Tr(o);
    return /* @__PURE__ */ d(lr, { ...s, ...r, ref: n });
  }, "MenuAnchor")
), Qi = "MenuPortal", [Up, Kp] = bt(Qi, {
  forceMount: void 0
}), jp = /* @__PURE__ */ J((e) => {
  const { __scopeMenu: t, forceMount: n, children: o, container: r } = e, s = fn(Qi, t);
  return /* @__PURE__ */ d(Up, { scope: t, forceMount: n, children: /* @__PURE__ */ d(Ie, { present: n || s.open, children: /* @__PURE__ */ d(an, { asChild: !0, container: r, children: o }) }) });
}, "MenuPortal"), ot = "MenuContent", [zp, ec] = bt(ot), Gp = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ J(function(t, n) {
    const o = Kp(ot, t.__scopeMenu), { forceMount: r = o.forceMount, ...s } = t, i = fn(ot, t.__scopeMenu), c = Pr(ot, t.__scopeMenu);
    return /* @__PURE__ */ d(Fo.Provider, { scope: t.__scopeMenu, children: /* @__PURE__ */ d(Ie, { present: r || i.open, children: /* @__PURE__ */ d(Fo.Slot, { scope: t.__scopeMenu, children: c.modal ? /* @__PURE__ */ d(Yp, { ...s, ref: n }) : /* @__PURE__ */ d(Xp, { ...s, ref: n }) }) }) });
  }, "MenuContent")
), Yp = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ J(function(t, n) {
    const o = fn(ot, t.__scopeMenu), r = a.useRef(null), s = K(n, r);
    return a.useEffect(() => {
      const i = r.current;
      if (i) return fr(i);
    }, []), /* @__PURE__ */ d(
      tc,
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
), Xp = /* @__PURE__ */ a.forwardRef(/* @__PURE__ */ J(function(t, n) {
  const o = fn(ot, t.__scopeMenu);
  return /* @__PURE__ */ d(
    tc,
    {
      ...t,
      ref: n,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => o.onOpenChange(!1)
    }
  );
}, "MenuRootContentNonModal")), qp = /* @__PURE__ */ Be("MenuContent.ScrollLock"), tc = /* @__PURE__ */ a.forwardRef(
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
    } = t, b = fn(ot, o), S = Pr(ot, o), y = Tr(o), C = Ji(o), x = Lp(o), [_, E] = a.useState(null), k = a.useRef(null), P = K(n, k, b.onContentChange), O = a.useRef(0), B = a.useRef(""), A = a.useRef(0), M = a.useRef(null), F = a.useRef("right"), U = a.useRef(0), T = h ? Kn : a.Fragment, N = h ? { as: qp, allowPinchZoom: !0 } : void 0, L = /* @__PURE__ */ J((R) => {
      var V, X;
      const Z = B.current + R, G = x().filter((ee) => !ee.disabled), Q = document.activeElement, ae = (V = G.find((ee) => ee.ref.current === Q)) == null ? void 0 : V.textValue, ce = G.map((ee) => ee.textValue), we = ic(ce, Z, ae), he = (X = G.find((ee) => ee.textValue === we)) == null ? void 0 : X.ref.current;
      (/* @__PURE__ */ J((function ee(Y) {
        B.current = Y, window.clearTimeout(O.current), Y !== "" && (O.current = window.setTimeout(() => ee(""), 1e3));
      }), "updateSearch"))(Z), he && setTimeout(() => he.focus());
    }, "handleTypeaheadSearch");
    a.useEffect(() => () => window.clearTimeout(O.current), []), cn();
    const W = a.useCallback((R) => {
      var G, Q;
      return F.current === ((G = M.current) == null ? void 0 : G.side) && ac(R, (Q = M.current) == null ? void 0 : Q.area);
    }, []);
    return /* @__PURE__ */ d(
      zp,
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
          M.current = R;
        }, []),
        children: /* @__PURE__ */ d(T, { ...N, children: /* @__PURE__ */ d(
          er,
          {
            asChild: !0,
            trapped: s,
            onMountAutoFocus: I(i, (R) => {
              var Z;
              R.preventDefault(), (Z = k.current) == null || Z.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: c,
            children: /* @__PURE__ */ d(
              sn,
              {
                asChild: !0,
                disableOutsidePointerEvents: l,
                onEscapeKeyDown: f,
                onPointerDownOutside: p,
                onFocusOutside: m,
                onInteractOutside: g,
                onDismiss: w,
                children: /* @__PURE__ */ d(
                  Yi,
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
                      ur,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": nc(b.open),
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
                          if (R.target !== ce || !$p.includes(R.key)) return;
                          R.preventDefault();
                          const he = x().filter((V) => !V.disabled).map((V) => V.ref.current);
                          qi.includes(R.key) && he.reverse(), rc(he);
                        }),
                        onBlur: I(t.onBlur, (R) => {
                          R.currentTarget.contains(R.target) || (window.clearTimeout(O.current), B.current = "");
                        }),
                        onPointerMove: I(
                          t.onPointerMove,
                          An((R) => {
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
), Zp = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ J(function(t, n) {
    const { __scopeMenu: o, ...r } = t;
    return /* @__PURE__ */ d(H.div, { ...r, ref: n });
  }, "MenuLabel")
), Bo = "MenuItem", us = "menu.itemSelect", Jp = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ J(function(t, n) {
    const { disabled: o = !1, onSelect: r, ...s } = t, i = a.useRef(null), c = Pr(Bo, t.__scopeMenu), l = ec(Bo, t.__scopeMenu), u = K(n, i), f = a.useRef(!1), p = /* @__PURE__ */ J(() => {
      const m = i.current;
      if (!o && m) {
        const g = new CustomEvent(us, { bubbles: !0, cancelable: !0 });
        m.addEventListener(us, (w) => r == null ? void 0 : r(w), { once: !0 }), Nn(m, g), g.defaultPrevented ? f.current = !1 : c.onClose();
      }
    }, "handleSelect");
    return /* @__PURE__ */ d(
      Qp,
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
), Qp = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ J(function(t, n) {
    const { __scopeMenu: o, disabled: r = !1, textValue: s, ...i } = t, c = ec(Bo, o), l = Ji(o), u = a.useRef(null), f = K(n, u), [p, m] = a.useState(!1), [g, w] = a.useState("");
    return a.useEffect(() => {
      const h = u.current;
      h && w((h.textContent ?? "").trim());
    }, [i.children]), /* @__PURE__ */ d(
      Fo.ItemSlot,
      {
        scope: o,
        disabled: r,
        textValue: s ?? g,
        children: /* @__PURE__ */ d(Xi, { asChild: !0, ...l, focusable: !r, children: /* @__PURE__ */ d(
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
              An((h) => {
                r ? c.onItemLeave(h) : (c.onItemEnter(h), h.defaultPrevented || h.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: I(
              t.onPointerLeave,
              An((h) => c.onItemLeave(h))
            ),
            onFocus: I(t.onFocus, () => m(!0)),
            onBlur: I(t.onBlur, () => m(!1))
          }
        ) })
      }
    );
  }, "MenuItemImpl")
), em = "MenuRadioGroup", [sb, ib] = bt(
  em,
  { value: void 0, onValueChange: /* @__PURE__ */ J(() => {
  }, "onValueChange") }
), tm = "MenuItemIndicator", [cb, ab] = bt(
  tm,
  { checked: !1 }
), nm = /* @__PURE__ */ a.forwardRef(
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
), om = "MenuSub", [lb, ub] = bt(om);
function nc(e) {
  return e ? "open" : "closed";
}
J(nc, "getOpenState");
function oc(e) {
  return e === "indeterminate";
}
J(oc, "isIndeterminate");
function rm(e) {
  return oc(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
J(rm, "getCheckedState");
function rc(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
J(rc, "focusFirst");
function sc(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
J(sc, "wrapArray");
function ic(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let i = sc(e, Math.max(s, 0));
  r.length === 1 && (i = i.filter((u) => u !== n));
  const l = i.find(
    (u) => u.toLowerCase().startsWith(r.toLowerCase())
  );
  return l !== n ? l : void 0;
}
J(ic, "getNextMatch");
function cc(e, t) {
  const { x: n, y: o } = e;
  let r = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const c = t[s], l = t[i], u = c.x, f = c.y, p = l.x, m = l.y;
    f > o != m > o && n < (p - u) * (o - f) / (m - f) + u && (r = !r);
  }
  return r;
}
J(cc, "isPointInPolygon");
function ac(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return cc(n, t);
}
J(ac, "isPointerInGraceArea");
function An(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
J(An, "whenMouse");
var sm = Hp, im = Wp, cm = jp, am = Gp, lm = Zp, um = Jp, dm = nm, fm = Object.defineProperty, yt = (e, t) => fm(e, "name", { value: t, configurable: !0 }), kr = "DropdownMenu", [pm, db] = /* @__PURE__ */ me(
  kr,
  [Zi]
), Ct = Zi(), [mm, lc] = pm(kr), hm = /* @__PURE__ */ yt((e) => {
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
    caller: kr
  });
  return /* @__PURE__ */ d(
    mm,
    {
      scope: t,
      triggerId: _e(),
      triggerRef: u,
      contentId: _e(),
      open: f,
      onOpenChange: p,
      onOpenToggle: a.useCallback(() => p((m) => !m), [p]),
      modal: c,
      children: /* @__PURE__ */ d(sm, { ...l, open: f, onOpenChange: p, dir: o, modal: c, children: n })
    }
  );
}, "DropdownMenu"), vm = "DropdownMenuTrigger", gm = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ yt(function(t, n) {
    const { __scopeDropdownMenu: o, disabled: r = !1, ...s } = t, i = lc(vm, o), c = Ct(o), l = K(n, i.triggerRef);
    return /* @__PURE__ */ d(im, { asChild: !0, ...c, children: /* @__PURE__ */ d(
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
), wm = /* @__PURE__ */ yt((e) => {
  const { __scopeDropdownMenu: t, ...n } = e, o = Ct(t);
  return /* @__PURE__ */ d(cm, { ...o, ...n });
}, "DropdownMenuPortal"), bm = "DropdownMenuContent", ym = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ yt(function(t, n) {
    const { __scopeDropdownMenu: o, ...r } = t, s = lc(bm, o), i = Ct(o), c = a.useRef(!1);
    return /* @__PURE__ */ d(
      am,
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
), Cm = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ yt(function(t, n) {
    const { __scopeDropdownMenu: o, ...r } = t, s = Ct(o);
    return /* @__PURE__ */ d(lm, { ...s, ...r, ref: n });
  }, "DropdownMenuLabel")
), Sm = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ yt(function(t, n) {
    const { __scopeDropdownMenu: o, ...r } = t, s = Ct(o);
    return /* @__PURE__ */ d(um, { ...s, ...r, ref: n });
  }, "DropdownMenuItem")
), xm = /* @__PURE__ */ a.forwardRef(/* @__PURE__ */ yt(function(t, n) {
  const { __scopeDropdownMenu: o, ...r } = t, s = Ct(o);
  return /* @__PURE__ */ d(dm, { ...s, ...r, ref: n });
}, "DropdownMenuSeparator")), _m = hm, Em = gm, Tm = wm, Pm = ym, km = Cm, Rm = Sm, Im = xm;
const Dm = "wk-Menu_content", Om = "wk-Menu_item", Am = "wk-Menu_danger", Mm = "wk-Menu_label", Nm = "wk-Menu_separator", $m = "wk-Menu_shortcut", It = {
  content: Dm,
  item: Om,
  danger: Am,
  label: Mm,
  separator: Nm,
  shortcut: $m
};
function fb({ trigger: e, children: t, align: n = "start", side: o = "bottom", className: r, ...s }) {
  return /* @__PURE__ */ D(_m, { ...s, children: [
    /* @__PURE__ */ d(Em, { asChild: !0, children: e }),
    /* @__PURE__ */ d(Tm, { children: /* @__PURE__ */ d(
      Pm,
      {
        className: $(It.content, r),
        align: n,
        side: o,
        sideOffset: 4,
        collisionPadding: 8,
        children: t
      }
    ) })
  ] });
}
const pb = Ee(function({ tone: t = "default", shortcut: n, className: o, children: r, ...s }, i) {
  return /* @__PURE__ */ D(
    Rm,
    {
      ref: i,
      className: $(It.item, t === "danger" && It.danger, o),
      ...s,
      children: [
        r,
        n && /* @__PURE__ */ d("span", { className: It.shortcut, children: n })
      ]
    }
  );
});
function mb({ children: e }) {
  return /* @__PURE__ */ d(km, { className: It.label, children: e });
}
function hb() {
  return /* @__PURE__ */ d(Im, { className: It.separator });
}
var Lm = Object.defineProperty, se = (e, t) => Lm(e, "name", { value: t, configurable: !0 }), [Rr, vb] = /* @__PURE__ */ me("Tooltip", [
  Lt
]), Zn = Lt(), Fm = "TooltipProvider", Bm = 700, Vo = "tooltip.open", [Vm, Ir] = Rr(Fm), Hm = /* @__PURE__ */ se((e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = Bm,
    skipDelayDuration: o = 300,
    disableHoverableContent: r = !1,
    children: s
  } = e, i = a.useRef(!0), c = a.useRef(!1), l = a.useRef(0);
  return a.useEffect(() => {
    const u = l.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ d(
    Vm,
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
}, "TooltipProvider"), Ho = "Tooltip", [Wm, pn] = Rr(Ho), Um = /* @__PURE__ */ se((e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: o,
    defaultOpen: r,
    onOpenChange: s,
    disableHoverableContent: i,
    delayDuration: c
  } = e, l = Ir(Ho, e.__scopeTooltip), u = Zn(t), [f, p] = a.useState(null), [m, g] = a.useState(void 0), w = _e(), h = a.useRef(0), v = i ?? l.disableHoverableContent, b = c ?? l.delayDuration, S = a.useRef(!1), [y, C] = ke({
    prop: o,
    defaultProp: r ?? !1,
    onChange: /* @__PURE__ */ se((O) => {
      O ? (l.onOpen(), document.dispatchEvent(new CustomEvent(Vo))) : l.onClose(), s == null || s(O);
    }, "onChange"),
    caller: Ho
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
  }, []), /* @__PURE__ */ d(ar, { ...u, children: /* @__PURE__ */ d(
    Wm,
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
}, "Tooltip"), ds = "TooltipTrigger", Km = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ se(function(t, n) {
    const { __scopeTooltip: o, ...r } = t, s = pn(ds, o), i = Ir(ds, o), c = Zn(o), l = a.useRef(null), u = K(n, l, s.onTriggerChange), f = a.useRef(!1), p = a.useRef(!1), m = a.useCallback(() => f.current = !1, []);
    return a.useEffect(() => () => document.removeEventListener("pointerup", m), [m]), /* @__PURE__ */ d(lr, { asChild: !0, ...c, children: /* @__PURE__ */ d(
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
), uc = "TooltipPortal", [jm, zm] = Rr(uc, {
  forceMount: void 0
}), Gm = /* @__PURE__ */ se((e) => {
  const { __scopeTooltip: t, forceMount: n, children: o, container: r } = e, s = pn(uc, t);
  return /* @__PURE__ */ d(jm, { scope: t, forceMount: n, children: /* @__PURE__ */ d(Ie, { present: n || s.open, children: /* @__PURE__ */ d(an, { asChild: !0, container: r, children: o }) }) });
}, "TooltipPortal"), en = "TooltipContent", Ym = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ se(function(t, n) {
    const o = zm(en, t.__scopeTooltip), { forceMount: r = o.forceMount, side: s = "top", ...i } = t, c = pn(en, t.__scopeTooltip);
    return /* @__PURE__ */ d(Ie, { present: r || c.open, children: c.disableHoverableContent ? /* @__PURE__ */ d(dc, { side: s, ...i, ref: n }) : /* @__PURE__ */ d(Xm, { side: s, ...i, ref: n }) });
  }, "TooltipContent")
), Xm = /* @__PURE__ */ a.forwardRef(/* @__PURE__ */ se(function(t, n) {
  const o = pn(en, t.__scopeTooltip), r = Ir(en, t.__scopeTooltip), s = a.useRef(null), i = K(n, s), [c, l] = a.useState(null), { trigger: u, onClose: f } = o, p = s.current, { onPointerInTransitChange: m } = r, g = a.useCallback(() => {
    l(null), m(!1);
  }, [m]), w = a.useCallback(
    (h, v) => {
      const b = h.currentTarget, S = { x: h.clientX, y: h.clientY }, y = fc(S, b.getBoundingClientRect()), C = pc(S, y), x = mc(v.getBoundingClientRect()), _ = vc([...C, ...x]);
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
        const b = v.target, S = { x: v.clientX, y: v.clientY }, y = (u == null ? void 0 : u.contains(b)) || (p == null ? void 0 : p.contains(b)), C = !hc(S, c);
        y ? g() : C && (g(), f());
      }, "handleTrackPointerGrace");
      return document.addEventListener("pointermove", h), () => document.removeEventListener("pointermove", h);
    }
  }, [u, p, c, f, g]), /* @__PURE__ */ d(dc, { ...t, ref: i });
}, "TooltipContentHoverable")), qm = /* @__PURE__ */ ys("TooltipContent"), dc = /* @__PURE__ */ a.forwardRef(
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
    } = t, f = pn(en, o), p = Zn(o), { onClose: m } = f;
    a.useEffect(() => (document.addEventListener(Vo, m), () => document.removeEventListener(Vo, m)), [m]), a.useEffect(() => {
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
      sn,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: c,
        onPointerDownOutside: l,
        onFocusOutside: (w) => w.preventDefault(),
        onDismiss: m,
        children: /* @__PURE__ */ D(
          ur,
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
              /* @__PURE__ */ d(qm, { children: r }),
              s ? /* @__PURE__ */ d(Tu, { id: f.contentId, role: "tooltip", children: s }) : null
            ]
          }
        )
      }
    );
  }, "TooltipContentImpl")
), Zm = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ se(function(t, n) {
    const { __scopeTooltip: o, ...r } = t, s = Zn(o);
    return /* @__PURE__ */ d(pu, { ...s, ...r, ref: n });
  }, "TooltipArrow")
);
function fc(e, t) {
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
se(fc, "getExitSideFromRect");
function pc(e, t, n = 5) {
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
se(pc, "getPaddedExitPoints");
function mc(e) {
  const { top: t, right: n, bottom: o, left: r } = e;
  return [
    { x: r, y: t },
    { x: n, y: t },
    { x: n, y: o },
    { x: r, y: o }
  ];
}
se(mc, "getPointsFromRect");
function hc(e, t) {
  const { x: n, y: o } = e;
  let r = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const c = t[s], l = t[i], u = c.x, f = c.y, p = l.x, m = l.y;
    f > o != m > o && n < (p - u) * (o - f) / (m - f) + u && (r = !r);
  }
  return r;
}
se(hc, "isPointInPolygon");
function vc(e) {
  const t = e.slice();
  return t.sort((n, o) => n.x < o.x ? -1 : n.x > o.x ? 1 : n.y < o.y ? -1 : n.y > o.y ? 1 : 0), gc(t);
}
se(vc, "getHull");
function gc(e) {
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
se(gc, "getHullPresorted");
var Jm = Hm, Qm = Um, eh = Km, th = Gm, nh = Ym, oh = Zm;
const rh = "wk-Tooltip_content", sh = "wk-Tooltip_arrow", fs = {
  content: rh,
  arrow: sh
}, gb = Jm;
function wb({ content: e, children: t, side: n = "top", delayDuration: o, className: r }) {
  return /* @__PURE__ */ D(Qm, { delayDuration: o, children: [
    /* @__PURE__ */ d(eh, { asChild: !0, children: t }),
    /* @__PURE__ */ d(th, { children: /* @__PURE__ */ D(
      nh,
      {
        className: $(fs.content, r),
        side: n,
        sideOffset: 6,
        collisionPadding: 8,
        children: [
          e,
          /* @__PURE__ */ d(oh, { className: fs.arrow, width: 10, height: 5 })
        ]
      }
    ) })
  ] });
}
var ih = Object.defineProperty, Ft = (e, t) => ih(e, "name", { value: t, configurable: !0 }), Dr = "Tabs", [ch, bb] = /* @__PURE__ */ me(Dr, [
  Xn
]), wc = Xn(), [ah, Or] = ch(Dr), lh = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ft(function(t, n) {
    const {
      __scopeTabs: o,
      value: r,
      onValueChange: s,
      defaultValue: i,
      orientation: c = "horizontal",
      dir: l,
      activationMode: u = "automatic",
      ...f
    } = t, p = rn(l), [m, g] = ke({
      prop: r,
      onChange: s,
      defaultProp: i ?? "",
      caller: Dr
    });
    return /* @__PURE__ */ d(
      ah,
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
), uh = "TabsList", dh = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ft(function(t, n) {
    const { __scopeTabs: o, loop: r = !0, ...s } = t, i = Or(uh, o), c = wc(o);
    return /* @__PURE__ */ d(
      Yi,
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
), fh = "TabsTrigger", ph = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ Ft(function(t, n) {
    const { __scopeTabs: o, value: r, disabled: s = !1, ...i } = t, c = Or(fh, o), l = wc(o), u = Ar(c.baseId, r), f = Mr(c.baseId, r), p = r === c.value;
    return /* @__PURE__ */ d(
      Xi,
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
), mh = "TabsContent", hh = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ Ft(function(t, n) {
    const { __scopeTabs: o, value: r, forceMount: s, children: i, ...c } = t, l = Or(mh, o), u = Ar(l.baseId, r), f = Mr(l.baseId, r), p = r === l.value, m = a.useRef(p);
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
function Ar(e, t) {
  return `${e}-trigger-${t}`;
}
Ft(Ar, "makeTriggerId");
function Mr(e, t) {
  return `${e}-content-${t}`;
}
Ft(Mr, "makeContentId");
var vh = lh, gh = dh, wh = ph, bh = hh;
const yh = "wk-Tabs_root", Ch = "wk-Tabs_list", Sh = "wk-Tabs_trigger", xh = "wk-Tabs_content", Jn = {
  root: yh,
  list: Ch,
  trigger: Sh,
  content: xh
};
function yb({ className: e, ...t }) {
  return /* @__PURE__ */ d(vh, { className: $(Jn.root, e), ...t });
}
function Cb({ className: e, ...t }) {
  return /* @__PURE__ */ d(gh, { className: $(Jn.list, e), ...t });
}
const Sb = Ee(
  function({ className: t, ...n }, o) {
    return /* @__PURE__ */ d(wh, { ref: o, className: $(Jn.trigger, t), ...n });
  }
);
function xb({ className: e, ...t }) {
  return /* @__PURE__ */ d(bh, { className: $(Jn.content, e), ...t });
}
var _h = Object.defineProperty, te = (e, t) => _h(e, "name", { value: t, configurable: !0 }), bc = "ToastProvider", [Nr, yc, Eh] = /* @__PURE__ */ on("Toast"), [Cc, _b] = /* @__PURE__ */ me("Toast", [Eh]), [Th, Qn] = Cc(bc), Ph = /* @__PURE__ */ te((e) => {
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
    `Invalid prop \`label\` supplied to \`${bc}\`. Expected non-empty \`string\`.`
  ), /* @__PURE__ */ d(Nr.Provider, { scope: t, children: /* @__PURE__ */ d(
    Th,
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
}, "ToastProvider"), kh = "ToastViewport", Rh = ["F8"], Wo = "toast.viewportPause", Uo = "toast.viewportResume", Ih = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ te(function(t, n) {
    const {
      __scopeToast: o,
      hotkey: r = Rh,
      label: s = "Notifications ({hotkey})",
      ...i
    } = t, c = Qn(kh, o), l = yc(o), u = a.useRef(null), f = a.useRef(null), p = a.useRef(null), m = a.useRef(null), g = K(n, m, c.onViewportChange), w = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), h = c.toastCount > 0;
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
            const E = new CustomEvent(Wo);
            S.dispatchEvent(E), c.isClosePausedRef.current = !0;
          }
        }, "handlePause"), C = /* @__PURE__ */ te(() => {
          if (c.isClosePausedRef.current) {
            const E = new CustomEvent(Uo);
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
          const x = C.ref.current, _ = [x, ..._c(x)];
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
            const M = v({ tabbingDirection: O ? "backwards" : "forwards" }), F = M.findIndex((U) => U === P);
            kn(M.slice(F + 1)) ? y.preventDefault() : O ? (E = f.current) == null || E.focus() : (k = p.current) == null || k.focus();
          }
        }, "handleKeyDown");
        return b.addEventListener("keydown", S), () => b.removeEventListener("keydown", S);
      }
    }, [l, v]), /* @__PURE__ */ D(
      $a,
      {
        ref: u,
        role: "region",
        "aria-label": s.replace("{hotkey}", w),
        tabIndex: -1,
        style: { pointerEvents: h ? void 0 : "none" },
        children: [
          h && /* @__PURE__ */ d(
            ps,
            {
              ref: f,
              onFocusFromOutsideViewport: () => {
                const b = v({
                  tabbingDirection: "forwards"
                });
                kn(b);
              }
            }
          ),
          /* @__PURE__ */ d(Nr.Slot, { scope: o, children: /* @__PURE__ */ d(H.ol, { tabIndex: -1, ...i, ref: g }) }),
          h && /* @__PURE__ */ d(
            ps,
            {
              ref: p,
              onFocusFromOutsideViewport: () => {
                const b = v({
                  tabbingDirection: "backwards"
                });
                kn(b);
              }
            }
          )
        ]
      }
    );
  }, "ToastViewport")
), Dh = "ToastFocusProxy", ps = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ te(function(t, n) {
    const { __scopeToast: o, onFocusFromOutsideViewport: r, ...s } = t, i = Qn(Dh, o);
    return /* @__PURE__ */ d(
      dr,
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
), eo = "Toast", Oh = "toast.swipeStart", Ah = "toast.swipeMove", Mh = "toast.swipeCancel", Nh = "toast.swipeEnd", $h = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ te(function(t, n) {
    const { forceMount: o, open: r, defaultOpen: s, onOpenChange: i, ...c } = t, [l, u] = ke({
      prop: r,
      defaultProp: s ?? !0,
      onChange: i,
      caller: eo
    });
    return /* @__PURE__ */ d(Ie, { present: o || l, children: /* @__PURE__ */ d(
      Bh,
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
), [Lh, Fh] = Cc(eo, {
  onClose() {
  }
}), Bh = /* @__PURE__ */ a.forwardRef(
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
    } = t, v = Qn(eo, o), b = yc(o), [S, y] = a.useState(null), C = K(n, y), x = a.useRef(null), _ = a.useRef(null), E = s || v.duration, k = a.useRef(0), P = a.useRef(E), O = a.useRef(0), { onToastAdd: B, onToastRemove: A } = v, M = ue(() => {
      var N;
      (S == null ? void 0 : S.contains(document.activeElement)) && ((N = v.viewport) == null || N.focus()), c();
    }), F = a.useCallback(
      (T) => {
        !T || T === 1 / 0 || (window.clearTimeout(O.current), k.current = (/* @__PURE__ */ new Date()).getTime(), O.current = window.setTimeout(M, T));
      },
      [M]
    );
    a.useEffect(() => {
      const T = v.viewport;
      if (T) {
        const N = /* @__PURE__ */ te(() => {
          F(P.current), f == null || f();
        }, "handleResume"), L = /* @__PURE__ */ te(() => {
          const W = (/* @__PURE__ */ new Date()).getTime() - k.current;
          P.current = P.current - W, window.clearTimeout(O.current), u == null || u();
        }, "handlePause");
        return T.addEventListener(Wo, L), T.addEventListener(Uo, N), () => {
          T.removeEventListener(Wo, L), T.removeEventListener(Uo, N);
        };
      }
    }, [v.viewport, E, u, f, F]), a.useEffect(() => {
      i && !v.isClosePausedRef.current && F(E);
    }, [i, E, v.isClosePausedRef, F]), a.useEffect(() => () => {
      window.clearTimeout(O.current);
    }, []), a.useEffect(() => (B(), () => A()), [B, A]);
    const U = a.useMemo(() => S ? $r(S) : null, [S]);
    return v.viewport ? /* @__PURE__ */ D(We, { children: [
      U && /* @__PURE__ */ d(
        Vh,
        {
          __scopeToast: o,
          role: "status",
          "aria-live": r === "foreground" ? "assertive" : "polite",
          children: U
        }
      ),
      /* @__PURE__ */ d(Lh, { scope: o, onClose: M, children: At.createPortal(
        /* @__PURE__ */ d(Nr.ItemSlot, { scope: o, children: /* @__PURE__ */ d(
          Na,
          {
            asChild: !0,
            onEscapeKeyDown: I(l, (T) => {
              b().some(
                (L) => {
                  var W;
                  return (W = L.ref.current) == null ? void 0 : W.contains(T.target);
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
                  const N = T.clientX - x.current.x, L = T.clientY - x.current.y, W = !!_.current, R = ["left", "right"].includes(v.swipeDirection), Z = ["left", "up"].includes(v.swipeDirection) ? Math.min : Math.max, G = R ? Z(0, N) : 0, Q = R ? 0 : Z(0, L), ae = T.pointerType === "touch" ? 10 : 2, ce = { x: G, y: Q }, we = { originalEvent: T, delta: ce };
                  W ? (_.current = ce, Yt(Ah, m, we, {
                    discrete: !1
                  })) : ms(ce, v.swipeDirection, ae) ? (_.current = ce, Yt(Oh, p, we, {
                    discrete: !1
                  }), T.target.setPointerCapture(T.pointerId)) : (Math.abs(N) > ae || Math.abs(L) > ae) && (x.current = null);
                }),
                onPointerUp: I(t.onPointerUp, (T) => {
                  const N = _.current, L = T.target;
                  if (L.hasPointerCapture(T.pointerId) && L.releasePointerCapture(T.pointerId), _.current = null, x.current = null, N) {
                    const W = T.currentTarget, R = { originalEvent: T, delta: N };
                    ms(N, v.swipeDirection, v.swipeThreshold) ? Yt(Nh, w, R, {
                      discrete: !0
                    }) : Yt(
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
), Vh = /* @__PURE__ */ te((e) => {
  const { __scopeToast: t, children: n, ...o } = e, r = Qn(eo, t), [s, i] = a.useState(!1), [c, l] = a.useState(!1);
  return Sc(() => i(!0)), a.useEffect(() => {
    const u = window.setTimeout(() => l(!0), 1e3);
    return () => window.clearTimeout(u);
  }, []), c ? null : /* @__PURE__ */ d(an, { asChild: !0, container: r.announcerContainer || void 0, children: /* @__PURE__ */ d(dr, { ...o, children: s && /* @__PURE__ */ D(We, { children: [
    r.label,
    " ",
    n
  ] }) }) });
}, "ToastAnnounce"), Hh = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ te(function(t, n) {
    const { __scopeToast: o, ...r } = t;
    return /* @__PURE__ */ d(H.div, { ...r, ref: n });
  }, "ToastTitle")
), Wh = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ te(function(t, n) {
    const { __scopeToast: o, ...r } = t;
    return /* @__PURE__ */ d(H.div, { ...r, ref: n });
  }, "ToastDescription")
), Uh = "ToastClose", Kh = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ te(function(t, n) {
    const { __scopeToast: o, ...r } = t, s = Fh(Uh, o);
    return /* @__PURE__ */ d(jh, { asChild: !0, children: /* @__PURE__ */ d(
      H.button,
      {
        type: "button",
        ...r,
        ref: n,
        onClick: I(t.onClick, s.onClose)
      }
    ) });
  }, "ToastClose")
), jh = /* @__PURE__ */ a.forwardRef(/* @__PURE__ */ te(function(t, n) {
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
function $r(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((o) => {
    if (o.nodeType === o.TEXT_NODE && o.textContent && t.push(o.textContent), xc(o)) {
      const r = o.ariaHidden || o.hidden || o.style.display === "none", s = o.dataset.radixToastAnnounceExclude === "";
      if (!r)
        if (s) {
          const i = o.dataset.radixToastAnnounceAlt;
          i && t.push(i);
        } else
          t.push(...$r(o));
    }
  }), t;
}
te($r, "getAnnounceTextContent");
function Yt(e, t, n, { discrete: o }) {
  const r = n.originalEvent.currentTarget, s = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && r.addEventListener(e, t, { once: !0 }), o ? Nn(r, s) : r.dispatchEvent(s);
}
te(Yt, "handleAndDispatchCustomEvent");
var ms = /* @__PURE__ */ te((e, t, n = 0) => {
  const o = Math.abs(e.x), r = Math.abs(e.y), s = o > r;
  return t === "left" || t === "right" ? s && o > n : !s && r > n;
}, "isDeltaInDirection");
function Sc(e = () => {
}) {
  const t = ue(e);
  oe(() => {
    let n = 0, o = 0;
    return n = window.requestAnimationFrame(() => o = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(n), window.cancelAnimationFrame(o);
    };
  }, [t]);
}
te(Sc, "useNextFrame");
function xc(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
te(xc, "isHTMLElement");
function _c(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: /* @__PURE__ */ te((o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }, "acceptNode")
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
te(_c, "getTabbableCandidates");
function kn(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
te(kn, "focusFirst");
var zh = Ph, Gh = Ih, Yh = $h, Xh = Hh, qh = Wh, Zh = Kh;
const Jh = "wk-Toast_viewport", Qh = "wk-Toast_root", ev = "wk-Toast_body", tv = "wk-Toast_title", nv = "wk-Toast_description", ov = "wk-Toast_close", Tt = {
  viewport: Jh,
  root: Qh,
  body: ev,
  title: tv,
  description: nv,
  close: ov
}, Ec = nn(null);
function Eb({ children: e, swipeDirection: t = "right" }) {
  const [n, o] = Pe([]), r = pt(1), s = ft((l) => {
    o((u) => u.filter((f) => f.id !== l));
  }, []), i = ft((l) => {
    const u = r.current++;
    o((f) => [...f, { ...l, id: u }]);
  }, []), c = Dt(() => ({ toast: i, dismiss: s }), [i, s]);
  return /* @__PURE__ */ d(Ec.Provider, { value: c, children: /* @__PURE__ */ D(zh, { swipeDirection: t, children: [
    e,
    n.map((l) => /* @__PURE__ */ D(
      Yh,
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
            /* @__PURE__ */ d(Xh, { className: Tt.title, children: l.title }),
            l.description && /* @__PURE__ */ d(qh, { className: Tt.description, children: l.description })
          ] }),
          /* @__PURE__ */ d(Zh, { className: Tt.close, "aria-label": "Dismiss", children: /* @__PURE__ */ d(Mn, {}) })
        ]
      },
      l.id
    )),
    /* @__PURE__ */ d(Gh, { className: Tt.viewport })
  ] }) });
}
function Tb() {
  const e = tn(Ec);
  if (!e) throw new Error("useToast must be used inside <ToastProvider>");
  return e;
}
const rv = "wk-Textarea_root", sv = "wk-Textarea_mono", iv = "wk-Textarea_noResize", ho = {
  root: rv,
  mono: sv,
  noResize: iv
}, Pb = Ee(function({ invalid: t, mono: n = !1, resizable: o = !0, className: r, id: s, rows: i = 4, ...c }, l) {
  const u = Xo(), f = t ?? (u == null ? void 0 : u.invalid) ?? !1;
  return /* @__PURE__ */ d(
    "textarea",
    {
      ref: l,
      id: s ?? (u == null ? void 0 : u.inputId),
      rows: i,
      "aria-invalid": f || void 0,
      "aria-describedby": u == null ? void 0 : u.describedBy,
      className: $(ho.root, n && ho.mono, !o && ho.noResize, r),
      ...c
    }
  );
}), cv = "wk-Combobox_wrap", av = "wk-Combobox_list", lv = "wk-Combobox_option", uv = "wk-Combobox_label", dv = "wk-Combobox_mono", fv = "wk-Combobox_hint", pv = "wk-Combobox_empty", dt = {
  wrap: cv,
  list: av,
  option: lv,
  label: uv,
  mono: dv,
  hint: fv,
  empty: pv
}, mv = (e) => e.value ?? e.label;
function kb({
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
  const f = Je(), [p, m] = Pe(!1), [g, w] = Pe(-1), h = pt(null), v = Dt(() => p ? n(e) : [], [p, n, e]), b = p && (v.length > 0 || !!r), S = g >= 0 && v[g] ? `${f}-${g}` : void 0, y = (C) => {
    const x = v[C];
    x && (t(mv(x)), m(!1), w(-1));
  };
  return /* @__PURE__ */ D("div", { className: dt.wrap, children: [
    /* @__PURE__ */ d(
      Co,
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
const hv = "wk-SegmentedControl_root", vv = "wk-SegmentedControl_option", gv = "wk-SegmentedControl_fluid", vo = {
  root: hv,
  option: vv,
  fluid: gv
};
function Rb({
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
      className: $(vo.root, o && vo.fluid, r),
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
            className: vo.option,
            onClick: () => !u.disabled && n(u.value),
            children: u.label
          },
          u.value
        );
      })
    }
  );
}
const wv = "wk-Alert_root", bv = "wk-Alert_info", yv = "wk-Alert_success", Cv = "wk-Alert_warn", Sv = "wk-Alert_danger", xv = "wk-Alert_icon", _v = "wk-Alert_title", Ev = "wk-Alert_body", Tv = "wk-Alert_actions", Pv = "wk-Alert_close", kv = "wk-Alert_banner", tt = {
  root: wv,
  info: bv,
  success: yv,
  warn: Cv,
  danger: Sv,
  icon: xv,
  title: _v,
  body: Ev,
  actions: Tv,
  close: Pv,
  banner: kv
};
function Ib({
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
const Rv = "wk-EmptyState_root", Iv = "wk-EmptyState_icon", Dv = "wk-EmptyState_title", Ov = "wk-EmptyState_description", Av = "wk-EmptyState_actions", Ut = {
  root: Rv,
  icon: Iv,
  title: Dv,
  description: Ov,
  actions: Av
};
function Db({ icon: e, title: t, description: n, action: o, className: r }) {
  return /* @__PURE__ */ D("div", { className: $(Ut.root, r), children: [
    e && /* @__PURE__ */ d("span", { className: Ut.icon, "aria-hidden": "true", children: e }),
    /* @__PURE__ */ d("p", { className: Ut.title, children: t }),
    n && /* @__PURE__ */ d("p", { className: Ut.description, children: n }),
    o && /* @__PURE__ */ d("div", { className: Ut.actions, children: o })
  ] });
}
const Mv = "wk-Spinner_root", Nv = "wk-Spinner_sm", $v = "wk-Spinner_md", Lv = "wk-Spinner_lg", hs = {
  root: Mv,
  "wk-spinner-rotate": "wk-Spinner_wk-spinner-rotate",
  sm: Nv,
  md: $v,
  lg: Lv
};
function Ob({ size: e = "md", label: t = "Loading", className: n }) {
  return /* @__PURE__ */ D("span", { role: "status", children: [
    /* @__PURE__ */ d("span", { className: $(hs.root, hs[e], n), "aria-hidden": "true" }),
    t && /* @__PURE__ */ d(dn, { children: t })
  ] });
}
const Fv = "wk-Kbd_root", Bv = "wk-Kbd_group", go = {
  root: Fv,
  group: Bv
};
function Ab({ keys: e, className: t, children: n, ...o }) {
  return e != null && e.length ? /* @__PURE__ */ d("span", { className: go.group, ...o, children: e.map((r, s) => /* @__PURE__ */ d(Ko, { children: /* @__PURE__ */ d("kbd", { className: $(go.root, t), children: r }) }, `${r}-${s}`)) }) : /* @__PURE__ */ d("kbd", { className: $(go.root, t), ...o, children: n });
}
const Vv = "wk-SplitPane_root", Hv = "wk-SplitPane_horizontal", Wv = "wk-SplitPane_vertical", Uv = "wk-SplitPane_pane", Kv = "wk-SplitPane_handle", Kt = {
  root: Vv,
  horizontal: Hv,
  vertical: Wv,
  pane: Uv,
  handle: Kv
};
function Mb({
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
  return /* @__PURE__ */ D("div", { ref: u, className: $(Kt.root, Kt[t], c), children: [
    /* @__PURE__ */ d("div", { className: Kt.pane, style: { [m ? "width" : "height"]: n, flex: "none" }, children: e[0] }),
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
        className: Kt.handle,
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
    /* @__PURE__ */ d("div", { className: $(Kt.pane), style: { flex: 1 }, children: e[1] })
  ] });
}
const jv = "wk-Tree_root", zv = "wk-Tree_item", Gv = "wk-Tree_twisty", Yv = "wk-Tree_spacer", Xv = "wk-Tree_label", Xt = {
  root: jv,
  item: zv,
  twisty: Gv,
  spacer: Yv,
  label: Xv
}, Tc = nn(null);
function Nb({ children: e, onActivate: t, onToggle: n, className: o, ...r }) {
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
  }, m = Dt(
    () => ({ activeId: i, setActiveId: c, register: u }),
    [i, u]
  );
  return /* @__PURE__ */ d(Tc.Provider, { value: m, children: /* @__PURE__ */ d(
    "div",
    {
      ref: s,
      role: "tree",
      className: $(Xt.root, o),
      onKeyDown: p,
      ...r,
      children: e
    }
  ) });
}
function $b({
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
  const w = tn(Tc);
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
      className: $(Xt.item, g),
      style: { paddingInlineStart: (t - 1) * m + 4 },
      onFocus: () => w.setActiveId(e),
      onClick: () => {
        w.setActiveId(e), l == null || l(e);
      },
      children: [
        o ? /* @__PURE__ */ d(
          "span",
          {
            className: Xt.twisty,
            "data-expanded": !!r,
            onClick: (v) => {
              v.stopPropagation(), u == null || u(e, !r);
            },
            children: /* @__PURE__ */ d(vs, {})
          }
        ) : /* @__PURE__ */ d("span", { className: Xt.spacer }),
        i,
        /* @__PURE__ */ d("span", { className: Xt.label, children: n }),
        c
      ]
    }
  );
}
const qv = "wk-CommandPalette_overlay", Zv = "wk-CommandPalette_content", Jv = "wk-CommandPalette_search", Qv = "wk-CommandPalette_searchIcon", eg = "wk-CommandPalette_input", tg = "wk-CommandPalette_list", ng = "wk-CommandPalette_group", og = "wk-CommandPalette_heading", rg = "wk-CommandPalette_item", sg = "wk-CommandPalette_itemIcon", ig = "wk-CommandPalette_itemLabel", cg = "wk-CommandPalette_itemHint", ag = "wk-CommandPalette_empty", lg = "wk-CommandPalette_footer", fe = {
  overlay: qv,
  content: Zv,
  search: Jv,
  searchIcon: Qv,
  input: eg,
  list: tg,
  group: ng,
  heading: og,
  item: rg,
  itemIcon: sg,
  itemLabel: ig,
  itemHint: cg,
  empty: ag,
  footer: lg
}, Pc = nn(null);
function Lb({
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
  const g = Dt(
    () => (b, S) => {
      m.current.push({ id: b, run: S });
    },
    []
  );
  Gt(() => p(0), [n]);
  const w = m.current.length, h = m.current[f], v = Dt(
    () => ({ activeId: (h == null ? void 0 : h.id) ?? null, register: g, listId: u }),
    [h == null ? void 0 : h.id, g, u]
  );
  return /* @__PURE__ */ d(Oi, { open: e, onOpenChange: t, children: /* @__PURE__ */ D(Ni, { children: [
    /* @__PURE__ */ d($i, { className: fe.overlay }),
    /* @__PURE__ */ D(Li, { className: $(fe.content, l), children: [
      /* @__PURE__ */ d($o, { asChild: !0, children: /* @__PURE__ */ d(dn, { children: i }) }),
      /* @__PURE__ */ D(Pc.Provider, { value: v, children: [
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
function Fb({ heading: e, children: t }) {
  return /* @__PURE__ */ D("li", { className: fe.group, children: [
    e && /* @__PURE__ */ d("div", { className: fe.heading, children: e }),
    /* @__PURE__ */ d("ul", { role: "group", style: { listStyle: "none", margin: 0, padding: 0 }, children: t })
  ] });
}
function Bb({ id: e, children: t, onSelect: n, icon: o, hint: r }) {
  const s = tn(Pc);
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
function Vb({ children: e }) {
  return /* @__PURE__ */ d("li", { className: fe.empty, children: e });
}
const ug = "wk-KeyValueEditor_root", dg = "wk-KeyValueEditor_head", fg = "wk-KeyValueEditor_row", pg = "wk-KeyValueEditor_cell", mg = "wk-KeyValueEditor_actions", hg = "wk-KeyValueEditor_remove", vg = "wk-KeyValueEditor_footer", gg = "wk-KeyValueEditor_empty", $e = {
  root: ug,
  head: dg,
  row: fg,
  cell: pg,
  actions: mg,
  remove: hg,
  footer: vg,
  empty: gg
};
function Hb({
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
          Ff,
          {
            checked: S,
            onCheckedChange: (y) => h(v.id, { enabled: y === !0 }),
            "aria-label": `Enable ${v.key || `row ${b + 1}`}`
          }
        ) }),
        /* @__PURE__ */ d("span", { className: $e.cell, children: /* @__PURE__ */ d(
          Co,
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
          Co,
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
              /* @__PURE__ */ D(dn, { children: [
                "Remove ",
                v.key || `row ${b + 1}`
              ] })
            ]
          }
        ) })
      ] }, v.id);
    }),
    /* @__PURE__ */ d("div", { className: $e.footer, children: /* @__PURE__ */ D(
      Zc,
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
const wg = "wk-CodeSurface_root", bg = "wk-CodeSurface_toolbar", yg = "wk-CodeSurface_body", Cg = "wk-CodeSurface_pre", Sg = "wk-CodeSurface_status", qt = {
  root: wg,
  toolbar: bg,
  body: yg,
  pre: Cg,
  status: Sg
};
function Wb({ children: e, toolbar: t, status: n, className: o }) {
  return /* @__PURE__ */ D("div", { className: $(qt.root, o), children: [
    t && /* @__PURE__ */ d("div", { className: qt.toolbar, children: t }),
    /* @__PURE__ */ d("div", { className: qt.body, children: e }),
    n && /* @__PURE__ */ d("div", { className: qt.status, children: n })
  ] });
}
function Ub({ code: e, className: t, ...n }) {
  return /* @__PURE__ */ d("pre", { className: $(qt.pre, t), tabIndex: 0, ...n, children: /* @__PURE__ */ d("code", { children: e }) });
}
const xg = "wk-Form_section", _g = "wk-Form_sectionTop", Eg = "wk-Form_sectionHead", Tg = "wk-Form_sectionTitle", Pg = "wk-Form_sectionDesc", kg = "wk-Form_sectionBody", Rg = "wk-Form_row", Ig = "wk-Form_rowText", Dg = "wk-Form_rowLabel", Og = "wk-Form_rowDesc", Ag = "wk-Form_rowControl", Mg = "wk-Form_stacked", Se = {
  section: xg,
  sectionTop: _g,
  sectionHead: Eg,
  sectionTitle: Tg,
  sectionDesc: Pg,
  sectionBody: kg,
  row: Rg,
  rowText: Ig,
  rowLabel: Dg,
  rowDesc: Og,
  rowControl: Ag,
  stacked: Mg
};
function Kb({ title: e, description: t, children: n, action: o, className: r }) {
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
function jb({ label: e, description: t, children: n, stacked: o, className: r }) {
  return /* @__PURE__ */ D("div", { className: $(Se.row, o && Se.stacked, r), children: [
    /* @__PURE__ */ D("div", { className: Se.rowText, children: [
      /* @__PURE__ */ d("span", { className: Se.rowLabel, children: e }),
      t && /* @__PURE__ */ d("p", { className: Se.rowDesc, children: t })
    ] }),
    /* @__PURE__ */ d("div", { className: Se.rowControl, children: n })
  ] });
}
const Ng = "wk-HighlightText_mark", $g = {
  mark: Ng
};
function zb({ text: e, query: t, className: n }) {
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
  return /* @__PURE__ */ d("span", { className: n, children: s.map((c, l) => /* @__PURE__ */ d(Ko, { children: c.hit ? /* @__PURE__ */ d("mark", { className: $g.mark, children: c.chunk }) : c.chunk }, l)) });
}
const Lg = "wk-SkipToContent_root", Fg = {
  root: Lg
};
function Gb({
  targetId: e = "wk-main",
  children: t = "Skip to content",
  className: n
}) {
  return /* @__PURE__ */ d("a", { href: `#${e}`, className: $(Fg.root, n), children: t });
}
const Bg = "wk-Card_root", Vg = "wk-Card_outlined", Hg = "wk-Card_raised", Wg = "wk-Card_inset", Ug = "wk-Card_interactive", Kg = "wk-Card_top", jg = "wk-Card_icon", zg = "wk-Card_head", Gg = "wk-Card_title", Yg = "wk-Card_description", Xg = "wk-Card_action", qg = "wk-Card_body", Zg = "wk-Card_footer", be = {
  root: Bg,
  outlined: Vg,
  raised: Hg,
  inset: Wg,
  "padding-none": "wk-Card_padding-none",
  "padding-sm": "wk-Card_padding-sm",
  "padding-md": "wk-Card_padding-md",
  "padding-lg": "wk-Card_padding-lg",
  interactive: Ug,
  top: Kg,
  icon: jg,
  head: zg,
  title: Gg,
  description: Yg,
  action: Xg,
  body: qg,
  footer: Zg
};
function Yb({
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
  return f ? /* @__PURE__ */ d(Yo, { className: b, "aria-labelledby": w, ...m, children: /* @__PURE__ */ d("div", { children: v }) }) : u ? /* @__PURE__ */ d(
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
const Jg = "wk-Stepper_root", Qg = "wk-Stepper_horizontal", ew = "wk-Stepper_vertical", tw = "wk-Stepper_step", nw = "wk-Stepper_complete", ow = "wk-Stepper_current", rw = "wk-Stepper_marker", sw = "wk-Stepper_text", iw = "wk-Stepper_label", cw = "wk-Stepper_description", nt = {
  root: Jg,
  horizontal: Qg,
  vertical: ew,
  step: tw,
  complete: nw,
  current: ow,
  marker: rw,
  text: sw,
  label: iw,
  description: cw
};
function Xb({
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
          /* @__PURE__ */ d("span", { className: nt.marker, "aria-hidden": "true", children: u === "complete" ? /* @__PURE__ */ d(zo, {}) : i + 1 }),
          /* @__PURE__ */ D("span", { className: nt.text, children: [
            /* @__PURE__ */ D("span", { className: nt.label, children: [
              c,
              /* @__PURE__ */ d(dn, { children: u === "complete" ? " (completed)" : u === "current" ? " (current step)" : " (not started)" })
            ] }),
            l && /* @__PURE__ */ d("span", { className: nt.description, children: l })
          ] })
        ]
      },
      i
    );
  }) });
}
const aw = "wk-Table_wrapper", lw = "wk-Table_scroll", uw = "wk-Table_root", dw = "wk-Table_caption", fw = "wk-Table_th", pw = "wk-Table_td", mw = "wk-Table_numeric", hw = "wk-Table_captionHidden", vw = "wk-Table_row", gw = "wk-Table_interactive", ww = "wk-Table_sticky", ye = {
  wrapper: aw,
  scroll: lw,
  root: uw,
  caption: dw,
  th: fw,
  td: pw,
  numeric: mw,
  captionHidden: hw,
  row: vw,
  interactive: gw,
  sticky: ww
};
function qb({
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
const Zb = (e) => /* @__PURE__ */ d("thead", { ...e }), Jb = (e) => /* @__PURE__ */ d("tbody", { ...e }), Qb = ({ selected: e, className: t, ...n }) => /* @__PURE__ */ d("tr", { "data-selected": e || void 0, className: $(ye.row, t), ...n }), ey = ({ numeric: e, scope: t = "col", className: n, ...o }) => /* @__PURE__ */ d("th", { scope: t, className: $(ye.th, e && ye.numeric, n), ...o }), ty = ({ numeric: e, className: t, ...n }) => /* @__PURE__ */ d("td", { className: $(ye.td, e && ye.numeric, t), ...n }), bw = "wk-Badge_root", yw = "wk-Badge_neutral", Cw = "wk-Badge_accent", Sw = "wk-Badge_danger", xw = "wk-Badge_warn", _w = "wk-Badge_success", Ew = "wk-Badge_info", Tw = "wk-Badge_mono", wo = {
  root: bw,
  neutral: yw,
  accent: Cw,
  danger: Sw,
  warn: xw,
  success: _w,
  info: Ew,
  mono: Tw
};
function ny({ tone: e = "neutral", mono: t = !1, className: n, ...o }) {
  return /* @__PURE__ */ d("span", { className: $(wo.root, wo[e], t && wo.mono, n), ...o });
}
const Pw = "wk-AppShell_root", kw = "wk-AppShell_titlebar", Rw = "wk-AppShell_body", Iw = "wk-AppShell_sidebar", Dw = "wk-AppShell_main", jt = {
  root: Pw,
  titlebar: kw,
  body: Rw,
  sidebar: Iw,
  main: Dw
};
function oy({
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
      className: $(jt.root, c),
      style: r ? { "--wk-sidebar-w": r } : void 0,
      children: [
        e && /* @__PURE__ */ d(
          "header",
          {
            className: jt.titlebar,
            "data-inset-controls": n || void 0,
            ...t ? { "data-tauri-drag-region": "" } : {},
            children: e
          }
        ),
        /* @__PURE__ */ D("div", { className: jt.body, children: [
          o && /* @__PURE__ */ d("nav", { className: jt.sidebar, "aria-label": "Primary", children: o }),
          /* @__PURE__ */ d("main", { id: i, className: jt.main, tabIndex: -1, children: s })
        ] })
      ]
    }
  );
}
const Ow = {
  1: "2xl",
  2: "xl",
  3: "lg",
  4: "md",
  5: "sm",
  6: "xs"
}, kc = {
  xs: Ce.xs,
  sm: Ce.sm,
  md: Ce.md,
  lg: Ce.lg,
  xl: Ce.xl,
  "2xl": Ce.xxl
}, ry = Ee(function({ level: t, size: n, className: o, ...r }, s) {
  const i = `h${t}`, c = kc[n ?? Ow[t]];
  return /* @__PURE__ */ d(i, { ref: s, className: $(Ce.heading, c, o), ...r });
}), sy = Ee(function({ as: t = "p", size: n = "md", tone: o = "default", mono: r = !1, className: s, ...i }, c) {
  return /* @__PURE__ */ d(
    t,
    {
      ref: c,
      className: $(
        Ce.text,
        kc[n],
        o !== "default" && Ce[o],
        r && Ce.mono,
        s
      ),
      ...i
    }
  );
}), iy = Ee(function({ external: t = !1, nofollow: n = !1, asChild: o = !1, className: r, rel: s, target: i, ...c }, l) {
  const u = o ? Yo : "a", f = new Set((s ?? "").split(/\s+/).filter(Boolean));
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
}), Aw = "wk-Media_image", Mw = "wk-Media_skeleton", Rc = {
  image: Aw,
  skeleton: Mw
}, cy = Ee(function({ width: t, height: n, aspectRatio: o, priority: r = !1, className: s, style: i, alt: c, ...l }, u) {
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
      className: $(Rc.image, s),
      style: { ...f ? { "--wk-image-ar": String(f) } : null, ...i },
      ...l
    }
  );
});
function ay({
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
      className: $(Rc.skeleton, o),
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
function Nw({ data: e, nonce: t }) {
  const n = JSON.stringify(e).replace(/</g, "\\u003c");
  return /* @__PURE__ */ d("script", { type: "application/ld+json", nonce: t, dangerouslySetInnerHTML: { __html: n } });
}
const $w = "wk-Breadcrumbs_root", Lw = "wk-Breadcrumbs_list", Fw = "wk-Breadcrumbs_item", Bw = "wk-Breadcrumbs_link", Vw = "wk-Breadcrumbs_sep", zt = {
  root: $w,
  list: Lw,
  item: Fw,
  link: Bw,
  sep: Vw
};
function ly({ items: e, origin: t, className: n }) {
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
    /* @__PURE__ */ d("nav", { "aria-label": "Breadcrumb", className: $(zt.root, n), children: /* @__PURE__ */ d("ol", { className: zt.list, children: e.map((r, s) => {
      const i = s === e.length - 1;
      return /* @__PURE__ */ D(Ko, { children: [
        /* @__PURE__ */ d("li", { className: zt.item, children: r.href && !i ? /* @__PURE__ */ d("a", { className: zt.link, href: r.href, children: r.label }) : /* @__PURE__ */ d("span", { "aria-current": i ? "page" : void 0, children: r.label }) }),
        !i && /* @__PURE__ */ d("li", { className: zt.sep, "aria-hidden": "true", children: "/" })
      ] }, `${r.label}-${s}`);
    }) }) }),
    /* @__PURE__ */ d(Nw, { data: o })
  ] });
}
export {
  Ib as Alert,
  oy as AppShell,
  ny as Badge,
  ly as Breadcrumbs,
  Zc as Button,
  Yb as Card,
  zo as CheckIcon,
  Ff as Checkbox,
  vs as ChevronDownIcon,
  Mn as CloseIcon,
  Ub as CodeBlock,
  Wb as CodeSurface,
  kb as Combobox,
  Vb as CommandEmpty,
  Fb as CommandGroup,
  Bb as CommandItem,
  Lb as CommandPalette,
  ob as Dialog,
  rb as DialogClose,
  Db as EmptyState,
  Gw as Field,
  Kb as FormSection,
  ry as Heading,
  zb as HighlightText,
  cy as Image,
  Co as Input,
  Nw as JsonLd,
  Ab as Kbd,
  Hb as KeyValueEditor,
  iy as Link,
  fb as Menu,
  pb as MenuItem,
  mb as MenuLabel,
  hb as MenuSeparator,
  Rb as SegmentedControl,
  Xw as Select,
  Zw as SelectGroup,
  qw as SelectItem,
  Jw as SelectSeparator,
  jb as SettingRow,
  ay as Skeleton,
  Gb as SkipToContent,
  Ob as Spinner,
  Mb as SplitPane,
  Xb as Stepper,
  eb as Switch,
  qb as Table,
  yb as Tabs,
  xb as TabsContent,
  Cb as TabsList,
  Sb as TabsTrigger,
  Jb as Tbody,
  ty as Td,
  sy as Text,
  Pb as Textarea,
  ey as Th,
  Zb as Thead,
  Kw as ThemeProvider,
  zw as ThemeScript,
  Eb as ToastProvider,
  wb as Tooltip,
  gb as TooltipProvider,
  Qb as Tr,
  Nb as Tree,
  $b as TreeItem,
  dn as VisuallyHidden,
  $ as cn,
  Xo as useField,
  jw as useTheme,
  Tb as useToast
};
//# sourceMappingURL=index.js.map
