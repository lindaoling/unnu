<template>
  <div>
    <Top />
    <router-view />
    <Foot />
    <BackToTop />
  </div>
</template>
<script>
import Top from "./components/Top";
import Foot from "./components/Foot";
import BackToTop from "@/components/BackToTop";
export default {
  name: 'Layout',
  components:{
    BackToTop,
    Top,
    Foot
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
html,body{
  width: 100%;overflow: hidden;
}
</style>


