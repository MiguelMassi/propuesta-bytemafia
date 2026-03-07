"use client";

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Layers3, MapPin, Database, Sparkles, Wand2, Search, User, Menu, Bell } from 'lucide-react';
import { Inter, Montserrat } from 'next/font/google';

// Configuración de fuentes con Next.js
const inter = Inter({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });

// Importación dinámica de Leaflet (evita errores en el servidor)
const LeafletMap = dynamic(() => import('@/components/LeafletMap'), { ssr: false });

export default function Propuesta7Marzo() {
  const [font, setFont] = useState('font-inter');

  return (
    <div className={`${font === 'font-inter' ? inter.className : montserrat.className} min-h-screen bg-slate-50 text-slate-900 transition-all duration-300`}>
      
      {/* HEADER TIPO APP REAL (Estilo Airbnb/Zillow) */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            
            {/* 1. Logo */}
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <Layers3 className="text-white size-6" />
              </div>
              <span className="text-xl font-bold text-blue-900 tracking-tight hidden md:block">
                Byte<span className="text-blue-600">Mafia</span>
              </span>
            </div>

            {/* 2. Barra de Búsqueda Central (Fake) */}
            <div className="hidden md:flex flex-1 max-w-lg mx-8">
              <div className="relative w-full group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-full leading-5 bg-slate-50 placeholder-slate-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-500 sm:text-sm transition-all shadow-sm"
                  placeholder="Buscar por ciudad, zona o código..."
                  readOnly
                />
                <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
                    <button className="bg-blue-600 text-white rounded-full p-1.5 hover:bg-blue-700 transition-colors">
                        <Search className="size-3" />
                    </button>
                </div>
              </div>
            </div>

            {/* 3. Menú Usuario */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-slate-600 hover:text-slate-900 cursor-pointer hidden lg:block transition-colors">
                Publicar Inmueble
              </span>
              <div className="flex items-center gap-3">
                <button className="text-slate-500 hover:bg-slate-100 p-2 rounded-full transition-colors relative">
                    <Bell className="size-5" />
                    <span className="absolute top-2 right-2 size-2 bg-rose-500 rounded-full border-2 border-white"></span>
                </button>
                <div className="flex items-center gap-2 border border-slate-300 rounded-full px-2 py-1 pl-3 hover:shadow-md transition-shadow cursor-pointer bg-white">
                  <Menu className="size-4 text-slate-600" />
                  <div className="size-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-500">
                    <User className="size-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* BARRA DE CONTROL DE DEMO (Para cambiar fuentes) */}
      <div className="bg-slate-900 text-slate-300 py-2 text-center text-xs border-b border-slate-800">
          <div className="flex justify-center gap-4 items-center">
            <Wand2 className="size-3" />
            <span className="opacity-80 font-mono">PANEL DE DISEÑO:</span>
            <button onClick={() => setFont('font-montserrat')} className={`px-3 py-0.5 rounded transition-colors ${font === 'font-montserrat' ? 'bg-blue-600 text-white' : 'hover:bg-slate-800'}`}>Montserrat</button>
            <button onClick={() => setFont('font-inter')} className={`px-3 py-0.5 rounded transition-colors ${font === 'font-inter' ? 'bg-blue-600 text-white' : 'hover:bg-slate-800'}`}>Inter</button>
          </div>
      </div>

      <main className="max-w-6xl mx-auto p-6 md:p-10 space-y-24">
        
        {/* SECCIÓN 1: PROPUESTA TÉCNICA (Resumida) */}
        <section className="text-center space-y-8 pt-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-bold border border-blue-100">
            <Sparkles className="size-4" /> Propuesta Técnica: Opción 4
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
            Stack Moderno & Escalable
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Arquitectura basada en <strong className='text-blue-600'>Next.js 15</strong>, <strong className='text-emerald-600'>Supabase</strong> y <strong className='text-slate-900'>Prisma</strong>. Diseñada para velocidad, seguridad y una experiencia de usuario premium.
          </p>
          
          {/* Grid de Tecnologías */}
          <div className="grid md:grid-cols-3 gap-6 text-left mt-12">
            {/* Next.js */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">▲</div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Next.js 15</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Elegido por su **App Router** que optimiza el SEO y la carga inicial mediante Server Components. Facilita el routing dinámico.
              </p>
            </div>

            {/* TypeScript */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4 text-blue-600">TS</div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">TypeScript</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Indispensable para un proyecto escalable. Provee **seguridad de tipos** desde la base de datos hasta el frontend.
              </p>
            </div>

            {/* Tailwind */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4 text-cyan-500">CSS</div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Tailwind CSS</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Permite un desarrollo visual **rápido y consistente**. Facilita la creación de un diseño responsive y moderno.
              </p>
            </div>

            {/* Prisma ORM (Destacado) */}
            <div className="md:col-span-2 bg-slate-900 p-8 rounded-2xl shadow-lg text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Database size={120} />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-white">Prisma ORM: El Poder de los Datos</h4>
              <p className="text-slate-300 mb-6 max-w-lg">
                Prisma nos permite interactuar con la base de datos de forma intuitiva y segura.
              </p>
              
              <div className="bg-black/50 p-4 rounded-lg font-mono text-sm border border-slate-700 overflow-x-auto">
                <pre>
                  <span className="text-purple-400">const</span> <span className="text-blue-300">inmuebles</span> = <span className="text-purple-400">await</span> prisma.inmueble.<span className="text-yellow-300">findMany</span>({'{'}
                  <br/>&nbsp;&nbsp;<span className="text-sky-300">where</span>: {'{'}
                  <br/>&nbsp;&nbsp;&nbsp;&nbsp;ciudad: <span className="text-green-300">'Cochabamba'</span>,
                  <br/>&nbsp;&nbsp;&nbsp;&nbsp;precio: {'{'} <span className="text-sky-300">lte</span>: <span className="text-orange-300">200000</span> {'}'}
                  <br/>&nbsp;&nbsp;{'}'}
                  <br/>{'}'});
                </pre>
              </div>
            </div>

            {/* Supabase */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col justify-center">
              <div className="text-4xl mb-4 text-emerald-500">⚡</div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Supabase</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Infraestructura completa: **PostgreSQL**, **Auth** y **Storage**. Todo en una plataforma open source.
              </p>
            </div>
          </div>
        </section>

        {/* SECCIÓN: GESTIÓN DE IMÁGENES (Restaurada) */}
        <section className="bg-blue-600 text-white p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold mb-4">Gestión de Imágenes con Supabase Storage</h2>
          <p className="mb-6 opacity-90">
            Para el Sprint 1, implementaremos el manejo de fotos de inmuebles mediante **Buckets de Supabase**, permitiendo carga asíncrona y optimización de entrega vía CDN.
          </p>
          <div className="bg-white/10 p-4 rounded-lg font-mono text-sm">
            // Ejemplo de flujo:<br/>
            const {'{ data, error }'} = await supabase.storage<br/>
            &nbsp;&nbsp;.from('inmuebles_fotos')<br/>
            &nbsp;&nbsp;.upload('casa-zona-sur.png', file)
          </div>
        </section>

        {/* SECCIÓN 2: SISTEMA DE DISEÑO (NUEVO) */}
        <section className="border-t border-slate-200 pt-16">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Sistema de Diseño UI/UX</h2>
                <p className="text-slate-600">Guía de estilos visuales para el desarrollo del MVP</p>
            </div>

            <div className="grid gap-16">
                
                {/* 2.1 PALETA DE COLORES */}
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                        <span className="flex items-center justify-center size-8 rounded-full bg-slate-900 text-white text-sm">1</span>
                        Paleta de Colores
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {/* Primary */}
                        <div className="group cursor-pointer">
                            <div className="h-28 rounded-2xl bg-blue-600 shadow-lg shadow-blue-600/20 flex items-end p-4 text-white transition-transform group-hover:-translate-y-1">
                                <span className="font-mono text-xs opacity-80">#2563EB</span>
                            </div>
                            <div className="mt-3 px-1">
                                <p className="font-bold text-slate-900">Primary Blue</p>
                                <p className="text-xs text-slate-500">Acciones principales, Brand</p>
                            </div>
                        </div>
                        {/* Dark */}
                        <div className="group cursor-pointer">
                            <div className="h-28 rounded-2xl bg-slate-900 shadow-lg shadow-slate-900/20 flex items-end p-4 text-white transition-transform group-hover:-translate-y-1">
                                <span className="font-mono text-xs opacity-80">#0F172A</span>
                            </div>
                            <div className="mt-3 px-1">
                                <p className="font-bold text-slate-900">Slate Dark</p>
                                <p className="text-xs text-slate-500">Texto principal, Headings</p>
                            </div>
                        </div>
                        {/* Success */}
                        <div className="group cursor-pointer">
                            <div className="h-28 rounded-2xl bg-emerald-500 shadow-lg shadow-emerald-500/20 flex items-end p-4 text-white transition-transform group-hover:-translate-y-1">
                                <span className="font-mono text-xs opacity-80">#10B981</span>
                            </div>
                            <div className="mt-3 px-1">
                                <p className="font-bold text-slate-900">Success Green</p>
                                <p className="text-xs text-slate-500">Estado "Disponible", Éxito</p>
                            </div>
                        </div>
                        {/* Error */}
                        <div className="group cursor-pointer">
                            <div className="h-28 rounded-2xl bg-rose-500 shadow-lg shadow-rose-500/20 flex items-end p-4 text-white transition-transform group-hover:-translate-y-1">
                                <span className="font-mono text-xs opacity-80">#F43F5E</span>
                            </div>
                            <div className="mt-3 px-1">
                                <p className="font-bold text-slate-900">Alert Rose</p>
                                <p className="text-xs text-slate-500">Errores, Borrar, Alertas</p>
                            </div>
                        </div>
                        {/* Background */}
                        <div className="group cursor-pointer">
                            <div className="h-28 rounded-2xl bg-slate-50 border border-slate-200 flex items-end p-4 text-slate-500 transition-transform group-hover:-translate-y-1">
                                <span className="font-mono text-xs opacity-80">#F8FAFC</span>
                            </div>
                            <div className="mt-3 px-1">
                                <p className="font-bold text-slate-900">Background</p>
                                <p className="text-xs text-slate-500">Fondos de página</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2.2 TIPOGRAFÍA */}
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                        <span className="flex items-center justify-center size-8 rounded-full bg-slate-900 text-white text-sm">2</span>
                        Tipografía & Jerarquía
                    </h3>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 grid md:grid-cols-2 gap-12">
                        <div>
                            <div className="mb-6">
                                <span className="text-xs font-bold text-blue-600 tracking-wider uppercase mb-1 block">Encabezados (Montserrat)</span>
                                <h1 className="text-5xl font-extrabold text-slate-900 mb-2">Heading 1</h1>
                                <h2 className="text-3xl font-bold text-slate-900 mb-2">Heading 2</h2>
                                <h3 className="text-xl font-semibold text-slate-900">Heading 3</h3>
                            </div>
                            <div>
                                <span className="text-xs font-bold text-blue-600 tracking-wider uppercase mb-1 block">Cuerpo (Inter)</span>
                                <p className="text-base text-slate-600 mb-3 leading-relaxed">
                                    <strong>Body Regular (16px):</strong> El texto principal debe ser legible y con buen contraste. Usamos Inter por su excelente legibilidad en pantallas.
                                </p>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    <strong>Body Small (14px):</strong> Usado para descripciones secundarias, metadatos en tarjetas y textos de ayuda en formularios.
                                </p>
                            </div>
                        </div>

                        {/* Ejemplo Visual: Modal vs Card */}
                        <div className="space-y-6">
                            {/* Card Example */}
                            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex gap-4 items-center">
                                <div className="size-16 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 text-xs font-mono">IMG</div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Departamento Centro</h4>
                                    <p className="text-sm text-slate-500">Cochabamba • 2 Hab</p>
                                    <p className="text-xs font-bold text-emerald-600 mt-1">,000</p>
                                </div>
                            </div>

                            {/* Modal Example */}
                            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-lg relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Confirmar Acción</h3>
                                <p className="text-sm text-slate-600 mb-4">¿Estás seguro de que deseas contactar al agente inmobiliario?</p>
                                <div className="flex gap-2 justify-end">
                                    <button className="text-xs font-semibold text-slate-500 px-3 py-1.5 hover:bg-slate-50 rounded">Cancelar</button>
                                    <button className="text-xs font-semibold text-white bg-blue-600 px-3 py-1.5 rounded hover:bg-blue-700">Confirmar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2.3 FORMULARIOS Y ERRORES */}
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                        <span className="flex items-center justify-center size-8 rounded-full bg-slate-900 text-white text-sm">3</span>
                        Formularios & Estados
                    </h3>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
                        <div className="grid md:grid-cols-2 gap-12">
                            
                            {/* Columna 1: Estados Normales */}
                            <div className="space-y-5">
                                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider border-b pb-2">Interacción Normal</h4>
                                
                                {/* Input Normal */}
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Nombre del Inmueble</label>
                                    <input 
                                        type="text" 
                                        placeholder="Ej: Casa de Lujo en Cala Cala" 
                                        className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                                    />
                                </div>

                                {/* Input Focus (Simulado visualmente) */}
                                <div>
                                    <label className="block text-sm font-medium text-blue-600 mb-1.5">Precio (Focus State)</label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-2.5 text-slate-500">$</span>
                                        <input 
                                            type="number" 
                                            defaultValue="150000"
                                            className="w-full pl-8 pr-4 py-2.5 border border-blue-500 rounded-xl text-slate-900 bg-white ring-4 ring-blue-500/10 outline-none"
                                        />
                                    </div>
                                    <p className="text-xs text-blue-600 mt-1.5 font-medium">El campo está activo y editándose.</p>
                                </div>
                            </div>

                            {/* Columna 2: Estados de Error */}
                            <div className="space-y-5">
                                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider border-b pb-2">Validación & Errores</h4>

                                {/* Input Error */}
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                                        Correo Electrónico <span className="text-rose-500">*</span>
                                    </label>
                                    <input 
                                        type="email" 
                                        defaultValue="correo-invalido@"
                                        className="w-full px-4 py-2.5 border border-rose-300 rounded-xl text-rose-900 bg-rose-50/10 placeholder-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all"
                                    />
                                    <div className="flex items-center gap-1.5 mt-1.5 text-rose-600">
                                        <div className="size-3.5 rounded-full bg-rose-600 text-white flex items-center justify-center text-[9px] font-bold">!</div>
                                        <p className="text-xs font-medium">Por favor ingrese un correo válido.</p>
                                    </div>
                                </div>

                                {/* Textarea Error */}
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Descripción</label>
                                    <textarea 
                                        className="w-full px-4 py-2.5 border border-slate-300 rounded-xl h-24 resize-none focus:border-slate-400"
                                        placeholder="Descripción corta..."
                                    ></textarea>
                                    <div className="flex justify-between mt-1">
                                        <p className="text-xs text-slate-400">Mínimo 20 caracteres.</p>
                                        <p className="text-xs text-slate-400">0/500</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>

        {/* SECCIÓN MAPA (Mantenida) */}
        <section className="bg-white p-1 rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="p-8 pb-0">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Vista de Mapa Interactiva</h3>
                <p className="text-slate-600 mb-6">Integración real con Leaflet para el Sprint 1.</p>
            </div>
            <div className="h-80 w-full bg-slate-100 relative">
                <LeafletMap />
            </div>
        </section>

      </main>

      <footer className="text-center py-12 mt-12 text-slate-500 border-t border-slate-200 bg-white">
        <div className="flex items-center justify-center gap-2 mb-4 opacity-50">
            <Layers3 className="size-5" />
            <span className="font-bold text-lg">ByteMafia</span>
        </div>
        <p className="text-sm">Propuesta de Diseño & Arquitectura - 7 de Marzo</p>
        <p className="text-xs mt-2">© 2024 ByteMafia Team</p>
      </footer>
    </div>
  );
}
