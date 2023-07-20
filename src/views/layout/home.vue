<template>
  <van-row>
    <van-col span="3" offset="1"><span>商城</span></van-col>
    <van-col span="19">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        shape="round"
        @click="clickSearch"
      >
        <template #action>
          <div @click="onClickButton" id="search-button">搜索</div>
        </template>
      </van-search>
    </van-col>
  </van-row>
  <van-row>
    <van-col span="22" offset="1">
      <van-swipe :autoplay="3000" lazy-render>
        <van-swipe-item v-for="swipe in swipes" :key="swipe">
          <van-image :src="swipe"></van-image>
        </van-swipe-item>
      </van-swipe>
    </van-col>
  </van-row>
  <van-row>
    <van-col span="22" offset="1">
      <van-grid :border="false" :column-num="5" square clickable>
        <van-grid-item
          v-for="img in images"
          :key="img"
          :text="img.text"
          :icon="img.src"
        >
        </van-grid-item>
      </van-grid>
    </van-col>
  </van-row>
  <van-row>
    <van-col span="22" offset="1">
      <van-card
        lazy-load
        v-for="good in goods"
        :key="good.id"
        :num="good.num"
        :price="good.price"
        :desc="good.desc"
        :title="good.title"
        :thumb="good.src"
        @click="onClickCard(good.id)"
      />
    </van-col>
  </van-row>
</template>

<script setup>
import { ref } from "vue";
import { showToast } from "@/utils/vant-ui";
import { useRouter } from "vue-router";
import swipes from "@/api/home/swipes.js";
import images from "@/api/home/images.js";
import { goods } from "@/api/home/goods.js";

const router = useRouter();
const value = ref("");

const clickSearch = () => {
  router.push("/search");
  // showToast(value.value);
};
const onClickButton = () => {
  showToast(value.value);
};

function onClickCard(id) {
  router.push("/goods_desc/" + id);
}
</script>

<style lang="less" scoped>
.van-row {
  .van-col.van-col--3 {
    text-align: center;
    line-height: 54px;
    color: #fe284d;
  }
}

.van-search__action {
  #search-button {
    line-height: 25px;
    padding: 0 12px;
    border-radius: 20px;
    background-color: #fe284d;
    color: white;
  }
}

.van-swipe {
  border-radius: 20px;
}
</style>
