<template>
  <div>
    <div class="position">
      <span class="iconfont position__icon">&#xe7f1;</span>
      北京理工大学国防科技园2号楼10层
      <span class="iconfont position__bell">&#xe8e3;</span>
    </div>
    <div class="search">
      <div class="iconfont search__icon">&#xe62d;</div>
      <div class="search__input">
        <input type="text" placeholder="山姆会员商店优惠商品" />
      </div>
    </div>
    <div class="banner">
      <img
        src="http://www.dell-lee.com/imgs/vue3/banner.jpg"
        alt="图片不见了"
      />
    </div>
    <div class="icons">
      <div class="icons__item" v-for="item in iconList" :key="item.desc">
        <img
          :src="`http://www.dell-lee.com/imgs/vue3/${item.iconName}.png`"
          class="icons__item__img"
          alt=""
        />
        <div class="icons__item__desc">{{ item.desc }}</div>
      </div>
    </div>
    <div class="bg"></div>
  </div>
</template>
<script>
export default {
  name: "StaticPart",
  setup() {
    const iconList = [
      {
        iconName: "超市",
        desc: "超市便利",
      },
      {
        iconName: "菜市场",
        desc: "菜市场",
      },
      {
        iconName: "水果店",
        desc: "水果店",
      },
      {
        iconName: "鲜花",
        desc: "鲜花绿植",
      },
      {
        iconName: "医药健康",
        desc: "医药健康",
      },
      {
        iconName: "家居",
        desc: "家居时尚",
      },
      {
        iconName: "蛋糕",
        desc: "烘焙蛋糕",
      },
      {
        iconName: "签到",
        desc: "签到",
      },
      {
        iconName: "大牌免运",
        desc: "大牌免运",
      },
      {
        iconName: "红包",
        desc: "红包套餐",
      },
    ];
    return { iconList };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";
.position {
  color: $content-fontcolor;
  position: relative;
  line-height: 0.2rem;
  padding: 0.16rem 0.24rem 0.16rem 0;
  font-size: 0.16rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  @include ellipsis;
  &__icon {
    position: relative;
    top: 0.01rem;
    font-size: 0.2rem;
  }
  &__bell {
    position: absolute;
    top: 0.17rem;
    right: 0;
    font-size: 0.2rem;
  }
  color: $content-fontcolor;
}
.search {
  background: $search-bgcolor;
  border-radius: 0.16rem;
  line-height: 0.32rem;
  &__icon {
    position: relative;
    top: 0.03rem;
    left: 0.12rem;
    font-size: 0.2rem;
    display: inline-block;
  }
  &__input {
    display: inline-block;
    width: calc(100% - 0.5rem);
    margin-left: 0.2rem;
    input {
      width: calc(100% - 0.2rem);
      font-size: 0.14rem;
      border: 0;
      outline: none;
      background: $search-bgcolor;
    }
  }
}
.banner {
  width: 100%;
  margin-top: 0.1rem;
  // css hack:这里直接使用高度0，隐藏溢出，使用padding-bottom来占据div高度
  @include imageHack;
  padding-bottom: 25.4%;
  img {
    width: 100%;
  }
}
.icons {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.16rem;
  &__item {
    width: 20%;
    &__img {
      width: 0.4rem;
      height: 0.4rem;
      display: block;
      margin: 0 auto;
      padding: 0.16rem 0 0.06rem 0;
    }
    &__desc {
      text-align: center;
      color: $content-fontcolor;
    }
  }
}
.bg {
  height: 0.1rem;
  margin: 0 -0.18rem;
  background-color: $content-bg;
}
</style>
