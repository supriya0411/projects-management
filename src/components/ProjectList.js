import React from "react";

const ProjectList = ({ allProjects }) => {
  return (
    <table className="table table-striped p-12">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Start Date</th>
          <th scope="col">End Date</th>
        </tr>
      </thead>
      <tbody>
        {allProjects.map((project) => (
          <tr>
            <td>{project.Title}</td>
            <td>{project.StartDate}</td>
            <td>{project.EndDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default ProjectList;
