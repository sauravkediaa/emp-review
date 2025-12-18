import { useEffect, useState } from "react";
import { getReviews } from "../utils/storage";
import "../styles/ViewReviews.css";

function ViewReviews() {
  const [reviews, setReviews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [managerFilter, setManagerFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const PAGE_SIZE = 5;

  // Load reviews on mount
  useEffect(() => {
    const data = getReviews();
    setReviews(data);
  }, []);

  // Get unique managers for dropdown
  const managers = [...new Set(reviews.map((r) => r.manager))];

  // Search + filter logic
  const filteredReviews = reviews.filter((review) => {
    const matchesSearch =
      review.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.manager.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesManager = !managerFilter || review.manager === managerFilter;

    return matchesSearch && matchesManager;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredReviews.length / PAGE_SIZE);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const paginatedReviews = filteredReviews.slice(
    startIndex,
    startIndex + PAGE_SIZE
  );

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, managerFilter]);

  return (
    <div className="view-reviews-page">
      <h1 className="view-reviews-title">View Reviews</h1>

      {/* Search + Filter Bar */}
      <div className="filters-bar">
        <select
          value={managerFilter}
          onChange={(e) => setManagerFilter(e.target.value)}
        >
          <option value="">All Managers</option>
          {managers.map((manager, index) => (
            <option key={index} value={manager}>
              {manager}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search by employee or manager"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Reviews Table */}
      <table className="reviews-table">
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Manager</th>
            <th>Date</th>
            <th>Rating</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {paginatedReviews.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No reviews found
              </td>
            </tr>
          ) : (
            paginatedReviews.map((review, index) => (
              <tr key={index}>
                <td>{review.employeeName}</td>
                <td>{review.manager}</td>
                <td>{review.date}</td>
                <td>
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </td>
                <td>{review.comments}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
          >
            Prev
          </button>

          <span>
            Page {currentPage} of {totalPages}
          </span>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            Next
          </button>
        </div>
      )}

      {/* Notes (as per wireframe) */}
      <div className="notes">
        <p>Note: Manager can select his name from the filter itself</p>
        <p>Note: Search works based on both manager name and employee name</p>
      </div>
    </div>
  );
}

export default ViewReviews;
