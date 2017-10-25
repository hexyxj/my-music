<template>
    <div class="player" v-if="message && music">
        <audio :src="music.songUrl" autoplay id="musictrl" preload="auto"></audio>
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
            <div class="song-ctrl ctrl-play" @click="playOrPause">
                <!-- <img src="../assets/img/button/start.png" alt="" class="song-pause" > -->
            </div>
        </div>
        
    </div>
</template>
<script>
import Image from "../assets/img/button/start.png";
export default {
  props:["message"],
  data: function() {
    return {
      currentWidth: "2px",
      music:null
    };
  },
  mounted: function() {
    
    var songCtrl = document.getElementById("musictrl");
    if(songCtrl){
      songCtrl.oncanplay = () => {
        this.startProgressBar();
      };
    }
  },
  updated:function(){
    this.music=this.message;
    // console.log(this.message);
    var songCtrl = document.getElementById("musictrl");
    if(songCtrl){
      songCtrl.oncanplay = () => {
        this.startProgressBar();
      };
    }
  },
  watch:{ 
    music:function(){
      // console.log(this.music);
    }

  },
  methods: {
    playOrPause(el) {
      var songCtrl = document.getElementById("musictrl");
      if(!songCtrl){
        return;
      }
      if (songCtrl.paused) {
        songCtrl.play();
        el.target.classList = "song-ctrl ctrl-play";
        this.startProgressBar();
      } else {
        songCtrl.pause();
        el.target.classList = "song-ctrl ctrl-pause";
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
.ctrl-play {
  background: url(../assets/img/button/start.png) no-repeat center;
}
.ctrl-pause {
  background: url(../assets/img/button/pause.png) no-repeat center;
}
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
      width: 120px;
      height: 120px;
    //   position: absolute;
    //   top: 50%;
    //   margin-top: -30px;
    }
  }
  .song-descr {
    flex: 1;
    padding-left: 10px;
    padding-left: 10px;
    font-size: @fontSizeL;
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
    min-width: 96px;
  }
}
</style>
