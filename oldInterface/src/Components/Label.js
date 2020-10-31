import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

class Label extends Component {
  render() {
    return (
      <div>
        { this.props.isOdd ? 
          <div className="d-flex justify-content-between label odd">
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
          <div className="d-flex justify-content-between label even">
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

export default Label