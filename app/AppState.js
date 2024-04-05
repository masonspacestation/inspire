import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Todo } from "./models/Todos.js"

class ObservableAppState extends EventEmitter {

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null


  image = null

  quote = null

  weather = null

  /** @type {Todo[]}*/
  todos = []

  /** @type {Todo} */
  newTodo

}

export const AppState = createObservableProxy(new ObservableAppState())