//import React library
import React from "react"

//import components
import TodoItem from "./../components/main/TodoItem"

//import data - fake JSON/dummy DB
import dataToDos from "./../data/dataToDos"

//class based component
class TodoApp extends React.Component {
  //constructor method
  constructor() {
    //super method
    super()
    //state object
    this.state = {
      todos: dataToDos
    }
    //bind handleChange method to use set State
    this.handleChange = this.handleChange.bind(this)
  }

  //event handler method
  handleChange(id) {
    /* console.log("Handle change.", id) */
    this.setState(function (prevState) {
      const updatedTodos = prevState.todos.map(function (todo) {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }

  //render method
  render() {
    //TODO
    const todoItems = this.state.todos.map((item) => (
      //pass method to TodoItem component
      <TodoItem key={item.id} todo={item} handleChange={this.handleChange} />
    ))

    //return JSX into DOM element
    return (
      <div>
        <div className='todo-list' onChange={this.handleChange.id}>
          <h1 style={{ textAlign: "center", padding: "1em 0" }}>Todo App</h1>
          {todoItems}
        </div>
      </div>
    )
  }
}

//export TodoApp component
export default TodoApp
