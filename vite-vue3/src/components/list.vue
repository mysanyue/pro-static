<template>
  <div class="todo-list">
    <el-table v-loading="isLoding" :data="todos" style="width: 100%">
      <el-table-column label="选择" width="60" align="center">
        <template #default="{ row }">
          <el-checkbox v-model="row.isCompleted"></el-checkbox>
        </template>
      </el-table-column>
      <el-table-column prop="title" label="描述" />
      <el-table-column label="操作" width="100">
        <template #default="{ row, $index }">
          <el-button type="danger" class="btn-remove" @click="delTodo(row, $index)">删除</el-button>
        </template>
      </el-table-column>
      <template #empty>
        <el-empty :image-size="60" description="暂无数据" />
      </template>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Todo } from '../types/todo'
import { ElMessageBox } from 'element-plus'

export default defineComponent({
  name: 'List',
  props: {
    todos: { type: Object as () => Todo, required: true },
    deleteTodo: { type: Function, required: true },
    isLoding: { type: Boolean, required: true },
  },
  setup(props) {
    const delTodo = async (row: Todo, index: number) => {
      const isConfirm = await ElMessageBox.confirm('是否删除当前数据，删除后不可恢复？', '温馨提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => true)
        .catch(() => false)

      if (isConfirm) {
        props.deleteTodo(index)
      }
    }

    return { delTodo }
  },
})
</script>

<style lang="scss" scoped>
.todo-list {
  border: 1px solid #ddd;
  border-radius: 2px;
  li {
    list-style: none;
  }
}
.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 6px;
  margin-top: 10px;
}
</style>
