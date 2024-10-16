<template>
  <div class="home-page-style">
    <div class="photo" v-for="(item, index) in photoArray" :key="item.key">
      <template v-if="index !== 1">
        <img :src="getImage(item.name)" alt="" class="photo-rectangle">
      </template>
      <template v-else>
        <img :src="getImage(item.name)" alt="" class="photo-circle" @click="clickPhoto">
      </template>
    </div>
    <div class="page-title">Darleen</div>
  </div>
</template>

<script setup lang="ts">
const photoArray = [
  {
    key: 1,
    name: 'left'
  },
  {
    key: 2,
    name: 'center'
  },
  {
    key: 3,
    name: 'right'
  },
]

onMounted(() => {
})

const clickPhoto = () => {
  let delay = 0.3;
  let revealText = document.querySelector(".reveal");
  // @ts-ignore
  let letters = revealText.textContent.split("");
  // @ts-ignore
  revealText.textContent = "";
  let middle = letters.filter(e => e !== " ").length / 2;
  letters.forEach((letter, i) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.style.animationDelay = `${delay + Math.abs(i - middle) * 0.1}s`;
    // @ts-ignore
    revealText.append(span);
  });
}

const getImage = (name: string) => {
  return new URL(`/src/assets/image/homepage/${name}.png`, import.meta.url).href
}
</script>

<style scoped lang="less">
.home-page-style {
  position: relative;
  height: 100vh;
  display: flex;
  overflow-x: hidden;
  >:nth-child(-n + 3) {
    background: #E5ECEF;
  }
  .photo {
    flex: 1;
    height: 100%;
    text-align: center;
    img {
      width: 100%;
    }
    .photo-circle {
      width: 96%;
      margin-top: 14px;
    }
    .photo-info {
      background: #FFFFFF;
    }
  }
}
.page-title {
  position: absolute;
  color: #FFFFFF;
  left: -1.5vw;
  top: 48vh;
  font-size: 24vw;
  font-family: "Broadway", sans-serif;
}
</style>
