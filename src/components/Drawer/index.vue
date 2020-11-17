<template>
  <div class="NavTopDrawer"  >
    <div class="DrawerWarp" >
      <div class="Drawe-Content">
       <div v-if="hoverindex == 0">首页无内容</div>
       <div v-else-if="hoverindex == 1">保险</div>
       <div v-else-if="hoverindex == 2">理财无内容</div>
       <div v-else-if="hoverindex == 3">服务中心</div>
       <div v-else-if="hoverindex == 4">理赔中心</div>
       <div v-else-if="hoverindex == 5">关于人保</div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hoverindex:Number
  },
  data() {
    return {
     
    };
  },
  updated() {
    
    // console.log(this.hoverindex);
  },
};
</script>

<style lang="less" scoped>
.NavTopDrawer {
  width: 100%;
  .DrawerWarp {
    width: 85%;
    min-width: 1000px;
    background: green;
    margin: 0 auto;
   
  }
}
</style>
