import React from "react";

const Experience = () => {
  const experiences = [
    {
      period: "2022-present",
      role: "senior frontend Engineer",
      company: "Tech innovators Inc",
      description:
        "Leading frotend architecture for a suite of fintech products. Implementation",
      technologies: ["React", "Typescript", "React.js", "GraphQl"],
      current: true,
    },
    {
      period: "2020-2022",
      role: "Frontend Engineer",
      company: "DataFlow Systems",
      description:
        "Built and maintained data visualization dashboards for enterprise clients, improving data accessibility and reducing report generation time by 40%.",
      technologies: ["React", "D3.js", "Redux", "REST APIs"],
      current: false,
    },
    {
      period: "2018-2020",
      role: "Junior Frontend Developer",
      company: "Pixel Studio Agency",
      description:
        "Developed responsive web applications and landing pages for 20+ clients across e-commerce, healthcare, and media industries.",
      technologies: ["JavaScript", "Vue.js", "SCSS", "Figma"],
      current: false,
    },
    {
      period: "2017-2018",
      role: "UI Developer Intern",
      company: "Nexora Digital",
      description:
        "Assisted in building reusable UI component libraries and contributed to accessibility improvements across the company's core product.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      current: false,
    },
    {
      period: "2016-2017",
      role: "Freelance Web Developer",
      company: "Self-Employed",
      description:
        "Designed and delivered custom websites for small businesses and startups, handling everything from wireframing to deployment.",
      technologies: ["WordPress", "PHP", "jQuery", "MySQL"],
      current: false,
    },
  ];

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-pryColor/10 rounded-full blur-3xl translate-y-1/2  animate-pulse" />
      <div className="genLayout px-6 relative z-10">
        {/* setion header */}
        <div className="max-w-3xl  mb-16">
          <span className="text-secForeGround text-sm font-medium tracking-wider uppercase animate-fade-in animation-delay-100">
            career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-200 text-secForeGround">
            Experience that{" "}
            <span className="font-serif font-normal text-white">
              {" "}
              speaks volumes.
            </span>
          </h2>
          <p className="text-mutedForeGroundColor animate-fade-in animation-delay-300">
            {" "}
            A timeline of my professional growth, from curious beginner to
            junior engineer and building products of scale.
          </p>
        </div>
        {/*Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-pryColor/70 via-pryColor/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* experience  items  */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="relative grid md:grid-cols-2 gap-8"
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                {/* timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-pryColor rounded-full -translate-x-1/2 ring-background-4">
                  {experience.current && (
                    <span className="absolute inset-0 rounded-full bg-pryColor animate-ping opacity-75" />
                  )}
                </div>
                {/* content */}
                <div
                  className={`pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}
                >
                  <div
                    className={`glass p-6rounded-2xl border border-pryColor/30 hover:border-pryColor/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-pryColor font-medium">
                      {experience.period}
                    </span>
                    <h3 className="font-semibold text-xl mt-2">
                      {experience.role}
                    </h3>
                    <p className="text-mutedForeGroundColor">
                      {experience.company}
                    </p>
                    <p className="text-sm text-mutedForeGroundColor">
                      {experience.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}
                    >
                      {experience.technologies.map((tech, techIndx) => (
                        <div key={techIndx}>
                          <span className="py-1 px-3 bg-surfaceColor text-xs rounded-full text-mutedForeGroundColor">
                            {tech}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
