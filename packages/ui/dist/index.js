import { jsx as e, jsxs as u, Fragment as Ae } from "react/jsx-runtime";
import { useState as E, useEffect as ue, useCallback as W, useMemo as q, useContext as ne, createContext as oe, forwardRef as P, useId as z, useRef as X, Fragment as ke, useLayoutEffect as qe, isValidElement as Je } from "react";
import { Slot as fe, Slottable as Me } from "@radix-ui/react-slot";
import * as B from "@radix-ui/react-select";
import * as Ie from "@radix-ui/react-switch";
import * as De from "@radix-ui/react-checkbox";
import * as I from "@radix-ui/react-dialog";
import * as F from "@radix-ui/react-dropdown-menu";
import * as Y from "@radix-ui/react-context-menu";
import * as ee from "@radix-ui/react-tooltip";
import * as be from "@radix-ui/react-tabs";
import * as Q from "@radix-ui/react-toast";
function m(...t) {
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
}), xe = (t) => /* @__PURE__ */ e("svg", { ..._e(t), children: /* @__PURE__ */ e("path", { d: "M3 8.5 6.5 12 13 4.5" }) }), Ee = (t) => /* @__PURE__ */ e("svg", { ..._e(t), children: /* @__PURE__ */ e("path", { d: "m4 6 4 4 4-4" }) }), ge = (t) => /* @__PURE__ */ e("svg", { ..._e(t), children: /* @__PURE__ */ e("path", { d: "M4 4l8 8M12 4l-8 8" }) }), Ue = (t) => /* @__PURE__ */ u("svg", { ..._e(t), children: [
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
function Ma({
  children: t,
  theme: n,
  defaultTheme: o = "system",
  defaultDensity: s = "normal",
  storageKey: a = "wertkit-theme",
  target: r = "root"
}) {
  const [c, i] = E(o), [l, d] = E(s), [h, _] = E(!1), [b, k] = E(null);
  ue(() => {
    const g = Ge(a);
    g.theme && i(g.theme), g.density && d(g.density);
  }, [a]);
  const w = n ?? c;
  ue(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function") return;
    const g = window.matchMedia("(prefers-color-scheme: dark)"), y = () => _(g.matches);
    return y(), g.addEventListener("change", y), () => g.removeEventListener("change", y);
  }, []);
  const p = w === "system" ? h ? "dark" : "light" : w;
  ue(() => {
    const g = r === "self" ? b : document.documentElement;
    g && (g.setAttribute("data-theme", p), g.setAttribute("data-density", l));
  }, [p, l, r, b]), ue(() => {
    if (!(!a || typeof window > "u"))
      try {
        window.localStorage.setItem(a, JSON.stringify({ theme: w, density: l }));
      } catch {
      }
  }, [w, l, a]);
  const f = W((g) => i(g), []), v = W((g) => d(g), []), N = q(
    () => ({ theme: w, resolvedTheme: p, setTheme: f, density: l, setDensity: v }),
    [w, p, f, l, v]
  );
  return /* @__PURE__ */ e(Fe.Provider, { value: N, children: r === "self" ? /* @__PURE__ */ e("div", { ref: k, children: t }) : t });
}
function Ea() {
  const t = ne(Fe);
  if (!t) throw new Error("useTheme must be used inside <ThemeProvider>");
  return t;
}
function Fa({
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
const Ye = "wk-Button_root", We = "wk-Button_sm", Xe = "wk-Button_md", Qe = "wk-Button_lg", Ze = "wk-Button_iconOnly", et = "wk-Button_primary", tt = "wk-Button_secondary", nt = "wk-Button_ghost", ot = "wk-Button_danger", st = "wk-Button_spinner", se = {
  root: Ye,
  sm: We,
  md: Xe,
  lg: Qe,
  iconOnly: Ze,
  primary: et,
  secondary: tt,
  ghost: nt,
  danger: ot,
  spinner: st,
  "wk-spin": "wk-Button_wk-spin"
}, at = P(function({
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
  return /* @__PURE__ */ u(
    i ? fe : "button",
    {
      ref: k,
      type: i ? void 0 : _ ?? "button",
      disabled: h || a,
      "data-loading": a || void 0,
      className: m(
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
function Ra({ label: t, hint: n, error: o, required: s, children: a, className: r }) {
  const c = z(), i = `${c}-input`, l = `${c}-hint`, d = `${c}-error`, h = !!o, _ = [o ? d : null, n ? l : null].filter(Boolean).join(" ") || void 0;
  return /* @__PURE__ */ e(Re.Provider, { value: { inputId: i, describedBy: _, invalid: h }, children: /* @__PURE__ */ u("div", { className: m(ae.root, r), children: [
    t && /* @__PURE__ */ u("label", { className: ae.label, htmlFor: i, children: [
      t,
      s && /* @__PURE__ */ e("span", { className: ae.required, "aria-hidden": "true", children: "*" })
    ] }),
    a,
    o ? /* @__PURE__ */ e("p", { className: ae.error, id: d, role: "alert", children: o }) : n && /* @__PURE__ */ e("p", { className: ae.hint, id: l, children: n })
  ] }) });
}
const ut = "wk-Input_root", mt = "wk-Input_mono", ht = "wk-Input_shell", pt = "wk-Input_slot", wt = "wk-Input_start", kt = "wk-Input_end", ft = "wk-Input_hasStart", bt = "wk-Input_hasEnd", _t = "wk-Input_sm", gt = "wk-Input_md", vt = "wk-Input_lg", R = {
  root: ut,
  mono: mt,
  shell: ht,
  slot: pt,
  start: wt,
  end: kt,
  hasStart: ft,
  hasEnd: bt,
  sm: _t,
  md: gt,
  lg: vt
}, Se = P(function({
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
      className: m(
        R.root,
        R[n],
        s && R.mono,
        a && R.hasStart,
        r && R.hasEnd,
        !a && !r && c
      ),
      ...d
    }
  );
  return !a && !r ? k : /* @__PURE__ */ u("span", { className: m(R.shell, c), "data-invalid": b || void 0, children: [
    a && /* @__PURE__ */ e("span", { className: m(R.slot, R.start), "aria-hidden": "true", children: a }),
    k,
    r && /* @__PURE__ */ e("span", { className: m(R.slot, R.end), children: r })
  ] });
}), yt = "wk-Select_trigger", Nt = "wk-Select_sm", $t = "wk-Select_md", Ct = "wk-Select_lg", St = "wk-Select_icon", xt = "wk-Select_content", Tt = "wk-Select_viewport", It = "wk-Select_item", Dt = "wk-Select_itemIndicator", Bt = "wk-Select_label", Pt = "wk-Select_separator", O = {
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
function Ha({
  placeholder: t,
  size: n = "md",
  children: o,
  className: s,
  id: a,
  "aria-label": r,
  ...c
}) {
  const i = Te();
  return /* @__PURE__ */ u(B.Root, { ...c, children: [
    /* @__PURE__ */ u(
      B.Trigger,
      {
        id: a ?? (i == null ? void 0 : i.inputId),
        "aria-label": r,
        "aria-invalid": (i == null ? void 0 : i.invalid) || void 0,
        "aria-describedby": i == null ? void 0 : i.describedBy,
        className: m(O.trigger, O[n], s),
        children: [
          /* @__PURE__ */ e(B.Value, { placeholder: t }),
          /* @__PURE__ */ e(B.Icon, { className: O.icon, children: /* @__PURE__ */ e(Ee, {}) })
        ]
      }
    ),
    /* @__PURE__ */ e(B.Portal, { children: /* @__PURE__ */ e(B.Content, { className: O.content, position: "popper", sideOffset: 4, children: /* @__PURE__ */ e(B.Viewport, { className: O.viewport, children: o }) }) })
  ] });
}
const Oa = P(
  function({ className: n, children: o, ...s }, a) {
    return /* @__PURE__ */ u(B.Item, { ref: a, className: m(O.item, n), ...s, children: [
      /* @__PURE__ */ e(B.ItemText, { children: o }),
      /* @__PURE__ */ e(B.ItemIndicator, { className: O.itemIndicator, children: /* @__PURE__ */ e(xe, {}) })
    ] });
  }
);
function za({ label: t, children: n }) {
  return /* @__PURE__ */ u(B.Group, { children: [
    /* @__PURE__ */ e(B.Label, { className: O.label, children: t }),
    n
  ] });
}
function Va() {
  return /* @__PURE__ */ e(B.Separator, { className: O.separator });
}
const Lt = "wk-Switch_wrapper", At = "wk-Switch_root", Mt = "wk-Switch_thumb", Et = "wk-Switch_label", we = {
  wrapper: Lt,
  root: At,
  thumb: Mt,
  label: Et
}, ja = P(function({ label: n, className: o, id: s, ...a }, r) {
  const c = z(), i = s ?? c, l = /* @__PURE__ */ e(Ie.Root, { ref: r, id: i, className: m(we.root, o), ...a, children: /* @__PURE__ */ e(Ie.Thumb, { className: we.thumb }) });
  return n ? /* @__PURE__ */ u("span", { className: we.wrapper, children: [
    l,
    /* @__PURE__ */ e("label", { className: we.label, htmlFor: i, children: n })
  ] }) : l;
}), Ft = "wk-Checkbox_wrapper", Rt = "wk-Checkbox_root", Ht = "wk-Checkbox_indicator", Ot = "wk-Checkbox_dash", zt = "wk-Checkbox_label", re = {
  wrapper: Ft,
  root: Rt,
  indicator: Ht,
  dash: Ot,
  label: zt
}, Vt = P(function({ label: n, className: o, id: s, ...a }, r) {
  const c = z(), i = s ?? c, l = /* @__PURE__ */ e(De.Root, { ref: r, id: i, className: m(re.root, o), ...a, children: /* @__PURE__ */ e(De.Indicator, { className: re.indicator, children: a.checked === "indeterminate" ? /* @__PURE__ */ e("span", { className: re.dash }) : /* @__PURE__ */ e(xe, {}) }) });
  return n ? /* @__PURE__ */ u("span", { className: re.wrapper, children: [
    l,
    /* @__PURE__ */ e("label", { className: re.label, htmlFor: i, children: n })
  ] }) : l;
}), jt = "wk-Semantic_heading", Kt = "wk-Semantic_text", qt = "wk-Semantic_muted", Jt = "wk-Semantic_subtle", Ut = "wk-Semantic_danger", Gt = "wk-Semantic_mono", Yt = "wk-Semantic_xs", Wt = "wk-Semantic_sm", Xt = "wk-Semantic_md", Qt = "wk-Semantic_lg", Zt = "wk-Semantic_xl", en = "wk-Semantic_xxl", tn = "wk-Semantic_link", nn = "wk-Semantic_visuallyHidden", A = {
  heading: jt,
  text: Kt,
  muted: qt,
  subtle: Jt,
  danger: Ut,
  mono: Gt,
  xs: Yt,
  sm: Wt,
  md: Xt,
  lg: Qt,
  xl: Zt,
  xxl: en,
  link: tn,
  visuallyHidden: nn
};
function pe({ className: t, ...n }) {
  return /* @__PURE__ */ e("span", { className: m(A.visuallyHidden, t), ...n });
}
const on = "wk-Dialog_overlay", sn = "wk-Dialog_content", an = "wk-Dialog_header", rn = "wk-Dialog_headings", cn = "wk-Dialog_title", ln = "wk-Dialog_description", dn = "wk-Dialog_close", un = "wk-Dialog_footer", V = {
  overlay: on,
  content: sn,
  header: an,
  headings: rn,
  title: cn,
  description: ln,
  close: dn,
  footer: un
};
function Ka({
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
  return /* @__PURE__ */ u(I.Root, { ...d, children: [
    r && /* @__PURE__ */ e(I.Trigger, { asChild: !0, children: r }),
    /* @__PURE__ */ u(I.Portal, { children: [
      /* @__PURE__ */ e(I.Overlay, { className: V.overlay }),
      /* @__PURE__ */ u(
        I.Content,
        {
          className: m(V.content, l),
          style: c ? { "--wk-dialog-w": c } : void 0,
          children: [
            /* @__PURE__ */ u("div", { className: V.header, children: [
              /* @__PURE__ */ u("div", { className: V.headings, children: [
                n ? /* @__PURE__ */ e(I.Title, { asChild: !0, children: /* @__PURE__ */ e(pe, { children: t }) }) : /* @__PURE__ */ e(I.Title, { className: V.title, children: t }),
                o && /* @__PURE__ */ e(I.Description, { className: V.description, children: o })
              ] }),
              i && /* @__PURE__ */ e(I.Close, { className: V.close, "aria-label": "Close", children: /* @__PURE__ */ e(ge, {}) })
            ] }),
            s,
            a && /* @__PURE__ */ e("div", { className: V.footer, children: a })
          ]
        }
      )
    ] })
  ] });
}
const qa = I.Close, mn = "wk-Menu_content", hn = "wk-Menu_item", pn = "wk-Menu_subTrigger", wn = "wk-Menu_subChevron", kn = "wk-Menu_danger", fn = "wk-Menu_label", bn = "wk-Menu_separator", _n = "wk-Menu_shortcut", S = {
  content: mn,
  item: hn,
  subTrigger: pn,
  subChevron: wn,
  danger: kn,
  label: fn,
  separator: bn,
  shortcut: _n
};
function Ja({ trigger: t, children: n, align: o = "start", side: s = "bottom", className: a, ...r }) {
  return /* @__PURE__ */ u(F.Root, { ...r, children: [
    /* @__PURE__ */ e(F.Trigger, { asChild: !0, children: t }),
    /* @__PURE__ */ e(F.Portal, { children: /* @__PURE__ */ e(
      F.Content,
      {
        className: m(S.content, a),
        align: o,
        side: s,
        sideOffset: 4,
        collisionPadding: 8,
        children: n
      }
    ) })
  ] });
}
const Ua = P(function({ tone: n = "default", shortcut: o, className: s, children: a, ...r }, c) {
  return /* @__PURE__ */ u(
    F.Item,
    {
      ref: c,
      className: m(S.item, n === "danger" && S.danger, s),
      ...r,
      children: [
        a,
        o && /* @__PURE__ */ e("span", { className: S.shortcut, children: o })
      ]
    }
  );
});
function Ga({ children: t }) {
  return /* @__PURE__ */ e(F.Label, { className: S.label, children: t });
}
function Ya() {
  return /* @__PURE__ */ e(F.Separator, { className: S.separator });
}
function Wa({ trigger: t, children: n, chevron: o = !0, tone: s = "default", className: a }) {
  return /* @__PURE__ */ u(F.Sub, { children: [
    /* @__PURE__ */ u(
      F.SubTrigger,
      {
        className: m(S.item, S.subTrigger, s === "danger" && S.danger, a),
        children: [
          t,
          o && /* @__PURE__ */ e(
            "svg",
            {
              className: S.subChevron,
              width: "13",
              height: "13",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              "aria-hidden": "true",
              children: /* @__PURE__ */ e("path", { d: "m9 18 6-6-6-6" })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ e(F.Portal, { children: /* @__PURE__ */ e(
      F.SubContent,
      {
        className: S.content,
        sideOffset: 2,
        alignOffset: -4,
        collisionPadding: 8,
        children: n
      }
    ) })
  ] });
}
function Xa({ trigger: t, children: n, className: o, ...s }) {
  return /* @__PURE__ */ u(Y.Root, { ...s, children: [
    /* @__PURE__ */ e(Y.Trigger, { asChild: !0, children: t }),
    /* @__PURE__ */ e(Y.Portal, { children: /* @__PURE__ */ e(
      Y.Content,
      {
        className: m(S.content, o),
        collisionPadding: 8,
        children: n
      }
    ) })
  ] });
}
const Qa = P(
  function({ tone: n = "default", shortcut: o, className: s, children: a, ...r }, c) {
    return /* @__PURE__ */ u(
      Y.Item,
      {
        ref: c,
        className: m(S.item, n === "danger" && S.danger, s),
        ...r,
        children: [
          a,
          o && /* @__PURE__ */ e("span", { className: S.shortcut, children: o })
        ]
      }
    );
  }
);
function Za({ children: t }) {
  return /* @__PURE__ */ e(Y.Label, { className: S.label, children: t });
}
function er() {
  return /* @__PURE__ */ e(Y.Separator, { className: S.separator });
}
const gn = "wk-Tooltip_content", vn = "wk-Tooltip_arrow", Be = {
  content: gn,
  arrow: vn
}, tr = ee.Provider;
function nr({ content: t, children: n, side: o = "top", delayDuration: s, className: a }) {
  return /* @__PURE__ */ u(ee.Root, { delayDuration: s, children: [
    /* @__PURE__ */ e(ee.Trigger, { asChild: !0, children: n }),
    /* @__PURE__ */ e(ee.Portal, { children: /* @__PURE__ */ u(
      ee.Content,
      {
        className: m(Be.content, a),
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
const yn = "wk-Tabs_root", Nn = "wk-Tabs_list", $n = "wk-Tabs_trigger", Cn = "wk-Tabs_content", ve = {
  root: yn,
  list: Nn,
  trigger: $n,
  content: Cn
};
function or({ className: t, ...n }) {
  return /* @__PURE__ */ e(be.Root, { className: m(ve.root, t), ...n });
}
function sr({ className: t, ...n }) {
  return /* @__PURE__ */ e(be.List, { className: m(ve.list, t), ...n });
}
const ar = P(
  function({ className: n, ...o }, s) {
    return /* @__PURE__ */ e(be.Trigger, { ref: s, className: m(ve.trigger, n), ...o });
  }
);
function rr({ className: t, ...n }) {
  return /* @__PURE__ */ e(be.Content, { className: m(ve.content, t), ...n });
}
const Sn = "wk-Toast_viewport", xn = "wk-Toast_root", Tn = "wk-Toast_body", In = "wk-Toast_title", Dn = "wk-Toast_description", Bn = "wk-Toast_close", Z = {
  viewport: Sn,
  root: xn,
  body: Tn,
  title: In,
  description: Dn,
  close: Bn
}, He = oe(null);
function cr({ children: t, swipeDirection: n = "right" }) {
  const [o, s] = E([]), a = X(1), r = W((l) => {
    s((d) => d.filter((h) => h.id !== l));
  }, []), c = W((l) => {
    const d = a.current++;
    s((h) => [...h, { ...l, id: d }]);
  }, []), i = q(() => ({ toast: c, dismiss: r }), [c, r]);
  return /* @__PURE__ */ e(He.Provider, { value: i, children: /* @__PURE__ */ u(Q.Provider, { swipeDirection: n, children: [
    t,
    o.map((l) => /* @__PURE__ */ u(
      Q.Root,
      {
        className: Z.root,
        "data-tone": l.tone ?? "neutral",
        duration: l.duration ?? (l.tone === "danger" ? 1 / 0 : 5e3),
        type: l.tone === "danger" ? "foreground" : "background",
        onOpenChange: (d) => {
          d || r(l.id);
        },
        children: [
          /* @__PURE__ */ u("div", { className: Z.body, children: [
            /* @__PURE__ */ e(Q.Title, { className: Z.title, children: l.title }),
            l.description && /* @__PURE__ */ e(Q.Description, { className: Z.description, children: l.description })
          ] }),
          /* @__PURE__ */ e(Q.Close, { className: Z.close, "aria-label": "Dismiss", children: /* @__PURE__ */ e(ge, {}) })
        ]
      },
      l.id
    )),
    /* @__PURE__ */ e(Q.Viewport, { className: Z.viewport })
  ] }) });
}
function ir() {
  const t = ne(He);
  if (!t) throw new Error("useToast must be used inside <ToastProvider>");
  return t;
}
const Pn = "wk-Textarea_root", Ln = "wk-Textarea_mono", An = "wk-Textarea_noResize", ye = {
  root: Pn,
  mono: Ln,
  noResize: An
}, lr = P(function({ invalid: n, mono: o = !1, resizable: s = !0, className: a, id: r, rows: c = 4, ...i }, l) {
  const d = Te(), h = n ?? (d == null ? void 0 : d.invalid) ?? !1;
  return /* @__PURE__ */ e(
    "textarea",
    {
      ref: l,
      id: r ?? (d == null ? void 0 : d.inputId),
      rows: c,
      "aria-invalid": h || void 0,
      "aria-describedby": d == null ? void 0 : d.describedBy,
      className: m(ye.root, o && ye.mono, !s && ye.noResize, a),
      ...i
    }
  );
}), Mn = "wk-Combobox_wrap", En = "wk-Combobox_list", Fn = "wk-Combobox_option", Rn = "wk-Combobox_label", Hn = "wk-Combobox_mono", On = "wk-Combobox_hint", zn = "wk-Combobox_empty", U = {
  wrap: Mn,
  list: En,
  option: Fn,
  label: Rn,
  mono: Hn,
  hint: On,
  empty: zn
}, Vn = (t) => t.value ?? t.label;
function dr({
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
  const h = z(), [_, b] = E(!1), [k, w] = E(-1), p = X(null), f = q(() => _ ? o(t) : [], [_, o, t]), v = _ && (f.length > 0 || !!a), N = k >= 0 && f[k] ? `${h}-${k}` : void 0, g = (y) => {
    const x = f[y];
    x && (n(Vn(x)), b(!1), w(-1));
  };
  return /* @__PURE__ */ u("div", { className: U.wrap, children: [
    /* @__PURE__ */ e(
      Se,
      {
        role: "combobox",
        "aria-expanded": v,
        "aria-controls": v ? h : void 0,
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
          i == null || i(y), !y.defaultPrevented && (y.key === "ArrowDown" && f.length ? (y.preventDefault(), b(!0), w((x) => (x + 1) % f.length)) : y.key === "ArrowUp" && f.length ? (y.preventDefault(), w((x) => x <= 0 ? f.length - 1 : x - 1)) : y.key === "Enter" ? k >= 0 ? (y.preventDefault(), g(k)) : s == null || s() : y.key === "Tab" && k >= 0 ? (y.preventDefault(), g(k)) : y.key === "Escape" && v && (y.preventDefault(), b(!1), w(-1)));
        },
        ...d
      }
    ),
    v && /* @__PURE__ */ e("ul", { className: U.list, id: h, role: "listbox", children: f.length === 0 ? /* @__PURE__ */ e("li", { className: U.empty, children: a }) : f.map((y, x) => /* @__PURE__ */ u(
      "li",
      {
        id: `${h}-${x}`,
        role: "option",
        "aria-selected": x === k,
        "data-active": x === k,
        className: U.option,
        onMouseEnter: () => w(x),
        onMouseDown: ($) => {
          $.preventDefault(), p.current && clearTimeout(p.current), g(x);
        },
        children: [
          /* @__PURE__ */ e("span", { className: m(U.label, r && U.mono), children: y.label }),
          y.hint && /* @__PURE__ */ e("span", { className: U.hint, children: y.hint })
        ]
      },
      `${y.label}-${x}`
    )) })
  ] });
}
const jn = "wk-SegmentedControl_root", Kn = "wk-SegmentedControl_option", qn = "wk-SegmentedControl_fluid", Ne = {
  root: jn,
  option: Kn,
  fluid: qn
};
function ur({
  options: t,
  value: n,
  onValueChange: o,
  fluid: s = !1,
  className: a,
  ...r
}) {
  const c = z(), i = X(null), l = W(
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
      className: m(Ne.root, s && Ne.fluid, a),
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
const Jn = "wk-Alert_root", Un = "wk-Alert_info", Gn = "wk-Alert_success", Yn = "wk-Alert_warn", Wn = "wk-Alert_danger", Xn = "wk-Alert_icon", Qn = "wk-Alert_title", Zn = "wk-Alert_body", eo = "wk-Alert_actions", to = "wk-Alert_close", no = "wk-Alert_banner", j = {
  root: Jn,
  info: Un,
  success: Gn,
  warn: Yn,
  danger: Wn,
  icon: Xn,
  title: Qn,
  body: Zn,
  actions: eo,
  close: to,
  banner: no
};
function mr({
  tone: t = "info",
  title: n,
  children: o,
  icon: s,
  action: a,
  onDismiss: r,
  banner: c = !1,
  className: i
}) {
  return /* @__PURE__ */ u(
    "div",
    {
      role: t === "danger" ? "alert" : "status",
      className: m(j.root, j[t], c && j.banner, i),
      children: [
        s && /* @__PURE__ */ e("span", { className: j.icon, "aria-hidden": "true", children: s }),
        /* @__PURE__ */ u("div", { className: j.body, children: [
          n && /* @__PURE__ */ e("span", { className: j.title, children: n }),
          o,
          a && /* @__PURE__ */ e("div", { className: j.actions, children: a })
        ] }),
        r && /* @__PURE__ */ e("button", { type: "button", className: j.close, onClick: r, "aria-label": "Dismiss", children: /* @__PURE__ */ e(ge, {}) })
      ]
    }
  );
}
const oo = "wk-EmptyState_root", so = "wk-EmptyState_icon", ao = "wk-EmptyState_title", ro = "wk-EmptyState_description", co = "wk-EmptyState_actions", ce = {
  root: oo,
  icon: so,
  title: ao,
  description: ro,
  actions: co
};
function hr({
  icon: t,
  title: n,
  description: o,
  action: s,
  headingLevel: a = 2,
  className: r
}) {
  const c = `h${a}`;
  return /* @__PURE__ */ u("div", { className: m(ce.root, r), children: [
    t && /* @__PURE__ */ e("span", { className: ce.icon, "aria-hidden": "true", children: t }),
    /* @__PURE__ */ e(c, { className: ce.title, children: n }),
    o && /* @__PURE__ */ e("p", { className: ce.description, children: o }),
    s && /* @__PURE__ */ e("div", { className: ce.actions, children: s })
  ] });
}
const io = "wk-Spinner_root", lo = "wk-Spinner_sm", uo = "wk-Spinner_md", mo = "wk-Spinner_lg", Pe = {
  root: io,
  "wk-spinner-rotate": "wk-Spinner_wk-spinner-rotate",
  sm: lo,
  md: uo,
  lg: mo
};
function pr({ size: t = "md", label: n = "Loading", className: o }) {
  return /* @__PURE__ */ u("span", { role: "status", children: [
    /* @__PURE__ */ e("span", { className: m(Pe.root, Pe[t], o), "aria-hidden": "true" }),
    n && /* @__PURE__ */ e(pe, { children: n })
  ] });
}
const ho = "wk-Kbd_root", po = "wk-Kbd_group", $e = {
  root: ho,
  group: po
};
function wr({ keys: t, className: n, children: o, ...s }) {
  return t != null && t.length ? /* @__PURE__ */ e("span", { className: $e.group, ...s, children: t.map((a, r) => /* @__PURE__ */ e(ke, { children: /* @__PURE__ */ e("kbd", { className: m($e.root, n), children: a }) }, `${a}-${r}`)) }) : /* @__PURE__ */ e("kbd", { className: m($e.root, n), ...s, children: o });
}
const wo = "wk-SplitPane_root", ko = "wk-SplitPane_horizontal", fo = "wk-SplitPane_vertical", bo = "wk-SplitPane_pane", _o = "wk-SplitPane_handle", ie = {
  root: wo,
  horizontal: ko,
  vertical: fo,
  pane: bo,
  handle: _o
};
function kr({
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
  const d = X(null), [h, _] = E(!1), b = n === "horizontal", k = W(
    (p) => {
      var N;
      const f = (N = d.current) == null ? void 0 : N.getBoundingClientRect(), v = f ? (b ? f.width : f.height) - a : r;
      return Math.max(a, Math.min(p, Math.min(r, v)));
    },
    [a, r, b]
  ), w = (p) => s(k(o + p));
  return /* @__PURE__ */ u("div", { ref: d, className: m(ie.root, ie[n], i), children: [
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
          var v;
          if (!h) return;
          const f = (v = d.current) == null ? void 0 : v.getBoundingClientRect();
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
    /* @__PURE__ */ e("div", { className: m(ie.pane), style: { flex: 1 }, children: t[1] })
  ] });
}
const go = "wk-NavList_list", vo = "wk-NavList_item", yo = "wk-NavList_control", No = "wk-NavList_icon", $o = "wk-NavList_label", Co = "wk-NavList_badge", te = {
  list: go,
  item: vo,
  control: yo,
  icon: No,
  label: $o,
  badge: Co
};
function fr({ children: t, className: n, ...o }) {
  return /* @__PURE__ */ e("ul", { className: m(te.list, n), ...o, children: t });
}
function br({
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
  return /* @__PURE__ */ e("li", { className: te.item, children: /* @__PURE__ */ u(
    l,
    {
      ...r ? {} : { type: "button", disabled: c },
      className: m(te.control, i),
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
const So = "wk-Tree_root", xo = "wk-Tree_item", To = "wk-Tree_twisty", Io = "wk-Tree_spacer", Do = "wk-Tree_label", me = {
  root: So,
  item: xo,
  twisty: To,
  spacer: Io,
  label: Do
}, Oe = oe(null);
function _r({ children: t, onActivate: n, onToggle: o, className: s, ...a }) {
  const r = X(null), [c, i] = E(null), l = X([]);
  l.current = [];
  const d = W((k) => {
    l.current.push(k);
  }, []), h = (k) => {
    var w, p;
    i(k), (p = (w = r.current) == null ? void 0 : w.querySelector(`[data-tree-id="${CSS.escape(k)}"]`)) == null || p.focus();
  }, _ = (k) => {
    var N;
    const w = l.current;
    if (!w.length) return;
    const p = c ? w.indexOf(c) : -1, f = c ? (N = r.current) == null ? void 0 : N.querySelector(`[data-tree-id="${CSS.escape(c)}"]`) : null, v = f == null ? void 0 : f.getAttribute("aria-expanded");
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
        v === "false" && c ? (k.preventDefault(), o == null || o(c, !0)) : v === "true" && (k.preventDefault(), h(w[Math.min(p + 1, w.length - 1)]));
        break;
      case "ArrowLeft":
        v === "true" && c ? (k.preventDefault(), o == null || o(c, !1)) : p > 0 && (k.preventDefault(), h(w[p - 1]));
        break;
      case "Enter":
      case " ":
        c && (k.preventDefault(), n == null || n(c));
        break;
    }
  }, b = q(
    () => ({ activeId: c, setActiveId: i, register: d }),
    [c, d]
  );
  return /* @__PURE__ */ e(Oe.Provider, { value: b, children: /* @__PURE__ */ e(
    "div",
    {
      ref: r,
      role: "tree",
      className: m(me.root, s),
      onKeyDown: _,
      ...a,
      children: t
    }
  ) });
}
function gr({
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
  return /* @__PURE__ */ u(
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
      className: m(me.item, k),
      style: { paddingInlineStart: (n - 1) * b + 4 },
      onFocus: () => w.setActiveId(t),
      onClick: () => {
        w.setActiveId(t), l == null || l(t);
      },
      children: [
        s ? /* @__PURE__ */ e(
          "span",
          {
            className: me.twisty,
            "data-expanded": !!a,
            onClick: (f) => {
              f.stopPropagation(), d == null || d(t, !a);
            },
            children: /* @__PURE__ */ e(Ee, {})
          }
        ) : /* @__PURE__ */ e("span", { className: me.spacer }),
        c,
        /* @__PURE__ */ e("span", { className: me.label, children: o }),
        i
      ]
    }
  );
}
const Bo = "wk-CommandPalette_overlay", Po = "wk-CommandPalette_content", Lo = "wk-CommandPalette_search", Ao = "wk-CommandPalette_searchIcon", Mo = "wk-CommandPalette_input", Eo = "wk-CommandPalette_list", Fo = "wk-CommandPalette_group", Ro = "wk-CommandPalette_heading", Ho = "wk-CommandPalette_item", Oo = "wk-CommandPalette_itemIcon", zo = "wk-CommandPalette_itemLabel", Vo = "wk-CommandPalette_itemHint", jo = "wk-CommandPalette_empty", Ko = "wk-CommandPalette_footer", D = {
  overlay: Bo,
  content: Po,
  search: Lo,
  searchIcon: Ao,
  input: Mo,
  list: Eo,
  group: Fo,
  heading: Ro,
  item: Ho,
  itemIcon: Oo,
  itemLabel: zo,
  itemHint: Vo,
  empty: jo,
  footer: Ko
}, ze = oe(null);
function vr({
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
  const h = z(), [_, b] = E(0), [k, w] = E([]), p = X(/* @__PURE__ */ new Map()), f = q(
    () => ($, C) => {
      p.current.set($, C);
    },
    []
  ), v = q(
    () => ($) => (w((C) => C.includes($) ? C : [...C, $]), () => {
      w((C) => C.filter((J) => J !== $)), p.current.delete($);
    }),
    []
  );
  ue(() => b(0), [o]);
  const N = k.length, g = k[_] ?? k[0] ?? null, y = q(
    () => ($) => w((C) => {
      const J = C.indexOf($);
      return J >= 0 && b(J), C;
    }),
    []
  ), x = q(
    () => ({ activeId: g, register: f, attach: v, listId: h, highlight: y }),
    [g, f, v, h, y]
  );
  return /* @__PURE__ */ e(I.Root, { open: t, onOpenChange: n, children: /* @__PURE__ */ u(I.Portal, { children: [
    /* @__PURE__ */ e(I.Overlay, { className: D.overlay }),
    /* @__PURE__ */ u(I.Content, { className: m(D.content, l), children: [
      /* @__PURE__ */ e(I.Title, { asChild: !0, children: /* @__PURE__ */ e(pe, { children: c }) }),
      /* @__PURE__ */ u(ze.Provider, { value: x, children: [
        /* @__PURE__ */ u("div", { className: D.search, children: [
          /* @__PURE__ */ e("span", { className: D.searchIcon, "aria-hidden": "true", children: d ?? /* @__PURE__ */ e(Ue, {}) }),
          /* @__PURE__ */ e(
            "input",
            {
              className: D.input,
              value: o,
              onChange: ($) => s($.target.value),
              placeholder: r,
              role: "combobox",
              "aria-expanded": !0,
              "aria-controls": h,
              "aria-activedescendant": g ? `${h}-${g}` : void 0,
              "aria-autocomplete": "list",
              autoComplete: "off",
              autoFocus: !0,
              onKeyDown: ($) => {
                if ($.key === "ArrowDown" && N)
                  $.preventDefault(), b((C) => (C + 1) % N);
                else if ($.key === "ArrowUp" && N)
                  $.preventDefault(), b((C) => C <= 0 ? N - 1 : C - 1);
                else if ($.key === "Enter") {
                  const C = k[_] ?? k[0], J = C ? p.current.get(C) : void 0;
                  if (!J) return;
                  $.preventDefault(), J();
                }
              }
            }
          )
        ] }),
        /* @__PURE__ */ e("ul", { className: D.list, id: h, role: "listbox", "aria-label": c, children: a }),
        i && /* @__PURE__ */ e("div", { className: D.footer, children: i })
      ] })
    ] })
  ] }) });
}
function yr({ heading: t, children: n }) {
  return /* @__PURE__ */ u("li", { className: D.group, children: [
    t && /* @__PURE__ */ e("div", { className: D.heading, children: t }),
    /* @__PURE__ */ e("ul", { role: "group", style: { listStyle: "none", margin: 0, padding: 0 }, children: n })
  ] });
}
function Nr({ id: t, children: n, onSelect: o, icon: s, hint: a }) {
  const r = ne(ze);
  if (!r) throw new Error("CommandItem must be used inside <CommandPalette>");
  r.register(t, o);
  const { attach: c } = r;
  qe(() => c(t), [c, t]);
  const i = r.activeId === t;
  return /* @__PURE__ */ u(
    "li",
    {
      id: `${r.listId}-${t}`,
      role: "option",
      "aria-selected": i,
      "data-active": i,
      className: D.item,
      onMouseMove: () => {
        i || r.highlight(t);
      },
      onMouseDown: (l) => {
        l.preventDefault(), o();
      },
      children: [
        s && /* @__PURE__ */ e("span", { className: D.itemIcon, children: s }),
        /* @__PURE__ */ e("span", { className: D.itemLabel, children: n }),
        a && /* @__PURE__ */ e("span", { className: D.itemHint, children: a })
      ]
    }
  );
}
function $r({ children: t }) {
  return /* @__PURE__ */ e("li", { className: D.empty, children: t });
}
const qo = "wk-KeyValueEditor_root", Jo = "wk-KeyValueEditor_head", Uo = "wk-KeyValueEditor_row", Go = "wk-KeyValueEditor_cell", Yo = "wk-KeyValueEditor_actions", Wo = "wk-KeyValueEditor_remove", Xo = "wk-KeyValueEditor_footer", Qo = "wk-KeyValueEditor_empty", H = {
  root: qo,
  head: Jo,
  row: Uo,
  cell: Go,
  actions: Yo,
  remove: Wo,
  footer: Xo,
  empty: Qo
};
function Cr({
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
  const b = z();
  let k = 0;
  const w = () => (c == null ? void 0 : c()) ?? `${b}-${t.length}-${k++}`, p = (f, v) => n(t.map((N) => N.id === f ? { ...N, ...v } : N));
  return /* @__PURE__ */ u("div", { className: m(H.root, _), children: [
    /* @__PURE__ */ u("div", { className: H.head, "aria-hidden": "true", children: [
      /* @__PURE__ */ e("span", { children: i ? "" : null }),
      /* @__PURE__ */ e("span", { children: o }),
      /* @__PURE__ */ e("span", { children: s }),
      /* @__PURE__ */ e("span", {})
    ] }),
    t.length === 0 && /* @__PURE__ */ e("p", { className: H.empty, children: d }),
    t.map((f, v) => {
      const N = f.enabled ?? !0;
      return /* @__PURE__ */ u("div", { className: H.row, "data-disabled": !N, children: [
        /* @__PURE__ */ e("span", { className: H.cell, children: i && /* @__PURE__ */ e(
          Vt,
          {
            checked: N,
            onCheckedChange: (g) => p(f.id, { enabled: g === !0 }),
            "aria-label": `Enable ${f.key || `row ${v + 1}`}`
          }
        ) }),
        /* @__PURE__ */ e("span", { className: H.cell, children: /* @__PURE__ */ e(
          Se,
          {
            size: "sm",
            mono: !0,
            value: f.key,
            placeholder: a,
            "aria-label": `${o}, row ${v + 1}`,
            onChange: (g) => p(f.id, { key: g.target.value })
          }
        ) }),
        /* @__PURE__ */ e("span", { className: H.cell, children: /* @__PURE__ */ e(
          Se,
          {
            size: "sm",
            mono: !0,
            type: h ? "password" : "text",
            value: f.value,
            placeholder: r,
            "aria-label": `${s}, row ${v + 1}`,
            onChange: (g) => p(f.id, { value: g.target.value })
          }
        ) }),
        /* @__PURE__ */ e("span", { className: H.actions, children: /* @__PURE__ */ u(
          "button",
          {
            type: "button",
            className: H.remove,
            onClick: () => n(t.filter((g) => g.id !== f.id)),
            children: [
              /* @__PURE__ */ e(ge, {}),
              /* @__PURE__ */ u(pe, { children: [
                "Remove ",
                f.key || `row ${v + 1}`
              ] })
            ]
          }
        ) })
      ] }, f.id);
    }),
    /* @__PURE__ */ e("div", { className: H.footer, children: /* @__PURE__ */ u(
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
const Zo = "wk-CodeSurface_root", es = "wk-CodeSurface_toolbar", ts = "wk-CodeSurface_body", ns = "wk-CodeSurface_pre", os = "wk-CodeSurface_status", he = {
  root: Zo,
  toolbar: es,
  body: ts,
  pre: ns,
  status: os
};
function Sr({ children: t, toolbar: n, status: o, className: s }) {
  return /* @__PURE__ */ u("div", { className: m(he.root, s), children: [
    n && /* @__PURE__ */ e("div", { className: he.toolbar, children: n }),
    /* @__PURE__ */ e("div", { className: he.body, children: t }),
    o && /* @__PURE__ */ e("div", { className: he.status, children: o })
  ] });
}
function xr({ code: t, className: n, ...o }) {
  return /* @__PURE__ */ e("pre", { className: m(he.pre, n), tabIndex: 0, ...o, children: /* @__PURE__ */ e("code", { children: t }) });
}
const ss = "wk-Form_section", as = "wk-Form_sectionTop", rs = "wk-Form_sectionHead", cs = "wk-Form_sectionTitle", is = "wk-Form_sectionDesc", ls = "wk-Form_sectionBody", ds = "wk-Form_row", us = "wk-Form_rowText", ms = "wk-Form_rowLabel", hs = "wk-Form_rowDesc", ps = "wk-Form_rowControl", ws = "wk-Form_stacked", M = {
  section: ss,
  sectionTop: as,
  sectionHead: rs,
  sectionTitle: cs,
  sectionDesc: is,
  sectionBody: ls,
  row: ds,
  rowText: us,
  rowLabel: ms,
  rowDesc: hs,
  rowControl: ps,
  stacked: ws
};
function Tr({ title: t, description: n, children: o, action: s, className: a }) {
  const r = z();
  return /* @__PURE__ */ u("section", { className: m(M.section, a), "aria-labelledby": t ? r : void 0, children: [
    (t || s) && /* @__PURE__ */ u("div", { className: M.sectionTop, children: [
      /* @__PURE__ */ u("div", { className: M.sectionHead, children: [
        t && /* @__PURE__ */ e("h2", { className: M.sectionTitle, id: r, children: t }),
        n && /* @__PURE__ */ e("p", { className: M.sectionDesc, children: n })
      ] }),
      s
    ] }),
    /* @__PURE__ */ e("div", { className: M.sectionBody, children: o })
  ] });
}
function Ir({ label: t, description: n, children: o, stacked: s, className: a }) {
  return /* @__PURE__ */ u("div", { className: m(M.row, s && M.stacked, a), children: [
    /* @__PURE__ */ u("div", { className: M.rowText, children: [
      /* @__PURE__ */ e("span", { className: M.rowLabel, children: t }),
      n && /* @__PURE__ */ e("p", { className: M.rowDesc, children: n })
    ] }),
    /* @__PURE__ */ e("div", { className: M.rowControl, children: o })
  ] });
}
const ks = "wk-HighlightText_mark", fs = {
  mark: ks
};
function Dr({ text: t, query: n, className: o }) {
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
  return /* @__PURE__ */ e("span", { className: o, children: r.map((i, l) => /* @__PURE__ */ e(ke, { children: i.hit ? /* @__PURE__ */ e("mark", { className: fs.mark, children: i.chunk }) : i.chunk }, l)) });
}
const bs = "wk-SkipToContent_root", _s = {
  root: bs
};
function Br({
  targetId: t = "wk-main",
  children: n = "Skip to content",
  className: o
}) {
  return /* @__PURE__ */ e("a", { href: `#${t}`, className: m(_s.root, o), children: n });
}
const gs = "wk-Card_root", vs = "wk-Card_outlined", ys = "wk-Card_raised", Ns = "wk-Card_inset", $s = "wk-Card_interactive", Cs = "wk-Card_top", Ss = "wk-Card_icon", xs = "wk-Card_head", Ts = "wk-Card_title", Is = "wk-Card_description", Ds = "wk-Card_action", Bs = "wk-Card_body", Ps = "wk-Card_footer", L = {
  root: gs,
  outlined: vs,
  raised: ys,
  inset: Ns,
  "padding-none": "wk-Card_padding-none",
  "padding-sm": "wk-Card_padding-sm",
  "padding-md": "wk-Card_padding-md",
  "padding-lg": "wk-Card_padding-lg",
  interactive: $s,
  top: Cs,
  icon: Ss,
  head: xs,
  title: Ts,
  description: Is,
  action: Ds,
  body: Bs,
  footer: Ps
};
function Pr({
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
  const k = z(), w = t ? k : void 0, p = `h${n}`, f = /* @__PURE__ */ u(Ae, { children: [
    (t || a || s) && /* @__PURE__ */ u("div", { className: L.top, children: [
      s && /* @__PURE__ */ e("span", { className: L.icon, "aria-hidden": "true", children: s }),
      /* @__PURE__ */ u("div", { className: L.head, children: [
        t && /* @__PURE__ */ e(p, { className: L.title, id: w, children: t }),
        o && /* @__PURE__ */ e("p", { className: L.description, children: o })
      ] }),
      a && /* @__PURE__ */ e("div", { className: L.action, children: a })
    ] }),
    c && /* @__PURE__ */ e("div", { className: L.body, children: c }),
    r && /* @__PURE__ */ e("div", { className: L.footer, children: r })
  ] }), v = m(
    L.root,
    L[i],
    L[`padding-${l}`],
    d && L.interactive,
    _
  );
  return h ? /* @__PURE__ */ e(fe, { className: v, "aria-labelledby": w, ...b, children: /* @__PURE__ */ e("div", { children: f }) }) : d ? /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      className: v,
      "aria-labelledby": w,
      ...b,
      children: f
    }
  ) : /* @__PURE__ */ e("div", { className: v, "aria-labelledby": w, ...b, children: f });
}
const Ls = "wk-Stepper_root", As = "wk-Stepper_horizontal", Ms = "wk-Stepper_vertical", Es = "wk-Stepper_step", Fs = "wk-Stepper_complete", Rs = "wk-Stepper_current", Hs = "wk-Stepper_marker", Os = "wk-Stepper_text", zs = "wk-Stepper_label", Vs = "wk-Stepper_description", K = {
  root: Ls,
  horizontal: As,
  vertical: Ms,
  step: Es,
  complete: Fs,
  current: Rs,
  marker: Hs,
  text: Os,
  label: zs,
  description: Vs
};
function Lr({
  steps: t,
  current: n,
  orientation: o = "horizontal",
  className: s,
  "aria-label": a
}) {
  return /* @__PURE__ */ e("ol", { className: m(K.root, K[o], s), "aria-label": a, children: t.map((r, c) => {
    const { label: i, description: l } = typeof r == "string" ? { label: r, description: void 0 } : r, d = c < n ? "complete" : c === n ? "current" : "upcoming";
    return /* @__PURE__ */ u(
      "li",
      {
        className: m(K.step, K[d]),
        "aria-current": d === "current" ? "step" : void 0,
        children: [
          /* @__PURE__ */ e("span", { className: K.marker, "aria-hidden": "true", children: d === "complete" ? /* @__PURE__ */ e(xe, {}) : c + 1 }),
          /* @__PURE__ */ u("span", { className: K.text, children: [
            /* @__PURE__ */ u("span", { className: K.label, children: [
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
const js = "wk-Breadcrumb_root", Ks = "wk-Breadcrumb_list", qs = "wk-Breadcrumb_item", Js = "wk-Breadcrumb_separator", Us = "wk-Breadcrumb_link", Gs = "wk-Breadcrumb_ellipsis", Ys = "wk-Breadcrumb_current", G = {
  root: js,
  list: Ks,
  item: qs,
  separator: Js,
  link: Us,
  ellipsis: Gs,
  current: Ys
}, Ve = oe({ isLast: !1 });
function Ar({
  children: t,
  separator: n = "/",
  maxItems: o,
  "aria-label": s = "Breadcrumb",
  className: a
}) {
  const [r, c] = E(!1), i = Ws(t), l = !r && o !== void 0 && o >= 3 && i.length > o, d = l ? i.slice(i.length - (o - 2)) : [], h = l ? [i[0], Le, ...d] : i;
  return /* @__PURE__ */ e("nav", { "aria-label": s, className: m(G.root, a), children: /* @__PURE__ */ e("ol", { className: G.list, children: h.map((_, b) => {
    const k = b === h.length - 1;
    return (
      // biome-ignore lint/suspicious/noArrayIndexKey: position IS the identity here
      /* @__PURE__ */ u("li", { className: G.item, children: [
        b > 0 && /* @__PURE__ */ e("span", { "aria-hidden": "true", className: G.separator, children: n }),
        _ === Le ? /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: G.ellipsis,
            onClick: () => c(!0),
            "aria-label": "Show the full path",
            children: "…"
          }
        ) : /* @__PURE__ */ e(Ve.Provider, { value: { isLast: k }, children: _ })
      ] }, b)
    );
  }) }) });
}
const Le = Symbol("breadcrumb-ellipsis");
function Ws(t) {
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
function Mr({ children: t, current: n, className: o, ...s }) {
  const { isLast: a } = ne(Ve);
  return n ?? a ? /* @__PURE__ */ e("span", { "aria-current": "page", className: m(G.current, o), children: t }) : /* @__PURE__ */ e("a", { className: m(G.link, o), ...s, children: t });
}
const Xs = "wk-Table_wrapper", Qs = "wk-Table_scroll", Zs = "wk-Table_root", ea = "wk-Table_caption", ta = "wk-Table_th", na = "wk-Table_td", oa = "wk-Table_sortButton", sa = "wk-Table_sortIndicator", aa = "wk-Table_numeric", ra = "wk-Table_captionHidden", ca = "wk-Table_row", ia = "wk-Table_interactive", la = "wk-Table_sticky", T = {
  wrapper: Xs,
  scroll: Qs,
  root: Zs,
  caption: ea,
  th: ta,
  td: na,
  sortButton: oa,
  sortIndicator: sa,
  numeric: aa,
  captionHidden: ra,
  row: ca,
  interactive: ia,
  sticky: la
};
function Er({
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
      className: m(T.wrapper, l && T.scroll),
      style: l ? { "--wk-table-max-block": a } : void 0,
      children: /* @__PURE__ */ u(
        "table",
        {
          className: m(
            T.root,
            o && T.interactive,
            s && T.sticky,
            r
          ),
          ...i,
          children: [
            t && /* @__PURE__ */ e("caption", { className: m(T.caption, n && T.captionHidden), children: t }),
            c
          ]
        }
      )
    }
  );
}
const Fr = (t) => /* @__PURE__ */ e("thead", { ...t }), Rr = (t) => /* @__PURE__ */ e("tbody", { ...t }), Hr = ({ selected: t, className: n, ...o }) => /* @__PURE__ */ e("tr", { "data-selected": t || void 0, className: m(T.row, n), ...o }), Or = ({
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
    return /* @__PURE__ */ e("th", { scope: a, className: m(T.th, t && T.numeric, r), ...i, children: c });
  const l = o ?? null;
  return /* @__PURE__ */ e(
    "th",
    {
      scope: a,
      "aria-sort": l === "asc" ? "ascending" : l === "desc" ? "descending" : "none",
      className: m(T.th, t && T.numeric, r),
      ...i,
      children: /* @__PURE__ */ u(
        "button",
        {
          type: "button",
          className: T.sortButton,
          onClick: () => s == null ? void 0 : s(l === "asc" ? "desc" : "asc"),
          children: [
            c,
            /* @__PURE__ */ e("span", { "aria-hidden": "true", className: T.sortIndicator, "data-direction": l ?? "none", children: l === "asc" ? "▲" : l === "desc" ? "▼" : "↕" })
          ]
        }
      )
    }
  );
}, zr = ({ numeric: t, className: n, ...o }) => /* @__PURE__ */ e("td", { className: m(T.td, t && T.numeric, n), ...o }), da = "wk-Badge_root", ua = "wk-Badge_neutral", ma = "wk-Badge_accent", ha = "wk-Badge_danger", pa = "wk-Badge_warn", wa = "wk-Badge_success", ka = "wk-Badge_info", fa = "wk-Badge_mono", Ce = {
  root: da,
  neutral: ua,
  accent: ma,
  danger: ha,
  warn: pa,
  success: wa,
  info: ka,
  mono: fa
};
function Vr({ tone: t = "neutral", mono: n = !1, className: o, ...s }) {
  return /* @__PURE__ */ e("span", { className: m(Ce.root, Ce[t], n && Ce.mono, o), ...s });
}
const ba = "wk-AppShell_root", _a = "wk-AppShell_titlebar", ga = "wk-AppShell_body", va = "wk-AppShell_sidebar", ya = "wk-AppShell_main", le = {
  root: ba,
  titlebar: _a,
  body: ga,
  sidebar: va,
  main: ya
};
function jr({
  titlebar: t,
  draggable: n = !1,
  insetWindowControls: o = !1,
  sidebar: s,
  sidebarWidth: a,
  children: r,
  mainId: c = "wk-main",
  className: i
}) {
  return /* @__PURE__ */ u(
    "div",
    {
      className: m(le.root, i),
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
        /* @__PURE__ */ u("div", { className: le.body, "data-has-sidebar": s ? "true" : void 0, children: [
          s && /* @__PURE__ */ e("nav", { className: le.sidebar, "aria-label": "Primary", children: s }),
          /* @__PURE__ */ e("main", { id: c, className: le.main, tabIndex: -1, children: r })
        ] })
      ]
    }
  );
}
const Na = {
  1: "2xl",
  2: "xl",
  3: "lg",
  4: "md",
  5: "sm",
  6: "xs"
}, je = {
  xs: A.xs,
  sm: A.sm,
  md: A.md,
  lg: A.lg,
  xl: A.xl,
  "2xl": A.xxl
}, Kr = P(function({ level: n, size: o, className: s, ...a }, r) {
  const c = `h${n}`, i = je[o ?? Na[n]];
  return /* @__PURE__ */ e(c, { ref: r, className: m(A.heading, i, s), ...a });
}), qr = P(function({ as: n = "p", size: o = "md", tone: s = "default", mono: a = !1, className: r, ...c }, i) {
  return /* @__PURE__ */ e(
    n,
    {
      ref: i,
      className: m(
        A.text,
        je[o],
        s !== "default" && A[s],
        a && A.mono,
        r
      ),
      ...c
    }
  );
}), Jr = P(function({ external: n = !1, nofollow: o = !1, asChild: s = !1, className: a, rel: r, target: c, ...i }, l) {
  const d = s ? fe : "a", h = new Set((r ?? "").split(/\s+/).filter(Boolean));
  return n && (h.add("noopener"), h.add("noreferrer")), o && h.add("nofollow"), /* @__PURE__ */ e(
    d,
    {
      ref: l,
      className: m(A.link, a),
      target: c ?? (n ? "_blank" : void 0),
      rel: h.size ? [...h].join(" ") : void 0,
      ...i
    }
  );
}), $a = "wk-Media_image", Ca = "wk-Media_skeleton", Ke = {
  image: $a,
  skeleton: Ca
}, Ur = P(function({ width: n, height: o, aspectRatio: s, priority: a = !1, className: r, style: c, alt: i, ...l }, d) {
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
      className: m(Ke.image, r),
      style: { ...h ? { "--wk-image-ar": String(h) } : null, ...c },
      ...l
    }
  );
});
function Gr({
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
      className: m(Ke.skeleton, s),
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
function Sa({ data: t, nonce: n }) {
  const o = JSON.stringify(t).replace(/</g, "\\u003c");
  return /* @__PURE__ */ e("script", { type: "application/ld+json", nonce: n, dangerouslySetInnerHTML: { __html: o } });
}
const xa = "wk-Breadcrumbs_root", Ta = "wk-Breadcrumbs_list", Ia = "wk-Breadcrumbs_item", Da = "wk-Breadcrumbs_link", Ba = "wk-Breadcrumbs_sep", de = {
  root: xa,
  list: Ta,
  item: Ia,
  link: Da,
  sep: Ba
};
function Yr({ items: t, origin: n, className: o }) {
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
  return /* @__PURE__ */ u(Ae, { children: [
    /* @__PURE__ */ e("nav", { "aria-label": "Breadcrumb", className: m(de.root, o), children: /* @__PURE__ */ e("ol", { className: de.list, children: t.map((a, r) => {
      const c = r === t.length - 1;
      return /* @__PURE__ */ u(ke, { children: [
        /* @__PURE__ */ e("li", { className: de.item, children: a.href && !c ? /* @__PURE__ */ e("a", { className: de.link, href: a.href, children: a.label }) : /* @__PURE__ */ e("span", { "aria-current": c ? "page" : void 0, children: a.label }) }),
        !c && /* @__PURE__ */ e("li", { className: de.sep, "aria-hidden": "true", children: "/" })
      ] }, `${a.label}-${r}`);
    }) }) }),
    /* @__PURE__ */ e(Sa, { data: s })
  ] });
}
export {
  mr as Alert,
  jr as AppShell,
  Vr as Badge,
  Ar as Breadcrumb,
  Mr as BreadcrumbItem,
  Yr as Breadcrumbs,
  at as Button,
  Pr as Card,
  xe as CheckIcon,
  Vt as Checkbox,
  Ee as ChevronDownIcon,
  ge as CloseIcon,
  xr as CodeBlock,
  Sr as CodeSurface,
  dr as Combobox,
  $r as CommandEmpty,
  yr as CommandGroup,
  Nr as CommandItem,
  vr as CommandPalette,
  Xa as ContextMenu,
  Qa as ContextMenuItem,
  Za as ContextMenuLabel,
  er as ContextMenuSeparator,
  Ka as Dialog,
  qa as DialogClose,
  hr as EmptyState,
  Ra as Field,
  Tr as FormSection,
  Kr as Heading,
  Dr as HighlightText,
  Ur as Image,
  Se as Input,
  Sa as JsonLd,
  wr as Kbd,
  Cr as KeyValueEditor,
  Jr as Link,
  Ja as Menu,
  Ua as MenuItem,
  Ga as MenuLabel,
  Ya as MenuSeparator,
  Wa as MenuSub,
  br as NavItem,
  fr as NavList,
  Ue as SearchIcon,
  ur as SegmentedControl,
  Ha as Select,
  za as SelectGroup,
  Oa as SelectItem,
  Va as SelectSeparator,
  Ir as SettingRow,
  Gr as Skeleton,
  Br as SkipToContent,
  pr as Spinner,
  kr as SplitPane,
  Lr as Stepper,
  ja as Switch,
  Er as Table,
  or as Tabs,
  rr as TabsContent,
  sr as TabsList,
  ar as TabsTrigger,
  Rr as Tbody,
  zr as Td,
  qr as Text,
  lr as Textarea,
  Or as Th,
  Fr as Thead,
  Ma as ThemeProvider,
  Fa as ThemeScript,
  cr as ToastProvider,
  nr as Tooltip,
  tr as TooltipProvider,
  Hr as Tr,
  _r as Tree,
  gr as TreeItem,
  pe as VisuallyHidden,
  m as cn,
  Te as useField,
  Ea as useTheme,
  ir as useToast
};
//# sourceMappingURL=index.js.map
