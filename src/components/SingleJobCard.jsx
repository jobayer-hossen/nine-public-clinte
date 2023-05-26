import React from "react";
import { Link } from "react-router-dom";
// heroicon import 
import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/solid";

const SingleJobCard = ({ job }) => {
  //  destructure data information --
  const {
    companyName,
    fulltimeOrParttime,
    remoteOrOnsite,
    jobTitle,
    companyLogo,
    location,
    salary,
    id,
  } = job;

  return (
    // featured jobs section single card information displayed --
    <>
      <div className="card w-[100%] rounded shadow-xl bg-gradient-to-t from-blue-200 to-cyan-200">
        <img
          className=" w-[15%] h-[25%] drop-shadow-2xl rounded mx-auto mt-6"
          src={companyLogo}
          alt="logo"
        />

        <div className="card-body items-center">
          <h2 className="text-2xl font-bold">{jobTitle}</h2>
          <p className="font-semibold">{companyName}</p>
          <div className="flex gap-4">
            <div className="badge badge-primary rounded p-3 bg-white">
              {remoteOrOnsite}
            </div>
            <div className="badge badge-primary rounded p-3 bg-white">
              {fulltimeOrParttime}
            </div>
          </div>

          <div className="gap-4">
            <div className="flex items-center">
              <CurrencyDollarIcon className="h-4 w-4 text-blue-500" />
              <p className="ml-1">
                Salary: <span>{salary}</span>
              </p>
            </div>
            <div className="flex items-center">
              <MapPinIcon className="h-4 w-4 text-blue-500" />
              <p className="ml-1">
                Location : <span>{location}</span>
              </p>
            </div>
          </div>

          <div className="card-actions justify-start">
            <Link to={`/job-details/${id}`}>
              <button className="btn bg-gradient-to-r from-blue-500 to-violet-500 text-white rounded border-none ">
                Vew Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleJobCard;
