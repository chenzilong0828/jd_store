<template>
  <div class="nearby">
    <div class="nearby__title">附近店铺</div>

    <ShopInfo
      v-for="item in nearbyList.value"
      :key="item._id"
      :item="item"
      :defaultLine="true"
    ></ShopInfo>
  </div>
</template>
<script>
import { reactive } from "vue";
import ShopInfo from "../../components/shopInfo";
import { get } from "../../utils/request.js";
/* 附近店铺列表逻辑 */
export const nearbyEffect = () => {
  const nearbyList = reactive([]);
  const getNearbyList = async () => {
    const result = await get("/store/storeList");
    const { success, data } = result;
    console.log(success, data);
    if (success || data?.length) {
      nearbyList.value = data;
    }
  };
  return { nearbyList, getNearbyList };
};
export default {
  name: "NearBy",
  components: { ShopInfo },
  setup() {
    const { nearbyList, getNearbyList } = nearbyEffect();
    getNearbyList();
    return { nearbyList };
  },
};
</script>
<style lang="scss" scoped>
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";
.nearby {
  &__title {
    font-size: 0.18rem;
    color: $content-fontcolor;
    font-weight: 500;
    margin-top: 0.16rem;
  }
}
</style>
