import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css';
import Header from './Header';
import Footer from './Footer';
import SearchOptions from './SearchOptions';
import CarparkListingContainer from './CarparkListingContainer';

class Main extends React.Component {
  state = { criteria: "nearest"}
  startNewSearch = (criteria) => {
    this.setState({criteria})
  };

  render () {
    return (
      <div className="App">
        <header className="sticky-top white-background">
          <Header />
          <SearchOptions startNewSearch = {this.startNewSearch}/>
        </header>
        <body>
          <CarparkListingContainer criteria = {this.state.criteria}/>
        </body>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default Main;
