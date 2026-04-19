import React from "react";

const Button = ({ className = "", size = "default", children, ...props }) => {
  const baseClasses =
    "relative overflow-hidden rounded-full font-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2eb2ab] bg-pryColor text-white hover:bg-[#2eb2ab]/90 shadow-lg shadow-[#2eb2ab]/25";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseClasses}, ${sizeClasses[size]} ${className}`;
  return (
    <button className={classes} {...props}>
      <span className="realtive flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};

export default Button;
