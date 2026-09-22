"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import SectionTitle from "@/components/atoms/SectionTitle";
import ProjectCard from "@/components/molecules/ProjectCard";
import Modal from "@/components/molecules/Modal";

const projects = [
  {
    title: "PokéExplorer",
    description:
      "Aplicación web interactiva desarrollada con HTML, CSS y JavaScript para consultar y explorar información de Pokémon mediante PokéAPI.",
    image: "/images/pokemon.jpg",
    details: {
      description:
        "Proyecto académico desarrollado para el taller de Ingeniería Web. La aplicación consume la API pública PokéAPI y presenta información de Pokémon mediante una interfaz responsive.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Fetch API",
        "PokéAPI",
        "LocalStorage",
      ],
      features: [
        "Listado inicial de Pokémon",
        "Búsqueda de Pokémon",
        "Pokémon aleatorio",
        "Sistema de favoritos",
        "Persistencia mediante LocalStorage",
        "Modo claro y oscuro",
        "Manejo de errores",
        "Diseño responsive",
      ],
      github:
        "https://github.com/202602-Ingeniria-Web-Udea/taller-html-Juan-Muneton",
      demo: null,
    },
  },
  {
    title: "Fundamentos de Ciencia de Datos",
    description:
      "Proyecto final de análisis de datos orientado a estudiar la relación entre características de las películas e ingresos en taquilla.",
    image: "/images/ciencia-datos.jpg",
    details: {
      description:
        "Proyecto final desarrollado para el curso de Fundamentos de Ciencia de Datos. El análisis estudia cómo se relacionan el presupuesto, la popularidad y las valoraciones de las películas con sus ingresos en taquilla.",
      technologies: [
        "Python",
        "Análisis de datos",
        "Visualización de datos",
        "Estadística descriptiva",
        "Aprendizaje automático",
      ],
      features: [
        "Preparación y limpieza de datos",
        "Análisis exploratorio",
        "Análisis de variables",
        "Visualización de datos",
        "Estudio de relaciones entre variables",
        "Transformación de variables",
      ],
      github: "https://github.com/JuanMuneton87/Fund_Ciencia_de_Datos",
      demo: null,
    },
  },
  {
    title: "Magic Portfolio",
    description:
      "Implementación y personalización de una plantilla de portafolio desarrollada con Next.js y desplegada en Vercel.",
    image: "/images/magic-portfolio.jpg",
    details: {
      description:
        "Proyecto de desarrollo web basado en Magic Portfolio, una plantilla para Next.js. El repositorio fue utilizado para trabajar con una arquitectura de portafolio moderna y realizar su despliegue mediante Vercel.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Once UI",
        "MDX",
        "Vercel",
      ],
      features: [
        "Estructura de portafolio web",
        "Diseño responsive",
        "Sistema basado en contenido",
        "Personalización de contenido",
        "Despliegue en Vercel",
      ],
      github:
        "https://github.com/JuanMuneton87/magic-portfolio-for-next-js",
      demo:
        "https://magic-portfolio-for-next-js-eta-six-10.vercel.app/",
    },
  },
];

type Project = (typeof projects)[number];

export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section>
      <SectionTitle
        title="Portafolio"
        description="Algunos proyectos académicos y de desarrollo realizados durante mi formación."
      />

      <div className="flex gap-6 overflow-x-auto pb-4">
        {projects.map((project) => (
          <div key={project.title} className="min-w-[320px] max-w-[360px]">
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
              onLearnMore={() => setSelectedProject(project)}
            />
          </div>
        ))}
      </div>

      <Modal
        isOpen={selectedProject !== null}
        title={selectedProject?.title ?? ""}
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject && (
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                Descripción
              </h3>

              <p className="leading-7 text-gray-600">
                {selectedProject.details.description}
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                Tecnologías
              </h3>

              <div className="flex flex-wrap gap-2">
                {selectedProject.details.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                Características
              </h3>

              <ul className="space-y-2 text-sm leading-6 text-gray-600">
                {selectedProject.details.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span>•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-3 border-t border-gray-200 pt-5">
              <a
                href={selectedProject.details.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-700"
              >
                <FaGithub size={17} />
                Ver en GitHub
              </a>

              {selectedProject.details.demo && (
                <a
                  href={selectedProject.details.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                >
                  <ExternalLink size={17} />
                  Ver proyecto
                </a>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}