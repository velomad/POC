import React from "react";

const TextInput = ({
  label,
  type,
  placeholder,
  name,
  value,
  onChange,
  isDisabled,
  error,
}) => {
  return (
    <div className="space-y-1 ">
      <div>
        <label className="capitalize">{label}</label>
      </div>
      <input
        className="border-2 rounded-md w-60 p-1.5 capitalize focus:outline-none"
        type={type}
        placeholder={placeholder}
      />
      <div className="capitalize text-sm text-red-500">this is error</div>
    </div>
  );
};

export default TextInput;
