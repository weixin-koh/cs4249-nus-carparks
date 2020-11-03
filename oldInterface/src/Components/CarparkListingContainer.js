import React, { Component } from 'react'
import CarparkListing from './CarparkListing'
import { carparkData } from '../Data/Carparks'
import 'bootstrap/dist/css/bootstrap.min.css';
import './../Style/Main.css';

class CarparkListingContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            criteria: "com1", // will sort nearest to COM1 by default
            sortedData: carparkData
        };

        // Sort the carpark data according to the criteria passed into CarparkListingContainer
        this.handleSort(this.props.criteria);
    }

    handleSort = (criteria) => {
        // Determine to sort in ascending/descending order (shortest distance/most lots)
        switch (criteria) {
            case "lots":
                this.setState({ sortedData: carparkData.sort((a, b) => parseInt(b.availLots) - parseInt(a.availLots)) });
                break;
            case "fass":
                this.setState({ sortedData: carparkData.sort((a, b) => parseFloat(a.distFromFASS) - parseFloat(b.distFromFASS)) });
                break;
            case "utown":
                this.setState({ sortedData: carparkData.sort((a, b) => parseFloat(a.distFromUTOWN) - parseFloat(b.distFromUTOWN)) });
                break;
            default:
                this.setState({ sortedData: carparkData.sort((a, b) => parseFloat(a.distFromCOM1) - parseFloat(b.distFromCOM1)) });
                break;
        }
    }

    render() {
        var isOdd = false;

        return (
            <div className="main-body">
                {this.state.sortedData.map(carpark => {
                    return (<CarparkListing
                        key={carpark.id}
                        isOdd={isOdd = !isOdd}
                        id={carpark.id}
                        location={carpark.location}
                        lotType={carpark.lotType}
                        availLots={carpark.availLots}
                        distance={carpark.distFromCOM1}
                    />);
                })}
            </div>
        )
    }
}
export default CarparkListingContainer