import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import ProjectWithEpics from "../components/ProjectWithEpics";

const Epics = () => {
  useEffect(() => {
    document.title = "Epics";
  });

  const [allProjects, setAllProjects] = useState([]);

  useEffect(() => {
    const projects = JSON.parse(localStorage.getItem("allProjects"));
    if (projects) {
      setAllProjects(projects);
    }
  }, []);

  console.log("allProjects", allProjects);
  return (
    <Layout>
      <h1 className="m-4">Epics</h1>
      {allProjects.map((project) => (
        <ProjectWithEpics project={project} />
      ))}
    </Layout>
  );
};
export default Epics;
