<template>
  <div class="recomend">
    <!-- <p>个性推荐</p> -->
    <div class="r-container">
      <div class="slider">
        <my-swiper :swiperlist="swiperList"></my-swiper>
        <!-- <ul class="slider-img clearfix">
          <li>
            <a href="#"><img src="../../assets/img/2.png" alt=""></a>
          </li>
          <li>
            <a href="#"><img src="../../assets/img/2.png" alt=""></a>
          </li>
          <li>
            <a href="#"><img src="../../assets/img/3.png" alt=""></a>
          </li>
          <li>
            <a href="#"><img src="../../assets/img/4.png" alt=""></a>
          </li>
        </ul>
        <ul class="slider-inds">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul> -->
      </div>
      <div class="cards">
        <div class="card-item">
          <div class="card-btn">
            <icon name="address-card"></icon>
          </div>
          <p class="card-title">私人FM</p>
        </div>
        <div class="card-item">
          <div class="card-btn">
            <icon name="calendar-check-o"></icon>
          </div>
          <p class="card-title">每日推荐</p>
        </div>
        <div class="card-item">
          <div class="card-btn">
            <icon name="server"></icon>
          </div>
          <p class="card-title">歌单</p>
        </div>
        <div class="card-item">
          <div class="card-btn">
            <icon name="bar-chart-o"></icon>
          </div>
          <p class="card-title">排行榜</p>
        </div>
      </div>
      <div class="music-list">
        <div class="list-header">
          <icon name="calendar"></icon>
          <span>推荐歌单</span>
        </div>
        <ul class="list-ul">
          <li v-for="(tmp,index) in recomendList" :key="index" @click="jumpToMusicList(tmp.id)">
            <img :src="tmp.imgUrl" alt=""/>
              <div class="item-content">
                {{tmp.descr}}
              </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import mySwiper from '../Swiper.vue'
Vue.component('my-swiper', mySwiper);
export default {
  data:function(){
    return{
      swiperList:[],
      recomendList:[]
    }
  },
  mounted:function(){
    this.$emit("whoIsActive","music");
    axios.get("static/data/swiper.json").then(response=>{
      // console.log(response);
      this.swiperList=response.data;
    }).catch(error=>{
      console.log(error);
    });
    axios.get("static/data/recomendList.json").then(response=>{
      // console.log(response);
      this.recomendList=response.data;
    }).catch(error=>{
      console.log(error);
    })
     /*  this.swiperList=[
      {imgHref:"#",imgUrl:"static/img/1.png"},
      {imgHref:"#",imgUrl:"static/img/2.png"},
      {imgHref:"#",imgUrl:"static/img/3.png"},
      {imgHref:"#",imgUrl:"static/img/4.png"},
      ]; */
  },
  methods:{
    jumpToMusicList:function(listId){
      // console.log(listId);
      this.$router.push("/musiclist")
    }
  }

};
</script>
<style scoped lang="less">
@import "../../assets/css/variable.less";
.recomend {
  width: 100%;
  height: 100%;
}

.slider {
  position: relative;
  overflow: hidden;
}

.slider-img {
  display: flex;
  width: 400%;
}

.slider-img li {
  flex: 1;
}

.slider-inds {
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: 10px;
  left: 0;
}

.slider-inds li {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: #fff;
}

.slider-inds li:not(first-child) {
  margin-right: 10px;
}

img {
  width: 100%;
}

.cards {
  display: flex;
  padding: 20px 5%;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
}

.card-item {
  text-align: center;
  width: 20%;
  p {
    font-size: @fontSizeXS;
  }
}

.card-btn {
  display: inline-block;
  text-align: center;
  line-height: 60px;
  width: 60px;
  height: 60px;
  border-radius: 36px;
  border: 2px solid @themeColor;
  padding: 5px;
  font-size: @fontSizeM;
  color: @themeColor;
}

.card-title {
  color: @themeColor;
  padding-top: 5px;
}

.list-header {
  padding-top: 10px;
  color: @themeColor;
  padding-left: 10px;
  font-size: @fontSizeS;
  > span {
    font-size: 24px;
    color: #000;
  }
}
.list-ul {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  li {
    padding-top: 15px;
    width: 30%;
    div.item-content {
      font-size: @fontSizeXS;
      padding-top: 10px;
    }
  }
}
</style>