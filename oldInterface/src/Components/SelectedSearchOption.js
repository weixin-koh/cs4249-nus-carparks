import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedo } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css';

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
                    <div class="d-flex justify-content-between selected-search-display">
                        <div class="align-self-center">Most Available Lots</div>
                        <Link to="/about" class="btn btn-primary selected-search-redo">
                            <FontAwesomeIcon icon={faRedo}/>
                        </Link>
                    </div>
                </div>
            )
        } 
        return (
            <div>
                <div class="d-flex justify-content-between selected-search-display">
                    <div class="align-self-center">Nearest Car Parks</div>
                    <Link to="/about" class="btn btn-primary selected-search-redo">
                        <FontAwesomeIcon icon={faRedo}/>
                    </Link>
                </div>
                <div class="selected-search-location">
                    From {location}
                </div>
            </div>
        )
    }
}

export default SelectedSearchOption;