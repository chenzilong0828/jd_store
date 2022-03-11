<template>
  <div class="wrapper">
    <div class="wrapper__search">
      <div class="wrapper__search__back iconfont">&#xe600;</div>
      <div class="wrapper__search__content">
        <div class="wrapper__search__content__icon iconfont">&#xe62d;</div>
        <input type="text" class="wrapper__search__content__input" />
      </div>
    </div>
    <ShopInfo :item="item" :defaultLine="false"></ShopInfo>
  </div>
</template>
<script>
import ShopInfo from "../../components/shopInfo";
export default {
  name: "ShopView",
  components: { ShopInfo },
  setup() {
    const item = {
      _id: "001",
      name: "沃尔玛",
      imgUrl:
        "https://img1.baidu.com/it/u=3992278295,3138926233&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500",
      sales: 10000,
      expressLimit: 0,
      expressPrice: 5,
      slogan: "Vip尊贵会员满19减5运费",
    };
    return { item };
  },
};
</script>
<style lang="scss" scoped>
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
      background: #f5f5f5;
      border-radius: 0.16rem;
      display: flex;
      &__icon {
        color: #b7b7b7;
        line-height: 0.32rem;
        width: 0.24rem;
        font-size: 0.2rem;
        padding: 0 0.06rem;
      }
      &__input {
        flex: 1;
        border: 0;
        outline: none;
        background: #f5f5f5;
        margin-right: 0.1rem;
        font-size: 0.14rem;
        color: #333333;
        line-height: 0.32rem;
      }
    }
  }
}
</style>
