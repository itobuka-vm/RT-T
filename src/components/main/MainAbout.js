//import React library
import React from "react"

//import TodoItem component
import TodoItem from "./TodoItem"

//import ContactCard component
import ContactCard from "./ContactCard"

//render JSX into a DOM
function MainAbout() {
  return (
    <div className='main__about'>
      <h3>About Section</h3>
      <div className='todo-container'>
        <div className='todo-list'>
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <br />
          <ContactCard />
        </div>
      </div>
    </div>
  )
}

//export MainAbout component
export default MainAbout
