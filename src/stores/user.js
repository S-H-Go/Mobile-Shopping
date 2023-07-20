import { ref } from "vue";
import { defineStore } from "pinia";

// 你可以对 `defineStore()` 的返回值进行任意命名，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。(比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
export const useUserStore = defineStore("user", () => {
  let loginOrNot = ref(false);
  let user = ref({});
  // 初始化
  if (JSON.parse(localStorage.getItem("user") != null)) {
    user = ref(JSON.parse(localStorage.getItem("user")));
    loginOrNot = ref(true);
  }
  function changeLoginOrNOot(value) {
    // console.log(user);
    // console.log(user.value);
    if (value) {
      localStorage.setItem("user", JSON.stringify(user.value));
    }
    if (value == false) {
      localStorage.setItem("user", null);
    }
    loginOrNot.value = value;
  }

  function setUser(userInfo) {
    console.log(userInfo);
    user.value = userInfo;
    console.log(user.value);
  }
  return {
    user,
    loginOrNot,
    changeLoginOrNOot,
    setUser,
  };
});

const user = {
  id: 1,
  phone: "123456789",
  password: "123456",
  cart: [],
};
