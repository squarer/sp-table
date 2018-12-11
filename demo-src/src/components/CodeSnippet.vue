<template>
  <div class="code-snippet">
    <div class="language">{{ lang }}</div>
    <div class="render" v-html="result"></div>
  </div>
</template>

<script>
import hljs from 'highlight.js'
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
  background: white;
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
    padding: 4px 4px 6px 6px;
    border-radius: 0 0 0 2px;
  }
}
</style>
