import { jsx as e, jsxs as m, Fragment as Ie } from "react/jsx-runtime";
import { useState as A, useEffect as ae, useCallback as j, useMemo as K, useContext as ie, createContext as le, forwardRef as B, useId as F, useRef as q, Fragment as ge, useLayoutEffect as Re } from "react";
import { Slot as ue } from "@radix-ui/react-slot";
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
}), Ne = (t) => /* @__PURE__ */ e("svg", { ...ye(t), children: /* @__PURE__ */ e("path", { d: "M3 8.5 6.5 12 13 4.5" }) }), De = (t) => /* @__PURE__ */ e("svg", { ...ye(t), children: /* @__PURE__ */ e("path", { d: "m4 6 4 4 4-4" }) }), he = (t) => /* @__PURE__ */ e("svg", { ...ye(t), children: /* @__PURE__ */ e("path", { d: "M4 4l8 8M12 4l-8 8" }) }), Pe = le(null);
function He(t) {
  if (!t || typeof window > "u") return {};
  try {
    return JSON.parse(window.localStorage.getItem(t) ?? "{}");
  } catch {
    return {};
  }
}
function ha({
  children: t,
  theme: n,
  defaultTheme: o = "system",
  defaultDensity: a = "normal",
  storageKey: s = "wertkit-theme",
  target: r = "root"
}) {
  const [c, i] = A(o), [d, l] = A(a), [p, v] = A(!1), [_, f] = A(null);
  ae(() => {
    const y = He(s);
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
  return /* @__PURE__ */ e(Pe.Provider, { value: $, children: r === "self" ? /* @__PURE__ */ e("div", { ref: f, children: t }) : t });
}
function wa() {
  const t = ie(Pe);
  if (!t) throw new Error("useTheme must be used inside <ThemeProvider>");
  return t;
}
function ka({
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
const Oe = "wk-Button_root", ze = "wk-Button_sm", Ve = "wk-Button_md", Ke = "wk-Button_lg", je = "wk-Button_iconOnly", qe = "wk-Button_primary", Je = "wk-Button_secondary", Ue = "wk-Button_ghost", Ge = "wk-Button_danger", Ye = "wk-Button_spinner", W = {
  root: Oe,
  sm: ze,
  md: Ve,
  lg: Ke,
  iconOnly: je,
  primary: qe,
  secondary: Je,
  ghost: Ue,
  danger: Ge,
  spinner: Ye,
  "wk-spin": "wk-Button_wk-spin"
}, Xe = B(function({
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
        l,
        !s && c
      ]
    }
  );
}), Qe = "wk-Field_root", We = "wk-Field_label", Ze = "wk-Field_required", et = "wk-Field_hint", tt = "wk-Field_error", Z = {
  root: Qe,
  label: We,
  required: Ze,
  hint: et,
  error: tt
}, Be = le(null), $e = () => ie(Be);
function fa({ label: t, hint: n, error: o, required: a, children: s, className: r }) {
  const c = F(), i = `${c}-input`, d = `${c}-hint`, l = `${c}-error`, p = !!o, v = [o ? l : null, n ? d : null].filter(Boolean).join(" ") || void 0;
  return /* @__PURE__ */ e(Be.Provider, { value: { inputId: i, describedBy: v, invalid: p }, children: /* @__PURE__ */ m("div", { className: u(Z.root, r), children: [
    t && /* @__PURE__ */ m("label", { className: Z.label, htmlFor: i, children: [
      t,
      a && /* @__PURE__ */ e("span", { className: Z.required, "aria-hidden": "true", children: "*" })
    ] }),
    s,
    o ? /* @__PURE__ */ e("p", { className: Z.error, id: l, role: "alert", children: o }) : n && /* @__PURE__ */ e("p", { className: Z.hint, id: d, children: n })
  ] }) });
}
const nt = "wk-Input_root", ot = "wk-Input_mono", st = "wk-Input_shell", at = "wk-Input_slot", rt = "wk-Input_start", ct = "wk-Input_end", it = "wk-Input_hasStart", lt = "wk-Input_hasEnd", dt = "wk-Input_sm", mt = "wk-Input_md", ut = "wk-Input_lg", L = {
  root: nt,
  mono: ot,
  shell: st,
  slot: at,
  start: rt,
  end: ct,
  hasStart: it,
  hasEnd: lt,
  sm: dt,
  md: mt,
  lg: ut
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
}), pt = "wk-Select_trigger", ht = "wk-Select_sm", wt = "wk-Select_md", kt = "wk-Select_lg", ft = "wk-Select_icon", bt = "wk-Select_content", _t = "wk-Select_viewport", vt = "wk-Select_item", gt = "wk-Select_itemIndicator", yt = "wk-Select_label", Nt = "wk-Select_separator", M = {
  trigger: pt,
  sm: ht,
  md: wt,
  lg: kt,
  icon: ft,
  content: bt,
  viewport: _t,
  item: vt,
  itemIndicator: gt,
  label: yt,
  separator: Nt
};
function ba({
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
          /* @__PURE__ */ e(T.Icon, { className: M.icon, children: /* @__PURE__ */ e(De, {}) })
        ]
      }
    ),
    /* @__PURE__ */ e(T.Portal, { children: /* @__PURE__ */ e(T.Content, { className: M.content, position: "popper", sideOffset: 4, children: /* @__PURE__ */ e(T.Viewport, { className: M.viewport, children: o }) }) })
  ] });
}
const _a = B(
  function({ className: n, children: o, ...a }, s) {
    return /* @__PURE__ */ m(T.Item, { ref: s, className: u(M.item, n), ...a, children: [
      /* @__PURE__ */ e(T.ItemText, { children: o }),
      /* @__PURE__ */ e(T.ItemIndicator, { className: M.itemIndicator, children: /* @__PURE__ */ e(Ne, {}) })
    ] });
  }
);
function va({ label: t, children: n }) {
  return /* @__PURE__ */ m(T.Group, { children: [
    /* @__PURE__ */ e(T.Label, { className: M.label, children: t }),
    n
  ] });
}
function ga() {
  return /* @__PURE__ */ e(T.Separator, { className: M.separator });
}
const $t = "wk-Switch_wrapper", Ct = "wk-Switch_root", St = "wk-Switch_thumb", Tt = "wk-Switch_label", me = {
  wrapper: $t,
  root: Ct,
  thumb: St,
  label: Tt
}, ya = B(function({ label: n, className: o, id: a, ...s }, r) {
  const c = F(), i = a ?? c, d = /* @__PURE__ */ e(Ce.Root, { ref: r, id: i, className: u(me.root, o), ...s, children: /* @__PURE__ */ e(Ce.Thumb, { className: me.thumb }) });
  return n ? /* @__PURE__ */ m("span", { className: me.wrapper, children: [
    d,
    /* @__PURE__ */ e("label", { className: me.label, htmlFor: i, children: n })
  ] }) : d;
}), xt = "wk-Checkbox_wrapper", It = "wk-Checkbox_root", Dt = "wk-Checkbox_indicator", Pt = "wk-Checkbox_dash", Bt = "wk-Checkbox_label", ee = {
  wrapper: xt,
  root: It,
  indicator: Dt,
  dash: Pt,
  label: Bt
}, At = B(function({ label: n, className: o, id: a, ...s }, r) {
  const c = F(), i = a ?? c, d = /* @__PURE__ */ e(Se.Root, { ref: r, id: i, className: u(ee.root, o), ...s, children: /* @__PURE__ */ e(Se.Indicator, { className: ee.indicator, children: s.checked === "indeterminate" ? /* @__PURE__ */ e("span", { className: ee.dash }) : /* @__PURE__ */ e(Ne, {}) }) });
  return n ? /* @__PURE__ */ m("span", { className: ee.wrapper, children: [
    d,
    /* @__PURE__ */ e("label", { className: ee.label, htmlFor: i, children: n })
  ] }) : d;
}), Lt = "wk-Semantic_heading", Et = "wk-Semantic_text", Mt = "wk-Semantic_muted", Ft = "wk-Semantic_subtle", Rt = "wk-Semantic_danger", Ht = "wk-Semantic_mono", Ot = "wk-Semantic_xs", zt = "wk-Semantic_sm", Vt = "wk-Semantic_md", Kt = "wk-Semantic_lg", jt = "wk-Semantic_xl", qt = "wk-Semantic_xxl", Jt = "wk-Semantic_link", Ut = "wk-Semantic_visuallyHidden", D = {
  heading: Lt,
  text: Et,
  muted: Mt,
  subtle: Ft,
  danger: Rt,
  mono: Ht,
  xs: Ot,
  sm: zt,
  md: Vt,
  lg: Kt,
  xl: jt,
  xxl: qt,
  link: Jt,
  visuallyHidden: Ut
};
function de({ className: t, ...n }) {
  return /* @__PURE__ */ e("span", { className: u(D.visuallyHidden, t), ...n });
}
const Gt = "wk-Dialog_overlay", Yt = "wk-Dialog_content", Xt = "wk-Dialog_header", Qt = "wk-Dialog_headings", Wt = "wk-Dialog_title", Zt = "wk-Dialog_description", en = "wk-Dialog_close", tn = "wk-Dialog_footer", R = {
  overlay: Gt,
  content: Yt,
  header: Xt,
  headings: Qt,
  title: Wt,
  description: Zt,
  close: en,
  footer: tn
};
function Na({
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
const $a = C.Close, nn = "wk-Menu_content", on = "wk-Menu_item", sn = "wk-Menu_danger", an = "wk-Menu_label", rn = "wk-Menu_separator", cn = "wk-Menu_shortcut", Q = {
  content: nn,
  item: on,
  danger: sn,
  label: an,
  separator: rn,
  shortcut: cn
};
function Ca({ trigger: t, children: n, align: o = "start", side: a = "bottom", className: s, ...r }) {
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
const Sa = B(function({ tone: n = "default", shortcut: o, className: a, children: s, ...r }, c) {
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
function Ta({ children: t }) {
  return /* @__PURE__ */ e(V.Label, { className: Q.label, children: t });
}
function xa() {
  return /* @__PURE__ */ e(V.Separator, { className: Q.separator });
}
const ln = "wk-Tooltip_content", dn = "wk-Tooltip_arrow", Te = {
  content: ln,
  arrow: dn
}, Ia = Y.Provider;
function Da({ content: t, children: n, side: o = "top", delayDuration: a, className: s }) {
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
const mn = "wk-Tabs_root", un = "wk-Tabs_list", pn = "wk-Tabs_trigger", hn = "wk-Tabs_content", we = {
  root: mn,
  list: un,
  trigger: pn,
  content: hn
};
function Pa({ className: t, ...n }) {
  return /* @__PURE__ */ e(pe.Root, { className: u(we.root, t), ...n });
}
function Ba({ className: t, ...n }) {
  return /* @__PURE__ */ e(pe.List, { className: u(we.list, t), ...n });
}
const Aa = B(
  function({ className: n, ...o }, a) {
    return /* @__PURE__ */ e(pe.Trigger, { ref: a, className: u(we.trigger, n), ...o });
  }
);
function La({ className: t, ...n }) {
  return /* @__PURE__ */ e(pe.Content, { className: u(we.content, t), ...n });
}
const wn = "wk-Toast_viewport", kn = "wk-Toast_root", fn = "wk-Toast_body", bn = "wk-Toast_title", _n = "wk-Toast_description", vn = "wk-Toast_close", G = {
  viewport: wn,
  root: kn,
  body: fn,
  title: bn,
  description: _n,
  close: vn
}, Ae = le(null);
function Ea({ children: t, swipeDirection: n = "right" }) {
  const [o, a] = A([]), s = q(1), r = j((d) => {
    a((l) => l.filter((p) => p.id !== d));
  }, []), c = j((d) => {
    const l = s.current++;
    a((p) => [...p, { ...d, id: l }]);
  }, []), i = K(() => ({ toast: c, dismiss: r }), [c, r]);
  return /* @__PURE__ */ e(Ae.Provider, { value: i, children: /* @__PURE__ */ m(U.Provider, { swipeDirection: n, children: [
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
function Ma() {
  const t = ie(Ae);
  if (!t) throw new Error("useToast must be used inside <ToastProvider>");
  return t;
}
const gn = "wk-Textarea_root", yn = "wk-Textarea_mono", Nn = "wk-Textarea_noResize", ke = {
  root: gn,
  mono: yn,
  noResize: Nn
}, Fa = B(function({ invalid: n, mono: o = !1, resizable: a = !0, className: s, id: r, rows: c = 4, ...i }, d) {
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
}), $n = "wk-Combobox_wrap", Cn = "wk-Combobox_list", Sn = "wk-Combobox_option", Tn = "wk-Combobox_label", xn = "wk-Combobox_mono", In = "wk-Combobox_hint", Dn = "wk-Combobox_empty", z = {
  wrap: $n,
  list: Cn,
  option: Sn,
  label: Tn,
  mono: xn,
  hint: In,
  empty: Dn
}, Pn = (t) => t.value ?? t.label;
function Ra({
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
    N && (n(Pn(N)), _(!1), h(-1));
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
const Bn = "wk-SegmentedControl_root", An = "wk-SegmentedControl_option", Ln = "wk-SegmentedControl_fluid", fe = {
  root: Bn,
  option: An,
  fluid: Ln
};
function Ha({
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
const En = "wk-Alert_root", Mn = "wk-Alert_info", Fn = "wk-Alert_success", Rn = "wk-Alert_warn", Hn = "wk-Alert_danger", On = "wk-Alert_icon", zn = "wk-Alert_title", Vn = "wk-Alert_body", Kn = "wk-Alert_actions", jn = "wk-Alert_close", qn = "wk-Alert_banner", H = {
  root: En,
  info: Mn,
  success: Fn,
  warn: Rn,
  danger: Hn,
  icon: On,
  title: zn,
  body: Vn,
  actions: Kn,
  close: jn,
  banner: qn
};
function Oa({
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
const Jn = "wk-EmptyState_root", Un = "wk-EmptyState_icon", Gn = "wk-EmptyState_title", Yn = "wk-EmptyState_description", Xn = "wk-EmptyState_actions", te = {
  root: Jn,
  icon: Un,
  title: Gn,
  description: Yn,
  actions: Xn
};
function za({ icon: t, title: n, description: o, action: a, className: s }) {
  return /* @__PURE__ */ m("div", { className: u(te.root, s), children: [
    t && /* @__PURE__ */ e("span", { className: te.icon, "aria-hidden": "true", children: t }),
    /* @__PURE__ */ e("p", { className: te.title, children: n }),
    o && /* @__PURE__ */ e("p", { className: te.description, children: o }),
    a && /* @__PURE__ */ e("div", { className: te.actions, children: a })
  ] });
}
const Qn = "wk-Spinner_root", Wn = "wk-Spinner_sm", Zn = "wk-Spinner_md", eo = "wk-Spinner_lg", xe = {
  root: Qn,
  "wk-spinner-rotate": "wk-Spinner_wk-spinner-rotate",
  sm: Wn,
  md: Zn,
  lg: eo
};
function Va({ size: t = "md", label: n = "Loading", className: o }) {
  return /* @__PURE__ */ m("span", { role: "status", children: [
    /* @__PURE__ */ e("span", { className: u(xe.root, xe[t], o), "aria-hidden": "true" }),
    n && /* @__PURE__ */ e(de, { children: n })
  ] });
}
const to = "wk-Kbd_root", no = "wk-Kbd_group", be = {
  root: to,
  group: no
};
function Ka({ keys: t, className: n, children: o, ...a }) {
  return t != null && t.length ? /* @__PURE__ */ e("span", { className: be.group, ...a, children: t.map((s, r) => /* @__PURE__ */ e(ge, { children: /* @__PURE__ */ e("kbd", { className: u(be.root, n), children: s }) }, `${s}-${r}`)) }) : /* @__PURE__ */ e("kbd", { className: u(be.root, n), ...a, children: o });
}
const oo = "wk-SplitPane_root", so = "wk-SplitPane_horizontal", ao = "wk-SplitPane_vertical", ro = "wk-SplitPane_pane", co = "wk-SplitPane_handle", ne = {
  root: oo,
  horizontal: so,
  vertical: ao,
  pane: ro,
  handle: co
};
function ja({
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
const io = "wk-NavList_list", lo = "wk-NavList_item", mo = "wk-NavList_control", uo = "wk-NavList_icon", po = "wk-NavList_label", ho = "wk-NavList_badge", X = {
  list: io,
  item: lo,
  control: mo,
  icon: uo,
  label: po,
  badge: ho
};
function qa({ children: t, className: n, ...o }) {
  return /* @__PURE__ */ e("ul", { className: u(X.list, n), ...o, children: t });
}
function Ja({
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
        /* @__PURE__ */ e("span", { className: X.label, children: t }),
        a && /* @__PURE__ */ e("span", { className: X.badge, children: a })
      ]
    }
  ) });
}
const wo = "wk-Tree_root", ko = "wk-Tree_item", fo = "wk-Tree_twisty", bo = "wk-Tree_spacer", _o = "wk-Tree_label", re = {
  root: wo,
  item: ko,
  twisty: fo,
  spacer: bo,
  label: _o
}, Le = le(null);
function Ua({ children: t, onActivate: n, onToggle: o, className: a, ...s }) {
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
  return /* @__PURE__ */ e(Le.Provider, { value: _, children: /* @__PURE__ */ e(
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
function Ga({
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
  const h = ie(Le);
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
            children: /* @__PURE__ */ e(De, {})
          }
        ) : /* @__PURE__ */ e("span", { className: re.spacer }),
        c,
        /* @__PURE__ */ e("span", { className: re.label, children: o }),
        i
      ]
    }
  );
}
const vo = "wk-CommandPalette_overlay", go = "wk-CommandPalette_content", yo = "wk-CommandPalette_search", No = "wk-CommandPalette_searchIcon", $o = "wk-CommandPalette_input", Co = "wk-CommandPalette_list", So = "wk-CommandPalette_group", To = "wk-CommandPalette_heading", xo = "wk-CommandPalette_item", Io = "wk-CommandPalette_itemIcon", Do = "wk-CommandPalette_itemLabel", Po = "wk-CommandPalette_itemHint", Bo = "wk-CommandPalette_empty", Ao = "wk-CommandPalette_footer", S = {
  overlay: vo,
  content: go,
  search: yo,
  searchIcon: No,
  input: $o,
  list: Co,
  group: So,
  heading: To,
  item: xo,
  itemIcon: Io,
  itemLabel: Do,
  itemHint: Po,
  empty: Bo,
  footer: Ao
}, Ee = le(null);
function Ya({
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
      /* @__PURE__ */ m(Ee.Provider, { value: y, children: [
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
function Xa({ heading: t, children: n }) {
  return /* @__PURE__ */ m("li", { className: S.group, children: [
    t && /* @__PURE__ */ e("div", { className: S.heading, children: t }),
    /* @__PURE__ */ e("ul", { role: "group", style: { listStyle: "none", margin: 0, padding: 0 }, children: n })
  ] });
}
function Qa({ id: t, children: n, onSelect: o, icon: a, hint: s }) {
  const r = ie(Ee);
  if (!r) throw new Error("CommandItem must be used inside <CommandPalette>");
  r.register(t, o);
  const { attach: c } = r;
  Re(() => c(t), [c, t]);
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
function Wa({ children: t }) {
  return /* @__PURE__ */ e("li", { className: S.empty, children: t });
}
const Lo = "wk-KeyValueEditor_root", Eo = "wk-KeyValueEditor_head", Mo = "wk-KeyValueEditor_row", Fo = "wk-KeyValueEditor_cell", Ro = "wk-KeyValueEditor_actions", Ho = "wk-KeyValueEditor_remove", Oo = "wk-KeyValueEditor_footer", zo = "wk-KeyValueEditor_empty", E = {
  root: Lo,
  head: Eo,
  row: Mo,
  cell: Fo,
  actions: Ro,
  remove: Ho,
  footer: Oo,
  empty: zo
};
function Za({
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
          At,
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
      Xe,
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
const Vo = "wk-CodeSurface_root", Ko = "wk-CodeSurface_toolbar", jo = "wk-CodeSurface_body", qo = "wk-CodeSurface_pre", Jo = "wk-CodeSurface_status", ce = {
  root: Vo,
  toolbar: Ko,
  body: jo,
  pre: qo,
  status: Jo
};
function er({ children: t, toolbar: n, status: o, className: a }) {
  return /* @__PURE__ */ m("div", { className: u(ce.root, a), children: [
    n && /* @__PURE__ */ e("div", { className: ce.toolbar, children: n }),
    /* @__PURE__ */ e("div", { className: ce.body, children: t }),
    o && /* @__PURE__ */ e("div", { className: ce.status, children: o })
  ] });
}
function tr({ code: t, className: n, ...o }) {
  return /* @__PURE__ */ e("pre", { className: u(ce.pre, n), tabIndex: 0, ...o, children: /* @__PURE__ */ e("code", { children: t }) });
}
const Uo = "wk-Form_section", Go = "wk-Form_sectionTop", Yo = "wk-Form_sectionHead", Xo = "wk-Form_sectionTitle", Qo = "wk-Form_sectionDesc", Wo = "wk-Form_sectionBody", Zo = "wk-Form_row", es = "wk-Form_rowText", ts = "wk-Form_rowLabel", ns = "wk-Form_rowDesc", os = "wk-Form_rowControl", ss = "wk-Form_stacked", P = {
  section: Uo,
  sectionTop: Go,
  sectionHead: Yo,
  sectionTitle: Xo,
  sectionDesc: Qo,
  sectionBody: Wo,
  row: Zo,
  rowText: es,
  rowLabel: ts,
  rowDesc: ns,
  rowControl: os,
  stacked: ss
};
function nr({ title: t, description: n, children: o, action: a, className: s }) {
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
function or({ label: t, description: n, children: o, stacked: a, className: s }) {
  return /* @__PURE__ */ m("div", { className: u(P.row, a && P.stacked, s), children: [
    /* @__PURE__ */ m("div", { className: P.rowText, children: [
      /* @__PURE__ */ e("span", { className: P.rowLabel, children: t }),
      n && /* @__PURE__ */ e("p", { className: P.rowDesc, children: n })
    ] }),
    /* @__PURE__ */ e("div", { className: P.rowControl, children: o })
  ] });
}
const as = "wk-HighlightText_mark", rs = {
  mark: as
};
function sr({ text: t, query: n, className: o }) {
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
  return /* @__PURE__ */ e("span", { className: o, children: r.map((i, d) => /* @__PURE__ */ e(ge, { children: i.hit ? /* @__PURE__ */ e("mark", { className: rs.mark, children: i.chunk }) : i.chunk }, d)) });
}
const cs = "wk-SkipToContent_root", is = {
  root: cs
};
function ar({
  targetId: t = "wk-main",
  children: n = "Skip to content",
  className: o
}) {
  return /* @__PURE__ */ e("a", { href: `#${t}`, className: u(is.root, o), children: n });
}
const ls = "wk-Card_root", ds = "wk-Card_outlined", ms = "wk-Card_raised", us = "wk-Card_inset", ps = "wk-Card_interactive", hs = "wk-Card_top", ws = "wk-Card_icon", ks = "wk-Card_head", fs = "wk-Card_title", bs = "wk-Card_description", _s = "wk-Card_action", vs = "wk-Card_body", gs = "wk-Card_footer", x = {
  root: ls,
  outlined: ds,
  raised: ms,
  inset: us,
  "padding-none": "wk-Card_padding-none",
  "padding-sm": "wk-Card_padding-sm",
  "padding-md": "wk-Card_padding-md",
  "padding-lg": "wk-Card_padding-lg",
  interactive: ps,
  top: hs,
  icon: ws,
  head: ks,
  title: fs,
  description: bs,
  action: _s,
  body: vs,
  footer: gs
};
function rr({
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
const ys = "wk-Stepper_root", Ns = "wk-Stepper_horizontal", $s = "wk-Stepper_vertical", Cs = "wk-Stepper_step", Ss = "wk-Stepper_complete", Ts = "wk-Stepper_current", xs = "wk-Stepper_marker", Is = "wk-Stepper_text", Ds = "wk-Stepper_label", Ps = "wk-Stepper_description", O = {
  root: ys,
  horizontal: Ns,
  vertical: $s,
  step: Cs,
  complete: Ss,
  current: Ts,
  marker: xs,
  text: Is,
  label: Ds,
  description: Ps
};
function cr({
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
const Bs = "wk-Table_wrapper", As = "wk-Table_scroll", Ls = "wk-Table_root", Es = "wk-Table_caption", Ms = "wk-Table_th", Fs = "wk-Table_td", Rs = "wk-Table_numeric", Hs = "wk-Table_captionHidden", Os = "wk-Table_row", zs = "wk-Table_interactive", Vs = "wk-Table_sticky", I = {
  wrapper: Bs,
  scroll: As,
  root: Ls,
  caption: Es,
  th: Ms,
  td: Fs,
  numeric: Rs,
  captionHidden: Hs,
  row: Os,
  interactive: zs,
  sticky: Vs
};
function ir({
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
const lr = (t) => /* @__PURE__ */ e("thead", { ...t }), dr = (t) => /* @__PURE__ */ e("tbody", { ...t }), mr = ({ selected: t, className: n, ...o }) => /* @__PURE__ */ e("tr", { "data-selected": t || void 0, className: u(I.row, n), ...o }), ur = ({ numeric: t, scope: n = "col", className: o, ...a }) => /* @__PURE__ */ e("th", { scope: n, className: u(I.th, t && I.numeric, o), ...a }), pr = ({ numeric: t, className: n, ...o }) => /* @__PURE__ */ e("td", { className: u(I.td, t && I.numeric, n), ...o }), Ks = "wk-Badge_root", js = "wk-Badge_neutral", qs = "wk-Badge_accent", Js = "wk-Badge_danger", Us = "wk-Badge_warn", Gs = "wk-Badge_success", Ys = "wk-Badge_info", Xs = "wk-Badge_mono", _e = {
  root: Ks,
  neutral: js,
  accent: qs,
  danger: Js,
  warn: Us,
  success: Gs,
  info: Ys,
  mono: Xs
};
function hr({ tone: t = "neutral", mono: n = !1, className: o, ...a }) {
  return /* @__PURE__ */ e("span", { className: u(_e.root, _e[t], n && _e.mono, o), ...a });
}
const Qs = "wk-AppShell_root", Ws = "wk-AppShell_titlebar", Zs = "wk-AppShell_body", ea = "wk-AppShell_sidebar", ta = "wk-AppShell_main", oe = {
  root: Qs,
  titlebar: Ws,
  body: Zs,
  sidebar: ea,
  main: ta
};
function wr({
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
const na = {
  1: "2xl",
  2: "xl",
  3: "lg",
  4: "md",
  5: "sm",
  6: "xs"
}, Me = {
  xs: D.xs,
  sm: D.sm,
  md: D.md,
  lg: D.lg,
  xl: D.xl,
  "2xl": D.xxl
}, kr = B(function({ level: n, size: o, className: a, ...s }, r) {
  const c = `h${n}`, i = Me[o ?? na[n]];
  return /* @__PURE__ */ e(c, { ref: r, className: u(D.heading, i, a), ...s });
}), fr = B(function({ as: n = "p", size: o = "md", tone: a = "default", mono: s = !1, className: r, ...c }, i) {
  return /* @__PURE__ */ e(
    n,
    {
      ref: i,
      className: u(
        D.text,
        Me[o],
        a !== "default" && D[a],
        s && D.mono,
        r
      ),
      ...c
    }
  );
}), br = B(function({ external: n = !1, nofollow: o = !1, asChild: a = !1, className: s, rel: r, target: c, ...i }, d) {
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
}), oa = "wk-Media_image", sa = "wk-Media_skeleton", Fe = {
  image: oa,
  skeleton: sa
}, _r = B(function({ width: n, height: o, aspectRatio: a, priority: s = !1, className: r, style: c, alt: i, ...d }, l) {
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
      className: u(Fe.image, r),
      style: { ...p ? { "--wk-image-ar": String(p) } : null, ...c },
      ...d
    }
  );
});
function vr({
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
      className: u(Fe.skeleton, a),
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
function aa({ data: t, nonce: n }) {
  const o = JSON.stringify(t).replace(/</g, "\\u003c");
  return /* @__PURE__ */ e("script", { type: "application/ld+json", nonce: n, dangerouslySetInnerHTML: { __html: o } });
}
const ra = "wk-Breadcrumbs_root", ca = "wk-Breadcrumbs_list", ia = "wk-Breadcrumbs_item", la = "wk-Breadcrumbs_link", da = "wk-Breadcrumbs_sep", se = {
  root: ra,
  list: ca,
  item: ia,
  link: la,
  sep: da
};
function gr({ items: t, origin: n, className: o }) {
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
    /* @__PURE__ */ e(aa, { data: a })
  ] });
}
export {
  Oa as Alert,
  wr as AppShell,
  hr as Badge,
  gr as Breadcrumbs,
  Xe as Button,
  rr as Card,
  Ne as CheckIcon,
  At as Checkbox,
  De as ChevronDownIcon,
  he as CloseIcon,
  tr as CodeBlock,
  er as CodeSurface,
  Ra as Combobox,
  Wa as CommandEmpty,
  Xa as CommandGroup,
  Qa as CommandItem,
  Ya as CommandPalette,
  Na as Dialog,
  $a as DialogClose,
  za as EmptyState,
  fa as Field,
  nr as FormSection,
  kr as Heading,
  sr as HighlightText,
  _r as Image,
  ve as Input,
  aa as JsonLd,
  Ka as Kbd,
  Za as KeyValueEditor,
  br as Link,
  Ca as Menu,
  Sa as MenuItem,
  Ta as MenuLabel,
  xa as MenuSeparator,
  Ja as NavItem,
  qa as NavList,
  Ha as SegmentedControl,
  ba as Select,
  va as SelectGroup,
  _a as SelectItem,
  ga as SelectSeparator,
  or as SettingRow,
  vr as Skeleton,
  ar as SkipToContent,
  Va as Spinner,
  ja as SplitPane,
  cr as Stepper,
  ya as Switch,
  ir as Table,
  Pa as Tabs,
  La as TabsContent,
  Ba as TabsList,
  Aa as TabsTrigger,
  dr as Tbody,
  pr as Td,
  fr as Text,
  Fa as Textarea,
  ur as Th,
  lr as Thead,
  ha as ThemeProvider,
  ka as ThemeScript,
  Ea as ToastProvider,
  Da as Tooltip,
  Ia as TooltipProvider,
  mr as Tr,
  Ua as Tree,
  Ga as TreeItem,
  de as VisuallyHidden,
  u as cn,
  $e as useField,
  wa as useTheme,
  Ma as useToast
};
//# sourceMappingURL=index.js.map
