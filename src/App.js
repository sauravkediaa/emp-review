import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddEmployee from "./pages/AddEmployee";
import AddReview from "./pages/AddReview";
import ViewReviews from "./pages/ViewReviews";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        {/* <Route path="/" element={<LandingPage />} /> */}
        <Route path="/add-employee" element={<AddEmployee />} />
        <Route path="/add-review" element={<AddReview />} />
        {/* <Route path="/view-reviews" element={<ViewReviews />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
