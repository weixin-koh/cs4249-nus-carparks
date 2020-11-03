import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css';
import Header from './Header';
import Footer from './Footer';
import SearchOptions from './SearchOptions';
import CarparkListingContainer from './CarparkListingContainer';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.updateListingRef = React.createRef();
    this.state = { criteria: "com1"};
  }

  // Trigger display of carpark listing through ref
  startNewSearch = (criteria) => {
    this.setState({criteria})
    this.updateListingRef.current.handleSort(criteria);
  };

  render () {
    return (
      <div className="d-flex flex-column">
        <div className="sticky-top white-background">
          <Header />
          <SearchOptions startNewSearch = {this.startNewSearch}/>
        </div>
        <div>
          <CarparkListingContainer ref={this.updateListingRef}/>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Main;
