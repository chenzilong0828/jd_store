import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList: {
      // shopId:{
      //   productId:{
      //     product
      //   }
      // }
    }
  },
  getters: {
  },
  mutations: {
    changeCartCount(state, payload) {
      const { shopId, productId, productInfo, num } = payload
      let shopInfo = state.cartList[shopId];
      if (!shopInfo) { shopInfo = {} }
      let product = shopInfo[productId]
      if (!product) {
        product = productInfo
        product.count = 0
      }
      product.count += num
      if (product.count < 0) {
        product.count = 0
      }
      if (num > 0) { product.checked = false }
      shopInfo[productId] = product
      state.cartList[shopId] = shopInfo
    }
  },
  actions: {
  },
  modules: {
  }
})
