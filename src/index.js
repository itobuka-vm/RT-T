/*
  index.html
    < index.js
      < App.js
        < Router
          < Header.js
            < HeaderInfo.js
            < Navbar.js
          < PageSwitcher
        < Footer
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
