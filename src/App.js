//import React library
import React from "react"

//import App components
import Header from "./components/header/Header"
import Main from "./components/main/Main"
import Footer from "./components/footer/Footer"

//render JSX into a DOM element
/* FUNCTIONAL COMPONENT
function App() {
  return (
    <div className='app'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
*/

//CLASS BASED COMPONENT
class App extends React.Component {
  //must have Render method
  render() {
    return (
      <div className='app'>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

//export App component
export default App
