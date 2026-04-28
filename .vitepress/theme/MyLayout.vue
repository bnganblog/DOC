<script setup>
import DefaultTheme from 'vitepress/theme'
</script>

<template>
  <DefaultTheme.Layout>
    <template #nav-bar-title-after>
      <Badge type="warning" text="beta" />
    </template>
  </DefaultTheme.Layout>
</template>
