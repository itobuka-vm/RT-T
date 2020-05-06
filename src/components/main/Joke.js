//import React libraries
import React from "react"

//import CSS
import "./../../style.css"

//render JSX with props into a DOM element
//FUNCTIONAL COMPONENT
function Joke(props) {
  return (
    <li className='joke-item'>
      <p>{props.joke.question}</p>
      <p>{props.joke.punchLine}</p>
      <hr />
    </li>
  )
}

//export Joke component
export default Joke
