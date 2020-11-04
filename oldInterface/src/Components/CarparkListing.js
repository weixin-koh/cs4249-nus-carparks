import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './../Style/CarparkListing.css'

class CarparkListing extends Component {
  render() {
    return (
      <div>
        { this.props.isOdd ? 
          <div className="d-flex justify-content-between carpark-listing odd p-1">
              <div className="w-75">
                <div>
                  <span className="id">{this.props.id}</span>
                  <span className="lot-type">{this.props.lotType!=="Visitor"? " (" + this.props.lotType + ")" : " "}</span>
                </div>
                <div className="location">{this.props.location}</div>
                <div className="distance">Distance: {this.props.distance}m</div>
              </div>
              <div className="w-25">
                <div className="num-lots-label">Lots Available</div>
                <div className="num-lots">{this.props.availLots}</div>
              </div>
          </div>
          :
          <div className="d-flex justify-content-between carpark-listing even p-1">
              <div className="w-75">
                <div>
                  <span className="id">{this.props.id}</span>
                  <span className="lot-type">{this.props.lotType!=="Visitor"? " (" + this.props.lotType + ")" : " "}</span>
                </div>
                <div className="location">{this.props.location}</div>
                <div className="distance">Distance: {this.props.distance}m</div>
              </div>
              <div className="w-25">
                <div className="num-lots-label">Lots Available</div>
                <div className="num-lots">{this.props.availLots}</div>
              </div>
          </div>
        }
      </div>
    )
  }
}

export default CarparkListing