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
      counter: 0
    }
    //bind custom method when changing state with setState method
    this.CounterStrike = this.CounterStrike.bind(this)
  }
  //onClick event method
  CounterStrike() {
    //test with console
    /* console.log("CS_1.6") */

    //use setState method to set object parameter / OR
    /* this.setState({ counter: 5 }) */

    //setState with function - pass previous state as a parameter
    this.setState(function (prevState) {
      //return new state object
      return {
        counter: prevState.counter + 1
      }
    })
  }

  //render method - render JSX into DOM element
  render() {
    //return JSX
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.CounterStrike}>Strike</button>
      </div>
    )
  }
}

//export component
export default StateChanger
