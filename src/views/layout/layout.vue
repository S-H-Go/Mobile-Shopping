<template>
  <router-view />
  <van-tabbar
    v-model="active"
    active-color="#ff5d5e"
    inactive-color="#000000"
    :placeholder="true"
  >
    <van-tabbar-item to="/home" name="home" icon="wap-home"
      >首页</van-tabbar-item
    >
    <van-tabbar-item to="/category" name="category" icon="more"
      >分类</van-tabbar-item
    >
    <van-tabbar-item :to="toCart" name="cart" icon="shopping-cart"
      >购物车</van-tabbar-item
    >
    <van-tabbar-item to="/my" name="my" icon="manager">{{
      myStr
    }}</van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
import { onMounted, ref, onUpdated } from "vue";
import { useRouter, useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/user";
const { loginOrNot, user } = storeToRefs(useUserStore());
const active = ref("home");
const myStr = ref("");
const router = useRouter();
const route = useRoute();
const toCart = ref("/cart/null");
onMounted(() => {
  if (loginOrNot.value) {
    toCart.value = "/cart/" + user.id;
    myStr.value = "我的";
  } else {
    toCart.value = "/cart/null";
    myStr.value = "未登录";
  }
  //刷新页面后实现点击当前页的效果
  if (route.path.includes("/home")) {
    active.value = "home";
    return;
  }
  if (route.path.includes("/category")) {
    active.value = "category";
    return;
  }
  if (route.path.includes("/cart")) {
    active.value = "cart";
    return;
  }
  if (route.path.includes("/my")) {
    active.value = "my";
    return;
  }
});

router.afterEach((to, from) => {
  //从分类页返回的时候，更换为点击首页
  if (from.path.includes("/category") && to.path == "/home") {
    active.value = "home";
    return;
  }
  //从购物车页返回的时候，更换为点击首页
  if (from.path.includes("/cart") && to.path == "/home") {
    active.value = "home";
    return;
  }
  //从我的页返回的时候，更换为点击首页
  if (from.path.includes("/my") && to.path == "/home") {
    active.value = "home";
    return;
  }
});
</script>

<style lang="less" scoped></style>
