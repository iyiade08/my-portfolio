import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Iyiade is one of the most talented engineers I've worked with. His attention to detail is truly unmatched.",
      author: "Ebuka Njokwu",
      role: "CTO, Tech Innovators Inc",
      avatar: <img src="#" alt="Ebuka Njokwu" />,
    },
    {
      quote:
        "Working with Iyiade was a game changer for our product. He delivered pixel-perfect results well ahead of schedule.",
      author: "James Okafor",
      role: "Product Manager, NovaBuild",
      avatar: <img src="#" alt="James Okafor" />,
    },
    {
      quote:
        "Iyiade has a rare ability to bridge design and engineering seamlessly. Our team was blown away by the quality of his work.",
      author: "Ibu Wisdom",
      role: "Lead Designer, Craftlabs",
      avatar: <img src="#" alt="Ibu Wisdom" />,
    },
    {
      quote:
        "I've worked with many developers - Iyiade is the only one I'd call back without hesitation. Just outstanding work.",
      author: "Oluwaseyi",
      role: "Full Stack Developer",
      avatar: <img src="#" alt="Oluwaseyi" />,
    },
    {
      quote:
        "He doesn't just write code - he thinks about the whole product. Iyiade genuinely cares about what he builds.",
      author: "Olamide",
      role: "CEO, Driftwave Studios",
      avatar: <img src="#" alt="Olamide" />,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };
  return (
    <section id="testimonials" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-pryColor/5 rounded-full animate-pulse -translate-x-1/2 -translate-y-1/2" />
      <div className="genLayout px-6 relative z-10">
        {/* section header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-secForeGround text-sm font-medium tracking-wider uppercase animate-fade-in">
            What people say
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secForeGround">
            Kind words from{" "}
            <span className="font-serif italic font-normal text-white ">
              {" "}
              amazing people
            </span>
          </h2>
        </div>
        {/* testimonial carousel */}
        <div className="max-w-4xl mx-auto ">
          <div className="relative">
            {/* main texstimonial */}
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
              <div className="absolute -top-4 left-8 w-12 h-12 bg-pryColor rounded-full flex items-center justify-center">
                <FaQuoteLeft className="w-6 h-6 text-white" />
              </div>
              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                " {testimonials[activeIndex].quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].author}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-pryColor/20"
                />
                <div>
                  <div className="font-semibold ">
                    {testimonials[activeIndex].author}
                  </div>
                  <div className="text-sm text-mutedForeGroundColor">
                    {testimonials[activeIndex].role}
                  </div>
                </div>
              </div>
            </div>
            {/* testimonial navigation */}
            <div className="flex items-center justify-center gap-4 mt-8 ">
              <button
                className="glass rounded-full p-3 hover:text-pryColor hover:bg-pryColor/10 transition-all"
                onClick={previous}
              >
                <FaChevronLeft />
              </button>
              <div className="flex gap-2 ">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 transition-all rounded-full duration-300 ${index === activeIndex ? "w-8 bg-pryColor" : "bg-mutedForeGroundColor/30 hover:bg-mutedForeGroundColor/50"}`}
                  />
                ))}
              </div>
              <button
                className="glass rounded-full p-3 hover:text-pryColor hover:bg-pryColor/10 transition-all"
                onClick={next}
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
