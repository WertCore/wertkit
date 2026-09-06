import { jsx as e, jsxs as m, Fragment as Ie } from "react/jsx-runtime";
import { useState as A, useEffect as ae, useCallback as j, useMemo as K, useContext as ie, createContext as le, forwardRef as B, useId as F, useRef as q, Fragment as ge, useLayoutEffect as He } from "react";
import { Slot as ue, Slottable as De } from "@radix-ui/react-slot";
import * as T from "@radix-ui/react-select";
import * as Ce from "@radix-ui/react-switch";
import * as Se from "@radix-ui/react-checkbox";
import * as C from "@radix-ui/react-dialog";
import * as V from "@radix-ui/react-dropdown-menu";
import * as Y from "@radix-ui/react-tooltip";
import * as pe from "@radix-ui/react-tabs";
import * as U from "@radix-ui/react-toast";
function u(...t) {
  return t.filter((n) => typeof n == "string" && n !== "").join(" ");
}
const ye = (t) => ({
  width: "1em",
  height: "1em",
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": !0,
  ...t
}), Ne = (t) => /* @__PURE__ */ e("svg", { ...ye(t), children: /* @__PURE__ */ e("path", { d: "M3 8.5 6.5 12 13 4.5" }) }), Pe = (t) => /* @__PURE__ */ e("svg", { ...ye(t), children: /* @__PURE__ */ e("path", { d: "m4 6 4 4 4-4" }) }), he = (t) => /* @__PURE__ */ e("svg", { ...ye(t), children: /* @__PURE__ */ e("path", { d: "M4 4l8 8M12 4l-8 8" }) }), Be = le(null);
function Oe(t) {
  if (!t || typeof window > "u") return {};
  try {
    return JSON.parse(window.localStorage.getItem(t) ?? "{}");
  } catch {
    return {};
  }
}
function wa({
  children: t,
  theme: n,
  defaultTheme: o = "system",
  defaultDensity: a = "normal",
  storageKey: s = "wertkit-theme",
  target: r = "root"
}) {
  const [c, i] = A(o), [d, l] = A(a), [p, v] = A(!1), [_, f] = A(null);
  ae(() => {
    const y = Oe(s);
    y.theme && i(y.theme), y.density && l(y.density);
  }, [s]);
  const h = n ?? c;
  ae(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function") return;
    const y = window.matchMedia("(prefers-color-scheme: dark)"), b = () => v(y.matches);
    return b(), y.addEventListener("change", b), () => y.removeEventListener("change", b);
  }, []);
  const w = h === "system" ? p ? "dark" : "light" : h;
  ae(() => {
    const y = r === "self" ? _ : document.documentElement;
    y && (y.setAttribute("data-theme", w), y.setAttribute("data-density", d));
  }, [w, d, r, _]), ae(() => {
    if (!(!s || typeof window > "u"))
      try {
        window.localStorage.setItem(s, JSON.stringify({ theme: h, density: d }));
      } catch {
      }
  }, [h, d, s]);
  const k = j((y) => i(y), []), g = j((y) => l(y), []), $ = K(
    () => ({ theme: h, resolvedTheme: w, setTheme: k, density: d, setDensity: g }),
    [h, w, k, d, g]
  );
  return /* @__PURE__ */ e(Be.Provider, { value: $, children: r === "self" ? /* @__PURE__ */ e("div", { ref: f, children: t }) : t });
}
function ka() {
  const t = ie(Be);
  if (!t) throw new Error("useTheme must be used inside <ThemeProvider>");
  return t;
}
function fa({
  storageKey: t = "wertkit-theme",
  defaultTheme: n = "system",
  defaultDensity: o = "normal",
  nonce: a
}) {
  const s = `(function(){try{
var k=${JSON.stringify(t)},t=${JSON.stringify(n)},d=${JSON.stringify(o)};
if(k){var s=JSON.parse(localStorage.getItem(k)||'{}');if(s.theme)t=s.theme;if(s.density)d=s.density;}
if(t==='system'){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}
var e=document.documentElement;e.setAttribute('data-theme',t);e.setAttribute('data-density',d);
}catch(_){}})();`;
  return /* @__PURE__ */ e("script", { nonce: a, dangerouslySetInnerHTML: { __html: s } });
}
const ze = "wk-Button_root", Ve = "wk-Button_sm", Ke = "wk-Button_md", je = "wk-Button_lg", qe = "wk-Button_iconOnly", Je = "wk-Button_primary", Ue = "wk-Button_secondary", Ge = "wk-Button_ghost", Ye = "wk-Button_danger", Xe = "wk-Button_spinner", W = {
  root: ze,
  sm: Ve,
  md: Ke,
  lg: je,
  iconOnly: qe,
  primary: Je,
  secondary: Ue,
  ghost: Ge,
  danger: Ye,
  spinner: Xe,
  "wk-spin": "wk-Button_wk-spin"
}, Qe = B(function({
  variant: n = "secondary",
  size: o = "md",
  iconOnly: a = !1,
  loading: s = !1,
  startIcon: r,
  endIcon: c,
  asChild: i = !1,
  className: d,
  children: l,
  disabled: p,
  type: v,
  ..._
}, f) {
  return /* @__PURE__ */ m(
    i ? ue : "button",
    {
      ref: f,
      type: i ? void 0 : v ?? "button",
      disabled: p || s,
      "data-loading": s || void 0,
      className: u(
        W.root,
        W[n],
        W[o],
        a && W.iconOnly,
        d
      ),
      ..._,
      children: [
        s ? /* @__PURE__ */ e("span", { className: W.spinner, "aria-hidden": "true" }) : r,
        i ? /* @__PURE__ */ e(De, { children: l }) : l,
        !s && c
      ]
    }
  );
}), We = "wk-Field_root", Ze = "wk-Field_label", et = "wk-Field_required", tt = "wk-Field_hint", nt = "wk-Field_error", Z = {
  root: We,
  label: Ze,
  required: et,
  hint: tt,
  error: nt
}, Ae = le(null), $e = () => ie(Ae);
function ba({ label: t, hint: n, error: o, required: a, children: s, className: r }) {
  const c = F(), i = `${c}-input`, d = `${c}-hint`, l = `${c}-error`, p = !!o, v = [o ? l : null, n ? d : null].filter(Boolean).join(" ") || void 0;
  return /* @__PURE__ */ e(Ae.Provider, { value: { inputId: i, describedBy: v, invalid: p }, children: /* @__PURE__ */ m("div", { className: u(Z.root, r), children: [
    t && /* @__PURE__ */ m("label", { className: Z.label, htmlFor: i, children: [
      t,
      a && /* @__PURE__ */ e("span", { className: Z.required, "aria-hidden": "true", children: "*" })
    ] }),
    s,
    o ? /* @__PURE__ */ e("p", { className: Z.error, id: l, role: "alert", children: o }) : n && /* @__PURE__ */ e("p", { className: Z.hint, id: d, children: n })
  ] }) });
}
const ot = "wk-Input_root", st = "wk-Input_mono", at = "wk-Input_shell", rt = "wk-Input_slot", ct = "wk-Input_start", it = "wk-Input_end", lt = "wk-Input_hasStart", dt = "wk-Input_hasEnd", mt = "wk-Input_sm", ut = "wk-Input_md", pt = "wk-Input_lg", L = {
  root: ot,
  mono: st,
  shell: at,
  slot: rt,
  start: ct,
  end: it,
  hasStart: lt,
  hasEnd: dt,
  sm: mt,
  md: ut,
  lg: pt
}, ve = B(function({
  size: n = "md",
  invalid: o,
  mono: a = !1,
  startSlot: s,
  endSlot: r,
  className: c,
  id: i,
  "aria-describedby": d,
  ...l
}, p) {
  const v = $e(), _ = o ?? (v == null ? void 0 : v.invalid) ?? !1, f = /* @__PURE__ */ e(
    "input",
    {
      ref: p,
      id: i ?? (v == null ? void 0 : v.inputId),
      "aria-invalid": _ || void 0,
      "aria-describedby": d ?? (v == null ? void 0 : v.describedBy),
      className: u(
        L.root,
        L[n],
        a && L.mono,
        s && L.hasStart,
        r && L.hasEnd,
        !s && !r && c
      ),
      ...l
    }
  );
  return !s && !r ? f : /* @__PURE__ */ m("span", { className: u(L.shell, c), "data-invalid": _ || void 0, children: [
    s && /* @__PURE__ */ e("span", { className: u(L.slot, L.start), "aria-hidden": "true", children: s }),
    f,
    r && /* @__PURE__ */ e("span", { className: u(L.slot, L.end), children: r })
  ] });
}), ht = "wk-Select_trigger", wt = "wk-Select_sm", kt = "wk-Select_md", ft = "wk-Select_lg", bt = "wk-Select_icon", _t = "wk-Select_content", vt = "wk-Select_viewport", gt = "wk-Select_item", yt = "wk-Select_itemIndicator", Nt = "wk-Select_label", $t = "wk-Select_separator", M = {
  trigger: ht,
  sm: wt,
  md: kt,
  lg: ft,
  icon: bt,
  content: _t,
  viewport: vt,
  item: gt,
  itemIndicator: yt,
  label: Nt,
  separator: $t
};
function _a({
  placeholder: t,
  size: n = "md",
  children: o,
  className: a,
  id: s,
  "aria-label": r,
  ...c
}) {
  const i = $e();
  return /* @__PURE__ */ m(T.Root, { ...c, children: [
    /* @__PURE__ */ m(
      T.Trigger,
      {
        id: s ?? (i == null ? void 0 : i.inputId),
        "aria-label": r,
        "aria-invalid": (i == null ? void 0 : i.invalid) || void 0,
        "aria-describedby": i == null ? void 0 : i.describedBy,
        className: u(M.trigger, M[n], a),
        children: [
          /* @__PURE__ */ e(T.Value, { placeholder: t }),
          /* @__PURE__ */ e(T.Icon, { className: M.icon, children: /* @__PURE__ */ e(Pe, {}) })
        ]
      }
    ),
    /* @__PURE__ */ e(T.Portal, { children: /* @__PURE__ */ e(T.Content, { className: M.content, position: "popper", sideOffset: 4, children: /* @__PURE__ */ e(T.Viewport, { className: M.viewport, children: o }) }) })
  ] });
}
const va = B(
  function({ className: n, children: o, ...a }, s) {
    return /* @__PURE__ */ m(T.Item, { ref: s, className: u(M.item, n), ...a, children: [
      /* @__PURE__ */ e(T.ItemText, { children: o }),
      /* @__PURE__ */ e(T.ItemIndicator, { className: M.itemIndicator, children: /* @__PURE__ */ e(Ne, {}) })
    ] });
  }
);
function ga({ label: t, children: n }) {
  return /* @__PURE__ */ m(T.Group, { children: [
    /* @__PURE__ */ e(T.Label, { className: M.label, children: t }),
    n
  ] });
}
function ya() {
  return /* @__PURE__ */ e(T.Separator, { className: M.separator });
}
const Ct = "wk-Switch_wrapper", St = "wk-Switch_root", Tt = "wk-Switch_thumb", xt = "wk-Switch_label", me = {
  wrapper: Ct,
  root: St,
  thumb: Tt,
  label: xt
}, Na = B(function({ label: n, className: o, id: a, ...s }, r) {
  const c = F(), i = a ?? c, d = /* @__PURE__ */ e(Ce.Root, { ref: r, id: i, className: u(me.root, o), ...s, children: /* @__PURE__ */ e(Ce.Thumb, { className: me.thumb }) });
  return n ? /* @__PURE__ */ m("span", { className: me.wrapper, children: [
    d,
    /* @__PURE__ */ e("label", { className: me.label, htmlFor: i, children: n })
  ] }) : d;
}), It = "wk-Checkbox_wrapper", Dt = "wk-Checkbox_root", Pt = "wk-Checkbox_indicator", Bt = "wk-Checkbox_dash", At = "wk-Checkbox_label", ee = {
  wrapper: It,
  root: Dt,
  indicator: Pt,
  dash: Bt,
  label: At
}, Lt = B(function({ label: n, className: o, id: a, ...s }, r) {
  const c = F(), i = a ?? c, d = /* @__PURE__ */ e(Se.Root, { ref: r, id: i, className: u(ee.root, o), ...s, children: /* @__PURE__ */ e(Se.Indicator, { className: ee.indicator, children: s.checked === "indeterminate" ? /* @__PURE__ */ e("span", { className: ee.dash }) : /* @__PURE__ */ e(Ne, {}) }) });
  return n ? /* @__PURE__ */ m("span", { className: ee.wrapper, children: [
    d,
    /* @__PURE__ */ e("label", { className: ee.label, htmlFor: i, children: n })
  ] }) : d;
}), Et = "wk-Semantic_heading", Mt = "wk-Semantic_text", Ft = "wk-Semantic_muted", Rt = "wk-Semantic_subtle", Ht = "wk-Semantic_danger", Ot = "wk-Semantic_mono", zt = "wk-Semantic_xs", Vt = "wk-Semantic_sm", Kt = "wk-Semantic_md", jt = "wk-Semantic_lg", qt = "wk-Semantic_xl", Jt = "wk-Semantic_xxl", Ut = "wk-Semantic_link", Gt = "wk-Semantic_visuallyHidden", D = {
  heading: Et,
  text: Mt,
  muted: Ft,
  subtle: Rt,
  danger: Ht,
  mono: Ot,
  xs: zt,
  sm: Vt,
  md: Kt,
  lg: jt,
  xl: qt,
  xxl: Jt,
  link: Ut,
  visuallyHidden: Gt
};
function de({ className: t, ...n }) {
  return /* @__PURE__ */ e("span", { className: u(D.visuallyHidden, t), ...n });
}
const Yt = "wk-Dialog_overlay", Xt = "wk-Dialog_content", Qt = "wk-Dialog_header", Wt = "wk-Dialog_headings", Zt = "wk-Dialog_title", en = "wk-Dialog_description", tn = "wk-Dialog_close", nn = "wk-Dialog_footer", R = {
  overlay: Yt,
  content: Xt,
  header: Qt,
  headings: Wt,
  title: Zt,
  description: en,
  close: tn,
  footer: nn
};
function $a({
  title: t,
  titleHidden: n = !1,
  description: o,
  children: a,
  footer: s,
  trigger: r,
  width: c,
  showClose: i = !0,
  className: d,
  ...l
}) {
  return /* @__PURE__ */ m(C.Root, { ...l, children: [
    r && /* @__PURE__ */ e(C.Trigger, { asChild: !0, children: r }),
    /* @__PURE__ */ m(C.Portal, { children: [
      /* @__PURE__ */ e(C.Overlay, { className: R.overlay }),
      /* @__PURE__ */ m(
        C.Content,
        {
          className: u(R.content, d),
          style: c ? { "--wk-dialog-w": c } : void 0,
          children: [
            /* @__PURE__ */ m("div", { className: R.header, children: [
              /* @__PURE__ */ m("div", { className: R.headings, children: [
                n ? /* @__PURE__ */ e(C.Title, { asChild: !0, children: /* @__PURE__ */ e(de, { children: t }) }) : /* @__PURE__ */ e(C.Title, { className: R.title, children: t }),
                o && /* @__PURE__ */ e(C.Description, { className: R.description, children: o })
              ] }),
              i && /* @__PURE__ */ e(C.Close, { className: R.close, "aria-label": "Close", children: /* @__PURE__ */ e(he, {}) })
            ] }),
            a,
            s && /* @__PURE__ */ e("div", { className: R.footer, children: s })
          ]
        }
      )
    ] })
  ] });
}
const Ca = C.Close, on = "wk-Menu_content", sn = "wk-Menu_item", an = "wk-Menu_danger", rn = "wk-Menu_label", cn = "wk-Menu_separator", ln = "wk-Menu_shortcut", Q = {
  content: on,
  item: sn,
  danger: an,
  label: rn,
  separator: cn,
  shortcut: ln
};
function Sa({ trigger: t, children: n, align: o = "start", side: a = "bottom", className: s, ...r }) {
  return /* @__PURE__ */ m(V.Root, { ...r, children: [
    /* @__PURE__ */ e(V.Trigger, { asChild: !0, children: t }),
    /* @__PURE__ */ e(V.Portal, { children: /* @__PURE__ */ e(
      V.Content,
      {
        className: u(Q.content, s),
        align: o,
        side: a,
        sideOffset: 4,
        collisionPadding: 8,
        children: n
      }
    ) })
  ] });
}
const Ta = B(function({ tone: n = "default", shortcut: o, className: a, children: s, ...r }, c) {
  return /* @__PURE__ */ m(
    V.Item,
    {
      ref: c,
      className: u(Q.item, n === "danger" && Q.danger, a),
      ...r,
      children: [
        s,
        o && /* @__PURE__ */ e("span", { className: Q.shortcut, children: o })
      ]
    }
  );
});
function xa({ children: t }) {
  return /* @__PURE__ */ e(V.Label, { className: Q.label, children: t });
}
function Ia() {
  return /* @__PURE__ */ e(V.Separator, { className: Q.separator });
}
const dn = "wk-Tooltip_content", mn = "wk-Tooltip_arrow", Te = {
  content: dn,
  arrow: mn
}, Da = Y.Provider;
function Pa({ content: t, children: n, side: o = "top", delayDuration: a, className: s }) {
  return /* @__PURE__ */ m(Y.Root, { delayDuration: a, children: [
    /* @__PURE__ */ e(Y.Trigger, { asChild: !0, children: n }),
    /* @__PURE__ */ e(Y.Portal, { children: /* @__PURE__ */ m(
      Y.Content,
      {
        className: u(Te.content, s),
        side: o,
        sideOffset: 6,
        collisionPadding: 8,
        children: [
          t,
          /* @__PURE__ */ e(Y.Arrow, { className: Te.arrow, width: 10, height: 5 })
        ]
      }
    ) })
  ] });
}
const un = "wk-Tabs_root", pn = "wk-Tabs_list", hn = "wk-Tabs_trigger", wn = "wk-Tabs_content", we = {
  root: un,
  list: pn,
  trigger: hn,
  content: wn
};
function Ba({ className: t, ...n }) {
  return /* @__PURE__ */ e(pe.Root, { className: u(we.root, t), ...n });
}
function Aa({ className: t, ...n }) {
  return /* @__PURE__ */ e(pe.List, { className: u(we.list, t), ...n });
}
const La = B(
  function({ className: n, ...o }, a) {
    return /* @__PURE__ */ e(pe.Trigger, { ref: a, className: u(we.trigger, n), ...o });
  }
);
function Ea({ className: t, ...n }) {
  return /* @__PURE__ */ e(pe.Content, { className: u(we.content, t), ...n });
}
const kn = "wk-Toast_viewport", fn = "wk-Toast_root", bn = "wk-Toast_body", _n = "wk-Toast_title", vn = "wk-Toast_description", gn = "wk-Toast_close", G = {
  viewport: kn,
  root: fn,
  body: bn,
  title: _n,
  description: vn,
  close: gn
}, Le = le(null);
function Ma({ children: t, swipeDirection: n = "right" }) {
  const [o, a] = A([]), s = q(1), r = j((d) => {
    a((l) => l.filter((p) => p.id !== d));
  }, []), c = j((d) => {
    const l = s.current++;
    a((p) => [...p, { ...d, id: l }]);
  }, []), i = K(() => ({ toast: c, dismiss: r }), [c, r]);
  return /* @__PURE__ */ e(Le.Provider, { value: i, children: /* @__PURE__ */ m(U.Provider, { swipeDirection: n, children: [
    t,
    o.map((d) => /* @__PURE__ */ m(
      U.Root,
      {
        className: G.root,
        "data-tone": d.tone ?? "neutral",
        duration: d.duration ?? (d.tone === "danger" ? 1 / 0 : 5e3),
        type: d.tone === "danger" ? "foreground" : "background",
        onOpenChange: (l) => {
          l || r(d.id);
        },
        children: [
          /* @__PURE__ */ m("div", { className: G.body, children: [
            /* @__PURE__ */ e(U.Title, { className: G.title, children: d.title }),
            d.description && /* @__PURE__ */ e(U.Description, { className: G.description, children: d.description })
          ] }),
          /* @__PURE__ */ e(U.Close, { className: G.close, "aria-label": "Dismiss", children: /* @__PURE__ */ e(he, {}) })
        ]
      },
      d.id
    )),
    /* @__PURE__ */ e(U.Viewport, { className: G.viewport })
  ] }) });
}
function Fa() {
  const t = ie(Le);
  if (!t) throw new Error("useToast must be used inside <ToastProvider>");
  return t;
}
const yn = "wk-Textarea_root", Nn = "wk-Textarea_mono", $n = "wk-Textarea_noResize", ke = {
  root: yn,
  mono: Nn,
  noResize: $n
}, Ra = B(function({ invalid: n, mono: o = !1, resizable: a = !0, className: s, id: r, rows: c = 4, ...i }, d) {
  const l = $e(), p = n ?? (l == null ? void 0 : l.invalid) ?? !1;
  return /* @__PURE__ */ e(
    "textarea",
    {
      ref: d,
      id: r ?? (l == null ? void 0 : l.inputId),
      rows: c,
      "aria-invalid": p || void 0,
      "aria-describedby": l == null ? void 0 : l.describedBy,
      className: u(ke.root, o && ke.mono, !a && ke.noResize, s),
      ...i
    }
  );
}), Cn = "wk-Combobox_wrap", Sn = "wk-Combobox_list", Tn = "wk-Combobox_option", xn = "wk-Combobox_label", In = "wk-Combobox_mono", Dn = "wk-Combobox_hint", Pn = "wk-Combobox_empty", z = {
  wrap: Cn,
  list: Sn,
  option: Tn,
  label: xn,
  mono: In,
  hint: Dn,
  empty: Pn
}, Bn = (t) => t.value ?? t.label;
function Ha({
  value: t,
  onValueChange: n,
  suggestions: o,
  onEnter: a,
  emptyMessage: s,
  mono: r,
  className: c,
  onKeyDown: i,
  onBlur: d,
  ...l
}) {
  const p = F(), [v, _] = A(!1), [f, h] = A(-1), w = q(null), k = K(() => v ? o(t) : [], [v, o, t]), g = v && (k.length > 0 || !!s), $ = f >= 0 && k[f] ? `${p}-${f}` : void 0, y = (b) => {
    const N = k[b];
    N && (n(Bn(N)), _(!1), h(-1));
  };
  return /* @__PURE__ */ m("div", { className: z.wrap, children: [
    /* @__PURE__ */ e(
      ve,
      {
        role: "combobox",
        "aria-expanded": g,
        "aria-controls": g ? p : void 0,
        "aria-activedescendant": $,
        "aria-autocomplete": "list",
        autoComplete: "off",
        value: t,
        mono: r,
        className: c,
        onChange: (b) => {
          n(b.target.value), _(!0), h(-1);
        },
        onFocus: () => _(!0),
        onBlur: (b) => {
          w.current = setTimeout(() => _(!1), 120), d == null || d(b);
        },
        onKeyDown: (b) => {
          i == null || i(b), !b.defaultPrevented && (b.key === "ArrowDown" && k.length ? (b.preventDefault(), _(!0), h((N) => (N + 1) % k.length)) : b.key === "ArrowUp" && k.length ? (b.preventDefault(), h((N) => N <= 0 ? k.length - 1 : N - 1)) : b.key === "Enter" ? f >= 0 ? (b.preventDefault(), y(f)) : a == null || a() : b.key === "Tab" && f >= 0 ? (b.preventDefault(), y(f)) : b.key === "Escape" && g && (b.preventDefault(), _(!1), h(-1)));
        },
        ...l
      }
    ),
    g && /* @__PURE__ */ e("ul", { className: z.list, id: p, role: "listbox", children: k.length === 0 ? /* @__PURE__ */ e("li", { className: z.empty, children: s }) : k.map((b, N) => /* @__PURE__ */ m(
      "li",
      {
        id: `${p}-${N}`,
        role: "option",
        "aria-selected": N === f,
        "data-active": N === f,
        className: z.option,
        onMouseEnter: () => h(N),
        onMouseDown: (J) => {
          J.preventDefault(), w.current && clearTimeout(w.current), y(N);
        },
        children: [
          /* @__PURE__ */ e("span", { className: u(z.label, r && z.mono), children: b.label }),
          b.hint && /* @__PURE__ */ e("span", { className: z.hint, children: b.hint })
        ]
      },
      `${b.label}-${N}`
    )) })
  ] });
}
const An = "wk-SegmentedControl_root", Ln = "wk-SegmentedControl_option", En = "wk-SegmentedControl_fluid", fe = {
  root: An,
  option: Ln,
  fluid: En
};
function Oa({
  options: t,
  value: n,
  onValueChange: o,
  fluid: a = !1,
  className: s,
  ...r
}) {
  const c = F(), i = q(null), d = j(
    (l) => {
      var f, h;
      const p = t.filter((w) => !w.disabled);
      if (!p.length) return;
      const v = p.findIndex((w) => w.value === n), _ = p[(v + l + p.length) % p.length];
      o(_.value), (h = (f = i.current) == null ? void 0 : f.querySelector(`[data-value="${CSS.escape(_.value)}"]`)) == null || h.focus();
    },
    [t, n, o]
  );
  return /* @__PURE__ */ e(
    "div",
    {
      ref: i,
      role: "radiogroup",
      className: u(fe.root, a && fe.fluid, s),
      onKeyDown: (l) => {
        (l.key === "ArrowRight" || l.key === "ArrowDown") && (l.preventDefault(), d(1)), (l.key === "ArrowLeft" || l.key === "ArrowUp") && (l.preventDefault(), d(-1));
      },
      ...r,
      children: t.map((l) => {
        const p = l.value === n;
        return /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            role: "radio",
            id: `${c}-${l.value}`,
            "data-value": l.value,
            "aria-checked": p,
            "data-disabled": l.disabled || void 0,
            disabled: l.disabled,
            tabIndex: p ? 0 : -1,
            className: fe.option,
            onClick: () => !l.disabled && o(l.value),
            children: l.label
          },
          l.value
        );
      })
    }
  );
}
const Mn = "wk-Alert_root", Fn = "wk-Alert_info", Rn = "wk-Alert_success", Hn = "wk-Alert_warn", On = "wk-Alert_danger", zn = "wk-Alert_icon", Vn = "wk-Alert_title", Kn = "wk-Alert_body", jn = "wk-Alert_actions", qn = "wk-Alert_close", Jn = "wk-Alert_banner", H = {
  root: Mn,
  info: Fn,
  success: Rn,
  warn: Hn,
  danger: On,
  icon: zn,
  title: Vn,
  body: Kn,
  actions: jn,
  close: qn,
  banner: Jn
};
function za({
  tone: t = "info",
  title: n,
  children: o,
  icon: a,
  action: s,
  onDismiss: r,
  banner: c = !1,
  className: i
}) {
  return /* @__PURE__ */ m(
    "div",
    {
      role: t === "danger" ? "alert" : "status",
      className: u(H.root, H[t], c && H.banner, i),
      children: [
        a && /* @__PURE__ */ e("span", { className: H.icon, "aria-hidden": "true", children: a }),
        /* @__PURE__ */ m("div", { className: H.body, children: [
          n && /* @__PURE__ */ e("span", { className: H.title, children: n }),
          o,
          s && /* @__PURE__ */ e("div", { className: H.actions, children: s })
        ] }),
        r && /* @__PURE__ */ e("button", { type: "button", className: H.close, onClick: r, "aria-label": "Dismiss", children: /* @__PURE__ */ e(he, {}) })
      ]
    }
  );
}
const Un = "wk-EmptyState_root", Gn = "wk-EmptyState_icon", Yn = "wk-EmptyState_title", Xn = "wk-EmptyState_description", Qn = "wk-EmptyState_actions", te = {
  root: Un,
  icon: Gn,
  title: Yn,
  description: Xn,
  actions: Qn
};
function Va({ icon: t, title: n, description: o, action: a, className: s }) {
  return /* @__PURE__ */ m("div", { className: u(te.root, s), children: [
    t && /* @__PURE__ */ e("span", { className: te.icon, "aria-hidden": "true", children: t }),
    /* @__PURE__ */ e("p", { className: te.title, children: n }),
    o && /* @__PURE__ */ e("p", { className: te.description, children: o }),
    a && /* @__PURE__ */ e("div", { className: te.actions, children: a })
  ] });
}
const Wn = "wk-Spinner_root", Zn = "wk-Spinner_sm", eo = "wk-Spinner_md", to = "wk-Spinner_lg", xe = {
  root: Wn,
  "wk-spinner-rotate": "wk-Spinner_wk-spinner-rotate",
  sm: Zn,
  md: eo,
  lg: to
};
function Ka({ size: t = "md", label: n = "Loading", className: o }) {
  return /* @__PURE__ */ m("span", { role: "status", children: [
    /* @__PURE__ */ e("span", { className: u(xe.root, xe[t], o), "aria-hidden": "true" }),
    n && /* @__PURE__ */ e(de, { children: n })
  ] });
}
const no = "wk-Kbd_root", oo = "wk-Kbd_group", be = {
  root: no,
  group: oo
};
function ja({ keys: t, className: n, children: o, ...a }) {
  return t != null && t.length ? /* @__PURE__ */ e("span", { className: be.group, ...a, children: t.map((s, r) => /* @__PURE__ */ e(ge, { children: /* @__PURE__ */ e("kbd", { className: u(be.root, n), children: s }) }, `${s}-${r}`)) }) : /* @__PURE__ */ e("kbd", { className: u(be.root, n), ...a, children: o });
}
const so = "wk-SplitPane_root", ao = "wk-SplitPane_horizontal", ro = "wk-SplitPane_vertical", co = "wk-SplitPane_pane", io = "wk-SplitPane_handle", ne = {
  root: so,
  horizontal: ao,
  vertical: ro,
  pane: co,
  handle: io
};
function qa({
  children: t,
  direction: n = "horizontal",
  size: o,
  onSizeChange: a,
  min: s = 120,
  max: r = Number.POSITIVE_INFINITY,
  defaultSize: c,
  className: i,
  "aria-label": d = "Resize panes"
}) {
  const l = q(null), [p, v] = A(!1), _ = n === "horizontal", f = j(
    (w) => {
      var $;
      const k = ($ = l.current) == null ? void 0 : $.getBoundingClientRect(), g = k ? (_ ? k.width : k.height) - s : r;
      return Math.max(s, Math.min(w, Math.min(r, g)));
    },
    [s, r, _]
  ), h = (w) => a(f(o + w));
  return /* @__PURE__ */ m("div", { ref: l, className: u(ne.root, ne[n], i), children: [
    /* @__PURE__ */ e("div", { className: ne.pane, style: { [_ ? "width" : "height"]: o, flex: "none" }, children: t[0] }),
    /* @__PURE__ */ e(
      "div",
      {
        role: "separator",
        tabIndex: 0,
        "aria-label": d,
        "aria-orientation": _ ? "vertical" : "horizontal",
        "aria-valuenow": Math.round(o),
        "aria-valuemin": s,
        "aria-valuemax": Number.isFinite(r) ? r : void 0,
        "data-dragging": p || void 0,
        className: ne.handle,
        onDoubleClick: () => c !== void 0 && a(c),
        onPointerDown: (w) => {
          w.currentTarget.setPointerCapture(w.pointerId), v(!0);
        },
        onPointerMove: (w) => {
          var g;
          if (!p) return;
          const k = (g = l.current) == null ? void 0 : g.getBoundingClientRect();
          k && a(f(_ ? w.clientX - k.left : w.clientY - k.top));
        },
        onPointerUp: (w) => {
          w.currentTarget.releasePointerCapture(w.pointerId), v(!1);
        },
        onKeyDown: (w) => {
          const k = w.shiftKey ? 40 : 10;
          w.key === (_ ? "ArrowLeft" : "ArrowUp") && (w.preventDefault(), h(-k)), w.key === (_ ? "ArrowRight" : "ArrowDown") && (w.preventDefault(), h(k)), w.key === "Home" && c !== void 0 && (w.preventDefault(), a(c));
        }
      }
    ),
    /* @__PURE__ */ e("div", { className: u(ne.pane), style: { flex: 1 }, children: t[1] })
  ] });
}
const lo = "wk-NavList_list", mo = "wk-NavList_item", uo = "wk-NavList_control", po = "wk-NavList_icon", ho = "wk-NavList_label", wo = "wk-NavList_badge", X = {
  list: lo,
  item: mo,
  control: uo,
  icon: po,
  label: ho,
  badge: wo
};
function Ja({ children: t, className: n, ...o }) {
  return /* @__PURE__ */ e("ul", { className: u(X.list, n), ...o, children: t });
}
function Ua({
  children: t,
  current: n = !1,
  icon: o,
  badge: a,
  onSelect: s,
  asChild: r = !1,
  disabled: c = !1,
  className: i
}) {
  const d = r ? ue : "button";
  return /* @__PURE__ */ e("li", { className: X.item, children: /* @__PURE__ */ m(
    d,
    {
      ...r ? {} : { type: "button", disabled: c },
      className: u(X.control, i),
      "aria-current": n ? "page" : void 0,
      "data-current": n || void 0,
      onClick: s,
      children: [
        o && /* @__PURE__ */ e("span", { className: X.icon, "aria-hidden": "true", children: o }),
        r ? /* @__PURE__ */ e(De, { children: t }) : /* @__PURE__ */ e("span", { className: X.label, children: t }),
        a && /* @__PURE__ */ e("span", { className: X.badge, children: a })
      ]
    }
  ) });
}
const ko = "wk-Tree_root", fo = "wk-Tree_item", bo = "wk-Tree_twisty", _o = "wk-Tree_spacer", vo = "wk-Tree_label", re = {
  root: ko,
  item: fo,
  twisty: bo,
  spacer: _o,
  label: vo
}, Ee = le(null);
function Ga({ children: t, onActivate: n, onToggle: o, className: a, ...s }) {
  const r = q(null), [c, i] = A(null), d = q([]);
  d.current = [];
  const l = j((f) => {
    d.current.push(f);
  }, []), p = (f) => {
    var h, w;
    i(f), (w = (h = r.current) == null ? void 0 : h.querySelector(`[data-tree-id="${CSS.escape(f)}"]`)) == null || w.focus();
  }, v = (f) => {
    var $;
    const h = d.current;
    if (!h.length) return;
    const w = c ? h.indexOf(c) : -1, k = c ? ($ = r.current) == null ? void 0 : $.querySelector(`[data-tree-id="${CSS.escape(c)}"]`) : null, g = k == null ? void 0 : k.getAttribute("aria-expanded");
    switch (f.key) {
      case "ArrowDown":
        f.preventDefault(), p(h[Math.min(w + 1, h.length - 1)]);
        break;
      case "ArrowUp":
        f.preventDefault(), p(h[Math.max(w - 1, 0)]);
        break;
      case "Home":
        f.preventDefault(), p(h[0]);
        break;
      case "End":
        f.preventDefault(), p(h[h.length - 1]);
        break;
      case "ArrowRight":
        g === "false" && c ? (f.preventDefault(), o == null || o(c, !0)) : g === "true" && (f.preventDefault(), p(h[Math.min(w + 1, h.length - 1)]));
        break;
      case "ArrowLeft":
        g === "true" && c ? (f.preventDefault(), o == null || o(c, !1)) : w > 0 && (f.preventDefault(), p(h[w - 1]));
        break;
      case "Enter":
      case " ":
        c && (f.preventDefault(), n == null || n(c));
        break;
    }
  }, _ = K(
    () => ({ activeId: c, setActiveId: i, register: l }),
    [c, l]
  );
  return /* @__PURE__ */ e(Ee.Provider, { value: _, children: /* @__PURE__ */ e(
    "div",
    {
      ref: r,
      role: "tree",
      className: u(re.root, a),
      onKeyDown: v,
      ...s,
      children: t
    }
  ) });
}
function Ya({
  id: t,
  level: n,
  children: o,
  hasChildren: a = !1,
  expanded: s,
  selected: r = !1,
  icon: c,
  endSlot: i,
  onSelect: d,
  onToggle: l,
  posInSet: p,
  setSize: v,
  indent: _ = 14,
  className: f
}) {
  const h = ie(Ee);
  if (!h) throw new Error("TreeItem must be used inside <Tree>");
  h.register(t);
  const w = h.activeId === t || h.activeId === null && n === 1 && p === 1;
  return /* @__PURE__ */ m(
    "div",
    {
      role: "treeitem",
      "data-tree-id": t,
      "aria-level": n,
      "aria-expanded": a ? !!s : void 0,
      "aria-selected": r,
      "aria-posinset": p,
      "aria-setsize": v,
      tabIndex: w ? 0 : -1,
      className: u(re.item, f),
      style: { paddingInlineStart: (n - 1) * _ + 4 },
      onFocus: () => h.setActiveId(t),
      onClick: () => {
        h.setActiveId(t), d == null || d(t);
      },
      children: [
        a ? /* @__PURE__ */ e(
          "span",
          {
            className: re.twisty,
            "data-expanded": !!s,
            onClick: (k) => {
              k.stopPropagation(), l == null || l(t, !s);
            },
            children: /* @__PURE__ */ e(Pe, {})
          }
        ) : /* @__PURE__ */ e("span", { className: re.spacer }),
        c,
        /* @__PURE__ */ e("span", { className: re.label, children: o }),
        i
      ]
    }
  );
}
const go = "wk-CommandPalette_overlay", yo = "wk-CommandPalette_content", No = "wk-CommandPalette_search", $o = "wk-CommandPalette_searchIcon", Co = "wk-CommandPalette_input", So = "wk-CommandPalette_list", To = "wk-CommandPalette_group", xo = "wk-CommandPalette_heading", Io = "wk-CommandPalette_item", Do = "wk-CommandPalette_itemIcon", Po = "wk-CommandPalette_itemLabel", Bo = "wk-CommandPalette_itemHint", Ao = "wk-CommandPalette_empty", Lo = "wk-CommandPalette_footer", S = {
  overlay: go,
  content: yo,
  search: No,
  searchIcon: $o,
  input: Co,
  list: So,
  group: To,
  heading: xo,
  item: Io,
  itemIcon: Do,
  itemLabel: Po,
  itemHint: Bo,
  empty: Ao,
  footer: Lo
}, Me = le(null);
function Xa({
  open: t,
  onOpenChange: n,
  query: o,
  onQueryChange: a,
  children: s,
  placeholder: r = "Type a command or search…",
  title: c = "Command palette",
  footer: i,
  className: d
}) {
  const l = F(), [p, v] = A(0), [_, f] = A([]), h = q(/* @__PURE__ */ new Map()), w = K(
    () => (b, N) => {
      h.current.set(b, N);
    },
    []
  ), k = K(
    () => (b) => (f((N) => N.includes(b) ? N : [...N, b]), () => {
      f((N) => N.filter((J) => J !== b)), h.current.delete(b);
    }),
    []
  );
  ae(() => v(0), [o]);
  const g = _.length, $ = _[p] ?? _[0] ?? null, y = K(
    () => ({ activeId: $, register: w, attach: k, listId: l }),
    [$, w, k, l]
  );
  return /* @__PURE__ */ e(C.Root, { open: t, onOpenChange: n, children: /* @__PURE__ */ m(C.Portal, { children: [
    /* @__PURE__ */ e(C.Overlay, { className: S.overlay }),
    /* @__PURE__ */ m(C.Content, { className: u(S.content, d), children: [
      /* @__PURE__ */ e(C.Title, { asChild: !0, children: /* @__PURE__ */ e(de, { children: c }) }),
      /* @__PURE__ */ m(Me.Provider, { value: y, children: [
        /* @__PURE__ */ m("div", { className: S.search, children: [
          /* @__PURE__ */ e("span", { className: S.searchIcon, "aria-hidden": "true", children: "⌕" }),
          /* @__PURE__ */ e(
            "input",
            {
              className: S.input,
              value: o,
              onChange: (b) => a(b.target.value),
              placeholder: r,
              role: "combobox",
              "aria-expanded": !0,
              "aria-controls": l,
              "aria-activedescendant": $ ? `${l}-${$}` : void 0,
              "aria-autocomplete": "list",
              autoComplete: "off",
              autoFocus: !0,
              onKeyDown: (b) => {
                if (b.key === "ArrowDown" && g)
                  b.preventDefault(), v((N) => (N + 1) % g);
                else if (b.key === "ArrowUp" && g)
                  b.preventDefault(), v((N) => N <= 0 ? g - 1 : N - 1);
                else if (b.key === "Enter") {
                  const N = _[p] ?? _[0], J = N ? h.current.get(N) : void 0;
                  if (!J) return;
                  b.preventDefault(), J();
                }
              }
            }
          )
        ] }),
        /* @__PURE__ */ e("ul", { className: S.list, id: l, role: "listbox", "aria-label": c, children: s }),
        i && /* @__PURE__ */ e("div", { className: S.footer, children: i })
      ] })
    ] })
  ] }) });
}
function Qa({ heading: t, children: n }) {
  return /* @__PURE__ */ m("li", { className: S.group, children: [
    t && /* @__PURE__ */ e("div", { className: S.heading, children: t }),
    /* @__PURE__ */ e("ul", { role: "group", style: { listStyle: "none", margin: 0, padding: 0 }, children: n })
  ] });
}
function Wa({ id: t, children: n, onSelect: o, icon: a, hint: s }) {
  const r = ie(Me);
  if (!r) throw new Error("CommandItem must be used inside <CommandPalette>");
  r.register(t, o);
  const { attach: c } = r;
  He(() => c(t), [c, t]);
  const i = r.activeId === t;
  return /* @__PURE__ */ m(
    "li",
    {
      id: `${r.listId}-${t}`,
      role: "option",
      "aria-selected": i,
      "data-active": i,
      className: S.item,
      onMouseDown: (d) => {
        d.preventDefault(), o();
      },
      children: [
        a && /* @__PURE__ */ e("span", { className: S.itemIcon, children: a }),
        /* @__PURE__ */ e("span", { className: S.itemLabel, children: n }),
        s && /* @__PURE__ */ e("span", { className: S.itemHint, children: s })
      ]
    }
  );
}
function Za({ children: t }) {
  return /* @__PURE__ */ e("li", { className: S.empty, children: t });
}
const Eo = "wk-KeyValueEditor_root", Mo = "wk-KeyValueEditor_head", Fo = "wk-KeyValueEditor_row", Ro = "wk-KeyValueEditor_cell", Ho = "wk-KeyValueEditor_actions", Oo = "wk-KeyValueEditor_remove", zo = "wk-KeyValueEditor_footer", Vo = "wk-KeyValueEditor_empty", E = {
  root: Eo,
  head: Mo,
  row: Fo,
  cell: Ro,
  actions: Ho,
  remove: Oo,
  footer: zo,
  empty: Vo
};
function er({
  rows: t,
  onChange: n,
  keyLabel: o = "Key",
  valueLabel: a = "Value",
  keyPlaceholder: s,
  valuePlaceholder: r,
  onNewRowId: c,
  selectable: i = !0,
  addLabel: d = "Add row",
  emptyMessage: l = "Nothing here yet.",
  maskValues: p = !1,
  className: v
}) {
  const _ = F();
  let f = 0;
  const h = () => (c == null ? void 0 : c()) ?? `${_}-${t.length}-${f++}`, w = (k, g) => n(t.map(($) => $.id === k ? { ...$, ...g } : $));
  return /* @__PURE__ */ m("div", { className: u(E.root, v), children: [
    /* @__PURE__ */ m("div", { className: E.head, "aria-hidden": "true", children: [
      /* @__PURE__ */ e("span", { children: i ? "" : null }),
      /* @__PURE__ */ e("span", { children: o }),
      /* @__PURE__ */ e("span", { children: a }),
      /* @__PURE__ */ e("span", {})
    ] }),
    t.length === 0 && /* @__PURE__ */ e("p", { className: E.empty, children: l }),
    t.map((k, g) => {
      const $ = k.enabled ?? !0;
      return /* @__PURE__ */ m("div", { className: E.row, "data-disabled": !$, children: [
        /* @__PURE__ */ e("span", { className: E.cell, children: i && /* @__PURE__ */ e(
          Lt,
          {
            checked: $,
            onCheckedChange: (y) => w(k.id, { enabled: y === !0 }),
            "aria-label": `Enable ${k.key || `row ${g + 1}`}`
          }
        ) }),
        /* @__PURE__ */ e("span", { className: E.cell, children: /* @__PURE__ */ e(
          ve,
          {
            size: "sm",
            mono: !0,
            value: k.key,
            placeholder: s,
            "aria-label": `${o}, row ${g + 1}`,
            onChange: (y) => w(k.id, { key: y.target.value })
          }
        ) }),
        /* @__PURE__ */ e("span", { className: E.cell, children: /* @__PURE__ */ e(
          ve,
          {
            size: "sm",
            mono: !0,
            type: p ? "password" : "text",
            value: k.value,
            placeholder: r,
            "aria-label": `${a}, row ${g + 1}`,
            onChange: (y) => w(k.id, { value: y.target.value })
          }
        ) }),
        /* @__PURE__ */ e("span", { className: E.actions, children: /* @__PURE__ */ m(
          "button",
          {
            type: "button",
            className: E.remove,
            onClick: () => n(t.filter((y) => y.id !== k.id)),
            children: [
              /* @__PURE__ */ e(he, {}),
              /* @__PURE__ */ m(de, { children: [
                "Remove ",
                k.key || `row ${g + 1}`
              ] })
            ]
          }
        ) })
      ] }, k.id);
    }),
    /* @__PURE__ */ e("div", { className: E.footer, children: /* @__PURE__ */ m(
      Qe,
      {
        size: "sm",
        variant: "ghost",
        onClick: () => n([...t, { id: h(), key: "", value: "", enabled: !0 }]),
        children: [
          "+ ",
          d
        ]
      }
    ) })
  ] });
}
const Ko = "wk-CodeSurface_root", jo = "wk-CodeSurface_toolbar", qo = "wk-CodeSurface_body", Jo = "wk-CodeSurface_pre", Uo = "wk-CodeSurface_status", ce = {
  root: Ko,
  toolbar: jo,
  body: qo,
  pre: Jo,
  status: Uo
};
function tr({ children: t, toolbar: n, status: o, className: a }) {
  return /* @__PURE__ */ m("div", { className: u(ce.root, a), children: [
    n && /* @__PURE__ */ e("div", { className: ce.toolbar, children: n }),
    /* @__PURE__ */ e("div", { className: ce.body, children: t }),
    o && /* @__PURE__ */ e("div", { className: ce.status, children: o })
  ] });
}
function nr({ code: t, className: n, ...o }) {
  return /* @__PURE__ */ e("pre", { className: u(ce.pre, n), tabIndex: 0, ...o, children: /* @__PURE__ */ e("code", { children: t }) });
}
const Go = "wk-Form_section", Yo = "wk-Form_sectionTop", Xo = "wk-Form_sectionHead", Qo = "wk-Form_sectionTitle", Wo = "wk-Form_sectionDesc", Zo = "wk-Form_sectionBody", es = "wk-Form_row", ts = "wk-Form_rowText", ns = "wk-Form_rowLabel", os = "wk-Form_rowDesc", ss = "wk-Form_rowControl", as = "wk-Form_stacked", P = {
  section: Go,
  sectionTop: Yo,
  sectionHead: Xo,
  sectionTitle: Qo,
  sectionDesc: Wo,
  sectionBody: Zo,
  row: es,
  rowText: ts,
  rowLabel: ns,
  rowDesc: os,
  rowControl: ss,
  stacked: as
};
function or({ title: t, description: n, children: o, action: a, className: s }) {
  const r = F();
  return /* @__PURE__ */ m("section", { className: u(P.section, s), "aria-labelledby": t ? r : void 0, children: [
    (t || a) && /* @__PURE__ */ m("div", { className: P.sectionTop, children: [
      /* @__PURE__ */ m("div", { className: P.sectionHead, children: [
        t && /* @__PURE__ */ e("h2", { className: P.sectionTitle, id: r, children: t }),
        n && /* @__PURE__ */ e("p", { className: P.sectionDesc, children: n })
      ] }),
      a
    ] }),
    /* @__PURE__ */ e("div", { className: P.sectionBody, children: o })
  ] });
}
function sr({ label: t, description: n, children: o, stacked: a, className: s }) {
  return /* @__PURE__ */ m("div", { className: u(P.row, a && P.stacked, s), children: [
    /* @__PURE__ */ m("div", { className: P.rowText, children: [
      /* @__PURE__ */ e("span", { className: P.rowLabel, children: t }),
      n && /* @__PURE__ */ e("p", { className: P.rowDesc, children: n })
    ] }),
    /* @__PURE__ */ e("div", { className: P.rowControl, children: o })
  ] });
}
const rs = "wk-HighlightText_mark", cs = {
  mark: rs
};
function ar({ text: t, query: n, className: o }) {
  const a = n.trim().toLowerCase();
  if (!a) return /* @__PURE__ */ e("span", { className: o, children: t });
  const s = t.toLowerCase(), r = [];
  let c = 0;
  for (; c < t.length; ) {
    const i = s.indexOf(a, c);
    if (i === -1) {
      r.push({ chunk: t.slice(c), hit: !1 });
      break;
    }
    i > c && r.push({ chunk: t.slice(c, i), hit: !1 }), r.push({ chunk: t.slice(i, i + a.length), hit: !0 }), c = i + a.length;
  }
  return /* @__PURE__ */ e("span", { className: o, children: r.map((i, d) => /* @__PURE__ */ e(ge, { children: i.hit ? /* @__PURE__ */ e("mark", { className: cs.mark, children: i.chunk }) : i.chunk }, d)) });
}
const is = "wk-SkipToContent_root", ls = {
  root: is
};
function rr({
  targetId: t = "wk-main",
  children: n = "Skip to content",
  className: o
}) {
  return /* @__PURE__ */ e("a", { href: `#${t}`, className: u(ls.root, o), children: n });
}
const ds = "wk-Card_root", ms = "wk-Card_outlined", us = "wk-Card_raised", ps = "wk-Card_inset", hs = "wk-Card_interactive", ws = "wk-Card_top", ks = "wk-Card_icon", fs = "wk-Card_head", bs = "wk-Card_title", _s = "wk-Card_description", vs = "wk-Card_action", gs = "wk-Card_body", ys = "wk-Card_footer", x = {
  root: ds,
  outlined: ms,
  raised: us,
  inset: ps,
  "padding-none": "wk-Card_padding-none",
  "padding-sm": "wk-Card_padding-sm",
  "padding-md": "wk-Card_padding-md",
  "padding-lg": "wk-Card_padding-lg",
  interactive: hs,
  top: ws,
  icon: ks,
  head: fs,
  title: bs,
  description: _s,
  action: vs,
  body: gs,
  footer: ys
};
function cr({
  title: t,
  titleLevel: n = 3,
  description: o,
  icon: a,
  action: s,
  footer: r,
  children: c,
  variant: i = "outlined",
  padding: d = "md",
  interactive: l = !1,
  asChild: p = !1,
  className: v,
  ..._
}) {
  const f = F(), h = t ? f : void 0, w = `h${n}`, k = /* @__PURE__ */ m(Ie, { children: [
    (t || s || a) && /* @__PURE__ */ m("div", { className: x.top, children: [
      a && /* @__PURE__ */ e("span", { className: x.icon, "aria-hidden": "true", children: a }),
      /* @__PURE__ */ m("div", { className: x.head, children: [
        t && /* @__PURE__ */ e(w, { className: x.title, id: h, children: t }),
        o && /* @__PURE__ */ e("p", { className: x.description, children: o })
      ] }),
      s && /* @__PURE__ */ e("div", { className: x.action, children: s })
    ] }),
    c && /* @__PURE__ */ e("div", { className: x.body, children: c }),
    r && /* @__PURE__ */ e("div", { className: x.footer, children: r })
  ] }), g = u(
    x.root,
    x[i],
    x[`padding-${d}`],
    l && x.interactive,
    v
  );
  return p ? /* @__PURE__ */ e(ue, { className: g, "aria-labelledby": h, ..._, children: /* @__PURE__ */ e("div", { children: k }) }) : l ? /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      className: g,
      "aria-labelledby": h,
      ..._,
      children: k
    }
  ) : /* @__PURE__ */ e("div", { className: g, "aria-labelledby": h, ..._, children: k });
}
const Ns = "wk-Stepper_root", $s = "wk-Stepper_horizontal", Cs = "wk-Stepper_vertical", Ss = "wk-Stepper_step", Ts = "wk-Stepper_complete", xs = "wk-Stepper_current", Is = "wk-Stepper_marker", Ds = "wk-Stepper_text", Ps = "wk-Stepper_label", Bs = "wk-Stepper_description", O = {
  root: Ns,
  horizontal: $s,
  vertical: Cs,
  step: Ss,
  complete: Ts,
  current: xs,
  marker: Is,
  text: Ds,
  label: Ps,
  description: Bs
};
function ir({
  steps: t,
  current: n,
  orientation: o = "horizontal",
  className: a,
  "aria-label": s
}) {
  return /* @__PURE__ */ e("ol", { className: u(O.root, O[o], a), "aria-label": s, children: t.map((r, c) => {
    const { label: i, description: d } = typeof r == "string" ? { label: r, description: void 0 } : r, l = c < n ? "complete" : c === n ? "current" : "upcoming";
    return /* @__PURE__ */ m(
      "li",
      {
        className: u(O.step, O[l]),
        "aria-current": l === "current" ? "step" : void 0,
        children: [
          /* @__PURE__ */ e("span", { className: O.marker, "aria-hidden": "true", children: l === "complete" ? /* @__PURE__ */ e(Ne, {}) : c + 1 }),
          /* @__PURE__ */ m("span", { className: O.text, children: [
            /* @__PURE__ */ m("span", { className: O.label, children: [
              i,
              /* @__PURE__ */ e(de, { children: l === "complete" ? " (completed)" : l === "current" ? " (current step)" : " (not started)" })
            ] }),
            d && /* @__PURE__ */ e("span", { className: O.description, children: d })
          ] })
        ]
      },
      c
    );
  }) });
}
const As = "wk-Table_wrapper", Ls = "wk-Table_scroll", Es = "wk-Table_root", Ms = "wk-Table_caption", Fs = "wk-Table_th", Rs = "wk-Table_td", Hs = "wk-Table_numeric", Os = "wk-Table_captionHidden", zs = "wk-Table_row", Vs = "wk-Table_interactive", Ks = "wk-Table_sticky", I = {
  wrapper: As,
  scroll: Ls,
  root: Es,
  caption: Ms,
  th: Fs,
  td: Rs,
  numeric: Hs,
  captionHidden: Os,
  row: zs,
  interactive: Vs,
  sticky: Ks
};
function lr({
  caption: t,
  captionHidden: n,
  interactive: o,
  stickyHeader: a,
  maxBlockSize: s,
  className: r,
  children: c,
  ...i
}) {
  const d = s !== void 0;
  return /* @__PURE__ */ e(
    "div",
    {
      className: u(I.wrapper, d && I.scroll),
      style: d ? { "--wk-table-max-block": s } : void 0,
      children: /* @__PURE__ */ m(
        "table",
        {
          className: u(
            I.root,
            o && I.interactive,
            a && I.sticky,
            r
          ),
          ...i,
          children: [
            t && /* @__PURE__ */ e("caption", { className: u(I.caption, n && I.captionHidden), children: t }),
            c
          ]
        }
      )
    }
  );
}
const dr = (t) => /* @__PURE__ */ e("thead", { ...t }), mr = (t) => /* @__PURE__ */ e("tbody", { ...t }), ur = ({ selected: t, className: n, ...o }) => /* @__PURE__ */ e("tr", { "data-selected": t || void 0, className: u(I.row, n), ...o }), pr = ({ numeric: t, scope: n = "col", className: o, ...a }) => /* @__PURE__ */ e("th", { scope: n, className: u(I.th, t && I.numeric, o), ...a }), hr = ({ numeric: t, className: n, ...o }) => /* @__PURE__ */ e("td", { className: u(I.td, t && I.numeric, n), ...o }), js = "wk-Badge_root", qs = "wk-Badge_neutral", Js = "wk-Badge_accent", Us = "wk-Badge_danger", Gs = "wk-Badge_warn", Ys = "wk-Badge_success", Xs = "wk-Badge_info", Qs = "wk-Badge_mono", _e = {
  root: js,
  neutral: qs,
  accent: Js,
  danger: Us,
  warn: Gs,
  success: Ys,
  info: Xs,
  mono: Qs
};
function wr({ tone: t = "neutral", mono: n = !1, className: o, ...a }) {
  return /* @__PURE__ */ e("span", { className: u(_e.root, _e[t], n && _e.mono, o), ...a });
}
const Ws = "wk-AppShell_root", Zs = "wk-AppShell_titlebar", ea = "wk-AppShell_body", ta = "wk-AppShell_sidebar", na = "wk-AppShell_main", oe = {
  root: Ws,
  titlebar: Zs,
  body: ea,
  sidebar: ta,
  main: na
};
function kr({
  titlebar: t,
  draggable: n = !1,
  insetWindowControls: o = !1,
  sidebar: a,
  sidebarWidth: s,
  children: r,
  mainId: c = "wk-main",
  className: i
}) {
  return /* @__PURE__ */ m(
    "div",
    {
      className: u(oe.root, i),
      style: s ? { "--wk-sidebar-w": s } : void 0,
      children: [
        t && /* @__PURE__ */ e(
          "header",
          {
            className: oe.titlebar,
            "data-inset-controls": o || void 0,
            ...n ? { "data-tauri-drag-region": "" } : {},
            children: t
          }
        ),
        /* @__PURE__ */ m("div", { className: oe.body, "data-has-sidebar": a ? "true" : void 0, children: [
          a && /* @__PURE__ */ e("nav", { className: oe.sidebar, "aria-label": "Primary", children: a }),
          /* @__PURE__ */ e("main", { id: c, className: oe.main, tabIndex: -1, children: r })
        ] })
      ]
    }
  );
}
const oa = {
  1: "2xl",
  2: "xl",
  3: "lg",
  4: "md",
  5: "sm",
  6: "xs"
}, Fe = {
  xs: D.xs,
  sm: D.sm,
  md: D.md,
  lg: D.lg,
  xl: D.xl,
  "2xl": D.xxl
}, fr = B(function({ level: n, size: o, className: a, ...s }, r) {
  const c = `h${n}`, i = Fe[o ?? oa[n]];
  return /* @__PURE__ */ e(c, { ref: r, className: u(D.heading, i, a), ...s });
}), br = B(function({ as: n = "p", size: o = "md", tone: a = "default", mono: s = !1, className: r, ...c }, i) {
  return /* @__PURE__ */ e(
    n,
    {
      ref: i,
      className: u(
        D.text,
        Fe[o],
        a !== "default" && D[a],
        s && D.mono,
        r
      ),
      ...c
    }
  );
}), _r = B(function({ external: n = !1, nofollow: o = !1, asChild: a = !1, className: s, rel: r, target: c, ...i }, d) {
  const l = a ? ue : "a", p = new Set((r ?? "").split(/\s+/).filter(Boolean));
  return n && (p.add("noopener"), p.add("noreferrer")), o && p.add("nofollow"), /* @__PURE__ */ e(
    l,
    {
      ref: d,
      className: u(D.link, s),
      target: c ?? (n ? "_blank" : void 0),
      rel: p.size ? [...p].join(" ") : void 0,
      ...i
    }
  );
}), sa = "wk-Media_image", aa = "wk-Media_skeleton", Re = {
  image: sa,
  skeleton: aa
}, vr = B(function({ width: n, height: o, aspectRatio: a, priority: s = !1, className: r, style: c, alt: i, ...d }, l) {
  const p = a ?? (n && o ? `${n}/${o}` : void 0);
  return /* @__PURE__ */ e(
    "img",
    {
      ref: l,
      alt: i,
      width: n,
      height: o,
      loading: s ? "eager" : "lazy",
      decoding: s ? "sync" : "async",
      fetchPriority: s ? "high" : void 0,
      className: u(Re.image, r),
      style: { ...p ? { "--wk-image-ar": String(p) } : null, ...c },
      ...d
    }
  );
});
function gr({
  width: t = "100%",
  height: n = "1em",
  radius: o = "sm",
  className: a,
  style: s,
  ...r
}) {
  return /* @__PURE__ */ e(
    "span",
    {
      "aria-hidden": "true",
      className: u(Re.skeleton, a),
      style: {
        width: t,
        height: n,
        borderRadius: `var(--wk-radius-${o})`,
        ...s
      },
      ...r
    }
  );
}
function ra({ data: t, nonce: n }) {
  const o = JSON.stringify(t).replace(/</g, "\\u003c");
  return /* @__PURE__ */ e("script", { type: "application/ld+json", nonce: n, dangerouslySetInnerHTML: { __html: o } });
}
const ca = "wk-Breadcrumbs_root", ia = "wk-Breadcrumbs_list", la = "wk-Breadcrumbs_item", da = "wk-Breadcrumbs_link", ma = "wk-Breadcrumbs_sep", se = {
  root: ca,
  list: ia,
  item: la,
  link: da,
  sep: ma
};
function yr({ items: t, origin: n, className: o }) {
  const a = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: t.map((s, r) => ({
      "@type": "ListItem",
      position: r + 1,
      name: s.label,
      ...s.href ? { item: n ? new URL(s.href, n).toString() : s.href } : {}
    }))
  };
  return /* @__PURE__ */ m(Ie, { children: [
    /* @__PURE__ */ e("nav", { "aria-label": "Breadcrumb", className: u(se.root, o), children: /* @__PURE__ */ e("ol", { className: se.list, children: t.map((s, r) => {
      const c = r === t.length - 1;
      return /* @__PURE__ */ m(ge, { children: [
        /* @__PURE__ */ e("li", { className: se.item, children: s.href && !c ? /* @__PURE__ */ e("a", { className: se.link, href: s.href, children: s.label }) : /* @__PURE__ */ e("span", { "aria-current": c ? "page" : void 0, children: s.label }) }),
        !c && /* @__PURE__ */ e("li", { className: se.sep, "aria-hidden": "true", children: "/" })
      ] }, `${s.label}-${r}`);
    }) }) }),
    /* @__PURE__ */ e(ra, { data: a })
  ] });
}
export {
  za as Alert,
  kr as AppShell,
  wr as Badge,
  yr as Breadcrumbs,
  Qe as Button,
  cr as Card,
  Ne as CheckIcon,
  Lt as Checkbox,
  Pe as ChevronDownIcon,
  he as CloseIcon,
  nr as CodeBlock,
  tr as CodeSurface,
  Ha as Combobox,
  Za as CommandEmpty,
  Qa as CommandGroup,
  Wa as CommandItem,
  Xa as CommandPalette,
  $a as Dialog,
  Ca as DialogClose,
  Va as EmptyState,
  ba as Field,
  or as FormSection,
  fr as Heading,
  ar as HighlightText,
  vr as Image,
  ve as Input,
  ra as JsonLd,
  ja as Kbd,
  er as KeyValueEditor,
  _r as Link,
  Sa as Menu,
  Ta as MenuItem,
  xa as MenuLabel,
  Ia as MenuSeparator,
  Ua as NavItem,
  Ja as NavList,
  Oa as SegmentedControl,
  _a as Select,
  ga as SelectGroup,
  va as SelectItem,
  ya as SelectSeparator,
  sr as SettingRow,
  gr as Skeleton,
  rr as SkipToContent,
  Ka as Spinner,
  qa as SplitPane,
  ir as Stepper,
  Na as Switch,
  lr as Table,
  Ba as Tabs,
  Ea as TabsContent,
  Aa as TabsList,
  La as TabsTrigger,
  mr as Tbody,
  hr as Td,
  br as Text,
  Ra as Textarea,
  pr as Th,
  dr as Thead,
  wa as ThemeProvider,
  fa as ThemeScript,
  Ma as ToastProvider,
  Pa as Tooltip,
  Da as TooltipProvider,
  ur as Tr,
  Ga as Tree,
  Ya as TreeItem,
  de as VisuallyHidden,
  u as cn,
  $e as useField,
  ka as useTheme,
  Fa as useToast
};
//# sourceMappingURL=index.js.map
