import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../Style/Main.css';
import './../Style/SearchListing.css';
import Header from './Header';
import Footer from './Footer';
import SearchOptions from './SearchOptions';
import CarparkListingContainer from './CarparkListingContainer';
import SearchContainer from './SearchContainer';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      criteria: "",
      showSearchPage: false
    };
  }

  toggleSearchDisplay = () => {
    const showSearchPage = this.state.showSearchPage;
    this.setState({ showSearchPage: !showSearchPage });
  }

  resetLocation = () => {
    this.setState({ criteria: "" });
  }

  // Update search criteria
  startNewSearch = (criteria) => {
    this.setState({ criteria, showSearchPage: false });
  };

  render() {
    const showSearchPage = this.state.showSearchPage;

    return (
      <div className="d-flex flex-column">
        { showSearchPage ?
          <div>
            <div className="sticky-top">
              <Header navBack={true} props={this.props} toggleSearchDisplay={this.toggleSearchDisplay} />
            </div>
            <SearchContainer props={this.props} updateSearchCallback={(location) => this.startNewSearch(location)} />
          </div>
          :
          <div>
            <div className="sticky-top white-background">
              <Header />
              <SearchOptions
                startNewSearch={this.startNewSearch}
                toggleSearchDisplay={this.toggleSearchDisplay}
                resetLocation={this.resetLocation}
                criteria={this.state.criteria} />
            </div>
            <CarparkListingContainer criteria={this.state.criteria.toLowerCase()} />
            <Footer />
          </div>
        }
      </div>
    );
  }
}

export default Main;
