<template>
    <div class="player" v-if="message && music">
      <ul class="current-list" v-if="isVisibility && currentList">
        <li v-for="(tmp,index) in currentList" :key="index" @click="palyMusic(tmp,index)">
            <div class="number">{{index+1}}</div>
            <div class="songdetail">
                <p class="songname">{{tmp.name}}</p>
                <p class="singer">{{tmp.songer}}</p>
            </div>
            <div class="moremenu" @click="deleteSong($event,index)">
               <icon name="close"></icon>
            </div>
        </li>
      </ul>
        <audio :src="music.songUrl" id="musictrl" preload="auto"></audio>
        <div class="progress-bar">
            <div class="current-time" :style="{width:currentWidth}"></div>
        </div>
        <div class="player-cover">
            <div class="player-img">
                <img :src="music.imgUrl" alt="">
            </div>
            <div class="song-descr">
                <p class="song-name">{{music.name}}</p>
                <p class="singer">{{music.songer}}</p>
            </div>
            <div class="song-ctrl" @click="playOrPause">
              <icon scale='1.5' :name="isPlaying ? 'pause-circle-o' : 'play-circle-o'"></icon>
            </div>
            <div class="player-menu" @click="showPlayList">
              <icon name="ellipsis-v" scale="1.5" ></icon>
            </div>
        </div>
        
    </div>
</template>
<script>
// import Image from "../assets/img/button/start.png";
export default {
  props: ["message","clIsActive"],
  data: function() {
    return {
      currentWidth: "2px",
      music: null,
      isVisibility: false,
      currentList: null,
      myIndex:null,
      isPlaying: true
    };
  },
  mounted: function() {
    var songCtrl = document.getElementById("musictrl");
    if (songCtrl) {
      songCtrl.oncanplay = () => {
        songCtrl.play();
        // this.isPlaying = true;
        this.startProgressBar();
      };
    }
  },
  updated: function() {
    // this.music = this.message;
    // console.log(this.message); 
    var songCtrl = document.getElementById("musictrl");
      if (songCtrl) {
        songCtrl.play();
        // this.isPlaying = true;
        songCtrl.oncanplay = () => {
          this.startProgressBar();
        };
      }
  },
  watch: {
    message:function(){
      this.music = this.message;
      this.isVisibility=this.clIsActive;
      var list = localStorage.getItem("currentList");
      var listObj = JSON.parse(list) || [];
      listObj.push(this.music);
      this.myIndex=listObj.length-1;
      console.log(this.isPlaying)
      // console.log(this.myIndex);
      // console.log(tmp);
      localStorage.setItem("currentList",JSON.stringify(listObj));
      // console.log(listObj);
    },
    music: function() {
      // console.log(this.music);
    }
  },
  methods: {
    playOrPause(el) {
      var songCtrl = document.getElementById("musictrl");
      if (!songCtrl) {
        return;
      }
      if (songCtrl.paused) {
        songCtrl.play();
        // el.target.classList = "song-ctrl ctrl-play";
        this.isPlaying = true;
        this.startProgressBar();
      } else {
        songCtrl.pause();
        // el.target.classList = "song-ctrl ctrl-pause";
        this.isPlaying = false;
      }
    },
    startProgressBar() {
      var songCtrl = document.getElementById("musictrl");
      var that = this;
      var totalTime = songCtrl.duration;
      var timer = setInterval(() => {
        var currentTime = songCtrl.currentTime;

        that.currentWidth = parseInt(currentTime / totalTime * 100) + "%";
        // console.log(that.currentWidth);
        if (currentTime >= totalTime || songCtrl.paused) {
          clearInterval(timer);
        }
      }, 500);
    },
    showPlayList() {
      var list = localStorage.getItem("currentList");
      if (list) {
        this.currentList = JSON.parse(list);
      }
      this.isVisibility = !this.isVisibility;
    },
    deleteSong(event,index) {
      event.stopPropagation();
      this.currentList.splice(index, 1);
      localStorage.setItem("currentList", JSON.stringify(this.currentList));
    },
    palyMusic(tmp,index) {
      this.music = tmp;
      this.myIndex=index;
      // console.log(this.myIndex);
    }
  }
};
</script>
<style lang="less" scoped>
@import "../assets/css/variable.less";
.player {
  width: 100%;
  position: fixed;
  bottom: 0;
}
.progress-bar {
  background-color: #ccc;
  width: 100%;
  height: 2px;
  .current-time {
    background-color: #39de71;
    height: 2px;
  }
}
// .ctrl-play {
//   background: url(../assets/img/button/start36px.png) no-repeat center;
// }
// .ctrl-pause {
//   background: url(../assets/img/button/pause36px.png) no-repeat center;
// }
.player-cover {
  background-color: #fff;
  display: flex;
  flex-wrap: nowrap;
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-top-color: transparent;

  .player-img {
    position: relative;
    min-width: 60px;
    img {
      vertical-align: middle;
      width: 80px;
      height: 80px;
      //   position: absolute;
      //   top: 50%;
      //   margin-top: -30px;
    }
  }
  .song-descr {
    flex: 1;
    padding-left: 10px;
    padding-left: 10px;
    font-size: @fontSizeS;
    > p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    > p.singer {
      font-size: @fontSizeXS;
      padding-top: 10px;
    }
  }
  .song-ctrl {
    min-width: 60px;
    margin-right: 40px;
    display: flex;
    align-items: center;
  }
  .player-menu {
    display: flex;
    align-items: center;
    min-width: 50px;
    position: relative;
    img {
      width: 48px;
      position: absolute;
      top: 50%;
      margin-top: -24px;
    }
  }
}
.current-list {
  width: 98%;
  margin: 0 auto 10px;
  height: 400px;
  overflow-y: scroll ;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 30px #000;
  background: #fff;
  li {
    height: 80px;
    display: flex;
  }
  .number {
    width: 60px;
    line-height: 80px;
    text-align: center;
  }
  .songdetail {
    flex: 1;
    padding: 5px;
    border-bottom: 1px solid #ddd;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: @fontSizeS;
    .singer {
      font-size: @fontSizeXS;
      color: #76797c;
    }
  }
  .moremenu {
    padding-right: 20px;
    color: #76797c;
    width: 50px;
    line-height: 80px;
    text-align: center;
    // border-bottom: 1px solid #ddd;
  }
}
</style>
