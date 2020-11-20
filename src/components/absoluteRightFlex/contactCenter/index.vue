<template>
    <div class="contactCenterWarp">
     智能客服
     <el-button @click="$router.back()">返回</el-button>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {

        };
    },
};
</script>

<style lang="less"  scoped>
.contactCenterWarp{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 300;
    background: pink;
}
</style>
