<template>
  <div class="order">
    <div class="order__price">
      实付金额 <b>&yen;{{ total.money }}</b>
    </div>
    <div class="order__btn" @click="() => submitOrderConfirm(true)">
      提交订单
    </div>
  </div>
  <div class="mask" v-if="maskShow" @click="() => submitOrderConfirm(false)">
    <div class="mask__content" @click.stop>
      <h3 class="mask__content__title">确认要离开收银台？</h3>
      <p class="mask__content__desc">请尽快完成支付，否则将被取消</p>
      <div class="mask__content__btns">
        <span class="mask__content__btn cancel" @click="cancelOrder"
          >取消订单</span
        >
        <span class="mask__content__btn confirm" @click="checkOrder"
          >确认支付</span
        >
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { useCartEffect } from "../../effects/useCommonCartEffect.js";
export default {
  name: "OrderFooterView",
  setup() {
    const maskShow = ref(false);
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const shopId = route.params.id;
    const submitOrderConfirm = (state) => {
      maskShow.value = state;
    };
    const cancelOrder = () => {
      maskShow.value = false;
      router.back();
    };
    const checkOrder = () => {
      maskShow.value = false;
      store.commit("clearProductList", shopId);
      router.push("/");
    };
    const { total } = useCartEffect(shopId);
    return { total, maskShow, cancelOrder, checkOrder, submitOrderConfirm };
  },
};
</script>
<style lang="scss" scoped>
.order {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  height: 0.49rem;
  line-height: 0.49rem;
  background: #fff;
  &__price {
    flex: 1;
    text-indent: 0.24rem;
    font-size: 0.14rem;
    color: #333;
  }
  &__btn {
    width: 0.98rem;
    background: #0091ff;
    color: #fff;
    text-align: center;
    font-size: 0.14rem;
  }
}
.mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  &__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 1.6rem;
    width: 3rem;
    background: #fff;
    border-radius: 0.04rem;
    &__title {
      font-size: 0.18rem;
      text-align: center;
      margin: 0.24rem 0 0.08rem 0;
      color: #333333;
    }
    &__desc {
      font-size: 0.14rem;
      text-align: center;
      color: #666666;
      margin-bottom: 0.24rem;
    }
    &__btns {
      line-height: 0.32rem;
      text-align: center;
    }
    &__btn {
      padding: 0.06rem 0.12rem;
      border-radius: 0.16rem;
      margin: 0 0.1rem;
    }
    .cancel {
      border: 0.01rem solid #4fb0f9;
      color: #4fb0f9;
    }
    .confirm {
      background: #4fb0f9;
      border: 0.01rem solid #4fb0f9;
      color: #fff;
    }
  }
}
</style>
