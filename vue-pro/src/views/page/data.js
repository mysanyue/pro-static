// 代码片段
export const markdownCode = `
\`\`\`vue
<template>
  <TxPage :params="params" :total="total" @change="fetchData" />
</template>

<script>
import TxPage from '@/components/pagination'

export default {
  components: { TxPage },
  data() {
    return {
      total: 0,
      params: { pageSize: 10, pageNo: 1 },
    }
  }
}
</script>
\`\`\` 
`

// 配置信息
export const detialTabel = [
  { name: 'params', desc: '搜索参数', type: 'Object' },
  { name: 'total', desc: '当前页总数', type: 'Number' },
  { name: 'layout', desc: '组件布局，子组件名用逗号分隔', type: 'String' },
  { name: 'change', desc: '切换页大小或者分页触发该事件', type: 'Function' },
]
