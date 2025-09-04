import React, { Component } from 'react'
import NavBar from './Components/NavBar'
import News from './Components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <>
        {/* <NavBar/>
        <News country="us" category="sports"/> */}

        <Router>
          <NavBar/>
          <Routes>
            <Route exact path="/" element={<News key="general" country="us" category="general" />} />
            <Route exact path="/business" element={<News key="business" country="us" category="business" />} />
            <Route exact path="/entertainment" element={<News key="entertainment" country="us" category="entertainment" />} />
            <Route exact path="/health" element={<News key="health" country="us" category="health" />} />
            <Route exact path="/science" element={<News key="science" country="us" category="science" />} />
            <Route exact path="/sports" element={<News key="sports" country="us" category="sports" />} />
            <Route exact path="/technology" element={<News key="technology" country="us" category="technology" />} />
          </Routes>
        </Router>
      </>
    )
  }
}

export default App