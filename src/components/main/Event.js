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
      let i = Math.floor(Math.random() * 6)

      if (i === 0) {
        i += 1
      }
      /* console.log(i) */
      return {
        img: "./assets/images/img0" + i + ".jpg"
      }
    })
  }

  //render method
  render() {
    //inline style objects
    const DivStyle = {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }

    const ImgStyle = {
      width: "300px",
      height: "300px",
      margin: "auto"
    }

    const ButtonStyle = {
      margin: "auto"
    }

    //return JSX into DOM element
    return (
      <div style={DivStyle}>
        <img
          src={this.state.img}
          style={ImgStyle}
          alt='test'
          /* implement function in event */
          onMouseOver={function () {
            console.log("Over image cursor is...")
          }}
        />
        <br />
        {/* pass event into event method */}
        <button onClick={this.ChangeImage} style={ButtonStyle}>
          Change image!
        </button>
      </div>
    )
  }
}

export default Event
