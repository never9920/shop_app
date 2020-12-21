<template>
  <div id="app">
      <keep-alive exclude="detail">
      <router-view/>
    </keep-alive>
    <maintabbar v-show="this.$route.meta.isshow"/>
  </div>
</template>

<script>
import maintabbar from 'components/content/maintabbar/maintabbar'
export default { 
  name: 'App',
  components: {
    maintabbar
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
