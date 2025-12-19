import { useNavigate } from "react-router-dom";
import "../styles/LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="title">EMPLOYEE REVIEW SYSTEM</h1>

      <div className="row">
        <div>
          <h3>ADD EMPLOYEE</h3>
        </div>
        <button onClick={() => navigate("/add-employee")}>Add</button>
      </div>

      <div className="row">
        <div>
          <h3>ADD EMPLOYEE REVIEW</h3>
        </div>
        <button onClick={() => navigate("/add-review")}>Add</button>
      </div>

      <div className="row">
        <div>
          <h3>REVIEWS</h3>
        </div>
        <button onClick={() => navigate("/view-reviews")}>View</button>
      </div>
    </div>
  );
}

export default LandingPage;
