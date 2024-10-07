import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const canvasRef = useRef(null);
  const frames = { currentIndex: 0, maxIndex: 230 };
  const images = [];
  let imagesLoaded = 0;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const preloadImages = () => {
      for (let i = 1; i <= frames.maxIndex; i++) {
        const img = new Image();
        img.src = `/compressed_images/frame_${i.toString().padStart(4, "0")}.jpg`;
        img.onload = () => {
          imagesLoaded++;
          if (imagesLoaded === frames.maxIndex) {
            loadImage(frames.currentIndex);
            startAnimation();
          }
        };
        images.push(img);
      }
    };

    const loadImage = (index) => {
      if (index >= 0 && index <= frames.maxIndex) {
        const img = images[index];
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
        frames.currentIndex = index;
      }
    };

    const startAnimation = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".parent",
          start: "top top",
          scrub: 2,
          end: "bottom bottom",
        },
      });

      tl.to(frames, { currentIndex: 30, ease: "linear", onUpdate: () => loadImage(Math.floor(frames.currentIndex)) }, "first")
        .to(".animate1", { opacity: 0, ease: "linear" }, "first")
        .to(frames, { currentIndex: 60, ease: "linear", onUpdate: () => loadImage(Math.floor(frames.currentIndex)) }, "second")
        .to(".animate2", { opacity: 1, ease: "linear" }, "second")
        .to(frames, { currentIndex: 90, ease: "linear", onUpdate: () => loadImage(Math.floor(frames.currentIndex)) }, "third")
        .to(".animate2", { opacity: 1, ease: "linear" }, "third")
        .to(frames, { currentIndex: 120, ease: "linear", onUpdate: () => loadImage(Math.floor(frames.currentIndex)) }, "fourth")
        .to(".animate2", { opacity: 0, ease: "linear" }, "fourth")
        .to(frames, { currentIndex: 150, ease: "linear", onUpdate: () => loadImage(Math.floor(frames.currentIndex)) }, "fifth")
        .to(".animate3", { opacity: 1, ease: "linear" }, "fifth")
        .to(frames, { currentIndex: 180, ease: "linear", onUpdate: () => loadImage(Math.floor(frames.currentIndex)) }, "sixth")
        .to(".animate3", { opacity: 1, ease: "linear" }, "sixth")
        .to(frames, { currentIndex: 210, ease: "linear", onUpdate: () => loadImage(Math.floor(frames.currentIndex)) }, "seventh")
        .to(".animate3", { opacity: 0, ease: "linear" }, "seventh")
        .to(frames, { currentIndex: 240, ease: "linear", onUpdate: () => loadImage(Math.floor(frames.currentIndex)) }, "eight")


      const lenis = new Lenis();
      const raf = (time) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);

      window.addEventListener("resize", () => {
        loadImage(Math.floor(frames.currentIndex));
      });

      preloadImages();

      return () => {
        window.removeEventListener("resize", () => {
          loadImage(Math.floor(frames.currentIndex));
        });
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    };

    startAnimation();
  }, []);

  return (
    <div className="w-full bg-zinc-900">
      <div className="parent relative w-full h-[600vh]">
        <div className="w-full sticky top-0 left-0 h-screen overflow-x-hidden">
          <canvas className="w-full h-screen" ref={canvasRef}></canvas>
          <div className="absolute animate1 z-[2] text-white bottom-10 w-1/2 left-10">
            <h1 className="leading-20 font-[100] text-xl">
              &copy; 2024 Smart Campus
            </h1>
            <h1 className="text-3xl">EMPOWERING EDUCATION - SHAPING FUTURES</h1>
          </div>
          <div className="absolute animate2 flex z-[2] text-white bottom-10 w-1/2 right-10 text-right opacity-0">
            <h1 className="leading-20 font-[100] uppercase text-6xl">
              Transforming Visions
            </h1>
            <h1 className="text-xl w-1/2">
              Building identity and inspiring action. Sculpting digital exposure
              resonte.
            </h1>
          </div>
          <div className="absolute animate3 z-[2] text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center opacity-0">
            <h1 className="leading-20 font-[100] uppercase text-6xl">
              Unlocking Creative Potential
            </h1>
            <h1 className="text-xl">
              Pushing boundaries and redefining the norm. Unlocking creative potential
              and crafting unique experiences in every endeavour.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
