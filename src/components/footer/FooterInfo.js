//import React library
import React from "react"

//render JSX into a DOM
// FUNCTIONAL COMPONENT
function FooterInfo() {
  return (
    <div className='footer-info'>
      <h3>Footer Info Section</h3>
    </div>
  )
}

//CLASS BASED COMPONENT
/* class FooterInfo extends React.Component {
  //must have Render method
  render() {
    return (
      <div className='footer-info'>
        <h3>Footer Info Section</h3>
      </div>
    )
  }
} */

//export FooterInfo component
export default FooterInfo
