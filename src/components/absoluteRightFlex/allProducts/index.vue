<template>
    <div class="allProductsWarp">
     全部产品
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
.allProductsWarp{
    width: 100%;
    height: 800px;
    background: goldenrod;
}
</style>
