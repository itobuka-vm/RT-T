//import React library
import React from "react"

//CLASS BASED COMPONENT
class HeaderInfo extends React.Component {
  //constructor method
  constructor() {
    //super() - global method to connect with React
    super()
    //state object
    this.state = {
      name: "Company Name",
      address: "Company Address",
      mail: "Company Email",
      phone: "Company Phone",
      langPrim: "Srpski",
      langSec: "Espanol"
    }
  }

  //must have Render method - render JSX into DOM element
  render() {
    //return JSX
    return (
      <div className='header-info'>
        <p>{this.state.name}</p>
        <p>{this.state.address}</p>
        <p>{this.state.phone}</p>
        <p>{this.state.mail}</p>
        <p>
          Language
          <select>
            <option>{this.state.langPrim}</option>
            <option>{this.state.langSec}</option>
          </select>
        </p>
      </div>
    )
  }
}

//export HeaderInfo component
export default HeaderInfo
