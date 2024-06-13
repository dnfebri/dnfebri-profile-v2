import React from "react";

export const ButtonNav = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`hover:bg-zinc-300 p-1 rounded ${className} transition-all duration-300`}
      {...props}
    >
      {children}
    </button>
  );
};
