import React from "react";
import { ButtonControls, Dropdown, SearchableDropdown } from "../reusables";

const Components = () => {
  return (
    <div className="space-y-6 p-4">
      <div>
        <ButtonControls exclude={["search", "save"]} />
      </div>
      <hr />
      <div>
        <Dropdown
          options={[
            { value: "A", label: "A" },
            { value: "B", label: "B" },
            { value: "C", label: "C" },
          ]}
          label="credit limit"
          searchable={true}
        />
      </div>
      <hr />
      <div>
        <Dropdown
          options={[
            { value: "A", label: "A" },
            { value: "B", label: "B" },
            { value: "C", label: "C" },
          ]}
          label="credit limit"
        />
      </div>
    </div>
  );
};

export default Components;
