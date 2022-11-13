import React, { Component } from "react";
import Navigation from "../Navigation/Navigation";
import Resorts from "../Resorts/Resorts";
import SingleResort from "../SingleResort/SingleResort";
import About from "../About/About";
import Runs from "../Runs/Runs";
import Form from "../Form/Form";
import { Route, Switch } from "react-router-dom";
import { fetchAllResorts, fetchAllRuns } from "../../api";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      resorts: [],
      runs: [],
      searchedPass: "",
      error: "",
    };
  }

  componentDidMount = async () => {
    try {
      const resortList = await fetchAllResorts();
      const data = await resortList.json();
      const runList = await fetchAllRuns();
      const runData = await runList.json();
      this.setState({ resorts: data.resorts });
      this.setState({ runs: runData.runs });
    } catch {
      this.setState({
        error:
          "Sorry, we are having trouble loading the data. Please try again or check back later!",
      });
    }
  };

  addRun = (newRun) => {
    try {
      const response = fetch(
        "https://first-chair-api.herokuapp.com/api/v1/runs",
        {
          method: "POST",
          body: JSON.stringify(newRun),
          headers: {
            "Content-Type": "application/JSON",
          },
        }
      );
      if (!response.ok) {
        throw new Error(response.status);
      }
      const data = response.json();
      return data;
    } catch (error) {
      this.setState({ error: error.message });
    }
    this.setState({ runs: [...this.state.runs, newRun] });
  };

  deleteRun = (id) => {
    const deletedRun = this.state.runs.filter(run => run.id !== id)
    try {
      const response = fetch(`https://first-chair-api.herokuapp.com/api/v1/runs/${id}`, {
        'method': 'DELETE'
      });
      if (!response.ok) {
        console.log(response.status)
        throw new Error(response.status)
      }
      const newData = response.json();
      console.log('newData', newData)
      return newData;
    }
    catch (error) {
      console.log(error.message)
  };
    this.setState({runs: deletedRun})
  }

  searchPass = (input) => {
    this.setState({ searchedPass: input });
  };

  render() {
    return (
      <main className="App">
        <Navigation searchPass={this.searchPass} />
        {this.state.error && (
          <h2 className="error">{this.state.errorMessage}</h2>
        )}
        <Switch>
          <Route exact path="/" render={() => (
              <Resorts
                resorts={this.state.resorts}
                searchedPass={this.state.searchedPass}
              />
            )}
          />
          <Route path="/about" render={() => <About />} />
          <Route
            exact path="/ticklist" render={() => {
              return (
                <div>
                  <Form addRun={this.addRun} />
                  <Runs allRuns={this.state.runs} deleteRun={this.deleteRun} />
                </div>
              )
            }}
          />
          <Route
            exact path="/:resortId" render={({ match }) => (
              <SingleResort resortId={match.params.resortId}/>)}
          />
        </Switch>
      </main>
    );
  };
};

export default App;
