import React, { useState } from "react";
import { Button } from "react-bootstrap";

const ProjectEpics = ({ project, epics, setProjectEpics, updateProject }) => {
  const handleEpicChange = (changedEpic) => {
    setProjectEpics((epics) =>
      epics.map((obj) => {
        if (obj.Id === changedEpic.Id) {
          return changedEpic;
        }
        return obj;
      })
    );
    updateProject({ ...project, epics: epics });
  };

  return (
    <div className="py-4">
      {epics.map((epic, index) => {
        return (
          <div className="d-flex flex-col gap-4 py-2" key={`epic-${index}`}>
            <input
              type="text"
              name="Name"
              maxLength="100"
              required
              value={epic.Name}
              onChange={(e) =>
                handleEpicChange({ ...epic, Name: e.target.value })
              }
            />
            <select
              value={epic.Priority}
              selected={epic.Priority}
              onChange={(e) =>
                handleEpicChange({ ...epic, Priority: e.target.value })
              }
            >
              <option value="">Select Priority</option>
              <option value="High">High</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
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

const ProjectWithEpics = ({ project, updateProject }) => {
  const [projectEpics, setProjectEpics] = useState(project.epics || []);

  const addEpic = () => {
    console.log("Add Epic", project.epics);
    setProjectEpics([
      ...projectEpics,
      { Name: "", Priority: "", Id: Math.random().toString(16).slice(2) },
    ]);
  };

  return (
    <div className="m-4">
      <div className="d-flex flex-row">
        <h1>{project.Title}</h1>
        <Button
          className="m-2"
          variant="primary"
          onClick={() => {
            addEpic();
          }}
        >
          Add Epic
        </Button>
      </div>
      <ProjectEpics
        project={project}
        epics={projectEpics}
        setProjectEpics={setProjectEpics}
        updateProject={updateProject}
      />
      <hr />
    </div>
  );
};
export default ProjectWithEpics;
