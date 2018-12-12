<template>
  <div class="code-snippet">
    <div class="language">{{ lang }}</div>
    <div class="render" v-html="result"></div>
  </div>
</template>

<script>
import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css'

export default {
  name: 'code-snippet',
  props: {
    code: String,
    lang: String,
  },
  computed: {
    result () {
      const highlighted = hljs.highlight(this.lang, this.code.trim())
      return highlighted.value
    }
  },
}
</script>

<style lang="scss">
.code-snippet {
  background: #fafafa;
  border-radius: 3px;
  font-family: 'Roboto Mono', monospace;
  font-size: 10pt;
  overflow: auto;
  position: relative;
  .render {
    padding: 32px 24px;
    white-space: pre;
  }
  .language {
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px 10px 0;
    border-radius: 0 0 0 2px;
    color: #cc9;
  }
  .hljs-name, .hljs-attr, .hljs-keyword, .hljs-tag {
    color: #2973b7;
  }
}
</style>
