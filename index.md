---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: 开发者笔记
  text: 探索知识的无限可能
  tagline: DIY爱好者天堂，一站式学习从设计到加工成品
  image:
    src: /logo.png
    alt: /
  actions:
    - theme: brand
      text: 快速开始
      link: /pages/UG/UG12/1.html
    - theme: alt
      text: 快速导航
      link: /pages/nav.html
features:
  - icon: ⚙
    title: 前端物语
    details: 整理前端常用知识点<small>（面试八股文）</small><br />如有异议按你的理解为主，不接受反驳
    link: /
    linkText: 前端常用知识
  - icon: 🔧
    title: 源码阅读
    details: 了解各种库的实现原理<br />学习其中的小技巧和冷知识
    link: /
    linkText: 源码阅读
  - icon: 🔩
    title: Workflow
    details: 在工作中学到的一切<small>（常用库/工具/奇淫技巧等）</small><br />配合 CV 大法来更好的摸鱼
    link: /
    linkText: 常用工具库
  - icon: 🧰
    title: 提效工具
    details: 工欲善其事，必先利其器<br />记录开发和日常使用中所用到的软件、插件、扩展等
    link: /
    linkText: 提效工具
  - icon: 🔌
    title: 踩坑记录
    details: 那些年我们踩过的坑<br />总有一些让你意想不到的问题
    link: /
    linkText: 踩坑记录
  - icon: 🤖
    title: 吾志所向，一往无前。
    details: '<small class="bottom-small">一个想躺平的小开发</small>'
    link: /
---


<LinkScroll :links="scrollLinks" :speed="40" />

<script setup>
import { computed } from 'vue'
import { linksData } from './.vitepress/theme/components/WLink/linksData'

// 从共享数据中提取所有友链，用于滚动显示
const scrollLinks = computed(() => {
  const links = []
  linksData.forEach(group => {
    group.list.forEach(item => {
      links.push({
        name: item.name,
        url: item.link,
        logo: item.avatar
      })
    })
  })
  return links
})
</script>


<style>
:root {
  /* 文字渐变 */
  --vp-home-hero-name-color: transparent !important;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #9b142a, #41d1ff) !important;

  /* 静态底色（动画会覆盖它） */
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #9b142a, #41d1ff) !important;
  --vp-home-hero-image-filter: blur(60px) !important;
}

/* 动态变色动画 */
.VPHomeHero .image::before {
  animation: bgGradient 2s infinite linear !important;
  background-size: 300% 300% !important;
}

/* 深色模式兼容 */
.dark {
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #ff7b9c, #72d2ff) !important;
}
</style>