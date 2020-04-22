//import React library
import React from "react"

//import TodoItem component
import TodoItem from "./TodoItem"

//import ContactCard component
import ContactCard from "./ContactCard"

//impoer Joke component
import Joke from "./Joke"

//render JSX into a DOM
function MainAbout() {
  return (
    <div className='main__about'>
      <h3>About Section</h3>
      <div className='todo-list'>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
      <br />
      <div className='contact-list'>
        <ContactCard
          contact={{
            name: "First Name",
            imgUrl:
              "https://images.pexels.com/photos/3861447/pexels-photo-3861447.jpeg?cs=srgb&dl=portrait-of-woman-sitting-on-chair-3861447.jpg&fm=jpg",
            phone: "first contact phone",
            email: "first contact email"
          }}
        />
        <ContactCard
          contact={{
            name: "Second Name",
            imgUrl:
              "https://images.pexels.com/photos/2773494/pexels-photo-2773494.jpeg?cs=srgb&dl=woman-looking-at-phone-2773494.jpg&fm=jpg",
            phone: "Second contact phone",
            email: "Second contact email"
          }}
        />
        <ContactCard
          contact={{
            name: "Third Name",
            imgUrl:
              "https://images.pexels.com/photos/3179215/pexels-photo-3179215.jpeg?cs=srgb&dl=photo-of-woman-holding-smartphone-3179215.jpg&fm=jpg",
            phone: "Third contact phone",
            email: "Third contact email"
          }}
        />
      </div>
      <br />
      <ol className='joke-list'>
        <Joke
          joke={{
            question: "First question",
            punchLine: "First punch line"
          }}
        />
        <Joke
          joke={{
            question: "Second question",
            punchLine: "Second punch line"
          }}
        />
        <Joke
          joke={{
            punchLine: "Third punch line"
          }}
        />
        <Joke
          joke={{
            question: "Forth question",
            punchLine: "Forth punch line"
          }}
        />
        <Joke
          joke={{
            punchLine: "Fifth punch line"
          }}
        />
      </ol>
    </div>
  )
}

//export MainAbout component
export default MainAbout
