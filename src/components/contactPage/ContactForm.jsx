import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import countrycode from "../../data/countrycode.json";

const ContactForm = ({ heading, text }) => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const submitContactForm = async (data) => {
    try {
      setLoading(true);
      const response = { status: "OK" };
      console.log("Logging response", response);
      setLoading(false);
    } catch (error) {
      console.log("Error:", error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstname: "",
        lastname: "",
        message: "",
        phoneNo: "",
      });
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <div
      className="border border-richblack-600 text-richblack-300 rounded-xl 
    p-7 lg:p-14 flex gap-3 flex-col"
    >
      <h2 className="text-4xl leading-10 text-richblack-5 font-semibold">
        {" "}
        {heading}{" "}
      </h2>
      <p> {text} </p>
      <div className="mt-7">
        <form
          action=""
          className="flex flex-col gap-7"
          onSubmit={handleSubmit(submitContactForm)}
        >
          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="firstname" className="label">
                First Name{" "}
              </label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="Enter first name "
                {...register("firstname", { required: true })}
                className="w-full rounded-[0.5rem] bg-richblack-800 p-[6px] md:p-[12px] 
                     text-richblack-5"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
              />

              {errors.firstname && <span> Please enter your name </span>}
            </div>

            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="lastname" className="label">
                Last Name{" "}
              </label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Enter last name "
                {...register("lastname", { required: true })}
                className="w-full rounded-[0.5rem] bg-richblack-800 p-[6px] md:p-[12px] 
                     text-richblack-5"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
              />

              {errors.lastname && <span> Please enter your name </span>}
            </div>

            <div className="flex flex-col gap-2 lg:w-[48%]"></div>
          </div>
          {/* email  */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="label">
              Email Address{" "}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email address "
              {...register("email", { required: true })}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[6px] md:p-[12px] 
                     text-richblack-5"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
            />

            {errors.email && <span>Please enter your email address</span>}
          </div>
          {/* phone number  */}
          <div className="flex flex-col gap-2">
            <label htmlFor="phonenumber" className="label">
              Phone Number{" "}
            </label>
            <div className="flex gap-5">
              <div className="flex w-[81px] flex-col gap-2">
                <select
                  name="dropdown"
                  id="dropdown"
                  {...register("countrycode", { required: true })}
                  className="w-full rounded-[0.5rem] bg-richblack-800 p-[6px] md:p-[12px] 
                     text-richblack-5"
                  style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                >
                  {countrycode.map((phonecode, index) => (
                    <option value={phonecode.code} key={index}>
                      {" "}
                      {phonecode.code} {""} {phonecode.country}{" "}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex w-[calc(100%-90px)] flex-col gap-2">
                <input
                  placeholder="+91 7808720908"
                  type="number"
                  id="phonenumber"
                  {...register("phoneNo", {
                    required: {
                      value: true,
                      message: "please enter your phone ",
                    },
                    maxLength: { value: 10, message: "Invalid phone number " },
                    minLength: { value: 8, message: "Invalid phone number" },
                  })}
                  className="w-full rounded-[0.5rem] bg-richblack-800 p-[6px] md:p-[12px] 
                     text-richblack-5"
                  style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                />
              </div>
            </div>
            {errors.phoneNo && <span>{errors.phoneNo.message}</span>}
          </div>

          {/* message  */}

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="label">
              Message{" "}
            </label>

            <textarea
              name="message"
              id="message"
              cols="30"
              rows="7"
              placeholder="Enter your message here"
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[6px] md:p-[12px] text-richblack-5"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              {...register("message", { required: true })}
            ></textarea>

            {errors.message && <span>Please enter your message </span>}
          </div>

          <button
            type="submit"
            className="rounded-md bg-yellow-50 px-6 py-3 text-center text-[13px] 
                     font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] 
                transition-all duration-200 hover:scale-95 hover:shadow-none 
             disabled:bg-richblack-500 sm:text-[16px] "
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
