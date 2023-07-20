import { createRouter, createWebHashHistory } from "vue-router";
import layout from "./layout";
import goodsDesc from "./goods-desc";
import account from "./account";
import search from "../views/search/search.vue";

const routes = [
  layout,
  goodsDesc,
  account,
  { path: "/search", component: search },
];
const router = createRouter({
  //内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});

export default router;
