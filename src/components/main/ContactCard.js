///import React library
import React from "react"

//import CSS
import "./../../style.css"

//render JSX into DOM element
//FUNCTIONAL COMPONENT
function ContactCard(props) {
  return (
    <div className='contact-card'>
      <img src={props.contact.imgUrl} alt={props.contact.imgAlt} />
      <h3>{props.contact.name}</h3>
      <p>Phone: {props.contact.phone}</p>
      <p>Email: {props.contact.email}</p>
    </div>
  )
}

//CLASS BASED COMPONENT
/* class ContactCard extends React.Component {
  render() {
    return (
      <div className='contact-card'>
        <img src={this.props.contact.imgUrl} alt={this.props.contact.imgAlt} />
        <h3>{this.props.contact.name}</h3>
        <p>Phone: {this.props.contact.phone}</p>
        <p>Email: {this.props.contact.email}</p>
      </div>
    )
  }
} */

//export ContactCard component
export default ContactCard
