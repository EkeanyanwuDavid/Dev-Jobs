import React, { useState } from "react";
import JobListings from "../Components/JobListings";

const JobsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <section className="bg-blue-50 px-4 py-6">
        <div className="container m-auto px-4 mb-6 max-w-4xl">
          <label className="block text-gray-700 font-medium mb-2">
            Search jobs
          </label>
          <input
            type="text"
            placeholder="Search by title, company, location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border border-gray-500 rounded py-2 px-3"
          />
        </div>

        <JobListings searchQuery={searchQuery} />
      </section>
    </>
  );
};

export default JobsPage;
