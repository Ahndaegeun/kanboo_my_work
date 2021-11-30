<template>
  <div class="editor-container">
    <v-md-preview-html :html="text" preview-class="vuepress-markdown-body"></v-md-preview-html>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: ""
    }
  }
}
</script>

<style>
.editor-container {
  width: 100%;
  border: 1px solid red;
}
</style>