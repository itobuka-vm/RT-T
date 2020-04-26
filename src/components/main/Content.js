//import React library
import React from "react"

//import components
import TodoItem from "./TodoItem"
import ContactCard from "./ContactCard"
import Joke from "./Joke"
import Product from "./Product"
import Car from "./Car"

//import data - fake JSON/dummy DB
import dataJokes from "./dataJokes"
import dataContacts from "./dataContacts"
import dataProducts from "./dataProducts"
import dataCars from "./dataCars"

//render JSX into a DOM
function Content() {
  //PRODUCTS
  //map() through dataProducts to create an array of components
  const productComponents = dataProducts.map(function (item) {
    return <Product key={item.id} product={item} />
  })

  //JOKES
  //map() through dataJokes to create an array of components (jokeComponents)
  const jokeComponents = dataJokes.map(function (item) {
    return <Joke key={item.id} joke={item} />
  })

  //CONTACTS
  //map() through dataContacts to create an array of components (contactComponents)
  const contactComponents = dataContacts.map(function (item) {
    return <ContactCard key={item.id} contact={item} />
  })

  //CARS
  //map() through dataCars to create an array of components (carComponents)
  const carComponents = dataCars.map(function (item) {
    return <Car key={item.id} car={item} />
  })

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
      <hr />
      <div className='car-list'>{carComponents}</div>
    </div>
  )
}

//export MainAbout component
export default Content
