//import React library
import React from "react"

//class based component
class Event extends React.Component {
  //constructor method
  constructor() {
    //super method
    super()
    //state object
    this.state = {
      img: "./assets/images/img06.jpg"
    }
  }

  //render method
  render() {
    //event function
    function Clicker() {
      console.log("Clicked I was!")
    }

    //return JSX into DOM element
    return (
      <div>
        <img
          src={this.state.img}
          style={{ width: "300px" }}
          alt='test'
          /* implement function in event */
          onMouseOver={function () {
            console.log("Over image cursor is...")
          }}
        />
        <br />
        <br />
        {/* pass event into event method */}
        <button onClick={Clicker}>Click me!</button>
      </div>
    )
  }
}

export default Event
