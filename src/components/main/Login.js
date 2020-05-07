//import React libraries
import React from "react"

//class based component
class Login extends React.Component {
  //constructor method
  constructor() {
    //super() method
    super()
    //state object
    this.state = {
      isLoggedIn: false
    }
  }
  //render method
  render() {
    //return JSX
    return (
      <div>
        {/* if isLoggedIn is true display "in", else display "out" */}
        <h2>You are currently logged {this.state.isLoggedIn ? "in" : "out"}</h2>
      </div>
    )
  }
}

//export component
export default Login
