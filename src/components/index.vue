<template>
  <div>
    <div style="background-color: #f5f5f5;" v-resize="resize">
      <mu-container>
        <mu-appbar z-depth="0">
          <mu-button v-show="mobileHeaderMenu" icon slot="left" @click="open = !open">
            <mu-icon value="menu"></mu-icon>
          </mu-button>
          UNNU
          <mu-button v-show="!mobileHeaderMenu" flat slot="right">Article</mu-button>
          <mu-button v-show="!mobileHeaderMenu" flat slot="right">Photo</mu-button>
        </mu-appbar>
      </mu-container>
    </div>

    <mu-drawer :open.sync="open" :docked="docked" :right="position === 'right'">
      <mu-list>
        <mu-list-item button>
          <mu-list-item-title>Article</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button>
          <mu-list-item-title>Photo</mu-list-item-title>
        </mu-list-item>
        <mu-list-item @click="open = false" button>
          <mu-list-item-title>Close</mu-list-item-title>
        </mu-list-item>
      </mu-list>
    </mu-drawer>
    <main style="margin-top:20px;">
      <mu-container style="padding:0;max-width:660px;">
        <mu-card>
          <mu-card-header title="Myron Avatar" sub-title="sub title">
            <mu-avatar slot="avatar">
              <img src="/static/images/photo/37603354_281525412609016_6184662999689592832_n.jpg">
            </mu-avatar>
          </mu-card-header>
          <mu-card-media>
            <img src="/static/images/photo/37603354_281525412609016_6184662999689592832_n.jpg">
          </mu-card-media>
          <mu-card-title title="Content Title" sub-title="sub title"></mu-card-title>
          <mu-card-text>
            散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。 调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。 似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，
            找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
            The horrific crime of human trafficking may be closer to you than you realise. The United Nations’
            World Day against Trafficking in Persons takes place on 30 July each year. Find out more by reading
            this article.
          </mu-card-text>
          <mu-card-actions>
            <mu-button flat>人文</mu-button>
            <mu-button flat>风景</mu-button>
          </mu-card-actions>
        </mu-card>
      </mu-container>
    </main>
  </div>
</template>
<script>
export default {
  name: 'index',
  data () {
    return {
      docked: false,
      open: false,
      position: 'left',
      mobileHeaderMenu: false,
      windowInnerWidth: 0,
      windowInnerHeight: 0
    }
  },
  created () {
    // console.log(this.$style.red)
    // -> "red_1VyoJ-uZ"
    // 一个基于文件名和类名生成的标识符
  },
  methods: {
    resize () {
      this.windowInnerWidth = window.innerWidth
      this.windowInnerHeight = window.innerHeight
      this.mobileHeaderMenu = this.windowInnerWidth < 600
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
