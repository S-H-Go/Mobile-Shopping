<template>
  <router-view @switchingMethods="switchingLoginMethods"></router-view>
</template>

<script setup>
function switchingLoginMethods(loginMethod, router, mode) {
  let suffix = "登录";
  if (mode == "login") {
    suffix = "登录";
  }
  if (mode == "register") {
    suffix = "注册";
  }
  if (loginMethod.value == "账号密码" + suffix) {
    loginMethod.value = "短信验证码" + suffix;
    router.replace("Account");
  } else {
    loginMethod.value = "账号密码" + suffix;
    router.replace("CAPTCHA");
  }
}
</script>

<style lang="less">
#switching-login-methods {
  display: flex;
  justify-content: space-between;
  padding: 30px 20px;
  font-size: 14px;
  #to-register {
    color: #fe284d;
  }
}
#login {
  background-color: #fe284d;
  border: none;
  outline: none;
  color: #fff;
  width: 80vw;
  font-size: 16px;
  margin: 10px 10vw;
  padding: 8px 0;
  border-radius: 100px;
}
</style>
