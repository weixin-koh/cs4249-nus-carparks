import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedo } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import './../Style/Main.css';

class SelectedSearchOption extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isNearest: true, location: "Current Location"};
    }

    render() {
        const isNearest = this.state.isNearest;
        const location = this.state.location;
        if (!isNearest) {
            return (
                <div>
                    <div className="d-flex justify-content-between selected-search-display">
                        <div className="align-self-center">Most Available Lots</div>
                        <div className="btn btn-primary selected-search-redo">
                            <FontAwesomeIcon icon={faRedo}/>
                        </div>
                    </div>
                </div>
            )
        } 
        return (
            <div>
                <div className="d-flex justify-content-between selected-search-display">
                    <div className="align-self-center">Nearest Car Parks</div>
                    <div className="btn btn-primary selected-search-redo">
                        <FontAwesomeIcon icon={faRedo}/>
                    </div>
                </div>
                <div className="selected-search-location">
                    From {location}
                </div>
            </div>
        )
    }
}

export default SelectedSearchOption;