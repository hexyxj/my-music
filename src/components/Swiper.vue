<template>
  <swipe class="my-swipe">
  <swipe-item v-for="(temp,index) in swiperlist" :key="index"><img :src="temp.imgUrl" alt=""></swipe-item>
  <!-- <swipe-item class="slide1"><img src="../assets/img/1.png" alt=""></swipe-item> -->
  <!-- <swipe-item class="slide2"><img src="../assets/img/2.png" alt=""></swipe-item> -->
  <!-- <swipe-item class="slide3"><img src="../assets/img/3.png" alt=""></swipe-item> -->
</swipe>
</template>
<script>
export default {
  props:["swiperlist"],
  mounted:function(){
    // console.log(this.swiperlist);
  }
  
}
</script>
<style lang="less" scoped>
.my-swipe {
  width: 100%;
  height: 280px;
  margin: 0 auto;
  color: #fff;
  font-size: 30px;
  text-align: center;
  img{
    height: 100%;
  }
}

</style>

