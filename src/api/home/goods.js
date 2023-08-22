const goods = [
  {
    id: "aaaaa",
    src: "/images/goods/g1.webp",
    title:
      "海因里希（HEINRICHS）运动鞋男夏季跑步鞋子男潮流时尚轻便透气休闲鞋潮鞋 白色 41",
    desc: "",
    num: "9999",
    price: "1648.00",
  },
  {
    id: "aaaab",
    src: "/images/goods/g2.webp",
    title:
      "石头（roborock）扫地机器人扫拖一体 石头P10自动上下水扫拖洗烘一体机擦地机 自动清洗集尘烘干补水",
    desc: "",
    num: "9999",
    price: "3899.00",
  },
  {
    id: "aaaac",
    src: "/images/goods/g3.webp",
    title:
      "迪士尼（Disney）儿童行李箱女新款18英寸卡通可爱万向轮男女小学生书包儿童拉杆箱 蓝色小象",
    desc: "",
    num: "9999",
    price: "98.00",
  },
  {
    id: "aaaad",
    src: "/images/goods/g4.webp",
    title:
      "闪魔 苹果14pro/14钢化膜 iphone14promax手机膜plus高清抗指纹防爆防窥保护膜 【加强版】2片+神器 iPhone14 Pro",
    desc: "",
    num: "9999",
    price: "18.80",
  },
  {
    id: "aaaae",
    src: "/images/goods/g5.webp",
    title: "金龙鱼 寒地东北大米 5kg",
    desc: "",
    num: "9999",
    price: "27.90",
  },
  {
    id: "aaaaf",
    src: "/images/goods/g6.webp",
    title: "统一 方便面 汤达人 日式豚骨味方便面 五连包 125g*5袋装",
    desc: "",
    num: "9999",
    price: "21.90",
  },
  {
    id: "aaaag",
    src: "/images/goods/g7.webp",
    title: "蒙牛特仑苏纯牛奶250ml*16盒 (新老包装随机发货）",
    desc: "",
    num: "9999",
    price: "64.90",
  },
  {
    id: "aaaah",
    src: "/images/goods/g8.webp",
    title: "Haier海尔冰箱218升大容量DEO净味保鲜直冷三区三温家用电冰箱",
    desc: "",
    num: "9999",
    price: "1199.00",
  },
];

function getGoods(goodsID) {
  const result = goods.filter((item) => item.id === goodsID);
  if (result.length > 0) {
    return result[0];
  }
  return {};
}
export { getGoods, goods };
