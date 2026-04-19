import React from "react";
import "./index.css";
import Navbar from "./Layout/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Projects from "./component/Projects";
import Experience from "./component/Experience";
import Testimonials from "./component/Testimonials";
import Contacts from "./component/Contacts";
const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contacts />
      </main>
    </div>
  );
};

export default App;
