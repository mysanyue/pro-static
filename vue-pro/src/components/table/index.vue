<template>
  <el-table
    v-if="show"
    ref="txTable"
    :data="data"
    v-bind="$attrs"
    @select="(selection, row) => $emit('select', selection, row)"
    @select-all="(selection) => $emit('select-all', selection)"
    @selection-change="(selection) => $emit('selection-change', selection)"
    @cell-click="(row, column, cell, event) => $emit('cell-click', row, column, cell, event)"
    @cell-dblclick="(row, column, cell, event) => $emit('cell-dblclick', row, column, cell, event)"
    @row-click="(row, column, event) => $emit('row-click', row, column, event)"
  >
    <slot name="header" />
    <template v-for="(item, index) of columns">
      <template v-if="item.show">
        <!-- 是否为多级表头 这里只考虑二级 -->
        <el-table-column v-if="item.children && item.children.length" :key="index" v-bind="item.attr">
          <tx-table-column v-for="(subItem, subIndex) of item.children" :key="subIndex + '0' + index" :item="subItem" />
        </el-table-column>
        <tx-table-column v-else :key="index" :item="item.attr" />
      </template>
    </template>
    <slot />
  </el-table>
</template>

<script>
import txTableColumn from './txTableColumn'
export default {
  name: 'TxTable',
  components: { txTableColumn },
  props: {
    data: { type: Array, default: () => [] },
    columns: { type: Array, default: () => [] },
  },
  data() {
    return { show: true }
  },
}
</script>
