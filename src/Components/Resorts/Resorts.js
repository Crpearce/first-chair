import React from 'react'
import ResortCard from '../ResortCard/ResortCard';
import './Resorts.css'

const Resorts = ({ resorts, searchedPass }) => {
    let resortCards;
    if(searchedPass !== "") {
        resortCards = resorts.filter(resort => {
            return resort.type.includes(searchedPass) });
    } else {
        resortCards = resorts
    };
    
    const resortData = resortCards.map(resort => {
        return ( 
            <ResortCard
            id={resort.id}
            key={resort.id}
            logo={resort.logo}
            region={resort.region}
            type={resort.type}
            pass={resort.pass}
            />
         );
    })
    return (
        <div className='resorts-container'>{ resortData }</div>
    )
}
 
export default Resorts;