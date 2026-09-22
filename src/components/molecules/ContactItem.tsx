import type { ReactNode } from "react";

interface ContactItemProps {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
}

export default function ContactItem({
  icon,
  label,
  value,
  href,
}: ContactItemProps) {
  const content = (
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-700">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
          {label}
        </p>

        <p className="truncate text-sm text-gray-700">
          {value}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        className="block transition-opacity duration-200 hover:opacity-70"
      >
        {content}
      </a>
    );
  }

  return content;
}