///import React library
import React from "react"

//import CSS
import "./../../style.css"

//render JSX into DOM element
function ContactCard() {
  return (
    <div className='contact-card'>
      <img src='#' alt='Contact img' />
      <h3>Contact Name</h3>
      <p>Phone: sample phone number</p>
      <p>Email: sample email address</p>
    </div>
  )
}

//export ContactCard component
export default ContactCard
