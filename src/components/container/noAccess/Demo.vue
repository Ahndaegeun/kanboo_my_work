<template>
  <div class="compiler-container">
    <SideBar  :top="true"
              :bottom="false"
              :topTitle="topTitle"
              :bottomTitle="bottomTitle"
              :topButton="true"
              :bottomButton="true"
              :isTree="true"
              :topPath="topPath"
              :bottomPath="bottomPath"
              :textColor="textColor"
              :topData="topData"
              :bottomData="bottomData"/>
    <Java />
  </div>
</template>

<script>
import SideBar from '../../component/acess/projectDetail/erdAndView/SideBar.vue'
import compileData from "@/assets/compiler.json"
import arrayToTree from 'array-to-tree'
import Java from '../access/projectDetail/compiler/Java.vue'

export default {
  name: "Compiler",
  data() {
    return {
      topTitle: "java",
      bottomTitle: "html",
      topPath: "/pdtail/compiler/backend",
      bottomPath: "/pdtail/compiler/frontend",
      textColor: "#fff",
      topData: arrayToTree(compileData, {childrenProperty: 'nodes'}),
      bottomData: [
        {
          name: "test1.html"
        },
        {
          name: "test2.html"
        }
      ]
    }
  },
  components: {
    SideBar,
    Java
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