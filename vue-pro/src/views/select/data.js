// 代码片段
export const markdownCode = `
\`\`\`vue
<template>
 <AllSelect v-model="allSelectVal" :options="pushMonthList" />
</template>

<script>
import AllSelect from '@/components/all-select/all-select'
import { pushMonth } from './data'

export default {
  components: { AllSelect },
  data() {
    this.pushMonthList = pushMonth()

    return {
      allSelectVal: [],
    }
  },
  created() {
    setTimeout(() => {
      this.allSelectVal = [1, 2, 3, 4, 5, 6]
    }, 1000)
  },
}
</script>
\`\`\` 
`

// 代码片段
export const checkMarkdownCode = `
\`\`\`vue
<template>
 <CheckBoxSelect v-model="checkboxSelectVal" :options="checkboxList" />
</template>

<script>
import CheckBoxSelect from '@/components/all-select/checkbox-select'
import { pushMonth } from './data'

export default {
  components: { CheckBoxSelect },
  data() {
    this.checkboxList = pushMonth()

    return {
      checkboxSelectVal: [],
    }
  },
  created() {
    setTimeout(() => {
       this.checkboxSelectVal = [
        { label: '1月', value: 1 },
        { label: '2月', value: 2 },
      ]
    }, 1000)
  },
}
</script>
\`\`\` 
`

export function pushMonth() {
  const ret = []
  for (let i = 1; i <= 12; i++) {
    ret.push({ label: i + '月', value: i })
  }
  return ret
}

// 配置信息
export const detialTabel = [
  { name: 'options', desc: '下拉选项列表', type: 'Object 例如：[{...}, {...}]' },
  {
    name: 'setting',
    desc: "配置 label value 名称 默认值 = { label: 'label', value: 'value' }'",
    type: "Object 例如：{ label: 'xx', value: 'xx'}",
  },
]
