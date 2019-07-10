<template>
  <div>
    <div style="background-color: #f5f5f5;">
      <mu-appbar style="width: 100%;max-width:1000px;margin: 0 auto;" z-depth="0" title="UNNU">
        <mu-button flat slot="right">LOGIN</mu-button>
        <mu-button flat slot="right">LOGIN</mu-button>
      </mu-appbar>
    </div>
    <div style="width: 100%;max-width:700px;margin: 0 auto;">
      <mu-card class="card-style">
        <mu-card-header title="Myron Avatar" sub-title="sub title">
          <mu-avatar slot="avatar">
            <img
              src="https://unnu-1251996657.cos.ap-guangzhou.myqcloud.com/images/44309794_761759400824774_6971370969521107371_n.jpg">
          </mu-avatar>
        </mu-card-header>
        <mu-card-media>
          <img src="https://unnu-1251996657.cos.ap-guangzhou.myqcloud.com/images/44309794_761759400824774_6971370969521107371_n.jpg">
        </mu-card-media>
        <mu-card-title title="Content Title" sub-title="Content Title"></mu-card-title>
        <mu-card-text>
          散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
          调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
          似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，
          找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
        </mu-card-text>
        <mu-card-actions>
          <mu-button flat>人文</mu-button>
          <mu-button flat>风景</mu-button>
        </mu-card-actions>
      </mu-card>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'index',
    data() {
      return {}
    },
    created() {},
    methods: {}
  }

</script>
<style lang="scss">
  .container {
    padding: 0;
    margin: 0;
  }
  .card-style{
    width: 100%;
    margin-top:20px;
  }
</style>
