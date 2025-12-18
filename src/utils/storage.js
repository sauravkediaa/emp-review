//centralised database queries for all the modules

const EMPLOYEES_KEY = "employees";
const REVIEWS_KEY = "reviews";

/* ========== EMPLOYEES ========== */
export const getEmployees = () => {
  return JSON.parse(localStorage.getItem(EMPLOYEES_KEY)) || [];
};

export const addEmployee = (employee) => {
  const employees = getEmployees();
  localStorage.setItem(EMPLOYEES_KEY, JSON.stringify([...employees, employee]));
};

/* ========== REVIEWS ========== */
export const getReviews = () => {
  return JSON.parse(localStorage.getItem(REVIEWS_KEY)) || [];
};

export const addReview = (review) => {
  const reviews = getReviews();
  localStorage.setItem(REVIEWS_KEY, JSON.stringify([...reviews, review]));
};
