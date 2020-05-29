<template>
  <mu-flex justify-content="center" >
    <mu-flex fill class="container-article-wrap">
      <mu-flex direction="column" class="article-content">
        <mu-flex class="thumbnail-box">
          <img v-if=" '' != detail.thumbnail" :src="detail.thumbnail" alt="" style="max-width:100%">
        </mu-flex>
        <div class="main-editor">
          <div class="title-box">
            <h2>{{detail.title}}</h2>
          </div>
          <div class="content-box markdown-body" v-html="detail.content"></div>
          <mu-flex align-items="center" style="margin-top:30px;" fill>
            <mu-flex justify-content="start" fill>上一篇：大国崛起</mu-flex>
            <mu-flex justify-content="end" fill>上一篇：大国衰落</mu-flex>
          </mu-flex>
        </div>
      </mu-flex>
    </mu-flex >
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
  .container-article-wrap{
    background-color: #fff;
    max-width: 935px;
    margin-top: 30px;
    .article-content{
      color: #333;
      font-family: Arial,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
      .thumbnail-box {
        img{
          width: 100%;
        }
      }
      .main-editor{
        font-size: 16px;
        word-wrap: break-word;
        word-break:break-all; 
        overflow: hidden;
        padding: 0 80px 30px 80px;
        .content-box{
          /deep/ img{
            max-width: 100% !important;
          }
          /deep/ pre{
            padding: 5px;
          }
        }
      }
    }
  }
  
  @media screen and (max-width: 992px){
    .container-article-wrap{
      margin-top: 0;
      .article-content{
        .main-editor{
          padding: 0 10px 10px 10px;
        }
      }
    }
  }

  .hljs {
    display: block;
    overflow-x: auto;
    padding: .5em;
    background: #23241f
  }

  .hljs,.hljs-subst,.hljs-tag {
    color: #f8f8f2
  }

  .hljs-emphasis,.hljs-strong {
    color: #a8a8a2
  }

  .hljs-bullet,.hljs-link,.hljs-literal,.hljs-number,.hljs-quote,.hljs-regexp {
    color: #ae81ff
  }

  .hljs-code,.hljs-section,.hljs-selector-class,.hljs-title {
    color: #a6e22e
  }

  .hljs-strong {
      font-weight: 700
  }

  .hljs-emphasis {
      font-style: italic
  }

  .hljs-attr,.hljs-keyword,.hljs-name,.hljs-selector-tag {
    color: #f92672
  }

  .hljs-attribute,.hljs-symbol {
    color: #66d9ef
  }

  .hljs-class .hljs-title,.hljs-params {
    color: #f8f8f2
  }

  .hljs-addition,.hljs-built_in,.hljs-builtin-name,.hljs-selector-attr,.hljs-selector-id,.hljs-selector-pseudo,.hljs-string,.hljs-template-variable,.hljs-type,.hljs-variable {
    color: #e6db74
  }

  .hljs-comment,.hljs-deletion,.hljs-meta {
    color: #75715e
  }

</style>
