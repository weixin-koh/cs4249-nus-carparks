import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

class CarparkListing extends Component {
  render() {
    return (
      <div>
        { this.props.isOdd ? 
          <div className="d-flex justify-content-between carpark-listing odd">
            <div className="ml-3">
              {this.props.label}
            </div>
            <div className="mr-3">
              <FontAwesomeIcon
                icon={faChevronRight}
                onClick={() => window.open("https://uci.nus.edu.sg/oca/")}
                />
            </div>
          </div>
          :
          <div className="d-flex justify-content-between carpark-listing even">
            <div className="ml-3">
              {this.props.label}
            </div>
            <div className="mr-3">
            <FontAwesomeIcon
              icon={faChevronRight}
              onClick={() => window.open("https://uci.nus.edu.sg/oca/")}
            />
            </div>
          </div>
        }
      </div>
    )
  }
}

export default CarparkListing