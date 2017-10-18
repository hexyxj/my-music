<template>
  <div class="index">
      <div class="header">
        <a href="#" class="left menu-btn"><i class="fa fa-navicon"></i></a>
        <div class="middle">
          <router-link to="/local" class="local-btn"><i class="fa fa-music"></i></router-link>
          <router-link to="/home" class="home-btn"><i class="fa fa-home"></i></router-link>
          <router-link to="/friendscircle" class="fc-btn"><i class="fa fa-user-o"></i></router-link>
        </div>
        <router-link to="/search" class="right search-btn"><i class="fa fa-search"></i></router-link>
      </div>
      <router-view></router-view>
  </div>
</template>

<script>
    export default{

    }
</script>
<style scoped>
.header{
  display: flex;
  padding: 20px;
  background-color:#E72101;
 
}
i{
 font-size:36px;
  color:#fff;
}
.left{
  flex: 1;
}
.middle{
  padding-left:30px; 
  padding-right: 30px;
  display: flex;
  flex: 3;
  text-align: center;
}
.middle>a{
  flex: 1;
}
.right{
  flex: 1;
  text-align: right;
}
</style>
