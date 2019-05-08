<template>
  <div class="home-container">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="img in swipeImg" :key="img.id">
        <img :src="img.img" alt>
      </mt-swipe-item>
    </mt-swipe>
    <ul class="mui-table-view mui-grid-9 mui-grid-view">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#/home/newslist">
          <img class="mui-media-object" src="../../images/menu1.png">
          <div class="mui-media-body">新闻资讯</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#/home/photolist">
          <img class="mui-media-object" src="../../images/menu2.png">
          <div class="mui-media-body">图片分享</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#/home/goodslist">
          <img class="mui-media-object" src="../../images/menu3.png">
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#/home/newslist">
          <img class="mui-media-object" src="../../images/menu4.png">
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#/home/newslist">
          <img class="mui-media-object" src="../../images/menu5.png">
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#/home/newslist">
          <img class="mui-media-object" src="../../images/menu6.png">
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    this.$http.get('/api/getlunbo').then(res => {
      this.swipeImg = res.data.message
    })
  },
  data() {
    return {
      swipeImg: []
    }
  }
}
</script>


<style lang="scss">
.home-container {
  .mint-swipe {
    height: 200px;
    .mint-swipe-item {
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
  .mui-table-view {
    background-color: #fff;
    .mui-table-view-cell {
      border: none;
      a {
        .mui-media-object {
          width: 60px;
          height: 60px;
        }
        .mui-media-body {
          font-size: 13px;
        }
      }
    }
  }
}
</style>

