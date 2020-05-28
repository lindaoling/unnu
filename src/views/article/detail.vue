<template>
  <mu-flex justify-content="center">
      <div class="container-wrap">
        <div class="content-warp">
          <div class="article-content">
            <div class="thumbnail-box">
              <img v-if=" '' != detail.thumbnail" :src="detail.thumbnail" alt="" style="max-width:100%">
            </div>
            <div class="main-editor">
              <div class="title-box">
                <h2>{{detail.title}}</h2>
              </div>
              <div class="content-box" v-html="detail.content"></div>
              <mu-flex align-items="center" style="margin-top:30px;">
                <mu-flex justify-content="start" fill>上一篇：大国崛起</mu-flex>
                <mu-flex justify-content="end" fill>上一篇：大国衰落</mu-flex>
              </mu-flex>
            </div>
          </div>
        </div >
      </div >
  </mu-flex>
</template>

<script>
  import { read } from "@/api/post"
  import { scrollTo } from "@/utils/scrollTo"
  export default {
    name: 'ArticleDetail',
    data() {
      return {
        detail:{}
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
    background-color: #fff;
    max-width: 935px;
    .content-warp{
      .article-content{
        color: #333;
        font-family: Arial,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
        font-size: 16px;
        word-wrap: break-word;
        overflow: hidden;
        .main-editor{padding: 0 80px 30px 80px;}
        .thumbnail-box{}
        .title-box{}
        .content-box{}

      }
    }
  }
  @media screen and (max-width: 992px){
    .container-wrap{
      .content-warp{
        .article-content{
          .main-editor{
            padding: 0 20px 10px 20px;
          }
        }
      }
    }
  }
</style>
<style>
  .content-warp img {
    max-width: 100% !important;
  }
</style>
