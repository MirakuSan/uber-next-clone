'use client';

import mapboxgl from 'mapbox-gl';
import { useEffect, useRef } from 'react';
import tw from 'tailwind-styled-components';

type MapProps = {
  center: [number, number];
  zoom?: number;
  styleUrl?: string;
  className?: string;
};

const MapContainer = tw.div`
  flex-1
`;

export default function Map({
  center,
  zoom = 10,
  styleUrl = 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
  className = '',
}: MapProps) {
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoibWlyYWt1c2FuIiwiYSI6ImNtOXUyZTV3OTA1N3gycXI4dXY3ZmxieXUifQ.RTsrDFBJZ0UTvUdnfxS8Eg';
    
    if (mapContainerRef.current) {
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        center,
        zoom,
        style: styleUrl,
      });
    }
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, [center, zoom, styleUrl]);

  return <MapContainer ref={mapContainerRef} className={className} />;
} 
