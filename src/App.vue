<template>
  <div id="app">
      <keep-alive exclude="detail">
      <router-view/>
    </keep-alive>
    <maintabbar/>
    <icon></icon>
    <svg-icon></svg-icon>
  </div>
</template>

<script>
import maintabbar from 'components/content/maintabbar/maintabbar'
import Icon from 'components/content/Icon/Icon.vue'
import SvgIcon from 'components/content/Icon/svg.vue'
export default { 
  name: 'App',
  components: {
    maintabbar,
    Icon,
    SvgIcon
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
