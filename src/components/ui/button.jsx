import React from "react";

export function Button({
  children,
  variant = "default",
  className = "",
  asChild = false,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  const variants = {
    default: "bg-neutral-900 text-white hover:bg-neutral-700",
    link: "text-neutral-700 underline-offset-4 hover:underline bg-transparent",
  };

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: `${base} ${variants[variant] || ""} ${className} ${children.props.className || ""}`,
      ...props,
    });
  }

  return (
    <button
      className={`${base} ${variants[variant] || ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
