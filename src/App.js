import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Home from './components/Home';
import Landing from './components/Landing';
import Catalog from './components/Catalog';


class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    const state = this.state
    return (
      <Router>
        <div className="App">
          <div id="home-background"></div>
          <div id="main-links">
            <Link to="/">Home</Link>
            <Link to="/Catalog">Catalog</Link>
          </div>
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            {/* <Route path="/" exact component={Home}/> */}
            {/* <Route path="/about" exact render={() => <About items={Object.keys(state)} />} /> */}

            <Route path="/landing" exact element={<Landing />} />
            <Route path="/catalog" exact element={<Catalog />} />
          </Routes>
        </div>
      </Router>
      );
    }
}

export default App;
