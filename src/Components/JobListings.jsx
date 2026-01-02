import React from "react";
import { useState, useEffect } from "react";
import JobListing from "./JobListing";
import Spinner from "./Spinner";
const JobListings = ({ isHome = false, searchQuery = "" }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [debouncedQuery, setDebouncedQuery] = useState(searchQuery);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (err) {
        console.log("Error fetcing data", err);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, [isHome]);

  useEffect(() => {
    const t = setTimeout(() => setDebouncedQuery(searchQuery.trim()), 250);
    return () => clearTimeout(t);
  }, [searchQuery]);
  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? "Recent Job" : "Browse Jobs"}
          </h2>

          {loading ? (
            <Spinner loading={loading} />
          ) : (
            (() => {
              // if there's a search, filter jobs by title, company, location, or type
              const list = debouncedQuery
                ? jobs.filter((j) => {
                    const q = debouncedQuery.toLowerCase();
                    return (
                      (j.title && j.title.toLowerCase().includes(q)) ||
                      (j.company &&
                        j.company.name &&
                        j.company.name.toLowerCase().includes(q)) ||
                      (j.location && j.location.toLowerCase().includes(q)) ||
                      (j.type && j.type.toLowerCase().includes(q))
                    );
                  })
                : jobs;

              if (!list.length) {
                return (
                  <div className="text-center py-12 text-gray-600">
                    No jobs found.
                  </div>
                );
              }

              return (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                  {list.map((job) => (
                    <JobListing key={job.id} job={job} />
                  ))}
                </div>
              );
            })()
          )}
        </div>
      </section>
    </>
  );
};

export default JobListings;
