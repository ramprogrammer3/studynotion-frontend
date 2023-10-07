import React from "react";

const Stats = [
  { count: "5K", label: "Active Students" },
  { count: "10+", label: "Mentors" },
  { count: "200+", label: "Courses" },
  { count: "50+", label: "Awards" },
];

const StatsComponent = () => {
  return (
    <div className="bg-richblack-700">
      <div className="flex flex-col gap-10 justify-between w-11/12 max-w-maxContent text-white mx-auto ">
        <div className="grid grid-cols-2 md:grid-cols-4 text-center">
          {Stats.map((item, index) => (
            <div key={index} className="flex flex-col py-10">
              <h2 className="text-[30px] font-bold text-richblack-5">
                {" "}
                {item.count}{" "}
              </h2>
              <h3 className="font-semibold text-[16px] text-richblack-500">
                {" "}
                {item.label}{" "}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsComponent;
