//import React libraries
import React from "react"

//import CSS
import "./../../style.css"

//render JSX with props into a DOM element
/* FUNCTIONAL COMPONENT
function Joke(props) {
  return (
    <li className='joke-item'>
      <p>{props.joke.question}</p>
      <p>{props.joke.punchLine}</p>
      <hr />
    </li>
  )
} */

//CLASS BASED COMPONENT
class Joke extends React.Component {
  //must have Render method
  render() {
    return (
      /* in class based components props need this. */
      <li className='joke-item'>
        <p>{this.props.joke.question}</p>
        <p>{this.props.joke.punchLine}</p>
        <hr />
      </li>
    )
  }
}

//export Joke component
export default Joke
