<template>
  <div class="photoinfo-container">
    <h2>{{ photoInfo.title }}</h2>
    <p class="toc">
      <span>发表时间：{{ photoInfo.add_time | toTime }}</span>
      <span>点击：{{ photoInfo.click }}次</span>
    </p>
    <div class="pic">
      <img :src="v.src" v-for="(v,i) in photoPic" :key="i">
    </div>
    <p class="brief">{{ photoInfo.content }}</p>

    <comment></comment>
  </div>
</template>

<script>
export default {
  created() {
    this.getPhotoInfo()
    this.getPhotoPic()
  },
  methods: {
    async getPhotoInfo() {
      const res = await this.$http.get(`/api/getimageInfo/${this.id}`)
      this.photoInfo = res.data.message[0]
      // console.log(res)
    },
    async getPhotoPic() {
      const res = await this.$http.get(`/api/getthumimages/${this.id}`)
      this.photoPic = res.data.message
      // console.log(res)
    }
  },
  data() {
    return {
      id: this.$route.params.id,
      photoInfo: {},
      photoPic: []
    }
  }
}
</script>

<style lang="scss" scoped>
.photoinfo-container {
  padding: 40px 5px 0;
  h2 {
    color: #26a2ff;
    font-size: 14px;
    text-align: center;
    margin: 15px 0;
  }
  .toc {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    font-size: 14px;
    padding-bottom: 10px;
  }
  .brief {
    color: #000;
  }
  .pic img {
    width: 100px;
    height: 100px;
    margin: 10px 10px;
  }
}
</style>
