<template>
  <div class="link-scroll-container">
    <div class="link-scroll-title">友情链接</div>
    <div class="link-scroll-wrapper" @mouseenter="pauseScroll" @mouseleave="resumeScroll">
      <div class="link-scroll-content" :style="scrollStyle">
        <a v-for="link in displayLinks" :key="link.name + link.index" :href="link.url" target="_blank" class="link-scroll-item">
          <img :src="link.logo || 'https://yejiangye.com/logo.png'" :alt="link.name" class="link-scroll-logo">
          <span class="link-scroll-name">{{ link.name }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

interface LinkItem {
  name: string
  url: string
  logo?: string
  index?: number
}

const props = defineProps<{
  links: LinkItem[]
  speed?: number // 滚动速度，默认30px/s
}>()

const isPaused = ref(false)
const offset = ref(0)
let animationId: number | null = null

// 复制链接数组以实现无缝滚动
const displayLinks = computed(() => {
  const links = props.links || []
  // 复制多份以实现无缝滚动
  return [...links, ...links, ...links].map((link, index) => ({
    ...link,
    index
  }))
})

const scrollStyle = computed(() => ({
  transform: `translateX(-${offset.value}px)`,
  transition: isPaused.value ? 'none' : 'transform 0.1s linear'
}))

const scrollSpeed = computed(() => props.speed || 30)

let lastTime = 0
const animate = (currentTime: number) => {
  if (!lastTime) lastTime = currentTime
  const deltaTime = (currentTime - lastTime) / 1000 // 转换为秒
  lastTime = currentTime

  if (!isPaused.value) {
    offset.value += scrollSpeed.value * deltaTime

    // 计算单个链接项的宽度（包括间距）
    const itemWidth = 140 // 估计每个链接项的宽度
    const totalWidth = (props.links?.length || 0) * itemWidth

    // 当滚动超过一份内容时，重置偏移量
    if (totalWidth > 0 && offset.value >= totalWidth) {
      offset.value = offset.value % totalWidth
    }
  }

  animationId = requestAnimationFrame(animate)
}

const pauseScroll = () => {
  isPaused.value = true
}

const resumeScroll = () => {
  isPaused.value = false
  lastTime = 0
}

onMounted(() => {
  animationId = requestAnimationFrame(animate)
})

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
})
</script>

<style scoped>
.link-scroll-container {
  margin: 0 auto;
  max-width: 960px;
  padding: 0 24px;
  width: 100%;
}

.link-scroll-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 1rem;
  text-align: center;
}

.link-scroll-wrapper {
  overflow: hidden;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 16px 0;
  border: 1px solid var(--vp-c-border);
  cursor: pointer;
}

.link-scroll-content {
  display: flex;
  gap: 24px;
  white-space: nowrap;
  will-change: transform;
}

.link-scroll-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: var(--vp-c-bg);
  border-radius: 8px;
  text-decoration: none;
  color: var(--vp-c-text-1);
  border: 1px solid transparent;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.link-scroll-item:hover {
  border-color: #4ade80;
  box-shadow: 0 0 12px rgba(74, 222, 128, 0.15);
  transform: translateY(-2px);
}

.link-scroll-logo {
  width: 24px;
  height: 24px;
  border-radius: 4px;
  object-fit: cover;
}

.link-scroll-name {
  font-size: 14px;
  font-weight: 500;
}
</style>
