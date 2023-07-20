<template>
  <div id="desc-head">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in props.swipesImages" :key="image">
        <van-image :src="image"></van-image>
      </van-swipe-item>
      <template #indicator="{ active, total }">
        <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
      </template>
    </van-swipe>
    <van-cell :border="false" :title="price">
      <!-- 使用 right-icon 插槽来自定义右侧图标 -->
      <template #right-icon>
        <van-grid :border="false" :column-num="2" :icon-size="20">
          <van-grid-item icon="cash-o" text="降价提醒" icon-color="black" />
          <van-grid-item icon="like-o" text="收藏" icon-color="black" />
        </van-grid>
      </template>
    </van-cell>
    <div class="title">
      <span>
        {{ props.title }}
      </span>
    </div>
    <div class="interval"></div>
  </div>
</template>

<script setup>
import { computed, defineProps } from "vue";
const props = defineProps(["swipesImages", "price", "title"]);
const price = computed(() => {
  return "￥" + props.price;
});
</script>

<style lang="less" scoped>
// 轮播图指示器
.custom-indicator {
  position: absolute;
  right: 0px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.5);
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
}
.dest-head {
  background-color: black;
}

.van-swipe {
  .van-image {
    width: 100vw;
  }
  height: 360px;
}
.van-cell {
  font-size: 20px;
  height: 48px;
  line-height: 38px;
  padding-bottom: 0;
  background-color: #ffffff;
  color: #f2270c;
  border: none;

  .van-grid {
    width: 100px;
  }
}
.title {
  background-color: #f2f2f2;
  font-weight: 600;
  span {
    display: block;
    padding: 10px 20px 10px;
    background-color: #ffffff;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }
}
</style>
