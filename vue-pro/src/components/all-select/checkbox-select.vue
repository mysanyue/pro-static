<template>
  <el-select v-bind="$attrs" v-model="selectVal" placeholder="请选择" multiple collapse-tags @remove-tag="(e) => (e.isCheck = false)">
    <div :class="$style.allBox">
      <el-checkbox v-if="oldOptions.length" v-model="isSelectAll" :indeterminate="isIndeterminate" @change="allSelectChange">
        全选
      </el-checkbox>
    </div>
    <el-option v-for="(item, index) in oldOptions" :key="index" :label="item[setting.label]" :value="item">
      <div style="display: flex; align-items: center" @click.stop>
        <el-checkbox v-model="item.isCheck" @change="checkChange"> {{ item[setting.label] }} </el-checkbox>
      </div>
    </el-option>
  </el-select>
</template>

<script>
export default {
  model: { prop: 'value', event: 'change' },
  props: {
    options: { type: Array, default: () => [] }, // 选项
    value: { type: Array, default: () => [] }, // 双向绑定
    setting: { type: Object, default: () => ({ label: 'label', value: 'value' }) },
  },
  data() {
    return {
      oldOptions: this.options.map((e) => ({ ...e, isCheck: false })),
      isIndeterminate: false,
      selectVal: this.value,
      isSelectAll: false,
    }
  },
  watch: {
    /**
     * @description 处理选项是异步的情况
     */
    options(val) {
      this.oldOptions = val.map((e) => ({ ...e, isCheck: false }))
    },
    /**
     * @description  异步数据双向绑定
     */
    value(val) {
      if (val !== this.selectVal) {
        this.selectVal = val
        this.changeValue(val)
        this.checkChange()
      }
    },
    /**
     * @description 数据有变化立即更新视图
     */
    selectVal(val) {
      if (val !== this.value) this.$emit('change', this.selectVal)
    },
  },
  created() {
    this.checkChange()
    this.changeValue(this.value)
  },
  methods: {
    /**
     * @description 全选处理
     */
    allSelectChange(val) {
      this.isIndeterminate = false
      this.oldOptions.forEach((e) => (e.isCheck = val))

      if (val) {
        this.isSelectAll = true
        this.selectVal = this.oldOptions.map((item) => {
          const { isCheck, ...args } = item
          return args
        })
      } else {
        this.selectVal = []
      }
    },
    /**
     * @description 状态和绑定值处理
     * @param 是否全选
     */
    checkChange() {
      const ret = []
      this.oldOptions.forEach((item) => {
        const { isCheck, ...args } = item
        if (isCheck) ret.push({ ...args })
      })
      this.selectVal = ret

      const selectLen = this.selectVal.length
      const optionLen = this.oldOptions.length
      if (!selectLen) {
        this.isIndeterminate = false
        this.isSelectAll = false
      } else if (selectLen !== optionLen) {
        this.isIndeterminate = true
        this.isSelectAll = false
      } else {
        this.isIndeterminate = false
        this.isSelectAll = true
      }
    },
    /**
     * @description 双向绑定初始化值选中处理
     */
    changeValue(val) {
      if (val.length) {
        val.forEach((item) => {
          const fItem = this.oldOptions.find((e) => e[this.setting.value] === item[this.setting.value])
          fItem && (fItem.isCheck = true)
        })
      }
    },
  },
}
</script>

<style lang="scss" module>
.all-box {
  padding: 5px 20px;
  border-bottom: 1px solid $borderColor;
}
</style>
