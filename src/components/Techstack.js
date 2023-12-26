import React from "react";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import {
  FaCss3Alt,
  FaReact,
  FaSass,
  FaBootstrap,
  FaWordpress,
  FaNode,
  FaLinux,
} from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { TbBrandOauth } from "react-icons/tb";
import {
  SiFirebase,
  SiRedux,
  SiTailwindcss,
  SiGreensock,
  SiJquery,
  SiPwa,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { BsGit } from "react-icons/bs";

const data = [
  {
    icon: <AiFillHtml5 fontSize={70} color="#fff" />,
    name: "HTML5",
  },
  {
    icon: <FaCss3Alt fontSize={70} color="#fff" />,
    name: "Css3",
  },
  {
    icon: <BiLogoJavascript fontSize={70} color="#fff" />,
    name: "Javascript",
  },

  {
    icon: <FaReact fontSize={70} color="#fff" />,
    name: "React",
  },

  {
    icon: <SiTailwindcss fontSize={70} color="#fff" />,
    name: "Tailwind",
  },
  {
    icon: <FaBootstrap fontSize={70} color="#fff" />,
    name: "Bootstrap",
  },
  {
    icon: <SiJquery fontSize={70} color="#fff" />,
    name: "JQuery",
  },
  {
    icon: <SiFirebase fontSize={70} color="#fff" />,
    name: "Firebase",
  },
  {
    icon: <BsGit fontSize={70} color="#fff" />,
    name: "Git",
  },
  {
    icon: <AiFillGithub fontSize={70} color="#fff" />,
    name: "Github",
  },
  {
    icon: <SiPwa fontSize={70} color="#fff" />,
    name: "PWA",
  },
  {
    icon: <FaNode fontSize={70} color="#fff" />,
    name: "Node",
  },
  {
    icon: <SiExpress fontSize={70} color="#fff" />,
    name: "Express",
  },
  {
    icon: <SiMongodb fontSize={70} color="#fff" />,
    name: "MongoDb",
  },
  {
    icon: <FaLinux fontSize={70} color="#fff" />,
    name: "Linux",
  },

  {
    icon: <TbBrandOauth fontSize={70} color="#fff" />,
    name: "Oauth",
  },
];
function Techstack() {
  return (
    <div className="relative w-11/12 lg:w-4/5 mx-auto flex items-center justify-center gap-3 flex-wrap my-5">
      <img
        src="./star.jpg"
        alt=""
        className="h-full w-full object-cover opacity-10 absolute bottom-0"
      />
      {data.map((item, i) => (
        <div className="text-center" key={i}>
          <div className="group">
            <div
              className="w-36 md:w-60 h-36 flex items-center justify-center m-3 border border-[#df8de2] bg-black/30 z-20 rounded-sm transition-all duration-300 transform hover:scale-105"
              key={i}
              style={{
                borderColor: "#df8de2", // Initial border color
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#ad50eb"; // Purple border on hover
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#df8de2"; // Reset to initial border color
              }}
            >
              <div
                className="border border-transparent"
                style={{ transition: "border-color 0.3s" }}
              >
                {item.icon}
              </div>
            </div>
            <p className="text-white opacity-0 group-hover:opacity-100">
              {item.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Techstack;
