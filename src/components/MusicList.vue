<template>
<div class="music-list">
    <div class="navbar clearfix">
        <div class="navbar-item-left goback" @click="goBack">
            <i class="fa fa-angle-left"></i>
        </div>
        <div class="navbar-item-left title">歌单</div>
        <div class="navbar-item-right list-menu">
            <!-- <i class="fa fa-ellipsis-v"></i> -->
            <i class="fa fa-reorder"></i>
        </div>
        <router-link class="navbar-item-right search " to="/search">
           <i class="fa fa-search"></i>
        </router-link>
    </div>
    <div class="content">
        <div class="cover">
            <div class="cover-item">
                <img :src="musicListImg" alt="">
            </div>
            <div class="cover-item descr">
                <p class="title">{{musicListName}}</p>
                <p class="author">{{author}}</p>
            </div>
        </div>
        <div class="handle">
            <div class="handle-item">
                <i class="fa fa-folder-o"></i>
                <p>{{collect}}</p>
            </div>
            <div class="handle-item">
                <i class="fa fa-commenting-o"></i>
                <p>{{message}}</p>
            </div>
            <div class="handle-item">
                <i class="fa fa-share-alt" aria-hidden="true"></i>
                <p>{{share}}</p>
            </div>
            <div class="handle-item">
                <i class="fa fa-download" aria-hidden="true"></i>
                <p>{{download}}</p>
            </div>
        </div>
    </div>
    <div class="song-title">
        <div class="icon">
            <i class="fa fa-play-circle-o"></i><span>播放全部<small>{{'(共'+musicList.length+'首)'}}</small></span>
        </div>
    </div>
    <ul class="song-list">
        <li v-for="(tmp,index) in musicList" :key="index" @click="playMusic(tmp)">
            <div class="number">{{index+1}}</div>
            <div class="songdetail">
                <p class="songname">{{tmp.name}}</p>
                <p class="singer">{{tmp.songer}}</p>
            </div>
            <div class="moremenu">
               <i class="fa fa-ellipsis-v"></i>
            </div>
        </li>
    </ul>
    <my-player :message="playSong"></my-player>
</div>
</template>
<script>
import axios from 'axios'
export default {
  data:function(){
    return {
      musicList:[],
      share:0,
      collect:0,
      message:0,
      download:0,
      musicListName:"",
      author:"",
      musicListImg:"",
      playSong:null
    }
  },
  mounted:function(){
    console.log("musicList")
    axios.get("static/data/musicList.json").then(response=>{
      this.musicList=response.data.dataList;
      this.share=response.data.share;
      this.collect=response.data.collect;
      this.message=response.data.message;
      this.download=response.data.download;
      this.musicListName=response.data.musicListName;
      this.author=response.data.author;
      this.musicListImg=response.data.musicListImg
      if(this.share>100000){
        this.share=Math.round(this.share/10000)+"万";
      }
      if(this.collect>100000){
        this.collect=Math.round(this.collect/10000)+"万";
      }
      if(this.message>100000){
        this.message=Math.round(this.message/10000)+"万";
      }
      if(this.download>100000){
        this.download=Math.round(this.download/10000)+"万";
      }
    })
  },
  methods: {
    goBack:function() {
      history.go(-1);
    },
    playMusic:function(tmp){
      this.playSong=tmp;
    }
  }
};
</script>

<style scoped lang="less">
@import url(../assets/css/variable.less);
@contentBGColor: #76797c;
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: transparent;
  color: #fff;
  height: 80px;
  line-height: 80px;
  font-size: @fontSizeM;
  .navbar-item-left {
    float: left;
  }
  .navbar-item-right {
    float: right;
  }
  .goback {
    font-size: @fontSizeXL;
    line-height: 75px;
    padding: 0 20px;
    vertical-align: middle;
  }
  .search,
  .list-menu {
    font-size: @fontSizeS;
    padding-right: 20px;
    color: white;
  }
}
.content {
  padding: 80px 15px 15px;
  color: white;
  background-color: @contentBGColor;
  .cover {
    display: flex;
    flex-wrap: nowrap;
  }
  .cover-item>img{
    width: 300px;
  }
  .descr {
    padding-left: 15px;
    .title {
      padding-top: 15px;
      font-size: @fontSizeM;
    }
    .author {
      padding-top: 20px;
      font-size: 14px;
    }
  }
  .handle {
    padding-top: 20px;
    display: flex;
    .handle-item {
      width: 25%;
      text-align: center;
      font-size: @fontSizeL;
      p {
        font-size: @fontSizeXS;
        padding-top: 10px;
      }
    }
  }
}
.song-title {
  font-size: @fontSizeL;
  line-height: 32px;
  padding: 10px 15px;
  border: 1px solid #ddd;
  span {
    padding-left: 20px;
    display: inline-block;
    vertical-align: bottom;
    font-size: @fontSizeS;
    height: 32px;
  }
}
.song-list {
  padding-bottom:160px; 
  li {
    height: 100px;
    display: flex;
  }
  .number {
    width: 60px;
    line-height: 100px;
    text-align: center;
  }
  .songdetail {
    flex: 1;
    padding: 5px;
    border-bottom: 1px solid #ddd;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: @fontSizeM;
    .singer {
      font-size: 24px;
      color: #76797c;
    }
  }
  .moremenu {
    color: #76797c;
    width: 50px;
    line-height: 100px;
    text-align: center;
    border-bottom: 1px solid #ddd;
  }
}
</style>

