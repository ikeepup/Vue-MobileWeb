<template>
  <div>
    <!-- 商品列表项 -->
    <div v-if="shopCarList.length">
      <div class="mui-card" v-for="(goods,i) in shopCarInfo" :key="goods.goodId">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch :value="shopCarList[i].selected" @change="toggleSelect(goods.id)"></mt-switch>
            <img :src="goods.thumb_path" alt>
            <div class="info">
              <h1>{{goods.title}}</h1>
              <div>
                <span class="red">¥{{goods.sell_price}}</span>
                <div class="mui-numbox">
                  <button class="mui-btn mui-numbox-btn-minus" type="button" @click="minQuan(i)">-</button>
                  <input class="mui-numbox-input" type="number" :value="shopCarList[i].quantity">
                  <button class="mui-btn mui-numbox-btn-plus" type="button" @click="addQuan(i)">+</button>
                </div>
                <a href="#" @click="removeGoods(goods.id)">删除</a>
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
        console.log(res)
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
