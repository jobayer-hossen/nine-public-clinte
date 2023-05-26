import React from "react";
// animation data import ---
import Lottie from "lottie-react";
import ErrorAnimation from "../assets/error/98488-bot-error-404.json";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  // error message generate --
  const { error } = useRouteError();
  return (
    <div className="indicator mx-auto flex flex-col ">
      {/* Animation show */}
      <Lottie
        className="mx-auto w-[90%] mt-auto"
        animationData={ErrorAnimation}
        loop={true}
      />

      <div className="text-center">
        {/* Back to home button */}
        <p className="text-xl font-semibold mb-2">{error?.message}</p>
        <Link to="/">
          <button className="btn text-white border-none bg-gradient-to-r from-blue-600 to-violet-600 rounded">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
