import React from "react";
import PropTypes from "prop-types";
import "./RunCard.css";

const RunCard = ({ id, name, runName, difficulty, deleteRun }) => {
  return (
    <div className="run-card">
      <h2 className="resort-name">{name}</h2>
      <h3 className="run-name">Run: {runName}</h3>
      <h3 className="run-difficulty">Difficulty: {difficulty}</h3>
      <button className='trash' onClick={() => deleteRun(id)}>🗑</button>
    </div>
  );
};

export default RunCard;

RunCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  runName: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  deleteRun: PropTypes.func,
};
