import React from "react";
import Tilt from "react-parallax-tilt";

function Interduce() {
  return (
    <div className="flex flex-wrap items-center justify-center flex-col lg:flex-row relative overflow-hidden">
      <img
        src="./star.jpg"
        alt=""
        className="h-full w-full object-cover opacity-10 absolute bottom-0"
      />
      <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex items-center justify-center flex-col my-10 lg:gap-10">
        <h1 className="flex text-white text-2xl lg:text-4xl gap-2 my-10">
          LET ME <p className="text-[#ad50eb]">INTRODUCE</p> MYSELF
        </h1>
        <div className="flex items-center m-auto justify-center w-11/12 lg:w-3/4 lg:mr-10">
          <span className="flex flex-col gap-3 text-white items-start  text-base justify-center font-semibold lg:text-lg">
            <p>
             I am a MERN stack web developer specialised in backend development  🤷‍♂️
            </p>

            <p>
              I am fluent in Frameworks like{" "}
              <span className="text-[#ad50eb]">React JS ,EJS, Express, Mongoose.</span>
            </p>

            <p>
              My field of Interest's are building new{" "}
              <span className="text-[#ad50eb]">Web Apps</span> .
            </p>
            <p>
             I have a good hold over programming languages like{" "}
              <span className="text-[#ad50eb]">C</span>,
              <span className="text-[#ad50eb]">C++</span>,
              <span className="text-[#ad50eb]"> Python</span> and{" "}
              <span className="text-[#ad50eb]">Javascript</span>
            </p>

            <p>
             I'm looking forward to getting some industry work experience through <br/>{" "}
              <span className="text-[#ad50eb]">Modern Javascript Library</span>{" "}
              and <span className="text-[#ad50eb]">Frameworks </span>
              like
              <span className="text-[#ad50eb]"> React.js.</span>
            </p>
            <p>
              And I will soon be able to create a{" "}
              <span className="text-[#ad50eb]">website </span> and{" "}
              <span className="text-[#ad50eb]"> web app</span> with
              <span className="text-[#ad50eb]"> Nextjs</span> and{" "}
              <span className="text-[#ad50eb]">Typescript</span> and
              <span className="text-[#ad50eb]"> GraphQl</span>.
            </p>
          </span>
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center p-10">
        <Tilt>
          <img src="man2.jpg" alt="image" className="object-cover" />
        </Tilt>
      </div>
    </div>
  );
}

export default Interduce;
