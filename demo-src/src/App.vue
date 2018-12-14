<template>
  <div id="app">
    <div class="header">
      <div class="title">sp-table</div>
      <div class="command">
        npm install --save sp-table
      </div>
      <div class="description">Table component with server-side pagination</div>
    </div>
    <div class="example-wrapper">
      <div class="example shadow">
        <h2>Minimal</h2>
        <Example />
      </div>
      <Collapse :style="{ marginTop: '12px' }" title="Show code">
        <CodeSnippet :style="{ marginBottom: '12px' }" class="snippet" lang="HTML" :code="snippet1" />
        <CodeSnippet :style="{ marginBottom: '12px' }" class="snippet" lang="JS" :code="snippet2" />
      </Collapse>
    </div>
    <div style="margin-bottom: 42px;" class="example-wrapper">
      <div class="example shadow">
        <h2>Server Pagination</h2>
        <p>With <code>pagination.total</code> property means that you’ll be configuring Table for server-side pagination.</p>
        <Example2 />
      </div>
      <Collapse :style="{ marginTop: '12px' }" title="Show code">
        <CodeSnippet :style="{ marginBottom: '12px' }" class="snippet" lang="HTML" :code="snippet3" />
        <CodeSnippet :style="{ marginBottom: '12px' }" class="snippet" lang="JS" :code="snippet4" />
      </Collapse>
    </div>
  </div>
</template>

<script>
import Example from './components/Example'
import Example2 from './components/Example2'
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
const snippet3 = `
<template>
  <spTable
    @request="fetch"
    :data="data"
    :pagination.sync="pagination"
    :columns="columns"
  />
</template>
`
const snippet4 = `
import 'sp-table/dist/spTable.css'
import spTable from 'sp-table'
import axios from 'axios'

export default {
  name: 'example2',
  async mounted () {
    await this.fetch()
  },
  methods: {
    async fetch () {
      let skip = this.pagination.perPage * (this.pagination.currentPage - 1)
      let response = await axios.get(\`https://jsonplaceholder.typicode.com/todos?_start=\${skip}&_limit=\${this.pagination.perPage}\`)
      this.data = response.data
    }
  },
  data () {
    return {
      data: [],
      pagination: {
        currentPage: 1,
        perPage: 5,
        total: 200
      },
      columns: [
        {
          label: 'Id',
          field: 'id',
          style: 'width: 50px'
        },
        {
          label: 'User Id',
          field: 'userId',
          style: 'width: 100px'
        },
        {
          label: 'Title',
          field: 'title',
        },
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
      snippet2: snippet2,
      snippet3: snippet3,
      snippet4: snippet4,
    }
  },
  components: {
    Example,
    Example2,
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
  max-width: 800px;
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
code {
  color: #286fa3;
  padding: 2px 5px;
  margin: 0 2px;
  border-radius: 2px;
  border: 1px solid #e6e6e6;
  white-space: nowrap;
  box-shadow: 0 1px 1px rgba(0,0,0,.125);
}
</style>
