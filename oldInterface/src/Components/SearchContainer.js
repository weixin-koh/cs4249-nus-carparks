import React, { Component } from 'react'
import SearchListing from './SearchListing'

class SearchContainer extends Component {
    render() {
        return (
            <div className="searchContainer">
              {this.props.labels.map((label, index) => <SearchListing key={index} label={label} isOdd={index % 2} />)}
            </div>
        )
    }
}
export default SearchContainer