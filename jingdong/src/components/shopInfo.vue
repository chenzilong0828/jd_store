<template>
  <div class="shop__content">
    <img class="shop__content__left" :src="item.imgUrl" alt="" />
    <div
      :class="{
        shop__content__right: true,
        shop__content__right__line: defaultLine ? false : true,
      }"
    >
      <div class="shop__content__right__title">{{ item.name }}</div>
      <div class="shop__content__right__tags">
        <span class="tags"> 月售{{ item.sales }}+ </span>
        <span class="tags"> 起送¥{{ item.expressLimit }} </span>
        <span class="tags"> 基础运费{{ item.expressPrice }} </span>
      </div>
      <div class="shop__content__right__highLight">
        {{ item.slogan }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ShopInfo",
  props: ["item", "defaultLine"],
};
</script>
<style lang="scss" scoped>
@import "../style/viriables.scss";
@import "../style/mixins.scss";
.shop__content {
  display: flex;
  margin: 0.14rem 0 0.12rem 0;
  &__left {
    height: 0.56rem;
    width: 0.56rem;
    margin-right: 0.16rem;
  }
  &__right {
    flex: 1;
    padding-bottom: 0.12rem;
    border-bottom: 0.01rem solid #f1f1f1;
    &__line {
      border-bottom: 0;
    }
    &__title {
      font-size: 0.16rem;
      color: $content-fontcolor;
      line-height: 0.22rem;
    }
    &__tags {
      margin: 0.08rem 0;
      font-size: 0.13rem;
      color: $content-fontcolor;
      line-height: 0.16rem;
      display: flex;
      .tags {
        flex: 1;
      }
    }
    &__highLight {
      font-size: 0.13rem;
      color: #e93b3b;
      line-height: 0.16rem;
    }
  }
}
</style>
