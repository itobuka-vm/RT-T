//import React library
import React from "react"

import Login from "./../components/main/Login"

//functional component
function Home() {
  //inline style object
  const InlineStyles = {
    div: {
      padding: "5em 0 3em 0",
      height: "91vh",
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

  //return JSX into DOM element
  return (
    <div style={InlineStyles.div}>
      <h1 style={InlineStyles.heading}>Welcome to React.js app</h1>
      <form style={InlineStyles.form}>
        <fieldset>
          <legend>Please Log in</legend>
          <label>User:</label>
          <br />
          <input type='text' placeholder='Enter username' />
          <br />
          <label>Pass:</label>
          <br />
          <input type='text' placeholder='Enter password' />
          <br />
          <button style={InlineStyles.button}>Log In</button>
        </fieldset>
      </form>
      <Login />
    </div>
  )
}

//export Home component
export default Home
