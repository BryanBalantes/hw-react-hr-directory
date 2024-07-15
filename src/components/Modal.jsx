/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import DataContext from "../context/DataContext";
import "../layout/style/Modal.css";

const Modal = ({ closeModal, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      name: "",
      email: "",
      role: "",
      emergencyContactPerson: "",
      emergencyContactNumber: "",
    }
  );
  
  const [errors, setErrors] = useState({});

  const { submit } = useContext(DataContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
    // Clear error message when user starts typing
    setErrors({
      ...errors,
      [name]: "",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formState);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Simulate successful submission
      alert("Form submitted successfully!");
      submit(formState);
      closeModal();
    }
  };

  const validateForm = (data) => {
    const errors = {};

    // Basic validation
    if (!data.name) {
      errors.name = "Name is required";
    } else if (/\d/.test(data.name)) {
      errors.name = "Input should not contain numbers.";
    }
    if (!data.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Invalid email address";
    }
    if (!data.role || data.role.length < 3) {
      errors.role = "Role must be at least 3 characters";
    } else if (/\d/.test(data.role)) {
      errors.role = "Input should not contain numbers.";
    }
    if (!data.emergencyContactPerson) {
      errors.emergencyContactPerson = "Emergency contact person is required";
    } else if (/\d/.test(data.emergencyContactPerson)) {
      errors.emergencyContactPerson = "Input should not contain numbers.";
    }
    if (!data.emergencyContactNumber) {
      errors.emergencyContactNumber = "Emergency contact number is required";
    } else if (!/^\d{11}$/.test(data.emergencyContactNumber)) {
      errors.emergencyContactNumber = "Invalid phone number";
    }

    return errors;
  };

  return (
    <>
      <div
        className="modal-container"
        onClick={(e) => {
          if (e.target.className === "modal-container") closeModal();
        }}
      >
        <div className="modal">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="role">Role</label>
              <input
                type="text"
                name="role"
                value={formState.role}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="emergencyContactPerson">
                Emergency Contact Person:
              </label>
              <input
                type="text"
                name="emergencyContactPerson"
                value={formState.emergencyContactPerson}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="emergencyContactNumber">
                Emergency Contact Number:
              </label>
              <input
                type="text"
                name="emergencyContactNumber"
                value={formState.emergencyContactNumber}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
      ;
    </>
  );
};

export default Modal;
