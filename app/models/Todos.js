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
    <div class="align-items-center d-flex">
    <input type="checkbox" ${this.completed ? 'checked' : ''} class="form-check-input col-2" name="completed" id="completed" onChange="app.TodosController.toggleCompletion('${this.id}')">
    <p class="col-8 fs-5 d-inline rounded px-2 mb-0 fw-light">${this.description}
    </p>
    <span class="col-2 text-end me=4" onclick="app.TodosController.deleteTodo('${this.id}')"><i class="mdi mdi-delete"></i></span>
    </div>
    `
  }



}