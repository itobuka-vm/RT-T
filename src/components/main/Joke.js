//import React libraries
import React from "react"

//import CSS
import "./../../style.css"

//render JSX with props into a DOM element
function Joke(props) {
  return (
    <li className='joke-item'>
      <p style={{ display: props.joke.question ? "block" : "none" }}>
        Question: {props.joke.question}
      </p>
      <p>Punch line: {props.joke.punchLine}</p>
      <hr />
    </li>
  )
}

//export Joke component
export default Joke
