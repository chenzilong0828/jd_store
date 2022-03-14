<template>
  <div class="wrapper">
    <div class="wrapper__search">
      <div @click="handleBackClick" class="wrapper__search__back iconfont">
        &#xe600;
      </div>
      <div class="wrapper__search__content">
        <div class="wrapper__search__content__icon iconfont">&#xe62d;</div>
        <input type="text" class="wrapper__search__content__input" />
      </div>
    </div>
    <ShopInfo :item="data.item" :defaultLine="false"></ShopInfo>
    <ShopContent></ShopContent>
    <Cart></Cart>
  </div>
</template>
<script>
import { reactive } from "vue";
import { get } from "../../utils/request.js";
import ShopInfo from "../../components/shopInfo";
import ShopContent from "./Content";
import Cart from "./Cart";
import { useRouter, useRoute } from "vue-router";
/* 返回到上页的代码逻辑 */
export const routerBackEffect = () => {
  const router = useRouter();
  const handleBackClick = () => {
    router.back();
  };
  return { handleBackClick };
};
/* 获取页面店铺详情相关代码逻辑 */
export const getStoreDetailEffect = (shopId) => {
  const data = reactive({
    item: {},
  });
  const getStoreItem = async () => {
    const result = await get(`/store/item/${shopId}`);
    if (result?.success && result?.data) {
      data.item = result.data[0];
    }
  };
  return { data, getStoreItem };
};
export default {
  name: "ShopView",
  components: { ShopInfo, ShopContent, Cart },
  setup() {
    const route = useRoute();
    const shopId = route.params.id;
    const { data, getStoreItem } = getStoreDetailEffect(shopId);
    const { handleBackClick } = routerBackEffect();
    getStoreItem();
    return { data, handleBackClick };
  },
};
</script>
<style lang="scss" scoped>
@import "../../style/viriables.scss";
.wrapper {
  padding: 0 0.18rem;
  &__search {
    height: 0.32rem;
    padding: 0.12rem 0 0.02rem 0;
    display: flex;
    &__back {
      line-height: 0.32rem;
      color: #b6b6b6;
      font-size: 0.26rem;
      width: 0.32rem;
    }
    &__content {
      flex: 1;
      background: $search-bgcolor;
      border-radius: 0.16rem;
      display: flex;
      &__icon {
        color: #b7b7b7;
        line-height: 0.32rem;
        width: 0.24rem;
        font-size: 0.2rem;
        padding-left: 0.1rem;
      }
      &__input {
        flex: 1;
        border: 0;
        outline: none;
        background: $search-bgcolor;
        margin-right: 0.1rem;
        font-size: 0.14rem;
        color: $content-fontcolor;
        line-height: 0.32rem;
      }
    }
  }
}
</style>
