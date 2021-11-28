<template>
  <div class="compiler-container">
    <SideBar/>
    <Java/>
  </div>
</template>

<script>
//import Html from './H.vue'
import Java from './Java.vue'
import SideBar from '../../../../component/acess/projectDetail/compiler/SideBar.vue'

export default {
  name: "Compiler",
  components: {
  //  Html,
    Java,
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