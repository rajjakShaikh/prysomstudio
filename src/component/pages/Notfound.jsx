import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col  items-center justify-center h-screen text-center ">
      <h1 className="text-[80px] font-bold text-gray-800">404</h1>
      <h2 className="text-[24px] font-medium text-gray-600">
        Oops! Page Not Found
      </h2>

      <button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-2 bg-[#010688] text-white font-semibold rounded-md transition-all"
      >
        Go Back to Homepage
      </button>
    </div>
  );
}

export default NotFound;
