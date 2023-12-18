import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Interduce from "../components/Interduce";
import { logPageView } from "../analytics";

function Home() {
  useEffect(() => {
    // Log page view on component mount
    logPageView();
  }, []);
  return (
    <div>
      <Hero />
      <Interduce />
    </div>
  );
}

export default Home;
