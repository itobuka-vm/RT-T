//import React library
import React from "react"

//import Header components
import HeaderInfo from "./HeaderInfo"
import HeaderNav from "./HeaderNav"

//import Header component style
import "./../../style.css"

//render JSX into a DOM
function Header() {
  return (
    <header>
      <HeaderInfo />
      <HeaderNav />
    </header>
  )
}

//export Header component
export default Header
