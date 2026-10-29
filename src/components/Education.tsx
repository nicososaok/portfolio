interface EducationProps {
  darkMode: boolean;
  lang: 'es' | 'en';
}

export function Education({ darkMode, lang }: EducationProps) {
  const content = {
    es: {
      title: "Formación Académica",
      institution: "APX School",
      career: "Carrera de Desarrollo Web Full Stack",
      description: "Programa intensivo enfocado en la construcción de aplicaciones web escalables, desarrollo backend, frontend, arquitectura de software y mejores prácticas.",
      levelsTitle: "Diplomas y Certificaciones:"
    },
    en: {
      title: "Education",
      institution: "APX School",
      career: "Full Stack Web Development Program",
      description: "Intensive program focused on building scalable web applications, backend, frontend, software architecture, and best practices.",
      levelsTitle: "Diplomas & Certifications:"
    }
  };

  const diplomas = [
    {
      level: "Nivel 0",
      title: { es: "Fundamentos de Programación", en: "Programming Fundamentals" },
      url: "https://apx.school/profiles/Gr6KzuiREBsDTpYb0nDV5/mod-0"
    },
    {
      level: "Nivel 1",
      title: { es: "Desarrollo Frontend & Web Layout", en: "Frontend Development & Layout" },
      url: "https://apx.school/profiles/Gr6KzuiREBsDTpYb0nDV5/dev-1"
    },
    {
      level: "Nivel 2",
      title: { es: "Backend & Base de Datos", en: "Backend & Databases" },
      url: "https://apx.school/profiles/Gr6KzuiREBsDTpYb0nDV5/web-1"
    },
    {
      level: "Nivel 3",
      title: { es: "Desarrollo Full Stack & Arquitectura", en: "Full Stack Development & Architecture" },
      url: "https://apx.school/profiles/Gr6KzuiREBsDTpYb0nDV5/web-2"
    }
  ];

  const currentContent = content[lang];

  return (
    <section className="space-y-3 font-sans">
      <p className={`text-xs font-semibold uppercase tracking-wider font-sans ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
        {currentContent.title}
      </p>

      <div className={`p-5 rounded-xl border space-y-4 transition-all duration-200 shadow-sm ${darkMode
        ? 'bg-zinc-900/60 border-zinc-800'
        : 'bg-zinc-100 border-zinc-200'
        }`}>
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <h3 className={`font-semibold text-base leading-snug font-sans ${darkMode ? 'text-zinc-100' : 'text-zinc-900'}`}>
              {currentContent.career}
            </h3>
            <p className={`text-xs font-medium mt-0.5 font-sans ${darkMode ? 'text-emerald-400' : 'text-emerald-500'}`}>
              {currentContent.institution}
            </p>
          </div>
          <span className={`text-xs px-2.5 py-1 rounded-full border shrink-0 font-sans font-medium ${darkMode
            ? 'bg-emerald-950/40 border-emerald-800/60 text-emerald-400'
            : 'bg-emerald-50 border-emerald-200 text-emerald-700'
            }`}>
            {lang === 'es' ? 'Completado' : 'Completed'}
          </span>
        </div>

        <p className={`text-sm leading-relaxed font-sans ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
          {currentContent.description}
        </p>

        <div className="pt-2 border-t border-zinc-800/40 space-y-2">
          <p className={`text-xs font-semibold uppercase tracking-wider font-sans ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
            {currentContent.levelsTitle}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
            {diplomas.map((diploma) => (
              <a
                key={diploma.level}
                href={diploma.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-between p-2.5 rounded-lg border text-xs font-medium font-sans transition-all duration-200 ${darkMode
                  ? 'bg-zinc-900/80 border-zinc-800 text-zinc-300 hover:border-emerald-500/60 hover:text-emerald-400 hover:bg-emerald-950/20'
                  : 'bg-white border-zinc-300 text-zinc-700 hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50'
                  }`}
              >
                <div className="flex items-center gap-2 overflow-hidden">
                  <span className={`font-bold shrink-0 font-sans ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
                    {diploma.level}
                  </span>
                  <span className="truncate font-sans">
                    {diploma.title[lang]}
                  </span>
                </div>

                <svg
                  className={`w-3.5 h-3.5 shrink-0 ml-2 transition-colors ${darkMode ? 'text-zinc-500 group-hover:text-zinc-300' : 'text-zinc-500 group-hover:text-black'}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}