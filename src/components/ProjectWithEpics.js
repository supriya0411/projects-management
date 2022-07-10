import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { DeleteIcon } from "../components/icons/Icons";
import InputContainer from "../components/InputContainer";

const ProjectEpics = ({
  project,
  projectEpics,
  setProjectEpics,
  updateProject,
}) => {
  const handleEpicChange = (changedEpic) => {
    const allEpics = projectEpics.map((obj) => {
      if (obj.Id === changedEpic.Id) {
        return changedEpic;
      }
      return obj;
    });
    setProjectEpics(allEpics);
    updateProject({ ...project, epics: allEpics });
  };

  const handleEpicDelete = (epicId) => {
    const allProjectEpics = projectEpics.filter((item) => item.Id !== epicId);
    setProjectEpics(allProjectEpics);
    updateProject({ ...project, epics: allProjectEpics });
  };

  return (
    <div className="py-4">
      {projectEpics.map((epic, index) => {
        return (
          <div className="d-flex flex-col gap-4 py-2" key={`epic-${index}`}>
            <InputContainer>
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
              {epic.Name === "" && (
                <span className="text-danger">{"Cannot be empty"}</span>
              )}
            </InputContainer>
            <InputContainer>
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
            </InputContainer>
            <InputContainer>
              <div className="m-1" onClick={() => handleEpicDelete(epic.Id)}>
                <DeleteIcon />
              </div>
            </InputContainer>
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
        projectEpics={projectEpics}
        setProjectEpics={setProjectEpics}
        updateProject={updateProject}
      />
      <hr />
    </div>
  );
};
export default ProjectWithEpics;
