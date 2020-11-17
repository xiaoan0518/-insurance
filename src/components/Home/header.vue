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
          <div class="fontDistance" @click="lang('zh')">简单</div>
          <div class="fontDistance">繁体</div>
          <div class="fontDistance" @click="lang('en')">En</div>
          ]
        </div>
        <div class="distance">|</div>
        <div class="distance">公告信息披露</div>
        <div class="distance">|</div>
        <div class="AttentionPicc">
          <div class="distance PiccContent">关注人保</div>
          <div class="AttentionList">
            <div class="AttentionListContent">
              <div class="Picc-img">
                <div><img src="../../../static/img/aw.jpg" alt="" /></div>
                <div>官方微信关注</div>
              </div>
              <div class="Picc-img">
                <div>
                  <img src="../../../static/img/aw.jpg" alt="" />
                  <div>官方微信关注</div>
                </div>
              </div>
              <div class="Picc-img">
                <div>
                  <img src="../../../static/img/aw.jpg" alt="" />
                  <div>官方微信关注</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {{$t('basic.AllFields')}}
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
    },
    lang(key) {
      // key 传入‘zh’ 或者‘en’
      this.language = key;
      this.$i18n.locale = key;
      window.localStorage.setItem("lang", this.language);
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
  background: pink;
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
    .AttentionPicc {
      position: relative;
      &:hover {
        .AttentionList {
          display: block;
        }
      }
      .AttentionList {
        position: absolute;
        z-index: 999;
        right: 0;
        top: 35px;
        width: 400px;
        height: 145px;
        color: black;
        // background: pink;
        display: none;
        .AttentionListContent {
          display: flex;
          justify-content: space-between;
          .Picc-img{
              text-align: center;
              img{
                  width: 100px;
                  margin-top: 20px;
              }
          }
        }
      }
    }
  }
}
</style>
