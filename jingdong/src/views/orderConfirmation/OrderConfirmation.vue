<template>
  <div class="wrapper">
    <OrderHeaderView></OrderHeaderView>
    <OrderContentView></OrderContentView>
    <OrderFooterViwe></OrderFooterViwe>
  </div>
</template>

<script>
import OrderHeaderView from "../../views/orderConfirmation/HeaderView";
import OrderContentView from "../../views/orderConfirmation/ContentView";
import OrderFooterViwe from "../../views/orderConfirmation/FooterView";
export default {
  name: "OrderConfirmation",
  components: { OrderHeaderView, OrderContentView, OrderFooterViwe },
};
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #f8f8f8;
  overflow-y: scroll;
}
</style>
