import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faInfo, faCar } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';

class Header extends React.Component {
    render() {
        return (
            <header>
                <Button>
                    <Link to="/about">
                        <FontAwesomeIcon icon={faArrowLeft}/>
                    </Link>
                </Button>

                <span>
                    NUS Carparks
                </span>

                <Button>
                    <FontAwesomeIcon
                        icon={faInfo}
                        onClick={() => window.open("https://uci.nus.edu.sg/oca/")}
                    />
                </Button>

                <Button>
                    <Link to="/about">
                        <FontAwesomeIcon icon={faCar}/>
                    </Link>
                </Button>
            </header>
        )
    }
}

export default Header;