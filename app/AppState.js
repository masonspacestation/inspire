import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Todo } from "./models/Todos.js"
import { Weather } from "./models/Weather.js"

class ObservableAppState extends EventEmitter {

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null


  image = null

  quote = null

  /**@type {Weather} */
  weather = null

  /** @type {Todo[]}*/
  todos = []

  /** @type {Todo} */
  newTodo

}

export const AppState = createObservableProxy(new ObservableAppState())