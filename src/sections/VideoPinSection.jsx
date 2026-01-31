import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { useMediaQuery } from "react-responsive";

const VideoPinSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".vd-pin-section",
        start: "-15% top",
        end: "200% top",
        scrub: true,
        pin: true,
      },
    });

    tl.to(".video-box", {
      ease: "power1.inOut",
      clipPath: "circle(100% at 50% 50%)",
    });
  }, []);
  return (
    <section className="vd-pin-section">
      <div
        className="video-box size-full"
        style={{
          clipPath: isMobile
            ? "circle(100% at 50% 50%)"
            : "circle(10% at 50% 50%)",
        }}
      >
        <video src="/videos/pin-video.mp4" playsInline muted loop autoPlay />
        <div className="abs-center  md:scale-100 scale-200">
          <img src="/images/circle-text.svg" alt="" className="spin-circle" />
          <div className="play-btn ">
            <img
              src="/images/play.svg"
              alt=""
              className="size-[3vw] ml-[.5vw]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPinSection;
