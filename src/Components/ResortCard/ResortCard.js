import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import "./ResortCard.css"

const ResortCard = ({ id, town, logo, pass }) => {
    return (     
        <Link to={`/${id}`} key={id} className="resort-card" style={{textDecoration: 'none'}}>
            {pass && <img src={pass} className='resort-pass' alt='pass-type'/>}
            <img src={logo} className='resort-logo' alt='resort-logo-img'/>
            <h2 className='region'>{town}</h2>
        </Link> 
    );
}
 
export default ResortCard;

ResortCard.propTypes = {
    id: PropTypes.number,
    town: PropTypes.string,
    logo: PropTypes.string,
    pass: PropTypes.string,
}