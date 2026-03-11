"use client";

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Layers3, MapPin, Wand2, Search, User, Menu, Bell, Palette, Check, Bed, Bath, Square, ArrowRight, Sparkles } from 'lucide-react';
import { Inter, Montserrat } from 'next/font/google';

// Configuración de fuentes con Next.js
const inter = Inter({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });

// Importación dinámica de Leaflet (evita errores en el servidor)
const LeafletMap = dynamic(() => import('@/components/LeafletMap'), { ssr: false });

// Definición de Temas (Paletas de Color)
const THEMES = {
  blue: {
    id: 'blue',
    label: 'Tech Blue',
    primary: 'blue',
    gray: 'zinc',
    hex: '#2563EB'
  },
  indigo: {
    id: 'indigo',
    label: 'Trust Indigo',
    primary: 'indigo',
    gray: 'slate',
    hex: '#4F46E5'
  },
  rose: {
    id: 'rose',
    label: 'Modern Rose',
    primary: 'rose',
    gray: 'stone',
    hex: '#E11D48'
  },
  amber: {
    id: 'amber',
    label: 'Luxury Gold',
    primary: 'amber',
    gray: 'stone',
    hex: '#D97706'
  },
  violet: {
    id: 'violet',
    label: 'Creative Violet',
    primary: 'violet',
    gray: 'zinc',
    hex: '#7C3AED'
  },
  emerald: {
    id: 'emerald',
    label: 'Eco Green',
    primary: 'emerald',
    gray: 'stone',
    hex: '#059669'
  }
};

type ThemeKey = keyof typeof THEMES;

// Datos de ejemplo para la inmobiliaria
const PROPERTIES = [
  {
    id: 1,
    title: "Residencia Moderna en Cala Cala",
    price: "$250,000",
    location: "Cochabamba, Zona Norte",
    beds: 4,
    baths: 3,
    sqft: 320,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Departamento Minimalista",
    price: "$120,000",
    location: "Centro Histórico",
    beds: 2,
    baths: 2,
    sqft: 110,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Villa con Jardín Amplio",
    price: "$380,000",
    location: "Tiquipaya, El Paso",
    beds: 5,
    baths: 4,
    sqft: 500,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
  }
];

export default function Propuesta7Marzo() {
  const [font, setFont] = useState('font-inter');
  const [currentTheme, setCurrentTheme] = useState<ThemeKey>('blue');

  // Helpers para clases dinámicas
  const theme = THEMES[currentTheme];
  const p = theme.primary; // Color primario (ej. blue)
  const g = theme.gray;    // Escala de grises (ej. slate)

  return (
    <div className={`${font === 'font-inter' ? inter.className : montserrat.className} min-h-screen bg-${g}-50 text-${g}-900 transition-all duration-300`}>
      
      {/* HEADER TIPO APP REAL (Estilo Airbnb/Zillow) */}
      <nav className={`sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-${g}-200 shadow-sm transition-all duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            
            {/* 1. Logo */}
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className={`bg-${p}-600 p-2 rounded-xl shadow-lg shadow-${p}-500/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                <Layers3 className="text-white size-6" />
              </div>
              <span className={`text-xl font-bold tracking-tight hidden md:block transition-opacity`}>
                <span className={`text-${g}-900`}>In</span><span className={`text-${p}-600`}>Devs</span>
              </span>
            </div>

            {/* Navigation Links (NUEVO) */}
            <div className={`hidden xl:flex items-center gap-8 ml-10 text-sm font-medium text-${g}-600`}>
                <a href="#" className={`hover:text-${p}-600 transition-colors`}>Comprar</a>
                <a href="#" className={`hover:text-${p}-600 transition-colors`}>Alquilar</a>
                <a href="#" className={`hover:text-${p}-600 transition-colors`}>Vender</a>
                <a href="#" className={`hover:text-${p}-600 transition-colors`}>Proyectos</a>
            </div>

            {/* 2. Barra de Búsqueda Central (Fake) */}
            <div className="hidden md:flex flex-1 max-w-lg mx-8">
              <div className="relative w-full group transition-transform duration-300 hover:scale-[1.02]">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className={`h-4 w-4 text-${g}-400 group-hover:text-${p}-500 transition-colors`} />
                </div>
                <input
                  type="text"
                  className={`block w-full pl-10 pr-12 py-2.5 border border-${g}-200 rounded-full leading-5 bg-${g}-50 text-${g}-900 placeholder-${g}-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-${p}-500/20 focus:border-${p}-500 sm:text-sm transition-all shadow-sm group-hover:shadow-md group-hover:border-${p}-200`}
                  placeholder="Buscar por ciudad, zona o código..."
                  readOnly
                />
                <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
                    <button className={`bg-${p}-600 text-white rounded-full p-1.5 hover:bg-${p}-700 transition-all hover:scale-110 shadow-sm`}>
                        <Search className="size-3" />
                    </button>
                </div>
              </div>
            </div>

            {/* 3. Menú Usuario */}
            <div className="flex items-center gap-4">
              <button className={`text-sm font-semibold text-${g}-600 hover:text-${p}-600 px-4 py-2 rounded-full hover:bg-${p}-50 transition-all duration-300 hidden lg:block`}>
                Publicar Inmueble
              </button>
              <div className="flex items-center gap-3">
                <button className={`text-${g}-500 hover:bg-${g}-100 hover:text-${p}-600 p-2 rounded-full transition-all relative group`}>
                    <Bell className="size-5" />
                    <span className="absolute top-2 right-2 size-2 bg-rose-500 rounded-full border-2 border-white group-hover:scale-110 transition-transform"></span>
                </button>
                <div className={`flex items-center gap-2 border border-${g}-200 rounded-full px-2 py-1 pl-3 hover:shadow-md hover:border-${p}-200 transition-all cursor-pointer bg-white group`}>
                  <Menu className={`size-4 text-${g}-600 group-hover:text-${g}-900`} />
                  <div className={`size-8 bg-${g}-100 rounded-full flex items-center justify-center text-${g}-500 group-hover:bg-${p}-600 group-hover:text-white transition-colors`}>
                    <User className="size-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* BARRA DE CONTROL DE DEMO (Para cambiar fuentes y temas) */}
      <div className={`bg-white text-${g}-500 py-2 text-center text-xs border-b border-${g}-200 transition-colors duration-500`}>
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

      <main className="min-h-screen">
        
        {/* HERO SECTION */}
        <section className="relative h-[500px] flex items-center justify-center">
            <div className="absolute inset-0 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80" alt="Hero Background" className="w-full h-full object-cover" />
                <div className={`absolute inset-0 bg-gradient-to-br from-${g}-900/90 via-${p}-900/60 to-${p}-800/90`}></div>
            </div>
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
                    Encuentra el hogar <br/> que siempre soñaste
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                    Explora las mejores propiedades en Cochabamba con nuestra plataforma exclusiva.
                </p>
                
                {/* Search Bar Hero */}
                <div className="bg-white p-2 rounded-full shadow-2xl max-w-2xl mx-auto flex flex-col sm:flex-row gap-2">
                    <input 
                        type="text" 
                        placeholder="¿Dónde quieres vivir?" 
                        className={`flex-1 px-6 py-3 rounded-full text-${g}-900 focus:outline-none`}
                    />
                    <button className={`bg-${p}-600 text-white px-8 py-3 rounded-full font-bold hover:bg-${p}-700 transition-colors flex items-center justify-center gap-2`}>
                        <Search className="size-4" /> Buscar
                    </button>
                </div>
            </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
            
            {/* LISTADO DE PROPIEDADES */}
            <section>
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h2 className={`text-3xl font-bold text-${g}-900`}>Propiedades Destacadas</h2>
                        <p className={`text-${g}-600 mt-2`}>Selección exclusiva de inmuebles para ti.</p>
                    </div>
                    <button className={`text-${p}-600 font-semibold hover:underline flex items-center gap-1`}>
                        Ver todas <ArrowRight className="size-4" />
                    </button>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {PROPERTIES.map((prop) => (
                        <div key={prop.id} className={`bg-white rounded-2xl border border-${g}-200 overflow-hidden hover:shadow-2xl hover:shadow-${p}-500/20 hover:border-${p}-500 transition-all group cursor-pointer`}>
                            <div className="relative h-64 overflow-hidden">
                                <img src={prop.image} alt={prop.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className={`absolute top-4 right-4 bg-${p}-600 px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm`}>
                                    En Venta
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className={`text-lg font-bold text-${g}-900 group-hover:text-${p}-600 transition-colors line-clamp-1`}>{prop.title}</h3>
                                    <p className={`text-lg font-bold text-${p}-600`}>{prop.price}</p>
                                </div>
                                <p className={`text-${g}-500 text-sm mb-4 flex items-center gap-1`}>
                                    <MapPin className={`size-3 text-${p}-500`} /> {prop.location}
                                </p>
                                <div className={`flex items-center gap-4 text-${g}-600 text-sm border-t border-${g}-100 pt-4`}>
                                    <div className="flex items-center gap-1"><Bed className={`size-4 text-${p}-500`} /> {prop.beds}</div>
                                    <div className="flex items-center gap-1"><Bath className={`size-4 text-${p}-500`} /> {prop.baths}</div>
                                    <div className="flex items-center gap-1"><Square className={`size-4 text-${p}-500`} /> {prop.sqft}m²</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA SECTION (NUEVO: Para resaltar el color primario) */}
            <section className={`rounded-3xl bg-${g}-900 overflow-hidden shadow-2xl shadow-${g}-900/20 relative`}>
                <div className={`absolute inset-0 bg-gradient-to-br from-${p}-600/20 to-${p}-900/40`}></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="px-8 py-16 md:p-16 text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿Listo para encontrar tu nuevo hogar?</h2>
                    <p className={`text-${g}-300 text-lg mb-8 max-w-2xl mx-auto`}>
                        Únete a miles de personas que ya han encontrado la casa de sus sueños con <span className={`text-${p}-400 font-extrabold tracking-wide`}>InDevs</span>.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className={`bg-${p}-600 text-white px-8 py-3 rounded-full font-bold hover:bg-${p}-500 transition-colors shadow-lg shadow-${p}-500/25`}>
                            Comenzar Ahora
                        </button>
                        <button className={`bg-transparent border border-${g}-600 text-white px-8 py-3 rounded-full font-bold hover:bg-${g}-800 transition-colors`}>
                            Contactar Agente
                        </button>
                    </div>
                </div>
            </section>

            {/* SECCIÓN MAPA */}
            <section className={`bg-white p-1 rounded-3xl shadow-xl border border-${g}-200 overflow-hidden`}>
                <div className="p-8 pb-0 flex justify-between items-center mb-6">
                    <div>
                        <h3 className={`text-2xl font-bold text-${g}-900 mb-2`}>Explora en el Mapa</h3>
                        <p className={`text-${g}-600`}>Encuentra propiedades por ubicación exacta.</p>
                    </div>
                </div>
                <div className={`h-96 w-full bg-${g}-100 relative`}>
                    <LeafletMap />
                </div>
            </section>

        </div>

      </main>

      {/* BOTÓN FLOTANTE PARA VER LA PROPUESTA TÉCNICA */}
      <div className="fixed bottom-8 right-8 z-50">
        <Link href="/propuesta">
            <button className={`group flex items-center gap-3 bg-${g}-900 text-white px-6 py-4 rounded-full shadow-2xl hover:bg-black transition-all hover:scale-105 ring-4 ring-white`}>
                <div className={`bg-${p}-500 p-1.5 rounded-full`}>
                    <Sparkles className="size-4 text-white" />
                </div>
                <div className="text-left">
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Documentación</p>
                    <p className="font-bold text-sm">Ver Propuesta Técnica</p>
                </div>
            </button>
        </Link>
      </div>

      <footer className={`bg-${g}-50 border-t-4 border-${p}-500 pt-16 pb-8 mt-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <div className={`bg-${p}-600 p-1.5 rounded-lg`}>
                            <Layers3 className="text-white size-5" />
                        </div>
                        <span className={`text-xl font-bold text-${g}-900`}>InDevs</span>
                    </div>
                    <p className={`text-${g}-500 text-sm leading-relaxed`}>
                        Revolucionando el mercado inmobiliario con tecnología de punta y diseño centrado en el usuario.
                    </p>
                </div>
                
                <div>
                    <h4 className={`font-bold text-${p}-700 mb-4`}>Empresa</h4>
                    <ul className={`space-y-2 text-sm text-${g}-600`}>
                        <li><a href="#" className="hover:underline">Sobre Nosotros</a></li>
                        <li><a href="#" className="hover:underline">Carreras</a></li>
                        <li><a href="#" className="hover:underline">Blog</a></li>
                        <li><a href="#" className="hover:underline">Prensa</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className={`font-bold text-${p}-700 mb-4`}>Soporte</h4>
                    <ul className={`space-y-2 text-sm text-${g}-600`}>
                        <li><a href="#" className="hover:underline">Centro de Ayuda</a></li>
                        <li><a href="#" className="hover:underline">Contactar Agente</a></li>
                        <li><a href="#" className="hover:underline">Estado del Servicio</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className={`font-bold text-${p}-700 mb-4`}>Legal</h4>
                    <ul className={`space-y-2 text-sm text-${g}-600`}>
                        <li><a href="#" className="hover:underline">Términos de Servicio</a></li>
                        <li><a href="#" className="hover:underline">Política de Privacidad</a></li>
                        <li><a href="#" className="hover:underline">Cookies</a></li>
                    </ul>
                </div>
            </div>
            
            <div className={`border-t border-${g}-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4`}>
                <p className={`text-xs text-${g}-500`}>© 2024 InDevs Team. Todos los derechos reservados.</p>
            </div>
        </div>
      </footer>

      {/* SAFELIST: Forzar generación de clases dinámicas de Tailwind */}
      <div className="hidden">
        {/* Grays: slate, zinc, stone */}
        <div className="bg-slate-50 bg-slate-100 bg-slate-200 bg-slate-900 bg-slate-900/95 bg-slate-800/50 text-slate-100 text-slate-300 text-slate-400 text-slate-500 text-slate-600 text-slate-700 text-slate-900 border-slate-200 border-slate-300 border-slate-700 border-slate-800 placeholder-slate-400 placeholder-slate-500 hover:bg-slate-50 hover:bg-slate-100 hover:bg-slate-800 hover:border-slate-300 hover:border-slate-600 focus:border-slate-400 focus:bg-slate-800 shadow-slate-900/20 ring-slate-500"></div>
        <div className="bg-zinc-50 bg-zinc-100 bg-zinc-200 bg-zinc-900 bg-zinc-900/95 bg-zinc-800/50 text-zinc-100 text-zinc-300 text-zinc-400 text-zinc-500 text-zinc-600 text-zinc-700 text-zinc-900 border-zinc-200 border-zinc-300 border-zinc-700 border-zinc-800 placeholder-zinc-400 placeholder-zinc-500 hover:bg-zinc-50 hover:bg-zinc-100 hover:bg-zinc-800 hover:border-zinc-300 hover:border-zinc-600 focus:border-zinc-400 focus:bg-zinc-800 shadow-zinc-900/20 ring-zinc-500"></div>
        <div className="bg-stone-50 bg-stone-100 bg-stone-200 bg-stone-900 bg-stone-900/95 bg-stone-800/50 text-stone-100 text-stone-300 text-stone-400 text-stone-500 text-stone-600 text-stone-700 text-stone-900 border-stone-200 border-stone-300 border-stone-700 border-stone-800 placeholder-stone-400 placeholder-stone-500 hover:bg-stone-50 hover:bg-stone-100 hover:bg-stone-800 hover:border-stone-300 hover:border-stone-600 focus:border-stone-400 focus:bg-stone-800 shadow-stone-900/20 ring-stone-500"></div>

        {/* Primaries: blue, violet, emerald */}
        <div className="bg-blue-50 bg-blue-600 hover:bg-blue-700 text-blue-500 text-blue-600 text-blue-700 text-blue-900 border-blue-100 border-blue-500 focus:ring-blue-100 focus:border-blue-500 ring-blue-500 shadow-blue-600/20 group-hover:text-blue-500 focus:ring-blue-500/20 ring-blue-500/10 border-blue-500/20"></div>
        <div className="bg-violet-50 bg-violet-600 hover:bg-violet-700 text-violet-500 text-violet-600 text-violet-700 text-violet-900 border-violet-100 border-violet-500 focus:ring-violet-100 focus:border-violet-500 ring-violet-500 shadow-violet-600/20 group-hover:text-violet-500 focus:ring-violet-500/20 ring-violet-500/10 border-violet-500/20"></div>
        <div className="bg-emerald-50 bg-emerald-600 hover:bg-emerald-700 text-emerald-500 text-emerald-600 text-emerald-700 text-emerald-900 border-emerald-100 border-emerald-500 focus:ring-emerald-100 focus:border-emerald-500 ring-emerald-500 shadow-emerald-600/20 group-hover:text-emerald-500 focus:ring-emerald-500/20 ring-emerald-500/10 border-emerald-500/20"></div>
        <div className="bg-indigo-50 bg-indigo-600 hover:bg-indigo-700 text-indigo-500 text-indigo-600 text-indigo-700 text-indigo-900 border-indigo-100 border-indigo-500 focus:ring-indigo-100 focus:border-indigo-500 ring-indigo-500 shadow-indigo-600/20 group-hover:text-indigo-500 focus:ring-indigo-500/20 ring-indigo-500/10 border-indigo-500/20"></div>
        <div className="bg-rose-50 bg-rose-600 hover:bg-rose-700 text-rose-500 text-rose-600 text-rose-700 text-rose-900 border-rose-100 border-rose-500 focus:ring-rose-100 focus:border-rose-500 ring-rose-500 shadow-rose-600/20 group-hover:text-rose-500 focus:ring-rose-500/20 ring-rose-500/10 border-rose-500/20"></div>
        <div className="bg-amber-50 bg-amber-600 hover:bg-amber-700 text-amber-500 text-amber-600 text-amber-700 text-amber-900 border-amber-100 border-amber-500 focus:ring-amber-100 focus:border-amber-500 ring-amber-500 shadow-amber-600/20 group-hover:text-amber-500 focus:ring-amber-500/20 ring-amber-500/10 border-amber-500/20"></div>
        
        {/* CTA Specific Safelist */}
        <div className="text-blue-400 text-violet-400 text-emerald-400 text-indigo-400 text-rose-400 text-amber-400 from-blue-600/20 from-violet-600/20 from-emerald-600/20 from-indigo-600/20 from-rose-600/20 from-amber-600/20 to-blue-900/40 to-violet-900/40 to-emerald-900/40 to-indigo-900/40 to-rose-900/40 to-amber-900/40 shadow-blue-500/25 shadow-violet-500/25 shadow-emerald-500/25 shadow-indigo-500/25 shadow-rose-500/25 shadow-amber-500/25"></div>
      </div>
    </div>
  );
}