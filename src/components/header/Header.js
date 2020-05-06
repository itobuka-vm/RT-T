//import React library
import React from "react"

//import Header components
import HeaderInfo from "./HeaderInfo"
import Navbar from "./Navbar"

//import Header component style
import "./../../style.css"

//render JSX into a DOM
// FUNCTIONAL COMPONENT
function Header() {
  return (
    <header>
      <HeaderInfo />
      <Navbar />
    </header>
  )
}

//CLASS BASED COMPONENT
/* class Header extends React.Component {
  render() {
    return (
      <header>
        <HeaderInfo />
        <HeaderNav />
      </header>
    )
  }
} */

//export Header component
export default Header
