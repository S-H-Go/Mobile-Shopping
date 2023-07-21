import { ref } from "vue";
import { defineStore } from "pinia";

export const useUsersStore = defineStore("users", () => {
  let users = ref([]);
  let id = 0;
  function addUser(user) {
    if (localStorage.getItem("users") == null) {
      localStorage.setItem("users", JSON.stringify([]));
    }
    users = ref(JSON.parse(localStorage.getItem("users")));
    user.id = id++;
    user.cart = [];
    if (users.value.find((u) => u.phone === user.phone) == null) {
      users.value.push(user);
      localStorage.setItem("users", JSON.stringify(users.value));
      return true;
    } else {
      return false;
    }
  }
  function checkUser(user) {
    if (localStorage.getItem("users") == null) {
      localStorage.setItem("users", JSON.stringify([]));
    }
    users = ref(JSON.parse(localStorage.getItem("users")));
    return users.value.find((u) => {
      return u.phone == user.phone && u.password == user.password;
    });
  }
  function saveCart(id, cart) {
    users = ref(JSON.parse(localStorage.getItem("users")));
    const index = users.value.findIndex((item) => item.id == id);
    users.value[index].cart = cart;
    localStorage.setItem("users", JSON.stringify(users.value));
  }
  return {
    addUser,
    checkUser,
    saveCart,
  };
});
