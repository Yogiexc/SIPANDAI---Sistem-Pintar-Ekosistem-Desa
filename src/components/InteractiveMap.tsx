"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

interface InteractiveMapProps {
  currentWaste?: number;
  currentEconomy?: number;
}

// Fix standard marker icons for Leaflet in Next.js
const createCustomIcon = (color: string, glow: string, opacity: number = 1) => {
  return L.divIcon({
    className: "custom-leaflet-icon",
    html: `
      <div style="
        width: 22px; 
        height: 22px; 
        background: ${color}; 
        border-radius: 50%; 
        border: 2px solid white;
        box-shadow: 0 0 16px ${glow};
        opacity: ${opacity};
        animation: pulse ${2 - opacity}s infinite;
        transition: all 0.5s ease;
      "></div>
      <style>
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 ${glow}90; }
          70% { box-shadow: 0 0 0 14px transparent; }
          100% { box-shadow: 0 0 0 0 transparent; }
        }
      </style>
    `,
    iconSize: [22, 22],
    iconAnchor: [11, 11],
  });
};

export function InteractiveMap({ currentWaste = 100, currentEconomy = 50 }: InteractiveMapProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Dynamic Map Visuals based on Simulation Metrics
  const wasteOpacity = Math.min(0.6, Math.max(0.15, currentWaste / 150));
  const wasteRadius = Math.max(100, currentWaste * 4); 

  const ecoOpacity = Math.min(0.5, Math.max(0.15, currentEconomy / 150));
  const ecoRadius = Math.max(200, currentEconomy * 5);

  const envScore = 100 - currentWaste; 
  const envOpacity = Math.min(0.5, Math.max(0.15, envScore / 100));
  const envRadius = Math.max(150, envScore * 6);

  const wasteIcon = createCustomIcon("#ef4444", "#ef4444", wasteOpacity + 0.4); 
  const economyIcon = createCustomIcon("#3b82f6", "#3b82f6", ecoOpacity + 0.4); 
  const ecoIcon = createCustomIcon("#10b981", "#10b981", envOpacity + 0.4); 

  const MARKERS = [
    { id: 1, position: [-6.2088, 106.8456] as [number, number], title: "TPS Utama (Area Sampah)", type: "waste", icon: wasteIcon, stat: `${Math.round(currentWaste)} Ton` },
    { id: 2, position: [-6.9175, 107.6191] as [number, number], title: "Bank Sampah Unit 1", type: "economy", icon: economyIcon, stat: `Indeks: ${Math.round(currentEconomy)}` },
    { id: 3, position: [-7.2575, 112.7521] as [number, number], title: "Pemukiman Ramah Lingkungan", type: "eco", icon: ecoIcon, stat: envScore > 50 ? "Aktif" : "Perlu Optimasi" },
    { id: 4, position: [-8.4095, 115.1889] as [number, number], title: "Pusat Ekonomi Kreatif", type: "economy", icon: economyIcon, stat: "Sangat Berpotensi" },
  ];

  return (
    <div className="w-full h-full rounded-3xl overflow-hidden relative border border-white/10 shadow-[0_0_50px_rgba(16,185,129,0.1)] transition-all duration-1000">
      <div className="absolute inset-0 pointer-events-none z-[400] rounded-3xl shadow-[inset_0_0_120px_rgba(2,7,12,0.92)]" />
      
      <MapContainer 
        center={[-2.5, 118.0]} 
        zoom={5} 
        scrollWheelZoom={false}
        className="w-full h-full z-0 bg-[#02070c]"
        zoomControl={false}
      >
        {/* OpenStreetMap Tile Layer dengan Dark CSS Filter (100% Free, No Watermark, No API Key needed) */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          className="map-dark-tiles"
        />

        {/* Dynamic Simulation Zones */}
        <Circle 
          center={[-6.2088, 106.8456]} 
          pathOptions={{ color: '#ef4444', fillColor: '#ef4444', fillOpacity: wasteOpacity, className: 'transition-all duration-1000' }} 
          radius={wasteRadius * 100} 
        />
        <Circle 
          center={[-6.9175, 107.6191]} 
          pathOptions={{ color: '#3b82f6', fillColor: '#3b82f6', fillOpacity: ecoOpacity, className: 'transition-all duration-1000' }} 
          radius={ecoRadius * 100} 
        />
        <Circle 
          center={[-7.2575, 112.7521]} 
          pathOptions={{ color: '#10b981', fillColor: '#10b981', fillOpacity: envOpacity, className: 'transition-all duration-1000' }} 
          radius={envRadius * 100} 
        />

        {MARKERS.map((marker) => (
          <Marker key={marker.id} position={marker.position} icon={marker.icon}>
            <Popup className="custom-popup">
              <div className="bg-slate-900 border border-slate-700 p-3 rounded-xl shadow-xl">
                <h4 className="text-white font-semibold mb-1 text-xs">{marker.title}</h4>
                <div className="flex items-center gap-2 mt-2">
                  <span className="w-2 h-2 rounded-full" style={{ background: marker.type === 'waste' ? '#ef4444' : marker.type === 'economy' ? '#3b82f6' : '#10b981' }}></span>
                  <span className="text-slate-300 text-xs font-medium">{marker.stat}</span>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      
      <style dangerouslySetInnerHTML={{__html: `
        .map-dark-tiles {
          filter: brightness(0.55) invert(1) contrast(3) hue-rotate(200deg) saturate(0.28) !important;
        }
        .leaflet-popup-content-wrapper {
          background: transparent !important;
          box-shadow: none !important;
          padding: 0 !important;
        }
        .leaflet-popup-tip {
          background: #0f172a !important;
          border: 1px solid #334155 !important;
          border-top: none !important;
          border-left: none !important;
        }
        .leaflet-popup-content {
          margin: 0 !important;
        }
        .leaflet-container {
          background: #02070c !important;
        }
        path.leaflet-interactive {
          transition: all 1.5s ease-in-out;
        }
        .leaflet-control-attribution {
          background: rgba(2, 7, 12, 0.7) !important;
          color: #64748b !important;
          font-size: 10px !important;
        }
        .leaflet-control-attribution a {
          color: #94a3b8 !important;
        }
      `}} />
    </div>
  );
}
