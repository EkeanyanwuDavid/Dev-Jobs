import React from "react";
import { ClipLoader } from "react-spinners";

const Spinner = ({ loading }) => {
  return (
    <div className="flex justify-center items-center py-12">
      <ClipLoader color="#4338ca" loading={loading} size={60} />
    </div>
  );
};

export default Spinner;
