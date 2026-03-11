import React from 'react';

export default function TerminosPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-white p-10 rounded-2xl shadow-sm border border-zinc-200">
        <h1 className="text-4xl font-bold text-zinc-900 mb-8 border-b pb-4">Términos y Condiciones</h1>
        <div className="prose prose-lg max-w-none text-zinc-700">
          <p>
            Bienvenido a InDevs. Al utilizar nuestros servicios, aceptas los siguientes términos y condiciones. Por favor, léelos con atención.
          </p>
          
          <h2>1. Uso del Servicio</h2>
          <p>
            El uso de esta plataforma está destinado a la búsqueda y publicación de bienes inmuebles. Queda prohibido cualquier uso indebido, fraudulento o que vaya en contra de la ley.
          </p>

          <h2>2. Responsabilidad del Usuario</h2>
          <p>
            El usuario es el único responsable de la veracidad y exactitud de la información publicada. InDevs no se hace responsable por la información proporcionada por terceros.
          </p>

          <h2>3. Propiedad Intelectual</h2>
          <p>
            Todo el contenido de la plataforma, incluyendo logo, diseño y software, es propiedad de InDevs y está protegido por las leyes de propiedad intelectual.
          </p>

          <p className="mt-8 text-sm text-zinc-500">Última actualización: 11 de Marzo de 2026.</p>
        </div>
      </div>
    </main>
  );
}
