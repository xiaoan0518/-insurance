<template>
  <div>
    <div class="block">
      <span class="demonstration"></span>
      <el-carousel height="420px">
        <el-carousel-item v-for="item in imgs" :key="item">
          <img :src="item" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="HomeContent">
     <CONTENTLIST/>
     <TEXTLIST/>
     <PRODUCT/>
    </div>
  </div>
</template>

<script>
import dd2 from "../../assets/dd2.png";
import lll from "../../assets/lll).jpg";
import timg from "../../assets//timg.jpg";
import ttt from "../../assets/ttt.jpg";
import CONTENTLIST from "./HomeContent/contentlist";
import TEXTLIST from './HomeContent/textLIst'
import PRODUCT from './HomeContent/product'
export default {
  components: {
    CONTENTLIST,
    TEXTLIST,
    PRODUCT
  },
  props: {},
  data() {
    return {
      imgs: [dd2, lll, timg, ttt]
    };
  }
};
</script>

<style lang="less">
.block {
  min-width: 1000px;
}
.el-carousel__item:nth-child(2n) {
  background-color: red;
  img {
    width: 100%;
    height: 420px;
  }
}
.el-carousel__item:nth-child(2n + 1) {
  background: blue;
}

/*左右箭头的样式*/
button.el-carousel__arrow.el-carousel__arrow--left,
button.el-carousel__arrow.el-carousel__arrow--right {
  font-size: 12px;
  height: 20px;
  width: 20px;
  display: none;
}
// 导航样式
.el-carousel__button {
  width: 60px;
  height: 9px;
  background: #9eabca;
  opacity: 1;
  -webkit-transform: skew(-30deg);
  -moz-transform: skew(-30deg);
  -o-transform: skew(-30deg);
  transform: skew(-30deg);
}
.el-carousel__indicator.is-active button {
  background: red;
}
.HomeContent {
  width: 80%;
  height: 100%;
  min-width: 1200px;
  margin: 0 auto;
}
</style>
