<template>
  <div id="sub-category">
    <div v-for="item in currentCategory">
      <h1>{{ item.title }}</h1>
      <van-grid :border="false" :column-num="3" :gutter="15">
        <van-grid-item v-for="i in item.goods">
          <van-image :src="i.src"></van-image>
          <div>{{ i.text }}</div>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script setup>
import { ref, onUpdated } from "vue";
import { useRoute } from "vue-router";
import routerMap from "@/api/category/routerMap.js";

const route = useRoute();
const currentCategory = ref(routerMap[route.params.subcategory]);
// 更新之后切换子路由
onUpdated(() => {
  currentCategory.value = routerMap[route.params.subcategory];
});
</script>

<style lang="less" scoped>
// 去除滚动条
::-webkit-scrollbar {
  display: none;
}
#sub-category {
  width: 75vw;
  height: calc(100vh - 50px - 54px);
  overflow: auto;
  h1 {
    margin: 10px 5px 10px;
    font-weight: 600;
    font-size: 14px;
  }

  .van-grid {
    margin: 0 10px 0;
    align-content: flex-start;
    .van-grid-item {
      .van-image {
        margin-bottom: 6px;
      }
      div {
        font-size: 12px;
      }
    }
  }
}
</style>
