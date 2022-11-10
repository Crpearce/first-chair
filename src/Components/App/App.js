import React, { Component } from 'react'
import Navigation from '../Navigation/Navigation';
import Resorts from '../Resorts/Resorts';
import SingleResort from '../SingleResort/SingleResort';
import { Route } from 'react-router-dom';
import { fetchAllResorts } from '../../api';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { 
        resorts: [],
        error: '',
     };
  };

  componentDidMount = async () => {
    try {
      const resortList = await fetchAllResorts();
      const data = await resortList.json();
      this.setState({ resorts: data.resorts });
    } catch {
      this.setState({ error: "Sorry, we are having trouble loading the data. Please try again or check back later!"});
    };
  };

  displayResortDetails = (id) => {
    const currentResort = this.state.resorts.find(resort => resort.id === id)
    this.setState({ singleResort: currentResort })
  }

  render() { 
    return ( 
      <main className='App'>
        {/* <Route path='/' render={() => <Navigation />} /> */}
        <Route exact path='/' render={() => <Resorts resorts={this.state.resorts} />} />
        {/* <Route path='/:resortId' render={({ match }) => <SingleResort resortId={match.params.resortId}/>} /> */}
      </main>
     )
  };
};
 
export default App;