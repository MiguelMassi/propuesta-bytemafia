import React from 'react';

export default function SobreNosotrosPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-white p-10 rounded-2xl shadow-sm border border-zinc-200">
        <h1 className="text-4xl font-bold text-zinc-900 mb-8 border-b pb-4">Sobre Nosotros</h1>
        <div className="prose prose-lg max-w-none text-zinc-700">
          <p>
            Bienvenido a <strong>InDevs</strong>, tu plataforma de confianza para encontrar el inmueble perfecto. Nacimos con la misión de simplificar el proceso de compra, venta y alquiler de propiedades en Bolivia, utilizando tecnología de punta y un enfoque centrado en el usuario.
          </p>
          <p>
            Nuestro equipo está compuesto por profesionales apasionados por el sector inmobiliario y la innovación. Creemos que encontrar un hogar debe ser una experiencia emocionante y transparente, no un proceso complicado y estresante.
          </p>
          <p>
            En InDevs, nos esforzamos por ofrecerte:
          </p>
          <ul>
            <li>Un listado extenso y verificado de propiedades.</li>
            <li>Herramientas de búsqueda y filtrado avanzadas para que encuentres exactamente lo que necesitas.</li>
            <li>Información clara y detallada de cada inmueble.</li>
            <li>Un equipo de soporte listo para ayudarte en cada paso del camino.</li>
          </ul>
          <p>
            Gracias por confiar en nosotros. ¡Estamos aquí para ayudarte a encontrar tu próximo hogar!
          </p>
        </div>
      </div>
    </main>
  );
}
