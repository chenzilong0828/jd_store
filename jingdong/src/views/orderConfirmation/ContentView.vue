<template>
  <div class="content">
    <div class="content__title">{{ shopName }}</div>
    <div class="content__wrapper">
      <div class="product__list">
        <template v-for="item in productList" :key="item.id">
          <div class="product__item" v-if="item.count">
            <img class="product__item__img" :src="item.imgUrl" alt="" />
            <div class="product__item__detail">
              <h4 class="product__item__title">{{ item.name }}</h4>
              <p class="product__item__price">
                <span>
                  <span class="product__item__yen">&yen;</span
                  >{{ item.price }} × {{ item.count }}
                </span>
                <span class="product__item__total">
                  <span class="product__item__yen">&yen; </span
                  >{{ (item.price * item.count).toFixed(2) }}
                </span>
              </p>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import { useRoute } from "vue-router";
import { useCartEffect } from "../../effects/useCommonCartEffect.js";
export default {
  name: "OrderContentView",
  components: {},
  setup() {
    const route = useRoute();
    const shopId = route.params.id;
    const { shopName, productList } = useCartEffect(shopId);
    return { shopName, productList };
  },
};
</script>
<style lang="scss" scoped>
.content {
  margin: 0.16rem 0.18rem 0.1rem 0.18rem;
  background: #fff;
  &__title {
    padding: 0.16rem;
    font-size: 0.16rem;
    color: #333;
  }
  &__wrapper {
    overflow-y: scroll;
    margin: 0 0.18rem;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0.6rem;
    top: 2.6rem;
    .product__list {
      background: #fff;
      .product__item {
        position: relative;
        display: flex;
        padding: 0 0.16rem 0.16rem 0.16rem;
        &__img {
          width: 0.46rem;
          height: 0.46rem;
          margin-right: 0.16rem;
        }
        &__detail {
          flex: 1;
        }
        &__title {
          margin: 0;
          line-height: 0.2rem;
          font-size: 0.14rem;
          color: #333;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        &__price {
          display: flex;
          margin: 0.06rem 0 0 0;
          line-height: 0.2rem;
          font-size: 0.14rem;
          color: #e93b3b;
        }
        &__yen {
          font-size: 0.12rem;
        }
        &__total {
          flex: 1;
          text-align: right;
          color: #000;
        }
      }
    }
  }
}
</style>
