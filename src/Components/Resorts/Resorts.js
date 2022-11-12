import React from 'react';
import ResortCard from '../ResortCard/ResortCard';
import PropTypes from 'prop-types';

import './Resorts.css';

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
            town={resort.closest_Town}
            pass={resort.pass}
            />
         );
    })
    return (
        <div className='resorts-container'>{ resortData }</div>
    );
};
 
export default Resorts;

const resortsShape = {
    id: PropTypes.number,
    logo: PropTypes.string,
    closest_Town: PropTypes.string,
    pass: PropTypes.string
}

Resorts.propTypes = {
    resort: PropTypes.shape(resortsShape),
    searchedPass: PropTypes.elementType
}