<template>
  <div>
    <!-- 商品列表项 -->
    <div v-if="shopCarInfo.length">
      <div class="mui-card" v-for="(goods,i) in shopCarList" :key="getKey(goods.goodsId)">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch :value="goods.selected" @change="toggleSelect(goods.goodsId)"></mt-switch>
            <img
              :src="(shopCarInfo.find(each =>  { 
                return goods.goodsId===each.id})).thumb_path"
              alt
            >
            <div class="info">
              <h1>
                {{(shopCarInfo.find(each => {
                return goods.goodsId===each.id})).title}}
              </h1>
              <div>
                <span class="red">¥{{goods.goodsPrice}}</span>
                <div class="mui-numbox">
                  <button class="mui-btn mui-numbox-btn-minus" type="button" @click="minQuan(i)">-</button>
                  <input class="mui-numbox-input" type="number" :value="goods.quantity">
                  <button class="mui-btn mui-numbox-btn-plus" type="button" @click="addQuan(i)">+</button>
                </div>
                <a href="#" @click="removeGoods(goods.goodsId)">删除</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 结算区 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner jiesuan">
          <div class="left">
            <p>总计（不含运费）</p>
            <p>
              已勾选商品
              <span class="red">{{selectedSumQuantity}}</span>
              件， 总价
              <span class="red">￥{{sumMoney}}</span>
            </p>
          </div>
          <mt-button type="danger">去结算</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
export default {
  created() {
    if (this.ids) {
      this.$http.get(`/api/goods/getshopcarlist/${this.ids}`).then(res => {
        this.shopCarInfo = res.data.message
      })
    }
  },
  data() {
    return {
      shopCarInfo: []
    }
  },
  computed: {
    ...mapState('goods', ['shopCarList']),
    ...mapGetters('goods', ['sumMoney', 'selectedSumQuantity', 'ids'])
  },
  methods: {
    ...mapMutations('goods', ['toggleSelect', 'addQuan', 'minQuan']),
    removeGoods(id) {
      let index = this.shopCarInfo.findIndex(item => item.id === id)
      this.shopCarInfo.splice(index, 1)
      this.$store.commit('goods/removeGoods', id)
    },
    getKey(id) {
      return this.shopCarInfo.findIndex(item => item.id === id)
    }
  }
}
</script>

<style lang="scss" scoped>
.red {
  color: red;
  font-weight: bold;
  font-size: 16px;
}
.mui-card {
  margin: 10px;
}
.mui-card-content-inner {
  display: flex;
  img {
    width: 60px;
    height: 60px;
  }
  .info {
    h1 {
      font-size: 13px;
    }
    .mui-numbox {
      height: 25px;
    }
  }
}
</style>
