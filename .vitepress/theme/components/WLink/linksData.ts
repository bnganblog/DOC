import { LinkList } from './WLink'

export const linksData: LinkList[] = [
  {
    title: '鸣谢',
    desc: '建站中学习和使用了以下博客/网站的技术和分享，特别鸣谢！🫡',
    list: [
      {
        name: 'VitePress',
        link: 'https://vitepress.dev/zh/',
        avatar: 'https://vitepress.dev/vitepress-logo-mini.svg',
        irregular: true,
        descr: '由 Vite 和 Vue 驱动的静态站点生成器'
      },
      {
        name: 'VitePress 快速上手教程',
        link: 'https://vitepress.yiov.top/',
        avatar: 'https://vitepress.dev/vitepress-logo-mini.svg',
        irregular: true,
        descr: '如果你也想搭建它，那跟我一起做吧'
      },
      {
        name: '安知鱼',
        link: 'https://blog.anheyu.com/',
        avatar: 'https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg',
        descr: '生活明朗，万物可爱'
      }
    ]
  },
  {
    title: '小伙伴',
    desc: '有趣的小伙伴，和我一起做友链 🤝',
    list: [
      {
        name: '夜将夜',
        link: 'https://yejiangye.com',
        avatar: 'https://yejiangye.com/logo.png',
        irregular: true,
        descr: 'Ajiang的个人博客，记录美好生活！'
      },
    ]
  }
]
