<template>
  <div id="main" style="max-width: 80rem; margin: 0 auto; padding: 24px; padding-bottom: 32px; width: 100%;">
    <h1 style="font-size: 24px; font-weight: bold; margin-bottom: 48px; color: var(--vp-c-text-1);">我的友链</h1>
    <div style="margin-bottom: 48px;">
      <div class="link" v-for="(item, index) of linksData" :key="index" :id="item.title">
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
import { onMounted, onUnmounted } from 'vue'
import LinkSite from './LinkSite.vue'
import { linksData } from './linksData'

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
