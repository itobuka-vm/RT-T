//import React library
import React from "react"

//import App components
import Header from "./components/header/Header"
import Main from "./components/main/Main"
import Footer from "./components/footer/Footer"

//render JSX into a DOM element
function App() {
  return (
    <div className='app'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

//export App component
export default App
