<template>
  <nav class="header-wrap" justify-content="center">
    <div class="header-placeholder"></div>
    <div class="header-nav-container">
      <mu-appbar z-depth="0" title="UNNU">
        <router-link to="/" style="color:rgb(115, 115, 115)">
          {{currHost}}
        </router-link>
        <mu-button flat slot="right">Photo</mu-button>
        <mu-button flat slot="right">Article</mu-button>
      </mu-appbar>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'Top',
    computed:{
      currHost: function () {
        return window.location.hostname || 'unnu.me'
      }
    }
  }

</script>
<style rel="stylesheet/scss" lang="scss" scoped>
$nav-height:54px;
.header-wrap{
  position: relative;
  width: 100%;
  z-index: 999;
  
  .header-placeholder{
    height: $nav-height;
  }
  .header-nav-container{
    background-color: #f5f5f5;
    border-bottom: 1px solid #d4d4d4;
    width: 100%;
    height: $nav-height;
    position: fixed;
    left: 0;
    top: 0;
  }
  .mu-appbar{
    border-bottom: 1px solid #d4d4d4;
    max-width: 935px;
    margin: 0 auto;
    height: $nav-height;
  }
}
</style>
