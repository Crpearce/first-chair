import React, { Component } from 'react';
import mountains from "../../Images/Mountains.png";
import ikon from "../../Images/Ikon.png";
import epic from "../../Images/Epic.png";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import "./Navigation.css";

function Navigation( { searchPass }) {
    return (
      <section className='nav-wrapper'>
        <div className="nav">
          <h1 className="name"> First Chair Colorado </h1>
          <img src={mountains} className='mountain-icon' alt="Mountain Icon"/>
        </div>
        <div className="btn-section">
          <Link to='/' style={{textDecoration: 'none'}}>
            <button className='home-btn-container' onClick={() => { searchPass("")}}>Home</button>
          </Link>
          <Link to="/about" style={{textDecoration: 'none'}}>
            <button className='about-btn-container' >About Us</button>
          </Link>
          <Link to='/' style={{textDecoration: 'none'}}>
            <button className='ikon-btn-container' onClick={() => { searchPass("ikon") } }><img src={ikon} className='ikon-btn' alt="Ikon Icon"/></button> 
          </Link>
          <Link to='/' style={{textDecoration: 'none'}}>
            <button className='epic-btn-container' onClick={() => { searchPass("epic") }}><img src={epic} className='epic-btn' alt="Epic Icon"/></button> 
          </Link>
        </div>
      </section>
    );
  }

export default Navigation;

Navigation.propTypes = {
    searchPass: PropTypes.elementType 
}