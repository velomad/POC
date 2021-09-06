import React from "react";

const InputField = ({ label, type, placeholder }) => {
  return (
    <div className="space-y-1">
      <div>
        <label className="capitalize">{label}</label>
      </div>
      <input
        className="border-2 w-96 p-1.5 capitalize"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
