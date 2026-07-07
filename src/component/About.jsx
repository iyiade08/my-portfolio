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
      <section id="about" className="py-24 md:py-32 relative overflow-hidden">
        <div className="genLayout px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* left column */}
            <div className="space-y-8">
              <div className="animate-fade-in">
                <span className="text-secForeGround text-sm font-medium tracking-wider uppercase">
                  About Me
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secForeGround">
                Building the future,
                <span className="font-serif italic font-normal text-white">
                  {" "}
                  One Component at a time.
                </span>
              </h2>
              <div className="space-y-4 text-mutedForeGroundColor animate-fade-in animation-delay-200">
                <p>
                  I am a passionate software engineer with experience building
                  digital products that create real impact. What began as
                  curiosity about how the web works has grown into deep
                  expertise in modern full stack technologies.
                </p>
                <p>
                  I specialize in building everything from sleek landing pages
                  to complex web applications, with a keen eye for design and
                  user experience. Core Languages: JavaScript, Python, HTML, CSS
                  Frameworks & Libraries: React, Django, Tailwind CSS Databases:
                  PostgreSQL, MongoDB, SQLite
                </p>
                <p>
                  When I'm not coding, you'll find me exploring emerging
                  technologies, contributing to open-source projects, or sharing
                  knowledge with the developer community.
                </p>
              </div>
              <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300 text-lg font-semibold italics text-pryForeground">
                <p>
                  My mission is to create digital experiences that are not just
                  functional but delightful - products that users love to use
                  and developers love to maintain.
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
