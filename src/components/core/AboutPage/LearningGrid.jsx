import React from "react";
import HighlightText from "../../common/HighlightText";
import { Link } from "react-router-dom";
import YellowButton from "../HomePage/YellowButton";

const LearningGridArray = [
  {
    order: -1,
    heading: "World-Class Learning for",
    highlightText: "Anyone, Anywhere",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
    BtnText: "Learn More",
    BtnLink: "/",
  },
  {
    order: 1,
    heading: "Curriculum Based on Industry Needs",
    description:
      "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
  },
  {
    order: 2,
    heading: "Our Learning Methods",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 3,
    heading: "Certification",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 4,
    heading: `Rating "Auto-grading"`,
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 5,
    heading: "Ready to Work",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
];

const LearningGrid = () => {
  return (
    <div className="grid mx-auto w-[350px] xl:w-fit grid-cols-1 xl:grid-cols-4 mb-12">
      {LearningGridArray.map((card, index) => (
        <div
          key={index}
          className={`${index === 0 && "lg:col-span-2 lg:h-[280px] p-5"}
                ${
                  card.order % 2 === 1
                    ? "bg-richblack-700 lg:h-[280px] p-5"
                    : "bg-richblack-800 lg:h-[280px] p-5"
                }
                ${card.order === 3 && "lg:col-start-2"}
                ${card.order < 0 && "bg-transparent"}
                `}
        >
          {card.order < 0 ? (
            <div className="lg:w-[90%] flex flex-col pb-5 gap-3">
              <div className="font-semibold text-4xl">
                {" "}
                {card.heading} <HighlightText text={card.highlightText} />{" "}
              </div>
              <p className="font-medium"> {card.description} </p>
              <div className="w-fit mt-4">
                <Link to={card.BtnLink}>
                  <YellowButton text={card.BtnText} />
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-8 p-7">
              <h2 className="text-richblack-5 text-lg"> {card.heading} </h2>
              <p className="text-richblack-300 font-medium">
                {" "}
                {card.description}{" "}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default LearningGrid;
