import { defineConfig } from 'vitepress';
import nav from './nav';
import sidebar from './sidebar';

export default defineConfig({
  base: '/DOC/',
  title: "归档",
  description: "A VitePress Site",
  lang: 'zh-CN',
  cleanUrls: true,

  head: [
    ['meta', { name: 'referrer', content: 'no-referrer' }]
  ],

  markdown: {
    image: {
      lazyLoading: false
    }
  },

  themeConfig: {
    logo: '/logo.png',

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
    
    nav,
    sidebar,
    
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '重置搜索',
                backButtonTitle: '关闭搜索',
                noResultsText: '没有结果',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: '输入',
                  navigateText: '导航',
                  navigateUpKeyAriaLabel: '上箭头',
                  navigateDownKeyAriaLabel: '下箭头',
                  closeText: '关闭',
                  closeKeyAriaLabel: 'Esc'
                }
              }
            }
          }
        }
      }
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/bnganblog' }
    ]
  }
})