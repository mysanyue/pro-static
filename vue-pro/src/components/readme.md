# 组件说明文档

## tx-table 正确使用姿势

```vue
<template>
  <tx-table ref="queryTable" :data="tableData" :columns="columns" :height="800" @selection-change="val => (sectionList = val)">
    <!-- 注意：这里预留了一个 header 插槽，可以灵活配置 -->
    <template slot="header" />
    <!-- 注意：这里是一个默认插槽，方便更多配置-灵活多变 -->
    <el-table-column min-width="90" align="center" fixed="right">
      <!-- 注意：这里使用 更多列筛选配置 如不需要列筛选可不做配置 -->
      <template slot="header">
        <tx-table-more :columns="columns" label="操作" />
      </template>
      <template slot-scope="scope">
        <el-button type="text">确认</el-button>
        <el-button type="text">编辑</el-button>
        <el-button type="text">删除</el-button>
      </template>
    </el-table-column>
  </tx-table>
</template>

<script>
import txTable from '@/components/table'
import txTableMore from '@/components/table/txTableMore'
import columns from './components/columns'
export default {
  components: { txTableMore, txTable },
  data() {
    return {
      tableData: [], // 表格数据
      sectionList: [], // 选择到的数据
      columns: columns(this), // 列配置
    }
  },
}
</script>
```

```js
// columns.js
import { currency, date, number, multiply } from '@/utils/filters'
import columnStatus from '../components/Status'

function columns(that) {
  return [
    { show: true, attr: { type: 'selection', width: 45, align: 'center', fixed: 'left' } },
    { show: true, attr: { type: 'index', label: '序号', width: 45, align: 'center', fixed: 'left' } },
    { more: true, show: true, attr: { label: '业务类型' }, 'min-width': 90, prop: 'bussTypeCode' },
    {
      more: true,
      show: true,
      attr: {
        label: '机构',
        'min-width': 200,
        render: ({ row }, h) => {
          if (that.auth.key) {
            return (
              <span class='table-link' onClick={() => that.levelHandler('机构', row)}>
                {row.orgCode} {row.orgName}
              </span>
            )
          } else {
            return (
              <span>
                {row.orgCode} {row.orgName}
              </span>
            )
          }
        },
      },
    },
    {
      more: true,
      show: true,
      attr: { label: '环比校验', align: 'center' },
      children: [
        {
          label: '数据',
          'min-width': 120,
          render: ({ row }, h) => {
            return <span>{number(row.hgjyValue)}</span>
          },
        },
        {
          label: '比列',
          'min-width': 80,
          render: ({ row }, h) => {
            return <span>{multiply(row.hbjyPercent)}</span>
          },
        },
      ],
    },
  ]
}

export default columns
```

## txPage 正确使用姿势

```vue
<template>
  <tx-page :params="params" :total="total" @change="fetchData" />
</template>
<script>
import txPage from '@/components/pagination'

export default {
  components: { txPage },
  data() {
    return {
      total: 0,
      params: {
        pageNo: 1, // 页号
        pageSize: 10, // 每页数量
      },
    }
  },
  methods: {
    /**
     * @description 页面初始化获取数据
     */
    fetchData() {
      // ...
    },
  },
}
</script>
```
