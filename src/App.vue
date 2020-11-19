<template>
  <div id="app">
    <ABSOLUTERIGHTFLEX></ABSOLUTERIGHTFLEX>
   
    <router-view />
  </div>
</template>

<script>
import ABSOLUTERIGHTFLEX from './components/absoluteRightFlex'
export default {
  name: "App",
  components:{
    ABSOLUTERIGHTFLEX
  },
  data() {
    return {
    
    };
  }
};
</script>

<style lang="less">
#app {
  width: 100%;
  height: 100%;
  position: relative;
  
}
</style>
