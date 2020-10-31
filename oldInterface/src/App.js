import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header';
import Search from './Components/Search';


class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Router>
          <Header />
          <Search />
        </Router>
      </div>
    );
  }
}

export default App;
