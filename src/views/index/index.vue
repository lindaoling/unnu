<template>
  <div>
    <div style="width: 100%;max-width:600px;margin: 60px auto;" v-loading="loading">
      <template v-for="item in list">
        <mu-card class="card-style" :key="item.title">
          <mu-card-header title="Halo" sub-title="练习时长两年半业余摄影爱好者" style="    border-bottom: 1px solid #efefef;">
            <mu-avatar slot="avatar">
              <img src="https://unnu-1251996657.cos.ap-guangzhou.myqcloud.com/images/avatar-cat-2.jpg">
            </mu-avatar>
          </mu-card-header>
          <mu-card-media>
            <template v-if="item.images.length>1">
              <mu-carousel transition="fade">
                <mu-carousel-item v-for="imgItem in item.images" :key="imgItem.url">
                  <img :src="imgItem.url" style="width:100%;">
                </mu-carousel-item>
              </mu-carousel>
            </template>
            <template v-else>
              <img :src="item.thumbnail">
            </template>
          </mu-card-media>
          <mu-card-title :title="item.title" :sub-title="item.content"></mu-card-title>
          <mu-card-actions v-if="item.tags.length>0">
            <mu-button v-for="tag in item.tags" :key="tag.tag_id" flat @click="filterTag(tag.tag_id)">{{tag.name}}
            </mu-button>
          </mu-card-actions>
        </mu-card>
      </template>
      <mu-flex justify-content="center">
        <mu-pagination 
          v-show="pagination.total_count>10" 
          @change="pageChange" 
          :total="pagination.total_count"
          :page-size="10" 
          :page-count="5" 
          :current="currentPage" 
          style="margin: 20px 0px;"
          >
          </mu-pagination>
      </mu-flex>
    </div>
  </div>
</template>
<script>
  import {
    getList
  } from "@/api/post";
  import { scrollTo } from "@/utils/scrollTo";
  export default {
    name: 'Photo',
    data() {
      return {
        loading: true,
        pagination: {
          total_count: 0,
          total_page: 0
        },
        list: [{
          "title": "加载中",
          "sub_title": "加载中",
          "content": "加载中",
          "thumbnail": "https://unnu-1251996657.cos.ap-guangzhou.myqcloud.com/test/26073943_nCX5.gif",
          "images": [{
            "name": "",
            "size": 0,
            "url": "https://unnu-1251996657.cos.ap-guangzhou.myqcloud.com/test/26073943_nCX5.gif",
            "uid": 0,
            "status": ""
          }],
          "tags": []
        }]
      }
    },
    watch: {
      '$route.query': {
        handler() {
          this.getRemoteList()
        },
        deep: true,
        immediate: true
      }
    },
    computed:{
      currentPage:function(){
        return this.$route.query.p ? parseInt(this.$route.query.p) :1
      }
    },
    created() {

    },
    methods: {
      filterTag(tag_id) {
        this.$router.push({
          query: {
            tag: tag_id
          }
        })
      },
      pageChange(p) {
        this.$router.push({
          query: {
            p: p
          }
        })
        console.log(p)
      },
      getRemoteList() {
        console.log(this.$route.query)
        getList(this.$route.query).then(response => {
          this.list = response.data
          this.pagination = response.pagination
          scrollTo(0)
        }).catch(error => {

        })
      }
    }
  }

</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .container {
    padding: 0;
    margin: 0;
  }

  .mu-card-title-container,
  .mu-card-header {
    padding: 8px 12px;
  }

  .mu-card-text {
    padding: 2px 8px;

  }

  .mu-carousel {
    padding-bottom: 66.666666%;
    height: 0;
  }

  .mu-card {
    -webkit-box-shadow: 0 1px 1px -1px rgba(0, 0, 0, .1), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 1px 3px 0 rgba(0, 0, 0, .12);
    box-shadow: 0 1px 1px -1px rgba(0, 0, 0, .1), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 1px 3px 0 rgba(0, 0, 0, .12);
  }

  .card-style {
    width: 100%;
    margin-bottom: 60px;
  }

</style>
