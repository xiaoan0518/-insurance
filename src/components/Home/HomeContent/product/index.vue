<template>
  <div class="product">
    <div class="productcount">
      <div class="titflag">人保精选</div>
      <ul class="product-Nav">
        <li v-for="(item, index) in productlists" :key="index"  @mouseenter="personage(index)">
          <span class="product-nav-list">{{ item.product }}</span>
          <span class="slash">{{ item.slash }}</span>
        </li>
      </ul>
    </div>
  <anan1 v-if="index==0"/>
  <anan2 v-else-if="index==1"/>
  <anan3 v-else-if="index==2"/>
  <anan4 v-else-if="index==3"/>
  <anan5 v-else-if="index==4"/>
  <anan6 v-else-if="index==5"/>
  <anan7 v-else-if="index==6"/>

  </div>
</template>

<script>
import anan1 from './anan1'
import anan2 from './anan2.vue';
import anan3 from './anan3.vue';
import anan4 from './anan4.vue';
import anan5 from './anan5.vue';
import anan6 from './anan6.vue';
import anan7 from './anan7.vue';
export default {
 components:{
  anan1,
  anan2,
  anan3,
  anan4,
  anan5,
  anan6,
  anan7,
 },
  props: {},
  data() {
    return {
      productlists: [
        { product: "热卖产品", slash: "/" },
        { product: "旅游出行", slash: "/" },
        { product: "交通保障", slash: "/" },
        { product: "关爱家人", slash: "/" },
        { product: "意外保障", slash: "/" },
        { product: "健康管理", slash: "/" },
        { product: "投资理财" }
      ],
      index:0
    };
  },
 methods: {
   personage(index){
   this.index = index
   
  }
 },
};
</script>

<style lang="less" scoped>
.product {
  width: 100%;
  height: 100%;
  margin-top: 30px;
  .productcount {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    // background: pink;
    .titflag {
      font-size: 26px;
      font-weight: 550;
      padding-left: 15px;
      border-left: 5px solid red;
    }
    .product-Nav {
      display: flex;
      li:last-child {
        margin-right: -10px !important;
      }
      li {
        span {
          margin: 0 5px;
        }
        .product-nav-list {
          color: #333;
          cursor: pointer;
          &:hover {
            color: red;
            border-bottom: 1px solid red;
          }
        }
        .slash {
          color: #333;
        }
      }
    }
  }
}
</style>
