//import React libraries
import React from "react"

//import CSS
import "./../../style.css"

//render JSX into a DOM element
//FUNCTIONAL COMPONENT
function TodoItem(props) {
  return (
    <div className='todo-item'>
      <input
        type='checkbox'
        checked={props.todo.completed}
        onChange={function () {
          props.handleChange(props.todo.id)
        }}
      />
      <p>{props.todo.text}</p>
    </div>
  )
}

//export TodoItem component
export default TodoItem
