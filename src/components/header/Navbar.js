//import React library
import React from "react"

//import Router libraries
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

//functional Navbar component
function Navbar() {
  //return JSX components into DOM element
  return (
    //i divided Link components from Switch and Route components
    <nav className='header-nav'>
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          listStyleType: "none"
        }}
      >
        <li>
          <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
            Home |
          </Link>
        </li>
        <li>
          <Link
            to={"/website"}
            style={{ textDecoration: "none", color: "white" }}
          >
            Website |
          </Link>
        </li>
        <li>
          <Link
            to={"/todoapp"}
            style={{ textDecoration: "none", color: "white" }}
          >
            TodoApp
          </Link>
        </li>
      </ul>
    </nav>
  )
}

//export component
export default Navbar
