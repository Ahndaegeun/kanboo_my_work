<template>
  <div class="side-bar-container">
    <div class="back-tab">
      <h2 class="title">
        <img src="../../../../../assets/documentIcon.png" alt="/">
        JAVA
        <button class="add-java-btn" type="button">+</button>
      </h2>
      <ul class="directory">
        <li>Test.java</li>
      </ul>
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
export default {
  name: "sideBar"
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
}

.title img {
  margin-right: 10px;
}

.title button {
  margin-left: auto;
}

.front-tab .title {
  border-top: 1px solid #999;
}
</style>