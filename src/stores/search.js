import { ref } from "vue";
import { defineStore } from "pinia";
import { get } from "vant/lib/utils";

// 你可以对 `defineStore()` 的返回值进行任意命名，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。(比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
export const useSearchStore = defineStore("search", () => {
  const hotSearch = ref([
    "多肉植物种子",
    "汽车坐垫",
    "打印机",
    "天然气灶双灶",
    "按摩器",
    "泡茶壶",
    "照片扫描仪",
    "增压花洒喷头",
    "欧式果盘",
    "风信子种球",
    "遛狗绳",
    "电压力锅",
  ]);

  const historySearch = ref([]);

  function addHistory(value) {
    historySearch.value.push(value);
  }
  function clearHistory() {
    historySearch.value = [];
  }
  return {
    hotSearch,
    historySearch,
    addHistory,
    clearHistory,
  };
});
