import React, { useState } from "react";
import { useSearch } from "../hooks/useSearch";
import Pagination from "@material-ui/lab/Pagination";
import { ExportCsv } from "../components/ExportCsv";

const CustomTable = ({ columns, rows }) => {
  const [row, setRow] = useState(rows);
  const [value, setValue] = useState(null);
  // const [filteredData] = useSearch(row, value);
  const [isReadOnly, setReadOnly] = useState(null);
  const [input, setInput] = useState({});

  const handleEdit = (row) => {
    setReadOnly(row.id);
    setInput(row);
  };

  const handleChange = (e, idx) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleAddRow = () => {
    setReadOnly(row.length + 1);
    // setInput({});
    setRow([
      ...row,
      {
        id: row.length + 1,
      },
    ]);
  };

  const onRowChange = () => {
    if (Object.keys(input).length < 1) {
      setRow([...row, input]);
    }
    setReadOnly(null);
    setInput({});
  };

  const cancleOperation = () => {
    setReadOnly(null);
    setInput({});
  };

  return (
    <div>
      <div className="py-4">
        <ExportCsv csvData={row} fileName="registeredPatients" />
      </div>
      <form>
        <div className="py-4">
          {/* <input
            className="border-2 p-1 rounded-lg form form-control"
            placeholder="Search By Registration No."
            type="search"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            style={{
              backgroundColor: "#f6f7f9",
            }}
          /> */}
        </div>

        <table className="table table-bordered">
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col.name} className="table-border">
                  {col.title}
                </th>
              ))}
            </tr>
            <tr>
              {columns.map((col, index) => (
                <th>
                  {index !== 0 && index !== columns.length - 1 && (
                    <input
                      name="patientName"
                      className="border-2 p-1 rounded-lg form form-control"
                      placeholder={col.title}
                      type="search"
                      style={{
                        backgroundColor: "#f6f7f9",
                      }}
                    />
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {row.map((row, index) => (
              <tr className="table-border" key={row.id}>
                <td>{row.id}</td>
                <td>{row.registrationNo}</td>
                <td>
                  <input
                    value={
                      row.id == isReadOnly
                        ? input.registrationDate
                        : row.registrationDate
                    }
                    className={row.id === isReadOnly && "form form-control"}
                    onChange={(e) => handleChange(e, index)}
                    name="registrationDate"
                    required="required"
                    style={{
                      border: row.id !== isReadOnly && "none",
                      backgroundColor: "#f6f7f9",
                    }}
                    type={row.id === isReadOnly ? "date" : "text"}
                    readOnly={row.id === isReadOnly ? false : true}
                  />
                </td>
                <td>
                  <input
                    value={
                      row.id == isReadOnly ? input.patientName : row.patientName
                    }
                    className={row.id === isReadOnly && "form form-control"}
                    onChange={(e) => handleChange(e, index)}
                    name="patientName"
                    style={{
                      border: row.id !== isReadOnly && "none",
                      backgroundColor: "#f6f7f9",
                    }}
                    type="text"
                    required={true}
                    defaultValue={row.patientName}
                    readOnly={row.id === isReadOnly ? false : true}
                  />
                </td>
                <td>
                  <input
                    value={
                      row.id == isReadOnly
                        ? input.lastVisitDate
                        : row.lastVisitDate
                    }
                    className={row.id === isReadOnly && "form form-control"}
                    onChange={(e) => handleChange(e, index)}
                    name="lastVisitDate"
                    type={row.id === isReadOnly ? "date" : "text"}
                    required
                    style={{
                      border: row.id !== isReadOnly && "none",
                      backgroundColor: "#f6f7f9",
                    }}
                    type={row.id === isReadOnly ? "date" : "text"}
                    defaultValue={row.lastVisitDate}
                    readOnly={row.id === isReadOnly ? false : true}
                  />
                </td>
                <td>
                  <input
                    value={row.id == isReadOnly ? input.mobileNo : row.mobileNo}
                    onChange={(e) => handleChange(e, index)}
                    className={row.id === isReadOnly && "form form-control"}
                    name="mobileNo"
                    style={{
                      border: row.id !== isReadOnly && "none",
                      backgroundColor: "#f6f7f9",
                    }}
                    defaultValue={row.mobileNo}
                    readOnly={row.id === isReadOnly ? false : true}
                  />
                </td>
                <td>
                  <input
                    value={
                      row.id == isReadOnly ? input.dateOfBirth : row.dateOfBirth
                    }
                    className={row.id === isReadOnly && "form form-control"}
                    onChange={(e) => handleChange(e, index)}
                    name="dateOfBirth"
                    style={{
                      border: row.id !== isReadOnly && "none",
                      backgroundColor: "#f6f7f9",
                    }}
                    type={row.id === isReadOnly ? "date" : "text"}
                    defaultValue={row.dateOfBirth}
                    readOnly={row.id === isReadOnly ? false : true}
                  />
                </td>
                {/* <td className="text-center">
                <img src="/appointment.svg" />
              </td> */}
                <td className="text-center ">
                  {row.id !== isReadOnly ? (
                    <div className="d-flex justify-content-around">
                      <div>
                        <svg
                          onClick={() => handleEdit(row)}
                          xmlns="http://www.w3.org/2000/svg"
                          className="cursor-pointer"
                          style={{ width: "15px", color: "skyblue" }}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                          />
                        </svg>
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ width: "15px", color: "red" }}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-around">
                      <div>
                        <svg
                          onClick={onRowChange}
                          style={{ width: "15px", color: "green" }}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <svg
                          onClick={cancleOperation}
                          style={{ width: "15px", color: "gold" }}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>

      <div className="py-2 d-flex justify-content-center">
        <button className="btn btn-primary" onClick={handleAddRow}>
          Add More
        </button>
      </div>
      <div className="d-flex justify-content-center">
        <Pagination count={10} color="standard" />
      </div>
    </div>
  );
};

export default CustomTable;
