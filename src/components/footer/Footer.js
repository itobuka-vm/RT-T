//import React library
import React from "react"

//import Footer components
import FooterInfo from "./FooterInfo"
import FooterCopyright from "./FooterCopyright"

//import Header component style
import "./../../style.css"

//render JSX into a DOM
// FUNCTIONAL COMPONENT
function Footer() {
  return (
    <footer>
      <FooterInfo />
      <FooterCopyright />
    </footer>
  )
}

//CLASS BASED COMPONENT
/* class Footer extends React.Component {
  //must have Render method
  render() {
    return (
      <footer>
        <FooterInfo />
        <FooterCopyright />
      </footer>
    )
  }
} */

//export Footer component
export default Footer
