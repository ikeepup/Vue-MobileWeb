<template>
  <div class="goodsdesc-container">
    <h3>{{info.title}}</h3>
    <hr>
    <div class="content" v-html="info.content"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {}
    }
  },
  created() {
    this.getgoodsdesc()
  },
  methods: {
    async getgoodsdesc() {
      const { data: dt } = await this.$http.get(
        '/api/goods/getdesc/' + this.$route.params.id
      )
      if (dt.status === 0) {
        this.info = dt.message[0]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.goodsdesc-container {
  padding: 4px;
  h3 {
    font-size: 16px;
    color: #226aff;
    text-align: center;
    margin: 15px 0;
  }
  .content {
    .gomeImgLoad {
      width: 100%;
    }
  }
}
</style>
