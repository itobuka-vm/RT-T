import React from "react"

// import StateComponent - state practice
import StateComponent from "./../components/main/StateComponent"

// event practice
import StateChanger from "./../components/main/StateChanger"
import Event from "./../components/main/Event"

import Car from "./../components/main/Car"

// conditional rendering practice
import LogInStatus from "./../components/main/LogInStatus"

// import data
import dataCars from "./../data/dataCars"
import ConditionalRendering from "../components/main/ConditionalRendering"

// import style
import "./../style.css"

class Practice extends React.Component {
  constructor() {
    super()
    this.state = {
      cars: dataCars,
      // this used when making a call to API and in the meantime you want something to show up
      isLoading: true,
      unreadMsg: [
        "Better Call Saul",
        "Postman always rings twice...",
        "Mesi Mesi nece nista da ti skodi..."
      ]
    }
  }

  // componentDidMount() - lifecycle hook
  // this is a chance to load something
  //  right after component load for the
  //   first time on the screen
  componentDidMount() {
    // faking an API call with timeout function 2000 ms
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 2000)
  }

  render() {
    // inline style object
    const InlineStyles = {
      div: {
        display: "flex",
        flexDirection: "column",
        padding: "5em 0 3em 0",
        textAlign: "center"
      },
      heading: {
        padding: "1em 0",
        textTransform: "uppercase"
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
    // CARS
    const carComponents = this.state.cars.map((item) => (
      <Car key={item.id} car={item} />
    ))

    return (
      <div className='grid-container'>
        <div className='grid-item item-1'>
          {/* STATE */}
          <h2 style={InlineStyles.heading}>State</h2>
          <StateComponent />
        </div>
        <div className='grid-item item-2'>
          {/* CHANGE STATE */}
          <h2 style={InlineStyles.heading}>Change State</h2>
          <StateChanger />
        </div>
        <div className='grid-item item-3'>
          {/* EVENT */}
          <h2 style={InlineStyles.heading}>Event</h2>
          <Event />
        </div>
        <div className='grid-item item-4'>
          {/* CARS */}
          <h2 style={InlineStyles.heading}>Cars</h2>
          <div className='car-list'>{carComponents}</div>
        </div>
        <div className='grid-item item-5'>
          {/* CONDITIONAL RENDERING */}
          <h2 style={InlineStyles.heading}>Conditional Rendering</h2>
          {/* <ConditionalRendering isLoading={this.state.isLoading} /> */}
          {this.state.isLoading ? (
            <h2>Loading...</h2>
          ) : (
            <ConditionalRendering />
          )}
          {/* {this.state.unreadMsg.length > 0 ? (
            <p style={InlineStyles.heading}>
              You have {this.state.unreadMsg.length} unread messages!
            </p>
          ) : null} */}
          {this.state.unreadMsg.length > 0 && (
            <p style={InlineStyles.heading}>
              You have {this.state.unreadMsg.length} unread messages!
            </p>
          )}
        </div>
        <div className='grid-item item-6'>
          {/* USER STATUS */}
          <LogInStatus />
        </div>
      </div>
    )
  }
}

export default Practice
