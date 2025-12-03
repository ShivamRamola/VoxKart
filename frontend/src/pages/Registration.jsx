import React from "react";
import Logo from "../assets/voxkart-logo.png";
import { useNavigate } from "react-router-dom";
import google from "../assets/google.png";
import { IoEyeOutline } from "react-icons/io5";

function Registration() {
  let navigate = useNavigate();
  return (
    <div className="w-screen min-h-screen bg-gradient-to-l from-[#141414] to-[#0c2025] text-white flex flex-col items-center justify-start">
      <div
        className="w-full h-20 flex items-center justify-start px-6  cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img className="w-12 h-12 pr-2" src={Logo} alt="VoxKart Logo" />
        <h1 className="text-2xl font-semibold">VoxCart</h1>
      </div>

      <div className="w-full mt-6 flex flex-col items-center justify-center gap-1">
        <span className="text-3xl font-semibold">Registration Page</span>
        <span className="text-md">Welcome to VoxKart. Place your order</span>
      </div>

      <div className="max-w-2xl w-[40%] h-[450px] bg-[rgba(0,0,0,0.15)] border border-[#096969] backdrop-blur-md rounded-lg flex items-center justify-center mt-6">
        <form
          action=""
          className="max-w-[600px] w-[80%] h-[100%] flex flex-col items-center justify-start gap-5 py-6"
        >
          <button
            type="button"
            className="w-[90%] h-36 bg-[#42656c] rounded-lg flex items-center justify-center gap-4 py-4 cursor-pointer hover:brightness-110"
          >
            <img className="w-8 h-8" src={google} alt="Google Logo" />
            <span className="text-lg">Register with Google</span>
          </button>

          <div className="w-full flex items-center justify-center gap-4">
            <div className="flex-1 h-px bg-[#096969]"></div>
            <span className="text-sm">OR</span>
            <div className="flex-1 h-px bg-[#096969]"></div>
          </div>

          <div className="w-full flex flex-col items-center gap-4 mt-2">
            {/* Placeholder for form fields: name, email, password */}
            <input
              className="w-[90%] p-3 rounded bg-transparent border border-gray-600"
              placeholder="Name"
            />
            <input
              className="w-[90%] p-3 rounded bg-transparent border border-gray-600"
              placeholder="Email"
            />
            <input
              className="w-[90%] p-3 rounded bg-transparent border border-gray-600"
              placeholder="Password"
              type="password"
            />
            <IoEyeOutline className="w-[20px] h-[20px] cursor-pointer absolute right-[10%] top-[65%] " />

            <button className="w-[90%] p-3 rounded bg-[#3324b4]">
              Create Account
            </button>
            <p className="flex gap-[8px]">
              Already have an account?{" "}
              <span
                className="text-[#3324b4] cursor-pointer text-[17px] font-semibold"
                onClick={() => navigate("/login")}
              >
                Login here
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
