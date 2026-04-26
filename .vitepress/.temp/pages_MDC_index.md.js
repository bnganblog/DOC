import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pages/MDC/index.md","filePath":"pages/MDC/index.md"}');
const _sfc_main = { name: "pages/MDC/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>export default defineConfig({</p><p>themeConfig: { //侧边栏 sidebar: { // 目录1 &#39;/guide/&#39;: [ { text: &#39;Guide&#39;, items: [ { text: &#39;Index&#39;, link: &#39;/guide/&#39; }, { text: &#39;One&#39;, link: &#39;/guide/one&#39; }, { text: &#39;Two&#39;, link: &#39;/guide/two&#39; } ], }, ],</p><pre><code>  // 目录2
  &#39;/config/&#39;: [
    {
      text: &#39;Config&#39;,
      items: [
        { text: &#39;Index&#39;, link: &#39;/config/&#39; },
        { text: &#39;Three&#39;, link: &#39;/config/three&#39; },
        { text: &#39;Four&#39;, link: &#39;/config/four&#39; }
      ],
    },
  ],
},
</code></pre><p>},</p><p>})</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/MDC/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
