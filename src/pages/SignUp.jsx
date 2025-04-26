import React, { useState } from "react";
import { isEmail } from "../util/validation.js";
import backgroundImage from "../assets/Log-in-img.jpg";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import google from "../assets/google.svg";
import facebook from "../assets/facebook.svg";
import { LuEye } from "react-icons/lu";
import { LuEyeClosed } from "react-icons/lu";

const USER_DATA = {
  email: "",
  password: "",
  username: "",
};

const SignUp = () => {
  const [user, setUser] = useState(USER_DATA);
  const [error, setError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation checks
    if (!user.username.trim() || !user.email.trim() || !user.password.trim()) {
      setError("All fields are required");
      return;
    }

    if (user.username.length < 4) {
      setError("Username must be at least 4 characters long");
      return;
    }

    // Email format validation
    if (!isEmail(user.email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (user.password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    // If everything is valid
    setError(false);
    console.log("Form submitted:", user);
    // Optionally reset form:
    // setUser(USER_DATA);
  };

  return (
    <div className="flex justify-center min-h-screen w-full  bg-orange-light">
      {/* Left side - image and text */}
      <div
        className="w-2/5 hidden lg:block bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>

      {/* Right side - form */}
      <div className="flex flex-col items-center lg:items-start justify-start w-full lg:w-3/5 gap-14 py-16 px-8 lg:px-32">
        <img src={logo} alt="Logo" className="" />
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center lg:items-start gap-11 w-full"
        >
          <h1 className="text-heading-xs font-bold">Create Account</h1>
          <div className="flex flex-col gap-3 ">
            <label className="text-body-sm text-grey-dark">Username</label>
            <input
              type="text"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className="min-w-72 lg:min-w-96 w-1/2   py-2 text-body-md font-semibold text-black bg-transparent border-b-2 border-grey-light focus:outline-none focus:border-orange-dark"
              placeholder="Ahmed_Mamdoh"
              required
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-body-sm text-grey-dark">Email Address</label>
            <input
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="min-w-72 lg:min-w-96 w-1/2 py-2 text-body-md font-semibold text-black bg-transparent border-b-2 border-grey-light focus:outline-none focus:border-orange-dark"
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-body-sm text-grey-dark">Password</label>
            <div className="flex justify-between items-center w-full">
              <input
                type={isVisible ? "text" : "password"}
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                className="min-w-72 lg:min-w-96 w-1/2 py-2 text-body-md font-semibold text-black bg-transparent border-b-2 border-grey-light focus:outline-none focus:border-orange-dark"
                placeholder="Enter your password"
                required
              />
              <button onClick={() => setIsVisible((visible) => !visible)}>
                {isVisible ? (
                  <LuEye className="w-8 h-8" />
                ) : (
                  <LuEyeClosed className="w-8 h-8" />
                )}
              </button>
            </div>
          </div>

          {error && (
            <p className="p-5 text-red-500 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            className="min-w-72 w-1/2 py-5 px-10 bg-orange-dark rounded-full text-white text-body-md font-bold"
          >
            Sign Up
          </button>

          <p className="text-body-sm">
            Already have an account ?{" "}
            <Link className="font-bold text-orange-dark">Log in</Link>
          </p>
          <div className=" min-w-72 flex gap-5 justify-center items-center w-4/5 flex-col xl:flex-row">
            <button className=" flex justify-center items-center gap-2 w-full bg-white py-5 px-14 rounded-xl font-semibold">
              <img src={google} alt="" />
              Login With Google
            </button>
            <button className="flex justify-center items-center gap-2 w-full bg-white py-5 px-14 rounded-xl font-semibold">
              <img src={facebook} alt="" />
              Login With Facebook
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
