<template>
  <div class="fementation-page">
    <div class="text-container">
      <p class="title">Fementation</p>
      <p class="content">With the theme of fermentation, the clothing shows the changes and growth of natural substances in the fermentation process through interesting fabrics and layers.</p>
    </div>
    <img :src="getImage('left')" alt="" class="left"/>
    <img :src="getImage('right')" alt="" class="right"/>
  </div>
</template>

<script setup lang="ts">
const getImage = (name: string) => {
  return new URL(`/src/assets/image/fementation/${name}.png`, import.meta.url).href
}
</script>

<style scoped lang="less">
.fementation-page {
  position: relative;
  width: 100%;
  height: 100%;
  background: #EBEBEB;
  .text-container {
    padding: 300px 0 0 40px;
    .title {
      margin: 0 0 10px;
      font-size: 3vw;
      font-family: "Broadway", sans-serif;
    }
    .content {
      width: 30vw;
      font-size: 1vw;
      line-height: 1.2;
      font-weight: 600;
      font-family: "LTSoul", sans-serif;
    }
  }
  .left {
    position: absolute;
    bottom: 20px;
    right: 38%;
    height: 85%;
  }
  .right {
    position: absolute;
    bottom: 0;
    right: 80px;
    height: 75%;
  }
}
</style>
