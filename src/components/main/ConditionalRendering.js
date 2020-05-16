import React from "react"

//Conditional Rendering is used to show something
// while something else is dowNloading in the back
function ConditionalRendering() {
  return (
    <div>
      {/* <div>
      {props.isLoading ? <h2>Loading...</h2> : <h2>Conditional Rendering</h2>}
    </div> */}
      <h2 style={{ color: "green" }}>Fully Loaded!</h2>
    </div>
  )
}

export default ConditionalRendering
