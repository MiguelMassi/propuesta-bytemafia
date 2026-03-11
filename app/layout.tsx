"use client";

import React, { useState, createContext, useContext } from 'react';
import Link from 'next/link';
import { 
    Layers3, 
    Wand2, 
    User, 
    Menu, 
    Palette, 
    Check, 
    Sparkles,
    LogOut
} from 'lucide-react';
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

// Definición de Temas (Paletas de Color)
const THEMES = {
  blue: { id: 'blue', label: 'Tech Blue', primary: 'blue', gray: 'zinc', hex: '#2563EB' },
  indigo: { id: 'indigo', label: 'Trust Indigo', primary: 'indigo', gray: 'slate', hex: '#4F46E5' },
  rose: { id: 'rose', label: 'Modern Rose', primary: 'rose', gray: 'stone', hex: '#E11D48' },
  amber: { id: 'amber', label: 'Luxury Gold', primary: 'amber', gray: 'stone', hex: '#D97706' },
  violet: { id: 'violet', label: 'Creative Violet', primary: 'violet', gray: 'zinc', hex: '#7C3AED' },
  emerald: { id: 'emerald', label: 'Eco Green', primary: 'emerald', gray: 'stone', hex: '#059669' }
};

type ThemeKey = keyof typeof THEMES;

const ThemeContext = createContext<{ p: string; g: string; } | null>(null);

/**
 * Hook para consumir el tema actual (colores primario 'p' y gris 'g').
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    // Fallback por si se usa fuera del provider, aunque no debería ocurrir.
    console.warn('useTheme must be used within a ThemeProvider. Using default theme.');
    const defaultTheme = THEMES['blue'];
    return { p: defaultTheme.primary, g: defaultTheme.gray };
  }
  return context;
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [font, setFont] = useState('font-inter');
  const [currentTheme, setCurrentTheme] = useState<ThemeKey>('blue');
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  // Helpers para clases dinámicas
  const theme = THEMES[currentTheme];
  const p = theme.primary;
  const g = theme.gray;

  return (
    <html lang="es">
      <body className={`${font === 'font-inter' ? inter.className : montserrat.className} ${inter.variable} ${montserrat.variable} antialiased bg-${g}-50 text-${g}-900 transition-colors duration-300`}>
        <ThemeContext.Provider value={{ p, g }}>
        <nav className={`sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-${g}-200 shadow-sm transition-all duration-300`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center">
              <Link href="/" className="flex items-center gap-2 cursor-pointer group">
                <div className={`bg-${p}-600 p-2 rounded-xl shadow-lg shadow-${p}-500/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <Layers3 className="text-white size-6" />
                </div>
                <span className={`text-xl font-bold tracking-tight hidden md:block transition-opacity`}>
                  <span className={`text-${g}-900`}>In</span><span className={`text-${p}-600`}>Devs</span>
                </span>
              </Link>
              <div className="hidden md:flex flex-1 items-center justify-center gap-8">
                  <Link href="/" className={`text-sm font-semibold text-${g}-700 hover:text-${p}-600 transition-colors`}>
                      Inicio
                  </Link>
                  <Link href="/sobre-nosotros" className={`text-sm font-semibold text-${g}-700 hover:text-${p}-600 transition-colors`}>
                      Sobre Nosotros
                  </Link>
                  <Link href="/terminos" className={`text-sm font-semibold text-${g}-700 hover:text-${p}-600 transition-colors`}>
                      Términos y Condiciones
                  </Link>
                  <Link href="/contacto" className={`text-sm font-semibold text-${g}-700 hover:text-${p}-600 transition-colors`}>
                      Contáctanos
                  </Link>
              </div>
              <div className="flex items-center gap-4">
                {!isLoggedIn ? (
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => setIsLoggedIn(true)}
                      className={`text-sm font-bold text-${g}-600 hover:text-${p}-600 transition-colors`}
                    >
                      Ingresar
                    </button>
                    <button className={`bg-${p}-600 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-${p}-700 transition-all shadow-lg shadow-${p}-500/30 hover:scale-105`}>
                      Registrarse
                    </button>
                  </div>
                ) : (
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <button 
                      onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                      className={`flex items-center gap-3 pl-3 pr-2 py-1.5 border border-${g}-200 rounded-full hover:shadow-md hover:border-${p}-300 bg-white transition-all`}
                    >
                      <Menu className={`size-4 text-${g}-500`} />
                      <div className={`size-8 bg-${p}-100 rounded-full flex items-center justify-center text-${p}-700 overflow-hidden border border-${p}-200`}>
                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Usuario" className="w-full h-full object-cover" />
                      </div>
                    </button>
                    {isUserMenuOpen && (
                      <div className={`absolute right-0 top-full mt-2 w-72 bg-white rounded-xl shadow-2xl border border-${g}-100 overflow-hidden transform origin-top-right transition-all z-50`}>
                        <div className={`p-4 border-b border-${g}-100 bg-${g}-50/50`}>
                          <div className="flex items-center gap-3">
                             <div className="size-10 rounded-full overflow-hidden border border-white shadow-sm">
                                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Usuario" className="w-full h-full object-cover" />
                             </div>
                             <div>
                               <p className={`text-sm font-bold text-${g}-900`}>Juan Pérez</p>
                               <p className={`text-xs text-${g}-500`}>juan.perez@example.com</p>
                             </div>
                          </div>
                        </div>
                        <div className="p-2">
                          <Link href="/perfil" className={`flex items-center gap-3 px-4 py-3 text-sm text-${g}-700 hover:bg-${g}-50 rounded-lg transition-colors`}>
                            <User className="size-4" /> Mi Perfil
                          </Link>
                          <button 
                            onClick={() => {
                              setIsUserMenuOpen(false);
                              setShowLogoutModal(true);
                            }}
                            className="w-full flex items-center gap-3 px-4 py-3 text-sm text-rose-600 hover:bg-rose-50 rounded-lg transition-colors text-left"
                          >
                            <LogOut className="size-4" /> Cerrar Sesión
                          </button>
                        </div>
                      </div>
                    )}
                    </div>
                  </div>
                )}
                </div>
              </div>
            </div>
        </nav>

        <div className={`bg-white text-${g}-500 py-2 text-center text-xs border-b border-${g}-200 transition-colors duration-500`}>
            <div className="flex justify-center gap-6 items-center flex-wrap px-4">
              <div className="flex items-center gap-2">
                  <Wand2 className="size-3" />
                  <span className="opacity-80 font-mono">FUENTE:</span>
                  <button onClick={() => setFont('font-montserrat')} className={`px-3 py-0.5 rounded transition-colors ${font === 'font-montserrat' ? `bg-${p}-600 text-white` : `hover:bg-${g}-100`}`}>Montserrat</button>
                  <button onClick={() => setFont('font-inter')} className={`px-3 py-0.5 rounded transition-colors ${font === 'font-inter' ? `bg-${p}-600 text-white` : `hover:bg-${g}-100`}`}>Inter</button>
              </div>
              <div className={`w-px h-4 bg-${g}-200 hidden sm:block`}></div>
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

        {children}

        <div className="fixed bottom-8 right-8 z-50">
          <Link href="/propuesta" className={`group flex items-center gap-3 bg-${g}-900 text-white px-6 py-4 rounded-full shadow-2xl hover:bg-black transition-all hover:scale-105 ring-4 ring-white`}>
              <div className={`bg-${p}-500 p-1.5 rounded-full`}>
                  <Sparkles className="size-4 text-white" />
              </div>
              <div className="text-left">
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Documentación</p>
                  <p className="font-bold text-sm">Ver Propuesta Técnica</p>
              </div>
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
                      <h4 className={`font-bold text-${p}-700 mb-4`}>Enlaces Útiles</h4>
                      <ul className={`space-y-2 text-sm text-${g}-600`}>
                          <li><a href="#" className="hover:underline hover:text-${p}-600">Comprar Propiedad</a></li>
                          <li><a href="#" className="hover:underline hover:text-${p}-600">Alquilar Inmueble</a></li>
                          <li><a href="#" className="hover:underline hover:text-${p}-600">Anticrético</a></li>
                          <li><a href="#" className="hover:underline hover:text-${p}-600 font-semibold text-${p}-600">Publica tu Inmueble</a></li>
                      </ul>
                  </div>
                  <div>
                      <h4 className={`font-bold text-${p}-700 mb-4`}>Legal y Soporte</h4>
                      <ul className={`space-y-2 text-sm text-${g}-600`}>
                          <li><a href="/sobre-nosotros" className="hover:underline">Sobre Nosotros</a></li>
                          <li><a href="/terminos" className="hover:underline">Términos y Condiciones</a></li>
                          <li><a href="/privacidad" className="hover:underline">Políticas de Privacidad</a></li>
                      </ul>
                  </div>
                  <div>
                      <h4 className={`font-bold text-${p}-700 mb-4`}>Contacto</h4>
                      <ul className={`space-y-2 text-sm text-${g}-600`}>
                          <li><a href="#" className="hover:underline">Términos de Servicio</a></li>
                          <li><a href="#" className="hover:underline">Política de Privacidad</a></li>
                          <li><a href="#" className="hover:underline">Cookies</a></li>
                      </ul>
                  </div>
              </div>
              <div className={`border-t border-${g}-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4`}>
                  <p className={`text-xs text-${g}-500`}>© 2026 InDevs Team. Todos los derechos reservados.</p>
              </div>
          </div>
        </footer>

        {showLogoutModal && (
          <div className={`fixed inset-0 bg-${g}-900/50 z-[100] flex items-center justify-center p-4 backdrop-blur-sm`}>
              <div className={`bg-white rounded-xl shadow-2xl p-6 max-w-sm w-full`}>
                  <h3 className={`text-lg font-bold text-${g}-900 mb-2`}>¿Cerrar Sesión?</h3>
                  <p className={`text-${g}-600 text-sm mb-6`}>
                      Se finalizará tu sesión actual en este dispositivo.
                  </p>
                  <div className="flex justify-end gap-3">
                      <button 
                          onClick={() => setShowLogoutModal(false)}
                          className={`px-4 py-2 rounded-lg text-sm font-semibold text-${g}-700 bg-${g}-100 hover:bg-${g}-200 transition-colors`}
                      >
                          Cancelar
                      </button>
                      <button 
                          onClick={() => {
                              setShowLogoutModal(false);
                              setIsLoggedIn(false);
                          }}
                          className="px-4 py-2 rounded-lg bg-rose-600 text-white hover:bg-rose-700 text-sm font-semibold transition-colors"
                      >
                          Cerrar Sesión
                      </button>
                  </div>
              </div>
          </div>
        )}

        <div className="hidden">
          <div className="bg-slate-50 bg-slate-100 bg-slate-200 bg-slate-900 bg-slate-900/95 bg-slate-800/50 text-slate-100 text-slate-300 text-slate-400 text-slate-500 text-slate-600 text-slate-700 text-slate-900 border-slate-200 border-slate-300 border-slate-700 border-slate-800 placeholder-slate-400 placeholder-slate-500 hover:bg-slate-50 hover:bg-slate-100 hover:bg-slate-800 hover:border-slate-300 hover:border-slate-600 focus:border-slate-400 focus:bg-slate-800 shadow-slate-900/20 ring-slate-500"></div>
          <div className="bg-zinc-50 bg-zinc-100 bg-zinc-200 bg-zinc-900 bg-zinc-900/95 bg-zinc-800/50 text-zinc-100 text-zinc-300 text-zinc-400 text-zinc-500 text-zinc-600 text-zinc-700 text-zinc-900 border-zinc-200 border-zinc-300 border-zinc-700 border-zinc-800 placeholder-zinc-400 placeholder-zinc-500 hover:bg-zinc-50 hover:bg-zinc-100 hover:bg-zinc-800 hover:border-zinc-300 hover:border-zinc-600 focus:border-zinc-400 focus:bg-zinc-800 shadow-zinc-900/20 ring-zinc-500"></div>
          <div className="bg-stone-50 bg-stone-100 bg-stone-200 bg-stone-900 bg-stone-900/95 bg-stone-800/50 text-stone-100 text-stone-300 text-stone-400 text-stone-500 text-stone-600 text-stone-700 text-stone-900 border-stone-200 border-stone-300 border-stone-700 border-stone-800 placeholder-stone-400 placeholder-stone-500 hover:bg-stone-50 hover:bg-stone-100 hover:bg-stone-800 hover:border-stone-300 hover:border-stone-600 focus:border-stone-400 focus:bg-stone-800 shadow-stone-900/20 ring-stone-500"></div>
          <div className="bg-blue-50 bg-blue-600 hover:bg-blue-700 text-blue-500 text-blue-600 text-blue-700 text-blue-900 border-blue-100 border-blue-500 focus:ring-blue-100 focus:border-blue-500 ring-blue-500 shadow-blue-600/20 group-hover:text-blue-500 focus:ring-blue-500/20 ring-blue-500/10 border-blue-500/20"></div>
          <div className="bg-violet-50 bg-violet-600 hover:bg-violet-700 text-violet-500 text-violet-600 text-violet-700 text-violet-900 border-violet-100 border-violet-500 focus:ring-violet-100 focus:border-violet-500 ring-violet-500 shadow-violet-600/20 group-hover:text-violet-500 focus:ring-violet-500/20 ring-violet-500/10 border-violet-500/20"></div>
          <div className="bg-emerald-50 bg-emerald-600 hover:bg-emerald-700 text-emerald-500 text-emerald-600 text-emerald-700 text-emerald-900 border-emerald-100 border-emerald-500 focus:ring-emerald-100 focus:border-emerald-500 ring-emerald-500 shadow-emerald-600/20 group-hover:text-emerald-500 focus:ring-emerald-500/20 ring-emerald-500/10 border-emerald-500/20"></div>
          <div className="bg-indigo-50 bg-indigo-600 hover:bg-indigo-700 text-indigo-500 text-indigo-600 text-indigo-700 text-indigo-900 border-indigo-100 border-indigo-500 focus:ring-indigo-100 focus:border-indigo-500 ring-indigo-500 shadow-indigo-600/20 group-hover:text-indigo-500 focus:ring-indigo-500/20 ring-indigo-500/10 border-indigo-500/20"></div>
          <div className="bg-rose-50 bg-rose-600 hover:bg-rose-700 text-rose-500 text-rose-600 text-rose-700 text-rose-900 border-rose-100 border-rose-500 focus:ring-rose-100 focus:border-rose-500 ring-rose-500 shadow-rose-600/20 group-hover:text-rose-500 focus:ring-rose-500/20 ring-rose-500/10 border-rose-500/20"></div>
          <div className="bg-amber-50 bg-amber-600 hover:bg-amber-700 text-amber-500 text-amber-600 text-amber-700 text-amber-900 border-amber-100 border-amber-500 focus:ring-amber-100 focus:border-amber-500 ring-amber-500 shadow-amber-600/20 group-hover:text-amber-500 focus:ring-amber-500/20 ring-amber-500/10 border-amber-500/20"></div>
          <div className="text-blue-400 text-violet-400 text-emerald-400 text-indigo-400 text-rose-400 text-amber-400 from-blue-600/20 from-violet-600/20 from-emerald-600/20 from-indigo-600/20 from-rose-600/20 from-amber-600/20 to-blue-900/40 to-violet-900/40 to-emerald-900/40 to-indigo-900/40 to-rose-900/40 to-amber-900/40 shadow-blue-500/25 shadow-violet-500/25 shadow-emerald-500/25 shadow-indigo-500/25 shadow-rose-500/25 shadow-amber-500/25"></div>
        </div>

        </ThemeContext.Provider>
      </body>
    </html>
  );
}