<template>
  <div class="video">
      <!-- 歌单 -->
      <!-- <p>视频</p> -->
      <p class="xs">视频 Video <icon name="search"></icon></p>
      <p class="s">视频 Video <icon name="search"></icon></p>
      <p class="m">视频 Video <icon name="search"></icon></p>
      <p class="l">视频 Video <icon name="search"></icon></p>
      <p class="xl">视频 Video <icon name="search"></icon></p>
      <p class="xxl">视频 Video <icon name="search"></icon></p>
      <p class="xxxl">视频 Video <icon name="search"></icon></p>
  </div>
</template>
<script>
export default {
  mounted: function() {
    this.$emit("whoIsActive", "video");
  }
};
</script>
<style scoped lang="less">
@import "../../assets/css/variable.less";

.xs {
  font-size: @fontSizeXS;
}
.s {
  font-size: @fontSizeS;
}
.m {
  font-size: @fontSizeM;
}
.l {
  font-size: @fontSizeL;
}
.xl {
  font-size: @fontSizeXL;
}
.xxl {
  font-size: @fontSizeXXL;
}
.xxxl {
  font-size: @fontSizeXXXL;
}
</style>