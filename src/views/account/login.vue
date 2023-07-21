<template>
  <van-nav-bar
    title="登录"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
  />
  <router-view @sendData="getData"></router-view>
  <p id="switching-login-methods">
    <span @click="switchingLoginMethods">
      {{ method }}
    </span>
    <span id="to-register" @click="toRegister">没有账号?点击这里注册</span>
  </p>
  <input type="button" value="登录" id="login" @click="login" />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useUsersStore } from "@/stores/users.js";
import { useUserStore } from "@/stores/user.js";
import { showDialog } from "@/utils/vant-ui.js";
const { checkUser } = useUsersStore();
const { userLogin } = useUserStore();
const emit = defineEmits(["switchingMethods"]);
const method = ref("短信验证码登录");
const router = useRouter();
const input1 = ref("");
const input2 = ref("");
// 默认使用短信验证码登录
onMounted(() => {
  router.replace("/account/login/account");
});
//返回
function onClickLeft() {
  router.replace("/");
}
function toRegister() {
  router.replace("/account/register");
}

function switchingLoginMethods() {
  emit("switchingMethods", method, router, "login");
}
function getData(inp1, inp2) {
  input1.value = inp1;
  input2.value = inp2;
}
function login() {
  if (method.value == "账号密码登陆") {
    showDialog({
      message: "暂不支持验证码登录",
    });
    return;
  }
  let user = checkUser({
    phone: input1.value,
    password: input2.value,
  });
  if (user == undefined) {
    showDialog({
      message: "账号或密码错误",
    });
    return;
  }
  userLogin(user);
  showDialog({
    message: "登陆成功",
  });
  router.replace("/my");
}
</script>

<style lang="less" scoped></style>
