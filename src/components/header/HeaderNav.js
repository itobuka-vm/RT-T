//import React library
import React from "react"

//render JSX into a DOM
/* FUNCTIONAL COMPONENT
function HeaderNav() {
  return (
    <nav className='header-nav'>
      <h3>Navbar Section</h3>
    </nav>
  )
} */

//CLASS BASED COMPONENT
class HeaderNav extends React.Component {
  render() {
    return (
      <nav className='header-nav'>
        <h3>Navbar Section</h3>
      </nav>
    )
  }
}

//export HeaderNav component
export default HeaderNav
