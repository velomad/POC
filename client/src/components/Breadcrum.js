import React from "react";

const Breadcrum = () => {
  return (
    <div>
      <div
        className="flex space-x-4 p-1"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <div className="underline cursor-pointer text-blue-500">Front Desk</div>
        <div>/</div>
        <div>Patient Registration</div>
      </div>
    </div>
  );
};

export default Breadcrum;
