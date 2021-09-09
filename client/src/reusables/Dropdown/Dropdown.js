import React, { useState } from "react";
import PropTypes from "prop-types";
import Select, {components} from "react-select";

const Dropdown = ({ label, options, searchable }) => {
  return (
    <>
      {!searchable ? (
        <div className="space-y-0.5">
          <div>
            <label className="capitalize">{label}</label>
          </div>
          <select className=" border-2 h-10 w-60 focus:outline-none p-1.5">
            <option selected>select</option>
            {options.map((el, index) => (
              <option key={index}>{el.label}</option>
            ))}
          </select>
        </div>
      ) : (
        <div className="w-60">
          <Select options={options} isSearchable={true} isMulti={true} />
        </div>
      )}
    </>
  );
};

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  searchable: PropTypes.bool,
};

export default Dropdown;
