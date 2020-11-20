<template>
  <div class="contentlistWarp">
    <div>
      <ul class="UlList">
        <li
          @mouseenter="transit(true)"
          @mouseleave="transit(false)"
          v-for="(item, index) in imgS"
          :key="index"
          class="liList"
        >
          <div class="listFonst">
            <img :src="item.itemimg" alt="" />
            <div class="account">
              {{ item.particular }}
            </div>
            <div class="DateFlag">
              <span>{{ item.Date }}</span>
              <span :class="item.icon"></span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import timg from "../../../assets/timg.jpg";
export default {
  props: {},
  data() {
    return {
      imgS: [
        {
          itemimg: timg,
          particular:
            "中国人民保险集团罗熹董事长与瑞士再保险集团首席执行官缪汶中国人民保险集团罗熹董事长与瑞士再保险集团首席执行官缪汶",
          Date: "2020-11-19",
          icon: "el-icon-right"
        },
        {
          itemimg: timg,
          particular:
            "中国人民保险集团罗熹董事长与瑞士再保险集团首席执行官缪汶",
          Date: "2020-11-19",
          icon: "el-icon-right"
        },
        {
          itemimg: timg,
          particular:
            "中国人民保险集团罗熹董事长与瑞士再保险集团首席执行官缪汶",
          Date: "2020-11-19",
          icon: "el-icon-right"
        },
        {
          itemimg: timg,
          particular:
            "中国人民保险集团罗熹董事长与瑞士再保险集团首席执行官缪汶",
          Date: "2020-11-19",
          icon: "el-icon-right"
        }
      ]
    };
  },
  mounted() {
    // console.log(this.imgS);
  },
  methods: {
    transit(flag) {}
  }
};
</script>

<style lang="less" scoped>
.contentlistWarp {
  margin-top: 40px;

  width: 100%;
}
.UlList {
  display: flex;

  width: 100%;
  //   background: pink;
  .listFonst {
    color: #999;
    .account {
      // background: pink;
      min-width: 200px;
      height: 40px;
      margin-top: 20px;
      color: black;
      font-size: 14px;
      line-height: 20px;
      font-weight: 600;
      word-break: break-all;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .DateFlag {
      margin-top: 30px;
      display: flex;
      justify-content: space-between;
    }
  }
  .liList {
    width: 25%;
    height: 283px;
    background: #ffffff;
    padding: 20px;
    transition: height 0.3s;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    margin-right: 15px;
    border-radius: 6px;
    &:hover {
      cursor: pointer;
      transform: translateY(-20px);
      box-shadow: 0 0 20px rgb(251, 203, 194, 0.4);
      .account {
        color: #ff2f17 !important;
      }
    }
  }
}
img {
  width: 100%;
  height: 168px;
  border-radius: 6px;
}
</style>
