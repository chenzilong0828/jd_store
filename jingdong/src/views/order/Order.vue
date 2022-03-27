<template>
  <div class="warpper">
    <div class="header">我的订单</div>
    <div class="content">
      <div class="order" v-for="item in orderList" :key="item.shopId">
        <div class="order__title">
          <div class="order__title__shopName">{{ item.shopName }}</div>
          <div class="order__title__isCancel">
            {{ item.isCanceled ? "已取消" : "已下单" }}
          </div>
        </div>
        <div class="order__content">
          <div class="order__imgs">
            <img
              v-for="(innerItem, innerIndex) in item.products"
              :key="innerIndex"
              class="order__imgs__item"
              :src="innerItem.product.imgUrl"
              alt=""
            />
          </div>
          <div class="order__imgs__info">
            <div class="order__imgs__price">¥{{ item.count }}</div>
            <div class="order__imgs__count">共{{ item.total }}件</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <DockerBottom :activeItem="2"></DockerBottom>
</template>
<script>
import { reactive } from "vue";
import { get } from "../../utils/request.js";
import DockerBottom from "../../components/Docker";
export const useOrderListEffect = () => {
  const orderList = reactive({});
  const getOrderList = async () => {
    const result = await get("/api/orderList");
    const { success, data } = result;
    if (success || data?.length) {
      let count = 0;
      let total = 0;
      data.products.forEach((item) => {
        count += item.product.price * item.orderSales;
        total += item.orderSales;
      });
      data.count = count;
      data.total = total;
      console.log(data);
      orderList.value = data;
    }
  };
  return { getOrderList, orderList };
};
export default {
  name: "OrderView",
  components: { DockerBottom },
  setup() {
    const { getOrderList, orderList } = useOrderListEffect();
    getOrderList();
    return { orderList };
  },
};
</script>
<style lang="scss" scoped>
.warpper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  background: #f8f8f8;
}
.header {
  height: 0.44rem;
  padding-top: 0.2rem;
  background: #fff;
  font-size: 0.16rem;
  color: #333333;
  text-align: center;
  line-height: 0.44rem;
  margin-bottom: 0.16rem;
}
.content {
  height: calc(100% - .80rem);
  overflow-y: scroll;
  .order {
    margin: 0 0.18rem 0.16rem 0.18rem;
    background: #ffffff;
    border-radius: .04rem;
    padding: 0.16rem;
    &__title {
      margin-bottom: 0.16rem;
      align-items: center;
      line-height: 0.22rem;
      display: flex;
      &__shopName {
        font-size: 0.16rem;
        color: #333333;
        flex: 1;
      }
      &__isCancel {
        font-size: .14rem;
        color: #999999;
      }
    }
    &__content {
      display: flex;
      align-items: center;
    }
    &__imgs {
      flex: 1;
      &__item {
        height: 0.4rem;
        width: 0.4rem;
        margin-right: 0.1rem;
      }
      &__info {
        width: 0.7rem;
        text-align: right;
      }
      &__price {
        font-size: 0.14rem;
        color: #e93b3b;
        margin-bottom: 0.04rem;
      }
      &__count {
        font-size: 0.12rem;
        color: #333333;
      }
    }
  }
}
</style>
