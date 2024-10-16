<template>
  <div class="skin-and-bacteria">
    <div class="part">
      <img :src="getImage('left')" alt="" class="left">
    </div>
    <div class="part">
      <img :src="getImage('center')" alt="" class="center">
    </div>
    <div class="part text-container">
      <p class="title">Skin and Bacteria</p>
      <p class="content">Inspired by the thick, varied, and rich shapes of microbiological communities, the artwork consists of a collection of earrings shaped like bacteria. I created earrings using a 3D printing pen, heat shrink sheet, wool felt, wool ball, UV glue, and more materials. Every pair of earrings has a freely interchangeable pendant. The placement and arrangement of pendants may be changed to suit your tastes and add to the fun and unique wearing experience. The pieces are displayed using pictures of the models, emphasising the earrings' distinctive form and the visual traits of the bacterial world.</p>
    </div>
  </div>
</template>

<script setup lang="ts">


const getImage = (name: string) => {
  return new URL(`/src/assets/image/skin/${name}.png`, import.meta.url).href
}

</script>

<style scoped lang="less">
.skin-and-bacteria {
  width: 100%;
  height: 100%;
  display: flex;
  background: #E5ECEF;
  .part {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .left {
    width: 80%;
  }
  .center {
    width: 94%;
  }
  .text-container {
    display: flex;
    flex-direction: column;
    .title {
      margin-bottom: 20px;
      font-size: 3vw;
      font-family: "Broadway", sans-serif;
    }
    .content {
      width: 20vw;
      margin-top: 0;
      text-align: center;
      font-family: "LTSoul", sans-serif;
      font-size: 1vw;
      line-height: 1.2;
      font-weight: 600;
    }
  }
}
</style>
