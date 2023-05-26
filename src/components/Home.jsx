import React, { useEffect, useState } from "react";
import Category from "./Category";
import SingleJobCard from "./SingleJobCard";
import Lottie from "lottie-react";
import Animation from "../assets/home-banner/120404-business-target-achievement.json";

const Home = () => {
  // category state --
  const [category, setCategory] = useState([]);
  // category data load --
  useEffect(() => {
    fetch("/category.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  // Feature job state --
  const [featuredJobs, setFeaturedJobs] = useState([]);
  // Featured job data load --
  useEffect(() => {
    fetch("/jobData.json")
      .then((res) => res.json())
      .then((data) => setFeaturedJobs(data));
  }, []);

  //------handle see all button condition
  const [seeAll, setSeeAll] = useState(false);
  const handleSeeAllJobs = () => {
    setSeeAll(true);
  };

  return (
    <>
      {/* banner section */}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="lg:w-[50%] sm:w-20">
            <Lottie animationData={Animation} loop={true} />
          </div>
          <div className="lg:w-[50%] sm:w-20 sm:ml-0 lg:ml10">
            <h1 className="text-5xl font-bold">
              One Step Closer To Your
              <span className="text-violet-400">Dream Job</span>{" "}
            </h1>
            <p className="py-6">
              An encouraging phrase used to motivate job seekers and emphasize
              the importance of taking small steps towards achieving their
              career goals, often accompanied by practical advice or tips for
              success.
            </p>
            <button className="btn rounded bg-gradient-to-r from-emerald-500 to-emerald-900 btn-primary text-white">Get Started</button>
          </div>
        </div>
      </div>
      {/* Job Category List section */}
      <div className="w-[90%] mx-auto">
        <div className="text-center mt-20 mb-10">
          <h1 className=" text-3xl font-bold mb-5">Job Category List</h1>
          <p>
            A categorized list of job titles used to classify the workforce
            based on the type of work or skills needed.
          </p>
        </div>
        <div className="mt-10 mb-5 gap-6 lg:px-12 flex flex-col sm:flex-col lg:flex-row">
          <div className="mx-5 gap-4 grid justify-items-center sm:grid-cols-1 lg:grid-cols-4 lg:w-[100%] ">
            {/* Job Category single card component call */}
            {category.map((category) => (
              <Category key={category.name} category={category}></Category>
            ))}
          </div>
        </div>
      </div>
      {/* Featured job section */}
      <div className="text-center mt-20 mb-10">
        <h1 className=" text-3xl font-bold mb-5">Featured Jobs</h1>
        <p>
          A selection of highlighted job postings, typically showcasing urgent
          or high-priority positions that require immediate attention.
        </p>
      </div>
      {/* Featured job component call --- */}
      <div className="mt-10 mb-5 gap-6 lg:px-12 flex flex-col sm:flex-col lg:flex-row">
        <div className="mx-5 gap-4 grid sm:grid-cols-1 lg:grid-cols-2 lg:w-[100%]">
          {featuredJobs.slice(0, seeAll ? 6 : 4).map((job) => (
            <SingleJobCard key={job.id} job={job}></SingleJobCard>
          ))}
        </div>
      </div>
      {/*  See all Jobs button  */}
      <div className="text-center">
        {!seeAll && (
          <button
            onClick={handleSeeAllJobs}
            className="btn rounded mb-5 bg-gradient-to-r from-pink-500 to-rose-500 text-black border-none"
          >
            See All Jobs
          </button>
        )}
      </div>
    </>
  );
};

export default Home;
