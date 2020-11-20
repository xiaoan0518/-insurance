<template>
  <div>
    <div class="rightflex">
      <div class="rightflex-content">
        <div class="colorFont" v-for="(item, index) in rightflex" :key="index" @click="serviceProduct(index)"@mouseenter="selectService(index)">
          <i :class="item.icon"></i><span>{{ item.name }}</span>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
     rightflex: [
        { name: "智能客服",icon:"el-icon-chat-dot-round" },
        { name: "精选服务",icon:"el-icon-apple"},
        { name: "全部产品",icon:"el-icon-cherry" }
      ]
    };
  },
  methods: {
    // 智能服务  和全部产品
    serviceProduct(index){
      if (index == 0) {
       this.$router.push('/contactcenter')
      }else if(index == 2){
        this.$router.push('/home/allproducts')
      }
    },
    selectService(index){
      console.log(index);
      
    }
  },
};
</script>

<style lang="less" scoped>

.rightflex {
    position: absolute;
    width: 35px;
    right: 0;
    height: 100%;
    background: #3b3f4f;
    z-index: 999;
    color: #ffffff;
    .rightflex-content {
      margin-top: 200px;
    }
    .colorFont {
      text-align: center;
      width: 35px;
      word-wrap: break-word;
      letter-spacing: 2px;
      padding:20px 0;
      cursor: pointer;
      border-bottom: 1px solid #6c707b;
      &:hover{
        background: #ffffff;;
        color: black;
      }
    }
  }
  </style>
