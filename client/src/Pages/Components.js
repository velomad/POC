import React from "react";
import {
  ButtonControls,
  Dropdown,
  FileUpload,
  SearchableDropdown,
  TextInput,
} from "../reusables";

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
      <hr />
      <div>
        <TextInput label="first name" placeholder="first name" />
      </div>
      <hr />

      <div>
        <FileUpload documentName="photo" />
      </div>
    </div>
  );
};

export default Components;
