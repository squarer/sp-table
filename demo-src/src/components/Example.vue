<template>
  <spTable
    :data="data"
    :pagination.sync="pagination"
    :columns="columns"
  />
</template>

<script>
import 'sp-table/dist/spTable.css'
import spTable from 'sp-table'

export default {
  name: 'example',
  data () {
    return {
      data: [
        { name: 'Tiger Nixon', created_at: '2011/04/25', salary: '$320,800' },
        { name: 'Garrett Winters', created_at: '2011/07/25', salary: '$170,750' },
        { name: 'Ashton Cox', created_at: '2009/01/12', salary: '$86,000' },
        { name: 'Cedric Kelly', created_at: '2012/03/29', salary: '$433,060' },
        { name: 'Airi Satou', created_at: '2008/11/28', salary: '$162,700' },
        { name: 'Brielle Williamson', created_at: '2012/12/02', salary: '$372,000' },
        { name: 'Herrod Chandler', created_at: '2012/08/06', salary: '$137,500' },
        { name: 'Rhona Davidson', created_at: '2010/10/14', salary: '$327,900' },
        { name: 'Colleen Hurst', created_at: '2009/09/15', salary: '$205,500' },
        { name: 'Sonya Frost', created_at: '2008/12/13', salary: '$103,600' },
        { name: 'Jena Gaines', created_at: '2008/12/19', salary: '$90,560' },
        { name: 'Quinn Flynn', created_at: '2013/03/03', salary: '$342,000' },
        { name: 'Charde Marshall', created_at: '2008/10/16', salary: '$470,600' },
        { name: 'Haley Kennedy', created_at: '2012/12/18', salary: '$313,500' },
        { name: 'Tatyana Fitzpatrick', created_at: '2010/03/17', salary: '$385,750' }
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
</script>

<style scoped>
</style>
