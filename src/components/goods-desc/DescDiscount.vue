<template>
  <div class="rounded-card">
    <div>
      <van-cell :border="false">
        <template #title>
          <span class="custom-title">优惠</span>
          <van-tag
            mark
            v-for="item in discount.moneyOff"
            color="#ff8373"
            plain
            >{{ item }}</van-tag
          >
        </template>
        <template #right-icon>
          <van-icon name="ellipsis" size="30" />
        </template>
      </van-cell>
      <div class="other-discount">
        <p v-for="item in discount.other">
          <van-tag color="#f2270c" plain>{{ item.tag }}</van-tag
          >{{ item.content }}
        </p>
      </div>
      <van-cell :border="false">
        <template #title>
          <span class="custom-title">白条</span>
          <span>{{ discount.IOU }}</span>
        </template>
        <template #right-icon>
          <van-icon name="ellipsis" size="30" />
        </template>
      </van-cell>
    </div>
  </div>
  <div class="interval"></div>
</template>

<script setup>
import { toRefs, defineProps } from "vue";
const props = defineProps(["discount"]);
const { discount } = toRefs(props);
</script>

<style lang="less" scoped>
.van-cell {
  padding-bottom: 0;
  .custom-title {
    margin-right: 10px;
  }
  .van-tag {
    margin-right: 10px;
  }
}
// 其他优惠
.other-discount {
  margin-left: 55px;
  font-size: 12px;
  p {
    width: 80vw;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    margin: 0;
    margin-bottom: 12px;
  }
}
</style>
