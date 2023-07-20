const account = {
  path: "/account",
  component: () => import("../views/account/account.vue"),
  children: [
    {
      path: "/account/login",
      component: () => import("../views/account/login.vue"),
      children: [
        {
          path: "/account/login/CAPTCHA",
          component: () => import("../components/account/CAPTCHAInput.vue"),
        },
        {
          path: "/account/login/Account",
          component: () => import("../components/account/AccountInput.vue"),
        },
      ],
    },
    {
      path: "/account/register",
      component: () => import("../views/account/register.vue"),
      children: [
        {
          path: "/account/register/CAPTCHA",
          component: () => import("../components/account/CAPTCHAInput.vue"),
        },
        {
          path: "/account/register/Account",
          component: () => import("../components/account/AccountInput.vue"),
        },
      ],
    },
  ],
};

export default account;
