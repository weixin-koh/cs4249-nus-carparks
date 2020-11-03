import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortAmountUp, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './../Style/Main.css';
import SelectedSearchOption from '../Components/SelectedSearchOption';

class SearchOptions extends React.Component {
    render() {
        return (
            <div>
                <div className="d-flex justify-content-between">
                    <div className="btn btn-primary fa search-option-button flex-fill" 
                        // Default "Nearest" to COM1
                        onClick={() => this.props.startNewSearch("com1")}>
                        <FontAwesomeIcon icon={faSortAmountUp}/> NEAREST
                    </div>

                    <div className="btn btn-primary fa search-option-button flex-fill"
                        onClick={() => this.props.startNewSearch("lots")}>
                        <FontAwesomeIcon icon={faSortAmountUp}/> MOST LOTS
                    </div>

                    <Link to="/search" className="btn btn-primary fa search-option-button flex-fill">
                        <FontAwesomeIcon icon={faSearch}/> SEARCH
                    </Link>
                </div>
                <SelectedSearchOption />
            </div>
        )
    }
}

export default SearchOptions;