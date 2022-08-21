<template>
  <section class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo" />
      <List :todos="todos" :deleteTodo="deleteTodo" :isLoding="isLoding" />
      <Footer :todos="todos" :checkAll="checkAll" :clearAllCompletedTodos="clearAllCompletedTodos" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, watch, ref } from 'vue'
import Header from './components/header.vue'
import List from './components/list.vue'
import Footer from './components/footer.vue'
import { Todo } from './types/todo'
import { setTodos, getTodos } from './utils/localStorage'

export default defineComponent({
  name: 'App',
  components: { Header, List, Footer },
  setup() {
    const isLoding = ref(false)
    const state = reactive<{ todos: Todo[] }>({
      todos: [],
    })

    onMounted(() => {
      isLoding.value = true
      setTimeout(() => {
        state.todos = getTodos()
        isLoding.value = false
      }, 2e3)
    })

    // 添加数据
    const addTodo = (todo: Todo) => {
      state.todos.unshift(todo)
    }

    // 删除数据
    const deleteTodo = (index: number) => {
      state.todos.splice(index, 1)
    }

    // 全选
    const checkAll = (isCompleted: boolean) => {
      state.todos.forEach((todo) => {
        todo.isCompleted = isCompleted
      })
    }

    // 清理选中数据
    const clearAllCompletedTodos = () => {
      state.todos = state.todos.filter((todo) => !todo.isCompleted)
    }

    // 监听并缓存数据
    watch(() => state.todos, setTodos, { deep: true })

    return { ...toRefs(state), addTodo, deleteTodo, checkAll, clearAllCompletedTodos, isLoding }
  },
})
</script>

<style lang="scss" scoped>
.todo-container {
  width: 1200px;
  margin: 0 auto;
  & .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
}
</style>
