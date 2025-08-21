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
          name={"MockView"}
          images={[
            "/project/MockView1.png",
            "/project/MockView2.png",
            "/project/MockView3.png",
            "/project/MockView4.png",
            "/project/MockView5.png",
          ]}
          about={
            "MockView: Next.js-based AI-powered mock interview and test platform with PostgreSQL (NeonDB) + Drizzle ORM for scalable data handling, Clerk for authentication, and Redis for caching/rate-limiting. Features include AI-generated mock tests with detailed feedback, ratings, and reports; PDF + email system built with Node.js, BullMQ, PDFKit, and Nodemailer handling 1000+ requests/min with 99.9% uptime; optimized Redis caching reducing response time from 2s to 60ms."
          }
          demo={"https://mock-view-eosin.vercel.app/"}
          code={"https://github.com/Upadhyay-Yatendra/MockView"}
        />
        <ProjectCard
          name={"Travel World 🚀"}
          images={[
            "/project/TravelWorld.png",
            "/project/TravelWorld2.png",
            "/project/TravelWorld3.png",
            "/project/TravelWorld4.png",
          ]}
          about={
            "TravelWorld: FullStack MERN-based tour and travels app with integrated OpenAI-powered chatbot for seamless trip planning, ticket booking, and destination reviews.Razorpay payment integration to accept customer payments."
          }
          demo={"https://travel-world-drab.vercel.app/"}
          code={"https://github.com/Upadhyay-Yatendra/TravelWorld"}
        />

        <ProjectCard
          name={
            <>
              Threadify 
            </>
          }
          images={[
            "/project/Threads1.png",
            "/project/Threads2.png",
            "/project/Threads3.png",
            "/project/Threads4.png",
            "/project/Threads5.png",
          ]}
          about={
            "Threadify: A full-Stack application fostering user connections, posts, and real-time chats via Socket.Io with dark mode functionality. Experience dynamic social interactions in a compact, feature-rich platform.Explore an enhanced social media environment where users can share, connect, and converse effortlessly."
          }
          demo="https://threadify-omega.vercel.app/"
          code="https://github.com/Upadhyay-Yatendra/Threadify"
        />

        <ProjectCard
          name={"PictoFusion"}
          images={["/project/DALLE.png"]}
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
          images={["/project/recipe.jpg"]}
          about={
            "Meet Delishify – the responsive React based recipe app that lets you search for any food - it's recipe and ingredients with ease."
          }
          demo={"https://delishify-96mk.vercel.app/"}
          code={"https://github.com/Upadhyay-Yatendra/Delishify"}
        />

        <ProjectCard
          name={"CodeX 🤖"}
          images={["/project/img4.png"]}
          about={
            "CodeX: The Responsive FullStack AI ChatBot that solves user queries instantly.It uses React on front-end and node-express on backend.Built using openAi plugins"
          }
          demo={"https://code-x-fawn.vercel.app/"}
          code={"https://github.com/Upadhyay-Yatendra/CodeX"}
        />

        {/* <ProjectCard
          name={"E-commerce platform Backend 🗃️"}
          images={["/project/eCom.jpg"]}
          about={
            "This is a complete working Backend of an E-commerce platform like amazon.It has all the functionalities required for an e-commerce plaform."
          }
          demo={"https://ecom-api-1qfd.onrender.com/"}
          code={"https://github.com/Upadhyay-Yatendra/Ecom-api"}
        /> */}
      </div>
    </div>
  );
}

export default Project;
