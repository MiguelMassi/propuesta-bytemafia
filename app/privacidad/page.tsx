import React from 'react';

export default function PrivacidadPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-white p-10 rounded-2xl shadow-sm border border-zinc-200">
        <h1 className="text-4xl font-bold text-zinc-900 mb-8 border-b pb-4">Políticas de Privacidad</h1>
        <div className="prose prose-lg max-w-none text-zinc-700">
          <p>
            En InDevs, tu privacidad es nuestra prioridad. Esta política describe qué información recopilamos y cómo la utilizamos.
          </p>
          
          <h2>1. Información que Recopilamos</h2>
          <p>
            Recopilamos información que nos proporcionas directamente, como tu nombre, correo electrónico y número de teléfono al registrarte o publicar un inmueble. También recopilamos datos de navegación para mejorar tu experiencia.
          </p>

          <h2>2. Uso de la Información</h2>
          <p>
            Utilizamos tu información para conectar a compradores con vendedores, personalizar tu experiencia y mejorar nuestros servicios. No compartimos tu información personal con terceros sin tu consentimiento, excepto cuando sea requerido por ley.
          </p>

          <h2>3. Seguridad</h2>
          <p>
            Implementamos medidas de seguridad robustas para proteger tu información contra el acceso no autorizado.
          </p>

          <p className="mt-8 text-sm text-zinc-500">Última actualización: 11 de Marzo de 2026.</p>
        </div>
      </div>
    </main>
  );
}
