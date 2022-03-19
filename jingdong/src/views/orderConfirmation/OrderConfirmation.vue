<template>
  <div class="wrapper">
    <div class="wrapper__top">
      <div class="wrapper__header">
        <div class="wrapper__TopHeader">
          <div class="wrapper__header__icon iconfont">&#xe600;</div>
          <div class="wrapper__header__title">确认订单</div>
        </div>
      </div>
      <div class="wrapper__address">
        <div class="wrapper__addLeft">
          <div class="wrapper__address__title">收货地址</div>
          <div class="wrapper__address__position">
            北京理工大学国防科技园2号楼10层
          </div>
          <div class="wrapper__address__info">
            <div>瑶妹（先生）</div>
            <div>18911024266</div>
          </div>
        </div>
        <div class="iconfont wrapper__address__icon">&#xe600;</div>
      </div>
    </div>
    <div class="wrapper__content">123</div>
    <div class="wrapper__bottom">
      <div class="wrapper__bottom__left">
        <span class="wrapper__bottom__left__title">实付金额</span>
        <span class="wrapper__bottom__left__money">&yen;168</span>
      </div>
      <div class="wrapper__bottom__right">提交订单</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "OrderConfirmation",
  components: {},
};
</script>
<style lang="scss" scoped>
.wrapper {
  background: #f8f8f8;
  &__top {
    height: 2rem;
    .wrapper__header {
      height: 160px;
      position: relative;
      background-image: linear-gradient(
        0deg,
        rgba(0, 145, 255, 0) 4%,
        #0091ff 50%
      );
      .wrapper__TopHeader {
        height: 0.32rem;
        display: flex;
        align-items: center;
        padding: 0.22rem 0.18rem 0 0.18rem;
        .wrapper__header__icon {
          font-size: 0.25rem;
          position: absolute;
        }
        .wrapper__header__title {
          flex: 1;
          text-align: center;
          font-size: 0.16rem;
          color: #ffffff;
        }
      }
      &__icon {
        color: #ffffff;
        display: inline-block;
      }
      &__title {
        display: inline-block;
      }
    }
    .wrapper__address {
      margin: 0 0.18rem;
      padding: 0 0.16rem;
      height: 1.1rem;
      position: absolute;
      top: 0.85rem;
      left: 0;
      right: 0;
      background: #ffffff;
      border-radius: 0.04rem;
      display: flex;
      align-items: center;
      .wrapper__addLeft {
        flex: 1;
      }
      &__title {
        font-size: 0.16rem;
        color: #333333;
        margin: 0.16rem 0;
        font-weight: 600;
        height: 0.22rem;
        line-height: 0.22rem;
      }
      &__address {
        font-size: 0.14rem;
        color: #333333;
        height: 0.2rem;
        line-height: 0.2rem;
      }
      &__info {
        font-size: 0.12rem;
        color: #666666;
        div {
          display: inline-block;
          margin: 0.06rem 0.06rem 0.16rem 0;
        }
      }
      &__icon {
        color: #666666;
        font-size: 0.22rem;
        transform: rotate(180deg);
      }
    }
  }
  &__content {
    position: absolute;
    top: 2rem;
    left: 0;
    right: 0;
    bottom: 0.5rem;
    background: #f8f8f8;
  }
  &__bottom {
    position: fixed;
    bottom: 0;
    height: 0.5rem;
    line-height: 0.5rem;
    width: 100%;
    display: flex;
    align-items: center;
    &__left {
      display: inline-block;
      flex: 1;
      font-size: 0.14rem;
      &__title {
        margin-left: 0.24rem;
      }
      &__money {
        margin-left: 0.05rem;
        font-size: 0.16rem;
        color: #151515;
        text-align: right;
        line-height: 20px;
        font-weight: 600;
      }
    }
    &__right {
      display: inline-block;
      width: 1rem;
      background: #4fb0f9;
      color: #fff;
      font-size: 0.14rem;
      text-align: center;
    }
  }
}
</style>
