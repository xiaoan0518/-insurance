<template>
  <div class="textListWarp">
    <div class="titlErecount">咨询中心</div>
    <div>
      <el-row :gutter="20">
        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.textListWarp {
  width: 100%;
  height: 300px;
  margin-top: 30px;
  
  .titlErecount {
    font-size: 26px;
    font-weight: 550;
    padding-left: 15px;
    border-left: 5px solid red;
    margin-bottom: 20px;
  }
}
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
   height: 300px;
    background: #99a9bf;
  }
  .bg-purple {
   height: 300px;
    background: #d3dce6;
  }
  .bg-purple-light {
   
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
