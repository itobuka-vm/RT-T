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
  //constructor method
  constructor() {
    //super() - global method to connect with React
    super()
    //state object
    this.state = {
      copyright: "@copyright 2020",
      design: "Development and design by </lion_tamer>"
    }
  }

  //must have Render method - render JSX into DOM element
  render() {
    return (
      <div className='footer-copyright'>
        <h3>
          <span>{this.state.copyright} | </span>
          <span>{this.state.design}</span>
        </h3>
      </div>
    )
  }
}

//export FooterCopyright component
export default FooterCopyright
