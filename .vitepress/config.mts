import { defineConfig } from 'vitepress';

import { generateSidebar } from "vitepress-sidebar";

// https://vitepress.dev/reference/site-config

export default defineConfig({
  base: '/DOC/',
  title: "归档",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      {
        text: "机械加工",
        items: [
          { text: "NXUG12", link: "/DOC/pages/MDC/UG12/1" },
        ],
      },
      {
        text: "关于",
        items: [
          { text: "友情链接", link: "/DOC/pages/links" },
          { text: "我的博客", link: "https://bnganblog.github.io/DOC" }
        ],
        style: "color: #3b82f6;"
      }
    ],

    sidebar: {
      '/pages/MDC/': [
        {
          text: 'MDC',
          collapsible: true,
          items: [
            { text: 'UG12多轴编程', link: '/DOC/pages/MDC/UG12/1' },
            { text: 'UG2512', link: '/DOC/pages/MDC/UG2512/1' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bnganblog' }
    ]
  }
})