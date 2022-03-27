/* 登录注册页面 */
<template>
  <div class="wrapper">
    <img
      class="wrapper__img"
      src="http://www.dell-lee.com/imgs/vue3/user.png"
      alt=""
    />
    <!--登录输入框-->
    <div v-if="!LoginOrRegister">
      <div class="wrapper__content">
        <input
          class="wrapper__content__input"
          type="text"
          v-model="username"
          placeholder="请输入用户名"
        />
      </div>
      <div class="wrapper__content">
        <input
          class="wrapper__content__input"
          type="text"
          v-model="password"
          placeholder="请输入密码"
        />
      </div>
    </div>
    <!--注册输入框-->
    <div v-else>
      <div class="wrapper__content">
        <input
          class="wrapper__content__input"
          type="text"
          placeholder="请输入用户名"
          v-model="reUsername"
        />
      </div>
      <div class="wrapper__content">
        <input
          class="wrapper__content__input"
          type="text"
          placeholder="请输入密码"
          v-model="rePassword"
        />
      </div>
      <div class="wrapper__content">
        <input
          class="wrapper__content__input"
          type="text"
          placeholder="确认密码"
          v-model="reCheckPassword"
        />
      </div>
    </div>
    <div class="wrapper__loginBtn" @click="handleLoginOrRegister">
      {{ LoginOrRegister ? "注册" : "登录" }}
    </div>
    <div class="wrapper__bottom">
      <div v-if="!LoginOrRegister">
        <span @click="handleToRegister">立即注册</span> |
        <span @click="handleForgetPsd">忘记密码</span>
      </div>
      <div v-else>
        <span @click="handleToLogin">已有账号去登陆</span>
      </div>
    </div>
    <ToastView
      v-if="toastData.toastShow"
      :message="toastData.toastMessage"
    ></ToastView>
  </div>
</template>
<script>
import { ref, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import { post } from "../../utils/request.js";
import ToastView, { toastEffect } from "../../components/Toast";

/* 登录相关代码逻辑 */
export const loginOrRegisterEffect = (toastFunc, LoginOrRegister) => {
  const data = reactive({
    username: "",
    password: "",
  });
  const registerData = reactive({
    reUsername: "",
    rePassword: "",
    reCheckPassword: "",
  });
  const router = useRouter();
  const { username, password } = toRefs(data);
  const { reUsername, rePassword, reCheckPassword } = toRefs(registerData);
  const handleLoginOrRegister = async () => {
    let url = "";
    let params = {};
    if (!LoginOrRegister.value) {
      url = "/user/login";
      params = {
        username: username.value,
        password: password.value,
      };
    } else {
      url = "/user/register";
      params = {
        reUsername: reUsername.value,
        rePassword: rePassword.value,
        reCheckPassword: reCheckPassword.value,
      };
    }
    try {
      const result = await post(url, params);
      if (result?.result === "success") {
        if (!LoginOrRegister.value) {
          localStorage.setItem("isLogin", true);
          router.push({ name: "Home" });
        } else {
          LoginOrRegister.value = !LoginOrRegister.value;
          toastFunc("注册成功，请登录!", 3000);
        }
      } else {
        toastFunc("啊嘞，登录失败了诶。_(:з」∠)_", 3000);
      }
    } catch (e) {
      toastFunc("请求失败了诶。_(:з」∠)_", 3000);
    }
  };
  return {
    username,
    password,
    reUsername,
    rePassword,
    reCheckPassword,
    handleLoginOrRegister,
    LoginOrRegister,
  };
};

export default {
  name: "LoginView",
  components: { ToastView },
  setup() {
    const LoginOrRegister = ref(false);
    const { toastData, toastFunc } = toastEffect();
    const {
      username,
      password,
      reUsername,
      rePassword,
      reCheckPassword,
      handleLoginOrRegister,
    } = loginOrRegisterEffect(toastFunc, LoginOrRegister);
    const handleToRegister = () => {
      LoginOrRegister.value = true;
    };
    const handleToLogin = () => {
      LoginOrRegister.value = false;
    };
    const handleForgetPsd = () => {
      toastFunc(
        "o(╥﹏╥)o~~傻瓜蛋，肿么密码会忘记掉噜。我不管你了（滑稽）",
        3000
      );
    };
    return {
      username,
      password,
      handleLoginOrRegister,
      handleToRegister,
      handleToLogin,
      handleForgetPsd,
      LoginOrRegister,
      toastData,
      toastFunc,
      reUsername,
      rePassword,
      reCheckPassword,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../../style/viriables.scss";
.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0%;
  transform: translateY(-50%);
  padding: 0 0.4rem;
  &__img {
    height: 0.66rem;
    width: 0.66rem;
    display: block;
    margin: 0 auto;
    margin-bottom: 0.4rem;
  }
  &__content {
    margin-bottom: 0.16rem;
    width: 100%;
    height: 0.48rem;
    background: #f9f9f9;
    border: 0.01rem solid $content-notice-fontcolor;
    border-radius: 0.06rem;
    &__input {
      height: 100%;
      width: 100%;
      font-size: 0.16rem;
      color: $content-notice-fontcolor;
      letter-spacing: 0;
      line-height: .24rem;
      border: 0;
      outline: none;
      background: #f9f9f9;
      box-sizing: border-box;
      padding: 0 0.2rem;
      border-radius: 0.08rem;
    }
  }
  &__loginBtn {
    background: #0091ff;
    box-shadow: 0, 04rem 0.08rem 0 rgba(0, 145, 255, 0.32);
    border-radius: 0.04rem;
    height: 0.48rem;
    line-height: 0.48rem;
    color: #f9f9f9;
    font-size: 0.16rem;
    text-align: center;
    margin: 0.32rem 0 0.2rem 0;
  }
  &__bottom {
    font-size: 0.14rem;
    color: $content-notice-fontcolor;
    text-align: center;
    span {
      padding: 0 0.05rem;
    }
  }
}
</style>
