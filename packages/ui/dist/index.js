import { jsx as e, jsxs as m, Fragment as Ae } from "react/jsx-runtime";
import { useState as L, useEffect as le, useCallback as G, useMemo as U, useContext as ee, createContext as te, forwardRef as D, useId as H, useRef as Y, Fragment as we, useLayoutEffect as je, isValidElement as qe } from "react";
import { Slot as ke, Slottable as Le } from "@radix-ui/react-slot";
import * as I from "@radix-ui/react-select";
import * as Te from "@radix-ui/react-switch";
import * as Ie from "@radix-ui/react-checkbox";
import * as x from "@radix-ui/react-dialog";
import * as q from "@radix-ui/react-dropdown-menu";
import * as J from "@radix-ui/react-context-menu";
import * as W from "@radix-ui/react-tooltip";
import * as fe from "@radix-ui/react-tabs";
import * as X from "@radix-ui/react-toast";
function u(...t) {
  return t.filter((n) => typeof n == "string" && n !== "").join(" ");
}
const be = (t) => ({
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
}), Se = (t) => /* @__PURE__ */ e("svg", { ...be(t), children: /* @__PURE__ */ e("path", { d: "M3 8.5 6.5 12 13 4.5" }) }), Ee = (t) => /* @__PURE__ */ e("svg", { ...be(t), children: /* @__PURE__ */ e("path", { d: "m4 6 4 4 4-4" }) }), _e = (t) => /* @__PURE__ */ e("svg", { ...be(t), children: /* @__PURE__ */ e("path", { d: "M4 4l8 8M12 4l-8 8" }) }), Je = (t) => /* @__PURE__ */ m("svg", { ...be(t), children: [
  /* @__PURE__ */ e("circle", { cx: "7", cy: "7", r: "4.25" }),
  /* @__PURE__ */ e("path", { d: "m10.25 10.25 3.25 3.25" })
] }), Me = te(null);
function Ue(t) {
  if (!t || typeof window > "u") return {};
  try {
    return JSON.parse(window.localStorage.getItem(t) ?? "{}");
  } catch {
    return {};
  }
}
function Pa({
  children: t,
  theme: n,
  defaultTheme: o = "system",
  defaultDensity: s = "normal",
  storageKey: a = "wertkit-theme",
  target: r = "root"
}) {
  const [c, i] = L(o), [l, d] = L(s), [p, _] = L(!1), [b, w] = L(null);
  le(() => {
    const v = Ue(a);
    v.theme && i(v.theme), v.density && d(v.density);
  }, [a]);
  const k = n ?? c;
  le(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function") return;
    const v = window.matchMedia("(prefers-color-scheme: dark)"), N = () => _(v.matches);
    return N(), v.addEventListener("change", N), () => v.removeEventListener("change", N);
  }, []);
  const h = k === "system" ? p ? "dark" : "light" : k;
  le(() => {
    const v = r === "self" ? b : document.documentElement;
    v && (v.setAttribute("data-theme", h), v.setAttribute("data-density", l));
  }, [h, l, r, b]), le(() => {
    if (!(!a || typeof window > "u"))
      try {
        window.localStorage.setItem(a, JSON.stringify({ theme: k, density: l }));
      } catch {
      }
  }, [k, l, a]);
  const f = G((v) => i(v), []), g = G((v) => d(v), []), $ = U(
    () => ({ theme: k, resolvedTheme: h, setTheme: f, density: l, setDensity: g }),
    [k, h, f, l, g]
  );
  return /* @__PURE__ */ e(Me.Provider, { value: $, children: r === "self" ? /* @__PURE__ */ e("div", { ref: w, children: t }) : t });
}
function Aa() {
  const t = ee(Me);
  if (!t) throw new Error("useTheme must be used inside <ThemeProvider>");
  return t;
}
function La({
  storageKey: t = "wertkit-theme",
  defaultTheme: n = "system",
  defaultDensity: o = "normal",
  nonce: s
}) {
  const a = `(function(){try{
var k=${JSON.stringify(t)},t=${JSON.stringify(n)},d=${JSON.stringify(o)};
if(k){var s=JSON.parse(localStorage.getItem(k)||'{}');if(s.theme)t=s.theme;if(s.density)d=s.density;}
if(t==='system'){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}
var e=document.documentElement;e.setAttribute('data-theme',t);e.setAttribute('data-density',d);
}catch(_){}})();`;
  return /* @__PURE__ */ e("script", { nonce: s, dangerouslySetInnerHTML: { __html: a } });
}
const Ge = "wk-Button_root", Ye = "wk-Button_sm", Xe = "wk-Button_md", Qe = "wk-Button_lg", We = "wk-Button_iconOnly", Ze = "wk-Button_primary", et = "wk-Button_secondary", tt = "wk-Button_ghost", nt = "wk-Button_danger", ot = "wk-Button_spinner", ne = {
  root: Ge,
  sm: Ye,
  md: Xe,
  lg: Qe,
  iconOnly: We,
  primary: Ze,
  secondary: et,
  ghost: tt,
  danger: nt,
  spinner: ot,
  "wk-spin": "wk-Button_wk-spin"
}, st = D(function({
  variant: n = "secondary",
  size: o = "md",
  iconOnly: s = !1,
  loading: a = !1,
  startIcon: r,
  endIcon: c,
  asChild: i = !1,
  className: l,
  children: d,
  disabled: p,
  type: _,
  ...b
}, w) {
  return /* @__PURE__ */ m(
    i ? ke : "button",
    {
      ref: w,
      type: i ? void 0 : _ ?? "button",
      disabled: p || a,
      "data-loading": a || void 0,
      className: u(
        ne.root,
        ne[n],
        ne[o],
        s && ne.iconOnly,
        l
      ),
      ...b,
      children: [
        a ? /* @__PURE__ */ e("span", { className: ne.spinner, "aria-hidden": "true" }) : r,
        i ? /* @__PURE__ */ e(Le, { children: d }) : d,
        !a && c
      ]
    }
  );
}), at = "wk-Field_root", rt = "wk-Field_label", ct = "wk-Field_required", it = "wk-Field_hint", lt = "wk-Field_error", oe = {
  root: at,
  label: rt,
  required: ct,
  hint: it,
  error: lt
}, Fe = te(null), xe = () => ee(Fe);
function Ea({ label: t, hint: n, error: o, required: s, children: a, className: r }) {
  const c = H(), i = `${c}-input`, l = `${c}-hint`, d = `${c}-error`, p = !!o, _ = [o ? d : null, n ? l : null].filter(Boolean).join(" ") || void 0;
  return /* @__PURE__ */ e(Fe.Provider, { value: { inputId: i, describedBy: _, invalid: p }, children: /* @__PURE__ */ m("div", { className: u(oe.root, r), children: [
    t && /* @__PURE__ */ m("label", { className: oe.label, htmlFor: i, children: [
      t,
      s && /* @__PURE__ */ e("span", { className: oe.required, "aria-hidden": "true", children: "*" })
    ] }),
    a,
    o ? /* @__PURE__ */ e("p", { className: oe.error, id: d, role: "alert", children: o }) : n && /* @__PURE__ */ e("p", { className: oe.hint, id: l, children: n })
  ] }) });
}
const dt = "wk-Input_root", mt = "wk-Input_mono", ut = "wk-Input_shell", pt = "wk-Input_slot", ht = "wk-Input_start", wt = "wk-Input_end", kt = "wk-Input_hasStart", ft = "wk-Input_hasEnd", bt = "wk-Input_sm", _t = "wk-Input_md", vt = "wk-Input_lg", M = {
  root: dt,
  mono: mt,
  shell: ut,
  slot: pt,
  start: ht,
  end: wt,
  hasStart: kt,
  hasEnd: ft,
  sm: bt,
  md: _t,
  lg: vt
}, Ce = D(function({
  size: n = "md",
  invalid: o,
  mono: s = !1,
  startSlot: a,
  endSlot: r,
  className: c,
  id: i,
  "aria-describedby": l,
  ...d
}, p) {
  const _ = xe(), b = o ?? (_ == null ? void 0 : _.invalid) ?? !1, w = /* @__PURE__ */ e(
    "input",
    {
      ref: p,
      id: i ?? (_ == null ? void 0 : _.inputId),
      "aria-invalid": b || void 0,
      "aria-describedby": l ?? (_ == null ? void 0 : _.describedBy),
      className: u(
        M.root,
        M[n],
        s && M.mono,
        a && M.hasStart,
        r && M.hasEnd,
        !a && !r && c
      ),
      ...d
    }
  );
  return !a && !r ? w : /* @__PURE__ */ m("span", { className: u(M.shell, c), "data-invalid": b || void 0, children: [
    a && /* @__PURE__ */ e("span", { className: u(M.slot, M.start), "aria-hidden": "true", children: a }),
    w,
    r && /* @__PURE__ */ e("span", { className: u(M.slot, M.end), children: r })
  ] });
}), gt = "wk-Select_trigger", yt = "wk-Select_sm", Nt = "wk-Select_md", $t = "wk-Select_lg", Ct = "wk-Select_icon", St = "wk-Select_content", xt = "wk-Select_viewport", Tt = "wk-Select_item", It = "wk-Select_itemIndicator", Dt = "wk-Select_label", Bt = "wk-Select_separator", R = {
  trigger: gt,
  sm: yt,
  md: Nt,
  lg: $t,
  icon: Ct,
  content: St,
  viewport: xt,
  item: Tt,
  itemIndicator: It,
  label: Dt,
  separator: Bt
};
function Ma({
  placeholder: t,
  size: n = "md",
  children: o,
  className: s,
  id: a,
  "aria-label": r,
  ...c
}) {
  const i = xe();
  return /* @__PURE__ */ m(I.Root, { ...c, children: [
    /* @__PURE__ */ m(
      I.Trigger,
      {
        id: a ?? (i == null ? void 0 : i.inputId),
        "aria-label": r,
        "aria-invalid": (i == null ? void 0 : i.invalid) || void 0,
        "aria-describedby": i == null ? void 0 : i.describedBy,
        className: u(R.trigger, R[n], s),
        children: [
          /* @__PURE__ */ e(I.Value, { placeholder: t }),
          /* @__PURE__ */ e(I.Icon, { className: R.icon, children: /* @__PURE__ */ e(Ee, {}) })
        ]
      }
    ),
    /* @__PURE__ */ e(I.Portal, { children: /* @__PURE__ */ e(I.Content, { className: R.content, position: "popper", sideOffset: 4, children: /* @__PURE__ */ e(I.Viewport, { className: R.viewport, children: o }) }) })
  ] });
}
const Fa = D(
  function({ className: n, children: o, ...s }, a) {
    return /* @__PURE__ */ m(I.Item, { ref: a, className: u(R.item, n), ...s, children: [
      /* @__PURE__ */ e(I.ItemText, { children: o }),
      /* @__PURE__ */ e(I.ItemIndicator, { className: R.itemIndicator, children: /* @__PURE__ */ e(Se, {}) })
    ] });
  }
);
function Ra({ label: t, children: n }) {
  return /* @__PURE__ */ m(I.Group, { children: [
    /* @__PURE__ */ e(I.Label, { className: R.label, children: t }),
    n
  ] });
}
function Ha() {
  return /* @__PURE__ */ e(I.Separator, { className: R.separator });
}
const Pt = "wk-Switch_wrapper", At = "wk-Switch_root", Lt = "wk-Switch_thumb", Et = "wk-Switch_label", he = {
  wrapper: Pt,
  root: At,
  thumb: Lt,
  label: Et
}, Oa = D(function({ label: n, className: o, id: s, ...a }, r) {
  const c = H(), i = s ?? c, l = /* @__PURE__ */ e(Te.Root, { ref: r, id: i, className: u(he.root, o), ...a, children: /* @__PURE__ */ e(Te.Thumb, { className: he.thumb }) });
  return n ? /* @__PURE__ */ m("span", { className: he.wrapper, children: [
    l,
    /* @__PURE__ */ e("label", { className: he.label, htmlFor: i, children: n })
  ] }) : l;
}), Mt = "wk-Checkbox_wrapper", Ft = "wk-Checkbox_root", Rt = "wk-Checkbox_indicator", Ht = "wk-Checkbox_dash", Ot = "wk-Checkbox_label", se = {
  wrapper: Mt,
  root: Ft,
  indicator: Rt,
  dash: Ht,
  label: Ot
}, zt = D(function({ label: n, className: o, id: s, ...a }, r) {
  const c = H(), i = s ?? c, l = /* @__PURE__ */ e(Ie.Root, { ref: r, id: i, className: u(se.root, o), ...a, children: /* @__PURE__ */ e(Ie.Indicator, { className: se.indicator, children: a.checked === "indeterminate" ? /* @__PURE__ */ e("span", { className: se.dash }) : /* @__PURE__ */ e(Se, {}) }) });
  return n ? /* @__PURE__ */ m("span", { className: se.wrapper, children: [
    l,
    /* @__PURE__ */ e("label", { className: se.label, htmlFor: i, children: n })
  ] }) : l;
}), Vt = "wk-Semantic_heading", Kt = "wk-Semantic_text", jt = "wk-Semantic_muted", qt = "wk-Semantic_subtle", Jt = "wk-Semantic_danger", Ut = "wk-Semantic_mono", Gt = "wk-Semantic_xs", Yt = "wk-Semantic_sm", Xt = "wk-Semantic_md", Qt = "wk-Semantic_lg", Wt = "wk-Semantic_xl", Zt = "wk-Semantic_xxl", en = "wk-Semantic_link", tn = "wk-Semantic_visuallyHidden", P = {
  heading: Vt,
  text: Kt,
  muted: jt,
  subtle: qt,
  danger: Jt,
  mono: Ut,
  xs: Gt,
  sm: Yt,
  md: Xt,
  lg: Qt,
  xl: Wt,
  xxl: Zt,
  link: en,
  visuallyHidden: tn
};
function ue({ className: t, ...n }) {
  return /* @__PURE__ */ e("span", { className: u(P.visuallyHidden, t), ...n });
}
const nn = "wk-Dialog_overlay", on = "wk-Dialog_content", sn = "wk-Dialog_header", an = "wk-Dialog_headings", rn = "wk-Dialog_title", cn = "wk-Dialog_description", ln = "wk-Dialog_close", dn = "wk-Dialog_footer", O = {
  overlay: nn,
  content: on,
  header: sn,
  headings: an,
  title: rn,
  description: cn,
  close: ln,
  footer: dn
};
function za({
  title: t,
  titleHidden: n = !1,
  description: o,
  children: s,
  footer: a,
  trigger: r,
  width: c,
  showClose: i = !0,
  className: l,
  ...d
}) {
  return /* @__PURE__ */ m(x.Root, { ...d, children: [
    r && /* @__PURE__ */ e(x.Trigger, { asChild: !0, children: r }),
    /* @__PURE__ */ m(x.Portal, { children: [
      /* @__PURE__ */ e(x.Overlay, { className: O.overlay }),
      /* @__PURE__ */ m(
        x.Content,
        {
          className: u(O.content, l),
          style: c ? { "--wk-dialog-w": c } : void 0,
          children: [
            /* @__PURE__ */ m("div", { className: O.header, children: [
              /* @__PURE__ */ m("div", { className: O.headings, children: [
                n ? /* @__PURE__ */ e(x.Title, { asChild: !0, children: /* @__PURE__ */ e(ue, { children: t }) }) : /* @__PURE__ */ e(x.Title, { className: O.title, children: t }),
                o && /* @__PURE__ */ e(x.Description, { className: O.description, children: o })
              ] }),
              i && /* @__PURE__ */ e(x.Close, { className: O.close, "aria-label": "Close", children: /* @__PURE__ */ e(_e, {}) })
            ] }),
            s,
            a && /* @__PURE__ */ e("div", { className: O.footer, children: a })
          ]
        }
      )
    ] })
  ] });
}
const Va = x.Close, mn = "wk-Menu_content", un = "wk-Menu_item", pn = "wk-Menu_danger", hn = "wk-Menu_label", wn = "wk-Menu_separator", kn = "wk-Menu_shortcut", E = {
  content: mn,
  item: un,
  danger: pn,
  label: hn,
  separator: wn,
  shortcut: kn
};
function Ka({ trigger: t, children: n, align: o = "start", side: s = "bottom", className: a, ...r }) {
  return /* @__PURE__ */ m(q.Root, { ...r, children: [
    /* @__PURE__ */ e(q.Trigger, { asChild: !0, children: t }),
    /* @__PURE__ */ e(q.Portal, { children: /* @__PURE__ */ e(
      q.Content,
      {
        className: u(E.content, a),
        align: o,
        side: s,
        sideOffset: 4,
        collisionPadding: 8,
        children: n
      }
    ) })
  ] });
}
const ja = D(function({ tone: n = "default", shortcut: o, className: s, children: a, ...r }, c) {
  return /* @__PURE__ */ m(
    q.Item,
    {
      ref: c,
      className: u(E.item, n === "danger" && E.danger, s),
      ...r,
      children: [
        a,
        o && /* @__PURE__ */ e("span", { className: E.shortcut, children: o })
      ]
    }
  );
});
function qa({ children: t }) {
  return /* @__PURE__ */ e(q.Label, { className: E.label, children: t });
}
function Ja() {
  return /* @__PURE__ */ e(q.Separator, { className: E.separator });
}
function Ua({ trigger: t, children: n, className: o, ...s }) {
  return /* @__PURE__ */ m(J.Root, { ...s, children: [
    /* @__PURE__ */ e(J.Trigger, { asChild: !0, children: t }),
    /* @__PURE__ */ e(J.Portal, { children: /* @__PURE__ */ e(
      J.Content,
      {
        className: u(E.content, o),
        collisionPadding: 8,
        children: n
      }
    ) })
  ] });
}
const Ga = D(
  function({ tone: n = "default", shortcut: o, className: s, children: a, ...r }, c) {
    return /* @__PURE__ */ m(
      J.Item,
      {
        ref: c,
        className: u(E.item, n === "danger" && E.danger, s),
        ...r,
        children: [
          a,
          o && /* @__PURE__ */ e("span", { className: E.shortcut, children: o })
        ]
      }
    );
  }
);
function Ya({ children: t }) {
  return /* @__PURE__ */ e(J.Label, { className: E.label, children: t });
}
function Xa() {
  return /* @__PURE__ */ e(J.Separator, { className: E.separator });
}
const fn = "wk-Tooltip_content", bn = "wk-Tooltip_arrow", De = {
  content: fn,
  arrow: bn
}, Qa = W.Provider;
function Wa({ content: t, children: n, side: o = "top", delayDuration: s, className: a }) {
  return /* @__PURE__ */ m(W.Root, { delayDuration: s, children: [
    /* @__PURE__ */ e(W.Trigger, { asChild: !0, children: n }),
    /* @__PURE__ */ e(W.Portal, { children: /* @__PURE__ */ m(
      W.Content,
      {
        className: u(De.content, a),
        side: o,
        sideOffset: 6,
        collisionPadding: 8,
        children: [
          t,
          /* @__PURE__ */ e(W.Arrow, { className: De.arrow, width: 10, height: 5 })
        ]
      }
    ) })
  ] });
}
const _n = "wk-Tabs_root", vn = "wk-Tabs_list", gn = "wk-Tabs_trigger", yn = "wk-Tabs_content", ve = {
  root: _n,
  list: vn,
  trigger: gn,
  content: yn
};
function Za({ className: t, ...n }) {
  return /* @__PURE__ */ e(fe.Root, { className: u(ve.root, t), ...n });
}
function er({ className: t, ...n }) {
  return /* @__PURE__ */ e(fe.List, { className: u(ve.list, t), ...n });
}
const tr = D(
  function({ className: n, ...o }, s) {
    return /* @__PURE__ */ e(fe.Trigger, { ref: s, className: u(ve.trigger, n), ...o });
  }
);
function nr({ className: t, ...n }) {
  return /* @__PURE__ */ e(fe.Content, { className: u(ve.content, t), ...n });
}
const Nn = "wk-Toast_viewport", $n = "wk-Toast_root", Cn = "wk-Toast_body", Sn = "wk-Toast_title", xn = "wk-Toast_description", Tn = "wk-Toast_close", Q = {
  viewport: Nn,
  root: $n,
  body: Cn,
  title: Sn,
  description: xn,
  close: Tn
}, Re = te(null);
function or({ children: t, swipeDirection: n = "right" }) {
  const [o, s] = L([]), a = Y(1), r = G((l) => {
    s((d) => d.filter((p) => p.id !== l));
  }, []), c = G((l) => {
    const d = a.current++;
    s((p) => [...p, { ...l, id: d }]);
  }, []), i = U(() => ({ toast: c, dismiss: r }), [c, r]);
  return /* @__PURE__ */ e(Re.Provider, { value: i, children: /* @__PURE__ */ m(X.Provider, { swipeDirection: n, children: [
    t,
    o.map((l) => /* @__PURE__ */ m(
      X.Root,
      {
        className: Q.root,
        "data-tone": l.tone ?? "neutral",
        duration: l.duration ?? (l.tone === "danger" ? 1 / 0 : 5e3),
        type: l.tone === "danger" ? "foreground" : "background",
        onOpenChange: (d) => {
          d || r(l.id);
        },
        children: [
          /* @__PURE__ */ m("div", { className: Q.body, children: [
            /* @__PURE__ */ e(X.Title, { className: Q.title, children: l.title }),
            l.description && /* @__PURE__ */ e(X.Description, { className: Q.description, children: l.description })
          ] }),
          /* @__PURE__ */ e(X.Close, { className: Q.close, "aria-label": "Dismiss", children: /* @__PURE__ */ e(_e, {}) })
        ]
      },
      l.id
    )),
    /* @__PURE__ */ e(X.Viewport, { className: Q.viewport })
  ] }) });
}
function sr() {
  const t = ee(Re);
  if (!t) throw new Error("useToast must be used inside <ToastProvider>");
  return t;
}
const In = "wk-Textarea_root", Dn = "wk-Textarea_mono", Bn = "wk-Textarea_noResize", ge = {
  root: In,
  mono: Dn,
  noResize: Bn
}, ar = D(function({ invalid: n, mono: o = !1, resizable: s = !0, className: a, id: r, rows: c = 4, ...i }, l) {
  const d = xe(), p = n ?? (d == null ? void 0 : d.invalid) ?? !1;
  return /* @__PURE__ */ e(
    "textarea",
    {
      ref: l,
      id: r ?? (d == null ? void 0 : d.inputId),
      rows: c,
      "aria-invalid": p || void 0,
      "aria-describedby": d == null ? void 0 : d.describedBy,
      className: u(ge.root, o && ge.mono, !s && ge.noResize, a),
      ...i
    }
  );
}), Pn = "wk-Combobox_wrap", An = "wk-Combobox_list", Ln = "wk-Combobox_option", En = "wk-Combobox_label", Mn = "wk-Combobox_mono", Fn = "wk-Combobox_hint", Rn = "wk-Combobox_empty", K = {
  wrap: Pn,
  list: An,
  option: Ln,
  label: En,
  mono: Mn,
  hint: Fn,
  empty: Rn
}, Hn = (t) => t.value ?? t.label;
function rr({
  value: t,
  onValueChange: n,
  suggestions: o,
  onEnter: s,
  emptyMessage: a,
  mono: r,
  className: c,
  onKeyDown: i,
  onBlur: l,
  ...d
}) {
  const p = H(), [_, b] = L(!1), [w, k] = L(-1), h = Y(null), f = U(() => _ ? o(t) : [], [_, o, t]), g = _ && (f.length > 0 || !!a), $ = w >= 0 && f[w] ? `${p}-${w}` : void 0, v = (N) => {
    const y = f[N];
    y && (n(Hn(y)), b(!1), k(-1));
  };
  return /* @__PURE__ */ m("div", { className: K.wrap, children: [
    /* @__PURE__ */ e(
      Ce,
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
        onChange: (N) => {
          n(N.target.value), b(!0), k(-1);
        },
        onFocus: () => b(!0),
        onBlur: (N) => {
          h.current = setTimeout(() => b(!1), 120), l == null || l(N);
        },
        onKeyDown: (N) => {
          i == null || i(N), !N.defaultPrevented && (N.key === "ArrowDown" && f.length ? (N.preventDefault(), b(!0), k((y) => (y + 1) % f.length)) : N.key === "ArrowUp" && f.length ? (N.preventDefault(), k((y) => y <= 0 ? f.length - 1 : y - 1)) : N.key === "Enter" ? w >= 0 ? (N.preventDefault(), v(w)) : s == null || s() : N.key === "Tab" && w >= 0 ? (N.preventDefault(), v(w)) : N.key === "Escape" && g && (N.preventDefault(), b(!1), k(-1)));
        },
        ...d
      }
    ),
    g && /* @__PURE__ */ e("ul", { className: K.list, id: p, role: "listbox", children: f.length === 0 ? /* @__PURE__ */ e("li", { className: K.empty, children: a }) : f.map((N, y) => /* @__PURE__ */ m(
      "li",
      {
        id: `${p}-${y}`,
        role: "option",
        "aria-selected": y === w,
        "data-active": y === w,
        className: K.option,
        onMouseEnter: () => k(y),
        onMouseDown: (C) => {
          C.preventDefault(), h.current && clearTimeout(h.current), v(y);
        },
        children: [
          /* @__PURE__ */ e("span", { className: u(K.label, r && K.mono), children: N.label }),
          N.hint && /* @__PURE__ */ e("span", { className: K.hint, children: N.hint })
        ]
      },
      `${N.label}-${y}`
    )) })
  ] });
}
const On = "wk-SegmentedControl_root", zn = "wk-SegmentedControl_option", Vn = "wk-SegmentedControl_fluid", ye = {
  root: On,
  option: zn,
  fluid: Vn
};
function cr({
  options: t,
  value: n,
  onValueChange: o,
  fluid: s = !1,
  className: a,
  ...r
}) {
  const c = H(), i = Y(null), l = G(
    (d) => {
      var w, k;
      const p = t.filter((h) => !h.disabled);
      if (!p.length) return;
      const _ = p.findIndex((h) => h.value === n), b = p[(_ + d + p.length) % p.length];
      o(b.value), (k = (w = i.current) == null ? void 0 : w.querySelector(`[data-value="${CSS.escape(b.value)}"]`)) == null || k.focus();
    },
    [t, n, o]
  );
  return /* @__PURE__ */ e(
    "div",
    {
      ref: i,
      role: "radiogroup",
      className: u(ye.root, s && ye.fluid, a),
      onKeyDown: (d) => {
        (d.key === "ArrowRight" || d.key === "ArrowDown") && (d.preventDefault(), l(1)), (d.key === "ArrowLeft" || d.key === "ArrowUp") && (d.preventDefault(), l(-1));
      },
      ...r,
      children: t.map((d) => {
        const p = d.value === n;
        return /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            role: "radio",
            id: `${c}-${d.value}`,
            "data-value": d.value,
            "aria-checked": p,
            "data-disabled": d.disabled || void 0,
            disabled: d.disabled,
            tabIndex: p ? 0 : -1,
            className: ye.option,
            onClick: () => !d.disabled && o(d.value),
            children: d.label
          },
          d.value
        );
      })
    }
  );
}
const Kn = "wk-Alert_root", jn = "wk-Alert_info", qn = "wk-Alert_success", Jn = "wk-Alert_warn", Un = "wk-Alert_danger", Gn = "wk-Alert_icon", Yn = "wk-Alert_title", Xn = "wk-Alert_body", Qn = "wk-Alert_actions", Wn = "wk-Alert_close", Zn = "wk-Alert_banner", z = {
  root: Kn,
  info: jn,
  success: qn,
  warn: Jn,
  danger: Un,
  icon: Gn,
  title: Yn,
  body: Xn,
  actions: Qn,
  close: Wn,
  banner: Zn
};
function ir({
  tone: t = "info",
  title: n,
  children: o,
  icon: s,
  action: a,
  onDismiss: r,
  banner: c = !1,
  className: i
}) {
  return /* @__PURE__ */ m(
    "div",
    {
      role: t === "danger" ? "alert" : "status",
      className: u(z.root, z[t], c && z.banner, i),
      children: [
        s && /* @__PURE__ */ e("span", { className: z.icon, "aria-hidden": "true", children: s }),
        /* @__PURE__ */ m("div", { className: z.body, children: [
          n && /* @__PURE__ */ e("span", { className: z.title, children: n }),
          o,
          a && /* @__PURE__ */ e("div", { className: z.actions, children: a })
        ] }),
        r && /* @__PURE__ */ e("button", { type: "button", className: z.close, onClick: r, "aria-label": "Dismiss", children: /* @__PURE__ */ e(_e, {}) })
      ]
    }
  );
}
const eo = "wk-EmptyState_root", to = "wk-EmptyState_icon", no = "wk-EmptyState_title", oo = "wk-EmptyState_description", so = "wk-EmptyState_actions", ae = {
  root: eo,
  icon: to,
  title: no,
  description: oo,
  actions: so
};
function lr({
  icon: t,
  title: n,
  description: o,
  action: s,
  headingLevel: a = 2,
  className: r
}) {
  const c = `h${a}`;
  return /* @__PURE__ */ m("div", { className: u(ae.root, r), children: [
    t && /* @__PURE__ */ e("span", { className: ae.icon, "aria-hidden": "true", children: t }),
    /* @__PURE__ */ e(c, { className: ae.title, children: n }),
    o && /* @__PURE__ */ e("p", { className: ae.description, children: o }),
    s && /* @__PURE__ */ e("div", { className: ae.actions, children: s })
  ] });
}
const ao = "wk-Spinner_root", ro = "wk-Spinner_sm", co = "wk-Spinner_md", io = "wk-Spinner_lg", Be = {
  root: ao,
  "wk-spinner-rotate": "wk-Spinner_wk-spinner-rotate",
  sm: ro,
  md: co,
  lg: io
};
function dr({ size: t = "md", label: n = "Loading", className: o }) {
  return /* @__PURE__ */ m("span", { role: "status", children: [
    /* @__PURE__ */ e("span", { className: u(Be.root, Be[t], o), "aria-hidden": "true" }),
    n && /* @__PURE__ */ e(ue, { children: n })
  ] });
}
const lo = "wk-Kbd_root", mo = "wk-Kbd_group", Ne = {
  root: lo,
  group: mo
};
function mr({ keys: t, className: n, children: o, ...s }) {
  return t != null && t.length ? /* @__PURE__ */ e("span", { className: Ne.group, ...s, children: t.map((a, r) => /* @__PURE__ */ e(we, { children: /* @__PURE__ */ e("kbd", { className: u(Ne.root, n), children: a }) }, `${a}-${r}`)) }) : /* @__PURE__ */ e("kbd", { className: u(Ne.root, n), ...s, children: o });
}
const uo = "wk-SplitPane_root", po = "wk-SplitPane_horizontal", ho = "wk-SplitPane_vertical", wo = "wk-SplitPane_pane", ko = "wk-SplitPane_handle", re = {
  root: uo,
  horizontal: po,
  vertical: ho,
  pane: wo,
  handle: ko
};
function ur({
  children: t,
  direction: n = "horizontal",
  size: o,
  onSizeChange: s,
  min: a = 120,
  max: r = Number.POSITIVE_INFINITY,
  defaultSize: c,
  className: i,
  "aria-label": l = "Resize panes"
}) {
  const d = Y(null), [p, _] = L(!1), b = n === "horizontal", w = G(
    (h) => {
      var $;
      const f = ($ = d.current) == null ? void 0 : $.getBoundingClientRect(), g = f ? (b ? f.width : f.height) - a : r;
      return Math.max(a, Math.min(h, Math.min(r, g)));
    },
    [a, r, b]
  ), k = (h) => s(w(o + h));
  return /* @__PURE__ */ m("div", { ref: d, className: u(re.root, re[n], i), children: [
    /* @__PURE__ */ e("div", { className: re.pane, style: { [b ? "width" : "height"]: o, flex: "none" }, children: t[0] }),
    /* @__PURE__ */ e(
      "div",
      {
        role: "separator",
        tabIndex: 0,
        "aria-label": l,
        "aria-orientation": b ? "vertical" : "horizontal",
        "aria-valuenow": Math.round(o),
        "aria-valuemin": a,
        "aria-valuemax": Number.isFinite(r) ? r : void 0,
        "data-dragging": p || void 0,
        className: re.handle,
        onDoubleClick: () => c !== void 0 && s(c),
        onPointerDown: (h) => {
          h.currentTarget.setPointerCapture(h.pointerId), _(!0);
        },
        onPointerMove: (h) => {
          var g;
          if (!p) return;
          const f = (g = d.current) == null ? void 0 : g.getBoundingClientRect();
          f && s(w(b ? h.clientX - f.left : h.clientY - f.top));
        },
        onPointerUp: (h) => {
          h.currentTarget.releasePointerCapture(h.pointerId), _(!1);
        },
        onKeyDown: (h) => {
          const f = h.shiftKey ? 40 : 10;
          h.key === (b ? "ArrowLeft" : "ArrowUp") && (h.preventDefault(), k(-f)), h.key === (b ? "ArrowRight" : "ArrowDown") && (h.preventDefault(), k(f)), h.key === "Home" && c !== void 0 && (h.preventDefault(), s(c));
        }
      }
    ),
    /* @__PURE__ */ e("div", { className: u(re.pane), style: { flex: 1 }, children: t[1] })
  ] });
}
const fo = "wk-NavList_list", bo = "wk-NavList_item", _o = "wk-NavList_control", vo = "wk-NavList_icon", go = "wk-NavList_label", yo = "wk-NavList_badge", Z = {
  list: fo,
  item: bo,
  control: _o,
  icon: vo,
  label: go,
  badge: yo
};
function pr({ children: t, className: n, ...o }) {
  return /* @__PURE__ */ e("ul", { className: u(Z.list, n), ...o, children: t });
}
function hr({
  children: t,
  current: n = !1,
  icon: o,
  badge: s,
  onSelect: a,
  asChild: r = !1,
  disabled: c = !1,
  className: i
}) {
  const l = r ? ke : "button";
  return /* @__PURE__ */ e("li", { className: Z.item, children: /* @__PURE__ */ m(
    l,
    {
      ...r ? {} : { type: "button", disabled: c },
      className: u(Z.control, i),
      "aria-current": n ? "page" : void 0,
      "data-current": n || void 0,
      onClick: a,
      children: [
        o && /* @__PURE__ */ e("span", { className: Z.icon, "aria-hidden": "true", children: o }),
        r ? /* @__PURE__ */ e(Le, { children: t }) : /* @__PURE__ */ e("span", { className: Z.label, children: t }),
        s && /* @__PURE__ */ e("span", { className: Z.badge, children: s })
      ]
    }
  ) });
}
const No = "wk-Tree_root", $o = "wk-Tree_item", Co = "wk-Tree_twisty", So = "wk-Tree_spacer", xo = "wk-Tree_label", de = {
  root: No,
  item: $o,
  twisty: Co,
  spacer: So,
  label: xo
}, He = te(null);
function wr({ children: t, onActivate: n, onToggle: o, className: s, ...a }) {
  const r = Y(null), [c, i] = L(null), l = Y([]);
  l.current = [];
  const d = G((w) => {
    l.current.push(w);
  }, []), p = (w) => {
    var k, h;
    i(w), (h = (k = r.current) == null ? void 0 : k.querySelector(`[data-tree-id="${CSS.escape(w)}"]`)) == null || h.focus();
  }, _ = (w) => {
    var $;
    const k = l.current;
    if (!k.length) return;
    const h = c ? k.indexOf(c) : -1, f = c ? ($ = r.current) == null ? void 0 : $.querySelector(`[data-tree-id="${CSS.escape(c)}"]`) : null, g = f == null ? void 0 : f.getAttribute("aria-expanded");
    switch (w.key) {
      case "ArrowDown":
        w.preventDefault(), p(k[Math.min(h + 1, k.length - 1)]);
        break;
      case "ArrowUp":
        w.preventDefault(), p(k[Math.max(h - 1, 0)]);
        break;
      case "Home":
        w.preventDefault(), p(k[0]);
        break;
      case "End":
        w.preventDefault(), p(k[k.length - 1]);
        break;
      case "ArrowRight":
        g === "false" && c ? (w.preventDefault(), o == null || o(c, !0)) : g === "true" && (w.preventDefault(), p(k[Math.min(h + 1, k.length - 1)]));
        break;
      case "ArrowLeft":
        g === "true" && c ? (w.preventDefault(), o == null || o(c, !1)) : h > 0 && (w.preventDefault(), p(k[h - 1]));
        break;
      case "Enter":
      case " ":
        c && (w.preventDefault(), n == null || n(c));
        break;
    }
  }, b = U(
    () => ({ activeId: c, setActiveId: i, register: d }),
    [c, d]
  );
  return /* @__PURE__ */ e(He.Provider, { value: b, children: /* @__PURE__ */ e(
    "div",
    {
      ref: r,
      role: "tree",
      className: u(de.root, s),
      onKeyDown: _,
      ...a,
      children: t
    }
  ) });
}
function kr({
  id: t,
  level: n,
  children: o,
  hasChildren: s = !1,
  expanded: a,
  selected: r = !1,
  icon: c,
  endSlot: i,
  onSelect: l,
  onToggle: d,
  posInSet: p,
  setSize: _,
  indent: b = 14,
  className: w
}) {
  const k = ee(He);
  if (!k) throw new Error("TreeItem must be used inside <Tree>");
  k.register(t);
  const h = k.activeId === t || k.activeId === null && n === 1 && p === 1;
  return /* @__PURE__ */ m(
    "div",
    {
      role: "treeitem",
      "data-tree-id": t,
      "aria-level": n,
      "aria-expanded": s ? !!a : void 0,
      "aria-selected": r,
      "aria-posinset": p,
      "aria-setsize": _,
      tabIndex: h ? 0 : -1,
      className: u(de.item, w),
      style: { paddingInlineStart: (n - 1) * b + 4 },
      onFocus: () => k.setActiveId(t),
      onClick: () => {
        k.setActiveId(t), l == null || l(t);
      },
      children: [
        s ? /* @__PURE__ */ e(
          "span",
          {
            className: de.twisty,
            "data-expanded": !!a,
            onClick: (f) => {
              f.stopPropagation(), d == null || d(t, !a);
            },
            children: /* @__PURE__ */ e(Ee, {})
          }
        ) : /* @__PURE__ */ e("span", { className: de.spacer }),
        c,
        /* @__PURE__ */ e("span", { className: de.label, children: o }),
        i
      ]
    }
  );
}
const To = "wk-CommandPalette_overlay", Io = "wk-CommandPalette_content", Do = "wk-CommandPalette_search", Bo = "wk-CommandPalette_searchIcon", Po = "wk-CommandPalette_input", Ao = "wk-CommandPalette_list", Lo = "wk-CommandPalette_group", Eo = "wk-CommandPalette_heading", Mo = "wk-CommandPalette_item", Fo = "wk-CommandPalette_itemIcon", Ro = "wk-CommandPalette_itemLabel", Ho = "wk-CommandPalette_itemHint", Oo = "wk-CommandPalette_empty", zo = "wk-CommandPalette_footer", T = {
  overlay: To,
  content: Io,
  search: Do,
  searchIcon: Bo,
  input: Po,
  list: Ao,
  group: Lo,
  heading: Eo,
  item: Mo,
  itemIcon: Fo,
  itemLabel: Ro,
  itemHint: Ho,
  empty: Oo,
  footer: zo
}, Oe = te(null);
function fr({
  open: t,
  onOpenChange: n,
  query: o,
  onQueryChange: s,
  children: a,
  placeholder: r = "Type a command or search…",
  title: c = "Command palette",
  footer: i,
  className: l,
  searchIcon: d
}) {
  const p = H(), [_, b] = L(0), [w, k] = L([]), h = Y(/* @__PURE__ */ new Map()), f = U(
    () => (y, C) => {
      h.current.set(y, C);
    },
    []
  ), g = U(
    () => (y) => (k((C) => C.includes(y) ? C : [...C, y]), () => {
      k((C) => C.filter((pe) => pe !== y)), h.current.delete(y);
    }),
    []
  );
  le(() => b(0), [o]);
  const $ = w.length, v = w[_] ?? w[0] ?? null, N = U(
    () => ({ activeId: v, register: f, attach: g, listId: p }),
    [v, f, g, p]
  );
  return /* @__PURE__ */ e(x.Root, { open: t, onOpenChange: n, children: /* @__PURE__ */ m(x.Portal, { children: [
    /* @__PURE__ */ e(x.Overlay, { className: T.overlay }),
    /* @__PURE__ */ m(x.Content, { className: u(T.content, l), children: [
      /* @__PURE__ */ e(x.Title, { asChild: !0, children: /* @__PURE__ */ e(ue, { children: c }) }),
      /* @__PURE__ */ m(Oe.Provider, { value: N, children: [
        /* @__PURE__ */ m("div", { className: T.search, children: [
          /* @__PURE__ */ e("span", { className: T.searchIcon, "aria-hidden": "true", children: d ?? /* @__PURE__ */ e(Je, {}) }),
          /* @__PURE__ */ e(
            "input",
            {
              className: T.input,
              value: o,
              onChange: (y) => s(y.target.value),
              placeholder: r,
              role: "combobox",
              "aria-expanded": !0,
              "aria-controls": p,
              "aria-activedescendant": v ? `${p}-${v}` : void 0,
              "aria-autocomplete": "list",
              autoComplete: "off",
              autoFocus: !0,
              onKeyDown: (y) => {
                if (y.key === "ArrowDown" && $)
                  y.preventDefault(), b((C) => (C + 1) % $);
                else if (y.key === "ArrowUp" && $)
                  y.preventDefault(), b((C) => C <= 0 ? $ - 1 : C - 1);
                else if (y.key === "Enter") {
                  const C = w[_] ?? w[0], pe = C ? h.current.get(C) : void 0;
                  if (!pe) return;
                  y.preventDefault(), pe();
                }
              }
            }
          )
        ] }),
        /* @__PURE__ */ e("ul", { className: T.list, id: p, role: "listbox", "aria-label": c, children: a }),
        i && /* @__PURE__ */ e("div", { className: T.footer, children: i })
      ] })
    ] })
  ] }) });
}
function br({ heading: t, children: n }) {
  return /* @__PURE__ */ m("li", { className: T.group, children: [
    t && /* @__PURE__ */ e("div", { className: T.heading, children: t }),
    /* @__PURE__ */ e("ul", { role: "group", style: { listStyle: "none", margin: 0, padding: 0 }, children: n })
  ] });
}
function _r({ id: t, children: n, onSelect: o, icon: s, hint: a }) {
  const r = ee(Oe);
  if (!r) throw new Error("CommandItem must be used inside <CommandPalette>");
  r.register(t, o);
  const { attach: c } = r;
  je(() => c(t), [c, t]);
  const i = r.activeId === t;
  return /* @__PURE__ */ m(
    "li",
    {
      id: `${r.listId}-${t}`,
      role: "option",
      "aria-selected": i,
      "data-active": i,
      className: T.item,
      onMouseDown: (l) => {
        l.preventDefault(), o();
      },
      children: [
        s && /* @__PURE__ */ e("span", { className: T.itemIcon, children: s }),
        /* @__PURE__ */ e("span", { className: T.itemLabel, children: n }),
        a && /* @__PURE__ */ e("span", { className: T.itemHint, children: a })
      ]
    }
  );
}
function vr({ children: t }) {
  return /* @__PURE__ */ e("li", { className: T.empty, children: t });
}
const Vo = "wk-KeyValueEditor_root", Ko = "wk-KeyValueEditor_head", jo = "wk-KeyValueEditor_row", qo = "wk-KeyValueEditor_cell", Jo = "wk-KeyValueEditor_actions", Uo = "wk-KeyValueEditor_remove", Go = "wk-KeyValueEditor_footer", Yo = "wk-KeyValueEditor_empty", F = {
  root: Vo,
  head: Ko,
  row: jo,
  cell: qo,
  actions: Jo,
  remove: Uo,
  footer: Go,
  empty: Yo
};
function gr({
  rows: t,
  onChange: n,
  keyLabel: o = "Key",
  valueLabel: s = "Value",
  keyPlaceholder: a,
  valuePlaceholder: r,
  onNewRowId: c,
  selectable: i = !0,
  addLabel: l = "Add row",
  emptyMessage: d = "Nothing here yet.",
  maskValues: p = !1,
  className: _
}) {
  const b = H();
  let w = 0;
  const k = () => (c == null ? void 0 : c()) ?? `${b}-${t.length}-${w++}`, h = (f, g) => n(t.map(($) => $.id === f ? { ...$, ...g } : $));
  return /* @__PURE__ */ m("div", { className: u(F.root, _), children: [
    /* @__PURE__ */ m("div", { className: F.head, "aria-hidden": "true", children: [
      /* @__PURE__ */ e("span", { children: i ? "" : null }),
      /* @__PURE__ */ e("span", { children: o }),
      /* @__PURE__ */ e("span", { children: s }),
      /* @__PURE__ */ e("span", {})
    ] }),
    t.length === 0 && /* @__PURE__ */ e("p", { className: F.empty, children: d }),
    t.map((f, g) => {
      const $ = f.enabled ?? !0;
      return /* @__PURE__ */ m("div", { className: F.row, "data-disabled": !$, children: [
        /* @__PURE__ */ e("span", { className: F.cell, children: i && /* @__PURE__ */ e(
          zt,
          {
            checked: $,
            onCheckedChange: (v) => h(f.id, { enabled: v === !0 }),
            "aria-label": `Enable ${f.key || `row ${g + 1}`}`
          }
        ) }),
        /* @__PURE__ */ e("span", { className: F.cell, children: /* @__PURE__ */ e(
          Ce,
          {
            size: "sm",
            mono: !0,
            value: f.key,
            placeholder: a,
            "aria-label": `${o}, row ${g + 1}`,
            onChange: (v) => h(f.id, { key: v.target.value })
          }
        ) }),
        /* @__PURE__ */ e("span", { className: F.cell, children: /* @__PURE__ */ e(
          Ce,
          {
            size: "sm",
            mono: !0,
            type: p ? "password" : "text",
            value: f.value,
            placeholder: r,
            "aria-label": `${s}, row ${g + 1}`,
            onChange: (v) => h(f.id, { value: v.target.value })
          }
        ) }),
        /* @__PURE__ */ e("span", { className: F.actions, children: /* @__PURE__ */ m(
          "button",
          {
            type: "button",
            className: F.remove,
            onClick: () => n(t.filter((v) => v.id !== f.id)),
            children: [
              /* @__PURE__ */ e(_e, {}),
              /* @__PURE__ */ m(ue, { children: [
                "Remove ",
                f.key || `row ${g + 1}`
              ] })
            ]
          }
        ) })
      ] }, f.id);
    }),
    /* @__PURE__ */ e("div", { className: F.footer, children: /* @__PURE__ */ m(
      st,
      {
        size: "sm",
        variant: "ghost",
        onClick: () => n([...t, { id: k(), key: "", value: "", enabled: !0 }]),
        children: [
          "+ ",
          l
        ]
      }
    ) })
  ] });
}
const Xo = "wk-CodeSurface_root", Qo = "wk-CodeSurface_toolbar", Wo = "wk-CodeSurface_body", Zo = "wk-CodeSurface_pre", es = "wk-CodeSurface_status", me = {
  root: Xo,
  toolbar: Qo,
  body: Wo,
  pre: Zo,
  status: es
};
function yr({ children: t, toolbar: n, status: o, className: s }) {
  return /* @__PURE__ */ m("div", { className: u(me.root, s), children: [
    n && /* @__PURE__ */ e("div", { className: me.toolbar, children: n }),
    /* @__PURE__ */ e("div", { className: me.body, children: t }),
    o && /* @__PURE__ */ e("div", { className: me.status, children: o })
  ] });
}
function Nr({ code: t, className: n, ...o }) {
  return /* @__PURE__ */ e("pre", { className: u(me.pre, n), tabIndex: 0, ...o, children: /* @__PURE__ */ e("code", { children: t }) });
}
const ts = "wk-Form_section", ns = "wk-Form_sectionTop", os = "wk-Form_sectionHead", ss = "wk-Form_sectionTitle", as = "wk-Form_sectionDesc", rs = "wk-Form_sectionBody", cs = "wk-Form_row", is = "wk-Form_rowText", ls = "wk-Form_rowLabel", ds = "wk-Form_rowDesc", ms = "wk-Form_rowControl", us = "wk-Form_stacked", A = {
  section: ts,
  sectionTop: ns,
  sectionHead: os,
  sectionTitle: ss,
  sectionDesc: as,
  sectionBody: rs,
  row: cs,
  rowText: is,
  rowLabel: ls,
  rowDesc: ds,
  rowControl: ms,
  stacked: us
};
function $r({ title: t, description: n, children: o, action: s, className: a }) {
  const r = H();
  return /* @__PURE__ */ m("section", { className: u(A.section, a), "aria-labelledby": t ? r : void 0, children: [
    (t || s) && /* @__PURE__ */ m("div", { className: A.sectionTop, children: [
      /* @__PURE__ */ m("div", { className: A.sectionHead, children: [
        t && /* @__PURE__ */ e("h2", { className: A.sectionTitle, id: r, children: t }),
        n && /* @__PURE__ */ e("p", { className: A.sectionDesc, children: n })
      ] }),
      s
    ] }),
    /* @__PURE__ */ e("div", { className: A.sectionBody, children: o })
  ] });
}
function Cr({ label: t, description: n, children: o, stacked: s, className: a }) {
  return /* @__PURE__ */ m("div", { className: u(A.row, s && A.stacked, a), children: [
    /* @__PURE__ */ m("div", { className: A.rowText, children: [
      /* @__PURE__ */ e("span", { className: A.rowLabel, children: t }),
      n && /* @__PURE__ */ e("p", { className: A.rowDesc, children: n })
    ] }),
    /* @__PURE__ */ e("div", { className: A.rowControl, children: o })
  ] });
}
const ps = "wk-HighlightText_mark", hs = {
  mark: ps
};
function Sr({ text: t, query: n, className: o }) {
  const s = n.trim().toLowerCase();
  if (!s) return /* @__PURE__ */ e("span", { className: o, children: t });
  const a = t.toLowerCase(), r = [];
  let c = 0;
  for (; c < t.length; ) {
    const i = a.indexOf(s, c);
    if (i === -1) {
      r.push({ chunk: t.slice(c), hit: !1 });
      break;
    }
    i > c && r.push({ chunk: t.slice(c, i), hit: !1 }), r.push({ chunk: t.slice(i, i + s.length), hit: !0 }), c = i + s.length;
  }
  return /* @__PURE__ */ e("span", { className: o, children: r.map((i, l) => /* @__PURE__ */ e(we, { children: i.hit ? /* @__PURE__ */ e("mark", { className: hs.mark, children: i.chunk }) : i.chunk }, l)) });
}
const ws = "wk-SkipToContent_root", ks = {
  root: ws
};
function xr({
  targetId: t = "wk-main",
  children: n = "Skip to content",
  className: o
}) {
  return /* @__PURE__ */ e("a", { href: `#${t}`, className: u(ks.root, o), children: n });
}
const fs = "wk-Card_root", bs = "wk-Card_outlined", _s = "wk-Card_raised", vs = "wk-Card_inset", gs = "wk-Card_interactive", ys = "wk-Card_top", Ns = "wk-Card_icon", $s = "wk-Card_head", Cs = "wk-Card_title", Ss = "wk-Card_description", xs = "wk-Card_action", Ts = "wk-Card_body", Is = "wk-Card_footer", B = {
  root: fs,
  outlined: bs,
  raised: _s,
  inset: vs,
  "padding-none": "wk-Card_padding-none",
  "padding-sm": "wk-Card_padding-sm",
  "padding-md": "wk-Card_padding-md",
  "padding-lg": "wk-Card_padding-lg",
  interactive: gs,
  top: ys,
  icon: Ns,
  head: $s,
  title: Cs,
  description: Ss,
  action: xs,
  body: Ts,
  footer: Is
};
function Tr({
  title: t,
  titleLevel: n = 3,
  description: o,
  icon: s,
  action: a,
  footer: r,
  children: c,
  variant: i = "outlined",
  padding: l = "md",
  interactive: d = !1,
  asChild: p = !1,
  className: _,
  ...b
}) {
  const w = H(), k = t ? w : void 0, h = `h${n}`, f = /* @__PURE__ */ m(Ae, { children: [
    (t || a || s) && /* @__PURE__ */ m("div", { className: B.top, children: [
      s && /* @__PURE__ */ e("span", { className: B.icon, "aria-hidden": "true", children: s }),
      /* @__PURE__ */ m("div", { className: B.head, children: [
        t && /* @__PURE__ */ e(h, { className: B.title, id: k, children: t }),
        o && /* @__PURE__ */ e("p", { className: B.description, children: o })
      ] }),
      a && /* @__PURE__ */ e("div", { className: B.action, children: a })
    ] }),
    c && /* @__PURE__ */ e("div", { className: B.body, children: c }),
    r && /* @__PURE__ */ e("div", { className: B.footer, children: r })
  ] }), g = u(
    B.root,
    B[i],
    B[`padding-${l}`],
    d && B.interactive,
    _
  );
  return p ? /* @__PURE__ */ e(ke, { className: g, "aria-labelledby": k, ...b, children: /* @__PURE__ */ e("div", { children: f }) }) : d ? /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      className: g,
      "aria-labelledby": k,
      ...b,
      children: f
    }
  ) : /* @__PURE__ */ e("div", { className: g, "aria-labelledby": k, ...b, children: f });
}
const Ds = "wk-Stepper_root", Bs = "wk-Stepper_horizontal", Ps = "wk-Stepper_vertical", As = "wk-Stepper_step", Ls = "wk-Stepper_complete", Es = "wk-Stepper_current", Ms = "wk-Stepper_marker", Fs = "wk-Stepper_text", Rs = "wk-Stepper_label", Hs = "wk-Stepper_description", V = {
  root: Ds,
  horizontal: Bs,
  vertical: Ps,
  step: As,
  complete: Ls,
  current: Es,
  marker: Ms,
  text: Fs,
  label: Rs,
  description: Hs
};
function Ir({
  steps: t,
  current: n,
  orientation: o = "horizontal",
  className: s,
  "aria-label": a
}) {
  return /* @__PURE__ */ e("ol", { className: u(V.root, V[o], s), "aria-label": a, children: t.map((r, c) => {
    const { label: i, description: l } = typeof r == "string" ? { label: r, description: void 0 } : r, d = c < n ? "complete" : c === n ? "current" : "upcoming";
    return /* @__PURE__ */ m(
      "li",
      {
        className: u(V.step, V[d]),
        "aria-current": d === "current" ? "step" : void 0,
        children: [
          /* @__PURE__ */ e("span", { className: V.marker, "aria-hidden": "true", children: d === "complete" ? /* @__PURE__ */ e(Se, {}) : c + 1 }),
          /* @__PURE__ */ m("span", { className: V.text, children: [
            /* @__PURE__ */ m("span", { className: V.label, children: [
              i,
              /* @__PURE__ */ e(ue, { children: d === "complete" ? " (completed)" : d === "current" ? " (current step)" : " (not started)" })
            ] }),
            l && /* @__PURE__ */ e("span", { className: V.description, children: l })
          ] })
        ]
      },
      c
    );
  }) });
}
const Os = "wk-Breadcrumb_root", zs = "wk-Breadcrumb_list", Vs = "wk-Breadcrumb_item", Ks = "wk-Breadcrumb_separator", js = "wk-Breadcrumb_link", qs = "wk-Breadcrumb_ellipsis", Js = "wk-Breadcrumb_current", j = {
  root: Os,
  list: zs,
  item: Vs,
  separator: Ks,
  link: js,
  ellipsis: qs,
  current: Js
}, ze = te({ isLast: !1 });
function Dr({
  children: t,
  separator: n = "/",
  maxItems: o,
  "aria-label": s = "Breadcrumb",
  className: a
}) {
  const [r, c] = L(!1), i = Us(t), l = !r && o !== void 0 && o >= 3 && i.length > o, d = l ? i.slice(i.length - (o - 2)) : [], p = l ? [i[0], Pe, ...d] : i;
  return /* @__PURE__ */ e("nav", { "aria-label": s, className: u(j.root, a), children: /* @__PURE__ */ e("ol", { className: j.list, children: p.map((_, b) => {
    const w = b === p.length - 1;
    return (
      // biome-ignore lint/suspicious/noArrayIndexKey: position IS the identity here
      /* @__PURE__ */ m("li", { className: j.item, children: [
        b > 0 && /* @__PURE__ */ e("span", { "aria-hidden": "true", className: j.separator, children: n }),
        _ === Pe ? /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: j.ellipsis,
            onClick: () => c(!0),
            "aria-label": "Show the full path",
            children: "…"
          }
        ) : /* @__PURE__ */ e(ze.Provider, { value: { isLast: w }, children: _ })
      ] }, b)
    );
  }) }) });
}
const Pe = Symbol("breadcrumb-ellipsis");
function Us(t) {
  const n = [], o = (s) => {
    if (!(s == null || s === !1 || s === !0)) {
      if (Array.isArray(s)) {
        for (const a of s) o(a);
        return;
      }
      if (qe(s) && s.type === we) {
        o(s.props.children);
        return;
      }
      n.push(s);
    }
  };
  return o(t), n;
}
function Br({ children: t, current: n, className: o, ...s }) {
  const { isLast: a } = ee(ze);
  return n ?? a ? /* @__PURE__ */ e("span", { "aria-current": "page", className: u(j.current, o), children: t }) : /* @__PURE__ */ e("a", { className: u(j.link, o), ...s, children: t });
}
const Gs = "wk-Table_wrapper", Ys = "wk-Table_scroll", Xs = "wk-Table_root", Qs = "wk-Table_caption", Ws = "wk-Table_th", Zs = "wk-Table_td", ea = "wk-Table_sortButton", ta = "wk-Table_sortIndicator", na = "wk-Table_numeric", oa = "wk-Table_captionHidden", sa = "wk-Table_row", aa = "wk-Table_interactive", ra = "wk-Table_sticky", S = {
  wrapper: Gs,
  scroll: Ys,
  root: Xs,
  caption: Qs,
  th: Ws,
  td: Zs,
  sortButton: ea,
  sortIndicator: ta,
  numeric: na,
  captionHidden: oa,
  row: sa,
  interactive: aa,
  sticky: ra
};
function Pr({
  caption: t,
  captionHidden: n,
  interactive: o,
  stickyHeader: s,
  maxBlockSize: a,
  className: r,
  children: c,
  ...i
}) {
  const l = a !== void 0;
  return /* @__PURE__ */ e(
    "div",
    {
      className: u(S.wrapper, l && S.scroll),
      style: l ? { "--wk-table-max-block": a } : void 0,
      children: /* @__PURE__ */ m(
        "table",
        {
          className: u(
            S.root,
            o && S.interactive,
            s && S.sticky,
            r
          ),
          ...i,
          children: [
            t && /* @__PURE__ */ e("caption", { className: u(S.caption, n && S.captionHidden), children: t }),
            c
          ]
        }
      )
    }
  );
}
const Ar = (t) => /* @__PURE__ */ e("thead", { ...t }), Lr = (t) => /* @__PURE__ */ e("tbody", { ...t }), Er = ({ selected: t, className: n, ...o }) => /* @__PURE__ */ e("tr", { "data-selected": t || void 0, className: u(S.row, n), ...o }), Mr = ({
  numeric: t,
  sortable: n,
  sortDirection: o,
  onSort: s,
  scope: a = "col",
  className: r,
  children: c,
  ...i
}) => {
  if (!n)
    return /* @__PURE__ */ e("th", { scope: a, className: u(S.th, t && S.numeric, r), ...i, children: c });
  const l = o ?? null;
  return /* @__PURE__ */ e(
    "th",
    {
      scope: a,
      "aria-sort": l === "asc" ? "ascending" : l === "desc" ? "descending" : "none",
      className: u(S.th, t && S.numeric, r),
      ...i,
      children: /* @__PURE__ */ m(
        "button",
        {
          type: "button",
          className: S.sortButton,
          onClick: () => s == null ? void 0 : s(l === "asc" ? "desc" : "asc"),
          children: [
            c,
            /* @__PURE__ */ e("span", { "aria-hidden": "true", className: S.sortIndicator, "data-direction": l ?? "none", children: l === "asc" ? "▲" : l === "desc" ? "▼" : "↕" })
          ]
        }
      )
    }
  );
}, Fr = ({ numeric: t, className: n, ...o }) => /* @__PURE__ */ e("td", { className: u(S.td, t && S.numeric, n), ...o }), ca = "wk-Badge_root", ia = "wk-Badge_neutral", la = "wk-Badge_accent", da = "wk-Badge_danger", ma = "wk-Badge_warn", ua = "wk-Badge_success", pa = "wk-Badge_info", ha = "wk-Badge_mono", $e = {
  root: ca,
  neutral: ia,
  accent: la,
  danger: da,
  warn: ma,
  success: ua,
  info: pa,
  mono: ha
};
function Rr({ tone: t = "neutral", mono: n = !1, className: o, ...s }) {
  return /* @__PURE__ */ e("span", { className: u($e.root, $e[t], n && $e.mono, o), ...s });
}
const wa = "wk-AppShell_root", ka = "wk-AppShell_titlebar", fa = "wk-AppShell_body", ba = "wk-AppShell_sidebar", _a = "wk-AppShell_main", ce = {
  root: wa,
  titlebar: ka,
  body: fa,
  sidebar: ba,
  main: _a
};
function Hr({
  titlebar: t,
  draggable: n = !1,
  insetWindowControls: o = !1,
  sidebar: s,
  sidebarWidth: a,
  children: r,
  mainId: c = "wk-main",
  className: i
}) {
  return /* @__PURE__ */ m(
    "div",
    {
      className: u(ce.root, i),
      style: a ? { "--wk-sidebar-w": a } : void 0,
      children: [
        t && /* @__PURE__ */ e(
          "header",
          {
            className: ce.titlebar,
            "data-inset-controls": o || void 0,
            ...n ? { "data-tauri-drag-region": "" } : {},
            children: t
          }
        ),
        /* @__PURE__ */ m("div", { className: ce.body, "data-has-sidebar": s ? "true" : void 0, children: [
          s && /* @__PURE__ */ e("nav", { className: ce.sidebar, "aria-label": "Primary", children: s }),
          /* @__PURE__ */ e("main", { id: c, className: ce.main, tabIndex: -1, children: r })
        ] })
      ]
    }
  );
}
const va = {
  1: "2xl",
  2: "xl",
  3: "lg",
  4: "md",
  5: "sm",
  6: "xs"
}, Ve = {
  xs: P.xs,
  sm: P.sm,
  md: P.md,
  lg: P.lg,
  xl: P.xl,
  "2xl": P.xxl
}, Or = D(function({ level: n, size: o, className: s, ...a }, r) {
  const c = `h${n}`, i = Ve[o ?? va[n]];
  return /* @__PURE__ */ e(c, { ref: r, className: u(P.heading, i, s), ...a });
}), zr = D(function({ as: n = "p", size: o = "md", tone: s = "default", mono: a = !1, className: r, ...c }, i) {
  return /* @__PURE__ */ e(
    n,
    {
      ref: i,
      className: u(
        P.text,
        Ve[o],
        s !== "default" && P[s],
        a && P.mono,
        r
      ),
      ...c
    }
  );
}), Vr = D(function({ external: n = !1, nofollow: o = !1, asChild: s = !1, className: a, rel: r, target: c, ...i }, l) {
  const d = s ? ke : "a", p = new Set((r ?? "").split(/\s+/).filter(Boolean));
  return n && (p.add("noopener"), p.add("noreferrer")), o && p.add("nofollow"), /* @__PURE__ */ e(
    d,
    {
      ref: l,
      className: u(P.link, a),
      target: c ?? (n ? "_blank" : void 0),
      rel: p.size ? [...p].join(" ") : void 0,
      ...i
    }
  );
}), ga = "wk-Media_image", ya = "wk-Media_skeleton", Ke = {
  image: ga,
  skeleton: ya
}, Kr = D(function({ width: n, height: o, aspectRatio: s, priority: a = !1, className: r, style: c, alt: i, ...l }, d) {
  const p = s ?? (n && o ? `${n}/${o}` : void 0);
  return /* @__PURE__ */ e(
    "img",
    {
      ref: d,
      alt: i,
      width: n,
      height: o,
      loading: a ? "eager" : "lazy",
      decoding: a ? "sync" : "async",
      fetchPriority: a ? "high" : void 0,
      className: u(Ke.image, r),
      style: { ...p ? { "--wk-image-ar": String(p) } : null, ...c },
      ...l
    }
  );
});
function jr({
  width: t = "100%",
  height: n = "1em",
  radius: o = "sm",
  className: s,
  style: a,
  ...r
}) {
  return /* @__PURE__ */ e(
    "span",
    {
      "aria-hidden": "true",
      className: u(Ke.skeleton, s),
      style: {
        width: t,
        height: n,
        borderRadius: `var(--wk-radius-${o})`,
        ...a
      },
      ...r
    }
  );
}
function Na({ data: t, nonce: n }) {
  const o = JSON.stringify(t).replace(/</g, "\\u003c");
  return /* @__PURE__ */ e("script", { type: "application/ld+json", nonce: n, dangerouslySetInnerHTML: { __html: o } });
}
const $a = "wk-Breadcrumbs_root", Ca = "wk-Breadcrumbs_list", Sa = "wk-Breadcrumbs_item", xa = "wk-Breadcrumbs_link", Ta = "wk-Breadcrumbs_sep", ie = {
  root: $a,
  list: Ca,
  item: Sa,
  link: xa,
  sep: Ta
};
function qr({ items: t, origin: n, className: o }) {
  const s = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: t.map((a, r) => ({
      "@type": "ListItem",
      position: r + 1,
      name: a.label,
      ...a.href ? { item: n ? new URL(a.href, n).toString() : a.href } : {}
    }))
  };
  return /* @__PURE__ */ m(Ae, { children: [
    /* @__PURE__ */ e("nav", { "aria-label": "Breadcrumb", className: u(ie.root, o), children: /* @__PURE__ */ e("ol", { className: ie.list, children: t.map((a, r) => {
      const c = r === t.length - 1;
      return /* @__PURE__ */ m(we, { children: [
        /* @__PURE__ */ e("li", { className: ie.item, children: a.href && !c ? /* @__PURE__ */ e("a", { className: ie.link, href: a.href, children: a.label }) : /* @__PURE__ */ e("span", { "aria-current": c ? "page" : void 0, children: a.label }) }),
        !c && /* @__PURE__ */ e("li", { className: ie.sep, "aria-hidden": "true", children: "/" })
      ] }, `${a.label}-${r}`);
    }) }) }),
    /* @__PURE__ */ e(Na, { data: s })
  ] });
}
export {
  ir as Alert,
  Hr as AppShell,
  Rr as Badge,
  Dr as Breadcrumb,
  Br as BreadcrumbItem,
  qr as Breadcrumbs,
  st as Button,
  Tr as Card,
  Se as CheckIcon,
  zt as Checkbox,
  Ee as ChevronDownIcon,
  _e as CloseIcon,
  Nr as CodeBlock,
  yr as CodeSurface,
  rr as Combobox,
  vr as CommandEmpty,
  br as CommandGroup,
  _r as CommandItem,
  fr as CommandPalette,
  Ua as ContextMenu,
  Ga as ContextMenuItem,
  Ya as ContextMenuLabel,
  Xa as ContextMenuSeparator,
  za as Dialog,
  Va as DialogClose,
  lr as EmptyState,
  Ea as Field,
  $r as FormSection,
  Or as Heading,
  Sr as HighlightText,
  Kr as Image,
  Ce as Input,
  Na as JsonLd,
  mr as Kbd,
  gr as KeyValueEditor,
  Vr as Link,
  Ka as Menu,
  ja as MenuItem,
  qa as MenuLabel,
  Ja as MenuSeparator,
  hr as NavItem,
  pr as NavList,
  Je as SearchIcon,
  cr as SegmentedControl,
  Ma as Select,
  Ra as SelectGroup,
  Fa as SelectItem,
  Ha as SelectSeparator,
  Cr as SettingRow,
  jr as Skeleton,
  xr as SkipToContent,
  dr as Spinner,
  ur as SplitPane,
  Ir as Stepper,
  Oa as Switch,
  Pr as Table,
  Za as Tabs,
  nr as TabsContent,
  er as TabsList,
  tr as TabsTrigger,
  Lr as Tbody,
  Fr as Td,
  zr as Text,
  ar as Textarea,
  Mr as Th,
  Ar as Thead,
  Pa as ThemeProvider,
  La as ThemeScript,
  or as ToastProvider,
  Wa as Tooltip,
  Qa as TooltipProvider,
  Er as Tr,
  wr as Tree,
  kr as TreeItem,
  ue as VisuallyHidden,
  u as cn,
  xe as useField,
  Aa as useTheme,
  sr as useToast
};
//# sourceMappingURL=index.js.map
