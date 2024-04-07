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
    <div>
    <input type="checkbox" ${this.completed ? 'checked' : ''} class="fs-4 d-inline rounded rounded-2" name="completed" id="completed" onChange="app.TodosController.toggleCompletion('${this.id}')">
    <p class="fs-5 d-inline rounded p-1 fw-light">${this.description}
    <span class="text-end me=4" onclick="app.TodosController.deleteTodo('${this.id}')"><i class="mdi mdi-delete"></i></span>
    </p>
    </div>
    `
  }



}