import React from "react";
import Breadcrum from "../components/Breadcrum";
import Button from "../components/Button";
import DropDown from "../components/DropDown";
import InputField from "../components/InputField";
import Navbar from "../components/Navbar";

const Scheduler = () => {
  return (
    <div>
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
        </div>
        <div className="shadow-md bg-white p-2">
          <div>
            <div>Patient Information</div>
            <div className="grid grid-cols-6 py-4">
              <div>Registartion No. : Rg/21043</div>
              <div>Patient Name : Rupesh Tiwari</div>
              <div>Date of Birth : 21/02/1985</div>
              <div>Age : 38 Year</div>
              <div>Gender : Male</div>
              <div>Mobile No. : 9485221445</div>
            </div>
            <div className="grid grid-cols-6 py-4">
              <div>
                <div>Email ID :</div>
                <div>rupeshtiwari@gmail.com</div>
              </div>
              <div className="col-span-2">
                <div>address:</div>{" "}
                <div>
                  322, 3rd floor Vajreshwari APT, J.B.Nagar, Andheri East
                </div>
              </div>
              <div>
                <div>City :</div>
                <div>Mumbai</div>
              </div>
              <div>
                <div>Pin Code :</div>
                <div>400 093</div>
              </div>
            </div>
          </div>
          <div>
            <div>Schedule Appointment</div>
            <div className="py-4 flex justify-between">
              <div>
                <InputField
                  label="Appointment Date"
                  type="date"
                  placeholder="10/1/2021"
                />
              </div>
              <div>
                <InputField
                  label="Appointment Mobile No."
                  type="number"
                  placeholder="9958896658"
                />
              </div>
              <div>
                <InputField
                  label="Appointment Email ID"
                  type="email"
                  placeholder="rupeshtiwari@gmail.com"
                />
              </div>
              <div>
                <DropDown label="source" options={["walk-in", "on phone"]} />
              </div>
            </div>
            <div className="py-4 flex justify-between">
              <div>
                <DropDown label="Clinic Branch" options={["Khar", "Bandra"]} />
              </div>
              <div>
                <DropDown
                  label="Specialisation"
                  options={["opthalmolgy", "ENT"]}
                />
              </div>
              <div>
                <DropDown
                  label="Doctor name"
                  options={["Rupesh 1", "Rupesh 2", "Rupesh 3"]}
                />
              </div>
              <div>
                <InputField
                  label="Referring Doctor / Organization :"
                  type="text"
                  placeholder="Dr ravi"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scheduler;
