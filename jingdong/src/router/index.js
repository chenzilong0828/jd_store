/* eslint-disable */
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/home/Home.vue"), //动态加载组件
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/login/Login.vue"), //动态加载组件
    //to是当用户点击进入当前页面的时候,我们可以进行一些拦截设置
    //from当来自其他页面进入当前页面的时候，我们也可以进行拦截提示用户
    beforeEnter: (to, from, next) => {
      const { isLogin } = localStorage;
      isLogin ? next({ name: "Home" }) : next();
    },
  },
  {
    path: "/orderConfirmation/:id",
    name: "OrderConfirmation",
    component: () => import("../views/orderConfirmation/OrderConfirmation.vue"),
  },
  {
    path: "/shop/:id",
    name: "Shop",
    component: () => import("../views/shop/Shop.vue"), //动态加载组件
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/cart/Cart.vue"), //动态加载组件
  },
  {
    path: "/order",
    name: "Order",
    component: () => import("../views/order/Order.vue"), //动态加载组件
  },
  {
    path: "/mine",
    name: "Mine",
    component: () => import("../views/mine/Mine.vue"), //动态加载组件
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

/* router.beforeEach（）一般用来做一些进入页面的限制。比如没有登录，就不能进入某些页面，只有登录了之后才有权限查看某些页面。。。说白了就是路由拦截。 */
router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage;
  isLogin || to.name === "Login" ? next() : next({ name: "Login" });
});

export default router;
