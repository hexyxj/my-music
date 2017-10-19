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
        <div>
            <img src="../assets/img/recomend/3.jpg" alt="">
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

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #000;
  opacity: 0.3;
  color: white;
  height: 60px;
  line-height: 60px;
}
.navbar > .navbar-item-left {
  float: left;
}
.navbar > .navbar-item-right {
  float: right;
}
.navbar > .goback {
  font-size: 40px;
  line-height: 55px;
  padding: 0 20px;
  vertical-align: middle;
}
.navbar > .search,
.navbar > .list-menu {
  font-size: 26px;
  padding-right: 20px;
  color: white;
}
.content .handle{
    padding-top:20px; 
    display: flex;
}
.content .handle-item{
    width: 25%;
    text-align: center;
    font-size: 28px;
}
.content .handle-item p{
    font-size:16px; 
    padding-top:20px; 
}

</style>

