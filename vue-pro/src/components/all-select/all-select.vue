<template>
  <el-select v-model="selectVal" v-bind="$attrs" multiple collapse-tags @change="changeSelect">
    <div :class="$style.allBox">
      <el-checkbox v-if="oldOptions.length" v-model="isSelectAll" :indeterminate="isIndeterminate" @change="allSelectChange">
        全选
      </el-checkbox>
    </div>
    <el-option v-for="(item, index) of oldOptions" :key="index" :label="item[setting.label]" :value="item[setting.value]" />
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
      oldOptions: this.options,
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
      this.oldOptions = val
    },
    /**
     * @description 异步数据双向绑定
     */
    value(val) {
      if (val !== this.selectVal) {
        this.selectVal = val
        this.changeSelect()
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
    this.changeSelect()
  },
  methods: {
    /**
     * @description 选择状态处理
     */
    changeSelect() {
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
     * @description 全选处理
     */
    allSelectChange(val) {
      this.isIndeterminate = false
      this.selectVal = val ? this.oldOptions.map(e => e[this.setting.value]) : []
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
