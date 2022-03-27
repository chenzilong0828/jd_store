<template>
  <div class="warpper">
    <div class="header">我的</div>
  </div>

  <DockerBottom :activeItem="3"></DockerBottom>
</template>
<script>
import DockerBottom from "../../components/Docker";
export default {
  name: "MineView",
  components: { DockerBottom },
};
</script>
<style lang="scss" scoped>
.warpper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #eee;
}
.header {
  height: 0.44rem;
  padding-top: 0.2rem;
  background: #fff;
  font-size: 0.16rem;
  color: #333333;
  text-align: center;
  line-height: 0.44rem;
}
</style>
