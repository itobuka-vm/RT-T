///import React library
import React from "react"

//import CSS
import "./../../style.css"

//render JSX into DOM element
function ContactCard(props) {
  return (
    <div className='contact-card'>
      <img src={props.contact.imgUrl} alt='Altic' />
      <h3>{props.contact.name}</h3>
      <p>Phone: {props.contact.phone}</p>
      <p>Email: {props.contact.email}</p>
    </div>
  )
}

//export ContactCard component
export default ContactCard
