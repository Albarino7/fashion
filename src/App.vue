<template>
  <router-view #default="{ route, Component }">
    <keep-alive>
      <component :is="Component" :key="route.name" v-if="route.meta.keeAlive"/>
    </keep-alive>
    <component :is="Component" :key="route.name" v-if="!route.meta.keeAlive"/>
  </router-view>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
