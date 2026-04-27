import { defineConfig } from 'vitepress';

import { generateSidebar } from "vitepress-sidebar";

// https://vitepress.dev/reference/site-config

export default defineConfig({
  base: '/DOC/',
  title: "归档",
  description: "A VitePress Site",
  lang: 'zh-CN',
  themeConfig: {
    outlineTitle: '本页目录',
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      {
        text: "机械加工",
        items: [
          { text: "UG12三轴编程", link: "/pages/UG/UG12/1" },
          { text: "UG12多轴编程", link: "/pages/UG/UG12/5-axis" },
        ],
      },
      {
        text: "关于",
        items: [
          { text: "友情链接", link: "/pages/links" },
          { text: "导航站", link: "/pages/nav" },
          { text: "我的博客", link: "https://bnganblog.github.io" }
        ],
        style: "color: #3b82f6;"
      }
    ],

    sidebar: {
      '/pages/UG/': [
        {
          text: 'UG',
          collapsible: true,
          items: [
            { text: 'UG12三轴编程', link: '/pages/UG/UG12/1' },
            { text: 'UG12多轴编程', link: '/pages/UG/UG12/5-axis' },
            { text: '测试', link: '/pages/UG/UG2512/1' }
          ]
        }
      ],
      '/pages/nav': [
        {
          text: '导航分类',
          items: [
            { text: '常用工具', link: '/pages/nav#常用工具' },
            { text: '高质量论坛与博客', link: '/pages/nav#高质量论坛与博客' },
            { text: '网盘资源', link: '/pages/nav#网盘资源' },
            { text: '软件下载', link: '/pages/nav#软件下载' },
            { text: '影视资源', link: '/pages/nav#影视资源' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bnganblog' }
    ]
  }
})