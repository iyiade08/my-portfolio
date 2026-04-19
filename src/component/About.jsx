import React from "react";
import { FaCode, FaRocket, FaUser, FaLightbulb } from "react-icons/fa";

const About = () => {
  const highlights = [
    {
      id: "01",
      icon: <FaCode className="w-6 h-6 text-pryColor" />,
      title: "clean code",
      description: "Sustainable software, elegantly engineered.",
    },
    {
      id: "02",
      icon: <FaRocket className="w-6 h-6 text-pryColor" />,
      title: "performance",
      description:
        "optimization for speed and delivering super fast experience.",
    },
    {
      id: "03",
      icon: <FaUser className="w-6 h-6 text-pryColor" />,
      title: "collaboration",
      description: "working closely with team to bring ideas to life.",
    },
    {
      id: "04",
      icon: <FaLightbulb className="w-6 h-6 text-pryColor" />,
      title: "innovation",
      description:
        "staying ahead with the latest technology and besst practices.",
    },
  ];
  return (
    <>
      <section id="#about" className="py-32 relative overflow-hidden">
        <div className="genLayout px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* left column */}
            <div className="space-y-8">
              <div className="animate-fade-in">
                <span className="text-secForeGround text-sm font-medium tracking-wider uppercase">
                  About Me
                </span>
              </div>
              <h2 className="ext-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secForeGround">
                Building the future,
                <span className="font-serif italic font-normal text-white">
                  {" "}
                  One Component at a time.
                </span>
              </h2>
              <div className="space-y-4 text-mutedForeGroundColor animate-fade-in animation-delay-200">
                <p>
                  i am a passionate software engineer with a year plus of
                  experience crafting digital products that makes a difference.
                  Journey started with curiosity on how things work on the web
                  and it has evolved into a deep expertis in modern frontend
                  tech
                </p>
                <p>
                  i specialize in React, Html, css, javascript and tailwind,
                  building everything from sleek landing page to complex
                  enterprise application. My approach combines technical
                  excellence with a keen eyes for design and user experience.
                </p>
                <p>
                  when i'm not coding, you'll find me exploring new tech and
                  making contribution to open-source projects, or sharing
                  knowledge with the developer community
                </p>
              </div>
              <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300 text-lg font-semibold italics text-pryForeground">
                <p>
                  my mission is to create digital experience that are not just
                  functional but delightful - products that users loev to use
                  and developers love to maintain
                </p>
              </div>
            </div>
            {/* right column with highlights  */}
            <div className="grid md:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="glass p-5 rounded-2xl animate-fade-in"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-full bg-pryColor/10 flex items-center justify-center mb-4 hover:bg-pryColor/20">
                    {highlight.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-mutedForeGroundColor">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
