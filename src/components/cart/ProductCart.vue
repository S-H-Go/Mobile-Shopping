<template>
  <div class="interval"></div>
  <van-row>
    <van-col span="22" offset="1">
      <van-swipe-cell>
        <van-card
          lazy-load
          :key="goods.id"
          :price="goods.price"
          :desc="desc.selected.selected"
          :title="goods.title"
          :thumb="goods.src"
        >
          <template #footer>
            <div class="goodsNum">
              <van-button size="mini" @click="sub">-</van-button>
              <span class="num">{{ props.goodsNum }}</span>
              <van-button size="mini" @click="add">+</van-button>
            </div>
          </template>
        </van-card>
        <template #right>
          <van-button
            square
            text="删除"
            type="danger"
            class="delete-button"
            @click="deleteGoods"
          />
        </template>
      </van-swipe-cell>
    </van-col>
  </van-row>
  <div class="interval"></div>
</template>

<script setup>
import { ref, onUpdated } from "vue";
import getGoodsDesc from "@/api/goods/";
import { getGoods } from "@/api/home/goods.js";
import { useUserStore } from "@/stores/user";
const { deleteCart, updateCart } = useUserStore();
const props = defineProps(["goodsId", "goodsNum"]);
const emit = defineEmits(["updateNum"]);
const goods = ref(getGoods(props.goodsId));
const desc = ref(getGoodsDesc(props.goodsId));
onUpdated(() => {
  goods.value = getGoods(props.goodsId);
});
function deleteGoods() {
  deleteCart(goods.value.id);
}
function sub() {
  if (props.goodsNum > 1) {
    updateCart(goods.value.id, props.goodsNum - 1);
    emit("updateNum");
  }
}
function add() {
  updateCart(goods.value.id, props.goodsNum + 1);
  emit("updateNum");
}
</script>

<style lang="less" scoped>
.van-row {
  background-color: #f2f2f2;
  .van-card {
    background-color: white;
    .van-card__footer {
      font-size: 0;
      .goodsNum {
        display: inline-block;
        height: 23px;
        background-color: rgba(128, 128, 128, 0.1);
        border-radius: 6px;
        border: 1px solid rgba(128, 128, 128, 0.2);
        font-size: 0;
        .num {
          display: inline-block;
          line-height: 23px;
          font-size: 14px;
          padding: 0 8px;
          background-color: rgba(128, 128, 128, 0.2);
          border-left: 1px solid rgba(128, 128, 128, 0.3);
          border-right: 1px solid rgba(128, 128, 128, 0.3);
        }
        .van-button {
          position: relative;
          top: -4px;
          left: 0px;
          width: 20px;
          color: grey;
          margin: 0;
          background-color: rgba(128, 128, 128, 0);
          font-size: 15px;
          border: none;
          outline: none;
        }
      }
    }
  }
}
.delete-button {
  height: 100%;
  background-color: #fe284d;
  border: none;
}
/* 卡片之间的间隔 */
.interval {
  background-color: #f2f2f2;
  height: 7px;
}
</style>
