<template>
  <mu-flex justify-content="center">
      <div class="container-wrap">
        <div class="content-warp">
          <div class="article-content">
            <h2>{{detail.title}}</h2>
            <div class="" v-html="detail.content"></div>
          </div>
        </div >
      </div >
  </mu-flex>
</template>
<script>
  import {
    read
  } from "@/api/post"
  import {
    scrollTo
  } from "@/utils/scrollTo"
  export default {
    name: 'ArticleDetail',
    data() {
      return {
        detail:{} //给子组合用的
      }
    },
    components: {
      
    },
    watch: {
      '$route.query': {
        handler() {
          this.getRemoteDetail()
        },
        immediate: true
      }
    },
    created() {
      
    },
    methods: {
      getRemoteDetail() {
        scrollTo(0)
        this.$progress.start()
        const hash = this.$route.params.hash
        read(hash).then(response => {
          this.detail = response.data
          this.$progress.done()
        }).catch(error => {
          this.$progress.done()
        })
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .container-wrap{
    max-width: 935px;    
    .content-warp{
      padding: 30px 80px;
      .article-content{
        color: #333;
        font-family: Arial,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
        font-size: 16px;
        word-wrap: break-word;
        overflow: hidden;
      }
    }
  }
</style>
<style>
  .content-warp img {
    max-width: 100% !important;
  }
</style>
