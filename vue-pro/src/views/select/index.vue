<template>
  <section class="g-container">
    <h3>单个 checkbox 全选</h3>
    <CodeCollapse>
      <p>绑定值：{{ allSelectVal }}</p>
      <AllSelect v-model="allSelectVal" :options="pushMonthList" />
      <template #code>
        <MarkdownView :initialValue="markdownCode" />
      </template>
    </CodeCollapse>

    <h3>多个 checkbox 全选</h3>
    <CodeCollapse>
      <p>绑定值：{{ checkboxSelectVal }}</p>
      <CheckBoxSelect v-model="checkboxSelectVal" :options="checkboxList" />
      <template #code>
        <MarkdownView :initialValue="checkMarkdownCode" />
      </template>
    </CodeCollapse>

    <!-- 分割线 -->
    <el-divider />

    <h3>Attributes</h3>
    <el-table :data="tableDate">
      <el-table-column prop="name" label="事件名" />
      <el-table-column prop="type" label="类型" />
      <el-table-column prop="desc" label="说明" />
    </el-table>
    <el-alert title="注意：" :closable="false" type="warning">
      <p>
        1. 支持 element-ui select 所有 select Attributes
        <a href="https://element.eleme.cn/#/zh-CN/component/select" target="_blank">具体参考 elment Select Attributes 文档</a>
      </p>
      <p>2. 不支持 Select Events，如有需要自行封装。</p>
    </el-alert>
  </section>
</template>

<script>
import AllSelect from '@/components/all-select/all-select'
import CheckBoxSelect from '@/components/all-select/checkbox-select'
import { pushMonth, markdownCode, detialTabel, checkMarkdownCode } from './data'

export default {
  components: { AllSelect, CheckBoxSelect },
  data() {
    this.pushMonthList = pushMonth()
    this.checkboxList = pushMonth()
    this.markdownCode = markdownCode
    this.checkMarkdownCode = checkMarkdownCode
    this.tableDate = detialTabel

    return {
      allSelectVal: [],
      checkboxSelectVal: [],
    }
  },
  created() {
    setTimeout(() => {
      this.checkboxSelectVal = [
        { label: '1月', value: 1 },
        { label: '2月', value: 2 },
      ]
      this.allSelectVal = [1, 2, 3, 4, 5, 6]
    }, 1000)
  },
}
</script>
