//import React library
import React from "react"

import Login from "./../components/main/Login"

//functional component
function Home() {
  //return JSX into DOM element
  return (
    <div>
      <h1>Welcome to React.js app</h1>
      <p>Please Log in</p>
      <form>
        <label>Username:</label>
        <br />
        <input type='text' />
        <br />
        <label>Password:</label>
        <br />
        <input type='text' />
      </form>
      <Login />
    </div>
  )
}

//export Home component
export default Home
