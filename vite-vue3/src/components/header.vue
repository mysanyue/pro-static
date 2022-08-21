<template>
  <div class="todo-header">
    <el-input v-model="title" type="text" placeholder="请输入任务名称，按回车键确认" @keyup.enter="addData" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Header',
  props: {
    addTodo: { type: Function, required: true },
  },
  setup(props) {
    const title = ref('')

    const addData = () => {
      const text = title.value
      if (!text.trim()) return
      const todo = { id: Date.now(), title: text, isCompleted: false }
      props.addTodo(todo)
      title.value = ''
    }

    return { title, addData }
  },
})
</script>

<style lang="scss" scoped>
.todo-header {
  margin-bottom: 20px;
}
</style>
