import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "vandal is on the most talented engineers i've worked with, huis attention to details is super umatched",
      author: "Ebuka Njokwu",
      role: "CTO, Tech Innovators Inc",
      avatar: <img src="#" alt="#" />,
    },
    {
      quote:
        "working with vandal was a game changer for our product. he delivered pixel-perfect results way ahead of schedule.",
      author: "james okafor",
      role: "Product Manager, NovaBuild",
      avatar: <img src="#" />,
    },
    {
      quote:
        "vandal has this rare ability to bridge design and engineering seamlessly. our team was blown away by the quality.",
      author: "Ibu Wisdom",
      role: "Lead Designer, Craftlabs",
      avatar: <img src="#" />,
    },
    {
      quote:
        "i've hired a lot of developers — vandal is the only one i'd call back without hesitation. just outstanding work.",
      author: "Oluwaseyi",
      role: "Fullstack",
      avatar: <img src="#" />,
    },
    {
      quote:
        "he doesn't just write code, he thinks about the whole product. vandal genuinely cares about what he builds.",
      author: "Olamide ",
      role: "CEO, Driftwave Studios",
      avatar: <img src="#" />,
    },
    // {
    //   quote:
    //     "vandal tackled our most complex UI challenges like they were nothing. sharp, fast, and incredibly reliable.",
    //   author: "macbright",
    //   role: "Engineering Lead, Arclight",
    //   avatar: <img src="#" />,
    // },
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
    <section id="testimonials" className="py-32 relative overflow-hidden">
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
              <blockquote className="textxl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
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
