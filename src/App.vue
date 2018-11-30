<template>
  <div id="app">
    <div class="wrapper">
      <spTable
        title="demo"
        :data="data"
        :pagination.sync="pagination"
        :columns="columns"
      />
    </div>
  </div>
</template>

<script>
import spTable from './components/spTable.vue'

export default {
  name: 'app',
  data () {
    return {
      data: [
        { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh', extn: '5421', created_at: '2011/04/25', salary: '$320,800' },
        { name: 'Garrett Winters', position: 'Accountant', office :' Tokyo', extn: '8422', created_at: '2011/07/25', salary: '$170,750' },
        { name: 'Ashton Cox', position: 'Junior Technical Author', office: 'San Francisco', extn: '1562', created_at: '2009/01/12', salary: '$86,000' },
        { name: 'Cedric Kelly', position: 'Senior Javascript Developer', office: 'Edinburgh', extn: '6224', created_at: '2012/03/29', salary: '$433,060' },
        { name: 'Airi Satou', position: 'Accountant', office: 'Tokyo', extn: '5407', created_at: '2008/11/28', salary: '$162,700' },
        { name: 'Brielle Williamson', position: 'Integration Specialist', office: 'New York', extn: '4804', created_at: '2012/12/02', salary: '$372,000' },
        { name: 'Herrod Chandler', position: 'Sales Assistant', office: 'San Francisco', extn: '9608', created_at: '2012/08/06', salary: '$137,500' },
        { name: 'Rhona Davidson', position: 'Integration Specialist', office: 'Tokyo', extn: '6200', created_at: '2010/10/14', salary: '$327,900' },
        { name: 'Colleen Hurst', position: 'Javascript Developer', office: 'San Francisco', extn: '2360', created_at: '2009/09/15', salary: '$205,500' },
        { name: 'Sonya Frost', position: 'Software Engineer', office: 'Edinburgh', extn: '1667', created_at: '2008/12/13', salary: '$103,600' },
        { name: 'Jena Gaines', position: 'Office Manager', office: 'London', extn: '3814', created_at: '2008/12/19', salary: '$90,560' },
        { name: 'Quinn Flynn', position: 'Support Lead', office: 'Edinburgh', extn: '9497', created_at: '2013/03/03', salary: '$342,000' },
        { name: 'Charde Marshall', position: 'Regional Director', office: 'San Francisco', extn: '6741', created_at: '2008/10/16', salary: '$470,600' },
        { name: 'Haley Kennedy', position: 'Senior Marketing Designer', office: 'London', extn: '3597', created_at: '2012/12/18', salary: '$313,500' },
        { name: 'Tatyana Fitzpatrick', position: 'Regional Director', office: 'London', extn: '1965', created_at: '2010/03/17', salary: '$385,750' },
        { name: 'Michael Silva', position: 'Marketing Designer', office: 'London', extn: '1581', created_at: '2012/11/27', salary: '$198,500' },
        { name: 'Paul Byrd', position: 'Chief Financial Officer (CFO)', office: 'New York', extn: '3059', created_at: '2010/06/09', salary: '$725,000' },
        { name: 'Gloria Little', position: 'Systems Administrator', office: 'New York', extn: '1721', created_at: '2009/04/10', salary: '$237,500' },
        { name: 'Bradley Greer', position: 'Software Engineer', office: 'London', extn: '2558', created_at: '2012/10/13', salary: '$132,000' },
        { name: 'Dai Rios', position: 'Personnel Lead', office: 'Edinburgh', extn: '2290', created_at: '2012/09/26', salary: '$217,500' },
        { name: 'Jenette Caldwell', position: 'Development Lead', office: 'New York', extn: '1937', created_at: '2011/09/03', salary: '$345,000' },
        { name: 'Yuri Berry', position: 'Chief Marketing Officer (CMO)', office: 'New York', extn: '6154', created_at: '2009/06/25', salary: '$675,000' },
        { name: 'Doris Wilder', position: 'Sales Assistant', office: 'Sidney', extn: '3023', created_at: '2010/09/20', salary: '$85,600' },
        { name: 'Jennifer Chang', position: 'Regional Director', office: 'Singapore', extn: '9239', created_at: '2010/11/14', salary: '$357,650' },
        { name: 'Brenden Wagner', position: 'Software Engineer', office: 'San Francisco', extn: '1314', created_at: '2011/06/07', salary: '$206,850' },
        { name: 'Shou Itou', position: 'Regional Marketing', office: 'Tokyo', extn: '8899', created_at: '2011/08/14', salary: '$163,000' },
        { name: 'Michelle House', position: 'Integration Specialist', office: 'Sidney', extn: '2769', created_at: '2011/06/02', salary: '$95,400' },
        { name: 'Prescott Bartlett', position: 'Technical Author', office: 'London', extn: '3606', created_at: '2011/05/07', salary: '$145,000' },
        { name: 'Gavin Cortez', position: 'Team Leader', office: 'San Francisco', extn: '2860', created_at: '2008/10/26', salary: '$235,500' },
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
          label: 'Office',
          field: 'office',
        },
        {
          label: 'Extn.',
          field: 'extn',
        },
        {
          label: 'Created At',
          field: 'created_at',
        },
        {
          label: 'Salary',
          field: 'salary',
        }
      ]
    }
  },
  components: {
    spTable
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.wrapper {
  max-width: 600px;
  margin: 0 auto;
}
.sp-table {
  width: 100%;
}
</style>
