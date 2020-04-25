///import React library
import React from "react"

//import CSS
import "./../../style.css"

//render JSX into DOM element
function ContactCard(props) {
  return (
    <div className='contact-card'>
      <img src={props.imgUrl} alt={props.imgAlt} />
      <h3>{props.name}</h3>
      <p>Phone: {props.phone}</p>
      <p>Email: {props.email}</p>
    </div>
  )
}

//export ContactCard component
export default ContactCard
