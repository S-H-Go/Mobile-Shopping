const goodsDesc = {
  path: "/goods_desc",
  children: [
    {
      path: "/goods_desc/:goodsId",
      component: () => import("@/views/goods-desc/GoodsDesc.vue"),
    },
  ],
};

export default goodsDesc;
