<template>
  <div class="recomend">
    <!-- <p>个性推荐</p> -->
    <div class="r-container">
      <div class="slider">
        <ul class="slider-img clearfix">
          <li>
            <a href="#"><img src="../../assets/img/1.png" alt=""></a>
          </li>
          <li>
            <a href="#"><img src="../../assets/img/2.png" alt=""></a>
          </li>
          <li>
            <a href="#"><img src="../../assets/img/3.png" alt=""></a>
          </li>
          <li>
            <a href="#"><img src="../../assets/img/4.png" alt=""></a>
          </li>
        </ul>
        <ul class="slider-inds">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div class="cards">
        <div class="card-item">
          <div class="card-btn">

          </div>
          <p class="card-title">私人FM</p>
        </div>
        <div class="card-item">
          <div class="card-btn">

          </div>
          <p class="card-title">每日推荐</p>
        </div>
        <div class="card-item">
          <div class="card-btn">

          </div>
          <p class="card-title">歌单</p>
        </div>
        <div class="card-item">
          <div class="card-btn">

          </div>
          <p class="card-title">排行榜</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style>
.recomend {
  width: 100%;
  height: 100%;
}

.slider {
  position: relative;
  overflow: hidden;
}

.slider-img {
  display: flex;
  width: 400%;
}

.slider-img li {
  flex: 1;
}

.slider-inds {
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: 10px;
  left: 0;
}

.slider-inds li {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: #fff;
}

.slider-inds li:not(first-child) {
  margin-right: 10px;
}

img {
  width: 100%;
}
</style>