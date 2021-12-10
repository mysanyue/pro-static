<template>
  <el-table-column v-if="item.render" v-bind="item">
    <template slot-scope="scope">
      <tx-table-solt :render="item.render" :row="scope.row" :index="scope.$index" :column="item" />
    </template>
  </el-table-column>
  <el-table-column v-else v-bind="item" />
</template>

<script>
import txTableSolt from './txTableSolt'

export default {
  components: { txTableSolt },
  props: {
    item: { type: Object, required: true },
  },
}
</script>
