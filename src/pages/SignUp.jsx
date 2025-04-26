import React, { useState } from "react";
import { isEmail } from "../util/validation.js";

const USER_DATA = {
  email: "",
  password: "",
  username: "",
};

const SignUp = () => {
  const [user, setUser] = useState(USER_DATA);
  const [error, setError] = useState(false);

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
    <div className="flex h-screen">
      {/* Left side - image and text */}
      <div
        className="w-1/2 hidden md:block bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white px-8">
          <h1 className="text-5xl font-bold mb-4">Food Dash.</h1>
          <p className="text-xl text-center">
            Delivering happiness to your doorstep
          </p>
        </div>
      </div>

      {/* Right side - form */}
      <div className="flex items-center justify-center m-auto bg-orange-light p-8 rounded-xl shadow-xl">
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <label className="block mb-2 text-sm font-medium">Username</label>
          <input
            type="text"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            className="w-full mb-4 px-4 py-2 border border-orange-light rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Ahmed Mamdouh"
            required
          />

          <label className="block mb-2 text-sm font-medium">
            Email Address
          </label>
          <input
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="w-full mb-4 px-4 py-2 border border-orange-light rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="your@email.com"
            required
          />

          <label className="block mb-2 text-sm font-medium">Password</label>
          <input
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="w-full mb-4 px-4 py-2 border border-orange-light rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter your password"
            required
          />

          {error && (
            <p className="p-5 text-red-500 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            className="w-full mt-4 border text-orange-dark font-semibold py-2 rounded-lg hover:bg-orange-600 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
