export default function Footer() {
  return (
    <footer className="border-t border-gray-200 pt-6 text-center">
      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()} Juan Diego Muñetón. Todos los derechos
        reservados.
      </p>

      <p className="mt-1 text-xs text-gray-400">
        Desarrollado con Next.js, React, TypeScript y Tailwind CSS.
      </p>
    </footer>
  );
}