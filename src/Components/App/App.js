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
        searchedPass: '',
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

  searchPass = (input) => {
    this.setState({ searchedPass: input });
  };
  
  render() { 
    return ( 
      <main className='App'>
        <Route path='/' render={() => <Navigation searchPass={this.searchPass}/>} />
        <Route exact path='/' render={() => <Resorts resorts={this.state.resorts} searchedPass={this.state.searchedPass} />} />
        <Route path='/:resortId' render={({ match }) => <SingleResort resortId={match.params.resortId}/>} />
      </main>
     )
  };
};
 
export default App;