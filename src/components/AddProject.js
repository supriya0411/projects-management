import React from "react";
import { Modal, Button } from "react-bootstrap";
import InputContainer from "../components/InputContainer";

const AddProject = ({ openPopup, addProject, handleClose }) => {
  const [formData, setFormData] = React.useState({
    Title: "",
    StartDate: "",
    EndDate: "",
  });
  const [formErrors, setFormErrors] = React.useState({});

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    //Title
    if (!formData.Title) {
      formIsValid = false;
      errors["Title"] = "Cannot be empty";
    }
    //Start Date
    if (formData.StartDate === "") {
      formIsValid = false;
      errors["StartDate"] = "Cannot be empty";
    }
    //End Date
    if (formData.EndDate === "") {
      formIsValid = false;
      errors["EndDate"] = "Cannot be empty";
    }

    setFormErrors(errors);
    return formIsValid;
  };

  const submitForm = () => {
    if (validateForm()) {
      addProject(formData);
      handleClose();
    }
  };

  return (
    <Modal show={openPopup} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Project</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputContainer>
          <label htmlFor="Title">Title*</label>
          <input
            type="text"
            name="Title"
            maxLength="100"
            required
            value={formData.Title}
            onChange={(e) =>
              setFormData({ ...formData, Title: e.target.value })
            }
          />
          <span className="text-danger">{formErrors.Title}</span>
        </InputContainer>

        <InputContainer>
          <label htmlFor="StartDate">Start Date*</label>
          <input
            type="date"
            name="StartDate"
            maxLength="100"
            value={formData.StartDate}
            onChange={(e) =>
              setFormData({ ...formData, StartDate: e.target.value })
            }
          />
          <span className="text-danger">{formErrors.StartDate}</span>
        </InputContainer>

        <InputContainer>
          <label htmlFor="EndDate">End Date*</label>
          <input
            type="date"
            name="EndDate"
            value={formData.EndDate}
            onChange={(e) =>
              setFormData({ ...formData, EndDate: e.target.value })
            }
          />
          <span className="text-danger">{formErrors.EndDate}</span>
        </InputContainer>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={submitForm}>
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default AddProject;
