<template>
    <div class="HomeWarp">
     <!-- 头部 -->
     <HEADER/>
     <!-- 导航 -->
     <NAV/>
     <!-- <SLIDESHOWSWIPER/> -->
    <router-view></router-view>
     
    </div>
</template>

<script>
import HEADER from './header'
import NAV from './Nav'
import SLIDESHOWSWIPER from './slideshowSwiper'
export default {
 components:{
    HEADER,
    NAV,
    SLIDESHOWSWIPER
 },
};
</script>

<style lang="less"  scoped>
.HomeWarp{
    background: #EDEEF3;
}
</style>
