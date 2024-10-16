<template>
  <div class="landing-page-style">
    <div v-for="(item, index) in photoArray" :key="item.key" class="photo">
      <template v-if="index === 0">
        <img :src="getImage(item.name)" alt="" class="rectangle"/>
        <div class="top-part">
          <p class="white-font">{{item.title}}</p>
          <el-button @click="jumpToPage(item.page)">
            Shop Now
          </el-button>
        </div>
      </template>
      <template v-else>
        <img :src="getImage(item.name)" alt="" class="circle"/>
        <p class="black-font">{{item.title}}</p>
        <el-button @click="jumpToPage(item.page)">
          Shop Now
        </el-button>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">

const photoArray = [
  {
    key: 1,
    title: 'Magic Mosaic',
    page: 'magicmosaic',
    name: 'first'
  },
  {
    key: 2,
    title: 'Fementation',
    page: 'fementation',
    name: 'second'
  },
  {
    key: 3,
    title: 'Skin and Bacteria',
    page: 'skinandbacteria',
    name: 'third'
  }
]
const router = useRouter()
const jumpToPage = (page: string) => {
  router.push({
    path: `/${page}`
  })
}

const getImage = (name: string) => {
  return new URL(`/src/assets/image/landing/${name}.png`, import.meta.url).href
}
</script>

<style scoped lang="less">
.landing-page-style {
  >:nth-child(2) {
    background: #E3ECED;
  }
  >:nth-child(3) {
    background: #EBEBEB;
  }
  .photo {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      vertical-align: middle;
    }
    .rectangle {
      width: 100%;
    }
    .top-part {
      position: absolute;
      bottom: 10px;
      text-align: center;
    }
    .circle {
      height: 60vh;
      margin-top: 20px;
    }
    :deep(.el-button) {
      margin-bottom: 12px;
      padding: 14px 20px;
      border: 3px solid #333;
    }
    .white-font {
      color: #FFFFFF;
      font-family: "Broadway", sans-serif;
    }
    .black-font {
      color: #333333;
      font-family: "Broadway", sans-serif;
    }
    p {
      margin: 6px 0;
      line-height: 1;
      font-size: 30px;
      font-weight: 600;
    }

  }
}
</style>
