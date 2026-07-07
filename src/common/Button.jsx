import React from "react";

const Button = ({
  as: Component = "button",
  className = "",
  size = "default",
  children,
  type,
  ...props
}) => {
  const baseClasses =
    "relative inline-flex items-center justify-center overflow-hidden rounded-full font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2eb2ab] bg-pryColor text-white hover:bg-[#2eb2ab]/90 shadow-lg shadow-[#2eb2ab]/25 disabled:cursor-not-allowed disabled:opacity-60";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const componentProps =
    Component === "button" ? { type: type || "button", ...props } : props;

  const classes = `${baseClasses} ${sizeClasses[size] || sizeClasses.default} ${className}`;
  return (
    <Component className={classes} {...componentProps}>
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </Component>
  );
};

export default Button;
