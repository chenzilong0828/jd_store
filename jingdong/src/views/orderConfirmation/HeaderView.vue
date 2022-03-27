<template>
  <div class="header">
    <div class="header__top">
      <div class="iconfont header__top__icon" @click="handleBackClick()">
        &#xe600;
      </div>
      确认订单
    </div>
    <div class="header__card">
      <div class="header__card__title">收货地址</div>
      <div>
        <div class="address">
          福建省福州市闽侯县高新区南屿镇旗山大道三盛托斯卡纳3期6号楼1006室
        </div>
        <div class="info">
          <span class="info__name">阿龙</span>
          <span class="info__name">13110753863</span>
        </div>
        <div class="intoIcon iconfont">&#xe600;</div>
      </div>
    </div>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
export default {
  name: "OrderHeaderView",
  setup() {
    const router = useRouter();
    const handleBackClick = () => {
      router.back();
    };
    return { handleBackClick };
  },
};
</script>
<style lang="scss" scoped>
.header {
  position: relative;
  height: 2rem;
  background-image: linear-gradient(0deg, rgba(0, 145, 255, 0) 4%, #0091ff 50%);
  background-size: 100% 1.59rem;
  background-repeat: no-repeat;
  &__top {
    position: relative;
    padding-top: 0.2rem;
    line-height: 0.24rem;
    color: #fff;
    text-align: center;
    font-size: 0.16rem;
    &__icon {
      position: absolute;
      left: 0.18rem;
      font-size: 0.22rem;
    }
  }
  &__card {
    position: absolute;
    left: 0.18rem;
    right: 0.18rem;
    bottom: 0;
    height: 1.11rem;
    background: #fff;
    border-radius: 0.04rem;
    &__title {
      line-height: 0.22rem;
      padding: 0.16rem 0 0.14rem 0.16rem;
      font-size: 0.16rem;
      color: #333;
    }
    .address {
      line-height: 0.2rem;
      padding: 0 0.4rem 0 0.16rem;
      font-size: 0.14rem;
      color: #333;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .info {
      padding: 0.06rem 0 0 0.16rem;
      &__name {
        margin-right: 0.06rem;
        line-height: 0.18rem;
        font-size: 0.12rem;
        color: #666;
      }
    }
    .intoIcon {
      transform: rotate(180deg);
      position: absolute;
      right: 0.16rem;
      top: 0.5rem;
      color: #666;
      font-size: 0.2rem;
    }
  }
}
</style>
