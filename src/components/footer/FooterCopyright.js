//import React library
import React from "react"

//render JSX into a DOM
/* FUNCTIONAL COMPONENT
function FooterCopyright() {
  return (
    <div className='footer-copyright'>
      <h3>Footer Copyright Section</h3>
    </div>
  )
} */

//CLASS BASED COMPONENT
class FooterCopyright extends React.Component {
  //must have Render method
  render() {
    return (
      <div className='footer-copyright'>
        <h3>Footer Copyright Section</h3>
      </div>
    )
  }
}

//export FooterCopyright component
export default FooterCopyright
