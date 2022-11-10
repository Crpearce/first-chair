import React, { Component } from 'react'
import mountains from "../../Images/Mountains.png"
import { Link } from 'react-router-dom'
import "./Navigation.css"

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      searchedPaths: []
     }
  }
  render() { 
    return (
      <section className='nav-wrapper'>
        <div className="nav">
          <h1 className="name"> First Chair Colorado </h1>
          <img src={mountains} className='mountain-icon' alt="Mountain Icon"/>
        </div>
        <div className="btn-section">
          <Link to={'/'} style={{textDecoration: 'none'}}>
            <button className='home-btn-container' onClick={() => { this.props.searchPass("") }}>Home</button>
          </Link>
          < Link to={'/about'} style={{textDecoration: 'none'}}>
            <button className='about-btn-container'>About Us</button>
          </Link>
          <Link to={'/favorites'} style={{textDecoration: 'none'}}>
            <button className='favorites-btn-container'>Favorites</button>
          </Link>
        </div>
      </section>
    );
  }
}
 
export default Navigation;