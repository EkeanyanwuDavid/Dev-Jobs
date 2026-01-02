import Hero from "../Components/Hero";
import HomeCards from "../Components/HomeCards";
import JobListings from "../Components/JobListings";
import ViewAll from "../Components/ViewAll";
import React from "react";

const Homepage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings isHome={true} />
      <ViewAll />
    </>
  );
};

export default Homepage;
