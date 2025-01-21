import React from "react";
import logo from "../../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <>
      {/* Header Start */}
      <div className="grid grid-cols-2 mx-5 md:mx-16 mt-12 items-center">
        <div className="rounded-[24px]">
          <img
            src={logo}
            alt="logo"
            className="h-[36px] w-[141px] w-auto cursor-pointer" // Ensures logo scales responsively
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex justify-end gap-6">
            <li>
              <NavLink
                to="/work"
                className={({ isActive }) =>
                  isActive
                    ? "text-[16px] text-[#000000] font-bold cursor-pointer"
                    : "text-[16px] text-[#000000] font-normal cursor-pointer"
                }
              >
                Work
              </NavLink>
            </li>
            <li>
              <NavLink
                // to="/about"
                // className={({ isActive }) =>
                //   isActive
                //     ? "text-[16px] text-[#000000] font-bold cursor-default"
                //     : "text-[16px] text-[#000000] font-normal cursor-default"
                // }
                className="text-[16px] text-[#000000] font-normal cursor-default"
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      {/* Header End */}
    </>
  );
}
