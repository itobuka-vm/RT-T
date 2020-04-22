//import React library
import React from "react"

//import Main components
import MainLanding from "./MainLanding"
import MainAbout from "./MainAbout"
import MainGallery from "./MainGallery"

//render JSX into a DOM
function Main() {
  return (
    <main>
      <MainLanding />
      <MainAbout />
      <MainGallery />
    </main>
  )
}

//export Main component
export default Main
