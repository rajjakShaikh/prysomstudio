import React from "react";
import logo from "../../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <>
      {/* Header Start */}
      <div className="grid grid-cols-1 md:grid-cols-2 mx-8 px-8 my-6 py-6 rounded-[24px] items-center bg-[#FFFFFF66]">
        <div className="rounded-[24px]">
          <img
            src={logo}
            alt="logo"
            className="h-[36px] w-[141px]  cursor-pointer"
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
                    ? "text-[16px] text-[#000000] font-bold cursor-pointer "
                    : "text-[16px] text-[#000000] font-normal cursor-pointer hover:font-bold"
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
                //     : "text-[16px] text-[#000000] font-normal cursor-default hover:font-bold"
                // }
                className="text-[16px] text-[#000000] font-normal cursor-default hover:font-bold"
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
