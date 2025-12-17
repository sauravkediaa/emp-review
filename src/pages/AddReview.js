import { useState } from "react";
import "../styles/AddReview.css";
import StarRating from "../components/StarRating.js";

function AddReview() {
  const [rating, setRating] = useState(0);
  const [employee, setEmployee] = useState("");
  const [manager, setManager] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");

  const employees = ["empone", "emptwo", "empthree"];
  const managers = ["Aman", "Malathy", "Aditya"];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!employee || !manager || !date || !rating || !message) {
      alert("Please fill all the required");
      return;
    }
    alert("Form Submitted");
    setRating(0);
    setMessage("");
    setManager("");
    setEmployee("");
    setDate("");
  };
  return (
    <>
      <h1 className="title">Add Review</h1>
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          {/* Man */}
          <div className="box box1">
            <label htmlFor="manager" className="big">
              Manager
            </label>
            <select
              name="manager"
              id="manager"
              className="bigg"
              value={manager}
              onChange={(e) => setManager(e.target.value)}
              required
            >
              <option value="">Select</option>
              {managers.map((managerName, index) => (
                <option key={index} value={managerName}>
                  {managerName}
                </option>
              ))}
            </select>
          </div>
          {/* emp */}
          <div className="box box2">
            <label htmlFor="employee" className="big">
              Employee
            </label>
            <select
              name="employee"
              id="employee"
              className="bigg"
              value={employee}
              onChange={(e) => setEmployee(e.target.value)}
              required
            >
              <option value="">Select</option>
              {employees.map((empName, index) => (
                <option key={index} value={empName}>
                  {empName}
                </option>
              ))}
            </select>
          </div>
          {/* star */}
          <div className="box box3">
            <label htmlFor="" className="big">
              Rating
            </label>
            <StarRating rating={rating} setRating={setRating} />
          </div>
          {/* date */}
          <div className="box box4">
            <label htmlFor="" className="big">
              Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          {/* text */}
          <div className="box box5">
            <label htmlFor="" className="big">
              Comments
            </label>
            <textarea
              type="textarea"
              className="textbox bigg"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          {/* submit */}
          <div>
            <input type="submit" name="submit" id="submit" />
          </div>
        </form>
      </div>
    </>
  );
}

export default AddReview;
