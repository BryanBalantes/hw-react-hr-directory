/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import "../style/FormPage.css";
import { useContext, useState } from "react";
import DataContext from "../../context/DataContext";

const FormPage = () => {
  const { submit } = useContext(DataContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    emergencyContactPerson: "",
    emergencyContactNumber: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
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
    const newErrors = validateForm(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Simulate successful submission
      alert("Form submitted successfully!");
      submit(formData);
      setFormData({
        name: "",
        email: "",
        role: "",
        emergencyContactPerson: "",
        emergencyContactNumber: "",
      });
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
    <div className="app">
      <form>
        <h2>registration form</h2>
        <div className="formInput">
          <label id="label">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && (
            <span className="error" id="errorStyle">
              {errors.name}
            </span>
          )}
        </div>
        <div className="formInput">
          <label id="label">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="examples@gmail.com"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <span className="error" id="errorStyle">
              {errors.email}
            </span>
          )}
        </div>
        <div className="formInput">
          <label id="label">Role:</label>
          <input
            type="text"
            name="role"
            placeholder="manager"
            value={formData.role}
            onChange={handleChange}
          />
          {errors.role && (
            <span className="error" id="errorStyle">
              {errors.role}
            </span>
          )}
        </div>
        <div className="formInput">
          <label id="label">Emergency Contact Person:</label>
          <input
            type="text"
            name="emergencyContactPerson"
            placeholder="John Doe"
            value={formData.emergencyContactPerson}
            onChange={handleChange}
          />
          {errors.emergencyContactPerson && (
            <span className="error" id="errorStyle">
              {errors.emergencyContactPerson}
            </span>
          )}
        </div>
        <div className="formInput">
          <label id="label">Emergency Contact Number:</label>
          <input
            type="text"
            name="emergencyContactNumber"
            placeholder="09123456789"
            value={formData.emergencyContactNumber}
            onChange={handleChange}
          />
          {errors.emergencyContactNumber && (
            <span className="error" id="errorStyle">
              {errors.emergencyContactNumber}
            </span>
          )}
        </div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormPage;
