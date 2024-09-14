import React from "react";
import './JobFilter.css'; // Assuming you're using external CSS

const JobFilter = () => {
  return (
    <div className="job-filter-container">
      <header className="header">
        <h1>116 Opportunities to Build the Future of Interactive Entertainment</h1>
        <div className="tab-menu">
          <button className="tab active">Jobs</button>
          <button className="tab">Companies</button>
        </div>
      </header>

      <div className="filter-section">
        <h2>Filter jobs by skills and more</h2>
        <div className="filter-grid">
          <div className="filter-item">
            <label>Roles</label>
            <input type="text" placeholder="Enter roles" />
          </div>

          <div className="filter-item">
            <label>Skills</label>
            <input type="text" placeholder="Enter skills" />
          </div>

          <div className="filter-item">
            <label>Location</label>
            <input type="text" placeholder="Enter locations" />
          </div>

          <div className="filter-item">
            <label>Company Stage</label>
            <select>
              <option>Select...</option>
              {/* Add your options here */}
            </select>
          </div>

          <div className="filter-item">
            <label>Industry</label>
            <input type="text" placeholder="Enter industries" />
          </div>

          <div className="filter-item">
            <label>Salary</label>
            <select>
              <option>Select...</option>
              {/* Add your options here */}
            </select>
          </div>

          <div className="filter-options">
            <label>
              <input type="checkbox" />
              Remote jobs only
            </label>
            <label>
              <input type="checkbox" />
              Internships only
            </label>
            <div className="posted-anytime">
              Posted <span>anytime ▼</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobFilter;