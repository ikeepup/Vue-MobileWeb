<template>
  <div>
    购买数量：
    <div class="mui-numbox" data-numbox-min="1" style="height:25px;">
      <button class="mui-btn mui-btn-numbox-minus" type="button" @click="minQuan">-</button>
      <input id="test" class="mui-input-numbox" type="number" :value="quantity" readonly>
      <button class="mui-btn mui-btn-numbox-plus" type="button" @click="addQuan">+</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  computed: {
    quantity() {
      return this.$store.state.goods.quantity
    }
  },
  methods: {
    ...mapMutations('goods', ['addQuan', 'minQuan'])
  }
}
</script>

<style lang="scss" scoped>
</style>
