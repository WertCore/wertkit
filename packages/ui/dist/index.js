var Er = (e) => {
  throw TypeError(e);
};
var Tr = (e, t, n) => t.has(e) || Er("Cannot " + n);
var le = (e, t, n) => (Tr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Pr = (e, t, n) => t.has(e) ? Er("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Un = (e, t, n, o) => (Tr(e, t, "write to private field"), o ? o.call(e, n) : t.set(e, n), n);
import { jsx as h, jsxs as H, Fragment as Ge } from "react/jsx-runtime";
import * as a from "react";
import { useState as Be, useEffect as tn, useCallback as xt, useMemo as ko, useContext as Oo, createContext as Ao, forwardRef as Ce, useId as jt, useLayoutEffect as wc, useRef as Sn, Fragment as rs } from "react";
import * as Tt from "react-dom";
function W(...e) {
  return e.filter((t) => typeof t == "string" && t !== "").join(" ");
}
const Do = (e) => ({
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
}), ss = (e) => /* @__PURE__ */ h("svg", { ...Do(e), children: /* @__PURE__ */ h("path", { d: "M3 8.5 6.5 12 13 4.5" }) }), bc = (e) => /* @__PURE__ */ h("svg", { ...Do(e), children: /* @__PURE__ */ h("path", { d: "m4 6 4 4 4-4" }) }), Mo = (e) => /* @__PURE__ */ h("svg", { ...Do(e), children: /* @__PURE__ */ h("path", { d: "M4 4l8 8M12 4l-8 8" }) }), is = Ao(null);
function yc(e) {
  if (!e || typeof window > "u") return {};
  try {
    return JSON.parse(window.localStorage.getItem(e) ?? "{}");
  } catch {
    return {};
  }
}
function hg({
  children: e,
  theme: t,
  defaultTheme: n = "system",
  defaultDensity: o = "normal",
  storageKey: r = "wertkit-theme",
  target: s = "root"
}) {
  const [i, c] = Be(n), [l, u] = Be(o), [d, f] = Be(!1), [p, g] = Be(null);
  tn(() => {
    const b = yc(r);
    b.theme && c(b.theme), b.density && u(b.density);
  }, [r]);
  const w = t ?? i;
  tn(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function") return;
    const b = window.matchMedia("(prefers-color-scheme: dark)"), y = () => f(b.matches);
    return y(), b.addEventListener("change", y), () => b.removeEventListener("change", y);
  }, []);
  const m = w === "system" ? d ? "dark" : "light" : w;
  tn(() => {
    const b = s === "self" ? p : document.documentElement;
    b && (b.setAttribute("data-theme", m), b.setAttribute("data-density", l));
  }, [m, l, s, p]), tn(() => {
    if (!(!r || typeof window > "u"))
      try {
        window.localStorage.setItem(r, JSON.stringify({ theme: w, density: l }));
      } catch {
      }
  }, [w, l, r]);
  const v = xt((b) => c(b), []), C = xt((b) => u(b), []), S = ko(
    () => ({ theme: w, resolvedTheme: m, setTheme: v, density: l, setDensity: C }),
    [w, m, v, l, C]
  );
  return /* @__PURE__ */ h(is.Provider, { value: S, children: s === "self" ? /* @__PURE__ */ h("div", { ref: g, children: e }) : e });
}
function mg() {
  const e = Oo(is);
  if (!e) throw new Error("useTheme must be used inside <ThemeProvider>");
  return e;
}
function vg({
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
  return /* @__PURE__ */ h("script", { nonce: o, dangerouslySetInnerHTML: { __html: r } });
}
var Cc = Object.defineProperty, No = (e, t) => Cc(e, "name", { value: t, configurable: !0 });
function io(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
No(io, "setRef");
function cs(...e) {
  return (t) => {
    let n = !1;
    const o = e.map((r) => {
      const s = io(r, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let r = 0; r < o.length; r++) {
          const s = o[r];
          typeof s == "function" ? s() : io(e[r], null);
        }
      };
  };
}
No(cs, "composeRefs");
function j(...e) {
  return a.useCallback(cs(...e), e);
}
No(j, "useComposedRefs");
var Sc = Object.defineProperty, Ee = (e, t) => Sc(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function Me(e) {
  const t = a.forwardRef((n, o) => {
    let { children: r, ...s } = n, i = null, c = !1;
    const l = [];
    co(r) && typeof nn == "function" && (r = nn(r._payload)), a.Children.forEach(r, (p) => {
      var g;
      if (ps(p)) {
        c = !0;
        const w = p;
        let m = "child" in w.props ? w.props.child : w.props.children;
        co(m) && typeof nn == "function" && (m = nn(m._payload)), i = xc(w, m), l.push((g = i == null ? void 0 : i.props) == null ? void 0 : g.children);
      } else
        l.push(p);
    }), i ? i = a.cloneElement(i, void 0, l) : (
      // A `Slottable` was found but it didn't resolve to a single element (e.g.
      // it wrapped multiple elements, text, or a render-prop `child` that
      // wasn't an element). Don't fall back to treating the `Slottable` wrapper
      // itself as the slot target — throw a descriptive error below instead.
      !c && a.Children.count(r) === 1 && a.isValidElement(r) && (i = r)
    );
    const u = i ? fs(i) : void 0, d = j(o, u);
    if (!i) {
      if (r || r === 0)
        throw new Error(
          c ? Pc(e) : Tc(e)
        );
      return r;
    }
    const f = ds(s, i.props ?? {});
    return i.type !== a.Fragment && (f.ref = o ? d : u), a.cloneElement(i, f);
  });
  return t.displayName = `${e}.Slot`, t;
}
Ee(Me, "createSlot");
var as = /* @__PURE__ */ Me("Slot"), ls = Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function us(e) {
  const t = /* @__PURE__ */ Ee((n) => "child" in n ? n.children(n.child) : n.children, "Slottable");
  return t.displayName = `${e}.Slottable`, t.__radixId = ls, t;
}
Ee(us, "createSlottable");
var xc = /* @__PURE__ */ Ee((e, t) => {
  if ("child" in e.props) {
    const n = e.props.child;
    return a.isValidElement(n) ? a.cloneElement(n, void 0, e.props.children(n.props.children)) : null;
  }
  return a.isValidElement(t) ? t : null;
}, "getSlottableElementFromSlottable");
function ds(e, t) {
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
Ee(ds, "mergeProps");
function fs(e) {
  var o, r;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
Ee(fs, "getElementRef");
function ps(e) {
  return a.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === ls;
}
Ee(ps, "isSlottable");
var Ec = Symbol.for("react.lazy");
function co(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === Ec && "_payload" in e && hs(e._payload);
}
Ee(co, "isLazyComponent");
function hs(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
Ee(hs, "isPromiseLike");
var Tc = /* @__PURE__ */ Ee((e) => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"), Pc = /* @__PURE__ */ Ee((e) => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"), nn = a[" use ".trim().toString()];
const _c = "wk-Button_root", Rc = "wk-Button_sm", Ic = "wk-Button_md", kc = "wk-Button_lg", Oc = "wk-Button_iconOnly", Ac = "wk-Button_primary", Dc = "wk-Button_secondary", Mc = "wk-Button_ghost", Nc = "wk-Button_danger", $c = "wk-Button_spinner", At = {
  root: _c,
  sm: Rc,
  md: Ic,
  lg: kc,
  iconOnly: Oc,
  primary: Ac,
  secondary: Dc,
  ghost: Mc,
  danger: Nc,
  spinner: $c,
  "wk-spin": "wk-Button_wk-spin"
}, gg = Ce(function({
  variant: t = "secondary",
  size: n = "md",
  iconOnly: o = !1,
  loading: r = !1,
  startIcon: s,
  endIcon: i,
  asChild: c = !1,
  className: l,
  children: u,
  disabled: d,
  type: f,
  ...p
}, g) {
  return /* @__PURE__ */ H(
    c ? as : "button",
    {
      ref: g,
      type: c ? void 0 : f ?? "button",
      disabled: d || r,
      "data-loading": r || void 0,
      className: W(
        At.root,
        At[t],
        At[n],
        o && At.iconOnly,
        l
      ),
      ...p,
      children: [
        r ? /* @__PURE__ */ h("span", { className: At.spinner, "aria-hidden": "true" }) : s,
        u,
        !r && i
      ]
    }
  );
}), Lc = "wk-Field_root", Fc = "wk-Field_label", Bc = "wk-Field_required", Vc = "wk-Field_hint", Hc = "wk-Field_error", Dt = {
  root: Lc,
  label: Fc,
  required: Bc,
  hint: Vc,
  error: Hc
}, ms = Ao(null), $o = () => Oo(ms);
function wg({ label: e, hint: t, error: n, required: o, children: r, className: s }) {
  const i = jt(), c = `${i}-input`, l = `${i}-hint`, u = `${i}-error`, d = !!n, f = [n ? u : null, t ? l : null].filter(Boolean).join(" ") || void 0;
  return /* @__PURE__ */ h(ms.Provider, { value: { inputId: c, describedBy: f, invalid: d }, children: /* @__PURE__ */ H("div", { className: W(Dt.root, s), children: [
    e && /* @__PURE__ */ H("label", { className: Dt.label, htmlFor: c, children: [
      e,
      o && /* @__PURE__ */ h("span", { className: Dt.required, "aria-hidden": "true", children: "*" })
    ] }),
    r,
    n ? /* @__PURE__ */ h("p", { className: Dt.error, id: u, role: "alert", children: n }) : t && /* @__PURE__ */ h("p", { className: Dt.hint, id: l, children: t })
  ] }) });
}
const Wc = "wk-Input_root", Uc = "wk-Input_mono", jc = "wk-Input_shell", Kc = "wk-Input_slot", zc = "wk-Input_start", Gc = "wk-Input_end", Yc = "wk-Input_hasStart", Xc = "wk-Input_hasEnd", qc = "wk-Input_sm", Zc = "wk-Input_md", Jc = "wk-Input_lg", Ie = {
  root: Wc,
  mono: Uc,
  shell: jc,
  slot: Kc,
  start: zc,
  end: Gc,
  hasStart: Yc,
  hasEnd: Xc,
  sm: qc,
  md: Zc,
  lg: Jc
}, Qc = Ce(function({
  size: t = "md",
  invalid: n,
  mono: o = !1,
  startSlot: r,
  endSlot: s,
  className: i,
  id: c,
  "aria-describedby": l,
  ...u
}, d) {
  const f = $o(), p = n ?? (f == null ? void 0 : f.invalid) ?? !1, g = /* @__PURE__ */ h(
    "input",
    {
      ref: d,
      id: c ?? (f == null ? void 0 : f.inputId),
      "aria-invalid": p || void 0,
      "aria-describedby": l ?? (f == null ? void 0 : f.describedBy),
      className: W(
        Ie.root,
        Ie[t],
        o && Ie.mono,
        r && Ie.hasStart,
        s && Ie.hasEnd,
        !r && !s && i
      ),
      ...u
    }
  );
  return !r && !s ? g : /* @__PURE__ */ H("span", { className: W(Ie.shell, i), "data-invalid": p || void 0, children: [
    r && /* @__PURE__ */ h("span", { className: W(Ie.slot, Ie.start), "aria-hidden": "true", children: r }),
    g,
    s && /* @__PURE__ */ h("span", { className: W(Ie.slot, Ie.end), children: s })
  ] });
});
var ea = Object.defineProperty, ta = (e, t) => ea(e, "name", { value: t, configurable: !0 });
function ao(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
ta(ao, "clamp");
var na = Object.defineProperty, Pt = (e, t) => na(e, "name", { value: t, configurable: !0 }), vs = !!(typeof window < "u" && window.document && window.document.createElement);
function k(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return /* @__PURE__ */ Pt(function(r) {
    if (e == null || e(r), n === !1 || !r || !r.defaultPrevented)
      return t == null ? void 0 : t(r);
  }, "handleEvent");
}
Pt(k, "composeEventHandlers");
function oa(e) {
  var t;
  if (!vs)
    throw new Error("Cannot access window outside of the DOM");
  return ((t = e == null ? void 0 : e.ownerDocument) == null ? void 0 : t.defaultView) ?? window;
}
Pt(oa, "getOwnerWindow");
function lo(e) {
  if (!vs)
    throw new Error("Cannot access document outside of the DOM");
  return (e == null ? void 0 : e.ownerDocument) ?? document;
}
Pt(lo, "getOwnerDocument");
function gs(e, t = !1) {
  const { activeElement: n } = lo(e);
  if (!(n != null && n.nodeName))
    return null;
  if (ws(n) && n.contentDocument)
    return gs(n.contentDocument.body, t);
  if (t) {
    const o = n.getAttribute("aria-activedescendant");
    if (o) {
      const r = lo(n).getElementById(o);
      if (r)
        return r;
    }
  }
  return n;
}
Pt(gs, "getActiveElement");
function ws(e) {
  return e.tagName === "IFRAME";
}
Pt(ws, "isFrame");
var ra = Object.defineProperty, be = (e, t) => ra(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function sa(e, t) {
  const n = a.createContext(t);
  n.displayName = e + "Context";
  const o = /* @__PURE__ */ be((s) => {
    const { children: i, ...c } = s, l = a.useMemo(() => c, Object.values(c));
    return /* @__PURE__ */ h(n.Provider, { value: l, children: i });
  }, "Provider");
  o.displayName = e + "Provider";
  function r(s, i = {}) {
    const { optional: c = !1 } = i, l = a.useContext(n);
    if (l) return l;
    if (t !== void 0) return t;
    if (!c)
      throw new Error(`\`${s}\` must be used within \`${e}\``);
  }
  return be(r, "useContext"), [o, r];
}
be(sa, "createContext");
// @__NO_SIDE_EFFECTS__
function pe(e, t = []) {
  let n = [];
  function o(s, i) {
    const c = a.createContext(i);
    c.displayName = s + "Context";
    const l = n.length;
    n = [...n, i];
    const u = /* @__PURE__ */ be((f) => {
      var C;
      const { scope: p, children: g, ...w } = f, m = ((C = p == null ? void 0 : p[e]) == null ? void 0 : C[l]) || c, v = a.useMemo(() => w, Object.values(w));
      return /* @__PURE__ */ h(m.Provider, { value: v, children: g });
    }, "Provider");
    u.displayName = s + "Provider";
    function d(f, p, g = {}) {
      var C;
      const { optional: w = !1 } = g, m = ((C = p == null ? void 0 : p[e]) == null ? void 0 : C[l]) || c, v = a.useContext(m);
      if (v) return v;
      if (i !== void 0) return i;
      if (!w)
        throw new Error(`\`${f}\` must be used within \`${s}\``);
    }
    return be(d, "useContext"), [u, d];
  }
  be(o, "createContext");
  const r = /* @__PURE__ */ be(() => {
    const s = n.map((i) => a.createContext(i));
    return /* @__PURE__ */ be(function(c) {
      const l = (c == null ? void 0 : c[e]) || s;
      return a.useMemo(
        () => ({ [`__scope${e}`]: { ...c, [e]: l } }),
        [c, l]
      );
    }, "useScope");
  }, "createScope");
  return r.scopeName = e, [o, bs(r, ...t)];
}
be(pe, "createContextScope");
function bs(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = /* @__PURE__ */ be(() => {
    const o = e.map((r) => ({
      useScope: r(),
      scopeName: r.scopeName
    }));
    return /* @__PURE__ */ be(function(s) {
      const i = o.reduce((c, { useScope: l, scopeName: u }) => {
        const f = l(s)[`__scope${u}`];
        return { ...c, ...f };
      }, {});
      return a.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    }, "useComposedScopes");
  }, "createScope");
  return n.scopeName = t.scopeName, n;
}
be(bs, "composeContextScopes");
var ia = Object.defineProperty, ie = (e, t) => ia(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function Kt(e) {
  const t = e + "CollectionProvider", [n, o] = /* @__PURE__ */ pe(t), [r, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = /* @__PURE__ */ ie((m) => {
    const { scope: v, children: C } = m, S = a.useRef(null), b = a.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ h(r, { scope: v, itemMap: b, collectionRef: S, children: C });
  }, "CollectionProvider");
  i.displayName = t;
  const c = e + "CollectionSlot", l = /* @__PURE__ */ Me(c), u = a.forwardRef(
    (m, v) => {
      const { scope: C, children: S } = m, b = s(c, C), y = j(v, b.collectionRef);
      return /* @__PURE__ */ h(l, { ref: y, children: S });
    }
  );
  u.displayName = c;
  const d = e + "CollectionItemSlot", f = "data-radix-collection-item", p = /* @__PURE__ */ Me(d), g = a.forwardRef(
    (m, v) => {
      const { scope: C, children: S, ...b } = m, y = a.useRef(null), x = j(v, y), E = s(d, C);
      return a.useEffect(() => (E.itemMap.set(y, { ref: y, ...b }), () => void E.itemMap.delete(y))), /* @__PURE__ */ h(p, { [f]: "", ref: x, children: S });
    }
  );
  g.displayName = d;
  function w(m) {
    const v = s(e + "CollectionConsumer", m);
    return a.useCallback(() => {
      const S = v.collectionRef.current;
      if (!S) return [];
      const b = Array.from(S.querySelectorAll(`[${f}]`));
      return Array.from(v.itemMap.values()).sort(
        (E, T) => b.indexOf(E.ref.current) - b.indexOf(T.ref.current)
      );
    }, [v.collectionRef, v.itemMap]);
  }
  return ie(w, "useCollection"), [
    { Provider: i, Slot: u, ItemSlot: g },
    w,
    o
  ];
}
ie(Kt, "createCollection");
var _r = /* @__PURE__ */ new WeakMap(), ne, me, jn = (me = class extends Map {
  constructor(n) {
    super(n);
    Pr(this, ne);
    Un(this, ne, [...super.keys()]), _r.set(this, !0);
  }
  set(n, o) {
    return _r.get(this) && (this.has(n) ? le(this, ne)[le(this, ne).indexOf(n)] = n : le(this, ne).push(n)), super.set(n, o), this;
  }
  insert(n, o, r) {
    const s = this.has(o), i = le(this, ne).length, c = Lo(n);
    let l = c >= 0 ? c : i + c;
    const u = l < 0 || l >= i ? -1 : l;
    if (u === this.size || s && u === this.size - 1 || u === -1)
      return this.set(o, r), this;
    const d = this.size + (s ? 0 : 1);
    c < 0 && l++;
    const f = [...le(this, ne)];
    let p, g = !1;
    for (let w = l; w < d; w++)
      if (l === w) {
        let m = f[w];
        f[w] === o && (m = f[w + 1]), s && this.delete(o), p = this.get(m), this.set(o, r);
      } else {
        !g && f[w - 1] === o && (g = !0);
        const m = f[g ? w : w - 1], v = p;
        p = this.get(m), this.delete(m), this.set(m, v);
      }
    return this;
  }
  with(n, o, r) {
    const s = new me(this);
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
    return Un(this, ne, []), super.clear();
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
    const o = fn(le(this, ne), n);
    if (o !== void 0)
      return this.get(o);
  }
  entryAt(n) {
    const o = fn(le(this, ne), n);
    if (o !== void 0)
      return [o, this.get(o)];
  }
  indexOf(n) {
    return le(this, ne).indexOf(n);
  }
  keyAt(n) {
    return fn(le(this, ne), n);
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
    return new me(r);
  }
  map(n, o) {
    const r = [];
    let s = 0;
    for (const i of this)
      r.push([i[0], Reflect.apply(n, o, [i, s, this])]), s++;
    return new me(r);
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
    return new me(o);
  }
  toReversed() {
    const n = new me();
    for (let o = this.size - 1; o >= 0; o--) {
      const r = this.keyAt(o), s = this.get(r);
      n.set(r, s);
    }
    return n;
  }
  toSpliced(...n) {
    const o = [...this.entries()];
    return o.splice(...n), new me(o);
  }
  slice(n, o) {
    const r = new me();
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
}, ne = new WeakMap(), ie(me, "OrderedDict"), me);
function fn(e, t) {
  if ("at" in Array.prototype)
    return Array.prototype.at.call(e, t);
  const n = ys(e, t);
  return n === -1 ? void 0 : e[n];
}
ie(fn, "at");
function ys(e, t) {
  const n = e.length, o = Lo(t), r = o >= 0 ? o : n + o;
  return r < 0 || r >= n ? -1 : r;
}
ie(ys, "toSafeIndex");
function Lo(e) {
  return e !== e || e === 0 ? 0 : Math.trunc(e);
}
ie(Lo, "toSafeInteger");
// @__NO_SIDE_EFFECTS__
function ca(e) {
  const t = e + "CollectionProvider", [n, o] = /* @__PURE__ */ pe(t), [r, s] = n(
    t,
    {
      collectionElement: null,
      collectionRef: { current: null },
      collectionRefObject: { current: null },
      itemMap: new jn(),
      setItemMap: /* @__PURE__ */ ie(() => {
      }, "setItemMap")
    }
  ), i = /* @__PURE__ */ ie(({ state: b, ...y }) => b ? /* @__PURE__ */ h(l, { ...y, state: b }) : /* @__PURE__ */ h(c, { ...y }), "CollectionProvider");
  i.displayName = t;
  const c = /* @__PURE__ */ ie((b) => {
    const y = v();
    return /* @__PURE__ */ h(l, { ...b, state: y });
  }, "CollectionInit");
  c.displayName = t + "Init";
  const l = /* @__PURE__ */ ie((b) => {
    const { scope: y, children: x, state: E } = b, T = a.useRef(null), [R, _] = a.useState(
      null
    ), O = j(T, _), [L, A] = E;
    return a.useEffect(() => {
      if (!R) return;
      const D = xs(() => {
      });
      return D.observe(R, {
        childList: !0,
        subtree: !0
      }), () => {
        D.disconnect();
      };
    }, [R]), /* @__PURE__ */ h(
      r,
      {
        scope: y,
        itemMap: L,
        setItemMap: A,
        collectionRef: O,
        collectionRefObject: T,
        collectionElement: R,
        children: x
      }
    );
  }, "CollectionProviderImpl");
  l.displayName = t + "Impl";
  const u = e + "CollectionSlot", d = /* @__PURE__ */ Me(u), f = a.forwardRef(
    (b, y) => {
      const { scope: x, children: E } = b, T = s(u, x), R = j(y, T.collectionRef);
      return /* @__PURE__ */ h(d, { ref: R, children: E });
    }
  );
  f.displayName = u;
  const p = e + "CollectionItemSlot", g = "data-radix-collection-item", w = /* @__PURE__ */ Me(p), m = a.forwardRef(
    (b, y) => {
      const { scope: x, children: E, ...T } = b, R = a.useRef(null), [_, O] = a.useState(null), L = j(y, R, O), A = s(p, x), { setItemMap: D } = A, $ = a.useRef(T);
      Cs($.current, T) || ($.current = T);
      const U = $.current;
      return a.useEffect(() => {
        const P = U;
        return D((M) => _ ? M.has(_) ? M.set(_, { ...P, element: _ }).toSorted(uo) : (M.set(_, { ...P, element: _ }), M.toSorted(uo)) : M), () => {
          D((M) => !_ || !M.has(_) ? M : (M.delete(_), new jn(M)));
        };
      }, [_, U, D]), /* @__PURE__ */ h(w, { [g]: "", ref: L, children: E });
    }
  );
  m.displayName = p;
  function v() {
    return a.useState(new jn());
  }
  ie(v, "useInitCollection");
  function C(b) {
    const { itemMap: y } = s(e + "CollectionConsumer", b);
    return y;
  }
  return ie(C, "useCollection"), [
    { Provider: i, Slot: f, ItemSlot: m },
    {
      createCollectionScope: o,
      useCollection: C,
      useInitCollection: v
    }
  ];
}
ie(ca, "createCollection");
function Cs(e, t) {
  if (e === t) return !0;
  if (typeof e != "object" || typeof t != "object" || e == null || t == null) return !1;
  const n = Object.keys(e), o = Object.keys(t);
  if (n.length !== o.length) return !1;
  for (const r of n)
    if (!Object.prototype.hasOwnProperty.call(t, r) || e[r] !== t[r]) return !1;
  return !0;
}
ie(Cs, "shallowEqual");
function Ss(e, t) {
  return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING);
}
ie(Ss, "isElementPreceding");
function uo(e, t) {
  return !e[1].element || !t[1].element ? 0 : Ss(e[1].element, t[1].element) ? -1 : 1;
}
ie(uo, "sortByDocumentPosition");
function xs(e) {
  return new MutationObserver((n) => {
    for (const o of n)
      if (o.type === "childList") {
        e();
        return;
      }
  });
}
ie(xs, "getChildListObserver");
var aa = Object.defineProperty, la = (e, t) => aa(e, "name", { value: t, configurable: !0 }), ua = a.createContext(void 0);
function zt(e) {
  const t = a.useContext(ua);
  return e || t || "ltr";
}
la(zt, "useDirection");
var da = Object.defineProperty, fa = (e, t) => da(e, "name", { value: t, configurable: !0 }), pa = [
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
], B = pa.reduce((e, t) => {
  const n = /* @__PURE__ */ Me(`Primitive.${t}`), o = a.forwardRef((r, s) => {
    const { asChild: i, ...c } = r, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ h(l, { ...c, ref: s });
  });
  return o.displayName = `Primitive.${t}`, { ...e, [t]: o };
}, {});
function xn(e, t) {
  e && Tt.flushSync(() => e.dispatchEvent(t));
}
fa(xn, "dispatchDiscreteCustomEvent");
var ha = Object.defineProperty, ma = (e, t) => ha(e, "name", { value: t, configurable: !0 });
function ue(e) {
  const t = a.useRef(e);
  return a.useEffect(() => {
    t.current = e;
  }), a.useMemo(() => ((...n) => {
    var o;
    return (o = t.current) == null ? void 0 : o.call(t, ...n);
  }), []);
}
ma(ue, "useCallbackRef");
var va = Object.defineProperty, re = (e, t) => va(e, "name", { value: t, configurable: !0 }), fo = "dismissableLayer.update", ga = "dismissableLayer.pointerDownOutside", wa = "dismissableLayer.focusOutside", Rr, Fo = a.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set(),
  // Outside elements that belong to a layer's own dismiss affordance (eg, a
  // dialog overlay). Pressing them should dismiss the layer regardless of
  // whether or not they stop propagation.
  //
  // See https://github.com/radix-ui/primitives/issues/3346
  dismissableSurfaces: /* @__PURE__ */ new Set()
}), Gt = /* @__PURE__ */ a.forwardRef(
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
      ...d
    } = t, f = a.useContext(Fo), [p, g] = a.useState(null), w = (p == null ? void 0 : p.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, m] = a.useState({}), v = j(n, g), C = Array.from(f.layers), [S] = [
      ...f.layersWithOutsidePointerEventsDisabled
    ].slice(-1), b = S ? C.indexOf(S) : -1, y = p ? C.indexOf(p) : -1, x = f.layersWithOutsidePointerEventsDisabled.size > 0, E = y >= b, T = a.useRef(!1), R = Ts(
      (A) => {
        i == null || i(A), l == null || l(A), A.defaultPrevented || u == null || u();
      },
      {
        ownerDocument: w,
        deferPointerDownOutside: r,
        isDeferredPointerDownOutsideRef: T,
        dismissableSurfaces: f.dismissableSurfaces,
        shouldHandlePointerDownOutside: a.useCallback(
          (A) => {
            if (!(A instanceof Node))
              return !1;
            const D = [...f.branches].some(
              ($) => $.contains(A)
            );
            return E && !D;
          },
          [f.branches, E]
        )
      }
    ), _ = Ps((A) => {
      if (r && T.current)
        return;
      const D = A.target;
      [...f.branches].some((U) => U.contains(D)) || (c == null || c(A), l == null || l(A), A.defaultPrevented || u == null || u());
    }, w), O = p ? y === C.length - 1 : !1, L = ue((A) => {
      A.key === "Escape" && (s == null || s(A), !A.defaultPrevented && u && (A.preventDefault(), u()));
    });
    return a.useEffect(() => {
      if (O)
        return w.addEventListener("keydown", L, { capture: !0 }), () => w.removeEventListener("keydown", L, { capture: !0 });
    }, [w, O, L]), a.useEffect(() => {
      if (p)
        return o && (f.layersWithOutsidePointerEventsDisabled.size === 0 && (Rr = w.body.style.pointerEvents, w.body.style.pointerEvents = "none"), f.layersWithOutsidePointerEventsDisabled.add(p)), f.layers.add(p), po(), () => {
          o && (f.layersWithOutsidePointerEventsDisabled.delete(p), f.layersWithOutsidePointerEventsDisabled.size === 0 && (w.body.style.pointerEvents = Rr));
        };
    }, [p, w, o, f]), a.useEffect(() => () => {
      p && (f.layers.delete(p), f.layersWithOutsidePointerEventsDisabled.delete(p), po());
    }, [p, f]), a.useEffect(() => {
      const A = /* @__PURE__ */ re(() => m({}), "handleUpdate");
      return document.addEventListener(fo, A), () => document.removeEventListener(fo, A);
    }, []), /* @__PURE__ */ h(
      B.div,
      {
        ...d,
        ref: v,
        style: {
          pointerEvents: x ? E ? "auto" : "none" : void 0,
          ...t.style
        },
        onFocusCapture: k(t.onFocusCapture, _.onFocusCapture),
        onBlurCapture: k(t.onBlurCapture, _.onBlurCapture),
        onPointerDownCapture: k(
          t.onPointerDownCapture,
          R.onPointerDownCapture
        )
      }
    );
  }, "DismissableLayer")
), ba = /* @__PURE__ */ a.forwardRef(/* @__PURE__ */ re(function(t, n) {
  const o = a.useContext(Fo), r = a.useRef(null), s = j(n, r);
  return a.useEffect(() => {
    const i = r.current;
    if (i)
      return o.branches.add(i), () => {
        o.branches.delete(i);
      };
  }, [o.branches]), /* @__PURE__ */ h(B.div, { ...t, ref: s });
}, "DismissableLayerBranch"));
function Es() {
  const e = a.useContext(Fo), [t, n] = a.useState(null);
  return a.useEffect(() => {
    if (t)
      return e.dismissableSurfaces.add(t), () => {
        e.dismissableSurfaces.delete(t);
      };
  }, [t, e.dismissableSurfaces]), n;
}
re(Es, "useDismissableLayerSurface");
var ya = /* @__PURE__ */ re(() => !0, "IS_TRUE");
function Ts(e, t) {
  const {
    ownerDocument: n = globalThis == null ? void 0 : globalThis.document,
    deferPointerDownOutside: o = !1,
    isDeferredPointerDownOutsideRef: r,
    dismissableSurfaces: s,
    shouldHandlePointerDownOutside: i = ya
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
      const y = b.target;
      y instanceof Node && [...s].some((E) => E.contains(y)) || d.current.set(b.type, !0), b.type === "click" && window.setTimeout(() => {
        u.current && f.current();
      }, 0);
    }
    re(w, "handleInteractionCapture");
    function m(b) {
      u.current && d.current.set(b.type, !1);
    }
    re(m, "handleInteractionBubble");
    const v = /* @__PURE__ */ re((b) => {
      if (b.target && !l.current) {
        let y = function() {
          n.removeEventListener("click", f.current);
          const E = g();
          p(), E || Bo(
            ga,
            c,
            x,
            { discrete: !0 }
          );
        };
        if (re(y, "handleAndDispatchPointerDownOutsideEvent"), !i(b.target)) {
          n.removeEventListener("click", f.current), p(), l.current = !1;
          return;
        }
        const x = { originalEvent: b };
        u.current = !0, r.current = o && b.button === 0, d.current.clear(), !o || b.button !== 0 ? y() : (n.removeEventListener("click", f.current), f.current = y, n.addEventListener("click", f.current, { once: !0 }));
      } else
        n.removeEventListener("click", f.current), p();
      l.current = !1;
    }, "handlePointerDown"), C = [
      "pointerup",
      "mousedown",
      "mouseup",
      "touchstart",
      "touchend",
      "click"
    ];
    for (const b of C)
      n.addEventListener(b, w, !0), n.addEventListener(b, m);
    const S = window.setTimeout(() => {
      n.addEventListener("pointerdown", v);
    }, 0);
    return () => {
      window.clearTimeout(S), n.removeEventListener("pointerdown", v), n.removeEventListener("click", f.current);
      for (const b of C)
        n.removeEventListener(b, w, !0), n.removeEventListener(b, m);
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
re(Ts, "usePointerDownOutside");
function Ps(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ue(e), o = a.useRef(!1);
  return a.useEffect(() => {
    const r = /* @__PURE__ */ re((s) => {
      s.target && !o.current && Bo(wa, n, { originalEvent: s }, {
        discrete: !1
      });
    }, "handleFocus");
    return t.addEventListener("focusin", r), () => t.removeEventListener("focusin", r);
  }, [t, n]), {
    onFocusCapture: /* @__PURE__ */ re(() => o.current = !0, "onFocusCapture"),
    onBlurCapture: /* @__PURE__ */ re(() => o.current = !1, "onBlurCapture")
  };
}
re(Ps, "useFocusOutside");
function po() {
  const e = new CustomEvent(fo);
  document.dispatchEvent(e);
}
re(po, "dispatchUpdate");
function Bo(e, t, n, { discrete: o }) {
  const r = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && r.addEventListener(e, t, { once: !0 }), o ? xn(r, s) : r.dispatchEvent(s);
}
re(Bo, "handleAndDispatchCustomEvent");
var Ca = Gt, Sa = ba, xa = Object.defineProperty, Vo = (e, t) => xa(e, "name", { value: t, configurable: !0 }), on = 0, ke = null;
function Ea(e) {
  return Yt(), e.children;
}
Vo(Ea, "FocusGuards");
function Yt() {
  a.useEffect(() => {
    ke || (ke = { start: ho(), end: ho() });
    const { start: e, end: t } = ke;
    return document.body.firstElementChild !== e && document.body.insertAdjacentElement("afterbegin", e), document.body.lastElementChild !== t && document.body.insertAdjacentElement("beforeend", t), on++, () => {
      on === 1 && (ke == null || ke.start.remove(), ke == null || ke.end.remove(), ke = null), on = Math.max(0, on - 1);
    };
  }, []);
}
Vo(Yt, "useFocusGuards");
function ho() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
Vo(ho, "createFocusGuard");
var Ta = Object.defineProperty, de = (e, t) => Ta(e, "name", { value: t, configurable: !0 }), Kn = "focusScope.autoFocusOnMount", zn = "focusScope.autoFocusOnUnmount", Ir = { bubbles: !1, cancelable: !0 }, Ho = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ de(function(t, n) {
    const {
      loop: o = !1,
      trapped: r = !1,
      onMountAutoFocus: s,
      onUnmountAutoFocus: i,
      ...c
    } = t, [l, u] = a.useState(null), d = ue(s), f = ue(i), p = a.useRef(null), g = j(n, u), w = a.useRef({
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
        let v = function(y) {
          if (w.paused || !l) return;
          const x = y.target;
          l.contains(x) ? p.current = x : Le(p.current, { select: !0 });
        }, C = function(y) {
          if (w.paused || !l) return;
          const x = y.relatedTarget;
          x !== null && (l.contains(x) || Le(p.current, { select: !0 }));
        }, S = function(y) {
          if (document.activeElement === document.body)
            for (const E of y)
              E.removedNodes.length > 0 && Le(l);
        };
        de(v, "handleFocusIn"), de(C, "handleFocusOut"), de(S, "handleMutations"), document.addEventListener("focusin", v), document.addEventListener("focusout", C);
        const b = new MutationObserver(S);
        return l && b.observe(l, { childList: !0, subtree: !0 }), () => {
          document.removeEventListener("focusin", v), document.removeEventListener("focusout", C), b.disconnect();
        };
      }
    }, [r, l, w.paused]), a.useEffect(() => {
      if (l) {
        kr.add(w);
        const v = document.activeElement;
        if (!l.contains(v)) {
          const S = new CustomEvent(Kn, Ir);
          l.addEventListener(Kn, d), l.dispatchEvent(S), S.defaultPrevented || (_s(As(Wo(l)), { select: !0 }), document.activeElement === v && Le(l));
        }
        return () => {
          l.removeEventListener(Kn, d), setTimeout(() => {
            const S = new CustomEvent(zn, Ir);
            l.addEventListener(zn, f), l.dispatchEvent(S), S.defaultPrevented || Le(v ?? document.body, { select: !0 }), l.removeEventListener(zn, f), kr.remove(w);
          }, 0);
        };
      }
    }, [l, d, f, w]);
    const m = a.useCallback(
      (v) => {
        if (!o && !r || w.paused) return;
        const C = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, S = document.activeElement;
        if (C && S) {
          const b = v.currentTarget, [y, x] = Rs(b);
          y && x ? !v.shiftKey && S === x ? (v.preventDefault(), o && Le(y, { select: !0 })) : v.shiftKey && S === y && (v.preventDefault(), o && Le(x, { select: !0 })) : S === b && v.preventDefault();
        }
      },
      [o, r, w.paused]
    );
    return /* @__PURE__ */ h(B.div, { tabIndex: -1, ...c, ref: g, onKeyDown: m });
  }, "FocusScope")
);
function _s(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const o of e)
    if (Le(o, { select: t }), document.activeElement !== n) return;
}
de(_s, "focusFirst");
function Rs(e) {
  const t = Wo(e), n = mo(t, e), o = mo(t.reverse(), e);
  return [n, o];
}
de(Rs, "getTabbableEdges");
function Wo(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: /* @__PURE__ */ de((o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }, "acceptNode")
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
de(Wo, "getTabbableCandidates");
function mo(e, t) {
  const n = typeof t.checkVisibility == "function" && t.checkVisibility({ checkVisibilityCSS: !0 });
  for (const o of e)
    if (!(n ? !o.checkVisibility({ checkVisibilityCSS: !0 }) : Is(o, { upTo: t })))
      return o;
}
de(mo, "findVisible");
function Is(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
de(Is, "isHidden");
function ks(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
de(ks, "isSelectableInput");
function Le(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && ks(e) && t && e.select();
  }
}
de(Le, "focus");
var kr = Os();
function Os() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = vo(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = vo(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
de(Os, "createFocusScopesStack");
function vo(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
de(vo, "arrayRemove");
function As(e) {
  return e.filter((t) => t.tagName !== "A");
}
de(As, "removeLinks");
var oe = globalThis != null && globalThis.document ? a.useLayoutEffect : () => {
}, Pa = Object.defineProperty, _a = (e, t) => Pa(e, "name", { value: t, configurable: !0 }), Ra = a[" useId ".trim().toString()] || (() => {
}), Ia = 0;
function ye(e) {
  const [t, n] = a.useState(Ra());
  return oe(() => {
    e || n((o) => o ?? String(Ia++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
_a(ye, "useId");
const ka = ["top", "right", "bottom", "left"], Je = Math.min, Ve = Math.max, gn = Math.round, rn = Math.floor, He = (e) => ({
  x: e,
  y: e
}), Oa = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ds(e, t, n) {
  return Ve(e, Je(t, n));
}
function je(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Qe(e) {
  return e.split("-")[0];
}
function _t(e) {
  return e.split("-")[1];
}
function Uo(e) {
  return e === "x" ? "y" : "x";
}
function jo(e) {
  return e === "y" ? "height" : "width";
}
function De(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function Ko(e) {
  return Uo(De(e));
}
function Aa(e, t, n) {
  n === void 0 && (n = !1);
  const o = _t(e), r = Ko(e), s = jo(r);
  let i = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = wn(i)), [i, wn(i)];
}
function Da(e) {
  const t = wn(e);
  return [go(e), t, go(t)];
}
function go(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const Or = ["left", "right"], Ar = ["right", "left"], Ma = ["top", "bottom"], Na = ["bottom", "top"];
function $a(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Ar : Or : t ? Or : Ar;
    case "left":
    case "right":
      return t ? Ma : Na;
    default:
      return [];
  }
}
function La(e, t, n, o) {
  const r = _t(e);
  let s = $a(Qe(e), n === "start", o);
  return r && (s = s.map((i) => i + "-" + r), t && (s = s.concat(s.map(go)))), s;
}
function wn(e) {
  const t = Qe(e);
  return Oa[t] + e.slice(t.length);
}
function Fa(e) {
  var t, n, o, r;
  return {
    top: (t = e.top) != null ? t : 0,
    right: (n = e.right) != null ? n : 0,
    bottom: (o = e.bottom) != null ? o : 0,
    left: (r = e.left) != null ? r : 0
  };
}
function Ms(e) {
  return typeof e != "number" ? Fa(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function bn(e) {
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
function Dr(e, t, n) {
  let {
    reference: o,
    floating: r
  } = e;
  const s = De(t), i = Ko(t), c = jo(i), l = Qe(t), u = s === "y", d = o.x + o.width / 2 - r.width / 2, f = o.y + o.height / 2 - r.height / 2, p = o[c] / 2 - r[c] / 2;
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
  const w = _t(t);
  return w && (g[i] += p * (w === "end" ? 1 : -1) * (n && u ? -1 : 1)), g;
}
async function Ba(e, t) {
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
    rootBoundary: d = "viewport",
    elementContext: f = "floating",
    altBoundary: p = !1,
    padding: g = 0
  } = je(t, e), w = Ms(g), v = c[p ? f === "floating" ? "reference" : "floating" : f], C = bn(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(v))) == null || n ? v : v.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(c.floating)),
    boundary: u,
    rootBoundary: d,
    strategy: l
  })), S = f === "floating" ? {
    x: o,
    y: r,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, b = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c.floating)), y = await (s.isElement == null ? void 0 : s.isElement(b)) && await (s.getScale == null ? void 0 : s.getScale(b)) || {
    x: 1,
    y: 1
  }, x = bn(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: S,
    offsetParent: b,
    strategy: l
  }) : S);
  return {
    top: (C.top - x.top + w.top) / y.y,
    bottom: (x.bottom - C.bottom + w.bottom) / y.y,
    left: (C.left - x.left + w.left) / y.x,
    right: (x.right - C.right + w.right) / y.x
  };
}
const Va = 50, Ha = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: r = "absolute",
    middleware: s = [],
    platform: i
  } = n, c = i.detectOverflow ? i : {
    ...i,
    detectOverflow: Ba
  }, l = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let u = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: r
  }), {
    x: d,
    y: f
  } = Dr(u, o, l), p = o, g = 0;
  const w = {};
  for (let m = 0; m < s.length; m++) {
    const v = s[m];
    if (!v)
      continue;
    const {
      name: C,
      fn: S
    } = v, {
      x: b,
      y,
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
    d = b ?? d, f = y ?? f, w[C] = {
      ...w[C],
      ...x
    }, E && g < Va && (g++, typeof E == "object" && (E.placement && (p = E.placement), E.rects && (u = E.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: r
    }) : E.rects), {
      x: d,
      y: f
    } = Dr(u, p, l)), m = -1);
  }
  return {
    x: d,
    y: f,
    placement: p,
    strategy: r,
    middlewareData: w
  };
}, Wa = (e) => ({
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
      padding: d = 0
    } = je(e, t) || {};
    if (u == null)
      return {};
    const f = Ms(d), p = {
      x: n,
      y: o
    }, g = Ko(r), w = jo(g), m = await i.getDimensions(u), v = g === "y", C = v ? "top" : "left", S = v ? "bottom" : "right", b = v ? "clientHeight" : "clientWidth", y = s.reference[w] + s.reference[g] - p[g] - s.floating[w], x = p[g] - s.reference[g], E = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
    let T = E ? E[b] : 0;
    (!T || !await (i.isElement == null ? void 0 : i.isElement(E))) && (T = c.floating[b] || s.floating[w]);
    const R = y / 2 - x / 2, _ = T / 2 - m[w] / 2 - 1, O = Je(f[C], _), L = Je(f[S], _), A = T - m[w] - L, D = T / 2 - m[w] / 2 + R, $ = Ds(O, D, A), U = !l.arrow && _t(r) != null && D !== $ && s.reference[w] / 2 - (D < O ? O : L) - m[w] / 2 < 0, P = U ? D < O ? D - O : D - A : 0;
    return {
      [g]: p[g] + P,
      data: {
        [g]: $,
        centerOffset: D - $ - P,
        ...U && {
          alignmentOffset: P
        }
      },
      reset: U
    };
  }
}), Ua = function(e) {
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
        mainAxis: d = !0,
        crossAxis: f = !0,
        fallbackPlacements: p,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: w = "none",
        flipAlignment: m = !0,
        ...v
      } = je(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const C = Qe(r), S = De(c), b = Qe(c) === c, y = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), x = p || (b || !m ? [wn(c)] : Da(c)), E = w !== "none";
      !p && E && x.push(...La(c, m, w, y));
      const T = [c, ...x], R = await l.detectOverflow(t, v), _ = [];
      let O = ((o = s.flip) == null ? void 0 : o.overflows) || [];
      if (d && _.push(R[C]), f) {
        const $ = Aa(r, i, y);
        _.push(R[$[0]], R[$[1]]);
      }
      if (O = [...O, {
        placement: r,
        overflows: _
      }], !_.every(($) => $ <= 0)) {
        var L, A;
        const $ = (((L = s.flip) == null ? void 0 : L.index) || 0) + 1, U = T[$];
        if (U && (!(f === "alignment" ? S !== De(U) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        O.every((N) => De(N.placement) === S ? N.overflows[0] > 0 : !0)))
          return {
            data: {
              index: $,
              overflows: O
            },
            reset: {
              placement: U
            }
          };
        let P = (A = O.filter((M) => M.overflows[0] <= 0).sort((M, N) => M.overflows[1] - N.overflows[1])[0]) == null ? void 0 : A.placement;
        if (!P)
          switch (g) {
            case "bestFit": {
              var D;
              const M = (D = O.filter((N) => {
                if (E) {
                  const V = De(N.placement);
                  return V === S || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  V === "y";
                }
                return !0;
              }).map((N) => [N.placement, N.overflows.filter((V) => V > 0).reduce((V, I) => V + I, 0)]).sort((N, V) => N[1] - V[1])[0]) == null ? void 0 : D[0];
              M && (P = M);
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
function Mr(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Nr(e) {
  return ka.some((t) => e[t] >= 0);
}
const ja = function(e) {
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
      } = je(e, t);
      switch (r) {
        case "referenceHidden": {
          const i = await o.detectOverflow(t, {
            ...s,
            elementContext: "reference"
          }), c = Mr(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: c,
              referenceHidden: Nr(c)
            }
          };
        }
        case "escaped": {
          const i = await o.detectOverflow(t, {
            ...s,
            altBoundary: !0
          }), c = Mr(i, n.floating);
          return {
            data: {
              escapedOffsets: c,
              escaped: Nr(c)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Ns = /* @__PURE__ */ new Set(["left", "top"]);
async function Ka(e, t) {
  const {
    placement: n,
    platform: o,
    elements: r
  } = e, s = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), i = Qe(n), c = _t(n), l = De(n) === "y", u = Ns.has(i) ? -1 : 1, d = s && l ? -1 : 1, f = je(t, e);
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
const za = function(e) {
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
      } = t, l = await Ka(t, e);
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
}, Ga = function(e) {
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
              x: b,
              y
            } = S;
            return {
              x: b,
              y
            };
          }
        },
        ...u
      } = je(e, t), d = {
        x: n,
        y: o
      }, f = await s.detectOverflow(t, u), p = De(r), g = Uo(p);
      let w = d[g], m = d[p];
      const v = (S, b) => Ds(b + f[S === "y" ? "top" : "left"], b, b - f[S === "y" ? "bottom" : "right"]);
      i && (w = v(g, w)), c && (m = v(p, m));
      const C = l.fn({
        ...t,
        [g]: w,
        [p]: m
      });
      return {
        ...C,
        data: {
          x: C.x - n,
          y: C.y - o,
          enabled: {
            [g]: i,
            [p]: c
          }
        }
      };
    }
  };
}, Ya = function(e) {
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
        mainAxis: d = !0,
        crossAxis: f = !0
      } = je(e, t), p = {
        x: r,
        y: s
      }, g = De(i), w = Uo(g);
      let m = p[w], v = p[g];
      const C = je(u, t), S = typeof C == "number" ? {
        mainAxis: C,
        crossAxis: 0
      } : {
        mainAxis: (n = C.mainAxis) != null ? n : 0,
        crossAxis: (o = C.crossAxis) != null ? o : 0
      };
      if (d) {
        const x = w === "y" ? "height" : "width", E = c.reference[w] - c.floating[x] + S.mainAxis, T = c.reference[w] + c.reference[x] - S.mainAxis;
        m < E ? m = E : m > T && (m = T);
      }
      if (f) {
        var b, y;
        const x = w === "y" ? "width" : "height", E = Ns.has(Qe(i)), T = c.reference[g] - c.floating[x] + (E && ((b = l.offset) == null ? void 0 : b[g]) || 0) + (E ? 0 : S.crossAxis), R = c.reference[g] + c.reference[x] + (E ? 0 : ((y = l.offset) == null ? void 0 : y[g]) || 0) - (E ? S.crossAxis : 0);
        v < T ? v = T : v > R && (v = R);
      }
      return {
        [w]: m,
        [g]: v
      };
    }
  };
}, Xa = function(e) {
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
      } = je(e, t), l = await r.detectOverflow(t, c), u = Qe(n), d = _t(n), f = De(n) === "y", {
        width: p,
        height: g
      } = o.floating;
      let w, m;
      u === "top" || u === "bottom" ? (w = u, m = d === (await (r.isRTL == null ? void 0 : r.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (m = u, w = d === "end" ? "top" : "bottom");
      const v = g - l.top - l.bottom, C = p - l.left - l.right, S = Je(g - l[w], v), b = Je(p - l[m], C), y = t.middlewareData.shift, x = !y;
      let E = S, T = b;
      y != null && y.enabled.x && (T = C), y != null && y.enabled.y && (E = v), x && !d && (f ? T = p - 2 * Ve(l.left, l.right) : E = g - 2 * Ve(l.top, l.bottom)), await i({
        ...t,
        availableWidth: T,
        availableHeight: E
      });
      const R = await r.getDimensions(s.floating);
      return p !== R.width || g !== R.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function En() {
  return typeof window < "u";
}
function Rt(e) {
  return $s(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function fe(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ye(e) {
  var t;
  return (t = ($s(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function $s(e) {
  return En() ? e instanceof Node || e instanceof fe(e).Node : !1;
}
function Ne(e) {
  return En() ? e instanceof Element || e instanceof fe(e).Element : !1;
}
function tt(e) {
  return En() ? e instanceof HTMLElement || e instanceof fe(e).HTMLElement : !1;
}
function $r(e) {
  return !En() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof fe(e).ShadowRoot;
}
function Tn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: r
  } = $e(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && r !== "inline" && r !== "contents";
}
function qa(e) {
  return /^(table|td|th)$/.test(Rt(e));
}
function Pn(e) {
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
const Za = /transform|translate|scale|rotate|perspective|filter/, Ja = /paint|layout|strict|content/, rt = (e) => !!e && e !== "none";
let Gn;
function zo(e) {
  const t = Ne(e) ? $e(e) : e;
  return rt(t.transform) || rt(t.translate) || rt(t.scale) || rt(t.rotate) || rt(t.perspective) || !Go() && (rt(t.backdropFilter) || rt(t.filter)) || Za.test(t.willChange || "") || Ja.test(t.contain || "");
}
function Qa(e) {
  let t = it(e);
  for (; tt(t) && !Vt(t); ) {
    if (zo(t))
      return t;
    if (Pn(t))
      return null;
    t = it(t);
  }
  return null;
}
function Go() {
  return Gn == null && (Gn = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), Gn;
}
function Vt(e) {
  return /^(html|body|#document)$/.test(Rt(e));
}
function $e(e) {
  return fe(e).getComputedStyle(e);
}
function _n(e) {
  return Ne(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function it(e) {
  if (Rt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    $r(e) && e.host || // Fallback.
    Ye(e)
  );
  return $r(t) ? t.host : t;
}
function Ls(e) {
  const t = it(e);
  return Vt(t) ? (e.ownerDocument || e).body : tt(t) && Tn(t) ? t : Ls(t);
}
function Ht(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const r = Ls(e), s = r === ((o = e.ownerDocument) == null ? void 0 : o.body), i = fe(r);
  if (s) {
    const c = wo(i);
    return t.concat(i, i.visualViewport || [], Tn(r) ? r : [], c && n ? Ht(c) : []);
  } else
    return t.concat(r, Ht(r, [], n));
}
function wo(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Fs(e) {
  const t = $e(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const r = tt(e), s = r ? e.offsetWidth : n, i = r ? e.offsetHeight : o, c = gn(n) !== s || gn(o) !== i;
  return c && (n = s, o = i), {
    width: n,
    height: o,
    $: c
  };
}
function Yo(e) {
  return Ne(e) ? e : e.contextElement;
}
function yt(e) {
  const t = Yo(e);
  if (!tt(t))
    return He(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: r,
    $: s
  } = Fs(t);
  let i = (s ? gn(n.width) : n.width) / o, c = (s ? gn(n.height) : n.height) / r;
  return (!i || !Number.isFinite(i)) && (i = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: i,
    y: c
  };
}
const el = /* @__PURE__ */ He(0);
function Bs(e) {
  const t = fe(e);
  return !Go() || !t.visualViewport ? el : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function tl(e, t, n) {
  return t === void 0 && (t = !1), !!n && t && n === fe(e);
}
function ct(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), s = Yo(e);
  let i = He(1);
  t && (o ? Ne(o) && (i = yt(o)) : i = yt(e));
  const c = tl(s, n, o) ? Bs(s) : He(0);
  let l = (r.left + c.x) / i.x, u = (r.top + c.y) / i.y, d = r.width / i.x, f = r.height / i.y;
  if (s && o) {
    const p = fe(s), g = Ne(o) ? fe(o) : o;
    let w = p, m = wo(w);
    for (; m && g !== w; ) {
      const v = yt(m), C = m.getBoundingClientRect(), S = $e(m), b = C.left + (m.clientLeft + parseFloat(S.paddingLeft)) * v.x, y = C.top + (m.clientTop + parseFloat(S.paddingTop)) * v.y;
      l *= v.x, u *= v.y, d *= v.x, f *= v.y, l += b, u += y, w = fe(m), m = wo(w);
    }
  }
  return bn({
    width: d,
    height: f,
    x: l,
    y: u
  });
}
function Rn(e, t) {
  const n = _n(e).scrollLeft;
  return t ? t.left + n : ct(Ye(e)).left + n;
}
function Vs(e, t) {
  const n = e.getBoundingClientRect(), o = n.left + t.scrollLeft - Rn(e, n), r = n.top + t.scrollTop;
  return {
    x: o,
    y: r
  };
}
function nl(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: r
  } = e;
  const s = r === "fixed", i = Ye(o), c = t ? Pn(t.floating) : !1;
  if (o === i || c && s)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = He(1);
  const d = He(0), f = tt(o);
  if ((f || !s) && ((Rt(o) !== "body" || Tn(i)) && (l = _n(o)), f)) {
    const g = ct(o);
    u = yt(o), d.x = g.x + o.clientLeft, d.y = g.y + o.clientTop;
  }
  const p = i && !f && !s ? Vs(i, l) : He(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + d.x + p.x,
    y: n.y * u.y - l.scrollTop * u.y + d.y + p.y
  };
}
function ol(e) {
  return e.getClientRects ? Array.from(e.getClientRects()) : [];
}
function rl(e) {
  const t = _n(e), n = e.ownerDocument.body, o = Ve(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), r = Ve(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight);
  let s = -t.scrollLeft + Rn(e);
  const i = -t.scrollTop;
  return $e(n).direction === "rtl" && (s += Ve(e.clientWidth, n.clientWidth) - o), {
    width: o,
    height: r,
    x: s,
    y: i
  };
}
const sl = 25;
function il(e, t, n) {
  n === void 0 && (n = "viewport");
  const o = n === "layoutViewport", r = fe(e), s = Ye(e), i = r.visualViewport;
  let c = s.clientWidth, l = s.clientHeight, u = 0, d = 0;
  if (i) {
    const p = !Go() || t === "fixed";
    o ? p || (u = -i.offsetLeft, d = -i.offsetTop) : (c = i.width, l = i.height, p && (u = i.offsetLeft, d = i.offsetTop));
  }
  if (Rn(s) <= 0) {
    const p = s.ownerDocument, g = p.body, w = getComputedStyle(g), m = p.compatMode === "CSS1Compat" && parseFloat(w.marginLeft) + parseFloat(w.marginRight) || 0, v = Math.abs(s.clientWidth - g.clientWidth - m), C = getComputedStyle(s).scrollbarGutter === "stable both-edges" ? v / 2 : v;
    C <= sl && (c -= C);
  }
  return {
    width: c,
    height: l,
    x: u,
    y: d
  };
}
function cl(e, t) {
  const n = ct(e, !0, t === "fixed"), o = n.top + e.clientTop, r = n.left + e.clientLeft, s = yt(e), i = e.clientWidth * s.x, c = e.clientHeight * s.y, l = r * s.x, u = o * s.y;
  return {
    width: i,
    height: c,
    x: l,
    y: u
  };
}
function Lr(e, t, n) {
  let o;
  if (t === "viewport" || t === "layoutViewport")
    o = il(e, n, t);
  else if (t === "document")
    o = rl(Ye(e));
  else if (Ne(t))
    o = cl(t, n);
  else {
    const r = Bs(e);
    o = {
      x: t.x - r.x,
      y: t.y - r.y,
      width: t.width,
      height: t.height
    };
  }
  return bn(o);
}
function al(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = Ht(e, [], !1).filter((c) => Ne(c) && Rt(c) !== "body"), r = null;
  const s = $e(e).position === "fixed";
  let i = s ? it(e) : e;
  for (; Ne(i) && !Vt(i); ) {
    const c = $e(i), l = zo(i), u = r ? r.position : s ? "fixed" : "";
    !l && (u === "fixed" || u === "absolute" && c.position === "static") ? o = o.filter((f) => f !== i) : r = c, i = it(i);
  }
  return t.set(e, o), o;
}
function ll(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: r
  } = e;
  const i = [...n === "clippingAncestors" ? Pn(t) ? [] : al(t, this._c) : [].concat(n), o], c = Lr(t, i[0], r);
  let l = c.top, u = c.right, d = c.bottom, f = c.left;
  for (let p = 1; p < i.length; p++) {
    const g = Lr(t, i[p], r);
    l = Ve(g.top, l), u = Je(g.right, u), d = Je(g.bottom, d), f = Ve(g.left, f);
  }
  return {
    width: u - f,
    height: d - l,
    x: f,
    y: l
  };
}
function ul(e) {
  const {
    width: t,
    height: n
  } = Fs(e);
  return {
    width: t,
    height: n
  };
}
function dl(e, t, n) {
  const o = tt(t), r = Ye(t), s = n === "fixed", i = ct(e, !0, s, t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = He(0);
  if ((o || !s) && ((Rt(t) !== "body" || Tn(r)) && (c = _n(t)), o)) {
    const p = ct(t, !0, s, t);
    l.x = p.x + t.clientLeft, l.y = p.y + t.clientTop;
  }
  !o && r && (l.x = Rn(r));
  const u = r && !o && !s ? Vs(r, c) : He(0), d = i.left + c.scrollLeft - l.x - u.x, f = i.top + c.scrollTop - l.y - u.y;
  return {
    x: d,
    y: f,
    width: i.width,
    height: i.height
  };
}
function Yn(e) {
  return $e(e).position === "static";
}
function Fr(e, t) {
  if (!tt(e) || $e(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Ye(e) === n && (n = n.ownerDocument.body), n;
}
function Hs(e, t) {
  const n = fe(e);
  if (Pn(e))
    return n;
  if (!tt(e)) {
    let r = it(e);
    for (; r && !Vt(r); ) {
      if (Ne(r) && !Yn(r))
        return r;
      r = it(r);
    }
    return n;
  }
  let o = Fr(e, t);
  for (; o && qa(o) && Yn(o); )
    o = Fr(o, t);
  return o && Vt(o) && Yn(o) && !zo(o) ? n : o || Qa(e) || n;
}
const fl = async function(e) {
  const t = this.getOffsetParent || Hs, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: dl(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function pl(e) {
  return $e(e).direction === "rtl";
}
const hl = {
  convertOffsetParentRelativeRectToViewportRelativeRect: nl,
  getDocumentElement: Ye,
  getClippingRect: ll,
  getOffsetParent: Hs,
  getElementRects: fl,
  getClientRects: ol,
  getDimensions: ul,
  getScale: yt,
  isElement: Ne,
  isRTL: pl
};
function Ws(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function ml(e, t, n) {
  let o = null, r;
  const s = Ye(e);
  function i() {
    var d;
    clearTimeout(r), (d = o) == null || d.disconnect(), o = null;
  }
  function c(d, f) {
    d === void 0 && (d = !1), f === void 0 && (f = 1), i();
    const p = e.getBoundingClientRect(), {
      left: g,
      top: w,
      width: m,
      height: v
    } = p;
    if (d || t(), !m || !v)
      return;
    const C = rn(w), S = rn(s.clientWidth - (g + m)), b = rn(s.clientHeight - (w + v)), y = rn(g), E = {
      rootMargin: -C + "px " + -S + "px " + -b + "px " + -y + "px",
      threshold: Ve(0, Je(1, f)) || 1
    };
    let T = !0;
    function R(_) {
      const O = _[0].intersectionRatio;
      if (!Ws(p, e.getBoundingClientRect()))
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
  const l = fe(e), u = () => c(n);
  return l.addEventListener("resize", u), c(!0), () => {
    l.removeEventListener("resize", u), i();
  };
}
function vl(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = o, u = Yo(e), d = r || s ? [...u ? Ht(u) : [], ...t ? Ht(t) : []] : [];
  d.forEach((C) => {
    r && C.addEventListener("scroll", n), s && C.addEventListener("resize", n);
  });
  const f = u && c ? ml(u, n, s) : null;
  let p = -1, g = null;
  i && (g = new ResizeObserver((C) => {
    let [S] = C;
    S && S.target === u && g && t && (g.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var b;
      (b = g) == null || b.observe(t);
    })), n();
  }), u && !l && g.observe(u), t && g.observe(t));
  let w, m = l ? ct(e) : null;
  l && v();
  function v() {
    const C = ct(e);
    m && !Ws(m, C) && n(), m = C, w = requestAnimationFrame(v);
  }
  return n(), () => {
    var C;
    d.forEach((S) => {
      r && S.removeEventListener("scroll", n), s && S.removeEventListener("resize", n);
    }), f == null || f(), (C = g) == null || C.disconnect(), g = null, l && cancelAnimationFrame(w);
  };
}
const gl = za, wl = Ga, bl = Ua, yl = Xa, Cl = ja, Br = Wa, Sl = Ya, xl = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), r = n ?? {}, s = {
    ...hl,
    ...r.platform,
    _c: o
  };
  return Ha(e, t, {
    ...r,
    platform: s
  });
};
var El = typeof document < "u", Tl = function() {
}, pn = El ? wc : Tl;
function yn(e, t) {
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
        if (!yn(e[o], t[o]))
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
      if (!(s === "_owner" && e.$$typeof) && !yn(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Us(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Vr(e, t) {
  const n = Us(e);
  return Math.round(t * n) / n;
}
function Xn(e) {
  const t = a.useRef(e);
  return pn(() => {
    t.current = e;
  }), t;
}
function Pl(e) {
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
  } = e, [d, f] = a.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [p, g] = a.useState(o);
  yn(p, o) || g(o);
  const [w, m] = a.useState(null), [v, C] = a.useState(null), S = a.useCallback((N) => {
    N !== E.current && (E.current = N, m(N));
  }, []), b = a.useCallback((N) => {
    N !== T.current && (T.current = N, C(N));
  }, []), y = s || w, x = i || v, E = a.useRef(null), T = a.useRef(null), R = a.useRef(d), _ = l != null, O = Xn(l), L = Xn(r), A = Xn(u), D = a.useCallback(() => {
    if (!E.current || !T.current)
      return;
    const N = {
      placement: t,
      strategy: n,
      middleware: p
    };
    L.current && (N.platform = L.current), xl(E.current, T.current, N).then((V) => {
      const I = {
        ...V,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: A.current !== !1
      };
      $.current && !yn(R.current, I) && (R.current = I, Tt.flushSync(() => {
        f(I);
      }));
    });
  }, [p, t, n, L, A]);
  pn(() => {
    u === !1 && R.current.isPositioned && (R.current.isPositioned = !1, f((N) => ({
      ...N,
      isPositioned: !1
    })));
  }, [u]);
  const $ = a.useRef(!1);
  pn(() => ($.current = !0, () => {
    $.current = !1;
  }), []), pn(() => {
    if (y && (E.current = y), x && (T.current = x), y && x) {
      if (O.current)
        return O.current(y, x, D);
      D();
    }
  }, [y, x, D, O, _]);
  const U = a.useMemo(() => ({
    reference: E,
    floating: T,
    setReference: S,
    setFloating: b
  }), [S, b]), P = a.useMemo(() => ({
    reference: y,
    floating: x
  }), [y, x]), M = a.useMemo(() => {
    const N = {
      position: n,
      left: 0,
      top: 0
    };
    if (!P.floating)
      return N;
    const V = Vr(P.floating, d.x), I = Vr(P.floating, d.y);
    return c ? {
      ...N,
      transform: "translate(" + V + "px, " + I + "px)",
      ...Us(P.floating) >= 1.5 && {
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
    refs: U,
    elements: P,
    floatingStyles: M
  }), [d, D, U, P, M]);
}
const _l = (e) => {
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
      return o && t(o) ? o.current != null ? Br({
        element: o.current,
        padding: r
      }).fn(n) : {} : o ? Br({
        element: o,
        padding: r
      }).fn(n) : {};
    }
  };
}, Rl = (e, t) => {
  const n = gl(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Il = (e, t) => {
  const n = wl(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, kl = (e, t) => ({
  fn: Sl(e).fn,
  options: [e, t]
}), Ol = (e, t) => {
  const n = bl(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Al = (e, t) => {
  const n = yl(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Dl = (e, t) => {
  const n = Cl(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Ml = (e, t) => {
  const n = _l(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
};
var Nl = Object.defineProperty, $l = (e, t) => Nl(e, "name", { value: t, configurable: !0 }), Ll = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ $l(function(t, n) {
    const { children: o, width: r = 10, height: s = 5, ...i } = t;
    return /* @__PURE__ */ h(
      B.svg,
      {
        ...i,
        ref: n,
        width: r,
        height: s,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: t.asChild ? o : /* @__PURE__ */ h("polygon", { points: "0,0 30,0 15,10" })
      }
    );
  }, "Arrow")
), Fl = Ll, Bl = Object.defineProperty, Vl = (e, t) => Bl(e, "name", { value: t, configurable: !0 });
function In(e) {
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
Vl(In, "useSize");
var Hl = Object.defineProperty, We = (e, t) => Hl(e, "name", { value: t, configurable: !0 }), js = "Popper", [Ks, It] = /* @__PURE__ */ pe(js), [Wl, zs] = Ks(js), Ul = /* @__PURE__ */ We((e) => {
  const { __scopePopper: t, children: n } = e, [o, r] = a.useState(null), [s, i] = a.useState(void 0);
  return /* @__PURE__ */ h(
    Wl,
    {
      scope: t,
      anchor: o,
      onAnchorChange: r,
      placementState: s,
      setPlacementState: i,
      children: n
    }
  );
}, "Popper"), jl = "PopperAnchor", Kl = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ We(function(t, n) {
    const { __scopePopper: o, virtualRef: r, ...s } = t, i = zs(jl, o), c = a.useRef(null), l = i.onAnchorChange, u = a.useCallback(
      (m) => {
        c.current = m, m && l(m);
      },
      [l]
    ), d = j(n, u), f = a.useRef(null);
    a.useEffect(() => {
      if (!r)
        return;
      const m = f.current;
      f.current = r.current, m !== f.current && l(f.current);
    });
    const p = i.placementState && kn(i.placementState), g = p == null ? void 0 : p[0], w = p == null ? void 0 : p[1];
    return r ? null : /* @__PURE__ */ h(
      B.div,
      {
        "data-radix-popper-side": g,
        "data-radix-popper-align": w,
        ...s,
        ref: d
      }
    );
  }, "PopperAnchor")
), Gs = "PopperContent", [zl, Gl] = Ks(Gs), Yl = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ We(function(t, n) {
    var X, ee, Y, K, q, _e, Re;
    const {
      __scopePopper: o,
      side: r = "bottom",
      sideOffset: s = 0,
      align: i = "center",
      alignOffset: c = 0,
      arrowPadding: l = 0,
      avoidCollisions: u = !0,
      collisionBoundary: d = [],
      collisionPadding: f = 0,
      sticky: p = "partial",
      hideWhenDetached: g = !1,
      updatePositionStrategy: w = "optimized",
      onPlaced: m,
      ...v
    } = t, C = zs(Gs, o), [S, b] = a.useState(null), y = j(n, b), [x, E] = a.useState(null), T = In(x), R = (T == null ? void 0 : T.width) ?? 0, _ = (T == null ? void 0 : T.height) ?? 0, O = r + (i !== "center" ? "-" + i : ""), L = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, A = Array.isArray(d) ? d : [d], D = A.length > 0, $ = {
      padding: L,
      boundary: A.filter(Ys),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: D
    }, { refs: U, floatingStyles: P, placement: M, isPositioned: N, middlewareData: V } = Pl({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: O,
      whileElementsMounted: /* @__PURE__ */ We((...ot) => vl(...ot, {
        animationFrame: w === "always"
      }), "whileElementsMounted"),
      elements: {
        reference: C.anchor
      },
      middleware: [
        Rl({ mainAxis: s + _, alignmentAxis: c }),
        u && Il({
          mainAxis: !0,
          crossAxis: !1,
          limiter: p === "partial" ? kl() : void 0,
          ...$
        }),
        u && Ol({ ...$ }),
        Al({
          ...$,
          apply: /* @__PURE__ */ We(({ elements: ot, rects: ht, availableWidth: Ot, availableHeight: mc }) => {
            const { width: vc, height: gc } = ht.reference, en = ot.floating.style;
            en.setProperty("--radix-popper-available-width", `${Ot}px`), en.setProperty("--radix-popper-available-height", `${mc}px`), en.setProperty("--radix-popper-anchor-width", `${vc}px`), en.setProperty("--radix-popper-anchor-height", `${gc}px`);
          }, "apply")
        }),
        x && Ml({ element: x, padding: l }),
        Jl({ arrowWidth: R, arrowHeight: _ }),
        g && Dl({
          strategy: "referenceHidden",
          ...$,
          // `hide` detects whether the anchor (reference) is clipped, so when
          // no explicit `collisionBoundary` is set we fall back to Floating
          // UI's default clipping ancestors (e.g. a scrollable menu). This
          // lets an occluded submenu hide once its anchor scrolls out of view
          // (#3237). The collision/size middlewares deliberately keep the
          // viewport-based default to avoid clamping content rendered inside
          // transformed or overflow-clipping portal containers.
          boundary: D ? $.boundary : void 0
        })
      ]
    }), I = C.setPlacementState;
    oe(() => (I(M), () => {
      I(void 0);
    }), [M, I]);
    const [Z, G] = kn(M), Q = ue(m);
    oe(() => {
      N && (Q == null || Q());
    }, [N, Q]);
    const ae = (X = V.arrow) == null ? void 0 : X.x, ce = (ee = V.arrow) == null ? void 0 : ee.y, ge = ((Y = V.arrow) == null ? void 0 : Y.centerOffset) !== 0, [he, F] = a.useState();
    return oe(() => {
      S && F(window.getComputedStyle(S).zIndex);
    }, [S]), /* @__PURE__ */ h(
      "div",
      {
        ref: U.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...P,
          transform: N ? P.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: he,
          "--radix-popper-transform-origin": [
            (K = V.transformOrigin) == null ? void 0 : K.x,
            (q = V.transformOrigin) == null ? void 0 : q.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((_e = V.hide) == null ? void 0 : _e.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: t.dir,
        children: /* @__PURE__ */ h(
          zl,
          {
            scope: o,
            placedSide: Z,
            placedAlign: G,
            onArrowChange: E,
            arrowX: ae,
            arrowY: ce,
            shouldHideArrow: ge,
            children: /* @__PURE__ */ h(
              B.div,
              {
                "data-side": Z,
                "data-align": G,
                ...v,
                ref: y,
                style: {
                  ...v.style,
                  // if the PopperContent hasn't been placed yet (not all
                  // measurements done) we prevent animations so that users'
                  // animations don't kick in too early from the wrong sides.
                  animation: N ? (Re = v.style) == null ? void 0 : Re.animation : "none"
                }
              }
            )
          }
        )
      }
    );
  }, "PopperContent")
), Xl = "PopperArrow", ql = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Zl = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ We(function(t, n) {
    const { __scopePopper: o, ...r } = t, s = Gl(Xl, o), i = ql[s.placedSide];
    return (
      // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
      // doesn't report size as we'd expect on SVG elements.
      // it reports their bounding box which is effectively the largest path inside the SVG.
      /* @__PURE__ */ h(
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
          children: /* @__PURE__ */ h(
            Fl,
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
function Ys(e) {
  return e !== null;
}
We(Ys, "isNotNull");
var Jl = /* @__PURE__ */ We((e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var v, C, S;
    const { placement: n, rects: o, middlewareData: r } = t, i = ((v = r.arrow) == null ? void 0 : v.centerOffset) !== 0, c = i ? 0 : e.arrowWidth, l = i ? 0 : e.arrowHeight, [u, d] = kn(n), f = { start: "0%", center: "50%", end: "100%" }[d], p = (((C = r.arrow) == null ? void 0 : C.x) ?? 0) + c / 2, g = (((S = r.arrow) == null ? void 0 : S.y) ?? 0) + l / 2;
    let w = "", m = "";
    return u === "bottom" ? (w = i ? f : `${p}px`, m = `${-l}px`) : u === "top" ? (w = i ? f : `${p}px`, m = `${o.floating.height + l}px`) : u === "right" ? (w = `${-l}px`, m = i ? f : `${g}px`) : u === "left" && (w = `${o.floating.width + l}px`, m = i ? f : `${g}px`), { data: { x: w, y: m } };
  }
}), "transformOrigin");
function kn(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
We(kn, "getSideAndAlignFromPlacement");
var Xo = Ul, qo = Kl, Zo = Yl, Ql = Zl, eu = Object.defineProperty, tu = (e, t) => eu(e, "name", { value: t, configurable: !0 }), Xt = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ tu(function(t, n) {
    var l;
    const { container: o, ...r } = t, [s, i] = a.useState(!1);
    oe(() => i(!0), []);
    const c = o || s && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body);
    return c ? Tt.createPortal(/* @__PURE__ */ h(B.div, { ...r, ref: n }), c) : null;
  }, "Portal")
), nu = Object.defineProperty, Ke = (e, t) => nu(e, "name", { value: t, configurable: !0 });
function Xs(e, t) {
  return a.useReducer((n, o) => t[n][o] ?? n, e);
}
Ke(Xs, "useStateMachine");
var Te = /* @__PURE__ */ Ke((e) => {
  const { present: t, children: n } = e, o = qs(t), r = typeof n == "function" ? n({ present: o.isPresent }) : a.Children.only(n), s = Zs(o.ref, Js(r));
  return typeof n == "function" || o.isPresent ? a.cloneElement(r, { ref: s }) : null;
}, "Presence");
function qs(e) {
  const [t, n] = a.useState(), o = a.useRef(null), r = a.useRef(e), s = a.useRef("none"), i = a.useRef(void 0), c = e ? "mounted" : "unmounted", [l, u] = Xs(c, {
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
    l === "mounted" ? (s.current = i.current ?? bt(o.current), i.current = void 0) : s.current = "none";
  }, [l]), oe(() => {
    const d = o.current, f = r.current;
    if (f !== e) {
      const g = s.current, w = bt(d);
      e ? (i.current = w, u("MOUNT")) : w === "none" || (d == null ? void 0 : d.display) === "none" ? u("UNMOUNT") : u(f && g !== w ? "ANIMATION_OUT" : "UNMOUNT"), r.current = e;
    }
  }, [e, u]), oe(() => {
    if (t) {
      let d;
      const f = t.ownerDocument.defaultView ?? window, p = /* @__PURE__ */ Ke((w) => {
        const v = bt(o.current).includes(CSS.escape(w.animationName));
        if (w.target === t && v && (u("ANIMATION_END"), !r.current)) {
          const C = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", d = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = C);
          });
        }
      }, "handleAnimationEnd"), g = /* @__PURE__ */ Ke((w) => {
        w.target === t && (s.current = bt(o.current));
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
        o.current = f, i.current = bt(f);
      } else
        o.current = null;
      n(d);
    }, [])
  };
}
Ke(qs, "usePresence");
function bo(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
Ke(bo, "setRef");
function Zs(...e) {
  const t = a.useRef(e);
  return t.current = e, a.useCallback((n) => {
    const o = t.current;
    let r = !1;
    const s = o.map((i) => {
      const c = bo(i, n);
      return !r && typeof c == "function" && (r = !0), c;
    });
    if (r)
      return () => {
        for (let i = 0; i < s.length; i++) {
          const c = s[i];
          typeof c == "function" ? c() : bo(o[i], null);
        }
      };
  }, []);
}
Ke(Zs, "useStableComposedRefs");
function bt(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
Ke(bt, "getAnimationName");
function Js(e) {
  var o, r;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
Ke(Js, "getElementRef");
var ou = Object.defineProperty, ru = (e, t) => ou(e, "name", { value: t, configurable: !0 }), Hr = a[" useEffectEvent ".trim().toString()], Wr = a[" useInsertionEffect ".trim().toString()];
function Qs(e) {
  if (typeof Hr == "function")
    return Hr(e);
  const t = a.useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  return typeof Wr == "function" ? Wr(() => {
    t.current = e;
  }) : oe(() => {
    t.current = e;
  }), a.useMemo(() => ((...n) => {
    var o;
    return (o = t.current) == null ? void 0 : o.call(t, ...n);
  }), []);
}
ru(Qs, "useEffectEvent");
var su = Object.defineProperty, qt = (e, t) => su(e, "name", { value: t, configurable: !0 }), iu = a[" useInsertionEffect ".trim().toString()] || oe;
function xe({
  prop: e,
  defaultProp: t,
  onChange: n = /* @__PURE__ */ qt(() => {
  }, "onChange"),
  caller: o
}) {
  const [r, s, i] = ei({
    defaultProp: t,
    onChange: n
  }), c = e !== void 0, l = c ? e : r, u = a.useCallback(
    (d) => {
      var f;
      if (c) {
        const p = ti(d) ? d(e) : d;
        p !== e && ((f = i.current) == null || f.call(i, p));
      } else
        s(d);
    },
    [c, e, s, i]
  );
  return [l, u];
}
qt(xe, "useControllableState");
function ei({
  defaultProp: e,
  onChange: t
}) {
  const [n, o] = a.useState(e), r = a.useRef(n), s = a.useRef(t);
  return iu(() => {
    s.current = t;
  }, [t]), a.useEffect(() => {
    var i;
    r.current !== n && ((i = s.current) == null || i.call(s, n), r.current = n);
  }, [n, r]), [n, o, s];
}
qt(ei, "useUncontrolledState");
function ti(e) {
  return typeof e == "function";
}
qt(ti, "isFunction");
var Ur = Symbol("RADIX:SYNC_STATE");
function cu(e, t, n, o) {
  const { prop: r, defaultProp: s, onChange: i, caller: c } = t, l = r !== void 0, u = Qs(i), d = [{ ...n, state: s }];
  o && d.push(o);
  const [f, p] = a.useReducer(
    (v, C) => {
      if (C.type === Ur)
        return { ...v, state: C.state };
      const S = e(v, C);
      return l && !Object.is(S.state, v.state) && u(S.state), S;
    },
    ...d
  ), g = f.state, w = a.useRef(g);
  a.useEffect(() => {
    w.current !== g && (w.current = g, l || u(g));
  }, [g, w, l]);
  const m = a.useMemo(() => r !== void 0 ? { ...f, state: r } : f, [f, r]);
  return a.useEffect(() => {
    l && !Object.is(r, f.state) && p({ type: Ur, state: r });
  }, [r, f.state, l]), [m, p];
}
qt(cu, "useControllableStateReducer");
var au = Object.defineProperty, lu = (e, t) => au(e, "name", { value: t, configurable: !0 });
function ni(e) {
  const t = a.useRef({ value: e, previous: e });
  return a.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
lu(ni, "usePrevious");
var uu = Object.defineProperty, du = (e, t) => uu(e, "name", { value: t, configurable: !0 }), oi = Object.freeze({
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
}), Jo = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ du(function(t, n) {
    return /* @__PURE__ */ h(
      B.span,
      {
        ...t,
        ref: n,
        style: { ...oi, ...t.style }
      }
    );
  }, "VisuallyHidden")
), fu = Jo, pu = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, mt = /* @__PURE__ */ new WeakMap(), sn = /* @__PURE__ */ new WeakMap(), cn = {}, qn = 0, ri = function(e) {
  return e && (e.host || ri(e.parentNode));
}, hu = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = ri(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, mu = function(e, t, n, o) {
  var r = hu(t, Array.isArray(e) ? e : [e]);
  cn[n] || (cn[n] = /* @__PURE__ */ new WeakMap());
  var s = cn[n], i = [], c = /* @__PURE__ */ new Set(), l = new Set(r), u = function(f) {
    !f || c.has(f) || (c.add(f), u(f.parentNode));
  };
  r.forEach(u);
  var d = function(f) {
    !f || l.has(f) || Array.prototype.forEach.call(f.children, function(p) {
      if (c.has(p))
        d(p);
      else
        try {
          var g = p.getAttribute(o), w = g !== null && g !== "false", m = (mt.get(p) || 0) + 1, v = (s.get(p) || 0) + 1;
          mt.set(p, m), s.set(p, v), i.push(p), m === 1 && w && sn.set(p, !0), v === 1 && p.setAttribute(n, "true"), w || p.setAttribute(o, "true");
        } catch (C) {
          console.error("aria-hidden: cannot operate on ", p, C);
        }
    });
  };
  return d(t), c.clear(), qn++, function() {
    i.forEach(function(f) {
      var p = mt.get(f) - 1, g = s.get(f) - 1;
      mt.set(f, p), s.set(f, g), p || (sn.has(f) || f.removeAttribute(o), sn.delete(f)), g || f.removeAttribute(n);
    }), qn--, qn || (mt = /* @__PURE__ */ new WeakMap(), mt = /* @__PURE__ */ new WeakMap(), sn = /* @__PURE__ */ new WeakMap(), cn = {});
  };
}, Qo = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), r = pu(e);
  return r ? (o.push.apply(o, Array.from(r.querySelectorAll("[aria-live], script"))), mu(o, r, n, "aria-hidden")) : function() {
    return null;
  };
}, Oe = function() {
  return Oe = Object.assign || function(t) {
    for (var n, o = 1, r = arguments.length; o < r; o++) {
      n = arguments[o];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, Oe.apply(this, arguments);
};
function si(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
}
function vu(e, t, n) {
  if (n || arguments.length === 2) for (var o = 0, r = t.length, s; o < r; o++)
    (s || !(o in t)) && (s || (s = Array.prototype.slice.call(t, 0, o)), s[o] = t[o]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var hn = "right-scroll-bar-position", mn = "width-before-scroll-bar", gu = "with-scroll-bars-hidden", wu = "--removed-body-scroll-bar-size";
function Zn(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function bu(e, t) {
  var n = Be(function() {
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
var yu = typeof window < "u" ? a.useLayoutEffect : a.useEffect, jr = /* @__PURE__ */ new WeakMap();
function Cu(e, t) {
  var n = bu(null, function(o) {
    return e.forEach(function(r) {
      return Zn(r, o);
    });
  });
  return yu(function() {
    var o = jr.get(n);
    if (o) {
      var r = new Set(o), s = new Set(e), i = n.current;
      r.forEach(function(c) {
        s.has(c) || Zn(c, null);
      }), s.forEach(function(c) {
        r.has(c) || Zn(c, i);
      });
    }
    jr.set(n, e);
  }, [e]), n;
}
function Su(e) {
  return e;
}
function xu(e, t) {
  t === void 0 && (t = Su);
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
        var d = i;
        i = [], d.forEach(s);
      }, u = function() {
        return Promise.resolve().then(l);
      };
      u(), n = {
        push: function(d) {
          i.push(d), u();
        },
        filter: function(d) {
          return i = i.filter(d), n;
        }
      };
    }
  };
  return r;
}
function Eu(e) {
  e === void 0 && (e = {});
  var t = xu(null);
  return t.options = Oe({ async: !0, ssr: !1 }, e), t;
}
var ii = function(e) {
  var t = e.sideCar, n = si(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = t.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return a.createElement(o, Oe({}, n));
};
ii.isSideCarExport = !0;
function Tu(e, t) {
  return e.useMedium(t), ii;
}
var ci = Eu(), Jn = function() {
}, On = a.forwardRef(function(e, t) {
  var n = a.useRef(null), o = a.useState({
    onScrollCapture: Jn,
    onWheelCapture: Jn,
    onTouchMoveCapture: Jn
  }), r = o[0], s = o[1], i = e.forwardProps, c = e.children, l = e.className, u = e.removeScrollBar, d = e.enabled, f = e.shards, p = e.sideCar, g = e.noRelative, w = e.noIsolation, m = e.inert, v = e.allowPinchZoom, C = e.as, S = C === void 0 ? "div" : C, b = e.gapMode, y = si(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), x = p, E = Cu([n, t]), T = Oe(Oe({}, y), r);
  return a.createElement(
    a.Fragment,
    null,
    d && a.createElement(x, { sideCar: ci, removeScrollBar: u, shards: f, noRelative: g, noIsolation: w, inert: m, setCallbacks: s, allowPinchZoom: !!v, lockRef: n, gapMode: b }),
    i ? a.cloneElement(a.Children.only(c), Oe(Oe({}, T), { ref: E })) : a.createElement(S, Oe({}, T, { className: l, ref: E }), c)
  );
});
On.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
On.classNames = {
  fullWidth: mn,
  zeroRight: hn
};
var Pu = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function _u() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Pu();
  return t && e.setAttribute("nonce", t), e;
}
function Ru(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Iu(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var ku = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = _u()) && (Ru(t, n), Iu(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Ou = function() {
  var e = ku();
  return function(t, n) {
    a.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, ai = function() {
  var e = Ou(), t = function(n) {
    var o = n.styles, r = n.dynamic;
    return e(o, r), null;
  };
  return t;
}, Au = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Qn = function(e) {
  return parseInt(e || "", 10) || 0;
}, Du = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], o = t[e === "padding" ? "paddingTop" : "marginTop"], r = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Qn(n), Qn(o), Qn(r)];
}, Mu = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Au;
  var t = Du(e), n = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, o - n + t[2] - t[0])
  };
}, Nu = ai(), Ct = "data-scroll-locked", $u = function(e, t, n, o) {
  var r = e.left, s = e.top, i = e.right, c = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(gu, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(c, "px ").concat(o, `;
  }
  body[`).concat(Ct, `] {
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
  
  .`).concat(hn, ` {
    right: `).concat(c, "px ").concat(o, `;
  }
  
  .`).concat(mn, ` {
    margin-right: `).concat(c, "px ").concat(o, `;
  }
  
  .`).concat(hn, " .").concat(hn, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(mn, " .").concat(mn, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat(Ct, `] {
    `).concat(wu, ": ").concat(c, `px;
  }
`);
}, Kr = function() {
  var e = parseInt(document.body.getAttribute(Ct) || "0", 10);
  return isFinite(e) ? e : 0;
}, Lu = function() {
  a.useEffect(function() {
    return document.body.setAttribute(Ct, (Kr() + 1).toString()), function() {
      var e = Kr() - 1;
      e <= 0 ? document.body.removeAttribute(Ct) : document.body.setAttribute(Ct, e.toString());
    };
  }, []);
}, Fu = function(e) {
  var t = e.noRelative, n = e.noImportant, o = e.gapMode, r = o === void 0 ? "margin" : o;
  Lu();
  var s = a.useMemo(function() {
    return Mu(r);
  }, [r]);
  return a.createElement(Nu, { styles: $u(s, !t, r, n ? "" : "!important") });
}, yo = !1;
if (typeof window < "u")
  try {
    var an = Object.defineProperty({}, "passive", {
      get: function() {
        return yo = !0, !0;
      }
    });
    window.addEventListener("test", an, an), window.removeEventListener("test", an, an);
  } catch {
    yo = !1;
  }
var vt = yo ? { passive: !1 } : !1, Bu = function(e) {
  return e.tagName === "TEXTAREA";
}, li = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Bu(e) && n[t] === "visible")
  );
}, Vu = function(e) {
  return li(e, "overflowY");
}, Hu = function(e) {
  return li(e, "overflowX");
}, zr = function(e, t) {
  var n = t.ownerDocument, o = t;
  do {
    typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
    var r = ui(e, o);
    if (r) {
      var s = di(e, o), i = s[1], c = s[2];
      if (i > c)
        return !0;
    }
    o = o.parentNode;
  } while (o && o !== n.body);
  return !1;
}, Wu = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, o = e.clientHeight;
  return [
    t,
    n,
    o
  ];
}, Uu = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, o = e.clientWidth;
  return [
    t,
    n,
    o
  ];
}, ui = function(e, t) {
  return e === "v" ? Vu(t) : Hu(t);
}, di = function(e, t) {
  return e === "v" ? Wu(t) : Uu(t);
}, ju = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Ku = function(e, t, n, o, r) {
  var s = ju(e, window.getComputedStyle(t).direction), i = s * o, c = n.target, l = t.contains(c), u = !1, d = i > 0, f = 0, p = 0;
  do {
    if (!c)
      break;
    var g = di(e, c), w = g[0], m = g[1], v = g[2], C = m - v - s * w;
    (w || C) && ui(e, c) && (f += C, p += w);
    var S = c.parentNode;
    c = S && S.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? S.host : S;
  } while (
    // portaled content
    !l && c !== document.body || // self content
    l && (t.contains(c) || t === c)
  );
  return (d && Math.abs(f) < 1 || !d && Math.abs(p) < 1) && (u = !0), u;
}, ln = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Gr = function(e) {
  return [e.deltaX, e.deltaY];
}, Yr = function(e) {
  return e && "current" in e ? e.current : e;
}, zu = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Gu = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Yu = 0, gt = [];
function Xu(e) {
  var t = a.useRef([]), n = a.useRef([0, 0]), o = a.useRef(), r = a.useState(Yu++)[0], s = a.useState(ai)[0], i = a.useRef(e);
  a.useEffect(function() {
    i.current = e;
  }, [e]), a.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(r));
      var m = vu([e.lockRef.current], (e.shards || []).map(Yr), !0).filter(Boolean);
      return m.forEach(function(v) {
        return v.classList.add("allow-interactivity-".concat(r));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(r)), m.forEach(function(v) {
          return v.classList.remove("allow-interactivity-".concat(r));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var c = a.useCallback(function(m, v) {
    if ("touches" in m && m.touches.length === 2 || m.type === "wheel" && m.ctrlKey)
      return !i.current.allowPinchZoom;
    var C = ln(m), S = n.current, b = "deltaX" in m ? m.deltaX : S[0] - C[0], y = "deltaY" in m ? m.deltaY : S[1] - C[1], x, E = m.target, T = Math.abs(b) > Math.abs(y) ? "h" : "v";
    if ("touches" in m && T === "h" && E.type === "range")
      return !1;
    var R = window.getSelection(), _ = R && R.anchorNode, O = _ ? _ === E || _.contains(E) : !1;
    if (O)
      return !1;
    var L = zr(T, E);
    if (!L)
      return !0;
    if (L ? x = T : (x = T === "v" ? "h" : "v", L = zr(T, E)), !L)
      return !1;
    if (!o.current && "changedTouches" in m && (b || y) && (o.current = x), !x)
      return !0;
    var A = o.current || x;
    return Ku(A, v, m, A === "h" ? b : y);
  }, []), l = a.useCallback(function(m) {
    var v = m;
    if (!(!gt.length || gt[gt.length - 1] !== s)) {
      var C = "deltaY" in v ? Gr(v) : ln(v), S = t.current.filter(function(x) {
        return x.name === v.type && (x.target === v.target || v.target === x.shadowParent) && zu(x.delta, C);
      })[0];
      if (S && S.should) {
        v.cancelable && v.preventDefault();
        return;
      }
      if (!S) {
        var b = (i.current.shards || []).map(Yr).filter(Boolean).filter(function(x) {
          return x.contains(v.target);
        }), y = b.length > 0 ? c(v, b[0]) : !i.current.noIsolation;
        y && v.cancelable && v.preventDefault();
      }
    }
  }, []), u = a.useCallback(function(m, v, C, S) {
    var b = { name: m, delta: v, target: C, should: S, shadowParent: qu(C) };
    t.current.push(b), setTimeout(function() {
      t.current = t.current.filter(function(y) {
        return y !== b;
      });
    }, 1);
  }, []), d = a.useCallback(function(m) {
    n.current = ln(m), o.current = void 0;
  }, []), f = a.useCallback(function(m) {
    u(m.type, Gr(m), m.target, c(m, e.lockRef.current));
  }, []), p = a.useCallback(function(m) {
    u(m.type, ln(m), m.target, c(m, e.lockRef.current));
  }, []);
  a.useEffect(function() {
    return gt.push(s), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", l, vt), document.addEventListener("touchmove", l, vt), document.addEventListener("touchstart", d, vt), function() {
      gt = gt.filter(function(m) {
        return m !== s;
      }), document.removeEventListener("wheel", l, vt), document.removeEventListener("touchmove", l, vt), document.removeEventListener("touchstart", d, vt);
    };
  }, []);
  var g = e.removeScrollBar, w = e.inert;
  return a.createElement(
    a.Fragment,
    null,
    w ? a.createElement(s, { styles: Gu(r) }) : null,
    g ? a.createElement(Fu, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function qu(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Zu = Tu(ci, Xu);
var An = a.forwardRef(function(e, t) {
  return a.createElement(On, Oe({}, e, { ref: t, sideCar: Zu }));
});
An.classNames = On.classNames;
var Ju = Object.defineProperty, z = (e, t) => Ju(e, "name", { value: t, configurable: !0 }), Qu = [" ", "Enter", "ArrowUp", "ArrowDown"], ed = [" ", "Enter"], Et = "Select", [Dn, er, td] = /* @__PURE__ */ Kt(Et), [lt, bg] = /* @__PURE__ */ pe(Et, [
  td,
  It
]), tr = It(), [nd, nt] = lt(Et), [od, rd] = lt(Et);
function fi(e) {
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
    name: d,
    autoComplete: f,
    disabled: p,
    required: g,
    form: w,
    // @ts-expect-error internal render prop used by `Select` to compose its default parts
    internal_do_not_use_render: m
  } = e, v = tr(t), [C, S] = a.useState(null), [b, y] = a.useState(null), [x, E] = a.useState(!1), T = zt(u), [R, _] = xe({
    prop: o,
    defaultProp: r ?? !1,
    onChange: s,
    caller: Et
  }), [O, L] = xe({
    prop: i,
    defaultProp: c,
    onChange: l,
    caller: Et
  }), A = a.useRef(null), D = a.useRef(O);
  a.useEffect(() => {
    const G = w ? C == null ? void 0 : C.ownerDocument.getElementById(w) : C == null ? void 0 : C.form;
    if (G instanceof HTMLFormElement) {
      const Q = /* @__PURE__ */ z(() => L(D.current), "reset");
      return G.addEventListener("reset", Q), () => G.removeEventListener("reset", Q);
    }
  }, [w, C, L]);
  const $ = C ? !!w || !!C.closest("form") : !0, [U, P] = a.useState(/* @__PURE__ */ new Set()), M = ye(), N = Array.from(U).map((G) => G.props.value).join(";"), V = a.useCallback((G) => {
    P((Q) => new Set(Q).add(G));
  }, []), I = a.useCallback((G) => {
    P((Q) => {
      const ae = new Set(Q);
      return ae.delete(G), ae;
    });
  }, []), Z = {
    required: g,
    trigger: C,
    onTriggerChange: S,
    valueNode: b,
    onValueNodeChange: y,
    valueNodeHasChildren: x,
    onValueNodeHasChildrenChange: E,
    contentId: M,
    value: O,
    onValueChange: L,
    open: R,
    onOpenChange: _,
    dir: T,
    triggerPointerDownPosRef: A,
    disabled: p,
    name: d,
    autoComplete: f,
    form: w,
    nativeOptions: U,
    nativeSelectKey: N,
    isFormControl: $
  };
  return /* @__PURE__ */ h(Xo, { ...v, children: /* @__PURE__ */ h(nd, { scope: t, ...Z, children: /* @__PURE__ */ h(Dn.Provider, { scope: t, children: /* @__PURE__ */ h(
    od,
    {
      scope: t,
      onNativeOptionAdd: V,
      onNativeOptionRemove: I,
      children: mi(m) ? m(Z) : n
    }
  ) }) }) });
}
z(fi, "SelectProvider");
var sd = /* @__PURE__ */ z((e) => {
  const { __scopeSelect: t, children: n, ...o } = e;
  return /* @__PURE__ */ h(
    fi,
    {
      __scopeSelect: t,
      ...o,
      internal_do_not_use_render: ({ isFormControl: r }) => /* @__PURE__ */ H(Ge, { children: [
        n,
        r ? /* @__PURE__ */ h(
          $d,
          {
            __scopeSelect: t
          }
        ) : null
      ] })
    }
  );
}, "Select"), id = "SelectTrigger", cd = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ z(function(t, n) {
    const { __scopeSelect: o, disabled: r = !1, ...s } = t, i = tr(o), c = nt(id, o), l = c.disabled || r, u = j(n, c.onTriggerChange), d = er(o), f = a.useRef("touch"), [p, g, w] = nr((v) => {
      const C = d().filter((y) => !y.disabled), S = C.find((y) => y.value === c.value), b = or(C, v, S);
      b !== void 0 && c.onValueChange(b.value);
    }), m = /* @__PURE__ */ z((v) => {
      l || (c.onOpenChange(!0), w()), v && (c.triggerPointerDownPosRef.current = {
        x: Math.round(v.pageX),
        y: Math.round(v.pageY)
      });
    }, "handleOpen");
    return /* @__PURE__ */ h(qo, { asChild: !0, ...i, children: /* @__PURE__ */ h(
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
        "data-placeholder": Zt(c.value) ? "" : void 0,
        ...s,
        ref: u,
        onClick: k(s.onClick, (v) => {
          v.currentTarget.focus(), f.current !== "mouse" && m(v);
        }),
        onPointerDown: k(s.onPointerDown, (v) => {
          f.current = v.pointerType;
          const C = v.target;
          C.hasPointerCapture(v.pointerId) && C.releasePointerCapture(v.pointerId), v.button === 0 && v.ctrlKey === !1 && v.pointerType === "mouse" && (m(v), v.preventDefault());
        }),
        onKeyDown: k(s.onKeyDown, (v) => {
          const C = p.current !== "";
          !(v.ctrlKey || v.altKey || v.metaKey) && v.key.length === 1 && g(v.key), !(C && v.key === " ") && Qu.includes(v.key) && (m(), v.preventDefault());
        })
      }
    ) });
  }, "SelectTrigger")
), ad = "SelectValue", ld = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ z(function(t, n) {
    const { __scopeSelect: o, className: r, style: s, children: i, placeholder: c = "", ...l } = t, u = nt(ad, o), { onValueNodeHasChildrenChange: d } = u, f = i !== void 0, p = j(n, u.onValueNodeChange);
    oe(() => {
      d(f);
    }, [d, f]);
    const g = Zt(u.value);
    return /* @__PURE__ */ h(
      B.span,
      {
        ...l,
        asChild: g ? !1 : l.asChild,
        ref: p,
        style: { pointerEvents: "none" },
        children: /* @__PURE__ */ h(a.Fragment, { children: g ? c : i }, g ? "placeholder" : "value")
      }
    );
  }, "SelectValue")
), ud = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ z(function(t, n) {
    const { __scopeSelect: o, children: r, ...s } = t;
    return /* @__PURE__ */ h(B.span, { "aria-hidden": !0, ...s, ref: n, children: r || "▼" });
  }, "SelectIcon")
), dd = "SelectPortal", [fd, pd] = lt(dd, {
  forceMount: void 0
}), hd = /* @__PURE__ */ z((e) => {
  const { __scopeSelect: t, forceMount: n, ...o } = e;
  return /* @__PURE__ */ h(fd, { scope: e.__scopeSelect, forceMount: n, children: /* @__PURE__ */ h(Xt, { asChild: !0, ...o }) });
}, "SelectPortal"), at = "SelectContent", md = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ z(function(t, n) {
    const o = pd(at, t.__scopeSelect), { forceMount: r = o.forceMount, ...s } = t, i = nt(at, t.__scopeSelect), [c, l] = a.useState();
    return oe(() => {
      l(new DocumentFragment());
    }, []), /* @__PURE__ */ h(Te, { present: r || i.open, children: ({ present: u }) => u ? /* @__PURE__ */ h(wd, { ...s, ref: n }) : /* @__PURE__ */ h(vd, { ...s, fragment: c }) });
  }, "SelectContent")
), vd = /* @__PURE__ */ a.forwardRef(/* @__PURE__ */ z(function(t, n) {
  const { __scopeSelect: o, children: r, fragment: s } = t;
  return s ? Tt.createPortal(
    /* @__PURE__ */ h(pi, { scope: o, children: /* @__PURE__ */ h(Dn.Slot, { scope: o, children: /* @__PURE__ */ h("div", { ref: n, children: r }) }) }),
    s
  ) : null;
}, "SelectContentFragment")), Se = 10, [pi, Mn] = lt(at), gd = /* @__PURE__ */ Me("SelectContent.RemoveScroll"), wd = /* @__PURE__ */ a.forwardRef(
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
      align: d,
      alignOffset: f,
      arrowPadding: p,
      collisionBoundary: g,
      collisionPadding: w,
      sticky: m,
      hideWhenDetached: v,
      avoidCollisions: C,
      //
      ...S
    } = t, b = nt(at, o), [y, x] = a.useState(null), [E, T] = a.useState(null), R = j(n, x), [_, O] = a.useState(null), [L, A] = a.useState(
      null
    ), D = er(o), [$, U] = a.useState(!1), P = a.useRef(!1);
    a.useEffect(() => {
      if (y) return Qo(y);
    }, [y]), Yt();
    const M = a.useCallback(
      (F) => {
        const [X, ...ee] = D().map((q) => q.ref.current), [Y] = ee.slice(-1), K = document.activeElement;
        for (const q of F)
          if (q === K || (q == null || q.scrollIntoView({ block: "nearest" }), q === X && E && (E.scrollTop = 0), q === Y && E && (E.scrollTop = E.scrollHeight), q == null || q.focus(), document.activeElement !== K)) return;
      },
      [D, E]
    ), N = a.useCallback(
      () => M([_, y]),
      [M, _, y]
    );
    a.useEffect(() => {
      $ && N();
    }, [$, N]);
    const { onOpenChange: V, triggerPointerDownPosRef: I } = b;
    a.useEffect(() => {
      if (y) {
        let F = { x: 0, y: 0 };
        const X = /* @__PURE__ */ z((Y) => {
          var K, q;
          F = {
            x: Math.abs(Math.round(Y.pageX) - (((K = I.current) == null ? void 0 : K.x) ?? 0)),
            y: Math.abs(Math.round(Y.pageY) - (((q = I.current) == null ? void 0 : q.y) ?? 0))
          };
        }, "handlePointerMove"), ee = /* @__PURE__ */ z((Y) => {
          F.x <= 10 && F.y <= 10 ? Y.preventDefault() : Y.composedPath().includes(y) || V(!1), document.removeEventListener("pointermove", X), I.current = null;
        }, "handlePointerUp");
        return I.current !== null && (document.addEventListener("pointermove", X), document.addEventListener("pointerup", ee, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", X), document.removeEventListener("pointerup", ee, { capture: !0 });
        };
      }
    }, [y, V, I]), a.useEffect(() => {
      const F = /* @__PURE__ */ z(() => V(!1), "close");
      return window.addEventListener("blur", F), window.addEventListener("resize", F), () => {
        window.removeEventListener("blur", F), window.removeEventListener("resize", F);
      };
    }, [V]);
    const [Z, G] = nr((F) => {
      const X = D().filter((K) => !K.disabled), ee = X.find((K) => K.ref.current === document.activeElement), Y = or(X, F, ee);
      Y && setTimeout(() => {
        var K;
        return (K = Y.ref.current) == null ? void 0 : K.focus();
      });
    }), Q = a.useCallback(
      (F, X, ee) => {
        const Y = !P.current && !ee;
        (b.value !== void 0 && b.value === X || Y) && (O(F), Y && (P.current = !0));
      },
      [b.value]
    ), ae = a.useCallback(() => y == null ? void 0 : y.focus(), [y]), ce = a.useCallback(
      (F, X, ee) => {
        const Y = !P.current && !ee;
        (b.value !== void 0 && b.value === X || Y) && A(F);
      },
      [b.value]
    ), ge = r === "popper" ? Xr : bd, he = ge === Xr ? {
      side: l,
      sideOffset: u,
      align: d,
      alignOffset: f,
      arrowPadding: p,
      collisionBoundary: g,
      collisionPadding: w,
      sticky: m,
      hideWhenDetached: v,
      avoidCollisions: C
    } : {};
    return /* @__PURE__ */ h(
      pi,
      {
        scope: o,
        content: y,
        viewport: E,
        onViewportChange: T,
        itemRefCallback: Q,
        selectedItem: _,
        onItemLeave: ae,
        itemTextRefCallback: ce,
        focusSelectedItem: N,
        selectedItemText: L,
        position: r,
        isPositioned: $,
        searchRef: Z,
        children: /* @__PURE__ */ h(An, { as: gd, allowPinchZoom: !0, children: /* @__PURE__ */ h(
          Ho,
          {
            asChild: !0,
            trapped: b.open,
            onMountAutoFocus: (F) => {
              F.preventDefault();
            },
            onUnmountAutoFocus: k(s, (F) => {
              var X;
              (X = b.trigger) == null || X.focus({ preventScroll: !0 }), F.preventDefault();
            }),
            children: /* @__PURE__ */ h(
              Gt,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: i,
                onPointerDownOutside: c,
                onFocusOutside: (F) => F.preventDefault(),
                onDismiss: () => b.onOpenChange(!1),
                children: /* @__PURE__ */ h(
                  ge,
                  {
                    role: "listbox",
                    id: b.contentId,
                    "data-state": b.open ? "open" : "closed",
                    dir: b.dir,
                    onContextMenu: (F) => F.preventDefault(),
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
                    onKeyDown: k(S.onKeyDown, (F) => {
                      const X = F.ctrlKey || F.altKey || F.metaKey;
                      if (F.key === "Tab" && F.preventDefault(), !X && F.key.length === 1 && G(F.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(F.key)) {
                        let Y = D().filter((K) => !K.disabled).map((K) => K.ref.current);
                        if (["ArrowUp", "End"].includes(F.key) && (Y = Y.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(F.key)) {
                          const K = F.target, q = Y.indexOf(K);
                          Y = Y.slice(q + 1);
                        }
                        setTimeout(() => M(Y)), F.preventDefault();
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
), bd = /* @__PURE__ */ a.forwardRef(/* @__PURE__ */ z(function(t, n) {
  const { __scopeSelect: o, onPlaced: r, ...s } = t, i = nt(at, o), c = Mn(at, o), [l, u] = a.useState(null), [d, f] = a.useState(null), p = j(n, f), g = er(o), w = a.useRef(!1), m = a.useRef(!0), { viewport: v, selectedItem: C, selectedItemText: S, focusSelectedItem: b } = c, y = a.useCallback(() => {
    if (i.trigger && i.valueNode && l && d && v && C && S) {
      const R = i.trigger.getBoundingClientRect(), _ = d.getBoundingClientRect(), O = i.valueNode.getBoundingClientRect(), L = S.getBoundingClientRect();
      if (i.dir !== "rtl") {
        const K = L.left - _.left, q = O.left - K, _e = R.left - q, Re = R.width + _e, ot = Math.max(Re, _.width), ht = window.innerWidth - Se, Ot = ao(q, [
          Se,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Se, ht - ot)
        ]);
        l.style.minWidth = Re + "px", l.style.left = Ot + "px";
      } else {
        const K = _.right - L.right, q = window.innerWidth - O.right - K, _e = window.innerWidth - R.right - q, Re = R.width + _e, ot = Math.max(Re, _.width), ht = window.innerWidth - Se, Ot = ao(q, [
          Se,
          Math.max(Se, ht - ot)
        ]);
        l.style.minWidth = Re + "px", l.style.right = Ot + "px";
      }
      const A = g(), D = window.innerHeight - Se * 2, $ = v.scrollHeight, U = window.getComputedStyle(d), P = parseInt(U.borderTopWidth, 10), M = parseInt(U.paddingTop, 10), N = parseInt(U.borderBottomWidth, 10), V = parseInt(U.paddingBottom, 10), I = P + M + $ + V + N, Z = Math.min(C.offsetHeight * 5, I), G = window.getComputedStyle(v), Q = parseInt(G.paddingTop, 10), ae = parseInt(G.paddingBottom, 10), ce = R.top + R.height / 2 - Se, ge = D - ce, he = C.offsetHeight / 2, F = C.offsetTop + he, X = P + M + F, ee = I - X;
      if (X <= ce) {
        const K = A.length > 0 && C === A[A.length - 1].ref.current;
        l.style.bottom = "0px";
        const q = d.clientHeight - v.offsetTop - v.offsetHeight, _e = Math.max(
          ge,
          he + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (K ? ae : 0) + q + N
        ), Re = X + _e;
        l.style.height = Re + "px";
      } else {
        const K = A.length > 0 && C === A[0].ref.current;
        l.style.top = "0px";
        const _e = Math.max(
          ce,
          P + v.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (K ? Q : 0) + he
        ) + ee;
        l.style.height = _e + "px", v.scrollTop = X - ce + v.offsetTop;
      }
      l.style.margin = `${Se}px 0`, l.style.minHeight = Z + "px", l.style.maxHeight = D + "px", r == null || r(), requestAnimationFrame(() => w.current = !0);
    }
  }, [
    g,
    i.trigger,
    i.valueNode,
    l,
    d,
    v,
    C,
    S,
    i.dir,
    r
  ]);
  oe(() => y(), [y]);
  const [x, E] = a.useState();
  oe(() => {
    d && E(window.getComputedStyle(d).zIndex);
  }, [d]);
  const T = a.useCallback(
    (R) => {
      R && m.current === !0 && (y(), b == null || b(), m.current = !1);
    },
    [y, b]
  );
  return /* @__PURE__ */ h(
    yd,
    {
      scope: o,
      contentWrapper: l,
      shouldExpandOnScrollRef: w,
      onScrollButtonChange: T,
      children: /* @__PURE__ */ h(
        "div",
        {
          ref: u,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: x
          },
          children: /* @__PURE__ */ h(
            B.div,
            {
              ...s,
              ref: p,
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
}, "SelectItemAlignedPosition")), Xr = /* @__PURE__ */ a.forwardRef(/* @__PURE__ */ z(function(t, n) {
  const {
    __scopeSelect: o,
    align: r = "start",
    collisionPadding: s = Se,
    ...i
  } = t, c = tr(o);
  return /* @__PURE__ */ h(
    Zo,
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
}, "SelectPopperPosition")), [yd, Cd] = lt(at, {}), qr = "SelectViewport", Sd = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ z(function(t, n) {
    const { __scopeSelect: o, nonce: r, ...s } = t, i = Mn(qr, o), c = Cd(qr, o), l = j(n, i.onViewportChange), u = a.useRef(0);
    return /* @__PURE__ */ H(Ge, { children: [
      /* @__PURE__ */ h(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ h(Dn.Slot, { scope: o, children: /* @__PURE__ */ h(
        B.div,
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
          onScroll: k(s.onScroll, (d) => {
            const f = d.currentTarget, { contentWrapper: p, shouldExpandOnScrollRef: g } = c;
            if (g != null && g.current && p) {
              const w = Math.abs(u.current - f.scrollTop);
              if (w > 0) {
                const m = window.innerHeight - Se * 2, v = parseFloat(p.style.minHeight), C = parseFloat(p.style.height), S = Math.max(v, C);
                if (S < m) {
                  const b = S + w, y = Math.min(m, b), x = b - y;
                  p.style.height = y + "px", p.style.bottom === "0px" && (f.scrollTop = x > 0 ? x : 0, p.style.justifyContent = "flex-end");
                }
              }
            }
            u.current = f.scrollTop;
          })
        }
      ) })
    ] });
  }, "SelectViewport")
), xd = "SelectGroup", [Ed, Td] = lt(xd), Pd = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ z(function(t, n) {
    const { __scopeSelect: o, ...r } = t, s = ye();
    return /* @__PURE__ */ h(Ed, { scope: o, id: s, children: /* @__PURE__ */ h(B.div, { role: "group", "aria-labelledby": s, ...r, ref: n }) });
  }, "SelectGroup")
), _d = "SelectLabel", Rd = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ z(function(t, n) {
    const { __scopeSelect: o, ...r } = t, s = Td(_d, o);
    return /* @__PURE__ */ h(B.div, { id: s.id, ...r, ref: n });
  }, "SelectLabel")
), Co = "SelectItem", [Id, hi] = lt(Co), kd = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ z(function(t, n) {
    const {
      __scopeSelect: o,
      value: r,
      disabled: s = !1,
      textValue: i,
      ...c
    } = t, l = nt(Co, o), u = Mn(Co, o), d = l.value === r, [f, p] = a.useState(i ?? ""), [g, w] = a.useState(!1), m = ue(
      (y) => {
        var x;
        return (x = u.itemRefCallback) == null ? void 0 : x.call(u, y, r, s);
      }
    ), v = j(n, m), C = ye(), S = a.useRef("touch"), b = /* @__PURE__ */ z(() => {
      s || (l.onValueChange(r), l.onOpenChange(!1));
    }, "handleSelect");
    return /* @__PURE__ */ h(
      Id,
      {
        scope: o,
        value: r,
        disabled: s,
        textId: C,
        isSelected: d,
        onItemTextChange: a.useCallback((y) => {
          p((x) => x || ((y == null ? void 0 : y.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ h(
          Dn.ItemSlot,
          {
            scope: o,
            value: r,
            disabled: s,
            textValue: f,
            children: /* @__PURE__ */ h(
              B.div,
              {
                role: "option",
                "aria-labelledby": C,
                "data-highlighted": g ? "" : void 0,
                "aria-selected": d && g,
                "data-state": d ? "checked" : "unchecked",
                "aria-disabled": s || void 0,
                "data-disabled": s ? "" : void 0,
                tabIndex: s ? void 0 : -1,
                ...c,
                ref: v,
                onFocus: k(c.onFocus, () => w(!0)),
                onBlur: k(c.onBlur, () => w(!1)),
                onClick: k(c.onClick, () => {
                  S.current !== "mouse" && b();
                }),
                onPointerUp: k(c.onPointerUp, () => {
                  S.current === "mouse" && b();
                }),
                onPointerDown: k(c.onPointerDown, (y) => {
                  S.current = y.pointerType;
                }),
                onPointerMove: k(c.onPointerMove, (y) => {
                  var x;
                  S.current = y.pointerType, s ? (x = u.onItemLeave) == null || x.call(u) : S.current === "mouse" && y.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: k(c.onPointerLeave, (y) => {
                  var x;
                  y.currentTarget === document.activeElement && ((x = u.onItemLeave) == null || x.call(u));
                }),
                onKeyDown: k(c.onKeyDown, (y) => {
                  var E;
                  s || y.target !== y.currentTarget || ((E = u.searchRef) == null ? void 0 : E.current) !== "" && y.key === " " || (ed.includes(y.key) && b(), y.key === " " && y.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }, "SelectItem")
), un = "SelectItemText", Od = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ z(function(t, n) {
    const { __scopeSelect: o, className: r, style: s, ...i } = t, c = nt(un, o), l = Mn(un, o), u = hi(un, o), d = rd(un, o), [f, p] = a.useState(null), g = ue(
      (b) => {
        var y;
        return (y = l.itemTextRefCallback) == null ? void 0 : y.call(l, b, u.value, u.disabled);
      }
    ), w = j(
      n,
      p,
      u.onItemTextChange,
      g
    ), m = f == null ? void 0 : f.textContent, v = a.useMemo(
      () => /* @__PURE__ */ h("option", { value: u.value, disabled: u.disabled, children: m }, u.value),
      [u.disabled, u.value, m]
    ), { onNativeOptionAdd: C, onNativeOptionRemove: S } = d;
    return oe(() => (C(v), () => S(v)), [C, S, v]), /* @__PURE__ */ H(Ge, { children: [
      /* @__PURE__ */ h(B.span, { id: u.textId, ...i, ref: w }),
      u.isSelected && c.valueNode && !c.valueNodeHasChildren && !Zt(c.value) ? Tt.createPortal(i.children, c.valueNode) : null
    ] });
  }, "SelectItemText")
), Ad = "SelectItemIndicator", Dd = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ z(function(t, n) {
    const { __scopeSelect: o, ...r } = t;
    return hi(Ad, o).isSelected ? /* @__PURE__ */ h(B.span, { "aria-hidden": !0, ...r, ref: n }) : null;
  }, "SelectItemIndicator")
), Md = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ z(function(t, n) {
    const { __scopeSelect: o, ...r } = t;
    return /* @__PURE__ */ h(B.div, { "aria-hidden": !0, ...r, ref: n });
  }, "SelectSeparator")
), Nd = "SelectBubbleInput", $d = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ z(function({ __scopeSelect: t, ...n }, o) {
    const r = nt(Nd, t), { value: s, onValueChange: i, required: c, disabled: l, name: u, autoComplete: d, form: f } = r, { nativeOptions: p, nativeSelectKey: g } = r, w = a.useRef(null), m = j(o, w), v = s ?? "", C = ni(v), S = Array.from(p).some(
      (b) => (b.props.value ?? "") === ""
    );
    return a.useEffect(() => {
      const b = w.current;
      if (!b) return;
      const y = window.HTMLSelectElement.prototype, E = Object.getOwnPropertyDescriptor(
        y,
        "value"
      ).set;
      if (C !== v && E) {
        const T = new Event("change", { bubbles: !0 });
        E.call(b, v), b.dispatchEvent(T);
      }
    }, [C, v]), /* @__PURE__ */ H(
      B.select,
      {
        "aria-hidden": !0,
        required: c,
        tabIndex: -1,
        name: u,
        autoComplete: d,
        disabled: l,
        form: f,
        onChange: (b) => i(b.target.value),
        ...n,
        style: { ...oi, ...n.style },
        ref: m,
        defaultValue: v,
        children: [
          Zt(s) && !S ? /* @__PURE__ */ h("option", { value: "" }) : null,
          Array.from(p)
        ]
      },
      g
    );
  }, "SelectBubbleInput")
);
function mi(e) {
  return typeof e == "function";
}
z(mi, "isFunction");
function Zt(e) {
  return e === "" || e === void 0;
}
z(Zt, "shouldShowPlaceholder");
function nr(e) {
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
z(nr, "useTypeaheadSearch");
function or(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let i = vi(e, Math.max(s, 0));
  r.length === 1 && (i = i.filter((u) => u !== n));
  const l = i.find(
    (u) => u.textValue.toLowerCase().startsWith(r.toLowerCase())
  );
  return l !== n ? l : void 0;
}
z(or, "findNextItem");
function vi(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
z(vi, "wrapArray");
const Ld = "wk-Select_trigger", Fd = "wk-Select_sm", Bd = "wk-Select_md", Vd = "wk-Select_lg", Hd = "wk-Select_icon", Wd = "wk-Select_content", Ud = "wk-Select_viewport", jd = "wk-Select_item", Kd = "wk-Select_itemIndicator", zd = "wk-Select_label", Gd = "wk-Select_separator", Fe = {
  trigger: Ld,
  sm: Fd,
  md: Bd,
  lg: Vd,
  icon: Hd,
  content: Wd,
  viewport: Ud,
  item: jd,
  itemIndicator: Kd,
  label: zd,
  separator: Gd
};
function yg({
  placeholder: e,
  size: t = "md",
  children: n,
  className: o,
  id: r,
  "aria-label": s,
  ...i
}) {
  const c = $o();
  return /* @__PURE__ */ H(sd, { ...i, children: [
    /* @__PURE__ */ H(
      cd,
      {
        id: r ?? (c == null ? void 0 : c.inputId),
        "aria-label": s,
        "aria-invalid": (c == null ? void 0 : c.invalid) || void 0,
        "aria-describedby": c == null ? void 0 : c.describedBy,
        className: W(Fe.trigger, Fe[t], o),
        children: [
          /* @__PURE__ */ h(ld, { placeholder: e }),
          /* @__PURE__ */ h(ud, { className: Fe.icon, children: /* @__PURE__ */ h(bc, {}) })
        ]
      }
    ),
    /* @__PURE__ */ h(hd, { children: /* @__PURE__ */ h(md, { className: Fe.content, position: "popper", sideOffset: 4, children: /* @__PURE__ */ h(Sd, { className: Fe.viewport, children: n }) }) })
  ] });
}
const Cg = Ce(
  function({ className: t, children: n, ...o }, r) {
    return /* @__PURE__ */ H(kd, { ref: r, className: W(Fe.item, t), ...o, children: [
      /* @__PURE__ */ h(Od, { children: n }),
      /* @__PURE__ */ h(Dd, { className: Fe.itemIndicator, children: /* @__PURE__ */ h(ss, {}) })
    ] });
  }
);
function Sg({ label: e, children: t }) {
  return /* @__PURE__ */ H(Pd, { children: [
    /* @__PURE__ */ h(Rd, { className: Fe.label, children: e }),
    t
  ] });
}
function xg() {
  return /* @__PURE__ */ h(Md, { className: Fe.separator });
}
var Yd = Object.defineProperty, et = (e, t) => Yd(e, "name", { value: t, configurable: !0 }), rr = "Switch", [Xd, Eg] = /* @__PURE__ */ pe(rr), [qd, sr] = Xd(rr);
function gi(e) {
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
    value: d = "on",
    // @ts-expect-error
    internal_do_not_use_render: f
  } = e, [p, g] = xe({
    prop: n,
    defaultProp: r ?? !1,
    onChange: l,
    caller: rr
  }), [w, m] = a.useState(null), [v, C] = a.useState(null), S = a.useRef(!1), [b, y] = a.useReducer(
    (T) => T + 1,
    0
  ), x = w ? !!i || !!w.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), E = {
    checked: p,
    setChecked: g,
    disabled: s,
    control: w,
    setControl: m,
    name: c,
    form: i,
    value: d,
    hasConsumerStoppedPropagationRef: S,
    userInteractionCount: b,
    onUserInteraction: y,
    required: u,
    defaultChecked: r,
    isFormControl: x,
    bubbleInput: v,
    setBubbleInput: C
  };
  return /* @__PURE__ */ h(qd, { scope: t, ...E, children: wi(f) ? f(E) : o });
}
et(gi, "SwitchProvider");
var Zd = "SwitchTrigger", Jd = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ et(function({ __scopeSwitch: t, onClick: n, ...o }, r) {
    const {
      control: s,
      form: i,
      value: c,
      disabled: l,
      checked: u,
      required: d,
      setControl: f,
      setChecked: p,
      hasConsumerStoppedPropagationRef: g,
      onUserInteraction: w,
      isFormControl: m,
      bubbleInput: v
    } = sr(Zd, t), C = j(r, f), S = a.useRef(u);
    return a.useEffect(() => {
      const b = i ? s == null ? void 0 : s.ownerDocument.getElementById(i) : s == null ? void 0 : s.form;
      if (b instanceof HTMLFormElement) {
        const y = /* @__PURE__ */ et(() => p(S.current), "reset");
        return b.addEventListener("reset", y), () => b.removeEventListener("reset", y);
      }
    }, [s, i, p]), /* @__PURE__ */ h(
      B.button,
      {
        type: "button",
        role: "switch",
        "aria-checked": u,
        "aria-required": d,
        "data-state": ir(u),
        "data-disabled": l ? "" : void 0,
        disabled: l,
        value: c,
        ...o,
        ref: C,
        onClick: k(n, (b) => {
          w(), p((y) => !y), v && m && (g.current = b.isPropagationStopped(), g.current || b.stopPropagation());
        })
      }
    );
  }, "SwitchTrigger")
), Qd = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ et(function(t, n) {
    const {
      __scopeSwitch: o,
      name: r,
      checked: s,
      defaultChecked: i,
      required: c,
      disabled: l,
      value: u,
      onCheckedChange: d,
      form: f,
      ...p
    } = t;
    return /* @__PURE__ */ h(
      gi,
      {
        __scopeSwitch: o,
        checked: s,
        defaultChecked: i,
        disabled: l,
        required: c,
        onCheckedChange: d,
        name: r,
        form: f,
        value: u,
        internal_do_not_use_render: ({ isFormControl: g }) => /* @__PURE__ */ H(Ge, { children: [
          /* @__PURE__ */ h(
            Jd,
            {
              ...p,
              ref: n,
              __scopeSwitch: o
            }
          ),
          g && /* @__PURE__ */ h(
            of,
            {
              __scopeSwitch: o
            }
          )
        ] })
      }
    );
  }, "Switch")
), ef = "SwitchThumb", tf = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ et(function(t, n) {
    const { __scopeSwitch: o, ...r } = t, s = sr(ef, o);
    return /* @__PURE__ */ h(
      B.span,
      {
        "data-state": ir(s.checked),
        "data-disabled": s.disabled ? "" : void 0,
        ...r,
        ref: n
      }
    );
  }, "SwitchThumb")
), nf = "SwitchBubbleInput", of = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ et(function({ __scopeSwitch: t, onClick: n, ...o }, r) {
    const {
      control: s,
      hasConsumerStoppedPropagationRef: i,
      userInteractionCount: c,
      checked: l,
      defaultChecked: u,
      required: d,
      disabled: f,
      name: p,
      value: g,
      form: w,
      bubbleInput: m,
      setBubbleInput: v
    } = sr(nf, t), C = j(r, v), S = In(s), b = a.useRef(!1), y = a.useRef(l), x = a.useRef(c);
    a.useEffect(() => {
      const T = m;
      if (!T) return;
      const R = window.HTMLInputElement.prototype, O = Object.getOwnPropertyDescriptor(
        R,
        "checked"
      ).set, L = c !== x.current;
      x.current = c;
      const A = y.current !== l;
      y.current = l;
      const D = !(L && i.current);
      if (A && O) {
        b.current = !L;
        const $ = new Event("click", { bubbles: D });
        O.call(T, l), T.dispatchEvent($), b.current = !1;
      }
    }, [m, l, i, c]);
    const E = a.useRef(l);
    return /* @__PURE__ */ h(
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
        ref: C,
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
function wi(e) {
  return typeof e == "function";
}
et(wi, "isFunction");
function ir(e) {
  return e ? "checked" : "unchecked";
}
et(ir, "getState");
const rf = "wk-Switch_wrapper", sf = "wk-Switch_root", cf = "wk-Switch_thumb", af = "wk-Switch_label", dn = {
  wrapper: rf,
  root: sf,
  thumb: cf,
  label: af
}, Tg = Ce(function({ label: t, className: n, id: o, ...r }, s) {
  const i = jt(), c = o ?? i, l = /* @__PURE__ */ h(Qd, { ref: s, id: c, className: W(dn.root, n), ...r, children: /* @__PURE__ */ h(tf, { className: dn.thumb }) });
  return t ? /* @__PURE__ */ H("span", { className: dn.wrapper, children: [
    l,
    /* @__PURE__ */ h("label", { className: dn.label, htmlFor: c, children: t })
  ] }) : l;
});
var lf = Object.defineProperty, ze = (e, t) => lf(e, "name", { value: t, configurable: !0 }), cr = "Checkbox", [uf, Pg] = /* @__PURE__ */ pe(cr), [df, ar] = uf(cr);
function bi(e) {
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
    value: d = "on",
    // @ts-expect-error
    internal_do_not_use_render: f
  } = e, [p, g] = xe({
    prop: n,
    defaultProp: r ?? !1,
    onChange: l,
    caller: cr
  }), [w, m] = a.useState(null), [v, C] = a.useState(null), S = a.useRef(!1), [b, y] = a.useReducer(
    (T) => T + 1,
    0
  ), x = w ? !!i || !!w.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), E = {
    checked: p,
    disabled: s,
    setChecked: g,
    control: w,
    setControl: m,
    name: c,
    form: i,
    value: d,
    hasConsumerStoppedPropagationRef: S,
    userInteractionCount: b,
    onUserInteraction: y,
    required: u,
    defaultChecked: Ue(r) ? !1 : r,
    isFormControl: x,
    bubbleInput: v,
    setBubbleInput: C
  };
  return /* @__PURE__ */ h(
    df,
    {
      scope: t,
      ...E,
      children: yi(f) ? f(E) : o
    }
  );
}
ze(bi, "CheckboxProvider");
var ff = "CheckboxTrigger", pf = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ ze(function({ __scopeCheckbox: t, onKeyDown: n, onClick: o, ...r }, s) {
    const {
      control: i,
      value: c,
      disabled: l,
      checked: u,
      required: d,
      setControl: f,
      setChecked: p,
      hasConsumerStoppedPropagationRef: g,
      onUserInteraction: w,
      isFormControl: m,
      bubbleInput: v
    } = ar(ff, t), C = j(s, f), S = a.useRef(u);
    return a.useEffect(() => {
      const b = i == null ? void 0 : i.form;
      if (b) {
        const y = /* @__PURE__ */ ze(() => p(S.current), "reset");
        return b.addEventListener("reset", y), () => b.removeEventListener("reset", y);
      }
    }, [i, p]), /* @__PURE__ */ h(
      B.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": Ue(u) ? "mixed" : u,
        "aria-required": d,
        "data-state": lr(u),
        "data-disabled": l ? "" : void 0,
        disabled: l,
        value: c,
        ...r,
        ref: C,
        onKeyDown: k(n, (b) => {
          b.key === "Enter" && b.preventDefault();
        }),
        onClick: k(o, (b) => {
          w(), p((y) => Ue(y) ? !0 : !y), v && m && (g.current = b.isPropagationStopped(), g.current || b.stopPropagation());
        })
      }
    );
  }, "CheckboxTrigger")
), hf = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ze(function(t, n) {
    const {
      __scopeCheckbox: o,
      name: r,
      checked: s,
      defaultChecked: i,
      required: c,
      disabled: l,
      value: u,
      onCheckedChange: d,
      form: f,
      ...p
    } = t;
    return /* @__PURE__ */ h(
      bi,
      {
        __scopeCheckbox: o,
        checked: s,
        defaultChecked: i,
        disabled: l,
        required: c,
        onCheckedChange: d,
        name: r,
        form: f,
        value: u,
        internal_do_not_use_render: ({ isFormControl: g }) => /* @__PURE__ */ H(Ge, { children: [
          /* @__PURE__ */ h(
            pf,
            {
              ...p,
              ref: n,
              __scopeCheckbox: o
            }
          ),
          g && /* @__PURE__ */ h(
            wf,
            {
              __scopeCheckbox: o
            }
          )
        ] })
      }
    );
  }, "Checkbox")
), mf = "CheckboxIndicator", vf = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ze(function(t, n) {
    const { __scopeCheckbox: o, forceMount: r, ...s } = t, i = ar(mf, o);
    return /* @__PURE__ */ h(
      Te,
      {
        present: r || Ue(i.checked) || i.checked === !0,
        children: /* @__PURE__ */ h(
          B.span,
          {
            "data-state": lr(i.checked),
            "data-disabled": i.disabled ? "" : void 0,
            ...s,
            ref: n,
            style: { pointerEvents: "none", ...t.style }
          }
        )
      }
    );
  }, "CheckboxIndicator")
), gf = "CheckboxBubbleInput", wf = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ze(function({ __scopeCheckbox: t, onClick: n, ...o }, r) {
    const {
      control: s,
      hasConsumerStoppedPropagationRef: i,
      userInteractionCount: c,
      checked: l,
      defaultChecked: u,
      required: d,
      disabled: f,
      name: p,
      value: g,
      form: w,
      bubbleInput: m,
      setBubbleInput: v
    } = ar(gf, t), C = j(r, v), S = In(s), b = a.useRef(!1), y = a.useRef(l), x = a.useRef(c);
    a.useEffect(() => {
      const T = m;
      if (!T) return;
      const R = window.HTMLInputElement.prototype, O = Object.getOwnPropertyDescriptor(
        R,
        "checked"
      ).set, L = c !== x.current;
      x.current = c;
      const A = y.current !== l;
      y.current = l;
      const D = !(L && i.current);
      if (A && O) {
        b.current = !L;
        const $ = new Event("click", { bubbles: D });
        T.indeterminate = Ue(l), O.call(T, Ue(l) ? !1 : l), T.dispatchEvent($), b.current = !1;
      }
    }, [m, l, i, c]);
    const E = a.useRef(Ue(l) ? !1 : l);
    return /* @__PURE__ */ h(
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
        ref: C,
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
function yi(e) {
  return typeof e == "function";
}
ze(yi, "isFunction");
function Ue(e) {
  return e === "indeterminate";
}
ze(Ue, "isIndeterminate");
function lr(e) {
  return Ue(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
ze(lr, "getState");
const bf = "wk-Checkbox_wrapper", yf = "wk-Checkbox_root", Cf = "wk-Checkbox_indicator", Sf = "wk-Checkbox_dash", xf = "wk-Checkbox_label", Mt = {
  wrapper: bf,
  root: yf,
  indicator: Cf,
  dash: Sf,
  label: xf
}, _g = Ce(function({ label: t, className: n, id: o, ...r }, s) {
  const i = jt(), c = o ?? i, l = /* @__PURE__ */ h(hf, { ref: s, id: c, className: W(Mt.root, n), ...r, children: /* @__PURE__ */ h(vf, { className: Mt.indicator, children: r.checked === "indeterminate" ? /* @__PURE__ */ h("span", { className: Mt.dash }) : /* @__PURE__ */ h(ss, {}) }) });
  return t ? /* @__PURE__ */ H("span", { className: Mt.wrapper, children: [
    l,
    /* @__PURE__ */ h("label", { className: Mt.label, htmlFor: c, children: t })
  ] }) : l;
});
var Ef = Object.defineProperty, ve = (e, t) => Ef(e, "name", { value: t, configurable: !0 }), ur = "Dialog", [Ci, Rg] = /* @__PURE__ */ pe(ur), [Tf, Pe] = Ci(ur), Pf = /* @__PURE__ */ ve((e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: o,
    defaultOpen: r,
    onOpenChange: s,
    modal: i = !0
  } = e, c = a.useRef(null), l = a.useRef(null), [u, d] = xe({
    prop: o,
    defaultProp: r ?? !1,
    onChange: s,
    caller: ur
  }), [f, p] = a.useState(0), [g, w] = a.useState(0);
  return /* @__PURE__ */ h(
    Tf,
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
      onOpenToggle: a.useCallback(() => d((m) => !m), [d]),
      modal: i,
      children: n
    }
  );
}, "Dialog"), _f = "DialogTrigger", Rf = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ ve(function(t, n) {
    const { __scopeDialog: o, ...r } = t, s = Pe(_f, o), i = j(n, s.triggerRef);
    return /* @__PURE__ */ h(
      B.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": s.open,
        "aria-controls": s.open ? s.contentId : void 0,
        "data-state": Nn(s.open),
        ...r,
        ref: i,
        onClick: k(t.onClick, s.onOpenToggle)
      }
    );
  }, "DialogTrigger")
), Si = "DialogPortal", [If, xi] = Ci(Si, {
  forceMount: void 0
}), kf = /* @__PURE__ */ ve((e) => {
  const { __scopeDialog: t, forceMount: n, children: o, container: r } = e, s = Pe(Si, t);
  return /* @__PURE__ */ h(If, { scope: t, forceMount: n, children: a.Children.map(o, (i) => /* @__PURE__ */ h(Te, { present: n || s.open, children: /* @__PURE__ */ h(Xt, { asChild: !0, container: r, children: i }) })) });
}, "DialogPortal"), So = "DialogOverlay", Of = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ ve(function(t, n) {
    const o = xi(So, t.__scopeDialog), { forceMount: r = o.forceMount, ...s } = t, i = Pe(So, t.__scopeDialog);
    return i.modal ? /* @__PURE__ */ h(Te, { present: r || i.open, children: /* @__PURE__ */ h(Df, { ...s, ref: n }) }) : null;
  }, "DialogOverlay")
), Af = /* @__PURE__ */ Me("DialogOverlay.RemoveScroll"), Df = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ve(function(t, n) {
    const { __scopeDialog: o, ...r } = t, s = Pe(So, o), i = Es(), c = j(n, i);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ h(An, { as: Af, allowPinchZoom: !0, shards: [s.contentRef], children: /* @__PURE__ */ h(
        B.div,
        {
          "data-state": Nn(s.open),
          ...r,
          ref: c,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }, "DialogOverlayImpl")
), Wt = "DialogContent", Mf = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ ve(function(t, n) {
    const o = xi(Wt, t.__scopeDialog), { forceMount: r = o.forceMount, ...s } = t, i = Pe(Wt, t.__scopeDialog);
    return /* @__PURE__ */ h(Te, { present: r || i.open, children: i.modal ? /* @__PURE__ */ h(Nf, { ...s, ref: n }) : /* @__PURE__ */ h($f, { ...s, ref: n }) });
  }, "DialogContent")
), Nf = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ve(function(t, n) {
    const o = Pe(Wt, t.__scopeDialog), r = a.useRef(null), s = j(n, o.contentRef, r);
    return a.useEffect(() => {
      const i = r.current;
      if (i) return Qo(i);
    }, []), /* @__PURE__ */ h(
      Ei,
      {
        ...t,
        ref: s,
        trapFocus: o.open,
        disableOutsidePointerEvents: o.open,
        onCloseAutoFocus: k(t.onCloseAutoFocus, (i) => {
          var c;
          i.preventDefault(), (c = o.triggerRef.current) == null || c.focus();
        }),
        onPointerDownOutside: k(t.onPointerDownOutside, (i) => {
          const c = i.detail.originalEvent, l = c.button === 0 && c.ctrlKey === !0;
          (c.button === 2 || l) && i.preventDefault();
        }),
        onFocusOutside: k(
          t.onFocusOutside,
          (i) => i.preventDefault()
        )
      }
    );
  }, "DialogContentModal")
), $f = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ve(function(t, n) {
    const o = Pe(Wt, t.__scopeDialog), r = a.useRef(!1), s = a.useRef(!1);
    return /* @__PURE__ */ h(
      Ei,
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
          var u, d;
          (u = t.onInteractOutside) == null || u.call(t, i), i.defaultPrevented || (r.current = !0, i.detail.originalEvent.type === "pointerdown" && (s.current = !0));
          const c = i.target;
          ((d = o.triggerRef.current) == null ? void 0 : d.contains(c)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && s.current && i.preventDefault();
        }
      }
    );
  }, "DialogContentNonModal")
), Ei = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ve(function(t, n) {
    const { __scopeDialog: o, trapFocus: r, onOpenAutoFocus: s, onCloseAutoFocus: i, ...c } = t, l = Pe(Wt, o);
    return Yt(), /* @__PURE__ */ h(Ge, { children: /* @__PURE__ */ h(
      Ho,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: s,
        onUnmountAutoFocus: i,
        children: /* @__PURE__ */ h(
          Gt,
          {
            role: "dialog",
            id: l.contentId,
            "aria-describedby": l.descriptionPresent ? l.descriptionId : void 0,
            "aria-labelledby": l.titlePresent ? l.titleId : void 0,
            "data-state": Nn(l.open),
            ...c,
            ref: n,
            deferPointerDownOutside: !0,
            onDismiss: () => l.onOpenChange(!1)
          }
        )
      }
    ) });
  }, "DialogContentImpl")
), Lf = "DialogTitle", Zr = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ ve(function(t, n) {
    const { __scopeDialog: o, ...r } = t, s = Pe(Lf, o), { setTitleCount: i } = s;
    return oe(() => (i((c) => c + 1), () => i((c) => c - 1)), [i]), /* @__PURE__ */ h(B.h2, { id: s.titleId, ...r, ref: n });
  }, "DialogTitle")
), Ff = "DialogDescription", Bf = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ve(function(t, n) {
    const { __scopeDialog: o, ...r } = t, s = Pe(Ff, o), { setDescriptionCount: i } = s;
    return oe(() => (i((c) => c + 1), () => i((c) => c - 1)), [i]), /* @__PURE__ */ h(B.p, { id: s.descriptionId, ...r, ref: n });
  }, "DialogDescription")
), Vf = "DialogClose", Ti = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ ve(function(t, n) {
    const { __scopeDialog: o, ...r } = t, s = Pe(Vf, o);
    return /* @__PURE__ */ h(
      B.button,
      {
        type: "button",
        ...r,
        ref: n,
        onClick: k(t.onClick, () => s.onOpenChange(!1))
      }
    );
  }, "DialogClose")
);
function Nn(e) {
  return e ? "open" : "closed";
}
ve(Nn, "getState");
const Hf = "wk-Semantic_heading", Wf = "wk-Semantic_text", Uf = "wk-Semantic_muted", jf = "wk-Semantic_subtle", Kf = "wk-Semantic_danger", zf = "wk-Semantic_mono", Gf = "wk-Semantic_xs", Yf = "wk-Semantic_sm", Xf = "wk-Semantic_md", qf = "wk-Semantic_lg", Zf = "wk-Semantic_xl", Jf = "wk-Semantic_xxl", Qf = "wk-Semantic_link", ep = "wk-Semantic_visuallyHidden", we = {
  heading: Hf,
  text: Wf,
  muted: Uf,
  subtle: jf,
  danger: Kf,
  mono: zf,
  xs: Gf,
  sm: Yf,
  md: Xf,
  lg: qf,
  xl: Zf,
  xxl: Jf,
  link: Qf,
  visuallyHidden: ep
};
function Pi({ className: e, ...t }) {
  return /* @__PURE__ */ h("span", { className: W(we.visuallyHidden, e), ...t });
}
const tp = "wk-Dialog_overlay", np = "wk-Dialog_content", op = "wk-Dialog_header", rp = "wk-Dialog_headings", sp = "wk-Dialog_title", ip = "wk-Dialog_description", cp = "wk-Dialog_close", ap = "wk-Dialog_footer", Xe = {
  overlay: tp,
  content: np,
  header: op,
  headings: rp,
  title: sp,
  description: ip,
  close: cp,
  footer: ap
};
function Ig({
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
  return /* @__PURE__ */ H(Pf, { ...u, children: [
    s && /* @__PURE__ */ h(Rf, { asChild: !0, children: s }),
    /* @__PURE__ */ H(kf, { children: [
      /* @__PURE__ */ h(Of, { className: Xe.overlay }),
      /* @__PURE__ */ H(
        Mf,
        {
          className: W(Xe.content, l),
          style: i ? { "--wk-dialog-w": i } : void 0,
          children: [
            /* @__PURE__ */ H("div", { className: Xe.header, children: [
              /* @__PURE__ */ H("div", { className: Xe.headings, children: [
                t ? /* @__PURE__ */ h(Zr, { asChild: !0, children: /* @__PURE__ */ h(Pi, { children: e }) }) : /* @__PURE__ */ h(Zr, { className: Xe.title, children: e }),
                n && /* @__PURE__ */ h(Bf, { className: Xe.description, children: n })
              ] }),
              c && /* @__PURE__ */ h(Ti, { className: Xe.close, "aria-label": "Close", children: /* @__PURE__ */ h(Mo, {}) })
            ] }),
            o,
            r && /* @__PURE__ */ h("div", { className: Xe.footer, children: r })
          ]
        }
      )
    ] })
  ] });
}
const kg = Ti;
var lp = Object.defineProperty, dr = (e, t) => lp(e, "name", { value: t, configurable: !0 }), eo = !1;
function _i() {
  const [e, t] = a.useState(eo);
  return a.useEffect(() => {
    eo || (eo = !0, t(!0));
  }, []), e;
}
dr(_i, "useIsHydrated");
var Ri = a[" useSyncExternalStore ".trim().toString()];
function Ii() {
  return () => {
  };
}
dr(Ii, "subscribe");
function ki() {
  return Ri(
    Ii,
    () => !0,
    () => !1
  );
}
dr(ki, "useIsHydratedModern");
var up = typeof Ri == "function" ? ki : _i, dp = Object.defineProperty, ut = (e, t) => dp(e, "name", { value: t, configurable: !0 }), to = "rovingFocusGroup.onEntryFocus", fp = { bubbles: !1, cancelable: !0 }, $n = "RovingFocusGroup", [xo, Oi, pp] = /* @__PURE__ */ Kt($n), [hp, Ln] = /* @__PURE__ */ pe(
  $n,
  [pp]
), [mp, vp] = hp($n), gp = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ut(function(t, n) {
    return /* @__PURE__ */ h(xo.Provider, { scope: t.__scopeRovingFocusGroup, children: /* @__PURE__ */ h(xo.Slot, { scope: t.__scopeRovingFocusGroup, children: /* @__PURE__ */ h(wp, { ...t, ref: n }) }) });
  }, "RovingFocusGroup")
), wp = /* @__PURE__ */ a.forwardRef(/* @__PURE__ */ ut(function(t, n) {
  const {
    __scopeRovingFocusGroup: o,
    orientation: r,
    loop: s = !1,
    dir: i,
    currentTabStopId: c,
    defaultCurrentTabStopId: l,
    onCurrentTabStopIdChange: u,
    onEntryFocus: d,
    preventScrollOnEntryFocus: f = !1,
    ...p
  } = t, g = a.useRef(null), w = j(n, g), m = zt(i), [v, C] = xe({
    prop: c,
    defaultProp: l ?? null,
    onChange: u,
    caller: $n
  }), [S, b] = a.useState(!1), y = ue(d), x = Oi(o), E = a.useRef(!1), [T, R] = a.useState(0);
  return a.useEffect(() => {
    const _ = g.current;
    if (_)
      return _.addEventListener(to, y), () => _.removeEventListener(to, y);
  }, [y]), /* @__PURE__ */ h(
    mp,
    {
      scope: o,
      orientation: r,
      dir: m,
      loop: s,
      currentTabStopId: v,
      onItemFocus: a.useCallback(
        (_) => C(_),
        [C]
      ),
      onItemShiftTab: a.useCallback(() => b(!0), []),
      onFocusableItemAdd: a.useCallback(
        () => R((_) => _ + 1),
        []
      ),
      onFocusableItemRemove: a.useCallback(
        () => R((_) => _ - 1),
        []
      ),
      children: /* @__PURE__ */ h(
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
          onFocus: k(t.onFocus, (_) => {
            const O = !E.current;
            if (_.target === _.currentTarget && O && !S) {
              const L = new CustomEvent(to, fp);
              if (_.currentTarget.dispatchEvent(L), !L.defaultPrevented) {
                const A = x().filter((M) => M.focusable), D = A.find((M) => M.active), $ = A.find((M) => M.id === v), P = [D, $, ...A].filter(
                  Boolean
                ).map((M) => M.ref.current);
                fr(P, f);
              }
            }
            E.current = !1;
          }),
          onBlur: k(t.onBlur, () => b(!1))
        }
      )
    }
  );
}, "RovingFocusGroupImpl")), bp = "RovingFocusGroupItem", yp = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ut(function(t, n) {
    const {
      __scopeRovingFocusGroup: o,
      focusable: r = !0,
      active: s = !1,
      tabStopId: i,
      children: c,
      ...l
    } = t, u = ye(), d = i || u, f = vp(bp, o), p = f.currentTabStopId === d, g = Oi(o), { onFocusableItemAdd: w, onFocusableItemRemove: m, currentTabStopId: v } = f, C = up();
    return oe(() => {
      if (!(!C || !r))
        return w(), () => m();
    }, [C, r, w, m]), a.useEffect(() => {
      if (!(C || !r))
        return w(), () => m();
    }, [C, r, w, m]), /* @__PURE__ */ h(
      xo.ItemSlot,
      {
        scope: o,
        id: d,
        focusable: r,
        active: s,
        children: /* @__PURE__ */ h(
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
              const b = Di(S, f.orientation, f.dir);
              if (b !== void 0) {
                if (S.metaKey || S.ctrlKey || S.altKey || S.shiftKey) return;
                S.preventDefault();
                let x = g().filter((E) => E.focusable).map((E) => E.ref.current);
                if (b === "last") x.reverse();
                else if (b === "prev" || b === "next") {
                  b === "prev" && x.reverse();
                  const E = x.indexOf(S.currentTarget);
                  x = f.loop ? Mi(x, E + 1) : x.slice(E + 1);
                }
                setTimeout(() => fr(x));
              }
            }),
            children: typeof c == "function" ? c({ isCurrentTabStop: p, hasTabStop: v != null }) : c
          }
        )
      }
    );
  }, "RovingFocusGroupItem")
), Cp = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Ai(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
ut(Ai, "getDirectionAwareKey");
function Di(e, t, n) {
  const o = Ai(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
    return Cp[o];
}
ut(Di, "getFocusIntent");
function fr(e, t = !1) {
  const n = document.activeElement;
  for (const o of e)
    if (o === n || (o.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
ut(fr, "focusFirst");
function Mi(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
ut(Mi, "wrapArray");
var Ni = gp, $i = yp, Sp = Object.defineProperty, J = (e, t) => Sp(e, "name", { value: t, configurable: !0 }), xp = ["Enter", " "], Ep = ["ArrowDown", "PageUp", "Home"], Li = ["ArrowUp", "PageDown", "End"], Tp = [...Ep, ...Li], Fn = "Menu", [Eo, Pp, _p] = /* @__PURE__ */ Kt(Fn), [dt, Fi] = /* @__PURE__ */ pe(Fn, [
  _p,
  It,
  Ln
]), pr = It(), Bi = Ln(), [Rp, Jt] = dt(Fn), [Ip, hr] = dt(Fn), kp = /* @__PURE__ */ J((e) => {
  const { __scopeMenu: t, open: n = !1, children: o, dir: r, onOpenChange: s, modal: i = !0 } = e, c = pr(t), [l, u] = a.useState(null), d = a.useRef(!1), f = ue(s), p = zt(r);
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
  }, [n, f]), /* @__PURE__ */ h(Xo, { ...c, children: /* @__PURE__ */ h(
    Rp,
    {
      scope: t,
      open: n,
      onOpenChange: f,
      content: l,
      onContentChange: u,
      children: /* @__PURE__ */ h(
        Ip,
        {
          scope: t,
          onClose: a.useCallback(() => f(!1), [f]),
          isUsingKeyboardRef: d,
          dir: p,
          modal: i,
          children: o
        }
      )
    }
  ) });
}, "Menu"), Op = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ J(function(t, n) {
    const { __scopeMenu: o, ...r } = t, s = pr(o);
    return /* @__PURE__ */ h(qo, { ...s, ...r, ref: n });
  }, "MenuAnchor")
), Vi = "MenuPortal", [Ap, Dp] = dt(Vi, {
  forceMount: void 0
}), Mp = /* @__PURE__ */ J((e) => {
  const { __scopeMenu: t, forceMount: n, children: o, container: r } = e, s = Jt(Vi, t);
  return /* @__PURE__ */ h(Ap, { scope: t, forceMount: n, children: /* @__PURE__ */ h(Te, { present: n || s.open, children: /* @__PURE__ */ h(Xt, { asChild: !0, container: r, children: o }) }) });
}, "MenuPortal"), Ze = "MenuContent", [Np, Hi] = dt(Ze), $p = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ J(function(t, n) {
    const o = Dp(Ze, t.__scopeMenu), { forceMount: r = o.forceMount, ...s } = t, i = Jt(Ze, t.__scopeMenu), c = hr(Ze, t.__scopeMenu);
    return /* @__PURE__ */ h(Eo.Provider, { scope: t.__scopeMenu, children: /* @__PURE__ */ h(Te, { present: r || i.open, children: /* @__PURE__ */ h(Eo.Slot, { scope: t.__scopeMenu, children: c.modal ? /* @__PURE__ */ h(Lp, { ...s, ref: n }) : /* @__PURE__ */ h(Fp, { ...s, ref: n }) }) }) });
  }, "MenuContent")
), Lp = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ J(function(t, n) {
    const o = Jt(Ze, t.__scopeMenu), r = a.useRef(null), s = j(n, r);
    return a.useEffect(() => {
      const i = r.current;
      if (i) return Qo(i);
    }, []), /* @__PURE__ */ h(
      Wi,
      {
        ...t,
        ref: s,
        trapFocus: o.open,
        disableOutsidePointerEvents: o.open,
        disableOutsideScroll: !0,
        onFocusOutside: k(
          t.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => o.onOpenChange(!1)
      }
    );
  }, "MenuRootContentModal")
), Fp = /* @__PURE__ */ a.forwardRef(/* @__PURE__ */ J(function(t, n) {
  const o = Jt(Ze, t.__scopeMenu);
  return /* @__PURE__ */ h(
    Wi,
    {
      ...t,
      ref: n,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => o.onOpenChange(!1)
    }
  );
}, "MenuRootContentNonModal")), Bp = /* @__PURE__ */ Me("MenuContent.ScrollLock"), Wi = /* @__PURE__ */ a.forwardRef(
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
      onEscapeKeyDown: d,
      onPointerDownOutside: f,
      onFocusOutside: p,
      onInteractOutside: g,
      onDismiss: w,
      disableOutsideScroll: m,
      ...v
    } = t, C = Jt(Ze, o), S = hr(Ze, o), b = pr(o), y = Bi(o), x = Pp(o), [E, T] = a.useState(null), R = a.useRef(null), _ = j(n, R, C.onContentChange), O = a.useRef(0), L = a.useRef(""), A = a.useRef(0), D = a.useRef(null), $ = a.useRef("right"), U = a.useRef(0), P = m ? An : a.Fragment, M = m ? { as: Bp, allowPinchZoom: !0 } : void 0, N = /* @__PURE__ */ J((I) => {
      var F, X;
      const Z = L.current + I, G = x().filter((ee) => !ee.disabled), Q = document.activeElement, ae = (F = G.find((ee) => ee.ref.current === Q)) == null ? void 0 : F.textValue, ce = G.map((ee) => ee.textValue), ge = Gi(ce, Z, ae), he = (X = G.find((ee) => ee.textValue === ge)) == null ? void 0 : X.ref.current;
      (/* @__PURE__ */ J((function ee(Y) {
        L.current = Y, window.clearTimeout(O.current), Y !== "" && (O.current = window.setTimeout(() => ee(""), 1e3));
      }), "updateSearch"))(Z), he && setTimeout(() => he.focus());
    }, "handleTypeaheadSearch");
    a.useEffect(() => () => window.clearTimeout(O.current), []), Yt();
    const V = a.useCallback((I) => {
      var G, Q;
      return $.current === ((G = D.current) == null ? void 0 : G.side) && Xi(I, (Q = D.current) == null ? void 0 : Q.area);
    }, []);
    return /* @__PURE__ */ h(
      Np,
      {
        scope: o,
        searchRef: L,
        onItemEnter: a.useCallback(
          (I) => {
            V(I) && I.preventDefault();
          },
          [V]
        ),
        onItemLeave: a.useCallback(
          (I) => {
            var Z;
            V(I) || ((Z = R.current) == null || Z.focus(), T(null));
          },
          [V]
        ),
        onTriggerLeave: a.useCallback(
          (I) => {
            V(I) && I.preventDefault();
          },
          [V]
        ),
        pointerGraceTimerRef: A,
        onPointerGraceIntentChange: a.useCallback((I) => {
          D.current = I;
        }, []),
        children: /* @__PURE__ */ h(P, { ...M, children: /* @__PURE__ */ h(
          Ho,
          {
            asChild: !0,
            trapped: s,
            onMountAutoFocus: k(i, (I) => {
              var Z;
              I.preventDefault(), (Z = R.current) == null || Z.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: c,
            children: /* @__PURE__ */ h(
              Gt,
              {
                asChild: !0,
                disableOutsidePointerEvents: l,
                onEscapeKeyDown: d,
                onPointerDownOutside: f,
                onFocusOutside: p,
                onInteractOutside: g,
                onDismiss: w,
                children: /* @__PURE__ */ h(
                  Ni,
                  {
                    asChild: !0,
                    ...y,
                    dir: S.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: E,
                    onCurrentTabStopIdChange: T,
                    onEntryFocus: k(u, (I) => {
                      S.isUsingKeyboardRef.current || I.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ h(
                      Zo,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Ui(C.open),
                        "data-radix-menu-content": "",
                        dir: S.dir,
                        ...b,
                        ...v,
                        ref: _,
                        style: { outline: "none", ...v.style },
                        onKeyDown: k(v.onKeyDown, (I) => {
                          const G = I.target.closest("[data-radix-menu-content]") === I.currentTarget, Q = I.ctrlKey || I.altKey || I.metaKey, ae = I.key.length === 1;
                          G && (I.key === "Tab" && I.preventDefault(), !Q && ae && N(I.key));
                          const ce = R.current;
                          if (I.target !== ce || !Tp.includes(I.key)) return;
                          I.preventDefault();
                          const he = x().filter((F) => !F.disabled).map((F) => F.ref.current);
                          Li.includes(I.key) && he.reverse(), Ki(he);
                        }),
                        onBlur: k(t.onBlur, (I) => {
                          I.currentTarget.contains(I.target) || (window.clearTimeout(O.current), L.current = "");
                        }),
                        onPointerMove: k(
                          t.onPointerMove,
                          Cn((I) => {
                            const Z = I.target, G = U.current !== I.clientX;
                            if (I.currentTarget.contains(Z) && G) {
                              const Q = I.clientX > U.current ? "right" : "left";
                              $.current = Q, U.current = I.clientX;
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
), Vp = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ J(function(t, n) {
    const { __scopeMenu: o, ...r } = t;
    return /* @__PURE__ */ h(B.div, { ...r, ref: n });
  }, "MenuLabel")
), To = "MenuItem", Jr = "menu.itemSelect", Hp = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ J(function(t, n) {
    const { disabled: o = !1, onSelect: r, ...s } = t, i = a.useRef(null), c = hr(To, t.__scopeMenu), l = Hi(To, t.__scopeMenu), u = j(n, i), d = a.useRef(!1), f = /* @__PURE__ */ J(() => {
      const p = i.current;
      if (!o && p) {
        const g = new CustomEvent(Jr, { bubbles: !0, cancelable: !0 });
        p.addEventListener(Jr, (w) => r == null ? void 0 : r(w), { once: !0 }), xn(p, g), g.defaultPrevented ? d.current = !1 : c.onClose();
      }
    }, "handleSelect");
    return /* @__PURE__ */ h(
      Wp,
      {
        ...s,
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
          o || p.target !== p.currentTarget || l.searchRef.current !== "" && p.key === " " || xp.includes(p.key) && (p.currentTarget.click(), p.preventDefault());
        })
      }
    );
  }, "MenuItem")
), Wp = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ J(function(t, n) {
    const { __scopeMenu: o, disabled: r = !1, textValue: s, ...i } = t, c = Hi(To, o), l = Bi(o), u = a.useRef(null), d = j(n, u), [f, p] = a.useState(!1), [g, w] = a.useState("");
    return a.useEffect(() => {
      const m = u.current;
      m && w((m.textContent ?? "").trim());
    }, [i.children]), /* @__PURE__ */ h(
      Eo.ItemSlot,
      {
        scope: o,
        disabled: r,
        textValue: s ?? g,
        children: /* @__PURE__ */ h($i, { asChild: !0, ...l, focusable: !r, children: /* @__PURE__ */ h(
          B.div,
          {
            role: "menuitem",
            "data-highlighted": f ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...i,
            ref: d,
            onPointerMove: k(
              t.onPointerMove,
              Cn((m) => {
                r ? c.onItemLeave(m) : (c.onItemEnter(m), m.defaultPrevented || m.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: k(
              t.onPointerLeave,
              Cn((m) => c.onItemLeave(m))
            ),
            onFocus: k(t.onFocus, () => p(!0)),
            onBlur: k(t.onBlur, () => p(!1))
          }
        ) })
      }
    );
  }, "MenuItemImpl")
), Up = "MenuRadioGroup", [Og, Ag] = dt(
  Up,
  { value: void 0, onValueChange: /* @__PURE__ */ J(() => {
  }, "onValueChange") }
), jp = "MenuItemIndicator", [Dg, Mg] = dt(
  jp,
  { checked: !1 }
), Kp = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ J(function(t, n) {
    const { __scopeMenu: o, ...r } = t;
    return /* @__PURE__ */ h(
      B.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: n
      }
    );
  }, "MenuSeparator")
), zp = "MenuSub", [Ng, $g] = dt(zp);
function Ui(e) {
  return e ? "open" : "closed";
}
J(Ui, "getOpenState");
function ji(e) {
  return e === "indeterminate";
}
J(ji, "isIndeterminate");
function Gp(e) {
  return ji(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
J(Gp, "getCheckedState");
function Ki(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
J(Ki, "focusFirst");
function zi(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
J(zi, "wrapArray");
function Gi(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let i = zi(e, Math.max(s, 0));
  r.length === 1 && (i = i.filter((u) => u !== n));
  const l = i.find(
    (u) => u.toLowerCase().startsWith(r.toLowerCase())
  );
  return l !== n ? l : void 0;
}
J(Gi, "getNextMatch");
function Yi(e, t) {
  const { x: n, y: o } = e;
  let r = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const c = t[s], l = t[i], u = c.x, d = c.y, f = l.x, p = l.y;
    d > o != p > o && n < (f - u) * (o - d) / (p - d) + u && (r = !r);
  }
  return r;
}
J(Yi, "isPointInPolygon");
function Xi(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return Yi(n, t);
}
J(Xi, "isPointerInGraceArea");
function Cn(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
J(Cn, "whenMouse");
var Yp = kp, Xp = Op, qp = Mp, Zp = $p, Jp = Vp, Qp = Hp, eh = Kp, th = Object.defineProperty, ft = (e, t) => th(e, "name", { value: t, configurable: !0 }), mr = "DropdownMenu", [nh, Lg] = /* @__PURE__ */ pe(
  mr,
  [Fi]
), pt = Fi(), [oh, qi] = nh(mr), rh = /* @__PURE__ */ ft((e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: o,
    open: r,
    defaultOpen: s,
    onOpenChange: i,
    modal: c = !0
  } = e, l = pt(t), u = a.useRef(null), [d, f] = xe({
    prop: r,
    defaultProp: s ?? !1,
    onChange: i,
    caller: mr
  });
  return /* @__PURE__ */ h(
    oh,
    {
      scope: t,
      triggerId: ye(),
      triggerRef: u,
      contentId: ye(),
      open: d,
      onOpenChange: f,
      onOpenToggle: a.useCallback(() => f((p) => !p), [f]),
      modal: c,
      children: /* @__PURE__ */ h(Yp, { ...l, open: d, onOpenChange: f, dir: o, modal: c, children: n })
    }
  );
}, "DropdownMenu"), sh = "DropdownMenuTrigger", ih = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ft(function(t, n) {
    const { __scopeDropdownMenu: o, disabled: r = !1, ...s } = t, i = qi(sh, o), c = pt(o), l = j(n, i.triggerRef);
    return /* @__PURE__ */ h(Xp, { asChild: !0, ...c, children: /* @__PURE__ */ h(
      B.button,
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
        onPointerDown: k(t.onPointerDown, (u) => {
          !r && u.button === 0 && u.ctrlKey === !1 && (i.onOpenToggle(), i.open || u.preventDefault());
        }),
        onKeyDown: k(t.onKeyDown, (u) => {
          r || (["Enter", " "].includes(u.key) && i.onOpenToggle(), u.key === "ArrowDown" && i.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(u.key) && u.preventDefault());
        })
      }
    ) });
  }, "DropdownMenuTrigger")
), ch = /* @__PURE__ */ ft((e) => {
  const { __scopeDropdownMenu: t, ...n } = e, o = pt(t);
  return /* @__PURE__ */ h(qp, { ...o, ...n });
}, "DropdownMenuPortal"), ah = "DropdownMenuContent", lh = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ft(function(t, n) {
    const { __scopeDropdownMenu: o, ...r } = t, s = qi(ah, o), i = pt(o), c = a.useRef(!1);
    return /* @__PURE__ */ h(
      Zp,
      {
        id: s.contentId,
        "aria-labelledby": s.triggerId,
        ...i,
        ...r,
        ref: n,
        onCloseAutoFocus: k(t.onCloseAutoFocus, (l) => {
          var u;
          c.current || (u = s.triggerRef.current) == null || u.focus(), c.current = !1, l.preventDefault();
        }),
        onInteractOutside: k(t.onInteractOutside, (l) => {
          const u = l.detail.originalEvent, d = u.button === 0 && u.ctrlKey === !0, f = u.button === 2 || d;
          (!s.modal || f) && (c.current = !0);
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
), uh = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ft(function(t, n) {
    const { __scopeDropdownMenu: o, ...r } = t, s = pt(o);
    return /* @__PURE__ */ h(Jp, { ...s, ...r, ref: n });
  }, "DropdownMenuLabel")
), dh = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ft(function(t, n) {
    const { __scopeDropdownMenu: o, ...r } = t, s = pt(o);
    return /* @__PURE__ */ h(Qp, { ...s, ...r, ref: n });
  }, "DropdownMenuItem")
), fh = /* @__PURE__ */ a.forwardRef(/* @__PURE__ */ ft(function(t, n) {
  const { __scopeDropdownMenu: o, ...r } = t, s = pt(o);
  return /* @__PURE__ */ h(eh, { ...s, ...r, ref: n });
}, "DropdownMenuSeparator")), ph = rh, hh = ih, mh = ch, vh = lh, gh = uh, wh = dh, bh = fh;
const yh = "wk-Menu_content", Ch = "wk-Menu_item", Sh = "wk-Menu_danger", xh = "wk-Menu_label", Eh = "wk-Menu_separator", Th = "wk-Menu_shortcut", St = {
  content: yh,
  item: Ch,
  danger: Sh,
  label: xh,
  separator: Eh,
  shortcut: Th
};
function Fg({ trigger: e, children: t, align: n = "start", side: o = "bottom", className: r, ...s }) {
  return /* @__PURE__ */ H(ph, { ...s, children: [
    /* @__PURE__ */ h(hh, { asChild: !0, children: e }),
    /* @__PURE__ */ h(mh, { children: /* @__PURE__ */ h(
      vh,
      {
        className: W(St.content, r),
        align: n,
        side: o,
        sideOffset: 4,
        collisionPadding: 8,
        children: t
      }
    ) })
  ] });
}
const Bg = Ce(function({ tone: t = "default", shortcut: n, className: o, children: r, ...s }, i) {
  return /* @__PURE__ */ H(
    wh,
    {
      ref: i,
      className: W(St.item, t === "danger" && St.danger, o),
      ...s,
      children: [
        r,
        n && /* @__PURE__ */ h("span", { className: St.shortcut, children: n })
      ]
    }
  );
});
function Vg({ children: e }) {
  return /* @__PURE__ */ h(gh, { className: St.label, children: e });
}
function Hg() {
  return /* @__PURE__ */ h(bh, { className: St.separator });
}
var Ph = Object.defineProperty, se = (e, t) => Ph(e, "name", { value: t, configurable: !0 }), [vr, Wg] = /* @__PURE__ */ pe("Tooltip", [
  It
]), Bn = It(), _h = "TooltipProvider", Rh = 700, Po = "tooltip.open", [Ih, gr] = vr(_h), kh = /* @__PURE__ */ se((e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = Rh,
    skipDelayDuration: o = 300,
    disableHoverableContent: r = !1,
    children: s
  } = e, i = a.useRef(!0), c = a.useRef(!1), l = a.useRef(0);
  return a.useEffect(() => {
    const u = l.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ h(
    Ih,
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
}, "TooltipProvider"), _o = "Tooltip", [Oh, Qt] = vr(_o), Ah = /* @__PURE__ */ se((e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: o,
    defaultOpen: r,
    onOpenChange: s,
    disableHoverableContent: i,
    delayDuration: c
  } = e, l = gr(_o, e.__scopeTooltip), u = Bn(t), [d, f] = a.useState(null), [p, g] = a.useState(void 0), w = ye(), m = a.useRef(0), v = i ?? l.disableHoverableContent, C = c ?? l.delayDuration, S = a.useRef(!1), [b, y] = xe({
    prop: o,
    defaultProp: r ?? !1,
    onChange: /* @__PURE__ */ se((O) => {
      O ? (l.onOpen(), document.dispatchEvent(new CustomEvent(Po))) : l.onClose(), s == null || s(O);
    }, "onChange"),
    caller: _o
  }), x = a.useMemo(() => b ? S.current ? "delayed-open" : "instant-open" : "closed", [b]), E = a.useCallback(() => {
    window.clearTimeout(m.current), m.current = 0, S.current = !1, y(!0);
  }, [y]), T = a.useCallback(() => {
    window.clearTimeout(m.current), m.current = 0, y(!1);
  }, [y]), R = a.useCallback(() => {
    window.clearTimeout(m.current), m.current = window.setTimeout(() => {
      S.current = !0, y(!0), m.current = 0;
    }, C);
  }, [C, y]);
  return a.useEffect(() => () => {
    m.current && (window.clearTimeout(m.current), m.current = 0);
  }, []), /* @__PURE__ */ h(Xo, { ...u, children: /* @__PURE__ */ h(
    Oh,
    {
      scope: t,
      contentId: p ?? w,
      setContentId: g,
      open: b,
      stateAttribute: x,
      trigger: d,
      onTriggerChange: f,
      onTriggerEnter: a.useCallback(() => {
        l.isOpenDelayedRef.current ? R() : E();
      }, [l.isOpenDelayedRef, R, E]),
      onTriggerLeave: a.useCallback(() => {
        v ? T() : (window.clearTimeout(m.current), m.current = 0);
      }, [T, v]),
      onOpen: E,
      onClose: T,
      disableHoverableContent: v,
      children: n
    }
  ) });
}, "Tooltip"), Qr = "TooltipTrigger", Dh = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ se(function(t, n) {
    const { __scopeTooltip: o, ...r } = t, s = Qt(Qr, o), i = gr(Qr, o), c = Bn(o), l = a.useRef(null), u = j(n, l, s.onTriggerChange), d = a.useRef(!1), f = a.useRef(!1), p = a.useCallback(() => d.current = !1, []);
    return a.useEffect(() => () => document.removeEventListener("pointerup", p), [p]), /* @__PURE__ */ h(qo, { asChild: !0, ...c, children: /* @__PURE__ */ h(
      B.button,
      {
        "aria-describedby": s.open ? s.contentId : void 0,
        "data-state": s.stateAttribute,
        ...r,
        ref: u,
        onPointerMove: k(t.onPointerMove, (g) => {
          g.pointerType !== "touch" && !f.current && !i.isPointerInTransitRef.current && (s.onTriggerEnter(), f.current = !0);
        }),
        onPointerLeave: k(t.onPointerLeave, () => {
          s.onTriggerLeave(), f.current = !1;
        }),
        onPointerDown: k(t.onPointerDown, () => {
          s.open && s.onClose(), d.current = !0, document.addEventListener("pointerup", p, { once: !0 });
        }),
        onFocus: k(t.onFocus, () => {
          d.current || s.onOpen();
        }),
        onBlur: k(t.onBlur, s.onClose),
        onClick: k(t.onClick, s.onClose)
      }
    ) });
  }, "TooltipTrigger")
), Zi = "TooltipPortal", [Mh, Nh] = vr(Zi, {
  forceMount: void 0
}), $h = /* @__PURE__ */ se((e) => {
  const { __scopeTooltip: t, forceMount: n, children: o, container: r } = e, s = Qt(Zi, t);
  return /* @__PURE__ */ h(Mh, { scope: t, forceMount: n, children: /* @__PURE__ */ h(Te, { present: n || s.open, children: /* @__PURE__ */ h(Xt, { asChild: !0, container: r, children: o }) }) });
}, "TooltipPortal"), Ut = "TooltipContent", Lh = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ se(function(t, n) {
    const o = Nh(Ut, t.__scopeTooltip), { forceMount: r = o.forceMount, side: s = "top", ...i } = t, c = Qt(Ut, t.__scopeTooltip);
    return /* @__PURE__ */ h(Te, { present: r || c.open, children: c.disableHoverableContent ? /* @__PURE__ */ h(Ji, { side: s, ...i, ref: n }) : /* @__PURE__ */ h(Fh, { side: s, ...i, ref: n }) });
  }, "TooltipContent")
), Fh = /* @__PURE__ */ a.forwardRef(/* @__PURE__ */ se(function(t, n) {
  const o = Qt(Ut, t.__scopeTooltip), r = gr(Ut, t.__scopeTooltip), s = a.useRef(null), i = j(n, s), [c, l] = a.useState(null), { trigger: u, onClose: d } = o, f = s.current, { onPointerInTransitChange: p } = r, g = a.useCallback(() => {
    l(null), p(!1);
  }, [p]), w = a.useCallback(
    (m, v) => {
      const C = m.currentTarget, S = { x: m.clientX, y: m.clientY }, b = Qi(S, C.getBoundingClientRect()), y = ec(S, b), x = tc(v.getBoundingClientRect()), E = oc([...y, ...x]);
      l(E), p(!0);
    },
    [p]
  );
  return a.useEffect(() => () => g(), [g]), a.useEffect(() => {
    if (u && f) {
      const m = /* @__PURE__ */ se((C) => w(C, f), "handleTriggerLeave"), v = /* @__PURE__ */ se((C) => w(C, u), "handleContentLeave");
      return u.addEventListener("pointerleave", m), f.addEventListener("pointerleave", v), () => {
        u.removeEventListener("pointerleave", m), f.removeEventListener("pointerleave", v);
      };
    }
  }, [u, f, w, g]), a.useEffect(() => {
    if (c) {
      const m = /* @__PURE__ */ se((v) => {
        const C = v.target, S = { x: v.clientX, y: v.clientY }, b = (u == null ? void 0 : u.contains(C)) || (f == null ? void 0 : f.contains(C)), y = !nc(S, c);
        b ? g() : y && (g(), d());
      }, "handleTrackPointerGrace");
      return document.addEventListener("pointermove", m), () => document.removeEventListener("pointermove", m);
    }
  }, [u, f, c, d, g]), /* @__PURE__ */ h(Ji, { ...t, ref: i });
}, "TooltipContentHoverable")), Bh = /* @__PURE__ */ us("TooltipContent"), Ji = /* @__PURE__ */ a.forwardRef(
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
    } = t, d = Qt(Ut, o), f = Bn(o), { onClose: p } = d;
    a.useEffect(() => (document.addEventListener(Po, p), () => document.removeEventListener(Po, p)), [p]), a.useEffect(() => {
      if (d.trigger) {
        const w = /* @__PURE__ */ se((m) => {
          m.target instanceof Node && m.target.contains(d.trigger) && p();
        }, "handleScroll");
        return window.addEventListener("scroll", w, { capture: !0 }), () => window.removeEventListener("scroll", w, { capture: !0 });
      }
    }, [d.trigger, p]);
    const { setContentId: g } = d;
    return oe(() => (g(i), () => {
      g(void 0);
    }), [i, g]), /* @__PURE__ */ h(
      Gt,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: c,
        onPointerDownOutside: l,
        onFocusOutside: (w) => w.preventDefault(),
        onDismiss: p,
        children: /* @__PURE__ */ H(
          Zo,
          {
            "data-state": d.stateAttribute,
            role: s ? void 0 : "tooltip",
            id: s ? void 0 : d.contentId,
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
              /* @__PURE__ */ h(Bh, { children: r }),
              s ? /* @__PURE__ */ h(fu, { id: d.contentId, role: "tooltip", children: s }) : null
            ]
          }
        )
      }
    );
  }, "TooltipContentImpl")
), Vh = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ se(function(t, n) {
    const { __scopeTooltip: o, ...r } = t, s = Bn(o);
    return /* @__PURE__ */ h(Ql, { ...s, ...r, ref: n });
  }, "TooltipArrow")
);
function Qi(e, t) {
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
se(Qi, "getExitSideFromRect");
function ec(e, t, n = 5) {
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
se(ec, "getPaddedExitPoints");
function tc(e) {
  const { top: t, right: n, bottom: o, left: r } = e;
  return [
    { x: r, y: t },
    { x: n, y: t },
    { x: n, y: o },
    { x: r, y: o }
  ];
}
se(tc, "getPointsFromRect");
function nc(e, t) {
  const { x: n, y: o } = e;
  let r = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const c = t[s], l = t[i], u = c.x, d = c.y, f = l.x, p = l.y;
    d > o != p > o && n < (f - u) * (o - d) / (p - d) + u && (r = !r);
  }
  return r;
}
se(nc, "isPointInPolygon");
function oc(e) {
  const t = e.slice();
  return t.sort((n, o) => n.x < o.x ? -1 : n.x > o.x ? 1 : n.y < o.y ? -1 : n.y > o.y ? 1 : 0), rc(t);
}
se(oc, "getHull");
function rc(e) {
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
se(rc, "getHullPresorted");
var Hh = kh, Wh = Ah, Uh = Dh, jh = $h, Kh = Lh, zh = Vh;
const Gh = "wk-Tooltip_content", Yh = "wk-Tooltip_arrow", es = {
  content: Gh,
  arrow: Yh
}, Ug = Hh;
function jg({ content: e, children: t, side: n = "top", delayDuration: o, className: r }) {
  return /* @__PURE__ */ H(Wh, { delayDuration: o, children: [
    /* @__PURE__ */ h(Uh, { asChild: !0, children: t }),
    /* @__PURE__ */ h(jh, { children: /* @__PURE__ */ H(
      Kh,
      {
        className: W(es.content, r),
        side: n,
        sideOffset: 6,
        collisionPadding: 8,
        children: [
          e,
          /* @__PURE__ */ h(zh, { className: es.arrow, width: 10, height: 5 })
        ]
      }
    ) })
  ] });
}
var Xh = Object.defineProperty, kt = (e, t) => Xh(e, "name", { value: t, configurable: !0 }), wr = "Tabs", [qh, Kg] = /* @__PURE__ */ pe(wr, [
  Ln
]), sc = Ln(), [Zh, br] = qh(wr), Jh = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ kt(function(t, n) {
    const {
      __scopeTabs: o,
      value: r,
      onValueChange: s,
      defaultValue: i,
      orientation: c = "horizontal",
      dir: l,
      activationMode: u = "automatic",
      ...d
    } = t, f = zt(l), [p, g] = xe({
      prop: r,
      onChange: s,
      defaultProp: i ?? "",
      caller: wr
    });
    return /* @__PURE__ */ h(
      Zh,
      {
        scope: o,
        baseId: ye(),
        value: p,
        onValueChange: g,
        orientation: c,
        dir: f,
        activationMode: u,
        children: /* @__PURE__ */ h(
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
), Qh = "TabsList", em = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ kt(function(t, n) {
    const { __scopeTabs: o, loop: r = !0, ...s } = t, i = br(Qh, o), c = sc(o);
    return /* @__PURE__ */ h(
      Ni,
      {
        asChild: !0,
        ...c,
        orientation: i.orientation,
        dir: i.dir,
        loop: r,
        children: /* @__PURE__ */ h(
          B.div,
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
), tm = "TabsTrigger", nm = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ kt(function(t, n) {
    const { __scopeTabs: o, value: r, disabled: s = !1, ...i } = t, c = br(tm, o), l = sc(o), u = yr(c.baseId, r), d = Cr(c.baseId, r), f = r === c.value;
    return /* @__PURE__ */ h(
      $i,
      {
        asChild: !0,
        ...l,
        focusable: !s,
        active: f,
        children: /* @__PURE__ */ h(
          B.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": f,
            "aria-controls": d,
            "data-state": f ? "active" : "inactive",
            "data-disabled": s ? "" : void 0,
            disabled: s,
            id: u,
            ...i,
            ref: n,
            onMouseDown: k(t.onMouseDown, (p) => {
              !s && p.button === 0 && p.ctrlKey === !1 ? c.onValueChange(r) : p.preventDefault();
            }),
            onKeyDown: k(t.onKeyDown, (p) => {
              s || p.target !== p.currentTarget || [" ", "Enter"].includes(p.key) && c.onValueChange(r);
            }),
            onFocus: k(t.onFocus, () => {
              const p = c.activationMode !== "manual";
              !f && !s && p && c.onValueChange(r);
            })
          }
        )
      }
    );
  }, "TabsTrigger")
), om = "TabsContent", rm = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ kt(function(t, n) {
    const { __scopeTabs: o, value: r, forceMount: s, children: i, ...c } = t, l = br(om, o), u = yr(l.baseId, r), d = Cr(l.baseId, r), f = r === l.value, p = a.useRef(f);
    return a.useEffect(() => {
      const g = requestAnimationFrame(() => p.current = !1);
      return () => cancelAnimationFrame(g);
    }, []), /* @__PURE__ */ h(Te, { present: s || f, children: ({ present: g }) => /* @__PURE__ */ h(
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
        children: g && i
      }
    ) });
  }, "TabsContent")
);
function yr(e, t) {
  return `${e}-trigger-${t}`;
}
kt(yr, "makeTriggerId");
function Cr(e, t) {
  return `${e}-content-${t}`;
}
kt(Cr, "makeContentId");
var sm = Jh, im = em, cm = nm, am = rm;
const lm = "wk-Tabs_root", um = "wk-Tabs_list", dm = "wk-Tabs_trigger", fm = "wk-Tabs_content", Vn = {
  root: lm,
  list: um,
  trigger: dm,
  content: fm
};
function zg({ className: e, ...t }) {
  return /* @__PURE__ */ h(sm, { className: W(Vn.root, e), ...t });
}
function Gg({ className: e, ...t }) {
  return /* @__PURE__ */ h(im, { className: W(Vn.list, e), ...t });
}
const Yg = Ce(
  function({ className: t, ...n }, o) {
    return /* @__PURE__ */ h(cm, { ref: o, className: W(Vn.trigger, t), ...n });
  }
);
function Xg({ className: e, ...t }) {
  return /* @__PURE__ */ h(am, { className: W(Vn.content, e), ...t });
}
var pm = Object.defineProperty, te = (e, t) => pm(e, "name", { value: t, configurable: !0 }), ic = "ToastProvider", [Sr, cc, hm] = /* @__PURE__ */ Kt("Toast"), [ac, qg] = /* @__PURE__ */ pe("Toast", [hm]), [mm, Hn] = ac(ic), vm = /* @__PURE__ */ te((e) => {
  const {
    __scopeToast: t,
    label: n = "Notification",
    duration: o = 5e3,
    swipeDirection: r = "right",
    swipeThreshold: s = 50,
    announcerContainer: i,
    children: c
  } = e, [l, u] = a.useState(null), [d, f] = a.useState(0), p = a.useRef(!1);
  return n.trim() || console.error(
    `Invalid prop \`label\` supplied to \`${ic}\`. Expected non-empty \`string\`.`
  ), /* @__PURE__ */ h(Sr.Provider, { scope: t, children: /* @__PURE__ */ h(
    mm,
    {
      scope: t,
      label: n,
      duration: o,
      swipeDirection: r,
      swipeThreshold: s,
      toastCount: d,
      viewport: l,
      onViewportChange: u,
      onToastAdd: a.useCallback(() => f((g) => g + 1), []),
      onToastRemove: a.useCallback(() => f((g) => g - 1), []),
      isClosePausedRef: p,
      announcerContainer: i,
      children: c
    }
  ) });
}, "ToastProvider"), gm = "ToastViewport", wm = ["F8"], Ro = "toast.viewportPause", Io = "toast.viewportResume", bm = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ te(function(t, n) {
    const {
      __scopeToast: o,
      hotkey: r = wm,
      label: s = "Notifications ({hotkey})",
      ...i
    } = t, c = Hn(gm, o), l = cc(o), u = a.useRef(null), d = a.useRef(null), f = a.useRef(null), p = a.useRef(null), g = j(n, p, c.onViewportChange), w = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), m = c.toastCount > 0;
    a.useEffect(() => {
      const C = /* @__PURE__ */ te((S) => {
        var y;
        r.length !== 0 && r.every((x) => S[x] || S.code === x) && ((y = p.current) == null || y.focus());
      }, "handleKeyDown");
      return document.addEventListener("keydown", C), () => document.removeEventListener("keydown", C);
    }, [r]), a.useEffect(() => {
      const C = u.current, S = p.current;
      if (m && C && S) {
        const b = /* @__PURE__ */ te(() => {
          if (!c.isClosePausedRef.current) {
            const T = new CustomEvent(Ro);
            S.dispatchEvent(T), c.isClosePausedRef.current = !0;
          }
        }, "handlePause"), y = /* @__PURE__ */ te(() => {
          if (c.isClosePausedRef.current) {
            const T = new CustomEvent(Io);
            S.dispatchEvent(T), c.isClosePausedRef.current = !1;
          }
        }, "handleResume"), x = /* @__PURE__ */ te((T) => {
          !C.contains(T.relatedTarget) && y();
        }, "handleFocusOutResume"), E = /* @__PURE__ */ te(() => {
          C.contains(document.activeElement) || y();
        }, "handlePointerLeaveResume");
        return C.addEventListener("focusin", b), C.addEventListener("focusout", x), C.addEventListener("pointermove", b), C.addEventListener("pointerleave", E), window.addEventListener("blur", b), window.addEventListener("focus", y), () => {
          C.removeEventListener("focusin", b), C.removeEventListener("focusout", x), C.removeEventListener("pointermove", b), C.removeEventListener("pointerleave", E), window.removeEventListener("blur", b), window.removeEventListener("focus", y);
        };
      }
    }, [m, c.isClosePausedRef]);
    const v = a.useCallback(
      ({ tabbingDirection: C }) => {
        const b = l().map((y) => {
          const x = y.ref.current, E = [x, ...dc(x)];
          return C === "forwards" ? E : E.reverse();
        });
        return (C === "forwards" ? b.reverse() : b).flat();
      },
      [l]
    );
    return a.useEffect(() => {
      const C = p.current;
      if (C) {
        const S = /* @__PURE__ */ te((b) => {
          var E, T, R;
          const y = b.altKey || b.ctrlKey || b.metaKey;
          if (b.key === "Tab" && !y) {
            const _ = document.activeElement, O = b.shiftKey;
            if (b.target === C && O) {
              (E = d.current) == null || E.focus();
              return;
            }
            const D = v({ tabbingDirection: O ? "backwards" : "forwards" }), $ = D.findIndex((U) => U === _);
            vn(D.slice($ + 1)) ? b.preventDefault() : O ? (T = d.current) == null || T.focus() : (R = f.current) == null || R.focus();
          }
        }, "handleKeyDown");
        return C.addEventListener("keydown", S), () => C.removeEventListener("keydown", S);
      }
    }, [l, v]), /* @__PURE__ */ H(
      Sa,
      {
        ref: u,
        role: "region",
        "aria-label": s.replace("{hotkey}", w),
        tabIndex: -1,
        style: { pointerEvents: m ? void 0 : "none" },
        children: [
          m && /* @__PURE__ */ h(
            ts,
            {
              ref: d,
              onFocusFromOutsideViewport: () => {
                const C = v({
                  tabbingDirection: "forwards"
                });
                vn(C);
              }
            }
          ),
          /* @__PURE__ */ h(Sr.Slot, { scope: o, children: /* @__PURE__ */ h(B.ol, { tabIndex: -1, ...i, ref: g }) }),
          m && /* @__PURE__ */ h(
            ts,
            {
              ref: f,
              onFocusFromOutsideViewport: () => {
                const C = v({
                  tabbingDirection: "backwards"
                });
                vn(C);
              }
            }
          )
        ]
      }
    );
  }, "ToastViewport")
), ym = "ToastFocusProxy", ts = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ te(function(t, n) {
    const { __scopeToast: o, onFocusFromOutsideViewport: r, ...s } = t, i = Hn(ym, o);
    return /* @__PURE__ */ h(
      Jo,
      {
        tabIndex: 0,
        ...s,
        ref: n,
        style: { position: "fixed" },
        onFocus: (c) => {
          var d;
          const l = c.relatedTarget;
          !((d = i.viewport) != null && d.contains(l)) && r();
        }
      }
    );
  }, "ToastFocusProxy")
), Wn = "Toast", Cm = "toast.swipeStart", Sm = "toast.swipeMove", xm = "toast.swipeCancel", Em = "toast.swipeEnd", Tm = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ te(function(t, n) {
    const { forceMount: o, open: r, defaultOpen: s, onOpenChange: i, ...c } = t, [l, u] = xe({
      prop: r,
      defaultProp: s ?? !0,
      onChange: i,
      caller: Wn
    });
    return /* @__PURE__ */ h(Te, { present: o || l, children: /* @__PURE__ */ h(
      Rm,
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
), [Pm, _m] = ac(Wn, {
  onClose() {
  }
}), Rm = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ te(function(t, n) {
    const {
      __scopeToast: o,
      type: r = "foreground",
      duration: s,
      open: i,
      onClose: c,
      onEscapeKeyDown: l,
      onPause: u,
      onResume: d,
      onSwipeStart: f,
      onSwipeMove: p,
      onSwipeCancel: g,
      onSwipeEnd: w,
      ...m
    } = t, v = Hn(Wn, o), C = cc(o), [S, b] = a.useState(null), y = j(n, b), x = a.useRef(null), E = a.useRef(null), T = s || v.duration, R = a.useRef(0), _ = a.useRef(T), O = a.useRef(0), { onToastAdd: L, onToastRemove: A } = v, D = ue(() => {
      var M;
      (S == null ? void 0 : S.contains(document.activeElement)) && ((M = v.viewport) == null || M.focus()), c();
    }), $ = a.useCallback(
      (P) => {
        !P || P === 1 / 0 || (window.clearTimeout(O.current), R.current = (/* @__PURE__ */ new Date()).getTime(), O.current = window.setTimeout(D, P));
      },
      [D]
    );
    a.useEffect(() => {
      const P = v.viewport;
      if (P) {
        const M = /* @__PURE__ */ te(() => {
          $(_.current), d == null || d();
        }, "handleResume"), N = /* @__PURE__ */ te(() => {
          const V = (/* @__PURE__ */ new Date()).getTime() - R.current;
          _.current = _.current - V, window.clearTimeout(O.current), u == null || u();
        }, "handlePause");
        return P.addEventListener(Ro, N), P.addEventListener(Io, M), () => {
          P.removeEventListener(Ro, N), P.removeEventListener(Io, M);
        };
      }
    }, [v.viewport, T, u, d, $]), a.useEffect(() => {
      i && !v.isClosePausedRef.current && $(T);
    }, [i, T, v.isClosePausedRef, $]), a.useEffect(() => () => {
      window.clearTimeout(O.current);
    }, []), a.useEffect(() => (L(), () => A()), [L, A]);
    const U = a.useMemo(() => S ? xr(S) : null, [S]);
    return v.viewport ? /* @__PURE__ */ H(Ge, { children: [
      U && /* @__PURE__ */ h(
        Im,
        {
          __scopeToast: o,
          role: "status",
          "aria-live": r === "foreground" ? "assertive" : "polite",
          children: U
        }
      ),
      /* @__PURE__ */ h(Pm, { scope: o, onClose: D, children: Tt.createPortal(
        /* @__PURE__ */ h(Sr.ItemSlot, { scope: o, children: /* @__PURE__ */ h(
          Ca,
          {
            asChild: !0,
            onEscapeKeyDown: k(l, (P) => {
              C().some(
                (N) => {
                  var V;
                  return (V = N.ref.current) == null ? void 0 : V.contains(P.target);
                }
              ) || D();
            }),
            children: /* @__PURE__ */ h(
              B.li,
              {
                tabIndex: 0,
                "data-state": i ? "open" : "closed",
                "data-swipe-direction": v.swipeDirection,
                ...m,
                ref: y,
                style: { userSelect: "none", touchAction: "none", ...t.style },
                onKeyDown: k(t.onKeyDown, (P) => {
                  P.key === "Escape" && (l == null || l(P.nativeEvent), P.nativeEvent.defaultPrevented || D());
                }),
                onPointerDown: k(t.onPointerDown, (P) => {
                  P.button === 0 && (x.current = { x: P.clientX, y: P.clientY });
                }),
                onPointerMove: k(t.onPointerMove, (P) => {
                  if (!x.current) return;
                  const M = P.clientX - x.current.x, N = P.clientY - x.current.y, V = !!E.current, I = ["left", "right"].includes(v.swipeDirection), Z = ["left", "up"].includes(v.swipeDirection) ? Math.min : Math.max, G = I ? Z(0, M) : 0, Q = I ? 0 : Z(0, N), ae = P.pointerType === "touch" ? 10 : 2, ce = { x: G, y: Q }, ge = { originalEvent: P, delta: ce };
                  V ? (E.current = ce, Bt(Sm, p, ge, {
                    discrete: !1
                  })) : ns(ce, v.swipeDirection, ae) ? (E.current = ce, Bt(Cm, f, ge, {
                    discrete: !1
                  }), P.target.setPointerCapture(P.pointerId)) : (Math.abs(M) > ae || Math.abs(N) > ae) && (x.current = null);
                }),
                onPointerUp: k(t.onPointerUp, (P) => {
                  const M = E.current, N = P.target;
                  if (N.hasPointerCapture(P.pointerId) && N.releasePointerCapture(P.pointerId), E.current = null, x.current = null, M) {
                    const V = P.currentTarget, I = { originalEvent: P, delta: M };
                    ns(M, v.swipeDirection, v.swipeThreshold) ? Bt(Em, w, I, {
                      discrete: !0
                    }) : Bt(
                      xm,
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
        v.viewport
      ) })
    ] }) : null;
  }, "ToastImpl")
), Im = /* @__PURE__ */ te((e) => {
  const { __scopeToast: t, children: n, ...o } = e, r = Hn(Wn, t), [s, i] = a.useState(!1), [c, l] = a.useState(!1);
  return lc(() => i(!0)), a.useEffect(() => {
    const u = window.setTimeout(() => l(!0), 1e3);
    return () => window.clearTimeout(u);
  }, []), c ? null : /* @__PURE__ */ h(Xt, { asChild: !0, container: r.announcerContainer || void 0, children: /* @__PURE__ */ h(Jo, { ...o, children: s && /* @__PURE__ */ H(Ge, { children: [
    r.label,
    " ",
    n
  ] }) }) });
}, "ToastAnnounce"), km = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ te(function(t, n) {
    const { __scopeToast: o, ...r } = t;
    return /* @__PURE__ */ h(B.div, { ...r, ref: n });
  }, "ToastTitle")
), Om = /* @__PURE__ */ a.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ te(function(t, n) {
    const { __scopeToast: o, ...r } = t;
    return /* @__PURE__ */ h(B.div, { ...r, ref: n });
  }, "ToastDescription")
), Am = "ToastClose", Dm = /* @__PURE__ */ a.forwardRef(
  /* @__PURE__ */ te(function(t, n) {
    const { __scopeToast: o, ...r } = t, s = _m(Am, o);
    return /* @__PURE__ */ h(Mm, { asChild: !0, children: /* @__PURE__ */ h(
      B.button,
      {
        type: "button",
        ...r,
        ref: n,
        onClick: k(t.onClick, s.onClose)
      }
    ) });
  }, "ToastClose")
), Mm = /* @__PURE__ */ a.forwardRef(/* @__PURE__ */ te(function(t, n) {
  const { __scopeToast: o, altText: r, ...s } = t;
  return /* @__PURE__ */ h(
    B.div,
    {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": r || void 0,
      ...s,
      ref: n
    }
  );
}, "ToastAnnounceExclude"));
function xr(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((o) => {
    if (o.nodeType === o.TEXT_NODE && o.textContent && t.push(o.textContent), uc(o)) {
      const r = o.ariaHidden || o.hidden || o.style.display === "none", s = o.dataset.radixToastAnnounceExclude === "";
      if (!r)
        if (s) {
          const i = o.dataset.radixToastAnnounceAlt;
          i && t.push(i);
        } else
          t.push(...xr(o));
    }
  }), t;
}
te(xr, "getAnnounceTextContent");
function Bt(e, t, n, { discrete: o }) {
  const r = n.originalEvent.currentTarget, s = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && r.addEventListener(e, t, { once: !0 }), o ? xn(r, s) : r.dispatchEvent(s);
}
te(Bt, "handleAndDispatchCustomEvent");
var ns = /* @__PURE__ */ te((e, t, n = 0) => {
  const o = Math.abs(e.x), r = Math.abs(e.y), s = o > r;
  return t === "left" || t === "right" ? s && o > n : !s && r > n;
}, "isDeltaInDirection");
function lc(e = () => {
}) {
  const t = ue(e);
  oe(() => {
    let n = 0, o = 0;
    return n = window.requestAnimationFrame(() => o = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(n), window.cancelAnimationFrame(o);
    };
  }, [t]);
}
te(lc, "useNextFrame");
function uc(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
te(uc, "isHTMLElement");
function dc(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: /* @__PURE__ */ te((o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }, "acceptNode")
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
te(dc, "getTabbableCandidates");
function vn(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
te(vn, "focusFirst");
var Nm = vm, $m = bm, Lm = Tm, Fm = km, Bm = Om, Vm = Dm;
const Hm = "wk-Toast_viewport", Wm = "wk-Toast_root", Um = "wk-Toast_body", jm = "wk-Toast_title", Km = "wk-Toast_description", zm = "wk-Toast_close", wt = {
  viewport: Hm,
  root: Wm,
  body: Um,
  title: jm,
  description: Km,
  close: zm
}, fc = Ao(null);
function Zg({ children: e, swipeDirection: t = "right" }) {
  const [n, o] = Be([]), r = Sn(1), s = xt((l) => {
    o((u) => u.filter((d) => d.id !== l));
  }, []), i = xt((l) => {
    const u = r.current++;
    o((d) => [...d, { ...l, id: u }]);
  }, []), c = ko(() => ({ toast: i, dismiss: s }), [i, s]);
  return /* @__PURE__ */ h(fc.Provider, { value: c, children: /* @__PURE__ */ H(Nm, { swipeDirection: t, children: [
    e,
    n.map((l) => /* @__PURE__ */ H(
      Lm,
      {
        className: wt.root,
        "data-tone": l.tone ?? "neutral",
        duration: l.duration ?? (l.tone === "danger" ? 1 / 0 : 5e3),
        type: l.tone === "danger" ? "foreground" : "background",
        onOpenChange: (u) => {
          u || s(l.id);
        },
        children: [
          /* @__PURE__ */ H("div", { className: wt.body, children: [
            /* @__PURE__ */ h(Fm, { className: wt.title, children: l.title }),
            l.description && /* @__PURE__ */ h(Bm, { className: wt.description, children: l.description })
          ] }),
          /* @__PURE__ */ h(Vm, { className: wt.close, "aria-label": "Dismiss", children: /* @__PURE__ */ h(Mo, {}) })
        ]
      },
      l.id
    )),
    /* @__PURE__ */ h($m, { className: wt.viewport })
  ] }) });
}
function Jg() {
  const e = Oo(fc);
  if (!e) throw new Error("useToast must be used inside <ToastProvider>");
  return e;
}
const Gm = "wk-Textarea_root", Ym = "wk-Textarea_mono", Xm = "wk-Textarea_noResize", no = {
  root: Gm,
  mono: Ym,
  noResize: Xm
}, Qg = Ce(function({ invalid: t, mono: n = !1, resizable: o = !0, className: r, id: s, rows: i = 4, ...c }, l) {
  const u = $o(), d = t ?? (u == null ? void 0 : u.invalid) ?? !1;
  return /* @__PURE__ */ h(
    "textarea",
    {
      ref: l,
      id: s ?? (u == null ? void 0 : u.inputId),
      rows: i,
      "aria-invalid": d || void 0,
      "aria-describedby": u == null ? void 0 : u.describedBy,
      className: W(no.root, n && no.mono, !o && no.noResize, r),
      ...c
    }
  );
}), qm = "wk-Combobox_wrap", Zm = "wk-Combobox_list", Jm = "wk-Combobox_option", Qm = "wk-Combobox_label", ev = "wk-Combobox_mono", tv = "wk-Combobox_hint", nv = "wk-Combobox_empty", st = {
  wrap: qm,
  list: Zm,
  option: Jm,
  label: Qm,
  mono: ev,
  hint: tv,
  empty: nv
}, ov = (e) => e.value ?? e.label;
function ew({
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
  const d = jt(), [f, p] = Be(!1), [g, w] = Be(-1), m = Sn(null), v = ko(() => f ? n(e) : [], [f, n, e]), C = f && (v.length > 0 || !!r), S = g >= 0 && v[g] ? `${d}-${g}` : void 0, b = (y) => {
    const x = v[y];
    x && (t(ov(x)), p(!1), w(-1));
  };
  return /* @__PURE__ */ H("div", { className: st.wrap, children: [
    /* @__PURE__ */ h(
      Qc,
      {
        role: "combobox",
        "aria-expanded": C,
        "aria-controls": C ? d : void 0,
        "aria-activedescendant": S,
        "aria-autocomplete": "list",
        autoComplete: "off",
        value: e,
        mono: s,
        className: i,
        onChange: (y) => {
          t(y.target.value), p(!0), w(-1);
        },
        onFocus: () => p(!0),
        onBlur: (y) => {
          m.current = setTimeout(() => p(!1), 120), l == null || l(y);
        },
        onKeyDown: (y) => {
          c == null || c(y), !y.defaultPrevented && (y.key === "ArrowDown" && v.length ? (y.preventDefault(), p(!0), w((x) => (x + 1) % v.length)) : y.key === "ArrowUp" && v.length ? (y.preventDefault(), w((x) => x <= 0 ? v.length - 1 : x - 1)) : y.key === "Enter" ? g >= 0 ? (y.preventDefault(), b(g)) : o == null || o() : y.key === "Tab" && g >= 0 ? (y.preventDefault(), b(g)) : y.key === "Escape" && C && (y.preventDefault(), p(!1), w(-1)));
        },
        ...u
      }
    ),
    C && /* @__PURE__ */ h("ul", { className: st.list, id: d, role: "listbox", children: v.length === 0 ? /* @__PURE__ */ h("li", { className: st.empty, children: r }) : v.map((y, x) => /* @__PURE__ */ H(
      "li",
      {
        id: `${d}-${x}`,
        role: "option",
        "aria-selected": x === g,
        "data-active": x === g,
        className: st.option,
        onMouseEnter: () => w(x),
        onMouseDown: (E) => {
          E.preventDefault(), m.current && clearTimeout(m.current), b(x);
        },
        children: [
          /* @__PURE__ */ h("span", { className: W(st.label, s && st.mono), children: y.label }),
          y.hint && /* @__PURE__ */ h("span", { className: st.hint, children: y.hint })
        ]
      },
      `${y.label}-${x}`
    )) })
  ] });
}
const rv = "wk-SegmentedControl_root", sv = "wk-SegmentedControl_option", iv = "wk-SegmentedControl_fluid", oo = {
  root: rv,
  option: sv,
  fluid: iv
};
function tw({
  options: e,
  value: t,
  onValueChange: n,
  fluid: o = !1,
  className: r,
  ...s
}) {
  const i = jt(), c = Sn(null), l = xt(
    (u) => {
      var g, w;
      const d = e.filter((m) => !m.disabled);
      if (!d.length) return;
      const f = d.findIndex((m) => m.value === t), p = d[(f + u + d.length) % d.length];
      n(p.value), (w = (g = c.current) == null ? void 0 : g.querySelector(`[data-value="${CSS.escape(p.value)}"]`)) == null || w.focus();
    },
    [e, t, n]
  );
  return /* @__PURE__ */ h(
    "div",
    {
      ref: c,
      role: "radiogroup",
      className: W(oo.root, o && oo.fluid, r),
      onKeyDown: (u) => {
        (u.key === "ArrowRight" || u.key === "ArrowDown") && (u.preventDefault(), l(1)), (u.key === "ArrowLeft" || u.key === "ArrowUp") && (u.preventDefault(), l(-1));
      },
      ...s,
      children: e.map((u) => {
        const d = u.value === t;
        return /* @__PURE__ */ h(
          "button",
          {
            type: "button",
            role: "radio",
            id: `${i}-${u.value}`,
            "data-value": u.value,
            "aria-checked": d,
            "data-disabled": u.disabled || void 0,
            disabled: u.disabled,
            tabIndex: d ? 0 : -1,
            className: oo.option,
            onClick: () => !u.disabled && n(u.value),
            children: u.label
          },
          u.value
        );
      })
    }
  );
}
const cv = "wk-Alert_root", av = "wk-Alert_info", lv = "wk-Alert_success", uv = "wk-Alert_warn", dv = "wk-Alert_danger", fv = "wk-Alert_icon", pv = "wk-Alert_title", hv = "wk-Alert_body", mv = "wk-Alert_actions", vv = "wk-Alert_close", gv = "wk-Alert_banner", qe = {
  root: cv,
  info: av,
  success: lv,
  warn: uv,
  danger: dv,
  icon: fv,
  title: pv,
  body: hv,
  actions: mv,
  close: vv,
  banner: gv
};
function nw({
  tone: e = "info",
  title: t,
  children: n,
  icon: o,
  action: r,
  onDismiss: s,
  banner: i = !1,
  className: c
}) {
  return /* @__PURE__ */ H(
    "div",
    {
      role: e === "danger" ? "alert" : "status",
      className: W(qe.root, qe[e], i && qe.banner, c),
      children: [
        o && /* @__PURE__ */ h("span", { className: qe.icon, "aria-hidden": "true", children: o }),
        /* @__PURE__ */ H("div", { className: qe.body, children: [
          t && /* @__PURE__ */ h("span", { className: qe.title, children: t }),
          n,
          r && /* @__PURE__ */ h("div", { className: qe.actions, children: r })
        ] }),
        s && /* @__PURE__ */ h("button", { type: "button", className: qe.close, onClick: s, "aria-label": "Dismiss", children: /* @__PURE__ */ h(Mo, {}) })
      ]
    }
  );
}
const wv = "wk-EmptyState_root", bv = "wk-EmptyState_icon", yv = "wk-EmptyState_title", Cv = "wk-EmptyState_description", Sv = "wk-EmptyState_actions", Nt = {
  root: wv,
  icon: bv,
  title: yv,
  description: Cv,
  actions: Sv
};
function ow({ icon: e, title: t, description: n, action: o, className: r }) {
  return /* @__PURE__ */ H("div", { className: W(Nt.root, r), children: [
    e && /* @__PURE__ */ h("span", { className: Nt.icon, "aria-hidden": "true", children: e }),
    /* @__PURE__ */ h("p", { className: Nt.title, children: t }),
    n && /* @__PURE__ */ h("p", { className: Nt.description, children: n }),
    o && /* @__PURE__ */ h("div", { className: Nt.actions, children: o })
  ] });
}
const xv = "wk-Spinner_root", Ev = "wk-Spinner_sm", Tv = "wk-Spinner_md", Pv = "wk-Spinner_lg", os = {
  root: xv,
  "wk-spinner-rotate": "wk-Spinner_wk-spinner-rotate",
  sm: Ev,
  md: Tv,
  lg: Pv
};
function rw({ size: e = "md", label: t = "Loading", className: n }) {
  return /* @__PURE__ */ H("span", { role: "status", children: [
    /* @__PURE__ */ h("span", { className: W(os.root, os[e], n), "aria-hidden": "true" }),
    t && /* @__PURE__ */ h(Pi, { children: t })
  ] });
}
const _v = "wk-Kbd_root", Rv = "wk-Kbd_group", ro = {
  root: _v,
  group: Rv
};
function sw({ keys: e, className: t, children: n, ...o }) {
  return e != null && e.length ? /* @__PURE__ */ h("span", { className: ro.group, ...o, children: e.map((r, s) => /* @__PURE__ */ h(rs, { children: /* @__PURE__ */ h("kbd", { className: W(ro.root, t), children: r }) }, `${r}-${s}`)) }) : /* @__PURE__ */ h("kbd", { className: W(ro.root, t), ...o, children: n });
}
const Iv = "wk-SplitPane_root", kv = "wk-SplitPane_horizontal", Ov = "wk-SplitPane_vertical", Av = "wk-SplitPane_pane", Dv = "wk-SplitPane_handle", $t = {
  root: Iv,
  horizontal: kv,
  vertical: Ov,
  pane: Av,
  handle: Dv
};
function iw({
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
  const u = Sn(null), [d, f] = Be(!1), p = t === "horizontal", g = xt(
    (m) => {
      var S;
      const v = (S = u.current) == null ? void 0 : S.getBoundingClientRect(), C = v ? (p ? v.width : v.height) - r : s;
      return Math.max(r, Math.min(m, Math.min(s, C)));
    },
    [r, s, p]
  ), w = (m) => o(g(n + m));
  return /* @__PURE__ */ H("div", { ref: u, className: W($t.root, $t[t], c), children: [
    /* @__PURE__ */ h("div", { className: $t.pane, style: { [p ? "width" : "height"]: n, flex: "none" }, children: e[0] }),
    /* @__PURE__ */ h(
      "div",
      {
        role: "separator",
        tabIndex: 0,
        "aria-label": l,
        "aria-orientation": p ? "vertical" : "horizontal",
        "aria-valuenow": Math.round(n),
        "aria-valuemin": r,
        "aria-valuemax": Number.isFinite(s) ? s : void 0,
        "data-dragging": d || void 0,
        className: $t.handle,
        onDoubleClick: () => i !== void 0 && o(i),
        onPointerDown: (m) => {
          m.currentTarget.setPointerCapture(m.pointerId), f(!0);
        },
        onPointerMove: (m) => {
          var C;
          if (!d) return;
          const v = (C = u.current) == null ? void 0 : C.getBoundingClientRect();
          v && o(g(p ? m.clientX - v.left : m.clientY - v.top));
        },
        onPointerUp: (m) => {
          m.currentTarget.releasePointerCapture(m.pointerId), f(!1);
        },
        onKeyDown: (m) => {
          const v = m.shiftKey ? 40 : 10;
          m.key === (p ? "ArrowLeft" : "ArrowUp") && (m.preventDefault(), w(-v)), m.key === (p ? "ArrowRight" : "ArrowDown") && (m.preventDefault(), w(v)), m.key === "Home" && i !== void 0 && (m.preventDefault(), o(i));
        }
      }
    ),
    /* @__PURE__ */ h("div", { className: W($t.pane), style: { flex: 1 }, children: e[1] })
  ] });
}
const Mv = "wk-Table_wrapper", Nv = "wk-Table_root", $v = "wk-Table_caption", Lv = "wk-Table_th", Fv = "wk-Table_td", Bv = "wk-Table_numeric", Vv = "wk-Table_captionHidden", Hv = "wk-Table_row", Wv = "wk-Table_interactive", Ae = {
  wrapper: Mv,
  root: Nv,
  caption: $v,
  th: Lv,
  td: Fv,
  numeric: Bv,
  captionHidden: Vv,
  row: Hv,
  interactive: Wv
};
function cw({ caption: e, captionHidden: t, interactive: n, className: o, children: r, ...s }) {
  return /* @__PURE__ */ h("div", { className: Ae.wrapper, children: /* @__PURE__ */ H("table", { className: W(Ae.root, n && Ae.interactive, o), ...s, children: [
    e && /* @__PURE__ */ h("caption", { className: W(Ae.caption, t && Ae.captionHidden), children: e }),
    r
  ] }) });
}
const aw = (e) => /* @__PURE__ */ h("thead", { ...e }), lw = (e) => /* @__PURE__ */ h("tbody", { ...e }), uw = ({ selected: e, className: t, ...n }) => /* @__PURE__ */ h("tr", { "data-selected": e || void 0, className: W(Ae.row, t), ...n }), dw = ({ numeric: e, scope: t = "col", className: n, ...o }) => /* @__PURE__ */ h("th", { scope: t, className: W(Ae.th, e && Ae.numeric, n), ...o }), fw = ({ numeric: e, className: t, ...n }) => /* @__PURE__ */ h("td", { className: W(Ae.td, e && Ae.numeric, t), ...n }), Uv = "wk-Badge_root", jv = "wk-Badge_neutral", Kv = "wk-Badge_accent", zv = "wk-Badge_danger", Gv = "wk-Badge_warn", Yv = "wk-Badge_success", Xv = "wk-Badge_info", qv = "wk-Badge_mono", so = {
  root: Uv,
  neutral: jv,
  accent: Kv,
  danger: zv,
  warn: Gv,
  success: Yv,
  info: Xv,
  mono: qv
};
function pw({ tone: e = "neutral", mono: t = !1, className: n, ...o }) {
  return /* @__PURE__ */ h("span", { className: W(so.root, so[e], t && so.mono, n), ...o });
}
const Zv = "wk-AppShell_root", Jv = "wk-AppShell_titlebar", Qv = "wk-AppShell_body", eg = "wk-AppShell_sidebar", tg = "wk-AppShell_main", Lt = {
  root: Zv,
  titlebar: Jv,
  body: Qv,
  sidebar: eg,
  main: tg
};
function hw({
  titlebar: e,
  draggable: t = !1,
  insetWindowControls: n = !1,
  sidebar: o,
  sidebarWidth: r,
  children: s,
  className: i
}) {
  return /* @__PURE__ */ H(
    "div",
    {
      className: W(Lt.root, i),
      style: r ? { "--wk-sidebar-w": r } : void 0,
      children: [
        e && /* @__PURE__ */ h(
          "header",
          {
            className: Lt.titlebar,
            "data-inset-controls": n || void 0,
            ...t ? { "data-tauri-drag-region": "" } : {},
            children: e
          }
        ),
        /* @__PURE__ */ H("div", { className: Lt.body, children: [
          o && /* @__PURE__ */ h("nav", { className: Lt.sidebar, "aria-label": "Primary", children: o }),
          /* @__PURE__ */ h("main", { className: Lt.main, children: s })
        ] })
      ]
    }
  );
}
const ng = {
  1: "2xl",
  2: "xl",
  3: "lg",
  4: "md",
  5: "sm",
  6: "xs"
}, pc = {
  xs: we.xs,
  sm: we.sm,
  md: we.md,
  lg: we.lg,
  xl: we.xl,
  "2xl": we.xxl
}, mw = Ce(function({ level: t, size: n, className: o, ...r }, s) {
  const i = `h${t}`, c = pc[n ?? ng[t]];
  return /* @__PURE__ */ h(i, { ref: s, className: W(we.heading, c, o), ...r });
}), vw = Ce(function({ as: t = "p", size: n = "md", tone: o = "default", mono: r = !1, className: s, ...i }, c) {
  return /* @__PURE__ */ h(
    t,
    {
      ref: c,
      className: W(
        we.text,
        pc[n],
        o !== "default" && we[o],
        r && we.mono,
        s
      ),
      ...i
    }
  );
}), gw = Ce(function({ external: t = !1, nofollow: n = !1, asChild: o = !1, className: r, rel: s, target: i, ...c }, l) {
  const u = o ? as : "a", d = new Set((s ?? "").split(/\s+/).filter(Boolean));
  return t && (d.add("noopener"), d.add("noreferrer")), n && d.add("nofollow"), /* @__PURE__ */ h(
    u,
    {
      ref: l,
      className: W(we.link, r),
      target: i ?? (t ? "_blank" : void 0),
      rel: d.size ? [...d].join(" ") : void 0,
      ...c
    }
  );
}), og = "wk-Media_image", rg = "wk-Media_skeleton", hc = {
  image: og,
  skeleton: rg
}, ww = Ce(function({ width: t, height: n, aspectRatio: o, priority: r = !1, className: s, style: i, alt: c, ...l }, u) {
  const d = o ?? (t && n ? `${t}/${n}` : void 0);
  return /* @__PURE__ */ h(
    "img",
    {
      ref: u,
      alt: c,
      width: t,
      height: n,
      loading: r ? "eager" : "lazy",
      decoding: r ? "sync" : "async",
      fetchPriority: r ? "high" : void 0,
      className: W(hc.image, s),
      style: { ...d ? { "--wk-image-ar": String(d) } : null, ...i },
      ...l
    }
  );
});
function bw({
  width: e = "100%",
  height: t = "1em",
  radius: n = "sm",
  className: o,
  style: r,
  ...s
}) {
  return /* @__PURE__ */ h(
    "span",
    {
      "aria-hidden": "true",
      className: W(hc.skeleton, o),
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
function sg({ data: e, nonce: t }) {
  const n = JSON.stringify(e).replace(/</g, "\\u003c");
  return /* @__PURE__ */ h("script", { type: "application/ld+json", nonce: t, dangerouslySetInnerHTML: { __html: n } });
}
const ig = "wk-Breadcrumbs_root", cg = "wk-Breadcrumbs_list", ag = "wk-Breadcrumbs_item", lg = "wk-Breadcrumbs_link", ug = "wk-Breadcrumbs_sep", Ft = {
  root: ig,
  list: cg,
  item: ag,
  link: lg,
  sep: ug
};
function yw({ items: e, origin: t, className: n }) {
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
  return /* @__PURE__ */ H(Ge, { children: [
    /* @__PURE__ */ h("nav", { "aria-label": "Breadcrumb", className: W(Ft.root, n), children: /* @__PURE__ */ h("ol", { className: Ft.list, children: e.map((r, s) => {
      const i = s === e.length - 1;
      return /* @__PURE__ */ H(rs, { children: [
        /* @__PURE__ */ h("li", { className: Ft.item, children: r.href && !i ? /* @__PURE__ */ h("a", { className: Ft.link, href: r.href, children: r.label }) : /* @__PURE__ */ h("span", { "aria-current": i ? "page" : void 0, children: r.label }) }),
        !i && /* @__PURE__ */ h("li", { className: Ft.sep, "aria-hidden": "true", children: "/" })
      ] }, `${r.label}-${s}`);
    }) }) }),
    /* @__PURE__ */ h(sg, { data: o })
  ] });
}
export {
  nw as Alert,
  hw as AppShell,
  pw as Badge,
  yw as Breadcrumbs,
  gg as Button,
  ss as CheckIcon,
  _g as Checkbox,
  bc as ChevronDownIcon,
  Mo as CloseIcon,
  ew as Combobox,
  Ig as Dialog,
  kg as DialogClose,
  ow as EmptyState,
  wg as Field,
  mw as Heading,
  ww as Image,
  Qc as Input,
  sg as JsonLd,
  sw as Kbd,
  gw as Link,
  Fg as Menu,
  Bg as MenuItem,
  Vg as MenuLabel,
  Hg as MenuSeparator,
  tw as SegmentedControl,
  yg as Select,
  Sg as SelectGroup,
  Cg as SelectItem,
  xg as SelectSeparator,
  bw as Skeleton,
  rw as Spinner,
  iw as SplitPane,
  Tg as Switch,
  cw as Table,
  zg as Tabs,
  Xg as TabsContent,
  Gg as TabsList,
  Yg as TabsTrigger,
  lw as Tbody,
  fw as Td,
  vw as Text,
  Qg as Textarea,
  dw as Th,
  aw as Thead,
  hg as ThemeProvider,
  vg as ThemeScript,
  Zg as ToastProvider,
  jg as Tooltip,
  Ug as TooltipProvider,
  uw as Tr,
  Pi as VisuallyHidden,
  W as cn,
  $o as useField,
  mg as useTheme,
  Jg as useToast
};
//# sourceMappingURL=index.js.map
