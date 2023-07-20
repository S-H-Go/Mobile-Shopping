import aaaaa from "./aaaaa";
import aaaab from "./aaaab";
import aaaac from "./aaaac";
import aaaad from "./aaaad";
import aaaae from "./aaaae";
import aaaaf from "./aaaaf";
import aaaag from "./aaaag";
import aaaah from "./aaaah";
const goods = {
  aaaaa,
  aaaab,
  aaaac,
  aaaad,
  aaaae,
  aaaaf,
  aaaag,
  aaaah,
};
function getGoodsDesc(goodsID) {
  if (Object.keys(goods).includes(goodsID)) {
    return goods[goodsID];
  } else {
    return {
      swipesImages: [],
      discount: {
        moneyOff: [],
        other: [
          {
            tag: "",
            content: "",
          },
        ],
        IOU: "",
      },
      selected: {
        selected: "",
        deliveryTime: "",
        freight: "",
        rules: [],
      },
    };
  }
}

const rules = [
  {
    icon: "passed",
    iconColor: "#f43a21",
    text: "商家发货&售后",
  },
  {
    icon: "info-o",
    iconColor: "#929292",
    text: "7天无理由退货（使用后不支持）",
  },
  {
    icon: "passed",
    iconColor: "#f43a21",
    text: "晚发赔",
  },
  {
    icon: "passed",
    iconColor: "#f43a21",
    text: "送运费险",
  },
  {
    icon: "passed",
    iconColor: "#f43a21",
    text: "30天价保险",
  },
  {
    icon: "passed",
    iconColor: "#f43a21",
    text: "免费上门取退",
  },
  {
    icon: "passed",
    iconColor: "#f43a21",
    text: "急速审核",
  },
  {
    icon: "passed",
    iconColor: "#f43a21",
    text: "可配送港澳台及海外",
  },
];

export default getGoodsDesc;
