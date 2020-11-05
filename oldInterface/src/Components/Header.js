import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo, faCar, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import './../Style/Main.css';

class Header extends React.Component {
    render() {
        return (
            <div className="position-relative">
                {
                    this.props.navBack !== undefined && this.props.navBack ?
                        <div className="d-flex justify-content-between" style={{ backgroundColor: "#F95B03" }}>
                            <div className="header d-flex flex-row-reverse width-100 p-1" style={{ zIndex: 5 }} onClick={() => this.props.toggleSearchDisplay()}>
                                <div className="btn btn-primary fa ml-2 mr-2 header-button">
                                    <FontAwesomeIcon icon={faArrowLeft} />
                                </div>
                            </div>
                            <div className="header-app-name position-absolute">NUS Carparks</div>
                            <div className="header d-flex flex-row-reverse width-100 p-1">
                                <div style={{ zIndex: 5 }}>
                                    <div className="btn btn-primary fa ml-2 mr-2 header-button" onClick={() => {
                                        window.open(
                                            'https://nus-parking-info.netlify.app/',
                                            '_blank'
                                        );
                                    }}>
                                        <FontAwesomeIcon icon={faInfo} />
                                    </div>

                                    <div className="btn btn-primary fa ml-2 mr-2 header-button">
                                        <FontAwesomeIcon icon={faCar} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <div className="position-relative">
                            <div className="header-app-name ml-auto position-absolute">NUS Carparks</div>
                            <div className="header d-flex flex-row-reverse width-100 p-1">
                                <div style={{ zIndex: 5 }}>
                                    <div className="btn btn-primary fa ml-2 mr-2 header-button" onClick={() => {
                                        window.open(
                                            'https://nus-parking-info.netlify.app/',
                                            '_blank'
                                        );
                                    }}>
                                        <FontAwesomeIcon icon={faInfo} />
                                    </div>

                                    <div className="btn btn-primary fa ml-2 mr-2 header-button">
                                        <FontAwesomeIcon icon={faCar} />
                                    </div>
                                </div>
                            </div>
                        </div>
                }
            </div>
        )
    }
}

export default Header;