<template>
  <div>
    <div v-show="!loginOrNot">
      <van-empty image="error" description="登录后即可查看信息">
        <van-button round class="bottom-button" color="#fe284d" @click="toLogin"
          >登录</van-button
        >
      </van-empty>
    </div>
    <div v-show="loginOrNot">
      <div id="head">
        <van-image
          round
          width="5rem"
          height="5rem"
          src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
        <div id="head-content">
          <span id="phone">账号:{{ user.phone }} </span>
        </div>
      </div>
      <button id="logout" @click="logout">退出登录</button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/user.js";
import { useUsersStore } from "@/stores/users.js";
import { useRouter } from "vue-router";
const userStore = useUserStore();
const router = useRouter();
const { loginOrNot, user } = storeToRefs(userStore);
const { changeLoginOrNOot } = userStore;
const { saveCart } = useUsersStore();
function toLogin() {
  router.replace("/account/login");
}
function logout() {
  changeLoginOrNOot(false);
  // 退出登录时保存购物车信息
  saveCart(user.value.id, user.value.cart);
  router.push("/home");
}
</script>

<style lang="less" scoped>
#head {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 6rem;
  background: linear-gradient(to bottom, #fef1e1, #ffe3b4);
}

.bottom-button {
  width: 100px;
  height: 40px;
}
#logout {
  width: 20vw;
  height: 30px;
  display: block;
  position: absolute;
  bottom: 50px;
  left: 40vw;
  background-color: #fe284d;
  border: none;
  outline: none;
  border-radius: 100px;
  color: white;
  border: none;
  font-size: 14px;
}
</style>
