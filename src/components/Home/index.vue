<template>
    <div>
     <!-- 头部 -->
     <HEADER/>
     <!-- 导航 -->
     <NAV/>
     <SLIDESHOWSWIPER/>
     
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

</style>
