<template>
  <div class="nearby">
    <div class="nearby__title">附近店铺</div>
    <div class="nearby__content" v-for="item in nearbyList" :key="item.id">
      <img class="nearby__content__left" :src="item.imageSrc" alt="" />
      <div class="nearby__content__right">
        <div class="nearby__content__right__title">{{ item.title }}</div>
        <div class="nearby__content__right__tags">
          <span class="tags" v-for="(data, idx) in item.tags" :key="idx">
            {{ data }}
          </span>
        </div>
        <div class="nearby__content__right__highLight">
          {{ item.desc }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NearBy",
  setup() {
    const nearbyList = [
      {
        id: "001",
        imageSrc: "http://www.dell-lee.com/imgs/vue3/near.png",
        title: "沃尔玛",
        tags: ["月售1W+", "起送¥15", "基础运费¥5"],
        desc: "VIP尊享满89元减4元运费券（每月3张）",
      },
      {
        id: "002",
        imageSrc: "http://www.dell-lee.com/imgs/vue3/near.png",
        title: "沃尔玛",
        tags: ["月售1W+", "起送¥15", "基础运费¥5"],
        desc: "VIP尊享满89元减4元运费券（每月3张）",
      },
      {
        id: "003",
        imageSrc: "http://www.dell-lee.com/imgs/vue3/near.png",
        title: "沃尔玛",
        tags: ["月售1W+", "起送¥15", "基础运费¥5"],
        desc: "VIP尊享满89元减4元运费券（每月3张）",
      },
      {
        id: "004",
        imageSrc: "http://www.dell-lee.com/imgs/vue3/near.png",
        title: "沃尔玛",
        tags: ["月售1W+", "起送¥15", "基础运费¥5"],
        desc: "VIP尊享满89元减4元运费券（每月3张）",
      },
      {
        id: "005",
        imageSrc: "http://www.dell-lee.com/imgs/vue3/near.png",
        title: "沃尔玛",
        tags: ["月售1W+", "起送¥15", "基础运费¥5"],
        desc: "VIP尊享满89元减4元运费券（每月3张）",
      },
    ];
    return { nearbyList };
  },
};
</script>
<style lang='scss' scoped>
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";
.nearby {
  &__title {
    font-size: 0.18rem;
    color: $content-fontcolor;
    font-weight: 500;
    margin-top: 0.16rem;
  }
  &__content {
    display: flex;
    margin: 0.14rem 0 0.12rem 0;
    &__left {
      height: 0.56rem;
      width: 0.56rem;
      margin-right: 16px;
    }
    &__right {
      flex: 1;
      padding-bottom: 12px;
      border-bottom: 1px solid #f1f1f1;
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
        .tags {
          margin-right: 0.18rem;
        }
      }
      &__highLight {
        font-size: 0.13rem;
        color: #e93b3b;
        line-height: 0.16rem;
      }
    }
  }
}
</style>
