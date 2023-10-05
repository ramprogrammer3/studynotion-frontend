import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RxCountdownTimer } from "react-icons/rx";
import OtpInput from "react-otp-input";
import { BiArrowBack } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { sendOtp, signUp } from "../services/operations/authAPI";

const VerifyEmail = () => {
  const [otp, setOtp] = useState("");
  const { signupData } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    const {
      accountType,
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    } = signupData;

    dispatch(
      signUp(
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
        navigate
      )
    );
  };

  return (
    <div className="w-screen h-screen">
      <div
        className="text-richblack-5 w-11/12 
      max-w-maxContent flex justify-center items-center h-full"
      >
        <div className="max-w-[500px] p-4 lg:p-8 flex flex-col justify-center">
          <h2 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">
            Verify Email{" "}
          </h2>
          <p className="text-[1.125rem] leading-[1.625rem] my-4 text-richblack-100">
            A verification code has been sent to you. Enter the code below{" "}
          </p>
          <form action="" className="mx-auto" onSubmit={handleVerifyOtp}>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span>-</span>}
              renderInput={(props) => (
                <input
                  {...props}
                  placeholder=" 0 "
                  style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                  className="w-[20px] lg:w-[40px] border-0 bg-richblack-800
                   rounded-[0.5rem] text-richblack-5 
                   aspect-square text-center focus:border-0 
                   focus:outline-2 focus:outline-yellow-50"
                />
              )}
              containerStyle={{
                justifyContent: "space-between",
                gap: "0 3px",
              }}
            />
            <button
              type="submit"
              className="w-full bg-yellow-50 py-[6px] md:py-[12px] px-[6px] md:px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900"
            >
              Verify Email
            </button>
          </form>
          <div
            className="flex items-center justify-between mt-6 flex-wrap
          md:flex-nowrap gap-y-4 md:gap-y-0"
          >
            <Link to="/signup">
              <p className="text-richblack-5 flex items-center gap-x-2">
                <BiArrowBack /> Back To Signup
              </p>
            </Link>
            <button
              className="flex items-center text-blue-100 gap-x-2"
              onClick={() => dispatch(sendOtp(signupData.email, navigate))}
            >
              <RxCountdownTimer />
              Resend OTP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
