<template>

  <ul class="nav-container">
    <li>
      <router-link to="/" v-if="menuList.left.type === 'img'">
        <img src="../../../assets/kanboo_logo.png" alt="logo">
      </router-link>
      <router-link to="/" v-if="menuList.left.type === 'text'">
        {{menuList.left.name}}
      </router-link>
    </li>
    <li>
      <ul class="left-menu">
        <li v-for="item in menuList.right" :key="item">
          <router-link class="route-menu" :to="item.path">{{item.name}}</router-link>
        </li>
      </ul>
    </li>
  </ul>  

</template>

<script>
import MenuContent from '../../../assets/MenuList.json'
export default {
  name: 'menu',
  data() {
    return {
      list: MenuContent,
      menuList: {
        "left": {},
        "right": []
      }
    }
  },
  watch: {
    '$route' (to) {
      const path = to.path
      const obj = {
        "left": {},
        "right": []
      }
      switch(path) {
        case '/':
          obj.left = this.list.noAccess.left
          obj.right = this.list.noAccess.home
          break;
        case '/community':
          obj.left = this.list.noAccess.left
          obj.right = this.list.noAccess.community
          break;
        case '/signin':
          obj.left = this.list.noAccess.left
          obj.right = this.list.noAccess.sign
          break;
        case '/demo':
          obj.left = this.list.noAccess.left
          obj.right = this.list.noAccess.home
          break;
      }
      this.menuList = obj
    }
  }
}
</script>

<style scoped>
.nav-container {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
}

img {
  width: 100px;
}

button {
  color: #fff;
}

.left-menu {
  display: flex;
}

.route-menu {
  padding: 0 10px;
  color: #999;
  transition: color .2s ease-in;
}

.route-menu:hover {
  color: #fff;
}
</style>