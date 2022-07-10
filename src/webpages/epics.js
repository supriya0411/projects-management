import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Button } from "react-bootstrap";
import ProjectWithEpics from "../components/ProjectWithEpics";

const Epics = () => {
  useEffect(() => {
    document.title = "Epics";
  });

  const [allProjects, setAllProjects] = useState([]);
  const [saveDisabled, setSaveDisabled] = useState(true);

  // Local Storage save
  const localStorageSave = (projects) => {
    localStorage.setItem("allProjects", JSON.stringify(projects));
  };

  // Local Storage read
  const localStorageGet = () => {
    return JSON.parse(localStorage.getItem("allProjects"));
  };

  const saveAllProjects = () => {
    setAllProjects(allProjects);
    localStorageSave(allProjects);
    setSaveDisabled(true);
  };

  const updateProject = (updatedProject) => {
    setAllProjects((projects) =>
      projects.map((obj) => {
        if (obj.Id === updatedProject.Id) {
          return updatedProject;
        }
        return obj;
      })
    );
  };

  // Validate Epics name not empty and disable save all project button
  useEffect(() => {
    allProjects.forEach((project) => {
      project.epics &&
        project.epics.forEach((epic) => {
          if (epic.Name === "") {
            setSaveDisabled(true);
          }
        });
    });
  }, [allProjects]);

  useEffect(() => {
    const projects = localStorageGet();
    if (projects) {
      setAllProjects(projects);
    }
  }, []);

  return (
    <Layout>
      <div className="d-flex justify-content-between">
        <h1 className="m-4">Epics</h1>
        <Button
          className="m-4"
          variant="primary"
          disabled={saveDisabled}
          onClick={() => {
            saveAllProjects();
          }}
        >
          Save All Details
        </Button>
      </div>
      {allProjects.map((project, index) => (
        <ProjectWithEpics
          project={project}
          updateProject={updateProject}
          setSaveDisabled={setSaveDisabled}
          key={`project-epic-${index}`}
        />
      ))}
    </Layout>
  );
};
export default Epics;
