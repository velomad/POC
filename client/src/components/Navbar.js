import React from "react";

const Navbar = ({ title }) => {
  return (
    <div className="flex">
      <div className="px-20 py-3 bg-white flex items-center jsutify-center">
        <img
          src="https://sakshiinfotech.com/DocVedaSEB/images/Login-Icons/DocVedaLogo-01.svg"
          width="180px"
        />
      </div>
      <div className="flex background-primary justify-between w-full px-10 items-center bg-blue-500">
        <div className="flex items-center space-x-4">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <div>
            <img
              src="https://sakshiinfotech.com/DocVedaSEB/images/Clinic/Clinic.svg"
              width="50px"
            />
          </div>
          <div className="text-white text-lg">{title}</div>
        </div>
        <div className="flex items-center space-x-4">
          <div>
            <img
              src="https://sakshiinfotech.com/DocVedaSEB/images/dashboard_inner_icons/Notifications-01.svg"
              width="25px"
            />
          </div>
          <div>
            <img
              src="https://sakshiinfotech.com/DocVedaSEB/images/dashboard_inner_icons/User_icon-01.svg"
              width="50px"
            />
          </div>
          <div>
            <div className="flex items-center space-x-2 ">
              <div className="text-white">Rupesh D</div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
            <div className="text-white text-xs">Receptionist</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
