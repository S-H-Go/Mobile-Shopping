<template>
  <van-field
    v-model="phone"
    center
    clearable
    placeholder="请输入手机号"
    @update:model-value="sendData"
  >
  </van-field>
  <van-field
    v-model="password"
    center
    clearable
    placeholder="请输入登录密码"
    @update:model-value="sendData"
  >
  </van-field>
</template>

<script setup>
import { ref } from "vue";
const emit = defineEmits(["sendData"]);
const phone = ref("");
const password = ref("");
function sendData() {
  emit("sendData", phone.value, password.value);
}
</script>

<style lang="less" scoped>
.van-field {
  margin-top: 20px;
}
</style>
