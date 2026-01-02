import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaMapMarker } from "react-icons/fa";

const JobListing = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = job.description;

  if (!showFullDescription) {
    description = description.substring(0, 90) + "...";
  }
  return (
    <>
      <div className="bg-white rounded-xl shadow-md relative flex flex-col h-full">
        <div className="p-4 flex flex-col h-full">
          <div className="mb-6">
            <div className="text-gray-600 my-2">{job.type}</div>
            <h3 className="text-xl font-bold">{job.title}</h3>
          </div>

          <div className="mb-5">{description}</div>
          <button
            className="self-start text-indigo-500 mb-5 cursor-pointer hover:text-indigo-600"
            onClick={() => setShowFullDescription((prevState) => !prevState)}
          >
            {showFullDescription ? "Less" : "More"}{" "}
          </button>
          <div className="mt-auto">
            <h3 className="text-indigo-500 mb-2">{job.salary} / Year</h3>

            <div className="border border-gray-100 mb-5"></div>

            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4">
              <div className="text-orange-700 mb-3">
                <FaMapMarker className="inline text-lg mb-1 mr-1" />
                {job.location}
              </div>
              <Link
                to={`/jobs/${job.id}`}
                className="h-9 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobListing;
