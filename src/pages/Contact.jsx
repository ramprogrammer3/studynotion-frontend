import React from "react";
import ContactForm from "../components/contactPage/ContactForm";
import AddressContact from "../components/contactPage/AddressContact";
import Footer from "../components/common/Footer"

const Contact = () => {
  return (
    <div>
      <div className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white lg:flex-row">
        <div className="lg:w-[40%]">
          {" "}
          <AddressContact />{" "}
        </div>
        <div className="lg:w-[60%]">
          <ContactForm
            heading="Got a Idea? We've got the skills. Let's team up"
            text="Tell us more about yourself and what you're got in mind."
          />
        </div>
      </div>

      {/* review section  */}
      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">

        <h2 className="text-center text-4xl font-semibold mt-8">Reviews from other learners</h2>

      </div>

      {/* footer section  */}

      <Footer />


    </div>
  );
};

export default Contact;
