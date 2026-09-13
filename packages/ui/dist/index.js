import { jsx as e, jsxs as m, Fragment as Le } from "react/jsx-runtime";
import { useState as M, useEffect as me, useCallback as X, useMemo as j, useContext as ne, createContext as oe, forwardRef as B, useId as O, useRef as Q, Fragment as ke, useLayoutEffect as qe, isValidElement as Je } from "react";
import { Slot as fe, Slottable as Me } from "@radix-ui/react-slot";
import * as D from "@radix-ui/react-select";
import * as Ie from "@radix-ui/react-switch";
import * as De from "@radix-ui/react-checkbox";
import * as T from "@radix-ui/react-dialog";
import * as G from "@radix-ui/react-dropdown-menu";
import * as Y from "@radix-ui/react-context-menu";
import * as ee from "@radix-ui/react-tooltip";
import * as be from "@radix-ui/react-tabs";
import * as W from "@radix-ui/react-toast";
function u(...t) {
  return t.filter((n) => typeof n == "string" && n !== "").join(" ");
}
const _e = (t) => ({
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
}), xe = (t) => /* @__PURE__ */ e("svg", { ..._e(t), children: /* @__PURE__ */ e("path", { d: "M3 8.5 6.5 12 13 4.5" }) }), Ee = (t) => /* @__PURE__ */ e("svg", { ..._e(t), children: /* @__PURE__ */ e("path", { d: "m4 6 4 4 4-4" }) }), ve = (t) => /* @__PURE__ */ e("svg", { ..._e(t), children: /* @__PURE__ */ e("path", { d: "M4 4l8 8M12 4l-8 8" }) }), Ue = (t) => /* @__PURE__ */ m("svg", { ..._e(t), children: [
  /* @__PURE__ */ e("circle", { cx: "7", cy: "7", r: "4.25" }),
  /* @__PURE__ */ e("path", { d: "m10.25 10.25 3.25 3.25" })
] }), Fe = oe(null);
function Ge(t) {
  if (!t || typeof window > "u") return {};
  try {
    return JSON.parse(window.localStorage.getItem(t) ?? "{}");
  } catch {
    return {};
  }
}
function Aa({
  children: t,
  theme: n,
  defaultTheme: o = "system",
  defaultDensity: s = "normal",
  storageKey: a = "wertkit-theme",
  target: r = "root"
}) {
  const [c, i] = M(o), [l, d] = M(s), [h, _] = M(!1), [b, k] = M(null);
  me(() => {
    const v = Ge(a);
    v.theme && i(v.theme), v.density && d(v.density);
  }, [a]);
  const w = n ?? c;
  me(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function") return;
    const v = window.matchMedia("(prefers-color-scheme: dark)"), y = () => _(v.matches);
    return y(), v.addEventListener("change", y), () => v.removeEventListener("change", y);
  }, []);
  const p = w === "system" ? h ? "dark" : "light" : w;
  me(() => {
    const v = r === "self" ? b : document.documentElement;
    v && (v.setAttribute("data-theme", p), v.setAttribute("data-density", l));
  }, [p, l, r, b]), me(() => {
    if (!(!a || typeof window > "u"))
      try {
        window.localStorage.setItem(a, JSON.stringify({ theme: w, density: l }));
      } catch {
      }
  }, [w, l, a]);
  const f = X((v) => i(v), []), g = X((v) => d(v), []), N = j(
    () => ({ theme: w, resolvedTheme: p, setTheme: f, density: l, setDensity: g }),
    [w, p, f, l, g]
  );
  return /* @__PURE__ */ e(Fe.Provider, { value: N, children: r === "self" ? /* @__PURE__ */ e("div", { ref: k, children: t }) : t });
}
function La() {
  const t = ne(Fe);
  if (!t) throw new Error("useTheme must be used inside <ThemeProvider>");
  return t;
}
function Ma({
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
const Ye = "wk-Button_root", Xe = "wk-Button_sm", Qe = "wk-Button_md", We = "wk-Button_lg", Ze = "wk-Button_iconOnly", et = "wk-Button_primary", tt = "wk-Button_secondary", nt = "wk-Button_ghost", ot = "wk-Button_danger", st = "wk-Button_spinner", se = {
  root: Ye,
  sm: Xe,
  md: Qe,
  lg: We,
  iconOnly: Ze,
  primary: et,
  secondary: tt,
  ghost: nt,
  danger: ot,
  spinner: st,
  "wk-spin": "wk-Button_wk-spin"
}, at = B(function({
  variant: n = "secondary",
  size: o = "md",
  iconOnly: s = !1,
  loading: a = !1,
  startIcon: r,
  endIcon: c,
  asChild: i = !1,
  className: l,
  children: d,
  disabled: h,
  type: _,
  ...b
}, k) {
  return /* @__PURE__ */ m(
    i ? fe : "button",
    {
      ref: k,
      type: i ? void 0 : _ ?? "button",
      disabled: h || a,
      "data-loading": a || void 0,
      className: u(
        se.root,
        se[n],
        se[o],
        s && se.iconOnly,
        l
      ),
      ...b,
      children: [
        a ? /* @__PURE__ */ e("span", { className: se.spinner, "aria-hidden": "true" }) : r,
        i ? /* @__PURE__ */ e(Me, { children: d }) : d,
        !a && c
      ]
    }
  );
}), rt = "wk-Field_root", ct = "wk-Field_label", it = "wk-Field_required", lt = "wk-Field_hint", dt = "wk-Field_error", ae = {
  root: rt,
  label: ct,
  required: it,
  hint: lt,
  error: dt
}, Re = oe(null), Te = () => ne(Re);
function Ea({ label: t, hint: n, error: o, required: s, children: a, className: r }) {
  const c = O(), i = `${c}-input`, l = `${c}-hint`, d = `${c}-error`, h = !!o, _ = [o ? d : null, n ? l : null].filter(Boolean).join(" ") || void 0;
  return /* @__PURE__ */ e(Re.Provider, { value: { inputId: i, describedBy: _, invalid: h }, children: /* @__PURE__ */ m("div", { className: u(ae.root, r), children: [
    t && /* @__PURE__ */ m("label", { className: ae.label, htmlFor: i, children: [
      t,
      s && /* @__PURE__ */ e("span", { className: ae.required, "aria-hidden": "true", children: "*" })
    ] }),
    a,
    o ? /* @__PURE__ */ e("p", { className: ae.error, id: d, role: "alert", children: o }) : n && /* @__PURE__ */ e("p", { className: ae.hint, id: l, children: n })
  ] }) });
}
const mt = "wk-Input_root", ut = "wk-Input_mono", ht = "wk-Input_shell", pt = "wk-Input_slot", wt = "wk-Input_start", kt = "wk-Input_end", ft = "wk-Input_hasStart", bt = "wk-Input_hasEnd", _t = "wk-Input_sm", vt = "wk-Input_md", gt = "wk-Input_lg", F = {
  root: mt,
  mono: ut,
  shell: ht,
  slot: pt,
  start: wt,
  end: kt,
  hasStart: ft,
  hasEnd: bt,
  sm: _t,
  md: vt,
  lg: gt
}, Se = B(function({
  size: n = "md",
  invalid: o,
  mono: s = !1,
  startSlot: a,
  endSlot: r,
  className: c,
  id: i,
  "aria-describedby": l,
  ...d
}, h) {
  const _ = Te(), b = o ?? (_ == null ? void 0 : _.invalid) ?? !1, k = /* @__PURE__ */ e(
    "input",
    {
      ref: h,
      id: i ?? (_ == null ? void 0 : _.inputId),
      "aria-invalid": b || void 0,
      "aria-describedby": l ?? (_ == null ? void 0 : _.describedBy),
      className: u(
        F.root,
        F[n],
        s && F.mono,
        a && F.hasStart,
        r && F.hasEnd,
        !a && !r && c
      ),
      ...d
    }
  );
  return !a && !r ? k : /* @__PURE__ */ m("span", { className: u(F.shell, c), "data-invalid": b || void 0, children: [
    a && /* @__PURE__ */ e("span", { className: u(F.slot, F.start), "aria-hidden": "true", children: a }),
    k,
    r && /* @__PURE__ */ e("span", { className: u(F.slot, F.end), children: r })
  ] });
}), yt = "wk-Select_trigger", Nt = "wk-Select_sm", $t = "wk-Select_md", Ct = "wk-Select_lg", St = "wk-Select_icon", xt = "wk-Select_content", Tt = "wk-Select_viewport", It = "wk-Select_item", Dt = "wk-Select_itemIndicator", Bt = "wk-Select_label", Pt = "wk-Select_separator", H = {
  trigger: yt,
  sm: Nt,
  md: $t,
  lg: Ct,
  icon: St,
  content: xt,
  viewport: Tt,
  item: It,
  itemIndicator: Dt,
  label: Bt,
  separator: Pt
};
function Fa({
  placeholder: t,
  size: n = "md",
  children: o,
  className: s,
  id: a,
  "aria-label": r,
  ...c
}) {
  const i = Te();
  return /* @__PURE__ */ m(D.Root, { ...c, children: [
    /* @__PURE__ */ m(
      D.Trigger,
      {
        id: a ?? (i == null ? void 0 : i.inputId),
        "aria-label": r,
        "aria-invalid": (i == null ? void 0 : i.invalid) || void 0,
        "aria-describedby": i == null ? void 0 : i.describedBy,
        className: u(H.trigger, H[n], s),
        children: [
          /* @__PURE__ */ e(D.Value, { placeholder: t }),
          /* @__PURE__ */ e(D.Icon, { className: H.icon, children: /* @__PURE__ */ e(Ee, {}) })
        ]
      }
    ),
    /* @__PURE__ */ e(D.Portal, { children: /* @__PURE__ */ e(D.Content, { className: H.content, position: "popper", sideOffset: 4, children: /* @__PURE__ */ e(D.Viewport, { className: H.viewport, children: o }) }) })
  ] });
}
const Ra = B(
  function({ className: n, children: o, ...s }, a) {
    return /* @__PURE__ */ m(D.Item, { ref: a, className: u(H.item, n), ...s, children: [
      /* @__PURE__ */ e(D.ItemText, { children: o }),
      /* @__PURE__ */ e(D.ItemIndicator, { className: H.itemIndicator, children: /* @__PURE__ */ e(xe, {}) })
    ] });
  }
);
function Ha({ label: t, children: n }) {
  return /* @__PURE__ */ m(D.Group, { children: [
    /* @__PURE__ */ e(D.Label, { className: H.label, children: t }),
    n
  ] });
}
function Oa() {
  return /* @__PURE__ */ e(D.Separator, { className: H.separator });
}
const At = "wk-Switch_wrapper", Lt = "wk-Switch_root", Mt = "wk-Switch_thumb", Et = "wk-Switch_label", we = {
  wrapper: At,
  root: Lt,
  thumb: Mt,
  label: Et
}, za = B(function({ label: n, className: o, id: s, ...a }, r) {
  const c = O(), i = s ?? c, l = /* @__PURE__ */ e(Ie.Root, { ref: r, id: i, className: u(we.root, o), ...a, children: /* @__PURE__ */ e(Ie.Thumb, { className: we.thumb }) });
  return n ? /* @__PURE__ */ m("span", { className: we.wrapper, children: [
    l,
    /* @__PURE__ */ e("label", { className: we.label, htmlFor: i, children: n })
  ] }) : l;
}), Ft = "wk-Checkbox_wrapper", Rt = "wk-Checkbox_root", Ht = "wk-Checkbox_indicator", Ot = "wk-Checkbox_dash", zt = "wk-Checkbox_label", re = {
  wrapper: Ft,
  root: Rt,
  indicator: Ht,
  dash: Ot,
  label: zt
}, Vt = B(function({ label: n, className: o, id: s, ...a }, r) {
  const c = O(), i = s ?? c, l = /* @__PURE__ */ e(De.Root, { ref: r, id: i, className: u(re.root, o), ...a, children: /* @__PURE__ */ e(De.Indicator, { className: re.indicator, children: a.checked === "indeterminate" ? /* @__PURE__ */ e("span", { className: re.dash }) : /* @__PURE__ */ e(xe, {}) }) });
  return n ? /* @__PURE__ */ m("span", { className: re.wrapper, children: [
    l,
    /* @__PURE__ */ e("label", { className: re.label, htmlFor: i, children: n })
  ] }) : l;
}), Kt = "wk-Semantic_heading", jt = "wk-Semantic_text", qt = "wk-Semantic_muted", Jt = "wk-Semantic_subtle", Ut = "wk-Semantic_danger", Gt = "wk-Semantic_mono", Yt = "wk-Semantic_xs", Xt = "wk-Semantic_sm", Qt = "wk-Semantic_md", Wt = "wk-Semantic_lg", Zt = "wk-Semantic_xl", en = "wk-Semantic_xxl", tn = "wk-Semantic_link", nn = "wk-Semantic_visuallyHidden", A = {
  heading: Kt,
  text: jt,
  muted: qt,
  subtle: Jt,
  danger: Ut,
  mono: Gt,
  xs: Yt,
  sm: Xt,
  md: Qt,
  lg: Wt,
  xl: Zt,
  xxl: en,
  link: tn,
  visuallyHidden: nn
};
function pe({ className: t, ...n }) {
  return /* @__PURE__ */ e("span", { className: u(A.visuallyHidden, t), ...n });
}
const on = "wk-Dialog_overlay", sn = "wk-Dialog_content", an = "wk-Dialog_header", rn = "wk-Dialog_headings", cn = "wk-Dialog_title", ln = "wk-Dialog_description", dn = "wk-Dialog_close", mn = "wk-Dialog_footer", z = {
  overlay: on,
  content: sn,
  header: an,
  headings: rn,
  title: cn,
  description: ln,
  close: dn,
  footer: mn
};
function Va({
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
  return /* @__PURE__ */ m(T.Root, { ...d, children: [
    r && /* @__PURE__ */ e(T.Trigger, { asChild: !0, children: r }),
    /* @__PURE__ */ m(T.Portal, { children: [
      /* @__PURE__ */ e(T.Overlay, { className: z.overlay }),
      /* @__PURE__ */ m(
        T.Content,
        {
          className: u(z.content, l),
          style: c ? { "--wk-dialog-w": c } : void 0,
          children: [
            /* @__PURE__ */ m("div", { className: z.header, children: [
              /* @__PURE__ */ m("div", { className: z.headings, children: [
                n ? /* @__PURE__ */ e(T.Title, { asChild: !0, children: /* @__PURE__ */ e(pe, { children: t }) }) : /* @__PURE__ */ e(T.Title, { className: z.title, children: t }),
                o && /* @__PURE__ */ e(T.Description, { className: z.description, children: o })
              ] }),
              i && /* @__PURE__ */ e(T.Close, { className: z.close, "aria-label": "Close", children: /* @__PURE__ */ e(ve, {}) })
            ] }),
            s,
            a && /* @__PURE__ */ e("div", { className: z.footer, children: a })
          ]
        }
      )
    ] })
  ] });
}
const Ka = T.Close, un = "wk-Menu_content", hn = "wk-Menu_item", pn = "wk-Menu_danger", wn = "wk-Menu_label", kn = "wk-Menu_separator", fn = "wk-Menu_shortcut", E = {
  content: un,
  item: hn,
  danger: pn,
  label: wn,
  separator: kn,
  shortcut: fn
};
function ja({ trigger: t, children: n, align: o = "start", side: s = "bottom", className: a, ...r }) {
  return /* @__PURE__ */ m(G.Root, { ...r, children: [
    /* @__PURE__ */ e(G.Trigger, { asChild: !0, children: t }),
    /* @__PURE__ */ e(G.Portal, { children: /* @__PURE__ */ e(
      G.Content,
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
const qa = B(function({ tone: n = "default", shortcut: o, className: s, children: a, ...r }, c) {
  return /* @__PURE__ */ m(
    G.Item,
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
function Ja({ children: t }) {
  return /* @__PURE__ */ e(G.Label, { className: E.label, children: t });
}
function Ua() {
  return /* @__PURE__ */ e(G.Separator, { className: E.separator });
}
function Ga({ trigger: t, children: n, className: o, ...s }) {
  return /* @__PURE__ */ m(Y.Root, { ...s, children: [
    /* @__PURE__ */ e(Y.Trigger, { asChild: !0, children: t }),
    /* @__PURE__ */ e(Y.Portal, { children: /* @__PURE__ */ e(
      Y.Content,
      {
        className: u(E.content, o),
        collisionPadding: 8,
        children: n
      }
    ) })
  ] });
}
const Ya = B(
  function({ tone: n = "default", shortcut: o, className: s, children: a, ...r }, c) {
    return /* @__PURE__ */ m(
      Y.Item,
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
function Xa({ children: t }) {
  return /* @__PURE__ */ e(Y.Label, { className: E.label, children: t });
}
function Qa() {
  return /* @__PURE__ */ e(Y.Separator, { className: E.separator });
}
const bn = "wk-Tooltip_content", _n = "wk-Tooltip_arrow", Be = {
  content: bn,
  arrow: _n
}, Wa = ee.Provider;
function Za({ content: t, children: n, side: o = "top", delayDuration: s, className: a }) {
  return /* @__PURE__ */ m(ee.Root, { delayDuration: s, children: [
    /* @__PURE__ */ e(ee.Trigger, { asChild: !0, children: n }),
    /* @__PURE__ */ e(ee.Portal, { children: /* @__PURE__ */ m(
      ee.Content,
      {
        className: u(Be.content, a),
        side: o,
        sideOffset: 6,
        collisionPadding: 8,
        children: [
          t,
          /* @__PURE__ */ e(ee.Arrow, { className: Be.arrow, width: 10, height: 5 })
        ]
      }
    ) })
  ] });
}
const vn = "wk-Tabs_root", gn = "wk-Tabs_list", yn = "wk-Tabs_trigger", Nn = "wk-Tabs_content", ge = {
  root: vn,
  list: gn,
  trigger: yn,
  content: Nn
};
function er({ className: t, ...n }) {
  return /* @__PURE__ */ e(be.Root, { className: u(ge.root, t), ...n });
}
function tr({ className: t, ...n }) {
  return /* @__PURE__ */ e(be.List, { className: u(ge.list, t), ...n });
}
const nr = B(
  function({ className: n, ...o }, s) {
    return /* @__PURE__ */ e(be.Trigger, { ref: s, className: u(ge.trigger, n), ...o });
  }
);
function or({ className: t, ...n }) {
  return /* @__PURE__ */ e(be.Content, { className: u(ge.content, t), ...n });
}
const $n = "wk-Toast_viewport", Cn = "wk-Toast_root", Sn = "wk-Toast_body", xn = "wk-Toast_title", Tn = "wk-Toast_description", In = "wk-Toast_close", Z = {
  viewport: $n,
  root: Cn,
  body: Sn,
  title: xn,
  description: Tn,
  close: In
}, He = oe(null);
function sr({ children: t, swipeDirection: n = "right" }) {
  const [o, s] = M([]), a = Q(1), r = X((l) => {
    s((d) => d.filter((h) => h.id !== l));
  }, []), c = X((l) => {
    const d = a.current++;
    s((h) => [...h, { ...l, id: d }]);
  }, []), i = j(() => ({ toast: c, dismiss: r }), [c, r]);
  return /* @__PURE__ */ e(He.Provider, { value: i, children: /* @__PURE__ */ m(W.Provider, { swipeDirection: n, children: [
    t,
    o.map((l) => /* @__PURE__ */ m(
      W.Root,
      {
        className: Z.root,
        "data-tone": l.tone ?? "neutral",
        duration: l.duration ?? (l.tone === "danger" ? 1 / 0 : 5e3),
        type: l.tone === "danger" ? "foreground" : "background",
        onOpenChange: (d) => {
          d || r(l.id);
        },
        children: [
          /* @__PURE__ */ m("div", { className: Z.body, children: [
            /* @__PURE__ */ e(W.Title, { className: Z.title, children: l.title }),
            l.description && /* @__PURE__ */ e(W.Description, { className: Z.description, children: l.description })
          ] }),
          /* @__PURE__ */ e(W.Close, { className: Z.close, "aria-label": "Dismiss", children: /* @__PURE__ */ e(ve, {}) })
        ]
      },
      l.id
    )),
    /* @__PURE__ */ e(W.Viewport, { className: Z.viewport })
  ] }) });
}
function ar() {
  const t = ne(He);
  if (!t) throw new Error("useToast must be used inside <ToastProvider>");
  return t;
}
const Dn = "wk-Textarea_root", Bn = "wk-Textarea_mono", Pn = "wk-Textarea_noResize", ye = {
  root: Dn,
  mono: Bn,
  noResize: Pn
}, rr = B(function({ invalid: n, mono: o = !1, resizable: s = !0, className: a, id: r, rows: c = 4, ...i }, l) {
  const d = Te(), h = n ?? (d == null ? void 0 : d.invalid) ?? !1;
  return /* @__PURE__ */ e(
    "textarea",
    {
      ref: l,
      id: r ?? (d == null ? void 0 : d.inputId),
      rows: c,
      "aria-invalid": h || void 0,
      "aria-describedby": d == null ? void 0 : d.describedBy,
      className: u(ye.root, o && ye.mono, !s && ye.noResize, a),
      ...i
    }
  );
}), An = "wk-Combobox_wrap", Ln = "wk-Combobox_list", Mn = "wk-Combobox_option", En = "wk-Combobox_label", Fn = "wk-Combobox_mono", Rn = "wk-Combobox_hint", Hn = "wk-Combobox_empty", J = {
  wrap: An,
  list: Ln,
  option: Mn,
  label: En,
  mono: Fn,
  hint: Rn,
  empty: Hn
}, On = (t) => t.value ?? t.label;
function cr({
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
  const h = O(), [_, b] = M(!1), [k, w] = M(-1), p = Q(null), f = j(() => _ ? o(t) : [], [_, o, t]), g = _ && (f.length > 0 || !!a), N = k >= 0 && f[k] ? `${h}-${k}` : void 0, v = (y) => {
    const S = f[y];
    S && (n(On(S)), b(!1), w(-1));
  };
  return /* @__PURE__ */ m("div", { className: J.wrap, children: [
    /* @__PURE__ */ e(
      Se,
      {
        role: "combobox",
        "aria-expanded": g,
        "aria-controls": g ? h : void 0,
        "aria-activedescendant": N,
        "aria-autocomplete": "list",
        autoComplete: "off",
        value: t,
        mono: r,
        className: c,
        onChange: (y) => {
          n(y.target.value), b(!0), w(-1);
        },
        onFocus: () => b(!0),
        onBlur: (y) => {
          p.current = setTimeout(() => b(!1), 120), l == null || l(y);
        },
        onKeyDown: (y) => {
          i == null || i(y), !y.defaultPrevented && (y.key === "ArrowDown" && f.length ? (y.preventDefault(), b(!0), w((S) => (S + 1) % f.length)) : y.key === "ArrowUp" && f.length ? (y.preventDefault(), w((S) => S <= 0 ? f.length - 1 : S - 1)) : y.key === "Enter" ? k >= 0 ? (y.preventDefault(), v(k)) : s == null || s() : y.key === "Tab" && k >= 0 ? (y.preventDefault(), v(k)) : y.key === "Escape" && g && (y.preventDefault(), b(!1), w(-1)));
        },
        ...d
      }
    ),
    g && /* @__PURE__ */ e("ul", { className: J.list, id: h, role: "listbox", children: f.length === 0 ? /* @__PURE__ */ e("li", { className: J.empty, children: a }) : f.map((y, S) => /* @__PURE__ */ m(
      "li",
      {
        id: `${h}-${S}`,
        role: "option",
        "aria-selected": S === k,
        "data-active": S === k,
        className: J.option,
        onMouseEnter: () => w(S),
        onMouseDown: ($) => {
          $.preventDefault(), p.current && clearTimeout(p.current), v(S);
        },
        children: [
          /* @__PURE__ */ e("span", { className: u(J.label, r && J.mono), children: y.label }),
          y.hint && /* @__PURE__ */ e("span", { className: J.hint, children: y.hint })
        ]
      },
      `${y.label}-${S}`
    )) })
  ] });
}
const zn = "wk-SegmentedControl_root", Vn = "wk-SegmentedControl_option", Kn = "wk-SegmentedControl_fluid", Ne = {
  root: zn,
  option: Vn,
  fluid: Kn
};
function ir({
  options: t,
  value: n,
  onValueChange: o,
  fluid: s = !1,
  className: a,
  ...r
}) {
  const c = O(), i = Q(null), l = X(
    (d) => {
      var k, w;
      const h = t.filter((p) => !p.disabled);
      if (!h.length) return;
      const _ = h.findIndex((p) => p.value === n), b = h[(_ + d + h.length) % h.length];
      o(b.value), (w = (k = i.current) == null ? void 0 : k.querySelector(`[data-value="${CSS.escape(b.value)}"]`)) == null || w.focus();
    },
    [t, n, o]
  );
  return /* @__PURE__ */ e(
    "div",
    {
      ref: i,
      role: "radiogroup",
      className: u(Ne.root, s && Ne.fluid, a),
      onKeyDown: (d) => {
        (d.key === "ArrowRight" || d.key === "ArrowDown") && (d.preventDefault(), l(1)), (d.key === "ArrowLeft" || d.key === "ArrowUp") && (d.preventDefault(), l(-1));
      },
      ...r,
      children: t.map((d) => {
        const h = d.value === n;
        return /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            role: "radio",
            id: `${c}-${d.value}`,
            "data-value": d.value,
            "aria-checked": h,
            "data-disabled": d.disabled || void 0,
            disabled: d.disabled,
            tabIndex: h ? 0 : -1,
            className: Ne.option,
            onClick: () => !d.disabled && o(d.value),
            children: d.label
          },
          d.value
        );
      })
    }
  );
}
const jn = "wk-Alert_root", qn = "wk-Alert_info", Jn = "wk-Alert_success", Un = "wk-Alert_warn", Gn = "wk-Alert_danger", Yn = "wk-Alert_icon", Xn = "wk-Alert_title", Qn = "wk-Alert_body", Wn = "wk-Alert_actions", Zn = "wk-Alert_close", eo = "wk-Alert_banner", V = {
  root: jn,
  info: qn,
  success: Jn,
  warn: Un,
  danger: Gn,
  icon: Yn,
  title: Xn,
  body: Qn,
  actions: Wn,
  close: Zn,
  banner: eo
};
function lr({
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
      className: u(V.root, V[t], c && V.banner, i),
      children: [
        s && /* @__PURE__ */ e("span", { className: V.icon, "aria-hidden": "true", children: s }),
        /* @__PURE__ */ m("div", { className: V.body, children: [
          n && /* @__PURE__ */ e("span", { className: V.title, children: n }),
          o,
          a && /* @__PURE__ */ e("div", { className: V.actions, children: a })
        ] }),
        r && /* @__PURE__ */ e("button", { type: "button", className: V.close, onClick: r, "aria-label": "Dismiss", children: /* @__PURE__ */ e(ve, {}) })
      ]
    }
  );
}
const to = "wk-EmptyState_root", no = "wk-EmptyState_icon", oo = "wk-EmptyState_title", so = "wk-EmptyState_description", ao = "wk-EmptyState_actions", ce = {
  root: to,
  icon: no,
  title: oo,
  description: so,
  actions: ao
};
function dr({
  icon: t,
  title: n,
  description: o,
  action: s,
  headingLevel: a = 2,
  className: r
}) {
  const c = `h${a}`;
  return /* @__PURE__ */ m("div", { className: u(ce.root, r), children: [
    t && /* @__PURE__ */ e("span", { className: ce.icon, "aria-hidden": "true", children: t }),
    /* @__PURE__ */ e(c, { className: ce.title, children: n }),
    o && /* @__PURE__ */ e("p", { className: ce.description, children: o }),
    s && /* @__PURE__ */ e("div", { className: ce.actions, children: s })
  ] });
}
const ro = "wk-Spinner_root", co = "wk-Spinner_sm", io = "wk-Spinner_md", lo = "wk-Spinner_lg", Pe = {
  root: ro,
  "wk-spinner-rotate": "wk-Spinner_wk-spinner-rotate",
  sm: co,
  md: io,
  lg: lo
};
function mr({ size: t = "md", label: n = "Loading", className: o }) {
  return /* @__PURE__ */ m("span", { role: "status", children: [
    /* @__PURE__ */ e("span", { className: u(Pe.root, Pe[t], o), "aria-hidden": "true" }),
    n && /* @__PURE__ */ e(pe, { children: n })
  ] });
}
const mo = "wk-Kbd_root", uo = "wk-Kbd_group", $e = {
  root: mo,
  group: uo
};
function ur({ keys: t, className: n, children: o, ...s }) {
  return t != null && t.length ? /* @__PURE__ */ e("span", { className: $e.group, ...s, children: t.map((a, r) => /* @__PURE__ */ e(ke, { children: /* @__PURE__ */ e("kbd", { className: u($e.root, n), children: a }) }, `${a}-${r}`)) }) : /* @__PURE__ */ e("kbd", { className: u($e.root, n), ...s, children: o });
}
const ho = "wk-SplitPane_root", po = "wk-SplitPane_horizontal", wo = "wk-SplitPane_vertical", ko = "wk-SplitPane_pane", fo = "wk-SplitPane_handle", ie = {
  root: ho,
  horizontal: po,
  vertical: wo,
  pane: ko,
  handle: fo
};
function hr({
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
  const d = Q(null), [h, _] = M(!1), b = n === "horizontal", k = X(
    (p) => {
      var N;
      const f = (N = d.current) == null ? void 0 : N.getBoundingClientRect(), g = f ? (b ? f.width : f.height) - a : r;
      return Math.max(a, Math.min(p, Math.min(r, g)));
    },
    [a, r, b]
  ), w = (p) => s(k(o + p));
  return /* @__PURE__ */ m("div", { ref: d, className: u(ie.root, ie[n], i), children: [
    /* @__PURE__ */ e("div", { className: ie.pane, style: { [b ? "width" : "height"]: o, flex: "none" }, children: t[0] }),
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
        "data-dragging": h || void 0,
        className: ie.handle,
        onDoubleClick: () => c !== void 0 && s(c),
        onPointerDown: (p) => {
          p.currentTarget.setPointerCapture(p.pointerId), _(!0);
        },
        onPointerMove: (p) => {
          var g;
          if (!h) return;
          const f = (g = d.current) == null ? void 0 : g.getBoundingClientRect();
          f && s(k(b ? p.clientX - f.left : p.clientY - f.top));
        },
        onPointerUp: (p) => {
          p.currentTarget.releasePointerCapture(p.pointerId), _(!1);
        },
        onKeyDown: (p) => {
          const f = p.shiftKey ? 40 : 10;
          p.key === (b ? "ArrowLeft" : "ArrowUp") && (p.preventDefault(), w(-f)), p.key === (b ? "ArrowRight" : "ArrowDown") && (p.preventDefault(), w(f)), p.key === "Home" && c !== void 0 && (p.preventDefault(), s(c));
        }
      }
    ),
    /* @__PURE__ */ e("div", { className: u(ie.pane), style: { flex: 1 }, children: t[1] })
  ] });
}
const bo = "wk-NavList_list", _o = "wk-NavList_item", vo = "wk-NavList_control", go = "wk-NavList_icon", yo = "wk-NavList_label", No = "wk-NavList_badge", te = {
  list: bo,
  item: _o,
  control: vo,
  icon: go,
  label: yo,
  badge: No
};
function pr({ children: t, className: n, ...o }) {
  return /* @__PURE__ */ e("ul", { className: u(te.list, n), ...o, children: t });
}
function wr({
  children: t,
  current: n = !1,
  icon: o,
  badge: s,
  onSelect: a,
  asChild: r = !1,
  disabled: c = !1,
  className: i
}) {
  const l = r ? fe : "button";
  return /* @__PURE__ */ e("li", { className: te.item, children: /* @__PURE__ */ m(
    l,
    {
      ...r ? {} : { type: "button", disabled: c },
      className: u(te.control, i),
      "aria-current": n ? "page" : void 0,
      "data-current": n || void 0,
      onClick: a,
      children: [
        o && /* @__PURE__ */ e("span", { className: te.icon, "aria-hidden": "true", children: o }),
        r ? /* @__PURE__ */ e(Me, { children: t }) : /* @__PURE__ */ e("span", { className: te.label, children: t }),
        s && /* @__PURE__ */ e("span", { className: te.badge, children: s })
      ]
    }
  ) });
}
const $o = "wk-Tree_root", Co = "wk-Tree_item", So = "wk-Tree_twisty", xo = "wk-Tree_spacer", To = "wk-Tree_label", ue = {
  root: $o,
  item: Co,
  twisty: So,
  spacer: xo,
  label: To
}, Oe = oe(null);
function kr({ children: t, onActivate: n, onToggle: o, className: s, ...a }) {
  const r = Q(null), [c, i] = M(null), l = Q([]);
  l.current = [];
  const d = X((k) => {
    l.current.push(k);
  }, []), h = (k) => {
    var w, p;
    i(k), (p = (w = r.current) == null ? void 0 : w.querySelector(`[data-tree-id="${CSS.escape(k)}"]`)) == null || p.focus();
  }, _ = (k) => {
    var N;
    const w = l.current;
    if (!w.length) return;
    const p = c ? w.indexOf(c) : -1, f = c ? (N = r.current) == null ? void 0 : N.querySelector(`[data-tree-id="${CSS.escape(c)}"]`) : null, g = f == null ? void 0 : f.getAttribute("aria-expanded");
    switch (k.key) {
      case "ArrowDown":
        k.preventDefault(), h(w[Math.min(p + 1, w.length - 1)]);
        break;
      case "ArrowUp":
        k.preventDefault(), h(w[Math.max(p - 1, 0)]);
        break;
      case "Home":
        k.preventDefault(), h(w[0]);
        break;
      case "End":
        k.preventDefault(), h(w[w.length - 1]);
        break;
      case "ArrowRight":
        g === "false" && c ? (k.preventDefault(), o == null || o(c, !0)) : g === "true" && (k.preventDefault(), h(w[Math.min(p + 1, w.length - 1)]));
        break;
      case "ArrowLeft":
        g === "true" && c ? (k.preventDefault(), o == null || o(c, !1)) : p > 0 && (k.preventDefault(), h(w[p - 1]));
        break;
      case "Enter":
      case " ":
        c && (k.preventDefault(), n == null || n(c));
        break;
    }
  }, b = j(
    () => ({ activeId: c, setActiveId: i, register: d }),
    [c, d]
  );
  return /* @__PURE__ */ e(Oe.Provider, { value: b, children: /* @__PURE__ */ e(
    "div",
    {
      ref: r,
      role: "tree",
      className: u(ue.root, s),
      onKeyDown: _,
      ...a,
      children: t
    }
  ) });
}
function fr({
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
  posInSet: h,
  setSize: _,
  indent: b = 14,
  className: k
}) {
  const w = ne(Oe);
  if (!w) throw new Error("TreeItem must be used inside <Tree>");
  w.register(t);
  const p = w.activeId === t || w.activeId === null && n === 1 && h === 1;
  return /* @__PURE__ */ m(
    "div",
    {
      role: "treeitem",
      "data-tree-id": t,
      "aria-level": n,
      "aria-expanded": s ? !!a : void 0,
      "aria-selected": r,
      "aria-posinset": h,
      "aria-setsize": _,
      tabIndex: p ? 0 : -1,
      className: u(ue.item, k),
      style: { paddingInlineStart: (n - 1) * b + 4 },
      onFocus: () => w.setActiveId(t),
      onClick: () => {
        w.setActiveId(t), l == null || l(t);
      },
      children: [
        s ? /* @__PURE__ */ e(
          "span",
          {
            className: ue.twisty,
            "data-expanded": !!a,
            onClick: (f) => {
              f.stopPropagation(), d == null || d(t, !a);
            },
            children: /* @__PURE__ */ e(Ee, {})
          }
        ) : /* @__PURE__ */ e("span", { className: ue.spacer }),
        c,
        /* @__PURE__ */ e("span", { className: ue.label, children: o }),
        i
      ]
    }
  );
}
const Io = "wk-CommandPalette_overlay", Do = "wk-CommandPalette_content", Bo = "wk-CommandPalette_search", Po = "wk-CommandPalette_searchIcon", Ao = "wk-CommandPalette_input", Lo = "wk-CommandPalette_list", Mo = "wk-CommandPalette_group", Eo = "wk-CommandPalette_heading", Fo = "wk-CommandPalette_item", Ro = "wk-CommandPalette_itemIcon", Ho = "wk-CommandPalette_itemLabel", Oo = "wk-CommandPalette_itemHint", zo = "wk-CommandPalette_empty", Vo = "wk-CommandPalette_footer", I = {
  overlay: Io,
  content: Do,
  search: Bo,
  searchIcon: Po,
  input: Ao,
  list: Lo,
  group: Mo,
  heading: Eo,
  item: Fo,
  itemIcon: Ro,
  itemLabel: Ho,
  itemHint: Oo,
  empty: zo,
  footer: Vo
}, ze = oe(null);
function br({
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
  const h = O(), [_, b] = M(0), [k, w] = M([]), p = Q(/* @__PURE__ */ new Map()), f = j(
    () => ($, C) => {
      p.current.set($, C);
    },
    []
  ), g = j(
    () => ($) => (w((C) => C.includes($) ? C : [...C, $]), () => {
      w((C) => C.filter((q) => q !== $)), p.current.delete($);
    }),
    []
  );
  me(() => b(0), [o]);
  const N = k.length, v = k[_] ?? k[0] ?? null, y = j(
    () => ($) => w((C) => {
      const q = C.indexOf($);
      return q >= 0 && b(q), C;
    }),
    []
  ), S = j(
    () => ({ activeId: v, register: f, attach: g, listId: h, highlight: y }),
    [v, f, g, h, y]
  );
  return /* @__PURE__ */ e(T.Root, { open: t, onOpenChange: n, children: /* @__PURE__ */ m(T.Portal, { children: [
    /* @__PURE__ */ e(T.Overlay, { className: I.overlay }),
    /* @__PURE__ */ m(T.Content, { className: u(I.content, l), children: [
      /* @__PURE__ */ e(T.Title, { asChild: !0, children: /* @__PURE__ */ e(pe, { children: c }) }),
      /* @__PURE__ */ m(ze.Provider, { value: S, children: [
        /* @__PURE__ */ m("div", { className: I.search, children: [
          /* @__PURE__ */ e("span", { className: I.searchIcon, "aria-hidden": "true", children: d ?? /* @__PURE__ */ e(Ue, {}) }),
          /* @__PURE__ */ e(
            "input",
            {
              className: I.input,
              value: o,
              onChange: ($) => s($.target.value),
              placeholder: r,
              role: "combobox",
              "aria-expanded": !0,
              "aria-controls": h,
              "aria-activedescendant": v ? `${h}-${v}` : void 0,
              "aria-autocomplete": "list",
              autoComplete: "off",
              autoFocus: !0,
              onKeyDown: ($) => {
                if ($.key === "ArrowDown" && N)
                  $.preventDefault(), b((C) => (C + 1) % N);
                else if ($.key === "ArrowUp" && N)
                  $.preventDefault(), b((C) => C <= 0 ? N - 1 : C - 1);
                else if ($.key === "Enter") {
                  const C = k[_] ?? k[0], q = C ? p.current.get(C) : void 0;
                  if (!q) return;
                  $.preventDefault(), q();
                }
              }
            }
          )
        ] }),
        /* @__PURE__ */ e("ul", { className: I.list, id: h, role: "listbox", "aria-label": c, children: a }),
        i && /* @__PURE__ */ e("div", { className: I.footer, children: i })
      ] })
    ] })
  ] }) });
}
function _r({ heading: t, children: n }) {
  return /* @__PURE__ */ m("li", { className: I.group, children: [
    t && /* @__PURE__ */ e("div", { className: I.heading, children: t }),
    /* @__PURE__ */ e("ul", { role: "group", style: { listStyle: "none", margin: 0, padding: 0 }, children: n })
  ] });
}
function vr({ id: t, children: n, onSelect: o, icon: s, hint: a }) {
  const r = ne(ze);
  if (!r) throw new Error("CommandItem must be used inside <CommandPalette>");
  r.register(t, o);
  const { attach: c } = r;
  qe(() => c(t), [c, t]);
  const i = r.activeId === t;
  return /* @__PURE__ */ m(
    "li",
    {
      id: `${r.listId}-${t}`,
      role: "option",
      "aria-selected": i,
      "data-active": i,
      className: I.item,
      onMouseMove: () => {
        i || r.highlight(t);
      },
      onMouseDown: (l) => {
        l.preventDefault(), o();
      },
      children: [
        s && /* @__PURE__ */ e("span", { className: I.itemIcon, children: s }),
        /* @__PURE__ */ e("span", { className: I.itemLabel, children: n }),
        a && /* @__PURE__ */ e("span", { className: I.itemHint, children: a })
      ]
    }
  );
}
function gr({ children: t }) {
  return /* @__PURE__ */ e("li", { className: I.empty, children: t });
}
const Ko = "wk-KeyValueEditor_root", jo = "wk-KeyValueEditor_head", qo = "wk-KeyValueEditor_row", Jo = "wk-KeyValueEditor_cell", Uo = "wk-KeyValueEditor_actions", Go = "wk-KeyValueEditor_remove", Yo = "wk-KeyValueEditor_footer", Xo = "wk-KeyValueEditor_empty", R = {
  root: Ko,
  head: jo,
  row: qo,
  cell: Jo,
  actions: Uo,
  remove: Go,
  footer: Yo,
  empty: Xo
};
function yr({
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
  maskValues: h = !1,
  className: _
}) {
  const b = O();
  let k = 0;
  const w = () => (c == null ? void 0 : c()) ?? `${b}-${t.length}-${k++}`, p = (f, g) => n(t.map((N) => N.id === f ? { ...N, ...g } : N));
  return /* @__PURE__ */ m("div", { className: u(R.root, _), children: [
    /* @__PURE__ */ m("div", { className: R.head, "aria-hidden": "true", children: [
      /* @__PURE__ */ e("span", { children: i ? "" : null }),
      /* @__PURE__ */ e("span", { children: o }),
      /* @__PURE__ */ e("span", { children: s }),
      /* @__PURE__ */ e("span", {})
    ] }),
    t.length === 0 && /* @__PURE__ */ e("p", { className: R.empty, children: d }),
    t.map((f, g) => {
      const N = f.enabled ?? !0;
      return /* @__PURE__ */ m("div", { className: R.row, "data-disabled": !N, children: [
        /* @__PURE__ */ e("span", { className: R.cell, children: i && /* @__PURE__ */ e(
          Vt,
          {
            checked: N,
            onCheckedChange: (v) => p(f.id, { enabled: v === !0 }),
            "aria-label": `Enable ${f.key || `row ${g + 1}`}`
          }
        ) }),
        /* @__PURE__ */ e("span", { className: R.cell, children: /* @__PURE__ */ e(
          Se,
          {
            size: "sm",
            mono: !0,
            value: f.key,
            placeholder: a,
            "aria-label": `${o}, row ${g + 1}`,
            onChange: (v) => p(f.id, { key: v.target.value })
          }
        ) }),
        /* @__PURE__ */ e("span", { className: R.cell, children: /* @__PURE__ */ e(
          Se,
          {
            size: "sm",
            mono: !0,
            type: h ? "password" : "text",
            value: f.value,
            placeholder: r,
            "aria-label": `${s}, row ${g + 1}`,
            onChange: (v) => p(f.id, { value: v.target.value })
          }
        ) }),
        /* @__PURE__ */ e("span", { className: R.actions, children: /* @__PURE__ */ m(
          "button",
          {
            type: "button",
            className: R.remove,
            onClick: () => n(t.filter((v) => v.id !== f.id)),
            children: [
              /* @__PURE__ */ e(ve, {}),
              /* @__PURE__ */ m(pe, { children: [
                "Remove ",
                f.key || `row ${g + 1}`
              ] })
            ]
          }
        ) })
      ] }, f.id);
    }),
    /* @__PURE__ */ e("div", { className: R.footer, children: /* @__PURE__ */ m(
      at,
      {
        size: "sm",
        variant: "ghost",
        onClick: () => n([...t, { id: w(), key: "", value: "", enabled: !0 }]),
        children: [
          "+ ",
          l
        ]
      }
    ) })
  ] });
}
const Qo = "wk-CodeSurface_root", Wo = "wk-CodeSurface_toolbar", Zo = "wk-CodeSurface_body", es = "wk-CodeSurface_pre", ts = "wk-CodeSurface_status", he = {
  root: Qo,
  toolbar: Wo,
  body: Zo,
  pre: es,
  status: ts
};
function Nr({ children: t, toolbar: n, status: o, className: s }) {
  return /* @__PURE__ */ m("div", { className: u(he.root, s), children: [
    n && /* @__PURE__ */ e("div", { className: he.toolbar, children: n }),
    /* @__PURE__ */ e("div", { className: he.body, children: t }),
    o && /* @__PURE__ */ e("div", { className: he.status, children: o })
  ] });
}
function $r({ code: t, className: n, ...o }) {
  return /* @__PURE__ */ e("pre", { className: u(he.pre, n), tabIndex: 0, ...o, children: /* @__PURE__ */ e("code", { children: t }) });
}
const ns = "wk-Form_section", os = "wk-Form_sectionTop", ss = "wk-Form_sectionHead", as = "wk-Form_sectionTitle", rs = "wk-Form_sectionDesc", cs = "wk-Form_sectionBody", is = "wk-Form_row", ls = "wk-Form_rowText", ds = "wk-Form_rowLabel", ms = "wk-Form_rowDesc", us = "wk-Form_rowControl", hs = "wk-Form_stacked", L = {
  section: ns,
  sectionTop: os,
  sectionHead: ss,
  sectionTitle: as,
  sectionDesc: rs,
  sectionBody: cs,
  row: is,
  rowText: ls,
  rowLabel: ds,
  rowDesc: ms,
  rowControl: us,
  stacked: hs
};
function Cr({ title: t, description: n, children: o, action: s, className: a }) {
  const r = O();
  return /* @__PURE__ */ m("section", { className: u(L.section, a), "aria-labelledby": t ? r : void 0, children: [
    (t || s) && /* @__PURE__ */ m("div", { className: L.sectionTop, children: [
      /* @__PURE__ */ m("div", { className: L.sectionHead, children: [
        t && /* @__PURE__ */ e("h2", { className: L.sectionTitle, id: r, children: t }),
        n && /* @__PURE__ */ e("p", { className: L.sectionDesc, children: n })
      ] }),
      s
    ] }),
    /* @__PURE__ */ e("div", { className: L.sectionBody, children: o })
  ] });
}
function Sr({ label: t, description: n, children: o, stacked: s, className: a }) {
  return /* @__PURE__ */ m("div", { className: u(L.row, s && L.stacked, a), children: [
    /* @__PURE__ */ m("div", { className: L.rowText, children: [
      /* @__PURE__ */ e("span", { className: L.rowLabel, children: t }),
      n && /* @__PURE__ */ e("p", { className: L.rowDesc, children: n })
    ] }),
    /* @__PURE__ */ e("div", { className: L.rowControl, children: o })
  ] });
}
const ps = "wk-HighlightText_mark", ws = {
  mark: ps
};
function xr({ text: t, query: n, className: o }) {
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
  return /* @__PURE__ */ e("span", { className: o, children: r.map((i, l) => /* @__PURE__ */ e(ke, { children: i.hit ? /* @__PURE__ */ e("mark", { className: ws.mark, children: i.chunk }) : i.chunk }, l)) });
}
const ks = "wk-SkipToContent_root", fs = {
  root: ks
};
function Tr({
  targetId: t = "wk-main",
  children: n = "Skip to content",
  className: o
}) {
  return /* @__PURE__ */ e("a", { href: `#${t}`, className: u(fs.root, o), children: n });
}
const bs = "wk-Card_root", _s = "wk-Card_outlined", vs = "wk-Card_raised", gs = "wk-Card_inset", ys = "wk-Card_interactive", Ns = "wk-Card_top", $s = "wk-Card_icon", Cs = "wk-Card_head", Ss = "wk-Card_title", xs = "wk-Card_description", Ts = "wk-Card_action", Is = "wk-Card_body", Ds = "wk-Card_footer", P = {
  root: bs,
  outlined: _s,
  raised: vs,
  inset: gs,
  "padding-none": "wk-Card_padding-none",
  "padding-sm": "wk-Card_padding-sm",
  "padding-md": "wk-Card_padding-md",
  "padding-lg": "wk-Card_padding-lg",
  interactive: ys,
  top: Ns,
  icon: $s,
  head: Cs,
  title: Ss,
  description: xs,
  action: Ts,
  body: Is,
  footer: Ds
};
function Ir({
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
  asChild: h = !1,
  className: _,
  ...b
}) {
  const k = O(), w = t ? k : void 0, p = `h${n}`, f = /* @__PURE__ */ m(Le, { children: [
    (t || a || s) && /* @__PURE__ */ m("div", { className: P.top, children: [
      s && /* @__PURE__ */ e("span", { className: P.icon, "aria-hidden": "true", children: s }),
      /* @__PURE__ */ m("div", { className: P.head, children: [
        t && /* @__PURE__ */ e(p, { className: P.title, id: w, children: t }),
        o && /* @__PURE__ */ e("p", { className: P.description, children: o })
      ] }),
      a && /* @__PURE__ */ e("div", { className: P.action, children: a })
    ] }),
    c && /* @__PURE__ */ e("div", { className: P.body, children: c }),
    r && /* @__PURE__ */ e("div", { className: P.footer, children: r })
  ] }), g = u(
    P.root,
    P[i],
    P[`padding-${l}`],
    d && P.interactive,
    _
  );
  return h ? /* @__PURE__ */ e(fe, { className: g, "aria-labelledby": w, ...b, children: /* @__PURE__ */ e("div", { children: f }) }) : d ? /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      className: g,
      "aria-labelledby": w,
      ...b,
      children: f
    }
  ) : /* @__PURE__ */ e("div", { className: g, "aria-labelledby": w, ...b, children: f });
}
const Bs = "wk-Stepper_root", Ps = "wk-Stepper_horizontal", As = "wk-Stepper_vertical", Ls = "wk-Stepper_step", Ms = "wk-Stepper_complete", Es = "wk-Stepper_current", Fs = "wk-Stepper_marker", Rs = "wk-Stepper_text", Hs = "wk-Stepper_label", Os = "wk-Stepper_description", K = {
  root: Bs,
  horizontal: Ps,
  vertical: As,
  step: Ls,
  complete: Ms,
  current: Es,
  marker: Fs,
  text: Rs,
  label: Hs,
  description: Os
};
function Dr({
  steps: t,
  current: n,
  orientation: o = "horizontal",
  className: s,
  "aria-label": a
}) {
  return /* @__PURE__ */ e("ol", { className: u(K.root, K[o], s), "aria-label": a, children: t.map((r, c) => {
    const { label: i, description: l } = typeof r == "string" ? { label: r, description: void 0 } : r, d = c < n ? "complete" : c === n ? "current" : "upcoming";
    return /* @__PURE__ */ m(
      "li",
      {
        className: u(K.step, K[d]),
        "aria-current": d === "current" ? "step" : void 0,
        children: [
          /* @__PURE__ */ e("span", { className: K.marker, "aria-hidden": "true", children: d === "complete" ? /* @__PURE__ */ e(xe, {}) : c + 1 }),
          /* @__PURE__ */ m("span", { className: K.text, children: [
            /* @__PURE__ */ m("span", { className: K.label, children: [
              i,
              /* @__PURE__ */ e(pe, { children: d === "complete" ? " (completed)" : d === "current" ? " (current step)" : " (not started)" })
            ] }),
            l && /* @__PURE__ */ e("span", { className: K.description, children: l })
          ] })
        ]
      },
      c
    );
  }) });
}
const zs = "wk-Breadcrumb_root", Vs = "wk-Breadcrumb_list", Ks = "wk-Breadcrumb_item", js = "wk-Breadcrumb_separator", qs = "wk-Breadcrumb_link", Js = "wk-Breadcrumb_ellipsis", Us = "wk-Breadcrumb_current", U = {
  root: zs,
  list: Vs,
  item: Ks,
  separator: js,
  link: qs,
  ellipsis: Js,
  current: Us
}, Ve = oe({ isLast: !1 });
function Br({
  children: t,
  separator: n = "/",
  maxItems: o,
  "aria-label": s = "Breadcrumb",
  className: a
}) {
  const [r, c] = M(!1), i = Gs(t), l = !r && o !== void 0 && o >= 3 && i.length > o, d = l ? i.slice(i.length - (o - 2)) : [], h = l ? [i[0], Ae, ...d] : i;
  return /* @__PURE__ */ e("nav", { "aria-label": s, className: u(U.root, a), children: /* @__PURE__ */ e("ol", { className: U.list, children: h.map((_, b) => {
    const k = b === h.length - 1;
    return (
      // biome-ignore lint/suspicious/noArrayIndexKey: position IS the identity here
      /* @__PURE__ */ m("li", { className: U.item, children: [
        b > 0 && /* @__PURE__ */ e("span", { "aria-hidden": "true", className: U.separator, children: n }),
        _ === Ae ? /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: U.ellipsis,
            onClick: () => c(!0),
            "aria-label": "Show the full path",
            children: "…"
          }
        ) : /* @__PURE__ */ e(Ve.Provider, { value: { isLast: k }, children: _ })
      ] }, b)
    );
  }) }) });
}
const Ae = Symbol("breadcrumb-ellipsis");
function Gs(t) {
  const n = [], o = (s) => {
    if (!(s == null || s === !1 || s === !0)) {
      if (Array.isArray(s)) {
        for (const a of s) o(a);
        return;
      }
      if (Je(s) && s.type === ke) {
        o(s.props.children);
        return;
      }
      n.push(s);
    }
  };
  return o(t), n;
}
function Pr({ children: t, current: n, className: o, ...s }) {
  const { isLast: a } = ne(Ve);
  return n ?? a ? /* @__PURE__ */ e("span", { "aria-current": "page", className: u(U.current, o), children: t }) : /* @__PURE__ */ e("a", { className: u(U.link, o), ...s, children: t });
}
const Ys = "wk-Table_wrapper", Xs = "wk-Table_scroll", Qs = "wk-Table_root", Ws = "wk-Table_caption", Zs = "wk-Table_th", ea = "wk-Table_td", ta = "wk-Table_sortButton", na = "wk-Table_sortIndicator", oa = "wk-Table_numeric", sa = "wk-Table_captionHidden", aa = "wk-Table_row", ra = "wk-Table_interactive", ca = "wk-Table_sticky", x = {
  wrapper: Ys,
  scroll: Xs,
  root: Qs,
  caption: Ws,
  th: Zs,
  td: ea,
  sortButton: ta,
  sortIndicator: na,
  numeric: oa,
  captionHidden: sa,
  row: aa,
  interactive: ra,
  sticky: ca
};
function Ar({
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
      className: u(x.wrapper, l && x.scroll),
      style: l ? { "--wk-table-max-block": a } : void 0,
      children: /* @__PURE__ */ m(
        "table",
        {
          className: u(
            x.root,
            o && x.interactive,
            s && x.sticky,
            r
          ),
          ...i,
          children: [
            t && /* @__PURE__ */ e("caption", { className: u(x.caption, n && x.captionHidden), children: t }),
            c
          ]
        }
      )
    }
  );
}
const Lr = (t) => /* @__PURE__ */ e("thead", { ...t }), Mr = (t) => /* @__PURE__ */ e("tbody", { ...t }), Er = ({ selected: t, className: n, ...o }) => /* @__PURE__ */ e("tr", { "data-selected": t || void 0, className: u(x.row, n), ...o }), Fr = ({
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
    return /* @__PURE__ */ e("th", { scope: a, className: u(x.th, t && x.numeric, r), ...i, children: c });
  const l = o ?? null;
  return /* @__PURE__ */ e(
    "th",
    {
      scope: a,
      "aria-sort": l === "asc" ? "ascending" : l === "desc" ? "descending" : "none",
      className: u(x.th, t && x.numeric, r),
      ...i,
      children: /* @__PURE__ */ m(
        "button",
        {
          type: "button",
          className: x.sortButton,
          onClick: () => s == null ? void 0 : s(l === "asc" ? "desc" : "asc"),
          children: [
            c,
            /* @__PURE__ */ e("span", { "aria-hidden": "true", className: x.sortIndicator, "data-direction": l ?? "none", children: l === "asc" ? "▲" : l === "desc" ? "▼" : "↕" })
          ]
        }
      )
    }
  );
}, Rr = ({ numeric: t, className: n, ...o }) => /* @__PURE__ */ e("td", { className: u(x.td, t && x.numeric, n), ...o }), ia = "wk-Badge_root", la = "wk-Badge_neutral", da = "wk-Badge_accent", ma = "wk-Badge_danger", ua = "wk-Badge_warn", ha = "wk-Badge_success", pa = "wk-Badge_info", wa = "wk-Badge_mono", Ce = {
  root: ia,
  neutral: la,
  accent: da,
  danger: ma,
  warn: ua,
  success: ha,
  info: pa,
  mono: wa
};
function Hr({ tone: t = "neutral", mono: n = !1, className: o, ...s }) {
  return /* @__PURE__ */ e("span", { className: u(Ce.root, Ce[t], n && Ce.mono, o), ...s });
}
const ka = "wk-AppShell_root", fa = "wk-AppShell_titlebar", ba = "wk-AppShell_body", _a = "wk-AppShell_sidebar", va = "wk-AppShell_main", le = {
  root: ka,
  titlebar: fa,
  body: ba,
  sidebar: _a,
  main: va
};
function Or({
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
      className: u(le.root, i),
      style: a ? { "--wk-sidebar-w": a } : void 0,
      children: [
        t && /* @__PURE__ */ e(
          "header",
          {
            className: le.titlebar,
            "data-inset-controls": o || void 0,
            ...n ? { "data-tauri-drag-region": "" } : {},
            children: t
          }
        ),
        /* @__PURE__ */ m("div", { className: le.body, "data-has-sidebar": s ? "true" : void 0, children: [
          s && /* @__PURE__ */ e("nav", { className: le.sidebar, "aria-label": "Primary", children: s }),
          /* @__PURE__ */ e("main", { id: c, className: le.main, tabIndex: -1, children: r })
        ] })
      ]
    }
  );
}
const ga = {
  1: "2xl",
  2: "xl",
  3: "lg",
  4: "md",
  5: "sm",
  6: "xs"
}, Ke = {
  xs: A.xs,
  sm: A.sm,
  md: A.md,
  lg: A.lg,
  xl: A.xl,
  "2xl": A.xxl
}, zr = B(function({ level: n, size: o, className: s, ...a }, r) {
  const c = `h${n}`, i = Ke[o ?? ga[n]];
  return /* @__PURE__ */ e(c, { ref: r, className: u(A.heading, i, s), ...a });
}), Vr = B(function({ as: n = "p", size: o = "md", tone: s = "default", mono: a = !1, className: r, ...c }, i) {
  return /* @__PURE__ */ e(
    n,
    {
      ref: i,
      className: u(
        A.text,
        Ke[o],
        s !== "default" && A[s],
        a && A.mono,
        r
      ),
      ...c
    }
  );
}), Kr = B(function({ external: n = !1, nofollow: o = !1, asChild: s = !1, className: a, rel: r, target: c, ...i }, l) {
  const d = s ? fe : "a", h = new Set((r ?? "").split(/\s+/).filter(Boolean));
  return n && (h.add("noopener"), h.add("noreferrer")), o && h.add("nofollow"), /* @__PURE__ */ e(
    d,
    {
      ref: l,
      className: u(A.link, a),
      target: c ?? (n ? "_blank" : void 0),
      rel: h.size ? [...h].join(" ") : void 0,
      ...i
    }
  );
}), ya = "wk-Media_image", Na = "wk-Media_skeleton", je = {
  image: ya,
  skeleton: Na
}, jr = B(function({ width: n, height: o, aspectRatio: s, priority: a = !1, className: r, style: c, alt: i, ...l }, d) {
  const h = s ?? (n && o ? `${n}/${o}` : void 0);
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
      className: u(je.image, r),
      style: { ...h ? { "--wk-image-ar": String(h) } : null, ...c },
      ...l
    }
  );
});
function qr({
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
      className: u(je.skeleton, s),
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
function $a({ data: t, nonce: n }) {
  const o = JSON.stringify(t).replace(/</g, "\\u003c");
  return /* @__PURE__ */ e("script", { type: "application/ld+json", nonce: n, dangerouslySetInnerHTML: { __html: o } });
}
const Ca = "wk-Breadcrumbs_root", Sa = "wk-Breadcrumbs_list", xa = "wk-Breadcrumbs_item", Ta = "wk-Breadcrumbs_link", Ia = "wk-Breadcrumbs_sep", de = {
  root: Ca,
  list: Sa,
  item: xa,
  link: Ta,
  sep: Ia
};
function Jr({ items: t, origin: n, className: o }) {
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
  return /* @__PURE__ */ m(Le, { children: [
    /* @__PURE__ */ e("nav", { "aria-label": "Breadcrumb", className: u(de.root, o), children: /* @__PURE__ */ e("ol", { className: de.list, children: t.map((a, r) => {
      const c = r === t.length - 1;
      return /* @__PURE__ */ m(ke, { children: [
        /* @__PURE__ */ e("li", { className: de.item, children: a.href && !c ? /* @__PURE__ */ e("a", { className: de.link, href: a.href, children: a.label }) : /* @__PURE__ */ e("span", { "aria-current": c ? "page" : void 0, children: a.label }) }),
        !c && /* @__PURE__ */ e("li", { className: de.sep, "aria-hidden": "true", children: "/" })
      ] }, `${a.label}-${r}`);
    }) }) }),
    /* @__PURE__ */ e($a, { data: s })
  ] });
}
export {
  lr as Alert,
  Or as AppShell,
  Hr as Badge,
  Br as Breadcrumb,
  Pr as BreadcrumbItem,
  Jr as Breadcrumbs,
  at as Button,
  Ir as Card,
  xe as CheckIcon,
  Vt as Checkbox,
  Ee as ChevronDownIcon,
  ve as CloseIcon,
  $r as CodeBlock,
  Nr as CodeSurface,
  cr as Combobox,
  gr as CommandEmpty,
  _r as CommandGroup,
  vr as CommandItem,
  br as CommandPalette,
  Ga as ContextMenu,
  Ya as ContextMenuItem,
  Xa as ContextMenuLabel,
  Qa as ContextMenuSeparator,
  Va as Dialog,
  Ka as DialogClose,
  dr as EmptyState,
  Ea as Field,
  Cr as FormSection,
  zr as Heading,
  xr as HighlightText,
  jr as Image,
  Se as Input,
  $a as JsonLd,
  ur as Kbd,
  yr as KeyValueEditor,
  Kr as Link,
  ja as Menu,
  qa as MenuItem,
  Ja as MenuLabel,
  Ua as MenuSeparator,
  wr as NavItem,
  pr as NavList,
  Ue as SearchIcon,
  ir as SegmentedControl,
  Fa as Select,
  Ha as SelectGroup,
  Ra as SelectItem,
  Oa as SelectSeparator,
  Sr as SettingRow,
  qr as Skeleton,
  Tr as SkipToContent,
  mr as Spinner,
  hr as SplitPane,
  Dr as Stepper,
  za as Switch,
  Ar as Table,
  er as Tabs,
  or as TabsContent,
  tr as TabsList,
  nr as TabsTrigger,
  Mr as Tbody,
  Rr as Td,
  Vr as Text,
  rr as Textarea,
  Fr as Th,
  Lr as Thead,
  Aa as ThemeProvider,
  Ma as ThemeScript,
  sr as ToastProvider,
  Za as Tooltip,
  Wa as TooltipProvider,
  Er as Tr,
  kr as Tree,
  fr as TreeItem,
  pe as VisuallyHidden,
  u as cn,
  Te as useField,
  La as useTheme,
  ar as useToast
};
//# sourceMappingURL=index.js.map
