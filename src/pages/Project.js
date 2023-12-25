import React from "react";
import ProjectCard from "../components/ProjectCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThreads } from "@fortawesome/free-brands-svg-icons";

function Project() {
  return (
    <div className="flex flex-wrap items-center justify-center flex-col lg:flex-row relative overflow-hidden ">
      <img
        src="./star.jpg"
        alt=""
        className="h-full w-full object-cover opacity-20 absolute bottom-0"
      />
      <div className="z-20 flex items-center justify-center gap-3 m-2 flex-wrap">
        <ProjectCard
          name={
            <>
              Threads Clone <FontAwesomeIcon icon={faThreads} />
            </>
          }
          image="/project/Threads2.png"
          about={
            "Threads Clone: A streamlined MERN Stack replica fostering user connections, posts, and real-time chats via Socket.Io with dark mode functionality. Experience dynamic social interactions in a compact, feature-rich platform.Explore an enhanced social media environment where users can share, connect, and converse effortlessly."
          }
          demo="https://cloning-threads.vercel.app/"
          code="https://github.com/Upadhyay-Yatendra/Cloning-Threads"
        />
        <ProjectCard
          name={"Travel World 🚀"}
          image={"/project/TravelWorld.png"}
          about={
            "TravelWorld: FullStack MERN-based tour and travels app with integrated OpenAI-powered chatbot for seamless trip planning, ticket booking, and destination reviews."
          }
          demo={"https://travel-world-drab.vercel.app/"}
          code={"https://github.com/Upadhyay-Yatendra/TravelWorld"}
        />

        <ProjectCard
          name={"PictoFusion 🖼️"}
          image={"/project/DALLE.png"}
          about={
            "PictoFusion is a modern Ai using web app.It lets user generate Ai images based on the given prompt .Users can share their creations to the community platform "
          }
          demo={
            "https://6526e22d5a0ce607196e468b--spectacular-twilight-f6d030.netlify.app/"
          }
          code={"https://github.com/Upadhyay-Yatendra/DallE-Clone"}
        />

        <ProjectCard
          name={"Delishify 😋"}
          image={"/project/recipe.jpg"}
          about={
            "Meet Delishify – the responsive React based recipe app that lets you search for any food - it's recipe and ingredients with ease."
          }
          demo={"https://delishify-96mk.vercel.app/"}
          code={"https://github.com/Upadhyay-Yatendra/Delishify"}
        />

        <ProjectCard
          name={"CodeX 🤖"}
          image={"/project/img4.png"}
          about={
            "CodeX: The Responsive FullStack AI ChatBot that solves user queries instantly.It uses React on front-end and node-express on backend.Built using openAi plugins"
          }
          demo={"https://code-x-fawn.vercel.app/"}
          code={"https://github.com/Upadhyay-Yatendra/CodeX"}
        />

        <ProjectCard
          name={"E-commerce platform Backend 🗃️"}
          image={"/project/eCom.jpg"}
          about={
            "This is a complete working Backend of an E-commerce platform like amazon.It has all the functionalities required for an e-commerce plaform."
          }
          demo={"https://ecom-api-1qfd.onrender.com/"}
          code={"https://github.com/Upadhyay-Yatendra/Ecom-api"}
        />
      </div>
    </div>
  );
}

export default Project;
