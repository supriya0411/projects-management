import React, { useEffect } from "react";
import Layout from "../components/Layout";

const Projects = () => {
  useEffect(() => {
    document.title = "My Projects";
  });
  return (
    <Layout>
      <h1>Projects</h1>
      <p>Create Project</p>
    </Layout>
  );
};
export default Projects;
