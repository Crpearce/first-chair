import React from 'react'
import { Link } from 'react-router-dom';
import "./ResortCard.css"

const ResortCard = ({ id, region, logo, pass }) => {
    return (     
        <Link to={`/${id}`} key={id} className="resort-card" style={{textDecoration: 'none'}}>
            <img src={logo} className='resort-logo' alt='resort-logo-img' />
            <h2 className='region' >Region : {region}</h2>
            {pass && <img src={pass} className='resort-pass' alt='pass-type' />}
        </Link> 
    );
}
 
export default ResortCard;