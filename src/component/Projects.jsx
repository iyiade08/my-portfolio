import React from "react";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";
import project5 from "../assets/images/project5.png";
import { FaArrowUp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import AnimatedBorderButton from "../common/AnimatedBorderButton";

const Projects = () => {
  const projects = [
    {
      id: "01",
      title: "Manage - SaaS Product Landing Page",
      descritpion:
        "A professionally crafted landing page for a SaaS product management tool, structured to guide visitors toward conversion through a metrics-driven hero, feature breakdown, testimonials, and a strong CTA footer. The design balances an energetic orange accent palette with a clean layout to keep the page visually engaging without sacrificing clarity.",
      image: project1,
      tags: ["react", "Nodejs", "javascript html tailwind"],
      link: "https://manage-landing-page-pi-inky.vercel.app/",
    },
    {
      id: "02",
      title: "React Jobs - Job Board Platform",
      descritpion:
        "A frontend job board application tailored for the React developer community, connecting developers with relevant opportunities and enabling employers to list open roles. Features include a dual-audience landing page, a browsable jobs listing, and an add job form for employers. The design employs a bold indigo color scheme with clean, minimal layouts to keep the focus on functionality and ease of navigation. ",
      image: project2,
      tags: ["react", "Nodejs", "javascript html tailwind"],
      link: "https://react-job-listing-nine.vercel.app/",
    },
    {
      id: "03",
      title: "Foodzy — Food Ordering Platform",
      descritpion:
        "A frontend implementation of a food ordering platform focused on delivering a rich, conversion-driven user experience. Features include a dynamic hero banner, category-based product navigation, and cart and wishlist functionality. Design decisions centered on a warm, earthy color palette and bold typography to evoke appetite and trust, while maintaining clear layout hierarchy throughout.",
      image: project3,
      tags: ["react", "Nodejs", "javascript html tailwind"],
      link: "#",
      github: "#",
    },
    {
      id: "04",
      title: "Memory Card Game",
      descritpion:
        "An interactive browser-based memory card game built to test and challenge a player's recall. Features include a 4x4 card grid with randomized emoji pairs on each session, real-time score and move tracking, matched card highlighting, and a reset button to restart the game at any point. The dark, minimal UI keeps the focus on gameplay while the purple accent palette adds a polished, engaging feel ",
      image: project4,
      tags: ["react", "Nodejs", "javascript html"],
      link: "https://memory-card-game-iota-roan.vercel.app/",
      github: "https://github.com/iyiade08/memory-card-game",
    },
    {
      id: "05",
      title: "CareConnect - Clinic & Appointment Booking System",
      descritpion:
        "A full-stack healthcare platform connecting patients with verified doctors for seamless appointment booking and clinic management. Built with role-based dashboards for Patients, Doctors, and Admins, the system handles end-to-end appointment scheduling, doctor availability management, and daily clinic reporting. Includes a REST API for appointment data, token-based authentication, and a custom design system built entirely in vanilla CSS - featuring a soft purple and blue palette, rounded cards, and a premium SaaS aesthetic. Deployed on Render with a PostgreSQL database via Supabase.",
      image: project5,
      tags: [
        "Python",
        "Django",
        "Django REST Framework",
        "PostgreSQL",
        "HTML/CSS",
      ],
      link: "https://careconnect-x4wt.onrender.com/",
      github: "https://github.com/iyiade08/dune-cohort-final-project",
    },
  ];

  return (
    <section id="projects" className=" relative overflow-hidden py-24 md:py-32">
      {/* bg acccents */}
      <div className="absolute top-1/4 bg-pryColor/5  right-0 w-96 h-96 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-0 h-64 w-64 bg-highlightColor/5 rounded-full blur-3xl animate-pulse" />
      <div className="genLayout px-6 relative z-10">
        {/* section header */}
        <div className="text-center mx-auto max-w-3xl mb-16 ">
          <span className="text-secForeGround text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 mt-4 animate-fade-in animation-delay-100 text-secForeGround">
            Projects that,{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-mutedForeGroundColor animate-fade-in animation-delay-200">
            A simple collection of my recent works from complex web application
            to innovative tools that solve real-world problems.
          </p>
        </div>
        {/* project grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className=" group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt="projectImg"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />

                {/* overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300  ">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-pryColor hover:text-pryForeground transition-all"
                  >
                    <FaArrowUp className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-pryColor hover:text-pryForeground transition-all"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>
              {/* content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold hover:text-pryColor">
                    {project.title}
                  </h3>
                  <FaArrowUp className="w-5 h-5 text-mutedForeGroundColor group-hover:text-pryColor group-hover:translate-x-1 group-hover:translate-y-1 transition-all" />
                </div>
                <p className="text-mutedForeGroundColor text-sm">
                  {project.descritpion}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-1.5 rounded-full bg-surfaceColor text-xs font-medium border border-borderColor/50 text-mutedForeGroundColor hover:border-pryColor/50 hover:text-pryColor transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* view all c.t.a */}
        <div className="flex items-center justify-center animate-fade-in mt-12 animation-delay-500">
          <AnimatedBorderButton>
            View All Projects <FaArrowUp />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};

export default Projects;
