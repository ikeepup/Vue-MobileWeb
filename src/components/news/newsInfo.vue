<template>
  <div class="newsinfo-container">
    <h3 class="title">{{newsInfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间:{{ newsInfo.add_time | toTime }}</span>
      <span>点击: {{ newsInfo.click }}次</span>
    </p>
    <hr>
    <div class="content" v-html="newsInfo.content"></div>
    <comment></comment>
  </div>
</template>

<script>
export default {
  props: ['id'],
  created() {
    this.$http.get(`/api/getnew/${this.id}`).then(res => {
      this.newsInfo = res.data.message[0]
    })
  },
  data() {
    return {
      newsInfo: {}
    }
  }
}
</script>

<style lang="scss" scoped>
.newsinfo-container {
  overflow: hidden;
  margin-top: 40px;
  margin-bottom: 50px;
  padding: 0 4px;

  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
    line-height: 1;
  }
  .subtitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
}
</style>
