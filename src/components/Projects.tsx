interface ProjectsProps {
  darkMode: boolean;
  lang: 'es' | 'en';
}

interface Project {
  title: string;
  description: {
    es: string;
    en: string;
  };
  url: string;
  version?: string;
  tags: string[];
}

export function Projects({ darkMode, lang }: ProjectsProps) {
  const projects: Project[] = [
    {
      title: "FinanzArg",
      description: {
        es: "Web app de control de gastos personales desarrollada con React, TypeScript y Tailwind CSS.",
        en: "Personal expense tracking web app developed with React, TypeScript, and Tailwind CSS."
      },
      url: "https://finanzarg-gamma.vercel.app/",
      version: "v1.0.0",
      tags: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "E-commerce",
      description: {
        es: "Tienda online interactiva con catálogo de productos y gestión de carrito.",
        en: "Interactive online store with a product catalog and cart management."
      },
      url: "https://desafio-e-commerce-il2v.vercel.app/",
      version: "v1.0.0",
      tags: ["TypeScript", "React", "Node.js"],
    },
    {
      title: "Pet Finder App - React",
      description: {
        es: "Plataforma web enfocada en la búsqueda y reporte de mascotas perdidas.",
        en: "Web platform focused on searching and reporting lost pets."
      },
      url: "https://dwf-m8-84353.web.app/",
      tags: ["TypeScript", "React", "Firebase"],
    },
    {
      title: "Pet Finder App",
      description: {
        es: "Plataforma web enfocada en la búsqueda y reporte de mascotas perdidas.",
        en: "Web platform focused on searching and reporting lost pets."
      },
      url: "https://buscando-mascotas.onrender.com/",
      tags: ["JavaScript", "Node.js", "Render"],
    },
    {
      title: "Piedra, Papel y Tijera",
      description: {
        es: "Juego interactivo clásico con lógica en línea y diseño responsivo.",
        en: "Classic interactive game with online logic and responsive design."
      },
      url: "https://nicososaok.github.io/desafio-ppt/",
      tags: ["JavaScript", "HTML5", "CSS3"],
    },
  ];

  return (
    <section className="space-y-3">
      <p className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
        {lang === 'es' ? 'Proyectos Destacados' : 'Featured Projects'}
      </p>
      <div className="grid gap-3">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group block p-4 rounded-xl border transition-all duration-200 shadow-sm ${darkMode
              ? 'bg-zinc-900/60 border-zinc-800 hover:bg-zinc-800/80 hover:border-zinc-600'
              : 'bg-zinc-100 border-zinc-200 hover:bg-zinc-200 hover:border-zinc-300'
              }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className={`font-medium ${darkMode ? 'text-zinc-200 group-hover:text-white' : 'text-zinc-800 group-hover:text-black'}`}>
                {project.title}
              </span>
              {project.version && (
                <span className={`text-xs px-2 py-0.5 rounded-full border ${darkMode
                  ? 'bg-emerald-950/40 border-emerald-800/60 text-emerald-400'
                  : 'bg-emerald-50 border-emerald-200 text-emerald-700'
                  }`}>
                  {project.version}
                </span>
              )}
            </div>

            <p className={`text-sm mb-3 ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
              {project.description[lang]}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className={`px-2.5 py-1 rounded-md text-xs font-medium border transition-all duration-200 ${darkMode
                    ? 'bg-zinc-900/80 border-zinc-800 text-zinc-300 hover:border-emerald-500/60 hover:text-emerald-400 hover:bg-emerald-950/20'
                    : 'bg-white border-zinc-300 text-zinc-700 hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50'
                    }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}