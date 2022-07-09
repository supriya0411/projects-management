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

  const addProject = (newProject) => {
    const projects = [...allProjects, newProject];
    setAllProjects(projects);
    localStorage.setItem("allProjects", JSON.stringify(projects));
  };

  useEffect(() => {
    const projects = JSON.parse(localStorage.getItem("allProjects"));
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
      {allProjects && <ProjectList allProjects={allProjects} />}
    </Layout>
  );
};
export default Projects;
