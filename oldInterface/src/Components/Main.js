import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Header from './Header';
import Footer from './Footer';
import SearchOptions from './SearchOptions';

class Main extends React.Component {
  render () {
    return (
      <div className="App">
        <Header />
        <SearchOptions />
        <Footer />
      </div>
    );
  }
}

export default Main;
