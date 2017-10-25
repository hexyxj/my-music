<template>
  <div class="home">
    <div class="banner" >
      <div class="flex-box">
          <router-link to="/music" :class="{active:musicActive,'menu-btn':true}"  @click.native="menuChange('music')">音乐</router-link>
      </div>
      <div class="flex-box">
          <router-link to="/video" :class="{active:videoActive,'menu-btn':true}" @click.native="menuChange('video')">视频</router-link>
      </div>
      <div class="flex-box">
          <router-link to="/bs" :class="{active:bsActive,'menu-btn':true}" @click.native="menuChange('bs')">主播电台</router-link>
      </div>
    </div>
    <router-view  @whoIsActive="checkMenu"></router-view>
  </div>
</template>

<script>
export default {
  data:function(){
    return {
      musicActive:true,
      videoActive:false,
      bsActive:false
    }
  },
  mounted: function() {
    
  },
  methods: {
    checkMenu(msg){
      // console.log(msg);
      this.menuChange(msg);
    },
    menuChange(str) {
      if(str=="music"){
        this.musicActive=true;
        this.videoActive=false;
        this.bsActive=false;
      }
      if(str=="video"){
        this.musicActive=false;
        this.videoActive=true;
        this.bsActive=false;
      }
      if(str=="bs"){
        this.musicActive=false;
        this.videoActive=false;
        this.bsActive=true;
      }
    }
  }
};
</script>

<style scroped lang="less">
@import "../../assets/css/variable.less";
.banner {
  border-bottom: 1px solid #ddd;
  display: flex;
}
.flex-box {
  flex: 1;
  text-align: center;
  a {
    box-sizing: border-box;
    display: block;
    text-align: center;
    font-size: @fontSizeS;
    text-decoration: none;
    color: #000;
    padding: 15px;
  }
  a.active {
    border-bottom: 4px solid @themeColor;
    color: @themeColor;
  }
}
</style>
