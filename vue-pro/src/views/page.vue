<template>
  <div :class="$style.homeContainer">
    <h3>示例：</h3>
    <tx-page :params="params" :total="total" @change="fetchData" />
    <h3>tx-page 配置说明：</h3>
    <el-table :data="detialTabel">
      <el-table-column prop="name" label="事件名" />
      <el-table-column prop="type" label="类型" />
      <el-table-column prop="desc" label="说明" />
    </el-table>
  </div>
</template>

<script>
import txPage from '@/components/pagination'
export default {
  components: { txPage },
  data() {
    return {
      total: 0,
      params: { pageSize: 10, pageNo: 1 },
      detialTabel: [
        { name: 'params', desc: '搜索参数', type: 'Object' },
        { name: 'total', desc: '当前页总数', type: 'Number' },
        { name: 'layout', desc: '组件布局，子组件名用逗号分隔', type: 'String' },
        { name: 'change', desc: '切换页大小或者分页触发该事件', type: 'Function' },
      ],
    }
  },
  methods: {
    fetchData() {},
  },
}
</script>

<style lang="scss" module>
.home-container {
  @include container;
  h1 {
    font-size: 18px;
  }
}
</style>
