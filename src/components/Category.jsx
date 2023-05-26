import React from "react";

const Category = ({ category }) => {
  // destructure category data ----
  const { logo, name, available } = category;
  return (
    // Job Category List card information ---
    <>
      <div className="card rounded w-[80%] bg-purple-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={logo} alt="Category Emage" className=" w-20 h-20 rounded" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="font-bold">{name}</h2>
          <p>{available}</p>
        </div>
      </div>
    </>
  );
};

export default Category;
