import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/hero";
import gsap, { ScrollSmoother, ScrollTrigger, SplitText } from "gsap/all";
import MessagesSection from "./sections/MessagesSection";
import FlavorSection from "./sections/FlavorSection";
import { useGSAP } from "@gsap/react";
import NutritionSection from "./sections/NutritionSection";
import BenefitSection from "./sections/BenefitSection";
import VideoPinSection from "./sections/VideoPinSection";
import TestimonialSection from "./sections/TestimonialSection";
import FooterSection from "./sections/FooterSection";
gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollSmoother);
const App = () => {
  // useGSAP(() => {
  //   ScrollSmoother.create({
  //     wrapper: "#smooth-wrapper",
  //     content: "#smooth-content",
  //     smooth: 1.2,
  //     effects: true,
  //   });
  // }, []);
  return (
    <main>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Navbar />
          <Hero />
          <MessagesSection />
          <FlavorSection />
          <NutritionSection />
          <div>
            <BenefitSection />
            <TestimonialSection />
          </div>

          <FooterSection />
        </div>
      </div>
    </main>
  );
};

export default App;
