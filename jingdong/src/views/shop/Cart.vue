<template>
  <ToastView
    v-if="toastData.toastShow"
    :message="toastData.toastMessage"
  ></ToastView>
  <div
    class="mask"
    v-if="cartShow && total.count"
    @click="handleCartShow()"
  ></div>
  <div class="cart">
    <div class="product" v-if="cartShow && total.count">
      <div class="product__header">
        <div
          class="product__header--checked iconfont"
          v-html="allChecked ? '&#xe618;' : '&#xe619;'"
          @click="() => handleCartAllCheck()"
        ></div>
        <span class="product__header__checkall">全选</span>
        <div class="product__header__clear">
          <span @click="() => handleCartClear(shopId, cartShow)"
            >清空购物车</span
          >
        </div>
      </div>
      <template v-for="item in productList" :key="item._id">
        <div class="product__item" v-if="item.count > 0">
          <div
            class="product__item--checked iconfont"
            v-html="item.checked ? '&#xe618;' : '&#xe619;'"
            @click="handleChangeItemChecked(shopId, item._id)"
          ></div>
          <img :src="item.imgUrl" alt="" class="product__item__img" />
          <div class="product__content">
            <div class="product__content__title">{{ item.name }}</div>
            <div class="product__money">
              <div class="product__money__now">
                <span class="product__money__symbol">&yen;</span>
                <span class="product__money__nowMoney">{{ item.price }}</span>
              </div>
              <div class="product__money__old">
                <span class="product__money__oldSymbol">&yen;</span>
                <span class="product__money__oldMoney">{{
                  item.oldPrice
                }}</span>
              </div>
              <div class="product__money__num">
                <div
                  class="product__money__minus"
                  @click="
                    () => {
                      changeCartCount(shopId, item._id, item, -1);
                    }
                  "
                >
                  -
                </div>
                <span>
                  {{ cartList[shopId]?.productList?.[item._id]?.count || 0 }}
                </span>
                <div
                  class="product__money__plus"
                  @click="
                    () => {
                      changeCartCount(shopId, item._id, item, 1);
                    }
                  "
                >
                  +
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
    <div class="cart__img">
      <div
        class="iconfont cart__img__iconfont"
        @click="handleCartShow(total.count)"
      >
        &#xe6ba;
      </div>
      <div class="cart__img__redDot">{{ total.count }}</div>
    </div>
    <div class="cart__money">
      <span class="cart__money__all">总计：</span>
      <span class="cart__money__count">&yen; {{ total.money }}</span>
    </div>
    <router-link :to="{ path: `/orderConfirmation/${shopId}` }">
      <div class="cart__goSettlement" v-show="total.count > 0">去结算</div>
    </router-link>
  </div>
</template>
<script>
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { computed, ref } from "vue";
import { useCartEffect } from "../../effects/useCommonCartEffect.js";
import ToastView, { toastEffect } from "../../components/Toast";
/* 获取购物车计算逻辑 */
export const useCartMoneyEffect = (shopId, cartShow, toastFunc) => {
  const { changeCartCount } = useCartEffect();
  const store = useStore();
  const cartList = store.state.cartList;
  const total = computed(() => {
    const productList = cartList[shopId]?.productList;
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
    if (count === 0) {
      cartShow.value = false;
    }

    return { count, money };
  });
  const productList = computed(() => {
    const productList = cartList[shopId]?.productList || [];
    return productList;
  });
  const allChecked = computed(() => {
    const productList = cartList[shopId]?.productList;
    let result = true;
    for (const i in productList) {
      if (productList[i].count > 0 && !productList[i].checked) {
        // 如果商品的数量大于0的同时，商品又是未选中，则取消全选
        result = false;
      }
    }
    return result;
  });
  const handleChangeItemChecked = (shopId, productId) => {
    store.commit("changeItemCheck", { shopId, productId });
  };
  const handleCartClear = (shopId) => {
    store.commit("handleCartClear", { shopId });
    cartShow.value = false;
    toastFunc("购物车已清空，请重新选购哦~", 3000);
  };
  const handleCartAllCheck = () => {
    store.commit("handleCartAllCheck", { shopId, allChecked });
  };
  return {
    allChecked,
    total,
    productList,
    changeCartCount,
    handleChangeItemChecked,
    handleCartClear,
    cartList,
    handleCartAllCheck,
    cartShow,
  };
};
/* 购物车显示隐藏相关逻辑 */
export const useCartShowEffect = () => {
  const cartShow = ref(false);
  const handleCartShow = (count) => {
    cartShow.value = !cartShow.value;
    !count && (cartShow.value = false);
  };
  return { cartShow, handleCartShow };
};
export default {
  name: "CartView",
  components: { ToastView },
  setup() {
    const route = useRoute();
    const shopId = route.params.id;
    const { toastData, toastFunc } = toastEffect();
    const { cartShow, handleCartShow } = useCartShowEffect();
    const {
      allChecked,
      total,
      productList,
      changeCartCount,
      handleChangeItemChecked,
      handleCartClear,
      cartList,
      handleCartAllCheck,
    } = useCartMoneyEffect(shopId, cartShow, toastFunc);
    return {
      allChecked,
      total,
      productList,
      shopId,
      changeCartCount,
      handleChangeItemChecked,
      handleCartClear,
      cartList,
      handleCartShow,
      cartShow,
      handleCartAllCheck,
      toastData,
      toastFunc,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../../style/mixins.scss";
@import "../../style/viriables.scss";
.mask {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
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
  background: #fff;
  z-index: 2;
  a {
    flex: 1;
    text-decoration: none;
  }
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
      padding: 0 0.06rem;
      height: 0.2rem;
      border-radius: 0.1rem;
      line-height: 0.2rem;
      color: #fff;
      font-size: 0.14rem;
      text-align: center;
      transform: scale(80%);
      transform-origin: left center;
      top: 0.04rem;
      left: 0.55rem;
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
    text-align: center;
    font-size: 0.14rem;
    color: $white-bg;
    background: #4fb0f9;
  }
  .product {
    position: absolute;
    bottom: 0.49rem;
    background: #fff;
    width: 100%;
    max-height: 5rem;
    overflow-y: scroll;
    &__header {
      line-height: 0.5rem;
      height: 0.5rem;
      background: #fff;
      margin: 0 0.16rem;
      border-bottom: .01rem solid #f1f1f1;
      display: flex;
      align-items: center;
      &--checked {
        margin-right: 0.1rem;
        font-size: 0.2rem;
        color: #0091ff;
      }
      &__checkall {
        font-size: 0.14rem;
        color: #333333;
      }
      &__clear {
        flex: 1;
        font-size: 0.14rem;
        color: #333333;
        text-align: right;
      }
    }
    &__item {
      padding: 0.12rem 0;
      margin: 0 0.16rem;
      border-bottom: .01rem solid #f1f1f1;
      height: 0.46rem;
      display: flex;
      align-items: center;
      &--checked {
        margin-right: 0.1rem;
        font-size: 0.2rem;
        color: #0091ff;
      }
      &__img {
        height: 0.46rem;
        width: 0.46rem;
      }
    }
    .product__content {
      flex: 1;
      padding-left: 0.12rem;
      overflow: hidden;
      &__title {
        font-size: 0.14rem;
        color: $content-fontcolor;
        height: 0.2rem;
        line-height: 0.2rem;
        font-weight: 600;
        @include hiddenOverFlow;
      }
      .product__money {
        height: 0.2rem;
        line-height: 0.2rem;
        position: relative;
        &__now {
          display: inline-block;
          color: #e93b3b;
          margin-right: 0.12rem;
        }
        &__old {
          display: inline-block;
          color: #999999;
          font-size: 0.1rem;
          text-decoration: line-through;
        }
        &__symbol {
          font-size: 0.12rem;
        }
        &__nowMoney {
          font-size: 0.14rem;
        }
        &__num {
          position: absolute;
          right: 0;
          bottom: 0.1rem;
          span {
            vertical-align: middle;
            font-size: 0.14rem;
            margin: 0 0.06rem;
          }
        }
        &__minus,
        &__plus {
          display: inline-block;
          height: 0.2rem;
          width: 0.2rem;
          text-align: center;
          line-height: 0.16rem;
          font-size: 0.2rem;
          box-sizing: border-box;
          vertical-align: middle;
        }
        &__minus {
          border: .01rem solid #666666;
          color: #666666;
          border-radius: 50%;
        }
        &__plus {
          background: #0091ff;
          border-radius: 50%;
          color: #fff;
        }
      }
    }
  }
}
</style>
