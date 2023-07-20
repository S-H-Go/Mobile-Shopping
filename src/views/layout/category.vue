<template>
  <van-row>
    <van-col span="24">
      <search-box></search-box>
    </van-col>
  </van-row>
  <div id="container">
    <van-sidebar v-model="active">
      <van-sidebar-item
        v-for="item in category"
        :title="item.title"
        :to="item.to"
      />
    </van-sidebar>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import category from "@/api/category/category.js";
import searchBox from "@/components/SearchBox.vue";
const active = ref(0);
const router = useRouter();
// 默认显示热门推荐
onMounted(() => {
  router.replace("/category/hot");
});
</script>

<style lang="less" scoped>
// 去除滚动条
::-webkit-scrollbar {
  display: none;
}
#container {
  display: flex;
  height: calc(100vh - 50px - 54px);
  .van-sidebar {
    width: 25vw;
    overflow: auto;
    .van-sidebar-item {
      padding: 0;
      height: 45px;
      line-height: 45px;
      text-align: center;
    }
  }
}
</style>
