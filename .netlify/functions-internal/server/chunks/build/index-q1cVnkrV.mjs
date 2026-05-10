import { d as useI18n, b as useHead, e as useSeoMeta, f as __nuxt_component_0$1, _ as _export_sfc, u as useNuxtApp, a as useRuntimeConfig } from './server.mjs';
import { defineComponent, ref, mergeProps, unref, computed, useAttrs, useTemplateRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderSlot, ssrRenderAttr } from 'vue/server-renderer';
import { N as defu, A as hasProtocol, Y as withLeadingSlash, s as joinURL, C as parseURL, Z as encodeParam, i as encodePath } from '../nitro/nitro.mjs';
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

async function imageMeta(_ctx, url) {
  const meta = await _imageMeta(url).catch((err) => {
    console.error("Failed to get image meta for " + url, err + "");
    return {
      width: 0,
      height: 0,
      ratio: 0
    };
  });
  return meta;
}
async function _imageMeta(url) {
  {
    const imageMeta2 = await import('image-meta').then((r) => r.imageMeta);
    const data = await fetch(url).then((res) => res.buffer());
    const metadata = imageMeta2(data);
    if (!metadata) {
      throw new Error(`No metadata could be extracted from the image \`${url}\`.`);
    }
    const { width, height } = metadata;
    const meta = {
      width,
      height,
      ratio: width && height ? width / height : void 0
    };
    return meta;
  }
}
function createMapper(map) {
  return ((key) => key !== void 0 ? map[key] || key : map.missingValue);
}
function createOperationsGenerator(config = {}) {
  const formatter = config.formatter;
  const keyMap = config.keyMap && typeof config.keyMap !== "function" ? createMapper(config.keyMap) : config.keyMap;
  const map = {};
  for (const key in config.valueMap) {
    const valueKey = key;
    const value = config.valueMap[valueKey];
    map[valueKey] = typeof value === "object" ? createMapper(value) : value;
  }
  return (modifiers) => {
    const operations = [];
    for (const _key in modifiers) {
      const key = _key;
      if (typeof modifiers[key] === "undefined") {
        continue;
      }
      const value = typeof map[key] === "function" ? map[key](modifiers[key]) : modifiers[key];
      operations.push([keyMap ? keyMap(key) : key, value]);
    }
    if (formatter) {
      return operations.map((entry) => formatter(...entry)).join(config.joinWith ?? "&");
    }
    return new URLSearchParams(operations).toString();
  };
}
function parseDensities(input = "") {
  if (input === void 0 || !input.length) {
    return [];
  }
  const densities = /* @__PURE__ */ new Set();
  for (const density of input.split(" ")) {
    const d = Number.parseInt(density.replace("x", ""));
    if (d) {
      densities.add(d);
    }
  }
  return Array.from(densities);
}
function checkDensities(densities) {
  if (densities.length === 0) {
    throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)");
  }
}
function parseSize(input = "") {
  if (typeof input === "number") {
    return input;
  }
  if (typeof input === "string") {
    if (input.replace("px", "").match(/^\d+$/g)) {
      return Number.parseInt(input, 10);
    }
  }
}
function parseSizes(input) {
  const sizes = {};
  if (typeof input === "string") {
    for (const entry of input.split(/[\s,]+/).filter((e) => e)) {
      const s = entry.split(":");
      if (s.length !== 2) {
        sizes["1px"] = s[0].trim();
      } else {
        sizes[s[0].trim()] = s[1].trim();
      }
    }
  } else {
    Object.assign(sizes, input);
  }
  return sizes;
}
function createImage(globalOptions) {
  const ctx = {
    options: globalOptions
  };
  const getImage = (input, options = {}) => {
    const image = resolveImage(ctx, input, options);
    return image;
  };
  const $img = ((input, modifiers, options) => getImage(input, defu({ modifiers }, options)).url);
  for (const presetName in globalOptions.presets) {
    $img[presetName] = ((source, modifiers, options) => $img(source, modifiers, { ...globalOptions.presets[presetName], ...options }));
  }
  $img.options = globalOptions;
  $img.getImage = getImage;
  $img.getMeta = ((input, options) => getMeta(ctx, input, options));
  $img.getSizes = ((input, options) => getSizes(ctx, input, options));
  ctx.$img = $img;
  return $img;
}
async function getMeta(ctx, input, options) {
  const image = resolveImage(ctx, input, { ...options });
  if (typeof image.getMeta === "function") {
    return await image.getMeta();
  } else {
    return await imageMeta(ctx, image.url);
  }
}
function resolveImage(ctx, input, options) {
  if (input && typeof input !== "string") {
    throw new TypeError(`input must be a string (received ${typeof input}: ${JSON.stringify(input)})`);
  }
  if (!input || input.startsWith("data:")) {
    return {
      url: input
    };
  }
  const { setup, defaults } = getProvider(ctx, options.provider || ctx.options.provider);
  const provider = setup();
  const preset = getPreset(ctx, options.preset);
  input = hasProtocol(input) ? input : withLeadingSlash(input);
  if (!provider.supportsAlias) {
    for (const base in ctx.options.alias) {
      if (input.startsWith(base)) {
        const alias = ctx.options.alias[base];
        if (alias) {
          input = joinURL(alias, input.slice(base.length));
        }
      }
    }
  }
  if (provider.validateDomains && hasProtocol(input)) {
    const inputHost = parseURL(input).host;
    if (!ctx.options.domains.find((d) => d === inputHost)) {
      return {
        url: input
      };
    }
  }
  const _options = defu(options, preset, defaults);
  const resolvedOptions = {
    ..._options,
    modifiers: {
      ..._options.modifiers,
      width: _options.modifiers?.width ? parseSize(_options.modifiers.width) : void 0,
      height: _options.modifiers?.height ? parseSize(_options.modifiers.height) : void 0
    }
  };
  const image = provider.getImage(input, resolvedOptions, ctx);
  image.format ||= resolvedOptions.modifiers.format || "";
  return image;
}
function getProvider(ctx, name) {
  const provider = ctx.options.providers[name];
  if (!provider) {
    throw new Error("Unknown provider: " + name);
  }
  return provider;
}
function getPreset(ctx, name) {
  if (!name) {
    return {};
  }
  if (!ctx.options.presets[name]) {
    throw new Error("Unknown preset: " + name);
  }
  return ctx.options.presets[name];
}
function getSizes(ctx, input, opts) {
  const preset = getPreset(ctx, opts.preset);
  const merged = defu(opts, preset);
  const width = parseSize(merged.modifiers?.width);
  const height = parseSize(merged.modifiers?.height);
  const sizes = merged.sizes ? parseSizes(merged.sizes) : {};
  const _densities = merged.densities?.trim();
  const densities = _densities ? parseDensities(_densities) : ctx.options.densities;
  checkDensities(densities);
  const hwRatio = width && height ? height / width : 0;
  const sizeVariants = [];
  const srcsetVariants = [];
  if (Object.keys(sizes).length >= 1) {
    for (const key in sizes) {
      const variant = getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx);
      if (variant === void 0) {
        continue;
      }
      sizeVariants.push({
        size: variant.size,
        screenMaxWidth: variant.screenMaxWidth,
        media: `(max-width: ${variant.screenMaxWidth}px)`
      });
      for (const density of densities) {
        srcsetVariants.push({
          width: variant._cWidth * density,
          src: getVariantSrc(ctx, input, opts, variant, density)
        });
      }
    }
    finaliseSizeVariants(sizeVariants);
  } else {
    for (const density of densities) {
      const key = Object.keys(sizes)[0];
      let variant = key ? getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx) : void 0;
      if (variant === void 0) {
        variant = {
          size: "",
          screenMaxWidth: 0,
          _cWidth: opts.modifiers?.width,
          _cHeight: opts.modifiers?.height
        };
      }
      srcsetVariants.push({
        width: density,
        src: getVariantSrc(ctx, input, opts, variant, density)
      });
    }
  }
  finaliseSrcsetVariants(srcsetVariants);
  const defaultVariant = srcsetVariants[srcsetVariants.length - 1];
  const sizesVal = sizeVariants.length ? sizeVariants.map((v) => `${v.media ? v.media + " " : ""}${v.size}`).join(", ") : void 0;
  const suffix = sizesVal ? "w" : "x";
  const srcsetVal = srcsetVariants.map((v) => `${v.src} ${v.width}${suffix}`).join(", ");
  return {
    sizes: sizesVal,
    srcset: srcsetVal,
    src: defaultVariant?.src
  };
}
function getSizesVariant(key, size, height, hwRatio, ctx) {
  const screenMaxWidth = ctx.options.screens && ctx.options.screens[key] || Number.parseInt(key);
  const isFluid = size.endsWith("vw");
  if (!isFluid && /^\d+$/.test(size)) {
    size = size + "px";
  }
  if (!isFluid && !size.endsWith("px")) {
    return void 0;
  }
  let _cWidth = Number.parseInt(size);
  if (!screenMaxWidth || !_cWidth) {
    return void 0;
  }
  if (isFluid) {
    _cWidth = Math.round(_cWidth / 100 * screenMaxWidth);
  }
  const _cHeight = hwRatio ? Math.round(_cWidth * hwRatio) : height;
  return {
    size,
    screenMaxWidth,
    _cWidth,
    _cHeight
  };
}
function getVariantSrc(ctx, input, opts, variant, density) {
  return ctx.$img(
    input,
    {
      ...opts.modifiers,
      width: variant._cWidth ? variant._cWidth * density : void 0,
      height: variant._cHeight ? variant._cHeight * density : void 0
    },
    opts
  );
}
function finaliseSizeVariants(sizeVariants) {
  sizeVariants.sort((v1, v2) => v1.screenMaxWidth - v2.screenMaxWidth);
  let previousMedia = null;
  for (let i = sizeVariants.length - 1; i >= 0; i--) {
    const sizeVariant = sizeVariants[i];
    if (sizeVariant.media === previousMedia) {
      sizeVariants.splice(i, 1);
    }
    previousMedia = sizeVariant.media;
  }
  for (let i = 0; i < sizeVariants.length; i++) {
    sizeVariants[i].media = sizeVariants[i + 1]?.media || "";
  }
}
function finaliseSrcsetVariants(srcsetVariants) {
  srcsetVariants.sort((v1, v2) => v1.width - v2.width);
  let previousWidth = null;
  for (let i = srcsetVariants.length - 1; i >= 0; i--) {
    const sizeVariant = srcsetVariants[i];
    if (sizeVariant.width === previousWidth) {
      srcsetVariants.splice(i, 1);
    }
    previousWidth = sizeVariant.width;
  }
}
function defineProvider(setup) {
  let result;
  return () => {
    if (result) {
      return result;
    }
    result = typeof setup === "function" ? setup() : setup;
    return result;
  };
}
const operationsGenerator = createOperationsGenerator({
  keyMap: {
    format: "f",
    width: "w",
    height: "h",
    resize: "s",
    quality: "q",
    background: "b",
    position: "pos"
  },
  formatter: (key, val) => encodeParam(key) + "_" + encodeParam(val.toString())
});
const ipxRuntime$zGwMgGxfUtMRZig3MY1HU9E97B_45iqaoNESfC9l8kQUM = defineProvider({
  validateDomains: true,
  supportsAlias: true,
  getImage: (src, { modifiers, baseURL }, ctx) => {
    if (modifiers.width && modifiers.height) {
      modifiers.resize = `${modifiers.width}x${modifiers.height}`;
      delete modifiers.width;
      delete modifiers.height;
    }
    const params = operationsGenerator(modifiers) || "_";
    if (!baseURL) {
      baseURL = joinURL(ctx.options.nuxt.baseURL, "/_ipx");
    }
    return {
      url: joinURL(baseURL, params, encodePath(src))
    };
  }
});
const imageOptions = {
  ...{
    "screens": {
      "sm": 640,
      "md": 768,
      "lg": 1024,
      "xl": 1280,
      "2xl": 1536
    },
    "presets": {},
    "provider": "ipx",
    "domains": [],
    "alias": {},
    "densities": [
      1,
      2
    ],
    "format": [
      "webp"
    ]
  },
  /** @type {"ipx"} */
  provider: "ipx",
  providers: {
    ["ipx"]: { setup: ipxRuntime$zGwMgGxfUtMRZig3MY1HU9E97B_45iqaoNESfC9l8kQUM, defaults: {} }
  }
};
const useImage = (event) => {
  const config = useRuntimeConfig();
  const nuxtApp = useNuxtApp();
  return nuxtApp.$img || nuxtApp._img || (nuxtApp._img = createImage({
    ...imageOptions,
    event: nuxtApp.ssrContext?.event,
    nuxt: {
      baseURL: config.app.baseURL
    },
    runtimeConfig: config
  }));
};
const useImageProps = (props) => {
  const $img = useImage();
  const providerOptions = computed(() => ({
    provider: props.provider,
    preset: props.preset
  }));
  const normalizedAttrs = computed(() => ({
    width: parseSize(props.width),
    height: parseSize(props.height),
    crossorigin: props.crossorigin === true ? "anonymous" : props.crossorigin || void 0,
    nonce: props.nonce
  }));
  const imageModifiers = computed(() => {
    return {
      ...props.modifiers,
      width: props.width,
      height: props.height,
      format: props.format,
      quality: props.quality || $img.options.quality,
      background: props.background,
      fit: props.fit
    };
  });
  return { providerOptions, normalizedAttrs, imageModifiers };
};
const _sfc_main$2 = {
  __name: "NuxtImg",
  __ssrInlineRender: true,
  props: {
    custom: { type: Boolean, required: false },
    placeholder: { type: [Boolean, String, Number, Array], required: false },
    placeholderClass: { type: String, required: false },
    src: { type: String, required: false },
    format: { type: String, required: false },
    quality: { type: [String, Number], required: false },
    background: { type: String, required: false },
    fit: { type: String, required: false },
    modifiers: { type: Object, required: false },
    preset: { type: String, required: false },
    provider: { type: null, required: false },
    sizes: { type: [String, Object], required: false },
    densities: { type: String, required: false },
    preload: { type: [Boolean, Object], required: false },
    width: { type: [String, Number], required: false },
    height: { type: [String, Number], required: false },
    crossorigin: { type: [String, Boolean], required: false },
    nonce: { type: String, required: false }
  },
  emits: ["load", "error"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const $img = useImage();
    const { providerOptions, normalizedAttrs, imageModifiers } = useImageProps(props);
    const sizes = computed(() => $img.getSizes(props.src, {
      ...providerOptions.value,
      sizes: props.sizes,
      densities: props.densities,
      modifiers: imageModifiers.value
    }));
    const placeholderLoaded = ref(false);
    const attrs = useAttrs();
    const imgAttrs = computed(() => ({
      ...normalizedAttrs.value,
      "data-nuxt-img": "",
      ...!props.placeholder || placeholderLoaded.value ? { sizes: sizes.value.sizes, srcset: sizes.value.srcset } : {},
      ...{ onerror: "this.setAttribute('data-error', 1)" },
      ...attrs
    }));
    const placeholder = computed(() => {
      if (placeholderLoaded.value) {
        return false;
      }
      const placeholder2 = props.placeholder === "" ? [10, 10] : props.placeholder;
      if (!placeholder2) {
        return false;
      }
      if (typeof placeholder2 === "string") {
        return placeholder2;
      }
      const [width = 10, height = width, quality = 50, blur = 3] = Array.isArray(placeholder2) ? placeholder2 : typeof placeholder2 === "number" ? [placeholder2] : [];
      return $img(props.src, {
        ...imageModifiers.value,
        width,
        height,
        quality,
        blur
      }, providerOptions.value);
    });
    const mainSrc = computed(
      () => props.sizes ? sizes.value.src : $img(props.src, imageModifiers.value, providerOptions.value)
    );
    const src = computed(() => placeholder.value || mainSrc.value);
    if (props.preload) {
      const hasMultipleDensities = sizes.value.srcset.includes("x, ");
      const isResponsive = hasMultipleDensities || !!sizes.value.sizes;
      useHead({
        link: [{
          rel: "preload",
          as: "image",
          nonce: props.nonce,
          crossorigin: normalizedAttrs.value.crossorigin,
          href: isResponsive ? sizes.value.src : src.value,
          ...sizes.value.sizes && { imagesizes: sizes.value.sizes },
          ...hasMultipleDensities && { imagesrcset: sizes.value.srcset },
          ...typeof props.preload !== "boolean" && props.preload.fetchPriority ? { fetchpriority: props.preload.fetchPriority } : {}
        }]
      });
    }
    useNuxtApp().isHydrating;
    const imgEl = useTemplateRef("imgEl");
    __expose({ imgEl });
    return (_ctx, _push, _parent, _attrs) => {
      if (!__props.custom) {
        _push(`<img${ssrRenderAttrs(mergeProps({
          ref_key: "imgEl",
          ref: imgEl,
          class: placeholder.value ? __props.placeholderClass : void 0
        }, imgAttrs.value, { src: src.value }, _attrs))}>`);
      } else {
        ssrRenderSlot(_ctx.$slots, "default", {
          imgAttrs: imgAttrs.value,
          isLoaded: placeholderLoaded.value,
          src: src.value
        }, null, _push, _parent);
      }
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+image@2.0.0_db0@0.3.4_ioredis@5.10.1_magicast@0.5.2_srvx@0.11.15/node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$2, { __name: "NuxtImg" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "EmploymentCard",
  __ssrInlineRender: true,
  props: {
    date: {},
    jobTile: {},
    companyName: {},
    companyLocation: {},
    jobDescription: {},
    jobPoints: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))} data-v-da3da27f><div class="flex-col items-start flex md:flex-row md:items-center md:justify-between mb-4 p-2 rounded-lg bg-[#6890bf9e]" data-v-da3da27f><p class="text-sm order-2 md:order-1" data-v-da3da27f>${ssrInterpolate(props.date)}</p><p class="text-lg md:text-xl font-medium order-1 md:order-1" data-v-da3da27f>${ssrInterpolate(props.jobTile)}, ${ssrInterpolate(props.companyName)}</p><p class="text-sm order-3 md:order-1" data-v-da3da27f>${ssrInterpolate(props.companyLocation)}</p></div><p data-v-da3da27f>${ssrInterpolate(props.jobDescription)}</p><ul class="list-inside list-square" data-v-da3da27f><!--[-->`);
      ssrRenderList(props.jobPoints, (jobPoint) => {
        _push(`<li class="mb-2 list-disc" data-v-da3da27f>${ssrInterpolate(jobPoint.point_title)} `);
        if (jobPoint.point_links.length > 0) {
          _push(`<!--[-->`);
          ssrRenderList(jobPoint.point_links, (pointLink) => {
            _push(`<a target="_blank" class="external-link me-1"${ssrRenderAttr("title", pointLink.point_title)}${ssrRenderAttr("href", pointLink.point_href)} data-v-da3da27f>${ssrInterpolate(pointLink.point_title)}</a>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/EmploymentCard/EmploymentCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-da3da27f"]]), { __name: "EmploymentCard" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { animationEnabled } = useAnimations();
    const i18n = useI18n();
    const ArsipaJobPoints = [
      {
        point_title: i18n.t("arsipaPoint1"),
        point_links: []
      },
      {
        point_title: i18n.t("arsipaPoint2"),
        point_links: []
      },
      {
        point_title: i18n.t("arsipaPoint3"),
        point_links: []
      },
      {
        point_title: i18n.t("arsipaPoint4"),
        point_links: []
      }
    ];
    const ImtilakJobPoints = [
      {
        point_title: i18n.t("imtilakPoint1"),
        point_links: []
      },
      {
        point_title: i18n.t("imtilakPoint2"),
        point_links: []
      },
      {
        point_title: i18n.t("imtilakPoint3"),
        point_links: [
          {
            point_title: "[1]",
            point_href: "https://www.imtilak.net/en/landing/istanbul-city-center"
          },
          {
            point_title: "[2]",
            point_href: "https://www.imtilak.net/en/landing/trabzon-oversea"
          },
          {
            point_title: "[3]",
            point_href: "https://www.imtilak.net/en/landing/new-large-investments"
          },
          {
            point_title: "[4]",
            point_href: "https://www.imtilak.net/en/landing/toskana-project"
          },
          {
            point_title: "[5]",
            point_href: "https://www.imtilak.net/ar/landing/sapanca-lake-villas"
          },
          {
            point_title: "[6]",
            point_href: "https://www.imtilak.net/en/landing/riva-villas"
          }
        ]
      }
    ];
    const InceJobPoints = [
      {
        point_title: i18n.t("incePoint1"),
        point_links: []
      },
      {
        point_title: i18n.t("incePoint2"),
        point_links: []
      }
    ];
    const programmingLanguages = ref([
      "HTML",
      "CSS|SCSS",
      "JavaScript",
      "TypeScript",
      "PHP",
      "SQL"
    ]);
    const librariesAndFrameworks = ref([
      "React",
      "Next",
      "Zod",
      "Zustand",
      "React Hook Form",
      "MUI",
      "Shadcn",
      "Vue",
      "Nuxt",
      "Pinia",
      "Vuex",
      "Inertia.js",
      "Blade template engine",
      "Apollo GraphQL",
      "Tailwind CSS"
    ]);
    const languages = ref([
      { name: `${i18n.t("arabic")}`, proficiency: `${i18n.t("native")}` },
      { name: `${i18n.t("english")}`, proficiency: `${i18n.t("advanced")}` },
      { name: `${i18n.t("turkish")}`, proficiency: `${i18n.t("advanced")}` }
    ]);
    useHead({
      title: `${i18n.t("home")} | ${i18n.t("abdurrahman")}`
    });
    useSeoMeta({
      ogTitle: `${i18n.t("home")} | ${i18n.t("abdurrahman")}`,
      description: `${i18n.t("summary")}`,
      ogDescription: `${i18n.t("summary")}`,
      ogImage: "/images/my-icon.png",
      twitterCard: "summary_large_image"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      const _component_NuxtImg = __nuxt_component_1;
      const _component_EmploymentCard = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}>`);
      if (unref(animationEnabled)) {
        _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      } else {
        _push(ssrRenderComponent(_component_NuxtImg, {
          class: "w-25.5",
          src: "/images/my-icon.png",
          alt: "personal picture of the website owner pixilated",
          width: "102",
          height: "102"
        }, null, _parent));
      }
      if (unref(animationEnabled)) {
        _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      } else {
        _push(`<p class="text-3xl md:text-5xl font-semibold mt-4">${ssrInterpolate(_ctx.$t("hi"))}</p>`);
      }
      if (unref(animationEnabled)) {
        _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      } else {
        _push(`<p class="my-4">${ssrInterpolate(_ctx.$t("summary"))}</p>`);
      }
      _push(`<hr class="my-4 w-full h-px border-t border-solid"><div>`);
      if (unref(animationEnabled)) {
        _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      } else {
        _push(`<p class="text-xl md:text-2xl font-medium mb-4 mt-8">${ssrInterpolate(_ctx.$t("experience"))}</p>`);
      }
      _push(`<div class="flex items-center justify-center flex-col w-full">`);
      if (unref(animationEnabled)) {
        _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      } else {
        _push(ssrRenderComponent(_component_EmploymentCard, {
          date: `${_ctx.$t("january")} 2025 - ${_ctx.$t("present")}`,
          "job-tile": _ctx.$t("frontEnd"),
          "company-name": _ctx.$t("arsipaGmbh"),
          "company-location": `${_ctx.$t("berlin")} / ${_ctx.$t("germany")}`,
          "job-points": ArsipaJobPoints
        }, null, _parent));
      }
      _push(`<hr class="my-4 w-[60%] h-px border-t border-dashed ms-0">`);
      if (unref(animationEnabled)) {
        _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      } else {
        _push(ssrRenderComponent(_component_EmploymentCard, {
          date: `${_ctx.$t("november")} 2021 - ${_ctx.$t("december")} 2024`,
          "job-tile": _ctx.$t("frontEnd"),
          "company-name": _ctx.$t("imtilakGroup"),
          "company-location": `${_ctx.$t("istanbul")} / ${_ctx.$t("turkey")}`,
          "job-points": ImtilakJobPoints
        }, null, _parent));
      }
      _push(`<hr class="my-4 w-[60%] h-px border-t border-dashed ms-0">`);
      if (unref(animationEnabled)) {
        _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      } else {
        _push(ssrRenderComponent(_component_EmploymentCard, {
          date: `${_ctx.$t("may")} 2020 - ${_ctx.$t("september")} 2021`,
          "job-tile": _ctx.$t("frontEnd"),
          "company-name": _ctx.$t("inceGroup"),
          "company-location": `${_ctx.$t("istanbul")} / ${_ctx.$t("turkey")}`,
          "job-points": InceJobPoints
        }, null, _parent));
      }
      _push(`</div></div><hr class="my-4 w-full h-px border-t border-solid"><div>`);
      if (unref(animationEnabled)) {
        _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      } else {
        _push(`<p class="mb-4 font-medium text-xl md:text-2xl mt-8">${ssrInterpolate(_ctx.$t("skills"))}</p>`);
      }
      _push(`<ul class="list-inside"><li>`);
      if (unref(animationEnabled)) {
        _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      } else {
        _push(`<p class="mt-4 mb-4 font-medium text-lg md:text-xl p-2 bg-[#6890bf9e] w-fit rounded-lg">${ssrInterpolate(_ctx.$t("programmingLanguages"))}</p>`);
      }
      _push(`<ul class="list-inside ms-4"><!--[-->`);
      ssrRenderList(unref(programmingLanguages), (programmingLanguage) => {
        _push(`<li>`);
        if (unref(animationEnabled)) {
          _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
        } else {
          _push(`<!--[-->${ssrInterpolate(programmingLanguage)}<!--]-->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul></li><li>`);
      if (unref(animationEnabled)) {
        _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      } else {
        _push(`<p class="mt-4 mb-4 font-medium text-lg md:text-xl p-2 bg-[#6890bf9e] w-fit rounded-lg">${ssrInterpolate(_ctx.$t("frameworks"))}</p>`);
      }
      _push(`<ul class="list-inside ms-4"><!--[-->`);
      ssrRenderList(unref(librariesAndFrameworks), (framework) => {
        _push(`<li>`);
        if (unref(animationEnabled)) {
          _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
        } else {
          _push(`<!--[-->${ssrInterpolate(framework)}<!--]-->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul></li><li>`);
      if (unref(animationEnabled)) {
        _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      } else {
        _push(`<p class="mt-4 mb-4 font-medium text-lg md:text-xl p-2 bg-[#6890bf9e] w-fit rounded-lg">${ssrInterpolate(_ctx.$t("languages"))}</p>`);
      }
      _push(`<ul class="list-inside ms-4"><!--[-->`);
      ssrRenderList(unref(languages), (language) => {
        _push(`<li>`);
        if (unref(animationEnabled)) {
          _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
        } else {
          _push(`<!--[-->${ssrInterpolate(language.name)} - (${ssrInterpolate(language.proficiency)}) <!--]-->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul></li></ul></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-q1cVnkrV.mjs.map
