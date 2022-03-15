import { useStore } from 'vuex'
import { toRefs } from 'vue'
/* 购物车相关逻辑代码 */
export const useCartEffect = () => {
	const store = useStore();
	const { cartList } = toRefs(store.state);
	const changeCartCount = (shopId, productId, productInfo, num, shopName) => {
		/* 这里，引入了vuex中的store,然后用store.commit('在store中提前定义好changeCartCount方法'，后面跟要带进去的参数) */
		store.commit("changeCartCount", { shopId, productId, productInfo, num });
		store.commit("changeShopName", { shopId, shopName })
	};
	return { cartList, changeCartCount };
}
