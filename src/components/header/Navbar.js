//import React library
import React from "react"

//import Router libraries
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

//functional Navbar component
function Navbar() {
  //inline style objects
  const PrimDesign = {
    display: "flex",
    justifyContent: "center",
    listStyleType: "none"
  }

  const SecDesign = {
    textDecoration: "none",
    color: "white"
  }

  //return JSX components into DOM element
  return (
    //i divided Link components from Switch and Route components
    <nav className='header-nav'>
      <ul style={PrimDesign}>
        <li>
          <Link to={"/"} style={SecDesign}>
            Home |
          </Link>
        </li>
        <li>
          <Link to={"/website"} style={SecDesign}>
            Website |
          </Link>
        </li>
        <li>
          <Link to={"/practice"} style={SecDesign}>
            Practice |
          </Link>
        </li>
        <li>
          <Link to={"/todoapp"} style={SecDesign}>
            TodoApp
          </Link>
        </li>
      </ul>
    </nav>
  )
}

//export component
export default Navbar
