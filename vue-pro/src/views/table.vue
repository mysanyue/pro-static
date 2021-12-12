<template>
  <div :class="$style.homeContainer">
    <h1>封装的分页组件</h1>
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
