import { FaGithub, FaNodeJs, FaPhp, FaReact } from "react-icons/fa";
import {
  SiBootstrap,
  SiCss,
  SiFigma,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiPostgresql,
  SiSupabase,
  SiTailwindcss,
  SiVite
} from "react-icons/si";
import ModelViewer from "./components/ModelViewer";
import heavenShot from "./assets/image.png";

const contacts = [
  {
    label: 'Email',
    value: 'samuuseche01@gmail.com',
    href: 'mailto:samuuseche01@gmail.com'
  },
  {
    label: 'Teléfono',
    value: '310 783 8443',
    href: 'tel:+573107838443'
  }
];

const highlights = [
  {
    label: 'Enfoque',
    value: 'APIs, bases de datos y arquitectura limpia'
  },
  {
    label: 'Principios',
    value: 'Buenas prácticas, SOLID y mejora continua'
  },
  {
    label: 'Idiomas',
    value: 'Inglés B2 (en formación activa)'
  }
];

const techIcons = [
  { name: 'PHP', Icon: FaPhp },
  { name: 'Node.js', Icon: FaNodeJs },
  { name: 'React', Icon: FaReact },
  { name: 'Vite', Icon: SiVite },
  { name: 'Supabase', Icon: SiSupabase },
  { name: 'TailwindCSS', Icon: SiTailwindcss },
  { name: 'PostgreSQL', Icon: SiPostgresql },
  { name: 'MySQL', Icon: SiMysql },
  { name: 'Figma', Icon: SiFigma },
  { name: 'JavaScript', Icon: SiJavascript },
  { name: 'HTML5', Icon: SiHtml5 },
  { name: 'CSS3', Icon: SiCss },
  { name: 'Bootstrap', Icon: SiBootstrap },
  { name: 'GitHub', Icon: FaGithub }
];

const projectTech = [
  { name: 'Vite', Icon: SiVite },
  { name: 'React', Icon: FaReact },
  { name: 'Supabase', Icon: SiSupabase }
];

function App() {
  return (
    <div className="min-h-screen text-ink-900">
      <header className="px-6 pt-8 w-full max-w-[1500px] mx-auto">
        <div className="mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-ink-900 bg-butter-300 font-display text-[10px] uppercase">
              SUC
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-ink-700">Portafolio</p>
              <p className="text-lg font-semibold">Samuel Useche Chaparro</p>
            </div>
          </div>
          <nav className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.2em]">
            {['Perfil', 'Stack', 'Proyecto'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="pixel-chip hover:-translate-y-0.5 transition-transform"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="px-6 pb-16 pt-10 w-full max-w-[1500px] mx-auto">
        <div className="flex flex-col mx-auto w-full">
          <h2 className="text-4xl font-display uppercase tracking-[0.2em] text-ink-700">Sobre mí</h2>
          <hr className="w-full border-ink-900 mb-4" />
        </div>
        <section
          className="pixel-card flex flex-col mx-auto w-full gap-6 p-6 sm:p-8 lg:flex-row"
          id="perfil"
        >
          <div className="w-full lg:w-2/5">
            <div className="flex flex-wrap items-center gap-3 w-full">
              <span className="pixel-chip">Desarrollador Backend</span>
            </div>
            <h1 className="mt-6 font-display text-2xl leading-snug sm:text-3xl">
              Samuel Useche Chaparro — desarrollador de software.
            </h1>
            <p className="mt-4 text-base text-ink-700">
              Tecnólogo en Análisis y Desarrollo de Software. Me enfoco en construir soluciones
              confiables, escalables y con mantenimiento claro.
            </p>

            <div className="mt-8 grid gap-6">
              <div>
                <p className="mt-3 text-sm text-ink-700">
                  En el SENA participé como monitor académico en un proyecto colaborativo, apoyando el
                  desarrollo de páginas web. Ese rol fortaleció mi comunicación técnica y el trabajo en
                  equipo. Mantengo una mentalidad de mejora continua y hoy priorizo el perfeccionamiento
                  de mis habilidades de programación y la adopción de buenas prácticas de desarrollo.
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {highlights.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-card border-2 border-ink-900 bg-butter-100 p-3"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-700">
                        {item.label}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-ink-900">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-3/5">
            <div className="rounded-card border-2 border-ink-900 bg-butter-50 p-3 shadow-pixel h-full">
              <div className="h-full w-full">
                <ModelViewer />
              </div>
            </div>
          </div>
        </section>


        <div className="flex flex-col mx-auto w-full pt-10">
          <h2 className="text-4xl font-display uppercase tracking-[0.2em] text-ink-700">Stack tecnológico</h2>
          <hr className="w-full border-ink-900 mb-4" />
        </div>
        <section className="mx-auto w-full max-w-[1500px]" id="stack">
          <div className="pixel-card p-4 sm:p-6">
            <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div className="marquee p-1">
                {[0, 5].map((track) => (
                  <div key={track} className="marquee-track" aria-hidden={track === 1}>
                    {techIcons.map((tech) => (
                      <div key={`${track}-${tech.name}`} className="icon-tile">
                        <tech.Icon className="text-3xl" aria-hidden="true" />
                        <span className="sr-only">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-col mx-auto w-full pt-10">
          <h2 className="text-4xl font-display uppercase tracking-[0.2em] text-ink-700">Proyectos</h2>
          <hr className="w-full border-ink-900 mb-4" />
        </div>
        <section className="mx-auto w-full max-w-[1500px]" id="proyecto">
          <div className="pixel-card p-6 sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-ink-700">
                      Proyecto destacado
                    </p>
                    <h2 className="mt-2 font-display text-2xl">HeavenShop</h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {projectTech.map((tech) => (
                      <span
                        key={tech.name}
                        className="inline-flex items-center gap-2 rounded-full border-2 border-ink-900 bg-butter-100 px-3 py-1 text-xs font-semibold"
                      >
                        <tech.Icon className="text-base" aria-hidden="true" />
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="mt-6 text-base text-ink-700">
                  heavenShop es un proyecto personal enfocado en ofrecer una experiencia de compra
                  clara y rápida. Diseñado con un frontend moderno en Vite + React y respaldado por
                  Supabase como backend en la nube.
                </p>
                <div className="mt-[130px] flex flex-wrap ">
                  <button className="pixel-btn" type="button">
                    <FaGithub className="text-xl"/> Ver Repositorio
                  </button>
                </div>
              </div>
              <div className="rounded-card border-2 border-ink-900 bg-butter-50 p-3 shadow-pixel">
                <img
                  src={heavenShot}
                  alt="Captura del proyecto heavenShop"
                  className="h-full w-full rounded-card object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
