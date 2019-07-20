<template>
  <div style="display: flex;flex-direction: row;justify-content: center;;width: 100%;max-width:900px;margin: 26px auto;"
    v-resize="resize">
    <div style="display:flex;flex-direction: column;flex:1;">
      <mu-card class="card-style" v-for="item in list" :key="item.hash">
        <mu-card-media>
          <template v-if="item.images.length>1">
            <mu-carousel transition="fade">
              <mu-carousel-item v-for="imgItem in item.images" :key="imgItem.url">
                <img :src="imgItem.url">
              </mu-carousel-item>
            </mu-carousel>
          </template>
          <template v-else>
            <img :src="item.thumbnail">
          </template>
        </mu-card-media>
        <mu-card-title :title="item.title" :sub-title="item.content"></mu-card-title>
        <mu-card-actions v-if="item.tags.length>0">
          <mu-button v-for="tag in item.tags" :key="tag.tag_id" flat @click="filterTag(tag.tag_id)"
            style="color: rgba(0,0,0,.54);font-size:12px;height:12px;line-height:12px;min-width:0;">#{{tag.name}}
          </mu-button>
        </mu-card-actions>
      </mu-card>
      <!-- <div style="display:flex;flex-direction: center;"> -->
        <mu-flex justify-content="center">
        <mu-pagination v-show="pagination.total_count>10" @change="pageChange" :total="pagination.total_count"
          :page-size="10" :page-count="5" :current="currentPage" style="margin: 20px 0px;">
        </mu-pagination>
        </mu-flex>
      <!-- </div> -->
    </div>
    <div v-show="!isMoble" style="display:flex;flex-direction: column;width:30%;margin-left:28px;">
      <mu-card>
        <mu-card-header title="Halo" sub-title="练习时长两年半..." style="    border-bottom: 1px solid #efefef;">
          <mu-avatar slot="avatar">
            <img src="https://unnu-1251996657.cos.ap-guangzhou.myqcloud.com/images/avatar-cat-2.jpg">
          </mu-avatar>
        </mu-card-header>
        <mu-card-actions>
              <template v-for="tag in tags">
                <mu-button flat small :key="tag.id" :to="{query:{tag:tag.id}}"
                  :disabled="$route.query.tag != undefined && $route.query.tag==tag.id" style="    min-width: 40px;">#{{tag.name}}</mu-button>
              </template>
            </mu-card-actions>
      </mu-card>
    </div>
  </div>
</template>
<script>
  import {
    getList
  } from "@/api/post";
  import {
    getTagList
  } from "@/api/tag";
  import {
    scrollTo
  } from "@/utils/scrollTo";
  export default {
    name: 'Photo',
    data() {
      return {
        mobileHeaderMenu: false,
        windowInnerWidth: 0,
        windowInnerHeight: 0,
        loading: true,
        pagination: {
          total_count: 0,
          total_page: 0
        },
        list: [],
        tags: [],
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
    computed: {
      isMoble: function () {
        return this.windowInnerWidth < 992
      },
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
      resize() {
        this.windowInnerWidth = window.innerWidth
        this.windowInnerHeight = window.innerHeight
        this.mobileHeaderMenu = this.windowInnerWidth < 600
      },
      filterTag(tag_id) {
        this.$router.push({
          query: {
            tag: tag_id
          }
        })
      },
      pageChange(p) {
        const queryParams = Object.assign({}, this.$router.query, {
          p: p
        })
        this.$router.push({
          query: queryParams
        })
        console.log(queryParams)
      },
      getRemoteList() {
        scrollTo(0)
        console.log(this.$route.query)
        getList(this.$route.query).then(response => {
          this.list = response.data
          this.pagination = response.pagination
        }).catch(error => {

        })
      }
    }
  }

</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  // .container {
  //   padding: 0;
  //   margin: 0;
  // }

  .mu-card-title-container,
  .mu-card-header {
    padding: 8px 12px;
  }

  .mu-carousel-item>img {
    height: 100%;
    min-width: 0;
  }

  .mu-card-text {
    padding: 2px 8px;

  }

  .mu-carousel {
    padding-bottom: 66.666666%;
    height: 0;
    background-color: #eeeeee;
  }

  .mu-card {
    -webkit-box-shadow: 0 1px 1px -1px rgba(0, 0, 0, .1), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 1px 3px 0 rgba(0, 0, 0, .12);
    box-shadow: 0 1px 1px -1px rgba(0, 0, 0, .1), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 1px 3px 0 rgba(0, 0, 0, .12);
  }

  .card-style {
    width: 100%;
    margin-bottom: 60px;
  }

  .PCpaddingRight {
    padding-right: 30px;
  }

</style>
