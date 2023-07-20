<template>
  <div id="cart">
    <van-nav-bar title="购物车">
      <template #right>
        <van-icon name="ellipsis" color="#fe284d" size="30" />
      </template>
    </van-nav-bar>
    <div v-show="!isEmpty">
      <product-cart
        v-for="i in cart"
        :goodsId="i.id"
        :goodsNum="i.num"
        @updateNum="updataCount"
      >
      </product-cart>
    </div>
    <van-empty
      v-show="isEmpty"
      image="error"
      description="购物车为空，快去逛逛吧！"
    >
    </van-empty>
  </div>
  <div id="settle">
    <span class="count">合计￥{{ count }}</span>
    <button>结算</button>
  </div>
</template>

<script setup>
import { ref, onUpdated, onMounted, watch } from "vue";
import ProductCart from "@/components/cart/ProductCart.vue";
import { useUserStore } from "@/stores/user";
import { getGoods } from "@/api/home/goods.js";
const { getCart } = useUserStore();
const cart = ref(getCart);
const isEmpty = ref(true);
let count = ref(0);
onMounted(update);
onMounted(updataCount);
onUpdated(update);
// 当购物车中商品发生变化时，更新总价
watch(cart.value, (newValue, oldValue) => {
  updataCount();
});
function update() {
  if (cart.value.length == 0) {
    isEmpty.value = true;
  } else {
    isEmpty.value = false;
  }
}
function updataCount() {
  count.value = 0;
  for (let i = 0; i < cart.value.length; i++) {
    count.value += Number(getGoods(cart.value[i].id).price) * cart.value[i].num;
  }
  count.value = count.value.toFixed(2);
}
</script>

<style lang="less" scoped>
#cart {
  margin-bottom: 40px;
}
#settle {
  position: fixed;
  width: 92vw;
  height: 40px;
  bottom: 50px;
  display: flex;
  padding-left: 6vw;
  padding-right: 2vw;
  background-color: #ffffff;
  justify-content: flex-end;
  align-items: center;

  .count {
    margin-right: 10px;
  }
  button {
    width: 20vw;
    padding: 5px;
    background-color: #fe284d;
    border-radius: 100px;
    color: white;
    border: none;
    outline: none;
  }
}
</style>
