import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Button } from "react-bootstrap";
import ProjectWithEpics from "../components/ProjectWithEpics";

const Epics = () => {
  useEffect(() => {
    document.title = "Epics";
  });

  const [allProjects, setAllProjects] = useState([]);

  const saveAllProjects = () => {
    setAllProjects(allProjects);
    localStorage.setItem("allProjects", JSON.stringify(allProjects));
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

  useEffect(() => {
    const projects = JSON.parse(localStorage.getItem("allProjects"));
    if (projects) {
      setAllProjects(projects);
    }
  }, []);

  console.log("allProjects", allProjects);
  return (
    <Layout>
      <div className="d-flex justify-content-between">
        <h1 className="m-4">Epics</h1>
        <Button
          className="m-4"
          variant="primary"
          onClick={() => {
            saveAllProjects();
          }}
        >
          Save All Details
        </Button>
      </div>
      {allProjects.map((project) => (
        <ProjectWithEpics project={project} updateProject={updateProject} />
      ))}
    </Layout>
  );
};
export default Epics;
