<template>
  <van-nav-bar
    title="注册"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
  />
  <router-view @sendData="getData"></router-view>
  <p id="switching-login-methods">
    <span @click="switchingMethods">
      {{ method }}
    </span>
  </p>
  <input type="button" value="注册" id="login" @click="register" />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useUsersStore } from "@/stores/users.js";
import { showDialog } from "@/utils/vant-ui.js";
const { addUser } = useUsersStore();
const emit = defineEmits(["switchingMethods"]);
const method = ref("短信验证码注册");
const router = useRouter();
const input1 = ref("");
const input2 = ref("");

// 默认使用账号密码注册
onMounted(() => {
  router.replace("/account/register/account");
});
function onClickLeft() {
  router.go(-1);
}

function switchingMethods() {
  emit("switchingMethods", method, router, "register");
}
function getData(inp1, inp2) {
  input1.value = inp1;
  input2.value = inp2;
}

function register() {
  // const phoneReg = /^1[3|4|5|7|8][0-9]{9}$/;
  const phoneReg = /.*/;
  if (method.value == "账号密码注册") {
    showDialog({
      message: "暂不支持验证码注册",
    });
    return;
  }
  if (phoneReg.test(input1.value)) {
    if (
      addUser({
        phone: input1.value,
        password: input2.value,
        cart: [],
      })
    ) {
      showDialog({
        message: "注册成功",
      });
      router.replace("/account/login");
    } else {
      showDialog({
        message: "注册失败，请不要重复注册",
      });
    }
  } else {
    showDialog({
      message: "手机号格式不正确",
    });
  }
}
</script>

<style lang="less" scoped></style>
