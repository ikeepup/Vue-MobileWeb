<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="list in newsList" :key="list.id">
        <a :href="`#/home/newsinfo/${list.id}`">
          <img class="mui-media-object mui-pull-left" :src="list.img_url">
          <div class="mui-media-body">
            <h1>{{list.title}}</h1>
            <p class="mui-ellipsis">
              <span>发表时间:{{ list.add_time | toTime }}</span>
              <span>点击: {{ list.click }}次</span>
            </p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    this.$http.get('/api/getnewslist').then(res => {
      this.newsList = res.data.message
    })
  },
  data() {
    return {
      newsList: []
    }
  }
}
</script>

<style lang="scss" scoped>
.mui-table-view {
  .mui-table-view-cell {
    a {
      img.mui-media-object {
        line-height: 42px;
        max-width: 42px;
        height: 42px;
      }
      .mui-media-body {
        h1 {
          font-size: 14px;
        }
        p {
          font-size: 12px;
          color: #226aff;
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
}
</style>
