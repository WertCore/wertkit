import { jsx as e, jsxs as m, Fragment as Pe } from "react/jsx-runtime";
import { useState as A, useEffect as ie, useCallback as J, useMemo as q, useContext as Z, createContext as ee, forwardRef as L, useId as R, useRef as U, Fragment as he, useLayoutEffect as Ke, isValidElement as je } from "react";
import { Slot as we, Slottable as Ae } from "@radix-ui/react-slot";
import * as I from "@radix-ui/react-select";
import * as Te from "@radix-ui/react-switch";
import * as xe from "@radix-ui/react-checkbox";
import * as T from "@radix-ui/react-dialog";
import * as j from "@radix-ui/react-dropdown-menu";
import * as X from "@radix-ui/react-tooltip";
import * as ke from "@radix-ui/react-tabs";
import * as G from "@radix-ui/react-toast";
function p(...t) {
  return t.filter((n) => typeof n == "string" && n !== "").join(" ");
}
const fe = (t) => ({
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
}), Ce = (t) => /* @__PURE__ */ e("svg", { ...fe(t), children: /* @__PURE__ */ e("path", { d: "M3 8.5 6.5 12 13 4.5" }) }), Le = (t) => /* @__PURE__ */ e("svg", { ...fe(t), children: /* @__PURE__ */ e("path", { d: "m4 6 4 4 4-4" }) }), be = (t) => /* @__PURE__ */ e("svg", { ...fe(t), children: /* @__PURE__ */ e("path", { d: "M4 4l8 8M12 4l-8 8" }) }), qe = (t) => /* @__PURE__ */ m("svg", { ...fe(t), children: [
  /* @__PURE__ */ e("circle", { cx: "7", cy: "7", r: "4.25" }),
  /* @__PURE__ */ e("path", { d: "m10.25 10.25 3.25 3.25" })
] }), Ee = ee(null);
function Je(t) {
  if (!t || typeof window > "u") return {};
  try {
    return JSON.parse(window.localStorage.getItem(t) ?? "{}");
  } catch {
    return {};
  }
}
function Ba({
  children: t,
  theme: n,
  defaultTheme: o = "system",
  defaultDensity: s = "normal",
  storageKey: a = "wertkit-theme",
  target: r = "root"
}) {
  const [c, i] = A(o), [l, d] = A(s), [u, _] = A(!1), [b, w] = A(null);
  ie(() => {
    const v = Je(a);
    v.theme && i(v.theme), v.density && d(v.density);
  }, [a]);
  const k = n ?? c;
  ie(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function") return;
    const v = window.matchMedia("(prefers-color-scheme: dark)"), N = () => _(v.matches);
    return N(), v.addEventListener("change", N), () => v.removeEventListener("change", N);
  }, []);
  const h = k === "system" ? u ? "dark" : "light" : k;
  ie(() => {
    const v = r === "self" ? b : document.documentElement;
    v && (v.setAttribute("data-theme", h), v.setAttribute("data-density", l));
  }, [h, l, r, b]), ie(() => {
    if (!(!a || typeof window > "u"))
      try {
        window.localStorage.setItem(a, JSON.stringify({ theme: k, density: l }));
      } catch {
      }
  }, [k, l, a]);
  const f = J((v) => i(v), []), g = J((v) => d(v), []), $ = q(
    () => ({ theme: k, resolvedTheme: h, setTheme: f, density: l, setDensity: g }),
    [k, h, f, l, g]
  );
  return /* @__PURE__ */ e(Ee.Provider, { value: $, children: r === "self" ? /* @__PURE__ */ e("div", { ref: w, children: t }) : t });
}
function Pa() {
  const t = Z(Ee);
  if (!t) throw new Error("useTheme must be used inside <ThemeProvider>");
  return t;
}
function Aa({
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
const Ue = "wk-Button_root", Ge = "wk-Button_sm", Ye = "wk-Button_md", Xe = "wk-Button_lg", Qe = "wk-Button_iconOnly", We = "wk-Button_primary", Ze = "wk-Button_secondary", et = "wk-Button_ghost", tt = "wk-Button_danger", nt = "wk-Button_spinner", te = {
  root: Ue,
  sm: Ge,
  md: Ye,
  lg: Xe,
  iconOnly: Qe,
  primary: We,
  secondary: Ze,
  ghost: et,
  danger: tt,
  spinner: nt,
  "wk-spin": "wk-Button_wk-spin"
}, ot = L(function({
  variant: n = "secondary",
  size: o = "md",
  iconOnly: s = !1,
  loading: a = !1,
  startIcon: r,
  endIcon: c,
  asChild: i = !1,
  className: l,
  children: d,
  disabled: u,
  type: _,
  ...b
}, w) {
  return /* @__PURE__ */ m(
    i ? we : "button",
    {
      ref: w,
      type: i ? void 0 : _ ?? "button",
      disabled: u || a,
      "data-loading": a || void 0,
      className: p(
        te.root,
        te[n],
        te[o],
        s && te.iconOnly,
        l
      ),
      ...b,
      children: [
        a ? /* @__PURE__ */ e("span", { className: te.spinner, "aria-hidden": "true" }) : r,
        i ? /* @__PURE__ */ e(Ae, { children: d }) : d,
        !a && c
      ]
    }
  );
}), st = "wk-Field_root", at = "wk-Field_label", rt = "wk-Field_required", ct = "wk-Field_hint", it = "wk-Field_error", ne = {
  root: st,
  label: at,
  required: rt,
  hint: ct,
  error: it
}, Me = ee(null), Se = () => Z(Me);
function La({ label: t, hint: n, error: o, required: s, children: a, className: r }) {
  const c = R(), i = `${c}-input`, l = `${c}-hint`, d = `${c}-error`, u = !!o, _ = [o ? d : null, n ? l : null].filter(Boolean).join(" ") || void 0;
  return /* @__PURE__ */ e(Me.Provider, { value: { inputId: i, describedBy: _, invalid: u }, children: /* @__PURE__ */ m("div", { className: p(ne.root, r), children: [
    t && /* @__PURE__ */ m("label", { className: ne.label, htmlFor: i, children: [
      t,
      s && /* @__PURE__ */ e("span", { className: ne.required, "aria-hidden": "true", children: "*" })
    ] }),
    a,
    o ? /* @__PURE__ */ e("p", { className: ne.error, id: d, role: "alert", children: o }) : n && /* @__PURE__ */ e("p", { className: ne.hint, id: l, children: n })
  ] }) });
}
const lt = "wk-Input_root", dt = "wk-Input_mono", mt = "wk-Input_shell", ut = "wk-Input_slot", pt = "wk-Input_start", ht = "wk-Input_end", wt = "wk-Input_hasStart", kt = "wk-Input_hasEnd", ft = "wk-Input_sm", bt = "wk-Input_md", _t = "wk-Input_lg", E = {
  root: lt,
  mono: dt,
  shell: mt,
  slot: ut,
  start: pt,
  end: ht,
  hasStart: wt,
  hasEnd: kt,
  sm: ft,
  md: bt,
  lg: _t
}, $e = L(function({
  size: n = "md",
  invalid: o,
  mono: s = !1,
  startSlot: a,
  endSlot: r,
  className: c,
  id: i,
  "aria-describedby": l,
  ...d
}, u) {
  const _ = Se(), b = o ?? (_ == null ? void 0 : _.invalid) ?? !1, w = /* @__PURE__ */ e(
    "input",
    {
      ref: u,
      id: i ?? (_ == null ? void 0 : _.inputId),
      "aria-invalid": b || void 0,
      "aria-describedby": l ?? (_ == null ? void 0 : _.describedBy),
      className: p(
        E.root,
        E[n],
        s && E.mono,
        a && E.hasStart,
        r && E.hasEnd,
        !a && !r && c
      ),
      ...d
    }
  );
  return !a && !r ? w : /* @__PURE__ */ m("span", { className: p(E.shell, c), "data-invalid": b || void 0, children: [
    a && /* @__PURE__ */ e("span", { className: p(E.slot, E.start), "aria-hidden": "true", children: a }),
    w,
    r && /* @__PURE__ */ e("span", { className: p(E.slot, E.end), children: r })
  ] });
}), vt = "wk-Select_trigger", gt = "wk-Select_sm", yt = "wk-Select_md", Nt = "wk-Select_lg", $t = "wk-Select_icon", Ct = "wk-Select_content", St = "wk-Select_viewport", Tt = "wk-Select_item", xt = "wk-Select_itemIndicator", It = "wk-Select_label", Dt = "wk-Select_separator", F = {
  trigger: vt,
  sm: gt,
  md: yt,
  lg: Nt,
  icon: $t,
  content: Ct,
  viewport: St,
  item: Tt,
  itemIndicator: xt,
  label: It,
  separator: Dt
};
function Ea({
  placeholder: t,
  size: n = "md",
  children: o,
  className: s,
  id: a,
  "aria-label": r,
  ...c
}) {
  const i = Se();
  return /* @__PURE__ */ m(I.Root, { ...c, children: [
    /* @__PURE__ */ m(
      I.Trigger,
      {
        id: a ?? (i == null ? void 0 : i.inputId),
        "aria-label": r,
        "aria-invalid": (i == null ? void 0 : i.invalid) || void 0,
        "aria-describedby": i == null ? void 0 : i.describedBy,
        className: p(F.trigger, F[n], s),
        children: [
          /* @__PURE__ */ e(I.Value, { placeholder: t }),
          /* @__PURE__ */ e(I.Icon, { className: F.icon, children: /* @__PURE__ */ e(Le, {}) })
        ]
      }
    ),
    /* @__PURE__ */ e(I.Portal, { children: /* @__PURE__ */ e(I.Content, { className: F.content, position: "popper", sideOffset: 4, children: /* @__PURE__ */ e(I.Viewport, { className: F.viewport, children: o }) }) })
  ] });
}
const Ma = L(
  function({ className: n, children: o, ...s }, a) {
    return /* @__PURE__ */ m(I.Item, { ref: a, className: p(F.item, n), ...s, children: [
      /* @__PURE__ */ e(I.ItemText, { children: o }),
      /* @__PURE__ */ e(I.ItemIndicator, { className: F.itemIndicator, children: /* @__PURE__ */ e(Ce, {}) })
    ] });
  }
);
function Fa({ label: t, children: n }) {
  return /* @__PURE__ */ m(I.Group, { children: [
    /* @__PURE__ */ e(I.Label, { className: F.label, children: t }),
    n
  ] });
}
function Ra() {
  return /* @__PURE__ */ e(I.Separator, { className: F.separator });
}
const Bt = "wk-Switch_wrapper", Pt = "wk-Switch_root", At = "wk-Switch_thumb", Lt = "wk-Switch_label", pe = {
  wrapper: Bt,
  root: Pt,
  thumb: At,
  label: Lt
}, Ha = L(function({ label: n, className: o, id: s, ...a }, r) {
  const c = R(), i = s ?? c, l = /* @__PURE__ */ e(Te.Root, { ref: r, id: i, className: p(pe.root, o), ...a, children: /* @__PURE__ */ e(Te.Thumb, { className: pe.thumb }) });
  return n ? /* @__PURE__ */ m("span", { className: pe.wrapper, children: [
    l,
    /* @__PURE__ */ e("label", { className: pe.label, htmlFor: i, children: n })
  ] }) : l;
}), Et = "wk-Checkbox_wrapper", Mt = "wk-Checkbox_root", Ft = "wk-Checkbox_indicator", Rt = "wk-Checkbox_dash", Ht = "wk-Checkbox_label", oe = {
  wrapper: Et,
  root: Mt,
  indicator: Ft,
  dash: Rt,
  label: Ht
}, Ot = L(function({ label: n, className: o, id: s, ...a }, r) {
  const c = R(), i = s ?? c, l = /* @__PURE__ */ e(xe.Root, { ref: r, id: i, className: p(oe.root, o), ...a, children: /* @__PURE__ */ e(xe.Indicator, { className: oe.indicator, children: a.checked === "indeterminate" ? /* @__PURE__ */ e("span", { className: oe.dash }) : /* @__PURE__ */ e(Ce, {}) }) });
  return n ? /* @__PURE__ */ m("span", { className: oe.wrapper, children: [
    l,
    /* @__PURE__ */ e("label", { className: oe.label, htmlFor: i, children: n })
  ] }) : l;
}), zt = "wk-Semantic_heading", Vt = "wk-Semantic_text", Kt = "wk-Semantic_muted", jt = "wk-Semantic_subtle", qt = "wk-Semantic_danger", Jt = "wk-Semantic_mono", Ut = "wk-Semantic_xs", Gt = "wk-Semantic_sm", Yt = "wk-Semantic_md", Xt = "wk-Semantic_lg", Qt = "wk-Semantic_xl", Wt = "wk-Semantic_xxl", Zt = "wk-Semantic_link", en = "wk-Semantic_visuallyHidden", B = {
  heading: zt,
  text: Vt,
  muted: Kt,
  subtle: jt,
  danger: qt,
  mono: Jt,
  xs: Ut,
  sm: Gt,
  md: Yt,
  lg: Xt,
  xl: Qt,
  xxl: Wt,
  link: Zt,
  visuallyHidden: en
};
function me({ className: t, ...n }) {
  return /* @__PURE__ */ e("span", { className: p(B.visuallyHidden, t), ...n });
}
const tn = "wk-Dialog_overlay", nn = "wk-Dialog_content", on = "wk-Dialog_header", sn = "wk-Dialog_headings", an = "wk-Dialog_title", rn = "wk-Dialog_description", cn = "wk-Dialog_close", ln = "wk-Dialog_footer", H = {
  overlay: tn,
  content: nn,
  header: on,
  headings: sn,
  title: an,
  description: rn,
  close: cn,
  footer: ln
};
function Oa({
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
      /* @__PURE__ */ e(T.Overlay, { className: H.overlay }),
      /* @__PURE__ */ m(
        T.Content,
        {
          className: p(H.content, l),
          style: c ? { "--wk-dialog-w": c } : void 0,
          children: [
            /* @__PURE__ */ m("div", { className: H.header, children: [
              /* @__PURE__ */ m("div", { className: H.headings, children: [
                n ? /* @__PURE__ */ e(T.Title, { asChild: !0, children: /* @__PURE__ */ e(me, { children: t }) }) : /* @__PURE__ */ e(T.Title, { className: H.title, children: t }),
                o && /* @__PURE__ */ e(T.Description, { className: H.description, children: o })
              ] }),
              i && /* @__PURE__ */ e(T.Close, { className: H.close, "aria-label": "Close", children: /* @__PURE__ */ e(be, {}) })
            ] }),
            s,
            a && /* @__PURE__ */ e("div", { className: H.footer, children: a })
          ]
        }
      )
    ] })
  ] });
}
const za = T.Close, dn = "wk-Menu_content", mn = "wk-Menu_item", un = "wk-Menu_danger", pn = "wk-Menu_label", hn = "wk-Menu_separator", wn = "wk-Menu_shortcut", W = {
  content: dn,
  item: mn,
  danger: un,
  label: pn,
  separator: hn,
  shortcut: wn
};
function Va({ trigger: t, children: n, align: o = "start", side: s = "bottom", className: a, ...r }) {
  return /* @__PURE__ */ m(j.Root, { ...r, children: [
    /* @__PURE__ */ e(j.Trigger, { asChild: !0, children: t }),
    /* @__PURE__ */ e(j.Portal, { children: /* @__PURE__ */ e(
      j.Content,
      {
        className: p(W.content, a),
        align: o,
        side: s,
        sideOffset: 4,
        collisionPadding: 8,
        children: n
      }
    ) })
  ] });
}
const Ka = L(function({ tone: n = "default", shortcut: o, className: s, children: a, ...r }, c) {
  return /* @__PURE__ */ m(
    j.Item,
    {
      ref: c,
      className: p(W.item, n === "danger" && W.danger, s),
      ...r,
      children: [
        a,
        o && /* @__PURE__ */ e("span", { className: W.shortcut, children: o })
      ]
    }
  );
});
function ja({ children: t }) {
  return /* @__PURE__ */ e(j.Label, { className: W.label, children: t });
}
function qa() {
  return /* @__PURE__ */ e(j.Separator, { className: W.separator });
}
const kn = "wk-Tooltip_content", fn = "wk-Tooltip_arrow", Ie = {
  content: kn,
  arrow: fn
}, Ja = X.Provider;
function Ua({ content: t, children: n, side: o = "top", delayDuration: s, className: a }) {
  return /* @__PURE__ */ m(X.Root, { delayDuration: s, children: [
    /* @__PURE__ */ e(X.Trigger, { asChild: !0, children: n }),
    /* @__PURE__ */ e(X.Portal, { children: /* @__PURE__ */ m(
      X.Content,
      {
        className: p(Ie.content, a),
        side: o,
        sideOffset: 6,
        collisionPadding: 8,
        children: [
          t,
          /* @__PURE__ */ e(X.Arrow, { className: Ie.arrow, width: 10, height: 5 })
        ]
      }
    ) })
  ] });
}
const bn = "wk-Tabs_root", _n = "wk-Tabs_list", vn = "wk-Tabs_trigger", gn = "wk-Tabs_content", _e = {
  root: bn,
  list: _n,
  trigger: vn,
  content: gn
};
function Ga({ className: t, ...n }) {
  return /* @__PURE__ */ e(ke.Root, { className: p(_e.root, t), ...n });
}
function Ya({ className: t, ...n }) {
  return /* @__PURE__ */ e(ke.List, { className: p(_e.list, t), ...n });
}
const Xa = L(
  function({ className: n, ...o }, s) {
    return /* @__PURE__ */ e(ke.Trigger, { ref: s, className: p(_e.trigger, n), ...o });
  }
);
function Qa({ className: t, ...n }) {
  return /* @__PURE__ */ e(ke.Content, { className: p(_e.content, t), ...n });
}
const yn = "wk-Toast_viewport", Nn = "wk-Toast_root", $n = "wk-Toast_body", Cn = "wk-Toast_title", Sn = "wk-Toast_description", Tn = "wk-Toast_close", Y = {
  viewport: yn,
  root: Nn,
  body: $n,
  title: Cn,
  description: Sn,
  close: Tn
}, Fe = ee(null);
function Wa({ children: t, swipeDirection: n = "right" }) {
  const [o, s] = A([]), a = U(1), r = J((l) => {
    s((d) => d.filter((u) => u.id !== l));
  }, []), c = J((l) => {
    const d = a.current++;
    s((u) => [...u, { ...l, id: d }]);
  }, []), i = q(() => ({ toast: c, dismiss: r }), [c, r]);
  return /* @__PURE__ */ e(Fe.Provider, { value: i, children: /* @__PURE__ */ m(G.Provider, { swipeDirection: n, children: [
    t,
    o.map((l) => /* @__PURE__ */ m(
      G.Root,
      {
        className: Y.root,
        "data-tone": l.tone ?? "neutral",
        duration: l.duration ?? (l.tone === "danger" ? 1 / 0 : 5e3),
        type: l.tone === "danger" ? "foreground" : "background",
        onOpenChange: (d) => {
          d || r(l.id);
        },
        children: [
          /* @__PURE__ */ m("div", { className: Y.body, children: [
            /* @__PURE__ */ e(G.Title, { className: Y.title, children: l.title }),
            l.description && /* @__PURE__ */ e(G.Description, { className: Y.description, children: l.description })
          ] }),
          /* @__PURE__ */ e(G.Close, { className: Y.close, "aria-label": "Dismiss", children: /* @__PURE__ */ e(be, {}) })
        ]
      },
      l.id
    )),
    /* @__PURE__ */ e(G.Viewport, { className: Y.viewport })
  ] }) });
}
function Za() {
  const t = Z(Fe);
  if (!t) throw new Error("useToast must be used inside <ToastProvider>");
  return t;
}
const xn = "wk-Textarea_root", In = "wk-Textarea_mono", Dn = "wk-Textarea_noResize", ve = {
  root: xn,
  mono: In,
  noResize: Dn
}, er = L(function({ invalid: n, mono: o = !1, resizable: s = !0, className: a, id: r, rows: c = 4, ...i }, l) {
  const d = Se(), u = n ?? (d == null ? void 0 : d.invalid) ?? !1;
  return /* @__PURE__ */ e(
    "textarea",
    {
      ref: l,
      id: r ?? (d == null ? void 0 : d.inputId),
      rows: c,
      "aria-invalid": u || void 0,
      "aria-describedby": d == null ? void 0 : d.describedBy,
      className: p(ve.root, o && ve.mono, !s && ve.noResize, a),
      ...i
    }
  );
}), Bn = "wk-Combobox_wrap", Pn = "wk-Combobox_list", An = "wk-Combobox_option", Ln = "wk-Combobox_label", En = "wk-Combobox_mono", Mn = "wk-Combobox_hint", Fn = "wk-Combobox_empty", V = {
  wrap: Bn,
  list: Pn,
  option: An,
  label: Ln,
  mono: En,
  hint: Mn,
  empty: Fn
}, Rn = (t) => t.value ?? t.label;
function tr({
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
  const u = R(), [_, b] = A(!1), [w, k] = A(-1), h = U(null), f = q(() => _ ? o(t) : [], [_, o, t]), g = _ && (f.length > 0 || !!a), $ = w >= 0 && f[w] ? `${u}-${w}` : void 0, v = (N) => {
    const y = f[N];
    y && (n(Rn(y)), b(!1), k(-1));
  };
  return /* @__PURE__ */ m("div", { className: V.wrap, children: [
    /* @__PURE__ */ e(
      $e,
      {
        role: "combobox",
        "aria-expanded": g,
        "aria-controls": g ? u : void 0,
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
    g && /* @__PURE__ */ e("ul", { className: V.list, id: u, role: "listbox", children: f.length === 0 ? /* @__PURE__ */ e("li", { className: V.empty, children: a }) : f.map((N, y) => /* @__PURE__ */ m(
      "li",
      {
        id: `${u}-${y}`,
        role: "option",
        "aria-selected": y === w,
        "data-active": y === w,
        className: V.option,
        onMouseEnter: () => k(y),
        onMouseDown: (C) => {
          C.preventDefault(), h.current && clearTimeout(h.current), v(y);
        },
        children: [
          /* @__PURE__ */ e("span", { className: p(V.label, r && V.mono), children: N.label }),
          N.hint && /* @__PURE__ */ e("span", { className: V.hint, children: N.hint })
        ]
      },
      `${N.label}-${y}`
    )) })
  ] });
}
const Hn = "wk-SegmentedControl_root", On = "wk-SegmentedControl_option", zn = "wk-SegmentedControl_fluid", ge = {
  root: Hn,
  option: On,
  fluid: zn
};
function nr({
  options: t,
  value: n,
  onValueChange: o,
  fluid: s = !1,
  className: a,
  ...r
}) {
  const c = R(), i = U(null), l = J(
    (d) => {
      var w, k;
      const u = t.filter((h) => !h.disabled);
      if (!u.length) return;
      const _ = u.findIndex((h) => h.value === n), b = u[(_ + d + u.length) % u.length];
      o(b.value), (k = (w = i.current) == null ? void 0 : w.querySelector(`[data-value="${CSS.escape(b.value)}"]`)) == null || k.focus();
    },
    [t, n, o]
  );
  return /* @__PURE__ */ e(
    "div",
    {
      ref: i,
      role: "radiogroup",
      className: p(ge.root, s && ge.fluid, a),
      onKeyDown: (d) => {
        (d.key === "ArrowRight" || d.key === "ArrowDown") && (d.preventDefault(), l(1)), (d.key === "ArrowLeft" || d.key === "ArrowUp") && (d.preventDefault(), l(-1));
      },
      ...r,
      children: t.map((d) => {
        const u = d.value === n;
        return /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            role: "radio",
            id: `${c}-${d.value}`,
            "data-value": d.value,
            "aria-checked": u,
            "data-disabled": d.disabled || void 0,
            disabled: d.disabled,
            tabIndex: u ? 0 : -1,
            className: ge.option,
            onClick: () => !d.disabled && o(d.value),
            children: d.label
          },
          d.value
        );
      })
    }
  );
}
const Vn = "wk-Alert_root", Kn = "wk-Alert_info", jn = "wk-Alert_success", qn = "wk-Alert_warn", Jn = "wk-Alert_danger", Un = "wk-Alert_icon", Gn = "wk-Alert_title", Yn = "wk-Alert_body", Xn = "wk-Alert_actions", Qn = "wk-Alert_close", Wn = "wk-Alert_banner", O = {
  root: Vn,
  info: Kn,
  success: jn,
  warn: qn,
  danger: Jn,
  icon: Un,
  title: Gn,
  body: Yn,
  actions: Xn,
  close: Qn,
  banner: Wn
};
function or({
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
      className: p(O.root, O[t], c && O.banner, i),
      children: [
        s && /* @__PURE__ */ e("span", { className: O.icon, "aria-hidden": "true", children: s }),
        /* @__PURE__ */ m("div", { className: O.body, children: [
          n && /* @__PURE__ */ e("span", { className: O.title, children: n }),
          o,
          a && /* @__PURE__ */ e("div", { className: O.actions, children: a })
        ] }),
        r && /* @__PURE__ */ e("button", { type: "button", className: O.close, onClick: r, "aria-label": "Dismiss", children: /* @__PURE__ */ e(be, {}) })
      ]
    }
  );
}
const Zn = "wk-EmptyState_root", eo = "wk-EmptyState_icon", to = "wk-EmptyState_title", no = "wk-EmptyState_description", oo = "wk-EmptyState_actions", se = {
  root: Zn,
  icon: eo,
  title: to,
  description: no,
  actions: oo
};
function sr({
  icon: t,
  title: n,
  description: o,
  action: s,
  headingLevel: a = 2,
  className: r
}) {
  const c = `h${a}`;
  return /* @__PURE__ */ m("div", { className: p(se.root, r), children: [
    t && /* @__PURE__ */ e("span", { className: se.icon, "aria-hidden": "true", children: t }),
    /* @__PURE__ */ e(c, { className: se.title, children: n }),
    o && /* @__PURE__ */ e("p", { className: se.description, children: o }),
    s && /* @__PURE__ */ e("div", { className: se.actions, children: s })
  ] });
}
const so = "wk-Spinner_root", ao = "wk-Spinner_sm", ro = "wk-Spinner_md", co = "wk-Spinner_lg", De = {
  root: so,
  "wk-spinner-rotate": "wk-Spinner_wk-spinner-rotate",
  sm: ao,
  md: ro,
  lg: co
};
function ar({ size: t = "md", label: n = "Loading", className: o }) {
  return /* @__PURE__ */ m("span", { role: "status", children: [
    /* @__PURE__ */ e("span", { className: p(De.root, De[t], o), "aria-hidden": "true" }),
    n && /* @__PURE__ */ e(me, { children: n })
  ] });
}
const io = "wk-Kbd_root", lo = "wk-Kbd_group", ye = {
  root: io,
  group: lo
};
function rr({ keys: t, className: n, children: o, ...s }) {
  return t != null && t.length ? /* @__PURE__ */ e("span", { className: ye.group, ...s, children: t.map((a, r) => /* @__PURE__ */ e(he, { children: /* @__PURE__ */ e("kbd", { className: p(ye.root, n), children: a }) }, `${a}-${r}`)) }) : /* @__PURE__ */ e("kbd", { className: p(ye.root, n), ...s, children: o });
}
const mo = "wk-SplitPane_root", uo = "wk-SplitPane_horizontal", po = "wk-SplitPane_vertical", ho = "wk-SplitPane_pane", wo = "wk-SplitPane_handle", ae = {
  root: mo,
  horizontal: uo,
  vertical: po,
  pane: ho,
  handle: wo
};
function cr({
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
  const d = U(null), [u, _] = A(!1), b = n === "horizontal", w = J(
    (h) => {
      var $;
      const f = ($ = d.current) == null ? void 0 : $.getBoundingClientRect(), g = f ? (b ? f.width : f.height) - a : r;
      return Math.max(a, Math.min(h, Math.min(r, g)));
    },
    [a, r, b]
  ), k = (h) => s(w(o + h));
  return /* @__PURE__ */ m("div", { ref: d, className: p(ae.root, ae[n], i), children: [
    /* @__PURE__ */ e("div", { className: ae.pane, style: { [b ? "width" : "height"]: o, flex: "none" }, children: t[0] }),
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
        "data-dragging": u || void 0,
        className: ae.handle,
        onDoubleClick: () => c !== void 0 && s(c),
        onPointerDown: (h) => {
          h.currentTarget.setPointerCapture(h.pointerId), _(!0);
        },
        onPointerMove: (h) => {
          var g;
          if (!u) return;
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
    /* @__PURE__ */ e("div", { className: p(ae.pane), style: { flex: 1 }, children: t[1] })
  ] });
}
const ko = "wk-NavList_list", fo = "wk-NavList_item", bo = "wk-NavList_control", _o = "wk-NavList_icon", vo = "wk-NavList_label", go = "wk-NavList_badge", Q = {
  list: ko,
  item: fo,
  control: bo,
  icon: _o,
  label: vo,
  badge: go
};
function ir({ children: t, className: n, ...o }) {
  return /* @__PURE__ */ e("ul", { className: p(Q.list, n), ...o, children: t });
}
function lr({
  children: t,
  current: n = !1,
  icon: o,
  badge: s,
  onSelect: a,
  asChild: r = !1,
  disabled: c = !1,
  className: i
}) {
  const l = r ? we : "button";
  return /* @__PURE__ */ e("li", { className: Q.item, children: /* @__PURE__ */ m(
    l,
    {
      ...r ? {} : { type: "button", disabled: c },
      className: p(Q.control, i),
      "aria-current": n ? "page" : void 0,
      "data-current": n || void 0,
      onClick: a,
      children: [
        o && /* @__PURE__ */ e("span", { className: Q.icon, "aria-hidden": "true", children: o }),
        r ? /* @__PURE__ */ e(Ae, { children: t }) : /* @__PURE__ */ e("span", { className: Q.label, children: t }),
        s && /* @__PURE__ */ e("span", { className: Q.badge, children: s })
      ]
    }
  ) });
}
const yo = "wk-Tree_root", No = "wk-Tree_item", $o = "wk-Tree_twisty", Co = "wk-Tree_spacer", So = "wk-Tree_label", le = {
  root: yo,
  item: No,
  twisty: $o,
  spacer: Co,
  label: So
}, Re = ee(null);
function dr({ children: t, onActivate: n, onToggle: o, className: s, ...a }) {
  const r = U(null), [c, i] = A(null), l = U([]);
  l.current = [];
  const d = J((w) => {
    l.current.push(w);
  }, []), u = (w) => {
    var k, h;
    i(w), (h = (k = r.current) == null ? void 0 : k.querySelector(`[data-tree-id="${CSS.escape(w)}"]`)) == null || h.focus();
  }, _ = (w) => {
    var $;
    const k = l.current;
    if (!k.length) return;
    const h = c ? k.indexOf(c) : -1, f = c ? ($ = r.current) == null ? void 0 : $.querySelector(`[data-tree-id="${CSS.escape(c)}"]`) : null, g = f == null ? void 0 : f.getAttribute("aria-expanded");
    switch (w.key) {
      case "ArrowDown":
        w.preventDefault(), u(k[Math.min(h + 1, k.length - 1)]);
        break;
      case "ArrowUp":
        w.preventDefault(), u(k[Math.max(h - 1, 0)]);
        break;
      case "Home":
        w.preventDefault(), u(k[0]);
        break;
      case "End":
        w.preventDefault(), u(k[k.length - 1]);
        break;
      case "ArrowRight":
        g === "false" && c ? (w.preventDefault(), o == null || o(c, !0)) : g === "true" && (w.preventDefault(), u(k[Math.min(h + 1, k.length - 1)]));
        break;
      case "ArrowLeft":
        g === "true" && c ? (w.preventDefault(), o == null || o(c, !1)) : h > 0 && (w.preventDefault(), u(k[h - 1]));
        break;
      case "Enter":
      case " ":
        c && (w.preventDefault(), n == null || n(c));
        break;
    }
  }, b = q(
    () => ({ activeId: c, setActiveId: i, register: d }),
    [c, d]
  );
  return /* @__PURE__ */ e(Re.Provider, { value: b, children: /* @__PURE__ */ e(
    "div",
    {
      ref: r,
      role: "tree",
      className: p(le.root, s),
      onKeyDown: _,
      ...a,
      children: t
    }
  ) });
}
function mr({
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
  posInSet: u,
  setSize: _,
  indent: b = 14,
  className: w
}) {
  const k = Z(Re);
  if (!k) throw new Error("TreeItem must be used inside <Tree>");
  k.register(t);
  const h = k.activeId === t || k.activeId === null && n === 1 && u === 1;
  return /* @__PURE__ */ m(
    "div",
    {
      role: "treeitem",
      "data-tree-id": t,
      "aria-level": n,
      "aria-expanded": s ? !!a : void 0,
      "aria-selected": r,
      "aria-posinset": u,
      "aria-setsize": _,
      tabIndex: h ? 0 : -1,
      className: p(le.item, w),
      style: { paddingInlineStart: (n - 1) * b + 4 },
      onFocus: () => k.setActiveId(t),
      onClick: () => {
        k.setActiveId(t), l == null || l(t);
      },
      children: [
        s ? /* @__PURE__ */ e(
          "span",
          {
            className: le.twisty,
            "data-expanded": !!a,
            onClick: (f) => {
              f.stopPropagation(), d == null || d(t, !a);
            },
            children: /* @__PURE__ */ e(Le, {})
          }
        ) : /* @__PURE__ */ e("span", { className: le.spacer }),
        c,
        /* @__PURE__ */ e("span", { className: le.label, children: o }),
        i
      ]
    }
  );
}
const To = "wk-CommandPalette_overlay", xo = "wk-CommandPalette_content", Io = "wk-CommandPalette_search", Do = "wk-CommandPalette_searchIcon", Bo = "wk-CommandPalette_input", Po = "wk-CommandPalette_list", Ao = "wk-CommandPalette_group", Lo = "wk-CommandPalette_heading", Eo = "wk-CommandPalette_item", Mo = "wk-CommandPalette_itemIcon", Fo = "wk-CommandPalette_itemLabel", Ro = "wk-CommandPalette_itemHint", Ho = "wk-CommandPalette_empty", Oo = "wk-CommandPalette_footer", x = {
  overlay: To,
  content: xo,
  search: Io,
  searchIcon: Do,
  input: Bo,
  list: Po,
  group: Ao,
  heading: Lo,
  item: Eo,
  itemIcon: Mo,
  itemLabel: Fo,
  itemHint: Ro,
  empty: Ho,
  footer: Oo
}, He = ee(null);
function ur({
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
  const u = R(), [_, b] = A(0), [w, k] = A([]), h = U(/* @__PURE__ */ new Map()), f = q(
    () => (y, C) => {
      h.current.set(y, C);
    },
    []
  ), g = q(
    () => (y) => (k((C) => C.includes(y) ? C : [...C, y]), () => {
      k((C) => C.filter((ue) => ue !== y)), h.current.delete(y);
    }),
    []
  );
  ie(() => b(0), [o]);
  const $ = w.length, v = w[_] ?? w[0] ?? null, N = q(
    () => ({ activeId: v, register: f, attach: g, listId: u }),
    [v, f, g, u]
  );
  return /* @__PURE__ */ e(T.Root, { open: t, onOpenChange: n, children: /* @__PURE__ */ m(T.Portal, { children: [
    /* @__PURE__ */ e(T.Overlay, { className: x.overlay }),
    /* @__PURE__ */ m(T.Content, { className: p(x.content, l), children: [
      /* @__PURE__ */ e(T.Title, { asChild: !0, children: /* @__PURE__ */ e(me, { children: c }) }),
      /* @__PURE__ */ m(He.Provider, { value: N, children: [
        /* @__PURE__ */ m("div", { className: x.search, children: [
          /* @__PURE__ */ e("span", { className: x.searchIcon, "aria-hidden": "true", children: d ?? /* @__PURE__ */ e(qe, {}) }),
          /* @__PURE__ */ e(
            "input",
            {
              className: x.input,
              value: o,
              onChange: (y) => s(y.target.value),
              placeholder: r,
              role: "combobox",
              "aria-expanded": !0,
              "aria-controls": u,
              "aria-activedescendant": v ? `${u}-${v}` : void 0,
              "aria-autocomplete": "list",
              autoComplete: "off",
              autoFocus: !0,
              onKeyDown: (y) => {
                if (y.key === "ArrowDown" && $)
                  y.preventDefault(), b((C) => (C + 1) % $);
                else if (y.key === "ArrowUp" && $)
                  y.preventDefault(), b((C) => C <= 0 ? $ - 1 : C - 1);
                else if (y.key === "Enter") {
                  const C = w[_] ?? w[0], ue = C ? h.current.get(C) : void 0;
                  if (!ue) return;
                  y.preventDefault(), ue();
                }
              }
            }
          )
        ] }),
        /* @__PURE__ */ e("ul", { className: x.list, id: u, role: "listbox", "aria-label": c, children: a }),
        i && /* @__PURE__ */ e("div", { className: x.footer, children: i })
      ] })
    ] })
  ] }) });
}
function pr({ heading: t, children: n }) {
  return /* @__PURE__ */ m("li", { className: x.group, children: [
    t && /* @__PURE__ */ e("div", { className: x.heading, children: t }),
    /* @__PURE__ */ e("ul", { role: "group", style: { listStyle: "none", margin: 0, padding: 0 }, children: n })
  ] });
}
function hr({ id: t, children: n, onSelect: o, icon: s, hint: a }) {
  const r = Z(He);
  if (!r) throw new Error("CommandItem must be used inside <CommandPalette>");
  r.register(t, o);
  const { attach: c } = r;
  Ke(() => c(t), [c, t]);
  const i = r.activeId === t;
  return /* @__PURE__ */ m(
    "li",
    {
      id: `${r.listId}-${t}`,
      role: "option",
      "aria-selected": i,
      "data-active": i,
      className: x.item,
      onMouseDown: (l) => {
        l.preventDefault(), o();
      },
      children: [
        s && /* @__PURE__ */ e("span", { className: x.itemIcon, children: s }),
        /* @__PURE__ */ e("span", { className: x.itemLabel, children: n }),
        a && /* @__PURE__ */ e("span", { className: x.itemHint, children: a })
      ]
    }
  );
}
function wr({ children: t }) {
  return /* @__PURE__ */ e("li", { className: x.empty, children: t });
}
const zo = "wk-KeyValueEditor_root", Vo = "wk-KeyValueEditor_head", Ko = "wk-KeyValueEditor_row", jo = "wk-KeyValueEditor_cell", qo = "wk-KeyValueEditor_actions", Jo = "wk-KeyValueEditor_remove", Uo = "wk-KeyValueEditor_footer", Go = "wk-KeyValueEditor_empty", M = {
  root: zo,
  head: Vo,
  row: Ko,
  cell: jo,
  actions: qo,
  remove: Jo,
  footer: Uo,
  empty: Go
};
function kr({
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
  maskValues: u = !1,
  className: _
}) {
  const b = R();
  let w = 0;
  const k = () => (c == null ? void 0 : c()) ?? `${b}-${t.length}-${w++}`, h = (f, g) => n(t.map(($) => $.id === f ? { ...$, ...g } : $));
  return /* @__PURE__ */ m("div", { className: p(M.root, _), children: [
    /* @__PURE__ */ m("div", { className: M.head, "aria-hidden": "true", children: [
      /* @__PURE__ */ e("span", { children: i ? "" : null }),
      /* @__PURE__ */ e("span", { children: o }),
      /* @__PURE__ */ e("span", { children: s }),
      /* @__PURE__ */ e("span", {})
    ] }),
    t.length === 0 && /* @__PURE__ */ e("p", { className: M.empty, children: d }),
    t.map((f, g) => {
      const $ = f.enabled ?? !0;
      return /* @__PURE__ */ m("div", { className: M.row, "data-disabled": !$, children: [
        /* @__PURE__ */ e("span", { className: M.cell, children: i && /* @__PURE__ */ e(
          Ot,
          {
            checked: $,
            onCheckedChange: (v) => h(f.id, { enabled: v === !0 }),
            "aria-label": `Enable ${f.key || `row ${g + 1}`}`
          }
        ) }),
        /* @__PURE__ */ e("span", { className: M.cell, children: /* @__PURE__ */ e(
          $e,
          {
            size: "sm",
            mono: !0,
            value: f.key,
            placeholder: a,
            "aria-label": `${o}, row ${g + 1}`,
            onChange: (v) => h(f.id, { key: v.target.value })
          }
        ) }),
        /* @__PURE__ */ e("span", { className: M.cell, children: /* @__PURE__ */ e(
          $e,
          {
            size: "sm",
            mono: !0,
            type: u ? "password" : "text",
            value: f.value,
            placeholder: r,
            "aria-label": `${s}, row ${g + 1}`,
            onChange: (v) => h(f.id, { value: v.target.value })
          }
        ) }),
        /* @__PURE__ */ e("span", { className: M.actions, children: /* @__PURE__ */ m(
          "button",
          {
            type: "button",
            className: M.remove,
            onClick: () => n(t.filter((v) => v.id !== f.id)),
            children: [
              /* @__PURE__ */ e(be, {}),
              /* @__PURE__ */ m(me, { children: [
                "Remove ",
                f.key || `row ${g + 1}`
              ] })
            ]
          }
        ) })
      ] }, f.id);
    }),
    /* @__PURE__ */ e("div", { className: M.footer, children: /* @__PURE__ */ m(
      ot,
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
const Yo = "wk-CodeSurface_root", Xo = "wk-CodeSurface_toolbar", Qo = "wk-CodeSurface_body", Wo = "wk-CodeSurface_pre", Zo = "wk-CodeSurface_status", de = {
  root: Yo,
  toolbar: Xo,
  body: Qo,
  pre: Wo,
  status: Zo
};
function fr({ children: t, toolbar: n, status: o, className: s }) {
  return /* @__PURE__ */ m("div", { className: p(de.root, s), children: [
    n && /* @__PURE__ */ e("div", { className: de.toolbar, children: n }),
    /* @__PURE__ */ e("div", { className: de.body, children: t }),
    o && /* @__PURE__ */ e("div", { className: de.status, children: o })
  ] });
}
function br({ code: t, className: n, ...o }) {
  return /* @__PURE__ */ e("pre", { className: p(de.pre, n), tabIndex: 0, ...o, children: /* @__PURE__ */ e("code", { children: t }) });
}
const es = "wk-Form_section", ts = "wk-Form_sectionTop", ns = "wk-Form_sectionHead", os = "wk-Form_sectionTitle", ss = "wk-Form_sectionDesc", as = "wk-Form_sectionBody", rs = "wk-Form_row", cs = "wk-Form_rowText", is = "wk-Form_rowLabel", ls = "wk-Form_rowDesc", ds = "wk-Form_rowControl", ms = "wk-Form_stacked", P = {
  section: es,
  sectionTop: ts,
  sectionHead: ns,
  sectionTitle: os,
  sectionDesc: ss,
  sectionBody: as,
  row: rs,
  rowText: cs,
  rowLabel: is,
  rowDesc: ls,
  rowControl: ds,
  stacked: ms
};
function _r({ title: t, description: n, children: o, action: s, className: a }) {
  const r = R();
  return /* @__PURE__ */ m("section", { className: p(P.section, a), "aria-labelledby": t ? r : void 0, children: [
    (t || s) && /* @__PURE__ */ m("div", { className: P.sectionTop, children: [
      /* @__PURE__ */ m("div", { className: P.sectionHead, children: [
        t && /* @__PURE__ */ e("h2", { className: P.sectionTitle, id: r, children: t }),
        n && /* @__PURE__ */ e("p", { className: P.sectionDesc, children: n })
      ] }),
      s
    ] }),
    /* @__PURE__ */ e("div", { className: P.sectionBody, children: o })
  ] });
}
function vr({ label: t, description: n, children: o, stacked: s, className: a }) {
  return /* @__PURE__ */ m("div", { className: p(P.row, s && P.stacked, a), children: [
    /* @__PURE__ */ m("div", { className: P.rowText, children: [
      /* @__PURE__ */ e("span", { className: P.rowLabel, children: t }),
      n && /* @__PURE__ */ e("p", { className: P.rowDesc, children: n })
    ] }),
    /* @__PURE__ */ e("div", { className: P.rowControl, children: o })
  ] });
}
const us = "wk-HighlightText_mark", ps = {
  mark: us
};
function gr({ text: t, query: n, className: o }) {
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
  return /* @__PURE__ */ e("span", { className: o, children: r.map((i, l) => /* @__PURE__ */ e(he, { children: i.hit ? /* @__PURE__ */ e("mark", { className: ps.mark, children: i.chunk }) : i.chunk }, l)) });
}
const hs = "wk-SkipToContent_root", ws = {
  root: hs
};
function yr({
  targetId: t = "wk-main",
  children: n = "Skip to content",
  className: o
}) {
  return /* @__PURE__ */ e("a", { href: `#${t}`, className: p(ws.root, o), children: n });
}
const ks = "wk-Card_root", fs = "wk-Card_outlined", bs = "wk-Card_raised", _s = "wk-Card_inset", vs = "wk-Card_interactive", gs = "wk-Card_top", ys = "wk-Card_icon", Ns = "wk-Card_head", $s = "wk-Card_title", Cs = "wk-Card_description", Ss = "wk-Card_action", Ts = "wk-Card_body", xs = "wk-Card_footer", D = {
  root: ks,
  outlined: fs,
  raised: bs,
  inset: _s,
  "padding-none": "wk-Card_padding-none",
  "padding-sm": "wk-Card_padding-sm",
  "padding-md": "wk-Card_padding-md",
  "padding-lg": "wk-Card_padding-lg",
  interactive: vs,
  top: gs,
  icon: ys,
  head: Ns,
  title: $s,
  description: Cs,
  action: Ss,
  body: Ts,
  footer: xs
};
function Nr({
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
  asChild: u = !1,
  className: _,
  ...b
}) {
  const w = R(), k = t ? w : void 0, h = `h${n}`, f = /* @__PURE__ */ m(Pe, { children: [
    (t || a || s) && /* @__PURE__ */ m("div", { className: D.top, children: [
      s && /* @__PURE__ */ e("span", { className: D.icon, "aria-hidden": "true", children: s }),
      /* @__PURE__ */ m("div", { className: D.head, children: [
        t && /* @__PURE__ */ e(h, { className: D.title, id: k, children: t }),
        o && /* @__PURE__ */ e("p", { className: D.description, children: o })
      ] }),
      a && /* @__PURE__ */ e("div", { className: D.action, children: a })
    ] }),
    c && /* @__PURE__ */ e("div", { className: D.body, children: c }),
    r && /* @__PURE__ */ e("div", { className: D.footer, children: r })
  ] }), g = p(
    D.root,
    D[i],
    D[`padding-${l}`],
    d && D.interactive,
    _
  );
  return u ? /* @__PURE__ */ e(we, { className: g, "aria-labelledby": k, ...b, children: /* @__PURE__ */ e("div", { children: f }) }) : d ? /* @__PURE__ */ e(
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
const Is = "wk-Stepper_root", Ds = "wk-Stepper_horizontal", Bs = "wk-Stepper_vertical", Ps = "wk-Stepper_step", As = "wk-Stepper_complete", Ls = "wk-Stepper_current", Es = "wk-Stepper_marker", Ms = "wk-Stepper_text", Fs = "wk-Stepper_label", Rs = "wk-Stepper_description", z = {
  root: Is,
  horizontal: Ds,
  vertical: Bs,
  step: Ps,
  complete: As,
  current: Ls,
  marker: Es,
  text: Ms,
  label: Fs,
  description: Rs
};
function $r({
  steps: t,
  current: n,
  orientation: o = "horizontal",
  className: s,
  "aria-label": a
}) {
  return /* @__PURE__ */ e("ol", { className: p(z.root, z[o], s), "aria-label": a, children: t.map((r, c) => {
    const { label: i, description: l } = typeof r == "string" ? { label: r, description: void 0 } : r, d = c < n ? "complete" : c === n ? "current" : "upcoming";
    return /* @__PURE__ */ m(
      "li",
      {
        className: p(z.step, z[d]),
        "aria-current": d === "current" ? "step" : void 0,
        children: [
          /* @__PURE__ */ e("span", { className: z.marker, "aria-hidden": "true", children: d === "complete" ? /* @__PURE__ */ e(Ce, {}) : c + 1 }),
          /* @__PURE__ */ m("span", { className: z.text, children: [
            /* @__PURE__ */ m("span", { className: z.label, children: [
              i,
              /* @__PURE__ */ e(me, { children: d === "complete" ? " (completed)" : d === "current" ? " (current step)" : " (not started)" })
            ] }),
            l && /* @__PURE__ */ e("span", { className: z.description, children: l })
          ] })
        ]
      },
      c
    );
  }) });
}
const Hs = "wk-Breadcrumb_root", Os = "wk-Breadcrumb_list", zs = "wk-Breadcrumb_item", Vs = "wk-Breadcrumb_separator", Ks = "wk-Breadcrumb_link", js = "wk-Breadcrumb_ellipsis", qs = "wk-Breadcrumb_current", K = {
  root: Hs,
  list: Os,
  item: zs,
  separator: Vs,
  link: Ks,
  ellipsis: js,
  current: qs
}, Oe = ee({ isLast: !1 });
function Cr({
  children: t,
  separator: n = "/",
  maxItems: o,
  "aria-label": s = "Breadcrumb",
  className: a
}) {
  const [r, c] = A(!1), i = Js(t), l = !r && o !== void 0 && o >= 3 && i.length > o, d = l ? i.slice(i.length - (o - 2)) : [], u = l ? [i[0], Be, ...d] : i;
  return /* @__PURE__ */ e("nav", { "aria-label": s, className: p(K.root, a), children: /* @__PURE__ */ e("ol", { className: K.list, children: u.map((_, b) => {
    const w = b === u.length - 1;
    return (
      // biome-ignore lint/suspicious/noArrayIndexKey: position IS the identity here
      /* @__PURE__ */ m("li", { className: K.item, children: [
        b > 0 && /* @__PURE__ */ e("span", { "aria-hidden": "true", className: K.separator, children: n }),
        _ === Be ? /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: K.ellipsis,
            onClick: () => c(!0),
            "aria-label": "Show the full path",
            children: "…"
          }
        ) : /* @__PURE__ */ e(Oe.Provider, { value: { isLast: w }, children: _ })
      ] }, b)
    );
  }) }) });
}
const Be = Symbol("breadcrumb-ellipsis");
function Js(t) {
  const n = [], o = (s) => {
    if (!(s == null || s === !1 || s === !0)) {
      if (Array.isArray(s)) {
        for (const a of s) o(a);
        return;
      }
      if (je(s) && s.type === he) {
        o(s.props.children);
        return;
      }
      n.push(s);
    }
  };
  return o(t), n;
}
function Sr({ children: t, current: n, className: o, ...s }) {
  const { isLast: a } = Z(Oe);
  return n ?? a ? /* @__PURE__ */ e("span", { "aria-current": "page", className: p(K.current, o), children: t }) : /* @__PURE__ */ e("a", { className: p(K.link, o), ...s, children: t });
}
const Us = "wk-Table_wrapper", Gs = "wk-Table_scroll", Ys = "wk-Table_root", Xs = "wk-Table_caption", Qs = "wk-Table_th", Ws = "wk-Table_td", Zs = "wk-Table_sortButton", ea = "wk-Table_sortIndicator", ta = "wk-Table_numeric", na = "wk-Table_captionHidden", oa = "wk-Table_row", sa = "wk-Table_interactive", aa = "wk-Table_sticky", S = {
  wrapper: Us,
  scroll: Gs,
  root: Ys,
  caption: Xs,
  th: Qs,
  td: Ws,
  sortButton: Zs,
  sortIndicator: ea,
  numeric: ta,
  captionHidden: na,
  row: oa,
  interactive: sa,
  sticky: aa
};
function Tr({
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
      className: p(S.wrapper, l && S.scroll),
      style: l ? { "--wk-table-max-block": a } : void 0,
      children: /* @__PURE__ */ m(
        "table",
        {
          className: p(
            S.root,
            o && S.interactive,
            s && S.sticky,
            r
          ),
          ...i,
          children: [
            t && /* @__PURE__ */ e("caption", { className: p(S.caption, n && S.captionHidden), children: t }),
            c
          ]
        }
      )
    }
  );
}
const xr = (t) => /* @__PURE__ */ e("thead", { ...t }), Ir = (t) => /* @__PURE__ */ e("tbody", { ...t }), Dr = ({ selected: t, className: n, ...o }) => /* @__PURE__ */ e("tr", { "data-selected": t || void 0, className: p(S.row, n), ...o }), Br = ({
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
    return /* @__PURE__ */ e("th", { scope: a, className: p(S.th, t && S.numeric, r), ...i, children: c });
  const l = o ?? null;
  return /* @__PURE__ */ e(
    "th",
    {
      scope: a,
      "aria-sort": l === "asc" ? "ascending" : l === "desc" ? "descending" : "none",
      className: p(S.th, t && S.numeric, r),
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
}, Pr = ({ numeric: t, className: n, ...o }) => /* @__PURE__ */ e("td", { className: p(S.td, t && S.numeric, n), ...o }), ra = "wk-Badge_root", ca = "wk-Badge_neutral", ia = "wk-Badge_accent", la = "wk-Badge_danger", da = "wk-Badge_warn", ma = "wk-Badge_success", ua = "wk-Badge_info", pa = "wk-Badge_mono", Ne = {
  root: ra,
  neutral: ca,
  accent: ia,
  danger: la,
  warn: da,
  success: ma,
  info: ua,
  mono: pa
};
function Ar({ tone: t = "neutral", mono: n = !1, className: o, ...s }) {
  return /* @__PURE__ */ e("span", { className: p(Ne.root, Ne[t], n && Ne.mono, o), ...s });
}
const ha = "wk-AppShell_root", wa = "wk-AppShell_titlebar", ka = "wk-AppShell_body", fa = "wk-AppShell_sidebar", ba = "wk-AppShell_main", re = {
  root: ha,
  titlebar: wa,
  body: ka,
  sidebar: fa,
  main: ba
};
function Lr({
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
      className: p(re.root, i),
      style: a ? { "--wk-sidebar-w": a } : void 0,
      children: [
        t && /* @__PURE__ */ e(
          "header",
          {
            className: re.titlebar,
            "data-inset-controls": o || void 0,
            ...n ? { "data-tauri-drag-region": "" } : {},
            children: t
          }
        ),
        /* @__PURE__ */ m("div", { className: re.body, "data-has-sidebar": s ? "true" : void 0, children: [
          s && /* @__PURE__ */ e("nav", { className: re.sidebar, "aria-label": "Primary", children: s }),
          /* @__PURE__ */ e("main", { id: c, className: re.main, tabIndex: -1, children: r })
        ] })
      ]
    }
  );
}
const _a = {
  1: "2xl",
  2: "xl",
  3: "lg",
  4: "md",
  5: "sm",
  6: "xs"
}, ze = {
  xs: B.xs,
  sm: B.sm,
  md: B.md,
  lg: B.lg,
  xl: B.xl,
  "2xl": B.xxl
}, Er = L(function({ level: n, size: o, className: s, ...a }, r) {
  const c = `h${n}`, i = ze[o ?? _a[n]];
  return /* @__PURE__ */ e(c, { ref: r, className: p(B.heading, i, s), ...a });
}), Mr = L(function({ as: n = "p", size: o = "md", tone: s = "default", mono: a = !1, className: r, ...c }, i) {
  return /* @__PURE__ */ e(
    n,
    {
      ref: i,
      className: p(
        B.text,
        ze[o],
        s !== "default" && B[s],
        a && B.mono,
        r
      ),
      ...c
    }
  );
}), Fr = L(function({ external: n = !1, nofollow: o = !1, asChild: s = !1, className: a, rel: r, target: c, ...i }, l) {
  const d = s ? we : "a", u = new Set((r ?? "").split(/\s+/).filter(Boolean));
  return n && (u.add("noopener"), u.add("noreferrer")), o && u.add("nofollow"), /* @__PURE__ */ e(
    d,
    {
      ref: l,
      className: p(B.link, a),
      target: c ?? (n ? "_blank" : void 0),
      rel: u.size ? [...u].join(" ") : void 0,
      ...i
    }
  );
}), va = "wk-Media_image", ga = "wk-Media_skeleton", Ve = {
  image: va,
  skeleton: ga
}, Rr = L(function({ width: n, height: o, aspectRatio: s, priority: a = !1, className: r, style: c, alt: i, ...l }, d) {
  const u = s ?? (n && o ? `${n}/${o}` : void 0);
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
      className: p(Ve.image, r),
      style: { ...u ? { "--wk-image-ar": String(u) } : null, ...c },
      ...l
    }
  );
});
function Hr({
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
      className: p(Ve.skeleton, s),
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
function ya({ data: t, nonce: n }) {
  const o = JSON.stringify(t).replace(/</g, "\\u003c");
  return /* @__PURE__ */ e("script", { type: "application/ld+json", nonce: n, dangerouslySetInnerHTML: { __html: o } });
}
const Na = "wk-Breadcrumbs_root", $a = "wk-Breadcrumbs_list", Ca = "wk-Breadcrumbs_item", Sa = "wk-Breadcrumbs_link", Ta = "wk-Breadcrumbs_sep", ce = {
  root: Na,
  list: $a,
  item: Ca,
  link: Sa,
  sep: Ta
};
function Or({ items: t, origin: n, className: o }) {
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
  return /* @__PURE__ */ m(Pe, { children: [
    /* @__PURE__ */ e("nav", { "aria-label": "Breadcrumb", className: p(ce.root, o), children: /* @__PURE__ */ e("ol", { className: ce.list, children: t.map((a, r) => {
      const c = r === t.length - 1;
      return /* @__PURE__ */ m(he, { children: [
        /* @__PURE__ */ e("li", { className: ce.item, children: a.href && !c ? /* @__PURE__ */ e("a", { className: ce.link, href: a.href, children: a.label }) : /* @__PURE__ */ e("span", { "aria-current": c ? "page" : void 0, children: a.label }) }),
        !c && /* @__PURE__ */ e("li", { className: ce.sep, "aria-hidden": "true", children: "/" })
      ] }, `${a.label}-${r}`);
    }) }) }),
    /* @__PURE__ */ e(ya, { data: s })
  ] });
}
export {
  or as Alert,
  Lr as AppShell,
  Ar as Badge,
  Cr as Breadcrumb,
  Sr as BreadcrumbItem,
  Or as Breadcrumbs,
  ot as Button,
  Nr as Card,
  Ce as CheckIcon,
  Ot as Checkbox,
  Le as ChevronDownIcon,
  be as CloseIcon,
  br as CodeBlock,
  fr as CodeSurface,
  tr as Combobox,
  wr as CommandEmpty,
  pr as CommandGroup,
  hr as CommandItem,
  ur as CommandPalette,
  Oa as Dialog,
  za as DialogClose,
  sr as EmptyState,
  La as Field,
  _r as FormSection,
  Er as Heading,
  gr as HighlightText,
  Rr as Image,
  $e as Input,
  ya as JsonLd,
  rr as Kbd,
  kr as KeyValueEditor,
  Fr as Link,
  Va as Menu,
  Ka as MenuItem,
  ja as MenuLabel,
  qa as MenuSeparator,
  lr as NavItem,
  ir as NavList,
  qe as SearchIcon,
  nr as SegmentedControl,
  Ea as Select,
  Fa as SelectGroup,
  Ma as SelectItem,
  Ra as SelectSeparator,
  vr as SettingRow,
  Hr as Skeleton,
  yr as SkipToContent,
  ar as Spinner,
  cr as SplitPane,
  $r as Stepper,
  Ha as Switch,
  Tr as Table,
  Ga as Tabs,
  Qa as TabsContent,
  Ya as TabsList,
  Xa as TabsTrigger,
  Ir as Tbody,
  Pr as Td,
  Mr as Text,
  er as Textarea,
  Br as Th,
  xr as Thead,
  Ba as ThemeProvider,
  Aa as ThemeScript,
  Wa as ToastProvider,
  Ua as Tooltip,
  Ja as TooltipProvider,
  Dr as Tr,
  dr as Tree,
  mr as TreeItem,
  me as VisuallyHidden,
  p as cn,
  Se as useField,
  Pa as useTheme,
  Za as useToast
};
//# sourceMappingURL=index.js.map
