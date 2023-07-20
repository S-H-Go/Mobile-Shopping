<template>
  <div class="rounded-card">
    <div>
      <van-cell :border="false">
        <template #title>
          <span class="custom-title comment">评价</span>
          <span class="comment-count">{{ comment.count }}</span>
        </template>
        <template #right-icon>
          <span class="favorable-rating"
            >好评度 {{ comment.favorableRating }}</span
          >
          <van-icon name="arrow" size="16px" />
        </template>
      </van-cell>
      <div class="tags">
        <span v-for="tag in comment.tags"
          >{{ tag.title }}({{ tag.count }})</span
        >
      </div>
      <div v-for="item in comment.comments" class="comment">
        <van-cell :border="false">
          <template #title>
            <van-icon name="contact" class="avatar" size="20" />
            <span class="custom-title username">{{
              hideUserName(item.username)
            }}</span>
            <van-rate v-model="item.starRating" size="10" />
          </template>
          <template #right-icon>
            <div class="right">
              {{ item.time }}
            </div>
          </template>
        </van-cell>
        <div class="content">{{ item.content }}</div>
      </div>
      <div class="all-comment">
        <input class="all-comment-btn" type="button" value="查看全部评价" />
      </div>
    </div>
  </div>
  <div class="interval"></div>
</template>

<script setup>
import { toRefs, defineProps } from "vue";
const props = defineProps(["comment"]);
const { comment } = toRefs(props);
function hideUserName(name) {
  return name.replace(/^(.).*(.)$/, "$1***$2");
}
</script>

<style lang="less" scoped>
span.comment {
  font-weight: 700;
  margin-left: 10px;
  position: relative;
}
span.comment::before {
  content: "";
  width: 3px;
  height: 16px;
  position: absolute;
  top: 0;
  left: -8px;
  background: linear-gradient(to bottom, #f55641, #fce2de);
}
.comment-count {
  font-weight: 700;
  margin-left: 5px;
  font-size: 12px;
}
.favorable-rating {
  color: #8c8c8c;
  font-size: 12px;
}
.van-icon {
  margin-top: 4px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  padding-left: 10px;
  // padding-bottom: 20px;
  span {
    padding: 5px 10px;
    margin: 5px 10px;
    border-radius: 100px;
    font-size: 12px;
    background-color: #fcedeb;
  }
}
div.comment {
  .avatar {
    position: relative;
    top: 4px;
    margin-right: 10px;
  }
  .username {
    font-size: 10px;
    margin-right: 10px;
  }
  .right {
    position: relative;
    top: 6px;
    font-size: 10px;
    color: #a699a6;
  }
  .content {
    font-size: 12px;
    padding: 10px 0 20px;
    margin: 0 20px;
  }
}
div.comment:nth-child(3) {
  .content {
    border-bottom: 1px solid #f2f2f2;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
}
.all-comment {
  display: flex;
  justify-content: center;
  align-items: center;
  .all-comment-btn {
    font-size: 12px;
    text-align: center;
    background-color: #ffffff;
    border: 1px solid #eeeeee;
    margin: 20px;
    padding: 5px 10px;
    border-radius: 100px;
  }
}
</style>
