import { AppState } from "../AppState.js";
import { todosService } from "../services/TodosService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML, setText } from "../utils/Writer.js";




export class TodosController {
  constructor() {
    console.log('📋🎮');
    AppState.on('account', this.getTodos)
    AppState.on('todos', this.drawTodos)
    AppState.on('todos', this.drawTodosCount)
    AppState.on('todos', this.drawTodosMessage)
  }




  async getTodos() {
    try {
      todosService.getTodos()
    } catch (error) {
      console.error("sorry, couldn't get your todos from controller")
    }
  }


  async newTodo() {
    event.preventDefault()
    const form = event.target
    const formData = getFormData(form)
    await todosService.newTodo(formData)
    // @ts-ignore
    form.reset()
  }


  drawTodos() {
    let todosList = ''
    const myTodos = AppState.todos
    myTodos.forEach(todo => todosList += todo.TodoListTemplate)
    setHTML('todos-list', todosList)

  }


  async toggleCompletion(todoId) {
    console.log('toggling completion for ', todoId);
    try {
      await todosService.toggleCompletion(todoId)
    } catch (error) {
      console.error('failed to toggle todo ', error)
    }
  }


  async drawTodosCount() {
    const myTodosCount = AppState.todos.length
    const incompleteTodosCount = AppState.todos.filter(todo => todo.completed == false).length
    // setText('todos-count', `${completedTodosCount} / ${myTodosCount} todos remaining`)
    setText('offcanvasRightLabel', `${incompleteTodosCount} / ${myTodosCount} todos remaining`)
    setText('todos-offcanvas-opener', `${incompleteTodosCount} / ${myTodosCount} todos remaining`)

  }


  async deleteTodo(todoId) {
    try {
      const result = await Pop.confirm('Are you sure you want to delete this todo? How ever will you remember?')
      if (result == false) return
      todosService.deleteTodo(todoId)
    } catch (error) {
      console.error('failed to delete todo', error)
    }
  }


  drawTodosMessage() {
    let incompleteTodos = AppState.todos.filter((todo) => todo.completed == false)
    console.log('incomplete todos count: ', incompleteTodos);
    let todosMessage = ``
    if (incompleteTodos.length == 0) {
      todosMessage += `<small>All done 🤙</small>`
    } else if (incompleteTodos.length <= 3 && incompleteTodos.length > 0) {
      todosMessage += `<small>Keep it up 👏</small>`
    } else {
      todosMessage += `<small>Incomplete todos</small>`
    }
    setHTML('todos-message', todosMessage)
  }








}