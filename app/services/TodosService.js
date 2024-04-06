import { api } from "./AxiosService.js"
import { Todo } from "../models/Todos.js";
import { AppState } from "../AppState.js";



class TodosService {
  async toggleCompletion(todoId) {
    const toggledTodo = AppState.todos.find(todo => todo.id == todoId)
    toggledTodo.completed = !toggledTodo.completed
    // console.log('found ', toggledTodo.description);
    const response = await api.put(`api/todos/${todoId}`, toggledTodo)
    // const todoId.completed = !todoId.completed
    // console.log('toggled completion on ', toggledTodo);
  }


  async deleteTodo(todoId) {
    const response = await api.delete(`api/todos/${todoId}`)
    console.log('🗑️', response);
    const indexToDelete = AppState.todos.findIndex(todo => todo.id == todoId)
    AppState.todos.splice(indexToDelete, 1)
  }





  async newTodo(formData) {
    console.log('newTodo at service', formData);
    const response = await api.post('api/todos', formData)
    console.log('🥧', response);
    const todo = new Todo(response.data)
    // console.log('these are todods', AppState.todos);
    console.log('these are todads', AppState.newTodo);
    // AppState.newTodo.completed = false

    AppState.todos.push(todo)
    // AppState.emit('todos')
  }


  async getTodos() {
    const results = await api.get('api/todos')
    let myTodos = results.data.map(todo => new Todo(todo))
    // AppState.todos.push(myTodos)
    AppState.todos = myTodos
    console.log('mytodos', AppState.todos);
  }












}

export const todosService = new TodosService()