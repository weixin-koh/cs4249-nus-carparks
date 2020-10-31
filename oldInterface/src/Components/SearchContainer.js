import React, { Component } from 'react'
import Label from './Label'

class SearchContainer extends Component {
    render() {
        return (
            <div className="labelContainer">
              {this.props.labels.map((label, index) => <Label label = {label} isOdd = {index % 2} />)}
            </div>
        )
    }
}
export default SearchContainer