<template>
  <div class="footerWarp">
    <el-row :gutter="20">
      <el-col :span="9">
        <div class="grid-content bg-purple ">
          <el-row :gutter="20">
            <el-col :span="16"
              ><div class="grid-content bg-purple bg-purple-left">
                <div class="title">集团成员</div>
                <ul class="fontUl">
                  <li>
                    <span>人保财险</span>
                    <span>人保财险</span>
                    <span>人保财险</span>
                    <span>人保财险</span>
                    <span>人保财险</span>
                    <span>人保财险</span>
                    <span>人保财险</span>
                    <span>人保财险</span>
                    <span>人保财险</span>
                    <span>人保财险</span>
                    <span>人保财险</span>
                  </li>
                </ul>
              </div></el-col
            >
            <el-col :span="8"
              ><div class="grid-content bg-purple bg-purple-right">
                <ul class="fontUlRight">
                  <li>人保财险</li>
                  <li>人保财险</li>
                  <li>人保财险</li>
                  <li>人保财险</li>
                  <li>人保财险</li>
                </ul>
              </div></el-col
            >
          </el-row>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple center">
          <div class="title">集团成员</div>
          <ul>
            <li>投保成员</li>
            <li>投保成员</li>
            <li>投保成员</li>
            <li>投保成员</li>
            <li>投保成员</li>
          </ul>
        </div>
      </el-col>
      <el-col :span="9"
        ><div class="grid-content bg-purple center">
          <div class="title">集团成员</div>
          <ul>
            <li>投保成员</li>
            <li>投保成员</li>
            <li>投保成员</li>
            <li>投保成员</li>
            <li>投保成员</li>
          </ul>
        </div></el-col
      >
    </el-row>
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
.footerWarp {
  margin-top: 10px;
  height: 300px;
  .bg-purple-left {
    .title {
      font-size: 18px;
      margin: 0px 0 30px 10px;
    }
    .fontUl {
      span {
        display: inline-block;
        width: 30%;
        line-height: 30px;
        &:hover {
          color: red;
        }
      }
    }
  }
  .bg-purple-right {
    .fontUlRight {
      margin-top: 48px;
      li {
        line-height: 30px;
        &:hover {
          color: red;
        }
      }
    }
  }
  .center {
    .title {
      font-size: 18px;
      margin: 0px 0 30px 0px;
    }
    li {
      line-height: 30px;
       &:hover {
          color: red;
        }
    }
  }
}

</style>
