<template>
  <div>
    <h1>project List</h1>
    <router-link  style="color: white" 
                  to="/pdtail/dashboard">
      goToDashboard
    </router-link>
    <button @click="click">login</button>
  </div>  
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'projectList',
  methods: {
    ...mapMutations({
      login: 'global/setIsLogin'
    }),
    click() {
      this.login(true)
    }
  }
}
</script>

<style>

</style>