<template>
  <table class="sp-table">
    <div class="thead">
      <td style="border-bottom: none;" :colspan="columns.length">
        <div class="flex">
          <p style="margin: 0; flex: 1;" class="caption">{{ title }}</p>
          <button @click="$emit('request')">refresh</button>
        </div>
      </td>
    </div>
    <thead>
      <tr>
        <th v-for="column in columns">
          {{ column.label }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in computedData">
        <td :style="column.style" v-for="column in columns">
          <slot :name="`cell-${column.field}`" :cell="row[column.field]">
            {{ column.format ? column.format(row[column.field]) : row[column.field] }}
          </slot>
        </td>
      </tr>
    </tbody>
    <div class="tfoot">
      <td :colspan="columns.length">
        <div class="flex pagination">
          <button :disabled="innerPagination.currentPage === 1" @click="toFirst">first</button>
          <button :disabled="innerPagination.currentPage === 1" @click="prev">prev</button>
          <div class="text-center" style="margin: 8px; width: 4rem;">{{ innerPagination.currentPage }} / {{ totalPage }}</div>
          <button :disabled="innerPagination.currentPage === totalPage" @click="next">next</button>
          <button :disabled="innerPagination.currentPage === totalPage" @click="toLast">last</button>
        </div>
      </td>
    </div>
  </table>
</template>

<script>
export default {
  props: {
    title: String,
    data: {
      type: Array,
      required: true
    },
    columns: {
      type: Array,
      required: true
    },
    pagination: {
      type: Object,
      default: function () {
        return { currentPage: 1, perPage: 10 }
      }
    }
  },
  computed: {
    isServerSide () {
      return this.pagination.total !== void 0
    },
    totalPage () {
      if (!this.isServerSide) {
        this.innerPagination.total = this.data.length
      }
      if (this.innerPagination.total === 0) return 1
      return Math.ceil(this.innerPagination.total / this.innerPagination.perPage)
    },
    computedData () {
      if (this.isServerSide) {
        return this.data
      }
      const startIndex = (this.innerPagination.currentPage - 1) * this.innerPagination.perPage
      const lastIndex = this.innerPagination.currentPage * this.innerPagination.perPage
      return this.data.slice(startIndex, lastIndex)
    }
  },
  data () {
    return {
      innerPagination: {
        total: 0,
        currentPage: 1,
        perPage: 10
      }
    }
  },
  watch: {
    'pagination.total': function (newVal, oldVal) {
      this.innerPagination = Object.assign({}, this.pagination)
    }
  },
  methods: {
    toFirst () {
      this.innerPagination.currentPage = 1
      this.emitParent()
    },
    toLast () {
      this.innerPagination.currentPage = this.totalPage
      this.emitParent()
    },
    prev () {
      this.innerPagination.currentPage--
      this.emitParent()
    },
    next () {
      this.innerPagination.currentPage++
      this.emitParent()
    },
    emitParent () {
      if (!this.isServerSide) {
        return
      }
      this.$emit('update:pagination', this.innerPagination)
      this.$emit('request')
    }
  },
  created () {
    this.innerPagination = Object.assign({}, this.pagination)
  }
}
</script>

<style scoped lang="scss">
.sp-table {
  font-size: 85%;
  .flex {
    display: flex;
  }
  th {
    color: rgba(0,0,0,0.54);
    vertical-align: middle;
  }
  tbody tr {
    height: 50px;
  }
  .thead {
    display: table-header-group;
    td {
      padding: 16px 12px;
    }
  }
  .tfoot {
    display: table-footer-group;
  }
  .pagination {
    justify-content: flex-end;
  }
}
</style>
