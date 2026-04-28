<template>
  <a
    class="link-site-card"
    :href="data.link"
    target="_blank"
  >
    <div style="flex-shrink: 0; width: 64px; height: 64px; display: flex; align-items: center; justify-content: center; overflow: hidden;">
      <img
        v-if="data.avatar && !imageFailed"
        :style="{
          width: '100%',
          height: '100%',
          objectFit: data.irregular ? 'contain' : 'cover',
          borderRadius: data.avatar?.startsWith('https://vitepress.dev/') ? '0' : '50%',
          transition: 'all 0.3s ease'
        }"
        :src="data.avatar"
        @error="handleImageError()"
        :alt="data.name"
      />
      <div v-else style="background: var(--vp-c-brand); width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; border-radius: 50%; font-size: 24px; font-weight: bold; color: white; transition: all 0.3s ease;">
        {{ data.name.charAt(0).toLocaleUpperCase() }}
      </div>
    </div>
    <div style="flex: 1; min-width: 0; display: flex; flex-direction: column; justify-content: center; transition: all 0.3s ease;">
      <h3 style="margin-bottom: 8px; width: 100%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: 16px; font-weight: 600; color: var(--vp-c-text-1);">
        {{ data.name }}
      </h3>
      <div style="color: var(--vp-c-text-2); width: 100%; overflow: hidden; font-size: 14px; line-height: 1.5; font-weight: 400; word-break: break-word; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; height: 42px;" :title="data.descr">
        {{ data.descr }}
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Link } from './WLink'

const props = defineProps<{ data: Link; noAvatar?: boolean }>()
const data = props.data
const noAvatar = props.noAvatar

// 记录图片加载状态
const imageFailed = ref(false)

// 处理图片加载失败
const handleImageError = () => {
  imageFailed.value = true
}
</script>

<style>
.link-site-card {
  background: var(--vp-c-bg-soft);
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 16px;
  height: 100px;
  border: 1px solid transparent;
  text-decoration: none;
}

.link-site-card:hover {
  border-color: #4ade80 !important;
  box-shadow: 0 0 20px rgba(74, 222, 128, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1) !important;
  transform: translateY(-4px) !important;
}
</style>
