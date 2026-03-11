"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Building2, 
  Database, 
  Layout, 
  ShieldCheck, 
  Zap, 
  Menu, 
  Bell,
  UserCircle,
  Code2,
  Cpu,
  Home,
  ChevronRight,
  ServerCrash,
  FileQuestion,
  Wrench,
  Wand2,
  Palette,
  Check
} from 'lucide-react';
import { Inter, Montserrat } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });

// Definición de Temas (Igual que en el Home)
const THEMES = {
  blue: { id: 'blue', label: 'Tech Blue', primary: 'blue', gray: 'zinc', hex: '#2563EB' },
  indigo: { id: 'indigo', label: 'Trust Indigo', primary: 'indigo', gray: 'slate', hex: '#4F46E5' },
  rose: { id: 'rose', label: 'Modern Rose', primary: 'rose', gray: 'stone', hex: '#E11D48' },
  amber: { id: 'amber', label: 'Luxury Gold', primary: 'amber', gray: 'stone', hex: '#D97706' },
  violet: { id: 'violet', label: 'Creative Violet', primary: 'violet', gray: 'zinc', hex: '#7C3AED' },
  emerald: { id: 'emerald', label: 'Eco Green', primary: 'emerald', gray: 'stone', hex: '#059669' }
};

type ThemeKey = keyof typeof THEMES;

const PropuestaTecnica = () => {
  const [font, setFont] = useState('font-inter');
  const [currentTheme, setCurrentTheme] = useState<ThemeKey>('blue');

  // Helpers para clases dinámicas
  const theme = THEMES[currentTheme];
  const p = theme.primary;
  const g = theme.gray;

  const techStack = [
    {
      title: "Next.js (TypeScript)",
      icon: <Layout className={`w-8 h-8 text-${p}-500`} />,
      justification: "Next.js permite unificar el desarrollo del frontend y el backend (API Routes) en un solo proyecto. El uso de TypeScript garantiza un código más seguro, facilitando la detección de errores en tiempo de desarrollo y mejorando la mantenibilidad a largo plazo."
    },
    {
      title: "Tailwind CSS",
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      justification: "Utilizamos Tailwind para un desarrollo de interfaz ágil y altamente optimizado. Su enfoque en utilidades permite crear diseños responsivos y modernos sin generar archivos CSS pesados, mejorando la velocidad de carga."
    },
    {
      title: "PostgreSQL (Supabase)",
      icon: <Database className="w-8 h-8 text-emerald-500" />,
      justification: "Supabase proporciona una base de datos PostgreSQL robusta con capacidades escalables. Lo elegimos específicamente porque ofrece almacenamiento de imágenes (Storage) integrado y gratuito, ideal para gestionar los activos de la aplicación sin costos adicionales."
    },
    {
      title: "Prisma ORM",
      icon: <ShieldCheck className="w-8 h-8 text-indigo-600" />,
      justification: "Prisma actúa como el motor de gestión de datos, ofreciendo un acceso eficiente y seguro a la base de datos. Su tipado automático previene errores en las consultas y facilita la gestión de relaciones complejas entre los datos de la app."
    }
  ];

  return (
    <div className={`${font === 'font-inter' ? inter.className : montserrat.className} min-h-screen bg-${g}-50 text-${g}-900 transition-colors duration-300 relative`}>
      {/* Navbar con estilo idéntico a la Home */}
      <nav className={`sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-${g}-200 transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo con Link al Home */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className={`bg-${p}-600 p-2 rounded-lg group-hover:bg-${p}-700 transition-colors`}>
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <span className={`text-xl font-bold text-${g}-900 ${montserrat.className}`}>
                Byte<span className={`text-${p}-600`}>Mafia</span>
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className={`text-${g}-600 hover:text-${p}-600 font-medium transition-colors`}>Inicio</Link>
              <div className={`flex items-center gap-4 border-l border-${g}-200 ml-4 pl-4`}>
                <button className={`p-2 text-${g}-400 hover:text-${p}-600 transition-colors`}>
                  <Bell className="w-5 h-5" />
                </button>
                <button className={`flex items-center gap-2 p-1 pr-3 rounded-full bg-${g}-100 hover:bg-${g}-200 transition-colors`}>
                  <UserCircle className={`w-8 h-8 text-${g}-500`} />
                  <span className={`text-sm font-medium text-${g}-700`}>Cuenta</span>
                </button>
              </div>
            </div>

            <button className={`md:hidden p-2 text-${g}-600`}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* BARRA DE CONTROL DE DEMO (Idéntica al Home) */}
      <div className={`bg-white text-${g}-500 py-2 text-center text-xs border-b border-${g}-200 transition-colors duration-500 sticky top-16 z-40`}>
          <div className="flex justify-center gap-6 items-center flex-wrap px-4">
            {/* Selector de Fuente */}
            <div className="flex items-center gap-2">
                <Wand2 className="size-3" />
                <span className="opacity-80 font-mono">FUENTE:</span>
                <button onClick={() => setFont('font-montserrat')} className={`px-3 py-0.5 rounded transition-colors ${font === 'font-montserrat' ? `bg-${p}-600 text-white` : `hover:bg-${g}-100`}`}>Montserrat</button>
                <button onClick={() => setFont('font-inter')} className={`px-3 py-0.5 rounded transition-colors ${font === 'font-inter' ? `bg-${p}-600 text-white` : `hover:bg-${g}-100`}`}>Inter</button>
            </div>
            <div className={`w-px h-4 bg-${g}-200 hidden sm:block`}></div>
            {/* Selector de Tema */}
            <div className="flex items-center gap-2">
                <Palette className="size-3" />
                <span className="opacity-80 font-mono">TEMA:</span>
                <div className="flex gap-1">
                    {(Object.keys(THEMES) as ThemeKey[]).map((key) => (
                        <button 
                            key={key}
                            onClick={() => setCurrentTheme(key)}
                            className={`size-5 rounded-full flex items-center justify-center transition-transform hover:scale-110 ${currentTheme === key ? 'ring-2 ring-white' : ''}`}
                            style={{ backgroundColor: THEMES[key].hex }}
                            title={THEMES[key].label}
                        >
                            {currentTheme === key && <Check className="size-3 text-white" strokeWidth={3} />}
                        </button>
                    ))}
                </div>
            </div>
          </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-16">
        <header className="mb-16 text-center">
          <div className={`inline-flex items-center gap-2 bg-${p}-50 text-${p}-700 px-4 py-2 rounded-full mb-6`}>
            <Cpu className="w-4 h-4" />
            <span className="text-sm font-semibold uppercase tracking-wider">Arquitectura de Software</span>
          </div>
          <h1 className={`${montserrat.className} text-4xl font-extrabold text-${g}-900 mb-4`}>
            Propuesta Técnica
          </h1>
          <p className={`text-xl text-${g}-600 max-w-2xl mx-auto`}>
            Stack tecnológico seleccionado para garantizar escalabilidad, velocidad y seguridad.
          </p>
        </header>

        {/* Grid de Justificaciones */}
        <div className="grid md:grid-cols-2 gap-8">
          {techStack.map((tech, index) => (
            <div 
              key={index} 
              className={`group bg-white p-8 rounded-2xl shadow-sm border border-${g}-100 hover:border-${p}-200 hover:shadow-xl hover:shadow-${p}-500/5 transition-all duration-300`}
            >
              <div className="flex items-center gap-4 mb-5">
                <div className={`p-3 rounded-xl bg-${g}-50 group-hover:bg-white transition-colors duration-300`}>
                  {tech.icon}
                </div>
                <h3 className={`${montserrat.className} text-xl font-bold text-${g}-800`}>
                  {tech.title}
                </h3>
              </div>
              <p className={`text-${g}-600 leading-relaxed text-lg`}>
                {tech.justification}
              </p>
            </div>
          ))}
        </div>

        <section className="mt-20">
          <header className="mb-12 text-center">
            <div className={`inline-flex items-center gap-2 bg-${p}-50 text-${p}-700 px-4 py-2 rounded-full mb-6`}>
              <Wrench className="w-4 h-4" />
              <span className="text-sm font-semibold uppercase tracking-wider">Componentes de UX y Feedback</span>
            </div>
            <h2 className={`${montserrat.className} text-3xl font-extrabold text-${g}-900 mb-3`}>
              Estados de Feedback y Navegación
            </h2>
            <p className={`text-lg text-${g}-600 max-w-3xl mx-auto`}>
              Ejemplos visuales de componentes cruciales para una experiencia de usuario profesional y robusta.
            </p>
          </header>

          <div className="space-y-12">
            {/* 1. Breadcrumbs */}
            <div>
              <h3 className={`text-xl font-bold text-${g}-800 mb-4`}>Breadcrumbs (Migas de pan)</h3>
              <div className={`bg-white p-6 rounded-xl border border-${g}-200 shadow-sm`}>
                <p className={`text-sm text-${g}-600 mb-4`}>Útiles si la navegación se vuelve profunda (ej: Inicio &gt; Propiedades &gt; Detalles).</p>
                <nav aria-label="Breadcrumb" className={`bg-${g}-50 p-4 rounded-lg`}>
                  <ol className={`flex items-center gap-2 text-sm text-${g}-500`}>
                    <li>
                      <a href="#" className={`flex items-center gap-1.5 hover:text-${p}-600 hover:underline`}>
                        <Home className="w-4 h-4" />
                        <span>Inicio</span>
                      </a>
                    </li>
                    <li>
                      <ChevronRight className={`w-4 h-4 text-${g}-400`} />
                    </li>
                    <li>
                      <a href="#" className={`hover:text-${p}-600 hover:underline`}>Propiedades</a>
                    </li>
                    <li>
                      <ChevronRight className={`w-4 h-4 text-${g}-400`} />
                    </li>
                    <li className={`font-semibold text-${p}-600 truncate`} aria-current="page">
                      Residencia Moderna en Cala Cala
                    </li>
                  </ol>
                </nav>
              </div>
            </div>

            {/* 2. Loading States (Skeletons) */}
            <div>
              <h3 className={`text-xl font-bold text-${g}-800 mb-4`}>Loading States (Skeletons)</h3>
              <div className={`bg-white p-6 rounded-xl border border-${g}-200 shadow-sm`}>
                <p className={`text-sm text-${g}-600 mb-4`}>Muestran una silueta del contenido mientras cargan los datos, mejorando la percepción de velocidad.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[1, 2, 3].map(i => (
                    <div key={i} className={`rounded-lg border border-${g}-200 bg-white p-4 space-y-4`}>
                      <div className={`w-full h-32 bg-${g}-200 rounded-md animate-pulse`}></div>
                      <div className="space-y-3">
                        <div className={`h-5 bg-${g}-200 rounded w-3/4 animate-pulse`}></div>
                        <div className={`h-4 bg-${g}-200 rounded w-1/2 animate-pulse`}></div>
                      </div>
                      <div className={`h-8 bg-${g}-200 rounded w-1/3 animate-pulse mt-4`}></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. 404 y 500 Pages */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col">
                <h3 className={`text-xl font-bold text-${g}-800 mb-4`}>Página 404 Personalizada</h3>
                <div className={`bg-white p-8 rounded-xl border border-${g}-200 h-full flex-grow shadow-sm`}>
                  <div className="text-center flex flex-col justify-center items-center h-full">
                    <FileQuestion className={`w-16 h-16 text-${p}-400 mb-4`} strokeWidth={1.5}/>
                    <h4 className={`${montserrat.className} text-2xl font-bold text-${g}-800`}>Error 404</h4>
                    <p className={`text-${g}-500 mb-6 mt-1`}>La página que buscas no existe o fue movida.</p>
                    <button className={`bg-${p}-600 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-${p}-700 transition-colors shadow-sm`}>
                      Volver al Inicio
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className={`text-xl font-bold text-${g}-800 mb-4`}>Página 500 (Server Error)</h3>
                <div className={`bg-white p-8 rounded-xl border border-${g}-200 h-full flex-grow shadow-sm`}>
                  <div className="text-center flex flex-col justify-center items-center h-full">
                    <ServerCrash className="w-16 h-16 text-rose-400 mb-4" strokeWidth={1.5}/>
                    <h4 className={`${montserrat.className} text-2xl font-bold text-${g}-800`}>Error 500</h4>
                    <p className={`text-${g}-500 mb-6 mt-1`}>Algo falló en nuestros servidores. Inténtalo de nuevo más tarde.</p>
                    <button className={`bg-${g}-700 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-${g}-800 transition-colors shadow-sm`}>
                      Reintentar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-20 text-center">
          <div className={`inline-flex items-center gap-2 bg-${g}-900 text-white px-8 py-4 rounded-2xl shadow-lg`}>
            <Code2 className={`w-6 h-6 text-${p}-400`} />
            <span className="font-semibold">Next.js + Tailwind + Supabase + Prisma</span>
          </div>
        </footer>
      </main>

      {/* SAFELIST: Forzar generación de clases dinámicas de Tailwind (Copiado del Home) */}
      <div className="hidden">
        {/* Grays */}
        <div className="bg-slate-50 bg-slate-900 text-slate-500 text-slate-600 text-slate-900 border-slate-100 border-slate-200 border-slate-500"></div>
        <div className="bg-zinc-50 bg-zinc-900 text-zinc-500 text-zinc-600 text-zinc-900 border-zinc-100 border-zinc-200 border-zinc-500"></div>
        <div className="bg-stone-50 bg-stone-900 text-stone-500 text-stone-600 text-stone-900 border-stone-100 border-stone-200 border-stone-500"></div>
        {/* Primaries */}
        <div className="bg-blue-50 bg-blue-100 bg-blue-500 bg-blue-600 text-blue-100 text-blue-500 text-blue-600 text-blue-700 border-blue-200 border-blue-400 border-blue-500 ring-blue-500 shadow-blue-500/20 hover:shadow-blue-500/10"></div>
        <div className="bg-indigo-50 bg-indigo-100 bg-indigo-500 bg-indigo-600 text-indigo-100 text-indigo-500 text-indigo-600 text-indigo-700 border-indigo-200 border-indigo-400 border-indigo-500 ring-indigo-500 shadow-indigo-500/20 hover:shadow-indigo-500/10"></div>
        <div className="bg-rose-50 bg-rose-100 bg-rose-500 bg-rose-600 text-rose-100 text-rose-500 text-rose-600 text-rose-700 border-rose-200 border-rose-400 border-rose-500 ring-rose-500 shadow-rose-500/20 hover:shadow-rose-500/10"></div>
        <div className="bg-amber-50 bg-amber-100 bg-amber-500 bg-amber-600 text-amber-100 text-amber-500 text-amber-600 text-amber-700 border-amber-200 border-amber-400 border-amber-500 ring-amber-500 shadow-amber-500/20 hover:shadow-amber-500/10"></div>
        <div className="bg-violet-50 bg-violet-100 bg-violet-500 bg-violet-600 text-violet-100 text-violet-500 text-violet-600 text-violet-700 border-violet-200 border-violet-400 border-violet-500 ring-violet-500 shadow-violet-500/20 hover:shadow-violet-500/10"></div>
        <div className="bg-emerald-50 bg-emerald-100 bg-emerald-500 bg-emerald-600 text-emerald-100 text-emerald-500 text-emerald-600 text-emerald-700 border-emerald-200 border-emerald-400 border-emerald-500 ring-emerald-500 shadow-emerald-500/20 hover:shadow-emerald-500/10"></div>
      </div>
    </div>
  );
};

export default PropuestaTecnica;