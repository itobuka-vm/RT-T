//import React library
import React from "react"

//import TodoItem component
import TodoItem from "./TodoItem"

//import ContactCard component
import ContactCard from "./ContactCard"

//import Joke component
import Joke from "./Joke"

//import joke data - fake JSON
import jokeData from "./jokeData"

//render JSX into a DOM
function MainAbout() {
  //map() through jokeData`s array of objects to create array of Components (Joke)
  const jokeComponents = jokeData.map(function (joke) {
    return (
      <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />
    )
  })

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
            imgUrl: "./img01.jpg",
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
      {/* display array of Components (Joke) */}
      <div className='joke-list'>{jokeComponents}</div>
    </div>
  )
}

//export MainAbout component
export default MainAbout
