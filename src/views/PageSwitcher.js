import React from "react"

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import Home from "./Home"
import Website from "./Website"
import Practice from "./Practice"
import TodoApp from "./TodoApp"

function PageSwitcher() {
  return (
    <div>
      {/* i divided Switch and Route components from Link components */}
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/website'>
          <Website />
        </Route>
        <Route path='/practice'>
          <Practice />
        </Route>
        <Route path='/todoapp'>
          <TodoApp />
        </Route>
      </Switch>
    </div>
  )
}

export default PageSwitcher
