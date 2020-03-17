<template>
  <div class="vue-root">
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
import ResizeMixin from './mixin/ResizeHandler'
export default {
  name: 'Layout',
  components:{
    BackToTop,
    Top,
    Foot
  },
  mixins: [ResizeMixin],
  methods:{
    device() {
      return this.$store.state.app.device
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

.vue-root,article, div, footer, header, main, nav, section {
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  // border: 0 solid #000;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  margin: 0;
  padding: 0;
  position: relative;
  overflow: hidden;
}


</style>


