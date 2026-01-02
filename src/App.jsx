import React from "react";
import {
  Route,
  createHashRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Homepage from "./Pages/Homepage";
import JobsPage from "./Pages/JobsPage";
import NotFound from "./Pages/NotFound";
import AddJobPage from "./Pages/AddJobPage";
import EditJobPage from "./Pages/EditJobPage";
import JobPage, { jobLoader } from "./Pages/JobPage";

const App = () => {
  const API = import.meta.env.VITE_API_URL || "/api";
  //Add new Job
  const addJob = async (newJob) => {
    const res = await fetch(`${API}/jobs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    console.log(res);
    return;
  };

  //DeleteJob
  const deleteJob = async (id) => {
    const res = await fetch(`${API}/jobs/${id}`, {
      method: "DELETE",
    });
    console.log(res);
  };
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJobPage addJobSumit={addJob} />} />
        <Route
          path="/edit-job/:id"
          element={<EditJobPage />}
          loader={jobLoader}
        />
        <Route
          path="/jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />

        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
