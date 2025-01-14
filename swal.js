/*!
 * sweetalert2 v11.14.5
 * Released under the MIT License.
 */
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e =
        "undefined" != typeof globalThis ? globalThis : e || self).Sweetalert2 =
        t());
})(this, function () {
  "use strict";
  function e(e, t, n) {
    if ("function" == typeof e ? e === t : e.has(t))
      return arguments.length < 3 ? t : n;
    throw new TypeError("Private element is not present on this object");
  }
  function t(t, n) {
    return t.get(e(t, n));
  }
  function n(e, t, n) {
    (function (e, t) {
      if (t.has(e))
        throw new TypeError(
          "Cannot initialize the same private elements twice on an object"
        );
    })(e, t),
      t.set(e, n);
  }
  const o = {},
    i = (e) =>
      new Promise((t) => {
        if (!e) return t();
        const n = window.scrollX,
          i = window.scrollY;
        (o.restoreFocusTimeout = setTimeout(() => {
          o.previousActiveElement instanceof HTMLElement
            ? (o.previousActiveElement.focus(),
              (o.previousActiveElement = null))
            : document.body && document.body.focus(),
            t();
        }, 100)),
          window.scrollTo(n, i);
      }),
    s = "swal2-",
    r = [
      "container",
      "shown",
      "height-auto",
      "iosfix",
      "popup",
      "modal",
      "no-backdrop",
      "no-transition",
      "toast",
      "toast-shown",
      "show",
      "hide",
      "close",
      "title",
      "html-container",
      "actions",
      "confirm",
      "deny",
      "cancel",
      "default-outline",
      "footer",
      "icon",
      "icon-content",
      "image",
      "input",
      "file",
      "range",
      "select",
      "radio",
      "checkbox",
      "label",
      "textarea",
      "inputerror",
      "input-label",
      "validation-message",
      "progress-steps",
      "active-progress-step",
      "progress-step",
      "progress-step-line",
      "loader",
      "loading",
      "styled",
      "top",
      "top-start",
      "top-end",
      "top-left",
      "top-right",
      "center",
      "center-start",
      "center-end",
      "center-left",
      "center-right",
      "bottom",
      "bottom-start",
      "bottom-end",
      "bottom-left",
      "bottom-right",
      "grow-row",
      "grow-column",
      "grow-fullscreen",
      "rtl",
      "timer-progress-bar",
      "timer-progress-bar-container",
      "scrollbar-measure",
      "icon-success",
      "icon-warning",
      "icon-info",
      "icon-question",
      "icon-error",
    ].reduce((e, t) => ((e[t] = s + t), e), {}),
    a = ["success", "warning", "info", "question", "error"].reduce(
      (e, t) => ((e[t] = s + t), e),
      {}
    ),
    l = "SweetAlert2:",
    c = (e) => e.charAt(0).toUpperCase() + e.slice(1),
    u = (e) => {
      console.warn(`${l} ${"object" == typeof e ? e.join(" ") : e}`);
    },
    d = (e) => {
      console.error(`${l} ${e}`);
    },
    p = [],
    m = function (e) {
      let t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      var n;
      (n = `"${e}" is deprecated and will be removed in the next major release.${
        t ? ` Use "${t}" instead.` : ""
      }`),
        p.includes(n) || (p.push(n), u(n));
    },
    h = (e) => ("function" == typeof e ? e() : e),
    g = (e) => e && "function" == typeof e.toPromise,
    f = (e) => (g(e) ? e.toPromise() : Promise.resolve(e)),
    b = (e) => e && Promise.resolve(e) === e,
    y = () => document.body.querySelector(`.${r.container}`),
    v = (e) => {
      const t = y();
      return t ? t.querySelector(e) : null;
    },
    w = (e) => v(`.${e}`),
    C = () => w(r.popup),
    A = () => w(r.icon),
    k = () => w(r.title),
    E = () => w(r["html-container"]),
    B = () => w(r.image),
    $ = () => w(r["progress-steps"]),
    P = () => w(r["validation-message"]),
    x = () => v(`.${r.actions} .${r.confirm}`),
    L = () => v(`.${r.actions} .${r.cancel}`),
    T = () => v(`.${r.actions} .${r.deny}`),
    S = () => v(`.${r.loader}`),
    O = () => w(r.actions),
    M = () => w(r.footer),
    j = () => w(r["timer-progress-bar"]),
    H = () => w(r.close),
    I = () => {
      const e = C();
      if (!e) return [];
      const t = e.querySelectorAll(
          '[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'
        ),
        n = Array.from(t).sort((e, t) => {
          const n = parseInt(e.getAttribute("tabindex") || "0"),
            o = parseInt(t.getAttribute("tabindex") || "0");
          return n > o ? 1 : n < o ? -1 : 0;
        }),
        o = e.querySelectorAll(
          '\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n'
        ),
        i = Array.from(o).filter((e) => "-1" !== e.getAttribute("tabindex"));
      return [...new Set(n.concat(i))].filter((e) => ee(e));
    },
    D = () =>
      N(document.body, r.shown) &&
      !N(document.body, r["toast-shown"]) &&
      !N(document.body, r["no-backdrop"]),
    q = () => {
      const e = C();
      return !!e && N(e, r.toast);
    },
    V = (e, t) => {
      if (((e.textContent = ""), t)) {
        const n = new DOMParser().parseFromString(t, "text/html"),
          o = n.querySelector("head");
        o &&
          Array.from(o.childNodes).forEach((t) => {
            e.appendChild(t);
          });
        const i = n.querySelector("body");
        i &&
          Array.from(i.childNodes).forEach((t) => {
            t instanceof HTMLVideoElement || t instanceof HTMLAudioElement
              ? e.appendChild(t.cloneNode(!0))
              : e.appendChild(t);
          });
      }
    },
    N = (e, t) => {
      if (!t) return !1;
      const n = t.split(/\s+/);
      for (let t = 0; t < n.length; t++)
        if (!e.classList.contains(n[t])) return !1;
      return !0;
    },
    _ = (e, t, n) => {
      if (
        (((e, t) => {
          Array.from(e.classList).forEach((n) => {
            Object.values(r).includes(n) ||
              Object.values(a).includes(n) ||
              Object.values(t.showClass || {}).includes(n) ||
              e.classList.remove(n);
          });
        })(e, t),
        !t.customClass)
      )
        return;
      const o = t.customClass[n];
      o &&
        ("string" == typeof o || o.forEach
          ? z(e, o)
          : u(
              `Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof o}"`
            ));
    },
    F = (e, t) => {
      if (!t) return null;
      switch (t) {
        case "select":
        case "textarea":
        case "file":
          return e.querySelector(`.${r.popup} > .${r[t]}`);
        case "checkbox":
          return e.querySelector(`.${r.popup} > .${r.checkbox} input`);
        case "radio":
          return (
            e.querySelector(`.${r.popup} > .${r.radio} input:checked`) ||
            e.querySelector(`.${r.popup} > .${r.radio} input:first-child`)
          );
        case "range":
          return e.querySelector(`.${r.popup} > .${r.range} input`);
        default:
          return e.querySelector(`.${r.popup} > .${r.input}`);
      }
    },
    R = (e) => {
      if ((e.focus(), "file" !== e.type)) {
        const t = e.value;
        (e.value = ""), (e.value = t);
      }
    },
    U = (e, t, n) => {
      e &&
        t &&
        ("string" == typeof t && (t = t.split(/\s+/).filter(Boolean)),
        t.forEach((t) => {
          Array.isArray(e)
            ? e.forEach((e) => {
                n ? e.classList.add(t) : e.classList.remove(t);
              })
            : n
            ? e.classList.add(t)
            : e.classList.remove(t);
        }));
    },
    z = (e, t) => {
      U(e, t, !0);
    },
    K = (e, t) => {
      U(e, t, !1);
    },
    W = (e, t) => {
      const n = Array.from(e.children);
      for (let e = 0; e < n.length; e++) {
        const o = n[e];
        if (o instanceof HTMLElement && N(o, t)) return o;
      }
    },
    Y = (e, t, n) => {
      n === `${parseInt(n)}` && (n = parseInt(n)),
        n || 0 === parseInt(n)
          ? e.style.setProperty(t, "number" == typeof n ? `${n}px` : n)
          : e.style.removeProperty(t);
    },
    Z = function (e) {
      let t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "flex";
      e && (e.style.display = t);
    },
    J = (e) => {
      e && (e.style.display = "none");
    },
    X = function (e) {
      let t =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : "block";
      e &&
        new MutationObserver(() => {
          Q(e, e.innerHTML, t);
        }).observe(e, { childList: !0, subtree: !0 });
    },
    G = (e, t, n, o) => {
      const i = e.querySelector(t);
      i && i.style.setProperty(n, o);
    },
    Q = function (e, t) {
      t
        ? Z(
            e,
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : "flex"
          )
        : J(e);
    },
    ee = (e) =>
      !(!e || !(e.offsetWidth || e.offsetHeight || e.getClientRects().length)),
    te = (e) => !!(e.scrollHeight > e.clientHeight),
    ne = (e) => {
      const t = window.getComputedStyle(e),
        n = parseFloat(t.getPropertyValue("animation-duration") || "0"),
        o = parseFloat(t.getPropertyValue("transition-duration") || "0");
      return n > 0 || o > 0;
    },
    oe = function (e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const n = j();
      n &&
        ee(n) &&
        (t && ((n.style.transition = "none"), (n.style.width = "100%")),
        setTimeout(() => {
          (n.style.transition = `width ${e / 1e3}s linear`),
            (n.style.width = "0%");
        }, 10));
    },
    ie =
      `\n <div aria-labelledby="${r.title}" aria-describedby="${r["html-container"]}" class="${r.popup}" tabindex="-1">\n   <button type="button" class="${r.close}"></button>\n   <ul class="${r["progress-steps"]}"></ul>\n   <div class="${r.icon}"></div>\n   <img class="${r.image}" />\n   <h2 class="${r.title}" id="${r.title}"></h2>\n   <div class="${r["html-container"]}" id="${r["html-container"]}"></div>\n   <input class="${r.input}" id="${r.input}" />\n   <input type="file" class="${r.file}" />\n   <div class="${r.range}">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="${r.select}" id="${r.select}"></select>\n   <div class="${r.radio}"></div>\n   <label class="${r.checkbox}">\n     <input type="checkbox" id="${r.checkbox}" />\n     <span class="${r.label}"></span>\n   </label>\n   <textarea class="${r.textarea}" id="${r.textarea}"></textarea>\n   <div class="${r["validation-message"]}" id="${r["validation-message"]}"></div>\n   <div class="${r.actions}">\n     <div class="${r.loader}"></div>\n     <button type="button" class="${r.confirm}"></button>\n     <button type="button" class="${r.deny}"></button>\n     <button type="button" class="${r.cancel}"></button>\n   </div>\n   <div class="${r.footer}"></div>\n   <div class="${r["timer-progress-bar-container"]}">\n     <div class="${r["timer-progress-bar"]}"></div>\n   </div>\n </div>\n`.replace(
        /(^|\n)\s*/g,
        ""
      ),
    se = () => {
      o.currentInstance.resetValidationMessage();
    },
    re = (e) => {
      const t = (() => {
        const e = y();
        return (
          !!e &&
          (e.remove(),
          K(
            [document.documentElement, document.body],
            [r["no-backdrop"], r["toast-shown"], r["has-column"]]
          ),
          !0)
        );
      })();
      if ("undefined" == typeof window || "undefined" == typeof document)
        return void d("SweetAlert2 requires document to initialize");
      const n = document.createElement("div");
      (n.className = r.container), t && z(n, r["no-transition"]), V(n, ie);
      const o =
        "string" == typeof (i = e.target) ? document.querySelector(i) : i;
      var i;
      o.appendChild(n),
        ((e) => {
          const t = C();
          t.setAttribute("role", e.toast ? "alert" : "dialog"),
            t.setAttribute("aria-live", e.toast ? "polite" : "assertive"),
            e.toast || t.setAttribute("aria-modal", "true");
        })(e),
        ((e) => {
          "rtl" === window.getComputedStyle(e).direction && z(y(), r.rtl);
        })(o),
        (() => {
          const e = C(),
            t = W(e, r.input),
            n = W(e, r.file),
            o = e.querySelector(`.${r.range} input`),
            i = e.querySelector(`.${r.range} output`),
            s = W(e, r.select),
            a = e.querySelector(`.${r.checkbox} input`),
            l = W(e, r.textarea);
          (t.oninput = se),
            (n.onchange = se),
            (s.onchange = se),
            (a.onchange = se),
            (l.oninput = se),
            (o.oninput = () => {
              se(), (i.value = o.value);
            }),
            (o.onchange = () => {
              se(), (i.value = o.value);
            });
        })();
    },
    ae = (e, t) => {
      e instanceof HTMLElement
        ? t.appendChild(e)
        : "object" == typeof e
        ? le(e, t)
        : e && V(t, e);
    },
    le = (e, t) => {
      e.jquery ? ce(t, e) : V(t, e.toString());
    },
    ce = (e, t) => {
      if (((e.textContent = ""), 0 in t))
        for (let n = 0; n in t; n++) e.appendChild(t[n].cloneNode(!0));
      else e.appendChild(t.cloneNode(!0));
    },
    ue = (e, t) => {
      const n = O(),
        o = S();
      n &&
        o &&
        (t.showConfirmButton || t.showDenyButton || t.showCancelButton
          ? Z(n)
          : J(n),
        _(n, t, "actions"),
        (function (e, t, n) {
          const o = x(),
            i = T(),
            s = L();
          if (!o || !i || !s) return;
          de(o, "confirm", n),
            de(i, "deny", n),
            de(s, "cancel", n),
            (function (e, t, n, o) {
              if (!o.buttonsStyling) return void K([e, t, n], r.styled);
              z([e, t, n], r.styled),
                o.confirmButtonColor &&
                  ((e.style.backgroundColor = o.confirmButtonColor),
                  z(e, r["default-outline"]));
              o.denyButtonColor &&
                ((t.style.backgroundColor = o.denyButtonColor),
                z(t, r["default-outline"]));
              o.cancelButtonColor &&
                ((n.style.backgroundColor = o.cancelButtonColor),
                z(n, r["default-outline"]));
            })(o, i, s, n),
            n.reverseButtons &&
              (n.toast
                ? (e.insertBefore(s, o), e.insertBefore(i, o))
                : (e.insertBefore(s, t),
                  e.insertBefore(i, t),
                  e.insertBefore(o, t)));
        })(n, o, t),
        V(o, t.loaderHtml || ""),
        _(o, t, "loader"));
    };
  function de(e, t, n) {
    const o = c(t);
    Q(e, n[`show${o}Button`], "inline-block"),
      V(e, n[`${t}ButtonText`] || ""),
      e.setAttribute("aria-label", n[`${t}ButtonAriaLabel`] || ""),
      (e.className = r[t]),
      _(e, n, `${t}Button`);
  }
  const pe = (e, t) => {
    const n = y();
    n &&
      (!(function (e, t) {
        "string" == typeof t
          ? (e.style.background = t)
          : t || z([document.documentElement, document.body], r["no-backdrop"]);
      })(n, t.backdrop),
      (function (e, t) {
        if (!t) return;
        t in r
          ? z(e, r[t])
          : (u('The "position" parameter is not valid, defaulting to "center"'),
            z(e, r.center));
      })(n, t.position),
      (function (e, t) {
        if (!t) return;
        z(e, r[`grow-${t}`]);
      })(n, t.grow),
      _(n, t, "container"));
  };
  var me = { innerParams: new WeakMap(), domCache: new WeakMap() };
  const he = [
      "input",
      "file",
      "range",
      "select",
      "radio",
      "checkbox",
      "textarea",
    ],
    ge = (e) => {
      if (!e.input) return;
      if (!Ae[e.input])
        return void d(
          `Unexpected type of input! Expected ${Object.keys(Ae).join(
            " | "
          )}, got "${e.input}"`
        );
      const t = we(e.input);
      if (!t) return;
      const n = Ae[e.input](t, e);
      Z(t),
        e.inputAutoFocus &&
          setTimeout(() => {
            R(n);
          });
    },
    fe = (e, t) => {
      const n = C();
      if (!n) return;
      const o = F(n, e);
      if (o) {
        ((e) => {
          for (let t = 0; t < e.attributes.length; t++) {
            const n = e.attributes[t].name;
            ["id", "type", "value", "style"].includes(n) ||
              e.removeAttribute(n);
          }
        })(o);
        for (const e in t) o.setAttribute(e, t[e]);
      }
    },
    be = (e) => {
      if (!e.input) return;
      const t = we(e.input);
      t && _(t, e, "input");
    },
    ye = (e, t) => {
      !e.placeholder &&
        t.inputPlaceholder &&
        (e.placeholder = t.inputPlaceholder);
    },
    ve = (e, t, n) => {
      if (n.inputLabel) {
        const o = document.createElement("label"),
          i = r["input-label"];
        o.setAttribute("for", e.id),
          (o.className = i),
          "object" == typeof n.customClass && z(o, n.customClass.inputLabel),
          (o.innerText = n.inputLabel),
          t.insertAdjacentElement("beforebegin", o);
      }
    },
    we = (e) => {
      const t = C();
      if (t) return W(t, r[e] || r.input);
    },
    Ce = (e, t) => {
      ["string", "number"].includes(typeof t)
        ? (e.value = `${t}`)
        : b(t) ||
          u(
            `Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof t}"`
          );
    },
    Ae = {};
  (Ae.text =
    Ae.email =
    Ae.password =
    Ae.number =
    Ae.tel =
    Ae.url =
    Ae.search =
    Ae.date =
    Ae["datetime-local"] =
    Ae.time =
    Ae.week =
    Ae.month =
      (e, t) => (
        Ce(e, t.inputValue), ve(e, e, t), ye(e, t), (e.type = t.input), e
      )),
    (Ae.file = (e, t) => (ve(e, e, t), ye(e, t), e)),
    (Ae.range = (e, t) => {
      const n = e.querySelector("input"),
        o = e.querySelector("output");
      return (
        Ce(n, t.inputValue),
        (n.type = t.input),
        Ce(o, t.inputValue),
        ve(n, e, t),
        e
      );
    }),
    (Ae.select = (e, t) => {
      if (((e.textContent = ""), t.inputPlaceholder)) {
        const n = document.createElement("option");
        V(n, t.inputPlaceholder),
          (n.value = ""),
          (n.disabled = !0),
          (n.selected = !0),
          e.appendChild(n);
      }
      return ve(e, e, t), e;
    }),
    (Ae.radio = (e) => ((e.textContent = ""), e)),
    (Ae.checkbox = (e, t) => {
      const n = F(C(), "checkbox");
      (n.value = "1"), (n.checked = Boolean(t.inputValue));
      const o = e.querySelector("span");
      return V(o, t.inputPlaceholder || t.inputLabel), n;
    }),
    (Ae.textarea = (e, t) => {
      Ce(e, t.inputValue), ye(e, t), ve(e, e, t);
      return (
        setTimeout(() => {
          if ("MutationObserver" in window) {
            const n = parseInt(window.getComputedStyle(C()).width);
            new MutationObserver(() => {
              if (!document.body.contains(e)) return;
              const o =
                e.offsetWidth +
                ((i = e),
                parseInt(window.getComputedStyle(i).marginLeft) +
                  parseInt(window.getComputedStyle(i).marginRight));
              var i;
              o > n ? (C().style.width = `${o}px`) : Y(C(), "width", t.width);
            }).observe(e, { attributes: !0, attributeFilter: ["style"] });
          }
        }),
        e
      );
    });
  const ke = (e, t) => {
      const n = E();
      n &&
        (X(n),
        _(n, t, "htmlContainer"),
        t.html
          ? (ae(t.html, n), Z(n, "block"))
          : t.text
          ? ((n.textContent = t.text), Z(n, "block"))
          : J(n),
        ((e, t) => {
          const n = C();
          if (!n) return;
          const o = me.innerParams.get(e),
            i = !o || t.input !== o.input;
          he.forEach((e) => {
            const o = W(n, r[e]);
            o && (fe(e, t.inputAttributes), (o.className = r[e]), i && J(o));
          }),
            t.input && (i && ge(t), be(t));
        })(e, t));
    },
    Ee = (e, t) => {
      for (const [n, o] of Object.entries(a)) t.icon !== n && K(e, o);
      z(e, t.icon && a[t.icon]), Pe(e, t), Be(), _(e, t, "icon");
    },
    Be = () => {
      const e = C();
      if (!e) return;
      const t = window.getComputedStyle(e).getPropertyValue("background-color"),
        n = e.querySelectorAll(
          "[class^=swal2-success-circular-line], .swal2-success-fix"
        );
      for (let e = 0; e < n.length; e++) n[e].style.backgroundColor = t;
    },
    $e = (e, t) => {
      if (!t.icon && !t.iconHtml) return;
      let n = e.innerHTML,
        o = "";
      if (t.iconHtml) o = xe(t.iconHtml);
      else if ("success" === t.icon)
        (o =
          '\n  <div class="swal2-success-circular-line-left"></div>\n  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n  <div class="swal2-success-circular-line-right"></div>\n'),
          (n = n.replace(/ style=".*?"/g, ""));
      else if ("error" === t.icon)
        o =
          '\n  <span class="swal2-x-mark">\n    <span class="swal2-x-mark-line-left"></span>\n    <span class="swal2-x-mark-line-right"></span>\n  </span>\n';
      else if (t.icon) {
        o = xe({ question: "?", warning: "!", info: "i" }[t.icon]);
      }
      n.trim() !== o.trim() && V(e, o);
    },
    Pe = (e, t) => {
      if (t.iconColor) {
        (e.style.color = t.iconColor), (e.style.borderColor = t.iconColor);
        for (const n of [
          ".swal2-success-line-tip",
          ".swal2-success-line-long",
          ".swal2-x-mark-line-left",
          ".swal2-x-mark-line-right",
        ])
          G(e, n, "background-color", t.iconColor);
        G(e, ".swal2-success-ring", "border-color", t.iconColor);
      }
    },
    xe = (e) => `<div class="${r["icon-content"]}">${e}</div>`,
    Le = (e, t) => {
      const n = t.showClass || {};
      (e.className = `${r.popup} ${ee(e) ? n.popup : ""}`),
        t.toast
          ? (z([document.documentElement, document.body], r["toast-shown"]),
            z(e, r.toast))
          : z(e, r.modal),
        _(e, t, "popup"),
        "string" == typeof t.customClass && z(e, t.customClass),
        t.icon && z(e, r[`icon-${t.icon}`]);
    },
    Te = (e) => {
      const t = document.createElement("li");
      return z(t, r["progress-step"]), V(t, e), t;
    },
    Se = (e) => {
      const t = document.createElement("li");
      return (
        z(t, r["progress-step-line"]),
        e.progressStepsDistance && Y(t, "width", e.progressStepsDistance),
        t
      );
    },
    Oe = (e, t) => {
      ((e, t) => {
        const n = y(),
          o = C();
        if (n && o) {
          if (t.toast) {
            Y(n, "width", t.width), (o.style.width = "100%");
            const e = S();
            e && o.insertBefore(e, A());
          } else Y(o, "width", t.width);
          Y(o, "padding", t.padding),
            t.color && (o.style.color = t.color),
            t.background && (o.style.background = t.background),
            J(P()),
            Le(o, t);
        }
      })(0, t),
        pe(0, t),
        ((e, t) => {
          const n = $();
          if (!n) return;
          const { progressSteps: o, currentProgressStep: i } = t;
          o && 0 !== o.length && void 0 !== i
            ? (Z(n),
              (n.textContent = ""),
              i >= o.length &&
                u(
                  "Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"
                ),
              o.forEach((e, s) => {
                const a = Te(e);
                if (
                  (n.appendChild(a),
                  s === i && z(a, r["active-progress-step"]),
                  s !== o.length - 1)
                ) {
                  const e = Se(t);
                  n.appendChild(e);
                }
              }))
            : J(n);
        })(0, t),
        ((e, t) => {
          const n = me.innerParams.get(e),
            o = A();
          if (o) {
            if (n && t.icon === n.icon) return $e(o, t), void Ee(o, t);
            if (t.icon || t.iconHtml) {
              if (t.icon && -1 === Object.keys(a).indexOf(t.icon))
                return (
                  d(
                    `Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${t.icon}"`
                  ),
                  void J(o)
                );
              Z(o), $e(o, t), Ee(o, t), z(o, t.showClass && t.showClass.icon);
            } else J(o);
          }
        })(e, t),
        ((e, t) => {
          const n = B();
          n &&
            (t.imageUrl
              ? (Z(n, ""),
                n.setAttribute("src", t.imageUrl),
                n.setAttribute("alt", t.imageAlt || ""),
                Y(n, "width", t.imageWidth),
                Y(n, "height", t.imageHeight),
                (n.className = r.image),
                _(n, t, "image"))
              : J(n));
        })(0, t),
        ((e, t) => {
          const n = k();
          n &&
            (X(n),
            Q(n, t.title || t.titleText, "block"),
            t.title && ae(t.title, n),
            t.titleText && (n.innerText = t.titleText),
            _(n, t, "title"));
        })(0, t),
        ((e, t) => {
          const n = H();
          n &&
            (V(n, t.closeButtonHtml || ""),
            _(n, t, "closeButton"),
            Q(n, t.showCloseButton),
            n.setAttribute("aria-label", t.closeButtonAriaLabel || ""));
        })(0, t),
        ke(e, t),
        ue(0, t),
        ((e, t) => {
          const n = M();
          n &&
            (X(n),
            Q(n, t.footer, "block"),
            t.footer && ae(t.footer, n),
            _(n, t, "footer"));
        })(0, t);
      const n = C();
      "function" == typeof t.didRender && n && t.didRender(n),
        o.eventEmitter.emit("didRender", n);
    },
    Me = () => {
      var e;
      return null === (e = x()) || void 0 === e ? void 0 : e.click();
    },
    je = Object.freeze({
      cancel: "cancel",
      backdrop: "backdrop",
      close: "close",
      esc: "esc",
      timer: "timer",
    }),
    He = (e) => {
      e.keydownTarget &&
        e.keydownHandlerAdded &&
        (e.keydownTarget.removeEventListener("keydown", e.keydownHandler, {
          capture: e.keydownListenerCapture,
        }),
        (e.keydownHandlerAdded = !1));
    },
    Ie = (e, t) => {
      var n;
      const o = I();
      if (o.length)
        return (
          (e += t) === o.length ? (e = 0) : -1 === e && (e = o.length - 1),
          void o[e].focus()
        );
      null === (n = C()) || void 0 === n || n.focus();
    },
    De = ["ArrowRight", "ArrowDown"],
    qe = ["ArrowLeft", "ArrowUp"],
    Ve = (e, t, n) => {
      e &&
        (t.isComposing ||
          229 === t.keyCode ||
          (e.stopKeydownPropagation && t.stopPropagation(),
          "Enter" === t.key
            ? Ne(t, e)
            : "Tab" === t.key
            ? _e(t)
            : [...De, ...qe].includes(t.key)
            ? Fe(t.key)
            : "Escape" === t.key && Re(t, e, n)));
    },
    Ne = (e, t) => {
      if (!h(t.allowEnterKey)) return;
      const n = F(C(), t.input);
      if (
        e.target &&
        n &&
        e.target instanceof HTMLElement &&
        e.target.outerHTML === n.outerHTML
      ) {
        if (["textarea", "file"].includes(t.input)) return;
        Me(), e.preventDefault();
      }
    },
    _e = (e) => {
      const t = e.target,
        n = I();
      let o = -1;
      for (let e = 0; e < n.length; e++)
        if (t === n[e]) {
          o = e;
          break;
        }
      e.shiftKey ? Ie(o, -1) : Ie(o, 1),
        e.stopPropagation(),
        e.preventDefault();
    },
    Fe = (e) => {
      const t = O(),
        n = x(),
        o = T(),
        i = L();
      if (!(t && n && o && i)) return;
      const s = [n, o, i];
      if (
        document.activeElement instanceof HTMLElement &&
        !s.includes(document.activeElement)
      )
        return;
      const r = De.includes(e)
        ? "nextElementSibling"
        : "previousElementSibling";
      let a = document.activeElement;
      if (a) {
        for (let e = 0; e < t.children.length; e++) {
          if (((a = a[r]), !a)) return;
          if (a instanceof HTMLButtonElement && ee(a)) break;
        }
        a instanceof HTMLButtonElement && a.focus();
      }
    },
    Re = (e, t, n) => {
      h(t.allowEscapeKey) && (e.preventDefault(), n(je.esc));
    };
  var Ue = {
    swalPromiseResolve: new WeakMap(),
    swalPromiseReject: new WeakMap(),
  };
  const ze = () => {
      Array.from(document.body.children).forEach((e) => {
        e.hasAttribute("data-previous-aria-hidden")
          ? (e.setAttribute(
              "aria-hidden",
              e.getAttribute("data-previous-aria-hidden") || ""
            ),
            e.removeAttribute("data-previous-aria-hidden"))
          : e.removeAttribute("aria-hidden");
      });
    },
    Ke = "undefined" != typeof window && !!window.GestureEvent,
    We = () => {
      const e = y();
      if (!e) return;
      let t;
      (e.ontouchstart = (e) => {
        t = Ye(e);
      }),
        (e.ontouchmove = (e) => {
          t && (e.preventDefault(), e.stopPropagation());
        });
    },
    Ye = (e) => {
      const t = e.target,
        n = y(),
        o = E();
      return (
        !(!n || !o) &&
        !Ze(e) &&
        !Je(e) &&
        (t === n ||
          (!te(n) &&
            t instanceof HTMLElement &&
            "INPUT" !== t.tagName &&
            "TEXTAREA" !== t.tagName &&
            (!te(o) || !o.contains(t))))
      );
    },
    Ze = (e) =>
      e.touches && e.touches.length && "stylus" === e.touches[0].touchType,
    Je = (e) => e.touches && e.touches.length > 1;
  let Xe = null;
  const Ge = (e) => {
    null === Xe &&
      (document.body.scrollHeight > window.innerHeight || "scroll" === e) &&
      ((Xe = parseInt(
        window.getComputedStyle(document.body).getPropertyValue("padding-right")
      )),
      (document.body.style.paddingRight = `${
        Xe +
        (() => {
          const e = document.createElement("div");
          (e.className = r["scrollbar-measure"]), document.body.appendChild(e);
          const t = e.getBoundingClientRect().width - e.clientWidth;
          return document.body.removeChild(e), t;
        })()
      }px`));
  };
  function Qe(e, t, n, s) {
    q() ? at(e, s) : (i(n).then(() => at(e, s)), He(o)),
      Ke
        ? (t.setAttribute("style", "display:none !important"),
          t.removeAttribute("class"),
          (t.innerHTML = ""))
        : t.remove(),
      D() &&
        (null !== Xe &&
          ((document.body.style.paddingRight = `${Xe}px`), (Xe = null)),
        (() => {
          if (N(document.body, r.iosfix)) {
            const e = parseInt(document.body.style.top, 10);
            K(document.body, r.iosfix),
              (document.body.style.top = ""),
              (document.body.scrollTop = -1 * e);
          }
        })(),
        ze()),
      K(
        [document.documentElement, document.body],
        [r.shown, r["height-auto"], r["no-backdrop"], r["toast-shown"]]
      );
  }
  function et(e) {
    e = it(e);
    const t = Ue.swalPromiseResolve.get(this),
      n = tt(this);
    this.isAwaitingPromise ? e.isDismissed || (ot(this), t(e)) : n && t(e);
  }
  const tt = (e) => {
    const t = C();
    if (!t) return !1;
    const n = me.innerParams.get(e);
    if (!n || N(t, n.hideClass.popup)) return !1;
    K(t, n.showClass.popup), z(t, n.hideClass.popup);
    const o = y();
    return (
      K(o, n.showClass.backdrop), z(o, n.hideClass.backdrop), st(e, t, n), !0
    );
  };
  function nt(e) {
    const t = Ue.swalPromiseReject.get(this);
    ot(this), t && t(e);
  }
  const ot = (e) => {
      e.isAwaitingPromise &&
        (delete e.isAwaitingPromise, me.innerParams.get(e) || e._destroy());
    },
    it = (e) =>
      void 0 === e
        ? { isConfirmed: !1, isDenied: !1, isDismissed: !0 }
        : Object.assign({ isConfirmed: !1, isDenied: !1, isDismissed: !1 }, e),
    st = (e, t, n) => {
      var i;
      const s = y(),
        r = ne(t);
      "function" == typeof n.willClose && n.willClose(t),
        null === (i = o.eventEmitter) || void 0 === i || i.emit("willClose", t),
        r
          ? rt(e, t, s, n.returnFocus, n.didClose)
          : Qe(e, s, n.returnFocus, n.didClose);
    },
    rt = (e, t, n, i, s) => {
      o.swalCloseEventFinishedCallback = Qe.bind(null, e, n, i, s);
      const r = function (e) {
        var n;
        e.target === t &&
          (null === (n = o.swalCloseEventFinishedCallback) ||
            void 0 === n ||
            n.call(o),
          delete o.swalCloseEventFinishedCallback,
          t.removeEventListener("animationend", r),
          t.removeEventListener("transitionend", r));
      };
      t.addEventListener("animationend", r),
        t.addEventListener("transitionend", r);
    },
    at = (e, t) => {
      setTimeout(() => {
        var n;
        "function" == typeof t && t.bind(e.params)(),
          null === (n = o.eventEmitter) || void 0 === n || n.emit("didClose"),
          e._destroy && e._destroy();
      });
    },
    lt = (e) => {
      let t = C();
      if ((t || new _n(), (t = C()), !t)) return;
      const n = S();
      q() ? J(A()) : ct(t, e),
        Z(n),
        t.setAttribute("data-loading", "true"),
        t.setAttribute("aria-busy", "true"),
        t.focus();
    },
    ct = (e, t) => {
      const n = O(),
        o = S();
      n &&
        o &&
        (!t && ee(x()) && (t = x()),
        Z(n),
        t &&
          (J(t),
          o.setAttribute("data-button-to-replace", t.className),
          n.insertBefore(o, t)),
        z([e, n], r.loading));
    },
    ut = (e) => (e.checked ? 1 : 0),
    dt = (e) => (e.checked ? e.value : null),
    pt = (e) =>
      e.files && e.files.length
        ? null !== e.getAttribute("multiple")
          ? e.files
          : e.files[0]
        : null,
    mt = (e, t) => {
      const n = C();
      if (!n) return;
      const o = (e) => {
        "select" === t.input
          ? (function (e, t, n) {
              const o = W(e, r.select);
              if (!o) return;
              const i = (e, t, o) => {
                const i = document.createElement("option");
                (i.value = o),
                  V(i, t),
                  (i.selected = ft(o, n.inputValue)),
                  e.appendChild(i);
              };
              t.forEach((e) => {
                const t = e[0],
                  n = e[1];
                if (Array.isArray(n)) {
                  const e = document.createElement("optgroup");
                  (e.label = t),
                    (e.disabled = !1),
                    o.appendChild(e),
                    n.forEach((t) => i(e, t[1], t[0]));
                } else i(o, n, t);
              }),
                o.focus();
            })(n, gt(e), t)
          : "radio" === t.input &&
            (function (e, t, n) {
              const o = W(e, r.radio);
              if (!o) return;
              t.forEach((e) => {
                const t = e[0],
                  i = e[1],
                  s = document.createElement("input"),
                  a = document.createElement("label");
                (s.type = "radio"),
                  (s.name = r.radio),
                  (s.value = t),
                  ft(t, n.inputValue) && (s.checked = !0);
                const l = document.createElement("span");
                V(l, i),
                  (l.className = r.label),
                  a.appendChild(s),
                  a.appendChild(l),
                  o.appendChild(a);
              });
              const i = o.querySelectorAll("input");
              i.length && i[0].focus();
            })(n, gt(e), t);
      };
      g(t.inputOptions) || b(t.inputOptions)
        ? (lt(x()),
          f(t.inputOptions).then((t) => {
            e.hideLoading(), o(t);
          }))
        : "object" == typeof t.inputOptions
        ? o(t.inputOptions)
        : d(
            "Unexpected type of inputOptions! Expected object, Map or Promise, got " +
              typeof t.inputOptions
          );
    },
    ht = (e, t) => {
      const n = e.getInput();
      n &&
        (J(n),
        f(t.inputValue)
          .then((o) => {
            (n.value = "number" === t.input ? `${parseFloat(o) || 0}` : `${o}`),
              Z(n),
              n.focus(),
              e.hideLoading();
          })
          .catch((t) => {
            d(`Error in inputValue promise: ${t}`),
              (n.value = ""),
              Z(n),
              n.focus(),
              e.hideLoading();
          }));
    };
  const gt = (e) => {
      const t = [];
      return (
        e instanceof Map
          ? e.forEach((e, n) => {
              let o = e;
              "object" == typeof o && (o = gt(o)), t.push([n, o]);
            })
          : Object.keys(e).forEach((n) => {
              let o = e[n];
              "object" == typeof o && (o = gt(o)), t.push([n, o]);
            }),
        t
      );
    },
    ft = (e, t) => !!t && t.toString() === e.toString(),
    bt = (e, t) => {
      const n = me.innerParams.get(e);
      if (!n.input)
        return void d(
          `The "input" parameter is needed to be set when using returnInputValueOn${c(
            t
          )}`
        );
      const o = e.getInput(),
        i = ((e, t) => {
          const n = e.getInput();
          if (!n) return null;
          switch (t.input) {
            case "checkbox":
              return ut(n);
            case "radio":
              return dt(n);
            case "file":
              return pt(n);
            default:
              return t.inputAutoTrim ? n.value.trim() : n.value;
          }
        })(e, n);
      n.inputValidator
        ? yt(e, i, t)
        : o && !o.checkValidity()
        ? (e.enableButtons(),
          e.showValidationMessage(n.validationMessage || o.validationMessage))
        : "deny" === t
        ? vt(e, i)
        : At(e, i);
    },
    yt = (e, t, n) => {
      const o = me.innerParams.get(e);
      e.disableInput();
      Promise.resolve()
        .then(() => f(o.inputValidator(t, o.validationMessage)))
        .then((o) => {
          e.enableButtons(),
            e.enableInput(),
            o ? e.showValidationMessage(o) : "deny" === n ? vt(e, t) : At(e, t);
        });
    },
    vt = (e, t) => {
      const n = me.innerParams.get(e || void 0);
      if ((n.showLoaderOnDeny && lt(T()), n.preDeny)) {
        e.isAwaitingPromise = !0;
        Promise.resolve()
          .then(() => f(n.preDeny(t, n.validationMessage)))
          .then((n) => {
            !1 === n
              ? (e.hideLoading(), ot(e))
              : e.close({ isDenied: !0, value: void 0 === n ? t : n });
          })
          .catch((t) => Ct(e || void 0, t));
      } else e.close({ isDenied: !0, value: t });
    },
    wt = (e, t) => {
      e.close({ isConfirmed: !0, value: t });
    },
    Ct = (e, t) => {
      e.rejectPromise(t);
    },
    At = (e, t) => {
      const n = me.innerParams.get(e || void 0);
      if ((n.showLoaderOnConfirm && lt(), n.preConfirm)) {
        e.resetValidationMessage(), (e.isAwaitingPromise = !0);
        Promise.resolve()
          .then(() => f(n.preConfirm(t, n.validationMessage)))
          .then((n) => {
            ee(P()) || !1 === n
              ? (e.hideLoading(), ot(e))
              : wt(e, void 0 === n ? t : n);
          })
          .catch((t) => Ct(e || void 0, t));
      } else wt(e, t);
    };
  function kt() {
    const e = me.innerParams.get(this);
    if (!e) return;
    const t = me.domCache.get(this);
    J(t.loader),
      q() ? e.icon && Z(A()) : Et(t),
      K([t.popup, t.actions], r.loading),
      t.popup.removeAttribute("aria-busy"),
      t.popup.removeAttribute("data-loading"),
      (t.confirmButton.disabled = !1),
      (t.denyButton.disabled = !1),
      (t.cancelButton.disabled = !1);
  }
  const Et = (e) => {
    const t = e.popup.getElementsByClassName(
      e.loader.getAttribute("data-button-to-replace")
    );
    t.length
      ? Z(t[0], "inline-block")
      : ee(x()) || ee(T()) || ee(L()) || J(e.actions);
  };
  function Bt() {
    const e = me.innerParams.get(this),
      t = me.domCache.get(this);
    return t ? F(t.popup, e.input) : null;
  }
  function $t(e, t, n) {
    const o = me.domCache.get(e);
    t.forEach((e) => {
      o[e].disabled = n;
    });
  }
  function Pt(e, t) {
    const n = C();
    if (n && e)
      if ("radio" === e.type) {
        const e = n.querySelectorAll(`[name="${r.radio}"]`);
        for (let n = 0; n < e.length; n++) e[n].disabled = t;
      } else e.disabled = t;
  }
  function xt() {
    $t(this, ["confirmButton", "denyButton", "cancelButton"], !1);
  }
  function Lt() {
    $t(this, ["confirmButton", "denyButton", "cancelButton"], !0);
  }
  function Tt() {
    Pt(this.getInput(), !1);
  }
  function St() {
    Pt(this.getInput(), !0);
  }
  function Ot(e) {
    const t = me.domCache.get(this),
      n = me.innerParams.get(this);
    V(t.validationMessage, e),
      (t.validationMessage.className = r["validation-message"]),
      n.customClass &&
        n.customClass.validationMessage &&
        z(t.validationMessage, n.customClass.validationMessage),
      Z(t.validationMessage);
    const o = this.getInput();
    o &&
      (o.setAttribute("aria-invalid", "true"),
      o.setAttribute("aria-describedby", r["validation-message"]),
      R(o),
      z(o, r.inputerror));
  }
  function Mt() {
    const e = me.domCache.get(this);
    e.validationMessage && J(e.validationMessage);
    const t = this.getInput();
    t &&
      (t.removeAttribute("aria-invalid"),
      t.removeAttribute("aria-describedby"),
      K(t, r.inputerror));
  }
  const jt = {
      title: "",
      titleText: "",
      text: "",
      html: "",
      footer: "",
      icon: void 0,
      iconColor: void 0,
      iconHtml: void 0,
      template: void 0,
      toast: !1,
      animation: !0,
      showClass: {
        popup: "swal2-show",
        backdrop: "swal2-backdrop-show",
        icon: "swal2-icon-show",
      },
      hideClass: {
        popup: "swal2-hide",
        backdrop: "swal2-backdrop-hide",
        icon: "swal2-icon-hide",
      },
      customClass: {},
      target: "body",
      color: void 0,
      backdrop: !0,
      heightAuto: !0,
      allowOutsideClick: !0,
      allowEscapeKey: !0,
      allowEnterKey: !0,
      stopKeydownPropagation: !0,
      keydownListenerCapture: !1,
      showConfirmButton: !0,
      showDenyButton: !1,
      showCancelButton: !1,
      preConfirm: void 0,
      preDeny: void 0,
      confirmButtonText: "OK",
      confirmButtonAriaLabel: "",
      confirmButtonColor: void 0,
      denyButtonText: "No",
      denyButtonAriaLabel: "",
      denyButtonColor: void 0,
      cancelButtonText: "Cancel",
      cancelButtonAriaLabel: "",
      cancelButtonColor: void 0,
      buttonsStyling: !0,
      reverseButtons: !1,
      focusConfirm: !0,
      focusDeny: !1,
      focusCancel: !1,
      returnFocus: !0,
      showCloseButton: !1,
      closeButtonHtml: "&times;",
      closeButtonAriaLabel: "Close this dialog",
      loaderHtml: "",
      showLoaderOnConfirm: !1,
      showLoaderOnDeny: !1,
      imageUrl: void 0,
      imageWidth: void 0,
      imageHeight: void 0,
      imageAlt: "",
      timer: void 0,
      timerProgressBar: !1,
      width: void 0,
      padding: void 0,
      background: void 0,
      input: void 0,
      inputPlaceholder: "",
      inputLabel: "",
      inputValue: "",
      inputOptions: {},
      inputAutoFocus: !0,
      inputAutoTrim: !0,
      inputAttributes: {},
      inputValidator: void 0,
      returnInputValueOnDeny: !1,
      validationMessage: void 0,
      grow: !1,
      position: "center",
      progressSteps: [],
      currentProgressStep: void 0,
      progressStepsDistance: void 0,
      willOpen: void 0,
      didOpen: void 0,
      didRender: void 0,
      willClose: void 0,
      didClose: void 0,
      didDestroy: void 0,
      scrollbarPadding: !0,
    },
    Ht = [
      "allowEscapeKey",
      "allowOutsideClick",
      "background",
      "buttonsStyling",
      "cancelButtonAriaLabel",
      "cancelButtonColor",
      "cancelButtonText",
      "closeButtonAriaLabel",
      "closeButtonHtml",
      "color",
      "confirmButtonAriaLabel",
      "confirmButtonColor",
      "confirmButtonText",
      "currentProgressStep",
      "customClass",
      "denyButtonAriaLabel",
      "denyButtonColor",
      "denyButtonText",
      "didClose",
      "didDestroy",
      "footer",
      "hideClass",
      "html",
      "icon",
      "iconColor",
      "iconHtml",
      "imageAlt",
      "imageHeight",
      "imageUrl",
      "imageWidth",
      "preConfirm",
      "preDeny",
      "progressSteps",
      "returnFocus",
      "reverseButtons",
      "showCancelButton",
      "showCloseButton",
      "showConfirmButton",
      "showDenyButton",
      "text",
      "title",
      "titleText",
      "willClose",
    ],
    It = { allowEnterKey: void 0 },
    Dt = [
      "allowOutsideClick",
      "allowEnterKey",
      "backdrop",
      "focusConfirm",
      "focusDeny",
      "focusCancel",
      "returnFocus",
      "heightAuto",
      "keydownListenerCapture",
    ],
    qt = (e) => Object.prototype.hasOwnProperty.call(jt, e),
    Vt = (e) => -1 !== Ht.indexOf(e),
    Nt = (e) => It[e],
    _t = (e) => {
      qt(e) || u(`Unknown parameter "${e}"`);
    },
    Ft = (e) => {
      Dt.includes(e) && u(`The parameter "${e}" is incompatible with toasts`);
    },
    Rt = (e) => {
      const t = Nt(e);
      t && m(e, t);
    };
  function Ut(e) {
    const t = C(),
      n = me.innerParams.get(this);
    if (!t || N(t, n.hideClass.popup))
      return void u(
        "You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup."
      );
    const o = zt(e),
      i = Object.assign({}, n, o);
    Oe(this, i),
      me.innerParams.set(this, i),
      Object.defineProperties(this, {
        params: {
          value: Object.assign({}, this.params, e),
          writable: !1,
          enumerable: !0,
        },
      });
  }
  const zt = (e) => {
    const t = {};
    return (
      Object.keys(e).forEach((n) => {
        Vt(n) ? (t[n] = e[n]) : u(`Invalid parameter to update: ${n}`);
      }),
      t
    );
  };
  function Kt() {
    const e = me.domCache.get(this),
      t = me.innerParams.get(this);
    t
      ? (e.popup &&
          o.swalCloseEventFinishedCallback &&
          (o.swalCloseEventFinishedCallback(),
          delete o.swalCloseEventFinishedCallback),
        "function" == typeof t.didDestroy && t.didDestroy(),
        o.eventEmitter.emit("didDestroy"),
        Wt(this))
      : Yt(this);
  }
  const Wt = (e) => {
      Yt(e),
        delete e.params,
        delete o.keydownHandler,
        delete o.keydownTarget,
        delete o.currentInstance;
    },
    Yt = (e) => {
      e.isAwaitingPromise
        ? (Zt(me, e), (e.isAwaitingPromise = !0))
        : (Zt(Ue, e),
          Zt(me, e),
          delete e.isAwaitingPromise,
          delete e.disableButtons,
          delete e.enableButtons,
          delete e.getInput,
          delete e.disableInput,
          delete e.enableInput,
          delete e.hideLoading,
          delete e.disableLoading,
          delete e.showValidationMessage,
          delete e.resetValidationMessage,
          delete e.close,
          delete e.closePopup,
          delete e.closeModal,
          delete e.closeToast,
          delete e.rejectPromise,
          delete e.update,
          delete e._destroy);
    },
    Zt = (e, t) => {
      for (const n in e) e[n].delete(t);
    };
  var Jt = Object.freeze({
    __proto__: null,
    _destroy: Kt,
    close: et,
    closeModal: et,
    closePopup: et,
    closeToast: et,
    disableButtons: Lt,
    disableInput: St,
    disableLoading: kt,
    enableButtons: xt,
    enableInput: Tt,
    getInput: Bt,
    handleAwaitingPromise: ot,
    hideLoading: kt,
    rejectPromise: nt,
    resetValidationMessage: Mt,
    showValidationMessage: Ot,
    update: Ut,
  });
  const Xt = (e, t, n) => {
      t.popup.onclick = () => {
        (e && (Gt(e) || e.timer || e.input)) || n(je.close);
      };
    },
    Gt = (e) =>
      !!(
        e.showConfirmButton ||
        e.showDenyButton ||
        e.showCancelButton ||
        e.showCloseButton
      );
  let Qt = !1;
  const en = (e) => {
      e.popup.onmousedown = () => {
        e.container.onmouseup = function (t) {
          (e.container.onmouseup = () => {}),
            t.target === e.container && (Qt = !0);
        };
      };
    },
    tn = (e) => {
      e.container.onmousedown = (t) => {
        t.target === e.container && t.preventDefault(),
          (e.popup.onmouseup = function (t) {
            (e.popup.onmouseup = () => {}),
              (t.target === e.popup ||
                (t.target instanceof HTMLElement &&
                  e.popup.contains(t.target))) &&
                (Qt = !0);
          });
      };
    },
    nn = (e, t, n) => {
      t.container.onclick = (o) => {
        Qt
          ? (Qt = !1)
          : o.target === t.container &&
            h(e.allowOutsideClick) &&
            n(je.backdrop);
      };
    },
    on = (e) =>
      e instanceof Element || ((e) => "object" == typeof e && e.jquery)(e);
  const sn = () => {
      if (o.timeout)
        return (
          (() => {
            const e = j();
            if (!e) return;
            const t = parseInt(window.getComputedStyle(e).width);
            e.style.removeProperty("transition"), (e.style.width = "100%");
            const n = (t / parseInt(window.getComputedStyle(e).width)) * 100;
            e.style.width = `${n}%`;
          })(),
          o.timeout.stop()
        );
    },
    rn = () => {
      if (o.timeout) {
        const e = o.timeout.start();
        return oe(e), e;
      }
    };
  let an = !1;
  const ln = {};
  const cn = (e) => {
    for (let t = e.target; t && t !== document; t = t.parentNode)
      for (const e in ln) {
        const n = t.getAttribute(e);
        if (n) return void ln[e].fire({ template: n });
      }
  };
  o.eventEmitter = new (class {
    constructor() {
      this.events = {};
    }
    _getHandlersByEventName(e) {
      return void 0 === this.events[e] && (this.events[e] = []), this.events[e];
    }
    on(e, t) {
      const n = this._getHandlersByEventName(e);
      n.includes(t) || n.push(t);
    }
    once(e, t) {
      var n = this;
      const o = function () {
        n.removeListener(e, o);
        for (var i = arguments.length, s = new Array(i), r = 0; r < i; r++)
          s[r] = arguments[r];
        t.apply(n, s);
      };
      this.on(e, o);
    }
    emit(e) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1;
        o < t;
        o++
      )
        n[o - 1] = arguments[o];
      this._getHandlersByEventName(e).forEach((e) => {
        try {
          e.apply(this, n);
        } catch (e) {
          console.error(e);
        }
      });
    }
    removeListener(e, t) {
      const n = this._getHandlersByEventName(e),
        o = n.indexOf(t);
      o > -1 && n.splice(o, 1);
    }
    removeAllListeners(e) {
      void 0 !== this.events[e] && (this.events[e].length = 0);
    }
    reset() {
      this.events = {};
    }
  })();
  var un = Object.freeze({
    __proto__: null,
    argsToParams: (e) => {
      const t = {};
      return (
        "object" != typeof e[0] || on(e[0])
          ? ["title", "html", "icon"].forEach((n, o) => {
              const i = e[o];
              "string" == typeof i || on(i)
                ? (t[n] = i)
                : void 0 !== i &&
                  d(
                    `Unexpected type of ${n}! Expected "string" or "Element", got ${typeof i}`
                  );
            })
          : Object.assign(t, e[0]),
        t
      );
    },
    bindClickHandler: function () {
      (ln[
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : "data-swal-template"
      ] = this),
        an || (document.body.addEventListener("click", cn), (an = !0));
    },
    clickCancel: () => {
      var e;
      return null === (e = L()) || void 0 === e ? void 0 : e.click();
    },
    clickConfirm: Me,
    clickDeny: () => {
      var e;
      return null === (e = T()) || void 0 === e ? void 0 : e.click();
    },
    enableLoading: lt,
    fire: function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return new this(...t);
    },
    getActions: O,
    getCancelButton: L,
    getCloseButton: H,
    getConfirmButton: x,
    getContainer: y,
    getDenyButton: T,
    getFocusableElements: I,
    getFooter: M,
    getHtmlContainer: E,
    getIcon: A,
    getIconContent: () => w(r["icon-content"]),
    getImage: B,
    getInputLabel: () => w(r["input-label"]),
    getLoader: S,
    getPopup: C,
    getProgressSteps: $,
    getTimerLeft: () => o.timeout && o.timeout.getTimerLeft(),
    getTimerProgressBar: j,
    getTitle: k,
    getValidationMessage: P,
    increaseTimer: (e) => {
      if (o.timeout) {
        const t = o.timeout.increase(e);
        return oe(t, !0), t;
      }
    },
    isDeprecatedParameter: Nt,
    isLoading: () => {
      const e = C();
      return !!e && e.hasAttribute("data-loading");
    },
    isTimerRunning: () => !(!o.timeout || !o.timeout.isRunning()),
    isUpdatableParameter: Vt,
    isValidParameter: qt,
    isVisible: () => ee(C()),
    mixin: function (e) {
      return class extends this {
        _main(t, n) {
          return super._main(t, Object.assign({}, e, n));
        }
      };
    },
    off: (e, t) => {
      e
        ? t
          ? o.eventEmitter.removeListener(e, t)
          : o.eventEmitter.removeAllListeners(e)
        : o.eventEmitter.reset();
    },
    on: (e, t) => {
      o.eventEmitter.on(e, t);
    },
    once: (e, t) => {
      o.eventEmitter.once(e, t);
    },
    resumeTimer: rn,
    showLoading: lt,
    stopTimer: sn,
    toggleTimer: () => {
      const e = o.timeout;
      return e && (e.running ? sn() : rn());
    },
  });
  class dn {
    constructor(e, t) {
      (this.callback = e),
        (this.remaining = t),
        (this.running = !1),
        this.start();
    }
    start() {
      return (
        this.running ||
          ((this.running = !0),
          (this.started = new Date()),
          (this.id = setTimeout(this.callback, this.remaining))),
        this.remaining
      );
    }
    stop() {
      return (
        this.started &&
          this.running &&
          ((this.running = !1),
          clearTimeout(this.id),
          (this.remaining -= new Date().getTime() - this.started.getTime())),
        this.remaining
      );
    }
    increase(e) {
      const t = this.running;
      return (
        t && this.stop(),
        (this.remaining += e),
        t && this.start(),
        this.remaining
      );
    }
    getTimerLeft() {
      return this.running && (this.stop(), this.start()), this.remaining;
    }
    isRunning() {
      return this.running;
    }
  }
  const pn = ["swal-title", "swal-html", "swal-footer"],
    mn = (e) => {
      const t = {};
      return (
        Array.from(e.querySelectorAll("swal-param")).forEach((e) => {
          Cn(e, ["name", "value"]);
          const n = e.getAttribute("name"),
            o = e.getAttribute("value");
          n &&
            o &&
            (t[n] =
              "boolean" == typeof jt[n]
                ? "false" !== o
                : "object" == typeof jt[n]
                ? JSON.parse(o)
                : o);
        }),
        t
      );
    },
    hn = (e) => {
      const t = {};
      return (
        Array.from(e.querySelectorAll("swal-function-param")).forEach((e) => {
          const n = e.getAttribute("name"),
            o = e.getAttribute("value");
          n && o && (t[n] = new Function(`return ${o}`)());
        }),
        t
      );
    },
    gn = (e) => {
      const t = {};
      return (
        Array.from(e.querySelectorAll("swal-button")).forEach((e) => {
          Cn(e, ["type", "color", "aria-label"]);
          const n = e.getAttribute("type");
          n &&
            ["confirm", "cancel", "deny"].includes(n) &&
            ((t[`${n}ButtonText`] = e.innerHTML),
            (t[`show${c(n)}Button`] = !0),
            e.hasAttribute("color") &&
              (t[`${n}ButtonColor`] = e.getAttribute("color")),
            e.hasAttribute("aria-label") &&
              (t[`${n}ButtonAriaLabel`] = e.getAttribute("aria-label")));
        }),
        t
      );
    },
    fn = (e) => {
      const t = {},
        n = e.querySelector("swal-image");
      return (
        n &&
          (Cn(n, ["src", "width", "height", "alt"]),
          n.hasAttribute("src") &&
            (t.imageUrl = n.getAttribute("src") || void 0),
          n.hasAttribute("width") &&
            (t.imageWidth = n.getAttribute("width") || void 0),
          n.hasAttribute("height") &&
            (t.imageHeight = n.getAttribute("height") || void 0),
          n.hasAttribute("alt") &&
            (t.imageAlt = n.getAttribute("alt") || void 0)),
        t
      );
    },
    bn = (e) => {
      const t = {},
        n = e.querySelector("swal-icon");
      return (
        n &&
          (Cn(n, ["type", "color"]),
          n.hasAttribute("type") && (t.icon = n.getAttribute("type")),
          n.hasAttribute("color") && (t.iconColor = n.getAttribute("color")),
          (t.iconHtml = n.innerHTML)),
        t
      );
    },
    yn = (e) => {
      const t = {},
        n = e.querySelector("swal-input");
      n &&
        (Cn(n, ["type", "label", "placeholder", "value"]),
        (t.input = n.getAttribute("type") || "text"),
        n.hasAttribute("label") && (t.inputLabel = n.getAttribute("label")),
        n.hasAttribute("placeholder") &&
          (t.inputPlaceholder = n.getAttribute("placeholder")),
        n.hasAttribute("value") && (t.inputValue = n.getAttribute("value")));
      const o = Array.from(e.querySelectorAll("swal-input-option"));
      return (
        o.length &&
          ((t.inputOptions = {}),
          o.forEach((e) => {
            Cn(e, ["value"]);
            const n = e.getAttribute("value");
            if (!n) return;
            const o = e.innerHTML;
            t.inputOptions[n] = o;
          })),
        t
      );
    },
    vn = (e, t) => {
      const n = {};
      for (const o in t) {
        const i = t[o],
          s = e.querySelector(i);
        s && (Cn(s, []), (n[i.replace(/^swal-/, "")] = s.innerHTML.trim()));
      }
      return n;
    },
    wn = (e) => {
      const t = pn.concat([
        "swal-param",
        "swal-function-param",
        "swal-button",
        "swal-image",
        "swal-icon",
        "swal-input",
        "swal-input-option",
      ]);
      Array.from(e.children).forEach((e) => {
        const n = e.tagName.toLowerCase();
        t.includes(n) || u(`Unrecognized element <${n}>`);
      });
    },
    Cn = (e, t) => {
      Array.from(e.attributes).forEach((n) => {
        -1 === t.indexOf(n.name) &&
          u([
            `Unrecognized attribute "${
              n.name
            }" on <${e.tagName.toLowerCase()}>.`,
            "" +
              (t.length
                ? `Allowed attributes are: ${t.join(", ")}`
                : "To set the value, use HTML within the element."),
          ]);
      });
    },
    An = (e) => {
      const t = y(),
        n = C();
      "function" == typeof e.willOpen && e.willOpen(n),
        o.eventEmitter.emit("willOpen", n);
      const i = window.getComputedStyle(document.body).overflowY;
      $n(t, n, e),
        setTimeout(() => {
          En(t, n);
        }, 10),
        D() &&
          (Bn(t, e.scrollbarPadding, i),
          (() => {
            const e = y();
            Array.from(document.body.children).forEach((t) => {
              t.contains(e) ||
                (t.hasAttribute("aria-hidden") &&
                  t.setAttribute(
                    "data-previous-aria-hidden",
                    t.getAttribute("aria-hidden") || ""
                  ),
                t.setAttribute("aria-hidden", "true"));
            });
          })()),
        q() ||
          o.previousActiveElement ||
          (o.previousActiveElement = document.activeElement),
        "function" == typeof e.didOpen && setTimeout(() => e.didOpen(n)),
        o.eventEmitter.emit("didOpen", n),
        K(t, r["no-transition"]);
    },
    kn = (e) => {
      const t = C();
      if (e.target !== t) return;
      const n = y();
      t.removeEventListener("animationend", kn),
        t.removeEventListener("transitionend", kn),
        (n.style.overflowY = "auto");
    },
    En = (e, t) => {
      ne(t)
        ? ((e.style.overflowY = "hidden"),
          t.addEventListener("animationend", kn),
          t.addEventListener("transitionend", kn))
        : (e.style.overflowY = "auto");
    },
    Bn = (e, t, n) => {
      (() => {
        if (Ke && !N(document.body, r.iosfix)) {
          const e = document.body.scrollTop;
          (document.body.style.top = -1 * e + "px"),
            z(document.body, r.iosfix),
            We();
        }
      })(),
        t && "hidden" !== n && Ge(n),
        setTimeout(() => {
          e.scrollTop = 0;
        });
    },
    $n = (e, t, n) => {
      z(e, n.showClass.backdrop),
        n.animation
          ? (t.style.setProperty("opacity", "0", "important"),
            Z(t, "grid"),
            setTimeout(() => {
              z(t, n.showClass.popup), t.style.removeProperty("opacity");
            }, 10))
          : Z(t, "grid"),
        z([document.documentElement, document.body], r.shown),
        n.heightAuto &&
          n.backdrop &&
          !n.toast &&
          z([document.documentElement, document.body], r["height-auto"]);
    };
  var Pn = (e, t) =>
      /^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(e)
        ? Promise.resolve()
        : Promise.resolve(t || "Invalid email address"),
    xn = (e, t) =>
      /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(
        e
      )
        ? Promise.resolve()
        : Promise.resolve(t || "Invalid URL");
  function Ln(e) {
    !(function (e) {
      e.inputValidator ||
        ("email" === e.input && (e.inputValidator = Pn),
        "url" === e.input && (e.inputValidator = xn));
    })(e),
      e.showLoaderOnConfirm &&
        !e.preConfirm &&
        u(
          "showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"
        ),
      (function (e) {
        (!e.target ||
          ("string" == typeof e.target && !document.querySelector(e.target)) ||
          ("string" != typeof e.target && !e.target.appendChild)) &&
          (u('Target parameter is not valid, defaulting to "body"'),
          (e.target = "body"));
      })(e),
      "string" == typeof e.title &&
        (e.title = e.title.split("\n").join("<br />")),
      re(e);
  }
  let Tn;
  var Sn = new WeakMap();
  class On {
    constructor() {
      if ((n(this, Sn, void 0), "undefined" == typeof window)) return;
      Tn = this;
      for (var t = arguments.length, o = new Array(t), i = 0; i < t; i++)
        o[i] = arguments[i];
      const s = Object.freeze(this.constructor.argsToParams(o));
      var r, a, l;
      (this.params = s),
        (this.isAwaitingPromise = !1),
        (r = Sn),
        (a = this),
        (l = this._main(Tn.params)),
        r.set(e(r, a), l);
    }
    _main(e) {
      let t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      if (
        (((e) => {
          !1 === e.backdrop &&
            e.allowOutsideClick &&
            u(
              '"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'
            );
          for (const t in e) _t(t), e.toast && Ft(t), Rt(t);
        })(Object.assign({}, t, e)),
        o.currentInstance)
      ) {
        const e = Ue.swalPromiseResolve.get(o.currentInstance),
          { isAwaitingPromise: t } = o.currentInstance;
        o.currentInstance._destroy(), t || e({ isDismissed: !0 }), D() && ze();
      }
      o.currentInstance = Tn;
      const n = jn(e, t);
      Ln(n),
        Object.freeze(n),
        o.timeout && (o.timeout.stop(), delete o.timeout),
        clearTimeout(o.restoreFocusTimeout);
      const i = Hn(Tn);
      return Oe(Tn, n), me.innerParams.set(Tn, n), Mn(Tn, i, n);
    }
    then(e) {
      return t(Sn, this).then(e);
    }
    finally(e) {
      return t(Sn, this).finally(e);
    }
  }
  const Mn = (e, t, n) =>
      new Promise((i, s) => {
        const r = (t) => {
          e.close({ isDismissed: !0, dismiss: t });
        };
        Ue.swalPromiseResolve.set(e, i),
          Ue.swalPromiseReject.set(e, s),
          (t.confirmButton.onclick = () => {
            ((e) => {
              const t = me.innerParams.get(e);
              e.disableButtons(), t.input ? bt(e, "confirm") : At(e, !0);
            })(e);
          }),
          (t.denyButton.onclick = () => {
            ((e) => {
              const t = me.innerParams.get(e);
              e.disableButtons(),
                t.returnInputValueOnDeny ? bt(e, "deny") : vt(e, !1);
            })(e);
          }),
          (t.cancelButton.onclick = () => {
            ((e, t) => {
              e.disableButtons(), t(je.cancel);
            })(e, r);
          }),
          (t.closeButton.onclick = () => {
            r(je.close);
          }),
          ((e, t, n) => {
            e.toast ? Xt(e, t, n) : (en(t), tn(t), nn(e, t, n));
          })(n, t, r),
          ((e, t, n) => {
            He(e),
              t.toast ||
                ((e.keydownHandler = (e) => Ve(t, e, n)),
                (e.keydownTarget = t.keydownListenerCapture ? window : C()),
                (e.keydownListenerCapture = t.keydownListenerCapture),
                e.keydownTarget.addEventListener("keydown", e.keydownHandler, {
                  capture: e.keydownListenerCapture,
                }),
                (e.keydownHandlerAdded = !0));
          })(o, n, r),
          ((e, t) => {
            "select" === t.input || "radio" === t.input
              ? mt(e, t)
              : ["text", "email", "number", "tel", "textarea"].some(
                  (e) => e === t.input
                ) &&
                (g(t.inputValue) || b(t.inputValue)) &&
                (lt(x()), ht(e, t));
          })(e, n),
          An(n),
          In(o, n, r),
          Dn(t, n),
          setTimeout(() => {
            t.container.scrollTop = 0;
          });
      }),
    jn = (e, t) => {
      const n = ((e) => {
          const t =
            "string" == typeof e.template
              ? document.querySelector(e.template)
              : e.template;
          if (!t) return {};
          const n = t.content;
          return (
            wn(n),
            Object.assign(mn(n), hn(n), gn(n), fn(n), bn(n), yn(n), vn(n, pn))
          );
        })(e),
        o = Object.assign({}, jt, t, n, e);
      return (
        (o.showClass = Object.assign({}, jt.showClass, o.showClass)),
        (o.hideClass = Object.assign({}, jt.hideClass, o.hideClass)),
        !1 === o.animation &&
          ((o.showClass = { backdrop: "swal2-noanimation" }),
          (o.hideClass = {})),
        o
      );
    },
    Hn = (e) => {
      const t = {
        popup: C(),
        container: y(),
        actions: O(),
        confirmButton: x(),
        denyButton: T(),
        cancelButton: L(),
        loader: S(),
        closeButton: H(),
        validationMessage: P(),
        progressSteps: $(),
      };
      return me.domCache.set(e, t), t;
    },
    In = (e, t, n) => {
      const o = j();
      J(o),
        t.timer &&
          ((e.timeout = new dn(() => {
            n("timer"), delete e.timeout;
          }, t.timer)),
          t.timerProgressBar &&
            (Z(o),
            _(o, t, "timerProgressBar"),
            setTimeout(() => {
              e.timeout && e.timeout.running && oe(t.timer);
            })));
    },
    Dn = (e, t) => {
      if (!t.toast)
        return h(t.allowEnterKey)
          ? void (qn(e) || Vn(e, t) || Ie(-1, 1))
          : (m("allowEnterKey"), void Nn());
    },
    qn = (e) => {
      const t = Array.from(e.popup.querySelectorAll("[autofocus]"));
      for (const e of t)
        if (e instanceof HTMLElement && ee(e)) return e.focus(), !0;
      return !1;
    },
    Vn = (e, t) =>
      t.focusDeny && ee(e.denyButton)
        ? (e.denyButton.focus(), !0)
        : t.focusCancel && ee(e.cancelButton)
        ? (e.cancelButton.focus(), !0)
        : !(!t.focusConfirm || !ee(e.confirmButton)) &&
          (e.confirmButton.focus(), !0),
    Nn = () => {
      document.activeElement instanceof HTMLElement &&
        "function" == typeof document.activeElement.blur &&
        document.activeElement.blur();
    };
  if (
    "undefined" != typeof window &&
    /^ru\b/.test(navigator.language) &&
    location.host.match(/\.(ru|su|by|xn--p1ai)$/)
  ) {
    const e = new Date(),
      t = localStorage.getItem("swal-initiation");
    t
      ? (e.getTime() - Date.parse(t)) / 864e5 > 3 &&
        setTimeout(() => {
          document.body.style.pointerEvents = "none";
          const e = document.createElement("audio");
          (e.src =
            "https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3"),
            (e.loop = !0),
            document.body.appendChild(e),
            setTimeout(() => {
              e.play().catch(() => {});
            }, 2500);
        }, 500)
      : localStorage.setItem("swal-initiation", `${e}`);
  }
  (On.prototype.disableButtons = Lt),
    (On.prototype.enableButtons = xt),
    (On.prototype.getInput = Bt),
    (On.prototype.disableInput = St),
    (On.prototype.enableInput = Tt),
    (On.prototype.hideLoading = kt),
    (On.prototype.disableLoading = kt),
    (On.prototype.showValidationMessage = Ot),
    (On.prototype.resetValidationMessage = Mt),
    (On.prototype.close = et),
    (On.prototype.closePopup = et),
    (On.prototype.closeModal = et),
    (On.prototype.closeToast = et),
    (On.prototype.rejectPromise = nt),
    (On.prototype.update = Ut),
    (On.prototype._destroy = Kt),
    Object.assign(On, un),
    Object.keys(Jt).forEach((e) => {
      On[e] = function () {
        return Tn && Tn[e] ? Tn[e](...arguments) : null;
      };
    }),
    (On.DismissReason = je),
    (On.version = "11.14.5");
  const _n = On;
  return (_n.default = _n), _n;
}),
  void 0 !== this &&
    this.Sweetalert2 &&
    (this.swal =
      this.sweetAlert =
      this.Swal =
      this.SweetAlert =
        this.Sweetalert2);
"undefined" != typeof document &&
  (function (e, t) {
    var n = e.createElement("style");
    if ((e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet))
      n.styleSheet.disabled || (n.styleSheet.cssText = t);
    else
      try {
        n.innerHTML = t;
      } catch (e) {
        n.innerText = t;
      }
  })(
    document,
    '.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:hsl(0,0%,33%);font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):focus-visible{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):focus-visible{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):focus-visible{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus-visible{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:0;padding:1em 1.6em .3em;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid hsl(0,0%,85%);border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:hsl(0,0%,94%);color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:rgb(249.95234375,205.965625,167.74765625);color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:rgb(156.7033492823,224.2822966507,246.2966507177);color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:rgb(200.8064516129,217.9677419355,225.1935483871);color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:inherit !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}'
  );
