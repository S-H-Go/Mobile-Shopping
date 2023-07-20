<template>
  <van-nav-bar title="购物车">
    <template #left>
      <van-icon name="arrow-left" color="#fe284d" size="20" />
    </template>
    <template #right>
      <van-icon name="ellipsis" color="#fe284d" size="30" />
    </template>
  </van-nav-bar>
  <van-empty image="error" description="登录后可同步账户购物车中的商品">
    <van-button round class="bottom-button" color="#fe284d" @click="toLogin"
      >登录</van-button
    >
  </van-empty>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
function toLogin() {
  router.replace("/account/login");
}
</script>

<style lang="less" scoped>
.bottom-button {
  width: 100px;
  height: 40px;
}
</style>
