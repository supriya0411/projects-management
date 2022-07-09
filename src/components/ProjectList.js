import React from "react";
import { Button } from "react-bootstrap";

const ProjectList = ({ allProjects, deleteProject }) => {
  return (
    <table className="table table-striped p-12">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Start Date</th>
          <th scope="col">End Date</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {allProjects.map((project, i) => (
          <tr key={i}>
            <td>{project.Title}</td>
            <td>{project.StartDate}</td>
            <td>{project.EndDate}</td>
            <td>
              <Button
                variant="primary"
                onClick={() => deleteProject(project.Id)}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default ProjectList;
