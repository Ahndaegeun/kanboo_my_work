<template>
  <div class="side-bar-container">
    <div class="back-tab">
      <h2 class="title">
        <img src="../../../../../assets/documentIcon.png" alt="/">
        JAVA
        <button class="add-java-btn" type="button">+</button>
      </h2>
      <div class="directory">
        <tree :nodes="nodes" :config="config" />
      </div>
    </div>
    
    <div class="front-tab">
      <h2 class="title">
        <img src="../../../../../assets/documentIcon.png" alt="/">
        Front
        <button class="add-front-btn" type="button">+</button>
      </h2>
      <ul class="directory">
        <li>Test.html</li>
      </ul>
    </div>
  </div>
</template>

<script>
import treeview from "vue3-treeview";
import "vue3-treeview/dist/style.css";

export default {
  name: "sideBar",
  data() {
    return {
      config: {
        roots: ["id1", "id2"],
        style: {
          color: "#fff",
        }
      },
      nodes: {
        id1: {
          text: "text1",
          children: ["id11", "id12"],
        },
        id11: {
          text: "text11",
        },
        id12: {
          text: "text12",
        },
        id2: {
          text: "text2",
        },
      },
    }
  },
  components: {
    tree: treeview
  }
}
</script>

<style>
.side-bar-container {
  width: 15%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.side-bar-container > * {
  height: 50%;
}

button {
  color: #fff;
}

.title {
  padding: 10px 10px 10px 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #999;
  border-top: 1px solid #999;
}

.title img {
  margin-right: 10px;
}

.title button {
  margin-left: auto;
}

.directory {
  height: calc(100% - 46px);
  overflow: scroll;
}

</style>