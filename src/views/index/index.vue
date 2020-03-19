<template>
  <main class="container-wrap" justify-content="center" >
    <section class="content-warp">
      <div class="article-box">
        <mu-card class="card-style" v-for="item in list" :key="item.hash">
          <mu-card-header style="border-bottom: 1px solid #efefef;">
          </mu-card-header>
          <template v-if="item.images.length>1">
              <mu-carousel transition="fade" hide-indicators >
                <mu-carousel-item v-for="imgItem in item.images.slice(0,5)" :key="imgItem.url">
                  <img :src="imgItem.url">
                </mu-carousel-item>
              </mu-carousel>
          </template>
          <template v-else>
            <mu-card-media :style="'padding-bottom:'+item.scale+'%'">
              <img :src="item.thumbnail">
            </mu-card-media>
          </template>
          <mu-card-text>
            {{item.content}}
          </mu-card-text>
          <mu-card-actions v-if="item.tags.length>0">
            <mu-button small flat v-for="tag in item.tags" :key="tag.tag_id" :to="{query:{tag:tag.tag_id}}" style="color: rgba(0,0,0,.54);max-width:40px;">
              #{{tag.name}}
            </mu-button>
          </mu-card-actions>
        </mu-card>
        <mu-flex justify-content="center">
          <mu-pagination v-show="pagination.total_count>10" @change="pageChange" :total="pagination.total_count"
            :page-size="10" :page-count="5" :current="currentPage" style="margin: 20px 0px;">
          </mu-pagination>
        </mu-flex>
      </div>
      <div class="user-profile" >
        <sticky :z-index="999" :stickyTop="84" :width="270">
          <mu-card>
            <mu-card-header title="Halo" sub-title="练习时长两年半..." style="border-bottom: 1px solid #efefef;">
              <mu-avatar slot="avatar">
                <img src="https://unnu-1251996657.cos.ap-guangzhou.myqcloud.com/images/avatar-cat-2.jpg">
              </mu-avatar>
            </mu-card-header>
            <mu-card-actions>
              <template v-for="tag in tags">
                <mu-button flat small :key="tag.id" :to="{query:{tag:tag.id}}" :disabled="$route.query.tag != undefined && $route.query.tag==tag.id" style="min-width: 40px;">#{{tag.name}}</mu-button>
              </template>
            </mu-card-actions>
          </mu-card>
        </sticky>
      </div>
    </section>
  </main>
</template>
<script>
  import {
    getList
  } from "@/api/post"
  import {
    getTagList
  } from "@/api/tag"
  import {
    scrollTo
  } from "@/utils/scrollTo"
  import Sticky from '@/components/Sticky'
  export default {
    name: 'Photo',
    data() {
      return {
        showChild: true,
        // mobileHeaderMenu: false,
        // windowInnerWidth: 0,
        // windowInnerHeight: 0,
        loading: true,
        pagination: {
          total_count: 0,
          total_page: 0
        },
        list: [],
        tags: [],
        detail:{} //给子组合用的
      }
    },
    components: {
      Sticky
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
    computed: {
      currentPage: function () {
        return this.$route.query.p ? parseInt(this.$route.query.p) : 1
      }
    },
    created() {
      getTagList().then(res => {
        const tmp = []
        res.data.forEach(el => {
          if (el.post_num > 0) {
            tmp.push(el)
          }
        });
        this.tags = tmp
      }).catch(error => {
        console.log(error)
      })
    },
    methods: {
      showDetail(detail){
        this.detail=detail
        console.log(detail)
        this.$router.push(
          {
            name:'Detail',
            params:{
              detail:detail,
              hash:detail.hash
            }
          }
        )
      },
      pageChange(p) {
        const queryParams = Object.assign({}, this.$route.query, {
          p: p
        })
        this.$router.push({
          query: queryParams
        })
        console.log(queryParams)
      },
      getRemoteList() {
        scrollTo(0)
        this.$progress.start()
        console.log(this.$route.query)
        getList(this.$route.query).then(response => {
          response.data.forEach(el => {
            el.scale = 0
            el.images.forEach(imgitem => {
              imgitem.scale = (imgitem.height/imgitem.width)>1.25?125:(imgitem.height/imgitem.width*100)
              if(imgitem.scale > el.scale){
                el.scale = imgitem.scale
              }
            });
          });
          this.list = response.data
          // console.log(this.list)
          this.pagination = response.pagination
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
    max-width: 935px;
    width: 100%;
    margin: 0 auto ;
    .content-warp{
      display: flex;
      padding-top: 30px;
      width: 100%;
      .article-box{
        flex: 1;
      }
      .user-profile{
        margin-left: 28px;
        width: 270px;
        overflow: hidden;
      }
    }
    
  }
  .mu-card-title-container,.mu-card-header {
    padding: 8px 16px;
  }
  .mu-carousel {
    padding-bottom: 66.667%;
    height: 0;
    background-color: #eeeeee;
    .mu-carousel-item{
      img{
        object-fit: contain;
        width: 100%;
        height: 100%;
      }
    }
  }

  .card-style {
    -webkit-box-shadow: 0 1px 1px -1px rgba(0, 0, 0, .1), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 1px 3px 0 rgba(0, 0, 0, .12);
    box-shadow: 0 1px 1px -1px rgba(0, 0, 0, .1), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 1px 3px 0 rgba(0, 0, 0, .12);
    width: 100%;
    margin-bottom: 30px;
    .mu-card-text {
      padding: 4px 16px;
      color: rgba(0,0,0,.6);
    }
    .mu-card-media {
      overflow: hidden;
      position: relative;
      img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }

  @media screen and (max-width: 992px){
    .container-wrap{
      .content-warp{
        .user-profile{
          display: none;
        }
      }
    }
    .card-style{
      margin-bottom: 0;
      -webkit-box-shadow: none ;
      box-shadow: none;
      
    }
    .mu-card{
      border-radius: 0;
    }
    
  }
</style>
