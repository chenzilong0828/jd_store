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
      const shopInfo = state.cartList[shopId] || {
        shopName: '', productList: {}
      };// 如果没有存商店，就将商店设为空对象
      let product = shopInfo.productList[productId] // 获取商品信息
      if (!product) { // 如果没有商品信息，就将商品的数量设为0
        product = productInfo
        product.count = 0
      }
      product.count = product.count + num;// 商品的数量 = 商品数量 +（+1 或者 -1）
      (num > 0) && (product.checked = true); // 如果商品的数量大于0，则选中
      (product.count < 0) && (product.count = 0); // 如果商品的数量小于0，则默认商品的数量为0
      shopInfo.productList[productId] = product
      state.cartList[shopId] = shopInfo
    },
    changeItemCheck(state, payload) {
      const { shopId, productId } = payload
      const product = state.cartList[shopId].productList[productId]
      product.checked = !product.checked;
    },
    handleCartClear(state, payload) {
      const { shopId } = payload
      state.cartList[shopId].productList = {}
    },
    handleCartAllCheck(state, payload) {
      const { shopId, allChecked } = payload
      const product = state.cartList[shopId].productList
      const result = !allChecked.value
      for (const key in product) {
        product[key].checked = result
      }
    },
    changeShopName(state, payload) {
      const { shopId, shopName } = payload;
      const productInfo = state.cartList[shopId] || { shopName: '', productList: {} }
      productInfo.shopName = shopName
      state.cartList[shopId] = productInfo
    }
  },
  actions: {
  },
  modules: {
  }
})
