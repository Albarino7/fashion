<template>
  <div class="magic-mosaic">
    <p class="page-title">Magic Mosaic</p>
    <div class="photo-container">
      <div v-for="item in photoArray" :key="item.key" class="photo">
        <img :src="getImage(item.name)" alt="" :class="item.key === 2 ? 'center' : 'other'"/>
        <p :class="item.key === 2 ? 'img-info' : 'img-aside'">{{item.text}}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const photoArray = [
  {
    key: 1,
    name: 'left',
    text: 'The work focuses on the urban landscape and considers what the world would be like without the rise of human civilization.'
  },
  {
    key: 2,
    name: 'center',
    text: 'By observing the work of artist Ememem restoring roads with colored mosaics, I explore how nature can be combined with urban Spaces.'
  },
  {
    key: 3,
    name: 'right',
    text: 'My creation aims to reflect on the relationship between aesthetics and nature of the city.'
  }
]

const getImage = (name: string) => {
  return new URL(`/src/assets/image/magic/${name}.jpg`, import.meta.url).href
}
</script>

<style scoped lang="less">
.magic-mosaic {
  width: 100%;
  height: 100%;
  background: #E3ECED;
  .page-title {
    margin: 0;
    padding: 10px 0 10px 30px;
    font-size: 3vw;
    font-family: "Broadway", sans-serif;
  }
  .photo-container {
    width: 100%;
    display: flex;
    .photo {
      flex: 1;
      .other {
        width: calc(100% - 60px);
        margin-left: 30px;
      }
      .center {
        width: 100%;
      }
    }
    .img-info {
      margin: 0;

      font-family: "LTSoul", sans-serif;
      font-size: 1vw;
      line-height: 1.2;
      font-weight: 600;
    }
    .img-aside {
      width: calc(100% - 60px);
      .img-info();
      margin-left: 30px;
      font-family: "LTSoul", sans-serif;
      font-size: 1vw;
      line-height: 1.2;
      font-weight: 600;
    }
  }
}
</style>
