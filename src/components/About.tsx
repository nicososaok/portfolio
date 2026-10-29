interface AboutProps {
  darkMode: boolean;
  lang: 'es' | 'en';
}

export function About({ darkMode, lang }: AboutProps) {
  const content = {
    es: {
      title: "Acerca de mí",
      terminalTitle: "bash - nsdev@portfolio:~",
      command: "node get-about-me.js",
      status: "Disponible para nuevos proyectos 🚀",
      location: "Buenos Aires, Argentina.",
      paragraphs: [
        "A lo largo de mi trayectoria laboral he desarrollado habilidades muy sólidas de comunicación y trabajo en equipo, herramientas que hoy aplico día a día en mi formación como desarrollador de software. Mi objetivo es construir soluciones eficientes, escalables y orientadas a ofrecer una gran experiencia de usuario.",
        "Me considero un aprendiz eterno, de mentalidad abierta, metódico, curioso, organizado poseo pensamiento crítico y criterio propio. Apasionado por la tecnología y la resolución de problemas a través del código, me mantengo profundizando de forma autónoma en el desarrollo web/mobile y arquitecturas modernas.",
        "Proyectos en los que estoy enfocado: Actualmente diseño y construyo soluciones de software propias, como una Web App personalizada para la gestión de gastos y finanzas personales y un e-commerce. Estos desarrollos me permiten enfrentarme a desafíos reales de lógica de programación, arquitectura de software, manejo de estado global y optimización de código utilizando tecnologías modernas.",
        "Mi objetivo actual: Estoy abierto a conectar con otros desarrolladores, colaborar en proyectos open source, explorar nuevas oportunidades profesionales como desarrollador, donde pueda aportar valor y seguir creciendo, me mantengo siempre informado sobre las novedades más relevantes del sector IT.",
        "Fuera de las líneas de código, mis intereses se enfocan en todo lo relacionado a la tecnología, el desarrollo personal, finanzas personales, inteligencia emocional, historia y algo de filosofía. En mis tiempos libres disfruto conectar con la naturaleza, viajar y conocer nuevas culturas, actividades que expanden mi perspectiva del mundo."
      ]
    },
    en: {
      title: "About Me",
      terminalTitle: "bash - nsdev@portfolio:~",
      command: "node get-about-me.js",
      status: "Available for new projects 🚀",
      location: "Buenos Aires, Argentina.",
      paragraphs: [
        "Throughout my career, I have developed solid communication and teamwork skills—tools that I apply every day in my journey as a software developer. My goal is to build efficient, scalable solutions focused on delivering a great user experience.",
        "I consider myself a lifelong learner, open-minded, methodical, curious, organized, with critical thinking and sound judgment. Passionate about technology and problem-solving through code, I continuously deepen my knowledge autonomously in web/mobile development and modern architectures.",
        "Projects I'm focused on: I currently design and build custom software solutions, such as a personalized Web App for personal expense and finance management and an e-commerce platform. These developments allow me to tackle real-world challenges in programming logic, software architecture, global state management, and code optimization using modern technologies.",
        "Current goal: I am open to connecting with other developers, collaborating on open-source projects, and exploring new professional opportunities as a developer where I can contribute value and continue growing; I always stay informed about the most relevant updates in the IT industry.",
        "Beyond code, my interests focus on technology, personal growth, personal finance, emotional intelligence, history, and philosophy. In my free time, I enjoy connecting with nature, traveling, and exploring new cultures—activities that expand my perspective of the world."
      ]
    }
  };

  const currentContent = content[lang];

  return (
    <section className="space-y-3 font-sans">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <p className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
          {currentContent.title}
        </p>

        {/* Badge */}
        <div className={`group cursor-default inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border transition-all duration-300 ${darkMode
          ? 'bg-emerald-950/30 border-emerald-800/50 text-emerald-400 hover:bg-emerald-900/40 hover:border-emerald-500/80 hover:text-emerald-300 hover:shadow-[0_0_12px_rgba(16,185,129,0.25)]'
          : 'bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100/80 hover:border-emerald-400 hover:text-emerald-800 hover:shadow-sm'
          }`}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="transition-transform duration-200 group-hover:translate-x-0.5">
            {currentContent.status}
          </span>
        </div>
      </div>

      {/* Contenedor estilo Terminal */}
      <div className={`rounded-xl border overflow-hidden transition-all duration-200 shadow-sm ${darkMode
        ? 'bg-zinc-950 border-zinc-800 text-zinc-100'
        : 'bg-zinc-100/90 border-zinc-300 text-zinc-800'
        }`}>

        {/* Header de la Terminal */}
        <div className={`flex items-center justify-between px-3.5 py-2 border-b text-xs font-mono transition-colors ${darkMode
          ? 'bg-zinc-900/90 border-zinc-800 text-zinc-400'
          : 'bg-zinc-200/80 border-zinc-300 text-zinc-600'
          }`}>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
          </div>
          <span className="text-[11px] opacity-70">{currentContent.terminalTitle}</span>
          <span className="w-10"></span>
        </div>

        {/* Cuerpo de la Terminal */}
        <div className="p-4 space-y-3 text-sm leading-relaxed">
          {/* Línea de comando simulada */}
          <div className={`flex items-center gap-2 font-mono text-xs pb-2.5 border-b ${darkMode
            ? 'border-zinc-800/80 text-emerald-400'
            : 'border-zinc-300 text-emerald-600'
            }`}>
            <span>$</span>
            <span className={darkMode ? 'text-zinc-200' : 'text-zinc-800 font-medium'}>
              {currentContent.command}
            </span>
            <span className={`w-2 h-3.5 animate-pulse inline-block ${darkMode ? 'bg-emerald-500' : 'bg-emerald-600'
              }`}></span>
          </div>

          {/* Párrafos */}
          <div className="space-y-3 pt-0.5">
            {currentContent.paragraphs.map((paragraph, index) => (
              <div key={index} className="flex items-start gap-2.5">
                <span className={`font-mono select-none pt-0.5 ${darkMode ? 'text-emerald-500' : 'text-emerald-600 font-bold'
                  }`}>
                  &gt;
                </span>
                <p className={`flex-1 ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
                  {paragraph}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ubicación alineada a la derecha */}
      <div className={`flex items-center justify-end gap-2 text-xs font-medium pt-0.5 ${darkMode ? 'text-zinc-400' : 'text-zinc-500'
        }`}>
        <svg
          className={`w-4 h-4 shrink-0 ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span>{currentContent.location}</span>
      </div>
    </section>
  );
}