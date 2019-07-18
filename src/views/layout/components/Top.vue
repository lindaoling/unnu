<template>
  <div style="background-color: #f5f5f5;border-bottom: 1px solid #d4d4d4">
    <mu-appbar style="width: 100%;max-width:1000px;margin: 0 auto;background-color:transparent;" z-depth="0"
      title="UNNU">
      <router-link to="/" style="color:rgb(115, 115, 115)">
        unnu.me
      </router-link>
      <mu-button flat slot="right">Photo</mu-button>
      <mu-button flat slot="right">Article</mu-button>
    </mu-appbar>
  </div>
</template>

<script>
  export default {
    name: 'Top'
  }

</script>
<style rel="stylesheet/scss" lang="scss" scoped>
</style>
