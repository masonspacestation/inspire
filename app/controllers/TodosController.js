import { AppState } from "../AppState.js";
import { todosService } from "../services/TodosService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";




export class TodosController {
  constructor() {
    console.log('📋🎮');
    AppState.on('account', this.getTodos)
    AppState.on('todos', this.drawTodos)

  }


  async newTodo() {
    event.preventDefault()
    const form = event.target
    const formData = getFormData(form)
    await todosService.newTodo(formData)
    // @ts-ignore
    form.reset()
  }


  async getTodos() {
    try {
      todosService.getTodos()
    } catch (error) {
      console.error("sorry, couldn't get your todos from controller")
    }
  }

  drawTodos() {
    let todosList = ''
    const myTodos = AppState.todos
    myTodos.forEach(todo => todosList += todo.TodoListTemplate)
    setHTML('todos-list', todosList)
  }

  drawTodosCount() {

  }

  toggleCompletion(todoId) {
    console.log('toggling completion for ', todoId);

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











}