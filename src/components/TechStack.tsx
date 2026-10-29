interface TechStackProps {
  darkMode: boolean;
  lang: 'es' | 'en';
}

export function TechStack({ darkMode, lang }: TechStackProps) {
  const technologies = [
    'JavaScript',
    'TypeScript',
    'React',
    'Tailwind CSS',
    "Python",
    'Node.js',
    "CSS",
    "HTML",
    "Git",
    "GitHub",
  ];

  return (
    <section className="space-y-3">
      <p className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
        {lang === 'es' ? 'Stack Tecnológico' : 'Tech Stack'}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {technologies.map((tech) => (
          <span
            key={tech}
            className={`px-2.5 py-1 rounded-md text-xs font-medium border transition-all duration-200 cursor-default ${darkMode
              ? 'bg-zinc-900/80 border-zinc-800 text-zinc-300 hover:border-emerald-500/60 hover:text-emerald-400 hover:bg-emerald-950/20'
              : 'bg-white border-zinc-300 text-zinc-700 hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50'
              }`}
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}