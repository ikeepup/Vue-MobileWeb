<template>
    <div class="goodsinfo-container">
       <!-- 商品轮播图区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
  <div>
    <mt-swipe :auto="4000">
      <!-- 在组件中，使用v-for循环的话，一定要使用 key -->
      <!-- 将来，谁使用此 轮播图组件，谁为我们传递 lunbotuList -->
      <!-- 此时，lunbotuList 应该是 父组件向子组件传值来设置 -->
      <mt-swipe-item v-for="(item,i) in lunbotu" :key="i">
        <img :src="item.src" alt>
      </mt-swipe-item>
    </mt-swipe>
  </div>

        </div>
      </div>
    </div>
       <!-- 商品购买区域 -->
   <div class="mui-card">
      <div class="mui-card-header">{{ goodsinfo.title }}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
              <p class="price">
            市场价：<del>￥{{ goodsinfo.market_price }}</del>&nbsp;&nbsp;销售价：<span class="now_price">￥{{ goodsinfo.sell_price }}</span>
          </p>
          <p >购买数量：
                <div class="mui-numbox" data-numbox-min='1' style="height:25px;">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" value="1" readonly />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
   </p>
                    <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small">加入购物车</mt-button>
            <!-- 分析： 如何实现加入购物车时候，拿到 选择的数量 -->
            <!-- 1. 经过分析发现： 按钮属于 goodsinfo 页面， 数字 属于 numberbox 组件 -->
            <!-- 2. 由于涉及到了父子组件的嵌套了，所以，无法直接在 goodsinfo 页面zhong 中获取到 选中的商品数量值-->
            <!-- 3. 怎么解决这个问题：涉及到了 子组件向父组件传值了（事件调用机制） -->
            <!-- 4. 事件调用的本质： 父向子传递方法，子调用这个方法， 同时把 数据当作参数 传递给这个方法 -->
          </p>
        </div>
      </div>
    </div>
        <!-- 商品参数区域 -->
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
        <mt-button type="danger" size="large" plain >商品评论</mt-button>
      </div>
    </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id:87,
            // id:this.$route.parmas.id,
            goodsinfo:{},
            // 轮播图
            lunbotu:[]
        }
    },
    created() {
        this.getinfo()
        this.getLunbotu()
    },
    methods: {
        // 获取列表轮播图
        async getLunbotu() {
        const {data:dt} = await this.$http.get('/api/getthumimages/' + this.id)
        console.log(dt)
        if(dt.status === 0){
           this.lunbotu = dt.message
        }
        // console.log(this.lunbotu)
        },
        // 获取商品信息
        // /api/goods/getinfo/:id
       async getinfo() {
        const {data:dt} =  await this.$http.get('/api/goods/getinfo/' + this.id)

        if(dt.status === 0){
            this.goodsinfo = dt.message[0]
            // console.log(this.goodsinfo)
        }
        
        },
        goDesc(id){
            this.$router.push({ name: "goodsdesc", params: { id } });
        }
    }
}
</script>

<style lang="scss" scoped>
.goodsinfo-container{
      background-color: #eee;
      overflow: hidden;
      .mint-swipe {
  height: 200px;

  .mint-swipe-item {
    text-align: center;

    img {
      // width: 100%;
      height: 100%;
    }
  }
}

.full {
  width: 100%;
}
        .mui-card-footer{
            display:block;
            button{
                margin: 10px 0;
            }
        }
}

</style>
