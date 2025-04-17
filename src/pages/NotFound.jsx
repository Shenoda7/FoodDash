import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-orange-light p-4 font-lexend">
      <div className="max-w-2xl text-center">
        <h1 className="text-heading-lg font-bold text-orange-dark mb-4">404</h1>

        <h2 className="text-heading-md text-black mb-6">
          Oops! Page Not Found
        </h2>

        <p className="text-body-md text-grey-dark mb-8">
          The page you're looking for doesn't exist or has been moved. Please
          check the URL or navigate back to our homepage.
        </p>

        <div className="mb-10 flex justify-center">
          <div className="w-40 h-40 rounded-full bg-orange-mid/20 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-24 w-24 text-orange-dark"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
        </div>

        <button
          onClick={() => navigate("/")}
          className="px-8 py-3 bg-orange-dark hover:bg-orange-mid text-white text-body-md rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
        >
          Return to Homepage
        </button>
      </div>
    </div>
  );
};

export default NotFound;
