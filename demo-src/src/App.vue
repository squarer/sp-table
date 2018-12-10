<template>
  <div id="app">
    <div class="header">
      <div class="title">sp-table</div>
      <div class="command">
        npm install --save sp-table
      </div>
      <div class="description">some description here</div>
    </div>
    <div class="example-wrapper">
      <div class="example shadow">
        <h2>Minimal</h2>
        <Example />
      </div>
    </div>
  </div>
</template>

<script>
import Example from './components/Example'
import Collapse from './components/Collapse'
import CodeSnippet from './components/CodeSnippet'

const snippet1 = `
<template>
  <spTable
    :data="data"
    :pagination.sync="pagination"
    :columns="columns"
  />
</template>
`

export default {
  name: 'app',
  data () {
    return {
      snippet1: snippet1
    }
  },
  components: {
    Example,
    Collapse,
    CodeSnippet
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.header {
  height: 220px;
  background-color: #fc8a83;
  color: #fff;
  padding: 0 16px;
}
.title {
  font-size: 30px;
  padding: 30px;
}
.example-wrapper {
  max-width: 600px;
  margin: 0 auto;
  margin-top: 30px;
  padding: 16px;
}
.example {
  padding: 16px;
}
.command {
  background-color: #d15a53;
  font-family: monospace;
  color: #fff;
  max-width: 450px;
  margin:  auto;
  padding: 12px 16px;
  border-radius: 6px;
}
.description {
  padding: 26px;
}
.shadow {
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}
h1, h2, h3 {
  font-weight: 400;
}
</style>
