import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div className="navbar fixed-bottom ">
                <div className="btn footer-button-dark footer-button flex-fill">CARPARKS</div>
                <div className="btn footer-button-medium footer-button flex-fill">E-SERVICES</div>
                <div className="btn footer-button-light footer-button flex-fill">FEEDBACK</div>
            </div>
        )
    }
}

export default Footer;