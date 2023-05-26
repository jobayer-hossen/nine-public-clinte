import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleAppliedCard from "./SingleAppliedCard";
import { getShoppingCart } from "../utilities/fakedb";

const Appliedjobs = () => {
  //  data load from loader---
  const newJobArray = useLoaderData();
  // console.log(newJobArray);
  //  get id from local storage --
  const getDataToLocal = getShoppingCart();
  // all data state ---
  const [allData, setAllData] = useState([]);
  // filtar by (remote or onsite) state ---
  const [filterby, setFilterby] = useState([]);
  //  main condition applied job page all element ---
  useEffect(() => {
    let storageJob = [];
    for (const id in getDataToLocal) {
      const finditem = newJobArray.find((jobs) => jobs.id === id);
      if (finditem) {
        storageJob.push(finditem);
      }
    }
    setAllData(storageJob);
    setFilterby(storageJob);
  }, []);
  // filter button handle remote data --
  const handleRemote = (remote) => {
    const remoteData = filterby.filter((dt) => dt.remoteOrOnsite === remote);
    setAllData(remoteData);
  };
  //  button handle filter onsite data --
  const handleOnside = (onsite) => {
    const remoteData = filterby.filter((dt) => dt.remoteOrOnsite === onsite);
    setAllData(remoteData);
  };

  return (
    <>
      {/* Applied job banner section */}
      <div className="min-h-screen">
        <div className="text-center static  w-[83%] mx-auto my-10 ">
          <div className="flex mx-auto">
          <img className="w-auto h-48 " src="https://img.freepik.com/free-vector/working-day-scenes-collection-illustrated_52683-62969.jpg?w=826&t=st=1681306877~exp=1681307477~hmac=238d20c4480d33437c4c7ec77184ea745772cbd00941354c8d663cc550223b75" alt="image" />
          <img className="w-auto h-48 " src="https://img.freepik.com/free-vector/working-day-scenes-collection-illustrated_52683-62969.jpg?w=826&t=st=1681306877~exp=1681307477~hmac=238d20c4480d33437c4c7ec77184ea745772cbd00941354c8d663cc550223b75" alt="image" />
          </div>
          <div className="absolute left-[44%] top-[44%]">
          <h2 className="text-4xl text-green-600 rounded font-bold ">
            Applied Jobs
          </h2>
          </div>
        </div>

        <div className="text-right mr-36">
          <button
            className="btn rounded border-none text-black bg-gradient-to-l from-teal-400 to-yellow-200 "
            onClick={() => handleRemote("Remote")}
          >
            remote
          </button>
          <button
            className="btn ml-3 border-none text-black rounded bg-gradient-to-r from-teal-400 to-yellow-200"
            onClick={() => handleOnside("Onsite")}
          >
            onsite
          </button>
        </div>



        {/* applied job card component called  */}
        <div className="grid justify-items-center gap-4">
          {allData.map((singleJob) => (
            <SingleAppliedCard
              key={singleJob.id}
              singleJob={singleJob}
            ></SingleAppliedCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default Appliedjobs;
