import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function SocialSidebar() {
  return (
    <aside className="flex items-center justify-center gap-4">
      <a
        href="https://github.com/JuanMuneton87"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-all duration-200 hover:-translate-y-1 hover:text-gray-900"
      >
        <FaGithub size={20} />
      </a>

      <a
        href="https://www.linkedin.com/in/juan-diego-muneton-herrera-796b4a438/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-all duration-200 hover:-translate-y-1 hover:text-gray-900"
      >
        <FaLinkedinIn size={20} />
      </a>
    </aside>
  );
}