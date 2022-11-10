import React, { Component } from "react";
import { fetchAllResorts } from "../../api";
import { Link } from "react-router-dom";
import lifty from "../../Images/lift.png"
import vid from "../../Images/video.png"
import "./SingleResort.css";

class SingleResort extends Component {
  constructor() {
    super();
    this.state = {
      singleResort: {},
    };
  };

  componentDidMount = async () => {
    try {
      const resortsData = await fetchAllResorts();
      const data = await resortsData.json();
      const resortMatch = await data.resorts.find((resort) => resort.id === Number(this.props.resortId));
      this.setState({ singleResort: resortMatch });
    } catch {
      this.setState({
        error: "Sorry, there was an error loading the data. Please try again!",
      });
    };
  };

  render() {
    console.log()
    const resort = this.state.singleResort
    return (
      <section className='details-container'>
        <div className='flex-wrapper'>
          <div className='trail-map-container'>
            <h2 className='details-title'>{resort.name}</h2>
            <img src={resort.ski_Map} className='trail-map' alt="trail map"/>
            <h3 className='details-town'>{resort.closest_Town}</h3>
            <h3 className='details-region'>{resort.region}</h3>
          </div>
          <div className='resort-scripts'>
            <p className='resort-overview'>{resort.overview}</p>
              <ul className='list-section'>
                <li>Hours from Denver: {resort.hours}</li>
                <li>Trails: {resort.trails}</li>
                <li>Acres: {resort.acres}</li>
                <li>Summit Elevation: {resort.summit}</li>
                <li>Vertical feet: {resort.verticle}</li>
              </ul>
          <div className='snowfall-container'>
            <h3>Annual snowfall:</h3>
            <h3>{resort.snowfall} in</h3>
          </div>
          <div className='links-container'>
            <Link to={{ pathname: resort.lifttix }} className='details-tickets' style={{textDecoration: 'none'}} target="_blank"> <img src={lifty} className='iconhelp' alt="chairlift"/> {resort.name} Lift Tickets </Link>
            <Link to={{ pathname: resort.live_Cam }} className='details-web' style={{textDecoration: 'none'}} target="_blank"> <img src={vid} className='iconhelp' alt="video camera"/> {resort.name} Live WebCam </Link>
          </div>
          </div>
        </div>
      </section>
    );
  };
};

export default SingleResort;
