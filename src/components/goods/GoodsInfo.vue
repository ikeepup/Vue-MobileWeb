<template>
  <div class="goodsinfo-container">
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div>
            <mt-swipe :auto="4000">
              <mt-swipe-item v-for="(item,i) in lunbotu" :key="i">
                <img :src="item.src" alt>
              </mt-swipe-item>
            </mt-swipe>
          </div>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">{{ goodsinfo.title }}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：
            <del>￥{{ goodsinfo.market_price }}</del>&nbsp;&nbsp;销售价：
            <span class="now_price">￥{{ goodsinfo.sell_price }}</span>
          </p>
          <controller></controller>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addGoods">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{ goodsinfo.goods_no }}</p>
          <p>库存情况：{{ goodsinfo.stock_quantity }}件</p>
          <p>上架时间：{{ goodsinfo.add_time }}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="gopingjia(id)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      goodsinfo: {},
      lunbotu: []
    }
  },
  created() {
    this.getinfo()
    this.getLunbotu()
    this.$store.commit('goods/setOne')
  },
  methods: {
    async getLunbotu() {
      const { data: dt } = await this.$http.get('/api/getthumimages/' + this.id)
      if (dt.status === 0) {
        this.lunbotu = dt.message
      }
    },
    async getinfo() {
      const { data: dt } = await this.$http.get('/api/goods/getinfo/' + this.id)

      if (dt.status === 0) {
        this.goodsinfo = dt.message[0]
      }
    },
    goDesc(id) {
      this.$router.push(`/home/goodsdesc/${id}`)
    },
    gopingjia(id) {
      this.$router.push(`/home/comment/${id}`)
    },
    addGoods() {
      let addGoodsInfo = {
        goodsId: this.goodsinfo.id,
        goodsPrice: this.goodsinfo.sell_price,
        quantity: this.$store.state.goods.quantity,
        selected: true
      }
      this.$store.commit('goods/addGood', addGoodsInfo)
    }
  }
}
</script>

<style lang="scss" scoped>
.goodsinfo-container {
  background-color: #eee;
  overflow: hidden;
  .mint-swipe {
    height: 200px;

    .mint-swipe-item {
      text-align: center;

      img {
        height: 100%;
      }
    }
  }

  .full {
    width: 100%;
  }
  .mui-card-footer {
    display: block;
    button {
      margin: 10px 0;
    }
  }
}
.now_price {
  color: red;
  font-weight: 700;
}
</style>
