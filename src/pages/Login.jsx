import React, { useState } from "react";
import { isEmail } from "../util/validation.js";
import backgroundImage from "../assets/Log-in-img.jpg";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { LuEye } from "react-icons/lu";
import { LuEyeClosed } from "react-icons/lu";

const USER_DATA = {
  email: "",
  password: "",
};

const SignUp = () => {
  const [user, setUser] = useState(USER_DATA);
  const [error, setError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation checks
    if (!user.email.trim() || !user.password.trim()) {
      setError("Please fill in all fields");
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
          <h1 className="text-heading-xs font-bold">Login to your account!</h1>
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

          {error ? (
            <div role="alert" className="alert alert-warning w-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span>{error}</span>
            </div>
          ) : (
            ""
          )}

          <button
            type="submit"
            className="min-w-72 w-1/2 py-5 px-10 bg-orange-dark rounded-full text-white text-body-md font-bold"
          >
            Login To Continue
          </button>

          <p className="text-body-sm">
            Don’t have an account ?
            <Link to="/signup" className="font-bold text-orange-dark">
              {" "}
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
