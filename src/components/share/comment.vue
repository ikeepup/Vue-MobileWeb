<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要BB的内容（做多吐槽120字）" maxlength="120" v-model="cmtContent"></textarea>
    <mt-button type="primary" @click="postCmt">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item" v-for="(list,i) in cmtList" :key="i">
        <div class="cmt-title">第{{i+1}}楼 用户：{{list.user_name}} 发表时间：{{list.add_time | toTime}}</div>
        <div class="cmt-body">{{list.content}}</div>
      </div>
    </div>
    <mt-button type="danger" plain @click="getCmtList(pageindex)">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  created() {
    this.getCmtList(this.pageindex)
  },
  data() {
    return {
      pageindex: 1,
      cmtList: [],
      cmtContent: ''
    }
  },
  methods: {
    getCmtList(page) {
      this.$http
        .get(`/api/getcomments/${this.$route.params.id}?pageindex=${page}`)
        .then(res => {
          this.cmtList = [...this.cmtList, ...res.data.message]
          this.pageindex++
        })
    },
    postCmt() {
      if (!this.cmtContent.trim()) {
        return Toast('评论内容不能为空')
      }
      this.$http
        .post(`/api/postcomment/${this.$route.params.id}`, {
          content: this.cmtContent
        })
        .then(res => {
          if (!res.data.status) {
            this.$http
              .get(`/api/getcomments/${this.$route.params.id}?pageindex=1`)
              .then(res => {
                this.cmtList.unshift(res.data.message[0])
                this.cmtContent = ''
              })
          }
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.cmt-container {
  font-size: 13px;
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
    resize: none;
  }
  .cmt-list {
    .cmt-item {
      .cmt-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
.mint-button {
  width: 100%;
}
</style>
