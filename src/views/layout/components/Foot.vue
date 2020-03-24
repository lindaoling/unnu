<template>
  <footer class="footer-wrap">
    <div style="width: 100%;max-width:1000px;margin: 0 auto;text-align:center">
      <span class="copyright">
         {{icpInfo}}
      </span>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Foot',
    computed:{
      icpInfo: function () {
        return 'augety.com'==window.location.hostname?'桂ICP备20001510号 © 2020 Augety.com' : '© 2020 UNNU.ME'
      }
    }
  }

</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.footer-wrap{
  height: 100px;
  width: 100%;
  padding: 40px;
  .copyright{
    color: #999;
  }
}
</style>
