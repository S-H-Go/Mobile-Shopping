import { ref } from "vue";
import { defineStore } from "pinia";

export const useUsersStore = defineStore("users", () => {
  let users = ref([]);
  let id = ref(0);
  function addUser(user) {
    if (localStorage.getItem("users") == null) {
      localStorage.setItem("users", JSON.stringify([]));
    }
    users = ref(JSON.parse(localStorage.getItem("users")));
    user.id = id.value++;
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
    users = ref(JSON.parse(localStorage.getItem("users")));
    return users.value.find((u) => {
      return u.phone == user.phone && u.password == user.password;
    });
  }
  return {
    addUser,
    checkUser,
  };
});
