import { AppState } from "../AppState.js"




export class Todo {
  constructor(data) {
    this.id = data.id
    this.description = data.description
    this.completed = data.completed
    this.creatorId = data.creatorId
  }


  get TodoListTemplate() {
    return `
    <input type="checkbox" ${this.completed ? 'checked' : ''} name="completed" id="completed" onChange="app.TodosController.toggleCompletion('${this.id}')">
    <p class="bg-secondary rounded p-1 fw-light text-danger">${this.description}
    <button onclick="app.TodosController.deleteTodo('${this.id}')"><i class="mdi mdi-delete-outline"></i></button>
    </p>
    `
  }



}