<template>
  <div id="search-box">
    <van-icon name="arrow-left" @click="turnBack()" />
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      @click="clickSearch"
      @update:model-value="sendValue"
      @search="search"
      shape="round"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useSearchStore } from "@/stores/search";
const searchStore = useSearchStore();
const router = useRouter();
const value = ref("");
const emit = defineEmits(["getValue"]);
function clickSearch() {
  router.push("/search");
}
function turnBack() {
  router.push("/home");
}
function search() {
  searchStore.addHistory(value.value);
}
function sendValue() {
  emit("getValue", value.value);
}
</script>

<style lang="less" scoped>
#search-box {
  display: flex;
  width: 80vw;
  .van-icon {
    width: 10vw;
    text-align: center;
    line-height: 54px;
  }
  .van-search {
    width: 70vw;
  }
}
</style>
