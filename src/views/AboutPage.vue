<template>
  <div class="about-page-style">
    <div class="part">
      <img :src="getImage('top')" alt="" class="top"/>
      <img :src="getImage('bottom')" alt="" class="bottom"/>
    </div>
    <div class="part">
      <p class="title">About&Contact</p>
      <div class="content">
        <div class="text-content">
          <p>Acknowledgment of Country</p>
          <p>I, Darleen, respectfully acknowledge the Wurundjeri people as the Traditional Custodians of the land on which I live, work, and study, the lands of the Eastern Kulin Nation.</p>
          <p>I pay my respects to the Woiwurrung language group, and to their Elders past, present, and emerging, as well as Elders of other communities.</p>
          <p>I am grateful for their protection of this beautiful land and recognize the deep, enduring connection Indigenous Australians have with their land and waters.</p>
          <p>As an RMIT fashion student, I am committed to learning about and respecting their culture, and to caring for this land, its resources, and environment.</p>
        </div>
        <div class="text-content">
          <p>Hi! I’m Darleen from Guizhou, China. My life experiences are the main inspiration for my creations, and I love capturing small details in my work.</p>
          <p>Growing up, I learned about Chinese liquor-making from my dad, which sparked my interest in fermentation, especially the sorghum fermentation process used in liquor production.</p>
          <p>My project "Magic Mosaic" blends influence from both natural and urban environments.</p>
          <p>One day, when I noticed the wrinkles on skin, I had a sudden realization about the microorganisms living on it, which inspired me further.</p>
          <p>Oh, and I have a super cute cat!</p>
          <p>Email: 2237755583@qq.com</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const getImage = (name: string) => {
  return new URL(`/src/assets/image/about/${name}.JPG`, import.meta.url).href
}
</script>

<style scoped lang="less">
.about-page-style {
  display: flex;
  >:nth-child(2) {
    padding-left: 10px;
  }
}
.part {
  flex: 1;
  img {
    width: 100%;
    vertical-align: middle;
  }
  .bottom {
    margin-top: 10px;
  }
  .title {
    margin-top: 100px;
    font-size: 40px;
    text-align: center;
    font-family: "Broadway", sans-serif;
  }
  .content {
    padding: 0 20px;
    font-family: 'LTSoul', sans-serif;
    font-size: 1.3vw;
    line-height: 1.2;
    .text-content {
      margin-bottom: 20px;
      p {
        margin: 4px 0;
      }
    }
  }
}
</style>
