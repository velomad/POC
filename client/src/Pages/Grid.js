import React from "react";
import Breadcrum from "../components/Breadcrum";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import CustomTable from "../Poc/CustomTable";
import DevExpressGrid from "../Poc/DevExpressGrid";
import EditableRow from "../Poc/EditableRow";

const Grid = () => {
  const columns = [
    { name: "id", title: "ID" },
    { name: "registrationNo", title: "Registration No." },
    { name: "registrationDate", title: "Registration Date" },
    { name: "patientName", title: "Patient Name" },
    { name: "lastVisitDate", title: "Last Visit Date" },
    { name: "mobileNo", title: "Mobile No." },
    { name: "dateOfBirth", title: "Date Of Birth" },
    // { name: "scheduleAppointments", title: "Schedule Appointments" },
    { name: "action", title: "Action" },
  ];

  const rows = [
    {
      id: 1,
      registrationNo: "Rg/21041",
      registrationDate: "03/02/2021",
      patientName: "John",
      lastVisitDate: "10/02/2021",
      mobileNo: "7985444258",
      dateOfBirth: "23/02/1985",
      // scheduleAppointments: "Schedule",
    },
    {
      id: 2,
      registrationNo: "Rg/21042",
      registrationDate: "03/03/2021",
      patientName: "Wick",
      lastVisitDate: "10/02/2021",
      mobileNo: "6585457852",
      dateOfBirth: "21/02/1985",
      // scheduleAppointments: "Schedule",
    },
    {
      id: 3,
      registrationNo: "Rg/21043",
      registrationDate: "12/02/2021",
      patientName: "Rick",
      lastVisitDate: "10/02/2021",
      mobileNo: "6698785457",
      dateOfBirth: "21/02/1985",
      // scheduleAppointments: "Schedule",
    },
    {
      id: 4,
      registrationNo: "Rg/21046",
      registrationDate: "03/02/2021",
      patientName: "Click",
      lastVisitDate: "22/02/2021",
      mobileNo: "3366525458",
      dateOfBirth: "21/02/1985",
      // scheduleAppointments: "Schedule",
    },
    {
      id: 5,
      registrationNo: "Rg/21026",
      registrationDate: "03/02/2021",
      patientName: "Easy",
      lastVisitDate: "25/02/2021",
      mobileNo: "5899665877",
      dateOfBirth: "21/02/1985",
      // scheduleAppointments: "Schedule",
    },
    {
      id: 6,
      registrationNo: "Rg/21029",
      registrationDate: "03/02/2021",
      patientName: "Peasy",
      lastVisitDate: "25/02/2021",
      mobileNo: "3369852541",
      dateOfBirth: "21/02/1985",
      // scheduleAppointments: "Schedule",
    },
    {
      id: 7,
      registrationNo: "Rg/21015",
      registrationDate: "03/02/2021",
      patientName: "XYZ",
      lastVisitDate: "1/03/2021",
      mobileNo: "441147859",
      dateOfBirth: "21/02/1985",
      // scheduleAppointments: "Schedule",
    },
    {
      id: 8,
      registrationNo: "Rg/21015",
      registrationDate: "03/02/2021",
      patientName: "XYZ",
      lastVisitDate: "1/03/2021",
      mobileNo: "441147859",
      dateOfBirth: "21/02/1985",
      // scheduleAppointments: "Schedule",
    },
    {
      id: 9,
      registrationNo: "Rg/21015",
      registrationDate: "03/02/2021",
      patientName: "XYZ",
      lastVisitDate: "1/03/2021",
      mobileNo: "441147859",
      dateOfBirth: "21/02/1985",
      // scheduleAppointments: "Schedule",
    },
    {
      id: 10,
      registrationNo: "Rg/21015",
      registrationDate: "03/02/2021",
      patientName: "XYZ",
      lastVisitDate: "1/03/2021",
      mobileNo: "441147859",
      dateOfBirth: "21/02/1985",
      // scheduleAppointments: "Schedule",
    },
  ];

  return (
    <div className="App ">
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
        <CustomTable columns={columns} rows={rows} />

        <DevExpressGrid />

        <EditableRow columns={columns} rowss={rows} />
      </div>
    </div>
  );
};

export default Grid;
