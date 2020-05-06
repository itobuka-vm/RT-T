//import React library
import React from "react"

//import App components
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"

//import Router libraries
import { BrowserRouter as Router } from "react-router-dom"
import PageSwitcher from "./views/PageSwitcher"

//render JSX into a DOM element
// FUNCTIONAL COMPONENT
function App() {
  return (
    <div className='app'>
      {/* React Browser Router */}
      <Router>
        <div>
          {/* i separated Link router components (in Header.js < HeaderNav.js < Navbar.js)
            from Switch and Route router component (in PageSwitcher.js) */}
          <Header />
          <PageSwitcher />
        </div>
      </Router>
      <Footer />
    </div>
  )
}

//CLASS BASED COMPONENT
/* class App extends React.Component {
  //must have Render method
  render() {
    return (
      <div className='app'>
        React Browser Router
        <Router>
          <div>
            i separated Link router components (in Navbar.js)
            from Switch and Route router component (in PageSwitcher.js)
            <Header />
            <PageSwitcher />
          </div>
        </Router>
        <Footer />
      </div>
    )
  }
} */

//export App component
export default App
