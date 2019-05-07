<template>
  <div>
    <!-- tab切换 -->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            :class="['mui-control-item',v.id == 0 ? 'mui-active' : '']"
            href="#item2mobile"
            data-wid="tab-top-subpage-2.html"
            v-for="v in photoListTabs"
            :key="v.id"
          >{{ v.title }}</a>
        </div>
      </div>
    </div>

    <!-- 图片列表区域 -->
  </div>
</template>

<script>
export default {
  created() {
    this.getPhotoList();
  },
  methods: {
    async getPhotoList() {
      const res = await this.$http.get("/api/getimgcategory");
      res.data.message.unshift({ title: "全部", id: 0 });
      this.photoListTabs = res.data.message;
      console.log(res);
    }
  },
  data() {
    return {
      photoListTabs: []
    };
  }
};
</script>

<style lang="scss" scoped>
.mui-slider,
.mui-segmented-control {
  overflow: auto;
}
.mui-fullscreen {
  position: relative;
}
</style>
