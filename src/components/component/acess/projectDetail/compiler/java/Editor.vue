<template>
  <div class="editor-container">
    <ul class="open-file">
      <li class="file clicked-file">
        <img src="../../../../../../assets/documentIcon.png" alt="">
        <span class="file-name">{{$store.state.name}}</span>
        <button type="button">X</button>
      </li>
      <li class="file">
        <img src="../../../../../../assets/documentIcon.png" alt="">
        <span class="file-name">Test.java</span>
        <button type="button">X</button>
      </li>
      <li class="file">
        <img src="../../../../../../assets/documentIcon.png" alt="">
        <span class="file-name">Test.java</span>
        <button type="button">X</button>
      </li>
      <li class="more-file">
        <button type="button">...</button>
      </li>
    </ul>
    <div class="code-container">
      <Codemirror :value="code"
                  :options="cmOptions"
                  border/>
    </div>
    <button class="run-btn"
            type="button"
            @click="compileCode">run</button>
  </div>
</template>

<script>
import "codemirror-editor-vue3/dist/style.css"
import "codemirror/theme/dracula.css"

export default {
  name: "Editor",
  data() {
    return {
      code: `public class Test{
        System.out.println("Hello World!!!");
}`,
      cmOptions: {
        mode: 'log',
        theme: 'dracula',
        lineNumbers: true,
        smartIndent: true,
        indentUnit: 4,
        foldFutter: true,
        styleActiceLine: true
      }
    }
  },
  methods: {
    compileCode() {
      console.log(this.code)
    }
  }
}
</script>

<style scoped>
.editor-container {
  position: relative;
}

.open-file {
  height: 40px;
  display: flex;
}

.file {
  border: 1px solid #999;
  width: 160px;
  background: #2C2F3B;
  font-size: 16px;
  color: #999;
  display: flex;
  align-items: center;
  padding: 0 10px;
  cursor: pointer;
}

.file button {
  color: #999;
}

.file button:hover {
  color: #fff;
}

.file img {
  margin-right: 10px;
}

.file-name {
  margin-right: auto;
}

.clicked-file {
  color: #fff;
  border-color: #fff;
}

.more-file {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
}

.code-container {
  height: calc(100% - 40px);
}

.code-container > * {
  font-size: 20px;
}

.run-btn {
  position: absolute;
  top: 45px;
  right: 10px;
  z-index: 10;
}

.run-btn:hover {
  color: #00ff00;
}
</style>