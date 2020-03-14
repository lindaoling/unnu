<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
    let ismobile = this.isMobile()
    if(ismobile){
      console.log('issssssssssssssssssssss mobile')
    }else{
      console.log('issssssssssssssssssssss pc')
    }
  },
  methods:{
    isMobile() {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag;
    }
  }
}
</script>
