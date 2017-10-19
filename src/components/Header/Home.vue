<template>
  <div class="home">
    <div class="banner" @click="menuChange">
      <div class="flex-box">
          <router-link to="/music" class="menu-btn">音乐</router-link>
      </div>
      <div class="flex-box">
          <router-link to="/video" class="menu-btn">视频</router-link>
      </div>
      <div class="flex-box">
          <router-link to="/bs" class="menu-btn">主播电台</router-link>
      </div>
     <!--  <div class="flex-box">
          <router-link to="/rank" class="menu-btn">排行榜</router-link>
      </div> -->
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
      console.log(el.target);
        var historyActive = document.querySelector(".banner .active");
        if (historyActive) {
          historyActive.classList.remove("active");
        }
        el.target.classList.add("active");
    }
  }
};
</script>

<style scroped>
.banner {
  border-bottom: 1px solid #ddd;
  display: flex;
}

.flex-box {
  flex: 1;
  text-align: center;
}

.flex-box a {
  box-sizing: border-box;
  display: block;
  text-align: center;
  font-size: 18px;
  text-decoration: none;
  color: #000;
  padding: 15px;
}

.flex-box a.active {
  border-bottom: 4px solid #e72101;
  color: #e72101;
}
</style>
