import { ButtonPrimary, ButtonOutline } from "./Button";
import React from "react";

const Hero = () => {
  return (
    <section className="pt-24 lg:pt-36 min-h-screen flex items-center justify-center bg-gradient-to-tl from-blue-900 to-slate-800 px-6">
      <div className="container text-center">
        <div className="relative">
          {/* "Looking for work" badge */}
          <div className="flex items-center justify-center gap-1.5 text-zinc-100 text-xs sm:text-sm tracking-wide fade-in-delayed">
            <span className="relative w-2 h-2 rounded-full bg-emerald-400">
              <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
            </span>
            Looking for work
          </div>

          {/* Typing animation for the title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-5 mb-6 mx-auto text-shadow leading-snug px-4 inline-block">
            <span className="typing-effect">Charlie Wilson's Portfolio</span>
          </h2>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 fade-in-delayed">
            <ButtonPrimary
              label="Download CV"
              icon="download"
              href="/Charlie-Wilson-Portfolio/Resume_Charlie_Wilson.pdf"
              download
            />
            <ButtonOutline href="#about" label="Scroll Down" icon="arrow_downward" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
