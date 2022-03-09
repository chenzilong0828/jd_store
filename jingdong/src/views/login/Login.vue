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
        />
      </div>
      <div class="wrapper__content">
        <input
          class="wrapper__content__input"
          type="text"
          placeholder="请输入密码"
        />
      </div>
      <div class="wrapper__content">
        <input
          class="wrapper__content__input"
          type="text"
          placeholder="确认密码"
        />
      </div>
    </div>
    <div class="wrapper__loginBtn" @click="handleLogin">
      {{ LoginOrRegister ? "注册" : "登录" }}
    </div>
    <div class="wrapper__bottom">
      <div v-if="!LoginOrRegister">
        <span @click="handleToRegister">立即注册</span> |
        <span>忘记密码</span>
      </div>
      <div v-else>
        <span @click="handleToLogin">已有账号去登陆</span>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, reactive, toRefs } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
axios.defaults.headers.common["Content-Type"] =
  "application/json;charset=UTF-8";
export default {
  name: "LoginView",
  setup() {
    const data = reactive({
      username: "",
      password: "",
    });
    const { username, password } = toRefs(data);
    const LoginOrRegister = ref(false);
    const router = useRouter();
    const handleLogin = () => {
      axios
        .post(
          "https://www.fastmock.site/mock/a00c49722c670eba88e12c2ffd824bc0/api/user/login",
          {
            username: username.value,
            password: password.value,
          }
        )
        .then(() => {
          localStorage.setItem("isLogin", true);
          router.push({ name: "Home" });
        })
        .catch(() => {
          alert("登录失败");
        });
    };
    const handleToRegister = () => {
      LoginOrRegister.value = true;
    };
    const handleToLogin = () => {
      LoginOrRegister.value = false;
    };
    return {
      handleLogin,
      handleToRegister,
      handleToLogin,
      LoginOrRegister,
      username,
      password,
    };
  },
};
</script>
<style lang='scss' scoped>
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
      line-height: 24px;
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
