<template>
  <div>
    <div style="background-color: #f5f5f5;">
      <mu-appbar style="width: 100%;max-width:1000px;margin: 0 auto;" z-depth="0" title="UNNU">
        <mu-button flat slot="right">Photo</mu-button>
        <mu-button flat slot="right">Article</mu-button>
      </mu-appbar>
    </div>
    <div style="width: 100%;max-width:700px;margin: 0 auto;">
      <template v-for="item in list">
        <mu-card class="card-style" :key="item.title">
          <mu-card-header title="Halo" sub-title="练习时长两年半业余摄影爱好者">
            <mu-avatar slot="avatar">
              <img
                src="https://unnu-1251996657.cos.ap-guangzhou.myqcloud.com/images/44309794_761759400824774_6971370969521107371_n.jpg">
            </mu-avatar>
          </mu-card-header>
          <mu-card-media>
            <template v-if="item.images.length>1">
              <mu-carousel-item v-for="image in item.images" :key="image.url">
                <img :src="image.url">
              </mu-carousel-item>
            </template>
            <template v-else>
              <img :src="item.thumbnail">
            </template>
          </mu-card-media>
          <mu-card-title :title="item.title" :sub-title="item.content"></mu-card-title>
          <!-- <mu-card-text>
            {{item.content}}
          </mu-card-text> -->
          <mu-card-actions>
            <mu-button flat>杂事</mu-button>
          </mu-card-actions>
        </mu-card>
      </template>
    </div>
  </div>
</template>
<script>
  import {
    getList
  } from "@/api/post";
  export default {
    name: 'index',
    data() {
      return {
        list: []
      }
    },
    created() {
      getList(this.$route.query).then(response => {
        this.list = response.data
      }).catch(error => {

      })
    },
    methods: {}
  }

</script>
<style lang="scss">
  .container {
    padding: 0;
    margin: 0;
  }
  .mu-card-title-container{
    padding: 8px;
  }
  .mu-card-text {
    padding: 2px 8px;

  }
  .mu-card {
    -webkit-box-shadow: 0 1px 1px -1px rgba(0, 0, 0, .1), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 1px 3px 0 rgba(0, 0, 0, .12);
    box-shadow: 0 1px 1px -1px rgba(0, 0, 0, .1), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 1px 3px 0 rgba(0, 0, 0, .12);
  }

  .card-style {
    width: 100%;
    margin-top: 20px;
  }

</style>
