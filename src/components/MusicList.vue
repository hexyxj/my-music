<template>
<div class="music-list">
    <div class="navbar clearfix">
        <div class="navbar-item-left goback" @click="goBack">
            <icon name="angle-left"></icon>
        </div>
        <div class="navbar-item-left title">歌单</div>
        <div class="navbar-item-right list-menu">
            <!-- <icon name="ellipsis-v"></icon> -->
            <icon name="reorder"></icon>
        </div>
        <router-link class="navbar-item-right search " to="/search">
           <icon name="search"></icon>
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
                <icon name="folder-o"></icon>
                <p>{{collect|TooBig}}</p>
            </div>
            <div class="handle-item">
                <icon name="commenting-o"></icon>
                <p>{{message|TooBig}}</p>
            </div>
            <div class="handle-item">
                <icon name="share-alt" aria-hidden="true"></icon>
                <p>{{share|TooBig}}</p>
            </div>
            <div class="handle-item">
                <icon name="download" aria-hidden="true"></icon>
                <p>{{download|TooBig}}</p>
            </div>
        </div>
    </div>
    <div class="song-title">
        <div class="icon">
            <icon name="play-circle-o"></icon><span>播放全部<small>{{'(共'+musicList.length+'首)'}}</small></span>
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
               <icon name="ellipsis-v"></icon>
            </div>
        </li>
    </ul>
    <my-player :message="playSong" :clIsActive="isActive"></my-player>
</div>
</template>
<script>
import axios from "axios";
export default {
  data: function() {
    return {
      musicList: [],
      share: 0,
      collect: 0,
      message: 0,
      download: 0,
      musicListName: "",
      author: "",
      musicListImg: "",
      playSong: null,
      isActive:true
    };
  },
  mounted: function() {
    console.log("musicList");
    axios.get("static/data/musicList.json").then(response => {
      this.musicList = response.data.dataList;
      this.share = response.data.share;
      this.collect = response.data.collect;
      this.message = response.data.message;
      this.download = response.data.download;
      this.musicListName = response.data.musicListName;
      this.author = response.data.author;
      this.musicListImg = response.data.musicListImg;
    });
  },
  methods: {
    goBack: function() {
      history.go(-1);
    },
    playMusic: function(tmp) {
 
      this.playSong = tmp;
      this.isActive=false;
    }
  },
  filters: {
    TooBig: function(value) {
      if (value > 100000) {
        return Math.round(value / 10000) + "万";
      } else {
        return value;
      }
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
  background-color: rgba(0, 0, 0, 0.4);
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
    font-size: @fontSizeM;
    margin-right: 30px;
    color: white;
  }
}
.content {
  padding: 95px 15px 15px;
  color: white;
  background-color: @contentBGColor;
  .cover {
    display: flex;
    flex-wrap: nowrap;
  }
  .cover-item > img {
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
  padding-bottom: 120px;
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
      font-size: @fontSizeXS;
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

