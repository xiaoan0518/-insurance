<template>
  <div class="navWarp">
    <div class="nav-content">
      <el-row :gutter="20">
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <img
              class="img-logo"
              src="//group.picccdn.cn/images/logo_20191205.jpg"
              alt=""
            />
          </div>
        </el-col>
        <el-col :span="14">
          <div class="grid-content bg-purple">
            <ul class="nav-uL">
              <li
                v-for="(item, index) in navs"
                :key="index"
                @mouseenter="streak(true, index)"
                @mouseleave="streak(false, index)"
              >
                <span :class="{ navList: navListActive == index }">{{
                  item.nav
                }}</span>
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="right-Search">
            <el-row :gutter="20">
              <el-col :span="12"
                ><div class="grid-content bg-right">
                  <el-button
                    :class="{
                      btnsearch: btnsearch,
                      btnsearchHover: btnsearchHover
                    }"
                    @mouseenter.native="btnSerch(true)"
                    @mouseleave.native="btnSerch(false)"
                  >
                    <i class="el-icon-search icon"></i>
                    <span>产品搜索</span>
                  </el-button>
                </div></el-col
              >
              <el-col :span="12"
                ><div class="grid-content bg-right">
                  <el-button
                    :class="{
                      btnsearch: btnsearch,
                      personagehovue: personagehovue
                    }"
                    @mouseenter.native="personage(true)"
                    @mouseleave.native="personage(false)"
                  >
                    <i class="el-icon-user icon"></i>
                    <span>个人中心</span>
                    <i
                      class="el-icon-caret-bottom icon"
                      v-if="personagehovue"
                    ></i>
                    <i class="el-icon-caret-top" v-else></i>
                  </el-button></div
              ></el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="navtopdrawer">
      <NAVTOPDRAWER :hoverindex="hoverindex" />
    </div>
    <div class="box"></div>
  </div>
</template>

<script>
import NAVTOPDRAWER from "../Drawer";
export default {
  components: {
    NAVTOPDRAWER
  },
  props: {},
  data() {
    return {
      hoverindex: null,
      btnsearch: true,

      btnsearchHover: false,
      personagehovue: false,
      navListActive: null,
      navs: [
        { nav: "首页" },
        { nav: "保险" },
        { nav: "理财" },
        { nav: "服务中心" },
        { nav: "理赔中心" },
        { nav: "关于人保" }
      ]
    };
  },
  methods: {
    streak(flag, index) {
      var drawerhover = document.querySelector('.navtopdrawer')
      if (flag) {
        if (index !==2 && index !== 0) {
           drawerhover.className = 'navtopdrawer drawerhover'
        }
       
       
         this.hoverindex = index ;
        this.navListActive = index;
      } else {
        this.navListActive = null;
        this.hoverindex = null;
         drawerhover.className = 'navtopdrawer'
      }
    },
    btnSerch(flag) {
      if (flag) {
        this.btnsearchHover = true;
      } else {
        this.btnsearchHover = false;
      }
    },
    personage(flag) {
      if (flag) {
        this.personagehovue = true;
      } else {
        this.personagehovue = false;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.navWarp {
  width: 100%;
  .nav-content {
    width: 85%;
    min-width: 1000px;
    margin: 0 auto;
    .bg-purple {
      .img-logo {
        width: 163px;
        height: 94px;
      }
    }
    .grid-content {
      border-radius: 4px;
      min-height: 100px;
    }
    .nav-uL {
      display: flex;
      height: 100px;
      line-height: 100px;
      font-size: 18px;
      color: #666;
      justify-content: space-around;
      padding: 0 3px;
      .navList {
        border-bottom: 4px solid #ff532b;
        color: #ff532b;
        padding-bottom: 10px;
      }
    }
    .right-Search {
      height: 100px;
      line-height: 100px;
      text-align: center;
      .btnsearch {
        width: 113px;
        height: 40px;
        border: 1px solid #d7d7d7;
        border-radius: 4px;
        font-size: 14px;
        cursor: pointer;
        box-sizing: border-box;
        .icon {
          color: #999;
        }
      }
      .btnsearchHover,
      .personagehovue {
        width: 113px;
        height: 40px;
        border: 1px solid red;
        border-radius: 4px;
        font-size: 14px;
        cursor: pointer;
        box-sizing: border-box;
        span {
          color: red;
        }
        .icon {
          color: red;
        }
      }
    }
    .el-button {
      padding: 0;
    }
  }
  .navtopdrawer {
    position: absolute;
    background:#fff;
    width: 100%;
    height: 0px;
    transition: height 55s;
    -moz-transition: all 1s;
    -webkit-transition: all 1s;
    -o-transition: all 1s;
  }
  .drawerhover {
    height: 300px;
  }
  .box{
    width: 100%;
    height: 500px;
    background: gold;
  }
}
</style>
