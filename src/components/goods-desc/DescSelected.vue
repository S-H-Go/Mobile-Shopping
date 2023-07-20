<template>
  <div class="rounded-card">
    <div>
      <van-cell>
        <template #title>
          <span class="custom-title">已选</span>
          <span class="selected content">{{ selected.selected }}</span>
        </template>
        <template #right-icon>
          <van-icon name="ellipsis" size="30" />
        </template>
      </van-cell>
      <van-cell :border="false" class="to">
        <template #title>
          <span class="custom-title">送至</span>
          <span class="address content">北京朝阳区三环到四环之间</span>
        </template>
        <template #right-icon>
          <van-icon name="ellipsis" size="30" />
        </template>
      </van-cell>
      <div class="spot-goods">
        <span>现货</span>现在下单，承诺7月21日发货，预计7月24日送达
      </div>
      <van-cell :border="false">
        <template #title>
          <span class="custom-title">运费</span>
          <span class="freight content">{{ selected.freight }}</span>
        </template>
      </van-cell>
      <div class="rule">
        <div>
          <span v-for="rule in selected.rules" :key="rule.text"
            ><van-icon :name="rule.icon" :color="rule.iconColor" />{{
              rule.text
            }}</span
          >
        </div>
        <van-icon name="ellipsis" size="30" />
      </div>
    </div>
  </div>
  <div class="interval"></div>
</template>

<script setup>
import { toRefs, defineProps } from "vue";
const props = defineProps(["selected"]);
const { selected } = toRefs(props);
</script>

<style lang="less" scoped>
.van-cell {
  .custom-title {
    font-weight: 700;
    font-size: 14px;
    margin-right: 10px;
  }
  .content {
    font-weight: 400;
    font-size: 13px;
  }
}
.to {
  padding-bottom: 0;
}
.spot-goods {
  font-size: 10px;
  padding-left: 35px;
  padding-right: 20px;
  padding-bottom: 10px;
  margin: 0 20px;
  font-weight: 100;
  color: #999999;
  border-radius: 0;
  border-bottom: 1px solid #f5f6f7;
  span {
    margin-right: 4px;
    color: red;
  }
}
.rule {
  display: flex;
  padding-left: 15px;
  padding-top: 10px;
  padding-bottom: 8px;
  background-color: #fafafa;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: #fafafa;
    span {
      margin-right: 5px;
      margin-bottom: 2px;
      font-size: 12px;
      color: #8c8c8c;
      .van-icon {
        margin-right: 2px;
      }
    }
  }
  .van-icon {
    margin-right: 16px;
  }
}
</style>
