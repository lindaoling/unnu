<template>
  <div style="display: flex;flex-direction: row;justify-content: center;width: 100%;max-width:900px;margin: 120px auto 26px auto;" v-resize="resize">
    <div style="display:flex;flex-direction: column;flex:1;">
      <mu-card class="card-style" >
        <mu-card-header style="border-bottom: 1px solid #efefef;">
        </mu-card-header>
        <mu-card-media>
          <!-- <img v-for="item in detail.images" :key="item.uid" :src="item.url"> -->
          <img v-for="item in detail.images" :key="item.uid" v-lazy="item.url" />
        </mu-card-media>
        <mu-card-title :title="detail.title" :sub-title="detail.content"></mu-card-title>
        <mu-card-actions v-if="detail.tags.length>0">
          <mu-button small flat v-for="tag in detail.tags" :key="tag.tag_id"
            style="color: rgba(0,0,0,.54);max-width:40px;">#{{tag.name}}
          </mu-button>
        </mu-card-actions>
      </mu-card>
    </div>
  </div>
</template>
<script>
  import {
    read
  } from "@/api/post"
  export default {
    name: 'Detail',
    
    data() {
      return {
        detail:{
          images:[]
        }
      }
    },
    watch: {
      '$route.query': {
        handler() {
          
        },
        deep: true,
        immediate: true
      }
    },
    computed: {
      isSubRoute: {
        // getter
        get: function () {
          return this.$route.params.detail != undefined && this.$route.params.detail.images !=undefined && this.$route.params.detail.images.length>0?true:false
        },
        set: function (newValue) {
          
        }
      }
    },
    created() {
      if(this.$route.params.detail){
        this.detail=this.$route.params.detail
      }else{
        this.getRemoteContent()
      }
    },
    methods: {
      getRemoteContent() {
        this.$progress.start()
        console.log(this.$route)
        read(this.$route.params.hash).then(response => {
          this.detail = response.data
          this.$progress.done()
        }).catch(error => {
          this.$progress.done()
        })
      },
      closeFullscreenDialog(){
        this.$router.back()
      }
    }
  }

</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.mu-card-media {
  img:not(:last-child) {
    margin-bottom: 30px;
  }
}
</style>
