import React, { Component, useState } from 'react'
import CarparkListing from './CarparkListing'
import {carparkData} from '../Data/Carparks'
import 'bootstrap/dist/css/bootstrap.min.css';

class CarparkListingContainer extends Component {
    state = { criteria: "nearest"}

    
    // renderSort = (criteria) => () => {
    //     const [data, setData] = useState([]);

    //     const sortData = criteria => {
    //         const sortBy = {
    //             com: 'distFromCOM1',
    //             fass: 'distFromFASS',
    //             utown: 'distFromUTOWN',
    //             lots: 'lots',
    //         };
    //         const sortProperty = sortBy[criteria];
    //         const sorted = carparkData.sort((a,b) => b[sortProperty] - a[sortProperty]);
    //         console.log(sorted);
    //         setData(sorted);
    //     }
    // }

    render() {
        var isOdd = false;
        // this.renderSort().sortData(this.props.criteria);
        


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
                <div><newSort /></div>
                {carparkData.map(carpark => {
                    return(<CarparkListing 
                        isOdd = {isOdd=!isOdd}
                        id = {carpark.id}
                        location = {carpark.location}
                        lotType = {carpark.lotType}
                        availLots = {carpark.availLots}                        
                        distance = {carpark.distFromCOM1}
                    />);})}

                    
            </div>
            // <div><CarparkListing isOdd = {index % 2}/></div>
            // <div className="labelContainer">
            //   {this.props.labels.map((label, index) => <CarparkListing label = {label} isOdd = {index % 2} />)}
            // </div>
        )
    }
}
export default CarparkListingContainer