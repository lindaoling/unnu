<template>
  <main class="container-wrap" justify-content="center" >
    <section class="content-warp">
      <div class="article-box">
        <h3>{{detail.title}}</h3>
        <div class="article-content" v-html="detail.content"></div>
      </div >
    </section>
  </main>
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
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-flow: row nowrap;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    min-height: 500px;
    max-width: 700px;
    width: 100%;
    margin: 0 auto ;
    .content-warp{
      display: flex;
      padding-top: 30px;
      width: 100%;
      // .article-box{
      //   flex: 1;
      // }
    }
  }
</style>
<style>
  .article-box img {
    max-width: 100% !important;
  }
</style>
