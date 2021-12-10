<template>
  <el-pagination
    class="table-page"
    background
    :layout="layout"
    :total="total"
    :page-size="params.pageSize"
    :current-page="params.pageNo"
    :page-sizes="[10, 30, 50]"
    @size-change="val => changePage(val, 'pageSize')"
    @current-change="val => changePage(val, 'pageNo')"
  />
</template>

<script>
export default {
  name: 'Page',
  props: {
    params: { type: Object, required: true },
    total: { type: Number, required: true },
    layout: { type: String, default: 'prev, pager, next, sizes, jumper' },
  },
  methods: {
    /**
     * @description 切换改变分页
     */
    changePage(val, key) {
      this.params[key] = val
      this.$emit('change')
    },
  },
}
</script>

<style lang="scss" scoped>
.table-page {
  margin-top: 20px;
  text-align: right;
}
</style>
