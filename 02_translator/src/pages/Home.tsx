import React from "react";
import Hero from "../components/Hero";
import HeroText from "../components/HeroText";
import Translate from "../components/Translate";

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <HeroText />
      <Translate />
    </main>
  );
};

export default Home;
