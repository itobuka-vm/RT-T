/*
  root(index)/
    App/
      Header/
        Header-info
        Nav
      Main/
        Landing
        About
        Gallery
      Footer/
        Footer-info
        Footer-copyright
*/

// import React and ReactDOM libraries
import React from "react"
import ReactDOM from "react-dom"

//import CSS style
import "./style.css"

//import App component
import App from "./App"

//render JSX into a DOM element
ReactDOM.render(<App />, document.getElementById("root"))
