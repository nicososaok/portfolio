interface HeaderProps {
  darkMode: boolean;
  lang: 'es' | 'en';
}

export function Header({ darkMode, lang }: HeaderProps) {
  return (
    <header className="space-y-4">
      <h1 className={`text-3xl sm:text-4xl font-bold tracking-tight transition-colors duration-300 ${darkMode ? 'text-white' : 'text-black'
        }`}>
        {lang === 'es' ? 'Nicolás Sosa' : 'Nicolas Sosa'}
      </h1>

      <p className={`text-base leading-relaxed transition-colors duration-300 ${darkMode ? 'text-zinc-400' : 'text-zinc-500'
        }`}>
        {lang === 'es'
          ? 'Desarrollador Web Full Stack apasionado por la tecnología y la creación de experiencias web modernas, limpias y funcionales. Enfocado en resolver problemas con código de calidad.'
          : 'Full Stack Web Developer passionate about technology and creating modern, clean, and functional web experiences. Focused on solving problems with quality code.'
        }
      </p>
    </header>
  );
}