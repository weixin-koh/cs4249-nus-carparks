import React from 'react';
import history from './../history';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo, faCar, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css';

class Header extends React.Component {
    render() {
        return (
            <div>
            {
                this.props.navBack !== undefined && this.props.navBack ? 
                <div className="d-flex justify-content-between" style={{ backgroundColor: "#F95B03" }}>
                    <div className="header d-flex flex-row-reverse width-100 p-1" style={{ zIndex: 5 }}>
                        <Link to="/1" className="btn btn-primary fa ml-2 mr-2 header-button">
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </Link>
                    </div>
                    <div className="header-app-name position-absolute">
                            NUS Carparks
                    </div>
                    <div className="header d-flex flex-row-reverse width-100 p-1">
                        <div>
                            <Link to="/NUSSite/nusMain.html" className="btn btn-primary fa ml-2 mr-2 header-button" style={{ zIndex: 5 }}>
                                <FontAwesomeIcon icon={faInfo}/>
                            </Link>

                            <Link to="/about" className="btn btn-primary fa ml-2 mr-2 header-button" style={{ zIndex: 5 }}>
                                <FontAwesomeIcon icon={faCar}/>
                            </Link>
                        </div>
                    </div>
                </div>
                :
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
            }
            </div>
        )
    }
}

export default Header;