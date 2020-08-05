import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Coveralbums from "./Coveralbums"
import Pic from "./Pic"
import SingleView from './singleView'
import Navbar from './Navbar'

function App(props) {
  return (
    <Router>
      <div>
        <Navbar/>
        <Route exact path="/" component={Coveralbums} />
        <Route path="/Pic/:id" component={Pic} />
        <Route path="/single/:id" component={SingleView}/>
        <footer className="footertwo">&copy; Shey Laroza // Aug. 2020</footer>
      </div>
    </Router>
  )
}

export default App
