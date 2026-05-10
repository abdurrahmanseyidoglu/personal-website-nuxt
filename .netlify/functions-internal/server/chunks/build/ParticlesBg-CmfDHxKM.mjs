import { defineComponent, ref, reactive, computed, watch, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { useMouse, useDevicePixelRatio } from '@vueuse/core';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ParticlesBg",
  __ssrInlineRender: true,
  props: {
    color: { default: "#FFF" },
    quantity: { default: 100 },
    staticity: { default: 50 },
    ease: { default: 50 },
    class: { default: "" }
  },
  setup(__props) {
    const props = __props;
    const canvasRef = ref(null);
    const canvasContainerRef = ref(null);
    ref(null);
    ref([]);
    const mouse = reactive({ x: 0, y: 0 });
    const canvasSize = reactive({ w: 0, h: 0 });
    const { x: mouseX, y: mouseY } = useMouse();
    const { pixelRatio } = useDevicePixelRatio();
    computed(() => {
      let hex = props.color.replace(/^#/, "");
      if (hex.length === 3) {
        hex = hex.split("").map((char) => char + char).join("");
      }
      const bigint = Number.parseInt(hex, 16);
      const r = bigint >> 16 & 255;
      const g = bigint >> 8 & 255;
      const b = bigint & 255;
      return `${r} ${g} ${b}`;
    });
    watch([mouseX, mouseY], () => {
      onMouseMove();
    });
    function onMouseMove() {
      if (canvasRef.value) {
        const rect = canvasRef.value.getBoundingClientRect();
        const { w, h } = canvasSize;
        const x = mouseX.value - rect.left - w / 2;
        const y = mouseY.value - rect.top - h / 2;
        const inside = x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2;
        if (inside) {
          mouse.x = x;
          mouse.y = y;
        }
      }
    }
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ParticlesBg.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ParticlesBg = Object.assign(_sfc_main, { __name: "ParticlesBg" });

export { ParticlesBg as default };
//# sourceMappingURL=ParticlesBg-CmfDHxKM.mjs.map
