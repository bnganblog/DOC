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
    - theme: brand
      text: 抖音去水印
      link: https://analysis.hao006.xyz
features:
  - icon: ⚙
    title: 轻松编程
    details: 从零开始学习UG编程<br />图文并茂简单易懂
    link: /
    linkText: 
  - icon: 🔧
    title: 快速建模
    details: 简单易上手的工业建模<br />仅用于机械工业以及个人DIY
    link: /
    linkText: 
  - icon: 🔩
    title: 一键上手
    details: 从建模到成品<br />一站式学习
    link: /
    linkText: 
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