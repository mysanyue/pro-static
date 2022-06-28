<template>
  <div :class="$style.homeContainer">
    <h3>示例：</h3>
    <CodeCollapse>
      <TxPage :params="params" :total="total" @change="fetchData" />
      <template #code>
        <MarkdownView :initialValue="markdownCode" />
      </template>
    </CodeCollapse>
    <h3>tx-page 配置说明：</h3>
    <el-table :data="detialTabel">
      <el-table-column prop="name" label="事件名" />
      <el-table-column prop="type" label="类型" />
      <el-table-column prop="desc" label="说明" />
    </el-table>
  </div>
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

<style lang="scss" module>
.home-container {
  @include container;
  h1 {
    font-size: 18px;
  }
}
</style>
