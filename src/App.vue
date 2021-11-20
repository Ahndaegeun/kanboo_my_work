<template>
  <div class="container">
    <nav>
      <a href="#">KanBoo</a>
    </nav>
    <DashBoard class="dash"/>
  </div>
</template>

<script>
import DashBoard from './components/container/access/projectDetail/DashBoard.vue'

export default {
  name: 'App',
  components: {
    DashBoard
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
