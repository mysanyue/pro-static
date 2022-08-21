import { Todo } from '../types/todo'

export function setTodos(todos: Todo[]) {
  localStorage.setItem('todos_key', JSON.stringify(todos))
}

export function getTodos() {
  return JSON.parse(localStorage.getItem('todos_key') || '[]')
}
