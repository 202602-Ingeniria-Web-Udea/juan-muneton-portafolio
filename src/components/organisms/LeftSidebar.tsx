import Image from "next/image";
import {Mail, MapPin, Phone} from "lucide-react";

import ContactItem from "@/components/molecules/ContactItem";
import SkillItem from "@/components/molecules/SkillItem";

import {
  extraSkills,
  languages,
  programmingLanguages,
  profile,
} from "@/data/profile";

export default function LeftSidebar() {
  return (
    <aside className="h-full overflow-y-auto bg-white p-6">
      {/* Información personal */}
      <div className="mb-8">
        <div className="mb-4 overflow-hidden rounded-full">
          <Image
          src="/images/profile.jpg"
          alt="Foto de Juan Diego Muñetón Herrera"
          width={96}
          height={96}
          className="h-24 w-24 object-cover"
          />
        </div>

        <h1 className="text-xl font-bold text-gray-900">
          {profile.name}
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          {profile.title}
        </p>
      </div>

      {/* Información de contacto */}
      <section className="mb-8">
        <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-400">
          Contacto
        </h2>

        <div className="space-y-4">
          <ContactItem
            icon={<MapPin size={18} />}
            label="Ubicación"
            value={profile.location}
          />

          <ContactItem
            icon={<Phone size={18} />}
            label="Teléfono"
            value={profile.phone}
            href={`tel:${profile.phone}`}
          />

          <ContactItem
            icon={<Mail size={18} />}
            label="Correo"
            value={profile.email}
            href={`mailto:${profile.email}`}
          />
        </div>
      </section>

      {/* Idiomas */}
      <section className="mb-8">
        <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-400">
          Idiomas
        </h2>

        <div className="space-y-4">
          {languages.map((language) => (
            <SkillItem
              key={language.name}
              name={language.name}
              percentage={language.percentage}
            />
          ))}
        </div>
      </section>

      {/* Lenguajes de programación */}
      <section className="mb-8">
        <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-400">
          Lenguajes
        </h2>

        <div className="space-y-4">
          {programmingLanguages.map((language) => (
            <SkillItem
              key={language.name}
              name={language.name}
              percentage={language.percentage}
            />
          ))}
        </div>
      </section>

      {/* Habilidades extra */}
      <section>
        <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-400">
          Habilidades
        </h2>

        <div className="flex flex-wrap gap-2">
          {extraSkills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </aside>
  );
}