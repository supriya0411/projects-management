import React from "react";
import { DeleteCross } from "../components/icons/Icons";

const ProjectList = ({ allProjects, deleteProject }) => {
  return (
    <table className="table table-striped p-12">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Start Date</th>
          <th scope="col">End Date</th>
          <th scope="col" className="text-center">
            Delete
          </th>
        </tr>
      </thead>
      <tbody>
        {allProjects.map((project, i) => (
          <tr key={i}>
            <td>{project.Title}</td>
            <td>{project.StartDate}</td>
            <td>{project.EndDate}</td>
            <td>
              <div
                className="text-center"
                onClick={() => deleteProject(project.Id)}
              >
                <DeleteCross />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default ProjectList;
