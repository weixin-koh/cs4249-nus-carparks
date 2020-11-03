import React, { Component } from 'react';
import history from './../history';

class SearchListing extends Component {
  goToMain = (location) => {
    history.push('/1');
  }

  render() {
    return (
      <div>
        { this.props.isOdd ? 
          <div className="d-flex justify-content-between search-listing odd" onClick={this.goToMain(this.props.label)}>
            <div className="ml-3">
              {this.props.label}
            </div>
          </div>
          :
          <div className="d-flex justify-content-between search-listing even">
            <div className="ml-3">
              {this.props.label}
            </div>
          </div>
        }
      </div>
    )
  }
}

export default SearchListing