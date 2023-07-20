<template>
  <div class="container" @scroll="handleScroll($event)">
    <div v-show="showBox">
      <van-nav-bar
        fixed
        title="商品详情"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>

    <desc-head
      :swipesImages="goodsDesc.swipesImages"
      :price="goods.price"
      :title="goods.title"
    ></desc-head>
    <desc-discount :discount="goodsDesc.discount"></desc-discount>
    <desc-selected :selected="goodsDesc.selected"></desc-selected>
    <desc-comment :comment="goodsDesc.comment"></desc-comment>
    <van-divider
      :style="{ color: 'red', borderColor: 'red', padding: '0 16px' }"
      >下面没有了</van-divider
    >
  </div>
  <van-action-bar :placeholder="true">
    <van-action-bar-icon icon="shop-o" text="店铺" color="#ee0a24" />
    <van-action-bar-icon icon="chat-o" text="客服" />
    <van-action-bar-icon icon="cart-o" text="购物车" />
    <van-action-bar-button
      type="warning"
      @click="addProduct"
      text="加入购物车"
    />
    <van-action-bar-button type="danger" text="立即购买" />
  </van-action-bar>
</template>

<script setup>
import DescHead from "@/components/goods-desc/DescHead.vue";
import DescDiscount from "@/components/goods-desc/DescDiscount.vue";
import DescSelected from "@/components/goods-desc/DescSelected.vue";
import DescComment from "@/components/goods-desc/DescComment.vue";
import { ref } from "vue";
import { useUserStore } from "@/stores/user.js";
import { useRouter, useRoute } from "vue-router";
import getGoodsDesc from "@/api/goods";
import { getGoods } from "@/api/home/goods";
import { showToast } from "@/utils/vant-ui.js";
const routes = useRouter();
const route = useRoute();
const { addCart } = useUserStore();
const goodsId = route.path.replace("/goods_desc/", "");
const goodsDesc = getGoodsDesc(goodsId);
const goods = getGoods(goodsId);
function onClickLeft() {
  routes.go(-1);
}
const showBox = ref(false);
function handleScroll(event) {
  const scrollTop = event.target.scrollTop;
  if (scrollTop > 40) {
    showBox.value = true;
  } else {
    showBox.value = false;
  }
}
function addProduct() {
  if (addCart({ id: goodsId, num: 1 })) {
    showToast({
      message: "加入购物车成功",
      position: "bottom",
    });
  } else {
    showToast({
      message: "商品已在购物车中，请不要重复添加",
      position: "bottom",
    });
  }
}
</script>

<style lang="less">
.container {
  height: 100vh;
  overflow-y: scroll;
}
// 淡入的动画
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* 各个卡片的圆角 */
.rounded-card {
  background-color: #f2f2f2f2;
  div {
    background-color: #ffffff;
    border-radius: 15px;
  }
}
/* 卡片之间的间隔 */
.interval {
  background-color: #f2f2f2;
  height: 15px;
}
</style>
