import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./Form.css";


class Form extends Component {
  constructor({ addRun }) {
    super();
    this.state = {
      name: "",
      runName: "",
      difficulty: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  submitNewRun = (event) => {
    event.preventDefault();
    const newRun = {
      id: Date.now(),
      ...this.state,
    };
    this.props.addRun(newRun);
    this.clearInputs();
  };

  clearInputs = () => {
    this.setState({ name: "", runName: "", difficulty: "" });
  };

  render() {
    return (
      <form className="form-container">
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={this.state.name}
          className='form-resort'
          onChange={(event) => this.handleChange(event)}
        />
        <input
          type="text"
          placeholder="Run Name"
          name="runName"
          value={this.state.runName}
          className='form-run'
          onChange={(event) => this.handleChange(event)}
        />
        <input
          type="text"
          placeholder="Run Difficulty"
          name="difficulty"
          value={this.state.difficulty}
          className='form-difficulty'
          onChange={(event) => this.handleChange(event)}
        />
        <button className='add-run-btn' onClick={(event) => this.submitNewRun(event)}>
          Add Run
        </button>
      </form>
    );
  };
};

export default Form;

Form.propTypes = {
    addRun: PropTypes.func.isRequired 
}
