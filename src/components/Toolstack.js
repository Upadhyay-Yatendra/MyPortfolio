import React from "react";
import { BsWindows } from "react-icons/bs";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiRender,
} from "react-icons/si";
function Toolstack() {
  const data = [
    {
      icon: <BsWindows fontSize={70} color="#fff" />,
      name: "Windows",
    },
    {
      icon: <SiVisualstudiocode fontSize={70} color="#fff" />,
      name: "VSCode",
    },
    {
      icon: <SiPostman fontSize={70} color="#fff" />,
      name: "Postman",
    },
    {
      icon: <SiVercel fontSize={70} color="#fff" />,
      name: "Vercel",
    },
    {
      icon: <SiRender fontSize={70} color="#fff" />,
      name: "Render",
    },
  ];

  const textStyle = {
    color: "white",
    marginTop: "0.5rem",
  };

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

export default Toolstack;
