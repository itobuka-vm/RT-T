// import React library
import React from "react"

// class based component
class LogInStatus extends React.Component {
  // constructor method
  constructor() {
    // super() method
    super()
    // state object
    this.state = {
      isLogIn: false
    }
    //bind method to this state
    this.logIn = this.logIn.bind(this)
  }

  // Log In/Out method
  logIn() {
    // setState method
    this.setState((prevState) => {
      // return new state object
      return {
        isLogIn: !prevState.isLogIn
      }
    })
  }

  // render method/hook
  render() {
    //return JSX
    return (
      <div>
        <h2>User Status:</h2>
        <p>User is: {this.state.isLogIn ? "Log In" : "Log Out"}</p>
        <hr />
        <button onClick={this.logIn}>
          {this.state.isLogIn ? "Log Out" : "Log In"}
        </button>
      </div>
    )
  }
}

/* function UserStatus() {
  return (
    <div>
      <h3>User Status</h3>
    </div>
  )
} */

export default LogInStatus
