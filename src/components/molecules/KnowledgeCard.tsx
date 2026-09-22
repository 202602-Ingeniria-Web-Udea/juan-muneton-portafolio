import type { ReactNode } from "react";

interface KnowledgeCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function KnowledgeCard({
  icon,
  title,
  description,
}: KnowledgeCardProps) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-700">
        {icon}
      </div>

      <h3 className="mb-2 text-lg font-semibold text-gray-900">
        {title}
      </h3>

      <p className="text-sm leading-6 text-gray-600">
        {description}
      </p>
    </article>
  );
}