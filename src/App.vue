<template>
  <div class="container">
    <nav>
      <Menu/>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
// import Compiler from './components/container/access/projectDetail/compiler/Compiler.vue'
import '../public/reset.css'
import Menu from './components/component/global/Menu.vue'

export default {
  name: 'App',
  components: {
    // Compiler,
    Menu
  }
}
</script>

<style scoped>

.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #16161A;
}

nav {
  widows: 100%;
  height: 70px;
  background: #75757529;
  color: #ffffff;
}

</style>
