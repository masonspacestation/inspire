import { api } from "./AxiosService.js"
import { Todo } from "../models/Todos.js";
import { AppState } from "../AppState.js";



class TodosService {
  //   updateTodosCount(myTodosCount) {
  // const completedTodosCount = AppState.todos.filter(todo => todo.completed == true).length
  //   }


  async getTodos() {
    const results = await api.get('api/todos')
    let myTodos = results.data.map(todo => new Todo(todo))
    AppState.todos = myTodos
    console.log('mytodos', AppState.todos);
  }


  async newTodo(formData) {
    console.log('newTodo at service', formData);
    const response = await api.post('api/todos', formData)
    console.log('🥧', response);
    const todo = new Todo(response.data)
    AppState.todos.push(todo)
  }





  async toggleCompletion(todoId) {
    const toggledTodo = AppState.todos.find(todo => todo.id == todoId)
    toggledTodo.completed = !toggledTodo.completed
    const response = await api.put(`api/todos/${todoId}`, toggledTodo)
    AppState.emit('todos')
  }


  async deleteTodo(todoId) {
    const response = await api.delete(`api/todos/${todoId}`)
    console.log('🗑️', response);
    const indexToDelete = AppState.todos.findIndex(todo => todo.id == todoId)
    AppState.todos.splice(indexToDelete, 1)
  }











}

export const todosService = new TodosService()