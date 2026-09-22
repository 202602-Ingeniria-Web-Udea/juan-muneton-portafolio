import {
  Code2,
  Database,
  Cloud,
  BarChart3,
  Laptop,
} from "lucide-react";

import SectionTitle from "@/components/atoms/SectionTitle";
import KnowledgeCard from "@/components/molecules/KnowledgeCard";

const knowledge = [
  {
    title: "Desarrollo Web",
    description:
      "Desarrollo de interfaces y aplicaciones web utilizando tecnologías como HTML, CSS, JavaScript, React y Next.js.",
    icon: <Code2 size={24} />,
  },
  {
    title: "Desarrollo de Software",
    description:
      "Diseño y desarrollo de soluciones de software aplicando principios de programación, estructuras de datos y buenas prácticas de desarrollo.",
    icon: <Laptop size={24} />,
  },
  {
    title: "Ciencia de Datos",
    description:
      "Exploración, preparación y análisis de datos mediante herramientas de programación y técnicas de aprendizaje automático.",
    icon: <BarChart3 size={24} />,
  },
  {
    title: "Bases de Datos",
    description:
      "Manejo de bases de datos y consultas SQL para almacenar, organizar y recuperar información.",
    icon: <Database size={24} />,
  },
  {
    title: "Computación en la Nube",
    description:
      "Conocimientos sobre despliegue de aplicaciones y utilización de servicios de computación en la nube.",
    icon: <Cloud size={24} />,
  },
];

export default function KnowledgeSection() {
  return (
    <section>
      <SectionTitle
        title="Conocimientos"
        description="Áreas y tecnologías en las que he desarrollado conocimientos durante mi formación académica y proyectos."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {knowledge.map((item) => (
          <KnowledgeCard
            key={item.title}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </section>
  );
}