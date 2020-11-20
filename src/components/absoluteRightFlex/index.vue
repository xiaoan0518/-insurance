<template>
  <div class="rightflexWarp">
    <div class="rightflex">
      <div class="rightflex-content">
        <div
          class="colorFont"
          v-for="(item, index) in rightflex"
          :key="index"
          @click="serviceProduct(index)"
          @mouseenter="selectService(true, index)"
          @mouseleave="selectService(false, index)"
        >
          <i :class="item.icon"></i><span>{{ item.name }}</span>
        </div>
      </div>
    </div>
    <div
      class="selectHover"
      @mouseenter="selectService(true, 1)"
      @mouseleave="selectService(false, 1)"
    >
      <SERVICESELECT />
    </div>
  </div>
</template>

<script>
import SERVICESELECT from "./serviceSelect/serviceSelect";
export default {
  components: {
    SERVICESELECT
  },
  props: {},
  data() {
    return {
      // ishowHover:false,
      rightflex: [
        { name: "智能客服", icon: "el-icon-chat-dot-round" },
        { name: "精选服务", icon: "el-icon-apple" },
        { name: "全部产品", icon: "el-icon-cherry" }
      ]
    };
  },

  methods: {
    // 智能服务  和全部产品
    serviceProduct(index) {
      if (index == 0) {
        this.$router.push("/contactcenter");
      } else if (index == 2) {
        this.$router.push("/home/allproducts");
      }
    },
    selectService(flag, index) {
      var selectHover = document.querySelector(".selectHover");
      if (index == 1) {
        if (flag) {
          selectHover.className = "drawerhover selectHover";
        } else {
          selectHover.className = "selectHover";
        }
      }
    }
  }
};
</script>

<style lang="less" scoped>

.rightflex {
  position: fixed;
  
  width: 35px;
  right: 0;
  height: 100%;
  background: #3b3f4f;
  z-index: 200;
  color: #ffffff;
  .rightflex-content {
    margin-top: 200px;
  }
  .colorFont {
    text-align: center;
    width: 35px;
    word-wrap: break-word;
    letter-spacing: 2px;
    padding: 20px 0;
    cursor: pointer;
    border-bottom: 1px solid #6c707b;
    &:hover {
      background: #ffffff;
      color: black;
    }
  }
}
.selectHover {
  position:fixed ;
  width: 0;
  opacity: 0;
  height: 625px;
  background: #ffffff;
  top:10%;
  right: 35px;
  // margin-top: -20%;
  color: red;
  z-index: 999;
  transition: height 35s;
  -moz-transition: all 1s;
  -webkit-transition: all 1s;
  -o-transition: all 1s;
}
.drawerhover {
  opacity: 1;
  width: 80%;
}
</style>
