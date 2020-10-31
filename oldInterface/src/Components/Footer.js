import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div className="navbar fixed-bottom">
                <div className="btn footer-button-dark flex-fill">CARPARKS</div>
                <div className="btn footer-button-medium flex-fill">E-SERVICES</div>
                <div className="btn footer-button-light flex-fill">FEEDBACK</div>
            </div>
        )
    }
}

export default Footer;