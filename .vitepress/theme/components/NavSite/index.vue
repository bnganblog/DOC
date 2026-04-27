<template>
  <div id="main" style="max-width: 100%; margin: 0 auto; padding: 24px; padding-bottom: 32px; width: 100%;">
    <!-- 常用工具 -->
    <div id="常用工具" style="margin-bottom: 32px;">
      <h2 style="font-size: 18px; font-weight: bold; margin-bottom: 16px; color: var(--vp-c-text-1);">常用工具</h2>
      <div class="tools-grid" style="display: grid; grid-template-columns: repeat(1, 1fr); gap: 12px;">
        <a v-for="tool in tools" :key="tool.name" :href="tool.link" target="_blank" class="nav-card" :style="{ height: tool.height }">
          <div class="card-content">
            <div class="icon-wrapper">
              <img :src="tool.logo" :alt="tool.name" class="nav-icon">
            </div>
            <div class="text-content">
              <h3 class="nav-title">{{ tool.name }}</h3>
              <p class="nav-desc">{{ tool.desc }}</p>
            </div>
          </div>
        </a>
      </div>
    </div>

    <!-- 分割线 -->
    <div style="border-top: 1px solid var(--vp-c-border); margin: 24px 0;"></div>

    <!-- 高质量论坛与博客 -->
    <div id="高质量论坛与博客" style="margin-bottom: 32px;">
      <h2 style="font-size: 18px; font-weight: bold; margin-bottom: 16px; color: var(--vp-c-text-1);">高质量论坛与博客</h2>
      <div class="blogs-grid" style="display: grid; grid-template-columns: repeat(1, 1fr); gap: 12px;">
        <a v-for="blog in blogs" :key="blog.name" :href="blog.link" target="_blank" class="nav-card" :style="{ height: blog.height }">
          <div class="card-content">
            <div class="icon-wrapper">
              <img :src="blog.logo" :alt="blog.name" class="nav-icon">
            </div>
            <div class="text-content">
              <h3 class="nav-title">{{ blog.name }}</h3>
              <p class="nav-desc">{{ blog.desc }}</p>
              <span class="nav-update">{{ blog.update }}</span>
            </div>
          </div>
        </a>
      </div>
    </div>

    <!-- 分割线 -->
    <div style="border-top: 1px solid var(--vp-c-border); margin: 24px 0;"></div>


    <!-- 网盘资源 -->
    <div id="网盘资源" style="margin-bottom: 32px;">
      <h2 style="font-size: 18px; font-weight: bold; margin-bottom: 16px; color: var(--vp-c-text-1);">网盘资源</h2>
      <div class="pan-grid" style="display: grid; grid-template-columns: repeat(1, 1fr); gap: 12px;">
        <a v-for="item in panItems" :key="item.name" :href="item.link" target="_blank" class="nav-card" :style="{ height: item.height }">
          <div class="card-content">
            <div class="icon-wrapper">
              <img :src="item.logo" :alt="item.name" class="nav-icon">
            </div>
            <div class="text-content">
              <h3 class="nav-title">{{ item.name }}</h3>
              <p class="nav-desc">{{ item.desc }}</p>
            </div>
          </div>
        </a>
      </div>
    </div>

    <!-- 分割线 -->
    <div style="border-top: 1px solid var(--vp-c-border); margin: 24px 0;"></div>

    <!-- 分割线 -->
    <div style="border-top: 1px solid var(--vp-c-border); margin: 24px 0;"></div>

    <!-- 软件下载 -->
    <div id="软件下载" style="margin-bottom: 32px;">
      <h2 style="font-size: 18px; font-weight: bold; margin-bottom: 16px; color: var(--vp-c-text-1);">软件下载</h2>
      <div class="software-grid" style="display: grid; grid-template-columns: repeat(1, 1fr); gap: 12px;">
        <a v-for="item in softwareItems" :key="item.name" :href="item.link" target="_blank" class="nav-card" :style="{ height: item.height }">
          <div class="card-content">
            <div class="icon-wrapper">
              <img :src="item.logo" :alt="item.name" class="nav-icon">
            </div>
            <div class="text-content">
              <h3 class="nav-title">{{ item.name }}</h3>
              <p class="nav-desc">{{ item.desc }}</p>
            </div>
          </div>
        </a>
      </div>
    </div>

    <!-- 分割线 -->
    <div style="border-top: 1px solid var(--vp-c-border); margin: 24px 0;"></div>

    <!-- 影视资源 -->
    <div id="影视资源" style="margin-bottom: 32px;">
      <h2 style="font-size: 18px; font-weight: bold; margin-bottom: 16px; color: var(--vp-c-text-1);">影视资源</h2>
      <div class="movie-grid" style="display: grid; grid-template-columns: repeat(1, 1fr); gap: 12px;">
        <a v-for="item in movieItems" :key="item.name" :href="item.link" target="_blank" class="nav-card" :style="{ height: item.height }">
          <div class="card-content">
            <div class="icon-wrapper">
              <img :src="item.logo" :alt="item.name" class="nav-icon">
            </div>
            <div class="text-content">
              <h3 class="nav-title">{{ item.name }}</h3>
              <p class="nav-desc">{{ item.desc }}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const tools = ref([
  { name: '豆包', desc: '字节跳动旗下AI助手', link: 'https://www.doubao.com', logo: 'https://notes.fe-mm.com/icons/doubao.png', height: '72px' },
  { name: 'TRAE', desc: 'AI写代码', link: 'https://www.trae.cn', logo: 'https://favicon.im/www.trae.cn?larger=true', height: '72px' },
  { name: 'Squoosh', desc: '在线的图片压缩工具', link: 'https://squoosh.app', logo: 'https://squoosh.app/c/icon-demo-logo-326ed9b6.png', height: '72px' },
  { name: 'TinyPNG', desc: '在线图片压缩工具', link: 'https://tinypng.com', logo: 'https://tinypng.com/images/favicon.ico', height: '72px' },
  { name: 'Carbon', desc: '代码图片生成', link: 'https://carbon.now.sh', logo: 'https://carbon.now.sh/favicon.ico', height: '72px' },
  { name: 'npm trends', desc: '比较大小下载数据数据等', link: 'https://npmtrends.com', logo: 'https://npmtrends.com/favicon.ico', height: '72px' },
  { name: '开发者武器库', desc: '最好用的专业工具箱', link: 'https://devtool.tech', logo: 'https://devtool.tech/favicon.ico', height: '72px' },
  { name: '在线工具', desc: '开发人员的工具箱', link: 'https://tool.lu', logo: 'https://tool.lu/favicon.ico', height: '72px' },
  { name: 'Json 中文网', desc: 'JSON解析及格式化验证', link: 'https://www.json.cn', logo: 'https://www.json.cn/favicon.ico', height: '72px' },
  { name: 'transform', desc: '支持多语言的在线转换器', link: 'https://transform.tools', logo: 'https://favicon.im/transform.tools?larger=true', height: '72px' },
  { name: 'Excalidraw', desc: '手绘风格流程图', link: 'https://excalidraw.com', logo: 'https://excalidraw.com/favicon.ico', height: '72px' },
  { name: 'ProcessOn', desc: '免费在线流程图思维导图', link: 'https://www.processon.com', logo: 'https://www.processon.com/favicon.ico', height: '72px' },
  { name: 'Shields.io', desc: '制作简洁、一致、易读的徽章', link: 'https://shields.io', logo: 'https://favicon.im/shields.io?larger=true', height: '72px' },
  { name: '懒人 Excel', desc: 'Excel 教程', link: 'https://www.lanrenexcel.com', logo: 'https://favicon.im/www.lanrenexcel.com?larger=true', height: '72px' },
  { name: 'Favicon', desc: '网页icon提取', link: 'https://favicon.im/zh', logo: 'https://favicon.im/favicon.im?larger=true', height: '72px' },
])

const blogs = ref([
  { name: '稀土掘金', desc: '程序员论坛', link: 'https://juejin.cn', logo: 'https://juejin.cn/favicon.ico', height: '72px' },
  { name: 'UG爱好者论坛', desc: 'UG建模与编程',link: 'https://www.ugsnx.com', logo: 'https://favicon.im/www.ugsnx.com?larger=true', height: '72px' },
  { name: 'SW自学网', desc: 'SW一站式学习',link: 'https://www.swrjzxw.com', logo: 'https://favicon.im/www.solidworks.com?larger=true', height: '72px' },
])

const panItems = ref([
  { name: '百度网盘', desc: '百度旗下云存储服务', link: 'https://pan.baidu.com', logo: 'https://favicon.im/pan.baidu.com', height: '72px' },
  { name: '阿里云盘', desc: '阿里云旗下云存储服务', link: 'https://www.aliyundrive.com', logo: 'https://favicon.im/www.alipan.com?larger=true', height: '72px' },
  { name: '夸克网盘', desc: '夸克旗下云存储服务', link: 'https://pan.quark.cn', logo: 'https://pan.quark.cn/favicon.ico', height: '72px' },
  { name: '天翼云盘', desc: '中国电信旗下云存储服务', link: 'https://cloud.189.cn', logo: 'https://favicon.im/cloud.189.cn', height: '72px' },
  { name: '115网盘', desc: '老牌云存储服务', link: 'https://115.com', logo: 'https://115.com/favicon.ico', height: '72px' },
  { name: '小酷盘', desc: '聚合网盘搜索工具', link: 'https://xiaokupan.com', logo: 'https://xiaokupan.com/favicon.ico', height: '72px' },
  { name: '3Y论坛', desc: '纯净网盘分享社区', link: 'https://www.3ylt.xyz', logo: 'https://favicon.im/www.3ylt.xyz?larger=true', height: '72px' },
  { name: '小云搜索', desc: '一站式网盘搜索', link: 'https://dash.yunso.net', logo: 'https://favicon.im/dash.yunso.net?larger=true', height: '72px' },
  { name: '文叔叔', desc: '在线文件分享工具', link: 'https://www.wenshushu.cn', logo: 'https://www.wenshushu.cn/favicon.ico', height: '72px' },
  { name: 'FNHY', desc: '资源汇集网站', link: 'https://fmhy.net', logo: 'https://favicon.im/https://fmhy.net/?larger=true', height: '72px' },
  { name: '盘搜搜', desc: '资源汇集网站', link: 'https://pansousou.org', logo: 'https://favicon.im/https://pansousou.org/?larger=true', height: '72px' }
])

const softwareItems = ref([
  { name: '软仓', desc: '资源分享平台', link: 'https://www.ruancang.net', logo: 'https://favicon.im/www.ruancang.net?larger=true', height: '72px' },
  { name: '布谷', desc: '布谷资源分享', link: 'http://www.bugu188.top', logo: 'https://favicon.im/www.ruancang.net?larger=true', height: '72px' },
  { name: '华军软件园', desc: '老牌软件下载站', link: 'https://www.onlinedown.net', logo: 'https://www.onlinedown.net/favicon.ico', height: '72px' },
  { name: '太平洋下载', desc: '软件游戏下载平台', link: 'https://dl.pconline.com.cn', logo: 'https://dl.pconline.com.cn/favicon.ico', height: '72px' },
  { name: 'ZOL下载', desc: '软件下载基地', link: 'https://xiazai.zol.com.cn', logo: 'https://xiazai.zol.com.cn/favicon.ico', height: '72px' },
  { name: 'GitHub', desc: '开源软件托管平台', link: 'https://github.com', logo: 'https://github.com/favicon.ico', height: '72px' },
  { name: 'SourceForge', desc: '开源软件下载平台', link: 'https://sourceforge.net', logo: 'https://sourceforge.net/favicon.ico', height: '72px' },
  { name: 'MSDN我告诉你', desc: 'Windows系统镜像下载', link: 'https://msdn.itellyou.cn', logo: 'https://msdn.itellyou.cn/favicon.ico', height: '72px' }
])

const movieItems = ref([
  { name: '茶杯狐', desc: '影视资源聚合搜索', link: 'https://www.cupfox.app', logo: 'https://favicon.im/www.cupfox.app?larger=true', height: '72px' },
  { name: '电影天堂', desc: '电影电视剧下载', link: 'https://www.dytt89.com', logo: 'https://favicon.im/www.dytt89.com?larger=true', height: '72px' },
  { name: 'LIBVIO', desc: '在线影视观看', link: 'https://www.libvio.me', logo: 'https://favicon.im/www.libvio.me?larger=true', height: '72px' },
  { name: '555电影', desc: '高清影视在线观看', link: 'https://www.555dy1.com', logo: 'https://favicon.im/www.555dy1.com?larger=true', height: '72px' },
  { name: '厂长资源', desc: '影视资源分享', link: 'https://www.czspp.com', logo: 'https://favicon.im/www.czspp.com?larger=true', height: '72px' },
  { name: '在线之家', desc: '影视在线观看', link: 'https://www.zxzjhd.com', logo: 'https://favicon.im/www.zxzjhd.com?larger=true', height: '72px' },
  { name: '低端影视', desc: '影视在线观看', link: 'https://ddys.art', logo: 'https://favicon.im/ddys.art?larger=true', height: '72px' },
])

// 动态调整网格布局
const updateGridLayout = () => {
  const toolContainers = document.querySelectorAll('.tools-grid');
  const blogContainers = document.querySelectorAll('.blogs-grid');
  const panContainers = document.querySelectorAll('.pan-grid');
  const softwareContainers = document.querySelectorAll('.software-grid');
  const movieContainers = document.querySelectorAll('.movie-grid');

  const width = window.innerWidth;
  let columns = 1;

  if (width >= 1536) columns = 6; // 2xl
  else if (width >= 1280) columns = 5; // xl
  else if (width >= 1024) columns = 4; // lg
  else if (width >= 768) columns = 3; // md
  else if (width >= 640) columns = 2; // sm

  toolContainers.forEach(container => {
    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  });

  blogContainers.forEach(container => {
    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  });

  panContainers.forEach(container => {
    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  });

  softwareContainers.forEach(container => {
    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  });

  movieContainers.forEach(container => {
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

<style scoped>
.nav-card {
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 12px 16px;
  transition: all 0.3s ease;
  text-decoration: none;
  display: block;
  border: 1px solid transparent;
}

.nav-card:hover {
  border-color: #4ade80;
  box-shadow: 0 0 20px rgba(74, 222, 128, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.card-content {
  display: flex;
  align-items: center;
  gap: 12px;
  height: 100%;
}

.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 100%;
  flex-shrink: 0;
}

.nav-icon {
  width: 32px;
  height: 32px;
  border-radius: 6px;
  object-fit: cover;
  display: block;
}

.text-content {
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.nav-title {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
  color: var(--vp-c-text-1);
  line-height: 1.2;
}

.nav-desc {
  font-size: 12px;
  color: var(--vp-c-text-2);
  line-height: 1.4;
  margin: 0;
}

.nav-update {
  font-size: 11px;
  color: var(--vp-c-text-3);
  line-height: 1.2;
  margin-top: 4px;
}
</style>
