import React from "react";
import RunCard from "../RunCard/RunCard";
import PropTypes from "prop-types";
import "./Runs.css";

function Runs({ allRuns, deleteRun }) {
  const runCards = allRuns.map((run) => {
    return (
      <RunCard
        id={run.id}
        key={run.id}
        name={run.name}
        runName={run.runName}
        difficulty={run.difficulty}
        deleteRun={deleteRun}
      />
    );
  });

  return <div className="runs-container">{runCards}</div>;
}

export default Runs;

Runs.propTypes = {
  allRuns: PropTypes.arrayOf(PropTypes.object),
  deleteRun: PropTypes.func.isRequired,
};
