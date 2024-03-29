// markdown 代码片段
export const markdownCode = `
\`\`\`vue
<template>
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
</template>

<script>
import TxTable from '@/components/table'
import TxTableMore from '@/components/table/txTableMore'
import { number } from '@/utils/filters'

const columns = that => {
  return [
    { show: true, attr: { type: 'selection', width: 50, fixed: 'left', align: 'center' } },
    { show: true, attr: { type: 'index', width: 50, label: '序号', fixed: 'left', align: 'center' } },
    { show: true, attr: { label: '姓名', prop: 'name' } },
    { show: true, attr: { label: '日期', prop: 'date' } },
    { show: true, attr: { label: '省份', prop: 'province', width: 120 } },
    { show: true, more: true, attr: { label: '市区', prop: 'city', width: 120 } },
    { show: true, more: true, attr: { label: '地址', prop: 'address', width: 150 } },
    { show: true, more: true, attr: { label: '邮编', prop: 'zip', width: 150 } },
    { show: true, more: true, 
      attr: {
        label: '确认数据',
        'min-width': 120,
        render:({ row }, h) => {
          return row.sureValue !== null ? <span>{number(row.sureValue)}</span>
        }
      }
    }
  ]
}

export default {
  components: { TxTable, TxTableMore },
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
    }
  },
}
</script>
\`\`\` 
`

// columns 配置说明
export const detialColumns = [
  { name: 'more', desc: '是否是跟多，列筛选配置选项', type: 'Boolean', value: 'false' },
  { name: 'show', desc: '是否显示在列上', type: 'Boolean', value: 'false' },
  { name: 'children', desc: '二级表头，具体配置与 attr 一致。注意这里仅支持二级表头', type: 'Array', value: '--' },
  { name: 'render', desc: 'render 函数，具体用法参考示例', type: '--', value: '--' },
  { name: 'attr', desc: '配置与 elemnt-ui table > Table-column Attributes 配置一致', type: 'Object', value: '--' },
  { name: '--', desc: '其他可根据项目需求自行配置数据', type: '--', value: '--' },
]

// tx-table 配置说明
export const detialTabel = [
  { name: 'select', desc: '当用户手动勾选数据行的 Checkbox 时触发的事件', props: 'selection, row' },
  { name: 'select-all', desc: '当用户手动勾选全选 Checkbox 时触发的事件', props: 'selection' },
  { name: 'selection-change', desc: '当选择项发生变化时会触发该事件', props: 'selection' },
  { name: 'cell-click', desc: '当某个单元格被点击时会触发该事件', props: 'row, column, cell, event' },
  { name: 'cell-dblclick', desc: '当某个单元格被双击击时会触发该事件', props: 'row, column, cell, event' },
  { name: 'row-click', desc: '当某一行被点击时会触发该事件', props: 'row, column, event' },
]

// 表格列名称字段设置
export const columns = that => {
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

// 表格数据
export const tableData = [
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
]
