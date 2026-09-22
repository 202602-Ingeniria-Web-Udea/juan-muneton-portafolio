interface SectionTitleProps {
  title: string;
  description?: string;
}

export default function SectionTitle({
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900">
        {title}
      </h2>

      {description && (
        <p className="mt-2 max-w-2xl text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}