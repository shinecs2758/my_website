import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import programer from "../../public/images/programmer.jpg";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>Passion Meets Code.</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I’m Shine C S, a self-motivated developer from India, driven
              by curiosity and <br />a love for building things with
              React,Next.js and modern web technologies.
            </p>
            <div className="flex flex-col gap-4 md:flex-row md:gap-4">
              <Button
                text="See My Work"
                className="w-full max-w-xs md:w-80 md:h-16 h-12"
                id="counter"
              />
              <Button
                text="Download My CV"
                className="w-full max-w-xs md:w-80 md:h-16 h-12"
                href="/Shine-C-S-Front End Developer (1).pdf"
                download
              />
            </div>
          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
        <figure>
          <div className="hero-3d-layout">
            <img
              src={programer}
              alt="Programmer"
              loading="lazy"
              className="w-full h-full object-contain"
            />
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
