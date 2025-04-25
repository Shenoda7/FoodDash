import React from "react";

const Login = () => {
  return (
    <div className="flex h-screen">
      {/* Left - Image & Text */}
      <div
        className="w-1/2 hidden md:block bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white px-8">
          <h1 className="text-5xl font-bold mb-4">Food Dash.</h1>
          <p className="text-xl text-center">Delivering happiness to your doorstep</p>
        </div>
      </div>

      {/* Right - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Login to your account!
          </h2>

          <button className="w-full mb-3 flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-100">
            <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="google" />
            Login with Google
          </button>

          <button className="w-full mb-6 flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-100">
            <img src="https://img.icons8.com/color/16/000000/facebook-new.png" alt="facebook" />
            Login with Facebook
          </button>

          <div className="flex items-center mb-4">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-sm text-gray-500">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <form>
            <label className="block mb-2 text-sm font-medium">Email Address</label>
            <input
              type="email"
              className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="your@email.com"
            />

            <label className="block mb-2 text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your password"
            />

            <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
              Login to Continue
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-4">
            Don't have an account?{" "}
            <a href="#" className="text-orange-500 hover:underline">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;