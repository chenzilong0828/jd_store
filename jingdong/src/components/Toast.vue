<template>
  <div class="toast">{{ message }}</div>
</template>
<script>
import { reactive } from "vue";
export const toastEffect = () => {
  const toastData = reactive({
    toastShow: false,
    toastMessage: "",
  });
  /* 对弹出层异常抛出方法的封装 */
  const toastFunc = (msg, times) => {
    toastData.toastShow = true;
    toastData.toastMessage = msg;
    setTimeout(() => {
      toastData.toastShow = false;
      toastData.toastMessage = "";
    }, times);
  };
  return { toastData, toastFunc };
};
export default {
  name: "ToastView",
  props: ["message"],
};
</script>
<style lang="scss" scoped>
.toast {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  background: rgba(0, 0, 0, 0.35);
  font-size: 0.2rem;
  padding: 0.15rem 0.2rem;
  border-radius: 0.05rem;
}
</style>
