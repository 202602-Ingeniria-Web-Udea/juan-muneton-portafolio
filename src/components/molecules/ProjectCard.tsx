interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  onLearnMore: () => void;
}

export default function ProjectCard({
  title,
  description,
  image,
  onLearnMore,
}: ProjectCardProps) {
  return (
    <article className="min-w-[300px] max-w-[340px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="h-44 overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="p-5">
        <h3 className="mb-2 text-lg font-semibold text-gray-900">
          {title}
        </h3>

        <p className="mb-5 text-sm leading-6 text-gray-600">
          {description}
        </p>

        <button
          type="button"
          onClick={onLearnMore}
          className="text-sm font-semibold text-blue-600 transition-colors hover:text-blue-800"
        >
          Saber más →
        </button>
      </div>
    </article>
  );
}