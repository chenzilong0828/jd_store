<template>
  <div class="docker">
    <div
      v-for="(item, index) in dockerList"
      :class="{ docker__item: true, 'docker__item--active': index == '0' }"
      :key="item.icon"
    >
      <router-link :to="item.to">
        <div>
          <div class="iconfont" v-html="item.icon" />
          <div class="docker__title">{{ item.text }}</div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "DockerBottom",
  setup() {
    const dockerList = [
      {
        icon: "&#xe68d;",
        text: "首页",
        to: { name: "Home" },
      },
      {
        icon: "&#xe834;",
        text: "购物车",
        to: { name: "Cart" },
      },
      {
        icon: "&#xe713;",
        text: "订单",
        to: { name: "Home" },
      },
      {
        icon: "&#xe78c;",
        text: "我的",
        to: { name: "Home" },
      },
    ];
    return { dockerList };
  },
};
</script>
<style lang="scss" scoped>
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";
.docker {
  display: flex;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  padding: 0 0.18rem;
  box-sizing: border-box;
  border-top: 0.01rem solid $content-bg;
  &__item {
    flex: 1;
    text-align: center;
    a {
      text-decoration: none;
      color: $content-fontcolor;
    }
    .iconfont {
      margin: 0.07rem 0 0.02rem 0;
      font-size: 0.18rem;
    }
    &--active {
      a {
        color: #1fa4fc;
      }
    }
  }
  &__title {
    font-size: 0.2rem;
    transform: scale(0.5, 0.5);
    transform-origin: center top;
  }
}
</style>
