import React from 'react'
import SearchListing from './SearchListing'

class SearchListingContainer extends React.Component {
    updateSearchCallback = (location) => {
        this.props.updateSearchCallback(location);
    }

    render() {
        return (
            <div className="searchListingContainer">
                {this.props.labels.map((label, index) => <SearchListing key={index} label={label} isEven={index % 2} updateSearchCallback={(location) => this.updateSearchCallback(location)} />)}
            </div>
        )
    }
}
export default SearchListingContainer