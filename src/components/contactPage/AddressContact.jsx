import React from "react";
import { IoCall } from "react-icons/io5";
import { BsGlobeAmericas } from "react-icons/bs";
import { HiMiniChatBubbleLeftRight } from "react-icons/hi2";

const contactAddress = [
  {
    icon: HiMiniChatBubbleLeftRight,
    subHeading: "Chat on us",
    text1: "Our friendly team is here to help.",
    text2: "developer.ramkumar07@gmail.com",
    id: 1,
  },

  {
    icon: BsGlobeAmericas,
    subHeading: "Visit us",
    text1: "Come and say hello at our office HQ.",
    text2:
      "Magantu Colony salarpur Noida 101 , infront of sector 83 metro station ",
    id: 2,
  },

  {
    icon: IoCall,
    subHeading: "Call us",
    text1: "Mon - Fri From 8am to 5pm",
    text2: "+91 7808720908",
    id: 3,
  },
];

const AddressContact = () => {
  return (
    <div className="flex flex-col gap-6 rounded-xl bg-richblack-800 p-4 lg:p-6">
        {
          contactAddress.map((address)=>(
            <div className="flex flex-col gap-[2px] p-3 text-sm text-richblack-200" key={address.id}>
              <div className="flex flex-row items-center gap-3">
                <address.icon style={{fontSize : "25px"}} />
                <h2 className="text-lg font-semibold text-richblack-5"> {address.subHeading} </h2>
              </div>
              <p className="font-medium"> {address.text1} </p>
              <p className="font-semibold"> {address.text2} </p>
            </div>
          ))
        }
    </div>
  );
};

export default AddressContact;
