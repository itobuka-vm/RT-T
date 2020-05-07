import React from "react"

//import StateComponent - state practice
import StateComponent from "./../components/main/StateComponent"

//event practice
import StateChanger from "./../components/main/StateChanger"
import Event from "./../components/main/Event"

import Car from "./../components/main/Car"

//import data
import dataCars from "./../data/dataCars"

class Practice extends React.Component {
  constructor() {
    super()
    this.state = {
      cars: dataCars
    }
  }

  render() {
    //inline style object
    const InlineStyles = {
      div: {
        display: "flex",
        flexDirection: "column",
        padding: "5em 0 3em 0",
        textAlign: "center"
      },
      heading: {
        padding: "0 0 3em 0"
      },
      form: {
        margin: "auto",
        padding: "2em 0 8em 0",
        width: "30rem"
      },
      button: {
        margin: "auto",
        padding: "5px",
        fontSize: "1em"
      }
    }
    //CARS
    const carComponents = this.state.cars.map((item) => (
      <Car key={item.id} car={item} />
    ))

    return (
      <div style={InlineStyles.div}>
        <StateComponent />
        <hr />
        <StateChanger />
        <hr />
        <Event />
        <hr />
        <div className='car-list'>{carComponents}</div>
      </div>
    )
  }
}

export default Practice
