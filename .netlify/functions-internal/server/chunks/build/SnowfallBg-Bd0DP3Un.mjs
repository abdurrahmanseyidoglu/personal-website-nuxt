import { defineComponent, ref, reactive, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { useDevicePixelRatio } from '@vueuse/core';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SnowfallBg",
  __ssrInlineRender: true,
  props: {
    color: { default: "#FFF" },
    quantity: { default: 100 },
    speed: { default: 1 },
    maxRadius: { default: 3 },
    minRadius: { default: 1 },
    class: { default: "" }
  },
  setup(__props) {
    const props = __props;
    ref(null);
    const canvasContainerRef = ref(null);
    ref(null);
    ref([]);
    reactive({ w: 0, h: 0 });
    const { pixelRatio } = useDevicePixelRatio();
    computed(() => {
      const hex = props.color.replace(/^#/, "").padStart(6, "0");
      const bigint = Number.parseInt(hex, 16);
      const r = bigint >> 16 & 255;
      const g = bigint >> 8 & 255;
      const b = bigint & 255;
      return `${r} ${g} ${b}`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "canvasContainerRef",
        ref: canvasContainerRef,
        class: _ctx.$props.class,
        "aria-hidden": "true"
      }, _attrs))}><canvas></canvas></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SnowfallBg.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SnowfallBg = Object.assign(_sfc_main, { __name: "SnowfallBg" });

export { SnowfallBg as default };
//# sourceMappingURL=SnowfallBg-Bd0DP3Un.mjs.map
