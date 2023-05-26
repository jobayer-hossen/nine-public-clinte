import React from "react";
import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const SingleAppliedCard = ({ singleJob }) => {
  //  destructure job data information
  const {
    companyLogo,
    salary,
    jobTitle,
    location,
    companyName,
    remoteOrOnsite,
    fulltimeOrParttime,
    id,
  } = singleJob;
  return (
    <>
      {/* Applied job card all information */}
      <div className="card rounded w-[50%] h-48 card-side shadow-xl mb-5 bg-gradient-to-r from-red-200 via-gray-300 to-blue-200 ">
        <figure>
          <img className="w-20 h-20 ml-4" src={companyLogo} alt="Logo" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            <div>
              <h2 className="font-bold">{jobTitle}</h2>
              <p>{companyName}</p>
              <div className="flex mt-1 gap-4 ">
                <div className="badge bg-lime-300 badge-primary border border-black rounded p-3">
                  {remoteOrOnsite}
                </div>
                <div className="badge bg-indigo-300 badge-primary border border-black rounded p-3">
                  {fulltimeOrParttime}
                </div>
              </div>
              <div className="flex items-center">
                <CurrencyDollarIcon className="h-4 w-4 text-blue-500" />
                <p>
                
                  Salary: <span>{salary}</span>
                </p>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="h-4 w-4 text-blue-500" />
                <p>
                 
                  Location : <span>{location}</span>
                </p>
              </div>
            </div>
            <div className="card-actions mt-8">
              <Link to={`/job-details/${id}`}>
                <button className="btn bg-gradient-to-r from-rose-400 via-fuchsia-400 to-indigo-400 rounded text-black border-none">
                  Vew Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleAppliedCard;
