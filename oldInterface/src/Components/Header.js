import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo, faCar } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css';

class Header extends React.Component {
    render() {
        return (
            <div className="position-relative">
                <div className="header-app-name ml-auto position-absolute">
                        NUS Carparks
                </div>
                <div className="header d-flex flex-row-reverse width-100 p-1">
                    <div>
                        <Link to="/NUSSite/nusMain.html" className="btn btn-primary fa ml-2 mr-2 header-button">
                            <FontAwesomeIcon icon={faInfo}/>
                        </Link>

                        <Link to="/about" className="btn btn-primary fa ml-2 mr-2 header-button">
                            <FontAwesomeIcon icon={faCar}/>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;