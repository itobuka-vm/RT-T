//import React library
import React from "react"

//import Main components
import Landing from "./Landing"
import Content from "./Content"
import Gallery from "./Gallery"

//render JSX into a DOM
/* FUNCTIONAL COMPONENT
function Main() {
  return (
    <main>
      <Landing />
      <Content />
      <Gallery />
    </main>
  )
} */

//CLASS BASED COMPONENT
class Main extends React.Component {
  render() {
    return (
      <main>
        <Landing />
        <Content />
        <Gallery />
      </main>
    )
  }
}

//export Main component
export default Main
