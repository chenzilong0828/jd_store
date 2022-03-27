<template>
  <div class="content">
    <div class="category">
      <div
        v-for="tab in categoryTabs"
        :key="tab.id"
        :class="{
          category__item: true,
          'category__item--active': currentTab === tab.name,
        }"
        @click="handleTabClick(tab.name)"
      >
        {{ tab.name }}
      </div>
    </div>
    <div class="product">
      <div class="product__item" v-for="item in list" :key="item._id">
        <img :src="item.imgUrl" alt="" class="product__item__img" />
        <div class="product__content">
          <div class="product__content__title">{{ item.name }}</div>
          <div class="product__content__sales">月售{{ item.sales }}件</div>
          <div class="product__money">
            <div class="product__money__now">
              <span class="product__money__symbol">&yen;</span>
              <span class="product__money__nowMoney">{{ item.price }}</span>
            </div>
            <div class="product__money__old">
              <span class="product__money__oldSymbol">&yen;</span>
              <span class="product__money__oldMoney">{{ item.oldPrice }}</span>
            </div>
            <div class="product__money__num">
              <div
                class="product__money__minus"
                @click="
                  () => {
                    changeCartCount(shopId, item._id, item, -1, shopName);
                  }
                "
              >
                -
              </div>
              <span>{{
                cartList[shopId]?.productList[item._id]?.count || 0
              }}</span>
              <div
                class="product__money__plus"
                @click="
                  () => {
                    changeCartCount(shopId, item._id, item, 1, shopName);
                  }
                "
              >
                +
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useRoute } from "vue-router";
import { ref, reactive, toRefs, watchEffect } from "vue";
import { get } from "../../utils/request.js";
import { useCartEffect } from "../../effects/useCommonCartEffect.js";

const categoryTabs = [
  { name: "全部商品", id: "all" },
  { name: "秒杀", id: "kill" },
  { name: "新鲜水果", id: "fruit" },
  { name: "休闲食品", id: "snake" },
  { name: "时令蔬菜", id: "vegetable" },
  { name: "肉蛋家禽", id: "meat" },
];
/* tab切换相关逻辑 */
const useTabEffect = () => {
  const currentTab = ref(categoryTabs[0].id);
  const handleTabClick = (tab) => {
    currentTab.value = tab;
  };
  return { currentTab, handleTabClick };
};
/* 列表内容相关的逻辑 */
const useCurrentListEffect = (currentTab) => {
  const { cartList, changeCartCount } = useCartEffect();
  const route = useRoute();
  const content = reactive({
    list: [],
  });
  const getContentData = async () => {
    const result = await get(`/api/store/${route.params.id}/products`, {
      tab: currentTab.value,
    });
    if (result?.success && result?.data?.length) {
      content.list = result.data;
    }
  };
  watchEffect(() => {
    getContentData();
  });
  const { list } = toRefs(content);
  return { list, cartList, changeCartCount };
};

export default {
  name: "ShopContent",
  props: ["shopName"],
  setup() {
    const route = useRoute();
    const shopId = route.params.id;
    const { currentTab, handleTabClick } = useTabEffect();
    const { list, changeCartCount, cartList } =
      useCurrentListEffect(currentTab);
    return {
      shopId,
      list,
      categoryTabs,
      currentTab,
      handleTabClick,
      changeCartCount,
      useCartEffect,
      cartList,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../../style/mixins.scss";
@import "../../style/viriables.scss";
.content {
  display: flex;
  position: absolute;
  top: 1.54rem;
  left: 0;
  bottom: 0.5rem;
  width: 100%;
  .category {
    width: 0.76rem;
    background: #f5f5f5;
    &__item {
      height: 0.4rem;
      line-height: 0.4rem;
      text-align: center;
      font-size: 0.14rem;
      color: $content-fontcolor;
      &--active {
        background: #fff;
      }
    }
  }
  .product {
    overflow-y: scroll;
    flex: 1;
    &__item {
      padding: 0.12rem 0;
      margin: 0 0.16rem;
      border-bottom: 0.01rem solid #f1f1f1;
      height: 0.68rem;
      display: flex;
      &__img {
        height: 0.68rem;
        width: 0.68rem;
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
      &__sales {
        font-size: 0.12rem;
        color: $content-fontcolor;
        line-height: 0.16rem;
        margin: 0.06rem 0;
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
          bottom: 0;
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
          border: 0.01rem solid #666666;
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
