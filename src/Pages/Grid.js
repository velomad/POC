import React from "react";
import Breadcrum from "../components/Breadcrum";
import Button from "../components/Button";
import Navbar from "../components/Navbar";

const Grid = () => {
  return (
    <div>
      <div className="App ">
        <Navbar />

        <div className="p-4 space-y-5">
          <div className="">
            <Breadcrum />
          </div>

          <div className="">
            <div className="shadow-md bg-white p-2">
              Application message are shown here...
            </div>
          </div>

          <div className="flex space-x-1.5">
            <div className="inline-block">
              <Button
                btnText="add"
                imageUrl="https://sakshiinfotech.com/DocVedaSEB/images/add.svg"
              />
            </div>
            <div className="inline-block">
              <Button
                btnText="edit"
                imageUrl="https://sakshiinfotech.com/DocVedaSEB/images/Edit-01.svg"
              />
            </div>
            <div className="inline-block">
              <Button
                btnText="View"
                imageUrl="https://sakshiinfotech.com/DocVedaSEB/images/Edit-01.svg"
              />
            </div>
            <div className="inline-block">
              <Button
                btnText="save"
                imageUrl="https://sakshiinfotech.com/DocVedaSEB/images/Save-01.svg"
              />
            </div>
            <div className="inline-block">
              <Button
                btnText="search"
                imageUrl="https://sakshiinfotech.com/DocVedaSEB/images/Search-01.svg"
              />
            </div>
            <div className="inline-block">
              <Button
                btnText="reset"
                imageUrl="https://sakshiinfotech.com/DocVedaSEB/images/reset.svg"
              />
            </div>
            <div className="inline-block">
              <Button
                btnText="cancel"
                imageUrl="https://sakshiinfotech.com/DocVedaSEB/images/Cancel-01.svg"
              />
            </div>
            <div className="inline-block">
              <Button
                btnText="import from appointment"
                imageUrl="https://sakshiinfotech.com/DocVedaSEB/images/Save-01.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
