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
        <Collapse :style="{ marginTop: '20px' }" title="Show code">
          <CodeSnippet class="snippet" lang="html" :code="snippet1" />
          <CodeSnippet class="snippet" lang="js" :code="snippet2" />
        </Collapse>
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
const snippet2 = `
import 'sp-table/dist/spTable.css'
import spTable from 'sp-table'

export default {
  name: 'example',
  data () {
    return {
      data: [
        { name: 'Tiger Nixon', position: 'System Architect', created_at: '2011/04/25', salary: '$320,800' },
        ...
      ],
      pagination: {
        currentPage: 1,
        perPage: 5
      },
      columns: [
        {
          label: 'Name',
          field: 'name',
          style: 'width: 100px'
        },
        {
          label: 'Position',
          field: 'position',
        },
        {
          label: 'Salary',
          field: 'salary',
        },
        {
          label: 'Created At',
          field: 'created_at',
          style: 'width: 100px'
        }
      ]
    }
  },
  components: {
    spTable
  }
}
`

export default {
  name: 'app',
  data () {
    return {
      snippet1: snippet1,
      snippet2: snippet2
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
  color: #2c3e50;
}
.header {
  height: 220px;
  background-color: #fc8a83;
  color: #fff;
  padding: 0 16px;
  text-align: center;
}
.title {
  font-size: 30px;
  padding: 30px;
}
.example-wrapper {
  text-align: center;
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
.snippet {
  text-align: initial;
}
.shadow {
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}
h1, h2, h3 {
  font-weight: 400;
}
</style>
