<template>
  <div :class="$style.homeContainer">
    <h3>示例：</h3>
    <CodeCollapse>
      <TxTable :data="tableData" :columns="columns" border>
        <el-table-column fixed="right">
          <template #header>
            <TxTableMore label="操作" :columns="columns" />
          </template>
          <template>
            <el-button type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </TxTable>
      <template #code>
        <MarkdownView :initialValue="markdownCode" />
      </template>
    </CodeCollapse>
    <h3>tx-table 配置说明</h3>
    <el-table :data="detialTabel">
      <el-table-column prop="name" label="事件名" />
      <el-table-column prop="desc" label="说明" />
      <el-table-column prop="props" label="参数" />
    </el-table>
    <el-alert title="注意：" :closable="false" type="warning" :class="$style.tableAlert">
      <p>
        1. 支持 element-ui table 所有 Table Attributes
        <a href="https://element.eleme.cn/#/zh-CN/component/table">具体参考 elment table-column 文档</a>
      </p>
      <p>2. 获取 table 实例使用 <strong>this.$refs.queryTable.$refs.txTable</strong></p>
      <p>3. 表头仅支持二级表头 通过 children 属性配置</p>
    </el-alert>
    <h3>columns 配置说明</h3>
    <el-table :data="detialColumns">
      <el-table-column prop="name" label="参数" />
      <el-table-column prop="desc" label="说明" />
      <el-table-column prop="type" label="类型" />
      <el-table-column prop="value" label="默认值" />
    </el-table>
    <el-alert title="注意：" :closable="false" type="warning" :class="$style.tableAlert">
      <p>1. <strong>attr</strong><a href="https://element.eleme.cn/#/zh-CN/component/table">具体参考 elment table-column 文档</a></p>
      <p>2. 定义 columns 必须采用函数方式，并且把当前组件的 this 传入，方便在 render 函数中使用访问组件内的方法和属性</p>
      <p>3. columns: cloumns(this) // 设置列</p>
    </el-alert>
  </div>
</template>

<script>
import TxTable from '@/components/table'
import TxTableMore from '@/components/table/txTableMore'
import { columns, detialColumns, markdownCode, tableData, detialTabel } from './data'

export default {
  components: { TxTable, TxTableMore },
  data() {
    this.detialColumns = detialColumns
    this.markdownCode = markdownCode
    this.detialTabel = detialTabel

    return {
      tableData,
      columns: columns(this),
    }
  },
}
</script>

<style lang="scss" module>
.home-container {
  @include container;
  h1 {
    font-size: 18px;
  }
  .table-alert {
    margin-top: 10px;
    :global(.el-alert__description) {
      font-size: 14px;
    }
  }
}
</style>
