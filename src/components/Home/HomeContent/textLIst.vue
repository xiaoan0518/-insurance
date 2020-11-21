<template>
  <div class="textListWarp">
    <div class="titlErecount">咨询中心</div>
    <div>
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <div class="grid-content-header">
              <div class="title-header">
                <i class="el-icon-s-unfold"></i><span>集体要闻</span>
              </div>
              <div class="right-skip">
                <span>更多</span><i class="el-icon-right"></i>
              </div>
            </div>
            <ul class="ulListtext">
              <li
                class="litext"
                v-for="(item, index) in icontText"
                :key="index"
              >
                <div style=" display: flex;">
                  <span class="itemText">
                    <i :class="item.icon"></i>{{ item.text }}</span
                  >
                  <span>{{ item.Date }}</span>
                </div>
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <div class="grid-content-header">
              <div class="title-header">
                <i class="el-icon-s-unfold"></i><span>集体要闻</span>
              </div>
              <div class="right-skip">
                <span>更多</span><i class="el-icon-right"></i>
              </div>
            </div>
            <ul class="ulListtext">
              <li
                class="litext"
                v-for="(item, index) in icontText"
                :key="index"
              >
                <div style=" display: flex;">
                  <span class="itemText">
                    <i :class="item.icon"></i>{{ item.text }}</span
                  >
                  <span>{{ item.Date }}</span>
                </div>
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <div class="culture">
              <div class="culture-firm culture-hover">
                <div class="culture-firm-content  ">企业文化</div>
              </div>

              <div class="brand-publicity">
                <div class="brand-content  ">品牌宣传</div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      icontText: [
        {
          icon: "el-icon-caret-right",
          text:
            "中国人民保险集团罗熹董事长与瑞士再保险集团首席执行官缪汶乐先生举行视频会谈",
          Date: "2020-11-19"
        },
        {
          icon: "el-icon-caret-right",
          text:
            "中国人民保险集团罗熹董事长与瑞士再保险集团首席执行官缪汶乐先生举行视频会谈",
          Date: "2020-11-19"
        },
        {
          icon: "el-icon-caret-right",
          text:
            "中国人民保险集团罗熹董事长与瑞士再保险集团首席执行官缪汶乐先生举行视频会谈",
          Date: "2020-11-19"
        },
        {
          icon: "el-icon-caret-right",
          text:
            "中国人民保险集团罗熹董事长与瑞士再保险集团首席执行官缪汶乐先生举行视频会谈",
          Date: "2020-11-19"
        },
        {
          icon: "el-icon-caret-right",
          text:
            "中国人民保险集团罗熹董事长与瑞士再保险集团首席执行官缪汶乐先生举行视频会谈",
          Date: "2020-11-19"
        }
      ]
    };
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

// title信息
.grid-content-header {
  display: flex;
  justify-content: space-between;
  border-bottom: #d7d7d7 1px solid;
  height: 50px;
  line-height: 50px;
  .title-header {
    .el-icon-s-unfold {
      font-size: 20px;
      color: red;
    }
    span {
      margin-left: 5px;
      font-size: 18px;
      font-weight: 400;
    }
  }
  .right-skip {
    color: #9999;
    cursor: pointer;
    font-size: 16px;
    &:hover {
      color: red;
    }
    span {
      margin-right: 10px;
    }
  }
}
.ulListtext {
  .litext {
    width: 100%;
    height: 35px;
    line-height: 35px;
    color: #666;
    cursor: pointer;
    .itemText {
      display: inline-block;
      width: 75%;
      // color: red;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    &:hover {
      color: red;
    }
  }
}
.culture {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  .culture-firm,
  .culture-hover {
    position: absolute;
    width: 258px;
    height: 78px;
    top: 40px;
    border: 1px #999 solid;
    cursor: pointer;
    &:hover {
      color: red;
      border: 1px red solid;
    }
  }
  .culture-firm-content {
    position: absolute;
    left: 75px;
    top: 5px;
    left: 5px;
    z-index: 30;
    background: #ffffff;
    width: 258px;
    height: 78px;
    border: 1px #999 solid;
    &:hover {
      border: 1px red solid;
    }
  }
  .brand-publicity {
    position: absolute;
    width: 258px;
    height: 78px;
    top: 140px;
    border: 1px #999 solid;
    cursor: pointer;
    &:hover {
      color: red;
      border: 1px red solid;
    }
    .brand-content {
      position: absolute;
      left: 75px;
      top: 5px;
      left: 5px;
      z-index: 30;
      background: #ffffff;
      width: 258px;
      height: 78px;
      border: 1px #999 solid;
      &:hover {
        border: 1px red solid;
      }
    }
  }
}
.bg-purple {
  height: 240px;
  background: #ffffff;
}
</style>
