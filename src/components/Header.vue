<template>
  <div class="index">
      <div class="header">
        <a href="#" class="left menu-btn"><icon name="navicon"></icon></a>
        <div class="middle">
          <router-link to="/local" class="local-btn"><icon name="music"></icon></router-link>
          <router-link to="/home" class="home-btn"><icon name="home"></icon></router-link>
          <router-link to="/friendscircle" class="fc-btn"><icon name="user-o"></icon></router-link>
        </div>
        <router-link to="/search" class="right search-btn"><icon name="search"></icon></router-link>
      </div>
      <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>
<style scoped lang="less">
@import "../assets/css/variable.less";
.header {
  display: flex;
  padding: 20px;
  background-color: @themeColor;
  color: @white;
  .left {
    flex: 1;
    color: @white;
  }
  .middle {
    padding-left: 30px;
    padding-right: 30px;
    display: flex;
    flex: 3;
    text-align: center;
  }
  .middle > a {
    color: @white;
    flex: 1;
  }
  .right {
    flex: 1;
    text-align: right;
    color: @white;
  }
}
</style>
