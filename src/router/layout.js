import Layout from "../views/layout/layout.vue";

const layout = {
  path: "/",
  //重定向
  redirect: "/home",
  component: Layout,
  children: [
    {
      path: "/home",
      component: () => import("../views/layout/home.vue"),
    },
    {
      path: "/cart/null",
      component: () => import("../views/layout/cartnull.vue"),
    },
    {
      path: "/cart/:id",
      component: () => import("../views/layout/cart.vue"),
    },
    {
      path: "/category",
      component: () => import("../views/layout/category.vue"),
      children: [
        {
          path: "/category/:subcategory",
          component: () => import("../components/SubCategory.vue"),
        },
      ],
    },
    {
      path: "/my",
      component: () => import("../views/layout/my.vue"),
    },
  ],
};
export default layout;
