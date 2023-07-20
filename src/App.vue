<script setup></script>

<template>
  <router-view />
</template>

<style>
/* 宫格里的内边距设置为0 */
.van-grid-item__content {
  padding: 0 !important;
}
/* 商品卡片的样式 */
.van-card {
  padding: 0;
  border-radius: 10px;
  .van-card__thumb {
    /* 图片右边设置为直角边 */
    .van-image__img {
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    }
  }
  /* 商品标题的内边距 */
  .van-card__title {
    padding-top: 4px;
    padding-right: 4px;
  }
  /* 不显示商品卡片下面的数量 */
  .van-card__num {
    display: none;
  }
}
/* 宫格里面的文字的上边距设置为0 */
.van-grid-item__icon + .van-grid-item__text {
  margin-top: 0 !important;
}

/* 使输入框里面的按钮垂直居中 */
.van-field__button {
  display: flex;
}
</style>
