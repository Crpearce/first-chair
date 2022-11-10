import React from 'react'
import ResortCard from '../ResortCard/ResortCard';
import './Resorts.css'

const Resorts = ({ resorts, displayResortsDetails }) => {
    const resortCards = resorts.map(resort => {
        return ( 
            <ResortCard
            id={resort.id}
            key={resort.id}
            logo={resort.logo}
            region={resort.region}
            pass={resort.pass}
            onClick={() => displayResortsDetails(resort.id)}
            />
         );
    })
    return (
        <div className='resorts-container'>
            {resortCards}
        </div>
    )
}
 
export default Resorts;