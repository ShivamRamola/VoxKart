import React from "react";
import Logo from "../assets/voxkart-logo.png";
import { useNavigate } from "react-router-dom";
import google from "../assets/google.png";
import { IoEyeOutline } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { authDataContext } from "../context/authContext";

function Login() {}
let [show, setShow] = React.useState(false);
let [email, setEmail] = React.useState("");
let [password, setPassword] = React.useState("");
let { serverUrl } = React.useContext(authDataContext);

let navigate = useNavigate();
const handleLogin = async (e) => {
  try {
    e.preventDefault();
    result = await axios.post(
      `${serverUrl}/api/auth/login`,
      {
        email,
        password,
      },
      { withCredentials: true }
    );
    console.log("Login successful:", result.data);
  } catch (err) {
    console.log("Login error:", err);
  }

  return (
    <div className="w-screen min-h-screen bg-gradient-to-l from-[#141414] to-[#0c2025] text-white flex flex-col items-center justify-start">
      <div
        className="w-full h-20 flex items-center justify-start px-6  cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img className="w-12 h-12 pr-2" src={Logo} alt="VoxKart Logo" />
        <h1 className="text-2xl font-semibold">VoxCart</h1>
      </div>

      <div className="w-full mt-2 flex flex-col items-center justify-center gap-1">
        <span className="text-3xl font-semibold">Login Page</span>
        <span className="text-lg">
          Welcome back to VoxCart. Place your order
        </span>
      </div>

      <div className="max-w-2xl w-[40%] h-[430px] bg-[rgba(0,0,0,0.15)] border border-[#096969] backdrop-blur-md rounded-lg flex items-center justify-center mt-5">
        <form
          action=""
          onSubmit={handleLogin}
          className="max-w-[600px] w-[80%] h-[100%] flex flex-col items-center justify-start gap-5 py-6"
        >
          <button
            type="button"
            className="w-[90%] h-15 bg-[#42656c] rounded-lg flex items-center justify-center gap-2 py-2 cursor-pointer hover:brightness-110"
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
            <input
              className="w-[90%] p-3 rounded bg-transparent border border-gray-600"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="w-[90%] p-3 rounded bg-transparent border border-gray-600"
              placeholder="Password"
              type={show ? "text" : "password"}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            {!show && (
              <IoEyeOutline
                className="w-[20px] h-[20px] cursor-pointer absolute right-[20%] bottom-[50%] top-[52%] "
                onClick={() => setShow((prev) => !prev)}
              />
            )}
            <IoEye
              className="w-[20px] h-[20px] cursor-pointer absolute right-[20%] bottom-[50%] top-[52%] "
              onClick={() => setShow((prev) => !prev)}
            />

            <button className="w-[90%] p-3 rounded bg-[#3324b4]">Login</button>
            <p className="flex gap-[8px]">
              Dont have an account?{" "}
              <span
                className="text-[#3324b4] cursor-pointer text-[17px] font-semibold"
                onClick={() => navigate("/signup")}
              >
                Create Account
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
