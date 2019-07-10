<template>
  <div>
    <mu-container style="background-color: #f5f5f5;">
      <mu-appbar>
        UNNU
        <mu-button v-show="!mobileHeaderMenu" flat slot="right">Article</mu-button>
        <mu-button v-show="!mobileHeaderMenu" flat slot="right">Photo</mu-button>
      </mu-appbar>
      <mu-card>
        <mu-card-header title="Halo" sub-title="散落在指尖的阳光，我试着轻轻抓住光影的踪迹">
          <mu-avatar slot="avatar">
            <img
              src="https://unnu-1251996657.cos.ap-guangzhou.myqcloud.com/images/43914368_2388146701227914_8046520467531890451_n.jpg">
          </mu-avatar>
        </mu-card-header>
        <mu-card-media>
          <img
            src="https://unnu-1251996657.cos.ap-guangzhou.myqcloud.com/images/44309794_761759400824774_6971370969521107371_n.jpg">
        </mu-card-media>
        <mu-card-title title="Content Title" sub-title="sub title"></mu-card-title>
        <mu-card-text>
          散落在指尖的阳光，我试着轻轻抓
        </mu-card-text>
        <mu-card-actions>
          <mu-button flat>人文</mu-button>
          <mu-button flat>风景</mu-button>
        </mu-card-actions>
      </mu-card>
    </mu-container>
  </div>
</template>
<script>
  export default {
    name: 'index',
    data() {
      return {
        docked: false,
        open: false,
        position: 'left',
        mobileHeaderMenu: false,
        windowInnerWidth: 0,
        windowInnerHeight: 0
      }
    },
    created() {
      // console.log(this.$style.red)
      // -> "red_1VyoJ-uZ"
      // 一个基于文件名和类名生成的标识符
    },
    methods: {
      resize() {
        // this.windowInnerWidth = window.innerWidth
        // this.windowInnerHeight = window.innerHeight
        // this.mobileHeaderMenu = this.windowInnerWidth < 600
      }
    }
  }

</script>

<style lang="scss">
  .container {
    padding-right: 0;
    padding-left: 0;
  }

  .mu-card {
    margin-bottom: 50px;
  }

  .mu-card-title-container {
    padding: 16px 16px 0 16px;
  }

</style>
