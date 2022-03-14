<template>
  <div class="cart">
    <div class="cart__img">
      <div class="iconfont cart__img__iconfont">&#xe6ba;</div>
      <div class="cart__img__redDot">1</div>
    </div>
    <div class="cart__money">
      <span class="cart__money__all">总计：</span>
      <span class="cart__money__count">&yen;123</span>
    </div>
    <div class="cart__goSettlement">去结算</div>
  </div>
</template>
<script>
export default {
  name: "CartView",
  components: {},
};
</script>
<style lang="scss" scoped>
@import "../../style/viriables.scss";
.cart {
  border-top: 0.01rem solid $content-bg;
  position: absolute;
  height: 0.49rem;
  line-height: 0.49rem;
  bottom: 0;
  display: flex;
  width: 100%;
  left: 0;
  right: 0;
  &__img {
    width: 0.76rem;
    position: relative;
    &__iconfont {
      color: #0091ff;
      font-size: 0.26rem;
      text-align: center;
    }
    &__redDot {
      position: absolute;
      background: #e93b3b;
      width: 0.2rem;
      height: 0.2rem;
      border-radius: 50%;
      line-height: 0.2rem;
      color: $white-bg;
      font-size: 0.2rem;
      text-align: center;
      transform: scale(80%);
      top: 0.04rem;
      right: 0.04rem;
    }
  }
  &__money {
    padding-left: 0.1rem;
    font-size: 0.12rem;
    color: $content-fontcolor;
    flex: 1;
    align-items: center;
    display: flex;
    &__all {
    }
    &__count {
      font-size: 0.18rem;
      color: #e93b3b;
    }
  }
  &__goSettlement {
    flex: 1;
    width: 0.1rem;
    text-align: center;
    font-size: 0.14rem;
    color: $white-bg;
    background: #4fb0f9;
  }
}
</style>
