<template>
  <div class="tx-table-moer clearfix">
    <span>{{ label }}</span>
    <el-popover
      v-model="isPannel"
      placement="bottom-end"
      title="请选择展示的字段"
      :width="width"
      trigger="click"
      popper-class="tx-table-pannel"
    >
      <i slot="reference" :class="icon" class="more-filter" />
      <div class="oper-pannel">
        <el-checkbox v-model="checkAll" label="全选" :indeterminate="isIndeterminate" @change="allChange" />
        <ul>
          <li v-for="(item, index) of list" :key="index">
            <el-checkbox v-model="item.show" :label="item.attr.label" @change="itemChange" />
          </li>
        </ul>
        <div class="btn-wrap">
          <el-button @click="isPannel = false">取消</el-button>
          <el-button type="primary" @click="confirm">确定</el-button>
        </div>
      </div>
    </el-popover>
  </div>
</template>

<script>
import { cloneDeep } from 'lodash'
export default {
  props: {
    label: { type: String, default: '' },
    icon: { type: String, default: 'el-icon-more' },
    width: { type: Number, default: 200 },
    columns: { type: Array, required: true },
  },
  data() {
    return {
      list: [],
      isPannel: false,
      isIndeterminate: false,
      checkAll: true,
    }
  },
  created() {
    this.list = cloneDeep(this.columns.filter(e => e.more === true))
    this.itemChange()
  },
  methods: {
    /**
     * @description 全选处理
     */
    allChange(val) {
      this.checkAll = val
      this.isIndeterminate = false
      this.list.forEach(e => (e.show = val))
    },
    /**
     * @description 单项处理
     */
    itemChange() {
      this.isIndeterminate = this.list.some(e => e.show === true)
      !this.isIndeterminate && (this.checkAll = false)
      if (this.list.every(e => e.show === true)) {
        this.checkAll = true
        this.isIndeterminate = false
      }
    },
    /**
     * @description 确定
     */
    confirm() {
      this.list.forEach(e => {
        const item = this.columns.find(se => se.attr.label === e.attr.label)
        item.show = e.show
      })

      this.$parent.$parent.$parent.show = false
      this.$nextTick(() => {
        this.$parent.$parent.$parent.show = true
        // this.$parent.$parent.doLayout()
        this.isPannel = false
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.tx-table-more {
  position: relative;
  .more-filter {
    float: right;
    margin-top: 4px;
    transform: rotate(90deg);
    font-size: 14px;
    cursor: pointer;
    &:hover {
      color: $themeColor;
    }
  }
}
</style>
