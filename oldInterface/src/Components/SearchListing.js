import React, { Component } from 'react';

class SearchListing extends Component {
  updateSearchLocation = () => {
    const location = this.props.label;
    this.props.updateSearchCallback(location);
  }

  render() {
    return (
      <div>
        { this.props.isEven ?
          <div className="d-flex justify-content-between search-listing odd" onClick={this.updateSearchLocation}>
            <div className="ml-3">
              {this.props.label}
            </div>
          </div>
          :
          <div className="d-flex justify-content-between search-listing even" onClick={this.updateSearchLocation}>
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