import SectionTitle from "@/components/atoms/SectionTitle";
import EducationItem from "@/components/molecules/EducationItem";

const education = [
  {
    institution: "Institución Educativa Félix de Bedout Moreno",
    period: "2009",
    title: "Bachiller académico",
    description:
      "Formación académica de educación media, con desarrollo de competencias generales para la continuación de estudios universitarios.",
  },
  {
    institution: "Universidad de Antioquia",
    period: "2010 - 2017",
    title: "Ingeniería de Materiales",
    description:
      "Formación universitaria en el área de Ingeniería de Materiales, con aproximación a fundamentos científicos, tecnológicos y de ingeniería.",
  },
  {
    institution: "Universidad de Antioquia",
    period: "2021 - Actualidad",
    title: "Ingeniería de Sistemas",
    description:
      "Formación en desarrollo de software, bases de datos, inteligencia artificial, ingeniería de software y tecnologías de información.",
  },
];

export default function EducationSection() {
  return (
    <section>
      <SectionTitle
        title="Educación"
        description="Mi formación académica y trayectoria universitaria."
      />

      <div className="space-y-5">
        {education.map((item) => (
          <EducationItem
            key={`${item.institution}-${item.title}`}
            institution={item.institution}
            period={item.period}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}