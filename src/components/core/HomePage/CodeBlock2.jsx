import React from "react";
import { Link } from "react-router-dom";
import YellowButton from "./YellowButton";
import { FaArrowRight } from "react-icons/fa";
import BlackButton from "./BlackButton";
import { TypeAnimation } from "react-type-animation";

const CodeBlock2 = () => {
  return (
    <div className="flex lg:flex-row-reverse my-20 justify-between flex-col lg:gap-10 gap-10">
      <div className="w-[100%] lg:w-[50%] flex flex-col gap-8">
        <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
          Start
          <span className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold">
            {" "}
            coding in seconds
          </span>
        </div>

        <div className="text-richblack-300 text-base font-bold w-[85%] -mt-3">
          Go ahead, give it a try. Our hands-on learning environment means
          you'll be writing real code from your very first lesson.
        </div>

        <div className="flex gap-7 mt-7">
          <Link to={"/signup"}>
            <YellowButton text={"Continue Lession"}>
              <FaArrowRight />
            </YellowButton>
          </Link>
          <Link to={"/signup"}>
            <BlackButton text={"Learn More"} />
          </Link>
        </div>
      </div>
      <div className="h-fit code-border flex flex-row py-3 text-[10px] sm:text-sm leading-[18px] sm:leading-6 relative w-[100%] lg:w-[470px]">
        <div className="text-center flex flex-col   w-[10%] select-none text-richblack-400 font-inter font-bold ">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
        </div>
        <div className="w-[90%] flex flex-col gap-2 font-bold font-mono text-white pr-1">
          <div className="absolute codeblock2"></div>
          <TypeAnimation
            sequence={[
              `import React from "react";
              import YellowButton from "./YellowButton";
              import { TypeAnimation } from "react-type-animation";
              import { FaArrowRight } from "react-icons/fa";\n
              const Home = () =>{
                return(
                  <div> ram kumar </div>
                )
              }
              export default Home;
              `,
              2000,
              "",
            ]}
            repeat={Infinity}
            cursor={true}
            style={{ whiteSpace: "pre-line", display: "block" }}
            omitDeletionAnimation={true}
          />
        </div>
      </div>
    </div>
  );
};

export default CodeBlock2;
