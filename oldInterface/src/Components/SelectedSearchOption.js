import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedo } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import './../Style/Main.css';

class SelectedSearchOption extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isNearest: (this.props.criteria !== "lots"),
            location: this.props.criteria
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.criteria !== this.props.criteria) {
            this.setState({ isNearest: (this.props.criteria !== 'lots') });
        }
    }

    render() {
        const isNearest = this.state.isNearest;
        var location = this.state.location;

        if (this.state.location === "") {
            location = "Current Location";
        }

        if (!isNearest) {
            return (
                <div>
                    <div className="d-flex justify-content-between selected-search-display">
                        <div className="align-self-center">Most Available Lots</div>
                        <div className="btn btn-primary selected-search-redo">
                            <FontAwesomeIcon icon={faRedo} />
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
                        <FontAwesomeIcon icon={faRedo} />
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