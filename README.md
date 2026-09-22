# Hoja de Vida - Juan Diego Muñetón Herrera

Portafolio web personal desarrollado como proyecto académico para practicar el desarrollo frontend con Next.js, React, TypeScript y Tailwind CSS.

El proyecto presenta información personal, formación académica, conocimientos, habilidades y algunos proyectos desarrollados durante el proceso de formación en Ingeniería de Sistemas.

## Tecnologías utilizadas

- Next.js 16
- React
- TypeScript
- Tailwind CSS
- Lucide React
- React Icons
- Git y GitHub

## Funcionalidades

El sitio web incluye:

- Presentación del perfil personal.
- Fotografía y descripción profesional.
- Información de contacto.
- Porcentajes de dominio de idiomas.
- Porcentajes de conocimiento en lenguajes de programación.
- Habilidades adicionales.
- Sección de conocimientos.
- Formación académica.
- Portafolio de proyectos.
- Modales para ampliar la información del perfil y los proyectos.
- Enlaces a GitHub y LinkedIn.
- Enlaces a repositorios y demostraciones disponibles.
- Diseño responsive para escritorio, tablet y dispositivos móviles.
- Desplazamiento vertical independiente del contenido central en escritorio.
- Desplazamiento horizontal para los proyectos del portafolio.

## Estructura del proyecto

El proyecto utiliza una organización basada en **Atomic Design**, separando los componentes según su nivel de reutilización y responsabilidad.

```text
src/
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── atoms/
│   │   ├── Button.tsx
│   │   ├── ProgressBar.tsx
│   │   └── SectionTitle.tsx
│   │
│   ├── molecules/
│   │   ├── ContactItem.tsx
│   │   ├── EducationItem.tsx
│   │   ├── KnowledgeCard.tsx
│   │   ├── Modal.tsx
│   │   ├── ProjectCard.tsx
│   │   └── SkillItem.tsx
│   │
│   ├── organisms/
│   │   ├── EducationSection.tsx
│   │   ├── Footer.tsx
│   │   ├── KnowledgeSection.tsx
│   │   ├── LeftSidebar.tsx
│   │   ├── PortfolioSection.tsx
│   │   ├── ProfileSection.tsx
│   │   └── SocialSidebar.tsx
│   │
│   └── templates/
│       └── PortfolioLayout.tsx
│
└── data/
    └── profile.ts
```

### Atomic Design

La estructura de componentes se organiza de la siguiente manera:

- **Atoms:** componentes básicos y reutilizables como botones, títulos y barras de progreso.
- **Molecules:** combinaciones de átomos que representan elementos funcionales como tarjetas, elementos de contacto y habilidades.
- **Organisms:** secciones completas de la interfaz como perfil, educación, conocimientos y portafolio.
- **Templates:** estructura general que organiza las diferentes secciones de la página.

La separación de los componentes permite reutilizar elementos en diferentes partes de la aplicación y facilita el mantenimiento del código.

## Proyectos incluidos

### PokéExplorer

Aplicación web desarrollada para explorar información de Pokémon mediante la API pública PokéAPI.

Tecnologías principales:

- HTML5
- CSS3
- JavaScript
- Fetch API
- PokéAPI
- LocalStorage

Repositorio:

https://github.com/202602-Ingeniria-Web-Udea/taller-html-Juan-Muneton

### Fundamentos de Ciencia de Datos

Proyecto académico orientado al análisis de datos de películas para estudiar la relación entre presupuesto, popularidad, valoraciones e ingresos en taquilla.

Tecnologías y herramientas principales:

- Python
- Análisis exploratorio de datos
- Visualización de datos
- Estadística descriptiva
- Técnicas de aprendizaje automático

Repositorio:

https://github.com/JuanMuneton87/Fund_Ciencia_de_Datos

### Magic Portfolio

Implementación y personalización de una plantilla de portafolio basada en Next.js y desplegada mediante Vercel.

Tecnologías principales:

- Next.js
- React
- TypeScript
- Once UI
- MDX
- Vercel

Repositorio:

https://github.com/JuanMuneton87/magic-portfolio-for-next-js

Demostración:

https://magic-portfolio-for-next-js-eta-six-10.vercel.app/

> Este proyecto parte de una plantilla existente y fue utilizado como ejercicio de desarrollo y despliegue web.

## Ejecución local

Para ejecutar el proyecto localmente se necesita tener instalado Node.js.

Clonar el repositorio:

```bash
git clone <URL_DEL_REPOSITORIO>
```

Ingresar al directorio:

```bash
cd hoja-de-vida
```

Instalar las dependencias:

```bash
npm install
```

Iniciar el servidor de desarrollo:

```bash
npm run dev
```

Después, abrir:

```text
http://localhost:3000
```

## Compilación para producción

Para comprobar que el proyecto puede compilarse correctamente para producción:

```bash
npm run build
```

El proyecto ha sido comprobado mediante una compilación de producción exitosa.

## Autor

**Juan Diego Muñetón Herrera**

Estudiante de Ingeniería de Sistemas

Medellín, Colombia

### Contacto

- Email: diego.muneton@udea.edu.co
- GitHub: https://github.com/JuanMuneton87
- LinkedIn: https://www.linkedin.com/in/juan-diego-muneton-herrera-796b4a438/

## Licencia

Proyecto desarrollado con fines académicos.
