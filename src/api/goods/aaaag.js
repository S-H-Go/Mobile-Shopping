const aaaag = {
  swipesImages: [
    "/src/assets/images/goods/g7.webp",
    "/src/assets/images/goods/g7.webp",
    "/src/assets/images/goods/g7.webp",
    "/src/assets/images/goods/g7.webp",
  ],
  discount: {
    moneyOff: ["满60减8", "满40减5"], // 修改满减优惠金额
    other: [
      {
        tag: "赠品",
        content: "购买即赠蒙牛定制保温杯一个（数量有限，赠完即止）", // 修改赠品描述
      },
      {
        tag: "满减",
        content: "每满10元，可减1元现金", // 修改满减描述
      },
      {
        tag: "限时特惠",
        content: "今日购买立享特价优惠", // 新增限时特惠
      },
    ],
    IOU: "不支持分期付款", // 修改分期付款信息
  },
  selected: {
    selected: "蒙牛特仑苏纯牛奶250ml*16盒（新老包装随机发货）", // 修改商品名称
    deliveryTime: "预计3个工作日内送达",
    freight: "免运费",
    rules: [
      {
        icon: "passed",
        iconColor: "#f43a21",
        text: "正品保障",
      },
      {
        icon: "info-o",
        iconColor: "#929292",
        text: "15天无理由退货（未拆封使用）",
      },
      {
        icon: "passed",
        iconColor: "#f43a21",
        text: "优选新鲜牛奶",
      },
      {
        icon: "passed",
        iconColor: "#f43a21",
        text: "特浓醇香口感",
      },
      {
        icon: "passed",
        iconColor: "#f43a21",
        text: "营养丰富，健康美味",
      },
    ],
  },
  comment: {
    count: "600+",
    favorableRating: "98%",
    tags: [
      {
        title: "香浓顺滑",
        count: 120,
      },
      {
        title: "新鲜美味",
        count: 90,
      },
      {
        title: "方便携带",
        count: 80,
      },
      {
        title: "营养均衡",
        count: 70,
      },
      {
        title: "适合早餐",
        count: 60,
      },
      {
        title: "家庭必备",
        count: 45,
      },
    ],
    comments: [
      {
        username: "MilkLover",
        starRating: 5,
        time: "2023-07-15",
        content:
          "特仑苏纯牛奶真的好喝！香浓顺滑，口感特别好。而且特仑苏的牛奶都是优选新鲜牛奶，营养丰富，早餐的不二之选。特别喜欢赠送的蒙牛定制保温杯，很实用。全家人都喜欢喝，回购无数次了！",
      },
      {
        username: "DairyFan",
        starRating: 4,
        time: "2023-07-10",
        content:
          "这款纯牛奶口感很不错，特别适合早餐。家庭必备的好东西，特别方便携带。但个别包装的盒子有点破损，希望能加强包装。",
      },
    ],
  },
};
export default aaaag;
