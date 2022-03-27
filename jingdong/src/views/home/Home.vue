<template>
  <div>
    <div class="wrapper">
      <StaticPart></StaticPart>
      <NearBy></NearBy>
    </div>
    <DockerBottom :activeItem="0"></DockerBottom>
  </div>
</template>
<script>
import StaticPart from "./StaticPart";
import NearBy from "./NearBy";
import DockerBottom from "../../components/Docker";
export default {
  name: "HomeView",
  components: { StaticPart, NearBy, DockerBottom },
};
</script>
<style lang="scss" scoped>
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";
.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  padding: 0 0.18rem;
}
</style>
