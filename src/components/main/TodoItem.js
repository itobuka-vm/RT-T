//import React libraries
import React from "react"

//import CSS
import "./../../style.css"

//render JSX into a DOM element
/* FUNCTIONAL COMPONENT
function TodoItem(props) {
  return (
    <div className='todo-item'>
      <input type='checkbox' checked={props.todo.completed} />
      <p>{props.todo.text}</p>
    </div>
  )
} */

//CLASS BASED COMPONENT
class TodoItem extends React.Component {
  //render method
  render() {
    //return JSX
    return (
      <div className='todo-item'>
        <input
          type='checkbox'
          checked={this.props.todo.completed}
          onChange={function () {
            console.log("trying to change")
          }}
        />
        <p>{this.props.todo.text}</p>
      </div>
    )
  }
}

//export TodoItem component
export default TodoItem
