import React, { Component } from 'react'
import SearchListing from './SearchListing'

class SearchContainer extends Component {
    render() {
        return (
            <div className="labelContainer">
              {this.props.labels.map((label, index) => <SearchListing label = {label} isOdd = {index % 2} />)}
            </div>
        )
    }
}
export default SearchContainer