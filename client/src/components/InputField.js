import React from "react";

const InputField = ({ label, type, placeholder }) => {
  return (
    <div className="space-y-1">
      <div>
        <label className="capitalize">{label}</label>
      </div>
      <input
        className="border-2 w-full p-1.5 capitalize focus:outline-none"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
