<template>
  <div>
    <Top />
    <router-view />
    <Foot />
  </div>
</template>
<script>
import Top from "./components/Top";
import Foot from "./components/Foot";
export default {
  name: 'Layout',
  components:{
    Top,
    Foot
  }
}
</script>
