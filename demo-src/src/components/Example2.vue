<template>
  <spTable
    @request="fetch"
    :data="data"
    :pagination.sync="pagination"
    :columns="columns"
  />
</template>

<script>
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
      let response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_start=${skip}&_limit=${this.pagination.perPage}`)
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
</script>

<style scoped>
</style>
