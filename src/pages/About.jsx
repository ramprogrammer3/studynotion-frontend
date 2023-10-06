import React from "react";
import BannerImage1 from "../assets/Images/aboutus1.webp";
import BannerImage2 from "../assets/Images/aboutus2.webp";
import BannerImage3 from "../assets/Images/aboutus3.webp";

const About = () => {
  return (
    <div className="mx-auto text-white z-0">
      {/* section 1 */}

      <div className="bg-richblack-700  pt-[80px] pb-5">
        <div className="w-11/12 max-w-maxContent flex flex-col  items-center mx-auto">
          <div className="flex flex-col items-center sm:w-[400px] md:w-[768px]">
            <p className="text-richblack-200 text-center mb-5">About Us</p>
            <h2
              className="text-richblack-5 font-semibold mb-5 text-center
            md:flex md:flex-col md:items-center text-[18px] md:text-3xl"
            >
              Driving Innovation in Online Education for a{" "}
              <span className="gradient5">Brighter Future</span>
            </h2>
            <p className="text-richblack-300 text-center text-[16px] font-medium font-inter leading-6">
              Studynotion is at the forefront of driving innovation in online
              education. We're passionate about creating a brighter future by
              offering cutting-edge courses, leveraging emerging technologies,
              and nurturing a vibrant learning community.
            </p>
          </div>

          {/* <div className="relative mt-10">
            <div
              className=" md:flex flex-row 
              flex-wrap justify-center gap-x-3 mx-auto "
            >
              <img src={BannerImage2} alt=""  />
              <img src={BannerImage1} alt=""  />
              <img src={BannerImage3} alt="" />
            </div>
          </div> */}
        </div>
      </div>

      {/* section 2 */}
      <div className="w-11/12 max-w-maxContent  mx-auto">
        <p className="text-center font-inter text-[18px] md:text-3xl py-10 text-richblack-100">"We are passionate about revolutionizing the way we learn. Our innovative platform <span className="gradient5">combines technology</span> , <span className="gradient6">expertise</span>, and community to create an <span className="gradient8">unparalleled educational experience.</span>"</p>
      </div>
    </div>
  );
};

export default About;
