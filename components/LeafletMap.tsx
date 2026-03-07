"use client";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Corrección para los iconos de Marker en Leaflet
// (Necesario porque Webpack rompe los iconos por defecto)
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/marker-icon-2x.png',
  iconUrl: '/marker-icon.png',
  shadowUrl: '/marker-shadow.png',
});

const cochabambaCoords = { lat: -17.3937, lng: -66.1570 }; // Cerca de la Plaza 14 de Sep

export default function LeafletMap() {
  return (
    <MapContainer 
      center={[cochabambaCoords.lat, cochabambaCoords.lng]} 
      zoom={15} 
      scrollWheelZoom={true} 
      className="h-full w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[cochabambaCoords.lat, cochabambaCoords.lng]}>
        <Popup>
          <strong>Inmueble de Ejemplo:</strong><br />
          Zona Central - Cochabamba
        </Popup>
      </Marker>
    </MapContainer>
  );
}