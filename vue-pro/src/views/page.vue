<template>
  <div :class="$style.homeContainer">
    <h3>示例：</h3>
    <CodeCollapse>
      <template #example>
        <TxPage :params="params" :total="total" @change="fetchData" />
      </template>
      <template #code>
        <p class="desc">在 Popconfirm 中，只有 title 属性可用，content 属性不会被展示。</p>
        <MarkdownView :initialValue="code" theme="oneDark" />
      </template>
    </CodeCollapse>

    <!-- <div class="preview-wrapper">
      <div class="demo-box">
        <TxPage :params="params" :total="total" @change="fetchData" />
      </div>
      <div class="code-box">
        <p class="desc">在 Popconfirm 中，只有 title 属性可用，content 属性不会被展示。</p>
        <MarkdownView :initialValue="code" theme="oneDark" />
      </div>
      <div class="preview-control">
        <i class="el-icon-caret-bottom hovering"></i>
           <transition name="text-slide" mode="text-slide">
        <span>显示代码</span>
           </transition>
      </div>
    </div> -->
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
export default {
  components: { TxPage },
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
      code: `
      <TxPage :params="params" :total="total" @change="fetchData" />
      `,
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
