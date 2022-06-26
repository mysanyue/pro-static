<template>
  <div :class="$style.homeContainer">
    <h3>示例：</h3>
    <tx-table :data="tableData" :columns="columns" border>
      <el-table-column fixed="right">
        <template #header>
          <tx-table-more label="操作" :columns="columns" />
        </template>
        <template>
          <el-button type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </tx-table>
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
import txTable from '@/components/table'
import txTableMore from '@/components/table/txTableMore'

const columns = (that) => {
  return [
    { show: true, attr: { type: 'selection', width: 50, fixed: 'left', align: 'center' } },
    { show: true, attr: { type: 'index', width: 50, label: '序号', fixed: 'left', align: 'center' } },
    { show: true, attr: { label: '姓名', prop: 'name' } },
    { show: true, attr: { label: '日期', prop: 'date' } },
    { show: true, attr: { label: '省份', prop: 'province', width: 120 } },
    { show: true, more: true, attr: { label: '市区', prop: 'city', width: 120 } },
    { show: true, more: true, attr: { label: '地址', prop: 'address', width: 150 } },
    { show: true, more: true, attr: { label: '邮编', prop: 'zip', width: 150 } },
  ]
}

export default {
  components: { txTable, txTableMore },
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333,
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333,
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333,
        },
      ],
      columns: columns(this),
      detialColumns: [
        { name: 'more', desc: '是否是跟多，列筛选配置选项', type: 'Boolean', value: 'false' },
        { name: 'show', desc: '是否显示在列上', type: 'Boolean', value: 'false' },
        { name: 'children', desc: '二级表头，具体配置与 attr 一致。注意这里仅支持二级表头', type: 'Array', value: '--' },
        { name: 'render', desc: 'render 函数，具体用法参考示例', type: '--', value: '--' },
        { name: 'attr', desc: '配置与 elemnt-ui table > Table-column Attributes 配置一致', type: 'Object', value: '--' },
        { name: '--', desc: '其他可根据项目需求自行配置数据', type: '--', value: '--' },
      ],
      detialTabel: [
        { name: 'select', desc: '当用户手动勾选数据行的 Checkbox 时触发的事件', props: 'selection, row' },
        { name: 'select-all', desc: '当用户手动勾选全选 Checkbox 时触发的事件', props: 'selection' },
        { name: 'selection-change', desc: '当选择项发生变化时会触发该事件', props: 'selection' },
        { name: 'cell-click', desc: '当某个单元格被点击时会触发该事件', props: 'row, column, cell, event' },
        { name: 'cell-dblclick', desc: '当某个单元格被双击击时会触发该事件', props: 'row, column, cell, event' },
        { name: 'row-click', desc: '当某一行被点击时会触发该事件', props: 'row, column, event' },
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
  .table-alert {
    margin-top: 10px;
    :global(.el-alert__description) {
      font-size: 14px;
    }
  }
}
</style>
