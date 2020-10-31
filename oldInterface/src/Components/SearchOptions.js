import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortAmountUp, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css';
import SelectedSearchOption from '../Components/SelectedSearchOption';

class SearchOptions extends React.Component {
    render() {
        return (
            <div>
                <div class="d-flex justify-content-between">
                    <Link to="/about" class="btn btn-primary fa search-option-button flex-fill">
                        <FontAwesomeIcon icon={faSortAmountUp}/> NEAREST
                    </Link>

                    <Link to="/about" class="btn btn-primary fa search-option-button flex-fill">
                        <FontAwesomeIcon icon={faSortAmountUp}/> MOST LOTS
                    </Link>

                    <Link to="/search" class="btn btn-primary fa search-option-button flex-fill">
                        <FontAwesomeIcon icon={faSearch}/> SEARCH
                    </Link>
                </div>
                <SelectedSearchOption />
            </div>
        )
    }
}

export default SearchOptions;