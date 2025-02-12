import { ButtonPrimary, ButtonOutline } from "./Button";
import React from 'react';

const Hero = () => {
  return (
    <section
      className="pt-28 lg:pt-36 min-h-screen flex items-center justify-center bg-gradient-to-tl from-blue-900 to-slate-800"
    >
      <div className="container text-center">
        <div className="relative">
          {/* "Looking for work" badge */}
          <div className="flex items-center justify-center gap-1.5 text-zinc-100 text-sm tracking-wide fade-in-delayed">
            <span className="relative w-2 h-2 rounded-full bg-emerald-400">
              <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
            </span>
            Looking for work
          </div>

          {/* Typing animation for the title */}
          <h2 className="headline-1 max-w-[20ch] mt-5 mb-8 text-shadow mx-auto">
            <div className="typing-effect">Charlie Wilson's Portfolio</div>
          </h2>

          {/* Buttons */}
          <div className="flex justify-center items-center gap-3 fade-in-delayed">
            <ButtonPrimary
              label="Download CV"
              icon="download"
              href="/Charlie-Wilson-Portfolio/Charles_Wilson_Resume_Final.pdf"
              download="/Charlie-Wilson-Portfolio/Charles_Wilson_Resume_Final.pdf"
            />
            <ButtonOutline
              href="#about"
              label="Scroll Down"
              icon="arrow_downward"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
