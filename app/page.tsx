"use client";

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { 
    Layers3, 
    MapPin, 
    Search,  
    Palette, 
    Check, 
    Bed, 
    Bath, 
    Square, 
    ArrowRight, 
    ChevronDown,
    Home,
    Building,
    Hotel,
    Trees,
    Cross,
    BarChart3,
    Filter,
    Sparkles
} from 'lucide-react';
import { Inter, Montserrat } from 'next/font/google';
import { useTheme } from './layout';

// Configuración de fuentes con Next.js
const inter = Inter({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });

// Importación dinámica de Leaflet (evita errores en el servidor)
const LeafletMap = dynamic(() => import('@/components/LeafletMap'), { ssr: false });

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

// Datos simulados para ciudades (Buscador Dinámico)
const CITIES_DATA = [
  { name: 'Cochabamba', department: 'Cochabamba', flag: '🇧🇴' },
  { name: 'La Paz', department: 'La Paz', flag: '🇧🇴' },
  { name: 'Santa Cruz de la Sierra', department: 'Santa Cruz', flag: '🇧🇴' },
  { name: 'El Alto', department: 'La Paz', flag: '🇧🇴' },
  { name: 'Sucre', department: 'Chuquisaca', flag: '🇧🇴' },
  { name: 'Oruro', department: 'Oruro', flag: '🇧🇴' },
  { name: 'Tarija', department: 'Tarija', flag: '🇧🇴' },
  { name: 'Potosí', department: 'Potosí', flag: '🇧🇴' },
  { name: 'Quillacollo', department: 'Cochabamba', flag: '🇧🇴' },
  { name: 'Sacaba', department: 'Cochabamba', flag: '🇧🇴' },
];

// Datos de Resumen de Mercado
const MARKET_STATS = {
  rentals: [
    { city: 'Santa Cruz', count: 1240 },
    { city: 'La Paz', count: 980 },
    { city: 'Cochabamba', count: 850 },
  ],
  sales: [
    { city: 'Santa Cruz', count: 3500 },
    { city: 'Cochabamba', count: 2100 },
    { city: 'La Paz', count: 1800 },
  ],
  types: [
    { label: 'Casas', count: 4500, icon: Home },
    { label: 'Departamentos', count: 3200, icon: Building },
    { label: 'Cuartos', count: 1500, icon: Hotel },
    { label: 'Terrenos', count: 2800, icon: Trees },
    { label: 'Espacios Cementerio', count: 120, icon: Cross }, // Usando Cross como referencia visual
  ]
};

export default function HomePage() {
  // Estados para el Buscador y Usuario
  const [selectedOperations, setSelectedOperations] = useState<string[]>(['venta']);
  const [selectedPropertyType, setSelectedPropertyType] = useState('casas');
  const [citySearch, setCitySearch] = useState('');
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const { p, g } = useTheme();

  // Lógica de filtrado de ciudades
  const filteredCities = citySearch.length >= 3 
    ? CITIES_DATA.filter(c => c.name.toLowerCase().includes(citySearch.toLowerCase()))
    : [];

  const toggleOperation = (op: string) => setSelectedOperations(prev => prev.includes(op) ? prev.filter(p => p !== op) : [...prev, op]);

  return (
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
                <p className={`text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto`}>
                    La plataforma inmobiliaria más completa para comprar, alquilar y vender en Bolivia.
                </p>
                
                {/* Search Component (Sprint 1) */}
                <div className="bg-white p-6 rounded-3xl shadow-2xl max-w-4xl mx-auto">
                    {/* 1. Tipo de Operación */}
                    <div className="flex flex-wrap gap-4 mb-6 justify-center sm:justify-start">
                        {['Venta', 'Alquiler', 'Anticrético'].map((op) => (
                          <label key={op} className="flex items-center cursor-pointer group">
                            <div className={`mr-2 flex items-center justify-center size-5 border-2 rounded transition-colors ${selectedOperations.includes(op.toLowerCase()) ? `bg-${p}-600 border-${p}-600` : `border-${g}-300 bg-white`}`}>
                              {selectedOperations.includes(op.toLowerCase()) && <Check className="size-3 text-white" />}
                            </div>
                            <input 
                              type="checkbox" 
                              className="hidden" 
                              checked={selectedOperations.includes(op.toLowerCase())}
                              onChange={() => toggleOperation(op.toLowerCase())}
                            />
                            <span className={`text-sm font-semibold ${selectedOperations.includes(op.toLowerCase()) ? `text-${p}-700` : `text-${g}-600`}`}>{op}</span>
                          </label>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                      {/* 2. Tipo de Inmueble */}
                      <div className="md:col-span-4 relative">
                        <label className={`block text-xs font-bold text-${g}-500 uppercase tracking-wider mb-1 ml-1`}>Tipo de Inmueble</label>
                        <div className="relative">
                          <Home className={`absolute left-3 top-3 size-5 text-${g}-400`} />
                          <select 
                            value={selectedPropertyType}
                            onChange={(e) => setSelectedPropertyType(e.target.value)}
                            className={`w-full pl-10 pr-8 py-3 bg-${g}-50 border border-${g}-200 rounded-xl text-${g}-700 font-medium focus:ring-2 focus:ring-${p}-500 focus:border-${p}-500 appearance-none`}
                          >
                            <option value="casas">Casas</option>
                            <option value="departamentos">Departamentos</option>
                            <option value="cuartos">Cuartos</option>
                            <option value="terrenos">Terrenos</option>
                            <option value="cementerios">Espacios Cementerio</option>
                          </select>
                          <ChevronDown className={`absolute right-3 top-3.5 size-4 text-${g}-500 pointer-events-none`} />
                        </div>
                      </div>

                      {/* 3. Ciudad (Búsqueda Dinámica) */}
                      <div className="md:col-span-5 relative">
                        <label className={`block text-xs font-bold text-${g}-500 uppercase tracking-wider mb-1 ml-1`}>Ciudad / Zona</label>
                        <div className="relative">
                          <MapPin className={`absolute left-3 top-3 size-5 text-${g}-400`} />
                          <input 
                            type="text" 
                            placeholder="Cochabamba, La Paz, Santa Cruz" 
                            value={selectedCity || citySearch}
                            onChange={(e) => {
                              setCitySearch(e.target.value);
                              setSelectedCity(null);
                            }}
                            className={`w-full pl-10 pr-4 py-3 bg-${g}-50 border border-${g}-200 rounded-xl text-${g}-900 placeholder-${g}-400 focus:ring-2 focus:ring-${p}-500 focus:border-${p}-500`}
                          />
                          
                          {/* Resultados Autocompletado */}
                          {citySearch.length >= 3 && !selectedCity && filteredCities.length > 0 && (
                            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 z-50 overflow-hidden">
                              {filteredCities.map((city, idx) => (
                                <button 
                                  key={idx}
                                  onClick={() => {
                                    setSelectedCity(`${city.name}, ${city.department}`);
                                    setCitySearch('');
                                  }}
                                  className={`w-full text-left px-4 py-3 hover:bg-${g}-50 flex items-center justify-between group border-b border-${g}-50 last:border-0`}
                                >
                                  <div>
                                    <span className={`block font-bold text-${g}-800`}>{city.name}</span>
                                    <span className={`text-xs text-${g}-500`}>{city.department}</span>
                                  </div>
                                  <span className="text-xl">{city.flag}</span>
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Botón Buscar */}
                      <div className="md:col-span-3 flex items-end">
                        <button className={`w-full bg-${p}-600 text-white h-[50px] rounded-xl font-bold hover:bg-${p}-700 transition-all shadow-lg shadow-${p}-500/30 flex items-center justify-center gap-2 transform active:scale-95`}>
                        <Search className="size-4" /> Buscar
                        </button>
                      </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
            
            <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* SIDEBAR: FILTROS (Estilo Faceted Navigation) */}
                <aside className="w-full lg:w-72 flex-shrink-0">
                    <div className={`bg-white rounded-2xl border border-${g}-200 p-6 shadow-sm sticky top-24`}>
                        <div className={`flex items-center gap-2 mb-6 pb-4 border-b border-${g}-100`}>
                            <Filter className={`size-5 text-${p}-600`} />
                            <h2 className={`font-bold text-${g}-900`}>Filtros</h2>
                        </div>

                        <div className="space-y-8">
                            {/* Alquileres */}
                            <div>
                                <h3 className={`text-xs font-bold text-${g}-900 uppercase tracking-wider mb-3`}>Alquileres</h3>
                                <ul className="space-y-2">
                                    {MARKET_STATS.rentals.map((stat) => (
                                        <li key={stat.city} className={`flex justify-between items-center group cursor-pointer hover:bg-${g}-50 p-1.5 rounded-lg transition-colors`}>
                                            <span className={`text-sm text-${g}-600 group-hover:text-${p}-600 font-medium`}>{stat.city}</span>
                                            <span className={`text-xs text-${g}-500 bg-${g}-100 px-2 py-0.5 rounded-full group-hover:bg-${p}-50 group-hover:text-${p}-600`}>{stat.count} disp.</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Ventas */}
                            <div>
                                <h3 className={`text-xs font-bold text-${g}-900 uppercase tracking-wider mb-3`}>En Venta</h3>
                                <ul className="space-y-2">
                                    {MARKET_STATS.sales.map((stat) => (
                                        <li key={stat.city} className={`flex justify-between items-center group cursor-pointer hover:bg-${g}-50 p-1.5 rounded-lg transition-colors`}>
                                            <span className={`text-sm text-${g}-600 group-hover:text-${p}-600 font-medium`}>{stat.city}</span>
                                            <span className={`text-xs text-${g}-500 bg-${g}-100 px-2 py-0.5 rounded-full group-hover:bg-${p}-50 group-hover:text-${p}-600`}>{stat.count} casas</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Por Tipo */}
                            <div>
                                <h3 className={`text-xs font-bold text-${g}-900 uppercase tracking-wider mb-3`}>Inventario por Tipo</h3>
                                <ul className="space-y-2">
                                    {MARKET_STATS.types.map((stat) => (
                                        <li key={stat.label} className={`flex justify-between items-center group cursor-pointer hover:bg-${g}-50 p-1.5 rounded-lg transition-colors`}>
                                            <div className="flex items-center gap-2">
                                                <stat.icon className={`size-3.5 text-${g}-400 group-hover:text-${p}-500`} />
                                                <span className={`text-sm text-${g}-600 group-hover:text-${p}-600 font-medium`}>{stat.label}</span>
                                            </div>
                                            <span className={`text-xs text-${g}-500 bg-${g}-100 px-2 py-0.5 rounded-full group-hover:bg-${p}-50 group-hover:text-${p}-600`}>{stat.count}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </aside>
            
            {/* CONTENIDO PRINCIPAL */}
            <div className="flex-1 space-y-16">

            {/* LISTADO DE PROPIEDADES */}
            <section>
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h2 className={`text-3xl font-bold text-${g}-900`}>Propiedades Destacadas</h2>
                        <p className={`text-${g}-600 mt-2`}>Selección exclusiva de inmuebles para ti.</p>
                    </div>
                    <Link href="/propiedades" className={`text-${p}-600 font-semibold hover:underline flex items-center gap-1`}>
                        Ver todas <ArrowRight className="size-4" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {PROPERTIES.map((prop) => (
                        <Link key={prop.id} href={`/propiedades/${prop.id}`} className="block group">
                            <div className={`bg-white rounded-2xl border border-${g}-200 overflow-hidden hover:shadow-2xl hover:shadow-${p}-500/20 hover:border-${p}-500 transition-all h-full`}>
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
                        </Link>
                    ))}
                </div>
            </section>

            {/* CTA SECTION (NUEVO: Para resaltar el color primario) */}
            <section className={`rounded-3xl bg-${g}-900 overflow-hidden shadow-xl shadow-${g}-900/10 relative`}>
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
            </div>

        </div>

      </main>

  );
}