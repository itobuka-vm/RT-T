//import React library
import React from "react"

//import components
import TodoItem from "./TodoItem"
import ContactCard from "./ContactCard"
import Joke from "./Joke"
import Product from "./Product"

//import data - fake JSON/dummy DB
import dataJokes from "./dataJokes"
import dataContacts from "./dataContacts"
import dataProducts from "./dataProducts"

//render JSX into a DOM
function Content() {
  //map() through dataProducts to create an array of components
  const productComponents = dataProducts.map(function (product) {
    return (
      <Product
        key={product.id}
        imgUrl={product.imgUrl}
        imgAlt={product.imgAlt}
        name={product.name}
        price={product.price}
      />
    )
  })

  //map() through dataJokes to create an array of components (jokeComponents)
  const jokeComponents = dataJokes.map(function (joke) {
    return (
      <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />
    )
  })

  //map() through dataContacts to create an array of components (contactComponents)
  const contactComponents = dataContacts.map(function (contact) {
    return (
      <ContactCard
        key={contact.id}
        imgUrl={contact.imgUrl}
        imgAlt={contact.imgAlt}
        name={contact.name}
        phone={contact.phone}
        email={contact.email}
      />
    )
  })

  //

  return (
    <div className='content'>
      {/* testing img display from src/ &&/|| public/
      <img src={"assets/img02.jpg"} alt='altos' /> */}
      <h3>About Section</h3>
      <div className='todo-list'>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
      <hr />
      <div className='product-list'>{productComponents}</div>
      <hr />
      {/* display array of Components (contactComponents) */}
      <div className='contact-list'>{contactComponents}</div>
      <hr />
      {/* display array of Components (jokeComponents) */}
      <div className='joke-list'>{jokeComponents}</div>
    </div>
  )
}

//export MainAbout component
export default Content
