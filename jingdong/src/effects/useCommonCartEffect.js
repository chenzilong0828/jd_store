import { useStore } from "vuex";
import { computed } from "vue";
/* 购物车相关逻辑代码 */
export const useCartEffect = (shopId) => {
  const store = useStore();
  const cartList = store.state.cartList;
  const changeCartCount = (shopId, productId, productInfo, num, shopName) => {
    /* 这里，引入了vuex中的store,然后用store.commit('在store中提前定义好changeCartCount方法'，后面跟要带进去的参数) */
    store.commit("changeCartCount", { shopId, productId, productInfo, num });
    store.commit("changeShopName", { shopId, shopName });
  };
  const shopName = computed(() => {
    const shopName = cartList[shopId].shopName || "";
    return shopName;
  });

  const productList = cartList[shopId]?.productList;
  const total = computed(() => {
    let count = 0; // 数量
    let money = 0; // 总金额
    if (productList) {
      for (const i in productList) {
        count += productList[i].count;
        if (productList[i].checked) {
          money += productList[i].count * productList[i].price;
        }
      }
      money = money.toFixed(2);
    }
    return { count, money };
  });
  return { total, shopName, productList, cartList, changeCartCount };
};
