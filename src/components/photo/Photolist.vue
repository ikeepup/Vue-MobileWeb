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
            :class="['mui-control-item',v.id == activeKey ? 'mui-active' : '']"
            data-wid="tab-top-subpage-2.html"
            v-for="v in photoListTabs"
            :key="v.id"
            @click="getPhotoListId(v.id)"
          >{{ v.title }}</a>
        </div>
      </div>
    </div>

    <!-- 图片列表区域 -->
    <ul>
      <router-link v-for="v in photoList" :key="v.id" :to="`/home/photoinfo/${v.id}`" tag="li">
        <img :src="v.img_url">
        <div class="pic_text">
          <h3>{{ v.seo_title }}</h3>
          <p>{{ v.seo_description }}</p>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    this.getPhotoList()
    this.getPhotoListId(0)
  },
  methods: {
    // 获取头部列表
    async getPhotoList() {
      const res = await this.$http.get('/api/getimgcategory')
      res.data.message.unshift({ title: '全部', id: 0 })
      this.photoListTabs = res.data.message
    },
    // 获取列表内容
    async getPhotoListId(id) {
      const res = await this.$http.get(`/api/getimages/${id}`)
      this.photoList = res.data.message
      this.activeKey = id
    }
  },
  data() {
    return {
      photoListTabs: [],
      photoList: [],
      activeKey: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.mui-slider,
.mui-segmented-control {
  overflow: auto;
}
.mui-slider {
  margin-top: 40px;
}
.mui-fullscreen {
  position: relative;
}
ul {
  padding: 0 10px;
  li {
    list-style: none;
    position: relative;
    margin-bottom: 20px;
    .pic_text {
      position: absolute;
      bottom: 5px;
      background-color: rgba(0, 0, 0, 0.3);
      color: #fff;
      padding-top: 5px;
    }
    h3 {
      font-size: 16px;
    }
    p {
      color: #fff;
    }
    img {
      width: 100%;
    }
  }
}
</style>
