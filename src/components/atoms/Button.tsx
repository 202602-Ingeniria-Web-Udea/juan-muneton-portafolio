import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  onClick,
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="rounded-full bg-blue-600 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-blue-700"
    >
      {children}
    </button>
  );
}