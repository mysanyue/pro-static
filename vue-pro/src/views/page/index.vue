<template>
  <section class="g-container">
    <h3>分页组件简单封装</h3>
    <CodeCollapse>
      <TxPage :params="params" :total="total" @change="fetchData" />
      <template #code>
        <MarkdownView :initialValue="markdownCode" />
      </template>
    </CodeCollapse>

    <!-- 分割线 -->
    <el-divider />

    <h3>Attributes</h3>
    <el-table :data="detialTabel">
      <el-table-column prop="name" label="事件名" />
      <el-table-column prop="type" label="类型" />
      <el-table-column prop="desc" label="说明" />
    </el-table>
  </section>
</template>

<script>
import TxPage from '@/components/pagination'
import { markdownCode, detialTabel } from './data'

export default {
  components: { TxPage },
  data() {
    this.markdownCode = markdownCode
    this.detialTabel = detialTabel

    return {
      total: 0,
      params: { pageSize: 10, pageNo: 1 },
    }
  },
  methods: {
    fetchData() {},
  },
}
</script>
