"use client";

import Image from "next/image";
import { useState } from "react";

import Button from "@/components/atoms/Button";
import Modal from "@/components/molecules/Modal";
import { profile } from "@/data/profile";

export default function ProfileSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="rounded-3xl bg-white p-8 shadow-sm">
        <div className="flex flex-col items-center gap-8 md:flex-row">
          {/* Fotografía */}
          <div className="shrink-0 overflow-hidden rounded-2xl bg-gray-100">
            <Image
              src="/images/profile.jpg"
              alt="Foto de Juan Diego Muñetón Herrera"
              width={180}
              height={180}
              className="h-44 w-44 object-cover"
            />
          </div>

          {/* Información del perfil */}
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-gray-400">
              Perfil profesional
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              {profile.name}
            </h2>

            <p className="mt-4 text-lg leading-8 text-gray-600">
              Estudiante de Ingeniería de Sistemas interesado en el desarrollo
              de software, tecnologías web, análisis de datos y computación en
              la nube.
            </p>

            <div className="mt-6">
              <Button onClick={() => setIsModalOpen(true)}>
                Conóceme más
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Modal
        isOpen={isModalOpen}
        title="Sobre mí"
        onClose={() => setIsModalOpen(false)}
      >
        <div className="space-y-4 leading-7">
          <p>
            Soy estudiante de Ingeniería de Sistemas con interés en el
            desarrollo de software, tecnologías web, análisis de datos y
            computación en la nube.
          </p>

          <p>
            Me interesa aprender mediante proyectos prácticos y desarrollar
            soluciones utilizando diferentes tecnologías y herramientas de
            programación.
          </p>

          <p>
            Actualmente estoy fortaleciendo mis conocimientos en desarrollo
            web, bases de datos, computación en la nube y ciencia de datos.
          </p>
        </div>
      </Modal>
    </>
  );
}