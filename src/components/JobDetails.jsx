import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
//  import hot toast toast --
import toast, { Toaster } from "react-hot-toast";
// import heroicons --
import {
  CurrencyDollarIcon,
  CreditCardIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import { addToDb } from "../utilities/fakedb";

const JobDetails = () => {
  //  data load from loader ---
  const loadeData = useLoaderData();
  // get dynamic data id from dynamic url--
  const daynamicDataid = useParams();
  //  all data state --
  const [allData, setAllData] = useState({});
  // console.log(loadeddata);
  // console.log(dataid);
  //  condition for data showing --
  useEffect(() => {
    if (loadeData) {
      const findid = loadeData.find((job) => job.id === daynamicDataid.id);
      if (findid) {
        setAllData(findid);
      }
    }
  }, []);

  //  destructure for data---
  const {
    jobDescription,
    jobResponsibility,
    educationalRequirements,
    experiences,
    salary,
    jobTitle,
    contactInformation,
    location,
    id,
  } = allData;

  //  Apply Now  button handle ---
  const handleApply = (id) => {
    addToDb(id);
    //  apply now button toast fire--
    toast.success("Successfully Applied !");
  };

  return (
    <>
      <div className=" static w-[85%] mx-auto rounded">
        <h2 className="text-4xl text-pink-400 text-center font-bold absolute top-[10%] left-[44%] ">
          Job Details
        </h2>
        <img
          className=" h-64 mx-auto"
          src="https://img.freepik.com/free-vector/career-development-banner-with-kid-designer-leader_107791-6480.jpg?w=826&t=st=1681173012~exp=1681173612~hmac=e72ca69cc85aeaa859035cf8ba945515dbdbf03fa7a33b6a3abe6e0a328e45d6"
          alt=""
        />
      </div>
      <div className="m-[5%] mt-10 mb-5 gap-6 lg:px-12 flex flex-col sm:flex-col lg:flex-row ">
        <div className="card rounded w-[64%] shadow-xl bg-purple-100">
          <div className="card-body">
            <p className="font-bold">
              Job Description :
              <span className="font-normal"> {jobDescription}</span>
            </p>
            <p className="font-bold">
              Job Responsibility :
              <span className="font-normal"> {jobResponsibility}</span>
            </p>
            <p className="font-bold">
              Educational Requirements :
              <span className="font-normal"> {educationalRequirements}</span>
            </p>
            <p className="font-bold">
              Experience : <span className="font-normal"> {experiences}</span>
            </p>
          </div>
        </div>

        <div className="card rounded w-96 shadow-xl bg-gradient-to-r from-blue-100 to-cyan-100">
          <div className="card-body">
            <h2 className="font-bold border-b-2 border-indigo-500">
              Job Details
            </h2>
            <div className="flex items-center">
              <CurrencyDollarIcon className="h-4 w-4 text-blue-500" />
              <p className="font-bold ml-1">
                Salary : <span className="font-normal">{salary}</span>
              </p>
            </div>
            <div className="flex items-center">
              <CreditCardIcon className="h-4 w-4 text-blue-500" />
              <p className="font-bold ml-1">
                Job Title : <span className="font-normal">{jobTitle}</span>
              </p>
            </div>

            <h2 className="font-bold mt-5 border-b-2 border-indigo-500">
              Contact Information
            </h2>

            <div className="flex items-center">
              <PhoneIcon className="h-4 w-4 text-blue-500" />
              <p className="font-bold ml-1">
                Phone:
                <span className="font-normal">
                  {" "}
                  {contactInformation?.phone}
                </span>
              </p>
            </div>
            <div className="flex items-center">
              <EnvelopeIcon className="h-4 w-4 text-blue-500" />
              <p className="font-bold ml-1">
                Email :
                <span className="font-normal">
                  {" "}
                  {contactInformation?.email}
                </span>
              </p>
            </div>
            <div className="flex items-center">
              <MapPinIcon className="h-4 w-4 text-blue-500" />
              <p className="font-bold ml-1">
                Location : <span className="font-normal">{location}</span>
              </p>
            </div>
            {/* Apply Now button */}
            <div className="card-actions justify-center">
              <button
                onClick={() => handleApply(id)}
                className="btn w-[48%] bg-gradient-to-r from-violet-600 to-indigo-600 border-none text-white  mt-5 rounded"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default JobDetails;
