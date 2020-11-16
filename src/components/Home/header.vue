<template>
  <div class="headerwarp">
    <div class="headerNav">
      <div class="loginNav">
        <div class="welcome">您好，欢迎来带xxx官网</div>
        <div class="login  vertical" @click="login('enter')">登录</div>
        <div class="vertical">|</div>
        <div class="login" @click="login('registry')">注册</div>
      </div>
      <div class="noticeNav">
        <div class="distance">投资者关系</div>
        <div class="fontConvert ">
          [
          <div class="fontDistance">简单</div>
          <div class="fontDistance">繁体</div>
          <div class="fontDistance">En</div>
          ]
        </div>
        <div class="distance">|</div>
        <div class="distance">公告信息披露</div>
        <div class="distance">|</div>
        <div class="distance">关注人保</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  methods: {
    login(Trends) {
      this.$router.push({ name: "login", params: { Trends: Trends } });
    }
  }
};
</script>

<style lang="less" scoped>
.headerwarp {
  width: 100%;
  background: #f5f5f5;
}
.headerNav {
  width: 85%;
  min-width: 1000px;
  height: 35px;
  line-height: 35px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  font-size: 14px;
  color: #999;
  .loginNav {
    display: flex;
    width: 300px;
    .welcome {
      margin-right: 30px;
      margin-left: 10px;
    }
    .vertical {
      margin-right: 10px;
    }
    .login {
      cursor: pointer;
      &:hover {
        color: red;
      }
    }
  }
  .noticeNav {
    display: flex;
    cursor: pointer;
    .distance {
      margin: 0 10px;
      &:hover {
        color: red;
      }
    }
    .fontConvert {
      display: flex;
      .fontDistance {
        margin: 0 5px;
        &:hover {
          color: red;
        }
      }
    }
  }
}
</style>
