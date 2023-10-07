import React from "react";
import HighlightText from "../components/common/HighlightText";
import banner1 from "../assets/Images/aboutus1.webp";
import banner2 from "../assets/Images/aboutus2.webp";
import banner3 from "../assets/Images/aboutus3.webp";

const About = () => {
  return (
    <div>
      {/* section one  */}

      <section className="bg-richblack-700">
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
          <header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">
            Driving Innovation in Online Education for a
            <HighlightText text="Brighter Future" />
            <p className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
              Studynotion is at the forefront of driving innovation in online
              education. We're passionate about creating a brighter future by
              offering cutting-edge courses, leveraging emerging technologies,
              and nurturing a vibrant learning community.
            </p>
          </header>
          <div className="sm:h-[70px] lg:h-[150px]"></div>
          <div className="absolute bottom-0 left-[50%] translate-x-[-50%] grid w-[100%] grid-cols-3 gap-3 lg:gap-5 translate-y-[30%]">
            <img src={banner1} alt="" />
            <img src={banner2} alt="" />
            <img src={banner3} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
