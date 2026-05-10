import { _ as _export_sfc, d as useI18n, m as useSwitchLocalePath, g as useRoute, i as __nuxt_component_1$1, l as useState, k as useAppConfig, h as useLocalePath, j as appConfig } from './server.mjs';
import { defineComponent, mergeProps, unref, computed, defineAsyncComponent, ref, watch, withCtx, createTextVNode, toDisplayString, isRef, useSlots, useId, useAttrs, openBlock, createBlock, Fragment, createCommentVNode, createVNode, renderSlot, inject, provide, h, toRefs, withKeys, withModifiers, resolveDynamicComponent, getCurrentInstance, toRef, camelize, toHandlerKey, Comment, cloneVNode, toValue, createElementBlock, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrRenderVNode, ssrRenderStyle } from 'vue/server-renderer';
import { reactivePick, useDebounceFn, useVModel, unrefElement } from '@vueuse/core';
import { N as defu } from '../nitro/nitro.mjs';
import { createTV } from 'tailwind-variants';
import __nuxt_component_0$2 from './index-DOoZI5-n.mjs';
import { u as useAnimations } from './useAnimations-Z7clyyig.mjs';
import 'vue-router';
import 'perfect-debounce';
import '@vue/shared';
import 'tailwindcss/colors';
import '@iconify/vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'consola';
import 'nuxtseo-shared/utils';
import '@iconify/utils';
import 'node:url';
import 'ipx';
import '@iconify/utils/lib/css/icon';

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "CustomLink",
  __ssrInlineRender: true,
  props: {
    href: {},
    title: {}
  },
  setup(__props) {
    const props = __props;
    const route = useRoute();
    const localePath = useLocalePath();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1$1;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        class: ["custom-link no-underline relative text-base font-semibold text-inherit w-fit", { "active": unref(route).fullPath === props.href }],
        to: unref(localePath)(`${props.href}`)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(props.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(props.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CustomLink/CustomLink.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$6, [["__scopeId", "data-v-c36cf56a"]]), { __name: "CustomLink" });
function createContext(providerComponentName, contextName) {
  const symbolDescription = typeof providerComponentName === "string" && !contextName ? `${providerComponentName}Context` : contextName;
  const injectionKey = Symbol(symbolDescription);
  const injectContext = (fallback) => {
    const context = inject(injectionKey, fallback);
    if (context) return context;
    if (context === null) return context;
    throw new Error(`Injection \`${injectionKey.toString()}\` not found. Component must be used within ${Array.isArray(providerComponentName) ? `one of the following components: ${providerComponentName.join(", ")}` : `\`${providerComponentName}\``}`);
  };
  const provideContext = (contextValue) => {
    provide(injectionKey, contextValue);
    return contextValue;
  };
  return [injectContext, provideContext];
}
function renderSlotFragments(children) {
  if (!children) return [];
  return children.flatMap((child) => {
    if (child.type === Fragment) return renderSlotFragments(child.children);
    return [child];
  });
}
function useEmitAsProps(emit) {
  const vm = getCurrentInstance();
  const events = vm?.type.emits;
  const result = {};
  if (!events?.length) console.warn(`No emitted event found. Please check component: ${vm?.type.__name}`);
  events?.forEach((ev) => {
    result[toHandlerKey(camelize(ev))] = (...arg) => emit(ev, ...arg);
  });
  return result;
}
function useFormControl(el) {
  return computed(() => toValue(el) ? Boolean(unrefElement(el)?.closest("form")) : true);
}
function useForwardExpose() {
  const instance = getCurrentInstance();
  const currentRef = ref();
  const currentElement = computed(() => resolveCurrentElement());
  function resolveCurrentElement() {
    return currentRef.value && "$el" in currentRef.value && ["#text", "#comment"].includes(currentRef.value.$el.nodeName) ? currentRef.value.$el.nextElementSibling : unrefElement(currentRef);
  }
  const localExpose = Object.assign({}, instance.exposed);
  const ret = {};
  for (const key in instance.props) Object.defineProperty(ret, key, {
    enumerable: true,
    configurable: true,
    get: () => instance.props[key]
  });
  if (Object.keys(localExpose).length > 0) for (const key in localExpose) Object.defineProperty(ret, key, {
    enumerable: true,
    configurable: true,
    get: () => localExpose[key]
  });
  Object.defineProperty(ret, "$el", {
    enumerable: true,
    configurable: true,
    get: () => instance.vnode.el
  });
  instance.exposed = ret;
  function forwardRef(ref$1) {
    currentRef.value = ref$1;
    if (!ref$1) return;
    Object.defineProperty(ret, "$el", {
      enumerable: true,
      configurable: true,
      get: () => ref$1 instanceof Element ? ref$1 : ref$1.$el
    });
    if (!(ref$1 instanceof Element) && !Object.hasOwn(ref$1, "$el")) {
      const childExposed = ref$1.$.exposed;
      const merged = Object.assign({}, ret);
      for (const key in childExposed) Object.defineProperty(merged, key, {
        enumerable: true,
        configurable: true,
        get: () => childExposed[key]
      });
      instance.exposed = merged;
    }
  }
  return {
    forwardRef,
    currentRef,
    currentElement
  };
}
function useForwardProps(props) {
  const vm = getCurrentInstance();
  const defaultProps = Object.keys(vm?.type.props ?? {}).reduce((prev, curr) => {
    const defaultValue = (vm?.type.props[curr]).default;
    if (defaultValue !== void 0) prev[curr] = defaultValue;
    return prev;
  }, {});
  const refProps = toRef(props);
  return computed(() => {
    const preservedProps = {};
    const assignedProps = vm?.vnode.props ?? {};
    Object.keys(assignedProps).forEach((key) => {
      preservedProps[camelize(key)] = assignedProps[key];
    });
    return Object.keys({
      ...defaultProps,
      ...preservedProps
    }).reduce((prev, curr) => {
      if (refProps.value[curr] !== void 0) prev[curr] = refProps.value[curr];
      return prev;
    }, {});
  });
}
function useForwardPropsEmits(props, emit) {
  const parsedProps = useForwardProps(props);
  const emitsAsProps = emit ? useEmitAsProps(emit) : {};
  return computed(() => ({
    ...parsedProps.value,
    ...emitsAsProps
  }));
}
const Slot = /* @__PURE__ */ defineComponent({
  name: "PrimitiveSlot",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => {
      if (!slots.default) return null;
      const children = renderSlotFragments(slots.default());
      const firstNonCommentChildrenIndex = children.findIndex((child) => child.type !== Comment);
      if (firstNonCommentChildrenIndex === -1) return children;
      const firstNonCommentChildren = children[firstNonCommentChildrenIndex];
      delete firstNonCommentChildren.props?.ref;
      const mergedProps = firstNonCommentChildren.props ? mergeProps(attrs, firstNonCommentChildren.props) : attrs;
      const cloned = cloneVNode({
        ...firstNonCommentChildren,
        props: {}
      }, mergedProps);
      if (children.length === 1) return cloned;
      children[firstNonCommentChildrenIndex] = cloned;
      return children;
    };
  }
});
const SELF_CLOSING_TAGS = [
  "area",
  "img",
  "input"
];
const Primitive = /* @__PURE__ */ defineComponent({
  name: "Primitive",
  inheritAttrs: false,
  props: {
    asChild: {
      type: Boolean,
      default: false
    },
    as: {
      type: [String, Object],
      default: "div"
    }
  },
  setup(props, { attrs, slots }) {
    const asTag = props.asChild ? "template" : props.as;
    if (typeof asTag === "string" && SELF_CLOSING_TAGS.includes(asTag)) return () => h(asTag, attrs);
    if (asTag !== "template") return () => h(props.as, attrs, { default: slots.default });
    return () => h(Slot, attrs, { default: slots.default });
  }
});
function usePrimitiveElement() {
  const primitiveElement = ref();
  const currentElement = computed(() => ["#text", "#comment"].includes(primitiveElement.value?.$el.nodeName) ? primitiveElement.value?.$el.nextElementSibling : unrefElement(primitiveElement));
  return {
    primitiveElement,
    currentElement
  };
}
var VisuallyHidden_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "VisuallyHidden",
  props: {
    feature: {
      type: String,
      required: false,
      default: "focusable"
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "span"
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), {
        as: _ctx.as,
        "as-child": _ctx.asChild,
        "aria-hidden": _ctx.feature === "focusable" ? "true" : void 0,
        "data-hidden": _ctx.feature === "fully-hidden" ? "" : void 0,
        tabindex: _ctx.feature === "fully-hidden" ? "-1" : void 0,
        style: {
          position: "absolute",
          border: 0,
          width: "1px",
          height: "1px",
          padding: 0,
          margin: "-1px",
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          clipPath: "inset(50%)",
          whiteSpace: "nowrap",
          wordWrap: "normal",
          top: "-1px",
          left: "-1px"
        }
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 8, [
        "as",
        "as-child",
        "aria-hidden",
        "data-hidden",
        "tabindex"
      ]);
    };
  }
});
var VisuallyHidden_default = VisuallyHidden_vue_vue_type_script_setup_true_lang_default;
var VisuallyHiddenInputBubble_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "VisuallyHiddenInputBubble",
  props: {
    name: {
      type: String,
      required: true
    },
    value: {
      type: null,
      required: true
    },
    checked: {
      type: Boolean,
      required: false,
      default: void 0
    },
    required: {
      type: Boolean,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false
    },
    feature: {
      type: String,
      required: false,
      default: "fully-hidden"
    }
  },
  setup(__props) {
    const props = __props;
    const { primitiveElement, currentElement } = usePrimitiveElement();
    const valueState = computed(() => props.checked ?? props.value);
    watch(valueState, (cur, prev) => {
      if (!currentElement.value) return;
      const input = currentElement.value;
      const inputProto = (void 0).HTMLInputElement.prototype;
      const descriptor = Object.getOwnPropertyDescriptor(inputProto, "value");
      const setValue = descriptor.set;
      if (setValue && cur !== prev) {
        const inputEvent = new Event("input", { bubbles: true });
        const changeEvent = new Event("change", { bubbles: true });
        setValue.call(input, cur);
        input.dispatchEvent(inputEvent);
        input.dispatchEvent(changeEvent);
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(VisuallyHidden_default, mergeProps({
        ref_key: "primitiveElement",
        ref: primitiveElement
      }, {
        ...props,
        ..._ctx.$attrs
      }, { as: "input" }), null, 16);
    };
  }
});
var VisuallyHiddenInputBubble_default = VisuallyHiddenInputBubble_vue_vue_type_script_setup_true_lang_default;
var VisuallyHiddenInput_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "VisuallyHiddenInput",
  props: {
    name: {
      type: String,
      required: true
    },
    value: {
      type: null,
      required: true
    },
    checked: {
      type: Boolean,
      required: false,
      default: void 0
    },
    required: {
      type: Boolean,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false
    },
    feature: {
      type: String,
      required: false,
      default: "fully-hidden"
    }
  },
  setup(__props) {
    const props = __props;
    const isFormArrayEmptyAndRequired = computed(() => typeof props.value === "object" && Array.isArray(props.value) && props.value.length === 0 && props.required);
    const parsedValue = computed(() => {
      if (typeof props.value === "string" || typeof props.value === "number" || typeof props.value === "boolean" || props.value === null || props.value === void 0) return [{
        name: props.name,
        value: props.value
      }];
      else if (typeof props.value === "object" && Array.isArray(props.value)) return props.value.flatMap((obj, index) => {
        if (typeof obj === "object") return Object.entries(obj).map(([key, value]) => ({
          name: `${props.name}[${index}][${key}]`,
          value
        }));
        else return {
          name: `${props.name}[${index}]`,
          value: obj
        };
      });
      else if (props.value !== null && typeof props.value === "object" && !Array.isArray(props.value)) return Object.entries(props.value).map(([key, value]) => ({
        name: `${props.name}[${key}]`,
        value
      }));
      return [];
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [createCommentVNode(" We render single input if it's required "), isFormArrayEmptyAndRequired.value ? (openBlock(), createBlock(VisuallyHiddenInputBubble_default, mergeProps({ key: _ctx.name }, {
        ...props,
        ..._ctx.$attrs
      }, {
        name: _ctx.name,
        value: _ctx.value
      }), null, 16, ["name", "value"])) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(parsedValue.value, (parsed) => {
        return openBlock(), createBlock(VisuallyHiddenInputBubble_default, mergeProps({ key: parsed.name }, { ref_for: true }, {
          ...props,
          ..._ctx.$attrs
        }, {
          name: parsed.name,
          value: parsed.value
        }), null, 16, ["name", "value"]);
      }), 128))], 2112);
    };
  }
});
var VisuallyHiddenInput_default = VisuallyHiddenInput_vue_vue_type_script_setup_true_lang_default;
var Label_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "Label",
  props: {
    for: {
      type: String,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "label"
    }
  },
  setup(__props) {
    const props = __props;
    useForwardExpose();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), mergeProps(props, { onMousedown: _cache[0] || (_cache[0] = (event) => {
        if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
      }) }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var Label_default = Label_vue_vue_type_script_setup_true_lang_default;
const [injectSwitchRootContext, provideSwitchRootContext] = /* @__PURE__ */ createContext("SwitchRoot");
var SwitchRoot_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "SwitchRoot",
  props: {
    defaultValue: {
      type: null,
      required: false
    },
    modelValue: {
      type: null,
      required: false,
      default: void 0
    },
    disabled: {
      type: Boolean,
      required: false
    },
    id: {
      type: String,
      required: false
    },
    value: {
      type: String,
      required: false,
      default: "on"
    },
    trueValue: {
      type: null,
      required: false,
      default: () => true
    },
    falseValue: {
      type: null,
      required: false,
      default: () => false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "button"
    },
    name: {
      type: String,
      required: false
    },
    required: {
      type: Boolean,
      required: false
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { disabled } = toRefs(props);
    const modelValue = useVModel(props, "modelValue", emit, {
      defaultValue: props.defaultValue ?? props.falseValue,
      passive: props.modelValue === void 0
    });
    const checked = computed(() => modelValue.value === props.trueValue);
    function toggleCheck() {
      if (disabled.value) return;
      modelValue.value = checked.value ? props.falseValue : props.trueValue;
    }
    const { forwardRef, currentElement } = useForwardExpose();
    const isFormControl = useFormControl(currentElement);
    const ariaLabel = computed(() => props.id && currentElement.value ? (void 0).querySelector(`[for="${props.id}"]`)?.innerText : void 0);
    provideSwitchRootContext({
      checked,
      toggleCheck,
      disabled
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), mergeProps(_ctx.$attrs, {
        id: _ctx.id,
        ref: unref(forwardRef),
        role: "switch",
        type: _ctx.as === "button" ? "button" : void 0,
        value: _ctx.value,
        "aria-label": _ctx.$attrs["aria-label"] || ariaLabel.value,
        "aria-checked": checked.value,
        "aria-required": _ctx.required,
        "data-state": checked.value ? "checked" : "unchecked",
        "data-disabled": unref(disabled) ? "" : void 0,
        "as-child": _ctx.asChild,
        as: _ctx.as,
        disabled: unref(disabled),
        onClick: toggleCheck,
        onKeydown: withKeys(withModifiers(toggleCheck, ["prevent"]), ["enter"])
      }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", {
          modelValue: unref(modelValue),
          checked: checked.value
        }), unref(isFormControl) && _ctx.name ? (openBlock(), createBlock(unref(VisuallyHiddenInput_default), {
          key: 0,
          type: "checkbox",
          name: _ctx.name,
          disabled: unref(disabled),
          required: _ctx.required,
          value: _ctx.value,
          checked: checked.value
        }, null, 8, [
          "name",
          "disabled",
          "required",
          "value",
          "checked"
        ])) : createCommentVNode("v-if", true)]),
        _: 3
      }, 16, [
        "id",
        "type",
        "value",
        "aria-label",
        "aria-checked",
        "aria-required",
        "data-state",
        "data-disabled",
        "as-child",
        "as",
        "disabled",
        "onKeydown"
      ]);
    };
  }
});
var SwitchRoot_default = SwitchRoot_vue_vue_type_script_setup_true_lang_default;
var SwitchThumb_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "SwitchThumb",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "span"
    }
  },
  setup(__props) {
    const rootContext = injectSwitchRootContext();
    useForwardExpose();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), {
        "data-state": unref(rootContext).checked.value ? "checked" : "unchecked",
        "data-disabled": unref(rootContext).disabled.value ? "" : void 0,
        "as-child": _ctx.asChild,
        as: _ctx.as
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 8, [
        "data-state",
        "data-disabled",
        "as-child",
        "as"
      ]);
    };
  }
});
var SwitchThumb_default = SwitchThumb_vue_vue_type_script_setup_true_lang_default;
function get(object, path, defaultValue) {
  if (typeof path === "string") {
    path = path.split(".").map((key) => {
      const numKey = Number(key);
      return Number.isNaN(numKey) ? key : numKey;
    });
  }
  let result = object;
  for (const key of path) {
    if (result === void 0 || result === null) {
      return defaultValue;
    }
    result = result[key];
  }
  return result !== void 0 ? result : defaultValue;
}
const [injectThemeContext] = createContext("UTheme", "RootContext");
function useComponentUI(name, props) {
  const { ui } = injectThemeContext({ ui: computed(() => ({})) });
  return computed(() => {
    const themeOverrides = get(ui.value, name) || {};
    return defu(props.ui ?? {}, themeOverrides);
  });
}
const formOptionsInjectionKey = /* @__PURE__ */ Symbol("nuxt-ui.form-options");
const formBusInjectionKey = /* @__PURE__ */ Symbol("nuxt-ui.form-events");
const formFieldInjectionKey = /* @__PURE__ */ Symbol("nuxt-ui.form-field");
const inputIdInjectionKey = /* @__PURE__ */ Symbol("nuxt-ui.input-id");
function useFormField(props, opts) {
  const formOptions = inject(formOptionsInjectionKey, void 0);
  const formBus = inject(formBusInjectionKey, void 0);
  const formField = inject(formFieldInjectionKey, void 0);
  const inputId = inject(inputIdInjectionKey, void 0);
  provide(formFieldInjectionKey, void 0);
  if (formField && inputId) {
    if (props?.id) {
      inputId.value = props?.id;
    }
  }
  function emitFormEvent(type, name, eager) {
    if (formBus && formField && name) {
      formBus.emit({ type, name, eager });
    }
  }
  function emitFormBlur() {
    emitFormEvent("blur", formField?.value.name);
  }
  function emitFormFocus() {
    emitFormEvent("focus", formField?.value.name);
  }
  function emitFormChange() {
    emitFormEvent("change", formField?.value.name);
  }
  const emitFormInput = useDebounceFn(
    () => {
      emitFormEvent("input", formField?.value.name, true);
    },
    formField?.value.validateOnInputDelay ?? formOptions?.value.validateOnInputDelay ?? 0
  );
  return {
    id: computed(() => props?.id ?? inputId?.value),
    name: computed(() => props?.name ?? formField?.value.name),
    size: computed(() => props?.size ?? formField?.value.size),
    color: computed(() => formField?.value.error ? "error" : props?.color),
    highlight: computed(() => formField?.value.error ? true : props?.highlight),
    disabled: computed(() => formOptions?.value.disabled || props?.disabled),
    emitFormBlur,
    emitFormInput,
    emitFormChange,
    emitFormFocus,
    ariaAttrs: computed(() => {
      if (!formField?.value) return;
      const descriptiveAttrs = ["error", "hint", "description", "help"].filter((type) => formField?.value?.[type]).map((type) => `${formField?.value.ariaId}-${type}`) || [];
      const attrs = {
        "aria-invalid": !!formField?.value.error
      };
      if (descriptiveAttrs.length > 0) {
        attrs["aria-describedby"] = descriptiveAttrs.join(" ");
      }
      return attrs;
    })
  };
}
const appConfigTv = appConfig;
const tv = /* @__PURE__ */ createTV(appConfigTv.ui?.tv);
const _sfc_main$5 = {
  __name: "UIcon",
  __ssrInlineRender: true,
  props: {
    name: { type: null, required: true },
    mode: { type: String, required: false },
    size: { type: [String, Number], required: false },
    customize: { type: [Function, Boolean, null], required: false }
  },
  setup(__props) {
    const props = __props;
    const iconProps = useForwardProps(reactivePick(props, "mode", "size", "customize"));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$2;
      if (typeof __props.name === "string") {
        _push(ssrRenderComponent(_component_Icon, mergeProps({ name: __props.name }, unref(iconProps), _attrs), null, _parent));
      } else {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.name), _attrs, null), _parent);
      }
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.7.1_@internationalized+date@3.12.1_@internationalized+number@3.6.6_@tiptap+extensi_w3ycifbxvrfngcwjv5qpesltl4/node_modules/@nuxt/ui/dist/runtime/components/Icon.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const theme = {
  "slots": {
    "root": "relative flex items-start",
    "base": [
      "inline-flex items-center shrink-0 rounded-full border-2 border-transparent focus-visible:outline-2 focus-visible:outline-offset-2 data-[state=unchecked]:bg-accented",
      "transition-[background] duration-200"
    ],
    "container": "flex items-center",
    "thumb": "group pointer-events-none rounded-full bg-default shadow-lg ring-0 transition-transform duration-200 data-[state=unchecked]:translate-x-0 data-[state=unchecked]:rtl:-translate-x-0 flex items-center justify-center",
    "icon": [
      "absolute shrink-0 group-data-[state=unchecked]:text-dimmed opacity-0 size-10/12",
      "transition-[color,opacity] duration-200"
    ],
    "wrapper": "ms-2",
    "label": "block font-medium text-default",
    "description": "text-muted"
  },
  "variants": {
    "color": {
      "primary": {
        "base": "data-[state=checked]:bg-primary focus-visible:outline-primary",
        "icon": "group-data-[state=checked]:text-primary"
      },
      "secondary": {
        "base": "data-[state=checked]:bg-secondary focus-visible:outline-secondary",
        "icon": "group-data-[state=checked]:text-secondary"
      },
      "success": {
        "base": "data-[state=checked]:bg-success focus-visible:outline-success",
        "icon": "group-data-[state=checked]:text-success"
      },
      "info": {
        "base": "data-[state=checked]:bg-info focus-visible:outline-info",
        "icon": "group-data-[state=checked]:text-info"
      },
      "warning": {
        "base": "data-[state=checked]:bg-warning focus-visible:outline-warning",
        "icon": "group-data-[state=checked]:text-warning"
      },
      "error": {
        "base": "data-[state=checked]:bg-error focus-visible:outline-error",
        "icon": "group-data-[state=checked]:text-error"
      },
      "neutral": {
        "base": "data-[state=checked]:bg-inverted focus-visible:outline-inverted",
        "icon": "group-data-[state=checked]:text-highlighted"
      }
    },
    "size": {
      "xs": {
        "base": "w-7",
        "container": "h-4",
        "thumb": "size-3 data-[state=checked]:translate-x-3 data-[state=checked]:rtl:-translate-x-3",
        "wrapper": "text-xs"
      },
      "sm": {
        "base": "w-8",
        "container": "h-4",
        "thumb": "size-3.5 data-[state=checked]:translate-x-3.5 data-[state=checked]:rtl:-translate-x-3.5",
        "wrapper": "text-xs"
      },
      "md": {
        "base": "w-9",
        "container": "h-5",
        "thumb": "size-4 data-[state=checked]:translate-x-4 data-[state=checked]:rtl:-translate-x-4",
        "wrapper": "text-sm"
      },
      "lg": {
        "base": "w-10",
        "container": "h-5",
        "thumb": "size-4.5 data-[state=checked]:translate-x-4.5 data-[state=checked]:rtl:-translate-x-4.5",
        "wrapper": "text-sm"
      },
      "xl": {
        "base": "w-11",
        "container": "h-6",
        "thumb": "size-5 data-[state=checked]:translate-x-5 data-[state=checked]:rtl:-translate-x-5",
        "wrapper": "text-base"
      }
    },
    "checked": {
      "true": {
        "icon": "group-data-[state=checked]:opacity-100"
      }
    },
    "unchecked": {
      "true": {
        "icon": "group-data-[state=unchecked]:opacity-100"
      }
    },
    "loading": {
      "true": {
        "icon": "animate-spin"
      }
    },
    "required": {
      "true": {
        "label": "after:content-['*'] after:ms-0.5 after:text-error"
      }
    },
    "disabled": {
      "true": {
        "root": "opacity-75",
        "base": "cursor-not-allowed",
        "label": "cursor-not-allowed",
        "description": "cursor-not-allowed"
      }
    }
  },
  "defaultVariants": {
    "color": "primary",
    "size": "md"
  }
};
const _sfc_main$4 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "USwitch",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    color: { type: null, required: false },
    size: { type: null, required: false },
    loading: { type: Boolean, required: false },
    loadingIcon: { type: null, required: false },
    checkedIcon: { type: null, required: false },
    uncheckedIcon: { type: null, required: false },
    label: { type: String, required: false },
    description: { type: String, required: false },
    class: { type: null, required: false },
    ui: { type: Object, required: false },
    disabled: { type: Boolean, required: false },
    id: { type: String, required: false },
    name: { type: String, required: false },
    required: { type: Boolean, required: false },
    value: { type: String, required: false },
    defaultValue: { type: null, required: false },
    modelValue: { type: null, required: false },
    trueValue: { type: null, required: false },
    falseValue: { type: null, required: false }
  },
  emits: ["change", "update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const slots = useSlots();
    const emits = __emit;
    const appConfig2 = useAppConfig();
    const uiProp = useComponentUI("switch", props);
    const rootProps = useForwardPropsEmits(reactivePick(props, "required", "value", "defaultValue", "modelValue", "trueValue", "falseValue"), emits);
    const { id: _id, emitFormChange, emitFormInput, size, color, name, disabled, ariaAttrs } = useFormField(props);
    const id = _id.value ?? useId();
    const attrs = useAttrs();
    const forwardedAttrs = computed(() => {
      const { "data-state": _, ...rest } = attrs;
      return rest;
    });
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig2.ui?.switch || {} })({
      size: size.value,
      color: color.value,
      required: props.required,
      loading: props.loading,
      disabled: disabled.value || props.loading
    }));
    function onUpdate(value) {
      const event = new Event("change", { target: { value } });
      emits("change", event);
      emitFormChange();
      emitFormInput();
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        "data-slot": "root",
        class: ui.value.root({ class: [unref(uiProp)?.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-slot="container" class="${ssrRenderClass(ui.value.container({ class: unref(uiProp)?.container }))}"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(SwitchRoot_default), mergeProps({ id: unref(id) }, { ...unref(rootProps), ...forwardedAttrs.value, ...unref(ariaAttrs) }, {
              name: unref(name),
              disabled: unref(disabled) || __props.loading,
              "data-slot": "base",
              class: ui.value.base({ class: unref(uiProp)?.base }),
              "onUpdate:modelValue": onUpdate
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(SwitchThumb_default), {
                    "data-slot": "thumb",
                    class: ui.value.thumb({ class: unref(uiProp)?.thumb })
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (__props.loading) {
                          _push4(ssrRenderComponent(_sfc_main$5, {
                            name: __props.loadingIcon || unref(appConfig2).ui.icons.loading,
                            "data-slot": "icon",
                            class: ui.value.icon({ class: unref(uiProp)?.icon, checked: true, unchecked: true })
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!--[-->`);
                          if (__props.checkedIcon) {
                            _push4(ssrRenderComponent(_sfc_main$5, {
                              name: __props.checkedIcon,
                              "data-slot": "icon",
                              class: ui.value.icon({ class: unref(uiProp)?.icon, checked: true })
                            }, null, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          if (__props.uncheckedIcon) {
                            _push4(ssrRenderComponent(_sfc_main$5, {
                              name: __props.uncheckedIcon,
                              "data-slot": "icon",
                              class: ui.value.icon({ class: unref(uiProp)?.icon, unchecked: true })
                            }, null, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`<!--]-->`);
                        }
                      } else {
                        return [
                          __props.loading ? (openBlock(), createBlock(_sfc_main$5, {
                            key: 0,
                            name: __props.loadingIcon || unref(appConfig2).ui.icons.loading,
                            "data-slot": "icon",
                            class: ui.value.icon({ class: unref(uiProp)?.icon, checked: true, unchecked: true })
                          }, null, 8, ["name", "class"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                            __props.checkedIcon ? (openBlock(), createBlock(_sfc_main$5, {
                              key: 0,
                              name: __props.checkedIcon,
                              "data-slot": "icon",
                              class: ui.value.icon({ class: unref(uiProp)?.icon, checked: true })
                            }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                            __props.uncheckedIcon ? (openBlock(), createBlock(_sfc_main$5, {
                              key: 1,
                              name: __props.uncheckedIcon,
                              "data-slot": "icon",
                              class: ui.value.icon({ class: unref(uiProp)?.icon, unchecked: true })
                            }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                          ], 64))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(SwitchThumb_default), {
                      "data-slot": "thumb",
                      class: ui.value.thumb({ class: unref(uiProp)?.thumb })
                    }, {
                      default: withCtx(() => [
                        __props.loading ? (openBlock(), createBlock(_sfc_main$5, {
                          key: 0,
                          name: __props.loadingIcon || unref(appConfig2).ui.icons.loading,
                          "data-slot": "icon",
                          class: ui.value.icon({ class: unref(uiProp)?.icon, checked: true, unchecked: true })
                        }, null, 8, ["name", "class"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                          __props.checkedIcon ? (openBlock(), createBlock(_sfc_main$5, {
                            key: 0,
                            name: __props.checkedIcon,
                            "data-slot": "icon",
                            class: ui.value.icon({ class: unref(uiProp)?.icon, checked: true })
                          }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                          __props.uncheckedIcon ? (openBlock(), createBlock(_sfc_main$5, {
                            key: 1,
                            name: __props.uncheckedIcon,
                            "data-slot": "icon",
                            class: ui.value.icon({ class: unref(uiProp)?.icon, unchecked: true })
                          }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                        ], 64))
                      ]),
                      _: 1
                    }, 8, ["class"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            if (__props.label || !!slots.label || (__props.description || !!slots.description)) {
              _push2(`<div data-slot="wrapper" class="${ssrRenderClass(ui.value.wrapper({ class: unref(uiProp)?.wrapper }))}"${_scopeId}>`);
              if (__props.label || !!slots.label) {
                _push2(ssrRenderComponent(unref(Label_default), {
                  for: unref(id),
                  "data-slot": "label",
                  class: ui.value.label({ class: unref(uiProp)?.label })
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      ssrRenderSlot(_ctx.$slots, "label", { label: __props.label }, () => {
                        _push3(`${ssrInterpolate(__props.label)}`);
                      }, _push3, _parent3, _scopeId2);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, "label", { label: __props.label }, () => [
                          createTextVNode(toDisplayString(__props.label), 1)
                        ])
                      ];
                    }
                  }),
                  _: 3
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (__props.description || !!slots.description) {
                _push2(`<p data-slot="description" class="${ssrRenderClass(ui.value.description({ class: unref(uiProp)?.description }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "description", { description: __props.description }, () => {
                  _push2(`${ssrInterpolate(__props.description)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", {
                "data-slot": "container",
                class: ui.value.container({ class: unref(uiProp)?.container })
              }, [
                createVNode(unref(SwitchRoot_default), mergeProps({ id: unref(id) }, { ...unref(rootProps), ...forwardedAttrs.value, ...unref(ariaAttrs) }, {
                  name: unref(name),
                  disabled: unref(disabled) || __props.loading,
                  "data-slot": "base",
                  class: ui.value.base({ class: unref(uiProp)?.base }),
                  "onUpdate:modelValue": onUpdate
                }), {
                  default: withCtx(() => [
                    createVNode(unref(SwitchThumb_default), {
                      "data-slot": "thumb",
                      class: ui.value.thumb({ class: unref(uiProp)?.thumb })
                    }, {
                      default: withCtx(() => [
                        __props.loading ? (openBlock(), createBlock(_sfc_main$5, {
                          key: 0,
                          name: __props.loadingIcon || unref(appConfig2).ui.icons.loading,
                          "data-slot": "icon",
                          class: ui.value.icon({ class: unref(uiProp)?.icon, checked: true, unchecked: true })
                        }, null, 8, ["name", "class"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                          __props.checkedIcon ? (openBlock(), createBlock(_sfc_main$5, {
                            key: 0,
                            name: __props.checkedIcon,
                            "data-slot": "icon",
                            class: ui.value.icon({ class: unref(uiProp)?.icon, checked: true })
                          }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                          __props.uncheckedIcon ? (openBlock(), createBlock(_sfc_main$5, {
                            key: 1,
                            name: __props.uncheckedIcon,
                            "data-slot": "icon",
                            class: ui.value.icon({ class: unref(uiProp)?.icon, unchecked: true })
                          }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                        ], 64))
                      ]),
                      _: 1
                    }, 8, ["class"])
                  ]),
                  _: 1
                }, 16, ["id", "name", "disabled", "class"])
              ], 2),
              __props.label || !!slots.label || (__props.description || !!slots.description) ? (openBlock(), createBlock("div", {
                key: 0,
                "data-slot": "wrapper",
                class: ui.value.wrapper({ class: unref(uiProp)?.wrapper })
              }, [
                __props.label || !!slots.label ? (openBlock(), createBlock(unref(Label_default), {
                  key: 0,
                  for: unref(id),
                  "data-slot": "label",
                  class: ui.value.label({ class: unref(uiProp)?.label })
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "label", { label: __props.label }, () => [
                      createTextVNode(toDisplayString(__props.label), 1)
                    ])
                  ]),
                  _: 3
                }, 8, ["for", "class"])) : createCommentVNode("", true),
                __props.description || !!slots.description ? (openBlock(), createBlock("p", {
                  key: 1,
                  "data-slot": "description",
                  class: ui.value.description({ class: unref(uiProp)?.description })
                }, [
                  renderSlot(_ctx.$slots, "description", { description: __props.description }, () => [
                    createTextVNode(toDisplayString(__props.description), 1)
                  ])
                ], 2)) : createCommentVNode("", true)
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.7.1_@internationalized+date@3.12.1_@internationalized+number@3.6.6_@tiptap+extensi_w3ycifbxvrfngcwjv5qpesltl4/node_modules/@nuxt/ui/dist/runtime/components/Switch.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "FluidCursor",
  __ssrInlineRender: true,
  props: {
    simResolution: { default: 128 },
    dyeResolution: { default: 1440 },
    captureResolution: { default: 512 },
    densityDissipation: { default: 3.5 },
    velocityDissipation: { default: 2 },
    pressure: { default: 0.1 },
    pressureIterations: { default: 20 },
    curl: { default: 3 },
    splatRadius: { default: 0.2 },
    splatForce: { default: 6e3 },
    shading: { type: Boolean, default: true },
    colorUpdateSpeed: { default: 10 },
    backColor: { default: () => ({ r: 0.5, g: 0, b: 0 }) },
    transparent: { type: Boolean, default: true },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["pointer-events-none fixed inset-0 z-50 size-full", [props.class]]
      }, _attrs))}><canvas id="fluid" class="block size-full" style="${ssrRenderStyle({ "will-change": "contents", "contain": "strict" })}"></canvas></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FluidCursor.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main$3, { __name: "FluidCursor" });
const useColorMode = () => {
  return useState("color-mode").value;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const { animationEnabled } = useAnimations();
    const colorMode = useColorMode();
    const { locales } = useI18n();
    const { t } = useI18n();
    const switchLocalePath = useSwitchLocalePath();
    const availableLocales = computed(() => {
      return locales.value;
    });
    const handleThemeChange = (themeType) => {
      colorMode.preference = themeType;
    };
    const isMobileMenuOpen = ref(false);
    const closeMobileMenu = () => {
      isMobileMenuOpen.value = false;
    };
    const route = useRoute();
    watch(() => route.fullPath, () => {
      closeMobileMenu();
    });
    watch(isMobileMenuOpen, (isOpen) => {
      if (isOpen) {
        (void 0).body.style.overflow = "hidden";
      } else {
        (void 0).body.style.overflow = "";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CustomLink = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_1$1;
      const _component_USwitch = _sfc_main$4;
      const _component_Icon = __nuxt_component_0$2;
      const _component_FluidCursor = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-between py-4 sticky top-0 bg-white dark:bg-zinc-800 z-50 shadow-[0_1px_0_rgba(17,17,26,0.1)] w-full" }, _attrs))} data-v-c8e9ffe3><div class="max-w-5xl w-full flex items-center justify-between mx-auto px-4" data-v-c8e9ffe3><div class="flex items-center justify-start gap-4" data-v-c8e9ffe3>`);
      _push(ssrRenderComponent(_component_CustomLink, {
        href: `/`,
        title: _ctx.$t("home")
      }, null, _parent));
      _push(`</div><div class="hidden lg:flex items-center justify-end gap-4 cursor-pointer" data-v-c8e9ffe3><!--[-->`);
      ssrRenderList(unref(availableLocales), (locale) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: locale.code,
          to: unref(switchLocalePath)(locale.code),
          class: "relative px-3 py-1.5 rounded-md hover:bg-neutral-100 dark:hover:bg-zinc-700 transition-colors",
          "active-class": "language-active"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(locale.langName)}`);
            } else {
              return [
                createTextVNode(toDisplayString(locale.langName), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="hidden lg:flex items-center gap-3" data-v-c8e9ffe3><span class="text-sm font-semibold text-neutral-600 dark:text-neutral-300" data-v-c8e9ffe3>${ssrInterpolate(unref(t)("enableAnimations"))}</span>`);
      _push(ssrRenderComponent(_component_USwitch, {
        modelValue: unref(animationEnabled),
        "onUpdate:modelValue": ($event) => isRef(animationEnabled) ? animationEnabled.value = $event : null
      }, null, _parent));
      _push(`</div><div class="hidden lg:flex items-center justify-end gap-4 cursor-pointer" data-v-c8e9ffe3>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ic:round-nights-stay",
        size: "1.5rem",
        class: "text-neutral-800 dark:text-slate-200",
        onClick: ($event) => handleThemeChange("dark")
      }, null, _parent));
      _push(ssrRenderComponent(_component_Icon, {
        name: "material-symbols:light-mode-outline-rounded",
        size: "1.5rem",
        class: "text-neutral-800 dark:text-slate-200",
        onClick: ($event) => handleThemeChange("light")
      }, null, _parent));
      _push(ssrRenderComponent(_component_Icon, {
        name: "material-symbols:monitor-outline",
        size: "1.5rem",
        class: "text-neutral-800 dark:text-slate-200",
        onClick: ($event) => handleThemeChange("system")
      }, null, _parent));
      _push(`</div><button class="lg:hidden flex flex-col justify-center items-center w-10 h-10 relative z-50 hover:cursor-pointer" aria-label="Toggle menu" data-v-c8e9ffe3><span class="${ssrRenderClass([{ "rotate-45 translate-y-1.5": unref(isMobileMenuOpen) }, "burger-line block w-6 h-0.5 bg-neutral-800 dark:bg-slate-200 rounded transition-all duration-300 ease-in-out"])}" data-v-c8e9ffe3></span><span class="${ssrRenderClass([{ "opacity-0": unref(isMobileMenuOpen) }, "burger-line block w-6 h-0.5 bg-neutral-800 dark:bg-slate-200 rounded transition-all duration-300 ease-in-out mt-1.5"])}" data-v-c8e9ffe3></span><span class="${ssrRenderClass([{ "-rotate-45 -translate-y-2": unref(isMobileMenuOpen) }, "burger-line block w-6 h-0.5 bg-neutral-800 dark:bg-slate-200 rounded transition-all duration-300 ease-in-out mt-1.5"])}" data-v-c8e9ffe3></span></button></div>`);
      if (unref(isMobileMenuOpen)) {
        _push(`<div class="fixed inset-0 bg-black/50 z-40 lg:hidden" data-v-c8e9ffe3></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(isMobileMenuOpen)) {
        _push(`<div class="fixed top-0 right-0 h-full w-73 bg-white dark:bg-zinc-800 z-40 lg:hidden shadow-xl pt-20 px-6 overflow-y-auto" data-v-c8e9ffe3><div class="flex flex-col gap-3 mb-6" data-v-c8e9ffe3><span class="text-sm font-semibold text-neutral-600 dark:text-neutral-300" data-v-c8e9ffe3>${ssrInterpolate(unref(t)("languages"))}</span><div class="flex flex-wrap gap-3" data-v-c8e9ffe3><!--[-->`);
        ssrRenderList(unref(availableLocales), (locale) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: locale.code,
            to: unref(switchLocalePath)(locale.code),
            class: "relative px-3 py-1.5 rounded-md hover:bg-neutral-100 dark:hover:bg-zinc-700 transition-colors",
            "active-class": "language-active",
            onClick: closeMobileMenu
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(locale.langName)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(locale.langName), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div></div><div class="flex items-center justify-between gap-3 py-4 border-t border-neutral-200 dark:border-zinc-600" data-v-c8e9ffe3><span class="text-sm font-semibold text-neutral-600 dark:text-neutral-300" data-v-c8e9ffe3>${ssrInterpolate(unref(t)("enableAnimations"))}</span>`);
        _push(ssrRenderComponent(_component_USwitch, {
          modelValue: unref(animationEnabled),
          "onUpdate:modelValue": ($event) => isRef(animationEnabled) ? animationEnabled.value = $event : null
        }, null, _parent));
        _push(`</div><div class="flex flex-col gap-3 py-4 border-t border-neutral-200 dark:border-zinc-600" data-v-c8e9ffe3><span class="text-sm font-semibold text-neutral-600 dark:text-neutral-300" data-v-c8e9ffe3>${ssrInterpolate(unref(t)("theme"))}</span><div class="flex items-center gap-4" data-v-c8e9ffe3><button class="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-zinc-700 transition-colors" data-v-c8e9ffe3>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ic:round-nights-stay",
          size: "1.5rem",
          class: "text-neutral-800 dark:text-slate-200"
        }, null, _parent));
        _push(`</button><button class="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-zinc-700 transition-colors" data-v-c8e9ffe3>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "material-symbols:light-mode-outline-rounded",
          size: "1.5rem",
          class: "text-neutral-800 dark:text-slate-200"
        }, null, _parent));
        _push(`</button><button class="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-zinc-700 transition-colors" data-v-c8e9ffe3>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "material-symbols:monitor-outline",
          size: "1.5rem",
          class: "text-neutral-800 dark:text-slate-200"
        }, null, _parent));
        _push(`</button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(animationEnabled)) {
        _push(ssrRenderComponent(_component_FluidCursor, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar/Navbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["__scopeId", "data-v-c8e9ffe3"]]), { __name: "Navbar" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const footerLinks = [
      {
        platformName: "GitHub",
        link: "https://github.com/abdurrahmanseyidoglu",
        icon: "github"
      },
      {
        platformName: "LinkedIn",
        link: "https://www.linkedin.com/in/abdurrahmanseyidoglu/",
        icon: "linkedin"
      },
      {
        platformName: "X",
        link: "https://x.com/ll_alsayed",
        icon: "x"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$2;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "px-3 md:px-0 w-full pb-4 pt-6 md:pt-12 md:pb-8" }, _attrs))}><p class="text-center mb-4">${ssrInterpolate(_ctx.$t("copyRight"))} ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())}</p><div class="flex items-center justify-center gap-4"><!--[-->`);
      ssrRenderList(footerLinks, (link) => {
        _push(`<a${ssrRenderAttr("href", link.link)} target="_blank" rel="noopener noreferrer"${ssrRenderAttr("aria-label", link.platformName)}>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: `grommet-icons:${link.icon}`,
          size: "1.5rem",
          class: "text-neutral-800 dark:text-slate-200"
        }, null, _parent));
        _push(`</a>`);
      });
      _push(`<!--]--></div></footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$1, { __name: "Footer" });
const useSeasonalEffect = () => {
  const currentMonth = (/* @__PURE__ */ new Date()).getMonth();
  const isWinter = computed(() => currentMonth === 11 || currentMonth === 0 || currentMonth === 1);
  return {
    isWinter
  };
};
const __nuxt_component_1_lazy = defineAsyncComponent(() => import('./SnowfallBg-Bd0DP3Un.mjs').then((c) => c.default || c));
const __nuxt_component_2_lazy = defineAsyncComponent(() => import('./ParticlesBg-CmfDHxKM.mjs').then((c) => c.default || c));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const { animationEnabled } = useAnimations();
    const { isWinter } = useSeasonalEffect();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Navbar = __nuxt_component_0;
      const _component_LazySnowfallBg = __nuxt_component_1_lazy;
      const _component_LazyParticlesBg = __nuxt_component_2_lazy;
      const _component_Footer = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative bg-white dark:bg-zinc-800 min-h-screen text-neutral-800 dark:text-slate-200" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
      if (unref(animationEnabled) && unref(isWinter)) {
        _push(ssrRenderComponent(_component_LazySnowfallBg, {
          color: "ADD8E6",
          class: "absolute inset-0",
          "min-radius": 0.2,
          "max-radius": 5,
          speed: 0.5
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(animationEnabled) && !unref(isWinter)) {
        _push(ssrRenderComponent(_component_LazyParticlesBg, {
          key: _ctx.$colorMode.value,
          class: "absolute inset-0",
          quantity: 200,
          ease: 100,
          color: _ctx.$colorMode.value === "dark" ? "#FFF" : "#000",
          staticity: 30,
          refresh: ""
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="max-w-5xl mx-auto px-4 min-h-screen"><main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-Dsp_UCaS.mjs.map
