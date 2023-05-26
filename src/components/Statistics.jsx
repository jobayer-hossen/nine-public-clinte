import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";
import Lottie from "lottie-react";
import AnimationResult from "../assets/result/141606-meditation.json";

const Statistics = () => {
  //  Assignment data
  const data = [
    { name: "1 No Assignment", value: 60 },
    { name: "2 No Assignment", value: 58 },
    { name: "3 No Assignment", value: 60 },
    { name: "4 No Assignment", value: 60 },
    { name: "5 No Assignment", value: 60 },
    { name: "6 No Assignment", value: 60 },
    { name: "7 No Assignment", value: 60 },
    { name: "8 No Assignment", value: 60 },
  ];

  return (
    <>
      <h5 className="text-3xl rounded mt-2 text-white text-center p-2 w-[85%] mx-auto bg-gradient-to-r from-fuchsia-500 to-cyan-500">
        My Assignment mark
      </h5>
      <div className="flex justify-center items-center">
        {/* chart section */}
        <div className="">
          <PieChart width={600} height={500}>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8080ff"
              label
            />
            <Tooltip />
          </PieChart>
        </div>
        {/* animation section */}
        <div className="">
          <Lottie
            className="mx-auto w-[50%] mt-auto"
            animationData={AnimationResult}
            loop={true}
          />
        </div>
      </div>
    </>
  );
};

export default Statistics;
