import { useState } from "react";
import "../styles/AddEmployee.css";

const managerOptions = ["Aman", "Vishwanath", "Anand"];
const roleOptions = ["Manager", "Developer", "Tester", "HR"];
const departmentOptions = ["Engineering", "HR", "Sales", "Finance"];

function AddEmployee() {
  const [form, setForm] = useState({
    manager: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "",
    department: "",
    dateOfJoining: "",
    status: "Active",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    setSuccess(""); // clear success when user edits again
  }

  function validate() {
    const newErrors = {};

    if (!form.manager) {
      newErrors.manager = "Please select a manager";
    }

    if (!form.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!form.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(form.email)) {
        newErrors.email = "Please enter a valid email";
      }
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else {
      const phonePattern = /^\d{10}$/; // 10 digits
      if (!phonePattern.test(form.phone)) {
        newErrors.phone = "Phone must be 10 digits";
      }
    }

    if (!form.role) {
      newErrors.role = "Please select a role";
    }

    if (!form.department) {
      newErrors.department = "Please select a department";
    }

    if (!form.dateOfJoining) {
      newErrors.dateOfJoining = "Please select date of joining";
    }

    if (!form.status) {
      newErrors.status = "Please choose status";
    }

    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
      return;
    }

    // no errors
    setErrors({});
    setSuccess("Employee added successfully");

    // here you can send `form` to API / localStorage
    console.log("Employee data:", form);
  }

  function handleCancel() {
    setForm({
      manager: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      role: "",
      department: "",
      dateOfJoining: "",
      status: "Active",
    });
    setErrors({});
    setSuccess("");
  }

  return (
    <div className="add-employee-page">
      <h2 className="add-employee-title">Add Employee</h2>

      <form className="add-employee-form" onSubmit={handleSubmit}>
        {/* Manager */}
        <div className="form-field">
          <label className="form-label">Manager</label>
          <select
            name="manager"
            className="form-input"
            value={form.manager}
            onChange={handleChange}
          >
            <option value="">Select manager</option>
            {managerOptions.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
          {errors.manager && <p className="error-text">{errors.manager}</p>}
        </div>

        {/* First Name */}
        <div className="form-field">
          <label className="form-label">
            First Name <span className="required">*</span>
          </label>
          <input
            type="text"
            name="firstName"
            className="form-input"
            value={form.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <p className="error-text">{errors.firstName}</p>}
        </div>

        {/* Last Name */}
        <div className="form-field">
          <label className="form-label">
            Last Name <span className="required">*</span>
          </label>
          <input
            type="text"
            name="lastName"
            className="form-input"
            value={form.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <p className="error-text">{errors.lastName}</p>}
        </div>

        {/* Email */}
        <div className="form-field">
          <label className="form-label">
            Email <span className="required">*</span>
          </label>
          <input
            type="email"
            name="email"
            className="form-input"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div className="form-field">
          <label className="form-label">Phone</label>
          <input
            type="tel"
            name="phone"
            className="form-input"
            value={form.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="error-text">{errors.phone}</p>}
        </div>

        {/* Role */}
        <div className="form-field">
          <label className="form-label">Role</label>
          <select
            name="role"
            className="form-input"
            value={form.role}
            onChange={handleChange}
          >
            <option value="">Select role</option>
            {roleOptions.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
          {errors.role && <p className="error-text">{errors.role}</p>}
        </div>

        {/* Department */}
        <div className="form-field">
          <label className="form-label">Department</label>
          <select
            name="department"
            className="form-input"
            value={form.department}
            onChange={handleChange}
          >
            <option value="">Select department</option>
            {departmentOptions.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
          {errors.department && (
            <p className="error-text">{errors.department}</p>
          )}
        </div>

        {/* Date of Joining */}
        <div className="form-field">
          <label className="form-label">Date of Joining</label>
          <input
            type="date"
            name="dateOfJoining"
            className="form-input"
            value={form.dateOfJoining}
            onChange={handleChange}
          />
          {errors.dateOfJoining && (
            <p className="error-text">{errors.dateOfJoining}</p>
          )}
        </div>

        {/* Status */}
        <div className="form-field">
          <label className="form-label">Status</label>
          <div className="status-group">
            <label>
              <input
                type="radio"
                name="status"
                value="Active"
                checked={form.status === "Active"}
                onChange={handleChange}
              />{" "}
              Active
            </label>
            <label>
              <input
                type="radio"
                name="status"
                value="Inactive"
                checked={form.status === "Inactive"}
                onChange={handleChange}
              />{" "}
              Inactive
            </label>
          </div>
          {errors.status && <p className="error-text">{errors.status}</p>}
        </div>

        {/* Buttons */}
        <div className="form-actions">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
        {success && <p className="success-text">{success}</p>}
      </form>
    </div>
  );
}

export default AddEmployee;
