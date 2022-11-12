import React, { Component } from 'react'
import Navigation from '../Navigation/Navigation';
import Resorts from '../Resorts/Resorts';
import SingleResort from '../SingleResort/SingleResort';
import About from '../About/About';
import { Route, Switch } from 'react-router-dom';
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
    this.setState({ searchedPass: input })
  };

  render() { 
    return ( 
      <main className='App'>
        <Navigation searchPass={this.searchPass} />
          <Switch>
            <Route exact path='/' render={() => <Resorts resorts={this.state.resorts} searchedPass={this.state.searchedPass} />} />
            <Route path="/about" render={() => <About /> } />
            <Route exact path='/:resortId' render={({ match }) => <SingleResort resortId={match.params.resortId}/>} />
          </Switch>
      </main>
     )
  };
};
 
export default App;