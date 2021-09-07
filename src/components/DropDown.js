import React from "react";

const DropDown = ({ label, options }) => {
  return (
    <div className="space-y-1 ">
      <div>
        <label>{label}</label>
      </div>
      <select className="border-2 h-10 w-96 p-1.5">
        {options.map((el, index) => (
          <option key={index}>{el}</option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
