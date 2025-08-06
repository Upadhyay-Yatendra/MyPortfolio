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
          A Bit More About Me
        </h1>
        <div className="flex items-center m-auto justify-center w-11/12 lg:w-3/4 lg:mr-10">
          <span className="flex flex-col gap-3 text-white items-start text-base justify-center font-semibold lg:text-lg">
            <p>
              Full-stack developer with a backend focus — building scalable APIs
              with <span className="text-[#ad50eb]">FastAPI</span> and{" "}
              <span className="text-[#ad50eb]">Node.js</span>.
            </p>

            <p>
              Experienced in{" "}
              <span className="text-[#ad50eb]">React.js, Next.js , Node.js</span>, and
              modern JavaScript/TypeScript/Python workflows.
            </p>

            <p>
              Interned at{" "}
              <span className="text-[#ad50eb]">Accenture India</span> and{" "}
              <span className="text-[#ad50eb]">Gharpayy</span> — exposure to
              both enterprise and startup ecosystems.
            </p>

            <p>
              Solved 500+ problems on{" "}
              <span className="text-[#ad50eb]">Leetcode</span> and{" "}
              <span className="text-[#ad50eb]">Coding Ninjas</span>; fluent in{" "}
              <span className="text-[#ad50eb]">Python</span> and{" "}
              <span className="text-[#ad50eb]">JavaScript</span>.
            </p>

            <p>
              Currently building GenAI apps using{" "}
              <span className="text-[#ad50eb]">
                OpenAI APIs, LangChain (RAG), FAISS
              </span>
              , and deploying full-stack AI projects.
            </p>
          </span>
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center p-10">
        <Tilt>
          <img src="man2.jpg" alt="" className="object-cover" />
        </Tilt>
      </div>
    </div>
  );
}

export default Interduce;
