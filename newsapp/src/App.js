import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export class App extends Component {

  apiKey = process.env.REACT_APP_API_KEY ;

  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
    };
  }

  setProgress = (progress) => {
    this.setState({
      progress:progress
    })
  };

  render() {
    return (
      <>
        {/* <NavBar/>
        <News country="us" category="sports"/> */}
        <Router>
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
            onLoaderFinished={() => this.setProgress(0)}
            height={3}
          />
          <NavBar />
          <Routes>
            <Route
              exact
              path="/"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" country="us" category="general" />}
            />
            <Route
              exact
              path="/business"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" country="us" category="business" />}
            />
            <Route
              exact
              path="/entertainment"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" country="us" category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" country="us" category="health" />}
            />
            <Route
              exact
              path="/science"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" country="us" category="science" />}
            />
            <Route
              exact
              path="/sports"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" country="us" category="sports" />}
            />
            <Route
              exact
              path="/technology"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" country="us" category="technology" />
              }
            />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
