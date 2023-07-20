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
    v-model="sms"
    center
    clearable
    placeholder="请输入验证码"
    @update:model-value="sendData"
  >
    <template #button>
      <van-button size="mini" type="primary" @click="sendSms" color="#fe284d"
        >发送验证码</van-button
      >
    </template>
  </van-field>
</template>

<script setup>
import { ref } from "vue";
import { showDialog } from "@/utils/vant-ui.js";
const emit = defineEmits(["sendData"]);
const phone = ref("");
const sms = ref("");
function sendSms() {
  const reg = /^1[3-9]\d{9}$/;
  if (!phone.value) {
    showDialog({
      message: "手机号不能为空",
    });
  }
  if (!reg.test(phone.value)) {
    showDialog({
      message: "手机号格式不正确",
    });
  }
  console.log("发送验证码");
}

function sendData() {
  emit("sendData", phone.value, sms.value);
}
</script>

<style lang="less" scoped>
.van-field {
  margin-top: 20px;
}
</style>
