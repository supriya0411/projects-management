import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import ProjectList from "../components/ProjectList";
import AddProject from "../components/AddProject";
import { Button } from "react-bootstrap";

const Projects = () => {
  useEffect(() => {
    document.title = "Projects";
  });

  const [openPopup, setOpenPopup] = useState(false);
  const [allProjects, setAllProjects] = useState([]);

  const handleClose = () => {
    setOpenPopup(false);
  };

  // Local Storage save
  const localStorageSave = (projects) => {
    localStorage.setItem("allProjects", JSON.stringify(projects));
  };

  // Local Storage read
  const localStorageGet = () => {
    return JSON.parse(localStorage.getItem("allProjects"));
  };

  const addProject = (newProject) => {
    newProject.Id = allProjects.length + 1;
    const projects = [...allProjects, newProject];
    setAllProjects(projects);
    localStorageSave(projects);
  };

  const deleteProject = (projectId) => {
    const projects = allProjects.filter((item) => item.Id !== projectId);
    setAllProjects(projects);
    localStorageSave(projects);
  };

  useEffect(() => {
    const projects = localStorageGet();
    if (projects) {
      setAllProjects(projects);
    }
  }, []);

  return (
    <Layout>
      <h1 className="m-2">Projects</h1>
      <Button
        className="m-2"
        variant="primary"
        onClick={() => setOpenPopup(true)}
      >
        Add New Project
      </Button>
      {openPopup && (
        <AddProject
          handleClose={handleClose}
          addProject={addProject}
          openPopup={openPopup}
        />
      )}
      {allProjects && (
        <ProjectList allProjects={allProjects} deleteProject={deleteProject} />
      )}
    </Layout>
  );
};
export default Projects;
