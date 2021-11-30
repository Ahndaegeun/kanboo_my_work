<template>
  <div class="compiler-container">
    <SideBar/>
    <router-view></router-view>
  </div>
</template>

<script>
import SideBar from '../../../../component/acess/projectDetail/compiler/SideBar.vue'

export default {
  name: "Compiler",
  components: {
    SideBar
  }
}
</script>

<style scoped>
.compiler-container {
  height: calc(100vh - 70px);
  color: #fff;
  display: flex;
}
</style>