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
      img: "./assets/images/img01.jpg"
    }
    //bind custom event methods
    this.ChangeImage = this.ChangeImage.bind(this)
  }

  ChangeImage() {
    //setState method
    this.setState(function () {
      //return new state object
      let i = 1
      i += 1
      console.log(i)
      return {
        img: "./assets/images/img0" + i + ".jpg"
      }
    })
  }

  //render method
  render() {
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
        <button onClick={this.ChangeImage}>Change image!</button>
      </div>
    )
  }
}

export default Event
