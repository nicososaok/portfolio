import { useState } from 'react';
import { Header } from './components/Header';
import { TechStack } from './components/TechStack';
import { SocialLinks } from './components/SocialLinks';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { About } from './components/About';
import logoSvg from './assets/logo-nsd.png';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [lang, setLang] = useState<'es' | 'en'>('es');

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`min-h-screen flex flex-col justify-between font-sans antialiased transition-colors duration-300 ${darkMode ? 'bg-[#0a0a0a] text-zinc-100' : 'bg-white text-zinc-900'
      }`}>

      {/* Header / Navbar */}
      <header className="max-w-xl md:max-w-3xl mx-auto px-6 pt-8 w-full flex items-center justify-between">
        <img
          src={logoSvg}
          alt="Logo Nicolás Sosa"
          className={`w-20 h-20 object-contain -ml-5 transition-all duration-300 ${darkMode ? 'brightness-100' : 'invert'
            }`}
        />

        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 shadow-sm ${darkMode
              ? 'bg-zinc-900/80 border-zinc-800 text-zinc-300 hover:border-emerald-500/60 hover:text-emerald-400 hover:bg-emerald-950/20'
              : 'bg-white border-zinc-300 text-zinc-700 hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50'
              }`}
            aria-label="Cambiar idioma"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>

          {/* Botón de cambio de tema dinámico (Luna en oscuro / Sol en claro) */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full border transition-all duration-200 shadow-sm group ${darkMode
              ? 'bg-zinc-900/80 border-zinc-800 text-zinc-300 hover:border-emerald-500/60 hover:text-emerald-400 hover:bg-emerald-950/20'
              : 'bg-white border-zinc-300 text-zinc-700 hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50'
              }`}
            aria-label="Cambiar modo"
          >
            {darkMode ? (
              /* Luna (se muestra en modo oscuro) */
              <svg
                className="w-4 h-4 transform transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              /* Sol (se muestra al cambiar a modo claro) */
              <svg
                className="w-4 h-4 text-amber-500 transform transition-transform duration-500 group-hover:rotate-90 group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-xl md:max-w-3xl mx-auto px-6 pt-6 pb-12 w-full space-y-10">
        <Header darkMode={darkMode} lang={lang} />
        <TechStack darkMode={darkMode} lang={lang} />
        <SocialLinks darkMode={darkMode} lang={lang} />
        <Education darkMode={darkMode} lang={lang} />
        <Projects darkMode={darkMode} lang={lang} />
        <About darkMode={darkMode} lang={lang} />
      </main>

      {/* Footer */}
      <footer className={`max-w-xl md:max-w-3xl mx-auto px-6 py-8 w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs border-t ${darkMode ? 'text-zinc-500 border-zinc-900' : 'text-zinc-400 border-zinc-200'
        }`}>
        <div className="flex items-center gap-2">
          <a
            href="https://instagram.com/nsosa.dev"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors p-1 ${darkMode ? 'hover:text-emerald-400' : 'hover:text-emerald-600'
              }`}
            aria-label="Instagram"
            title="Instagram"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
          <span>© 2026 Nicolás Sosa · {lang === 'es' ? 'Hecho con dedicación.' : 'Made with dedication.'}</span>
        </div>

        <button
          onClick={scrollToTop}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all duration-200 ${darkMode
            ? 'bg-zinc-900/80 border-zinc-800 text-zinc-400 hover:border-emerald-500/60 hover:text-emerald-400 hover:bg-emerald-950/20'
            : 'bg-white border-zinc-300 text-zinc-600 hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50'
            }`}
          aria-label="Volver arriba"
        >
          <span>{lang === 'es' ? 'Volver arriba' : 'Back to top'}</span>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </footer>
    </div>
  );
}