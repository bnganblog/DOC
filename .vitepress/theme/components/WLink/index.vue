<template>
  <div id="main" style="max-width: 80rem; margin: 0 auto; padding: 24px; padding-bottom: 32px; width: 100%;">
    <h1 style="font-size: 24px; font-weight: bold; margin-bottom: 48px; color: var(--vp-c-text-1);">我的友链</h1>
    <div style="margin-bottom: 48px;">
      <div class="link" v-for="(item, index) of linksData" :key="index">
        <div style="position: relative; margin-top: 48px; margin-bottom: 24px; height: 1px; background: var(--vp-c-border);">
          <h3 style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background: var(--vp-c-bg); padding: 0 24px; text-align: center; font-size: 20px; font-weight: bold; color: var(--vp-c-text-1);">{{ item.title }}</h3>
        </div>
        <p style="margin-bottom: 32px; text-align: center; font-weight: 500; color: var(--vp-c-text-2);">{{ item.desc }}</p>
        <div class="linkContainer" style="display: grid; grid-template-columns: repeat(1, 1fr); gap: 24px; grid-auto-rows: minmax(100px, auto);">
          <div v-for="temp of item.list" :key="temp.link" style="grid-column: span 1;">
            <LinkSite :data="temp" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import LinkSite from './LinkSite.vue'
import { LinkList, Link } from './WLink'

// 直接定义友链数据
const linksData = ref<LinkList[]>([
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
        avatar:'https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg',
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
])

// 动态调整网格布局
const updateGridLayout = () => {
  const containers = document.querySelectorAll('.linkContainer');
  if (!containers.length) return;
  
  const width = window.innerWidth;
  let columns = 1;
  
  if (width >= 1536) columns = 6; // 2xl
  else if (width >= 1280) columns = 5; // xl
  else if (width >= 1024) columns = 4; // lg
  else if (width >= 768) columns = 3; // md
  else if (width >= 640) columns = 2; // sm
  
  containers.forEach(container => {
    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  });
}

// 生命周期钩子
onMounted(() => {
  updateGridLayout();
  window.addEventListener('resize', updateGridLayout);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateGridLayout);
});
</script>
