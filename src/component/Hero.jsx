import React from "react";
import iyiade from "../assets/images/AlloIyiade.jpg";
import heroBg from "../assets/images/hero-bg.jpg";
import Button from "../common/Button";
import { FaArrowRight } from "react-icons/fa6";
import AnimatedBorderButton from "../common/AnimatedBorderButton";
import { FaDownload } from "react-icons/fa6";
import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaChevronDown,
} from "react-icons/fa6";

const Hero = () => {
  const socials = [
    {
      id: "01",
      icon: <FaTwitter />,
      href: "https://x.com/IyiadeTobiloba",
    },
    {
      id: "02",
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/iyiade-allo-2a1295402/",
    },
    {
      id: "03",
      icon: <FaGithub />,
      href: "https://github.com/iyiade08",
    },
  ];

  const skills = [
    "React",
    "HTML",
    "Tailwind CSS",
    "JavaScript",
    "Context API",
    "Django",
    "Python",
    "MongoDB",
    "PostgreSQL",
    "Zustand",
  ];
  return (
    <section className="min-h-screen relative flex items-center overflow-hidden ">
      {/* background */}
      <div className="absolute inset-0">
        <img src={heroBg} className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>
      {/* green dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, index) => (
          <div
            key={index}
            className="w-1.5 h-1.5 absolute rounded-full opacity-60"
            style={{
              backgroundColor: "#2eb2ab",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="genLayout px-6 pt-32 pb-20 relative z-10 ">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* left column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-pryColor">
                <span className="w-2 h-2 bg-pryColor rounded-full animate-pulse" />
                Full Stack Developer
              </span>
            </div>
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:6xl lg:text7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting{" "}
                <span className="text-pryColor glow-text ">digital</span>
                <br />
                experience with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision
                </span>
              </h1>
              <p className="text-lg text-mutedForeGroundColor max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Allo Iyiade Tobiloba — a Full Stack Developer
                specializing in React, JavaScript, HTML, CSS, Django, and
                Python. I build scalable, performant web applications that users
                love.
              </p>
            </div>
            {/* CTA */}
            <div className="flex flex-wrap gap-4 animate-fade-in">
              <Button size="lg">
                Contact Me <FaArrowRight className="w-5 h-5" />
              </Button>
              <a href="/cv.docx" download="cv.docx">
                <AnimatedBorderButton>
                  <FaDownload className="w-5 h-5" /> Download Cv
                </AnimatedBorderButton>
              </a>{" "}
            </div>
            {/* social link */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-mutedForeGroundColor">
                Follow me @
              </span>
              {socials.map((social) => (
                <a
                  className="p-4 rounded-full glass hover:bg-pryColor/10 hover:text-pryColor transition-all duration-300"
                  key={social.id}
                  href={social.href}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          {/* right column */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* profile image */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pryColor/30 via-transparent to-pryColor/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src={iyiade}
                  alt="personalImage"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />
                {/* floating badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="capitalize text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* stats badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-3 py-1 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-pryColor">3+</div>
                  <div className="text-sm text-mutedForeGroundColor">
                    Years Exp
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* skills section */}
        <div className="mt-20 animate-fade-in animation-delay-600 ">
          <p className="capitalize text-sm text-mutedForeGroundColor mb-6 text-center">
            Tech I Work with
          </p>
          <div className=" relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, index) => (
                <div key={index} className="flex-shrink-0 px-8 py-4 ">
                  <span className="text-xl font-semibold text-mutedForeGroundColor/50 hover:text-mutedForeGroundColor transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* scroll indicator */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-mutedForeGroundColor "
        >
          <span className="text-xs uppercase tracking-wider hover:text-pryColor hover:cursor-pointer">
            Scroll
          </span>
          <FaChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
