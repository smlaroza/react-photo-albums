import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Coveralbums from "./Coveralbums"
import Pic from "./Pic"

function App(props) {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Coveralbums} />
        <Route path="/Pic/:id" component={Pic} />
      </div>
    </Router>
  )
}

export default App
