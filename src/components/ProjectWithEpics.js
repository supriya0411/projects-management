import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Epics = (props) => {
  return (
    <div className="py-4">
      {Array.from(Array(props.epicCount)).map((c, index) => {
        return (
          <div className="d-flex flex-col gap-4 py-2">
            <input key={index} type="text"></input>
            <select value="Priority" placeholder="Select Priority">
              <option value="Priority">Select Priority</option>
              <option value="Orange">High</option>
              <option value="Radish">low</option>
              <option value="Cherry">Medium</option>
            </select>
            <Button
              variant="danger"
              onClick={() => {
                // setEpicCount(epicCount + 1);
              }}
            >
              Delete
            </Button>
          </div>
        );
      })}
    </div>
  );
};

const ProjectWithEpics = ({ project }) => {
  const [epicCount, setEpicCount] = useState(0);
  return (
    <div className="m-4">
      <div className="d-flex flex-row">
        <h1>{project.Title}</h1>
        <Button
          className="m-2"
          variant="primary"
          onClick={() => {
            setEpicCount(epicCount + 1);
          }}
        >
          Add Epic
        </Button>
      </div>
      <Epics epicCount={epicCount} />
      <hr />
    </div>
  );
};
export default ProjectWithEpics;
