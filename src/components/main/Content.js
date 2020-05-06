//import React library
import React from "react"

//import components
import ContactCard from "./ContactCard"
import Joke from "./Joke"
import Product from "./Product"
import Car from "./Car"

//import data - fake JSON/dummy DB
import dataJokes from "../../data/dataJokes"
import dataContacts from "../../data/dataContacts"
import dataProducts from "../../data/dataProducts"
import dataCars from "../../data/dataCars"

//event practice
import Event from "./Event"

//CLASS BASED COMPONENT
class Content extends React.Component {
  //constructor method
  constructor() {
    //super() - global method
    super()
    //state object
    this.state = {
      //pass imported DATA into STATE object properties
      products: dataProducts,
      cars: dataCars,
      contacts: dataContacts,
      jokes: dataJokes
    }
  }

  //render JSX into a DOM
  render() {
    //PRODUCTS - map() method through data in state
    const productComponents = this.state.products.map((item) => (
      <Product key={item.id} product={item} />
    ))

    //CARS
    const carComponents = this.state.cars.map((item) => (
      <Car key={item.id} car={item} />
    ))

    //CONTACTS
    const contactComponents = this.state.contacts.map((item) => (
      <ContactCard key={item.id} contact={item} />
    ))

    //JOKES
    const jokeComponents = this.state.jokes.map((item) => (
      <Joke key={item.id} joke={item} />
    ))

    return (
      <div className='content'>
        <div className='product-list'>{productComponents}</div>
        <hr />
        <div className='car-list'>{carComponents}</div>
        <hr />
        <div className='contact-list'>{contactComponents}</div>
        <hr />
        <div className='joke-list'>{jokeComponents}</div>
        <hr />
        <Event />
      </div>
    )
  }
}

//export MainAbout component
export default Content
