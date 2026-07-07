import React from "react";

const AnimatedBorderButton = ({
  as: Component = "button",
  children,
  className = "",
  type,
  ...props
}) => {
  const componentProps =
    Component === "button" ? { type: type || "button", ...props } : props;

  return (
    <Component
      className={`relative inline-flex bg-transparent border border-borderColor 
        text-pryForeground hover:border-pryColor/50 transition-all 
        duration-1000 focus:outline-none focus-visible:ring-2 
        focus-visible:ring-pryColor focus-visible:ring-offset-2 
        disabled:opacity-50 disabled:cursor-not-allowed group 
        px-8 py-4 text-lg font-medium rounded-full overflow-visible 
        animated-border ${className}`}
      {...componentProps}
    >
      <svg
        className="absolute left-0 top-0 w-full h-full pointer-events-none download-cv-border"
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
        style={{ overflow: "visible" }}
      >
        <path
          d="M 30,1 A 29,29 0 0 0 1,30 L 1,30 A 29,29 0 0 0 30,59 L 170,59 A 29,29 0 0 0 199,30 L 199,30 A 29,29 0 0 0 170,1 Z"
          fill="none"
          stroke="#2eb2ab"
          strokeWidth="2"
          strokeDasharray="400 550"
          strokeDashoffset="400"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animated-border-path"
        />
      </svg>
      <span className="relative z-10 items-center justify-center gap-2 flex ">
        {" "}
        {children}
      </span>
    </Component>
  );
};

export default AnimatedBorderButton;
