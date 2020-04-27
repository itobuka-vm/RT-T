//import React libraries
import React from "react"

//class based component
class StateComponent extends React.Component {
  //constructor method
  constructor() {
    //super() global method to connect with React
    super()
    //state object
    this.state = {
      name: "Cicko",
      age: 2
    }
  }
  //must have Render method - to render JSX into DOM element
  render() {
    //return JSX
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h3>{this.state.age} years old.</h3>
      </div>
    )
  }
}

//export component
export default StateComponent
