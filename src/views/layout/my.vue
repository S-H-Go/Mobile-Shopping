<template>
  <div>我的</div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/user.js";
import { useRouter } from "vue-router";
const userStore = useUserStore();
const router = useRouter();
const { loginOrNot } = storeToRefs(userStore);
onMounted(() => {
  if (loginOrNot.value == false) {
    router.push("/account/login");
  }
});
</script>

<style lang="less" scoped></style>
