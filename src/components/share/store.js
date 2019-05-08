export default {
  namespaced: true,
  state: {
    quantity: 1,
    shopCarList: []
  },
  getters: {
    ids(state) {
      let arr = []
      state.shopCarList.forEach(item => {
        arr.push(item.goodsId)
      })
      let str = arr.join(',')
      return str
    },
    sumQuantity(state) {
      if (!state.shopCarList.length) {
        return 0
      } else {
        let sum = 0
        state.shopCarList.forEach(item => {
          sum += item.quantity
        })
        return sum
      }
    },
    selectedShopCarList(state) {
      return state.shopCarList.filter(item => item.selected)
    },
    sumMoney(state, getters) {
      if (!getters.selectedShopCarList.length) {
        return 0
      } else {
        let sum = 0
        getters.selectedShopCarList.forEach(item => {
          sum += item.goodsPrice * item.quantity
        })
        return sum
      }
    },
    selectedSumQuantity(state, getters) {
      if (!getters.selectedShopCarList.length) {
        return 0
      } else {
        let sum = 0
        getters.selectedShopCarList.forEach(item => {
          sum += item.quantity
        })
        return sum
      }
    }
  },
  mutations: {
    setOne(state) {
      state.quantity = 1
    },
    addQuan(state, target) {
      if (target instanceof Object) {
        state.quantity++
      } else {
        state.shopCarList[target].quantity++
      }
    },
    minQuan(state, target) {
      if (target instanceof Object) {
        if (state.quantity <= 1) return
        state.quantity--
      } else {
        if (state.shopCarList[target].quantity <= 1) return
        state.shopCarList[target].quantity--
      }
    },
    addGood(state, newGood) {
      const index = state.shopCarList.findIndex(item => {
        return item.goodsId === newGood.goodsId
      })
      if (index >= 0) {
        state.shopCarList[index].quantity += newGood.quantity
      } else {
        state.shopCarList.push(newGood)
      }
    },
    toggleSelect(state, id) {
      const index = state.shopCarList.findIndex(item => item.goodsId === id)
      state.shopCarList[index].selected = !state.shopCarList[index].selected
    },
    removeGoods(state, id) {
      let index = state.shopCarList.findIndex(item => item.goodsId === id)
      state.shopCarList.splice(index, 1)
    }
  }
}
