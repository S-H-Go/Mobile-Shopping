<template>
  <div id="search-bar">
    <search-box @getValue="getValue"></search-box>
    <div @click="clickSearchButton" id="search-button">搜索</div>
  </div>
  <div>
    <van-cell center title="最近搜索">
      <template #right-icon>
        <van-icon name="delete-o" @click="searchStore.clearHistory()" />
      </template>
    </van-cell>
    <div class="tags tags1">
      <div class="tag" v-for="i in historySearch">
        {{ i }}
      </div>
    </div>
  </div>
  <div>
    <van-cell center title="热门搜索">
      <template #right-icon>
        <div @click="changeHotSearchShow">
          {{ hotSearchStr }}
        </div>
      </template>
    </van-cell>
    <div class="tags tags2" v-show="hotSearchShow">
      <div class="tag" v-for="i in hotSearch">
        {{ i }}
      </div>
    </div>
    <div id="hide-tips" v-show="!hotSearchShow">已隐藏搜索发现</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { showToast } from "@/utils/vant-ui";
import { storeToRefs } from "pinia";
import searchBox from "@/components/searchBox.vue";
import { useSearchStore } from "@/stores/search";
const searchStore = useSearchStore();
const { hotSearch, historySearch } = storeToRefs(searchStore);
const value = ref("");
const hotSearchShow = ref(true);
const hotSearchStr = ref("隐藏");
function clickSearchButton() {
  searchStore.addHistory(value.value);
  showToast(value.value);
}
function changeHotSearchShow() {
  hotSearchShow.value = !hotSearchShow.value;
  hotSearchStr.value = hotSearchShow.value ? "隐藏" : "显示";
}

function getValue(val) {
  value.value = val;
}
</script>

<style lang="less" scoped>
#search-bar {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  #search-button {
    font-size: 14px;
    line-height: 25px;
    padding: 0 12px;
    border-radius: 20px;
    background-color: #fe284d;
    color: white;
  }
}

.tags {
  display: flex;
  flex-direction: columns;
  flex-wrap: wrap;
  margin: 0 12px;
  .tag {
    margin: 5px;
    padding: 2px 10px;
    font-size: 12px;
    color: #686868;
    background-color: #f0f2f5;
  }
  .tag:nth-child(-n + 3) {
    color: red;
  }
}

// 去除最近搜索的前三个的颜色
.tags1 {
  .tag:nth-child(-n + 3) {
    color: #686868;
  }
}

#hide-tips {
  height: 30vw;
  line-height: 30vw;
  font-size: 12px;
  text-align: center;
  color: #686868;
}
</style>
