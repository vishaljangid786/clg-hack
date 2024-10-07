import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Hackathon = () => {
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".main",
        start: "50% 50%",
        end: "100% 50%",
        scrub: 2,
        pin: true,
      },
    });

    tl.to(
      ".top",
      {
        top: "-50%",
      },
      "a"
    ).to(
      ".bottom",
      {
        bottom: "-50%",
      },
      "a"
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleClick = () => {
    gsap.to(".circle", {
      scale: 1,
      duration: 1,
      ease: "power2.inOut",
      onComplete: function () {
        gsap.to(".circle", {
          scale: 0,
          duration: 3,
          ease: "power2.inOut",
        });
      },
    });
  };

  const gtstart = () => {
    setInterval(() => {
      window.location.href = "/home";
    }, 1000);
  };

  return (
    <div className="main relative w-full h-screen bg-zinc-900">
      <div className="top absolute  overflow-hidden z-20 top-0 left-0 w-full h-1/2 bg-white">
        <h1 className="absolute text-[8vw] md:text-[12vw] pl-10 font-bold top-[60%] text-center">
          SMART CAMPUS
        </h1>
      </div>
      <div className="center w-full h-screen bg-black text-white">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="font-bold text-8xl">Welcome to SMART CAMPUS</h1>
          <p className="text-xl text-center mt-5">
            Empowering Innovation, Connecting Tomorrow: The Future of Smart
            Campuses
          </p>
          <div
            onClick={handleClick}
            href="#"
            className="get-st relative inline-block px-5 mt-5  py-2 bg-white text-white transition-all duration-400 letter-spacing-3"
          >
            <span className="relative st" onClick={gtstart}>
              Getting Started
            </span>
            <i className="absolute inset-0 block"></i>
            <div className="circle w-[120vw] h-[120vw] scale-0 flex items-center justify-center bg-white z-10 absolute top-1/2 left-1/2 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>
      </div>
      <div className="bottom overflow-hidden z-20 absolute bottom-0 left-0 w-full h-1/2 bg-white">
        <h1 className="absolute text-[8vw] md:text-[12vw] pl-10 font-bold bottom-[66%] text-center">
          SMART CAMPUS
        </h1>
      </div>
    </div>
  );
};

export default Hackathon;
