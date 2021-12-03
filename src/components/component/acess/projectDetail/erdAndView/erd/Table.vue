<template>
  <div class="table-container">
    <Write class="add-table"/>
    <ul class="table-list">
      <li class="table-box"
          v-for="(item, index) in $store.state.erd.sideBarData.topData" :key="index">
        <div class="title">
          <input type="text" :readonly="!item.isModify" v-model="item.name"> 
          <div>
            <button @click="deleteTable(item)"
                    v-if="!item.isModify"
                    type="button"
                    class="table-del-btn">Del</button>
            <button @click="showModify(item)"
                    v-if="!item.isModify"
                    type="button"
                    class="table-mod-btn">Mod</button>
            <button @click="modifyTable(item)"
                    v-if="item.isModify"
                    type="button"
                    class="table-mod-btn">finish</button>
          </div>
        </div>
        <ul class="body">
          <li v-for="col of item.columns"
              :key="col"
              class="col-wrap">
            <input type="text" 
                  placeholder="name" 
                  :readonly="!item.isModify" 
                  class="name" 
                  v-model="col.name">
            <input type="text" 
                  placeholder="type" 
                  :readonly="!item.isModify" 
                  class="type" 
                  v-model="col.type">
            <input type="text" 
                  placeholder="constraint" 
                  :readonly="!item.isModify" 
                  class="constraint" 
                  v-model="col.constraint">
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
import Write from '../erd/Write.vue'

export default {
  name: "table",
  data() {
    return {
      isModify: true
    }
  },
  components: {
    Write
  },
  methods: {
    ...mapMutations({
      deleteTable: 'erd/deleteTable',
      showModify: 'erd/showModify',
      cancel: 'erd/cancel',
      modifyTable: 'erd/modifyTable'
    }),
    ...mapActions({
      getErdData: 'erd/getErdData'
    })
  },
  mounted() {
    this.getErdData()
  }
}
</script>

<style scoped>
.table-container {
  border: 1px solid #999;
  width: 85%;
  position: relative;
  padding: 30px;
}

.add-table {
  position: absolute;
  top: 10px;
  right: 10px;
}

.table-list {
  height: 100%;
}

.table-box {
  width: fit-content;
  padding: 5px 10px;
  background: #2C2F3B;
  color: #fff;
  margin-bottom: 10px;
}

.table-box .title {
  margin-bottom: 10px;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
}

.table-del-btn,
.table-mod-btn {
  color: #999;
  transition: color .1s ease-in;
}

.table-del-btn:hover,
.table-mod-btn:hover {
  color: #fff;
}

.col-wrap {
  display: flex;
}

.title input,
.col-wrap input {
  border: none;
  outline: none;
  background: none;
  color: #fff;
}

.table-box .body span {
  min-width: 100px;
}
</style>