import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/hero";
import gsap, { ScrollTrigger, SplitText } from "gsap/all";
import MessagesSection from "./sections/MessagesSection";
import FlavorSection from "./sections/FlavorSection";
gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);
const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <MessagesSection />
      <FlavorSection />
    </main>
  );
};

export default App;
