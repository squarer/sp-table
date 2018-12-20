<template>
  <table class="sp-table">
    <div class="thead">
      <td style="border-bottom: none;" :colspan="columns.length">
        <div class="flex">
          <p style="margin: 0; flex: 1;" class="caption">{{ title }}</p>
          <button v-if="hasRequestListener" @click="$emit('request')">refresh</button>
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
        <ul class="flex pagination">
          <li :class="isFirstPage ? 'disabled first-page' : 'first-page'" @click="toFirst"></li>
          <li :class="isFirstPage ? 'disabled prev-page' : 'prev-page'" @click="prev"></li>
          <div class="pagination-label">{{ innerPagination.currentPage }} / {{ totalPage }}</div>
          <li :class="isLastPage ? 'disabled next-page' : 'next-page'" @click="next"></li>
          <li :class="isLastPage ? 'disabled last-page' : 'last-page'" @click="toLast"></li>
        </ul>
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
    hasRequestListener () {
      return this.$listeners && this.$listeners.request
    },
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
    },
    isFirstPage () {
      return this.innerPagination.currentPage === 1
    },
    isLastPage () {
      return this.innerPagination.currentPage === this.totalPage
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
      if (this.isFirstPage) return
      this.innerPagination.currentPage = 1
      this.emitParent()
    },
    toLast () {
      if (this.isLastPage) return
      this.innerPagination.currentPage = this.totalPage
      this.emitParent()
    },
    prev () {
      if (this.isFirstPage) return
      this.innerPagination.currentPage--
      this.emitParent()
    },
    next () {
      if (this.isLastPage) return
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
  width: 100%;
  font-size: 85%;
  border-collapse: collapse;
  .flex {
    display: flex;
  }
  tr {
    transition: all .3s;
    &:hover {
      background-color: #ecf6fd;
    }
  }
  th {
    color: rgba(0, 0, 0, 0.85);
    background-color: #f0f2f5;
    font-weight: 500;
  }
  td {
    color: rgba(0, 0, 0, 0.65);
    border-bottom: 1px solid #e9e9e9;
  }
  th, td {
    padding: 1.4em .8em;
  }
  .thead {
    display: table-header-group;
  }
  .tfoot {
    display: table-footer-group;
    td {
      padding: 0;
      border: none;
    }
  }
  button {
    padding: 6px 8px;
    transition: all .3s;
    border-radius: 4px;
    outline: none;
    border: 1px solid #d9d9d9;
    color: rgba(0, 0, 0, 0.65);
    &:hover {
      border-color: #49a9ee;
      cursor: pointer;
    };
    &:disabled {
      border-color: #d9d9d9;
      color: rgba(0, 0, 0, .25);
      cursor: not-allowed;
    }
  }
  ul.pagination {
    justify-content: flex-end;
    list-style: none;
    li {
      transition: all .3s;
      margin-right: 8px;
      outline: 0;
      min-width: 28px;
      line-height: 28px;
      height: 28px;
      background-color: #fff;
      border: 1px solid #d9d9d9;
      border-radius: 4px;
      padding: 0;
      &:hover {
        border-color: #49a9ee;
        cursor: pointer;
      };
      &.disabled {
        border-color: #d9d9d9;
        color: rgba(0, 0, 0, .25);
        cursor: not-allowed;
      }
      &.first-page:before {
        content: "\2039\2039";
      }
      &.prev-page:before {
        content: "\2039";
      }
      &.next-page:before {
        content: "\203a";
      }
      &.last-page:before {
        content: "\203a\203a";
      }
    }
    .pagination-label {
      margin: 7px 8px;
      margin-left: 0;
      width: 4em;
    }
  }
}
</style>
