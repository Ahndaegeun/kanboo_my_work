<template>
  <div class="container">
    <nav>
      <a href="#">KanBoo</a>
    </nav>
    <Compiler/>
  </div>
</template>

<script>
import Compiler from './components/container/access/projectDetail/compiler/Compiler.vue'

export default {
  name: 'App',
  components: {
    Compiler
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
