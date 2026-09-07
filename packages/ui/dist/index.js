import { jsx as e, jsxs as m, Fragment as Be } from "react/jsx-runtime";
import { useState as P, useEffect as ie, useCallback as q, useMemo as j, useContext as Z, createContext as ee, forwardRef as A, useId as F, useRef as J, Fragment as pe, useLayoutEffect as Ve, isValidElement as Ke } from "react";
import { Slot as he, Slottable as Pe } from "@radix-ui/react-slot";
import * as x from "@radix-ui/react-select";
import * as Se from "@radix-ui/react-switch";
import * as Te from "@radix-ui/react-checkbox";
import * as S from "@radix-ui/react-dialog";
import * as K from "@radix-ui/react-dropdown-menu";
import * as X from "@radix-ui/react-tooltip";
import * as we from "@radix-ui/react-tabs";
import * as G from "@radix-ui/react-toast";
function u(...t) {
  return t.filter((n) => typeof n == "string" && n !== "").join(" ");
}
const Ne = (t) => ({
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
}), $e = (t) => /* @__PURE__ */ e("svg", { ...Ne(t), children: /* @__PURE__ */ e("path", { d: "M3 8.5 6.5 12 13 4.5" }) }), Ae = (t) => /* @__PURE__ */ e("svg", { ...Ne(t), children: /* @__PURE__ */ e("path", { d: "m4 6 4 4 4-4" }) }), ke = (t) => /* @__PURE__ */ e("svg", { ...Ne(t), children: /* @__PURE__ */ e("path", { d: "M4 4l8 8M12 4l-8 8" }) }), Le = ee(null);
function je(t) {
  if (!t || typeof window > "u") return {};
  try {
    return JSON.parse(window.localStorage.getItem(t) ?? "{}");
  } catch {
    return {};
  }
}
function Ia({
  children: t,
  theme: n,
  defaultTheme: o = "system",
  defaultDensity: s = "normal",
  storageKey: a = "wertkit-theme",
  target: r = "root"
}) {
  const [c, i] = P(o), [l, d] = P(s), [p, v] = P(!1), [b, k] = P(null);
  ie(() => {
    const y = je(a);
    y.theme && i(y.theme), y.density && d(y.density);
  }, [a]);
  const h = n ?? c;
  ie(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function") return;
    const y = window.matchMedia("(prefers-color-scheme: dark)"), _ = () => v(y.matches);
    return _(), y.addEventListener("change", _), () => y.removeEventListener("change", _);
  }, []);
  const w = h === "system" ? p ? "dark" : "light" : h;
  ie(() => {
    const y = r === "self" ? b : document.documentElement;
    y && (y.setAttribute("data-theme", w), y.setAttribute("data-density", l));
  }, [w, l, r, b]), ie(() => {
    if (!(!a || typeof window > "u"))
      try {
        window.localStorage.setItem(a, JSON.stringify({ theme: h, density: l }));
      } catch {
      }
  }, [h, l, a]);
  const f = q((y) => i(y), []), g = q((y) => d(y), []), $ = j(
    () => ({ theme: h, resolvedTheme: w, setTheme: f, density: l, setDensity: g }),
    [h, w, f, l, g]
  );
  return /* @__PURE__ */ e(Le.Provider, { value: $, children: r === "self" ? /* @__PURE__ */ e("div", { ref: k, children: t }) : t });
}
function Da() {
  const t = Z(Le);
  if (!t) throw new Error("useTheme must be used inside <ThemeProvider>");
  return t;
}
function Ba({
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
const qe = "wk-Button_root", Je = "wk-Button_sm", Ue = "wk-Button_md", Ge = "wk-Button_lg", Ye = "wk-Button_iconOnly", Xe = "wk-Button_primary", Qe = "wk-Button_secondary", We = "wk-Button_ghost", Ze = "wk-Button_danger", et = "wk-Button_spinner", te = {
  root: qe,
  sm: Je,
  md: Ue,
  lg: Ge,
  iconOnly: Ye,
  primary: Xe,
  secondary: Qe,
  ghost: We,
  danger: Ze,
  spinner: et,
  "wk-spin": "wk-Button_wk-spin"
}, tt = A(function({
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
  type: v,
  ...b
}, k) {
  return /* @__PURE__ */ m(
    i ? he : "button",
    {
      ref: k,
      type: i ? void 0 : v ?? "button",
      disabled: p || a,
      "data-loading": a || void 0,
      className: u(
        te.root,
        te[n],
        te[o],
        s && te.iconOnly,
        l
      ),
      ...b,
      children: [
        a ? /* @__PURE__ */ e("span", { className: te.spinner, "aria-hidden": "true" }) : r,
        i ? /* @__PURE__ */ e(Pe, { children: d }) : d,
        !a && c
      ]
    }
  );
}), nt = "wk-Field_root", ot = "wk-Field_label", st = "wk-Field_required", at = "wk-Field_hint", rt = "wk-Field_error", ne = {
  root: nt,
  label: ot,
  required: st,
  hint: at,
  error: rt
}, Ee = ee(null), Ce = () => Z(Ee);
function Pa({ label: t, hint: n, error: o, required: s, children: a, className: r }) {
  const c = F(), i = `${c}-input`, l = `${c}-hint`, d = `${c}-error`, p = !!o, v = [o ? d : null, n ? l : null].filter(Boolean).join(" ") || void 0;
  return /* @__PURE__ */ e(Ee.Provider, { value: { inputId: i, describedBy: v, invalid: p }, children: /* @__PURE__ */ m("div", { className: u(ne.root, r), children: [
    t && /* @__PURE__ */ m("label", { className: ne.label, htmlFor: i, children: [
      t,
      s && /* @__PURE__ */ e("span", { className: ne.required, "aria-hidden": "true", children: "*" })
    ] }),
    a,
    o ? /* @__PURE__ */ e("p", { className: ne.error, id: d, role: "alert", children: o }) : n && /* @__PURE__ */ e("p", { className: ne.hint, id: l, children: n })
  ] }) });
}
const ct = "wk-Input_root", it = "wk-Input_mono", lt = "wk-Input_shell", dt = "wk-Input_slot", mt = "wk-Input_start", ut = "wk-Input_end", pt = "wk-Input_hasStart", ht = "wk-Input_hasEnd", wt = "wk-Input_sm", kt = "wk-Input_md", ft = "wk-Input_lg", L = {
  root: ct,
  mono: it,
  shell: lt,
  slot: dt,
  start: mt,
  end: ut,
  hasStart: pt,
  hasEnd: ht,
  sm: wt,
  md: kt,
  lg: ft
}, ye = A(function({
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
  const v = Ce(), b = o ?? (v == null ? void 0 : v.invalid) ?? !1, k = /* @__PURE__ */ e(
    "input",
    {
      ref: p,
      id: i ?? (v == null ? void 0 : v.inputId),
      "aria-invalid": b || void 0,
      "aria-describedby": l ?? (v == null ? void 0 : v.describedBy),
      className: u(
        L.root,
        L[n],
        s && L.mono,
        a && L.hasStart,
        r && L.hasEnd,
        !a && !r && c
      ),
      ...d
    }
  );
  return !a && !r ? k : /* @__PURE__ */ m("span", { className: u(L.shell, c), "data-invalid": b || void 0, children: [
    a && /* @__PURE__ */ e("span", { className: u(L.slot, L.start), "aria-hidden": "true", children: a }),
    k,
    r && /* @__PURE__ */ e("span", { className: u(L.slot, L.end), children: r })
  ] });
}), bt = "wk-Select_trigger", _t = "wk-Select_sm", vt = "wk-Select_md", gt = "wk-Select_lg", yt = "wk-Select_icon", Nt = "wk-Select_content", $t = "wk-Select_viewport", Ct = "wk-Select_item", St = "wk-Select_itemIndicator", Tt = "wk-Select_label", xt = "wk-Select_separator", M = {
  trigger: bt,
  sm: _t,
  md: vt,
  lg: gt,
  icon: yt,
  content: Nt,
  viewport: $t,
  item: Ct,
  itemIndicator: St,
  label: Tt,
  separator: xt
};
function Aa({
  placeholder: t,
  size: n = "md",
  children: o,
  className: s,
  id: a,
  "aria-label": r,
  ...c
}) {
  const i = Ce();
  return /* @__PURE__ */ m(x.Root, { ...c, children: [
    /* @__PURE__ */ m(
      x.Trigger,
      {
        id: a ?? (i == null ? void 0 : i.inputId),
        "aria-label": r,
        "aria-invalid": (i == null ? void 0 : i.invalid) || void 0,
        "aria-describedby": i == null ? void 0 : i.describedBy,
        className: u(M.trigger, M[n], s),
        children: [
          /* @__PURE__ */ e(x.Value, { placeholder: t }),
          /* @__PURE__ */ e(x.Icon, { className: M.icon, children: /* @__PURE__ */ e(Ae, {}) })
        ]
      }
    ),
    /* @__PURE__ */ e(x.Portal, { children: /* @__PURE__ */ e(x.Content, { className: M.content, position: "popper", sideOffset: 4, children: /* @__PURE__ */ e(x.Viewport, { className: M.viewport, children: o }) }) })
  ] });
}
const La = A(
  function({ className: n, children: o, ...s }, a) {
    return /* @__PURE__ */ m(x.Item, { ref: a, className: u(M.item, n), ...s, children: [
      /* @__PURE__ */ e(x.ItemText, { children: o }),
      /* @__PURE__ */ e(x.ItemIndicator, { className: M.itemIndicator, children: /* @__PURE__ */ e($e, {}) })
    ] });
  }
);
function Ea({ label: t, children: n }) {
  return /* @__PURE__ */ m(x.Group, { children: [
    /* @__PURE__ */ e(x.Label, { className: M.label, children: t }),
    n
  ] });
}
function Ma() {
  return /* @__PURE__ */ e(x.Separator, { className: M.separator });
}
const It = "wk-Switch_wrapper", Dt = "wk-Switch_root", Bt = "wk-Switch_thumb", Pt = "wk-Switch_label", ue = {
  wrapper: It,
  root: Dt,
  thumb: Bt,
  label: Pt
}, Fa = A(function({ label: n, className: o, id: s, ...a }, r) {
  const c = F(), i = s ?? c, l = /* @__PURE__ */ e(Se.Root, { ref: r, id: i, className: u(ue.root, o), ...a, children: /* @__PURE__ */ e(Se.Thumb, { className: ue.thumb }) });
  return n ? /* @__PURE__ */ m("span", { className: ue.wrapper, children: [
    l,
    /* @__PURE__ */ e("label", { className: ue.label, htmlFor: i, children: n })
  ] }) : l;
}), At = "wk-Checkbox_wrapper", Lt = "wk-Checkbox_root", Et = "wk-Checkbox_indicator", Mt = "wk-Checkbox_dash", Ft = "wk-Checkbox_label", oe = {
  wrapper: At,
  root: Lt,
  indicator: Et,
  dash: Mt,
  label: Ft
}, Rt = A(function({ label: n, className: o, id: s, ...a }, r) {
  const c = F(), i = s ?? c, l = /* @__PURE__ */ e(Te.Root, { ref: r, id: i, className: u(oe.root, o), ...a, children: /* @__PURE__ */ e(Te.Indicator, { className: oe.indicator, children: a.checked === "indeterminate" ? /* @__PURE__ */ e("span", { className: oe.dash }) : /* @__PURE__ */ e($e, {}) }) });
  return n ? /* @__PURE__ */ m("span", { className: oe.wrapper, children: [
    l,
    /* @__PURE__ */ e("label", { className: oe.label, htmlFor: i, children: n })
  ] }) : l;
}), Ht = "wk-Semantic_heading", Ot = "wk-Semantic_text", zt = "wk-Semantic_muted", Vt = "wk-Semantic_subtle", Kt = "wk-Semantic_danger", jt = "wk-Semantic_mono", qt = "wk-Semantic_xs", Jt = "wk-Semantic_sm", Ut = "wk-Semantic_md", Gt = "wk-Semantic_lg", Yt = "wk-Semantic_xl", Xt = "wk-Semantic_xxl", Qt = "wk-Semantic_link", Wt = "wk-Semantic_visuallyHidden", D = {
  heading: Ht,
  text: Ot,
  muted: zt,
  subtle: Vt,
  danger: Kt,
  mono: jt,
  xs: qt,
  sm: Jt,
  md: Ut,
  lg: Gt,
  xl: Yt,
  xxl: Xt,
  link: Qt,
  visuallyHidden: Wt
};
function me({ className: t, ...n }) {
  return /* @__PURE__ */ e("span", { className: u(D.visuallyHidden, t), ...n });
}
const Zt = "wk-Dialog_overlay", en = "wk-Dialog_content", tn = "wk-Dialog_header", nn = "wk-Dialog_headings", on = "wk-Dialog_title", sn = "wk-Dialog_description", an = "wk-Dialog_close", rn = "wk-Dialog_footer", R = {
  overlay: Zt,
  content: en,
  header: tn,
  headings: nn,
  title: on,
  description: sn,
  close: an,
  footer: rn
};
function Ra({
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
  return /* @__PURE__ */ m(S.Root, { ...d, children: [
    r && /* @__PURE__ */ e(S.Trigger, { asChild: !0, children: r }),
    /* @__PURE__ */ m(S.Portal, { children: [
      /* @__PURE__ */ e(S.Overlay, { className: R.overlay }),
      /* @__PURE__ */ m(
        S.Content,
        {
          className: u(R.content, l),
          style: c ? { "--wk-dialog-w": c } : void 0,
          children: [
            /* @__PURE__ */ m("div", { className: R.header, children: [
              /* @__PURE__ */ m("div", { className: R.headings, children: [
                n ? /* @__PURE__ */ e(S.Title, { asChild: !0, children: /* @__PURE__ */ e(me, { children: t }) }) : /* @__PURE__ */ e(S.Title, { className: R.title, children: t }),
                o && /* @__PURE__ */ e(S.Description, { className: R.description, children: o })
              ] }),
              i && /* @__PURE__ */ e(S.Close, { className: R.close, "aria-label": "Close", children: /* @__PURE__ */ e(ke, {}) })
            ] }),
            s,
            a && /* @__PURE__ */ e("div", { className: R.footer, children: a })
          ]
        }
      )
    ] })
  ] });
}
const Ha = S.Close, cn = "wk-Menu_content", ln = "wk-Menu_item", dn = "wk-Menu_danger", mn = "wk-Menu_label", un = "wk-Menu_separator", pn = "wk-Menu_shortcut", W = {
  content: cn,
  item: ln,
  danger: dn,
  label: mn,
  separator: un,
  shortcut: pn
};
function Oa({ trigger: t, children: n, align: o = "start", side: s = "bottom", className: a, ...r }) {
  return /* @__PURE__ */ m(K.Root, { ...r, children: [
    /* @__PURE__ */ e(K.Trigger, { asChild: !0, children: t }),
    /* @__PURE__ */ e(K.Portal, { children: /* @__PURE__ */ e(
      K.Content,
      {
        className: u(W.content, a),
        align: o,
        side: s,
        sideOffset: 4,
        collisionPadding: 8,
        children: n
      }
    ) })
  ] });
}
const za = A(function({ tone: n = "default", shortcut: o, className: s, children: a, ...r }, c) {
  return /* @__PURE__ */ m(
    K.Item,
    {
      ref: c,
      className: u(W.item, n === "danger" && W.danger, s),
      ...r,
      children: [
        a,
        o && /* @__PURE__ */ e("span", { className: W.shortcut, children: o })
      ]
    }
  );
});
function Va({ children: t }) {
  return /* @__PURE__ */ e(K.Label, { className: W.label, children: t });
}
function Ka() {
  return /* @__PURE__ */ e(K.Separator, { className: W.separator });
}
const hn = "wk-Tooltip_content", wn = "wk-Tooltip_arrow", xe = {
  content: hn,
  arrow: wn
}, ja = X.Provider;
function qa({ content: t, children: n, side: o = "top", delayDuration: s, className: a }) {
  return /* @__PURE__ */ m(X.Root, { delayDuration: s, children: [
    /* @__PURE__ */ e(X.Trigger, { asChild: !0, children: n }),
    /* @__PURE__ */ e(X.Portal, { children: /* @__PURE__ */ m(
      X.Content,
      {
        className: u(xe.content, a),
        side: o,
        sideOffset: 6,
        collisionPadding: 8,
        children: [
          t,
          /* @__PURE__ */ e(X.Arrow, { className: xe.arrow, width: 10, height: 5 })
        ]
      }
    ) })
  ] });
}
const kn = "wk-Tabs_root", fn = "wk-Tabs_list", bn = "wk-Tabs_trigger", _n = "wk-Tabs_content", fe = {
  root: kn,
  list: fn,
  trigger: bn,
  content: _n
};
function Ja({ className: t, ...n }) {
  return /* @__PURE__ */ e(we.Root, { className: u(fe.root, t), ...n });
}
function Ua({ className: t, ...n }) {
  return /* @__PURE__ */ e(we.List, { className: u(fe.list, t), ...n });
}
const Ga = A(
  function({ className: n, ...o }, s) {
    return /* @__PURE__ */ e(we.Trigger, { ref: s, className: u(fe.trigger, n), ...o });
  }
);
function Ya({ className: t, ...n }) {
  return /* @__PURE__ */ e(we.Content, { className: u(fe.content, t), ...n });
}
const vn = "wk-Toast_viewport", gn = "wk-Toast_root", yn = "wk-Toast_body", Nn = "wk-Toast_title", $n = "wk-Toast_description", Cn = "wk-Toast_close", Y = {
  viewport: vn,
  root: gn,
  body: yn,
  title: Nn,
  description: $n,
  close: Cn
}, Me = ee(null);
function Xa({ children: t, swipeDirection: n = "right" }) {
  const [o, s] = P([]), a = J(1), r = q((l) => {
    s((d) => d.filter((p) => p.id !== l));
  }, []), c = q((l) => {
    const d = a.current++;
    s((p) => [...p, { ...l, id: d }]);
  }, []), i = j(() => ({ toast: c, dismiss: r }), [c, r]);
  return /* @__PURE__ */ e(Me.Provider, { value: i, children: /* @__PURE__ */ m(G.Provider, { swipeDirection: n, children: [
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
          /* @__PURE__ */ e(G.Close, { className: Y.close, "aria-label": "Dismiss", children: /* @__PURE__ */ e(ke, {}) })
        ]
      },
      l.id
    )),
    /* @__PURE__ */ e(G.Viewport, { className: Y.viewport })
  ] }) });
}
function Qa() {
  const t = Z(Me);
  if (!t) throw new Error("useToast must be used inside <ToastProvider>");
  return t;
}
const Sn = "wk-Textarea_root", Tn = "wk-Textarea_mono", xn = "wk-Textarea_noResize", be = {
  root: Sn,
  mono: Tn,
  noResize: xn
}, Wa = A(function({ invalid: n, mono: o = !1, resizable: s = !0, className: a, id: r, rows: c = 4, ...i }, l) {
  const d = Ce(), p = n ?? (d == null ? void 0 : d.invalid) ?? !1;
  return /* @__PURE__ */ e(
    "textarea",
    {
      ref: l,
      id: r ?? (d == null ? void 0 : d.inputId),
      rows: c,
      "aria-invalid": p || void 0,
      "aria-describedby": d == null ? void 0 : d.describedBy,
      className: u(be.root, o && be.mono, !s && be.noResize, a),
      ...i
    }
  );
}), In = "wk-Combobox_wrap", Dn = "wk-Combobox_list", Bn = "wk-Combobox_option", Pn = "wk-Combobox_label", An = "wk-Combobox_mono", Ln = "wk-Combobox_hint", En = "wk-Combobox_empty", z = {
  wrap: In,
  list: Dn,
  option: Bn,
  label: Pn,
  mono: An,
  hint: Ln,
  empty: En
}, Mn = (t) => t.value ?? t.label;
function Za({
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
  const p = F(), [v, b] = P(!1), [k, h] = P(-1), w = J(null), f = j(() => v ? o(t) : [], [v, o, t]), g = v && (f.length > 0 || !!a), $ = k >= 0 && f[k] ? `${p}-${k}` : void 0, y = (_) => {
    const N = f[_];
    N && (n(Mn(N)), b(!1), h(-1));
  };
  return /* @__PURE__ */ m("div", { className: z.wrap, children: [
    /* @__PURE__ */ e(
      ye,
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
        onChange: (_) => {
          n(_.target.value), b(!0), h(-1);
        },
        onFocus: () => b(!0),
        onBlur: (_) => {
          w.current = setTimeout(() => b(!1), 120), l == null || l(_);
        },
        onKeyDown: (_) => {
          i == null || i(_), !_.defaultPrevented && (_.key === "ArrowDown" && f.length ? (_.preventDefault(), b(!0), h((N) => (N + 1) % f.length)) : _.key === "ArrowUp" && f.length ? (_.preventDefault(), h((N) => N <= 0 ? f.length - 1 : N - 1)) : _.key === "Enter" ? k >= 0 ? (_.preventDefault(), y(k)) : s == null || s() : _.key === "Tab" && k >= 0 ? (_.preventDefault(), y(k)) : _.key === "Escape" && g && (_.preventDefault(), b(!1), h(-1)));
        },
        ...d
      }
    ),
    g && /* @__PURE__ */ e("ul", { className: z.list, id: p, role: "listbox", children: f.length === 0 ? /* @__PURE__ */ e("li", { className: z.empty, children: a }) : f.map((_, N) => /* @__PURE__ */ m(
      "li",
      {
        id: `${p}-${N}`,
        role: "option",
        "aria-selected": N === k,
        "data-active": N === k,
        className: z.option,
        onMouseEnter: () => h(N),
        onMouseDown: (U) => {
          U.preventDefault(), w.current && clearTimeout(w.current), y(N);
        },
        children: [
          /* @__PURE__ */ e("span", { className: u(z.label, r && z.mono), children: _.label }),
          _.hint && /* @__PURE__ */ e("span", { className: z.hint, children: _.hint })
        ]
      },
      `${_.label}-${N}`
    )) })
  ] });
}
const Fn = "wk-SegmentedControl_root", Rn = "wk-SegmentedControl_option", Hn = "wk-SegmentedControl_fluid", _e = {
  root: Fn,
  option: Rn,
  fluid: Hn
};
function er({
  options: t,
  value: n,
  onValueChange: o,
  fluid: s = !1,
  className: a,
  ...r
}) {
  const c = F(), i = J(null), l = q(
    (d) => {
      var k, h;
      const p = t.filter((w) => !w.disabled);
      if (!p.length) return;
      const v = p.findIndex((w) => w.value === n), b = p[(v + d + p.length) % p.length];
      o(b.value), (h = (k = i.current) == null ? void 0 : k.querySelector(`[data-value="${CSS.escape(b.value)}"]`)) == null || h.focus();
    },
    [t, n, o]
  );
  return /* @__PURE__ */ e(
    "div",
    {
      ref: i,
      role: "radiogroup",
      className: u(_e.root, s && _e.fluid, a),
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
            className: _e.option,
            onClick: () => !d.disabled && o(d.value),
            children: d.label
          },
          d.value
        );
      })
    }
  );
}
const On = "wk-Alert_root", zn = "wk-Alert_info", Vn = "wk-Alert_success", Kn = "wk-Alert_warn", jn = "wk-Alert_danger", qn = "wk-Alert_icon", Jn = "wk-Alert_title", Un = "wk-Alert_body", Gn = "wk-Alert_actions", Yn = "wk-Alert_close", Xn = "wk-Alert_banner", H = {
  root: On,
  info: zn,
  success: Vn,
  warn: Kn,
  danger: jn,
  icon: qn,
  title: Jn,
  body: Un,
  actions: Gn,
  close: Yn,
  banner: Xn
};
function tr({
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
      className: u(H.root, H[t], c && H.banner, i),
      children: [
        s && /* @__PURE__ */ e("span", { className: H.icon, "aria-hidden": "true", children: s }),
        /* @__PURE__ */ m("div", { className: H.body, children: [
          n && /* @__PURE__ */ e("span", { className: H.title, children: n }),
          o,
          a && /* @__PURE__ */ e("div", { className: H.actions, children: a })
        ] }),
        r && /* @__PURE__ */ e("button", { type: "button", className: H.close, onClick: r, "aria-label": "Dismiss", children: /* @__PURE__ */ e(ke, {}) })
      ]
    }
  );
}
const Qn = "wk-EmptyState_root", Wn = "wk-EmptyState_icon", Zn = "wk-EmptyState_title", eo = "wk-EmptyState_description", to = "wk-EmptyState_actions", se = {
  root: Qn,
  icon: Wn,
  title: Zn,
  description: eo,
  actions: to
};
function nr({
  icon: t,
  title: n,
  description: o,
  action: s,
  headingLevel: a = 2,
  className: r
}) {
  const c = `h${a}`;
  return /* @__PURE__ */ m("div", { className: u(se.root, r), children: [
    t && /* @__PURE__ */ e("span", { className: se.icon, "aria-hidden": "true", children: t }),
    /* @__PURE__ */ e(c, { className: se.title, children: n }),
    o && /* @__PURE__ */ e("p", { className: se.description, children: o }),
    s && /* @__PURE__ */ e("div", { className: se.actions, children: s })
  ] });
}
const no = "wk-Spinner_root", oo = "wk-Spinner_sm", so = "wk-Spinner_md", ao = "wk-Spinner_lg", Ie = {
  root: no,
  "wk-spinner-rotate": "wk-Spinner_wk-spinner-rotate",
  sm: oo,
  md: so,
  lg: ao
};
function or({ size: t = "md", label: n = "Loading", className: o }) {
  return /* @__PURE__ */ m("span", { role: "status", children: [
    /* @__PURE__ */ e("span", { className: u(Ie.root, Ie[t], o), "aria-hidden": "true" }),
    n && /* @__PURE__ */ e(me, { children: n })
  ] });
}
const ro = "wk-Kbd_root", co = "wk-Kbd_group", ve = {
  root: ro,
  group: co
};
function sr({ keys: t, className: n, children: o, ...s }) {
  return t != null && t.length ? /* @__PURE__ */ e("span", { className: ve.group, ...s, children: t.map((a, r) => /* @__PURE__ */ e(pe, { children: /* @__PURE__ */ e("kbd", { className: u(ve.root, n), children: a }) }, `${a}-${r}`)) }) : /* @__PURE__ */ e("kbd", { className: u(ve.root, n), ...s, children: o });
}
const io = "wk-SplitPane_root", lo = "wk-SplitPane_horizontal", mo = "wk-SplitPane_vertical", uo = "wk-SplitPane_pane", po = "wk-SplitPane_handle", ae = {
  root: io,
  horizontal: lo,
  vertical: mo,
  pane: uo,
  handle: po
};
function ar({
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
  const d = J(null), [p, v] = P(!1), b = n === "horizontal", k = q(
    (w) => {
      var $;
      const f = ($ = d.current) == null ? void 0 : $.getBoundingClientRect(), g = f ? (b ? f.width : f.height) - a : r;
      return Math.max(a, Math.min(w, Math.min(r, g)));
    },
    [a, r, b]
  ), h = (w) => s(k(o + w));
  return /* @__PURE__ */ m("div", { ref: d, className: u(ae.root, ae[n], i), children: [
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
        "data-dragging": p || void 0,
        className: ae.handle,
        onDoubleClick: () => c !== void 0 && s(c),
        onPointerDown: (w) => {
          w.currentTarget.setPointerCapture(w.pointerId), v(!0);
        },
        onPointerMove: (w) => {
          var g;
          if (!p) return;
          const f = (g = d.current) == null ? void 0 : g.getBoundingClientRect();
          f && s(k(b ? w.clientX - f.left : w.clientY - f.top));
        },
        onPointerUp: (w) => {
          w.currentTarget.releasePointerCapture(w.pointerId), v(!1);
        },
        onKeyDown: (w) => {
          const f = w.shiftKey ? 40 : 10;
          w.key === (b ? "ArrowLeft" : "ArrowUp") && (w.preventDefault(), h(-f)), w.key === (b ? "ArrowRight" : "ArrowDown") && (w.preventDefault(), h(f)), w.key === "Home" && c !== void 0 && (w.preventDefault(), s(c));
        }
      }
    ),
    /* @__PURE__ */ e("div", { className: u(ae.pane), style: { flex: 1 }, children: t[1] })
  ] });
}
const ho = "wk-NavList_list", wo = "wk-NavList_item", ko = "wk-NavList_control", fo = "wk-NavList_icon", bo = "wk-NavList_label", _o = "wk-NavList_badge", Q = {
  list: ho,
  item: wo,
  control: ko,
  icon: fo,
  label: bo,
  badge: _o
};
function rr({ children: t, className: n, ...o }) {
  return /* @__PURE__ */ e("ul", { className: u(Q.list, n), ...o, children: t });
}
function cr({
  children: t,
  current: n = !1,
  icon: o,
  badge: s,
  onSelect: a,
  asChild: r = !1,
  disabled: c = !1,
  className: i
}) {
  const l = r ? he : "button";
  return /* @__PURE__ */ e("li", { className: Q.item, children: /* @__PURE__ */ m(
    l,
    {
      ...r ? {} : { type: "button", disabled: c },
      className: u(Q.control, i),
      "aria-current": n ? "page" : void 0,
      "data-current": n || void 0,
      onClick: a,
      children: [
        o && /* @__PURE__ */ e("span", { className: Q.icon, "aria-hidden": "true", children: o }),
        r ? /* @__PURE__ */ e(Pe, { children: t }) : /* @__PURE__ */ e("span", { className: Q.label, children: t }),
        s && /* @__PURE__ */ e("span", { className: Q.badge, children: s })
      ]
    }
  ) });
}
const vo = "wk-Tree_root", go = "wk-Tree_item", yo = "wk-Tree_twisty", No = "wk-Tree_spacer", $o = "wk-Tree_label", le = {
  root: vo,
  item: go,
  twisty: yo,
  spacer: No,
  label: $o
}, Fe = ee(null);
function ir({ children: t, onActivate: n, onToggle: o, className: s, ...a }) {
  const r = J(null), [c, i] = P(null), l = J([]);
  l.current = [];
  const d = q((k) => {
    l.current.push(k);
  }, []), p = (k) => {
    var h, w;
    i(k), (w = (h = r.current) == null ? void 0 : h.querySelector(`[data-tree-id="${CSS.escape(k)}"]`)) == null || w.focus();
  }, v = (k) => {
    var $;
    const h = l.current;
    if (!h.length) return;
    const w = c ? h.indexOf(c) : -1, f = c ? ($ = r.current) == null ? void 0 : $.querySelector(`[data-tree-id="${CSS.escape(c)}"]`) : null, g = f == null ? void 0 : f.getAttribute("aria-expanded");
    switch (k.key) {
      case "ArrowDown":
        k.preventDefault(), p(h[Math.min(w + 1, h.length - 1)]);
        break;
      case "ArrowUp":
        k.preventDefault(), p(h[Math.max(w - 1, 0)]);
        break;
      case "Home":
        k.preventDefault(), p(h[0]);
        break;
      case "End":
        k.preventDefault(), p(h[h.length - 1]);
        break;
      case "ArrowRight":
        g === "false" && c ? (k.preventDefault(), o == null || o(c, !0)) : g === "true" && (k.preventDefault(), p(h[Math.min(w + 1, h.length - 1)]));
        break;
      case "ArrowLeft":
        g === "true" && c ? (k.preventDefault(), o == null || o(c, !1)) : w > 0 && (k.preventDefault(), p(h[w - 1]));
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
  return /* @__PURE__ */ e(Fe.Provider, { value: b, children: /* @__PURE__ */ e(
    "div",
    {
      ref: r,
      role: "tree",
      className: u(le.root, s),
      onKeyDown: v,
      ...a,
      children: t
    }
  ) });
}
function lr({
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
  setSize: v,
  indent: b = 14,
  className: k
}) {
  const h = Z(Fe);
  if (!h) throw new Error("TreeItem must be used inside <Tree>");
  h.register(t);
  const w = h.activeId === t || h.activeId === null && n === 1 && p === 1;
  return /* @__PURE__ */ m(
    "div",
    {
      role: "treeitem",
      "data-tree-id": t,
      "aria-level": n,
      "aria-expanded": s ? !!a : void 0,
      "aria-selected": r,
      "aria-posinset": p,
      "aria-setsize": v,
      tabIndex: w ? 0 : -1,
      className: u(le.item, k),
      style: { paddingInlineStart: (n - 1) * b + 4 },
      onFocus: () => h.setActiveId(t),
      onClick: () => {
        h.setActiveId(t), l == null || l(t);
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
            children: /* @__PURE__ */ e(Ae, {})
          }
        ) : /* @__PURE__ */ e("span", { className: le.spacer }),
        c,
        /* @__PURE__ */ e("span", { className: le.label, children: o }),
        i
      ]
    }
  );
}
const Co = "wk-CommandPalette_overlay", So = "wk-CommandPalette_content", To = "wk-CommandPalette_search", xo = "wk-CommandPalette_searchIcon", Io = "wk-CommandPalette_input", Do = "wk-CommandPalette_list", Bo = "wk-CommandPalette_group", Po = "wk-CommandPalette_heading", Ao = "wk-CommandPalette_item", Lo = "wk-CommandPalette_itemIcon", Eo = "wk-CommandPalette_itemLabel", Mo = "wk-CommandPalette_itemHint", Fo = "wk-CommandPalette_empty", Ro = "wk-CommandPalette_footer", T = {
  overlay: Co,
  content: So,
  search: To,
  searchIcon: xo,
  input: Io,
  list: Do,
  group: Bo,
  heading: Po,
  item: Ao,
  itemIcon: Lo,
  itemLabel: Eo,
  itemHint: Mo,
  empty: Fo,
  footer: Ro
}, Re = ee(null);
function dr({
  open: t,
  onOpenChange: n,
  query: o,
  onQueryChange: s,
  children: a,
  placeholder: r = "Type a command or search…",
  title: c = "Command palette",
  footer: i,
  className: l
}) {
  const d = F(), [p, v] = P(0), [b, k] = P([]), h = J(/* @__PURE__ */ new Map()), w = j(
    () => (_, N) => {
      h.current.set(_, N);
    },
    []
  ), f = j(
    () => (_) => (k((N) => N.includes(_) ? N : [...N, _]), () => {
      k((N) => N.filter((U) => U !== _)), h.current.delete(_);
    }),
    []
  );
  ie(() => v(0), [o]);
  const g = b.length, $ = b[p] ?? b[0] ?? null, y = j(
    () => ({ activeId: $, register: w, attach: f, listId: d }),
    [$, w, f, d]
  );
  return /* @__PURE__ */ e(S.Root, { open: t, onOpenChange: n, children: /* @__PURE__ */ m(S.Portal, { children: [
    /* @__PURE__ */ e(S.Overlay, { className: T.overlay }),
    /* @__PURE__ */ m(S.Content, { className: u(T.content, l), children: [
      /* @__PURE__ */ e(S.Title, { asChild: !0, children: /* @__PURE__ */ e(me, { children: c }) }),
      /* @__PURE__ */ m(Re.Provider, { value: y, children: [
        /* @__PURE__ */ m("div", { className: T.search, children: [
          /* @__PURE__ */ e("span", { className: T.searchIcon, "aria-hidden": "true", children: "⌕" }),
          /* @__PURE__ */ e(
            "input",
            {
              className: T.input,
              value: o,
              onChange: (_) => s(_.target.value),
              placeholder: r,
              role: "combobox",
              "aria-expanded": !0,
              "aria-controls": d,
              "aria-activedescendant": $ ? `${d}-${$}` : void 0,
              "aria-autocomplete": "list",
              autoComplete: "off",
              autoFocus: !0,
              onKeyDown: (_) => {
                if (_.key === "ArrowDown" && g)
                  _.preventDefault(), v((N) => (N + 1) % g);
                else if (_.key === "ArrowUp" && g)
                  _.preventDefault(), v((N) => N <= 0 ? g - 1 : N - 1);
                else if (_.key === "Enter") {
                  const N = b[p] ?? b[0], U = N ? h.current.get(N) : void 0;
                  if (!U) return;
                  _.preventDefault(), U();
                }
              }
            }
          )
        ] }),
        /* @__PURE__ */ e("ul", { className: T.list, id: d, role: "listbox", "aria-label": c, children: a }),
        i && /* @__PURE__ */ e("div", { className: T.footer, children: i })
      ] })
    ] })
  ] }) });
}
function mr({ heading: t, children: n }) {
  return /* @__PURE__ */ m("li", { className: T.group, children: [
    t && /* @__PURE__ */ e("div", { className: T.heading, children: t }),
    /* @__PURE__ */ e("ul", { role: "group", style: { listStyle: "none", margin: 0, padding: 0 }, children: n })
  ] });
}
function ur({ id: t, children: n, onSelect: o, icon: s, hint: a }) {
  const r = Z(Re);
  if (!r) throw new Error("CommandItem must be used inside <CommandPalette>");
  r.register(t, o);
  const { attach: c } = r;
  Ve(() => c(t), [c, t]);
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
function pr({ children: t }) {
  return /* @__PURE__ */ e("li", { className: T.empty, children: t });
}
const Ho = "wk-KeyValueEditor_root", Oo = "wk-KeyValueEditor_head", zo = "wk-KeyValueEditor_row", Vo = "wk-KeyValueEditor_cell", Ko = "wk-KeyValueEditor_actions", jo = "wk-KeyValueEditor_remove", qo = "wk-KeyValueEditor_footer", Jo = "wk-KeyValueEditor_empty", E = {
  root: Ho,
  head: Oo,
  row: zo,
  cell: Vo,
  actions: Ko,
  remove: jo,
  footer: qo,
  empty: Jo
};
function hr({
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
  className: v
}) {
  const b = F();
  let k = 0;
  const h = () => (c == null ? void 0 : c()) ?? `${b}-${t.length}-${k++}`, w = (f, g) => n(t.map(($) => $.id === f ? { ...$, ...g } : $));
  return /* @__PURE__ */ m("div", { className: u(E.root, v), children: [
    /* @__PURE__ */ m("div", { className: E.head, "aria-hidden": "true", children: [
      /* @__PURE__ */ e("span", { children: i ? "" : null }),
      /* @__PURE__ */ e("span", { children: o }),
      /* @__PURE__ */ e("span", { children: s }),
      /* @__PURE__ */ e("span", {})
    ] }),
    t.length === 0 && /* @__PURE__ */ e("p", { className: E.empty, children: d }),
    t.map((f, g) => {
      const $ = f.enabled ?? !0;
      return /* @__PURE__ */ m("div", { className: E.row, "data-disabled": !$, children: [
        /* @__PURE__ */ e("span", { className: E.cell, children: i && /* @__PURE__ */ e(
          Rt,
          {
            checked: $,
            onCheckedChange: (y) => w(f.id, { enabled: y === !0 }),
            "aria-label": `Enable ${f.key || `row ${g + 1}`}`
          }
        ) }),
        /* @__PURE__ */ e("span", { className: E.cell, children: /* @__PURE__ */ e(
          ye,
          {
            size: "sm",
            mono: !0,
            value: f.key,
            placeholder: a,
            "aria-label": `${o}, row ${g + 1}`,
            onChange: (y) => w(f.id, { key: y.target.value })
          }
        ) }),
        /* @__PURE__ */ e("span", { className: E.cell, children: /* @__PURE__ */ e(
          ye,
          {
            size: "sm",
            mono: !0,
            type: p ? "password" : "text",
            value: f.value,
            placeholder: r,
            "aria-label": `${s}, row ${g + 1}`,
            onChange: (y) => w(f.id, { value: y.target.value })
          }
        ) }),
        /* @__PURE__ */ e("span", { className: E.actions, children: /* @__PURE__ */ m(
          "button",
          {
            type: "button",
            className: E.remove,
            onClick: () => n(t.filter((y) => y.id !== f.id)),
            children: [
              /* @__PURE__ */ e(ke, {}),
              /* @__PURE__ */ m(me, { children: [
                "Remove ",
                f.key || `row ${g + 1}`
              ] })
            ]
          }
        ) })
      ] }, f.id);
    }),
    /* @__PURE__ */ e("div", { className: E.footer, children: /* @__PURE__ */ m(
      tt,
      {
        size: "sm",
        variant: "ghost",
        onClick: () => n([...t, { id: h(), key: "", value: "", enabled: !0 }]),
        children: [
          "+ ",
          l
        ]
      }
    ) })
  ] });
}
const Uo = "wk-CodeSurface_root", Go = "wk-CodeSurface_toolbar", Yo = "wk-CodeSurface_body", Xo = "wk-CodeSurface_pre", Qo = "wk-CodeSurface_status", de = {
  root: Uo,
  toolbar: Go,
  body: Yo,
  pre: Xo,
  status: Qo
};
function wr({ children: t, toolbar: n, status: o, className: s }) {
  return /* @__PURE__ */ m("div", { className: u(de.root, s), children: [
    n && /* @__PURE__ */ e("div", { className: de.toolbar, children: n }),
    /* @__PURE__ */ e("div", { className: de.body, children: t }),
    o && /* @__PURE__ */ e("div", { className: de.status, children: o })
  ] });
}
function kr({ code: t, className: n, ...o }) {
  return /* @__PURE__ */ e("pre", { className: u(de.pre, n), tabIndex: 0, ...o, children: /* @__PURE__ */ e("code", { children: t }) });
}
const Wo = "wk-Form_section", Zo = "wk-Form_sectionTop", es = "wk-Form_sectionHead", ts = "wk-Form_sectionTitle", ns = "wk-Form_sectionDesc", os = "wk-Form_sectionBody", ss = "wk-Form_row", as = "wk-Form_rowText", rs = "wk-Form_rowLabel", cs = "wk-Form_rowDesc", is = "wk-Form_rowControl", ls = "wk-Form_stacked", B = {
  section: Wo,
  sectionTop: Zo,
  sectionHead: es,
  sectionTitle: ts,
  sectionDesc: ns,
  sectionBody: os,
  row: ss,
  rowText: as,
  rowLabel: rs,
  rowDesc: cs,
  rowControl: is,
  stacked: ls
};
function fr({ title: t, description: n, children: o, action: s, className: a }) {
  const r = F();
  return /* @__PURE__ */ m("section", { className: u(B.section, a), "aria-labelledby": t ? r : void 0, children: [
    (t || s) && /* @__PURE__ */ m("div", { className: B.sectionTop, children: [
      /* @__PURE__ */ m("div", { className: B.sectionHead, children: [
        t && /* @__PURE__ */ e("h2", { className: B.sectionTitle, id: r, children: t }),
        n && /* @__PURE__ */ e("p", { className: B.sectionDesc, children: n })
      ] }),
      s
    ] }),
    /* @__PURE__ */ e("div", { className: B.sectionBody, children: o })
  ] });
}
function br({ label: t, description: n, children: o, stacked: s, className: a }) {
  return /* @__PURE__ */ m("div", { className: u(B.row, s && B.stacked, a), children: [
    /* @__PURE__ */ m("div", { className: B.rowText, children: [
      /* @__PURE__ */ e("span", { className: B.rowLabel, children: t }),
      n && /* @__PURE__ */ e("p", { className: B.rowDesc, children: n })
    ] }),
    /* @__PURE__ */ e("div", { className: B.rowControl, children: o })
  ] });
}
const ds = "wk-HighlightText_mark", ms = {
  mark: ds
};
function _r({ text: t, query: n, className: o }) {
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
  return /* @__PURE__ */ e("span", { className: o, children: r.map((i, l) => /* @__PURE__ */ e(pe, { children: i.hit ? /* @__PURE__ */ e("mark", { className: ms.mark, children: i.chunk }) : i.chunk }, l)) });
}
const us = "wk-SkipToContent_root", ps = {
  root: us
};
function vr({
  targetId: t = "wk-main",
  children: n = "Skip to content",
  className: o
}) {
  return /* @__PURE__ */ e("a", { href: `#${t}`, className: u(ps.root, o), children: n });
}
const hs = "wk-Card_root", ws = "wk-Card_outlined", ks = "wk-Card_raised", fs = "wk-Card_inset", bs = "wk-Card_interactive", _s = "wk-Card_top", vs = "wk-Card_icon", gs = "wk-Card_head", ys = "wk-Card_title", Ns = "wk-Card_description", $s = "wk-Card_action", Cs = "wk-Card_body", Ss = "wk-Card_footer", I = {
  root: hs,
  outlined: ws,
  raised: ks,
  inset: fs,
  "padding-none": "wk-Card_padding-none",
  "padding-sm": "wk-Card_padding-sm",
  "padding-md": "wk-Card_padding-md",
  "padding-lg": "wk-Card_padding-lg",
  interactive: bs,
  top: _s,
  icon: vs,
  head: gs,
  title: ys,
  description: Ns,
  action: $s,
  body: Cs,
  footer: Ss
};
function gr({
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
  className: v,
  ...b
}) {
  const k = F(), h = t ? k : void 0, w = `h${n}`, f = /* @__PURE__ */ m(Be, { children: [
    (t || a || s) && /* @__PURE__ */ m("div", { className: I.top, children: [
      s && /* @__PURE__ */ e("span", { className: I.icon, "aria-hidden": "true", children: s }),
      /* @__PURE__ */ m("div", { className: I.head, children: [
        t && /* @__PURE__ */ e(w, { className: I.title, id: h, children: t }),
        o && /* @__PURE__ */ e("p", { className: I.description, children: o })
      ] }),
      a && /* @__PURE__ */ e("div", { className: I.action, children: a })
    ] }),
    c && /* @__PURE__ */ e("div", { className: I.body, children: c }),
    r && /* @__PURE__ */ e("div", { className: I.footer, children: r })
  ] }), g = u(
    I.root,
    I[i],
    I[`padding-${l}`],
    d && I.interactive,
    v
  );
  return p ? /* @__PURE__ */ e(he, { className: g, "aria-labelledby": h, ...b, children: /* @__PURE__ */ e("div", { children: f }) }) : d ? /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      className: g,
      "aria-labelledby": h,
      ...b,
      children: f
    }
  ) : /* @__PURE__ */ e("div", { className: g, "aria-labelledby": h, ...b, children: f });
}
const Ts = "wk-Stepper_root", xs = "wk-Stepper_horizontal", Is = "wk-Stepper_vertical", Ds = "wk-Stepper_step", Bs = "wk-Stepper_complete", Ps = "wk-Stepper_current", As = "wk-Stepper_marker", Ls = "wk-Stepper_text", Es = "wk-Stepper_label", Ms = "wk-Stepper_description", O = {
  root: Ts,
  horizontal: xs,
  vertical: Is,
  step: Ds,
  complete: Bs,
  current: Ps,
  marker: As,
  text: Ls,
  label: Es,
  description: Ms
};
function yr({
  steps: t,
  current: n,
  orientation: o = "horizontal",
  className: s,
  "aria-label": a
}) {
  return /* @__PURE__ */ e("ol", { className: u(O.root, O[o], s), "aria-label": a, children: t.map((r, c) => {
    const { label: i, description: l } = typeof r == "string" ? { label: r, description: void 0 } : r, d = c < n ? "complete" : c === n ? "current" : "upcoming";
    return /* @__PURE__ */ m(
      "li",
      {
        className: u(O.step, O[d]),
        "aria-current": d === "current" ? "step" : void 0,
        children: [
          /* @__PURE__ */ e("span", { className: O.marker, "aria-hidden": "true", children: d === "complete" ? /* @__PURE__ */ e($e, {}) : c + 1 }),
          /* @__PURE__ */ m("span", { className: O.text, children: [
            /* @__PURE__ */ m("span", { className: O.label, children: [
              i,
              /* @__PURE__ */ e(me, { children: d === "complete" ? " (completed)" : d === "current" ? " (current step)" : " (not started)" })
            ] }),
            l && /* @__PURE__ */ e("span", { className: O.description, children: l })
          ] })
        ]
      },
      c
    );
  }) });
}
const Fs = "wk-Breadcrumb_root", Rs = "wk-Breadcrumb_list", Hs = "wk-Breadcrumb_item", Os = "wk-Breadcrumb_separator", zs = "wk-Breadcrumb_link", Vs = "wk-Breadcrumb_ellipsis", Ks = "wk-Breadcrumb_current", V = {
  root: Fs,
  list: Rs,
  item: Hs,
  separator: Os,
  link: zs,
  ellipsis: Vs,
  current: Ks
}, He = ee({ isLast: !1 });
function Nr({
  children: t,
  separator: n = "/",
  maxItems: o,
  "aria-label": s = "Breadcrumb",
  className: a
}) {
  const [r, c] = P(!1), i = js(t), l = !r && o !== void 0 && o >= 3 && i.length > o, d = l ? i.slice(i.length - (o - 2)) : [], p = l ? [i[0], De, ...d] : i;
  return /* @__PURE__ */ e("nav", { "aria-label": s, className: u(V.root, a), children: /* @__PURE__ */ e("ol", { className: V.list, children: p.map((v, b) => {
    const k = b === p.length - 1;
    return (
      // biome-ignore lint/suspicious/noArrayIndexKey: position IS the identity here
      /* @__PURE__ */ m("li", { className: V.item, children: [
        b > 0 && /* @__PURE__ */ e("span", { "aria-hidden": "true", className: V.separator, children: n }),
        v === De ? /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: V.ellipsis,
            onClick: () => c(!0),
            "aria-label": "Show the full path",
            children: "…"
          }
        ) : /* @__PURE__ */ e(He.Provider, { value: { isLast: k }, children: v })
      ] }, b)
    );
  }) }) });
}
const De = Symbol("breadcrumb-ellipsis");
function js(t) {
  const n = [], o = (s) => {
    if (!(s == null || s === !1 || s === !0)) {
      if (Array.isArray(s)) {
        for (const a of s) o(a);
        return;
      }
      if (Ke(s) && s.type === pe) {
        o(s.props.children);
        return;
      }
      n.push(s);
    }
  };
  return o(t), n;
}
function $r({ children: t, current: n, className: o, ...s }) {
  const { isLast: a } = Z(He);
  return n ?? a ? /* @__PURE__ */ e("span", { "aria-current": "page", className: u(V.current, o), children: t }) : /* @__PURE__ */ e("a", { className: u(V.link, o), ...s, children: t });
}
const qs = "wk-Table_wrapper", Js = "wk-Table_scroll", Us = "wk-Table_root", Gs = "wk-Table_caption", Ys = "wk-Table_th", Xs = "wk-Table_td", Qs = "wk-Table_sortButton", Ws = "wk-Table_sortIndicator", Zs = "wk-Table_numeric", ea = "wk-Table_captionHidden", ta = "wk-Table_row", na = "wk-Table_interactive", oa = "wk-Table_sticky", C = {
  wrapper: qs,
  scroll: Js,
  root: Us,
  caption: Gs,
  th: Ys,
  td: Xs,
  sortButton: Qs,
  sortIndicator: Ws,
  numeric: Zs,
  captionHidden: ea,
  row: ta,
  interactive: na,
  sticky: oa
};
function Cr({
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
      className: u(C.wrapper, l && C.scroll),
      style: l ? { "--wk-table-max-block": a } : void 0,
      children: /* @__PURE__ */ m(
        "table",
        {
          className: u(
            C.root,
            o && C.interactive,
            s && C.sticky,
            r
          ),
          ...i,
          children: [
            t && /* @__PURE__ */ e("caption", { className: u(C.caption, n && C.captionHidden), children: t }),
            c
          ]
        }
      )
    }
  );
}
const Sr = (t) => /* @__PURE__ */ e("thead", { ...t }), Tr = (t) => /* @__PURE__ */ e("tbody", { ...t }), xr = ({ selected: t, className: n, ...o }) => /* @__PURE__ */ e("tr", { "data-selected": t || void 0, className: u(C.row, n), ...o }), Ir = ({
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
    return /* @__PURE__ */ e("th", { scope: a, className: u(C.th, t && C.numeric, r), ...i, children: c });
  const l = o ?? null;
  return /* @__PURE__ */ e(
    "th",
    {
      scope: a,
      "aria-sort": l === "asc" ? "ascending" : l === "desc" ? "descending" : "none",
      className: u(C.th, t && C.numeric, r),
      ...i,
      children: /* @__PURE__ */ m(
        "button",
        {
          type: "button",
          className: C.sortButton,
          onClick: () => s == null ? void 0 : s(l === "asc" ? "desc" : "asc"),
          children: [
            c,
            /* @__PURE__ */ e("span", { "aria-hidden": "true", className: C.sortIndicator, "data-direction": l ?? "none", children: l === "asc" ? "▲" : l === "desc" ? "▼" : "↕" })
          ]
        }
      )
    }
  );
}, Dr = ({ numeric: t, className: n, ...o }) => /* @__PURE__ */ e("td", { className: u(C.td, t && C.numeric, n), ...o }), sa = "wk-Badge_root", aa = "wk-Badge_neutral", ra = "wk-Badge_accent", ca = "wk-Badge_danger", ia = "wk-Badge_warn", la = "wk-Badge_success", da = "wk-Badge_info", ma = "wk-Badge_mono", ge = {
  root: sa,
  neutral: aa,
  accent: ra,
  danger: ca,
  warn: ia,
  success: la,
  info: da,
  mono: ma
};
function Br({ tone: t = "neutral", mono: n = !1, className: o, ...s }) {
  return /* @__PURE__ */ e("span", { className: u(ge.root, ge[t], n && ge.mono, o), ...s });
}
const ua = "wk-AppShell_root", pa = "wk-AppShell_titlebar", ha = "wk-AppShell_body", wa = "wk-AppShell_sidebar", ka = "wk-AppShell_main", re = {
  root: ua,
  titlebar: pa,
  body: ha,
  sidebar: wa,
  main: ka
};
function Pr({
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
      className: u(re.root, i),
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
const fa = {
  1: "2xl",
  2: "xl",
  3: "lg",
  4: "md",
  5: "sm",
  6: "xs"
}, Oe = {
  xs: D.xs,
  sm: D.sm,
  md: D.md,
  lg: D.lg,
  xl: D.xl,
  "2xl": D.xxl
}, Ar = A(function({ level: n, size: o, className: s, ...a }, r) {
  const c = `h${n}`, i = Oe[o ?? fa[n]];
  return /* @__PURE__ */ e(c, { ref: r, className: u(D.heading, i, s), ...a });
}), Lr = A(function({ as: n = "p", size: o = "md", tone: s = "default", mono: a = !1, className: r, ...c }, i) {
  return /* @__PURE__ */ e(
    n,
    {
      ref: i,
      className: u(
        D.text,
        Oe[o],
        s !== "default" && D[s],
        a && D.mono,
        r
      ),
      ...c
    }
  );
}), Er = A(function({ external: n = !1, nofollow: o = !1, asChild: s = !1, className: a, rel: r, target: c, ...i }, l) {
  const d = s ? he : "a", p = new Set((r ?? "").split(/\s+/).filter(Boolean));
  return n && (p.add("noopener"), p.add("noreferrer")), o && p.add("nofollow"), /* @__PURE__ */ e(
    d,
    {
      ref: l,
      className: u(D.link, a),
      target: c ?? (n ? "_blank" : void 0),
      rel: p.size ? [...p].join(" ") : void 0,
      ...i
    }
  );
}), ba = "wk-Media_image", _a = "wk-Media_skeleton", ze = {
  image: ba,
  skeleton: _a
}, Mr = A(function({ width: n, height: o, aspectRatio: s, priority: a = !1, className: r, style: c, alt: i, ...l }, d) {
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
      className: u(ze.image, r),
      style: { ...p ? { "--wk-image-ar": String(p) } : null, ...c },
      ...l
    }
  );
});
function Fr({
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
      className: u(ze.skeleton, s),
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
function va({ data: t, nonce: n }) {
  const o = JSON.stringify(t).replace(/</g, "\\u003c");
  return /* @__PURE__ */ e("script", { type: "application/ld+json", nonce: n, dangerouslySetInnerHTML: { __html: o } });
}
const ga = "wk-Breadcrumbs_root", ya = "wk-Breadcrumbs_list", Na = "wk-Breadcrumbs_item", $a = "wk-Breadcrumbs_link", Ca = "wk-Breadcrumbs_sep", ce = {
  root: ga,
  list: ya,
  item: Na,
  link: $a,
  sep: Ca
};
function Rr({ items: t, origin: n, className: o }) {
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
  return /* @__PURE__ */ m(Be, { children: [
    /* @__PURE__ */ e("nav", { "aria-label": "Breadcrumb", className: u(ce.root, o), children: /* @__PURE__ */ e("ol", { className: ce.list, children: t.map((a, r) => {
      const c = r === t.length - 1;
      return /* @__PURE__ */ m(pe, { children: [
        /* @__PURE__ */ e("li", { className: ce.item, children: a.href && !c ? /* @__PURE__ */ e("a", { className: ce.link, href: a.href, children: a.label }) : /* @__PURE__ */ e("span", { "aria-current": c ? "page" : void 0, children: a.label }) }),
        !c && /* @__PURE__ */ e("li", { className: ce.sep, "aria-hidden": "true", children: "/" })
      ] }, `${a.label}-${r}`);
    }) }) }),
    /* @__PURE__ */ e(va, { data: s })
  ] });
}
export {
  tr as Alert,
  Pr as AppShell,
  Br as Badge,
  Nr as Breadcrumb,
  $r as BreadcrumbItem,
  Rr as Breadcrumbs,
  tt as Button,
  gr as Card,
  $e as CheckIcon,
  Rt as Checkbox,
  Ae as ChevronDownIcon,
  ke as CloseIcon,
  kr as CodeBlock,
  wr as CodeSurface,
  Za as Combobox,
  pr as CommandEmpty,
  mr as CommandGroup,
  ur as CommandItem,
  dr as CommandPalette,
  Ra as Dialog,
  Ha as DialogClose,
  nr as EmptyState,
  Pa as Field,
  fr as FormSection,
  Ar as Heading,
  _r as HighlightText,
  Mr as Image,
  ye as Input,
  va as JsonLd,
  sr as Kbd,
  hr as KeyValueEditor,
  Er as Link,
  Oa as Menu,
  za as MenuItem,
  Va as MenuLabel,
  Ka as MenuSeparator,
  cr as NavItem,
  rr as NavList,
  er as SegmentedControl,
  Aa as Select,
  Ea as SelectGroup,
  La as SelectItem,
  Ma as SelectSeparator,
  br as SettingRow,
  Fr as Skeleton,
  vr as SkipToContent,
  or as Spinner,
  ar as SplitPane,
  yr as Stepper,
  Fa as Switch,
  Cr as Table,
  Ja as Tabs,
  Ya as TabsContent,
  Ua as TabsList,
  Ga as TabsTrigger,
  Tr as Tbody,
  Dr as Td,
  Lr as Text,
  Wa as Textarea,
  Ir as Th,
  Sr as Thead,
  Ia as ThemeProvider,
  Ba as ThemeScript,
  Xa as ToastProvider,
  qa as Tooltip,
  ja as TooltipProvider,
  xr as Tr,
  ir as Tree,
  lr as TreeItem,
  me as VisuallyHidden,
  u as cn,
  Ce as useField,
  Da as useTheme,
  Qa as useToast
};
//# sourceMappingURL=index.js.map
