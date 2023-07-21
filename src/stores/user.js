import { toRef, ref, computed } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  let loginOrNot = ref(false);
  let user = ref({});
  // 初始化
  if (JSON.parse(localStorage.getItem("user") != null)) {
    user = ref(JSON.parse(localStorage.getItem("user")));
    var cart = toRef(user.value, "cart");
    loginOrNot = ref(true);
  } else {
    loginOrNot = ref(false);
  }
  function changeLoginOrNOot(value) {
    loginOrNot.value = value;
    if (value) {
      localStorage.setItem("user", JSON.stringify(user.value));
    }
    if (value == false) {
      localStorage.removeItem("user");
    }
  }

  function setUser(userInfo) {
    user.value = userInfo;
  }

  function addCart(product) {
    if (cart.value.find((item) => item.id === product.id)) {
      return false;
    } else {
      cart.value.push(product);
      localStorage.setItem("user", JSON.stringify(user.value));
      return true;
    }
  }

  const getCart = computed(() => cart.value);
  function updateCart(goodsId, num) {
    const index = cart.value.findIndex((item) => item.id === goodsId);
    cart.value[index].num = num;
    localStorage.setItem("user", JSON.stringify(user.value));
  }
  function deleteCart(goodsId) {
    const index = cart.value.findIndex((item) => item.id == goodsId);
    console.log(index);
    cart.value.splice(index, 1);
    localStorage.setItem("user", JSON.stringify(user.value));
  }

  return {
    user,
    loginOrNot,
    changeLoginOrNOot,
    setUser,
    addCart,
    getCart,
    updateCart,
    deleteCart,
  };
});

const product = {
  id: "aaaaa",
  num: 1,
};
const user = {
  id: 1,
  phone: "123456789",
  password: "123456",
  cart: [],
};
