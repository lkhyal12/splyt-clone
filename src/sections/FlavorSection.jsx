import React from "react";
import FlavorTitle from "../components/FlavorTitle";

const FlavorSection = () => {
  return (
    <section className="flavor-section">
      <div className="h-full flex flex-col lg:flex-row items-center relative">
        <div className="h-80 lg:h-full lg:w-[57%] flex-none md:mt-20 xl:mt-0">
          <FlavorTitle />
        </div>

        <div className="h-full"></div>
      </div>
    </section>
  );
};

export default FlavorSection;
