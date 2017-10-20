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
                <img src="../assets/img/recomend/3.jpg" alt="">
            </div>
            <div class="cover-item descr">
                <p class="title">雨声集|你的快乐来自每场雨</p>
                <p class="author">不在扎马尾</p>
            </div>
        </div>
        <div class="handle">
            <div class="handle-item">
                <i class="fa fa-folder-o"></i>
                <p>123万</p>
            </div>
            <div class="handle-item">
                <i class="fa fa-commenting-o"></i>
                <p>123万</p>
            </div>
            <div class="handle-item">
                <i class="fa fa-share-alt" aria-hidden="true"></i>
                <p>123万</p>
            </div>
            <div class="handle-item">
                <i class="fa fa-download" aria-hidden="true"></i>
                <p>123万</p>
            </div>
        </div>
    </div>
    <div class="song-title">
        <div class="icon">
            <i class="fa fa-play-circle-o"></i><span>播放全部<small>(共40首)</small></span>
        </div>
    </div>
    <ul class="song-list">
        <li>
            <div class="number">99</div>
            <div class="songdetail">
                <p class="songname">放你在心里</p>
                <p class="singer">许美静 - 都是夜归人</p>
            </div>
            <div class="moremenu">
               <i class="fa fa-ellipsis-v"></i>
            </div>
        </li>
    </ul>
</div>
</template>
<script>
export default {
  methods: {
    goBack() {
      history.go(-1);
    }
  }
};
</script>

<style scoped lang="less">
@contentBGColor: #76797c;
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: transparent;
  color: #fff;
  height: 60px;
  line-height: 60px;
  .navbar-item-left {
    float: left;
  }
  .navbar-item-right {
    float: right;
  }
  .goback {
    font-size: 40px;
    line-height: 55px;
    padding: 0 20px;
    vertical-align: middle;
  }
  .search,
  .list-menu {
    font-size: 26px;
    padding-right: 20px;
    color: white;
  }
}
.content {
  padding: 60px 15px 15px;
  color: white;
  background-color: @contentBGColor;
  .cover {
    display: flex;
    flex-wrap: nowrap;
  }
  .descr {
    padding-left: 15px;
    .title {
      padding-top: 15px;
      font-size: 20px;
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
      font-size: 28px;
      p {
        font-size: 14px;
        padding-top: 10px;
      }
    }
  }
}
.song-title {
  font-size: 26px;
  line-height: 26px;
  padding: 10px 15px;
  border: 1px solid #ddd;
  span {
    padding-left: 20px;
    display: inline-block;
    vertical-align: bottom;
    font-size: 16px;
    height: 26px;
  }
}
.song-list {
  li {
    height: 60px;
    display: flex;
  }
  .number {
    width: 50px;
    line-height: 60px;
    text-align: center;
  }
  .songdetail {
    flex: 1;
    padding: 5px;
    border-bottom: 1px solid #ddd;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .singer {
      font-size: 12px;
      color: #76797c;
    }
  }
  .moremenu {
    color: #76797c;
    width: 50px;
    line-height: 60px;
    text-align: center;
    border-bottom: 1px solid #ddd;
  }
}
</style>

