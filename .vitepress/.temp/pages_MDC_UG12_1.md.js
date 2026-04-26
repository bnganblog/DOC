import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/doc/assets/image.C4SgnKns.png";
const _imports_1 = "/doc/assets/image-1.DMnFYeY-.png";
const _imports_2 = "/doc/assets/image-2.Bmwerlnh.png";
const __pageData = JSON.parse('{"title":"NXUG12三轴及多轴编程归档","description":"","frontmatter":{},"headers":[],"relativePath":"pages/MDC/UG12/1.md","filePath":"pages/MDC/UG12/1.md"}');
const _sfc_main = { name: "pages/MDC/UG12/1.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="nxug12三轴及多轴编程归档" tabindex="-1">NXUG12三轴及多轴编程归档 <a class="header-anchor" href="#nxug12三轴及多轴编程归档" aria-label="Permalink to “NXUG12三轴及多轴编程归档”">​</a></h1><p>26.4.25</p><h2 id="三轴编程" tabindex="-1">三轴编程 <a class="header-anchor" href="#三轴编程" aria-label="Permalink to “三轴编程”">​</a></h2><p>懒得搞了直接放图</p><details class="details custom-block"><summary>Details</summary><p><img${ssrRenderAttr("src", _imports_0)} alt="常用策略"><img${ssrRenderAttr("src", _imports_1)} alt="alt text"><img${ssrRenderAttr("src", _imports_2)} alt="alt text"></p></details><h2 id="more" tabindex="-1">More <a class="header-anchor" href="#more" aria-label="Permalink to “More”">​</a></h2><p>Check out the documentation for the <a href="https://vitepress.dev/guide/markdown" target="_blank" rel="noreferrer">full list of markdown extensions</a>.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/MDC/UG12/1.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _1 as default
};
