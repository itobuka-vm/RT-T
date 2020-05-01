//import React library
import React from "react"

//class based component
class StateChanger extends React.Component {
  //constructor method
  constructor() {
    //super method
    super()

    //state object
    this.state = {
      count: 0
    }

    //always use BIND method to change STATE with setState method
    this.handleClick = this.handleClick.bind(this)
  }

  //event method
  handleClick() {
    //test with console
    /* console.log("The change has begun!") */

    //to change STATE use setState() method

    //pass previous(starting) state as prevState parameter
    this.setState(function (prevState) {
      //return modified STATE object
      return {
        count: prevState.count + 1
      }
    })
  }

  //render method
  render() {
    //return JSX into DOM element
    return (
      <div>
        <h1>{this.state.count}</h1>

        {/* passing event method*/}
        <button onClick={this.handleClick}>Change!</button>
      </div>
    )
  }
}

export default StateChanger
