import React, { Component, useState } from 'react'
import CarparkListing from './CarparkListing'
import {carparkData} from '../Data/Carparks'
import 'bootstrap/dist/css/bootstrap.min.css';

class CarparkListingContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { criteria: "nearest ", sortedData: carparkData };
        this.handleSort = this.handleSort.bind(this);
    }

    handleSort(newCriteria) {
        this.setState({criteria: newCriteria});
        
        // Determine to sort in ascending/descending order (shortest distance/most lots)
        switch(newCriteria) {
            case "lots":
                this.state.sortedData = carparkData.sort((a,b) => parseInt(b.availLots) - parseInt(a.availLots));
                break;
            default:
                this.state.sortedData = carparkData.sort((a,b) => parseFloat(a.distFromCOM1) - parseFloat(b.distFromCOM1));
                break;
        }
    }

    render() {
        var isOdd = false;
        if (this.props.criteria != this.state.criteria) {
            this.handleSort(this.props.criteria);
            console.log(this.state.sortedData);
        }

        // switch(this.props.selectedLocation) {
        //     case "COM1":
        //         distFrom = distFromCOM1;
        //         break;
        //     case "FASS":
        //         distFrom = distFromFASS;
        //         break;
        //     case "UTOWN":
        //         distFrom = distFromUTOWN;
        // }

        return (
            <div>
                {this.state.sortedData.map(carpark => {
                    return(<CarparkListing 
                        isOdd = {isOdd=!isOdd}
                        id = {carpark.id}
                        location = {carpark.location}
                        lotType = {carpark.lotType}
                        availLots = {carpark.availLots}                        
                        distance = {carpark.distFromCOM1}
                    />);})}  
            </div>
        )
    }
}
export default CarparkListingContainer