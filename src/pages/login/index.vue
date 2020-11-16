<template>
  <div class="loginWarp">
    <div class="loginEnter" v-if="this.Trends === 'enter'">
      登录界面
    </div>
   
    <!-- {{this.$route.params.Trends}} -->
    <div class="loginRegistry" v-else>注册界面</div>
  </div>
</template>

<script>
export default {
  props: {
    Trends: String
  },
  data() {
    return {};
  },
 
};
</script>

<style lang="less" scoped></style>
