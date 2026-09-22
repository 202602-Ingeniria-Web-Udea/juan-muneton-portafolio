interface EducationItemProps {
  institution: string;
  period: string;
  title: string;
  description: string;
}

export default function EducationItem({
  institution,
  period,
  title,
  description,
}: EducationItemProps) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="font-semibold text-gray-900">
          {institution}
        </h3>

        <span className="text-sm text-gray-400">
          {period}
        </span>
      </div>

      <h4 className="mb-2 text-lg font-medium text-gray-800">
        {title}
      </h4>

      <p className="text-sm leading-6 text-gray-600">
        {description}
      </p>
    </article>
  );
}