<template>
  <div class="todo-footer">
    <el-checkbox v-model="isCheckAll">全选</el-checkbox>
    <div class="over-task">
      <el-tag class="tx-task">全部任务 {{ todos.length }} </el-tag>
      <el-tag type="success" class="tx-task">已完成 {{ count }}</el-tag>
      <el-tag type="danger" class="tx-task">未完成 {{ unCount }}</el-tag>
    </div>
    <el-button type="primary" class="btn-over" @click="clearAllCompletedTodos">清除已完成任务</el-button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { Todo } from '../types/todo'

export default defineComponent({
  name: 'Footer',
  props: {
    todos: { type: Array as () => Todo[], required: true },
    checkAll: { type: Function, required: true },
    clearAllCompletedTodos: { type: Function, required: true },
  },
  setup(props) {
    const count = computed(() => {
      return props.todos.reduce((pre, todo, index) => pre + (todo.isCompleted ? 1 : 0), 0)
    })
    const unCount = computed(() => {
      return props.todos.reduce((pre, todo, index) => pre + (todo.isCompleted ? 0 : 1), 0)
    })

    const isCheckAll = computed({
      get() {
        return count.value > 0 && props.todos.length === count.value
      },
      set(val) {
        props.checkAll(val)
      },
    })

    return { count, unCount, isCheckAll }
  },
})
</script>

<style lang="scss" scoped>
.todo-footer {
  height: 40px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  .over-task {
    margin-left: 20px;
    flex: 1;
    text-align: left;
    font-size: 12px;
  }
  .btn-over {
    text-align: right;
    font-size: 12px;
  }
  .tx-task {
    margin-right: 20px;
  }
}
</style>
