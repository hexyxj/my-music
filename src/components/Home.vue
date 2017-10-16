<template>
  <div class="home">
    <div class="banner" @click="menuChange">
      <div class="flex-box">
        <div>
          <router-link to="/recomend" class="menu-btn active">个性推荐</router-link>
        </div>
      </div>
      <div class="flex-box">
        <div>
          <router-link to="/music" class="menu-btn">歌单</router-link>

        </div>
      </div>
      <div class="flex-box">
        <div>
          <router-link to="/bs" class="menu-btn">主播电台</router-link>
        </div>
      </div>
      <div class="flex-box">
        <div>
          <router-link to="/rank" class="menu-btn">排行榜</router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted: function() {
    document.querySelector(".banner .menu-btn").classList.add("active");
  },
  methods: {
    menuChange(el) {
      if (!el.target.classList.contains("active")) {
        var historyActive = document.querySelector(".banner .active");
        if (historyActive) {
          historyActive.classList.remove("active");
        }
        el.target.classList.add("active");
      }
    }
  }
}
</script>

<style scroped>
.banner {
  border-bottom: 1px solid #ddd;
  display: flex;
  padding-left: 15px;
  padding-right: 15px;
}

.flex-box {
  flex: 1;
  text-align: center;
}

.flex-box>div {
  padding-left: 25%;
  width: 50%;
  height: 100%;
}

.flex-box a {
  box-sizing: border-box;
  display: block;
  text-align: center;
  font-size: 20px;
  text-decoration: none;
  color: #000;
  padding: 15px;
}

.flex-box a.active {
  border-bottom: 4px solid #E72101;
  color: #E72101;
}
</style>
